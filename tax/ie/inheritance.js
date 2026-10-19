// Irish Capital Acquisitions Tax on inheritances taken from 7 October 2026. Loaded by ../inheritance.html?country=ie.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // Budget 2027 thresholds, for inheritances on or after 7 October 2026.
  const THRESHOLD = { A: 420000, B: 44000, C: 22000 };
  const RATE = .33;
  const AGRI_RELIEF = .9;
  const RELS = ['partner', 'child', 'parent', 'grandchild', 'sibling', 'nephew', 'other'];
  const GROUPS = ['A', 'B', 'C'];
  const COLORS = { partner: '--r-partner', child: '--r-child', parent: '--r-relative', grandchild: '--r-grandchild', sibling: '--r-sibling', nephew: '--r-nephew', other: '--r-other' };
  const SOURCES = [
    ['thresholds', 'https://www.revenue.ie/en/gains-gifts-and-inheritance/cat-thresholds-rates-and-aggregation-rules/cat-thresholds.aspx'],
    ['groups', 'https://www.revenue.ie/en/gains-gifts-and-inheritance/cat-thresholds-rates-and-aggregation-rules/cat-groups.aspx'],
    ['aggregation', 'https://www.revenue.ie/en/gains-gifts-and-inheritance/cat-thresholds-rates-and-aggregation-rules/cat-aggregation-rules.aspx'],
    ['dwelling', 'https://www.revenue.ie/en/gains-gifts-and-inheritance/cat-exemptions/dwelling-house/index.aspx'],
    ['parents', 'https://www.revenue.ie/en/gains-gifts-and-inheritance/cat-exemptions/certain-inheritances-taken-parents/index.aspx'],
    ['exemptions', 'https://www.revenue.ie/en/gains-gifts-and-inheritance/cat-exemptions/index.aspx'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function groupOf(inp, rel) {
    if (rel === 'child' || rel === 'parent') return 'A';
    if (rel === 'grandchild') return inp.minorOfDeceased ? 'A' : 'B';
    return rel === 'sibling' || rel === 'nephew' ? 'B' : 'C';
  }

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (rel === 'partner' || (rel === 'parent' && inp.parentExempt)) {
      lines.push({ label: t(rel === 'partner' ? 'line.partner' : 'line.parentExempt'), tax: 0, cls: 'sub' });
      return { tax: 0, lines, total: share, avg: 0 };
    }
    let value = share;
    const home = inp.homeExempt ? Math.min(pos(inp.home), value) : 0;
    if (home > 0) { lines.push({ label: t('line.home'), amt: -home, cls: 'sub' }); value -= home; }
    const relief = AGRI_RELIEF * Math.min(pos(inp.agri), value);
    if (relief > 0) { lines.push({ label: t('line.agri'), amt: -relief, cls: 'sub' }); value -= relief; }

    // Earlier gifts and inheritances in the same group since 5 December 1991 use up the threshold first.
    const g = groupOf(inp, rel), T = THRESHOLD[g], prior = pos(inp.prior);
    const left = Math.max(0, T - prior);
    lines.push({ label: prior > 0 ? t('line.thresholdUsed', g, eur(T), eur(Math.min(prior, T))) : t('line.threshold', g, eur(T)), amt: -Math.min(value, left), cls: 'sub' });
    const taxable = Math.max(0, value - left);
    const tax = taxable * RATE;
    if (taxable > 0) lines.push({ label: t('line.taxable'), amt: taxable, rate: RATE, tax });
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const plain = { share: 0, minorOfDeceased: false, parentExempt: false, home: 0, homeExempt: false, agri: 0, prior: 0 };

  return {
    SOURCES,
    currency: 'EUR',
    state: { ...plain, share: 500000, rel: 'child' },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS],
      minor: ['minorOfDeceased', 'bool'], pex: ['parentExempt', 'bool'],
      home: ['home', 'num'], lived: ['homeExempt', 'bool'], agri: ['agri', 'num'], prior: ['prior', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'minorOfDeceased', type: 'check', label: 'minorOfDeceased', hint: 'minorHint', show: s => s.rel === 'grandchild' },
      { key: 'parentExempt', type: 'check', label: 'parentExempt', hint: 'parentExemptHint', show: s => s.rel === 'parent' },
      { key: 'prior', type: 'money', label: 'prior', hint: 'priorHint', show: s => s.rel !== 'partner' },
      { key: 'home', type: 'money', label: 'home', more: true },
      { key: 'homeExempt', type: 'check', label: 'homeExempt', hint: 'homeHint', more: true },
      { key: 'agri', type: 'money', label: 'agri', hint: 'agriHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = inheritanceTax(s, s.rel);
      return { ...r, segs: [{ k: 'cat', label: t('inh.inhTax'), v: r.tax, color: 'var(--k-tax)' }] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(${COLORS[k]})`, me: k === s.rel, ...inheritanceTax({ ...s, minorOfDeceased: false, parentExempt: false }, k) })),
    },
    chart: {
      xMax: 1500000, step: 5000, yMax: 35,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: COLORS[k], me: k === s.rel, f: x => inheritanceTax({ ...plain, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('refGroup'), t('refThreshold'), t('inh.rate')], rows: GROUPS.map(g => ({
        to: t('group.' + g), cells: [{ r: 0, txt: eur(THRESHOLD[g]) }, { r: RATE, txt: pct(RATE, 0) }] })) } },
      { h: t('refReliefH'), list: ['partner', 'parent', 'home', 'agri', 'gifts', 'cohab'].map(k => t('relief.' + k)), note: t('refNote') },
    ],
  };
};
