// Rector's Principle 3 (draft, p. 3): statements of what should and should not be true, run on every
// build so that fixed errors cannot come back. Run: `pnpm qa:rector` (pre-push hook and scripts/deploy.sh).
// Needs live Snowstorm (<lan-host>). Writes docs/qa-rector-report.md; exits 1 if any assertion is red.
import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createArne, parseYaml, LANGS, VIEW_LANGS } from '../public/arne-engine.js';
import { penpadSymptomFlat } from '../public/openehr.js';

const ROOT = new URL('..', import.meta.url).pathname;
const SNOW = process.env.SNOWSTORM_URL || '<your-snowstorm>';
const BRANCH = encodeURIComponent('MAIN/SNOMEDCT-SE');
const ALLOWED_MODULES = new Set(['900000000000207008', '45991000052106']); // International core, Swedish edition
const PORT = 18810;
const results: { id: number; kind: string; text: string; ok: boolean; detail: string }[] = [];
const check = async (id: number, kind: string, text: string, fn: () => Promise<string> | string) => {
  try { results.push({ id, kind, text, ok: true, detail: await fn() }); }
  catch (e: any) { results.push({ id, kind, text, ok: false, detail: String(e?.message || e) }); }
};
const must = (cond: unknown, msg: string) => { if (!cond) throw new Error(msg); };

const server = spawn(process.execPath, [ROOT + 'server.mjs'], { env: { ...process.env, PORT: String(PORT), SNOWSTORM_URL: SNOW, SNOWSTORM_BRANCH: 'MAIN/SNOMEDCT-SE', SNAPSHOT_DIR: '/tmp/penpad-qa-snap', EPS_PUBLISH: '0', OLLAMA_URL: 'http://127.0.0.1:9', DATA_DIR: '/tmp/penpad-qa-data' }, stdio: 'ignore' });
await new Promise(r => setTimeout(r, 800));
const base = `http://127.0.0.1:${PORT}`;
const get = async (u: string) => (await fetch(base + u)).json();
const sct = { ecl: (ecl: string, { limit = 50 } = {}) => get(`/api/sct/ecl?${new URLSearchParams({ ecl, limit: String(limit) })}`), attrs: (id: string) => get(`/api/sct/attrs?parentIds=${id}`) };
const snow = async (path: string) => (await fetch(SNOW + path, { headers: { 'Accept-Language': 'sv', Accept: 'application/json' } })).json();

const model = JSON.parse(readFileSync(ROOT + 'model/arne-scenario.json', 'utf8'));
const templates = Object.fromEntries(LANGS.map((l: string) => [l, parseYaml(readFileSync(`${ROOT}generator/templates/${l}.yaml`, 'utf8'))]));
const arne = createArne(model, templates, sct);
const st = await arne.init();
const original = JSON.parse(readFileSync(ROOT + 'model/fixtures/arne-complex-care.json', 'utf8'));
const F = [
  { topic: 'fracture', answers: { side: 'left', operated: 'yes' }, status: 'confirmed', reportedBy: 'clinician' },
  { topic: 'walking', answers: { aid: 'rollator', distance: 'indoor10' }, status: 'confirmed', reportedBy: 'clinician' },
  { topic: 'stairs', answers: { ability: 'unable' }, status: 'confirmed', reportedBy: 'clinician' },
  { topic: 'breathing', answers: { when: 'walking' }, status: 'confirmed', reportedBy: 'relative' },
  { topic: 'pain', answers: { side: 'left', severity: 'moderate' }, status: 'draft', reportedBy: 'patient' },
];
const eps = arne.epsBundle(original, F);

// ---------- should be true ----------
await check(1, 'should', 'Every refinement row offered is sanctioned: MRCM/ECL for coded rows, or the archetype (information model) for text rows', () => {
  must(st.sanctioned, 'Snowstorm did not answer every sanction query');
  let n = 0;
  for (const [tk, t] of Object.entries<any>(model.topics)) for (const q of t.questions) {
    const coded = q.options.filter((o: any) => o.concept);
    if (coded.length) { must(q.sanction, `${tk}.${q.key}: coded options without a sanction constraint`); must(!q.dropped, `${tk}.${q.key}: ${q.dropped}`); must(coded.every((o: any) => !o.unsanctioned), `${tk}.${q.key}: unsanctioned option`); }
    else must(q.role === 'text', `${tk}.${q.key}: uncoded row not marked as archetype/text`);
    n++;
  }
  return `${n} rows`;
});

await check(2, 'should', 'Every SNOMED CT code in form, mapping and EPS output is active and International or Swedish module', async () => {
  const ids = new Set<string>();
  for (const t of Object.values<any>(model.topics)) { ids.add(t.focus); t.site && ids.add(t.site); t.questions.forEach((q: any) => q.options.forEach((o: any) => o.concept && ids.add(o.concept))); }
  for (const m of readFileSync(ROOT + 'mapping/fma-to-snomed-arne.yaml', 'utf8').matchAll(/(?:snomed_site|laterality|snomed_lateralised): "(\d+)"/g)) ids.add(m[1]);
  for (const e of eps.entry) { const r = e.resource; if (r.resourceType !== 'Condition' || r.category?.[0]?.coding?.[0]?.code !== '47420-5') continue;
    for (const c of [...r.code.coding, ...(r.bodySite || []).flatMap((b: any) => b.coding), ...(r.evidence || []).flatMap((ev: any) => ev.code.flatMap((cc: any) => cc.coding))]) if (/^\d+$/.test(c.code)) ids.add(c.code); }
  const bad: string[] = [];
  for (const id of ids) { const c = await snow(`/browser/${BRANCH}/concepts/${id}`); if (!c.active || !ALLOWED_MODULES.has(c.moduleId)) bad.push(`${id} active=${c.active} module=${c.moduleId}`); }
  must(!bad.length, bad.join('; '));
  return `${ids.size} codes`;
});

await check(3, 'should', 'Every Composition narrative lists all sections in Composition.section', () => {
  const comp = eps.entry[0].resource;
  const listed = comp.text.div.match(/<td>Sections<\/td><td>([^<]*)<\/td>/)[1].split(', ');
  must(listed.length === comp.section.length, `narrative ${listed.length} vs sections ${comp.section.length}`);
  for (const s of comp.section) must(listed.includes(s.title), `missing ${s.title}`);
  return `${comp.section.length} sections`;
});

const MARK = /\[[^\]]*–[^\]]*\]/;
const combos = Object.entries<any>(model.topics).flatMap(([topic, t]) => t.questions.reduce(
  (acc: any[], q: any) => acc.flatMap(ans => [ans, ...q.options.map((o: any) => ({ ...ans, [q.key]: o.key }))]), [{}])
  .filter((a: any) => Object.keys(a).length).map((answers: any) => ({ topic, answers })));
await check(4, 'should', 'Every refinement combination has a template in every language (else a visible fallback)', () => {
  const missing = Object.fromEntries(LANGS.map((l: string) => [l, combos.filter(f => l !== 'sv-enkel' || model.patientTopics.includes(f.topic)).filter(f => MARK.test(arne.render(f, l))).length]));
  for (const l of VIEW_LANGS) must(missing[l] === 0, `${l}: ${missing[l]} without template`);
  return `${combos.length} combinations, missing ${JSON.stringify(missing)}`;
});

const hash = (o: unknown) => createHash('sha256').update(JSON.stringify(o)).digest('hex');
await check(5, 'should', 'Switching view language does not change the coded record (hash before/after)', () => {
  const before = hash(F); for (let i = 0; i < 3; i++) for (const l of VIEW_LANGS) arne.viewAs(F); const after = hash(F);
  must(before === after, 'record changed'); return before.slice(0, 12);
});

await check(6, 'should', 'Patient-reported entries carry provenance and stay draft until a clinician confirms', async () => {
  const post = (b: unknown) => fetch(base + '/api/drafts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b) });
  must((await post({ reportedBy: 'nurse', findings: [] })).status === 400, 'draft with unknown reporter accepted');
  const d = await (await post({ reportedBy: 'relative', status: 'confirmed', findings: [{ topic: 'stairs', answers: { ability: 'unable' } }] })).json();
  must(d.status === 'draft' && d.reportedBy === 'relative', 'server did not force status draft / keep provenance');
  const c = arne.condition({ topic: 'pain', answers: { side: 'left' }, status: 'draft', reportedBy: 'patient' }, { display: 'x' });
  must(c.verificationStatus.coding[0].code === 'provisional', 'patient draft not provisional'); must(/patient/.test(c.asserter?.display || ''), 'no asserter');
  const flat = penpadSymptomFlat(arne, [{ topic: 'pain', answers: {}, status: 'draft', reportedBy: 'relative' }]);
  must(Object.values(flat).some((v: any) => /utkast; rapporterat av: anhörig/.test(v)), 'openEHR comment lacks provenance');
  return 'drafts API, FHIR Condition, openEHR comment';
});

// ---------- should not be true ----------
await check(7, 'should not', 'No refinement row offers what MRCM or the archetype forbids (3 deliberate wrong options + MRCM domain check)', async () => {
  const bad = structuredClone(model);
  const add = (t: string, q: string, concept: string) => bad.topics[t].questions.find((x: any) => x.key === q).options.push({ key: 'BAD', concept });
  add('pain', 'side', '24484000');      // Severe (a severity) offered as laterality
  add('pain', 'severity', '7771000');   // Left (a laterality) offered as severity
  add('walking', 'aid', '5913000');     // Fracture of neck of femur (a disorder) offered as walking aid
  const b = createArne(bad, templates, sct); await b.init();
  const leaked = Object.entries<any>(bad.topics).flatMap(([tk, t]) => t.questions.flatMap((q: any) => q.options.filter((o: any) => o.key === 'BAD').map(() => `${tk}.${q.key}`)));
  must(!leaked.length, `wrong options survived: ${leaked}`);
  const dom = await sct.attrs('29836001');
  must(!dom.data.items.some((a: any) => a.conceptId === '246112005'), 'MRCM allows Severity on a body structure');
  return '3/3 wrong options dropped; Severity not allowed on Hip region structure';
});

await check(8, 'should not', 'No language model is called during rendering', () => {
  let calls = 0; const real = globalThis.fetch; globalThis.fetch = (async () => { calls++; throw new Error('no network'); }) as any;
  try { for (const f of combos) for (const l of LANGS) arne.render(f, l); for (const l of VIEW_LANGS) arne.viewAs(F); } finally { globalThis.fetch = real; }
  must(calls === 0, `${calls} network calls`);
  const src = readFileSync(ROOT + 'public/arne-engine.js', 'utf8');
  must(!/ollama|api\/llm/i.test(src), 'generator source references an LLM');
  return `${combos.length * LANGS.length} renders, 0 network calls`;
});

await check(9, 'should not', 'No files from the Clinergy dump are in the build output', () => {
  must(!existsSync(ROOT + 'vendor/clinergy-dump') || readFileSync(ROOT + 'scripts/deploy.sh', 'utf8').includes("--exclude 'vendor/clinergy-dump'"), 'dump present and not excluded from deploy');
  const hits: string[] = [];
  const walk = (d: string) => { for (const n of readdirSync(d)) { const p = `${d}/${n}`; if (/clinergy/i.test(n)) hits.push(p.slice(ROOT.length)); if (statSync(p).isDirectory()) walk(p); } };
  for (const d of ['public', 'generator', 'model', 'mapping']) walk(ROOT + d);
  must(!hits.length, hits.join(', '));
  return 'public/, generator/, model/, mapping/ clean';
});

// ---------- v0.9: UI language (SV | EN) ----------
import svDict, { review_status as svStatus } from '../public/i18n/sv.js';
import enDict, { review_status as enStatus } from '../public/i18n/en.js';

await check(10, 'should', 'Every UI key exists in both sv and en, and no UI string is empty', () => {
  const sk = Object.keys(svDict), ek = Object.keys(enDict);
  const missing = [...sk.filter(k => !(k in enDict)).map(k => `en lacks ${k}`), ...ek.filter(k => !(k in svDict)).map(k => `sv lacks ${k}`)];
  must(!missing.length, missing.join(', '));
  const empty = [...Object.entries(svDict), ...Object.entries(enDict)].filter(([, v]) => typeof v !== 'string' || !v.trim()).map(([k]) => k);
  must(!empty.length, `empty: ${empty}`);
  must(svStatus === 'source' && enStatus === 'draft_unreviewed', `review_status sv=${svStatus} en=${enStatus}`);
  // clinical UI labels from the templates (q./o./topic./region.) also exist in English, draft_unreviewed
  const lbl = (l: string) => Object.keys(templates[l]).filter(k => /^(q|o|topic|region)\./.test(k));
  const noEn = lbl('sv').filter(k => !(k in templates.en));
  must(!noEn.length, `en.yaml lacks ${noEn}`);
  must(templates.en.review_status === 'draft_unreviewed', 'en.yaml not draft_unreviewed');
  return `${sk.length} keys per language; ${lbl('sv').length} clinical labels in sv.yaml and en.yaml; en = draft_unreviewed`;
});

// Scanner for hardcoded Swedish UI text. UI files only; record content and the legacy thumb fixture are out of scope (see EXEMPT).
const UI_HTML = ['public/index.html', 'public/patient/index.html'];
const UI_JS = ['public/clinician.js', 'public/common.js', 'public/patient/patient.js', 'public/body3d.js', 'public/i18n/index.js'];
const EXEMPT = 'public/arne-engine.js + public/openehr.js (record content and template fallbacks, not UI), public/thumb.html + app.js + engine.js (legacy thumb regression fixture, not linked from either mode)';
const SV_WORDS = /[åäöÅÄÖ]|\b(och|inte|ej|eller|välj|visa|spara|skicka|tala|sparar|hittade|inget|ingen|kunde|kvittens|förslag|utkast|svarar|laddar|frågar|patienten|anhörig|kliniker|hej|nu)\b/i;
function hardcoded(files: { name: string; src: string }[]) {
  const hits: string[] = [];
  for (const { name, src } of files) {
    if (name.endsWith('.html')) {
      const body = src.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<!--[\s\S]*?-->/g, '');
      for (const m of body.matchAll(/\s(title|placeholder|aria-label|alt)="([^"]*)"/g)) if (/\p{L}/u.test(m[2])) hits.push(`${name}: ${m[1]}="${m[2]}"`);
      const text = body.replace(/<[^>]+>/g, ' ').replace(/&\w+;/g, ' ').split(/\s+/).filter(w => w && !/^(SV|EN|\||·|–|×)$/.test(w));
      for (const w of text) if (/\p{L}/u.test(w)) hits.push(`${name}: text "${w}"`);
    } else {
      src.split('\n').forEach((line, i) => {
        if (line.includes('i18n-exempt')) return;
        const code = line.replace(/(^|\s)\/\/.*$/, '');
        for (const m of code.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`/g)) {
          const lit = (m[1] ?? m[2] ?? m[3]).replace(/\$\{[^}]*\}/g, ' ');
          if (SV_WORDS.test(lit)) hits.push(`${name}:${i + 1}: ${JSON.stringify(lit)}`);
        }
      });
    }
  }
  return hits;
}
await check(11, 'should not', 'No Swedish UI text is hardcoded outside the dictionaries (negative control: an injected string must be caught)', () => {
  const files = [...UI_HTML, ...UI_JS].map(name => ({ name, src: readFileSync(ROOT + name, 'utf8') }));
  const hits = hardcoded(files);
  must(!hits.length, hits.slice(0, 8).join(' ; '));
  // negative control: the same scanner must fail on a deliberately injected hardcoded string, in JS and in HTML
  const injected = files.map(f => f.name === 'public/clinician.js' ? { ...f, src: f.src + "\nh('p', {}, 'Spara nu');\n" }
    : f.name === 'public/index.html' ? { ...f, src: f.src.replace('<main>', '<main><p>Hej Arne</p>') } : f);
  const caught = hardcoded(injected);
  const where = [...new Set(caught.map(c => c.split(':')[0]))];
  must(where.length === 2 && where.includes('public/clinician.js') && where.includes('public/index.html'), `negative control not caught in both files: ${caught.join(' ; ')}`);
  return `${files.length} UI files clean; negative control caught in ${where.join(' + ')} (${caught.length} hits); exempt: ${EXEMPT}`;
});

await check(12, 'should', 'Switching UI language does not change the coded record (hash before/after) and calls no server', async () => {
  // Minimal DOM stand-ins: the switch relabels the page only.
  (globalThis as any).document = { documentElement: {}, body: { dataset: {} }, querySelectorAll: () => [], getElementById: () => null };
  const i18n = await import('../public/i18n/index.js');
  let calls = 0; const real = globalThis.fetch; globalThis.fetch = (async () => { calls++; throw new Error('no network'); }) as any;
  const record = () => hash({ F, view: arne.viewAs(F), flat: Object.fromEntries(Object.entries(penpadSymptomFlat(arne, F)).filter(([k]) => !/time$/.test(k))) });
  const before = record();
  const relabel = () => { for (const [tk, t] of Object.entries<any>(model.topics)) { arne.topicLabel(i18n.uiLang(), tk); for (const q of t.questions) { arne.qLabel(i18n.uiLang(), tk, q.key); q.options.forEach((o: any) => arne.oLabel(i18n.uiLang(), tk, q.key, o)); } } Object.keys(svDict).forEach(k => i18n.t(k)); };
  i18n.onLang(relabel);
  try { for (let i = 0; i < 3; i++) { i18n.setLang('en'); i18n.setLang('sv'); } } finally { globalThis.fetch = real; }
  const after = record();
  must(before === after, 'coded record changed');
  must(calls === 0, `${calls} network calls during language switch`);
  return `sha256 ${before.slice(0, 12)}… unchanged after 6 switches; 0 network calls`;
});

await check(13, 'should not', 'No language model is used for UI texts', () => {
  for (const f of ['public/i18n/sv.js', 'public/i18n/en.js', 'public/i18n/index.js']) {
    const src = readFileSync(ROOT + f, 'utf8');
    must(!/ollama|api\/llm|fetch\s*\(|XMLHttpRequest|import\s*\(/i.test(src), `${f} reaches out for text`);
  }
  must(!/import .* from/.test(readFileSync(ROOT + 'public/i18n/sv.js', 'utf8') + readFileSync(ROOT + 'public/i18n/en.js', 'utf8')), 'dictionaries import code');
  return 'dictionaries are static literals; t() only reads them';
});

server.kill();
const when = new Date().toISOString();
const lines = ['# QA report — Rector assertions (Principle 3)', '', `Run: ${when} · Snowstorm ${SNOW} (MAIN/SNOMEDCT-SE) · source: qa/rector-assertions.test.ts`, '',
  '| # | Kind | Assertion | Result | Detail |', '|---|---|---|---|---|',
  ...results.map(r => `| ${r.id} | ${r.kind} | ${r.text} | ${r.ok ? 'OK' : 'FEL'} | ${r.detail.replace(/\|/g, '/')} |`)];
writeFileSync(ROOT + 'docs/qa-rector-report.md', lines.join('\n') + '\n');
for (const r of results) console.log(`${r.ok ? 'OK ' : 'FEL'} ${r.id} ${r.text} — ${r.detail}`);
process.exit(results.every(r => r.ok) ? 0 : 1);
