// Cyprus: no inheritance or estate duty since 1 January 2000, no gift tax since 1975. Loaded by ../inheritance.html?country=cy.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', child: 'child', grandchild: 'grandchild', parent: 'nephew', sibling: 'sibling', other: 'other' };
  const SOURCES = [
    ['abolished', 'https://www.zenolegal.com/resources/cyprus-estate-planning-no-inheritance-tax-2026'],
    ['wise', 'https://wise.com/gb/blog/cyprus-inheritance-tax'],
    ['pwc', 'https://taxsummaries.pwc.com/cyprus/individual/other-taxes'],
    ['agp', 'https://www.agplaw.com/transactions-advisory/real-estate-property-law-construction/cyprus-real-estate-transfer-fees-taxes/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
    ];
    lines.push({ label: t('line.fees'), cls: 'sub' }, { label: t('line.cgt'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    SOURCES, currency: 'EUR', nextStep: 100,
    state: { share: 200000, rel: 'child' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 1000000, step: 10000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['abolished', 'gifts', 'property', 'cgt', 'heirship', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
