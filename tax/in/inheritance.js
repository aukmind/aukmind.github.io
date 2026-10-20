// India: no estate duty for deaths since 16 March 1985, and inheritances are not income. Loaded by ../inheritance.html?country=in.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', child: 'child', grandchild: 'grandchild', parent: 'nephew', sibling: 'sibling', other: 'other' };
  const SOURCES = [
    ['pwc', 'https://taxsummaries.pwc.com/india/individual/other-taxes'],
    ['estate', 'https://en.wikipedia.org/wiki/Inheritance_tax#By_country'],
    ['slabs', 'https://cleartax.in/s/income-tax-slabs'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
    ];
    if (rel === 'other') lines.push({ label: t('line.other'), cls: 'sub' });
    lines.push({ label: t('line.cost'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    GAPS: ['noWeb', 'act2025', 'stamp', 'cgt', 'abroad'],
    SOURCES, currency: 'INR', nextStep: 10000,
    state: { share: 5000000, rel: 'child' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 500000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 100000000, step: 1000000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['abolished', 'income', 'gifts', 'cost', 'home', 'insurance', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
