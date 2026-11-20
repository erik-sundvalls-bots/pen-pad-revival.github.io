# QA report — Rector assertions (Principle 3)

Run: 2026-11-20T10:33:34.017Z · Snowstorm <your-snowstorm> (MAIN/SNOMEDCT-SE) · source: qa/rector-assertions.test.ts

| # | Kind | Assertion | Result | Detail |
|---|---|---|---|---|
| 1 | should | Every refinement row offered is sanctioned: MRCM/ECL for coded rows, or the archetype (information model) for text rows | OK | 13 rows |
| 2 | should | Every SNOMED CT code in form, mapping and EPS output is active and International or Swedish module | OK | 43 codes |
| 3 | should | Every Composition narrative lists all sections in Composition.section | OK | 9 sections |
| 4 | should | Every refinement combination has a template in every language (else a visible fallback) | OK | 158 combinations, missing {"sv":0,"nb":0,"da":0,"fi":0,"de":0,"en":0,"sv-enkel":0} |
| 5 | should | Switching view language does not change the coded record (hash before/after) | OK | 5f500240d341 |
| 6 | should | Patient-reported entries carry provenance and stay draft until a clinician confirms | OK | drafts API, FHIR Condition, openEHR comment |
| 7 | should not | No refinement row offers what MRCM or the archetype forbids (3 deliberate wrong options + MRCM domain check) | OK | 3/3 wrong options dropped; Severity not allowed on Hip region structure |
| 8 | should not | No language model is called during rendering | OK | 1106 renders, 0 network calls |
| 9 | should not | No files from the Clinergy dump are in the build output | OK | public/, generator/, model/, mapping/ clean |
| 10 | should | Every UI key exists in both sv and en, and no UI string is empty | OK | 133 keys per language; 49 clinical labels in sv.yaml and en.yaml; en = draft_unreviewed |
| 11 | should not | No Swedish UI text is hardcoded outside the dictionaries (negative control: an injected string must be caught) | OK | 7 UI files clean; negative control caught in public/index.html + public/clinician.js (3 hits); exempt: public/arne-engine.js + public/openehr.js (record content and template fallbacks, not UI), public/thumb.html + app.js + engine.js (legacy thumb regression fixture, not linked from either mode) |
| 12 | should | Switching UI language does not change the coded record (hash before/after) and calls no server | OK | sha256 f436c8bb9d16… unchanged after 6 switches; 0 network calls |
| 13 | should not | No language model is used for UI texts | OK | dictionaries are static literals; t() only reads them |
