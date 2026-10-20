// Canada: no inheritance tax. At death, capital property is deemed sold and RRSPs/RRIFs cashed in on the final return,
// unless left to a spouse; provinces charge probate fees on the estate. Loaded by ../inheritance.html?country=ca.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'other'];
  const PROVS = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
  const SOURCES = [
    ['pwc', 'https://taxsummaries.pwc.com/canada/individual/other-taxes'],
    ['incl', 'https://taxsummaries.pwc.com/canada/individual/income-determination'],
    ['eat', 'https://www.ontario.ca/page/estate-administration-tax'],
    ['t4127', 'https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan.html'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  // Final-return brackets (bottom, rate) and basic personal amount, 2026, as in communes.js.
  const FED = { b: [[0, .14], [58523, .205], [117045, .26], [181440, .29], [258482, .33]], bpa: [16452, 14829, 181440, 258482] };
  const PR = {
    AB: { b: [[0, .08], [61200, .10], [154259, .12], [185111, .13], [246813, .14], [370220, .15]], bpa: 22769 },
    BC: { b: [[0, .056], [50363, .077], [100728, .105], [115648, .1229], [140430, .147], [190405, .168], [265545, .205]], bpa: 13216 },
    MB: { b: [[0, .108], [47000, .1275], [100000, .174]], bpa: 15780 },
    NB: { b: [[0, .094], [52333, .14], [104666, .16], [193861, .195]], bpa: 13664 },
    NL: { b: [[0, .087], [44678, .145], [89354, .158], [159528, .178], [223340, .198], [285319, .208], [570638, .213], [1141275, .218]], bpa: 13094 },
    NS: { b: [[0, .0879], [30995, .1495], [61991, .1667], [97417, .175], [157124, .21]], bpa: 11932 },
    NT: { b: [[0, .059], [53003, .086], [106009, .122], [172346, .1405]], bpa: 18198 },
    NU: { b: [[0, .04], [55801, .07], [111602, .09], [181439, .115]], bpa: 19659 },
    ON: { b: [[0, .0505], [53891, .0915], [107785, .1116], [150000, .1216], [220000, .1316]], bpa: 12989, surtax: [[5818, .20], [7446, .36]] },
    PE: { b: [[0, .095], [33928, .1347], [65820, .166], [106890, .1762], [142520, .19], [200000, .20]], bpa: 15000 },
    QC: { b: [[0, .14], [54345, .19], [108680, .24], [132245, .2575]], bpa: 18952, abate: .165 },
    SK: { b: [[0, .105], [54532, .125], [155805, .145]], bpa: 20381 },
    YT: { b: [[0, .064], [58523, .09], [117045, .109], [181440, .128], [500000, .15]], bpa: 'fed' },
  };
  const bands = (x, b) => b.reduce((a, [lo, r], i) => {
    const hi = i + 1 < b.length ? b[i + 1][0] : Infinity;
    return x > lo ? a + (Math.min(x, hi) - lo) * r : a;
  }, 0);
  const fedBpa = ni => { const [mx, mn, a, z] = FED.bpa; return mx - (mx - mn) * Math.min(1, Math.max(0, (ni - a) / (z - a))); };

  // Tax on the final return when this income is all the deceased had that year.
  function finalTax(inc, prov) {
    const p = PR[prov];
    let fed = Math.max(0, bands(inc, FED.b) - .14 * fedBpa(inc));
    if (p.abate) fed *= 1 - p.abate;
    const bpa = p.bpa === 'fed' ? fedBpa(inc) : p.bpa;
    let pv = Math.max(0, bands(inc, p.b) - p.b[0][1] * bpa);
    if (p.surtax) pv += p.surtax.reduce((a, [th, r]) => a + r * Math.max(0, pv - th), 0);
    return { fed, pv, tax: fed + pv };
  }

  const tiers = (E, list, above) => { for (const [hi, fee] of list) if (E <= hi) return fee; return above(E); };
  const PROBATE = {
    AB: E => tiers(E, [[10000, 35], [25000, 135], [125000, 275], [250000, 400]], () => 525),
    BC: E => E <= 25000 ? 0 : 200 + .006 * (Math.min(E, 50000) - 25000) + .014 * Math.max(0, E - 50000),
    MB: () => 0,
    NB: E => tiers(E, [[5000, 25], [10000, 50], [15000, 75], [20000, 100]], x => .005 * x),
    NL: E => 60 + .006 * Math.max(0, E - 1000),
    NS: E => tiers(E, [[10000, 85.60], [25000, 215.20], [50000, 358.15], [100000, 1002.65]], x => 1002.65 + .01695 * (x - 100000)),
    NT: E => tiers(E, [[10000, 30], [25000, 110], [125000, 220], [250000, 340]], () => 440),
    NU: E => tiers(E, [[10000, 30], [25000, 110], [125000, 220], [250000, 340]], () => 440),
    ON: E => .015 * Math.max(0, E - 50000),
    PE: E => tiers(E, [[10000, 50], [25000, 100], [50000, 200], [100000, 400]], x => 400 + .004 * (x - 100000)),
    QC: () => 0,
    SK: E => .007 * E,
    YT: E => E > 25000 ? 140 : 0,
  };

  function compute(inp, rel, prov) {
    const E = pos(inp.share), gains = Math.min(E, pos(inp.gains)), rrsp = Math.min(E, pos(inp.rrsp));
    const lines = [{ label: t('inh.line.share'), amt: E }, { label: t('line.noInh'), amt: E, rate: 0, tax: 0, cls: 'sub' }];
    const fee = E > 0 ? PROBATE[prov](E) : 0;
    lines.push({ label: t('line.probate', t('prov.' + prov)), amt: E, rate: E > 0 ? fee / E : 0, tax: fee });
    let inc = 0;
    if (rel === 'partner') {
      if (gains + rrsp > 0) lines.push({ label: t('line.rollover'), amt: gains + rrsp, rate: 0, tax: 0 });
    } else {
      inc = gains / 2 + rrsp;
      if (gains) lines.push({ label: t('line.gains'), amt: gains / 2, cls: 'sub' });
      if (rrsp) lines.push({ label: t('line.rrsp'), amt: rrsp, cls: 'sub' });
    }
    const ft = inc > 0 ? finalTax(inc, prov) : { fed: 0, pv: 0, tax: 0 };
    if (inc > 0) {
      lines.push({ label: t('line.fed'), amt: inc, rate: ft.fed / inc, tax: ft.fed });
      lines.push({ label: t('line.prov', t('prov.' + prov)), amt: inc, rate: ft.pv / inc, tax: ft.pv });
    }
    const tax = fee + ft.tax;
    return { tax, lines, total: E, avg: E > 0 ? tax / E : 0 };
  }

  const COLORS = { partner: 'partner', child: 'child', other: 'other' };
  const scaled = (s, x) => {
    const E = pos(s.share) || 1;
    return { share: x, gains: pos(s.gains) / E * x, rrsp: pos(s.rrsp) / E * x };
  };

  return {
    GAPS: ['probateFees', 'nunavut', 'finalReturn', 'oneHeir', 'notCounted'],
    SOURCES, currency: 'CAD', nextStep: 1000,
    state: { share: 1000000, rel: 'child', prov: 'ON', gains: 200000, rrsp: 300000 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], prov: ['prov', 'str', PROVS], gains: ['gains', 'num'], rrsp: ['rrsp', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'estate', hint: 'estateHint', step: 50000 },
      { key: 'rel', type: 'segCol', label: 'leftTo', options: RELS, optLabel: 'rel.' },
      { key: 'prov', type: 'seg', label: 'provLabel', hint: 'provHint', options: PROVS, optLabel: 'prov.' },
      { key: 'gains', type: 'money', label: 'gains', hint: 'gainsHint', more: true, step: 50000 },
      { key: 'rrsp', type: 'money', label: 'rrsp', hint: 'rrspHint', more: true, step: 50000 },
    ],
    totalLabel: 'totalTax',
    compute: s => compute(s, s.rel, s.prov),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...compute(s, k, s.prov) })),
    },
    chart: {
      xMax: 5000000, step: 50000, yMax: 40,
      title: s => t('chartTitle', t('prov.' + s.prov)),
      deps: s => [s.rel, s.prov, s.share, s.gains, s.rrsp],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel,
        f: x => compute(scaled(s, x), k, s.prov).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['none', 'deemed', 'incl', 'rrsp', 'spouse', 'home', 'tfsa', 'abroad'].map(k => t('who.' + k)) },
      { h: t('refProbH'), table: { head: [t('refProv'), t('refFee')], rows: PROVS.map(k => ({ to: t('prov.' + k), cells: [{ r: 0, txt: t('fee.' + k) }] })) }, note: t('refNote') },
    ],
  };
};
