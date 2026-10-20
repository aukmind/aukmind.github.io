// Monaco inheritance and gift duties in 2026: none in the direct line or between spouses, flat rates for everyone else.
// Loaded by ../inheritance.html?country=mc.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // Law 276 of 1939 (as amended by Law 1.481 of 2019) and Law 580 of 1953, art. 15 to 18 and 21-1.
  const RATE = { partner: 0, child: 0, cvc: .04, sibling: .08, uncle: .10, cousin: .13, other: .16 };
  const RELS = Object.keys(RATE);
  const COLORS = { partner: 'partner', child: 'child', cvc: 'relative', sibling: 'sibling', uncle: 'nephew', cousin: 'parent', other: 'other' };
  const SOURCES = [
    ['law276', 'https://legimonaco.mc/tnc/loi/1939/10-02-276@2019.12.28'],
    ['law580', 'https://legimonaco.mc/tnc/loi/1953/07-29-580@2023.07.15'],
    ['cvc', 'https://legimonaco.mc/tnc/loi/2019/12-17-1.481@2020.06.27'],
    ['consulate', 'https://www.monaco-consulate.com/?page_id=887'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function compute(s, rel = s.rel) {
    const share = pos(s.share), rate = RATE[rel], tax = rate * share;
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (rate) lines.push({ label: t('line.rate.' + rel), amt: share, rate, tax });
    else lines.push({ label: t('line.exempt'), amt: share, rate: 0, tax: 0 });
    if (rel === 'cvc') lines.push({ label: t('line.cvc'), cls: 'sub' });
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const LINES = ['child', 'cvc', 'sibling', 'uncle', 'cousin', 'other'];
  return {
    GAPS: ['giftFee', 'foreign', 'cvcGift', 'notModelled'],
    SOURCES,
    currency: 'EUR', nextStep: 100,
    state: { share: 300000, rel: 'child' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'amountHint', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => compute(s),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...compute(s, k) })),
    },
    // Flat rates with no allowance: every line is horizontal.
    chart: {
      xMax: 1000000, step: 10000, yMax: 20,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => LINES.map(k => ({ label: t(k === 'child' ? 'chart.free' : 'rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel || (k === 'child' && s.rel === 'partner'), f: x => compute({ share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('relation'), t('ref.colRate')], rows: RELS.map(k => ({ to: t('rel.' + k), cells: [{ r: RATE[k], txt: pct(RATE[k], 0) }] })) } },
      { h: t('refRulesH'), list: ['family', 'gifts', 'scope', 'cvc', 'fees', 'france'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
