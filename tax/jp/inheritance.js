// Japanese inheritance tax (sozoku-zei) for deaths in 2026: charged on the whole estate by the statutory share method. Loaded by ../inheritance.html?country=jp.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  const BANDS = [[10000000, .10], [30000000, .15], [50000000, .20], [100000000, .30], [200000000, .40], [300000000, .45], [600000000, .50], [INF, .55]];
  const BASE = 30000000, PER_HEIR = 6000000, INS_FREE = 5000000, HOME_CUT = .8, SPOUSE_FLOOR = 160000000, SURCHARGE = .2;
  const FAMS = ['partnerKids', 'kids', 'partnerParents', 'parents', 'partnerSiblings', 'siblings', 'partner'];
  const SPLITS = ['legal', 'none', 'all'];
  const COLORS = { partner: '--r-partner', child: '--r-child', parent: '--r-parent', sibling: '--r-sibling' };
  const FAM_COLORS = { partnerKids: '--r-partner', kids: '--r-child', partnerParents: '--r-parent', parents: '--r-grandchild', partnerSiblings: '--r-sibling', siblings: '--r-nephew', partner: '--r-other' };
  const SOURCES = [
    ['rates', 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4155.htm'],
    ['calc', 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm'],
    ['spouse', 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4158.htm'],
    ['surcharge', 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4157.htm'],
    ['insurance', 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4114.htm'],
    ['land', 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4124.htm'],
    ['gifts', 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4161.htm'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  const cnt = (v, lo, hi) => Math.min(hi, Math.max(lo, Math.round(Number(v) || 0)));
  const progressive = x => { let lo = 0, tax = 0; for (const [hi, r] of BANDS) { if (x > lo) tax += (Math.min(x, hi) - lo) * r; lo = hi; } return tax; };
  const bandRate = x => BANDS.find(([hi]) => x <= hi)[1];

  // Statutory heirs and their shares under the Civil Code.
  function heirs(fam, s) {
    const kids = cnt(s.kids, 1, 20), parents = cnt(s.parents, 1, 2), sibs = cnt(s.sibs, 1, 20);
    const g = [];
    const partner = fam.startsWith('partner');
    const rest = fam === 'partnerKids' || fam === 'kids' ? ['child', kids, 1 / 2]
      : fam === 'partnerParents' || fam === 'parents' ? ['parent', parents, 1 / 3]
      : fam === 'partnerSiblings' || fam === 'siblings' ? ['sibling', sibs, 1 / 4] : null;
    if (partner) g.push({ k: 'partner', n: 1, share: rest ? 1 - rest[2] : 1 });
    if (rest) g.push({ k: rest[0], n: rest[1], share: (partner ? rest[2] : 1) / rest[1] });
    return g;
  }

  function estateTax(inp, fam) {
    const share = pos(inp.share), ins = pos(inp.insurance), g = heirs(fam, inp);
    const n = g.reduce((a, h) => a + h.n, 0);
    const lines = [{ label: t('line.estate'), amt: share }];
    // The home land cut needs a spouse or child to take it over.
    const homeOk = g.some(h => h.k === 'partner' || h.k === 'child');
    const homeCut = homeOk ? HOME_CUT * Math.min(pos(inp.home), share) : 0;
    if (homeCut > 0) lines.push({ label: t('line.home'), amt: -homeCut, cls: 'sub' });
    const insTaxed = Math.max(0, ins - INS_FREE * n);
    if (ins > 0) lines.push({ label: t('line.insurance', eur(INS_FREE * n)), amt: insTaxed, cls: 'sub' });
    const value = share - homeCut + insTaxed;
    const allow = BASE + PER_HEIR * n;
    lines.push({ label: t('line.basic', n), amt: -Math.min(value, allow), cls: 'sub' });
    const taxable = Math.max(0, value - allow);
    lines.push({ label: t('line.taxable'), amt: taxable, cls: 'sub' });

    let total = 0;
    for (const h of g) {
      const part = taxable * h.share, each = progressive(part);
      h.raw = each * h.n;
      total += h.raw;
      if (taxable > 0) lines.push({ label: t('line.part.' + h.k, h.n, Math.round(h.share * 1000) / 10), amt: part * h.n, rate: bandRate(part), tax: h.raw });
    }
    if (g.length > 1 && taxable > 0) lines.push({ label: t('line.total'), tax: total, cls: 'sub' });

    // Actual split: the statutory shares, or the spouse takes nothing or everything.
    const split = g[0].k === 'partner' && g.length > 1 ? inp.split : 'legal';
    const takes = h => split === 'legal' ? h.share * h.n : h.k === 'partner' ? (split === 'all' ? 1 : 0) : split === 'all' ? 0 : h.share * h.n / (1 - g[0].share);
    let tax = 0;
    const segs = [];
    for (const h of g) {
      const frac = takes(h);
      let own = total * frac;
      if (g.length > 1 && taxable > 0) lines.push({ label: t('line.alloc.' + h.k, Math.round(frac * 1000) / 10), tax: own, cls: 'sub' });
      if (h.k === 'partner' && own > 0) {
        const got = value * frac, free = Math.max(SPOUSE_FLOOR, value * h.share);
        const credit = own * Math.min(1, free / got);
        lines.push({ label: t('line.spouse', eur(SPOUSE_FLOOR)), tax: -credit });
        own -= credit;
      }
      if (h.k === 'sibling' && own > 0) {
        lines.push({ label: t('line.surcharge'), tax: own * SURCHARGE });
        own *= 1 + SURCHARGE;
      }
      tax += own;
      if (own > 0) segs.push({ k: h.k, label: t('seg.' + h.k), v: own, color: `var(${COLORS[h.k]})` });
    }
    const all = share + ins;
    return { tax, lines, total: all, avg: all > 0 ? tax / all : 0, segs };
  }

  const hasPartner = s => s.rel.startsWith('partner');

  return {
    GAPS: ['noCheck', 'homeLand', 'split', 'gifts', 'family', 'abroad'],
    SOURCES,
    currency: 'JPY',
    nextStep: 1000000,
    state: { share: 150000000, rel: 'partnerKids', kids: 2, parents: 2, sibs: 2, home: 0, insurance: 0, split: 'legal' },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', FAMS], kids: ['kids', 'num'], parents: ['parents', 'num'], sibs: ['sibs', 'num'],
      home: ['home', 'num'], ins: ['insurance', 'num'], split: ['split', 'str', SPLITS],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'estate', hint: 'estateHint', step: 1000000 },
      { key: 'rel', type: 'segCol', label: 'family', options: FAMS, optLabel: 'fam.' },
      { key: 'kids', type: 'stepper', label: 'kidsN', min: 1, show: s => s.rel === 'partnerKids' || s.rel === 'kids' },
      { key: 'parents', type: 'stepper', label: 'parentsN', min: 1, hint: 'parentsHint', show: s => s.rel === 'partnerParents' || s.rel === 'parents' },
      { key: 'sibs', type: 'stepper', label: 'sibsN', min: 1, show: s => s.rel === 'partnerSiblings' || s.rel === 'siblings' },
      { key: 'home', type: 'money', label: 'home', hint: 'homeHint', step: 1000000, show: s => s.rel === 'partnerKids' || s.rel === 'kids' || hasPartner(s) },
      { key: 'split', type: 'seg', label: 'split', options: SPLITS, optLabel: 'split.', hint: 'splitHint', show: s => hasPartner(s) && s.rel !== 'partner', more: true },
      { key: 'insurance', type: 'money', label: 'insurance', hint: 'insuranceHint', step: 1000000, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => estateTax(s, s.rel),
    compare: {
      title: 'otherFams', head: 'familyHead',
      rows: s => FAMS.map(k => ({ k, label: t('fam.' + k), color: `var(${FAM_COLORS[k]})`, me: k === s.rel, ...estateTax(s, k) })),
    },
    chart: {
      xMax: 3000000000, step: 10000000, yMax: 40,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.kids, s.parents, s.sibs, s.split],
      lines: s => ['partnerKids', 'kids', 'partnerSiblings', 'siblings'].map(k => ({
        label: t('fam.' + k), color: FAM_COLORS[k], me: k === s.rel,
        f: x => estateTax({ ...s, share: x, home: 0, insurance: 0 }, k).avg,
      })),
    },
    ref: () => {
      let lo = 0;
      const rows = BANDS.map(([hi, r]) => {
        const to = hi === INF ? `> ${eur(lo)}` : `${t('inh.upTo')} ${eur(hi)}`;
        lo = hi;
        return { to, cells: [{ r, txt: pct(r, 0) }] };
      });
      return [
        { h: t('refBandsH'), table: { head: [t('refPortion'), t('refRate')], rows }, note: t('refBandsNote') },
        { h: t('refRulesH'), list: ['basic', 'shares', 'spouse', 'surcharge', 'home', 'insurance', 'gifts', 'minors'].map(k => t('rule.' + k)), note: t('refNote') },
      ];
    },
  };
};
