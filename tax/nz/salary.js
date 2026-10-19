// New Zealand salary rules for the 2026-27 tax year (1 April 2026 to 31 March 2027). Loaded by ../index.html?country=nz.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['pus', 'outside', 'cabinet', 'dpm', 'pm'];

  const P = {
    brackets: [[15600, .105], [53500, .175], [78100, .30], [180000, .33], [INF, .39]],
    acc: { rate: .0175, max: 156641 },
    ietc: { from: 24000, full: 66000, to: 70000, amount: 520, taper: .13 },
    ks: { ee: .035, er: .035, gov: .25, govMax: 260.72, govTo: 180000 },
    // ESCT bands on salary + gross employer contributions; one flat rate on the whole contribution.
    esct: [[18720, .105], [64200, .175], [93720, .30], [216000, .33], [INF, .39]],
    wff: { ftc1: 7921, ftc2: 6454, iwtc: 7670, iwtcExtra: 780, from: 44900, rate: .275 },
  };
  const MIN_HOUR = 23.95;
  const MIN_M = MIN_HOUR * 40 * 52 / 12;

  // Monthly gross, full-time: minimum wage at 40 h/week, HLFS full-time median hourly × 40 h, QES average weekly earnings per FTE.
  const REF_WAGES = [
    { key: 'min', m: MIN_M, year: 2026, color: '--w-min' },
    { key: 'med', m: 38.00 * 40 * 52 / 12, year: 2026, color: '--w-med' },
    { key: 'avg', m: 1730 * 52 / 12, year: 2026, color: '--w-avg' },
  ];

  // Salaries from 1 July 2026 until polling day (Parliamentary Salaries and Allowances Determination 2024, schedule (d)).
  const PAY = { pm: 520500, dpm: 369800, cabinet: 327100, outside: 276000, pus: 214800, mp: 181200 };
  const DOC_PAY = 'https://www.remauthority.govt.nz/assets/Uploads/review-of-mps-salaries-and-allowances-2023-24.pdf';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: PAY.pm, hi: PAY.pm, url: DOC_PAY },
    { kind: 'stat', key: 'dpm', icon: '🥈', regime: 'dpm', lo: PAY.dpm, hi: PAY.dpm, url: DOC_PAY },
    { kind: 'stat', key: 'cabinet', icon: '💼', regime: 'cabinet', lo: PAY.cabinet, hi: PAY.cabinet, url: DOC_PAY },
    { kind: 'stat', key: 'outside', icon: '📎', regime: 'outside', lo: PAY.outside, hi: PAY.outside, url: DOC_PAY },
    { kind: 'stat', key: 'pus', icon: '🖇️', regime: 'pus', lo: PAY.pus, hi: PAY.pus, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: PAY.mp, hi: PAY.mp, url: DOC_PAY },
  ];

  const SRC = {
    rates: 'https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals',
    paye: 'https://www.ird.govt.nz/-/media/project/ir/home/documents/forms-and-guides/ir300---ir399/ir341/ir341-apr-2026.pdf',
    ietc: 'https://www.ird.govt.nz/income-tax/income-tax-for-individuals/individual-tax-credits/independent-earner-tax-credit-ietc',
    ks: 'https://www.ird.govt.nz/kiwisaver/kiwisaver-individuals/growing-my-kiwisaver-account/employee-contributions-to-kiwisaver',
    esct: 'https://www.ird.govt.nz/employing-staff/deductions-from-income/employer-superannuation-contriibution-tax-esct',
    pwc: 'https://taxsummaries.pwc.com/new-zealand/individual/other-taxes',
    ftc: 'https://www.ird.govt.nz/working-for-families/types/family-tax-credit',
    iwtc: 'https://www.ird.govt.nz/working-for-families/types/in-work-tax-credit',
    minWage: 'https://www.employment.govt.nz/pay-and-hours/pay-and-wages/minimum-wage/minimum-wage-rates-and-types',
    hlfs: 'https://www.stats.govt.nz/information-releases/labour-market-statistics-income-june-2026-quarter/',
    qes: 'https://www.stats.govt.nz/information-releases/labour-market-statistics-june-2026-quarter/',
    pay: DOC_PAY,
    remAuth: 'https://www.remauthority.govt.nz/members-of-parliament/members-of-parliament-remuneration',
  };

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const incomeTax = G => slices(G, P.brackets).reduce((a, b) => a + b.amt, 0);
  const accLevy = G => P.acc.rate * Math.min(G, P.acc.max);
  const ietcOf = I => I < P.ietc.from ? 0 : Math.max(0, P.ietc.amount - P.ietc.taper * Math.max(0, I - P.ietc.full));
  const esctRate = base => P.esct.find(([hi]) => base <= hi)[1];

  function kiwiSaver(G, on) {
    if (!on || G <= 0) return { ee: 0, er: 0, esct: 0, rate: 0, gov: 0 };
    const ee = P.ks.ee * G, er = P.ks.er * G, rate = esctRate(G + er);
    const gov = G > P.ks.govTo ? 0 : Math.min(P.ks.govMax, P.ks.gov * ee);
    return { ee, er, esct: rate * er, rate, gov };
  }

  // Working for Families for the year: family tax credit + in-work tax credit, minus 27.5% of family income above $44,900.
  function wffOf(famInc, kids, working) {
    if (kids <= 0) return { total: 0, ftc: 0, iwtc: 0, ab: 0, famInc };
    const ftc = P.wff.ftc1 + P.wff.ftc2 * (kids - 1);
    const iwtc = working ? P.wff.iwtc + P.wff.iwtcExtra * Math.max(0, kids - 3) : 0;
    const ab = P.wff.rate * Math.max(0, famInc - P.wff.from);
    return { total: Math.max(0, ftc + iwtc - ab), ftc, iwtc, ab, famInc };
  }

  // Your share of household credits = the household with your pay minus the household without it.
  function credits(G, s, env, office) {
    const couple = s.household === 'joint', pG = couple ? env.partner.G : 0, kids = s.children;
    const useWff = s.pa && !office;
    const withW = useWff ? wffOf(G + pG, kids, G > 0 || pG > 0) : wffOf(0, 0, false);
    const woW = useWff ? wffOf(pG, kids, pG > 0) : wffOf(0, 0, false);
    const ietcHh = (mine, wff) => {
      if (wff > 0) return { me: 0, them: 0 };
      return { me: ietcOf(mine), them: couple ? ietcOf(pG) : 0 };
    };
    const iW = ietcHh(G, withW.total), iWo = ietcHh(0, woW.total);
    const ietc = office ? 0 : iW.me + iW.them - iWo.them;
    return { wffWith: withW, wffWo: woW, wff: withW.total - woW.total, ietc, ietcMe: office ? 0 : iW.me, ietcThem: iW.them - iWo.them, blocked: withW.total > 0 && G >= P.ietc.from && G <= P.ietc.to };
  }

  const vatOf = (net, s) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // MPs and ministers: PAYE and the ACC earners' levy like any salary; the superannuation subsidy is left out.
  function computeOffice(G, s, env, role = s.minRole) {
    const acc = accLevy(G), ir = incomeTax(G);
    const cr = credits(G, s, env, true);
    const net = G - acc - ir;
    return { G, cost: G, net, acc, ir, ks: kiwiSaver(0, false), cr, role, regime: 'minister',
      parts: { esct: 0, acc, ir, ietc: 0, wff: 0, ks: 0, vat: vatOf(net, s) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeOffice(G, s, env);
    const acc = accLevy(G), ir = incomeTax(G), ks = kiwiSaver(G, s.cadre);
    const cr = credits(G, s, env, false);
    const net = G - acc - ir - ks.ee + cr.ietc + cr.wff;
    return { G, cost: G + ks.er, net, acc, ir, ks, cr, m: G / s.factor,
      parts: { esct: ks.esct, acc, ir, ietc: -cr.ietc, wff: -cr.wff, ks: ks.ee + ks.er - ks.esct, vat: vatOf(net, s) } };
  }

  // KiwiSaver goes into your own account, so it's shown but never counted as tax. ESCT on the employer part is.
  const COMP_KEYS = ['esct', 'acc', 'ir', 'ietc', 'wff', 'ks', 'vat'];
  const COMP_COLORS = { esct: 'var(--k-er)', acc: 'var(--k-ee)', ir: 'var(--k-ir)', ietc: 'var(--k-csg)', wff: 'var(--k-pa)', ks: 'var(--k-vm)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['esct', 'acc', 'ir', 'ietc', 'wff', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['esct', 'acc', 'ir', 'ietc', 'wff'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['acc', 'ir', 'ietc', 'wff'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const irTable = G => `<table>${slices(G, P.brackets).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, Math.round(b.r * 1000) % 10 ? 1 : 0)}`, b.amt)).join('')}${tot(t('comp.ir'), incomeTax(G))}</table>`;
    const wffRows = (w, label) => w.ftc ? `${row(t('tip.ftcFull', s.children), w.ftc)}${w.iwtc ? row('+ ' + t('tip.iwtcFull'), w.iwtc) : ''}
      ${row(`− 27.5% × (${eur(w.famInc)} − ${eur(P.wff.from)})`, -w.ab)}${tot(label, w.total)}` : '';
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('pay', 'remAuth')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      ks: () => `<h4>${t('comp.ks')}</h4><p>${t('tip.minKs')}</p>${sources('remAuth')}`,
      wff: () => `<h4>${t('comp.wff')}</h4><p>${t('tip.minWff')}</p>`,
      ietc: () => `<h4>${t('comp.ietc')}</h4><p>${t('tip.minWff')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pay', 'remAuth')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('ietc', 'ftc', 'iwtc')}`,
      paToggle: () => `<h4>${t('comp.wff')}</h4><p>${t('tip.paToggle')}</p>${sources('ftc', 'iwtc')}`,
      cadre: () => `<h4>${t('comp.ks')}</h4><p>${t('tip.ksToggle')}</p>${sources('ks', 'pwc')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.m ? t('tip.grossCalc', eur2(r.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('bd.ksEr'), r.ks.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      esct: r => `<h4>${t('comp.esct')}</h4><p>${t('tip.esct')}</p>${r && r.ks.er ? `<table>
        ${row(t('bd.ksEr'), r.ks.er)}${row(`× ${pct(r.ks.rate, Math.round(r.ks.rate * 1000) % 10 ? 1 : 0)} (${t('tip.esctBase', eur(r.G + r.ks.er))})`, r.ks.esct)}</table>` : ''}${sources('esct', 'paye')}`,
      acc: r => `<h4>${t('comp.acc')}</h4><p>${t('tip.acc', eur(P.acc.max))}</p>${r ? `<p>1.75% × ${eur(Math.min(r.G, P.acc.max))} = <b>${eur(r.acc)}</b></p>` : ''}${sources('paye')}`,
      ir: r => r ? `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p>${irTable(r.G)}${sources('rates')}`
        : `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('rates')}`,
      ietc: r => `<h4>${t('comp.ietc')}</h4><p>${t('tip.ietc')}</p>${r && r.cr ? `<table>
        ${row(t('tip.ietcYou'), r.cr.ietcMe)}${r.cr.ietcThem ? row(t('tip.ietcPartner'), r.cr.ietcThem) : ''}${tot(t('tip.yourShare'), r.cr.ietc)}</table>
        ${r.cr.blocked ? `<p class="m">${t('tip.ietcBlocked')}</p>` : ''}` : ''}${sources('ietc')}`,
      wff: r => {
        const c = r && r.cr;
        return `<h4>${t('comp.wff')}</h4><p>${t('tip.wff')}</p>${c && (c.wffWith.ftc || c.wffWo.ftc) ? `<table>
          ${wffRows(c.wffWith, t('tip.wffWith'))}
          ${c.wffWo.total ? row('− ' + t('tip.wffWithout'), -c.wffWo.total) : ''}
          ${tot(t('tip.yourShare'), c.wff)}</table>` : ''}<p class="m">${t('tip.wffM')}</p>${sources('ftc', 'iwtc')}`;
      },
      ks: r => `<h4>${t('comp.ks')}</h4><p>${t('tip.ks', eur(P.ks.govMax), eur(P.ks.govTo))}</p>${r && r.ks.ee ? `<table>
        ${row(t('bd.ksEe'), r.ks.ee)}${row(t('bd.ksEr'), r.ks.er)}${row('− ' + t('comp.esct'), -r.ks.esct)}${row('+ ' + t('tip.ksGov'), r.ks.gov)}
        ${tot(t('tip.ksPot'), r.ks.ee + r.ks.er - r.ks.esct + r.ks.gov)}</table>` : ''}${sources('ks', 'esct', 'pwc')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('pwc')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (r.ks.er > 0) L.push(
      { op: '+', k: 'ks', label: t('bd.ksErNet'), v: r.ks.er - r.ks.esct, cls: 'sub' },
      { op: '+', k: 'esct', label: t('comp.esct'), v: r.ks.esct, tax: r.ks.esct, cls: 'sub' },
    );
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'acc', label: t('comp.acc'), v: r.acc, tax: r.acc },
      { op: '−', k: 'ir', label: t('comp.ir'), v: r.ir, tax: r.ir },
    );
    if (Math.abs(p.ietc) > .5) L.push({ op: p.ietc < 0 ? '+' : '−', k: 'ietc', label: t('comp.ietc'), v: Math.abs(p.ietc), tax: p.ietc });
    if (Math.abs(p.wff) > .5) L.push({ op: p.wff < 0 ? '+' : '−', k: 'wff', label: t('comp.wff'), v: Math.abs(p.wff), tax: p.wff });
    if (r.ks.ee > 0) L.push({ op: '−', k: 'ks', label: t('bd.ksEe'), v: r.ks.ee });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // With children: where Working for Families is withdrawn. Without: the IETC taper.
  function trap(x) {
    const s = x.s, env = x.env(), f = s.factor;
    if (s.regime === 'minister') return null;
    const pG = s.household === 'joint' ? env.partner.G : 0;
    if (s.pa && s.children > 0) {
      const a = Math.max(MIN_M * 12 / f, (P.wff.from - pG) / f);
      const end = x.firstMonthly(m => m > a && compute(m * f, s, env).cr.wffWith.total <= 0, a);
      if (end && end > a + 1) return { band: [a, end], text: [x.fmtM(a, 20), x.fmtM(end, 20) + x.perUnit(), 'wff'] };
    }
    const band = [P.ietc.full / f, P.ietc.to / f];
    return { band, text: [x.fmtM(band[0], 20), x.fmtM(band[1], 20) + x.perUnit(), 'ietc'] };
  }

  function top(x) {
    const s = x.s, at = P.brackets[3][0] / s.factor;
    return { at, text: [x.fmtM(at, 20) + x.perUnit(), s.cadre ? eur(P.ks.govMax) : null] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'NZD', nextStep: 200,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 15,
    features: { cadre: true, pa: true },
    communes: false,
    local: null,
    parseCommunes: () => [], communeLabel: () => '', communeTag: () => '', communeHint: () => '',
    state: { salary: 6000, factor: 12, minRole: 'cabinet', cadre: true, pa: true, commune: '', region: '', local: 0, vatRate: 15, size: '' },
    urlFields: { ks: ['cadre', 'bool'], wff: ['pa', 'bool'], role: ['minRole', 'str', MIN_ROLES] },
    partsHint: x => x.s.children > 0 ? t('partsHint') : '',
    minSalary: role => PAY[role],
    env: s => ({ partner: { G: Math.max(0, Number(s.partnerGross) || 0) } }),
    compute,
    own: (p, plain, env) => ({ net: computeOffice(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: { wff: 'wffLost', ietc: 'ietcLost' }, recvLabels: { wff: 'wffReceived', ietc: 'ietcReceived' },
    polNote: p => p.regime === 'mp' ? 'polNote.mp' : 'polNote.minister',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: () => t('src.pay'),
    polNoteLink: 'pay',
    refKeys: ['ir', 'acc', 'ietc', 'wff', 'ks', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
