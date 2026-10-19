// Bulgarian inheritance tax for deaths in 2026: a municipal tax within the bands of the Local Taxes and Fees Act.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // 250,000 lev, converted at 1.95583.
  const FREE = 127822.97;
  const RELS = ['partner', 'lineal', 'sibling', 'other'];
  const EXEMPT = ['partner', 'lineal'];
  const MUNI = ['low', 'sofia', 'high'];
  const RATES = { sibling: { low: .004, sofia: .007, high: .008 }, other: { low: .033, sofia: .05, high: .066 } };
  const COLORS = { partner: '--r-partner', lineal: '--r-child', sibling: '--r-sibling', other: '--r-other' };
  const SOURCES = [
    ['zmdt', 'https://kik-info.com/normativna-baza/zakoni/zmdt/'],
    ['sofia', 'https://www.ciela.net/svobodna-zona-normativi/view/2135585788'],
    ['guide', 'https://www.innovires.com/blog/danak-nasledstvo-bulgaria.html'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  const rateOf = (rel, muni) => (RATES[rel] || {})[muni] || 0;

  function tax(inp, rel, muni = inp.muni) {
    const share = pos(inp.share);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (EXEMPT.includes(rel)) {
      lines.push({ label: t('line.exempt.' + rel), tax: 0, cls: 'sub' });
      return { tax: 0, lines, total: share, avg: 0 };
    }
    const base = Math.max(0, share - FREE), rate = rateOf(rel, muni);
    lines.push({ label: t('line.free'), amt: -Math.min(share, FREE), cls: 'sub' });
    lines.push({ label: t('line.taxed.' + muni), amt: base, rate, tax: base * rate });
    return { tax: base * rate, lines, total: share, avg: share > 0 ? base * rate / share : 0 };
  }

  return {
    SOURCES,
    currency: 'EUR',
    nextStep: 1000,
    state: { share: 300000, rel: 'other', muni: 'sofia' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], muni: ['muni', 'str', MUNI] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'muni', type: 'seg', label: 'muni', hint: 'muniHint', options: MUNI, optLabel: 'muni.', show: s => !EXEMPT.includes(s.rel) },
    ],
    totalLabel: 'totalTax',
    compute: s => tax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(${COLORS[k]})`, me: k === s.rel, ...tax(s, k) })),
    },
    chart: {
      xMax: 3000000, step: 10000, yMax: 7,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.muni],
      lines: s => [
        { label: t('chartExempt'), color: '--r-partner', me: EXEMPT.includes(s.rel), f: () => 0 },
        { label: t('chartSibling', pct(rateOf('sibling', s.muni), 1)), color: '--r-sibling', me: s.rel === 'sibling', f: x => tax({ share: x }, 'sibling', s.muni).avg },
        ...MUNI.map(m => ({ label: t('chartOther', pct(RATES.other[m], 1)), color: { low: '--r-nephew', sofia: '--r-other', high: '--r-relative' }[m], me: s.rel === 'other' && s.muni === m, f: x => tax({ share: x }, 'other', m).avg })),
      ],
    },
    ref: () => [
      { table: { head: [t('relation'), t('refLow'), t('refSofia'), t('refHigh')], rows: RELS.map(k => ({
        to: t('rel.' + k),
        cells: MUNI.map(m => EXEMPT.includes(k) ? { r: 0, txt: t('refExempt') } : { r: RATES[k][m], txt: pct(RATES[k][m], 1) }),
      })) } },
      { h: t('refRulesH'), list: ['exempt', 'free', 'muni', 'base', 'other', 'gifts', 'filing'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
