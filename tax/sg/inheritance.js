// Singapore: no estate duty for deaths on or after 15 February 2008. Loaded by ../inheritance.html?country=sg.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', child: 'child', grandchild: 'grandchild', parent: 'nephew', sibling: 'sibling', other: 'other' };
  const SOURCES = [
    ['pwc', 'https://taxsummaries.pwc.com/singapore/individual/other-taxes'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
    ];
    if (rel === 'other') lines.push({ label: t('line.will'), cls: 'sub' });
    lines.push({ label: t('line.cgt'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    SOURCES, currency: 'SGD', nextStep: 150,
    state: { share: 500000, rel: 'child' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 50000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 5000000, step: 50000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['abolished', 'gifts', 'cgt', 'stamp', 'cpf', 'estate', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
