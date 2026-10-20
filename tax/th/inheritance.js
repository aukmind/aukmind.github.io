// Thailand inheritance tax (Inheritance Tax Act 2015), charged on each heir above 100 million baht. Loaded by ../inheritance.html?country=th.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const FREE = 100000000;
  const RATE = { partner: 0, child: .05, other: .10 };
  const RELS = ['partner', 'child', 'other'];
  const SOURCES = [
    ['pwc', 'https://taxsummaries.pwc.com/thailand/individual/other-taxes'],
    ['rd', 'https://www.rd.go.th/english/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    let tax = 0;
    if (rel === 'partner') lines.push({ label: t('line.partner'), tax: 0, cls: 'sub' });
    else {
      lines.push({ label: t('line.free', eur(FREE)), amt: -Math.min(share, FREE), cls: 'sub' });
      const left = Math.max(0, share - FREE);
      if (left > 0) {
        tax = left * RATE[rel];
        lines.push({ label: t('line.rate'), amt: left, rate: RATE[rel], tax });
      }
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    GAPS: ['prior', 'gifts', 'foreigners', 'valuation'],
    SOURCES, currency: 'THB', nextStep: 1000000,
    state: { share: 150000000, rel: 'child' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint', step: 1000000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 1000000000, step: 5000000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('rel.partner'), t('rel.child'), t('rel.other')], rows: [
        { to: eur(FREE), cells: [{ r: 0, txt: '0%' }, { r: 0, txt: '0%' }, { r: 0, txt: '0%' }] },
        { to: t('inh.above'), cells: [{ r: 0, txt: '0%' }, { r: .05, txt: pct(.05, 0) }, { r: .10, txt: pct(.10, 0) }] },
      ] } },
      { h: t('refAllowH'), list: ['free', 'partner', 'line', 'assets', 'gifts', 'abroad'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
