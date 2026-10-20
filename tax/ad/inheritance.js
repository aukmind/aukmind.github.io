// Andorran inheritance and gifts in 2026. There is no inheritance or gift tax: only a lifetime gift of real estate
// outside the close family pays the real estate transfer tax (ITP). Loaded by ../inheritance.html?country=ad.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const ITP = .04;
  const RELS = ['partner', 'child', 'sibling', 'other'];
  const HOW = ['inherit', 'gift'];
  const WHAT = ['money', 'home'];
  const SOURCES = [
    ['itpLaw', 'https://www.consellgeneral.ad/fitxers/documents/lleis-1989-2002/llei-de-limpost-sobre-transmissions-patrimonials-immobiliaries.pdf'],
    ['itpRate', 'https://andorraguides.com/property/everything-buy-sell/'],
    ['noTax', 'https://www.hagnere-patrimoine.fr/guides-patrimoine/fiscalite-non-residents/gestion-patrimoine-expatrie-andorre'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function compute(s, rel = s.rel) {
    const share = pos(s.share);
    const lines = [{ label: t(s.how === 'gift' ? 'line.gift' : 'line.inherit'), amt: share }];
    let tax = 0;
    if (s.how !== 'gift') lines.push({ label: t('line.inheritExempt'), tax: 0, cls: 'sub' });
    else if (s.what !== 'home') lines.push({ label: t('line.moneyExempt'), tax: 0, cls: 'sub' });
    else if (rel !== 'other') lines.push({ label: t('line.familyExempt'), tax: 0, cls: 'sub' });
    else {
      tax = ITP * share;
      lines.push({ label: t('line.itp'), amt: share, rate: ITP, tax });
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    GAPS: ['itpRate', 'itpBase', 'gains', 'legitima', 'notModelled'],
    SOURCES,
    currency: 'EUR', nextStep: 100,
    state: { share: 300000, rel: 'child', how: 'inherit', what: 'home' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], how: ['how', 'str', HOW], what: ['what', 'str', WHAT] },
    moreLabel: 'more',
    fields: [
      { key: 'how', type: 'seg', label: 'how', options: HOW, optLabel: 'how.' },
      { key: 'what', type: 'seg', label: 'what', options: WHAT, optLabel: 'what.' },
      { key: 'share', type: 'money', label: 'amount', hint: 'amountHint', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'from', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => compute(s),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...compute(s, k) })),
    },
    // Only a gift of property from outside the family is ever taxed, at a flat rate.
    chart: {
      xMax: 1000000, step: 10000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.how, s.what],
      lines: s => [
        { label: t('chart.free'), color: '--r-child', me: !(s.how === 'gift' && s.what === 'home' && s.rel === 'other'), f: x => 0 },
        { label: t('chart.itp'), color: '--r-other', me: s.how === 'gift' && s.what === 'home' && s.rel === 'other', f: x => compute({ ...s, how: 'gift', what: 'home', share: x }, 'other').avg },
      ],
    },
    ref: () => [
      { table: { head: [t('relation'), t('ref.colInherit'), t('ref.colMoney'), t('ref.colHome')], rows: RELS.map(k => (
        { to: t('rel.' + k), cells: [{ r: 0, txt: '0%' }, { r: 0, txt: '0%' }, k === 'other' ? { r: ITP, txt: pct(ITP, 0) } : { r: 0, txt: '0%' }] })) } },
      { h: t('refRulesH'), list: ['none', 'itp', 'family', 'gains', 'succession', 'foreign'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
