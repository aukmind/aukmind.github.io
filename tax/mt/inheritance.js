// Malta: no inheritance tax, but duty on documents (Cap. 364) on immovables and shares passing causa mortis. Loaded by ../inheritance.html?country=mt.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'cohab', 'child', 'parent', 'sibling', 'other'];
  const KINDS = ['home', 'homeShared', 'ownHome', 'other', 'shares', 'cash'];
  const COLORS = { partner: 'partner', cohab: 'relative', child: 'child', parent: 'parent', sibling: 'sibling', other: 'other' };
  const D = { rate: .05, low: .035, homeFree: 35000, lowCap: 400000, shares: .02, propco: .05 };
  const SOURCES = [
    ['act', 'https://legislation.mt/eli/cap/364/eng/pdf'],
    ['pwc', 'https://taxsummaries.pwc.com/malta/individual/other-taxes'],
    ['kpmg', 'https://kpmg.com/mt/en/home/insights/2025/11/malta-budget-2026.html'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function duty(inp, rel) {
    const share = pos(inp.share), kind = inp.kind, heirs = Math.max(1, Math.round(Number(inp.heirs) || 1));
    const lines = [{ label: t('inh.line.share'), amt: share }];
    const done = (tax, extra) => ({ tax, lines: extra ? lines.concat(extra) : lines, total: share, avg: share > 0 ? tax / share : 0 });
    if (kind === 'cash') return done(0, [{ label: t('line.cash'), tax: 0, cls: 'sub' }]);
    if (kind === 'shares') {
      const r = inp.propco ? D.propco : D.shares;
      return done(share * r, [{ label: t(inp.propco ? 'line.propco' : 'line.shares'), amt: share, rate: r, tax: share * r }]);
    }
    const desc = rel === 'child';
    if ((kind === 'home' || kind === 'homeShared') && (rel === 'partner' || rel === 'cohab'))
      return done(0, [{ label: t('line.spouseHome'), tax: 0, cls: 'sub' }]);
    if ((kind === 'home' || kind === 'homeShared') && desc)
      return done(0, [{ label: t('line.descHome'), tax: 0, cls: 'sub' }]);
    // The euro bands follow the heir's part of the house when several heirs share it.
    const free = kind === 'home' || kind === 'homeShared' ? Math.min(share, D.homeFree / heirs) : 0;
    const lowTop = kind === 'homeShared' || kind === 'ownHome' ? Math.min(share, D.lowCap / heirs) : free;
    const low = Math.max(0, lowTop - free), full = share - free - low;
    const tax = low * D.low + full * D.rate, out = [];
    if (free > 0) out.push({ label: t('line.free', eur(D.homeFree)), amt: -free, cls: 'sub' });
    if (low > 0) out.push({ label: t(kind === 'ownHome' ? 'line.lowOwn' : 'line.lowShared', eur(D.lowCap)), amt: low, rate: D.low, tax: low * D.low });
    if (full > 0) out.push({ label: t('line.full'), amt: full, rate: D.rate, tax: full * D.rate });
    return done(tax, out);
  }

  const plain = { share: 0, kind: 'other', heirs: 1, propco: false };

  return {
    SOURCES, currency: 'EUR',
    state: { ...plain, share: 300000, rel: 'child', kind: 'other' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], kind: ['kind', 'str', KINDS], heirs: ['heirs', 'num'], propco: ['propco', 'bool'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'kind', type: 'segCol', label: 'kindLabel', options: KINDS, optLabel: 'kind.' },
      { key: 'propco', type: 'check', label: 'propco', hint: 'propcoHint', show: s => s.kind === 'shares' },
      { key: 'heirs', type: 'stepper', label: 'heirs', hint: 'heirsHint', min: 1, max: 10, show: s => s.kind !== 'shares' && s.kind !== 'cash', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = duty(s, s.rel);
      return { ...r, segs: [{ k: 'duty', label: t('totalTax'), v: r.tax, color: 'var(--k-tax)' }] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...duty(s, k) })),
    },
    chart: {
      xMax: 2000000, step: 10000, yMax: 6,
      title: s => t('chartTitle', t('kind.' + s.kind)),
      deps: s => [s.rel, s.kind, s.heirs, s.propco],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => duty({ ...s, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('refWhat'), t('inh.rate')], rows: ['home', 'homeShared', 'ownHome', 'other', 'shares', 'propco'].map(k => ({
        to: t('refRow.' + k), cells: [{ r: k === 'other' || k === 'propco' ? D.rate : k === 'shares' ? D.shares : D.low, txt: t('refRate.' + k) }] })) } },
      { h: t('refNoneH'), list: ['none', 'declare', 'gifts', 'disabled', 'farm', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
