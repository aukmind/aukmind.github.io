#!/usr/bin/env python3
"""Writes link-preview meta (description, Open Graph, Twitter) into every page's <head>.

Run from anywhere after adding a page or a tax country: python3 shared/update_meta.py
"""
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = 'https://aukmind.com'
IMAGE = f'{SITE}/android-chrome-512x512.png'

COUNTRY = {
    'ad': 'Andorra', 'ae': 'the United Arab Emirates', 'at': 'Austria', 'au': 'Australia', 'be': 'Belgium',
    'bg': 'Bulgaria', 'br': 'Brazil', 'ca': 'Canada', 'ch': 'Switzerland', 'cn': 'China', 'cy': 'Cyprus',
    'cz': 'Czechia', 'de': 'Germany', 'dk': 'Denmark', 'ee': 'Estonia', 'es': 'Spain', 'fi': 'Finland',
    'fr': 'France', 'gb': 'the United Kingdom', 'ge': 'Georgia', 'gr': 'Greece', 'hk': 'Hong Kong',
    'hr': 'Croatia', 'hu': 'Hungary', 'ie': 'Ireland', 'in': 'India', 'is': 'Iceland', 'it': 'Italy',
    'jp': 'Japan', 'kr': 'South Korea', 'li': 'Liechtenstein', 'lt': 'Lithuania', 'lu': 'Luxembourg',
    'lv': 'Latvia', 'mc': 'Monaco', 'mt': 'Malta', 'mx': 'Mexico', 'nl': 'the Netherlands', 'no': 'Norway',
    'nz': 'New Zealand', 'pl': 'Poland', 'pt': 'Portugal', 'qa': 'Qatar', 'ro': 'Romania', 'sa': 'Saudi Arabia',
    'se': 'Sweden', 'sg': 'Singapore', 'si': 'Slovenia', 'sk': 'Slovakia', 'th': 'Thailand', 'ua': 'Ukraine',
    'us': 'the United States',
}

def flag(cc):
    return ''.join(chr(0x1F1E6 + ord(c) - ord('a')) for c in cc)

def cap(s):
    return s[0].upper() + s[1:]

COMPARE_DEFAULT = ['be', 'fr', 'es', 'ch']

PAGES = {
    'tools.html': ('Aukmind Tools', 'Free image, PDF, text-to-speech and LinkedIn tools that run entirely in your browser. Your files are never uploaded.'),
    'image/index.html': ('Image Toolbox', None),
    'image/bench.html': ('HEIC decode bench', 'Benchmarks HEIC decoders in your browser: speed and output of each decoder on your own photos.'),
    'pdfmerge/index.html': ('PDF Editor', None),
    'linkedin/index.html': ('LinkedIn Post Editor', 'Write LinkedIn posts with bold, italic, lists and emoji, preview how they look, then copy them. Runs in your browser.'),
    'tts/index.html': ('TTS Studio', 'Text to speech and voice cloning that run entirely in your browser. Nothing is uploaded, no account needed.'),
    'tax/index.html': ('Buying Power 🌍', f'Net salary, employer cost and real buying power after tax and VAT for {len(COUNTRY)} countries, income year 2026. Compare with minimum, median and average wages.'),
    'tax/inheritance.html': ('Inheritance Tax 🌍', f'What each heir pays in inheritance tax in {len(COUNTRY)} countries, by relationship and amount inherited, with the full calculation.'),
    'tax/compare/index.html': (
        'Compare Buying Power 🌍',
        f'Net pay, employer cost and buying power after tax and VAT, side by side for up to {len(COUNTRY)} countries. '
        f'Default view: {", ".join(flag(c) + " " + cap(COUNTRY[c]).removeprefix("The ") for c in COMPARE_DEFAULT)}.',
    ),
}
for p in ['privacy', 'terms']:
    for f in sorted((ROOT / p).glob('*.html')):
        PAGES[f'{p}/{f.name}'] = (None, None)

for cc, name in COUNTRY.items():
    PAGES[f'tax/{cc}/index.html'] = (None, (
        f'{cap(name)} {flag(cc)}, income year 2026: what an employee keeps after income tax, social contributions and VAT, '
        'what the employer pays, and how it compares with the minimum, median and average wage.'))
    PAGES[f'tax/{cc}/inheritance/index.html'] = (None, (
        f'{cap(name)} {flag(cc)}: inheritance tax owed by each heir, by relationship to the deceased and amount inherited, '
        'with the step-by-step calculation and a chart.'))

OWNED = re.compile(r'[ \t]*<(?:meta (?:name="(?:description|twitter:[^"]*)"|property="og:[^"]*")|link rel="canonical")[^>]*>\n')

def url_of(path):
    return f'{SITE}/{path.removesuffix("index.html")}'

def update(path, title, desc):
    f = ROOT / path
    src = f.read_text()
    page_title = html.unescape(re.search(r'<title>([^<]*)</title>', src).group(1))
    if desc is None:
        m = re.search(r'<meta name="description" content="([^"]*)"', src)
        desc = html.unescape(m.group(1))
    title = title or page_title
    head, sep, body = src.partition('</head>')
    head = OWNED.sub('', head)
    indent = re.search(r'\n([ \t]*)<title>', head).group(1)
    tags = [
        ('name', 'description', desc),
        ('property', 'og:type', 'website'),
        ('property', 'og:site_name', 'Aukmind'),
        ('property', 'og:title', title),
        ('property', 'og:description', desc),
        ('property', 'og:url', url_of(path)),
        ('property', 'og:image', IMAGE),
        ('name', 'twitter:card', 'summary'),
    ]
    block = f'{indent}<link rel="canonical" href="{url_of(path)}">\n' + ''.join(
        f'{indent}<meta {k}="{n}" content="{html.escape(v)}">\n' for k, n, v in tags)
    head = re.sub(r'(<title>[^<]*</title>\n)', lambda m: m.group(1) + block, head, count=1)
    out = head + sep + body
    if out != src:
        f.write_text(out)
        print('updated', path)

for path, spec in PAGES.items():
    if spec is not None:
        update(path, *spec)
