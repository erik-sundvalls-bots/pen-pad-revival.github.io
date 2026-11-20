# Dynamic Clinical Documentation in Primary Care

## Prototype: Pre-filtered Infection Clinic – Acute Otitis Media Case

This proof of concept explores when dynamic, terminology-driven documentation can reduce documentation burden in primary care without unnecessarily constraining the clinical encounter.

The prototype is inspired by the PEN&PAD approach: instead of presenting the clinician with a large static form, the interface progressively presents clinically relevant documentation options based on the context already captured.

## What this prototype demonstrates

The current MVP uses a single acute otitis media case in a pre-filtered infection clinic.

The workflow is:

**Choose infection site → Refine clinical presentation → Targeted examination → Assessment and plan → Validate documentation**

The prototype demonstrates:

- progressive disclosure of relevant documentation options;
- capture of structured clinical information without displaying a large static form;
- separation between clinical findings and the clinician's assessment;
- generation of both structured data and a concise, human-readable clinical note from the same captured information;
- preservation of clinician control over diagnosis, treatment and follow-up.

A central design principle is:

> **One captured fact, multiple outputs, but no uncaptured facts.**

The generated clinical note must therefore not introduce information that the clinician has not entered or selected.

## Why an infection clinic?

The broader hypothesis is that the usefulness of dynamic structured documentation depends on the degree of clinical variability of the encounter.

### Low clinical variability
**Example: Routine child health visit**

Most required information is known in advance.

→ **Predefined structure may be sufficient**

### Bounded clinical variability ← THIS MVP
**Example: Pre-filtered infection clinic**

The clinical domain is known, but the relevant findings depend on what emerges during the encounter.

→ **Dynamic structure may provide substantial value**

### High clinical variability
**Example: Unselected general practice consultation**

The number, type and combination of problems are difficult to predict in advance.

→ **Free capture followed by selective structuring may be preferable**

The current prototype explores the **middle case**, where clinical variability is bounded enough for progressive, context-sensitive documentation to potentially reduce unnecessary choices.

## Key question

**Where is the point at which dynamic structure stops reducing cognitive and administrative load and starts constraining the clinical encounter?**

This MVP does not attempt to answer that question conclusively. It provides a small interactive prototype for exploring it.

## Important limitations

This is a hackathon proof of concept, not a clinical system.

It does not provide diagnostic or treatment decision support. Diagnosis, treatment and follow-up are entered by the clinician.

The current implementation demonstrates one simplified acute otitis media pathway only. It does not yet implement clinical terminology such as SNOMED CT or interoperability output such as openEHR or FHIR.

No real patient data are used.

## Screenshots

### 1. Choose infection site

![01-choose-infection-site.PNG](01-choose-infection-site.PNG)

### 2. Refine clinical presentation

![02-refine-clinical-presentation.PNG](02-refine-clinical-presentation.PNG)
### 3. Targeted ear examination

![03-targeted-ear-examination.PNG](03-targeted-ear-examination.PNG)

### 4. Clinical note and structured data

![04-clinical-note-and-structured-data.PNG](04-clinical-note-and-structured-data.PNG)

## Running the prototype

Download `index.html` and open it in a modern web browser.

No installation, server, database or external service is required.

## Contact

Marek Czajkowski, maroczajkowski@gmail.com

General practitioner, Avesta, Sweden
