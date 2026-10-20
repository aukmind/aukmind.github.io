// Lithuanian inheritance tax (paveldimo turto mokestis) for 2026, paid by each heir. Loaded by ../inheritance.html?country=lt.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // Art. 5: the taxable value is 70% of the property's value. Art. 6: 5%, or 10% on all of it above 150 000 €.
  const BASE = .7, LIMIT = 150000, RELIEF = 3000;
  const RELS = ['partner', 'child', 'grandchild', 'sibling', 'nephew', 'other'];
  // Art. 7: spouse, children and parents, grandchildren and grandparents, siblings, guardians and wards pay nothing.
  const EXEMPT = ['partner', 'child', 'grandchild', 'sibling'];
  const SOURCES = [
    ['vmi', 'https://www.norian.lt/wp-content/uploads/2025/05/paveldimo-turto-mokescio-istatymo-komentaras-5-str-komentaro-pakeitimai-2025-05-06.pdf'],
    ['guide', 'https://financiallithuanians.lt/mokesciai/paveldejimo-mokestis/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (EXEMPT.includes(rel)) {
      lines.push({ label: t('line.exempt'), tax: 0, cls: 'sub' });
      return { tax: 0, lines, total: share, avg: 0 };
    }
    const value = share * BASE;
    lines.push({ label: t('line.base'), amt: value, cls: 'sub' });
    lines.push({ label: t('line.relief', eur(RELIEF)), amt: -Math.min(value, RELIEF), cls: 'sub' });
    const taxable = Math.max(0, value - RELIEF);
    // The rate follows the taxable value before the 3 000 € relief.
    const r = value > LIMIT ? .10 : .05;
    const tax = taxable * r;
    lines.push({ label: t(r > .05 ? 'line.high' : 'line.low'), amt: taxable, rate: r, tax });
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    GAPS: ['source', 'value', 'reliefs', 'several'],
    SOURCES,
    currency: 'EUR', nextStep: 100,
    state: { share: 200000, rel: 'nephew' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS] },
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint', step: 5000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 400000, step: 2500, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.filter(k => !EXEMPT.includes(k) || k === s.rel).map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('refValue'), t('refRate'), t('refOnValue')], rows: [
        { to: eur(LIMIT), cells: [{ r: .05, txt: pct(.05, 0) }, { r: .035, txt: pct(.035, 1) }] },
        { to: t('inh.above'), cells: [{ r: .10, txt: pct(.10, 0) }, { r: .07, txt: pct(.07, 0) }] },
      ] } },
      { h: t('refAllowH'), list: ['exempt', 'base', 'relief', 'cliff', 'gifts', 'council'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
