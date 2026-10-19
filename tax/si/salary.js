// Slovenian salary rules for income year 2026. Loaded by ../index.html?country=si.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['mp', 'minister', 'pm'];
  const AGES = ['adult', 'young'];
  const BONUS = ['bonus', 'none'];

  const P = {
    // Net annual tax base bands.
    brackets: [[9721.43, .16], [28592.44, .26], [57184.88, .33], [82346.23, .39], [INF, .50]],
    general: 5551.93,
    add: { max: 20832.39, slope: 1.17259, limit: 17766.18 },
    young: 1443.50,
    kids: [2995.83, 3256.77, 5432.02, 7607.27, 9782.51],
    kidStep: 2175.25,
    dep: 2995.83,
    ee: { piz: .155, zz: .0636, other: .0024, ltc: .01 },
    er: { piz: .0885, zz: .0709, other: .0016, ltc: .01 },
    // Mandatory health contribution: 37.17 a month in January and February, 39.36 from March.
    ozp: 2 * 37.17 + 10 * 39.36,
    ozpM: 39.36,
    regres: 1481.88,
    winter: 740.94,
  };
  const EE = P.ee.piz + P.ee.zz + P.ee.other + P.ee.ltc;
  const ER = P.er.piz + P.er.zz + P.er.other + P.er.ltc;
  const MIN_WAGE = 1481.88;

  // Monthly gross: minimum wage 2026, SURS median (May 2026) and mean (July 2026).
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 2293, year: 2026, color: '--w-med' },
    { key: 'avg', m: 2708.63, year: 2026, color: '--w-avg' },
  ];

  // Monthly basic salary from 1 June 2026, the first step of the new pay scale for the new term. Ministers and MPs are a range of grades.
  const ROLE = {
    pm: { m: 7136, lo: 7136, hi: 7136 },
    minister: { m: 6712, lo: 6259, hi: 6712 },
    mp: { m: 4971, lo: 4971, hi: 6342 },
  };
  const DOC_PAY = 'https://n1info.si/novice/slovenija/novoizvoljeni-poslanci-bodo-imeli-visje-place-za-koliko-in-kdaj-se-jim-bodo-povisale/';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: ROLE.pm.lo * 12, hi: ROLE.pm.hi * 12, url: DOC_PAY },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: ROLE.minister.lo * 12, hi: ROLE.minister.hi * 12, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: ROLE.mp.lo * 12, hi: ROLE.mp.hi * 12, url: DOC_PAY },
  ];

  const SRC = {
    rates: 'https://www.racunovodstvo.net/zakonodaja/predpis/14411/pravilnik-o-dolocitvi-usklajenih-zneskov-olajsav-enacbe-za-dolocitev-olajsave-in-lestvice-za-odmero-dohodnine-za-leto-2026',
    allow: 'https://data.si/blog/dohodninske-olajsave-2026/',
    contrib: 'https://taxsummaries.pwc.com/slovenia/individual/other-taxes',
    ltc: 'https://data.si/blog/dolgotrajna-oskrba-koliko-bo-znasal-prispevek/',
    ozp: 'https://www.iracunovodstvo.eu/nova-visina-obveznega-zdravstvenega-prispevka-od-1-marca-2026/',
    regres: 'https://data.si/blog/obdavcitev-regresa/',
    winter: 'https://www.racunovodstvo.net/tabelice/173/zimski-regres',
    minWage: 'https://www.gov.si/novice/2026-01-28-dolocen-znesek-minimalne-place-za-2026/',
    wages: 'https://www.stat.si/StatWeb/News/Index/14565',
    vat: 'https://taxsummaries.pwc.com/slovenia/corporate/other-taxes',
    polPay: DOC_PAY,
    payLaw: 'https://www.gov.si/assets/ministrstva/MJU/Nov-placni-sistem/Pojasnila/Uskladitev-osnovnih-plac-in-placne-lestvice-s-1.-aprilom-2026.docx',
  };

  const employee = G => {
    const piz = P.ee.piz * G, zz = P.ee.zz * G, other = P.ee.other * G, ltc = P.ee.ltc * G;
    const ozp = G > 0 ? P.ozp : 0;
    const ins = piz + zz + other + ltc + ozp;
    return { G, piz, zz, other, ltc, ozp, ins, own: G - ins };
  };
  const employerSide = G => {
    const piz = P.er.piz * G, zz = P.er.zz * G, other = P.er.other * G, ltc = P.er.ltc * G;
    return { piz, zz, other, ltc, er: piz + zz + other + ltc };
  };

  const rawTax = base => {
    let tax = 0, lo = 0;
    for (const [hi, r] of P.brackets) { if (base > lo) tax += r * (Math.min(base, hi) - lo); lo = hi; }
    return tax;
  };
  const addAllow = G => G > 0 && G < P.add.limit ? Math.max(0, P.add.max - P.add.slope * G) : 0;
  const kidTotal = n => {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += i < P.kids.length ? P.kids[i] : P.kids[P.kids.length - 1] + P.kidStep * (i - P.kids.length + 1);
    return sum;
  };

  // One taxpayer. Allowances only lower the base: nothing is paid out below zero tax.
  function personTax(p, { young = false, spouse = false, kids = 0 } = {}) {
    if (!p.G) return { G: 0, ins: 0, preBase: 0, base: 0, general: 0, add: 0, young: 0, spouse: 0, kids: 0, tax: 0, preTax: 0 };
    const general = P.general, add = addAllow(p.G), yg = young ? P.young : 0, sp = spouse ? P.dep : 0;
    const preBase = Math.max(0, p.G - p.ins - general - add - yg - sp);
    const base = Math.max(0, preBase - kids);
    return { G: p.G, ins: p.ins, preBase, base, general, add, young: yg, spouse: sp, kids: preBase - base, preTax: rawTax(preBase), tax: rawTax(base) };
  }

  // Parents can split the child allowance as they like; the household keeps the split with the lowest tax (convex in the split).
  function householdTax(mine, partner, kids, young) {
    const K = kidTotal(kids);
    if (!partner) {
      const me = personTax(mine, { young, kids: K });
      return { me, them: null, total: me.tax, pre: me.preTax, kidsMine: K };
    }
    const spMe = mine.G > 0 && partner.G < P.dep, spThem = partner.G > 0 && mine.G < P.dep;
    const f = x => personTax(mine, { young, spouse: spMe, kids: x }).tax + personTax(partner, { spouse: spThem, kids: K - x }).tax;
    let lo = 0, hi = K;
    for (let i = 0; i < 80 && hi - lo > .01; i++) {
      const a = lo + (hi - lo) / 3, b = hi - (hi - lo) / 3;
      if (f(a) <= f(b)) hi = b; else lo = a;
    }
    const x = Math.round((lo + hi) / 2 * 100) / 100;
    const me = personTax(mine, { young, spouse: spMe, kids: x }), them = personTax(partner, { spouse: spThem, kids: K - x });
    return { me, them, total: me.tax + them.tax, pre: me.preTax + them.preTax, kidsMine: x };
  }

  const none = employee(0);

  // Your share = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', pu = couple ? env.partner : null, young = s.region === 'young';
    const hh = householdTax(u, pu, s.children, young);
    const wo = couple ? householdTax(none, pu, s.children, young) : null;
    const preWo = wo ? wo.pre : 0, totWo = wo ? wo.total : 0;
    const ir = hh.pre - preWo;
    const kids = (hh.total - hh.pre) - (totWo - preWo);
    return { hh, wo, ir, kids };
  }

  function compute(G, s, env) {
    const u = employee(G);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const emp = employerSide(G);
    const bonus = G > 0 && s.size !== 'none' ? P.regres + P.winter : 0;
    const net = G + bonus - u.ins - tax.ir - tax.kids;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + bonus + emp.er, net, bonus, u, tax, emp, vatShare, regime: s.regime === 'minister' ? 'minister' : undefined,
      parts: { er: emp.er, ee: u.ins, ir: tax.ir, kids: tax.kids, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'kids', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', kids: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'kids', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'kids'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'kids'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  // Gross a year where a single person without children starts paying income tax.
  const zeroTaxGross = young => (P.ozp + P.general + P.add.max + (young ? P.young : 0)) / (1 - EE + P.add.slope);
  const topGross = young => (P.brackets[3][0] + P.ozp + P.general + (young ? P.young : 0)) / (1 - EE);

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const brTable = base => {
      let lo = 0, out = '';
      for (const [hi, r] of P.brackets) {
        if (base > lo) out += row(`${pct(r, 0)} × ${eur(Math.min(base, hi) - lo)}`, r * (Math.min(base, hi) - lo));
        lo = hi;
      }
      return out;
    };
    const irTable = (p, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${row(t('tip.irIncome'), p.G)}
      ${row('− ' + t('tip.irContrib'), -p.ins)}
      ${row('− ' + t('bd.general'), -p.general)}
      ${p.add ? row('− ' + t('bd.addAllow'), -p.add) : ''}
      ${p.young ? row('− ' + t('bd.young'), -p.young) : ''}
      ${p.spouse ? row('− ' + t('bd.spouse'), -p.spouse) : ''}
      ${tot(t('bd.base'), p.preBase)}
      ${brTable(p.preBase)}
      ${tot(t('tip.irPre'), p.preTax)}`;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('polPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('polPay', 'payLaw')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg', eur(P.young))}</p>${sources('allow')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size', eur(P.regres), eur(P.winter))}</p>${sources('regres', 'winter')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.dep))}</p>${sources('allow')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${r.bonus ? row(t('bd.bonus'), r.bonus) : ''}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      bonus: () => `<h4>${t('bd.bonus')}</h4><p>${t('tip.size', eur(P.regres), eur(P.winter))}</p>${sources('regres', 'winter')}`,
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>
          ${row(`${t('bd.erPiz')} ${pct(P.er.piz, 2)}`, r.emp.piz)}
          ${row(`${t('bd.erZz')} ${pct(P.er.zz, 2)}`, r.emp.zz)}
          ${row(`${t('bd.erOther')} ${pct(P.er.other, 2)}`, r.emp.other)}
          ${row(`${t('bd.ltc')} ${pct(P.er.ltc, 0)}`, r.emp.ltc)}
          ${tot(`${t('total')} ${pct(ER, 1)}`, r.parts.er)}</table>` : ''}${sources('contrib', 'ltc')}`,
      erPiz: () => `<h4>${t('bd.erPiz')}</h4><p>${t('tip.erPiz')}</p>${sources('contrib')}`,
      erZz: () => `<h4>${t('bd.erZz')}</h4><p>${t('tip.erZz')}</p>${sources('contrib')}`,
      erOther: () => `<h4>${t('bd.erOther')}</h4><p>${t('tip.erOther')}</p>${sources('contrib')}`,
      erLtc: () => `<h4>${t('bd.ltc')}</h4><p>${t('tip.ltc')}</p>${sources('ltc')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur2(P.ozpM))}</p>${r ? `<table>
          ${row(`${t('bd.eePiz')} ${pct(P.ee.piz, 1)}`, r.u.piz)}
          ${row(`${t('bd.eeZz')} ${pct(P.ee.zz, 2)}`, r.u.zz)}
          ${row(`${t('bd.eeOther')} ${pct(P.ee.other, 2)}`, r.u.other)}
          ${row(`${t('bd.ltc')} ${pct(P.ee.ltc, 0)}`, r.u.ltc)}
          ${row(t('bd.ozp'), r.u.ozp)}
          ${tot(t('youPay'), r.u.ins)}</table>` : ''}${sources('contrib', 'ltc', 'ozp')}`,
      eePiz: () => `<h4>${t('bd.eePiz')}</h4><p>${t('tip.eePiz')}</p>${sources('contrib')}`,
      eeZz: () => `<h4>${t('bd.eeZz')}</h4><p>${t('tip.eeZz')}</p>${sources('contrib')}`,
      eeOther: () => `<h4>${t('bd.eeOther')}</h4><p>${t('tip.eeOther')}</p>${sources('contrib')}`,
      eeLtc: () => `<h4>${t('bd.ltc')}</h4><p>${t('tip.ltc')}</p>${sources('ltc')}`,
      ozp: () => `<h4>${t('bd.ozp')}</h4><p>${t('tip.ozp', eur2(37.17), eur2(P.ozpM), eur2(P.ozp))}</p>${sources('ozp')}`,
      general: () => `<h4>${t('bd.general')}</h4><p>${t('tip.general', eur(P.general))}</p>${sources('rates')}`,
      addAllow: r => `<h4>${t('bd.addAllow')}</h4><p>${t('tip.addAllow', eur(P.add.max), num(P.add.slope, 5), eur(P.add.limit))}</p>${sources('rates')}`,
      young: () => `<h4>${t('bd.young')}</h4><p>${t('tip.reg', eur(P.young))}</p>${sources('allow')}`,
      spouse: () => `<h4>${t('bd.spouse')}</h4><p>${t('tip.joint', eur(P.dep))}</p>${sources('allow')}`,
      base: () => `<h4>${t('bd.base')}</h4><p>${t('tip.base')}</p>${sources('rates')}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('rates')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>
          ${irTable(h.me, h.them ? t('tip.irYou') : '')}
          ${h.them ? irTable(h.them, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.pre)}${row('− ' + t('tip.irWithout'), -r.tax.wo.pre)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${sources('rates')}`;
      },
      kids: r => {
        const h = r && r.tax.hh;
        return `<h4>${t('comp.kids')}</h4><p>${t('tip.kids', eur(P.kids[0]), eur(P.kids[1]), eur(P.kids[2]), eur(P.kidStep))}</p>${h && s.children ? `<table>
          ${row(t('tip.kidsAll', s.children), kidTotal(s.children))}
          ${h.them ? row(t('tip.kidsMine'), h.kidsMine) : ''}
          ${row(t('tip.kidsUsedMe'), h.me.kids)}
          ${h.them ? row(t('tip.kidsUsedThem'), h.them.kids) : ''}
          ${tot(t('tip.kidsSaved'), -r.parts.kids)}</table>` : ''}${sources('allow')}`;
      },
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
    const p = r.parts, min = r.regime === 'minister', me = r.tax.hh.me, u = r.u, e = r.emp;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    ];
    if (r.bonus) L.push({ op: '+', k: 'bonus', label: t('bd.bonus'), v: r.bonus, cls: 'sub' });
    L.push(
      { op: '+', k: 'erPiz', label: t('bd.erPiz'), v: e.piz, tax: e.piz, cls: 'sub' },
      { op: '+', k: 'erZz', label: t('bd.erZz'), v: e.zz, tax: e.zz, cls: 'sub' },
      { op: '+', k: 'erOther', label: t('bd.erOther'), v: e.other, tax: e.other, cls: 'sub' },
      { op: '+', k: 'erLtc', label: t('bd.ltc'), v: e.ltc, tax: e.ltc, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'eePiz', label: t('bd.eePiz'), v: u.piz, tax: u.piz },
      { op: '−', k: 'eeZz', label: t('bd.eeZz'), v: u.zz, tax: u.zz },
      { op: '−', k: 'eeOther', label: t('bd.eeOther'), v: u.other, tax: u.other },
      { op: '−', k: 'eeLtc', label: t('bd.ltc'), v: u.ltc, tax: u.ltc },
      { op: '−', k: 'ozp', label: t('bd.ozp'), v: u.ozp, tax: u.ozp },
      { op: '', k: 'general', label: t('bd.general'), v: me.general, cls: 'sub' },
    );
    if (me.add) L.push({ op: '', k: 'addAllow', label: t('bd.addAllow'), v: me.add, cls: 'sub' });
    if (me.young) L.push({ op: '', k: 'young', label: t('bd.young'), v: me.young, cls: 'sub' });
    if (me.spouse) L.push({ op: '', k: 'spouse', label: t('bd.spouse'), v: me.spouse, cls: 'sub' });
    L.push({ op: '', k: 'base', label: t('bd.base'), v: me.preBase, cls: 'sub' });
    L.push({ op: p.ir < 0 ? '+' : '−', k: 'ir', label: t('comp.ir'), v: Math.abs(p.ir), tax: p.ir });
    if (Math.abs(p.kids) > .5) L.push({ op: p.kids < 0 ? '+' : '−', k: 'kids', label: t(p.kids < 0 ? 'kidsReceived' : 'kidsLost'), v: Math.abs(p.kids), tax: p.kids });
    if (r.bonus) L.push({ op: '+', k: 'bonus', label: t('bd.bonus'), v: r.bonus });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // The extra allowance tapers off by 1.17 per euro earned, so 16% tax plus 18.8% of lost allowance until it runs out.
  function trap(x) {
    const s = x.s, young = s.region === 'young';
    const lo = zeroTaxGross(young) / s.factor, hi = P.add.limit / s.factor;
    return { band: [lo, hi], text: [x.fmtM(lo, 10) + x.perUnit(), x.fmtM(hi, 10) + x.perUnit(), x.fmtM(MIN_WAGE * 12 / s.factor, 10)] };
  }

  function top(x) {
    const s = x.s, at = topGross(s.region === 'young') / s.factor;
    return { at, text: [x.fmtM(at, 100) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: AGES, sizes: BONUS, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 22,
    features: {},
    communes: false,
    local: null,
    state: { salary: 2700, factor: 12, minRole: 'minister', commune: '', region: 'adult', local: 0, vatRate: 22, size: 'bonus' },
    urlFields: { age: ['region', 'str', AGES], bonus: ['size', 'str', BONUS], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => ROLE[role].m * 12,
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: 0 }),
    segLabels: { kids: 'kidsLost' }, recvLabels: { kids: 'kidsReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'polPay',
    refKeys: ['er', 'ee', 'ir', 'kids', 'bonus', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
