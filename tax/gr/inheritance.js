// Greek inheritance tax for deaths in 2026 (Capital Taxation Code, law 5219/2025), paid by each heir. Loaded by ../inheritance.html?country=gr.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  const SCALES = {
    A: [[150000, 0], [300000, .01], [600000, .05], [INF, .10]],
    // Spouse after 5 years, or a minor child: 400,000 free, eating into the 1% and 5% bands.
    A400: [[400000, 0], [600000, .05], [INF, .10]],
    B: [[30000, 0], [100000, .05], [300000, .10], [INF, .20]],
    C: [[6000, 0], [72000, .20], [267000, .30], [INF, .40]],
  };
  const RELS = ['spouse', 'minor', 'child', 'parent', 'sibling', 'step', 'other'];
  const CAT = { spouse: 'A', minor: 'A', child: 'A', parent: 'A', sibling: 'B', step: 'B', other: 'C' };
  const HOME_RELS = ['spouse', 'minor', 'child'];
  const COLORS = { spouse: '--r-partner', minor: '--r-child', child: '--r-grandchild', parent: '--r-parent', sibling: '--r-sibling', step: '--r-step', other: '--r-other' };
  const SOURCES = [
    ['scale', 'https://www.taxheaven.gr/law/5219/2025/arthro/79'],
    ['cats', 'https://www.taxheaven.gr/law/5219/2025/arthro/78'],
    ['exempt', 'https://www.taxheaven.gr/law/5219/2025/arthro/75'],
    ['home', 'https://www.taxheaven.gr/law/5219/2025/arthro/76'],
    ['pwc', 'https://taxsummaries.pwc.com/greece/individual/other-taxes'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  const scaleKey = (inp, rel) => rel === 'minor' || (rel === 'spouse' && inp.long) ? 'A400' : CAT[rel];

  // Main-home relief: 200,000 single, 250,000 married, plus 25,000 for each of two children and 30,000 from the third.
  function homeCap(inp) {
    const kids = Math.max(0, Math.floor(pos(inp.homeKids)));
    return (inp.homeStatus === 'married' ? 250000 : 200000) + 25000 * Math.min(kids, 2) + 30000 * Math.max(0, kids - 2);
  }

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    let base = share;
    if (HOME_RELS.includes(rel)) {
      const off = Math.min(pos(inp.home), base, homeCap(inp));
      if (off > 0) { lines.push({ label: t('line.home', eur(homeCap(inp))), amt: -off, cls: 'sub' }); base -= off; }
    }
    const key = scaleKey(inp, rel), sc = SCALES[key];
    lines.push({ label: t('line.free.' + key, eur(sc[0][0])), amt: -Math.min(base, sc[0][0]), cls: 'sub' });
    let tax = 0, lo = sc[0][0];
    for (const [hi, r] of sc.slice(1)) {
      if (base <= lo) break;
      const part = Math.min(base, hi) - lo;
      tax += part * r;
      lines.push({ label: hi === INF ? t('line.above', eur(lo)) : t('line.band', eur(lo), eur(hi)), amt: part, rate: r, tax: part * r });
      lo = hi;
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    GAPS: ['a400', 'homeCond', 'value', 'gifts'],
    SOURCES,
    currency: 'EUR',
    nextStep: 100,
    state: { share: 300000, rel: 'child', long: true, home: 0, homeStatus: 'married', homeKids: 0 },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], long: ['long', 'bool'], home: ['home', 'num'], hs: ['homeStatus', 'str', ['single', 'married']], hk: ['homeKids', 'num'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'shareLabel', hint: 'shareHint', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'heirIs', options: RELS, optLabel: 'rel.' },
      { key: 'long', type: 'check', label: 'long', hint: 'longHint', show: s => s.rel === 'spouse' },
      { key: 'home', type: 'money', label: 'home', hint: 'homeHint', step: 10000, more: true, show: s => HOME_RELS.includes(s.rel) },
      { key: 'homeStatus', type: 'seg', label: 'homeStatus', options: ['single', 'married'], optLabel: 'hs.', more: true, show: s => HOME_RELS.includes(s.rel) && pos(s.home) > 0 },
      { key: 'homeKids', type: 'stepper', label: 'homeKids', min: 0, more: true, show: s => HOME_RELS.includes(s.rel) && pos(s.home) > 0 },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 2000000, step: 10000, yMax: 40,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.long],
      lines: s => {
        const f = key => x => {
          const sc = SCALES[key];
          let tax = 0, lo = sc[0][0];
          for (const [hi, r] of sc.slice(1)) { if (x > lo) tax += (Math.min(x, hi) - lo) * r; lo = hi; }
          return x > 0 ? tax / x : 0;
        };
        const mine = scaleKey(s, s.rel);
        return ['A400', 'A', 'B', 'C'].map(k => ({ label: t('cat.' + k), color: { A400: '--r-partner', A: '--r-child', B: '--r-sibling', C: '--r-other' }[k], me: k === mine, f: f(k) }));
      },
    },
    ref: () => [
      ...['A', 'B', 'C'].map(k => {
        let lo = 0;
        return { h: t('refH.' + k), table: { head: [t('refBand'), t('inh.rate')], rows: SCALES[k].map(([hi, r]) => {
          const row = { to: hi === INF ? `${t('inh.above')} ${eur(lo)}` : `${eur(lo)} – ${eur(hi)}`, cells: [{ r, txt: r ? pct(r, 0) : t('refFree') }] };
          lo = hi;
          return row;
        }) } };
      }),
      { h: t('refAllowH'), list: ['cats', 'spouse', 'home', 'gifts', 'other'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
