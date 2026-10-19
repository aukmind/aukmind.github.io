// Belgian inheritance tax for deaths in 2026, per region. Loaded by ../inheritance.html?country=be.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  const RATES = {
    vl: {
      direct: [[50000, .03], [250000, .09], [INF, .27]],
      sibling: [[35000, .25], [75000, .30], [INF, .55]],
      uncle: [[35000, .25], [75000, .45], [INF, .55]],
      other: [[35000, .25], [75000, .45], [INF, .55]],
    },
    bru: {
      direct: [[50000, .03], [100000, .08], [175000, .09], [250000, .18], [500000, .24], [INF, .30]],
      sibling: [[12500, .20], [25000, .25], [50000, .30], [100000, .40], [175000, .55], [250000, .60], [INF, .65]],
      uncle: [[50000, .35], [100000, .50], [175000, .60], [INF, .70]],
      other: [[50000, .40], [75000, .55], [175000, .65], [INF, .80]],
    },
    wal: {
      direct: [[12500, .03], [25000, .04], [50000, .05], [100000, .07], [150000, .10], [200000, .14], [250000, .18], [500000, .24], [INF, .30]],
      sibling: [[12500, .20], [25000, .25], [75000, .35], [175000, .50], [INF, .65]],
      uncle: [[12500, .25], [25000, .30], [75000, .40], [175000, .55], [INF, .70]],
      other: [[12500, .30], [25000, .35], [75000, .60], [INF, .80]],
    },
  };
  const REGIONS = ['vl', 'wal', 'bru'];
  const RELS = ['partner', 'child', 'sibling', 'uncle', 'other'];
  const GROUPS = ['direct', 'sibling', 'uncle', 'other'];
  const SOURCES = [
    ['wikifin', 'https://www.wikifin.be/fr/heriter/heritage-et-droits-de-succession/les-droits-de-succession/detail-des-tarifs-des-droits-de'],
    ['pia', 'https://www.pia.be/en/news/inheritance-tax-in-2026-how-much-do-you-pay-on-an-inheritance'],
    ['mercier', 'https://www.merciervanlanschot.be/nl-be/insights/nieuws-en-updates/wat-wijzigt-er-in-vlaanderen-en-brussel-vanaf-1-januari-2026'],
    ['notaireBru', 'https://www.notaire.be/heritage-et-donations/heritage/impot-sur-lheritage-tarifs-des-droits-de-succession/calcul-et-tarifs-des-droits-de-succession-bruxelles'],
    ['mesfrais', 'https://mesfrais-succession.be/bareme-succession-wallonie-2026.html'],
    ['notaireWal', 'https://www.notaire.be/actualites/reforme-des-droits-de-succession-et-de-donation-en-wallonie-ce-qui-change-en-2028'],
  ];
  const group = rel => rel === 'partner' || rel === 'child' ? 'direct' : rel;

  function slices(x, br) {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, tax: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  }
  const progressive = (x, br) => slices(x, br).reduce((t, s) => t + s.tax, 0);

  // Returns the tax and the steps that produce it.
  function inheritanceTax(inp, region) {
    const share = Math.max(0, inp.share || 0);
    const br = RATES[region][group(inp.rel)];
    const lines = [{ label: t('inh.line.share'), amt: share }];
    let taxable = share;
    const home = inp.rel === 'partner' ? Math.min(Math.max(0, inp.home || 0), share) : 0;
    if (home > 0) { lines.push({ label: t('line.home'), amt: -home, cls: 'sub' }); taxable -= home; }

    const addSlices = (x, label) => {
      const sl = slices(x, br);
      if (label) lines.push({ label, amt: x, cls: 'sub' });
      for (const s of sl) lines.push({ label: `${eur(s.from)} – ${eur(s.to)}`, amt: s.to - s.from, rate: s.r, tax: s.tax });
      return sl.reduce((t, s) => t + s.tax, 0);
    };

    let tax = 0;
    if (region === 'vl' && group(inp.rel) === 'direct') {
      const re = Math.min(Math.max(0, inp.realEstate || 0), taxable);
      let movable = taxable - re;
      if (inp.rel === 'partner') {
        const ex = Math.min(movable, 75000);
        if (ex > 0) { lines.push({ label: t('line.vl75k'), amt: -ex, cls: 'sub' }); movable -= ex; }
      }
      if (re > 0) {
        tax += addSlices(movable, t('line.movable'));
        tax += addSlices(re, t('line.realEstate'));
      } else tax += addSlices(movable);
    } else {
      tax += addSlices(taxable);
      if (group(inp.rel) === 'direct' && region !== 'vl') {
        let abatt = region === 'bru' ? 15000 : (share <= 125000 ? 25000 : 12500);
        if (inp.rel === 'child' && inp.age != null && inp.age !== '' && inp.age < 21) abatt += 2500 * (21 - inp.age);
        const relief = progressive(Math.min(taxable, abatt), br);
        if (relief > 0) { lines.push({ label: t('line.taxFree', eur(abatt)), tax: -relief, cls: 'sub' }); tax -= relief; }
      }
    }
    return { tax: Math.max(0, tax), lines, avg: share > 0 ? Math.max(0, tax) / share : 0 };
  }

  function refTable(region) {
    const bounds = [...new Set(GROUPS.flatMap(c => RATES[region][c].map(b => b[0])))].sort((a, b) => a - b);
    return bounds.map(b => ({
      to: b === INF ? t('inh.above') : eur(b),
      cells: GROUPS.map(c => { const r = RATES[region][c].find(x => x[0] >= b)[1]; return { r, txt: pct(r, 0) }; }),
    }));
  }
  const withTotal = (s, r) => ({ ...r, total: Math.max(0, s.share || 0) });

  return {
    SOURCES,
    state: { share: 200000, region: 'vl', rel: 'child', home: 0, realEstate: 0, age: 30 },
    urlFields: {
      share: ['share', 'num'], region: ['region', 'str', REGIONS], rel: ['rel', 'str', RELS],
      home: ['home', 'num'], re: ['realEstate', 'num'], age: ['age', 'num'],
    },
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf' },
      { key: 'region', type: 'seg', label: 'regionOf', options: REGIONS, optLabel: 'region.' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'home', type: 'money', label: 'home', hint: 'homeHint', show: s => s.rel === 'partner' },
      { key: 'realEstate', type: 'money', label: 'realEstate', hint: 'realEstateHint', show: s => s.region === 'vl' && (s.rel === 'partner' || s.rel === 'child') },
      { key: 'age', type: 'int', min: 0, max: 120, label: 'age', hint: 'ageHint', show: s => s.rel === 'child' && s.region !== 'vl' },
    ],
    totalLabel: 'inh.inhTax',
    compute: s => withTotal(s, inheritanceTax(s, s.region)),
    compare: {
      title: 'otherRegions', head: 'region',
      rows: s => REGIONS.map(k => ({ k, label: t('region.' + k), color: `var(--r-${k})`, me: k === s.region, ...withTotal(s, inheritanceTax(s, k)) })),
    },
    chart: {
      xMax: 1000000, step: 5000, yMax: 60,
      title: s => t('chartTitle', t('rel.' + s.rel)),
      deps: s => [s.rel, s.region, s.age],
      lines: s => REGIONS.map(k => ({ label: t('region.' + k), color: '--r-' + k, me: k === s.region, f: x => inheritanceTax({ ...s, share: x, home: 0, realEstate: 0 }, k).avg })),
    },
    ref: () => REGIONS.map(k => ({ h: t('region.' + k), table: { head: [t('inh.upTo'), ...GROUPS.map(g => t('relShort.' + g))], rows: refTable(k) }, note: t('note.' + k) })),
  };
};
