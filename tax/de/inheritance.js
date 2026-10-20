// German inheritance tax (Erbschaftsteuer) for deaths in 2026, by relationship. Loaded by ../inheritance.html?country=de.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  // §19: the whole taxable amount is taxed at the rate of its band, softened by §19(3).
  const BANDS = [75000, 300000, 600000, 6000000, 13000000, 26000000, INF];
  const RATES = {
    I: [.07, .11, .15, .19, .23, .27, .30],
    II: [.15, .20, .25, .30, .35, .40, .43],
    III: [.30, .30, .30, .30, .50, .50, .50],
  };
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'sibling', 'cohabit', 'other'];
  const CLASS = { partner: 'I', child: 'I', grandchild: 'I', parent: 'I', sibling: 'II', cohabit: 'III', other: 'III' };
  const ALLOW = { partner: 500000, child: 400000, grandchild: 200000, grandchildRep: 400000, parent: 100000, sibling: 20000, cohabit: 20000, other: 20000 };
  const VERS_CHILD = [[5, 52000], [10, 41000], [15, 30700], [20, 20500], [27, 10300]];
  const COLORS = { partner: 'partner', child: 'child', grandchild: 'grandchild', parent: 'relative', sibling: 'sibling', cohabit: 'nephew', other: 'other' };
  const SOURCES = [
    ['allow', 'https://www.gesetze-im-internet.de/erbstg_1974/__16.html'],
    ['vers', 'https://www.gesetze-im-internet.de/erbstg_1974/__17.html'],
    ['rates', 'https://www.gesetze-im-internet.de/erbstg_1974/__19.html'],
    ['home', 'https://www.gesetze-im-internet.de/erbstg_1974/__13.html'],
    ['costs', 'https://www.gesetze-im-internet.de/erbstg_1974/__10.html'],
    ['gifts', 'https://www.gesetze-im-internet.de/erbstg_1974/__14.html'],
    ['bverfg', 'https://www.roedl.com/insights/bundesverfassungsgericht-prueft-erbschaftsteuer/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  // Tax on a taxable amount for a class, with the §19(3) hardship relief just above each band limit.
  function bandTax(x, cls) {
    if (x <= 0) return { tax: 0, rate: 0, relief: 0 };
    const r = RATES[cls], i = BANDS.findIndex(b => x <= b);
    const full = x * r[i];
    if (i === 0) return { tax: full, rate: r[i], relief: 0 };
    const lim = BANDS[i - 1], prev = lim * r[i - 1];
    const capped = prev + (r[i] <= .30 ? .5 : .75) * (x - lim);
    const tax = Math.min(full, capped);
    return { tax, rate: r[i], relief: full - tax };
  }

  function versorgung(inp, rel) {
    let v = 0;
    if (rel === 'partner') v = 256000;
    else if (rel === 'child') { const a = pos(inp.age), b = VERS_CHILD.find(([to]) => a <= to); v = b ? b[1] : 0; }
    return Math.max(0, v - pos(inp.pensionCap));
  }

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), cls = CLASS[rel];
    const lines = [{ label: t('inh.line.share'), amt: share }];
    let base = share;
    // Family home: a spouse's share is fully exempt, a child's up to 200 m², if they move in for 10 years.
    const home = Math.min(pos(inp.home), share);
    if (home > 0 && inp.homeLive && (rel === 'partner' || rel === 'child')) {
      const area = pos(inp.area) || 200;
      const off = rel === 'partner' ? home : home * Math.min(1, 200 / area);
      lines.push({ label: t(rel === 'partner' ? 'line.homeSpouse' : 'line.homeChild'), amt: -off, cls: 'sub' });
      base -= off;
    }
    if (inp.costs) { const c = Math.min(base, 15000); lines.push({ label: t('line.costs'), amt: -c, cls: 'sub' }); base -= c; }
    const gifts = pos(inp.gifts);
    if (gifts > 0) { lines.push({ label: t('line.gifts'), amt: gifts, cls: 'sub' }); base += gifts; }
    const allow = rel === 'grandchild' && inp.rep ? ALLOW.grandchildRep : ALLOW[rel];
    lines.push({ label: t('line.allow', eur(allow)), amt: -Math.min(base, allow), cls: 'sub' });
    base = Math.max(0, base - allow);
    const vers = versorgung(inp, rel);
    if (vers > 0 && base > 0) { lines.push({ label: t('line.vers'), amt: -Math.min(base, vers), cls: 'sub' }); base = Math.max(0, base - vers); }
    const taxable = Math.floor(base / 100) * 100;
    lines.push({ label: t('line.taxable', cls), amt: taxable, cls: 'sub' });
    const b = bandTax(taxable, cls);
    let tax = b.tax;
    if (taxable > 0) lines.push({ label: t('line.rate', cls), amt: taxable, rate: b.rate, tax: taxable * b.rate });
    if (b.relief > .5) lines.push({ label: t('line.relief'), tax: -b.relief, cls: 'sub' });
    // Past gifts: the tax they'd cost on their own today is credited (a simplification of §14).
    if (gifts > 0 && tax > 0) {
      const giftTax = bandTax(Math.floor(Math.max(0, gifts - allow) / 100) * 100, cls).tax;
      if (giftTax > 0) { lines.push({ label: t('line.giftCredit'), tax: -Math.min(tax, giftTax), cls: 'sub' }); tax = Math.max(0, tax - giftTax); }
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const plain = { share: 0, age: 30, pensionCap: 0, home: 0, homeLive: false, area: 200, costs: false, gifts: 0, rep: false };

  return {
    SOURCES,
    GAPS: ['reform', 'business', 'valuation', 'gifts', 'vers', 'homeChild', 'goods', 'costs', 'lifeIns', 'residence'],
    state: { share: 500000, rel: 'child', age: 30, rep: false, pensionCap: 0, home: 0, homeLive: false, area: 120, costs: false, gifts: 0 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], age: ['age', 'num'], rep: ['rep', 'bool'], pens: ['pensionCap', 'num'],
      home: ['home', 'num'], live: ['homeLive', 'bool'], area: ['area', 'num'], costs: ['costs', 'bool'], gifts: ['gifts', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'age', type: 'int', label: 'age', hint: 'ageHint', min: 0, max: 120, show: s => s.rel === 'child' },
      { key: 'rep', type: 'check', label: 'rep', hint: 'repHint', show: s => s.rel === 'grandchild' },
      { key: 'pensionCap', type: 'money', label: 'pensionCap', hint: 'pensionCapHint', show: s => s.rel === 'partner' || s.rel === 'child', more: true },
      { key: 'home', type: 'money', label: 'home', hint: 'homeHint', show: s => s.rel === 'partner' || s.rel === 'child', more: true },
      { key: 'homeLive', type: 'check', label: 'homeLive', show: s => s.rel === 'partner' || s.rel === 'child', more: true },
      { key: 'area', type: 'int', label: 'area', hint: 'areaHint', min: 1, max: 2000, show: s => s.rel === 'child' && s.homeLive, more: true },
      { key: 'costs', type: 'check', label: 'costs', hint: 'costsHint', more: true },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax({ ...s, rep: false }, k) })),
    },
    chart: {
      xMax: 3000000, step: 10000, yMax: 50,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ ...plain, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('cls.I'), t('cls.II'), t('cls.III')], rows: BANDS.map((b, i) => ({
        to: b === INF ? t('inh.above') : eur(b),
        cells: ['I', 'II', 'III'].map(c => ({ r: RATES[c][i], txt: pct(RATES[c][i], 0) })),
      })) } },
      { h: t('refAllowH'), list: ['classes', 'partner', 'child', 'grandchild', 'other', 'vers', 'home', 'relief'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
