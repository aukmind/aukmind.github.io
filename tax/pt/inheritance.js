// Portuguese stamp duty on inheritances for deaths in 2026, by relationship. Loaded by ../inheritance.html?country=pt.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // Imposto do Selo: TGIS item 1.2 (10%) on gratuitous transfers, item 1.1 (0.8%) on property given during life.
  const RATE = .10, PROPERTY_GIFT = .008;
  // Art. 6 e) CIS: spouse or de facto partner, descendants and ascendants are exempt from item 1.2.
  const EXEMPT = ['partner', 'child', 'grandchild'];
  const RELS = ['partner', 'child', 'grandchild', 'sibling', 'nephew', 'relative', 'other'];
  const SOURCES = [
    ['simula', 'https://simula.pt/simuladores/simulador_herancas_doacoes'],
    ['occ', 'https://occ.pt/pt-pt/noticias/imposto-do-selo-em-doacao-de-imovel-de-avos-para-neta'],
    ['piv', 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/informacoes_vinculativas/patrimonio/selo/Documents/PIV_26029.pdf'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function stampDuty(inp, rel) {
    const share = pos(inp.share), property = Math.min(pos(inp.property), share);
    const exempt = EXEMPT.includes(rel);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    let main = 0, prop = 0;
    if (exempt) lines.push({ label: t('line.exempt.' + rel), tax: 0, cls: 'sub' });
    else {
      main = RATE * share;
      lines.push({ label: t('line.main'), amt: share, rate: RATE, tax: main });
    }
    if (inp.gift && property > 0) {
      prop = PROPERTY_GIFT * property;
      lines.push({ label: t('line.property'), amt: property, rate: PROPERTY_GIFT, tax: prop });
    }
    const tax = main + prop;
    return { tax, main, prop, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const plain = { share: 0, property: 0, gift: false };

  return {
    SOURCES,
    state: { share: 200000, rel: 'child', property: 0, gift: false },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], property: ['property', 'num'], gift: ['gift', 'bool'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'property', type: 'money', label: 'property', hint: 'propertyHint', more: true },
      { key: 'gift', type: 'check', label: 'gift', hint: 'giftHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = stampDuty(s, s.rel);
      return { ...r, segs: [
        { k: 'inh', label: t('inh.inhTax'), v: r.main, color: 'var(--k-tax)' },
        { k: 'prop', label: t('propTax'), v: r.prop, color: 'var(--k-rate)' },
      ] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...stampDuty(s, k) })),
    },
    chart: {
      xMax: 1000000, step: 5000, yMax: 12,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.gift, s.property, s.share],
      // The property share of the current case is kept as a fraction, so the lines stay flat in the amount.
      lines: s => {
        const frac = pos(s.share) > 0 ? Math.min(1, pos(s.property) / pos(s.share)) : 0;
        return RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => stampDuty({ ...plain, gift: s.gift, share: x, property: frac * x }, k).avg }));
      },
    },
    ref: () => [
      { table: { head: [t('refWhat'), t('relShort.exempt'), t('relShort.other')], rows: [
        { to: t('refInherit'), cells: [{ r: 0, txt: pct(0, 0) }, { r: RATE, txt: pct(RATE, 0) }] },
        { to: t('refGift'), cells: [{ r: PROPERTY_GIFT, txt: pct(PROPERTY_GIFT, 1) }, { r: RATE + PROPERTY_GIFT, txt: pct(RATE + PROPERTY_GIFT, 1) }] },
      ] } },
      { h: t('refRulesH'), list: ['exempt', 'partner', 'value', 'gifts', 'noAllowance'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
