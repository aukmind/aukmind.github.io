"""Switzerland, used by `update_communes.py ch`: ch/communes.js and the DATA lines of ch/salary.js and ch/inheritance.js,
from the ESTV tax calculator's exports.

build_ch(tmpdir) -> communes.js text (every commune with its canton, communal and church multipliers).
build_ch_data(tmpdir) -> the `const DATA = {...};` line for ch/salary.js (federal and cantonal scales and deductions).
splice_ch_data(salary_js_text, line) -> salary.js text with that line replaced.

Downloads go to tmpdir; nothing here is executed from it. The quirks (QUIRKS, FAMILY) are not in the ESTV exports:
they were fitted against the ESTV calculator and the BSV family allowance table, so re-check them each year.
"""
import json
import os
import re
import urllib.request

YEAR = 2026
API = 'https://swisstaxcalculator.estv.admin.ch/delegate/ost-integration/v1/lg-proxy/operation/c3b67379_ESTV/'
CANTON_IDS = {'AG': 1, 'AI': 2, 'AR': 3, 'BE': 4, 'BL': 5, 'BS': 6, 'FR': 7, 'GE': 8, 'GL': 9, 'GR': 10, 'JU': 11, 'LU': 12, 'NE': 13,
              'NW': 14, 'OW': 15, 'SG': 16, 'SH': 17, 'SO': 18, 'SZ': 19, 'TG': 20, 'TI': 21, 'UR': 22, 'VD': 23, 'VS': 24, 'ZG': 25, 'ZH': 26}

# Modest-income deduction tables (ESTV deduction scales), by role.
STEP_TABLES = {'FR': {'single': '1667566344', 'family': '1667641399'}, 'NE': {'single': '1701251161', 'family': '1701251169'},
               'SH': {'single': '1687931436', 'family': '1687931443'}, 'VS': {'single': '1736403588'}, 'AG': {'single': '180', 'family': '180'}}

# Rules the ESTV calculator applies that its exports don't carry. Fitted on the 2026 calculator.
QUIRKS = {
    'ZH': {'personal': [24, 24]},
    'BE': {'zusMarried': True, 'zvSum': True, 'parentSingle': True,
           'relief': {'full': {'single': 1100, 'married': 2200, 'parent': 1700, 'kid': 600}, 'T': {'single': 24000, 'married': 31700}, 'kidT': 8800, 'W': {'single': 16000, 'other': 25000}}},
    'LU': {'personal': [50, 0], 'relief': {'rate': 0.14, 'T': {'single': 50400, 'married': 80700}}},
    'UR': {'personal': [70, 0]},
    'SZ': {'parentSingle': True, 'relief': {'rate': 0.3, 'T': {'single': 35000, 'married': 70000, 'parent': 35000}, 'kid': 25000}},
    'OW': {'relief': {'rate': 0.1, 'T': {'single': 50000, 'married': 75000, 'marriedKids': 100000, 'parent': 100000}}},
    'NW': {'personal': [50, 0]},
    'GE': {'personal': [25, 0], 'canMul': 0.88, 'canAdd': 0.01},
    'BL': {'simpleKid': 750},
    'NE': {'cantonKid': 200, 'stepBase': 'netProf', 'stepsParentSingle': True},
    'SH': {'personal': [60, 0], 'creditKid': 320},
    'SO': {'personal': [50, 50]},
    'TG': {'creditKid': 100},
    'TI': {'personal': [20, 20]},
    'VD': {'canMul': 0.95, 'simpleCap': 0.13289,
           'quot': {'single': 1, 'married': 1.8, 'parent': 1.3, 'kid': 0.5, 'cap': 22180, 'capFirst': 43000},
           'relief': {'rate': 0.5, 'full': {'single': 17000, 'married': 22700, 'parent': 23700, 'kid': 3500}},
           'rent': {'share': 0.25, 'pct': 1, 'minus': 0.2, 'max': 6800, 'flat': {'single': 11100, 'family': 13700, 'kid': 3700}},
           'famPhase': {'from': 126400, 'to': 164200, 'step': 2000, 'cut': 100}},
    'VS': {'personal': [24, 0], 'churchOnCanton': True, 'idx': 2.0071, 'idxGem': 2.0657, 'rebate': {'rate': 0.35, 'min': 680, 'max': 4900}, 'cantonKid': 300, 'cantonMin': 10},
    'JU': {'churchOnCanton': True},
    'FR': {'kidPhase': {'from': 67000, 'step': 5000, 'cut': 500}},
    'AG': {'stepBase': 'all'},
    'ZG': {'rent': {'share': 0.25, 'pct': 0.3, 'minus': 0, 'max': 10800}},
}

# BSV "Arten und Ansätze der Familienzulagen 2026": child allowance a month for a child under 12 (first two, from the third),
# employer FAK rate incl. the other levies the FAK collects (table 2), employee levies (VS, VD, SH).
FAMILY = {
    'ZH': [215, 215, 1.125, 0], 'BE': [250, 250, 1.5, 0], 'LU': [215, 215, 1.355, 0], 'UR': [240, 240, 1.7, 0], 'SZ': [230, 230, 1.3, 0],
    'OW': [220, 220, 1.4, 0], 'NW': [258, 258, 1.5, 0], 'GL': [215, 215, 1.4, 0], 'ZG': [330, 330, 1.35, 0], 'FR': [265, 285, 2.35, 0],
    'SO': [215, 215, 1.25, 0], 'BS': [275, 275, 1.65, 0], 'BL': [215, 215, 1.3, 0], 'SH': [230, 230, 1.38, 0.04], 'AR': [230, 230, 1.6, 0],
    'AI': [245, 245, 1.6, 0], 'SG': [245, 245, 1.8, 0], 'GR': [240, 240, 1.5, 0], 'AG': [225, 225, 1.45, 0], 'TG': [215, 215, 1.4, 0],
    'TI': [215, 215, 1.9, 0], 'VD': [322, 365, 2.71, 0.09], 'VS': [327, 435, 2.78, 0.131], 'NE': [240, 270, 2.487, 0],
    'GE': [311, 411, 2.372, 0], 'JU': [275, 275, 2.85, 0],
}


def _post(op, body, path):
    if not os.path.exists(path):
        req = urllib.request.Request(API + op, data=json.dumps(body).encode(), headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=600) as r, open(path, 'wb') as f:
            f.write(r.read())
    with open(path, encoding='utf-8') as f:
        return json.load(f)['response']


def _rates(tmpdir):
    return _post('API_exportManySimpleRates', {'TaxYear': YEAR, 'TaxGroupID': 99}, os.path.join(tmpdir, 'rates.json'))


def build_ch(tmpdir):
    rows = []
    for x in _rates(tmpdir):
        loc = x['Location']
        rows.append([loc['City'], loc['Canton'], _num(x['IncomeRateCity']), _num(x['IncomeRateRoman']), _num(x['IncomeRateProtestant'])])
    names = [r[0] for r in rows]
    assert len(names) == len(set(names)), 'commune names are no longer unique'
    rows.sort(key=lambda r: (r[1], r[0]))
    return ('// Swiss communes for ' + str(YEAR) + ': [name, canton, communal multiplier %, Roman Catholic %, Reformed %].\n'
            '// Generated from the ESTV tax calculator (API_exportManySimpleRates) by update_communes.py ch.\n'
            'window.COMMUNES = ' + json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + ';\n')


def _num(v):
    return int(v) if float(v).is_integer() else round(v, 6)


F = r'[-+]?\d+(?:\.\d+)?'


def _formula(f):
    f = f.replace(' ', '')
    m = re.fullmatch(rf'({F})\*\$wert\$\+({F})\*\$wert\$\*\(log\$wert\$-1\)\+\(?({F})\)?', f)
    if m:
        return [float(m[1]), float(m[2]), float(m[3])]
    m = re.fullmatch(rf'({F})\+({F})\*\(\$wert\$-({F})\)', f)
    if m:
        return [float(m[2]), 0, round(float(m[1]) - float(m[2]) * float(m[3]), 4)]
    m = re.fullmatch(rf'({F})\*\$wert\$/100', f)
    if m:
        return [float(m[1]) / 100, 0, 0]
    raise ValueError('unknown ESTV formula: ' + f)


def build_ch_data(tmpdir):
    canton_rate = {}
    for x in _rates(tmpdir):
        canton_rate.setdefault(x['Location']['Canton'], _num(x['IncomeRateCanton']))
    fed, fed_ded, cantons = [], None, {}
    for can, i in CANTON_IDS.items():
        body = {'TaxYear': YEAR, 'TaxGroupID': i}
        sc = _post('API_exportManyTaxScales', body, os.path.join(tmpdir, f'scales-{i}.json'))
        de = _post('API_exportManyDeductions', body, os.path.join(tmpdir, f'ded-{i}.json'))
        ds = _post('API_exportManyDeductionScales', body, os.path.join(tmpdir, f'dscales-{i}.json'))
        first = sc[0]['Location']['BfsID']
        scales = {'KANTON': [], 'GEMEINDE': []}
        for x in sc:
            if x['Location']['BfsID'] != first or x['TaxType'] != 'EINKOMMENSSTEUER':
                continue
            rows = [[_num(r['Amount']), _num(r['Percent']), _num(r['Taxes'])] + ([_formula(r['Formula'])] if r['Formula'] else []) for r in x['Table']]
            e = {'g': x['Group'], 't': x['TableType'], 's': _num(x['Splitting']), 'r': rows}
            if x['Target'] == 'BUND':
                if not any(f['g'] == e['g'] for f in fed):
                    fed.append(e)
            else:
                scales[x['Target']].append(e)
        ded = {}
        for x in de:
            if x['Location']['BfsID'] == first and x['TaxType'] == 'EINKOMMENSSTEUER':
                ded[x['Target']] = {r['Name']['ID'].replace('_EK', ''): [r['Format'], _num(r['Amount']), _num(r['Percent']), _num(r['Minimum']), _num(r['Maximum'])] for r in x['Table']}
        assert fed_ded is None or fed_ded == ded['BUND'], can
        fed_ded = ded['BUND']
        x = dict(QUIRKS.get(can, {}))
        if can in STEP_TABLES:
            x['steps'] = {}
            for role, sid in STEP_TABLES[can].items():
                t = next(d for d in ds if d['Location']['BfsID'] == ds[0]['Location']['BfsID'] and d['Name']['ID'] == 'ABZUG_TABELLE_' + sid)
                x['steps'][role] = [[_num(r['Amount']), _num(r['Taxes'])] for r in t['Table']]
        fz = FAMILY[can]
        cantons[can] = {'k': scales['KANTON'], 'gem': scales['GEMEINDE'], 'ded': ded['KANTON'], 'x': x, 'rate': canton_rate[can],
                        'fz': fz[:2], 'fak': fz[2:]}
    data = {'fed': fed, 'fedDed': fed_ded, 'fedKid': 263, 'cantons': cantons}
    return 'const DATA = ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';'


def splice_ch_data(js, line):
    out, n = re.subn(r'^  const DATA = .*;$', '  ' + line, js, count=1, flags=re.M)
    assert n == 1, 'DATA line not found'
    return out


# Inheritance: the ESTV inheritance calculator in each cantonal capital, tabulated on a grid of amounts.
CAPITALS = {'ZH': 261, 'BE': 351, 'LU': 1061, 'UR': 1201, 'SZ': 1372, 'OW': 1407, 'NW': 1509, 'GL': 1632, 'ZG': 1711, 'FR': 2196, 'SO': 2601,
            'BS': 2701, 'BL': 2829, 'SH': 2939, 'AR': 3001, 'AI': 3101, 'SG': 3203, 'GR': 3901, 'AG': 4001, 'TG': 4566, 'TI': 5002,
            'VD': 5586, 'VS': 6266, 'NE': 6458, 'GE': 6621, 'JU': 6711}
RELS = {'partner': 'TYP_EHEPARTNER_EHEPARTNER', 'child': 'TYP_KINDER_KINDER', 'grandchild': 'TYP_KINDER_NACHKOMMENKINDER',
        'parent': 'TYP_ELTERN_ELTERN', 'sibling': 'TYP_GESCHWISTER_GESCHWISTER', 'nephew': 'TYP_ONKELTANTEN_NEFFEN',
        'cohab': 'TYP_PARTNER_LEBENSPARTNER', 'stepchild': 'TYP_KINDER_STIEFKINDER', 'other': 'TYP_UEBRIGE_UEBRIGE'}
AMOUNTS = [1000, 2000, 3000, 5000, 7500, 10000, 12500, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 60000, 75000, 90000,
           100000, 125000, 150000, 175000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 600000, 750000, 875000, 1000000,
           1250000, 1500000, 1750000, 2000000, 2500000, 3000000, 3500000, 4000000, 5000000, 6000000, 7500000, 10000000, 20000000]


def _inh(tmpdir, loc, amount):
    body = {'SimKey': None, 'TaxYear': YEAR, 'TaxGroupID': loc, 'OnlyGroupID': 0, 'OnlyPersonID': 0, 'Donation': False, 'Amount': amount}
    return _post('API_calculateManyInheritanceTaxes', body, os.path.join(tmpdir, f'inh-{loc}-{amount}.json'))


def build_ch_inherit(tmpdir):
    locs = {x['Location']['Canton']: x['Location']['TaxLocationID'] for x in _rates(tmpdir) if CAPITALS.get(x['Location']['Canton']) == x['Location']['BfsID']}
    out = {}
    for can, loc in sorted(locs.items()):
        print('inheritance', can, flush=True)
        first = {r['Person']: r for r in _inh(tmpdir, loc, 500000)}
        rels = {k: first[p] for k, p in RELS.items()}
        # Grid points at each allowance and exemption limit too, where the tax starts.
        extra = {v for r in rels.values() for v in (r['Deduction'], r['LowerLimit']) if v > 0}
        grid = sorted(set(AMOUNTS) | extra)
        rows = {a: {r['Person']: r for r in _inh(tmpdir, loc, a)} for a in grid}
        tax_at = lambda a, p: rows[a][p]['TaxCanton'] + rows[a][p]['TaxCity']
        keep = set(grid)
        # Some cantons tax the whole amount at a rate set by its band, so the tax jumps: bisect until the midpoint is on the line.
        todo = list(zip(grid, grid[1:]))
        while todo:
            lo, hi = todo.pop()
            mid = (lo + hi) // 2
            if hi - lo < 200 or mid in rows:
                continue
            rows[mid] = {r['Person']: r for r in _inh(tmpdir, loc, mid)}
            if any(abs(tax_at(mid, p) - (tax_at(lo, p) + tax_at(hi, p)) / 2) > max(20, .001 * mid) for p in RELS.values()):
                keep.add(mid)
                todo += [(lo, mid), (mid, hi)]
        grid = sorted(keep)
        data = {}
        for k, p in RELS.items():
            r = rels[k]
            tot = [round(rows[a][p]['TaxCanton'] + rows[a][p]['TaxCity'], 2) for a in grid]
            city = [round(rows[a][p]['TaxCity'], 2) for a in grid]
            data[k] = {'ded': _num(r['Deduction']), 'low': _num(r['LowerLimit']), 'years': r['MinYears'], 'tax': tot}
            if any(city):
                data[k]['city'] = city
        out[can] = {'grid': grid, 'rels': data}
    return 'const DATA = ' + json.dumps(out, separators=(',', ':')) + ';'
