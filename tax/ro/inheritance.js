// Romania has no inheritance tax as such. Fiscal Code art. 111: heirs owe 1% on inherited real estate only when
// the succession isn't settled within 2 years of the death; gifts of real estate outside the family pay 3% or 1%.
// Loaded by ../inheritance.html?country=ro.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const LATE = .01, GIFT_SHORT = .03, GIFT_LONG = .01;
  const RELS = ['partner', 'child', 'parent', 'sibling', 'relative', 'other'];
  const HOW = ['inherit', 'gift'];
  const COLORS = { partner: 'partner', child: 'child', parent: 'parent', sibling: 'sibling', relative: 'relative', other: 'other' };
  const SOURCES = [
    ['cf', 'https://static.anaf.ro/static/10/Anaf/legislatie/Cod_fiscal_norme_2023.htm'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function compute(s, rel = s.rel) {
    const share = pos(s.share), prop = Math.min(share, pos(s.property));
    const lines = [{ label: t(s.how === 'gift' ? 'line.gift' : 'line.inherit'), amt: share }];
    if (share - prop > .5) lines.push({ label: t('line.other'), amt: share - prop, rate: 0, tax: 0, cls: 'sub' });
    let tax = 0;
    if (s.how === 'gift') {
      if (rel !== 'other') lines.push({ label: t('line.familyGift'), amt: prop, rate: 0, tax: 0 });
      else {
        const r = s.held ? GIFT_LONG : GIFT_SHORT;
        tax = r * prop;
        lines.push({ label: t(s.held ? 'line.giftLong' : 'line.giftShort'), amt: prop, rate: r, tax });
      }
    } else if (s.late) {
      tax = LATE * prop;
      lines.push({ label: t('line.late'), amt: prop, rate: LATE, tax });
    } else {
      lines.push({ label: t('line.inTime'), amt: prop, rate: 0, tax: 0 });
    }
    lines.push({ label: t('line.notary'), cls: 'sub' });
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const frac = s => pos(s.share) > 0 ? Math.min(1, pos(s.property) / pos(s.share)) : 1;

  return {
    GAPS: ['late', 'refValues', 'waiver', 'fees'],
    SOURCES,
    currency: 'RON', nextStep: 5000,
    state: { share: 500000, property: 400000, rel: 'child', how: 'inherit', late: false, held: true },
    urlFields: {
      share: ['share', 'num'], property: ['property', 'num'], rel: ['rel', 'str', RELS], how: ['how', 'str', HOW],
      late: ['late', 'bool'], held: ['held', 'bool'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'how', type: 'seg', label: 'how', options: HOW, optLabel: 'how.' },
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 50000 },
      { key: 'property', type: 'money', label: 'property', hint: 'propertyHint', step: 50000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'late', type: 'check', label: 'late', hint: 'lateHint', show: s => s.how !== 'gift' },
      { key: 'held', type: 'check', label: 'held', show: s => s.how === 'gift' && s.rel === 'other' },
    ],
    totalLabel: 'totalTax',
    compute: s => compute(s),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...compute(s, k) })),
    },
    chart: {
      xMax: 2000000, step: 20000, yMax: 5,
      title: () => t('chartTitle'),
      deps: s => [s.how, s.late, s.held, s.rel, frac(s)],
      lines: s => {
        const f = frac(s), gift = s.how === 'gift';
        return [
          { label: t('chart.inTime'), color: '--r-child', me: !gift && !s.late, f: () => 0 },
          { label: t('chart.late'), color: '--r-sibling', me: !gift && s.late, f: () => LATE * f },
          { label: t('chart.giftLong'), color: '--r-relative', me: gift && s.rel === 'other' && s.held, f: () => GIFT_LONG * f },
          { label: t('chart.giftShort'), color: '--r-other', me: gift && s.rel === 'other' && !s.held, f: () => GIFT_SHORT * f },
        ];
      },
    },
    ref: () => [
      { table: { head: [t('ref.colCase'), t('inh.rate')], rows: [
        { to: t('ref.inTime'), cells: [{ r: 0, txt: '0%' }] },
        { to: t('ref.late'), cells: [{ r: LATE, txt: pct(LATE, 0) }] },
        { to: t('ref.familyGift'), cells: [{ r: 0, txt: '0%' }] },
        { to: t('ref.giftLong'), cells: [{ r: GIFT_LONG, txt: pct(GIFT_LONG, 0) }] },
        { to: t('ref.giftShort'), cells: [{ r: GIFT_SHORT, txt: pct(GIFT_SHORT, 0) }] },
      ] } },
      { h: t('refRulesH'), list: ['none', 'property', 'late', 'derogation', 'gifts', 'notary', 'insurance'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
