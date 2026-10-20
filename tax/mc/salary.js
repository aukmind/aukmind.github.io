// Monaco salary rules for 2026. Loaded by ../index.html?country=mc.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  // Residents pay no income tax; French nationals, and anyone living in France, are taxed by France.
  const REGIONS = ['res', 'fr'];
  const MIN_ROLES = ['ms'];

  // Caisses Sociales de Monaco, rates and ceilings from 1 October 2026 (unemployment: 1 January 2026).
  const P = {
    ccss: { er: .1345, cap: 10000 * 12 },
    car: { ee: .0685, er: .0839, cap: 6276 * 12 },
    cmrc: { ta: 4067 * 12, tbMult: 8, a: .1002, b: .2429, eeShare: .4 },
    chom: { ee: .024, er: .04, cap: 16020 * 12 },
    civil: { pen: .06 },
    // French barème for 2026 income (PLF 2027), as in ../fr/salary.js.
    brackets: [[11844, 0], [30200, .11], [86353, .30], [185737, .41], [INF, .45]],
    abat: { pct: .10, min: 520, max: 14861 },
    qf: { half: 1845, isoleFirst: 4352 },
    decote: { single: 915, couple: 1513, k: .4525 },
    minTax: 61,
    cehr: { single: [[250000, 0], [500000, .03], [INF, .04]], couple: [[500000, 0], [1000000, .03], [INF, .04]] },
  };
  // French SMIC from 1 June 2026 on Monaco's 169-hour month; the 5% indemnity comes on top, free of contributions.
  const MIN_WAGE = 2080.39;

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 3475, year: 2025, color: '--w-med' },
    { key: 'avg', m: 5195, year: 2025, color: '--w-avg' },
  ];

  const DOC_MS = 'https://en.wikipedia.org/wiki/Minister_of_State_(Monaco)';
  const ROLE = { ms: { y: 180000 } };
  const POLITICIANS = [
    { kind: 'stat', key: 'ms', icon: '⭐', regime: 'ms', lo: ROLE.ms.y, hi: ROLE.ms.y, url: DOC_MS },
  ];

  const SRC = {
    csm: 'https://www.caisses-sociales.mc/accueil/employeur/employeur/employeur-a-titre-professionnel/cotisations',
    csmLetter: 'https://www.caisses-sociales.mc/content/download/3439/file/CSM-Lettre-Information-Employeurs-2026.pdf',
    cmrc: 'https://www.caisses-sociales.mc/media/multimedia/lightbox/specificites-cmrc',
    smic: 'https://legimonaco.mc/tnc/autre-texte-reglementaire/2026/05-26-2026-7@2026.06.01',
    wages: 'https://imsee.mc/thematiques/emploi/publications/infographie-les-salaires-dans-le-secteur-prive',
    noTax: 'https://www.monaco-consulate.com/?page_id=887',
    convention: 'https://legimonaco.mc/tai/convention/1963/05-18-tai1l000235@2005.08.01',
    bareme: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1419',
    qf: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2705',
    decote: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F34328',
    civil: 'https://legimonaco.mc/tnc/loi/1982/07-28-1.049@2026.08.01',
    vat: 'https://www.service-public.gouv.fr/professionnels-entreprises/vosdroits/F23567',
    polPay: DOC_MS,
  };

  const progressive = (x, br = P.brackets) => {
    let tot = 0, lo = 0;
    for (const [hi, r] of br) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };
  const childParts = n => n <= 2 ? n / 2 : 1 + (n - 2);
  const partsOf = (couple, kids) => (couple ? 2 : 1) + childParts(kids) + (!couple && kids > 0 ? .5 : 0);

  const bands = G => {
    const ta = P.cmrc.ta, tb = ta * P.cmrc.tbMult;
    return { A: Math.min(G, ta), B: Math.min(Math.max(0, G - ta), tb - ta), car: Math.min(G, P.car.cap), chom: Math.min(G, P.chom.cap), ccss: Math.min(G, P.ccss.cap) };
  };

  function finish(G, ee) {
    const taxable = Math.max(0, G - ee);
    const abat = G > 0 ? Math.min(taxable, Math.min(P.abat.max, Math.max(P.abat.min, P.abat.pct * taxable))) : 0;
    return { taxable, abat, npi: Math.max(0, taxable - abat) };
  }

  function employee(G) {
    const b = bands(G), c = P.cmrc;
    const car = P.car.ee * b.car, cmrcA = c.a * c.eeShare * b.A, cmrcB = c.b * c.eeShare * b.B, chom = P.chom.ee * b.chom;
    const ins = car + cmrcA + cmrcB + chom;
    return { G, b, car, cmrcA, cmrcB, cmrc: cmrcA + cmrcB, chom, ins, ...finish(G, ins) };
  }
  function employerSide(G) {
    const b = bands(G), c = P.cmrc, ers = 1 - c.eeShare;
    const ccss = P.ccss.er * b.ccss, car = P.car.er * b.car, cmrc = c.a * ers * b.A + c.b * ers * b.B, chom = P.chom.er * b.chom;
    return { ccss, car, cmrc, chom, er: ccss + car + cmrc + chom };
  }
  // Monaco civil servants pay 6% for their pension; applied here to the whole pay.
  function civil(G) {
    const ins = P.civil.pen * G;
    return { G, ins, pen: ins, ...finish(G, ins) };
  }

  // French household income tax after the quotient familial cap, décote and CEHR.
  function householdTax(rni, couple, kids) {
    const base = couple ? 2 : 1, isole = !couple && kids > 0;
    const parts = partsOf(couple, kids);
    const halves = Math.round((parts - base) * 2);
    const cap = isole ? P.qf.isoleFirst + Math.max(0, halves - 2) * P.qf.half : halves * P.qf.half;
    const withQf = parts * progressive(rni / parts);
    const plain = base * progressive(rni / base);
    const capped = halves > 0 && plain - withQf > cap;
    const beforeDecote = capped ? plain - cap : withQf;
    const D = couple ? P.decote.couple : P.decote.single;
    const decote = Math.max(0, Math.min(beforeDecote, D - P.decote.k * beforeDecote));
    const tax = beforeDecote - decote;
    const cehr = progressive(rni, couple ? P.cehr.couple : P.cehr.single);
    return { ir: (tax < P.minTax ? 0 : tax) + cehr, rni, parts, withQf, capped, cap, beforeDecote, decote, cehr };
  }

  // Your share = the household with your pay minus the household without it.
  function incomeTax(u, s, env) {
    if (s.region !== 'fr') return { ir: 0 };
    const couple = s.household === 'joint', pn = couple ? env.partner.npi : 0;
    const hh = householdTax(u.npi + pn, couple, s.children);
    const without = couple ? householdTax(pn, couple, s.children) : null;
    return { hh, without, ir: hh.ir - (without ? without.ir : 0) };
  }

  const vatOf = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  function compute(G, s, env) {
    if (s.regime === 'minister') {
      const u = civil(G), tax = incomeTax(u, s, env), net = G - u.ins - tax.ir;
      return { G, cost: G, net, u, tax, regime: 'minister', parts: { er: 0, ee: u.ins, ir: tax.ir, vat: vatOf(s, net) } };
    }
    const u = employee(G);
    u.m = G / s.factor;
    const emp = employerSide(G), tax = incomeTax(u, s, env), net = G - u.ins - tax.ir;
    return { G, cost: G + emp.er, net, u, emp, tax, parts: { er: emp.er, ee: u.ins, ir: tax.ir, vat: vatOf(s, net) } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const capped = (rate, base, d = 2) => `${pct(rate, d)} × ${eur(base)}`;
    const irTip = r => {
      if (s.region !== 'fr') return `<h4>${t('comp.ir')}</h4><p>${t('tip.irNone')}</p>${sources('noTax', 'convention')}`;
      if (!r || !r.tax.hh) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('convention', 'bareme')}`;
      const h = r.tax.hh;
      return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>
        ${row(t('tip.irRni'), h.rni)}
        <tr><td>÷ ${t('tip.irParts', num(h.parts, 1))}</td><td>${eur(h.rni / h.parts)}</td></tr>
        ${row(`× ${num(h.parts, 1)}`, h.withQf)}
        ${h.capped ? row(t('tip.irCapped'), h.beforeDecote) : ''}
        ${h.decote > 0 ? row('− ' + t('tip.decote'), -h.decote) : ''}
        ${h.cehr > 0 ? row('+ CEHR', h.cehr) : ''}
        ${tot(t('tip.irHousehold'), h.ir)}
        ${r.tax.without ? `${row('− ' + t('tip.irWithout'), -r.tax.without.ir)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
        </table>${sources('convention', 'bareme', 'qf', 'decote')}`;
    };
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('polPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe')}</p>${r ? `<table>${row(capped(P.civil.pen, r.G, 0), r.parts.ee)}</table>` : ''}${sources('civil')}`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>`,
      ir: irTip,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('polPay', 'civil')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('qf')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('convention', 'noTax')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.u.m != null ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r && r.emp ? `<table>
          ${row(`${t('bd.erCcss')} ${capped(P.ccss.er, r.u.b.ccss)}`, r.emp.ccss)}
          ${row(`${t('bd.erCar')} ${capped(P.car.er, r.u.b.car)}`, r.emp.car)}
          ${row(t('bd.erCmrc'), r.emp.cmrc)}
          ${row(`${t('bd.erChom')} ${capped(P.chom.er, r.u.b.chom, 0)}`, r.emp.chom)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 1)}`, r.parts.er)}</table>` : ''}${sources('csm', 'csmLetter')}`,
      erCcss: () => `<h4>${t('bd.erCcss')}</h4><p>${t('tip.erCcss', eur(P.ccss.cap / 12))}</p>${sources('csm')}`,
      erCar: () => `<h4>${t('bd.erCar')}</h4><p>${t('tip.erCar', eur(P.car.cap / 12))}</p>${sources('csm')}`,
      erCmrc: () => `<h4>${t('bd.erCmrc')}</h4><p>${t('tip.cmrc', eur(P.cmrc.ta / 12), eur(P.cmrc.ta * P.cmrc.tbMult / 12))}</p>${sources('csm', 'cmrc')}`,
      erChom: () => `<h4>${t('bd.erChom')}</h4><p>${t('tip.chom', eur(P.chom.cap / 12))}</p>${sources('csm')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r && r.u.b ? `<table>
          ${row(`${t('bd.eeCar')} ${capped(P.car.ee, r.u.b.car)}`, r.u.car)}
          ${row(`${t('bd.eeCmrc')} A ${capped(P.cmrc.a * P.cmrc.eeShare, r.u.b.A, 3)}`, r.u.cmrcA)}
          ${r.u.b.B > 0 ? row(`${t('bd.eeCmrc')} B ${capped(P.cmrc.b * P.cmrc.eeShare, r.u.b.B, 3)}`, r.u.cmrcB) : ''}
          ${row(`${t('bd.eeChom')} ${capped(P.chom.ee, r.u.b.chom, 1)}`, r.u.chom)}
          ${tot(t('youPay'), r.u.ins)}</table>` : ''}${sources('csm', 'csmLetter')}`,
      eeCar: () => `<h4>${t('bd.eeCar')}</h4><p>${t('tip.eeCar', eur(P.car.cap / 12))}</p>${sources('csm')}`,
      eeCmrc: () => `<h4>${t('bd.eeCmrc')}</h4><p>${t('tip.cmrc', eur(P.cmrc.ta / 12), eur(P.cmrc.ta * P.cmrc.tbMult / 12))}</p>${sources('csm', 'cmrc')}`,
      eeChom: () => `<h4>${t('bd.eeChom')}</h4><p>${t('tip.chom', eur(P.chom.cap / 12))}</p>${sources('csm')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable')}</p>${sources('bareme')}`,
      abat: r => `<h4>${t('bd.abat')}</h4><p>${t('tip.abat', eur(P.abat.min), eur(P.abat.max), r ? `: <b>${eur(r.u.abat)}</b>` : '')}</p>${sources('bareme')}`,
      ir: irTip,
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
    const p = r.parts, min = r.regime === 'minister', u = r.u;
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (!min) L.push(
      { op: '+', k: 'erCcss', label: t('bd.erCcss'), v: r.emp.ccss, tax: r.emp.ccss, cls: 'sub' },
      { op: '+', k: 'erCar', label: t('bd.erCar'), v: r.emp.car, tax: r.emp.car, cls: 'sub' },
      { op: '+', k: 'erCmrc', label: t('bd.erCmrc'), v: r.emp.cmrc, tax: r.emp.cmrc, cls: 'sub' },
      { op: '+', k: 'erChom', label: t('bd.erChom'), v: r.emp.chom, tax: r.emp.chom, cls: 'sub' },
    );
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (min) L.push({ op: '−', k: 'ee', label: t('bd.minEe'), v: p.ee, tax: p.ee });
    else L.push(
      { op: '−', k: 'eeCar', label: t('bd.eeCar'), v: u.car, tax: u.car },
      { op: '−', k: 'eeCmrc', label: t('bd.eeCmrc'), v: u.cmrc, tax: u.cmrc },
      { op: '−', k: 'eeChom', label: t('bd.eeChom'), v: u.chom, tax: u.chom },
    );
    if (x.s.region === 'fr') L.push(
      { op: '', k: 'taxable', label: t('bd.taxable'), v: u.taxable, cls: 'sub' },
      { op: '', k: 'abat', label: t('bd.abat'), v: u.abat, cls: 'sub' },
      { op: p.ir < 0 ? '+' : '−', k: 'ir', label: t('comp.ir'), v: Math.abs(p.ir), tax: p.ir },
    );
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // No means-tested benefit to lose and, for residents, no income tax: the low-pay note only places the minimum wage.
  function trap(x) {
    const m = MIN_WAGE * 12 / x.s.factor;
    return { band: [m, m], text: [x.fmtM(m, 10), null, x.s.region] };
  }

  // Residents: contributions stop at the CMRC ceiling. French taxpayers: the 45% bracket.
  function top(x) {
    const s = x.s;
    if (s.region !== 'fr') {
      const at = P.cmrc.ta * P.cmrc.tbMult / s.factor;
      return { at, text: [x.fmtM(at, 50) + x.perUnit(), x.fmtM(P.ccss.cap / s.factor, 50) + x.perUnit(), 'res'] };
    }
    const couple = s.household === 'joint', pn = couple ? x.env().partner.npi : 0, parts = partsOf(couple, s.children);
    const at = x.firstMonthly(m => (employee(m * s.factor).npi + pn) / parts > P.brackets[3][0]);
    return at ? { at, text: [x.fmtM(at, 50) + x.perUnit(), eur(P.brackets[3][0]), 'fr', num(parts, 1)] } : null;
  }

  return {
    GAPS: ['noCheck', 'msPay', 'msPension', 'octRates', 'cgcs', 'frBill', 'frRule', 'wages', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [12, 13], factorDigits: 0, vatStandard: 20,
    features: {},
    communes: false,
    local: null,
    state: { salary: 3500, factor: 12, minRole: 'ms', commune: '', region: 'res', local: 0, vatRate: 20, size: '' },
    urlFields: { status: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => ROLE[role].y,
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polNote.' + p.regime,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'polPay',
    refKeys: ['noTax', 'fr', 'ccss', 'car', 'cmrc', 'chom', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
