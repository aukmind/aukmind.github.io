#!/usr/bin/env python3
"""Rebuild the commune file of a tax page from the official sources.

    python3 update_communes.py be   # tax/be/communes.js: communal tax rates (FPS Finance) + REFNIS codes (Statbel)
    python3 update_communes.py fr   # tax/fr/communes.js: versement mobilité (URSSAF) + commune names (INSEE COG)
    python3 update_communes.py ch   # tax/ch/communes.js + the DATA lines of ch/salary.js and ch/inheritance.js (ESTV, see update_ch.py)
    python3 update_communes.py dk   # tax/dk/communes.js: kommuneskat + kirkeskat (Danmarks Statistik, PSKAT)
    python3 update_communes.py pt   # tax/pt/communes.js: municipal IRS share (Portal das Finanças) + names (DGT CAOP)
    python3 update_communes.py fi   # tax/fi/communes.js: municipal and parish tax (Vero) + Finnish/Swedish names (Statistics Finland)
    python3 update_communes.py it   # tax/it/communes.js: addizionale comunale (MEF) + names and regions (ISTAT)
    python3 update_communes.py se   # tax/se/communes.js: kommun + region tax, burial and church fees (Skatteverket) + names (SCB)
    python3 update_communes.py li   # tax/li/communes.js: Gemeindesteuerzuschlag from each Gemeinderat's published decision
    python3 update_communes.py hr   # tax/hr/communes.js: city income tax rates (Porezna uprava) + counties (Ministry of Demography) + assisted areas (NN 3/2024)
    python3 update_communes.py us   # tax/us/communes.js: state income + sales tax (Tax Foundation) + curated local income taxes; needs openpyxl
    python3 update_communes.py is   # tax/is/communes.js: útsvar per municipality (Samband íslenskra sveitarfélaga); needs xlrd
    python3 update_communes.py jp   # tax/jp/communes.js: Kyokai Kenpo health rate per prefecture (Japan Health Insurance Association); needs openpyxl
    python3 update_communes.py ca   # tax/ca/communes.js: federal + provincial brackets and basic amounts (CRA T4127) + curated 2026 changes and Quebec rules
    python3 update_communes.py mx   # tax/mx/communes.js: state payroll tax (ISN) per state, curated table

Needs curl, and pdftotext (poppler-utils) for Belgium, Liechtenstein and Croatia. Downloads go to a temporary folder.
Update the URLs and dates below when a new year is published.
"""
import collections
import html
import io
import csv
import json
import os
import re
import subprocess
import sys
import tempfile
import unicodedata
import xml.etree.ElementTree as ET
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))

BE_RATES_PDF = 'https://fin.belgium.be/sites/default/files/media/documents/tarieven-gemeentebelasting-2026.pdf'
BE_REFNIS_ZIP = 'https://statbel.fgov.be/sites/default/files/files/opendata/REFNIS%20code/TU_COM_REFNIS-20250101.zip'

FR_VM_CSV = 'https://open.urssaf.fr/api/explore/v2.1/catalog/datasets/table_taux_vmrr/exports/csv?delimiter=%3B'
FR_COG_CSV = 'https://www.insee.fr/fr/statistiques/fichier/8740222/v_commune_2026.csv'
FR_MVT_CSV = 'https://www.insee.fr/fr/statistiques/fichier/8740222/v_mvt_commune_2026.csv'
FR_AT = '20261001'

DK_PSKAT_CSV = ('https://api.statbank.dk/v1/data/PSKAT/CSV?lang=da&valuePresentation=CodeAndValue'
                '&OMR%C3%85DE=*&SKATPCT=KOM,KIRKE&Tid=2026&delimiter=Semicolon')

PT_YEAR = '2026'
PT_AT_FORM = 'https://www.portaldasfinancas.gov.pt/pt/consultarTaxasIRSMunicipiosForm.action'
PT_AT_TABLE = 'https://www.portaldasfinancas.gov.pt/pt/consultarTaxasIRSMunicipios.action'
PT_WFS = ('https://geo2.dgterritorio.gov.pt/geoserver/{0}/wfs?service=wfs&version=2.0.0&request=GetFeature'
          '&typeNames={0}:{1}&outputFormat=application/json&propertyName=dtmn,municipio,distrito_ilha')
PT_CAOP = [('cont', PT_WFS.format('caop_continente', 'cont_municipios')), ('mad', PT_WFS.format('caop_ram', 'ram_municipios')),
           ('acor', PT_WFS.format('caop_raa', 'raa_cen_ori_municipios')), ('acor', PT_WFS.format('caop_raa', 'raa_oci_municipios'))]
# AT spellings that don't normalise to the CAOP name; the region settles the repeated ones.
PT_ALIASES = {
    'calhetaacores': ('calhetadesaojorge', 'acor'), 'calhetamadeira': ('calheta', 'mad'),
    'lagoaalgarve': ('lagoa', 'cont'), 'lagoaacores': ('lagoa', 'acor'),
    'vilapraiadavitoria': ('praiadavitoria', 'acor'),
}
FI_RATES = 'https://www.vero.fi/syventavat-vero-ohjeet/paatokset/47465/kuntien-ja-seurakuntien-tuloveroprosentit-vuonna-2026/'
FI_KUNTA = 'https://data.stat.fi/api/classifications/v2/classifications/kunta_1_20260101/classificationItems?content=data&meta=max&lang='
# Åland has its own state tax scale and municipal deductions.
FI_ALAND = {'Brändö', 'Eckerö', 'Finström', 'Föglö', 'Geta', 'Hammarland', 'Jomala', 'Kumlinge', 'Kökar', 'Lemland',
            'Lumparland', 'Maarianhamina', 'Saltvik', 'Sottunga', 'Sund', 'Vårdö'}

# The MEF "elenchi generali", updated daily. A commune without a deliberation for the year shows 0*,
# and then keeps its rates from the year before (art. 1 c. 169, L. 296/2006).
IT_ADDCOM_CSV = 'https://www1.finanze.gov.it/finanze2/dipartimentopolitichefiscali/fiscalitalocale/nuova_addcomirpef/download/download.php?anno={}'
IT_YEARS = [2026, 2025, 2024]
IT_ISTAT_CSV = 'https://www.istat.it/storage/codici-unita-amministrative/Elenco-comuni-italiani.csv'

IT_REGIONS = {
    'Abruzzo': 'abr', 'Basilicata': 'bas', 'Calabria': 'cal', 'Campania': 'cam', 'Emilia-Romagna': 'emr',
    'Friuli-Venezia Giulia': 'fvg', 'Lazio': 'laz', 'Liguria': 'lig', 'Lombardia': 'lom', 'Marche': 'mar',
    'Molise': 'mol', 'Piemonte': 'pie', 'Puglia': 'pug', 'Sardegna': 'sar', 'Sicilia': 'sic', 'Toscana': 'tos',
    'Umbria': 'umb', "Valle d'Aosta/Vallée d'Aoste": 'vda', 'Veneto': 'ven',
}
# Pre-2022 and 2022-2023 IRPEF brackets, for rows whose own bounds can't be read.
IT_STD_BOUNDS = {3: [28000, 50000, None], 4: [15000, 28000, 50000, None], 5: [15000, 28000, 55000, 75000, None]}

SE_YEAR = '2026'
# One row per parish (församling); SCB metadata gives proper-case municipality and county names.
SE_SKV_JSON = 'https://skatteverket.entryscape.net/rowstore/dataset/c67b320b-ffee-4876-b073-dd9236cd2a99/json'
SE_SCB_META = 'https://api.scb.se/OV0104/v1/doris/sv/ssd/OE/OE0101/Kommunalskatter2000'

LI_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
# No decision online: the legal floor (SteG Art. 75).
LI_FLOOR = 150

# Each Gemeinderat fixes its surcharge for tax year Y in November of Y. name, region, id, source URL, pattern (on whitespace-normalised text) capturing the rate
LI_SOURCES = [
    ('Vaduz', 'Oberland', 'vaduz', 'https://www.vaduz.li/news/voranschlag-der-gemeinde-vaduz-2026',
     r'Gemeindesteuerzuschlag 2026 beraten\. Dieser wird .{0,80}?bei (\d{3}) Prozent'),
    ('Schaan', 'Oberland', 'schaan', 'https://www.schaan.li/application/files/3817/6543/8304/pa_20251126.pdf',
     r'Gemeindesteuerzuschlages f\S*r das Steuerjahr 2025 mit (\d{3}) ?%'),
    ('Balzers', 'Oberland', 'balzers', 'https://www.balzers.li/Portal/UserFiles/files/Service/GR-Protokolle/GR-Protokolle_2025/hw_GRPR_45_2025.pdf',
     r'Gemeindesteuerzuschlag f\S*r das Jahr 2025 bei (\d{3}) ?%'),
    ('Triesen', 'Oberland', 'triesen', None, None),
    ('Triesenberg', 'Oberland', 'triesenberg', None, None),
    ('Planken', 'Oberland', 'planken', 'https://www.planken.li/download_file/view/1450/588',
     r'Steuerjahr 2025 wiederum auf (\d{3}) ?%'),
    ('Eschen', 'Unterland', 'eschen', 'https://www.eschen.li/wp-content/uploads/2025/11/GR-Protokoll-16-2025-Aushang.pdf',
     r'Kalenderjahr 2026 \(Veranlagungsjahr 2025\) mit (\d{3}) ?%'),
    ('Mauren', 'Unterland', 'mauren', 'https://landesspiegel.li/2025/11/mauren-senkt-steuerzuschlag-auf-160-prozent/',
     r'ab dem Steuerjahr 2025 von \d{3} auf (\d{3}) Prozent'),
    ('Gamprin', 'Unterland', 'gamprin', None, None),
    ('Ruggell', 'Unterland', 'ruggell', 'https://www.ruggell.li/files/medienarchiv/Protokollveroeffentlichung-GR-1525.pdf',
     r'Gemeindesteuerzuschlag f\S*r das Steuerjahr 2025 auf (\d{3}) ?% festgelegt'),
    ('Schellenberg', 'Unterland', 'schellenberg', None, None),
]

# Croatia rows: [name, lower %, higher %, Porezna code, county, 'g'|'o'|'z' (grad/općina/Zagreb), 1 if the 50% assisted-area cut applies].
HR_RATES_XLSX = ('https://porezna-uprava.gov.hr/UserDocsImages/Portal_porezne_konkurentnosti/Odluke_JLS/'
                 'Porezne%20stope%20godi%C5%A1njeg%20poreza%20na%20dohodak/'
                 'Tablica%20poreznih%20stopa%20godi%C5%A1njeg%20poreza%20na%20dohodak%20za%202026%20godinu.xlsx')
# Ministry of Demography list of the 556 units with county and grad/općina status (2021 census table).
HR_UNITS_PDF = ('https://demografijaimladi.gov.hr/UserDocsImages//Direktorij%202/Slike%20od%2013.2024/Dokumenti//'
                'Popis%20jedinica%20lokalne%20samouprave.pdf')
# Development groups (NN 3/2024): group I and Grad Vukovar get 50% off the income tax on pay (ZPD art. 24(5), 46(1)).
HR_GROUPS_NN = 'https://narodne-novine.nn.hr/clanci/sluzbeni/2024_01_3_60.html'
HR_COUNT = 556
# Porezna repeats a few names; its codes settle the county.
HR_DUP_CODES = {3140: 'Splitsko-dalmatinska', 5355: 'Vukovarsko-srijemska', 5746: 'Zadarska',
                5835: 'Vukovarsko-srijemska', 4324: 'Istarska', 4367: 'Zagrebačka'}
HR_BANDS = {'o': (20, 30), 'g': (22, 32), 'z': (23, 33)}

# No agency publishes all 51 schedules in one file: the Tax Foundation tables (from state statutes), plus footnoted rules and local taxes by hand.
US_INCOME_XLSX = 'https://taxfoundation.org/wp-content/uploads/2026/02/2026-State-Individual-Income-Tax-Rates-Brackets.xlsx'
US_SALES_XLSX = 'https://taxfoundation.org/wp-content/uploads/2026/01/2026-Sales-Tax-Data.xlsx'

US_ABBR = {
    'Ala.': 'AL', 'Alaska': 'AK', 'Ariz.': 'AZ', 'Ark.': 'AR', 'Calif.': 'CA', 'Colo.': 'CO', 'Conn.': 'CT', 'Del.': 'DE',
    'Fla.': 'FL', 'Ga.': 'GA', 'Hawaii': 'HI', 'Idaho': 'ID', 'Ill.': 'IL', 'Ind.': 'IN', 'Iowa': 'IA', 'Kans.': 'KS',
    'Ky.': 'KY', 'La.': 'LA', 'Maine': 'ME', 'Md.': 'MD', 'Mass.': 'MA', 'Mich.': 'MI', 'Minn.': 'MN', 'Miss.': 'MS',
    'Mo.': 'MO', 'Mont.': 'MT', 'Nebr.': 'NE', 'Nev.': 'NV', 'N.H.': 'NH', 'N.J.': 'NJ', 'N.M.': 'NM', 'N.Y.': 'NY',
    'N.C.': 'NC', 'N.D.': 'ND', 'Ohio': 'OH', 'Okla.': 'OK', 'Ore.': 'OR', 'Pa.': 'PA', 'R.I.': 'RI', 'S.C.': 'SC',
    'S.D.': 'SD', 'Tenn.': 'TN', 'Tex.': 'TX', 'Utah': 'UT', 'Vt.': 'VT', 'Va.': 'VA', 'Wash.': 'WA', 'W.Va.': 'WV',
    'Wis.': 'WI', 'Wyo.': 'WY', 'D.C.': 'DC',
}
US_NAMES = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California', 'CO': 'Colorado',
    'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
    'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine',
    'MD': 'Maryland', 'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
    'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico',
    'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma', 'OR': 'Oregon',
    'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina', 'SD': 'South Dakota', 'TN': 'Tennessee',
    'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
    'WI': 'Wisconsin', 'WY': 'Wyoming', 'DC': 'District of Columbia',
}

# Footnoted rules the table only describes in words. po: phase-outs of the deduction (sd), exemptions (ex) or
# credits (cr), [single, married] from a to b down to f (a == b is a cliff). exSteps: exemption per person by AGI.
US_RULES = {
    'AL': {'fedDed': 1, 'po': [{'k': 'sd', 'a': [25499, 25999], 'b': [35499, 35999], 'f': [2500, 5000]}]},
    'CT': {'po': [{'k': 'ex', 'a': [30000, 48000], 'b': [45000, 72000], 'f': [0, 0]}]},
    'IL': {'po': [{'k': 'ex', 'a': [250000, 500000], 'b': [250000, 500000], 'f': [0, 0]}]},
    'MD': {'po': [{'k': 'ex', 'a': [100000, 150000], 'b': [150000, 200000], 'f': [0, 0]}]},
    'OR': {'po': [{'k': 'cr', 'a': [100000, 200000], 'b': [100000, 200000], 'f': [0, 0]}]},
    'RI': {'po': [{'k': 'sd', 'a': [261000, 261000], 'b': [290800, 290800], 'f': [0, 0]},
                  {'k': 'ex', 'a': [261000, 261000], 'b': [290800, 290800], 'f': [0, 0]}]},
    'WI': {'po': [{'k': 'sd', 'a': [20119, 29039], 'b': [136453, 159690], 'f': [0, 0]}]},
    'OH': {'exSteps': [[40000, 2400], [80000, 2150], [500000, 1900], [None, 0]]},
    # Utah: a 6% credit on the federal standard deduction + $2,111 per dependent, minus 1.3% of income above the threshold.
    'UT': {'ut': {'rate': .06, 'dep': 2111, 'po': .013, 'a': [18213, 36426]}},
}

# Local income taxes on residents, as extra rows. base: wage (each earner's pay), agi (household income less
# exemptions ex per person), sti (state taxable income), stax (state income tax).
US_MD = 'https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/legal-publications/alerts/tax-alert-changes-to-standard-and-itemized-deductions-and-to-state-and-local-income-tax-rates-from-the-2025-legislative-session.pdf'
US_MD_COUNTIES = {
    'Allegany': .032, 'Baltimore City': .032, 'Baltimore County': .032, 'Calvert': .032, 'Caroline': .032,
    'Carroll': .0303, 'Cecil': .0274, 'Charles': .0303, 'Dorchester': .033, 'Garrett': .0265, 'Harford': .0306,
    'Howard': .032, 'Kent': .033, 'Montgomery': .032, "Prince George's": .032, "Queen Anne's": .032,
    "St. Mary's": .032, 'Somerset': .032, 'Talbot': .024, 'Washington': .0295, 'Wicomico': .032, 'Worcester': .0225,
}
US_LOCAL = [
    ('nyc', 'New York City', 'NY', {'base': 'sti', 'b': [[0, .03078], [12000, .03762], [25000, .03819], [50000, .03876]],
                                    'bm': [[0, .03078], [21600, .03762], [45000, .03819], [90000, .03876]],
                                    'bh': [[0, .03078], [14400, .03762], [30000, .03819], [60000, .03876]]}),
    ('yonkers', 'Yonkers', 'NY', {'base': 'stax', 'r': .1675}),
    ('philadelphia', 'Philadelphia', 'PA', {'base': 'wage', 'r': .0374}),
    ('pittsburgh', 'Pittsburgh', 'PA', {'base': 'wage', 'r': .03}),
    ('detroit', 'Detroit', 'MI', {'base': 'agi', 'r': .024, 'ex': 600}),
    ('grandrapids', 'Grand Rapids', 'MI', {'base': 'agi', 'r': .015, 'ex': 600}),
    ('columbus', 'Columbus', 'OH', {'base': 'wage', 'r': .025}),
    ('cleveland', 'Cleveland', 'OH', {'base': 'wage', 'r': .025}),
    ('cincinnati', 'Cincinnati', 'OH', {'base': 'wage', 'r': .018}),
    ('toledo', 'Toledo', 'OH', {'base': 'wage', 'r': .025}),
    ('kansascity', 'Kansas City', 'MO', {'base': 'wage', 'r': .01}),
    ('stlouis', 'St. Louis', 'MO', {'base': 'wage', 'r': .01}),
    ('birmingham', 'Birmingham', 'AL', {'base': 'wage', 'r': .01}),
    ('wilmington', 'Wilmington', 'DE', {'base': 'wage', 'r': .0125}),
    ('indianapolis', 'Indianapolis (Marion County)', 'IN', {'base': 'sti', 'r': .0202}),
    ('portland', 'Portland (Multnomah County)', 'OR', {'base': 'sti', 'b': [[0, 0], [125000, .025], [250000, .04]],
                                                      'bm': [[0, 0], [200000, .025], [400000, .04]]}),
] + [('md-' + re.sub(r'[^a-z]', '', n.lower()), n + (' County' if n not in ('Baltimore City', 'Baltimore County') else ''), 'MD',
      {'base': 'sti', 'r': r}) for n, r in US_MD_COUNTIES.items()]
# Progressive county rates (Maryland taxable income, single and married brackets).
US_LOCAL_OVERRIDE = {
    'md-annearundel': {'base': 'sti', 'b': [[0, .027], [50000, .0294], [400000, .032]], 'bm': [[0, .027], [75000, .0294], [480000, .032]]},
    'md-frederick': {'base': 'sti', 'b': [[0, .0225], [25000, .0275], [50000, .0296], [150000, .032]],
                     'bm': [[0, .0225], [25000, .0275], [100000, .0296], [250000, .032]]},
}

# No deliberation sent to the AT by 31 December: the municipality keeps the full 5% (Lei 73/2013, art. 26.º n.º 3).
PT_DEFAULT = 5.0


def fetch(url, dest, *extra):
    subprocess.run(['curl', '-sSfL', '--retry', '3', *extra, '-o', dest, url], check=True)
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


def update_ch():
    import update_ch as ch
    with tempfile.TemporaryDirectory() as tmp:
        with open(os.path.join(HERE, 'ch', 'communes.js'), 'w', encoding='utf-8') as f:
            f.write(ch.build_ch(tmp))
        for name, build in (('salary.js', ch.build_ch_data), ('inheritance.js', ch.build_ch_inherit)):
            path = os.path.join(HERE, 'ch', name)
            with open(path, encoding='utf-8') as f:
                js = ch.splice_ch_data(f.read(), build(tmp))
            with open(path, 'w', encoding='utf-8') as f:
                f.write(js)
    print('ch: communes.js, salary.js and inheritance.js rebuilt')


def update_dk():
    with tempfile.TemporaryDirectory() as tmp:
        rows = {}
        with open(fetch(DK_PSKAT_CSV, os.path.join(tmp, 'pskat.csv')), encoding='utf-8-sig') as f:
            for r in csv.DictReader(f, delimiter=';'):
                code, name = r['OMRÅDE'].split(' ', 1)
                # 000 is the whole country, 081-085 the regions; kommuner are 101 and up.
                v = r['INDHOLD'].strip()
                if int(code) < 100 or v in ('', '..'):
                    continue
                rows.setdefault(code, {'name': name})[r['SKATPCT'].split(' ', 1)[0]] = float(v.replace(',', '.'))
    out = [[c['name'], c['KOM'], c.get('KIRKE', 0), code] for code, c in sorted(rows.items(), key=lambda x: x[1]['name']) if 'KOM' in c]
    if len(out) != 98:
        sys.exit(f'expected 98 kommuner, got {len(out)}')
    write_js(os.path.join(HERE, 'dk', 'communes.js'), out)


def pt_rates(tmp):
    jar = os.path.join(tmp, 'jar')
    fetch(PT_AT_FORM, os.path.join(tmp, 'form.html'), '-c', jar, '-b', jar)
    page = fetch(PT_AT_TABLE, os.path.join(tmp, 'irs.html'), '-c', jar, '-b', jar, '-e', PT_AT_FORM, '--data', 'ano=' + PT_YEAR)
    src = open(page, encoding='latin-1').read()
    if f'Ano de {PT_YEAR}' not in src:
        sys.exit(f'AT table for {PT_YEAR} not found')
    out = {}
    for row in re.findall(r'(?s)<tr[^>]*>(.*?)</tr>', src):
        cells = [re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', c))).strip() for c in re.findall(r'(?s)<td[^>]*>(.*?)</td>', row)]
        if len(cells) == 3 and cells[1].endswith('%'):
            out[re.sub(r'^S\. ', 'São ', cells[0])] = float(cells[1].rstrip('% ').replace(',', '.'))
    return out


def update_pt():
    with tempfile.TemporaryDirectory() as tmp:
        muns = []
        for i, (region, url) in enumerate(PT_CAOP):
            for f in json.load(open(fetch(url, os.path.join(tmp, f'caop{i}.json'))))['features']:
                p = f['properties']
                sub = re.sub(r'^Ilha (de |da |do |das )?', '', p['distrito_ilha'])
                muns.append({'name': p['municipio'], 'sub': sub, 'region': region, 'key': norm(p['municipio'])})
        if len(muns) != 308:
            sys.exit(f'expected 308 municipalities, got {len(muns)}')
        rates, unmatched = {}, []
        for name, rate in pt_rates(tmp).items():
            key, region = PT_ALIASES.get(norm(name), (norm(name), None))
            hits = [m for m in muns if m['key'] == key and (region is None or m['region'] == region)]
            if len(hits) != 1:
                unmatched.append(name)
                continue
            rates[id(hits[0])] = rate
    if unmatched:
        sys.exit('unmatched AT names: ' + ', '.join(unmatched))
    missing = [m['name'] for m in muns if id(m) not in rates]
    print(f'{len(missing)} municipalities at the 5% default: {", ".join(missing)}')
    rows = sorted([[m['name'], rates.get(id(m), PT_DEFAULT), m['sub'], m['region']] for m in muns], key=lambda r: (norm(r[0]), r[2]))
    write_js(os.path.join(HERE, 'pt', 'communes.js'), rows)


def update_fi():
    with tempfile.TemporaryDirectory() as tmp:
        page = html.unescape(open(fetch(FI_RATES, os.path.join(tmp, 'rates.html'), '-A', 'Mozilla/5.0'), encoding='utf-8').read())
        rows = json.loads(re.search(r':rows="(\[.*?\])"\s*\n', page, re.S).group(1))
        names = {}
        for lang in ('fi', 'sv'):
            items = json.load(open(fetch(FI_KUNTA + lang, os.path.join(tmp, f'kunta_{lang}.json')), encoding='utf-8'))
            names[lang] = {i['code']: re.sub(r'\s+', ' ', i['classificationItemNames'][0]['name']).strip() for i in items}
    # Statistics Finland writes "Maarianhamina - Mariehamn"; the tax list uses the Finnish part.
    sv_of = {names['fi'][c].split(' - ')[0]: names['sv'][c] for c in names['fi']}
    out = []
    for r in rows:
        name = r['column_0']['text'].strip()
        if name not in sv_of:
            sys.exit(f'{name}: not in the 2026 municipality classification')
        rate = lambda k: float(r[k]['text'].replace(',', '.'))
        sv = sv_of[name]
        out.append([name, sv if sv != name else '', rate('column_1'), rate('column_2'), rate('column_3'), 'ax' if name in FI_ALAND else 'fi'])
    if len(out) < 300:
        sys.exit(f'only {len(out)} municipalities parsed')
    write_js(os.path.join(HERE, 'fi', 'communes.js'), out)


def it_num(s):
    return float(s.replace('.', '').replace(',', '.'))


def it_rate(s):
    s = s.strip().replace(',', '.')
    return round(float('0' + s if s.startswith('.') else s), 4)


def it_schedule(row):
    """(exemption threshold, flat rate or [[upper bound or None, rate %], ...]) for one MEF row, or None if unset."""
    if row['ALIQUOTA'].startswith('0*'):
        return None
    if 'INAPPLICABILI' in row['NOTE'].upper():
        return None
    specific = row['FLAG_NUOVA'] in ('5', '6')
    ex, flat, brackets = 0, None, []
    for i in [''] + [f'_{k}' for k in range(2, 13)]:
        a, f = row.get('ALIQUOTA' + i, '').strip(), row.get('FASCIA' + i, '').strip()
        if not a:
            continue
        low = re.sub(r'\s+', ' ', f.lower())
        nums = [it_num(n) for n in re.findall(r'\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:,\d+)?', f)]
        if 'esenz' in low:
            # Exemptions limited to some kinds of income don't apply to an employee's salary.
            if not specific and nums and len(low) < 120:
                ex = nums[-1]
            continue
        rate = it_rate(a)
        if 'unica' in low or not low:
            flat = rate
            continue
        big = [n for n in nums if n >= 1000]
        if len(big) >= 2:
            upper = big[-1]
        elif len(big) == 1 and not re.search(r'\boltre\b|\bda\b|superior', low):
            upper = big[0]
        else:
            upper = None
        brackets.append([upper if upper is None else int(upper), rate])
    if not brackets:
        return ex, flat or 0
    if flat is not None:
        brackets.append([None, flat])
    bounds = [b[0] for b in brackets]
    finite = [b for b in bounds if b is not None]
    ok = bounds.count(None) == 1 and bounds[-1] is None and finite == sorted(set(finite))
    if not ok:
        std = IT_STD_BOUNDS.get(len(brackets))
        if not std:
            raise ValueError(f"{row['COMUNE']}: can't read brackets {brackets}")
        brackets = [[u, r] for u, (_, r) in zip(std, brackets)]
    rates = {r for _, r in brackets}
    return ex, rates.pop() if len(rates) == 1 else brackets


def update_it():
    with tempfile.TemporaryDirectory() as tmp:
        years = {}
        for y in IT_YEARS:
            path = fetch(IT_ADDCOM_CSV.format(y), os.path.join(tmp, f'addcom_{y}.csv'))
            years[y] = {r['CODICE_CATASTALE']: r for r in csv.DictReader(open(path, encoding='utf-8', errors='replace'), delimiter=';')}
        istat_path = fetch(IT_ISTAT_CSV, os.path.join(tmp, 'istat.csv'))
        istat = list(csv.reader(io.StringIO(open(istat_path, encoding='latin1').read()), delimiter=';'))[1:]
        names = {r[19]: r[5] for r in istat}
        prov_region = {}
        for r in istat:
            prov_region[r[14]] = {'TN': 'tn', 'BZ': 'bz'}.get(r[14]) or IT_REGIONS[r[10]]

    rows, fallback, unset = [], 0, 0
    for code, row in years[IT_YEARS[0]].items():
        sched = None
        for y in IT_YEARS:
            r = years[y].get(code)
            sched = r and it_schedule(r)
            if sched:
                fallback += y != IT_YEARS[0]
                break
        if not sched:
            sched, unset = (0, 0), unset + 1
        name = names.get(code) or row['COMUNE'].title()
        ex, s = sched
        rows.append([name, row['PR'], prov_region[row['PR']], int(ex), s])
    rows.sort(key=lambda r: (r[0], r[1]))
    print(f"{fallback} communes on last year's rates, {unset} without addizionale")
    write_js(os.path.join(HERE, 'it', 'communes.js'), rows)


def update_se():
    with tempfile.TemporaryDirectory() as tmp:
        rows, offset = [], 0
        while True:
            page = json.load(open(fetch(f'{SE_SKV_JSON}?%C3%A5r={SE_YEAR}&_limit=500&_offset={offset}', os.path.join(tmp, f'skv{offset}.json'), '-A', 'Mozilla/5.0'), encoding='utf-8'))
            rows += page['results']
            offset += 500
            if offset >= page['resultCount']:
                break
        meta = json.load(open(fetch(SE_SCB_META, os.path.join(tmp, 'scb.json')), encoding='utf-8'))
    reg = next(v for v in meta['variables'] if v['code'] == 'Region')
    names = dict(zip(reg['values'], reg['valueTexts']))
    by = collections.defaultdict(list)
    for r in rows:
        if r['år'] == SE_YEAR:
            by[r['församlings-kod'].replace(' ', '')].append(r)
    out = []
    for code, rs in sorted(by.items()):
        col = lambda k: [float(r[k]) for r in rs]
        rate = {round(a + b, 2) for a, b in zip(col('kommunal-skatt'), col('landstings-skatt'))}
        if len(rate) != 1:
            sys.exit(f'{code}: several tax rates {rate}')
        burial, church = col('begravnings-avgift'), col('kyrkoavgift')
        # Parishes differ inside a municipality: keep their plain average for the fees.
        out.append([names.get(code) or rs[0]['kommun'].title(), rate.pop(), round(sum(burial) / len(burial), 3),
                    round(sum(church) / len(church), 3), code, names[code[:2]].removesuffix(' län')])
    if len(out) != 290:
        sys.exit(f'expected 290 kommuner, got {len(out)}')
    write_js(os.path.join(HERE, 'se', 'communes.js'), out)


def li_text(url, tmp, i):
    dest = os.path.join(tmp, f'src{i}')
    subprocess.run(['curl', '-sSfL', '--retry', '3', '-A', LI_UA, '-o', dest, url], check=True)
    with open(dest, 'rb') as f:
        head = f.read(5)
    if head == b'%PDF-':
        raw = subprocess.run(['pdftotext', dest, '-'], check=True, capture_output=True, text=True).stdout
    else:
        with open(dest, encoding='utf-8', errors='replace') as f:
            s = re.sub(r'<script.*?</script>|<style.*?</style>', '', f.read(), flags=re.S)
        raw = html.unescape(re.sub('<[^>]+>', ' ', s))
    return ' '.join(raw.replace('­', '').split())


def build_li(tmpdir):
    rows = []
    for i, (name, region, cid, url, pat) in enumerate(LI_SOURCES):
        rate = LI_FLOOR
        if url:
            m = re.search(pat, li_text(url, tmpdir, i))
            if not m:
                sys.exit(f'{name}: surcharge not found in {url}')
            rate = int(m.group(1))
        if not 150 <= rate <= 250:
            sys.exit(f'{name}: {rate}% outside the legal 150-250% band')
        rows.append([name, rate, region, cid])
    body = ',\n'.join('  ' + repr(r).replace("'", '"') for r in rows)
    return ('// Liechtenstein Gemeinden: [name, Gemeindesteuerzuschlag % of the national tax, region, id].\n'
            '// Rates for tax year 2025, the latest each Gemeinderat has fixed. Built by update_communes.py li.\n'
            f'window.COMMUNES = [\n{body},\n];\n')



def update_li():
    path = os.path.join(HERE, 'li', 'communes.js')
    with tempfile.TemporaryDirectory() as tmp:
        out = build_li(tmp)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(out)
    print(f'{path}: {out.count(chr(10) + "  [")} communes')


def xlsx_rows(path):
    ns = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    with zipfile.ZipFile(path) as z:
        shared = [''.join(t.text or '' for t in si.iter('{%s}t' % ns['m']))
                  for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si', ns)]
        sheet = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
    for row in sheet.iter('{%s}row' % ns['m']):
        cells = {}
        for c in row.findall('m:c', ns):
            col = re.match(r'[A-Z]+', c.get('r')).group()
            v = c.find('m:v', ns)
            if v is None:
                continue
            cells[col] = shared[int(v.text)] if c.get('t') == 's' else v.text
        yield cells


def hr_units(txt):
    """County and grad/općina per unit; names wrapped over several lines sit around a data line with no name."""
    lines = txt.split('\n')
    is_data = [len(p) > 4 and p[1] in ('Grad', 'Općina') for p in (re.split(r'\s{2,}', ln.strip()) for ln in lines)]
    frag = lambda ln: len(ln) - len(ln.lstrip()) >= 20 and ln.strip() and not re.search(r'\S\s{2,}\S', ln.strip())
    rows = [i for i, d in enumerate(is_data) if d]
    out = []
    for k, i in enumerate(rows):
        parts = re.split(r'\s{2,}', lines[i].strip())
        if not re.fullmatch(r'[\d.]+', parts[2]):
            out.append([parts[0], parts[1], parts[2]])
            continue
        prev_i = rows[k - 1] if k else 0
        next_i = rows[k + 1] if k + 1 < len(rows) else len(lines)
        above = [j for j in range(prev_i + 1, i) if frag(lines[j])]
        below = [j for j in range(i + 1, next_i) if frag(lines[j])]
        prev_named = k and re.fullmatch(r'[\d.]+', re.split(r'\s{2,}', lines[prev_i].strip())[2]) is None
        next_named = k + 1 < len(rows) and re.fullmatch(r'[\d.]+', re.split(r'\s{2,}', lines[next_i].strip())[2]) is None
        if not prev_named and k:
            above = above[len(above) // 2:]
        if not next_named and k + 1 < len(rows):
            below = below[:(len(below) + 1) // 2]
        name = ''
        for j in above + below:
            w = lines[j].strip()
            name = name + w if name.endswith('-') else (name + ' ' + w).strip()
        out.append([parts[0], parts[1], name])
    return out


def hr_groups(page):
    t = html.unescape(re.sub(r'<[^>]+>', '\n', page))
    groups = {}
    for g, body in re.findall(r'– ([IVX]+)\. skupinu jedinica lokalne samouprave[^:]*: ([^\n]+)', t):
        for n in body.rstrip('.').split(', '):
            n = re.sub(r'\s+', ' ', n.replace('\xad', '')).strip()
            m = re.match(r'(.+?) \((.+?) županija\)$', n)
            name, county = (m.group(1), m.group(2)) if m else (n, None)
            groups.setdefault(norm(name), []).append((name, county, g))
    return groups


def build_hr(tmp):
    rates = []
    for r in xlsx_rows(fetch(HR_RATES_XLSX, os.path.join(tmp, 'rates.xlsx'), '-A', 'Mozilla/5.0')):
        if re.fullmatch(r'\d+', r.get('B', '') or '') and r.get('C'):
            rates.append((int(r['B']), r['C'].rstrip('*').strip(), round(float(r['F']) * 100, 2), round(float(r['G']) * 100, 2)))
    pdf = fetch(HR_UNITS_PDF, os.path.join(tmp, 'units.pdf'), '-A', 'Mozilla/5.0')
    subprocess.run(['pdftotext', '-layout', pdf, os.path.join(tmp, 'units.txt')], check=True)
    with open(os.path.join(tmp, 'units.txt'), encoding='utf-8') as f:
        units = hr_units(f.read())
    with open(fetch(HR_GROUPS_NN, os.path.join(tmp, 'groups.html'), '-A', 'Mozilla/5.0'), encoding='utf-8', errors='replace') as f:
        groups = hr_groups(f.read())
    if len(rates) != HR_COUNT or len(units) != HR_COUNT or sum(map(len, groups.values())) != HR_COUNT:
        sys.exit(f'expected {HR_COUNT} units: rates {len(rates)}, units {len(units)}, groups {sum(map(len, groups.values()))}')

    by_unit = {}
    for county, kind, name in units:
        by_unit.setdefault(norm(name), []).append((county, kind, name))
    by_unit['zagreb'] = [('Grad Zagreb', 'Zagreb', 'Zagreb')]
    groups['zagreb'] = groups.pop('gradzagreb')

    out = []
    for code, upper, lo, hi in rates:
        key = norm(upper)
        cands = by_unit.get(key)
        if not cands:
            sys.exit(f'{upper}: not in the unit list')
        want = HR_DUP_CODES.get(code)
        if len(cands) > 1 and not want:
            # Stari Grad (Hvar) and Starigrad (Zadar) only differ by the space.
            spaced = re.sub(r'\s+', ' ', upper).lower()
            cands = [c for c in cands if re.sub(r'\s+', ' ', c[2]).lower() == spaced] or cands
        if want:
            cands = [c for c in cands if c[0] == want]
        if len(cands) != 1:
            sys.exit(f'{upper} ({code}): {len(cands)} matches')
        county, kind, _ = cands[0]
        gs = [g for g in groups.get(key, []) if g[1] is None or g[1] == county]
        if len(gs) > 1:
            gs = [g for g in gs if re.sub(r'\s+', ' ', g[0]).lower() == re.sub(r'\s+', ' ', upper).lower()]
        if len(gs) != 1:
            sys.exit(f'{upper} ({code}): {len(gs)} development groups')
        name, _, group = gs[0]
        name = 'Zagreb' if key == 'zagreb' else re.sub(r'\s*[–-]\s+', ' – ', name)
        k = 'z' if key == 'zagreb' else 'g' if kind == 'Grad' else 'o'
        band = HR_BANDS[k]
        if not (15 <= lo <= band[0] and 25 <= hi <= band[1]):
            sys.exit(f'{name}: {lo}/{hi} outside the {k} band')
        cut = 1 if group == 'I' or key == 'vukovar' else 0
        out.append([name, lo, hi, str(code), county, k, cut])
    if len({r[3] for r in out}) != HR_COUNT:
        sys.exit('repeated codes')
    return 'window.COMMUNES = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n'



def update_hr():
    path = os.path.join(HERE, 'hr', 'communes.js')
    with tempfile.TemporaryDirectory() as tmp:
        js = build_hr(tmp)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'{path}: {js.count("],[") + 1} communes, {os.path.getsize(path) // 1024} KB')


def us_amount(v):
    """Table cell -> ('ded', n) | ('cr', n) | None."""
    if v is None:
        return None
    if isinstance(v, (int, float)):
        return ('ded', int(v) if float(v).is_integer() else float(v))
    s = str(v).strip()
    m = re.match(r'\$([\d,]+(?:\.\d+)?) credit$', s)
    if m:
        n = float(m.group(1).replace(',', ''))
        return ('cr', int(n) if n.is_integer() else n)
    if s.startswith('n.a') or s in ('', '\xa0'):
        return None
    raise ValueError(f'cell {s!r}')


def us_rows(path):
    import openpyxl
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    return [list(r) for r in wb.worksheets[0].iter_rows(max_row=400, max_col=12, values_only=True)]


def us_income(path):
    states, cur = {}, None
    for r in us_rows(path)[2:]:
        head = r[0].strip() if isinstance(r[0], str) else ''
        if head.startswith('(a) Local'):
            break
        name = re.sub(r'\s*\(.*$', '', head).strip()
        if name and not head.startswith('('):
            code = US_ABBR[name]
            cur = states[code] = {'s': [], 'm': [], 'cells': r[7:12], 'none': False}
            if isinstance(r[1], str) and ('none' in r[1] or 'Capital gains' in r[1]):
                cur['none'] = True
        if cur is None or cur['none']:
            continue
        if isinstance(r[1], (int, float)):
            cur['s'].append([r[3], r[1]])
        if isinstance(r[4], (int, float)):
            cur['m'].append([r[6], r[4]])
    if len(states) != 51:
        sys.exit(f'expected 51 jurisdictions, got {len(states)}')
    return states


def us_sales(path):
    out = {}
    by_name = {v: k for k, v in US_NAMES.items()}
    for r in us_rows(path)[2:]:
        name = re.sub(r'\s*\(.*$', '', str(r[0] or '')).strip()
        if name in by_name and isinstance(r[5], (int, float)):
            out[by_name[name]] = round(r[5] * 100, 2)
    if len(out) != 51:
        sys.exit(f'expected 51 sales tax rates, got {len(out)}')
    return out


def us_brackets(lst):
    # The table gives the bottom of each band; income below the first one is untaxed.
    out = [[0, 0]] if lst and lst[0][0] > 0 else []
    return out + [[b, round(r, 6)] for b, r in lst]


def us_spec(code, st):
    if st['none']:
        return {'none': 1}
    sd_s, sd_m, ex_s, ex_m, ex_d = (us_amount(c) for c in st['cells'])
    ded = lambda a: a[1] if a and a[0] == 'ded' else 0
    cr = lambda a: a[1] if a and a[0] == 'cr' else 0
    spec = {'s': us_brackets(st['s'])}
    m = us_brackets(st['m'])
    if m != spec['s']:
        spec['m'] = m
    spec['sd'] = [ded(sd_s), ded(sd_m)]
    spec['ex'] = [ded(ex_s), ded(ex_m), ded(ex_d)]
    if any((cr(ex_s), cr(ex_m), cr(ex_d))):
        spec['cr'] = [cr(ex_s), cr(ex_m), cr(ex_d)]
    spec.update(US_RULES.get(code, {}))
    if 'ut' in spec:
        spec['ut']['base'] = [cr(sd_s), cr(sd_m)]
        spec['ex'][2] = 0
    return spec


def build_us(tmpdir):
    states = us_income(fetch(US_INCOME_XLSX, os.path.join(tmpdir, 'income.xlsx'), '-A', 'Mozilla/5.0'))
    sales = us_sales(fetch(US_SALES_XLSX, os.path.join(tmpdir, 'sales.xlsx'), '-A', 'Mozilla/5.0'))
    rows = []
    for code in sorted(states, key=lambda c: US_NAMES[c]):
        spec = us_spec(code, states[code])
        top = 0 if spec.get('none') else max(r for _, r in spec['s'] + spec.get('m', []))
        rows.append([US_NAMES[code], code, code, round(top * 100, 3), sales[code], spec])
    for id_, name, code, spec in US_LOCAL:
        spec = US_LOCAL_OVERRIDE.get(id_, spec)
        top = spec['r'] if 'r' in spec else max(r for _, r in spec['b'])
        rows.append([name, code, id_, round(top * 100, 3), sales[code], spec])
    if len({r[2] for r in rows}) != len(rows):
        sys.exit('duplicate ids')
    print(f'us: {len(rows)} rows')
    return 'window.COMMUNES = ' + json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + ';\n'



def update_us():
    path = os.path.join(HERE, 'us', 'communes.js')
    with tempfile.TemporaryDirectory() as tmp:
        js = build_us(tmp)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'{path}: {os.path.getsize(path) // 1024} KB')


IS_XLS = 'https://samband-islenskra-sveitarfelaga.cdn.prismic.io/samband-islenskra-sveitarfelaga/aVuhgXNYClf9oyAY_%C3%9Atsvarspr%C3%B3sentur_net.xls'
IS_YEAR = 2026
# Landshluti from the first digit of the municipality number.

IS_REGIONS = {'0': 'Höfuðborgarsvæðið', '1': 'Höfuðborgarsvæðið', '2': 'Suðurnes', '3': 'Vesturland', '4': 'Vestfirðir',
              '5': 'Norðurland vestra', '6': 'Norðurland eystra', '7': 'Austurland', '8': 'Suðurland'}
IS_NAMES = {'Svalbarðsstrandarhr.': 'Svalbarðsstrandarhreppur', 'Húnaþing Vestra': 'Húnaþing vestra'}


def build_is(tmpdir):
    import xlrd
    sh = xlrd.open_workbook(fetch(IS_XLS, os.path.join(tmpdir, 'utsvar.xls'), '-A', 'Mozilla/5.0')).sheet_by_index(0)
    head = next(r for r in range(sh.nrows) if sh.cell_value(r, 1) == '' and IS_YEAR in sh.row_values(r) and r > 5)
    col = sh.row_values(head).index(IS_YEAR)
    rows = []
    for r in range(head + 1, sh.nrows):
        num, name, rate = sh.cell_value(r, 0), str(sh.cell_value(r, 1)).strip(), sh.cell_value(r, col)
        if num == '' or not name or rate == '':
            continue
        code = f'{int(num):04d}'
        rows.append([IS_NAMES.get(name, name), round(rate * 100, 2), IS_REGIONS[code[0]], code])
    rows.sort(key=lambda x: x[0])
    if len({r[3] for r in rows}) != len(rows) or not 50 < len(rows) < 80:
        sys.exit(f'is: unexpected rows ({len(rows)})')
    print(f'is: {len(rows)} municipalities')
    return 'window.COMMUNES = ' + json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + ';\n'


def update_is():
    path = os.path.join(HERE, 'is', 'communes.js')
    with tempfile.TemporaryDirectory() as tmp:
        js = build_is(tmp)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'{path}: {os.path.getsize(path) // 1024} KB')


JP_KENPO_XLSX = 'https://www.kyoukaikenpo.or.jp/assets/r8ippan3.xlsx'
# Sheet name -> (JIS prefecture code, English name).
JP_PREFS = {
    '北海道': ('01', 'Hokkaido'), '青森': ('02', 'Aomori'), '岩手': ('03', 'Iwate'), '宮城': ('04', 'Miyagi'),
    '秋田': ('05', 'Akita'), '山形': ('06', 'Yamagata'), '福島': ('07', 'Fukushima'), '茨城': ('08', 'Ibaraki'),
    '栃木': ('09', 'Tochigi'), '群馬': ('10', 'Gunma'), '埼玉': ('11', 'Saitama'), '千葉': ('12', 'Chiba'),
    '東京': ('13', 'Tokyo'), '神奈川': ('14', 'Kanagawa'), '新潟': ('15', 'Niigata'), '富山': ('16', 'Toyama'),
    '石川': ('17', 'Ishikawa'), '福井': ('18', 'Fukui'), '山梨': ('19', 'Yamanashi'), '長野': ('20', 'Nagano'),
    '岐阜': ('21', 'Gifu'), '静岡': ('22', 'Shizuoka'), '愛知': ('23', 'Aichi'), '三重': ('24', 'Mie'),
    '滋賀': ('25', 'Shiga'), '京都': ('26', 'Kyoto'), '大阪': ('27', 'Osaka'), '兵庫': ('28', 'Hyogo'),
    '奈良': ('29', 'Nara'), '和歌山': ('30', 'Wakayama'), '鳥取': ('31', 'Tottori'), '島根': ('32', 'Shimane'),
    '岡山': ('33', 'Okayama'), '広島': ('34', 'Hiroshima'), '山口': ('35', 'Yamaguchi'), '徳島': ('36', 'Tokushima'),
    '香川': ('37', 'Kagawa'), '愛媛': ('38', 'Ehime'), '高知': ('39', 'Kochi'), '福岡': ('40', 'Fukuoka'),
    '佐賀': ('41', 'Saga'), '長崎': ('42', 'Nagasaki'), '熊本': ('43', 'Kumamoto'), '大分': ('44', 'Oita'),
    '宮崎': ('45', 'Miyazaki'), '鹿児島': ('46', 'Kagoshima'), '沖縄': ('47', 'Okinawa'),
}
JP_SUFFIX = {'北海道': '', '東京': '都', '京都': '府', '大阪': '府'}


def build_jp(tmpdir):
    import openpyxl
    dest = os.path.join(tmpdir, 'kenpo.xlsx')
    subprocess.run(['curl', '-sSfL', '--retry', '3', '-A', 'Mozilla/5.0', '-o', dest, JP_KENPO_XLSX], check=True)
    wb = openpyxl.load_workbook(dest, read_only=True, data_only=True)
    rows = []
    for sheet in wb.sheetnames:
        if sheet not in JP_PREFS:
            sys.exit(f'jp: unexpected sheet {sheet}')
        code, name = JP_PREFS[sheet]
        rate = None
        # The rate row holds the health rate (no care), the rate with care, then the child levy and pension rates.
        for r in wb[sheet].iter_rows(min_row=1, max_row=12, values_only=True):
            if r and r[0] == '等級' and isinstance(r[5], float):
                rate, care = r[5], r[7] - r[5]
                break
        if rate is None or not .08 < rate < .12 or abs(care - .0162) > 1e-6:
            sys.exit(f'jp: bad rates for {sheet}: {rate}')
        rows.append([name, round(rate * 100, 2), sheet + JP_SUFFIX.get(sheet, '県'), code])
    if len(rows) != 47:
        sys.exit(f'jp: expected 47 prefectures, got {len(rows)}')
    rows.sort(key=lambda r: r[3])
    return 'window.COMMUNES = ' + json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + ';\n'


def update_jp():
    path = os.path.join(HERE, 'jp', 'communes.js')
    with tempfile.TemporaryDirectory() as tmp:
        js = build_jp(tmp)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'{path}: {os.path.getsize(path) // 1024} KB')


CA_T4127 = 'https://www.canada.ca/content/dam/cra-arc/formspubs/pub/t4127-jan/'
CA_RATES = CA_T4127 + 'rtsncmtrshldcnstnt-01-26e.csv'
CA_OTHER = CA_T4127 + 'thrrtsmnts-01-26e.csv'
# Province code, English name, sales tax (GST + HST/PST/QST).
CA_PROVS = [
    ('AB', 'Alberta', 5), ('BC', 'British Columbia', 12), ('MB', 'Manitoba', 12), ('NB', 'New Brunswick', 15),
    ('NL', 'Newfoundland and Labrador', 15), ('NS', 'Nova Scotia', 14), ('NT', 'Northwest Territories', 5),
    ('NU', 'Nunavut', 5), ('ON', 'Ontario', 13), ('PE', 'Prince Edward Island', 15), ('QC', 'Quebec', 14.975),
    ('SK', 'Saskatchewan', 11), ('YT', 'Yukon', 5),
]
# Full-year 2026 values from budgets announced after January (CA_T4127 July 2026, Option 2).
CA_OVERRIDES = {
    'BC': {'rate0': .056, 'red': {'max': 690, 'from': 25570, 'to': 44952, 'rate': .0356}},
    'NL': {'bpa': 13094},
    'PE': {'add': [200000, .20]},
}
# Rules the tables don't carry. eht: employer health or payroll tax for a large employer, ehtS for a small one (%).
# ptax: payroll tax withheld from the employee (%).
CA_EXTRA = {
    'AB': {'supp': {'floor': 4896, 'rate': .25}},
    'BC': {'eht': 1.95},
    'MB': {'eht': 2.15, 'bpaPhase': [200000, 400000]},
    'NL': {'eht': 2.0},
    'NT': {'ptax': 2},
    'NU': {'ptax': 2},
    'ON': {'eht': 1.95, 'surtax': [[5818, .20], [7446, .36]], 'ohp': 1, 'otr': {'base': 300, 'kid': 554}},
    'QC': {'b': [[0, .14], [54345, .19], [108680, .24], [132245, .2575]], 'bpa': 18952,
           'empDed': {'rate': .06, 'max': 1450}, 'eht': 4.26, 'ehtS': 1.65, 'wsdrf': 1, 'cnt': .06},
    'YT': {'bpaFed': 1, 'cea': 1501},
}


def ca_num(x):
    x = x.replace(',', '').replace('*', '').strip()
    x = ''.join(ch for ch in x if ch in '0123456789.')
    return float(x) if x else None


def ca_csv(url, tmpdir):
    # canada.ca stalls when curl sends a browser user agent.
    path = fetch(url, os.path.join(tmpdir, url.rsplit('/', 1)[1]))
    with open(path, encoding='latin-1') as f:
        return list(csv.reader(f))


def build_ca(tmpdir):
    rows = ca_csv(CA_RATES, tmpdir)
    tables, cur = {}, None
    for r in rows:
        if len(r) < 3:
            continue
        if r[0].strip():
            cur = r[0].strip()
        if r[1] in ('A', 'V'):
            tables.setdefault(cur, {})[r[1]] = [v for v in (ca_num(x) for x in r[2:]) if v is not None]
    bpa = {}
    for r in ca_csv(CA_OTHER, tmpdir):
        if len(r) > 1 and r[0].strip() in dict((p[0], 1) for p in CA_PROVS):
            bpa[r[0].strip()] = ca_num(r[1])

    out = []
    for code, name, sales in CA_PROVS:
        spec = {}
        if code in tables:
            t = tables[code]
            spec['b'] = [[int(a), round(v, 4)] for a, v in zip(t['A'], t['V'])]
            if bpa.get(code):
                spec['bpa'] = int(bpa[code])
        o = CA_OVERRIDES.get(code, {})
        if 'rate0' in o:
            spec['b'][0][1] = o['rate0']
        if 'bpa' in o:
            spec['bpa'] = o['bpa']
        if 'add' in o and spec['b'][-1][0] < o['add'][0]:
            spec['b'].append(o['add'])
        if 'red' in o:
            spec['red'] = o['red']
        spec.update(CA_EXTRA.get(code, {}))
        if code == 'MB':
            spec['bpa'] = 15780
        top = round(spec['b'][-1][1] * 100, 3)
        out.append([name, code, top, sales, spec])
    assert len(out) == 13 and all(e[4].get('b') and (e[4].get('bpa') or e[4].get('bpaFed')) for e in out), 'incomplete table'
    return 'window.COMMUNES = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n'


def update_ca():
    path = os.path.join(HERE, 'ca', 'communes.js')
    with tempfile.TemporaryDirectory() as tmp:
        js = build_ca(tmp)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'{path}: {os.path.getsize(path) // 1024} KB')


# State payroll tax (ISN) by state, 2026: [name, rate %, INEGI code]. No dataset to download; flat approximations.
MX_ISN = [
    ('Aguascalientes', 2.5, '01'), ('Baja California', 3.0, '02'), ('Baja California Sur', 2.5, '03'),
    ('Campeche', 3.0, '04'), ('Coahuila', 3.0, '05'), ('Colima', 3.0, '06'), ('Chiapas', 2.0, '07'),
    ('Chihuahua', 4.0, '08'), ('Ciudad de México', 4.0, '09'), ('Durango', 2.5, '10'),
    ('Guanajuato', 3.0, '11'), ('Guerrero', 2.3, '12'), ('Hidalgo', 3.0, '13'), ('Jalisco', 3.0, '14'),
    ('Estado de México', 3.0, '15'), ('Michoacán', 3.0, '16'), ('Morelos', 2.0, '17'), ('Nayarit', 2.0, '18'),
    ('Nuevo León', 4.0, '19'), ('Oaxaca', 3.0, '20'), ('Puebla', 3.0, '21'), ('Querétaro', 2.0, '22'),
    ('Quintana Roo', 3.0, '23'), ('San Luis Potosí', 2.5, '24'), ('Sinaloa', 3.0, '25'), ('Sonora', 2.0, '26'),
    ('Tabasco', 3.0, '27'), ('Tamaulipas', 3.0, '28'), ('Tlaxcala', 3.0, '29'), ('Veracruz', 3.0, '30'),
    ('Yucatán', 3.0, '31'), ('Zacatecas', 3.0, '32'),
]


def build_mx(tmpdir):
    rows = [[name, rate, code] for name, rate, code in MX_ISN]
    return 'window.COMMUNES = ' + json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + ';\n'


def update_mx():
    path = os.path.join(HERE, 'mx', 'communes.js')
    with tempfile.TemporaryDirectory() as tmp:
        js = build_mx(tmp)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'{path}: {os.path.getsize(path) // 1024} KB')


if __name__ == '__main__':
    {'be': update_be, 'fr': update_fr, 'ch': update_ch, 'dk': update_dk, 'pt': update_pt, 'fi': update_fi, 'it': update_it, 'se': update_se, 'li': update_li, 'hr': update_hr, 'us': update_us, 'is': update_is, 'jp': update_jp, 'ca': update_ca, 'mx': update_mx}.get(sys.argv[1] if len(sys.argv) > 1 else '', lambda: sys.exit(__doc__))()
