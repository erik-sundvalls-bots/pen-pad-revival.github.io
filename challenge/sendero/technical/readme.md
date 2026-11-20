# Synthetic openEHR technical example

[Return to the submission](../readme.md)

This is a bounded engineering example, separate from the interview screenshots. It contains two **authored synthetic HADS subscale values** (10 and 6), not responses from a patient and not a recomputation of questionnaire items. It must not be used to infer a diagnosis.

## Included evidence

| File | What it establishes |
|---|---|
| [openehr-hads.synthetic.json](openehr-hads.synthetic.json) | Inspectable canonical RM JSON with a COMPOSITION root and an OBSERVATION containing the two subscales. |
| [validation.json](validation.json) | Fresh local validation of that exact example, performed while preparing this submission. |
| [atlas-roundtrip.recorded.json](atlas-roundtrip.recorded.json) | Recorded result of the prototype's earlier synthetic Atlas round-trip, including independent-client read-back. Its canonical digest was checked against the packaged example during submission preparation. No new remote write was needed for this package. |
| [verify_rm.py](verify_rm.py) | Standalone check of the pinned RM JSON schema, canonical digest and the example's bounded structure. It does not reproduce the local OPT validator or contact Atlas. |
| [screenshots-manifest.json](screenshots-manifest.json) | SHA-256 hashes and sizes of the submitted screenshots. |

## Information structure

```text
COMPOSITION (event; template hads_v0)
  context: start time and care setting
  composer: Synthetic rehearsal pharmacist
  OBSERVATION (subject: PARTY_SELF)
    HISTORY
      POINT_EVENT (time)
        ITEM_TREE
          ELEMENT at0150 -> DV_COUNT 10
          ELEMENT at0151 -> DV_COUNT 6
```

The actual JSON is authoritative for the node identifiers and labels. The example retains the prototype's Spanish language metadata (`es`) and its template's English display labels; neither was changed for this package. This mixed-language presentation is another reason to distinguish the technical rehearsal from a clinically qualified mapping. All submission documentation is in English. Altering the example would create a different composition and digest.

## Validation provenance

The Reference Model schema comes from the official [openEHR specifications-ITS-JSON repository](https://github.com/openEHR/specifications-ITS-JSON), pinned to commit `14387ce9191f228d768b6bade3308b79aaf87471`, path `components/openehr_rm_1.0.4_all.json`. The original schema is Apache-2.0 licensed. The validator additionally requires the root to be a COMPOSITION.

Schema SHA-256: `0bbbb0ecb42de6a750679e5c2d507bca6387da358d10afd361c2bcfb091ee594`.

The prototype also ran its local OPT constraint checker against its registered `hads_v0` template. Its exact template digest is in the validation result. The local clinical template and questionnaire definitions are not distributed in this screenshot submission; the OPT check is therefore a reported local result, not independently reproducible from these files alone.

The bounded profile checks include the two expected subscale nodes, integer values from 0 to 21, patient subject, template identity, event category, synthetic version identity and consistent timezone-aware times. Schema validation is only one layer of openEHR validation.

## Recheck the public example

With Python 3 and `jsonschema` installed, run from this directory:

```sh
python3 verify_rm.py
```

The script downloads only the pinned public schema, checks its hash, reads the local synthetic composition and reports the result. It does not require application credentials or send the composition to an external service.

## Qualification boundary

- `clinicalMappingReviewed`: **false**
- `fullRmConformanceCertified`: **false**
- `externalCdrRoundTrip`: **false**
- `nativeClinicalWrites`: **false** in the recorded rehearsal

An Atlas document round-trip demonstrates storage and retrieval of this representation. It does not demonstrate an openEHR REST API, AQL, contribution/version lifecycle implementation, terminology validation or acceptance by another vendor's CDR. The general interview's mapping drafts remain a separate qualification task.
