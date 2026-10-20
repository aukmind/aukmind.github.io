// Italian inheritance tax for deaths in 2026, by relationship. Loaded by ../inheritance.html?country=it.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // Art. 7 TUS (D.Lgs. 346/1990) as recast by D.Lgs. 139/2024: one flat rate per group, above a per-heir allowance.
  const GROUPS = {
    direct: { rate: .04, allow: 1000000 },
    sibling: { rate: .06, allow: 100000 },
    relative: { rate: .06, allow: 0 },
    other: { rate: .08, allow: 0 },
  };
  const DISABLED_ALLOW = 1500000;
  const IPOCAT = { ipo: .02, cat: .01, min: 200 };
  const RELS = ['partner', 'child', 'grandchild', 'sibling', 'nephew', 'relative', 'other'];
  const groupOf = rel => ({ partner: 'direct', child: 'direct', grandchild: 'direct', sibling: 'sibling', nephew: 'relative', relative: 'relative' })[rel] || 'other';
  const SOURCES = [
    ['tus', 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1990-10-31;346'],
    ['reform', 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-09-18;139'],
    ['ipocat', 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1990-10-31;347'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), g = GROUPS[groupOf(rel)];
    const lines = [{ label: t('inh.line.share'), amt: share }];
    const exempt = Math.min(pos(inp.exempt), share);
    if (exempt > 0) lines.push({ label: t('line.exempt'), amt: -exempt, cls: 'sub' });
    const base = share - exempt;

    // Gifts the deceased made you use up the allowance first.
    const allow = inp.disabled ? DISABLED_ALLOW : g.allow;
    const used = Math.min(pos(inp.gifts), allow), left = allow - used;
    if (allow > 0) lines.push({ label: used > 0 ? t('line.allowUsed', eur(allow), eur(used)) : t('line.allow', eur(allow)), amt: -Math.min(base, left), cls: 'sub' });
    const taxable = Math.max(0, base - left);
    const inh = taxable * g.rate;
    lines.push({ label: t('line.taxable'), amt: taxable, rate: g.rate, tax: inh });

    // Mortgage and land-registry taxes on the real estate you take, fixed for a first home.
    const re = Math.min(pos(inp.realEstate), share);
    let ipocat = 0;
    if (re > 0) {
      ipocat = inp.primaCasa ? 2 * IPOCAT.min : Math.max(IPOCAT.min, re * IPOCAT.ipo) + Math.max(IPOCAT.min, re * IPOCAT.cat);
      lines.push({ label: t(inp.primaCasa ? 'line.ipocatFixed' : 'line.ipocat'), amt: re, rate: inp.primaCasa ? null : IPOCAT.ipo + IPOCAT.cat, tax: ipocat });
    }
    const tax = inh + ipocat;
    return { tax, inh, ipocat, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const plain = { share: 0, disabled: false, exempt: 0, gifts: 0, realEstate: 0, primaCasa: false };

  return {
    SOURCES,
    GAPS: ['law', 'gifts', 'ipocat', 'cadastral', 'exempt', 'abroad', 'giftTax'],
    state: { share: 300000, rel: 'child', disabled: false, realEstate: 0, primaCasa: false, exempt: 0, gifts: 0 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], dis: ['disabled', 'bool'],
      re: ['realEstate', 'num'], home: ['primaCasa', 'bool'], ex: ['exempt', 'num'], gifts: ['gifts', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'disabled', type: 'check', label: 'disabled', hint: 'disabledHint', hintIf: s => s.disabled },
      { key: 'realEstate', type: 'money', label: 'realEstate', hint: 'realEstateHint', more: true },
      { key: 'primaCasa', type: 'check', label: 'primaCasa', hint: 'primaCasaHint', show: s => pos(s.realEstate) > 0, more: true },
      { key: 'exempt', type: 'money', label: 'exempt', hint: 'exemptHint', more: true },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = inheritanceTax(s, s.rel);
      return { ...r, segs: [
        { k: 'inh', label: t('inh.inhTax'), v: r.inh, color: 'var(--k-tax)' },
        { k: 'ipocat', label: t('ipocatTax'), v: r.ipocat, color: 'var(--k-rate)' },
      ] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 5000000, step: 25000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.disabled],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => inheritanceTax({ ...plain, disabled: s.disabled, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('relation'), t('allowH'), t('inh.rate')], rows: ['direct', 'sibling', 'relative', 'other'].map(k => ({
        to: t('group.' + k),
        cells: [{ r: 0, txt: GROUPS[k].allow ? eur(GROUPS[k].allow) : '–' }, { r: GROUPS[k].rate, txt: pct(GROUPS[k].rate, 0) }],
      })) } },
      { h: t('refMoreH'), list: ['disabled', 'ipocat', 'exempt', 'gifts'].map(k => t('ref.' + k)), note: t('refNote') },
    ],
  };
};
