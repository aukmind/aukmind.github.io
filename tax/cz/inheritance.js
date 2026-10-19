// Czech inheritance and gifts in 2026. Inheritance tax was abolished in 2014: inheritances are exempt from income tax
// for everyone, and only gifts from outside the family are taxed as the recipient's income. Loaded by ../inheritance.html?country=cz.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const TOP = 1762812, LOW = .15, HIGH = .23, PAYER = 30840, OCCASIONAL = 50000;
  const RELS = ['partner', 'child', 'sibling', 'relative', 'other'];
  const HOW = ['inherit', 'gift'];
  const SOURCES = [
    ['exempt', 'https://portal.pohoda.cz/dane-ucetnictvi-mzdy/ostatni-dane/majetkove-dane/dan-dedicka'],
    ['since2014', 'https://portal.pohoda.cz/dane-ucetnictvi-mzdy/ostatni-dane/dan-dedicka-a-darovaci-od-roku-2014'],
    ['giftLimit', 'https://rulecalc.com/cs/dan/osvobozeni-bezplatne-plneni-limit'],
    ['limits', 'https://www.forvismazars.com/cz/cs/prehledy/newslettery/newslettery-ze-mzdove-oblasti/payroll-newslettery-2026/payroll-newsletter-archiv-2026/zmeny-ve-mzdovych-limitech-a-sazbach-od-roku-2026'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  // Income tax on a year's tax base, after the taxpayer credit.
  const incomeTax = base => Math.max(0, LOW * Math.min(base, TOP) + HIGH * Math.max(0, base - TOP) - PAYER);

  function compute(s, rel = s.rel) {
    const share = pos(s.share), other = pos(s.otherIncome);
    const lines = [{ label: t(s.how === 'gift' ? 'line.gift' : 'line.inherit'), amt: share }];
    let tax = 0;
    if (s.how !== 'gift') lines.push({ label: t('line.inheritExempt'), tax: 0, cls: 'sub' });
    else if (rel !== 'other') lines.push({ label: t('line.familyExempt'), tax: 0, cls: 'sub' });
    else if (share <= OCCASIONAL) lines.push({ label: t('line.occasional', eur(OCCASIONAL)), tax: 0, cls: 'sub' });
    else {
      tax = incomeTax(other + share) - incomeTax(other);
      lines.push({ label: t('line.otherIncome'), amt: other, cls: 'sub' });
      const lowPart = Math.max(0, Math.min(share, TOP - other)), highPart = share - lowPart;
      if (lowPart > 0) lines.push({ label: t('line.low'), amt: lowPart, rate: LOW, tax: LOW * lowPart });
      if (highPart > 0) lines.push({ label: t('line.high'), amt: highPart, rate: HIGH, tax: HIGH * highPart });
      const credit = LOW * lowPart + HIGH * highPart - tax;
      if (credit > .5) lines.push({ label: t('line.credit'), tax: -credit, cls: 'sub' });
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    SOURCES,
    currency: 'CZK', nextStep: 2500,
    state: { share: 3000000, rel: 'child', how: 'inherit', otherIncome: 600000 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], how: ['how', 'str', HOW], income: ['otherIncome', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'how', type: 'seg', label: 'how', options: HOW, optLabel: 'how.' },
      { key: 'share', type: 'money', label: 'amount', hint: 'amountHint', step: 100000 },
      { key: 'rel', type: 'segCol', label: 'from', options: RELS, optLabel: 'rel.' },
      { key: 'otherIncome', type: 'money', label: 'otherIncome', hint: 'otherIncomeHint', step: 50000, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => compute(s),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...compute(s, k) })),
    },
    // Inheritances are always 0%, so the chart shows lifetime gifts, the only case that can be taxed.
    chart: {
      xMax: 10000000, step: 50000, yMax: 25,
      title: () => t('chartTitle'),
      deps: s => [s.otherIncome, s.rel, s.how],
      lines: s => [
        { label: t('chart.family'), color: '--r-child', me: s.how !== 'gift' || s.rel !== 'other', f: x => 0 },
        { label: t('chart.other'), color: '--r-other', me: s.how === 'gift' && s.rel === 'other', f: x => compute({ ...s, how: 'gift', share: x }, 'other').avg },
      ],
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('ref.colInherit'), t('ref.colFamily'), t('ref.colOther')], rows: [
        { to: eur(OCCASIONAL), cells: [{ r: 0, txt: '0%' }, { r: 0, txt: '0%' }, { r: 0, txt: '0%' }] },
        { to: eur(TOP), cells: [{ r: 0, txt: '0%' }, { r: 0, txt: '0%' }, { r: LOW, txt: pct(LOW, 0) }] },
        { to: t('inh.above'), cells: [{ r: 0, txt: '0%' }, { r: 0, txt: '0%' }, { r: HIGH, txt: pct(HIGH, 0) }] },
      ] } },
      { h: t('refRulesH'), list: ['inherit', 'family', 'other', 'occasional', 'report', 'property'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
