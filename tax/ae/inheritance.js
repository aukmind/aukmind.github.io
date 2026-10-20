// United Arab Emirates (Dubai): no inheritance or estate tax. Loaded by ../inheritance.html?country=ae.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'parent', 'sibling', 'other'];
  const LAWS = ['civil', 'sharia', 'will'];
  const COLORS = { partner: 'partner', child: 'child', parent: 'parent', sibling: 'sibling', other: 'other' };
  const DLD_FEE = 1000;
  const SOURCES = [
    ['noTax', 'https://u.ae/en/information-and-services/finance-and-investment/taxation'],
    ['civil', 'https://www.horizlaw.ae/news/changes-inheritance-laws-uae-1-february-2023-what-you-need-know'],
    ['wills', 'https://www.withersworldwide.com/en-gb/insight/read/estate-planning-for-non-muslims-and-residents-in-the-uae'],
    ['dld', 'https://dubailand.gov.ae/en/eservices/inheritance-title-transfer'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
      { label: t(`who.${inp.law}.${rel}`), cls: 'sub' },
    ];
    if (inp.property) lines.push({ label: t('line.dld', eur(DLD_FEE)), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    GAPS: ['dldFees', 'shares', 'emirate'],
    SOURCES, currency: 'AED', nextStep: 500,
    state: { share: 1000000, rel: 'child', law: 'civil', property: false },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], law: ['law', 'str', LAWS], property: ['property', 'bool'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 50000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'law', type: 'seg', label: 'lawLabel', options: LAWS, optLabel: 'law.', hint: 'lawHint' },
      { key: 'property', type: 'check', label: 'propertyLabel', hint: 'propertyHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 10000000, step: 100000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ ...s, share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['noTax', 'civil', 'sharia', 'will', 'property', 'abroad'].map(k => t('ref.' + k)), note: t('refNote') },
    ],
  };
};
