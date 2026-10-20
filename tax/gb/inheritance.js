// UK inheritance tax for deaths in tax year 2026/27, charged on the estate. Loaded by ../inheritance.html?country=gb.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const NRB = 325000, RNRB = 175000, TAPER = 2000000, RATE = .40;
  const RELS = ['partner', 'child', 'other'];
  const SOURCES = [
    ['iht', 'https://www.gov.uk/inheritance-tax'],
    ['rnrb', 'https://www.gov.uk/guidance/inheritance-tax-residence-nil-rate-band'],
    ['transfer', 'https://www.gov.uk/guidance/inheritance-tax-transfer-of-threshold'],
    ['gifts', 'https://www.gov.uk/inheritance-tax/gifts'],
    ['pensions', 'https://www.shoosmiths.com/perspectives/stories/articles/pensions-and-inheritance-reforms-royal-assent-received'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), pension = pos(inp.pension), k = inp.transfer ? 2 : 1;
    const lines = [{ label: t('line.estate'), amt: share }];
    // Unused pension pots only join the estate for deaths from 6 April 2027.
    const penIn = inp.after2027 ? pension : 0;
    if (pension > 0) lines.push({ label: t(penIn ? 'line.pensionIn' : 'line.pensionOut'), amt: pension, cls: 'sub' });
    const estate = share + penIn;
    let tax = 0;
    if (rel === 'partner') {
      lines.push({ label: t('line.partner'), tax: 0, cls: 'sub' });
    } else {
      const nrb = NRB * k, gifts = pos(inp.gifts), nrbLeft = Math.max(0, nrb - gifts);
      lines.push({ label: gifts > 0 ? t('line.nrbUsed', eur(nrb), eur(Math.min(gifts, nrb))) : t('line.nrb', eur(nrb)), amt: -Math.min(estate, nrbLeft), cls: 'sub' });
      let left = Math.max(0, estate - nrbLeft);
      if (rel === 'child') {
        const home = Math.min(pos(inp.home), share), cap = Math.max(0, RNRB * k - Math.max(0, estate - TAPER) / 2);
        const rnrb = Math.min(home, cap, left);
        if (home > 0) {
          lines.push({ label: cap < RNRB * k ? t('line.rnrbTaper', eur(RNRB * k), eur(cap)) : t('line.rnrb', eur(RNRB * k)), amt: -rnrb, cls: 'sub' });
          left -= rnrb;
        }
      }
      lines.push({ label: t('line.taxable'), amt: left, cls: 'sub' });
      if (left > 0) {
        tax = left * RATE;
        lines.push({ label: t('line.rate'), amt: left, rate: RATE, tax });
      }
    }
    const total = share + pension;
    return { tax, lines, total, avg: total > 0 ? tax / total : 0 };
  }

  const plain = { share: 0, home: 0, transfer: false, gifts: 0, pension: 0, after2027: false };

  return {
    SOURCES,
    GAPS: ['oneHeir', 'transfer', 'gifts', 'pensions', 'reliefs'],
    currency: 'GBP',
    state: { share: 600000, rel: 'child', home: 300000, transfer: false, gifts: 0, pension: 0, after2027: false },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], home: ['home', 'num'], transfer: ['transfer', 'bool'],
      gifts: ['gifts', 'num'], pension: ['pension', 'num'], y2027: ['after2027', 'bool'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'estate', hint: 'estateHint' },
      { key: 'rel', type: 'segCol', label: 'leftTo', options: RELS, optLabel: 'rel.' },
      { key: 'home', type: 'money', label: 'home', hint: 'homeHint', show: s => s.rel === 'child' },
      { key: 'transfer', type: 'check', label: 'transfer', hint: 'transferHint', show: s => s.rel !== 'partner' },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true },
      { key: 'pension', type: 'money', label: 'pension', hint: 'pensionHint', more: true },
      { key: 'after2027', type: 'check', label: 'after2027', hint: 'after2027Hint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 3000000, step: 10000, yMax: 40,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.transfer, s.home],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel,
        f: x => inheritanceTax({ ...plain, transfer: s.transfer, home: pos(s.home), share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('rel.child'), t('rel.other')], rows: [
        { to: eur(NRB), cells: [{ r: 0, txt: '0%' }, { r: 0, txt: '0%' }] },
        { to: eur(NRB + RNRB), cells: [{ r: 0, txt: t('refWithHome') }, { r: RATE, txt: pct(RATE, 0) }] },
        { to: t('inh.above'), cells: [{ r: RATE, txt: pct(RATE, 0) }, { r: RATE, txt: pct(RATE, 0) }] },
      ] } },
      { h: t('refAllowH'), list: ['nrb', 'rnrb', 'partner', 'transfer', 'gifts', 'pensions'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
