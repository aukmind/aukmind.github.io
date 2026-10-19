// Croatian salary rules for income year 2026. Loaded by ../index.html?country=hr.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const MIN_ROLES = ['minister', 'dpm', 'pm'];
  // The shell's employer-size row is used for the worker's age: the youth cut in ZPD art. 46(2).
  const AGES = ['std', 'u30', 'u25'];
  // The region row says whether the 50% assisted-area cut applies (ZPD art. 24(5), 46(1)); a municipality sets it.
  const AREAS = ['std', 'pp'];

  const P = {
    // ZPD art. 14: 600 € a month; children and dependants as coefficients of it.
    ded: 600 * 12,
    kids: [.5, .7, 1, 1.4, 1.9, 2.5, 3.2, 4, 4.9],
    depCoef: .5,
    depMax: 6 * 600,
    thr: 60000,
    youth: { std: 0, u30: .5, u25: 1 },
    areaCut: .5,
    // Zakon o doprinosima: pension pillars from pay, health on top; ceiling for pension only (NN 150/25).
    mio1: .15, mio2: .05, health: .165, maxM: 11958,
    relief: { full: 300, lo: 700, hi: 1300 },
    // Doplatak za djecu: % of the budget base (441.44 €) by household income per member, monthly.
    dz: { base: 441.44, bands: [[.2, .14], [.4, .125], [.6, .11], [1, .09], [1.4, .07]], extra: 66.36 },
    // Default rates when a city made no decision (ZPD art. 19.a(5)); the reference table shows these.
    brackets: [[60000, .20], [Infinity, .30]],
  };

  // Minimum wage 2026 (Uredba, NN 145/25); mean gross January to August 2025, the figure behind the 2026 contribution bases.
  const REF_WAGES = [
    { key: 'min', m: 1050, year: 2026, color: '--w-min' },
    { key: 'avg', m: 1993, year: 2025, color: '--w-avg' },
  ];

  // Monthly gross after the Government's July 2024 decision (base 947.18 € × coefficient).
  const GOV = { pm: 5535 * 12, dpm: 4776 * 12, minister: 4167 * 12, speaker: 5314 * 12 };
  const DOC_GOV = 'https://www.tportal.hr/vijesti/clanak/pogledajte-koliko-ce-rasti-place-predsjedniku-premijeru-i-drugim-najvisim-duznosnicima-foto-20240724';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_GOV },
    { kind: 'stat', key: 'speaker', icon: '🔔', regime: 'minister', lo: GOV.speaker, hi: GOV.speaker, url: DOC_GOV },
    { kind: 'stat', key: 'dpm', icon: '🎖️', regime: 'minister', lo: GOV.dpm, hi: GOV.dpm, url: DOC_GOV },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_GOV },
  ];

  const SRC = {
    zpd: 'https://www.zakon.hr/z/85/zakon-o-porezu-na-dohodak',
    rates: 'https://porezna-uprava.gov.hr/hr/porezne-stope-godisnjeg-poreza-na-dohodak/4764',
    groups: 'https://narodne-novine.nn.hr/clanci/sluzbeni/2024_01_3_60.html',
    doprinosi: 'https://www.zakon.hr/z/365/zakon-o-doprinosima',
    bases: 'https://narodne-novine.nn.hr/clanci/sluzbeni/2025_12_150_2237.html',
    relief: 'https://vlada.gov.hr/UserDocsImages/2016/Sjednice/2023/Svibanj/220%20sjednica%20VRH/Izmjene%20poreznih%20propisa.pdf',
    dz: 'https://www.zakon.hr/z/475/zakon-o-doplatku-za-djecu',
    minWage: 'https://mojafirma.hr/clanci/obracun-place-korak-po-korak',
    vat: 'https://taxsummaries.pwc.com/croatia/individual/other-taxes',
    govPay: DOC_GOV,
  };

  const pos = v => Math.max(0, v);
  let HI = {};

  // From the tenth child each step grows by 0.1 more (4.9, 5.9, 7.0, ...).
  const kidsCoef = n => {
    const k = [...P.kids];
    while (k.length < n) k.push(2 * k[k.length - 1] - k[k.length - 2] + .1);
    return k.slice(0, n).reduce((a, b) => a + b, 0);
  };

  function rates(s) {
    const lo = s.local / 100;
    const hi = HI[s.commune] != null ? HI[s.commune] / 100 : Math.min(.33, Math.max(.25, lo + .10));
    return { lo, hi };
  }

  // Monthly cut of the pillar I base for low pay (Zakon o doprinosima art. 21.a).
  const relief = m => m <= P.relief.lo ? Math.min(m, P.relief.full) : m <= P.relief.hi ? .5 * (P.relief.hi - m) : 0;

  function contributions(G, s) {
    const m = pos(G) / 12, capped = Math.min(m, P.maxM), cut = relief(m);
    const only1 = !!s.cadre;
    const r1 = only1 ? P.mio1 + P.mio2 : P.mio1;
    return {
      m, cut: 12 * cut,
      mio1: 12 * r1 * pos(capped - cut),
      mio2: only1 ? 0 : 12 * P.mio2 * capped,
      er: P.health * pos(G),
      r1,
    };
  }

  // Income tax of one person, given the extra deductions (children, dependants) they claim.
  function incomeTax(G, extra, s, age) {
    const c = contributions(G, s);
    const doh = pos(G) - c.mio1 - c.mio2;
    const ded = Math.min(doh, P.ded + extra);
    const base = pos(doh - P.ded - extra);
    const { lo, hi } = rates(s);
    const loTax = lo * Math.min(base, P.thr), hiTax = hi * pos(base - P.thr);
    const youth = (P.youth[age] || 0) * loTax;
    const area = s.region === 'pp' ? P.areaCut * (loTax + hiTax - youth) : 0;
    return { c, doh, ded, base, lo, hi, loTax, hiTax, youth, area, tax: loTax + hiTax - youth - area };
  }

  // Household income tax with the children's and dependants' deductions put where they save the most (ZPD art. 17(5)).
  function household(Gu, Gp, s, age, couple) {
    const kids = kidsCoef(s.children) * P.ded;
    const depU = couple && Gp <= P.depMax ? P.depCoef * P.ded : 0;
    const depP = couple && Gu <= P.depMax ? P.depCoef * P.ded : 0;
    if (!couple) {
      const u = incomeTax(Gu, kids, s, age);
      return { u, p: null, kidsU: kids, kids, depU: 0, tax: u.tax };
    }
    const room = g => incomeTax(g, 0, s, 'std').base;
    const cands = [0, kids, kids / 2, Math.min(kids, room(Gu) - depU), kids - Math.min(kids, room(Gp) - depP)].map(v => Math.min(kids, pos(v)));
    let best = null;
    for (const x of cands) {
      const u = incomeTax(Gu, x + depU, s, age), p = incomeTax(Gp, kids - x + depP, s, 'std');
      if (!best || u.tax + p.tax < best.tax - 1e-9) best = { u, p, kidsU: x, kids, depU, tax: u.tax + p.tax };
    }
    return best;
  }

  function childBenefit(s, netU, netP, couple) {
    const n = s.pa ? s.children : 0;
    if (!n) return { month: 0, share: 0, v: 0, perMember: 0, rate: 0 };
    const perMember = pos(netU + netP) / 12 / ((couple ? 2 : 1) + n);
    const band = P.dz.bands.find(([to]) => perMember <= to * P.dz.base + 1e-9);
    const rate = band ? band[1] : 0;
    const month = rate ? n * rate * P.dz.base + Math.min(2, pos(n - 2)) * P.dz.extra : 0;
    const share = couple ? .5 : 1;
    return { month, share, v: 12 * month * share, perMember, rate };
  }

  function compute(G, s, env) {
    const min = s.regime === 'minister' || s.regime === 'pm', age = min ? 'std' : s.size;
    const couple = s.household === 'joint';
    const Gp = couple ? pos((env && env.partnerGross) || 0) : 0;
    const hh = household(G, Gp, s, age, couple);
    const hh0 = couple ? household(0, Gp, s, age, couple) : { tax: 0 };
    const c = hh.u.c;
    const pd = hh.tax - hh0.tax;
    const netU = G - c.mio1 - c.mio2 - hh.u.tax;
    const netP = hh.p ? Gp - hh.p.c.mio1 - hh.p.c.mio2 - hh.p.tax : 0;
    const dz = childBenefit(s, netU, netP, couple);
    const cost = G + c.er;
    const net = G - c.mio1 - c.mio2 - pd + dz.v;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? pos(net) * vatShare : 0;
    return {
      G, cost, net, u: hh.u, hh, pd, dz, age, couple, vatShare, regime: min ? 'minister' : undefined,
      parts: { er: c.er, mio1: c.mio1, mio2: c.mio2, pd, dz: -dz.v, vat },
    };
  }

  const COMP_KEYS = ['er', 'mio1', 'mio2', 'pd', 'dz', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', mio1: 'var(--k-ee)', mio2: 'var(--k-csg)', pd: 'var(--k-com)', dz: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: COMP_KEYS, base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: COMP_KEYS.filter(k => k !== 'vat'), base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['mio1', 'mio2', 'pd', 'dz'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };
  const p0 = r => pct(r, Math.round(r * 1e4) % 100 ? (Math.round(r * 1e4) % 10 ? 2 : 1) : 0);

  function tips(x) {
    const s = x.s;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(GOV.pm / 12), eur(GOV.dpm / 12), eur(GOV.minister / 12))}</p>${sources('govPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.depMax))}</p>${sources('zpd')}`,
      cadre: () => `<h4>${t('cadre')}</h4><p>${t('tip.cadre')}</p>${sources('doprinosi')}`,
      paToggle: () => `<h4>${t('comp.dz')}</h4><p>${t('tip.dzToggle')}</p>${sources('dz')}`,
      pdRule: () => `<h4>${t('pdLabel')}</h4><p>${t('tip.pdRule')}</p>${sources('rates', 'zpd')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('zpd')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('groups', 'zpd')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.G / 12), 12, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>
          ${r && r.G > 0 ? `<p>16.5% × ${eur(r.G)} = <b>${eur(r.parts.er)}</b></p>` : ''}${sources('doprinosi')}`,
      mio1: r => `<h4>${t('comp.mio1')}</h4><p>${t('tip.mio1', eur(P.maxM), eur(P.relief.full), eur(P.relief.lo), eur(P.relief.hi))}</p>
          ${r ? `<table><tr><td>${t('tip.base')}</td><td>${eur(Math.min(r.G, 12 * P.maxM))}</td></tr>
            ${r.u.c.cut > 0 ? `<tr><td>− ${t('bd.relief')}</td><td>−${eur(r.u.c.cut)}</td></tr>` : ''}
            <tr class="t"><td>${p0(r.u.c.r1)}</td><td>${eur(r.parts.mio1)}</td></tr></table>` : ''}${sources('doprinosi', 'relief')}`,
      relief: r => `<h4>${t('bd.relief')}</h4><p>${t('tip.relief', eur(P.relief.full), eur(P.relief.lo), eur(P.relief.hi))}</p>${r ? `<p><b>${eur(r.u.c.cut)}</b>${t('aYear')}</p>` : ''}${sources('relief')}`,
      mio2: r => `<h4>${t('comp.mio2')}</h4><p>${t('tip.mio2', eur(P.maxM))}</p>${r && r.parts.mio2 ? `<p><b>${eur(r.parts.mio2)}</b>${t('aYear')}</p>` : ''}${sources('doprinosi')}`,
      doh: r => `<h4>${t('bd.doh')}</h4><p>${t('tip.doh')}</p>${r ? `<p><b>${eur(r.u.doh)}</b></p>` : ''}`,
      ded: r => `<h4>${t('bd.ded')}</h4><p>${t('tip.ded', eur(P.ded / 12), eur(P.depMax))}</p>
          ${r ? `<table><tr><td>${t('tip.dedBasic')}</td><td>${eur(P.ded)}</td></tr>
            ${r.hh.kidsU > 0 ? `<tr><td>${t('tip.dedKids', s.children)}</td><td>${eur(r.hh.kidsU)}</td></tr>` : ''}
            ${r.hh.depU > 0 ? `<tr><td>${t('tip.dedDep')}</td><td>${eur(r.hh.depU)}</td></tr>` : ''}
            ${r.hh.kids - r.hh.kidsU > .5 ? `<tr><td>${t('tip.dedPartner')}</td><td>${eur(r.hh.kids - r.hh.kidsU)}</td></tr>` : ''}</table>` : ''}${sources('zpd')}`,
      base: r => `<h4>${t('bd.base')}</h4><p>${t('tip.baseTxt', eur(P.thr))}</p>${r ? `<p><b>${eur(r.u.base)}</b></p>` : ''}`,
      pd: r => {
        const c = x.commune();
        if (!r) return `<h4>${t('comp.pd')}</h4><p>${t('tip.pdShort')}</p>${sources('rates', 'zpd')}`;
        const u = r.u;
        return `<h4>${t('comp.pd')}</h4><p>${t('tip.pd', c && esc(c.name), p0(u.lo), p0(u.hi), eur(P.thr))}</p><table>
          <tr><td>${p0(u.lo)} × ${eur(Math.min(u.base, P.thr))}</td><td>${eur(u.loTax)}</td></tr>
          ${u.hiTax > 0 ? `<tr><td>${p0(u.hi)} × ${eur(u.base - P.thr)}</td><td>${eur(u.hiTax)}</td></tr>` : ''}
          ${u.youth > 0 ? `<tr><td>− ${t('bd.youth')}</td><td>−${eur(u.youth)}</td></tr>` : ''}
          ${u.area > 0 ? `<tr><td>− ${t('bd.area')}</td><td>−${eur(u.area)}</td></tr>` : ''}
          ${r.couple && Math.abs(r.pd - u.tax) > .5 ? `<tr><td>${t('tip.pdPartner')}</td><td>${eur(r.pd - u.tax)}</td></tr>` : ''}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.parts.pd)}</td></tr></table>${sources('rates', 'zpd')}`;
      },
      youth: () => `<h4>${t('bd.youth')}</h4><p>${t('tip.size')}</p>${sources('zpd')}`,
      area: () => `<h4>${t('bd.area')}</h4><p>${t('tip.reg')}</p>${sources('groups', 'zpd')}`,
      dz: r => `<h4>${t('comp.dz')}</h4><p>${t('tip.dz', eur(P.dz.base), eur(1.4 * P.dz.base), eur(.14 * P.dz.base), eur(.07 * P.dz.base), eur(P.dz.extra))}</p>
          ${r && r.dz.month ? `<p>${eur(r.dz.perMember)} → ${p0(r.dz.rate)} · ${eur(r.dz.month)}${t('aMonth')} × 12${r.dz.share < 1 ? ' × ½' : ''} = <b>${eur(r.dz.v)}</b></p>` : ''}${sources('dz')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const p = r.parts, u = r.u, c = x.commune(), min = r.regime === 'minister';
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    ];
    if (u.c.cut > 0) L.push({ op: '', k: 'relief', label: t('bd.relief'), v: u.c.cut, cls: 'sub' });
    L.push({ op: '−', k: 'mio1', label: `${t('comp.mio1')} (${p0(u.c.r1)})`, v: p.mio1, tax: p.mio1 });
    if (p.mio2 > 0) L.push({ op: '−', k: 'mio2', label: `${t('comp.mio2')} (5%)`, v: p.mio2, tax: p.mio2 });
    L.push({ op: '=', k: 'doh', label: t('bd.doh'), v: u.doh, cls: 'sub' });
    L.push({ op: '−', k: 'ded', label: t('bd.ded'), v: u.ded, cls: 'sub' });
    L.push({ op: '=', k: 'base', label: t('bd.base'), v: u.base, cls: 'sub' });
    L.push({ op: '−', k: 'pd', label: `${t('bd.pdGross')} (${p0(u.lo)}${u.hiTax > 0 ? ' / ' + p0(u.hi) : ''}${c ? ', ' + c.name : ''})`, v: u.loTax + u.hiTax, tax: u.loTax + u.hiTax });
    if (u.youth > 0) L.push({ op: '+', k: 'youth', label: t('bd.youth'), v: u.youth, tax: -u.youth, cls: 'sub' });
    if (u.area > 0) L.push({ op: '+', k: 'area', label: t('bd.area'), v: u.area, tax: -u.area, cls: 'sub' });
    const shift = r.pd - u.tax;
    if (Math.abs(shift) > .5) L.push({ op: shift > 0 ? '−' : '+', k: 'pd', label: t('tip.pdPartner'), v: Math.abs(shift), tax: shift, cls: 'sub' });
    if (r.dz.v > 0) L.push({ op: '+', k: 'dz', label: t('comp.dz'), v: r.dz.v, tax: p.dz });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // The pillar I relief fades out between 700 and 1,300 € a month: each extra euro costs 7.5 cents more in contributions.
  function trap(x) {
    const s = x.s;
    const band = [P.relief.lo, P.relief.hi];
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), p0(.5 * contributions(1000 * 12, s).r1)] };
  }

  function top(x) {
    const s = x.s, age = s.regime === 'minister' ? 'std' : s.size;
    const at = x.firstMonthly(m => incomeTax(m * 12, 0, s, age).base > P.thr, 0, 1e6);
    if (!at) return null;
    return { at, text: [x.fmtM(at, 100) + x.perUnit(), eur(P.thr), p0(rates(s).hi)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: AREAS, sizes: AGES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 25,
    features: { cadre: true, pa: true },
    state: { salary: 1993, factor: 12, minRole: 'minister', cadre: false, pa: true, commune: '1333', region: 'std', local: 23, vatRate: 25, size: 'std' },
    urlFields: {
      pillar1: ['cadre', 'bool'], dz: ['pa', 'bool'], area: ['region', 'str', AREAS],
      commune: ['commune', 'str'], rate: ['local', 'num'], age: ['size', 'str', AGES], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'pdLabel', tip: 'pdRule', digits: 1, step: .1, range: () => [15, 23], notDue: () => false, hideInMinister: false },
    parseCommunes: list => {
      HI = Object.fromEntries(list.map(([, , hi, code]) => [code, hi]));
      return list.map(([name, rate, hi, code, county, kind, cut]) => ({ name, rate, hi, kind, region: cut ? 'pp' : 'std', sub: county, id: code }));
    },
    communeLabel: c => c.name,
    communeTag: c => `${num(c.rate, c.rate % 1 ? 1 : 0)}% / ${num(c.hi, c.hi % 1 ? 1 : 0)}%`,
    communeHint: c => t('pdHint', t('kind.' + c.kind), num(c.rate, c.rate % 1 ? 1 : 0) + '%', num(c.hi, c.hi % 1 ? 1 : 0) + '%', c.region === 'pp'),
    minSalary: role => GOV[role],
    env: s => ({ partnerGross: pos(Number(s.partnerGross) || 0) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: 0 }),
    segLabels: {}, recvLabels: { dz: 'dzReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: () => t('src.govPay'),
    polNoteLink: 'govPay',
    refKeys: ['contrib', 'tax', 'ded', 'dz', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
