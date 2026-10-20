// Norwegian salary rules for income year 2026. Loaded by ../index.html?country=no.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  // Arbeidsgiveravgift zone of the employer; zone V is also where the Finnmark tax rules apply to residents.
  const ZONES = { z1: .141, z1a: .106, z2: .106, z3: .064, z4: .051, z4a: .079, z5: 0 };
  const REGIONS = Object.keys(ZONES);
  const MIN_ROLES = ['minister', 'pm'];

  const P = {
    general: .22, generalNorth: .185,
    pf: 114540,
    minst: { r: .46, max: 95700 },
    north: 45000,
    tryg: { r: .076, lo: 99650, cap: .25 },
    brackets: [[226100, 0], [318300, .017], [725050, .04], [980100, .137], [1467200, .168], [INF, .178]],
  };

  const REF_WAGES = [
    { key: 'med', m: 55800, year: 2025, color: '--w-med' },
    { key: 'avg', m: 62070, year: 2025, color: '--w-avg' },
  ];

  // Yearly pay from 1 May 2026, set by the Storting.
  const GOV = { pm: 2234978, minister: 1815703, president: 2234978, mp: 1272209 };
  const DOC_PAY = 'https://www.stortinget.no/no/Stortinget-og-demokratiet/Representantene/Okonomiske-rettigheter/Lonnsutvikling/';
  const DOC_NBIM = 'https://www.nbim.no/contentassets/6db259ec684645ebbf171cacbe7cc7de/annual-report-2025.pdf';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', lo: GOV.pm, hi: GOV.pm, url: DOC_PAY },
    { kind: 'stat', key: 'president', icon: '🔔', lo: GOV.president, hi: GOV.president, url: DOC_PAY },
    { kind: 'stat', key: 'minister', icon: '💼', lo: GOV.minister, hi: GOV.minister, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🏛️', lo: GOV.mp, hi: GOV.mp, url: DOC_PAY },
    // Salary paid in 2025 and the annual salary at 31 December 2025.
    { kind: 'gov', name: 'Nicolai Tangen', role: 'nbim', lo: 7172790, hi: 7606000, url: DOC_NBIM },
  ];

  const SRC = {
    general: 'https://www.skatteetaten.no/satser/alminnelig-inntekt/',
    pf: 'https://www.skatteetaten.no/satser/personfradrag/',
    minst: 'https://www.skatteetaten.no/satser/minstefradrag/',
    trinn: 'https://www.skatteetaten.no/satser/trinnskatt/',
    tryg: 'https://www.skatteetaten.no/satser/trygdeavgift/',
    aga: 'https://www.skatteetaten.no/satser/arbeidsgiveravgift/',
    north: 'https://www.skatteetaten.no/satser/finnmarksfradraget/',
    pwc: 'https://taxsummaries.pwc.com/norway/individual/other-taxes',
    ssb: 'https://www.ssb.no/en/arbeid-og-lonn/lonn-og-arbeidskraftkostnader/statistikk/lonn',
    pay: DOC_PAY,
    nbim: DOC_NBIM,
  };

  const pos = v => Math.max(0, v);
  const north = s => s.region === 'z5';

  function person(G, s) {
    const n = north(s);
    const minst = Math.min(P.minst.max, P.minst.r * G);
    const ai = G - minst;
    const nd = n ? Math.min(P.north, pos(ai)) : 0;
    const base = pos(ai - nd - P.pf);
    const rate = n ? P.generalNorth : P.general;
    const general = rate * base;
    let trinn = 0, lo = 0;
    const steps = [];
    for (const [hi, r] of P.brackets) {
      const part = pos(Math.min(G, hi) - lo);
      if (part > 0 && r > 0) { trinn += part * r; steps.push({ lo, hi, r, part, v: part * r }); }
      lo = hi;
    }
    const tryg = G > P.tryg.lo ? Math.min(P.tryg.r * G, P.tryg.cap * (G - P.tryg.lo)) : 0;
    return { G, minst, ai, nd, base, rate, general, trinn, steps, tryg, capped: tryg < P.tryg.r * G - .5 && tryg > 0 };
  }

  function compute(G, s) {
    const u = person(G, s);
    u.m = G / s.factor;
    const erRate = ZONES[s.region] ?? ZONES.z1;
    const er = erRate * G;
    const net = G - u.tryg - u.general - u.trinn;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? pos(net) * vatShare : 0;
    return { G, cost: G + er, net, u, erRate, vatShare,
      parts: { er, ee: u.tryg, ir: u.general, trinn: u.trinn, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'trinn', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', trinn: 'var(--k-fed)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'trinn', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'trinn'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'trinn'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };
  const rate = r => pct(r, Math.round(r * 1e4) % 10 ? 2 : 1);

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg', eur(850000))}</p>${sources('aga', 'north')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', t('region.' + s.region), rate(ZONES[s.region] ?? ZONES.z1))}</p>${r ? `<table>${tot(`${rate(r.erRate)} × ${eur(r.G)}`, r.parts.er)}</table>` : ''}<p class="m">${t('tip.erM')}</p>${sources('aga', 'pwc')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.tryg.lo))}</p>${r && r.G > P.tryg.lo ? `<table>${r.u.capped ? tot(`25% × (${eur(r.G)} − ${eur(P.tryg.lo)})`, r.u.tryg) : tot(`${rate(P.tryg.r)} × ${eur(r.G)}`, r.u.tryg)}</table>` : ''}${sources('tryg')}`,
      minst: r => `<h4>${t('bd.minst')}</h4><p>${t('tip.minst', eur(P.minst.max))}</p>${r ? `<p>−${eur(r.u.minst)}</p>` : ''}${sources('minst')}`,
      north: r => `<h4>${t('bd.north')}</h4><p>${t('tip.north', eur(P.north))}</p>${r ? `<p>−${eur(r.u.nd)}</p>` : ''}${sources('north')}`,
      pf: () => `<h4>${t('bd.pf')}</h4><p>${t('tip.pf', eur(P.pf))}</p>${sources('pf')}`,
      taxable: r => `<h4>${t('bd.taxableNo')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.base)}</b>` : '')}</p>`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${row(t('bd.taxableNo'), r.u.base)}${tot(`${rate(r.u.rate)} × ${eur(r.u.base)}`, r.u.general)}</table>` : ''}${sources('general')}`,
      trinn: r => {
        const body = r && r.u.steps.length ? `<table>${r.u.steps.map((st, i) => row(`${t('tax.step', i + 1)}: ${rate(st.r)} × ${eur(st.part)}`, st.v)).join('')}${tot(t('total'), r.u.trinn)}</table>` : '';
        return `<h4>${t('comp.trinn')}</h4><p>${t('tip.trinn', eur(P.brackets[0][0]))}</p>${body}${sources('trinn')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('pwc')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const p = r.parts, u = r.u;
    const L = [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '+', k: 'er', label: `${t('comp.er')} (${rate(r.erRate)})`, v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
      { op: '−', k: 'trinn', label: t('comp.trinn'), v: p.trinn, tax: p.trinn },
      { op: '', k: 'minst', label: t('bd.minst'), v: u.minst, cls: 'sub' },
    ];
    if (u.nd > 0) L.push({ op: '', k: 'north', label: t('bd.north'), v: u.nd, cls: 'sub' });
    L.push(
      { op: '', k: 'pf', label: t('bd.pf'), v: P.pf, cls: 'sub' },
      { op: '', k: 'taxable', label: t('bd.taxableNo'), v: u.base, cls: 'sub' },
      { op: '−', k: 'ir', label: `${t('comp.ir')} (${rate(u.rate)})`, v: p.ir, tax: p.ir },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // Trygdeavgift starts at 99,650 and is phased in at 25% of the excess; income tax starts once the deductions are used up.
  function trap(x) {
    const s = x.s, f = s.factor;
    const lo = P.tryg.lo / f;
    const capEnd = P.tryg.cap * P.tryg.lo / (P.tryg.cap - P.tryg.r) / f;
    const taxAt = x.firstMonthly(m => person(m * f, s).base > 0, 0, 1e6) || capEnd;
    return { band: [lo, capEnd], text: [x.fmtM(lo, 100), x.fmtM(capEnd, 100) + x.perUnit(), x.fmtM(taxAt, 100)] };
  }

  function top(x) {
    const s = x.s, f = s.factor;
    const at = P.brackets[4][0] / f;
    return { at, text: [x.fmtM(at, 100) + x.perUnit(), x.fmtM(P.brackets[2][0] / f, 100), rate(P.general + P.brackets[5][1] + P.tryg.r)] };
  }

  return {
    GAPS: ['noCheck', 'maxRate', 'split', 'aga5', 'zone1a', 'polYear', 'nbim', 'wages', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'NOK', nextStep: 1000,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 25,
    features: {},
    communes: false,
    local: null,
    state: { salary: 55000, factor: 12, minRole: 'minister', commune: '', region: 'z1', local: 0, vatRate: 25, size: '' },
    urlFields: { zone: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.' + (p.role || 'pay')),
    polNoteLink: 'pay',
    refKeys: ['er', 'ee', 'ir', 'trinn', 'north', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
