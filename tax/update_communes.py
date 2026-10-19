#!/usr/bin/env python3
"""Rebuild the commune file of a tax page from the official sources.

    python3 update_communes.py be   # tax/be/communes.js: communal tax rates (FPS Finance) + REFNIS codes (Statbel)
    python3 update_communes.py fr   # tax/fr/communes.js: versement mobilité (URSSAF) + commune names (INSEE COG)

Needs curl, and pdftotext (poppler-utils) for Belgium. Downloads go to a temporary folder.
Update the URLs and dates below when a new year is published.
"""
import collections
import csv
import json
import os
import re
import subprocess
import sys
import tempfile
import unicodedata
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))

BE_RATES_PDF = 'https://fin.belgium.be/sites/default/files/media/documents/tarieven-gemeentebelasting-2026.pdf'
BE_REFNIS_ZIP = 'https://statbel.fgov.be/sites/default/files/files/opendata/REFNIS%20code/TU_COM_REFNIS-20250101.zip'

FR_VM_CSV = 'https://open.urssaf.fr/api/explore/v2.1/catalog/datasets/table_taux_vmrr/exports/csv?delimiter=%3B'
FR_COG_CSV = 'https://www.insee.fr/fr/statistiques/fichier/8740222/v_commune_2026.csv'
FR_MVT_CSV = 'https://www.insee.fr/fr/statistiques/fichier/8740222/v_mvt_commune_2026.csv'
FR_AT = '20261001'


def fetch(url, dest):
    subprocess.run(['curl', '-sSfL', '--retry', '3', '-o', dest, url], check=True)
    return dest


def write_js(path, rows):
    with open(path, 'w', encoding='utf-8') as f:
        f.write('window.COMMUNES = ' + json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print(f'{path}: {len(rows)} communes, {os.path.getsize(path) // 1024} KB')


def norm(name):
    s = unicodedata.normalize('NFD', name)
    return re.sub(r'[^a-z0-9]', '', ''.join(c for c in s if not unicodedata.combining(c)).lower())


def be_rates(pdf, tmp):
    """Parse the three-column PDF table; long names wrap onto the next line without a rate."""
    txt = os.path.join(tmp, 'rates.txt')
    subprocess.run(['pdftotext', '-layout', pdf, txt], check=True)
    rate_re = re.compile(r'^\d{1,2},\d$')
    out, cols, pending = {}, None, None
    for line in open(txt, encoding='utf-8'):
        if 'STAD OF GEMEENTE' in line:
            cols = [m.start() for m in re.finditer('STAD OF GEMEENTE', line)]
            pending = [None] * len(cols)
            continue
        if not cols:
            continue
        cells = collections.defaultdict(lambda: {'name': [], 'rate': None})
        for m in re.finditer(r'\S+(?: \S+)*', line):
            col = max([i for i, c in enumerate(cols) if c <= m.start() + 3] or [0])
            if rate_re.match(m.group()):
                cells[col]['rate'] = float(m.group().replace(',', '.'))
            else:
                cells[col]['name'].append(m.group())
        for col, cell in sorted(cells.items()):
            name = ' '.join(cell['name'])
            if pending[col] and name:
                name = pending[col] + ('' if pending[col].endswith('-') else ' ') + name
            elif pending[col]:
                name = pending[col]
            if cell['rate'] is None:
                pending[col] = name or None
            else:
                out[name] = cell['rate']
                pending[col] = None
    return out


def be_region(nis):
    if nis.startswith('21'):
        return 'bru'
    return 'wal' if nis[0] in '5689' or nis.startswith('25') else 'vl'


def update_be():
    with tempfile.TemporaryDirectory() as tmp:
        rates = be_rates(fetch(BE_RATES_PDF, os.path.join(tmp, 'rates.pdf')), tmp)
        with zipfile.ZipFile(fetch(BE_REFNIS_ZIP, os.path.join(tmp, 'refnis.zip'))) as z:
            raw = z.read(next(n for n in z.namelist() if n.endswith('.txt')))
        text = raw.decode('utf-8-sig') if raw.startswith(b'\xef\xbb\xbf') else raw.decode('latin-1')
        # The PDF names each commune in its own language; REFNIS adds "(arrondissement)" to repeated names,
        # so "Saint-Nicolas" must match the Walloon one, not the French name of Sint-Niklaas.
        official = {'vl': ('NL',), 'bru': ('NL', 'FR'), 'wal': ('FR', 'DE')}
        nis_by_name = collections.defaultdict(set)
        for r in csv.DictReader(text.splitlines(), delimiter='|'):
            if r['LVL_REFNIS'] == '4' and r['DT_VLDT_END'].endswith('9999'):
                for lang in official[be_region(r['CD_REFNIS'])]:
                    nis_by_name[norm(re.sub(r' \(.*\)$', '', r[f'TX_REFNIS_{lang}']))].add(r['CD_REFNIS'])
    rows, missing = [], []
    for name, rate in rates.items():
        codes = nis_by_name.get(norm(name), set())
        if len(codes) != 1:
            missing.append((name, sorted(codes)))
            continue
        nis = codes.pop()
        rows.append({'name': name, 'rate': rate, 'region': be_region(nis), 'nis': nis})
    if missing:
        sys.exit(f'No REFNIS code for: {missing}')
    rows.sort(key=lambda c: c['name'])
    write_js(os.path.join(HERE, 'be', 'communes.js'), rows)


def update_fr():
    with tempfile.TemporaryDirectory() as tmp:
        vm, cog, mvt = (fetch(u, os.path.join(tmp, n)) for u, n in
                        [(FR_VM_CSV, 'vm.csv'), (FR_COG_CSV, 'cog.csv'), (FR_MVT_CSV, 'mvt.csv')])
        active = {}
        with open(vm, encoding='utf-8-sig') as f:
            for r in csv.DictReader(f, delimiter=';'):
                if r['date_debut'] <= FR_AT and (not r['date_fin'] or r['date_fin'] >= FR_AT):
                    if r['code_commune'] in active:
                        sys.exit(f"Two rates in force for {r['code_commune']}")
                    active[r['code_commune']] = round(sum(float(r[k] or 0) for k in ('taux_vm', 'taux_vma', 'taux_vmr')), 4)
        with open(cog, encoding='utf-8-sig') as f:
            cog_rows = list(csv.DictReader(f))
        # URSSAF still rates some codes the COG folds into a commune: arrondissements, delegated and merged communes.
        coms = {r['COM'] for r in cog_rows if r['TYPECOM'] == 'COM'}
        children = collections.defaultdict(set)
        for r in cog_rows:
            if r['TYPECOM'] in ('COMD', 'COMA') and r['COMPARENT']:
                children[r['COMPARENT']].add(r['COM'])
        for code in active:
            if code.startswith('751'):
                children['75056'].add(code)
            elif code.startswith('6938'):
                children['69123'].add(code)
            elif code.startswith('132') and code != '13200':
                children['13055'].add(code)
        with open(mvt, encoding='utf-8-sig') as f:
            for r in csv.DictReader(f):
                if r['COM_AV'] != r['COM_AP'] and r['COM_AP'] in coms and r['COM_AV'] not in coms:
                    children[r['COM_AP']].add(r['COM_AV'])
    rows = []
    for r in cog_rows:
        if r['TYPECOM'] != 'COM' or r['DEP'].startswith('97'):
            continue
        kids = [active[k] for k in children.get(r['COM'], ()) if k in active]
        rate = max(kids) if r['COM'] in ('75056', '69123', '13055') and kids else active.get(r['COM'], max(kids, default=0.0))
        rows.append([r['LIBELLE'], round(rate, 3), r['DEP']])
    rows.sort(key=lambda c: (c[0], c[2]))
    write_js(os.path.join(HERE, 'fr', 'communes.js'), rows)


if __name__ == '__main__':
    {'be': update_be, 'fr': update_fr}.get(sys.argv[1] if len(sys.argv) > 1 else '', lambda: sys.exit(__doc__))()
