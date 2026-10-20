// Polish inheritance and gift tax for 2026, paid by each heir by tax group. Loaded by ../inheritance.html?country=pl.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  // Art. 9 and 15 of the act, amounts as updated by the Finance Minister's regulation of 28 June 2023.
  const FREE = { 1: 36120, 2: 27090, 3: 5733 };
  const RATES = {
    1: [[11833, .03], [23665, .05], [INF, .07]],
    2: [[11833, .07], [23665, .09], [INF, .12]],
    3: [[11833, .12], [23665, .16], [INF, .20]],
  };
  const RELS = ['partner', 'child', 'grandchild', 'sibling', 'relative', 'nephew', 'other'];
  // The zero group: spouse, descendants, ascendants, stepchildren, siblings and step-parents are exempt once they report it.
  const ZERO = ['partner', 'child', 'grandchild', 'sibling'];
  const GROUP = { partner: 1, child: 1, grandchild: 1, sibling: 1, relative: 1, nephew: 2, other: 3 };
  const SOURCES = [
    ['act', 'https://api.sejm.gov.pl/eli/acts/DU/2026/478/text.pdf'],
    ['scale', 'https://api.sejm.gov.pl/eli/acts/DU/2023/1226/text.html'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function slices(x, br, from = 0) {
    const out = []; let lo = 0;
    for (const [hi, r] of br) {
      const a = Math.max(lo, from), b = Math.min(x, hi);
      if (b > a) out.push({ from: a, to: b, r, tax: (b - a) * r });
      lo = hi;
    }
    return out;
  }
  const scaleTax = (x, g) => slices(x, RATES[g]).reduce((s, b) => s + b.tax, 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), gifts = pos(inp.gifts);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    let tax = 0;
    if (ZERO.includes(rel) && inp.notified) {
      lines.push({ label: t(rel === 'partner' ? 'line.partner' : 'line.zero'), tax: 0, cls: 'sub' });
    } else {
      const g = GROUP[rel], free = FREE[g];
      if (ZERO.includes(rel)) lines.push({ label: t('line.late'), cls: 'sub' });
      // Gifts from the same person in the last 5 years are added; the tax already paid on them is taken off.
      if (gifts > 0) lines.push({ label: t('line.gifts'), amt: gifts, cls: 'sub' });
      const base = share + gifts;
      lines.push({ label: t('line.free', t('group.' + g), eur(free)), amt: -Math.min(base, free), cls: 'sub' });
      const taxable = Math.max(0, base - free), before = Math.max(0, gifts - free);
      lines.push({ label: t('line.taxable'), amt: taxable, cls: 'sub' });
      for (const sl of slices(taxable, RATES[g], before)) {
        lines.push({ label: `${eur(sl.from)} – ${eur(sl.to)}`, amt: sl.to - sl.from, rate: sl.r, tax: sl.tax });
        tax += sl.tax;
      }
      if (before > 0) lines.push({ label: t('line.giftTax'), tax: 0, cls: 'sub' });
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const plain = { share: 0, notified: true, gifts: 0 };

  return {
    SOURCES,
    GAPS: ['scale', 'gifts', 'step', 'reliefs', 'abroad', 'insurance'],
    currency: 'PLN', nextStep: 500,
    state: { share: 500000, rel: 'nephew', notified: true, gifts: 0 },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], sdz2: ['notified', 'bool'], gifts: ['gifts', 'num'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'notified', type: 'check', label: 'notified', hint: 'notifiedHint', show: s => ZERO.includes(s.rel) },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true, step: 10000 },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 2000000, step: 10000, yMax: 20,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.notified],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => inheritanceTax({ ...plain, notified: s.notified, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('group.1'), t('group.2'), t('group.3')], rows: [11833, 23665, INF].map(b => ({
        to: b === INF ? t('inh.above') : eur(b),
        cells: [1, 2, 3].map(g => { const r = RATES[g].find(x => x[0] >= b)[1]; return { r, txt: pct(r, 0) }; }),
      })) } },
      { h: t('refAllowH'), list: ['zero', 'g1', 'g2', 'g3', 'gifts', 'home'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
