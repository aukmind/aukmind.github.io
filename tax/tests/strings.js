// Static check that every translation key the pages can ask for exists in en, nl and fr.
// node tax/tests/strings.js [cc ...]   Exit code 1 on any missing key.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const TAX = path.resolve(__dirname, '..');
const LANGS = ['en', 'nl', 'fr'];
const read = f => fs.readFileSync(path.join(TAX, f), 'utf8');

// Shell keys that only matter when a country turns the matching feature on.
const GATED = {
  under3: C => C.features && C.features.under3,
  under3Hint: C => C.features && C.features.under3,
  fewerUnder3: C => C.features && C.features.under3,
  moreUnder3: C => C.features && C.features.under3,
  polPub: C => (C.POLITICIANS || []).some(p => p.pub != null),
  includePa: C => C.features && C.features.pa,
  paToggle: C => C.features && C.features.pa,
  cadre: C => C.features && C.features.cadre,
  vmNotDue: C => C.local && !/=>\s*false\s*$/.test(String(C.local.notDue)),
  commune: C => C.communes !== false,
  searchCommune: C => C.communes !== false,
  searchN: C => C.communes !== false,
  loadingCommunes: C => C.communes !== false,
  communesError: C => C.communes !== false,
  setByCommune: C => C.communes !== false,
  region: C => C.regions && C.regions.length,
  employerSize: C => C.sizes && C.sizes.length,
  lowest: C => C.local,
  highest: C => C.local,
};

function load(files, global) {
  const ctx = { window: {}, Vue: { ref: v => ({ value: v }) }, console, matchMedia: () => ({ matches: false }), innerWidth: 1280, navigator: { languages: ['en'] }, location: { search: '' }, document: {} };
  vm.createContext(ctx);
  for (const f of files) vm.runInContext(read(f), ctx, { filename: f });
  return ctx.window[global];
}

// Literal keys only: t('key'), t("key") or t(`key`) without interpolation.
// A key followed by + is a prefix ('region.' + k): those are checked from the data below.
const literalKeys = src => [...src.matchAll(/\bt\(\s*(['"`])([A-Za-z][\w.\-]*)\1(?!\s*\+)/g)].map(m => m[2]).filter(k => !k.endsWith('.'));

const id = x => x;
const stubs = { t: id, eur: String, eur2: String, num: String, pct: String, int: String, vr: String, esc: String, link: id, sources: () => '' };

function check(cc) {
  const problems = [];
  const common = load(['common.strings.js'], 'TAX_COMMON');
  for (const page of ['salary', 'inheritance']) {
    const file = `${cc}/${page}.js`;
    if (!fs.existsSync(path.join(TAX, file))) { problems.push(`${file} missing`); continue; }
    const own = load([`${cc}/${page}.strings.js`], 'TAX_STRINGS');
    const dict = { ...common, ...own };
    const C = page === 'salary'
      ? load([`${cc}/${page}.strings.js`, file], 'TAX_COUNTRY')(stubs)
      : load([`${cc}/${page}.strings.js`, file], 'TAX_INHERIT')({ t: id, eur: String, pct: String });

    const want = new Map();
    const need = (k, from) => { if (!want.has(k)) want.set(k, from); };
    const shell = page === 'salary' ? 'index.html' : 'inheritance.html';
    for (const k of literalKeys(read(shell))) if (!GATED[k] || GATED[k](C)) need(k, shell);
    for (const k of literalKeys(read('i18n.js'))) need(k, 'i18n.js');
    for (const k of literalKeys(read(file))) need(k, file);

    for (const k of C.GAPS || []) need('gap.' + k, 'GAPS');
    if (page === 'salary') {
      for (const k of C.regions || []) need('region.' + k, 'regions');
      for (const k of C.sizes || []) need('size.' + k, 'sizes');
      for (const k of C.minRoles || []) need('minRole.' + k, 'minRoles');
      for (const r of C.REF_WAGES || []) need('refWage.' + r.key, 'REF_WAGES');
      for (const d of C.ROW_DEFS || []) { need('row.' + d.key, 'ROW_DEFS'); need('rowDesc.' + d.key, 'ROW_DEFS'); need('base.' + d.base, 'ROW_DEFS'); }
      for (const k of Object.keys(C.SRC || {})) need('src.' + k, 'SRC');
      for (const k of C.refKeys || []) need('ref.' + k, 'refKeys');
      for (const p of C.POLITICIANS || []) {
        need('polTitle.' + p.kind, 'POLITICIANS');
        if (!p.name) need('stat.' + p.key, 'POLITICIANS');
        need('pol.' + (p.role || 'stat.' + p.key), 'POLITICIANS');
      }
    } else {
      for (const [k] of C.SOURCES || []) need('src.' + k, 'SOURCES');
      for (const f of C.fields || []) if (f.label) need(f.label, 'fields');
      if (C.totalLabel) need(C.totalLabel, 'totalLabel');
      if (C.moreLabel) need(C.moreLabel, 'moreLabel');
    }

    for (const [k, from] of want) {
      if (!(k in dict)) problems.push(`${page}: missing '${k}' (used by ${from})`);
    }
    for (const [k, e] of Object.entries(own)) {
      const gaps = LANGS.filter(l => e == null || e[l] == null || e[l] === '');
      if (gaps.length) problems.push(`${page}: '${k}' has no ${gaps.join('/')}`);
    }
  }
  return problems;
}

const common = load(['common.strings.js'], 'TAX_COMMON');
const commonGaps = Object.entries(common).filter(([, e]) => LANGS.some(l => e[l] == null || e[l] === '')).map(([k]) => `common: '${k}' lacks a language`);

const all = JSON.parse(read('i18n.js').match(/const COUNTRIES = (\[[^\]]*\])/)[1].replace(/'/g, '"'));
const named = process.argv.slice(2);
const countries = named.length ? named : all.filter(cc => fs.existsSync(path.join(TAX, cc, 'salary.js')));
let bad = commonGaps.length;
for (const p of commonGaps) console.log(p);
for (const cc of countries) {
  let problems;
  try { problems = check(cc); } catch (e) { problems = [`crashed: ${e.message}`]; }
  bad += problems.length;
  console.log(`${cc}: ${problems.length ? problems.length + ' missing' : 'ok'}`);
  for (const p of problems) console.log('  ' + p);
}
process.exit(bad ? 1 : 0);
