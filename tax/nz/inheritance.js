// New Zealand: no estate duty since 1992, no gift duty since 1 October 2011. Loaded by ../inheritance.html?country=nz.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', child: 'child', grandchild: 'grandchild', parent: 'nephew', sibling: 'sibling', other: 'other' };
  const SOURCES = [
    ['giftDuty', 'https://www.taxpolicy.ird.govt.nz/publications/2011/2011-sr-gift-duty-abolition'],
    ['ris', 'https://www.taxpolicy.ird.govt.nz/publications/2010/2010-ris-gift-duty'],
    ['died', 'https://www.ird.govt.nz/situations/im-looking-after-the-affairs-of-someone-who-has-died'],
    ['estates', 'https://www.ird.govt.nz/income-tax/income-tax-for-businesses-and-organisations/trusts-and-estates'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
    ];
    if (rel === 'partner') lines.push({ label: t('line.partner'), cls: 'sub' });
    lines.push({ label: t('line.cost'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    SOURCES, currency: 'NZD', nextStep: 200,
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
      xMax: 2000000, step: 20000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['abolished', 'gifts', 'estate', 'cost', 'home', 'insurance', 'relprop', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
