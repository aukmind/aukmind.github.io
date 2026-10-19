// US estate tax for deaths in 2026 (federal, after the One Big Beautiful Bill Act) plus state estate and inheritance taxes.
// Loaded by ../inheritance.html?country=us.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  const FED = { ex: 15000000, rate: .40 };
  const RELS = ['partner', 'child', 'sibling', 'nephew', 'other'];
  const STATES = ['none', 'CT', 'DC', 'HI', 'IL', 'ME', 'MD', 'MA', 'MN', 'NY', 'OR', 'RI', 'VT', 'WA', 'KY', 'NE', 'NJ', 'PA'];
  const SOURCES = [
    ['rp', 'https://www.irs.gov/pub/irs-drop/rp-25-32.pdf'],
    ['estate', 'https://www.irs.gov/businesses/small-businesses-self-employed/estate-tax'],
    ['tf', 'https://taxfoundation.org/data/all/state/estate-inheritance-tax/'],
    ['wa', 'https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bills/Session%20Laws/Senate/6347.SL.htm'],
    ['dc', 'https://learn.valur.com/district-of-columbia-estate-tax-explained/'],
    ['cp', 'https://creativeplanning.com/insights/taxes/state-estate-inheritance-taxes/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  const bands = (x, br, from = 0) => {
    let tax = 0, lo = from;
    for (const [hi, r] of br) { if (x > lo) tax += (Math.min(x, hi) - lo) * r; lo = Math.max(lo, hi); }
    return tax;
  };
  // Relative bands: widths above the exemption.
  const rel = (x, br) => { let tax = 0, lo = 0; for (const [hi, r] of br) { if (x > lo) tax += (Math.min(x, hi) - lo) * r; lo = hi; } return tax; };
  // The old federal state death tax credit table (IRC 2011(b)), on the taxable estate less $60,000.
  const T2011 = [[40000, 0], [90000, .008], [140000, .016], [240000, .024], [440000, .032], [640000, .04], [840000, .048], [1040000, .056],
    [1540000, .064], [2040000, .072], [2540000, .08], [3040000, .088], [3540000, .096], [4040000, .104], [5040000, .112], [6040000, .12],
    [7040000, .128], [8040000, .136], [9040000, .144], [10040000, .152], [INF, .16]];
  const t2011 = E => bands(Math.max(0, E - 60000), T2011);
  const NY_TENT = [[500000, .0306], [1000000, .05], [1500000, .055], [2100000, .065], [2600000, .08], [3100000, .088], [3600000, .096],
    [4100000, .104], [5100000, .112], [6100000, .12], [7100000, .128], [8100000, .136], [9100000, .144], [10100000, .152], [INF, .16]];

  // Exemption and tax on the whole estate, for estates passing to anyone but a spouse.
  const ESTATE = {
    CT: { ex: 15000000, f: E => Math.min(15000000, .12 * (E - 15000000)) },
    DC: { ex: 4988400, f: E => bands(E, [[5040000, .112], [6040000, .12], [7040000, .128], [8040000, .136], [9040000, .144], [10040000, .152], [INF, .16]], 4988400) },
    HI: { ex: 5490000, f: E => rel(E - 5490000, [[1e6, .10], [2e6, .11], [3e6, .12], [4e6, .13], [5e6, .14], [1e7, .157], [INF, .20]]) },
    // Interrelated with the deduction for itself; this closed form is the usual approximation.
    IL: { ex: 4000000, f: E => Math.min(t2011(E), (E - 4000000) * .4 / 1.4) },
    ME: { ex: 7160000, f: E => rel(E - 7160000, [[3e6, .08], [6e6, .10], [INF, .12]]) },
    MD: { ex: 5000000, f: E => Math.min(.16 * (E - 5000000), t2011(E)) },
    MA: { ex: 2000000, f: E => Math.max(0, t2011(E) - 99600) },
    MN: { ex: 3000000, f: E => bands(E, [[7100000, .13], [8100000, .136], [9100000, .144], [10100000, .152], [INF, .16]], 3000000) },
    NY: { ex: 7350000, f: E => {
      const B = 7350000, tent = bands(E, NY_TENT);
      if (E >= B * 1.05) return tent;
      return Math.max(0, tent - bands(B, NY_TENT) * (1 - (E - B) / (.05 * B)));
    } },
    OR: { ex: 1000000, f: E => bands(E, [[1500000, .10], [2500000, .1025], [3500000, .105], [4500000, .11], [5500000, .115], [6500000, .12], [7500000, .13], [8500000, .14], [9500000, .15], [INF, .16]], 1000000) },
    RI: { ex: 1838056, f: E => Math.max(0, t2011(E) - t2011(1838056)) },
    VT: { ex: 5000000, f: E => .16 * (E - 5000000) },
    WA: { ex: 3000000, f: E => rel(E - 3000000, [[1e6, .10], [2e6, .14], [3e6, .15], [4e6, .16], [6e6, .18], [7e6, .19], [9e6, .195], [INF, .20]]) },
  };
  // Inheritance tax on what one heir receives, by relationship.
  const INHERIT = {
    KY: { child: 0, sibling: 0,
      nephew: x => rel(x - 1000, [[10000, .04], [20000, .05], [30000, .06], [45000, .08], [60000, .10], [100000, .12], [200000, .14], [INF, .16]]),
      other: x => rel(x - 500, [[10000, .06], [20000, .08], [35000, .10], [50000, .12], [100000, .14], [INF, .16]]) },
    MD: { child: 0, sibling: 0, nephew: x => x > 1000 ? .10 * x : 0, other: x => x > 1000 ? .10 * x : 0 },
    NE: { child: x => .01 * (x - 100000), sibling: x => .01 * (x - 100000), nephew: x => .11 * (x - 40000), other: x => .15 * (x - 25000) },
    NJ: { child: 0, sibling: x => rel(x - 25000, [[1075000, .11], [1375000, .13], [1675000, .14], [INF, .16]]),
      nephew: x => bands(x, [[700000, .15], [INF, .16]]), other: x => bands(x, [[700000, .15], [INF, .16]]) },
    PA: { child: x => .045 * x, sibling: x => .12 * x, nephew: x => .15 * x, other: x => .15 * x },
  };

  function inheritanceTax(inp, who, st) {
    const E = pos(inp.share), lines = [{ label: t('inh.line.share'), amt: E }];
    if (who === 'partner') {
      lines.push({ label: t('line.partner'), tax: 0, cls: 'sub' });
      return { tax: 0, lines, total: E, avg: 0 };
    }
    const it = INHERIT[st], es = ESTATE[st];
    let inh = 0, stEst = 0;
    if (it) {
      const f = it[who];
      inh = typeof f === 'function' ? Math.max(0, f(E)) : 0;
      lines.push({ label: t('line.inh', t('st.' + st)), amt: E, rate: E > 0 ? inh / E : 0, tax: inh });
    }
    if (es) {
      if (E > es.ex) stEst = Math.max(0, es.f(E));
      // Maryland credits its inheritance tax against its estate tax.
      if (st === 'MD') stEst = Math.max(0, stEst - inh);
      lines.push({ label: E > es.ex ? t('line.stEstate', t('st.' + st), eur(es.ex)) : t('line.stUnder', t('st.' + st), eur(es.ex)), amt: E, rate: E > 0 ? stEst / E : 0, tax: stEst });
    }
    const k = inp.transfer ? 2 : 1, ex = Math.max(0, FED.ex * k - pos(inp.gifts));
    if (stEst + inh > 0) lines.push({ label: t('line.stDed'), amt: -(stEst + inh), cls: 'sub' });
    const left = E - stEst - inh;
    lines.push({ label: inp.gifts > 0 || k > 1 ? t('line.fedExUsed', eur(ex)) : t('line.fedEx', eur(ex)), amt: -Math.min(left, ex), cls: 'sub' });
    const taxable = Math.max(0, left - ex);
    const fed = taxable * FED.rate;
    lines.push({ label: t('line.fed'), amt: taxable, rate: FED.rate, tax: fed });
    const tax = fed + stEst + inh;
    return { tax, lines, total: E, avg: E > 0 ? tax / E : 0 };
  }

  const COLORS = { partner: 'partner', child: 'child', sibling: 'sibling', nephew: 'nephew', other: 'other' };

  return {
    SOURCES, currency: 'USD', nextStep: 1000,
    state: { share: 8000000, rel: 'child', st: 'none', transfer: false, gifts: 0 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], state: ['st', 'str', STATES], ported: ['transfer', 'bool'], gifts: ['gifts', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'estate', hint: 'estateHint', step: 100000 },
      { key: 'rel', type: 'segCol', label: 'leftTo', options: RELS, optLabel: 'rel.' },
      { key: 'st', type: 'seg', label: 'stateLabel', hint: 'stateHint', options: STATES, optLabel: 'st.' },
      { key: 'transfer', type: 'check', label: 'transfer', hint: 'transferHint', more: true },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true, step: 100000 },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel, s.st),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k, s.st) })),
    },
    chart: {
      xMax: 40000000, step: 200000, yMax: 50,
      title: s => t('chartTitle', t('st.' + s.st)),
      deps: s => [s.rel, s.st, s.transfer, s.gifts],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel,
        f: x => inheritanceTax({ share: x, transfer: s.transfer, gifts: s.gifts }, k, s.st).avg })),
    },
    ref: () => [
      { h: t('refFedH'), list: ['ex', 'rate', 'spouse', 'port', 'gifts', 'stDed'].map(k => t('fed.' + k)) },
      { h: t('refEstH'), table: { head: [t('refState'), t('refEx'), t('refRates')], rows: Object.keys(ESTATE).map(k => ({
        to: t('st.' + k), cells: [{ r: 0, txt: eur(ESTATE[k].ex) }, { r: 0, txt: t('rates.' + k) }] })) } },
      { h: t('refInhH'), list: Object.keys(INHERIT).map(k => t('inhRule.' + k)), note: t('refNote') },
    ],
  };
};
