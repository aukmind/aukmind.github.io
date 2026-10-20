// Italian salary rules for income year 2026. Loaded by ../index.html?country=it.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const SIZES = ['small', 'mid', 'big'];
  const MIN_ROLES = ['tech', 'mp'];

  const P = {
    // INPS, white-collar employee in industry. IVS stops at the massimale for anyone first insured after 1995.
    inps: {
      ee: .0919, eeCigs: .003, eeExtra: .01, extraFrom: 56224, cap: 122295,
      er: { ivs: .2381, naspi: .0161, cuaf: .0068, mat: .0046, tfrFund: .002, cigoSmall: .017, cigoBig: .02, cigs: .006, inail: .004 },
    },
    // L. 199/2025 art. 1 c. 3: the middle bracket drops from 35% to 33% from 2026.
    brackets: [[28000, .23], [50000, .33], [INF, .43]],
    noTaxArea: 8500,
    coniugeLimit: 2840.51,
    cuneo: { pct: [[8500, .071], [15000, .053], [20000, .048]], det: 1000, full: 32000, end: 40000 },
    ti: { amount: 1200, upTo: 15000, upTo2: 28000, slack: 75 },
  };

  // Regional addizionale 2026, from the MEF tables. b: brackets in %, applied progressively.
  const REG = {
    abr: { b: [[28000, 1.67], [50000, 2.87], [INF, 3.33]] },
    bas: { b: 1.23 },
    bz: { b: [[50000, 1.23], [INF, 1.73]], det: R => (R <= 90000 ? 430.5 : 0) + (R > 50000 ? Math.min(125, 125 * (R - 50000) / 25000) : 0), kid: (R, n) => R <= 90000 ? 340 * n : 0 },
    cal: { b: 1.73 },
    cam: { b: [[15000, 1.73], [28000, 2.96], [50000, 3.20], [INF, 3.33]], kid: (R, n) => R <= 28000 && n >= 2 ? 30 * n : 0 },
    emr: { b: [[15000, 1.33], [28000, 1.93], [50000, 2.78], [INF, 3.33]] },
    // Up to 15 000 € the whole income pays 0.70%, above it the whole income pays 1.23%.
    fvg: { b: 1.23, flatUpTo: [15000, .70] },
    laz: { b: [[15000, 1.73], [INF, 3.33]], flatUpTo: [28000, 1.73], det: R => R > 28000 && R <= 30000 ? 60 : 0 },
    lig: { b: [[28000, 1.23], [50000, 3.18], [INF, 3.23]] },
    lom: { b: [[15000, 1.23], [28000, 1.58], [50000, 1.72], [INF, 1.73]] },
    mar: { b: [[15000, 1.23], [28000, 1.53], [50000, 1.70], [INF, 1.73]] },
    mol: { b: [[15000, 2.03], [28000, 2.23], [INF, 3.63]] },
    pie: { b: [[15000, 1.62], [28000, 2.68], [50000, 3.31], [INF, 3.33]], kid: (R, n) => n > 2 ? 100 * n : 0 },
    pug: { b: [[15000, 1.33], [28000, 2.13], [50000, 3.23], [INF, 3.33]], kid: (R, n) => n > 3 ? 20 * n : 0 },
    sar: { b: 1.23, kid: (R, n) => R <= 50000 ? 200 * n : 0 },
    sic: { b: 1.23 },
    tos: { b: [[15000, 1.42], [28000, 1.43], [50000, 3.32], [INF, 3.33]] },
    // A 30 000 € deduction for incomes up to 30 000 €, so nothing is due there.
    tn: { b: [[50000, 1.23], [INF, 1.73]], flatUpTo: [30000, 0], kid: (R, n) => R <= 50000 ? 246 * n : 0 },
    umb: { b: [[15000, 1.73], [28000, 3.02], [50000, 3.12], [INF, 3.33]], flatUpTo: [28000, 1.23], det: R => R > 28000 && R <= 50000 ? 150 : 0 },
    vda: { b: 1.23, flatUpTo: [15000, 0] },
    ven: { b: 1.23 },
  };
  const REGIONS = Object.keys(REG);

  // Monthly gross over 13 payments: Eurostat SES 2022, full-time, firms with 10+ staff. No legal minimum wage.
  const REF_WAGES = [
    { key: 'med', m: 29908 / 13, year: 2022, color: '--w-med' },
    { key: 'avg', m: 36715 / 13, year: 2022, color: '--w-avg' },
  ];

  const GOV = {
    mp: 10435 * 12,
    tech: 9203.54 * 12,
    diaria: 3503.11 * 12,
    // Monthly deductions on the deputy's pay sheet, at the 10 435 € base.
    mpDed: { pension: .088, afm: 784.14, health: 526.66 },
  };
  const DOC_MP = 'https://www.camera.it/deputati/trattamento-economico';
  const DOC_TECH = 'https://pagellapolitica.it/articoli/aumento-stipendi-ministri-sottosegretari';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'mp', lo: GOV.mp, hi: GOV.mp, url: DOC_MP },
    { kind: 'stat', key: 'tech', icon: '💼', regime: 'tech', lo: GOV.tech, hi: GOV.tech, url: DOC_TECH },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.mp, hi: GOV.mp, url: DOC_MP },
    { kind: 'gov', key: 'pres', icon: '🔔', lo: 179835.84, hi: 239182, url: 'https://www.money.it/stipendio-presidente-della-repubblica-quanto-guadagna-mattarella-costi-quirinale' },
    { kind: 'gov', name: 'Fabio Panetta', role: 'bdi', lo: 480000, hi: 480000, url: 'https://www.bancaditalia.it/chi-siamo/funzioni-governance/direttorio/delibera-consiglio-superiore-20.07.2023/index.html' },
    { kind: 'corp', name: 'Flavio Cattaneo', role: 'enel', lo: 3660000, hi: 7900000, url: 'https://www.money.it/i-ceo-piu-pagati-di-piazza-affari-la-classifica-2026' },
    { kind: 'corp', name: 'Claudio Descalzi', role: 'eni', lo: 8300000, hi: 8300000, url: 'https://www.money.it/i-ceo-piu-pagati-di-piazza-affari-la-classifica-2026' },
  ];

  const SRC = {
    lb2026: 'https://edotto.com/articolo/revisione-disciplina-irpef-novita-dalla-legge-di-bilancio-2026',
    detLav: 'https://cafinforma.it/detrazioni-lavoro-dipendente-2026/',
    inps: 'https://www.informazionefiscale.it/contributi-INPS-2026-dipendenti-istruzioni-calcolo-importo',
    inpsCirc: 'https://ascom.bo.it/wp-content/uploads/2026/02/Allegato-1-CIRCO-23-26_Circolare-INPS-n.-6-del-30-01-2026.pdf',
    erRates: 'https://www.money.it/contributi-inps-lavoratori-dipendenti-quanto-costano-all-azienda',
    cigs: 'https://ance.it/wp-content/uploads/allegati/Circolare_315_C_2022.pdf',
    addReg: 'https://www1.finanze.gov.it/finanze2/dipartimentopolitichefiscali/fiscalitalocale/addregirpef/sceltaregione.htm',
    addCom: 'https://www.finanze.gov.it/it/fiscalita/fiscalita-regionale-e-locale/Addizionale-comunale-allIRPEF/aliquote-applicabili/Elenchi-generali-aggiornati-quotidianamente/',
    istat: 'https://www.istat.it/classificazione/codici-dei-comuni-delle-province-e-delle-regioni/',
    ses: 'https://ec.europa.eu/eurostat/databrowser/view/earn_ses22_28/default/table',
    iva: 'https://www.agenziaentrate.gov.it/portale/web/guest/schede/agevolazioni/aliquote-iva',
    mpPay: DOC_MP,
    techPay: DOC_TECH,
  };

  const progressive = (x, br = P.brackets) => {
    let tot = 0, lo = 0;
    for (const [hi, r] of br) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };
  const bracketRows = (x, br = P.brackets) => {
    const rows = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) rows.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return rows;
  };
  const pctSched = sch => typeof sch === 'number' ? [[INF, sch]] : sch.map(([hi, r]) => [hi == null ? INF : hi, r]);
  const schedTax = (R, sch) => progressive(R, pctSched(sch).map(([hi, r]) => [hi, r / 100]));
  const schedRange = sch => typeof sch === 'number' ? [sch, sch] : [Math.min(...sch.map(b => b[1])), Math.max(...sch.map(b => b[1]))];

  // Filled from communes.js: commune id -> { ex, sched }.
  const COMM = new Map();

  function inpsEe(G, s) {
    const i = P.inps, capped = Math.min(G, i.cap);
    const ivs = i.ee * capped, cigs = s.size === 'small' ? 0 : i.eeCigs * G, extra = i.eeExtra * Math.max(0, capped - i.extraFrom);
    return { ivs, cigs, extra, total: ivs + cigs + extra };
  }
  function erParts(G, s) {
    const e = P.inps.er, capped = Math.min(G, P.inps.cap);
    return [
      { k: 'ivs', rate: e.ivs, base: capped },
      { k: 'naspi', rate: e.naspi, base: G },
      { k: 'cuaf', rate: e.cuaf, base: G },
      { k: 'mat', rate: e.mat, base: G },
      { k: 'tfrFund', rate: e.tfrFund, base: G },
      { k: 'cigo', rate: s.size === 'big' ? e.cigoBig : e.cigoSmall, base: G },
      { k: 'cigs', rate: s.size === 'small' ? 0 : e.cigs, base: G },
      { k: 'inail', rate: e.inail, base: G },
    ].filter(p => p.rate > 0 && p.base > 0).map(p => ({ ...p, v: p.rate * p.base }));
  }

  function detLavoro(R) {
    if (R <= 0) return 0;
    const extra = R > 25000 && R <= 35000 ? 65 : 0;
    if (R <= 15000) return 1955;
    if (R <= 28000) return 1910 + 1190 * (28000 - R) / 13000 + extra;
    if (R <= 50000) return 1910 * (50000 - R) / 22000 + extra;
    return 0;
  }
  function detConiuge(R) {
    if (R <= 15000) return 800 - 110 * R / 15000;
    if (R <= 40000) {
      const bump = R > 29000 && R <= 29200 ? 10 : R <= 34700 && R > 29200 ? 20 : R > 34700 && R <= 35000 ? 30 : R > 35000 && R <= 35100 ? 20 : R > 35100 && R <= 35200 ? 10 : 0;
      return 690 + bump;
    }
    return R <= 80000 ? 690 * (80000 - R) / 40000 : 0;
  }
  function detCuneo(R) {
    const c = P.cuneo;
    if (R <= 20000 || R > c.end) return 0;
    return R <= c.full ? c.det : c.det * (c.end - R) / (c.end - c.full);
  }
  const sommaRate = R => R > 0 && R <= 20000 ? P.cuneo.pct.find(([hi]) => R <= hi)[1] : 0;

  function regional(R, region, kids) {
    const g = REG[region] || REG.laz;
    let gross;
    if (g.flatUpTo && R <= g.flatUpTo[0]) gross = R * g.flatUpTo[1] / 100;
    else gross = schedTax(R, g.b);
    const det = Math.min(gross, (g.det ? g.det(R) : 0) + (g.kid && kids > 0 ? g.kid(R, kids) : 0));
    return { gross, det, tax: gross - det };
  }
  function communal(R, id, loaded) {
    const c = loaded && COMM.get(id);
    if (!c) return { tax: 0, exempt: false, unknown: true };
    if (c.ex > 0 && R <= c.ex) return { tax: 0, exempt: true };
    return { tax: schedTax(R, c.sched), exempt: false };
  }

  // One person's IRPEF, addizionali and payslip bonuses. kind: 'emp' employee, 'mp' deputy, 'tech' minister outside parliament.
  function person(kind, G, s, o) {
    const ee = kind === 'emp' ? inpsEe(G, s)
      : kind === 'mp' ? (() => { const k = G / GOV.mp, d = GOV.mpDed; const p = d.pension * G, a = d.afm * 12 * k, h = d.health * 12 * k; return { pension: p, afm: a, health: h, total: p + a + h }; })()
      : { total: 0 };
    const R = Math.max(0, G - ee.total);
    const lorda = progressive(R);
    const emp = kind === 'emp' && G > 0;
    const dLav = emp ? detLavoro(R) : 0;
    const dCon = o.spouseDependent ? detConiuge(R) : 0;
    const dCun = emp ? detCuneo(R) : 0;
    const netta = Math.max(0, lorda - dLav - dCon - dCun);
    const somma = emp ? sommaRate(R) * R : 0;
    let ti = 0;
    if (emp && R <= P.ti.upTo) ti = lorda > dLav - P.ti.slack ? P.ti.amount : 0;
    else if (emp && R <= P.ti.upTo2) ti = Math.max(0, Math.min(P.ti.amount, dLav + dCon - lorda));
    const due = netta > 0;
    const reg = due ? regional(R, o.region, o.kids) : { gross: 0, det: 0, tax: 0 };
    const com = due ? communal(R, o.commune, o.loaded) : { tax: 0, exempt: false };
    return { kind, G, ee, R, lorda, dLav, dCon, dCun, netta, somma, ti, reg, com,
      parts: { ee: ee.total, ir: netta, reg: reg.tax, com: com.tax, bonus: -(somma + ti) } };
  }

  const PKEYS = ['ee', 'ir', 'reg', 'com', 'bonus'];
  // Your share = the household with your pay − the household without it: your pay can cost your partner the spouse deduction.
  function household(kind, G, s, env) {
    const couple = s.household === 'joint', P2 = couple ? env.partnerGross : 0;
    const kidShare = couple ? s.children / 2 : s.children;
    const base = { region: s.region, commune: s.commune, loaded: s.local >= 0, kids: kidShare };
    const meR = g => Math.max(0, g - (kind === 'emp' ? inpsEe(g, s).total : 0));
    const partnerR = couple ? meR(P2) : 0;
    const me = person(kind, G, s, { ...base, spouseDependent: couple && partnerR <= P.coniugeLimit });
    let partnerDelta = null;
    if (couple) {
      const with_ = person('emp', P2, s, { ...base, spouseDependent: me.R <= P.coniugeLimit });
      const without = env.partnerWithout;
      partnerDelta = Object.fromEntries(PKEYS.map(k => [k, with_.parts[k] - without.parts[k]]));
      partnerDelta.ee = 0;
      partnerDelta.total = PKEYS.reduce((tot, k) => tot + partnerDelta[k], 0);
      partnerDelta.with = with_;
    }
    const parts = Object.fromEntries(PKEYS.map(k => [k, me.parts[k] + (partnerDelta ? partnerDelta[k] : 0)]));
    return { me, partnerDelta, parts };
  }

  const vatOf = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  function computeMinister(G, s, env, role = s.minRole) {
    const kind = role === 'tech' ? 'tech' : 'mp';
    const h = household(kind, G, s, env);
    const net = G - Object.values(h.parts).reduce((a, b) => a + b, 0);
    const vat = vatOf(s, net);
    return { G, cost: G, net, u: h.me, h, ers: [], erGross: 0, regime: 'minister', role: kind,
      parts: { er: 0, ...h.parts, vat } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const h = household('emp', G, s, env);
    const ers = erParts(G, s);
    const er = ers.reduce((tot, p) => tot + p.v, 0);
    const net = G - Object.values(h.parts).reduce((a, b) => a + b, 0);
    const vat = vatOf(s, net);
    return { G, cost: G + er, net, u: h.me, h, ers, erGross: er, parts: { er, ...h.parts, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'reg', 'com', 'bonus', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', reg: 'var(--k-reg)', com: 'var(--k-com)', bonus: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'reg', 'com', 'bonus', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'reg', 'com', 'bonus'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'reg', 'com', 'bonus'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  const schedText = (sch, ex) => {
    const [lo, hi] = schedRange(sch);
    return (lo === hi ? num(lo, 2) + '%' : `${num(lo, 2)}–${num(hi, 2)}%`) + (ex > 0 ? ' · ' + t('exemptTo', eur(ex)) : '');
  };
  const regBrackets = g => {
    let lo = 0;
    return pctSched(g.b).map(([hi, r]) => { const row = `<tr><td>${hi === INF ? t('above', eur(lo)) : `${eur(lo)} – ${eur(hi)}`}</td><td>${num(r, 2)}%</td></tr>`; lo = hi; return row; }).join('');
  };

  function tips(x) {
    const s = x.s;
    const partRows = list => list.map(p => `<tr><td>${t('er.' + p.k)} ${pct(p.rate, 2)}${p.base !== (x.cur() && x.cur().G) ? ` × ${eur(p.base)}` : ''}</td><td>${eur(p.v)}</td></tr>`).join('');
    const partnerRow = (r, k) => r && r.h.partnerDelta && Math.abs(r.h.partnerDelta[k]) > .5 ? `<tr><td>${t('tip.partnerDelta')}</td><td>${eur(r.h.partnerDelta[k])}</td></tr><tr class="t"><td>${t('tip.yours')}</td><td>${eur(r.parts[k])}</td></tr>` : '';
    const irTable = r => {
      const u = r.u;
      const br = bracketRows(u.R).map(b => `<tr><td>${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}</td><td>${eur(b.amt)}</td></tr>`).join('');
      return `<table>
        <tr><td>${t('bd.taxable')}</td><td>${eur(u.R)}</td></tr>${br}
        <tr class="t"><td>${t('tip.lorda')}</td><td>${eur(u.lorda)}</td></tr>
        ${u.dLav > 0 ? `<tr><td>− ${t('bd.detLav')}</td><td>−${eur(u.dLav)}</td></tr>` : ''}
        ${u.dCon > 0 ? `<tr><td>− ${t('bd.detCon')}</td><td>−${eur(u.dCon)}</td></tr>` : ''}
        ${u.dCun > 0 ? `<tr><td>− ${t('bd.detCun')}</td><td>−${eur(u.dCun)}</td></tr>` : ''}
        <tr class="t"><td>${t('tip.netta')}</td><td>${eur(u.netta)}</td></tr>
        ${partnerRow(r, 'ir')}</table>`;
    };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t(s.minRole === 'tech' ? 'tip.minGrossTech' : 'tip.minGrossMp')}</p>${sources(s.minRole === 'tech' ? 'techPay' : 'mpPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>`,
      ee: r => {
        const e = r && r.u.ee;
        return `<h4>${t('bd.minEe')}</h4><p>${t(s.minRole === 'tech' ? 'tip.minEeTech' : 'tip.minEeMp')}</p>${e && e.pension != null ? `<table>
          <tr><td>${t('tip.mpPension')}</td><td>${eur(e.pension)}</td></tr>
          <tr><td>${t('tip.mpAfm')}</td><td>${eur(e.afm)}</td></tr>
          <tr><td>${t('tip.mpHealth')}</td><td>${eur(e.health)}</td></tr>
          <tr class="t"><td>${t('total')}</td><td>${eur(e.total)}</td></tr></table>` : ''}${sources('mpPay')}`;
      },
      bonus: () => `<h4>${t('comp.bonus')}</h4><p>${t('tip.minBonus')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('mpPay', 'techPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.f14')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur2(P.coniugeLimit))}</p>`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('erRates', 'cigs')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.G / s.factor), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const list = r ? r.ers : erParts(1, s).map(p => ({ ...p, base: 0, v: 0 }));
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.inps.cap))}</p>
          <table>${partRows(list)}
          ${r ? `<tr class="t"><td>${t('total')} ${pct(r.parts.er / r.G, 2)}</td><td>${eur(r.parts.er)}</td></tr>` : ''}</table>
          <p class="m">${t('tip.erM')}</p>${sources('erRates', 'cigs')}`;
      },
      ee: r => {
        const e = r && r.u.ee;
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.inps.extraFrom), eur(P.inps.cap))}</p>${e ? `<table>
          <tr><td>IVS ${pct(P.inps.ee, 2)}</td><td>${eur(e.ivs)}</td></tr>
          ${e.cigs > 0 ? `<tr><td>CIGS ${pct(P.inps.eeCigs, 2)}</td><td>${eur(e.cigs)}</td></tr>` : ''}
          ${e.extra > 0 ? `<tr><td>${t('tip.eeExtra', eur(P.inps.extraFrom))}</td><td>${eur(e.extra)}</td></tr>` : ''}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(e.total)}</td></tr></table>` : ''}${sources('inps', 'inpsCirc')}`;
      },
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.R)}</b>` : '')}</p>`,
      ir: r => r ? `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${irTable(r)}${sources('lb2026', 'detLav')}`
        : `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${sources('lb2026', 'detLav')}`,
      detLav: r => `<h4>${t('bd.detLav')}</h4><p>${t('tip.detLav')}</p>${r ? `<p><b>${eur(r.u.dLav)}</b>${t('aYear')}</p>` : ''}${sources('detLav')}`,
      detCon: () => `<h4>${t('bd.detCon')}</h4><p>${t('tip.detCon', eur2(P.coniugeLimit))}</p>`,
      detCun: r => `<h4>${t('bd.detCun')}</h4><p>${t('tip.detCun')}</p>${r ? `<p><b>${eur(r.u.dCun)}</b>${t('aYear')}</p>` : ''}${sources('detLav')}`,
      reg: r => {
        const g = REG[s.region];
        return `<h4>${t('comp.reg')} · ${t('region.' + s.region)}</h4><p>${t('tip.reg')}</p>
          <table>${regBrackets(g)}</table><p class="m">${t('regNote.' + s.region)}</p>
          ${r ? `<table><tr><td>${t('tip.regGross')}</td><td>${eur(r.u.reg.gross)}</td></tr>
          ${r.u.reg.det > 0 ? `<tr><td>− ${t('tip.regDet')}</td><td>−${eur(r.u.reg.det)}</td></tr>` : ''}
          <tr class="t"><td>${t('total')}</td><td>${eur(r.u.reg.tax)}</td></tr>${partnerRow(r, 'reg')}</table>` : ''}${sources('addReg')}`;
      },
      com: r => {
        const c = x.commune(), cd = COMM.get(s.commune);
        return `<h4>${t('comp.com')}${c ? ' · ' + esc(c.name) : ''}</h4><p>${t('tip.com')}</p>
          ${cd ? `<p>${schedText(cd.sched, cd.ex)}</p>` : `<p>${t('tip.comNone')}</p>`}
          ${r ? `<p>${r.u.com.exempt ? t('tip.comExempt') : ''} <b>${eur(r.u.com.tax)}</b>${t('aYear')}</p>` : ''}
          <p class="m">${t('tip.comM')}</p>${sources('addCom', 'istat')}`;
      },
      bonus: r => {
        const u = r && r.u;
        return `<h4>${t('comp.bonus')}</h4><p>${t('tip.bonus')}</p>${u ? `<table>
          <tr><td>${t('bd.somma')}${u.somma > 0 ? ` ${pct(sommaRate(u.R), 1)} × ${eur(u.R)}` : ''}</td><td>${eur(u.somma)}</td></tr>
          <tr><td>${t('bd.ti')}</td><td>${eur(u.ti)}</td></tr>
          ${partnerRow(r, 'bonus')}</table>` : ''}<p class="m">${t('tip.bonusM')}</p>${sources('detLav')}`;
      },
      partner: r => `<h4>${t('bd.partner')}</h4><p>${t('tip.partner', eur2(P.coniugeLimit))}</p>${r && r.h.partnerDelta ? `<p><b>${eur(r.h.partnerDelta.total)}</b>${t('aYear')}</p>` : ''}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('iva')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / s.factor)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const s = x.s, p = r.parts, u = r.u, c = x.commune(), min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (!min) L.push({ op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (u.ee.total > 0) L.push(
      { op: '−', k: 'ee', label: t(min ? 'bd.minEe' : 'comp.ee'), v: u.ee.total, tax: u.ee.total },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.R, cls: 'tot' },
    );
    L.push({ op: '', k: 'ir', label: t('tip.lorda'), v: u.lorda, cls: 'sub' });
    if (u.dLav > 0) L.push({ op: '−', k: 'detLav', label: t('bd.detLav'), v: u.dLav, cls: 'sub' });
    if (u.dCon > 0) L.push({ op: '−', k: 'detCon', label: t('bd.detCon'), v: u.dCon, cls: 'sub' });
    if (u.dCun > 0) L.push({ op: '−', k: 'detCun', label: t('bd.detCun'), v: u.dCun, cls: 'sub' });
    L.push(
      { op: '', k: 'taxable', label: t('bd.taxable'), v: u.R },
      { op: '−', k: 'ir', label: t('comp.ir'), v: u.netta, tax: u.netta },
      { op: '−', k: 'reg', label: `${t('comp.reg')} (${t('region.' + s.region)})`, v: u.reg.tax, tax: u.reg.tax },
      { op: '−', k: 'com', label: `${t('comp.com')}${c ? ' (' + c.name + ')' : ''}`, v: u.com.tax, tax: u.com.tax },
    );
    if (u.somma > .5) L.push({ op: '+', k: 'bonus', label: t('bd.somma'), v: u.somma, tax: -u.somma });
    if (u.ti > .5) L.push({ op: '+', k: 'bonus', label: t('bd.ti'), v: u.ti, tax: -u.ti });
    const d = r.h.partnerDelta;
    if (d && Math.abs(d.total) > .5) L.push({ op: d.total > 0 ? '−' : '+', k: 'partner', label: t('bd.partner'), v: Math.abs(d.total), tax: d.total });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  const grossForR = (R, s) => {
    let lo = R, hi = R * 1.2 + 1;
    for (let i = 0; i < 50; i++) { const mid = (lo + hi) / 2; if (mid - inpsEe(mid, s).total < R) lo = mid; else hi = mid; }
    return hi;
  };

  // Low-wage zone: from where the 1 200 € bonus starts to where the cuneo deduction runs out.
  function trap(x) {
    const s = x.s;
    const start = grossForR(Math.ceil((detLavoro(10000) - P.ti.slack) / P.brackets[0][1]), s) / s.factor;
    const end = grossForR(P.cuneo.end, s) / s.factor;
    const c = COMM.get(s.commune);
    const exAt = c && c.ex > 0 ? x.fmtM(grossForR(c.ex, s) / s.factor, 10) + x.perUnit() : null;
    return { band: [start, end], text: [x.fmtM(start, 10), x.fmtM(end, 10) + x.perUnit(),
      x.fmtM(grossForR(P.cuneo.pct[1][0], s) / s.factor, 10), x.fmtM(grossForR(P.cuneo.pct[2][0], s) / s.factor, 10), exAt] };
  }

  function top(x) {
    const s = x.s;
    const at = grossForR(P.brackets[1][0], s) / s.factor;
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), x.fmtM(P.inps.cap / s.factor, 50) + x.perUnit(), eur(P.brackets[1][0])] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    regions: [], sizes: SIZES, minRoles: MIN_ROLES, factors: [12, 13, 14], factorDigits: 0, vatStandard: 22,
    features: {},
    // local stays at -1 until communes.js loads; compute reads it, so the page recomputes once the rates are known.
    state: { salary: 2500, factor: 13, minRole: 'mp', commune: 'Roma|RM', region: 'laz', local: -1, vatRate: 22, size: 'mid' },
    urlFields: {
      months: ['factor', 'num', [12, 13, 14]], commune: ['commune', 'str'],
      size: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    local: null,
    parseCommunes: list => {
      COMM.clear();
      return list.map(([name, pr, region, ex, sched]) => {
        const id = name + '|' + pr;
        COMM.set(id, { ex, sched });
        return { name, rate: schedRange(sched)[1], region, sub: pr, id, ex, sched };
      });
    },
    communeLabel: c => `${c.name} (${c.sub})`,
    communeTag: c => schedText(c.sched, 0),
    communeHint: c => `${t('region.' + c.region)} · ${t('comp.com')} ${schedText(c.sched, c.ex)}`,
    partsHint: x => t('partsHint'),
    minSalary: role => Math.round(GOV[role]),
    env: s => {
      const P2 = Math.max(0, Number(s.partnerGross) || 0);
      const couple = s.household === 'joint';
      const base = { region: s.region, commune: s.commune, loaded: s.local >= 0, kids: couple ? s.children / 2 : s.children };
      return { partnerGross: P2, partnerWithout: couple ? person('emp', P2, s, { ...base, spouseDependent: true }) : null };
    },
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, { ...plain, regime: 'minister' }, env, p.regime === 'tech' ? 'tech' : 'mp').net, allow: GOV.diaria }),
    segLabels: { bonus: 'bonusLost' }, recvLabels: { bonus: 'bonusReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'mpPay',
    refKeys: ['er', 'ee', 'irpef', 'cuneo', 'reg', 'com', 'vat', 'minister', 'notIncl'],
    GAPS: ['mat', 'inail', 'sector', 'cap', 'ti', 'kids', 'comuni', 'tech', 'ceo', 'wages', 'sim', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
