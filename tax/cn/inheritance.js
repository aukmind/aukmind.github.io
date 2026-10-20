// China: no inheritance, estate or gift tax. Deed tax only on a home left to someone who isn't a statutory heir. Loaded by ../inheritance.html?country=cn.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'parent', 'sibling', 'grandchild', 'other'];
  const HEIRS = ['partner', 'child', 'parent', 'sibling'];
  const COLORS = { partner: 'partner', child: 'child', parent: 'nephew', sibling: 'sibling', grandchild: 'grandchild', other: 'other' };
  const DEED = .03;
  const SOURCES = [
    ['pwc', 'https://taxsummaries.pwc.com/peoples-republic-of-china/individual/other-taxes'],
    ['deed', 'https://zh.wikisource.org/wiki/中华人民共和国契税法'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), home = Math.min(pos(inp.home), share);
    const heir = HEIRS.includes(rel);
    const deed = heir ? 0 : home * DEED;
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
    ];
    if (home > 0) lines.push(heir
      ? { label: t('line.deedFree'), amt: home, rate: 0, tax: 0 }
      : { label: t('line.deed'), amt: home, rate: DEED, tax: deed });
    if (rel === 'grandchild') lines.push({ label: t('line.grandchild'), cls: 'sub' });
    lines.push({ label: t('line.cost'), cls: 'sub' });
    return { tax: deed, lines, total: share - deed, avg: share > 0 ? deed / share : 0 };
  }

  return {
    GAPS: ['noWeb', 'deed', 'heirs', 'cgt', 'abroad'],
    SOURCES, currency: 'CNY', nextStep: 10000,
    state: { share: 1000000, home: 600000, rel: 'child' },
    urlFields: { share: ['share', 'num'], home: ['home', 'num'], rel: ['rel', 'str', RELS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 50000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'home', type: 'money', label: 'homeLabel', hint: 'homeHint', step: 50000, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 10000000, step: 100000, yMax: 5,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.share, s.home],
      lines: s => {
        const ratio = pos(s.share) > 0 ? Math.min(pos(s.home), pos(s.share)) / pos(s.share) : 0;
        return RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: x, home: x * ratio }, k).avg }));
      },
    },
    ref: () => [
      { h: t('refNoneH'), list: ['none', 'deed', 'iit', 'gifts', 'heirs', 'cost', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
