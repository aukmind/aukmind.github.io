// Dutch inheritance tax (erfbelasting) for deaths in 2026, by relationship. Loaded by ../inheritance.html?country=nl.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  const RATES = {
    I: [[158669, .10], [INF, .20]],
    II: [[158669, .18], [INF, .36]],
    III: [[158669, .30], [INF, .40]],
  };
  const GROUP = { partner: 'I', child: 'I', grandchild: 'II', parent: 'III', other: 'III' };
  const ALLOW = { partner: 828035, partnerMin: 213915, child: 26230, disabled: 78671, grandchild: 26230, parent: 62110, other: 2769 };
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'other'];
  const GROUPS = ['I', 'II', 'III'];
  const SOURCES = [
    ['rates', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/erfbelasting/content/tarieven-erfbelasting'],
    ['allow', 'https://www.belastingdienst.nl/wps/wcm/connect/nl/erfbelasting/content/vrijstelling-erfbelasting'],
    ['jaar', 'https://odb.belastingdienst.nl/wp-content/uploads/2025/10/Fiscale-jaargegevens-Erfbelasting-en-Schenkbelasting-2026-20-10-2025-Conceptversie.pdf'],
    ['sw', 'https://wetten.overheid.nl/BWBR0002226/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function slices(x, br) {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, tax: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  }

  function allowanceFor(inp, rel) {
    // The partner exemption drops by half the value of tax-exempt pension rights the partner receives.
    if (rel === 'partner') return Math.max(ALLOW.partnerMin, ALLOW.partner - pos(inp.pension) / 2);
    if (rel === 'child' && inp.disabled) return ALLOW.disabled;
    return ALLOW[rel];
  }

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), gifts = pos(inp.gifts), ins = pos(inp.insurance), giftTax = pos(inp.giftTax);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (gifts > 0) lines.push({ label: t('line.gifts'), amt: gifts, cls: 'sub' });
    if (ins > 0) lines.push({ label: t('line.insurance'), amt: ins, cls: 'sub' });
    const total = share + gifts + ins;
    const allow = allowanceFor(inp, rel);
    lines.push({ label: t(rel === 'partner' && pos(inp.pension) > 0 ? 'line.allowPension' : 'line.allow', eur(allow)), amt: -Math.min(total, allow), cls: 'sub' });
    const taxable = Math.max(0, total - allow);
    lines.push({ label: t('line.taxable'), amt: taxable, cls: 'sub' });
    let tax = 0;
    for (const sl of slices(taxable, RATES[GROUP[rel]])) {
      lines.push({ label: `${eur(sl.from)} – ${eur(sl.to)}`, amt: sl.to - sl.from, rate: sl.r, tax: sl.tax });
      tax += sl.tax;
    }
    // Gift tax already paid on gifts from the last 180 days is credited, never refunded.
    const credit = Math.min(tax, gifts > 0 ? giftTax : 0);
    if (credit > 0) { lines.push({ label: t('line.giftCredit'), tax: -credit, cls: 'sub' }); tax -= credit; }
    return { tax, lines, total, avg: total > 0 ? tax / total : 0 };
  }

  function refTable() {
    const bounds = [158669, INF];
    return bounds.map(b => ({
      to: b === INF ? t('inh.above') : eur(b),
      cells: GROUPS.map(g => { const r = RATES[g].find(x => x[0] >= b)[1]; return { r, txt: pct(r, 0) }; }),
    }));
  }
  const plain = { share: 0, disabled: false, pension: 0, gifts: 0, giftTax: 0, insurance: 0 };

  return {
    SOURCES,
    GAPS: ['draftData', 'pensionValue', 'parentShared', 'greatGrandchild', 'insuranceJoint', 'fictive', 'residence', 'notIncl'],
    state: { share: 200000, rel: 'child', disabled: false, pension: 0, gifts: 0, giftTax: 0, insurance: 0 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], dis: ['disabled', 'bool'], pension: ['pension', 'num'],
      gifts: ['gifts', 'num'], gifttax: ['giftTax', 'num'], ins: ['insurance', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'disabled', type: 'check', label: 'disabled', hint: 'disabledHint', hintIf: s => s.disabled, show: s => s.rel === 'child' },
      { key: 'pension', type: 'money', label: 'pension', hint: 'pensionHint', show: s => s.rel === 'partner', more: true },
      { key: 'insurance', type: 'money', label: 'insurance', hint: 'insuranceHint', more: true },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true },
      { key: 'giftTax', type: 'money', label: 'giftTax', hint: 'giftTaxHint', show: s => pos(s.gifts) > 0, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = inheritanceTax(s, s.rel);
      return { ...r, segs: [{ k: 'inh', label: t('inh.inhTax'), v: r.tax, color: 'var(--k-tax)' }] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k === 'parent' ? 'nephew' : k})`, me: k === s.rel, ...inheritanceTax({ ...s, disabled: k === 'child' && s.disabled, pension: k === 'partner' ? s.pension : 0 }, k) })),
    },
    chart: {
      xMax: 1500000, step: 5000, yMax: 45,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.disabled],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + (k === 'parent' ? 'nephew' : k), me: k === s.rel, f: x => inheritanceTax({ ...plain, disabled: k === 'child' && s.disabled, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), ...GROUPS.map(g => t('relShort.' + g))], rows: refTable() } },
      { h: t('refAllowH'), list: ['partner', 'child', 'grandchild', 'parent', 'other'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
