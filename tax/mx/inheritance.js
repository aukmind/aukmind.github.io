// Mexico: no inheritance or estate tax; inheritances are exempt from income tax (LISR art. 93 XXII). Loaded by ../inheritance.html?country=mx.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', child: 'child', grandchild: 'grandchild', parent: 'parent', sibling: 'sibling', other: 'other' };
  const SOURCES = [
    ['pwc', 'https://taxsummaries.pwc.com/mexico/individual/other-taxes'],
    ['lisr', 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
      { label: t('line.home'), cls: 'sub' },
    ];
    if (rel === 'sibling' || rel === 'other') lines.push({ label: t('line.gift'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    SOURCES, currency: 'MXN', nextStep: 20000,
    state: { share: 2000000, rel: 'child' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 100000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 20000000, step: 200000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['exempt', 'gifts', 'report', 'isai', 'cost', 'insurance', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
