#!/usr/bin/env python3
"""Rebuild tax/currencies.js: how many units of each currency one euro buys.

    python3 update_currencies.py

Only EUR pairs are stored; any other pair goes through the euro (TaxI18n.fx).
Sources: ECB reference rates, the National Bank of Ukraine for UAH and the National Bank of Georgia for GEL
(the ECB publishes neither), and the dollar pegs of AED, SAR and QAR.
"""
import datetime
import json
import os
import re
import subprocess
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
ECB_XML = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'
NBU_JSON = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&json'
NBG_JSON = 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json/?currencies=EUR'
# Official pegs to the US dollar.
USD_PEGS = {'AED': 3.6725, 'SAR': 3.75, 'QAR': 3.64}
# Currencies the euro replaced at a fixed rate, kept so old figures still convert.
FIXED = {'BGN': 1.95583}


def fetch(url, dest):
    subprocess.run(['curl', '-sSfL', '--retry', '3', '-o', dest, url], check=True)
    with open(dest, encoding='utf-8') as f:
        return f.read()


def main():
    with tempfile.TemporaryDirectory() as tmp:
        xml = fetch(ECB_XML, os.path.join(tmp, 'ecb.xml'))
        nbu = json.loads(fetch(NBU_JSON, os.path.join(tmp, 'nbu.json')))
        nbg = json.loads(fetch(NBG_JSON, os.path.join(tmp, 'nbg.json')))

    day = re.search(r"time='(\d{4}-\d{2}-\d{2})'", xml).group(1)
    rates = {c: float(r) for c, r in re.findall(r"currency='([A-Z]{3})' rate='([\d.]+)'", xml)}
    if len(rates) < 20 or 'USD' not in rates:
        raise SystemExit(f'ECB file looks wrong: {len(rates)} rates')
    for c, r in FIXED.items():
        rates.setdefault(c, r)
    rates['UAH'] = float(nbu[0]['rate'])
    rates['GEL'] = float(nbg[0]['currencies'][0]['rate'])
    for c, peg in USD_PEGS.items():
        rates[c] = round(rates['USD'] * peg, 4)
    rates['EUR'] = 1.0

    out = {
        'date': day,
        'built': datetime.date.today().isoformat(),
        'sources': {'ECB': ECB_XML, 'UAH': NBU_JSON, 'GEL': NBG_JSON, **{c: f'USD peg {p}' for c, p in USD_PEGS.items()}},
        'perEur': dict(sorted(rates.items())),
    }
    path = os.path.join(HERE, 'currencies.js')
    with open(path, 'w', encoding='utf-8') as f:
        f.write('window.TAX_FX = ' + json.dumps(out, separators=(',', ':')) + ';\n')
    print(f'{path}: {len(rates)} currencies, ECB rates of {day}')


if __name__ == '__main__':
    main()
