# PEN&PAD terminology-driven input
SNOMED CT decides the options; outputs for openEHR and FHIR; optional local AI and speech in the browser

Made by Gunnar Nordqvist · [GitHub](https://github.com/gunnarnordqvist) · [LinkedIn](https://www.linkedin.com/in/gunnarnordqvist) · [books.geon.se](https://books.geon.se)  
**Live demo:** https://gunnarnordqvist.github.io/Hack/ · **Source:** https://github.com/gunnarnordqvist/Hack/tree/main/penpad-snomed

## Idea
The terminology decides, the model only suggests. The user types or dictates free text, or points at a body map. Candidate findings come from SNOMED CT ECL sets on a FHIR terminology server (HL7 Nordics `tx-nordics.fhir.org`), and the app asks only for the details a finding allows, for example side only when the body site is lateralizable. No code is ever invented by a model.

## What it does
- **Free text, Swedish or English.** Side, duration, severity, character, onset, pattern and progress are read from the text; the rest is matched to a finding.
- **Body map with close-ups** in the spirit of the original demo: front and back figure, hand, leg, back, and a cross-section of the head and neck (drawn for this project). The side you click becomes the patient's side. A *Whole body* button lists general symptoms (fever, cough, dizziness and so on).
- **Aspect of a site**, the body's counterpart of a tooth surface: anterior, posterior, medial, lateral, proximal, distal (SNOMED CT qualifier values).
- **Several findings, e.g. after a fall.** A list of findings, marked on the body, that can be saved to and opened from a file. One sentence such as "ont i armen, handen och huvudet" becomes one proposal per body part, each with its own side and values; every proposal must have its finding site inside its own body part (checked on the server), and nothing is added without a click.
- **Outputs from one selection or from the whole list:** a sentence (clinician or patient wording), a SNOMED CT expression (one role group per attribute, as in Erik Sundvall's extractor), an openEHR COMPOSITION (pattern, progression, consistency and both sides mapped as in his workbench) and a FHIR Condition (a Bundle with a demo Patient and Encounter for a list). What a target cannot hold is listed as unmapped.
- **Optional local AI in the browser** (off until you opt in): semantic search by meaning (`multilingual-e5-small`, in a Web Worker) and speech. Measured on the page itself, the right finding is among the first five in 83 % of our phrases against 58 % without it. Speech uses the device's own recognition where the browser has one (Apple's on iPhone and Mac; the vendor may receive the audio and the page says so) or a local Whisper model (weaker, the sound stays on the device).

## Experiment: EmbeddingGemma 2 in two steps
Following Erik's suggestion (speech picks the form, a second step fills it in), EmbeddingGemma 2 was measured on 60 own phrases. For picking the finding BioLORD (87 % in the first five) beat EmbeddingGemma 2 (72 %, weaker in Swedish); for filling in the answers the word list (F1 86) was not beaten, and with synonyms EmbeddingGemma 2 reaches it in English only. Report: `docs/eval-embeddinggemma2.md` in the source.

## Notes
- The public site holds no SNOMED CT content. Search words typed by a visitor go to the terminology server; a guard blocks text that looks like identity numbers, phone numbers, e-mail addresses, names (two capitalised words) or street addresses.
- The body figure is from an MIT-licensed package (the origin of the original artwork could not be verified, see THIRD_PARTY_NOTICES.md); the head cross-section is our own drawing.
- Prototype for made-up examples only: never enter real patient data. 88 unit tests, 37 Python tests and 65 browser checks (plus 21 for the optional local AI) pass; an English audit finds no Swedish text. The honest status of the quality gates is in `docs/build-record.yaml`: nothing has been reviewed by a person, the phrase sets were written by the same AI that built the code, and the local AI was not tested on real voices or on Apple's own recogniser.
- Limits: small self-written evaluation sets, a heuristic personal-data guard, our own body-word lists, the library for the local AI is loaded from a CDN without an integrity check, and a few ready-made SNOMED findings show an odd first site.
