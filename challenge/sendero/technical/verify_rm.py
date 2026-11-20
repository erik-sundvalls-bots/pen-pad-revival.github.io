"""Recheck the published synthetic example; no application credentials required."""
import hashlib
import json
from datetime import datetime
from pathlib import Path
from urllib.request import urlopen
from jsonschema import Draft7Validator

ROOT = Path(__file__).resolve().parent
COMMIT = '14387ce9191f228d768b6bade3308b79aaf87471'
SHA256 = '0bbbb0ecb42de6a750679e5c2d507bca6387da358d10afd361c2bcfb091ee594'
URL = f'https://raw.githubusercontent.com/openEHR/specifications-ITS-JSON/{COMMIT}/components/openehr_rm_1.0.4_all.json'

def main():
    with urlopen(URL, timeout=30) as response:
        raw = response.read()
    assert hashlib.sha256(raw).hexdigest() == SHA256, 'Schema digest mismatch'
    schema = json.loads(raw)
    schema['allOf'].append({'properties': {'_type': {'const': 'COMPOSITION'}}})
    Draft7Validator.check_schema(schema)
    composition = json.loads((ROOT/'openehr-hads.synthetic.json').read_text())
    Draft7Validator(schema).validate(composition)
    digest = hashlib.sha256(json.dumps(composition, ensure_ascii=False, sort_keys=True, separators=(',', ':'), allow_nan=False).encode()).hexdigest()
    assert digest == json.loads((ROOT/'validation.json').read_text())['canonicalDigest']
    assert digest == json.loads((ROOT/'atlas-roundtrip.recorded.json').read_text())['canonicalDigest']
    assert composition['archetype_details']['template_id']['value'] == 'hads_v0'
    assert composition['category']['defining_code']['code_string'] == '433'
    observation = composition['content'][0]
    assert observation['_type'] == 'OBSERVATION'
    assert observation['subject']['_type'] == 'PARTY_SELF'
    history = observation['data']
    event = history['events'][0]
    times = [composition['context']['start_time']['value'], history['origin']['value'], event['time']['value']]
    assert len(set(times)) == 1 and all(datetime.fromisoformat(t).tzinfo for t in times)
    items = event['data']['items']
    assert len(items) == 2 and {i['archetype_node_id'] for i in items} == {'at0150', 'at0151'}
    assert all(i['value']['_type'] == 'DV_COUNT' and type(i['value']['magnitude']) is int and 0 <= i['value']['magnitude'] <= 21 for i in items)
    print('PASS: pinned RM schema, canonical digest, and bounded example structure.')
    print('Not checked here: local OPT constraints, full RM invariants, terminology, clinical approval, or external CDR interoperability.')

if __name__ == '__main__':
    main()
