// Norway: no inheritance or gift tax for deaths and gifts from 1 January 2014. Loaded by ../inheritance.html?country=no.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'cohab', 'child', 'grandchild', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', cohab: 'relative', child: 'child', grandchild: 'grandchild', parent: 'nephew', sibling: 'sibling', other: 'other' };
  const SOURCES = [
    ['removed', 'https://www.skatteetaten.no/person/skatt/hjelp-til-riktig-skatt/gave-og-arv/arveavgift-er-fjernet/'],
    ['doc', 'https://www.skatteetaten.no/person/avgifter/dokumentavgift/'],
    ['sktl', 'https://lovdata.no/lov/1999-03-26-14/§9-7'],
    ['exit', 'https://www.skatteetaten.no/person/skatt/hjelp-til-riktig-skatt/gave-og-arv/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
    ];
    if (rel === 'cohab') lines.push({ label: t('line.cohab'), cls: 'sub' });
    if (rel === 'other') lines.push({ label: t('line.will'), cls: 'sub' });
    lines.push({ label: t('line.cost'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    SOURCES, currency: 'NOK', nextStep: 1000,
    state: { share: 1000000, rel: 'child' },
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
      xMax: 10000000, step: 100000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['abolished', 'gifts', 'estate', 'cost', 'home', 'insurance', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
