# Finding: EPS 1.0.0-ballot does not allow Observation in the Functional status section

Source (verified 2026-11-19): package `hl7.fhir.eu.eps#1.0.0-ballot` from packages.fhir.org,
file `package/StructureDefinition-composition-eu-eps.json` (sha256 prefix `d10ea08a6520efc0`),
canonical `http://hl7.eu/fhir/eps/StructureDefinition/composition-eu-eps` version `1.0.0-ballot`, snapshot.
This is the same package our local validator (matchbox, `hl7.fhir.eu.eps` `1.0.0-ballot`) loads.

Slice `Composition.section:sectionFunctionalStatus` — "EPS Functional Status", cardinality 0..1,
`code` pattern LOINC `47420-5`.

Element `Composition.section:sectionFunctionalStatus.entry` (0..*), short:
"Optional entry used to represent disabilities and functional assessments", type `Reference` with
`targetProfile`:
- `http://hl7.org/fhir/StructureDefinition/Condition`
- `http://hl7.org/fhir/StructureDefinition/ClinicalImpression`
- `http://hl7.org/fhir/StructureDefinition/DocumentReference`

Slicing `$this.resolve()` by type, rules `open`, with named slices
`entry:disability` → `condition-eu-core` and `entry:functionalAssessment` → `ClinicalImpression`.
The open slicing does not widen the element's own `targetProfile`: an `Observation` (e.g. a scored
functional assessment such as Barthel) cannot be referenced from this section.

For comparison, `sectionResults.entry` allows Observation, DiagnosticReport, DocumentReference and
`sectionVitalSigns.entry` allows Observation, DocumentReference.

Consequence for PEN&PAD-26: Arne's functional status is sent as `Condition` resources
(categorised with 47420-5) referenced from section 47420-5. Measured functional scores would have to
go elsewhere (e.g. Results) or be wrapped in a ClinicalImpression — a gap worth raising with the EPS authors.
