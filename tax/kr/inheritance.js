// South Korean inheritance tax (상속세) for deaths in 2026, charged on the whole estate. Loaded by ../inheritance.html?country=kr.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  const RELS = ['spouseKids', 'kids', 'spouse', 'sibling', 'grand', 'other'];
  const COLORS = { spouseKids: 'partner', kids: 'child', spouse: 'parent', sibling: 'sibling', grand: 'grandchild', other: 'other' };
  const SPLITS = ['legal', 'none'];
  const BRACKETS = [[1e8, .10], [5e8, .20], [1e9, .30], [3e9, .40], [INF, .50]];
  const BASIC = 2e8, LUMP = 5e8, CHILD = 5e7, SPOUSE_MIN = 5e8, SPOUSE_MAX = 3e9;
  const FIN_MAX = 2e8, FIN_FLOOR = 2e7, HOME_MAX = 6e8, SKIP = .30, FILING = .03;
  // Gift allowance per 10 years for the gifts added back, by who received them.
  const GIFT_ALLOW = { spouseKids: 5e7, kids: 5e7, spouse: 6e8, sibling: 1e7, grand: 5e7, other: 0 };
  const LAW = 'https://www.law.go.kr/법령/상속세및증여세법';
  const SOURCES = [
    ['law', LAW],
    ['pwc', 'https://taxsummaries.pwc.com/republic-of-korea/individual/other-taxes'],
    ['nts', 'https://www.nts.go.kr/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  const onScale = T => {
    let tax = 0, lo = 0;
    for (const [hi, r] of BRACKETS) {
      if (T > lo) tax += (Math.min(T, hi) - lo) * r;
      lo = hi;
    }
    return tax;
  };
  const marginal = T => (BRACKETS.find(([hi]) => T <= hi) || BRACKETS[BRACKETS.length - 1])[1];

  // Korea taxes the estate, not each heir: one bill, shared by the heirs.
  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), gifts = pos(inp.gifts), kids = Math.max(1, Math.round(inp.kids || 1));
    const value = share + gifts;
    const lines = [{ label: t('line.estate'), amt: share }];
    if (gifts > 0) lines.push({ label: t('line.gifts'), amt: gifts, cls: 'sub' });

    const giftBase = Math.max(0, gifts - GIFT_ALLOW[rel]);
    // A bequest to someone who isn't a first-rank heir eats the deductions.
    const byWill = rel === 'grand' || rel === 'other';
    const limit = byWill ? 0 : Math.max(0, value - (value > 5e8 ? giftBase : 0));

    const ded = [];
    if (rel === 'spouse') ded.push([t('line.basic'), BASIC]);
    else ded.push([t(rel === 'spouseKids' || rel === 'kids' ? 'line.lumpKids' : 'line.lump', kids), rel === 'spouseKids' || rel === 'kids' ? Math.max(LUMP, BASIC + CHILD * kids) : LUMP]);
    if (rel === 'spouse' || rel === 'spouseKids') {
      const legal = rel === 'spouse' ? 1 : 1.5 / (1.5 + kids);
      const cap = Math.min(value * legal, SPOUSE_MAX);
      const sp = rel === 'spouseKids' && inp.split === 'none' ? SPOUSE_MIN : Math.max(SPOUSE_MIN, cap);
      ded.push([t(rel === 'spouse' ? 'line.spouseAll' : inp.split === 'none' ? 'line.spouseMin' : 'line.spouseLegal', pct(legal, legal < 1 ? 1 : 0)), sp]);
    }
    const fin = Math.min(pos(inp.fin), share);
    if (fin > 0) ded.push([t('line.fin'), Math.min(FIN_MAX, fin <= FIN_FLOOR ? fin : Math.max(FIN_FLOOR, .2 * fin))]);
    const home = Math.min(pos(inp.home), share);
    if (home > 0 && (rel === 'kids' || rel === 'spouseKids')) ded.push([t('line.home'), Math.min(HOME_MAX, home)]);

    const asked = ded.reduce((a, [, v]) => a + v, 0);
    const used = Math.min(asked, limit);
    for (const [label, v] of ded) lines.push({ label, amt: -v, cls: 'sub' });
    if (used < asked) lines.push({ label: t(byWill ? 'line.limitWill' : 'line.limit'), amt: asked - used, cls: 'sub' });

    const base = Math.max(0, value - used);
    lines.push({ label: t('line.taxable'), amt: base, cls: 'sub' });
    const scale = onScale(base);
    if (base > 0) lines.push({ label: t('line.scale'), amt: base, rate: marginal(base), tax: scale });
    let tax = scale;
    if (rel === 'grand' && scale > 0) {
      lines.push({ label: t('line.skip'), rate: SKIP, tax: scale * SKIP });
      tax += scale * SKIP;
    }
    const giftCredit = Math.min(tax, onScale(giftBase) * (rel === 'grand' ? 1 + SKIP : 1));
    if (giftCredit > 0) {
      lines.push({ label: t('line.giftCredit'), tax: -giftCredit, cls: 'sub' });
      tax -= giftCredit;
    }
    const filing = FILING * tax;
    if (filing > 0) {
      lines.push({ label: t('line.filing'), rate: FILING, tax: -filing, cls: 'sub' });
      tax -= filing;
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const plain = { share: 0, kids: 2, split: 'legal', fin: 0, home: 0, gifts: 0 };
  const withKids = s => s.rel === 'spouseKids' || s.rel === 'kids';

  return {
    SOURCES,
    currency: 'KRW', nextStep: 10000000,
    state: { share: 3000000000, rel: 'spouseKids', kids: 2, split: 'legal', fin: 0, home: 0, gifts: 0 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], kids: ['kids', 'num'], split: ['split', 'str', SPLITS],
      fin: ['fin', 'num'], home: ['home', 'num'], gifts: ['gifts', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'estate', hint: 'estateHint', step: 100000000 },
      { key: 'rel', type: 'segCol', label: 'leftTo', options: RELS, optLabel: 'rel.' },
      { key: 'kids', type: 'stepper', min: 1, label: 'kids', hint: 'kidsHint', show: withKids },
      { key: 'split', type: 'seg', label: 'split', hint: 'splitHint', options: SPLITS, optLabel: 'split.', show: s => s.rel === 'spouseKids' },
      { key: 'fin', type: 'money', label: 'fin', hint: 'finHint', step: 10000000, more: true },
      { key: 'home', type: 'money', label: 'home', hint: 'homeHint', step: 10000000, show: withKids, more: true },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', step: 10000000, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 10000000000, step: 50000000, yMax: 50,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.kids, s.split],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel,
        f: x => inheritanceTax({ ...plain, kids: s.kids, split: s.split, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('inh.rate')], rows: BRACKETS.map(([hi, r]) => ({ to: hi === INF ? t('inh.above') : eur(hi), cells: [{ r, txt: pct(r, 0) }] })) } },
      { h: t('refAllowH'), list: ['lump', 'spouse', 'fin', 'home', 'gifts', 'will', 'skip', 'filing'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
