// Spanish inheritance tax (ISD) for deaths in 2026, per autonomous community. Loaded by ../inheritance.html?country=es.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  // [lower bound, rate %] pairs to [[upper bound, rate]].
  const scale = (...rows) => rows.map(([, r], i) => [i + 1 < rows.length ? rows[i + 1][0] : INF, r / 100]);
  const STATE = scale([0, 7.65], [7993.46, 8.5], [15980.91, 9.35], [23968.36, 10.2], [31955.81, 11.05], [39943.26, 11.9], [47930.72, 12.75],
    [55918.17, 13.6], [63905.62, 14.45], [71893.07, 15.3], [79880.52, 16.15], [119757.67, 18.7], [159634.83, 21.25], [239389.13, 25.5],
    [398777.54, 29.75], [797555.08, 34]);
  const ROUND8K = (top1, top2) => scale([0, 7.65], [8000, 8.5], [16000, 9.35], [24000, 10.2], [32000, 11.05], [40000, 11.9], [48000, 12.75],
    [56000, 13.6], [64000, 14.45], [72000, 15.3], [80000, 16.15], [120000, 18.7], [160000, 21.25], [240000, 25.5], [400000, top1], [800000, top2]);
  const SCALES = {
    and: scale([0, 7], [8000, 8], [15000, 10], [30000, 12], [50000, 14], [70000, 16], [100000, 18], [150000, 20], [200000, 22], [400000, 24], [800000, 26]),
    ast: ROUND8K(31.25, 36.5),
    astFam: scale([0, 21.25], [56000, 25.5], [216000, 31.25], [616000, 36.5]),
    bal: ROUND8K(29.75, 34),
    balFam: scale([0, 1], [700000, 8], [1000000, 11], [2000000, 15], [3000000, 20]),
    cat: scale([0, 7], [50000, 11], [150000, 17], [400000, 24], [800000, 32]),
    galFam: scale([0, 5], [50000, 7], [125000, 9], [300000, 11], [800000, 15], [1600000, 18]),
    mad: scale([0, 7.65], [8313.20, 8.5], [16001.35, 9.35], [24002.01, 10.2], [32002.70, 11.05], [40003.36, 11.9], [48004.04, 12.75],
      [56004.71, 13.6], [64005.39, 14.45], [72006.05, 15.3], [80006.73, 16.15], [119947.58, 18.7], [159888.45, 21.25], [239770.16, 25.5],
      [399408.59, 29.75], [798817.20, 34]),
    mur: STATE.map(([hi, r], i) => [hi, i === 14 ? .3175 : i === 15 ? .365 : r]),
    val: scale([0, 7.65], [7993.46, 8.5], [15662.38, 9.35], [23493.56, 10.2], [31324.75, 11.05], [39155.94, 11.9], [46987.13, 12.75],
      [54818.31, 13.6], [62649.50, 14.45], [70480.69, 15.3], [78311.88, 16.15], [117407.71, 18.7], [156503.55, 21.25], [234695.23, 25.5],
      [390958.37, 29.75], [781916.75, 34]),
  };
  // Multipliers for pre-existing wealth up to ~400 000 €.
  const COEF = { I: 1, II: 1, III: 1.5882, IV: 2 };
  const ST = { red1: 15956.87, redYear: 3990.72, red1Max: 47858.59, red3: 7993.46, homePct: .95, homeMax: 122606.47 };

  const REGIONS = ['and', 'ara', 'ast', 'bal', 'can', 'cnt', 'cyl', 'clm', 'cat', 'ext', 'gal', 'mad', 'mur', 'rio', 'val'];
  const RELS = ['partner', 'child', 'grandchild', 'parent', 'sibling', 'nephew', 'inlaw', 'other'];
  const pos = v => Math.max(0, Number(v) || 0);
  const kid = rel => rel === 'child' || rel === 'grandchild';
  const young = inp => kid(inp.rel) && inp.age !== '' && inp.age != null && Number(inp.age) < 21;
  const under = inp => Math.max(0, 21 - Number(inp.age));
  const group = inp => young(inp) ? 'I' : ['partner', 'child', 'grandchild', 'parent'].includes(inp.rel) ? 'II' : inp.rel === 'other' ? 'IV' : 'III';
  const family = g => g === 'I' || g === 'II';
  const blood = rel => rel === 'sibling' || rel === 'nephew';

  // Each region: kinship reduction, home reduction, scale, multiplier and bonus. Missing hooks fall back to the state rules.
  const stateKin = inp => {
    const g = group(inp);
    return g === 'I' ? Math.min(ST.red1Max, ST.red1 + ST.redYear * under(inp)) : g === 'II' ? ST.red1 : g === 'III' ? ST.red3 : 0;
  };
  const stateHome = (inp, home) => ['partner', 'child', 'grandchild', 'parent'].includes(inp.rel) ? Math.min(ST.homeMax, ST.homePct * home) : 0;
  const homeFor = (pctOf, max, rels = ['partner', 'child', 'grandchild', 'parent']) => (inp, home) =>
    rels.includes(inp.rel) ? Math.min(max, (typeof pctOf === 'function' ? pctOf(home) : pctOf) * home) : 0;
  const famKin = (fam, iii = ST.red3) => inp => family(group(inp)) ? fam(inp) : group(inp) === 'III' ? iii : 0;
  // Bonus that grows with the base, applied as the weighted average of its tranches (Cataluña).
  const weighted = (base, tbl) => {
    let lo = 0, acc = 0;
    for (const [hi, p] of tbl) { if (base > lo) acc += (Math.min(base, hi) - lo) * p; lo = hi; }
    // The weighted percentage is used with two decimals, as on the tax form.
    return base > 0 ? Math.round(acc / base * 1e4) / 1e4 : 0;
  };
  const CAT_I = [[1e5, .99], [2e5, .97], [3e5, .95], [5e5, .90], [7.5e5, .80], [1e6, .70], [1.5e6, .60], [2e6, .50], [2.5e6, .40], [3e6, .25], [INF, .20]];
  const CAT_II = [[1e5, .60], [2e5, .55], [3e5, .50], [5e5, .45], [7.5e5, .40], [1e6, .35], [1.5e6, .30], [2e6, .25], [2.5e6, .20], [3e6, .10], [INF, 0]];

  const RULES = {
    and: {
      kin: famKin(() => 1000000, 10000), home: homeFor(.99, INF), scale: () => SCALES.and,
      coef: g => ({ I: 1, II: 1, III: 1.5, IV: 1.9 })[g], bonus: g => family(g) ? .99 : 0,
    },
    ara: {
      kin: inp => inp.rel === 'sibling' ? 15000 : stateKin(inp),
      home: homeFor(1, 200000),
      // Spouse, ascendants and descendants: 100% of the base, with all reductions capped at 500 000 €; children under 18 up to 3 M€.
      extra: (inp, base, other) => {
        if (!family(group(inp))) return 0;
        const minor = inp.rel === 'child' && young(inp) && Number(inp.age) < 18 ? Math.min(base, 3000000) : 0;
        return Math.max(minor, other < 500000 ? Math.min(base, 500000 - other) : 0);
      },
      bonus: g => g === 'I' ? .99 : 0,
      homeBonus: { pct: .65, maxValue: 300000 },
    },
    ast: {
      kin: famKin(() => 300000),
      home: homeFor(v => v <= 90000 ? .99 : v <= 120000 ? .98 : v <= 180000 ? .97 : v <= 240000 ? .96 : .95, ST.homeMax),
      scale: g => family(g) ? SCALES.astFam : SCALES.ast,
      coef: g => g === 'I' ? 0 : COEF[g],
    },
    bal: {
      kin: inp => ({ I: Math.min(50000, 25000 + 6250 * under(inp)), II: 25000, III: 8000, IV: 1000 })[group(inp)],
      home: homeFor(1, 270151.20),
      scale: g => family(g) ? SCALES.balFam : SCALES.bal,
      coef: (g, rel) => g === 'III' ? (blood(rel) ? 1.2706 : 1.6575) : g === 'IV' ? 1.7 : 1,
      // Siblings, nephews and uncles get 60% when there are no descendants, which we assume.
      bonus: (g, rel) => family(g) ? 1 : g === 'III' ? (blood(rel) ? .60 : .35) : 0,
    },
    can: {
      kin: inp => {
        const g = group(inp), a = Number(inp.age);
        if (g === 'I') return a < 10 ? 138650 : a < 15 ? 92150 : a < 18 ? 57650 : 40400;
        if (g === 'II') return ({ partner: 40400, child: 23125 })[inp.rel] || 18500;
        return g === 'III' ? 9300 : 0;
      },
      home: homeFor(.99, 200000, ['partner', 'child', 'grandchild']),
      bonus: g => g === 'IV' ? 0 : .999,
    },
    cnt: {
      kin: inp => ({ I: 50000 + 5000 * under(inp), II: 50000, III: inp.rel === 'sibling' ? 25000 : 8000, IV: 0 })[group(inp)],
      home: homeFor(.95, 125000, ['partner', 'child', 'grandchild', 'parent', 'sibling', 'nephew', 'inlaw']),
      bonus: (g, rel) => family(g) ? 1 : rel === 'sibling' ? .5 : 0,
    },
    cyl: {
      kin: famKin(inp => 60000 + (group(inp) === 'I' ? 6000 * under(inp) : 0)),
      // Own top-up so the reductions of spouses, ascendants and descendants reach 400 000 €.
      extra: (inp, base, other) => family(group(inp)) ? Math.min(base, Math.max(0, 400000 - other)) : 0,
      bonus: g => family(g) ? .99 : 0,
    },
    clm: {
      // The bonus steps down with the taxable base: these cliffs are in the law.
      bonus: (g, rel, x) => !family(g) ? 0 : x.taxable < 175000 ? 1 : x.taxable < 225000 ? .95 : x.taxable < 275000 ? .90 : x.taxable < 300000 ? .85 : .80,
    },
    cat: {
      kin: inp => {
        const g = group(inp);
        if (g === 'I') return Math.min(196000, 100000 + 12000 * under(inp));
        if (g === 'II') return ({ partner: 100000, child: 100000, grandchild: 50000, parent: 30000 })[inp.rel];
        return g === 'III' ? 8000 : 0;
      },
      home: homeFor(.95, 500000),
      scale: () => SCALES.cat,
      bonus: (g, rel, x) => rel === 'partner' ? .99 : g === 'I' ? weighted(x.share, CAT_I) : g === 'II' ? weighted(x.share, CAT_II) : 0,
    },
    ext: {
      // Since 5 Aug 2026 nephews and nieces of someone without descendants get the family benefits, which we assume.
      kin: inp => family(group(inp)) || inp.rel === 'nephew' ? 500000 : stateKin(inp),
      bonus: (g, rel) => family(g) || rel === 'nephew' ? .99 : 0,
    },
    gal: {
      kin: famKin(inp => group(inp) === 'I' ? Math.min(1500000, 1000000 + 100000 * under(inp)) : 1000000, 25000),
      home: (inp, home) => inp.rel === 'partner' ? Math.min(600000, home)
        : ['child', 'grandchild', 'parent'].includes(inp.rel) ? Math.min(600000, (home <= 150000 ? .99 : home <= 300000 ? .97 : .95) * home) : 0,
      scale: g => family(g) ? SCALES.galFam : STATE,
      bonus: g => g === 'I' ? .99 : 0,
    },
    mad: {
      kin: inp => ({ I: Math.min(48000, 16000 + 4000 * under(inp)), II: 16000, III: 8000, IV: 0 })[group(inp)],
      home: homeFor(.95, 123000), scale: () => SCALES.mad,
      bonus: g => family(g) ? .99 : g === 'III' ? .5 : 0,
    },
    mur: { scale: () => SCALES.mur, bonus: g => family(g) ? .99 : 0 },
    rio: { bonus: g => family(g) ? .99 : 0 },
    val: {
      kin: famKin(inp => group(inp) === 'I' ? Math.min(156000, 100000 + 8000 * under(inp)) : 100000),
      home: homeFor(.95, 150000), scale: () => SCALES.val,
      // Siblings, nephews and uncles by blood: 25% since 1 June 2026, 50% from 1 June 2027.
      bonus: (g, rel) => family(g) ? .99 : blood(rel) ? .25 : 0,
    },
  };

  function slices(x, br) {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, tax: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  }

  // Returns the tax and the steps that produce it.
  function inheritanceTax(inp, region) {
    const R = RULES[region], g = group(inp);
    const share = pos(inp.share), home = Math.min(pos(inp.home), share);
    const lines = [{ label: t('inh.line.share'), amt: share }];

    const homeRed = Math.min(share, (R.home || stateHome)(inp, home));
    if (homeRed > 0) lines.push({ label: t('line.home'), amt: -homeRed, cls: 'sub' });
    const kin = Math.min(share - homeRed, (R.kin || stateKin)(inp));
    if (kin > 0) lines.push({ label: t('line.kin', t('group.' + g)), amt: -kin, cls: 'sub' });
    const extra = R.extra ? R.extra(inp, share - homeRed - kin, homeRed + kin) : 0;
    if (extra > 0) lines.push({ label: t('line.extra.' + region), amt: -extra, cls: 'sub' });
    const taxable = Math.max(0, share - homeRed - kin - extra);
    lines.push({ label: t('line.taxable'), amt: taxable, cls: 'sub' });

    let quota = 0;
    for (const sl of slices(taxable, (R.scale || (() => STATE))(g))) {
      lines.push({ label: `${eur(sl.from)} – ${eur(sl.to)}`, amt: sl.to - sl.from, rate: sl.r, tax: sl.tax });
      quota += sl.tax;
    }
    const coef = R.coef ? R.coef(g, inp.rel) : COEF[g];
    const corrected = quota * coef;
    if (quota > 0 && coef !== 1) lines.push({ label: t('line.coef', String(coef).replace('.', t('decimal'))), tax: corrected - quota, cls: 'sub' });

    const b = R.bonus ? R.bonus(g, inp.rel, { share, taxable }) : 0;
    let bonus = corrected * b;
    if (bonus > 0) lines.push({ label: t('line.bonus', pct(b, b * 100 % 1 ? 2 : 0)), tax: -bonus, cls: 'sub' });
    const hb = R.homeBonus;
    if (hb && family(g) && home > 0 && home <= hb.maxValue && taxable > 0) {
      const inBase = Math.min(taxable, Math.max(0, home - homeRed));
      const extraBonus = hb.pct * (corrected - bonus) * inBase / taxable;
      if (extraBonus > 0) { lines.push({ label: t('line.homeBonus'), tax: -extraBonus, cls: 'sub' }); bonus += extraBonus; }
    }
    const tax = Math.max(0, corrected - bonus);
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const CHART = { mad: '--r-bru', cat: '--r-wal', and: '--r-partner', val: '--r-vl', gal: '--r-grandchild', ast: '--r-relative' };
  const colorOf = (k, me) => CHART[k] || (me ? '--r-nephew' : null);
  const plain = { home: 0 };
  const SAMPLES = [
    { k: 'child200', inp: { rel: 'child', age: 40, share: 200000 } },
    { k: 'child1m', inp: { rel: 'child', age: 40, share: 1000000 } },
    { k: 'sibling100', inp: { rel: 'sibling', share: 100000 } },
    { k: 'other100', inp: { rel: 'other', share: 100000 } },
  ];

  return {
    SOURCES: [
      ['hacienda', 'https://www.hacienda.gob.es/sgfal/financiacionterritorial/autonomica/capitulo-iv-tributacion-autonomica-2026.pdf'],
      ['haciendaNews', 'https://www.hacienda.gob.es/sgfal/financiacionterritorial/autonomica/capitulo-ii-tributacion-autonomica-2026.pdf'],
      ['lisd', 'https://www.boe.es/buscar/act.php?id=BOE-A-1987-28141'],
      ['reaf', 'https://multimedia2.coev.com/pdfs/panorama-fiscalidad2026.pdf'],
    ],
    state: { share: 200000, region: 'mad', rel: 'child', age: 40, home: 0 },
    urlFields: {
      share: ['share', 'num'], region: ['region', 'str', REGIONS], rel: ['rel', 'str', RELS], age: ['age', 'num'], home: ['home', 'num'],
    },
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf' },
      { key: 'region', type: 'seg', label: 'regionOf', hint: 'regionHint', options: REGIONS, optLabel: 'region.' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'age', type: 'int', min: 0, max: 120, label: 'age', hint: 'ageHint', show: s => kid(s.rel) },
      { key: 'home', type: 'money', label: 'home', hint: 'homeHint', show: s => s.rel !== 'other' },
    ],
    totalLabel: 'inh.inhTax',
    compute: s => inheritanceTax(s, s.region),
    compare: {
      title: 'otherRegions', head: 'region',
      rows: s => REGIONS.map(k => {
        const c = colorOf(k, k === s.region);
        return { k, label: t('region.' + k), color: c ? `var(${c})` : 'var(--muted)', me: k === s.region, ...inheritanceTax(s, k) };
      }),
    },
    chart: {
      xMax: 1500000, step: 5000, yMax: 40,
      title: s => t('chartTitle', t('rel.' + s.rel)),
      deps: s => [s.rel, s.region, s.age],
      lines: s => REGIONS.filter(k => colorOf(k, k === s.region)).map(k => ({
        label: t('region.' + k), color: colorOf(k, k === s.region), me: k === s.region,
        f: x => inheritanceTax({ ...s, ...plain, share: x }, k).avg,
      })),
    },
    ref: () => [
      {
        h: t('refTableH'),
        table: {
          head: [t('region'), ...SAMPLES.map(x => t('sample.' + x.k))],
          rows: REGIONS.map(k => ({
            to: t('region.' + k),
            cells: SAMPLES.map(x => { const r = inheritanceTax({ ...plain, ...x.inp }, k).avg; return { r, txt: pct(r) }; }),
          })),
        },
        note: t('refTableNote'),
      },
      { h: t('refRegionsH'), list: REGIONS.map(k => `${t('region.' + k)}: ${t('note.' + k)}`) },
      { h: t('refStateH'), list: ['groups', 'kin', 'home', 'scale', 'coef'].map(k => t('state.' + k)), note: t('refNotIncl') },
    ],
  };
};
