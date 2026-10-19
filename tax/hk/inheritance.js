// Hong Kong: estate duty abolished for deaths from 11 February 2006. Loaded by ../inheritance.html?country=hk.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', child: 'child', parent: 'parent', sibling: 'sibling', other: 'other' };
  const SOURCES = [
    ['ird', 'https://www.ird.gov.hk/eng/tax/edu.htm'],
    ['other', 'https://taxsummaries.pwc.com/hong-kong-sar/individual/other-taxes'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
      { label: t('line.who.' + rel), cls: 'sub' },
    ];
    if (inp.property) lines.push({ label: t('line.property'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    SOURCES, currency: 'HKD', nextStep: 1000,
    state: { share: 5000000, rel: 'child', property: false },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], property: ['property', 'bool'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 100000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'property', type: 'check', label: 'propertyLabel', hint: 'propertyHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 80000000, step: 1000000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ ...s, share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['abolished', 'before', 'gifts', 'property', 'gains', 'probate', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
