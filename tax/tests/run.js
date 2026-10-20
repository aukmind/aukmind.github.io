// Headless checks for the tax pages: node tax/tests/run.js [cc ...] [compare] [--only salary|inheritance] [--shots]
// Serves the repo itself, so no other server is needed. Exit code 1 on any failure.
// The compare page and the gross/net/cost switch run with a full run, or when `compare` is named.
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '../..');
const TAX = path.join(ROOT, 'tax');
const args = process.argv.slice(2);
const flag = n => args.includes(n);
const opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const only = opt('--only');
const SHOTS = flag('--shots') && path.join(__dirname, 'shots');
const LANGS = ['en', 'nl', 'fr'];
// camelCase keys the shells ask for (polAllow, vmNotDue): one showing up as text means its string is missing.
const SHELL_KEYS = [...new Set(['index.html', 'inheritance.html', 'i18n.js'].flatMap(f =>
  [...fs.readFileSync(path.join(TAX, f), 'utf8').matchAll(/\bt\(\s*['"`]([a-z]+[A-Z][\w]*)['"`]/g)].map(m => m[1])))];
const RAW_KEY = /\b(?:ref|tip|src|region|size|pol|inh|refWage|country|bd|unit|min|allow|rel)\.[a-zA-Z]\w*/;

const allCountries = () => {
  const src = fs.readFileSync(path.join(TAX, 'i18n.js'), 'utf8');
  return JSON.parse(src.match(/const COUNTRIES = (\[[^\]]*\])/)[1].replace(/'/g, '"'));
};
const named = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--only');
const EXTRAS = named.includes('compare') || (!named.length && !only);
const picked = named.filter(a => a !== 'compare');
const countries = picked.length ? picked : named.length ? [] : allCountries().filter(cc => fs.existsSync(path.join(TAX, cc, 'salary.js')));

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png' };
function serve() {
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let f = path.join(ROOT, p);
    if (!f.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) {
      if (!p.endsWith('/')) { res.writeHead(301, { Location: p + '/' + (req.url.split('?')[1] ? '?' + req.url.split('?')[1] : '') }); return res.end(); }
      f = path.join(f, 'index.html');
    }
    fs.readFile(f, (err, buf) => {
      if (err) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
      res.end(buf);
    });
  });
  return new Promise(ok => server.listen(0, '127.0.0.1', () => ok(server)));
}

// Playwright can't download browsers on every distro: fall back to the newest cached headless shell.
async function launch() {
  if (process.env.CHROMIUM_PATH) return chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
  try { return await chromium.launch(); } catch (e) {
    const cache = path.join(require('os').homedir(), '.cache/ms-playwright');
    const shells = fs.existsSync(cache) ? fs.readdirSync(cache).filter(d => d.startsWith('chromium_headless_shell-')).sort().reverse() : [];
    for (const d of shells) {
      for (const sub of fs.readdirSync(path.join(cache, d))) {
        const exe = path.join(cache, d, sub, 'chrome-headless-shell');
        if (fs.existsSync(exe)) return chromium.launch({ executablePath: exe });
      }
    }
    throw e;
  }
}

const results = [];
const fail = (cc, what, msg) => results.push({ cc, what, ok: false, msg });
const pass = (cc, what) => results.push({ cc, what, ok: true });

// Opens a wrapper URL in a fresh context (saved language leaks otherwise) and returns the framed page.
async function open(browser, url, { retries = 2 } = {}) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/ERR_NETWORK_CHANGED|ERR_CONNECTION|favicon/.test(m.text())) errors.push('console: ' + m.text()); });
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    const frame = await waitFrame(page);
    await frame.waitForSelector('h1', { timeout: 20000 });
    await page.waitForTimeout(600);
    // A CDN script (Vue, Chart.js) that failed quietly is a load failure too, not a page bug.
    if (errors.some(e => /(Chart|Vue) is not defined/.test(e))) throw new Error('CDN script missing: ' + errors[0]);
    return { ctx, page, frame, errors };
  } catch (e) {
    await ctx.close();
    if (retries > 0) return open(browser, url, { retries: retries - 1 });
    throw e;
  }
}
async function waitFrame(page) {
  for (let i = 0; i < 100; i++) {
    const f = page.frames().find(f => f !== page.mainFrame() && f.url().includes('country='));
    if (f) return f;
    await page.waitForTimeout(100);
  }
  throw new Error('no framed page');
}

// Text and tooltip checks shared by both pages.
async function checkContent(frame) {
  return frame.evaluate(async ([RAW, KEYS]) => {
    const RAW_KEY = new RegExp(RAW);
    const CAMEL = new RegExp(`\\b(${KEYS.join('|')})\\b`);
    const bad = [];
    const scan = (where, txt) => {
      if (/\bNaN\b|\bundefined\b|\bnull\b|Infinity/.test(txt)) bad.push(`${where}: ${txt.match(/.{0,40}(NaN|undefined|null|Infinity).{0,20}/)?.[0]}`);
      const m = txt.match(RAW_KEY) || txt.match(CAMEL); if (m) bad.push(`${where}: raw key ${m[0]}`);
    };
    scan('page', document.body.innerText);
    const tips = [...document.querySelectorAll('*')].filter(el => el._tipKey);
    for (const el of tips) {
      el.dispatchEvent(new Event('mouseenter'));
      await new Promise(r => setTimeout(r, 15));
      const tip = document.querySelector('.tip');
      if (tip) scan(`tip ${el._tipKey}`, tip.innerText);
      el.dispatchEvent(new Event('mouseleave'));
    }
    for (const b of document.querySelectorAll('.big b, .tiles b')) if (b.scrollWidth > b.clientWidth + 1) bad.push(`overflow: ${b.innerText}`);
    return { bad, tips: tips.length };
  }, [RAW_KEY.source, SHELL_KEYS]);
}

async function salary(browser, base, cc) {
  const W = `${base}/tax/${cc}/`;
  // Reference wages and the step come from the module itself, so cases scale with the currency.
  const probe = await open(browser, W + '?lang=en');
  const meta = await probe.frame.evaluate(() => {
    const id = x => x;
    const C = window.TAX_COUNTRY({ t: id, eur: String, eur2: String, num: String, pct: String, int: String, vr: String, esc: String, link: id, sources: () => '' });
    const ref = k => (C.REF_WAGES.find(r => r.key === k) || {}).m;
    return { step: C.nextStep || 100, min: ref('min'), med: ref('med') || ref('avg'), roles: C.minRoles || [], def: C.state.salary };
  });
  await probe.ctx.close();
  const med = Math.round((meta.med || 30 * meta.step) / meta.step) * meta.step;
  const cases = [
    ...LANGS.map(l => [`default ${l}`, `?lang=${l}`]),
    meta.min && ['minimum wage', `?lang=en&salary=${Math.round(meta.min)}`],
    ['high salary', `?lang=en&salary=${med * 10}`],
    ['couple with children', `?lang=en&salary=${med}&household=joint&partner=${med * 12}&kids=2`],
    ['minister', `?lang=en&regime=minister`],
    ['minister fr', `?lang=fr&regime=minister`],
  ].filter(Boolean);
  for (const [name, q] of cases) {
    const what = `salary ${name}`;
    try {
      const o = await open(browser, W + q);
      const c = await checkContent(o.frame);
      const rows = await o.frame.evaluate(() => document.querySelectorAll('table tbody tr').length);
      const problems = [...o.errors, ...c.bad, ...(rows ? [] : ['no table rows'])];
      if (SHOTS) await o.page.screenshot({ path: path.join(SHOTS, `${cc}-salary-${name.replace(/\W+/g, '_')}.png`), fullPage: true });
      problems.length ? fail(cc, what, problems.slice(0, 5).join(' | ')) : pass(cc, what);
      await o.ctx.close();
    } catch (e) { fail(cc, what, e.message.split('\n')[0]); }
  }

  // URL round trip: the value survives, and editing reaches the wrapper's address bar.
  try {
    // The page leaves defaults out of the URL, so neither value may be the default.
    const pick = x => x === meta.def ? x + meta.step : x;
    const v = pick(med + meta.step), v2 = pick(v + meta.step);
    const o = await open(browser, `${W}?lang=en&salary=${v}`);
    const got = await o.frame.$eval('#salary', el => +el.value);
    await o.frame.fill('#salary', String(v2));
    await o.page.waitForTimeout(500);
    const url = o.page.url();
    const ok = got === v && url.includes(`salary=${v2}`) && url.includes(`/tax/${cc}/`);
    ok && !o.errors.length ? pass(cc, 'url round trip') : fail(cc, 'url round trip', `loaded ${got}, wrapper ${url} ${o.errors.join(' | ')}`);
    await o.ctx.close();
  } catch (e) { fail(cc, 'url round trip', e.message.split('\n')[0]); }

  // Old links redirect to the wrapper.
  try {
    const ctx = await browser.newContext(); const p = await ctx.newPage();
    await p.goto(`${base}/tax/index.html?country=${cc}&lang=en`, { waitUntil: 'load' });
    await p.waitForURL(u => u.pathname.endsWith(`/tax/${cc}/`), { timeout: 10000 });
    pass(cc, 'old link redirect');
    await ctx.close();
  } catch (e) { fail(cc, 'old link redirect', e.message.split('\n')[0]); }
}

async function inheritance(browser, base, cc) {
  const W = `${base}/tax/${cc}/inheritance/`;
  for (const l of LANGS) {
    const what = `inheritance ${l}`;
    try {
      const o = await open(browser, `${W}?lang=${l}`);
      const problems = [...(await checkContent(o.frame)).bad];
      // Every option button in the inputs: relationships, regions, switches. An option can hide others.
      const n = await o.frame.evaluate(() => document.querySelectorAll('aside .seg button').length);
      for (let i = 0; i < n; i++) {
        await o.frame.evaluate(i => document.querySelectorAll('aside .seg button')[i]?.click(), i);
        await o.page.waitForTimeout(80);
        const bad = await o.frame.evaluate(() => /\bNaN\b|\bundefined\b|Infinity/.test(document.querySelector('main').innerText));
        if (bad) problems.push(`NaN/undefined after option ${i}`);
      }
      if (SHOTS) await o.page.screenshot({ path: path.join(SHOTS, `${cc}-inheritance-${l}.png`), fullPage: true });
      problems.push(...o.errors);
      problems.length ? fail(cc, what, problems.slice(0, 5).join(' | ')) : pass(cc, `${what} (${n} options)`);
      await o.ctx.close();
    } catch (e) { fail(cc, what, e.message.split('\n')[0]); }
  }
}

// The gross/net/cost switch rewrites the amount and keeps the choice in the wrapper's URL.
async function basisSwitch(browser, base, cc) {
  const what = 'basis switch';
  try {
    const o = await open(browser, `${base}/tax/${cc}/?lang=en&salary=3000`);
    const val = () => o.frame.$eval('#salary', el => +el.value);
    const pick = async b => {
      await o.frame.click(`.seg.basis button:nth-child(${['cost', 'gross', 'net'].indexOf(b) + 1})`);
      await o.page.waitForTimeout(400);
      return { v: await val(), url: o.page.url() };
    };
    const g0 = await val();
    const net = await pick('net'), cost = await pick('cost'), back = await pick('gross');
    const problems = [...o.errors];
    if (!net.url.includes('basis=net')) problems.push(`net: URL ${net.url}`);
    if (!(net.v > 0 && net.v < g0)) problems.push(`net: ${g0} became ${net.v}`);
    if (!cost.url.includes('basis=cost')) problems.push(`cost: URL ${cost.url}`);
    if (!(cost.v > g0)) problems.push(`cost: ${g0} became ${cost.v}`);
    // A param the visitor touched stays in the URL, even back at its default.
    if (!back.url.includes('basis=gross')) problems.push(`gross: URL ${back.url}`);
    if (Math.abs(back.v - g0) > 1) problems.push(`gross: ${g0} came back as ${back.v}`);
    problems.length ? fail(cc, what, problems.slice(0, 5).join(' | ')) : pass(cc, what);
    await o.ctx.close();
  } catch (e) { fail(cc, what, e.message.split('\n')[0]); }
}

// The compare page isn't framed: it loads each country's salary module itself, one after the other.
async function comparePage(browser, base) {
  const CC = ['be', 'fr', 'gb', 'us', 'jp'];
  const what = 'compare page';
  const attempt = async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error' && !/ERR_NETWORK_CHANGED|ERR_CONNECTION|favicon/.test(m.text())) errors.push('console: ' + m.text()); });
    try {
      await page.goto(`${base}/tax/compare/?lang=en&c=${CC.join(',')}`, { waitUntil: 'load', timeout: 30000 });
      await page.waitForFunction(n => document.querySelector('table.cmp').querySelectorAll('tbody tr').length === n || document.querySelector('.warn'), CC.length, { timeout: 30000 });
      await page.waitForTimeout(600);
      return { ctx, page, errors };
    } catch (e) { await ctx.close(); throw e; }
  };
  try {
    let o;
    try { o = await attempt(); } catch (e) { o = await attempt(); }
    const c = await checkContent(o.page.mainFrame());
    const info = await o.page.evaluate(() => ({
      rows: document.querySelector('table.cmp').querySelectorAll('tbody tr').length,
      warn: document.querySelector('.warn')?.innerText,
      tableNaN: /\bNaN\b|Infinity/.test(document.querySelector('table.cmp').innerText),
      charts: [...document.querySelectorAll('canvas')].map(cv => ({ w: cv.width, sets: window.Chart?.getChart(cv)?.data.datasets.length || 0 })),
    }));
    const problems = [...o.errors, ...c.bad];
    if (info.warn) problems.push(info.warn);
    if (info.rows !== CC.length) problems.push(`${info.rows} table rows, expected ${CC.length}`);
    if (info.tableNaN) problems.push('NaN in table');
    if (info.charts.length < 2) problems.push(`${info.charts.length} canvases`);
    // The line charts draw one series per country; the bar and dot charts group them differently.
    for (const [i, ch] of info.charts.entries()) if (!ch.w) problems.push(`chart ${i + 1}: no width`);
    if (info.charts.filter(ch => ch.sets >= CC.length).length < 2) problems.push(`fewer than 2 charts with a series per country: ${info.charts.map(ch => ch.sets).join(', ')}`);
    if (SHOTS) await o.page.screenshot({ path: path.join(SHOTS, 'compare.png'), fullPage: true });
    problems.length ? fail('compare', what, problems.slice(0, 5).join(' | ')) : pass('compare', what);
    await o.ctx.close();
  } catch (e) { fail('compare', what, e.message.split('\n')[0]); }
}

// file:// has no server: the wrapper must still frame the page without errors.
async function fileUrl(browser, cc) {
  for (const page of ['', 'inheritance/']) {
    const what = `file:// ${page || 'salary'}`;
    try {
      const o = await open(browser, 'file://' + path.join(TAX, cc, page, 'index.html'));
      o.errors.length ? fail(cc, what, o.errors.join(' | ')) : pass(cc, what);
      await o.ctx.close();
    } catch (e) { fail(cc, what, e.message.split('\n')[0]); }
  }
}

(async () => {
  if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await launch();
  const queue = [...countries];
  const worker = async () => {
    for (let cc; (cc = queue.shift());) {
      if (only !== 'inheritance') await salary(browser, base, cc);
      if (only !== 'salary') await inheritance(browser, base, cc);
      if (!only) await fileUrl(browser, cc);
      const mine = results.filter(r => r.cc === cc);
      console.log(`${cc}: ${mine.filter(r => r.ok).length}/${mine.length} ok`);
      for (const r of mine.filter(r => !r.ok)) console.log(`  FAIL ${r.what}: ${r.msg}`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, countries.length) }, worker));
  if (EXTRAS) {
    await comparePage(browser, base);
    for (const cc of ['be', 'gb']) await basisSwitch(browser, base, cc);
    for (const r of results.filter(r => r.what === 'compare page' || r.what === 'basis switch')) console.log(`${r.ok ? 'ok  ' : 'FAIL'} ${r.cc} ${r.what}${r.ok ? '' : ': ' + r.msg}`);
  }
  await browser.close();
  server.close();
  const bad = results.filter(r => !r.ok).length;
  console.log(`\n${results.length - bad}/${results.length} checks passed across ${countries.length} countries${EXTRAS ? ' and the compare page' : ''}`);
  process.exit(bad ? 1 : 0);
})();
