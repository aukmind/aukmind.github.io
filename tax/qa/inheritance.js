// Qatar: no inheritance, estate or gift tax. Loaded by ../inheritance.html?country=qa.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'parent', 'sibling', 'other'];
  const LAWS = ['sharia', 'own'];
  const SOURCES = [
    ['noTax', 'https://taxsummaries.pwc.com/qatar/individual/other-taxes'],
    ['pit', 'https://taxsummaries.pwc.com/qatar/individual/taxes-on-personal-income'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    return { tax: 0, total: share, avg: 0, lines: [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
      { label: t(`who.${inp.law}.${rel}`), cls: 'sub' },
    ] };
  }

  return {
    GAPS: ['familyLaw', 'shares', 'fees', 'abroad'],
    SOURCES, currency: 'QAR', nextStep: 400,
    state: { share: 1000000, rel: 'child', law: 'sharia' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], law: ['law', 'str', LAWS] },
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 50000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'law', type: 'seg', label: 'lawLabel', options: LAWS, optLabel: 'law.', hint: 'lawHint' },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 10000000, step: 100000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => inheritanceTax({ ...s, share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['noTax', 'sharia', 'own', 'will', 'abroad'].map(k => t('ref.' + k)), note: t('refNote') },
    ],
  };
};
