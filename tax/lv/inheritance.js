// Latvian inheritance and gifts in 2026. There is no inheritance tax: inheritances are exempt from income tax for every heir.
// What remains is the Land Register state fee on inherited or gifted real estate, and income tax on large gifts from
// outside the family. Loaded by ../inheritance.html?country=lv.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const CAP = 105300, LOW = .255, HIGH = .33, EXTRA = .03, EXTRA_FROM = 200000, GIFT_FREE = 1425;
  const MIN_WAGE = 780, FEE_FLOOR = 10 * MIN_WAGE, GIFT_FEE_CAP = 50000;
  const RELS = ['partner', 'child', 'parent', 'sibling', 'uncle', 'cousin', 'other'];
  const HOW = ['law', 'will', 'gift'];
  const COLORS = { partner: 'partner', child: 'child', parent: 'parent', sibling: 'sibling', uncle: 'nephew', cousin: 'relative', other: 'other' };
  // Heir class under the Civil Law: 0 spouse, 1 descendants, 2 parents and full siblings, 4 other relatives, null none.
  const CLASS = { partner: 0, child: 1, parent: 2, sibling: 2, uncle: 4, cousin: 4, other: null };
  // Gifts are income-tax free from a spouse or a relative up to the third degree.
  const GIFT_FAMILY = { partner: true, child: true, parent: true, sibling: true, uncle: true, cousin: false, other: false };
  // The Land Register fee on gifts is 0.5% for spouses, children, grandchildren, parents, grandparents and siblings.
  const GIFT_CLOSE = { partner: true, child: true, parent: true, sibling: true, uncle: false, cousin: false, other: false };
  const SOURCES = [
    ['iin', 'https://likumi.lv/ta/id/56880-par-iedzivotaju-ienakuma-nodokli'],
    ['fee', 'https://tapportals.mk.gov.lv/structuralizer/data/nodes/2e0448fa-ae5f-46a5-adae-80c0f1ffa815/preview'],
    ['feeQa', 'https://lvportals.lv/e-konsultacijas/27760-valsts-nodevas-davinatam-un-mantotam-ipasumam-2022'],
    ['rates', 'https://www.fm.gov.lv/en/changes-taxation-and-finances-2026'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  const incomeTax = b => LOW * Math.min(b, CAP) + HIGH * Math.max(0, b - CAP) + EXTRA * Math.max(0, b - EXTRA_FROM);

  // Land Register state fee rate on inherited real estate (Cabinet Regulation No. 1250, point 13).
  function inheritFeeRate(rel, how, lived) {
    const c = CLASS[rel];
    if (how === 'will') return c === null ? .075 : c === 4 ? .04 : .00125;
    if (c === null) return .075;
    if (c === 0 || (lived && c <= 3)) return .0025;
    return c === 4 ? .05 : .005;
  }

  function compute(s, rel = s.rel) {
    const share = pos(s.share), prop = Math.min(pos(s.property), share);
    // Someone outside the family can only inherit under a will.
    const how = s.how === 'law' && rel === 'other' ? 'will' : s.how;
    const lines = [{ label: t(how === 'gift' ? 'line.gift' : 'line.inherit'), amt: share }];
    let tax = 0;
    if (how !== 'gift') {
      lines.push({ label: t('line.inheritExempt'), tax: 0, cls: 'sub' });
      if (how !== s.how) lines.push({ label: t('line.otherWill'), cls: 'sub' });
      if (prop > 0 && prop <= FEE_FLOOR) lines.push({ label: t('line.feeFloor', eur(FEE_FLOOR)), amt: prop, tax: 0, cls: 'sub' });
      else if (prop > 0) {
        const r = inheritFeeRate(rel, how, s.lived);
        lines.push({ label: t('line.fee'), amt: prop, rate: r, tax: r * prop });
        tax += r * prop;
      }
    } else {
      if (GIFT_FAMILY[rel]) lines.push({ label: t('line.familyExempt'), tax: 0, cls: 'sub' });
      else {
        const taxed = Math.max(0, share - GIFT_FREE), other = pos(s.otherIncome);
        lines.push({ label: t('line.giftFree', eur(GIFT_FREE)), amt: Math.min(share, GIFT_FREE), tax: 0, cls: 'sub' });
        if (taxed > 0) {
          const it = incomeTax(other + taxed) - incomeTax(other);
          lines.push({ label: t('line.giftTaxed'), amt: taxed, rate: taxed > 0 ? it / taxed : 0, tax: it });
          tax += it;
        }
      }
      if (prop > 0) {
        const r = GIFT_CLOSE[rel] ? .005 : .03, fee = Math.min(GIFT_FEE_CAP, r * prop);
        lines.push({ label: t(fee < r * prop ? 'line.giftFeeCap' : 'line.giftFee', eur(GIFT_FEE_CAP)), amt: prop, rate: r, tax: fee });
        tax += fee;
      }
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    GAPS: ['feeTable', 'partner', 'ntm', 'notModelled'],
    SOURCES,
    currency: 'EUR', nextStep: 100,
    state: { share: 150000, property: 100000, rel: 'child', how: 'law', lived: false, otherIncome: 20000 },
    urlFields: {
      share: ['share', 'num'], prop: ['property', 'num'], rel: ['rel', 'str', RELS], how: ['how', 'str', HOW],
      lived: ['lived', 'bool'], income: ['otherIncome', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'how', type: 'seg', label: 'how', options: HOW, optLabel: 'how.' },
      { key: 'share', type: 'money', label: 'amount', hint: 'amountHint', step: 10000 },
      { key: 'property', type: 'money', label: 'property', hint: 'propertyHint', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'from', options: RELS, optLabel: 'rel.' },
      { key: 'lived', type: 'check', label: 'lived', hint: 'livedHint', show: s => s.how === 'law' && (CLASS[s.rel] === 1 || CLASS[s.rel] === 2) },
      { key: 'otherIncome', type: 'money', label: 'otherIncome', hint: 'otherIncomeHint', step: 5000, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => compute(s),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...compute(s, k) })),
    },
    chart: {
      xMax: 1000000, step: 10000, yMax: 10,
      title: s => t(s.how === 'gift' ? 'chartTitleGift' : 'chartTitle'),
      deps: s => [s.how, s.lived, s.otherIncome, s.share, s.property],
      lines: s => {
        const ratio = pos(s.share) > 0 ? Math.min(1, pos(s.property) / pos(s.share)) : 1;
        return RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => compute({ ...s, share: x, property: x * ratio }, k).avg }));
      },
    },
    ref: () => [
      { h: t('refFeeH'), table: { head: [t('relation'), t('ref.colLaw'), t('ref.colWill'), t('ref.colGift')], rows: [
        { to: t('rel.partner'), cells: [{ r: .0025, txt: pct(.0025, 2) }, { r: .00125, txt: pct(.00125, 3) }, { r: .005, txt: pct(.005, 1) }] },
        { to: t('ref.rowClose'), cells: [{ r: .005, txt: pct(.005, 1) }, { r: .00125, txt: pct(.00125, 3) }, { r: .005, txt: pct(.005, 1) }] },
        { to: t('rel.uncle'), cells: [{ r: .05, txt: pct(.05, 0) }, { r: .04, txt: pct(.04, 0) }, { r: .03, txt: pct(.03, 0) }] },
        { to: t('rel.cousin'), cells: [{ r: .05, txt: pct(.05, 0) }, { r: .04, txt: pct(.04, 0) }, { r: .03, txt: pct(.03, 0) }] },
        { to: t('rel.other'), cells: [{ r: .075, txt: pct(.075, 1) }, { r: .075, txt: pct(.075, 1) }, { r: .03, txt: pct(.03, 0) }] },
      ] } },
      { h: t('refRulesH'), list: ['inherit', 'fee', 'lived', 'gift', 'giftTax', 'giftFee', 'pension'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
