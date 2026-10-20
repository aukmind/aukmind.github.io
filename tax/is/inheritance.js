// Icelandic erfðafjárskattur for estates opened in 2026. Loaded by ../inheritance.html?country=is.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const FREE = 6789790, RATE = .1;
  const RELS = ['partner', 'child', 'other', 'charity'];
  const COLORS = { partner: 'partner', child: 'child', other: 'other', charity: 'relative' };
  const SOURCES = [
    ['island', 'https://island.is/erfdafjarskattur'],
    ['free', 'https://island.is/erfdafjarskattur/skattfrelsismork'],
    ['heirs', 'https://island.is/erfdafjarskattur/erfingjar'],
    ['pwc', 'https://taxsummaries.pwc.com/iceland/individual/other-taxes'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  // The tax-free amount belongs to the estate and is shared in proportion to each heir's part; here, equally.
  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (rel === 'partner' || rel === 'charity') {
      lines.push({ label: t('line.' + rel), tax: 0, cls: 'sub' });
      return { tax: 0, lines, total: share, avg: 0 };
    }
    const allow = inp.prepaid ? 0 : FREE / Math.max(1, inp.heirs || 1);
    const used = Math.min(share, allow);
    if (inp.prepaid) lines.push({ label: t('line.prepaid'), amt: 0, cls: 'sub' });
    else lines.push({ label: t('line.allow', eur(allow)), amt: -used, cls: 'sub' });
    const tax = RATE * (share - used);
    lines.push({ label: t('line.tax'), amt: share - used, rate: RATE, tax });
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const plain = { share: 0, heirs: 1, prepaid: false };

  return {
    GAPS: ['noWeb', 'equal', 'cohab', 'pension', 'abroad'],
    SOURCES, currency: 'ISK', nextStep: 500000,
    state: { share: 30000000, rel: 'child', heirs: 2, prepaid: false },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], heirs: ['heirs', 'num'], prepaid: ['prepaid', 'bool'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 1000000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'heirs', type: 'stepper', min: 1, label: 'heirs', hint: 'heirsHint', show: s => s.rel !== 'partner' && s.rel !== 'charity' },
      { key: 'prepaid', type: 'check', label: 'prepaid', hint: 'prepaidHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = inheritanceTax(s, s.rel);
      return { ...r, segs: [{ k: 'tax', label: t('seg.tax'), v: r.tax, color: 'var(--k-tax)' }] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 200000000, step: 1000000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.heirs, s.prepaid],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ ...plain, heirs: s.heirs, prepaid: s.prepaid, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('relShort.exempt'), t('relShort.other')], rows: [
        { to: eur(FREE), cells: [{ r: 0, txt: '0%' }, { r: 0, txt: '0%' }] },
        { to: t('inh.above'), cells: [{ r: 0, txt: '0%' }, { r: RATE, txt: pct(RATE, 0) }] },
      ] }, note: t('refTableNote') },
      { h: t('refWhoH'), list: ['partner', 'others', 'charity', 'prepaid', 'pension', 'property'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
