# Earlier Sendero screenshots

[Return to the briefing](readme.md) · [Current consultation walkthrough](gallery.md)

Screenshots supplied for the bonus-track submission, captured on 20 November 2026. The five selected registry views below show the connection between historical evidence and an interview. The earlier walkthrough follows separately. Registry views use pseudonymous identifiers and show selected historical values; hospital scenarios are explicitly synthetic. Original CSVs and chat exports are not included.

## Selected views: evidence that supports an interview

### From this person's history to optional questions

Reported changes in anxiety, mood and stigma are linked to questions the pharmacist can explore, defer or dismiss. The capture shows imported history under a pseudonymous identifier. A historical score is context for a conversation, not an automatically selected answer or a diagnosis.

![From this person's history to optional questions](screenshots/R03-prepare-interview-evidence.png)

### Use comparable histories to offer another topic

The cards show later observations available for 5 of 20 compared people and propose optional topics. These counts show follow-up availability among compared people, not a success rate or a probability of this person developing a problem. Matching uses earlier observations; missing follow-up is not improvement.

![Use comparable histories to offer another topic](screenshots/R05-learning-from-similar-pathways.png)

### Bring wider clinical context into the assessment

A clearly labelled synthetic hospital scenario distinguishes recorded prescriptions from actual medication use and an unverified reported reaction from an established allergy. The pharmacist can clarify these during the interview. These hospital facts are authored examples, not imported clinical facts about the person whose PROM history is shown.

![Bring wider clinical context into the assessment](screenshots/R11-medication-and-allergies.png)

### Inspect why two pathways were compared

The same reported feature is plotted relative to each index assessment, with baseline, latest value, change and days observed. The displayed similarity score is descriptive, not predictive. This selected comparator has no later observation in the displayed follow-up window; other comparators can contribute to the aggregate cards.

![Inspect why two pathways were compared](screenshots/R14b-pathway-comparison-chart.png)

### Make the mechanism and its limits inspectable

The explanation connects source-linked history, versioned semantic mappings, optional interview topics, earlier-pathway matching and separate follow-up windows. Displayed counts describe the loaded projection at capture time, not a prospective pilot sample. The panel also separates running capabilities from pending Agent Engine, terminology and native openEHR publication work.

![Make the mechanism and its limits inspectable](screenshots/R17-one-interview-many-histories.png)

## Earlier walkthrough: a new encounter and model exploration

These earlier captures include synthetic evidence, empty-history and no-match states. They remain useful for showing a new encounter, progressive refinement and confirmation; they are not evidence that the populated registry views above are empty.

### Select a person

Identifier-based selection and entry into an encounter. The screenshot shows the demonstration list, not the size of the underlying NAVETA cohort.

![Select a person](screenshots/01-patient-list.png)

### History and PROM workspace

This capture explicitly has no historical sources loaded and no repeated numeric series. It shows the empty state, not imported longitudinal clinical evidence.

![History and PROM workspace](screenshots/02-history-and-proms.png)

### Target a concern

A broad opening question and answer buttons coexist with access to other assessment topics. Guided mode is optional.

![Target a concern](screenshots/03-guided-first-question.png)

### Relate a concern to evidence

A rest concern is shown beside a synthetic score-history card. Its illustrative values must not be interpreted as validated raw questionnaire item scores.

![Relate a concern to evidence](screenshots/04-evidence-and-follow-up.png)

### Refine the description

A sleep difficulty leads to duration and further details while preserving the developing account and the path into the question.

![Refine the description](screenshots/05-deeper-pathway.png)

### Offer answers without supplying them

Medication-taking options and descriptive response frequencies are visible. Frequencies describe the displayed aggregate; they are not a probability that this individual will give a particular answer.

![Offer answers without supplying them](screenshots/06-likely-answers-medication.png)

### Target by location

The physical-concern fragment supports body-region selection as another entry point into refinement.

![Target by location](screenshots/07-body-map.png)

### Confirm the intended account

The professional reviews the narrative and selected answers. The visible mapping-draft label is important: confirming this interview does not certify a native openEHR export.

![Confirm the intended account](screenshots/09-review-and-confirm.png)

### Keep evidence beside the interview

Synthetic evidence cards can be explored, deferred or marked irrelevant. No comparable pathways are returned in this capture.

![Keep evidence beside the interview](screenshots/10-evidence-similar-pathways.png)

### Represent missing hospital context explicitly

The hospital history view is empty in this capture. It does not demonstrate a live connection to medication, admission or laboratory systems.

![Represent missing hospital context explicitly](screenshots/11-clinical-record.png)

### Browse the concept hierarchy

The layered graph displays general-to-specific paths and multiple inheritance in the authored assessment taxonomy. It is not a complete medical terminology.

![Browse the concept hierarchy](screenshots/12-ontology-graph.png)

### Inspect a selected concept

The inspector connects an assessment type to its parents, children and reusable fragments.

![Inspect a selected concept](screenshots/13-ontology-node-detail.png)

### Separate hierarchy from mappings

Optional layers expose fragments and source or record bindings. These relations are distinct from subtype relationships.

![Separate hierarchy from mappings](screenshots/13b-ontology-with-layers.png)

### Search candidate evidence

The evidence-search controls are shown before results. This capture uses the local words-and-concepts mode and does not itself demonstrate Atlas/Voyage retrieval.

![Search candidate evidence](screenshots/14-research-pathways.png)

### Show a no-match result honestly

The pathway view reports zero eligible matches in the displayed comparison. It demonstrates the no-match state, not a successful discovery or a clinical outcome prediction.

![Show a no-match result honestly](screenshots/14b-research-similar-pathways.png)
