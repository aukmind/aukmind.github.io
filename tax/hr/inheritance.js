// Croatian inheritance tax for deaths in 2026, by relationship. Loaded by ../inheritance.html?country=hr.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // Zakon o lokalnim porezima art. 4-9: 4% on cash, claims, securities and movables worth over 6 700 € each.
  // Real estate pays the 3% transfer tax instead (Zakon o porezu na promet nekretnina art. 12, 15).
  const RATE = .04, RETT = .03, MOVABLE_MIN = 6700;
  // Spouse, descendants, ascendants and adoption relatives are exempt from both.
  const EXEMPT = ['partner', 'child', 'grandchild', 'parent'];
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'sibling', 'nephew', 'relative', 'other'];
  const SOURCES = [
    ['zlp', 'https://narodne-novine.nn.hr/clanci/sluzbeni/2016_12_115_2524.html'],
    ['rett', 'https://www.zakon.hr/z/69/zakon-o-porezu-na-promet-nekretnina'],
    ['pwc', 'https://taxsummaries.pwc.com/croatia/individual/other-taxes'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritTax(inp, rel) {
    const share = pos(inp.share), property = Math.min(pos(inp.property), share);
    const movables = Math.min(pos(inp.movables), share - property);
    const money = share - property - movables;
    const taxedMov = inp.bigItems ? movables : 0;
    const exempt = EXEMPT.includes(rel);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    let main = 0, prop = 0;
    if (exempt) lines.push({ label: t('line.exempt.' + rel), tax: 0, cls: 'sub' });
    else {
      main = RATE * (money + taxedMov);
      prop = RETT * property;
      lines.push({ label: t('line.money'), amt: money, rate: RATE, tax: RATE * money });
      if (movables > 0) lines.push({ label: t(inp.bigItems ? 'line.movables' : 'line.smallItems'), amt: movables, rate: inp.bigItems ? RATE : 0, tax: RATE * taxedMov });
      if (property > 0) lines.push({ label: t('line.property'), amt: property, rate: RETT, tax: prop });
    }
    const tax = main + prop;
    return { tax, main, prop, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const plain = { share: 0, property: 0, movables: 0, bigItems: true };

  return {
    SOURCES,
    currency: 'EUR', nextStep: 100,
    state: { share: 200000, rel: 'sibling', property: 0, movables: 0, bigItems: true },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], property: ['property', 'num'], mov: ['movables', 'num'], big: ['bigItems', 'bool'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'property', type: 'money', label: 'property', hint: 'propertyHint', more: true },
      { key: 'movables', type: 'money', label: 'movables', hint: 'movablesHint', more: true },
      { key: 'bigItems', type: 'check', label: 'bigItems', hint: 'bigItemsHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = inheritTax(s, s.rel);
      return { ...r, segs: [
        { k: 'inh', label: t('inh.inhTax'), v: r.main, color: 'var(--k-tax)' },
        { k: 'prop', label: t('propTax'), v: r.prop, color: 'var(--k-rate)' },
      ] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...inheritTax(s, k) })),
    },
    chart: {
      xMax: 1000000, step: 5000, yMax: 5,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.property, s.movables, s.bigItems, s.share],
      // The property and movables shares of the current case are kept as fractions, so the lines stay flat in the amount.
      lines: s => {
        const sh = pos(s.share), fp = sh > 0 ? Math.min(1, pos(s.property) / sh) : 0, fm = sh > 0 ? Math.min(1 - fp, pos(s.movables) / sh) : 0;
        return RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => inheritTax({ ...plain, bigItems: s.bigItems, share: x, property: fp * x, movables: fm * x }, k).avg }));
      },
    },
    ref: () => [
      { table: { head: [t('refWhat'), t('relShort.exempt'), t('relShort.other')], rows: [
        { to: t('refMoney'), cells: [{ r: 0, txt: pct(0, 0) }, { r: RATE, txt: pct(RATE, 0) }] },
        { to: t('refProperty'), cells: [{ r: 0, txt: pct(0, 0) }, { r: RETT, txt: pct(RETT, 0) }] },
      ] } },
      { h: t('refRulesH'), list: ['exempt', 'movables', 'property', 'debts', 'gifts', 'noAllowance'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
