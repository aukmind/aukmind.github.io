// Slovakia: inheritance and gift tax abolished from 1 January 2004; both are exempt from income tax. Loaded by ../inheritance.html?country=sk.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'parent', 'sibling', 'other'];
  const HOW = ['inherit', 'gift'];
  const SOURCES = [
    ['abolished', 'https://www.epi.sk/zz/2003-554'],
    ['exempt', 'https://taxsummaries.pwc.com/slovak-republic/individual/other-taxes'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function compute(s, rel = s.rel) {
    const share = pos(s.share);
    const lines = [
      { label: t(s.how === 'gift' ? 'line.gift' : 'inh.line.share'), amt: share },
      { label: t(s.how === 'gift' ? 'line.giftNone' : 'line.none'), amt: share, rate: 0, tax: 0 },
    ];
    if (s.how === 'gift' && rel === 'other') lines.push({ label: t('line.work'), cls: 'sub' });
    lines.push({ label: t(s.how === 'gift' ? 'line.contract' : 'line.notary'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    GAPS: ['law', 'notary', 'sale', 'work', 'abroad'],
    SOURCES, currency: 'EUR', nextStep: 100,
    state: { share: 100000, rel: 'child', how: 'inherit' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], how: ['how', 'str', HOW] },
    moreLabel: 'more',
    fields: [
      { key: 'how', type: 'seg', label: 'how', options: HOW, optLabel: 'how.' },
      { key: 'share', type: 'money', label: 'amount', step: 5000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => compute(s),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...compute(s, k) })),
    },
    chart: {
      xMax: 1000000, step: 10000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.how],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => compute({ ...s, share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['abolished', 'gifts', 'work', 'notary', 'property', 'sale', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
