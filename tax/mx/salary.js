// Mexican salary rules for 2026 (ISR tariff updated by 13.2% for 2026, IMSS after the 2020 pension reform). Loaded by ../index.html?country=mx.
// The state payroll tax (ISN) rate per state comes from communes.js (rebuilt by update_communes.py mx).
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['pres', 'sen', 'dip'];
  const UMA = 117.31, MW = 315.04;
  const UMA_M = UMA * 30.4, MW_M = MW * 30.4;

  const P = {
    // Annual tariff (Anexo 8 RMF 2026): lower limit, fixed fee, rate on the excess.
    tariff: [[0, 0, .0192], [10135.12, 194.59, .064], [86022.12, 5051.37, .1088], [151176.20, 12140.13, .16],
      [175735.67, 16069.64, .1792], [210403.70, 22282.14, .2136], [424353.98, 67981.92, .2352],
      [668840.15, 125485.07, .30], [1276925.99, 307910.81, .32], [1702567.98, 444116.23, .34], [5107703.93, 1601862.46, .35]],
    sub: { rate: .1502, limit: 11492.66 },
    ex: { ag: 30 * UMA, pv: 15 * UMA },
    ee: { din: .0025, gmp: .00375, iv: .00625, cv: .01125, exc: .004 },
    er: { fija: .204, exc: .011, din: .007, gmp: .0105, iv: .0175, gua: .01, rt: .0054355, ret: .02, inf: .05 },
    // Employer cesantía y vejez in 2026, by base wage in UMAs (3.15% at the minimum wage).
    cv: [[1.5, .03676], [2, .04851], [2.5, .05556], [3, .06026], [3.5, .06361], [4, .06613], [INF, .07513]], cvMin: .0315,
    capUma: 25,
    // ISSSTE for federal officials: employee and employer shares (FOVISSSTE included), on base pay up to 10 UMA.
    issste: { ee: .10625, er: .20145, capUma: 10 },
  };
  // Reference table: on taxable income (annual).
  P.brackets = P.tariff.map(([lo, , r], i) => [i + 1 < P.tariff.length ? P.tariff[i + 1][0] : INF, r]);

  const REF_WAGES = [
    { key: 'min', m: MW_M, year: 2026, color: '--w-min' },
    { key: 'avg', m: 640 * 365 / 12.6, year: 2025, color: '--w-avg' },
  ];

  const pos = v => Math.max(0, v);
  const pc = r => pct(r, Math.round(r * 1e5) % 10 ? 3 : Math.round(r * 1e4) % 100 ? 2 : 0);

  function tariff(T, k = 1) {
    let row = P.tariff[0];
    for (const r of P.tariff) if (T >= r[0] * k) row = r;
    const [lo, fee, rate] = row;
    return { lo: lo * k, fee: fee * k, rate, tax: T > 0 ? fee * k + (T - lo * k) * rate : 0 };
  }

  const cvRate = (sbc, minWage) => minWage ? P.cvMin : P.cv.find(([hi]) => sbc / UMA <= hi)[1];

  // One worker in the private sector, IMSS.
  function person(G, s) {
    const f = s.factor, m = G / f, bonus = f > 12;
    const ag = bonus ? m * .5 : 0, pv = bonus ? m * .1 : 0;
    const minWage = G > 0 && m <= MW_M + .01;
    const sbc = Math.min(G / 365, P.capUma * UMA), base = sbc * 365, excess = pos(sbc - 3 * UMA) * 365;
    const e = P.ee, r = P.er;
    const eeSoc = (e.din + e.gmp + e.iv + e.cv) * base + e.exc * excess;
    const cv = cvRate(sbc, minWage);
    const fija = G > 0 ? r.fija * UMA * 365 : 0;
    const imss = fija + r.exc * excess + (r.din + r.gmp + r.iv + r.gua + r.rt) * base;
    const sar = (r.ret + cv) * base, inf = r.inf * base;
    // Art. 36 LSS: on the minimum wage the employer pays the worker's share too.
    const shifted = minWage ? eeSoc : 0;
    const exAg = Math.min(ag, P.ex.ag), exPv = Math.min(pv, P.ex.pv);
    const taxable = pos(G - exAg - exPv);
    const gross = tariff(taxable);
    const isrM = tariff(m, 1 / 12).tax;
    const subM = m <= P.sub.limit ? Math.min(P.sub.rate * UMA_M, isrM) : 0;
    const subY = 12 * subM;
    const isr = minWage ? 0 : pos(gross.tax - subY);
    return { G, m, ag, pv, exAg, exPv, minWage, sbc, base, excess, eeSoc, cv, fija, imss, sar, inf, shifted, taxable, gross, isrM, subM, subY, isr, ee: eeSoc - shifted };
  }

  function finish(r, s) {
    r.vatShare = s.vatRate / (100 + s.vatRate);
    r.parts.vat = s.vat ? pos(r.net) * r.vatShare : 0;
    return r;
  }

  function compute(G, s) {
    if (s.regime === 'minister') return computeMinister(G, s);
    const u = person(G, s);
    const isn = s.local / 100 * G;
    const er = u.imss + u.shifted;
    const net = G - u.ee - u.isr;
    return finish({ G, cost: G + er + u.sar + u.inf + isn, net, u, isn, parts: { er, sar: u.sar, inf: u.inf, isn, ee: u.ee, isr: u.isr } }, s);
  }

  // Federal officials: ISSSTE instead of IMSS, ISR as on any salary, paid 12 times.
  function computeMinister(G, s) {
    const u = person(G, { ...s, factor: 12 });
    const base = Math.min(G / 12, P.issste.capUma * UMA_M) * 12;
    const ee = P.issste.ee * base, er = P.issste.er * base;
    u.ee = ee;
    return finish({ G, cost: G + er, net: G - ee - u.isr, u, isn: 0, regime: 'minister', parts: { er, sar: 0, inf: 0, isn: 0, ee, isr: u.isr } }, s);
  }

  // Monthly net from the PEF 2026 tables; the gross is what nets that much under the same rules.
  const NET_M = { pres: 134290, sen: 131874, dip: 108935 };
  const plainMin = { factor: 12, local: 0, vat: false, vatRate: 16, regime: 'minister' };
  function grossFor(netY) {
    let lo = netY, hi = netY * 2;
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2;
      if (computeMinister(mid, plainMin).net < netY) lo = mid; else hi = mid;
    }
    return Math.round((lo + hi) / 2);
  }
  const GOV = Object.fromEntries(Object.entries(NET_M).map(([k, v]) => [k, grossFor(v * 12)]));
  const DOC_PEF = 'https://www.diputados.gob.mx/LeyesBiblio/pdf/PEF_2026.pdf';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '⭐', regime: 'minister', lo: GOV.pres, hi: GOV.pres, url: 'https://es.wikipedia.org/wiki/Presidente_de_M%C3%A9xico' },
    { kind: 'stat', key: 'sen', icon: '🏛️', regime: 'minister', lo: GOV.sen, hi: GOV.sen, url: 'https://es.wikipedia.org/wiki/Senado_de_la_Rep%C3%BAblica_(M%C3%A9xico)' },
    { kind: 'stat', key: 'dip', icon: '📎', regime: 'minister', lo: GOV.dip, hi: GOV.dip, url: 'https://es.wikipedia.org/wiki/C%C3%A1mara_de_Diputados_(M%C3%A9xico)' },
  ];

  const SRC = {
    isr: 'https://taxsummaries.pwc.com/mexico/individual/taxes-on-personal-income',
    exempt: 'https://taxsummaries.pwc.com/mexico/individual/income-determination',
    other: 'https://taxsummaries.pwc.com/mexico/individual/other-taxes',
    oecd: 'https://www.oecd.org/en/publications/taxing-wages-2025_b3a95829-en.html',
    lss: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf',
    lisr: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf',
    sub: 'https://www.dof.gob.mx/',
    isn: 'https://www.runahr.com/mx/recursos/impuesto-sobre-nomina',
    minWage: 'https://www.gob.mx/conasami',
    lft: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf',
    issste: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LISSSTE.pdf',
    pef: DOC_PEF,
  };

  const COMP_KEYS = ['er', 'sar', 'inf', 'isn', 'ee', 'isr', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', sar: 'var(--k-vm)', inf: 'var(--k-csg)', isn: 'var(--k-com)', ee: 'var(--k-ee)', isr: 'var(--k-ir)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: COMP_KEYS, base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'sar', 'inf', 'isn', 'ee', 'isr'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'isr'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const capNote = r => r && r.u.sbc >= P.capUma * UMA - 1e-6 ? `<p class="m">${t('tip.capped', eur2(P.capUma * UMA))}</p>` : '';
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('pef')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('comp.erMin')}</h4><p>${t('tip.minEr', eur(P.issste.capUma * UMA_M))}</p>${r ? `<table>${tot(pc(P.issste.er), r.parts.er)}</table>` : ''}${sources('issste')}`,
      ee: r => `<h4>${t('comp.eeMin')}</h4><p>${t('tip.minEe', eur(P.issste.capUma * UMA_M))}</p>${r ? `<table>${tot(pc(P.issste.ee), r.parts.ee)}</table>` : ''}${sources('issste')}`,
      isn: () => `<h4>${t('comp.isn')}</h4><p>${t('tip.minIsn')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pef', 'issste')}`,
      'factor12.6': () => `<h4>${t('tip.monthsPaid', num(12.6, 1))}</h4><p>${t('tip.f126', eur(P.ex.ag), eur(P.ex.pv))}</p>${sources('lft', 'exempt')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('isr')}`,
      isnRule: () => `<h4>${t('comp.isn')}</h4><p>${t('tip.isnRule')}</p>${sources('other', 'isn')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), num(s.factor, s.factor % 1 ? 1 : 0), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${row(t('comp.sar'), r.parts.sar)}${row(t('comp.inf'), r.parts.inf)}${row(t('comp.isn'), r.parts.isn)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const u = r && r.u, e = P.er;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur2(UMA))}</p>${u ? `<table>
          ${row(t('er.fija'), u.fija)}
          ${u.excess ? row(`${pc(e.exc)} × ${eur(u.excess)}`, e.exc * u.excess) : ''}
          ${row(`${pc(e.din + e.gmp + e.iv + e.gua + e.rt)} × ${eur(u.base)}`, (e.din + e.gmp + e.iv + e.gua + e.rt) * u.base)}
          ${u.shifted ? row(t('er.shifted'), u.shifted) : ''}
          ${tot(t('total'), r.parts.er)}</table>` : ''}${capNote(r)}${sources('oecd', 'lss')}`;
      },
      sar: r => `<h4>${t('comp.sar')}</h4><p>${t('tip.sar')}</p>${r ? `<table>
          ${row(`${t('er.ret')} 2% × ${eur(r.u.base)}`, P.er.ret * r.u.base)}
          ${row(`${t('er.cv')} ${pc(r.u.cv)} × ${eur(r.u.base)}`, r.u.cv * r.u.base)}
          ${tot(t('total'), r.parts.sar)}</table>` : ''}${capNote(r)}${sources('oecd', 'lss')}`,
      inf: r => `<h4>${t('comp.inf')}</h4><p>${t('tip.inf')}</p>${r ? `<table>${tot(`5% × ${eur(r.u.base)}`, r.parts.inf)}</table>` : ''}${capNote(r)}${sources('oecd')}`,
      isn: r => {
        const c = x.commune();
        return `<h4>${t('comp.isn')}${c ? ' · ' + esc(c.name) : ''}</h4><p>${t('tip.isn')}</p>${r ? `<table>${tot(`${num(s.local, 1)}% × ${eur(r.G)}`, r.parts.isn)}</table>` : ''}<p class="m">${t('tip.isnM')}</p>${sources('other', 'isn')}`;
      },
      ee: r => {
        const u = r && r.u, e = P.ee;
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${u ? `<table>
          ${row(`${pc(e.din + e.gmp + e.iv + e.cv)} × ${eur(u.base)}`, (e.din + e.gmp + e.iv + e.cv) * u.base)}
          ${u.excess ? row(`${pc(e.exc)} × ${eur(u.excess)}`, e.exc * u.excess) : ''}
          ${u.shifted ? row('− ' + t('er.shifted'), -u.shifted) : ''}
          ${tot(t('youPay'), r.parts.ee)}</table>` : ''}${capNote(r)}${sources('oecd', 'lss')}`;
      },
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', eur(P.ex.ag), eur(P.ex.pv))}</p>${r ? `<table>
          ${row(t('bd.gross'), r.G)}
          ${r.u.exAg ? row('− ' + t('bd.exAg'), -r.u.exAg) : ''}
          ${r.u.exPv ? row('− ' + t('bd.exPv'), -r.u.exPv) : ''}
          ${tot(t('bd.taxable'), r.u.taxable)}</table>` : ''}${sources('exempt')}`,
      isrGross: r => {
        if (!r) return `<h4>${t('bd.isrGross')}</h4><p>${t('tip.isrGross')}</p>${sources('isr')}`;
        const g = r.u.gross;
        return `<h4>${t('bd.isrGross')}</h4><p>${t('tip.isrGross')}</p><table>
          ${row(t('tip.fee', eur2(g.lo)), g.fee)}
          ${row(`${pc(g.rate)} × ${eur(pos(r.u.taxable - g.lo))}`, pos(r.u.taxable - g.lo) * g.rate)}
          ${tot(t('bd.isrGross'), g.tax)}</table>${sources('isr')}`;
      },
      sub: r => `<h4>${t('bd.sub')}</h4><p>${t('tip.sub', eur2(P.sub.rate * UMA_M), eur2(P.sub.limit))}</p>${r ? `<p>${r.u.subM ? `12 × ${eur2(r.u.subM)} = <b>${eur(r.u.subY)}</b>` : t('tip.subNone')}</p>` : ''}${sources('sub')}`,
      isr: r => `<h4>${t('comp.isr')}</h4><p>${t('tip.isr', eur2(MW_M))}</p>${r ? (r.u.minWage ? `<p>${t('tip.isrMin')}</p>` : `<table>
          ${row(t('bd.isrGross'), r.u.gross.tax)}
          ${r.u.subY ? row('− ' + t('bd.sub'), -r.u.subY) : ''}
          ${tot(t('comp.isr'), r.parts.isr)}</table>`) : ''}${sources('isr', 'lisr')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('other')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const p = r.parts, u = r.u, min = r.regime === 'minister', c = x.commune();
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    L.push({ op: '+', k: 'er', label: t(min ? 'comp.erMin' : 'comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    if (!min) L.push(
      { op: '+', k: 'sar', label: t('comp.sar'), v: p.sar, tax: p.sar, cls: 'sub' },
      { op: '+', k: 'inf', label: t('comp.inf'), v: p.inf, tax: p.inf, cls: 'sub' },
      { op: '+', k: 'isn', label: `${t('comp.isn')} (${num(x.s.local, 1)}%${c ? ', ' + c.name : ''})`, v: p.isn, tax: p.isn, cls: 'sub' },
    );
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t(min ? 'comp.eeMin' : 'comp.ee'), v: p.ee, tax: p.ee },
      { op: '', k: 'taxable', label: t('bd.taxable'), v: u.taxable, cls: 'sub' },
      { op: '', k: 'isrGross', label: t('bd.isrGross'), v: u.minWage ? 0 : u.gross.tax, cls: 'sub' },
    );
    if (u.subY && !u.minWage) L.push({ op: '', k: 'sub', label: t('bd.sub'), v: -u.subY, cls: 'sub' });
    L.push(
      { op: '−', k: 'isr', label: t('comp.isr'), v: p.isr, tax: p.isr },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // Minimum wage: no ISR and the employer pays the IMSS share. One peso above, both come back; the subsidy then fades out at its limit.
  function trap(x) {
    const s = x.s;
    if (s.regime === 'minister') return { band: [MW_M, MW_M], text: [x.fmtM(MW_M, 1), null, null] };
    return { band: [MW_M, P.sub.limit], text: [x.fmtM(MW_M, 1), x.fmtM(P.sub.limit, 1) + x.perUnit(), eur2(P.sub.rate * UMA_M)] };
  }

  // The 35% bracket starts at 5,107,703.93 of taxable income a year.
  function top(x) {
    const s = x.s, T = P.tariff[P.tariff.length - 1][0];
    const at = x.firstMonthly(m => person(m * s.factor, s).taxable > T, 0, 1e7);
    return at ? { at, text: [x.fmtM(at, 1000) + x.perUnit()] } : null;
  }

  return {
    GAPS: ['noCheck', 'sub', 'isn', 'rt', 'minWage', 'issste', 'pef', 'polBonus', 'avg', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'MXN', nextStep: 2000,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12.6, 12], factorDigits: 1, vatStandard: 16,
    features: {},
    local: { label: 'isnLabel', tip: 'isnRule', digits: 1, step: .1, range: list => list.length ? [Math.min(...list.map(c => c.rate)), Math.max(...list.map(c => c.rate))] : [2, 4], notDue: () => false, hideInMinister: true },
    state: { salary: 20000, factor: 12.6, minRole: 'pres', commune: '09', region: '', local: 4, vatRate: 16, size: '' },
    urlFields: {
      months: ['factor', 'num', [12.6, 12]], state: ['commune', 'str'], isn: ['local', 'num'], role: ['minRole', 'str', MIN_ROLES],
    },
    parseCommunes: list => list.map(([name, rate, code]) => ({ name, rate, region: '', sub: '', id: code })),
    communeLabel: c => c.name,
    communeTag: c => `${num(c.rate, 1)}%`,
    communeHint: c => t('isnHint', num(c.rate, 1) + '%'),
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain) => ({ net: computeMinister(p.lo, plain).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'pef',
    refKeys: ['er', 'ee', 'isn', 'ir', 'exempt', 'sub', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
