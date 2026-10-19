// Polish salary rules for 2026 income, employment contract (umowa o pracę). Loaded by ../index.html?country=pl.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['sec', 'min', 'vpm', 'pm'];

  const P = {
    // ZUS: pension and disability stop at 30x the forecast average wage for the year.
    zus: { em: .0976, rentEe: .015, chor: .0245, rentEr: .065, wyp: .0167, fp: .0245, fgsp: .001, cap: 282600 },
    nfz: .09,
    kup: 3000,
    pit: { thr: 120000, r1: .12, r2: .32, red: 3600 },
    youth: 85528,
    child: [1112.04, 1112.04, 2000.04, 2700], childLimit: 112000,
    zr: { perChild: 124, crit: 674, min: 20 },
    b800: 800,
    kb: 1935.26,
    // MP pay is 80% of a deputy minister's salary; the parliamentary allowance is 25%.
    mp: Math.round(.8 * 8.96 * 1935.26 * 100) / 100, dieta: Math.round(.25 * 8.96 * 1935.26 * 100) / 100, dietaFree: 3000,
    // Reference table only: the scale on taxable income, with the 30,000 zł tax-free amount.
    brackets: [[30000, 0], [120000, .12], [INF, .32]],
  };
  const MIN_WAGE = 4806;

  // Monthly gross: minimum wage 2026, GUS median (October 2024) and average wage in the national economy (2025).
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 6856.75, year: 2024, color: '--w-med' },
    { key: 'avg', m: 8903.56, year: 2025, color: '--w-avg' },
  ];

  // Base salary + function allowance, as multiples of the 2026 base amount.
  const MULT = { pm: 8.68 + 2.8, vpm: 7.98 + 2.24, min: 7.84 + 2.10, sec: 7.04 + 1.92 };
  const GOV = Object.fromEntries(Object.entries(MULT).map(([k, v]) => [k, Math.round(v * P.kb * 100) / 100 * 12]));
  const DOC_REG = 'https://api.sejm.gov.pl/eli/acts/DU/2024/778/text.html';
  const DOC_MP = 'https://www.rmf24.pl/fakty/polityka/news-podwyzki-dla-parlamentarzystow-wiecej-na-mieszkanie-biuro-i-,nId,8065028';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_REG },
    { kind: 'stat', key: 'vpm', icon: '🎖️', regime: 'vpm', lo: GOV.vpm, hi: GOV.vpm, url: DOC_REG },
    { kind: 'stat', key: 'min', icon: '💼', regime: 'min', lo: GOV.min, hi: GOV.min, url: DOC_REG },
    { kind: 'stat', key: 'sec', icon: '📎', regime: 'sec', lo: GOV.sec, hi: GOV.sec, url: DOC_REG },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: P.mp * 12, hi: P.mp * 12, url: DOC_MP },
    { kind: 'gov', name: 'Adam Glapiński', role: 'nbp', lo: 1379946, hi: 1591068, url: 'https://www.bankier.pl/wiadomosc/Ile-zarabia-prezes-NBP-Pensja-Adama-Glapinskiego-w-gore-8917046.html' },
    { kind: 'corp', name: 'Ireneusz Fąfara', role: 'orlen', lo: 1498000, hi: 1498000, url: 'https://www.money.pl/gospodarka/dane-wyszly-na-jaw-tyle-mogl-zarobic-daniel-obajtek-w-orlenie-7337176592796064a.html' },
  ];

  const SRC = {
    act: 'https://api.sejm.gov.pl/eli/acts/DU/2026/592/text.pdf',
    pit: 'https://www.podatki.gov.pl/pit/',
    zus: 'https://www.zus.pl/baza-wiedzy/skladki-wskazniki-odsetki/skladki/wysokosc-skladek-na-ubezpieczenia-spoleczne',
    cap: 'https://api.sejm.gov.pl/eli/acts/MP/2025/1206/text.pdf',
    zr: 'https://www.gov.pl/web/rodzina/zasilek-rodzinny',
    b800: 'https://www.gov.pl/web/rodzina/swiadczenie-wychowawcze',
    minWage: 'https://www.gov.pl/web/rodzina/minimalne-wynagrodzenie-za-prace-w-2026-roku',
    gus: 'https://stat.gov.pl/sygnalne/komunikaty-i-obwieszczenia/',
    median: 'https://www.money.pl/gospodarka/mediana-zarobkow-nizsza-od-sredniej-nowe-dane-gus-ujawnily-skale-problemu-7141764031535936a.html',
    vat: 'https://www.podatki.gov.pl/vat/',
    reg: DOC_REG,
    budget: 'https://api.sejm.gov.pl/eli/acts/DU/2026/62/text.pdf',
    mpPay: DOC_MP,
  };

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const scaleBr = [[P.pit.thr, P.pit.r1], [INF, P.pit.r2]];
  const scale = I => Math.max(0, slices(I, scaleBr).reduce((s, b) => s + b.amt, 0) - P.pit.red);

  // Contributions and PIT income of one person. Under 26, pay up to the limit is PIT-free but still pays ZUS and NFZ.
  function employee(G, young = false) {
    const z = P.zus, base = Math.min(G, z.cap);
    const em = z.em * base, rent = z.rentEe * base, chor = z.chor * G;
    const soc = em + rent + chor;
    const nfz = P.nfz * Math.max(0, G - soc);
    const exempt = young ? Math.min(G, P.youth) : 0;
    const taxedRev = G - exempt, share = G > 0 ? taxedRev / G : 0;
    const kup = Math.min(taxedRev, P.kup), socDed = soc * share;
    return { G, em, rent, chor, soc, nfz, exempt, kup, socDed, inc: Math.max(0, taxedRev - kup - socDed), young };
  }
  const nobody = employee(0);

  const childCredit = kids => { let c = 0; for (let i = 0; i < kids; i++) c += P.child[Math.min(i, 3)]; return c; };

  // Household PIT for the year: joint return for spouses, single-parent return with children, then the child credit.
  function household(me, them, kids) {
    const people = them ? [me, them] : [me];
    const inc = people.reduce((s, p) => s + p.inc, 0);
    const alone = people.reduce((s, p) => s + scale(p.inc), 0);
    const split = them || kids > 0 ? 2 * scale(inc / 2) : alone;
    const base = Math.min(alone, split);
    const mode = split < alone - .005 ? (them ? 'joint' : 'parent') : 'alone';
    let credit = childCredit(kids);
    if (kids === 1 && inc > P.childLimit) credit = 0;
    // Credit beyond the tax is paid back, up to the contributions the household paid.
    const contrib = people.reduce((s, p) => s + p.soc + p.nfz, 0);
    const total = Math.max(base - credit, -contrib);
    return { base, alone, split, mode, inc, credit, used: base - total, total, people };
  }

  // Means-tested family allowance per month; above the threshold it shrinks zloty for zloty.
  function familyAllowance(netMonthly, persons, kids) {
    if (!kids) return 0;
    const full = kids * P.zr.perChild;
    const over = netMonthly - P.zr.crit * persons;
    const v = over <= 0 ? full : full - over;
    return v >= P.zr.min ? v : 0;
  }
  const netOf = p => p ? p.G - p.soc - p.nfz : 0;

  // Your share of household taxes and benefits = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', kids = s.children, pu = couple ? env.partner : null;
    const hh = household(u, pu, kids);
    const wo = household(nobody, pu, kids);
    const ir = hh.total - wo.total;
    let zr = 0, zrWith = 0, zrWo = 0;
    const persons = (couple ? 2 : 1) + kids;
    if (s.pa && s.regime !== 'minister' && kids > 0) {
      zrWith = familyAllowance((netOf(u) + netOf(pu) - hh.total) / 12, persons, kids);
      zrWo = familyAllowance((netOf(pu) - wo.total) / 12, persons, kids);
      zr = 12 * (zrWo - zrWith);
    }
    return { ir, hh, wo, zr, zrWith, zrWo, persons, full: kids * P.zr.perChild };
  }

  function employerSide(G, kind = 'firm') {
    const z = P.zus, base = Math.min(G, z.cap);
    const em = z.em * base, rent = z.rentEr * base, wyp = z.wyp * G;
    // State bodies don't pay into the wage guarantee fund; MPs aren't employees, so no Labour Fund either.
    const fp = kind === 'mp' ? 0 : z.fp * G, fgsp = kind === 'firm' ? z.fgsp * G : 0;
    return { em, rent, wyp, fp, fgsp, er: em + rent + wyp, fund: fp + fgsp };
  }

  const vatOf = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // Ministers and MPs: ZUS, NFZ and PIT like any employee, no youth relief, no family allowance.
  function computeMinister(G, s, env, role = s.minRole) {
    const u = employee(G);
    const tax = incomeTaxes(u, { ...s, regime: 'minister', pa: false }, env);
    const emp = employerSide(G, role === 'mp' ? 'mp' : 'state');
    const net = G - u.soc - u.nfz - tax.ir;
    return { G, cost: G + emp.er + emp.fund, net, u, tax, emp, regime: 'minister', role,
      parts: { er: emp.er, fund: emp.fund, ee: u.soc, nfz: u.nfz, ir: tax.ir, zr: 0, vat: vatOf(s, net) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = employee(G, !!s.cadre);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const emp = employerSide(G);
    const net = G - u.soc - u.nfz - tax.ir - tax.zr;
    return { G, cost: G + emp.er + emp.fund, net, u, tax, emp,
      parts: { er: emp.er, fund: emp.fund, ee: u.soc, nfz: u.nfz, ir: tax.ir, zr: tax.zr, vat: vatOf(s, net) } };
  }

  // The MP allowance: tax-free up to the monthly limit, the rest taxed at the MP's top rate.
  const dietaNet = () => 12 * (P.dieta - Math.max(0, P.dieta - P.dietaFree) * (P.mp * 12 > P.pit.thr ? P.pit.r2 : P.pit.r1));

  const COMP_KEYS = ['er', 'fund', 'ee', 'nfz', 'ir', 'zr', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', fund: 'var(--k-vm)', ee: 'var(--k-ee)', nfz: 'var(--k-csg)', ir: 'var(--k-ir)', zr: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: COMP_KEYS, base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'fund', 'ee', 'nfz', 'ir', 'zr'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'nfz', 'ir', 'zr'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const rate = (r, d = 2) => pct(r, d);
    const irTable = h => {
      const label = '';
      const sl = h.mode === 'alone' ? h.people.flatMap(p => slices(p.inc, scaleBr)) : slices(h.inc / 2, scaleBr).map(b => ({ ...b, amt: 2 * b.amt, two: true }));
      const one = sl.map(b => row(`${b.two ? '2 × ' : ''}${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}`, b.amt)).join('');
      const gross = sl.reduce((a, b) => a + b.amt, 0);
      return `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
        ${row(t('tip.irIncome'), h.inc)}${one}${row('− ' + t('tip.irReduction'), -(gross - h.base))}
        ${tot(t('tip.irBase'), h.base)}${h.credit ? row('− ' + t('comp.child'), -h.used) : ''}${tot(t('tip.irHousehold'), h.total)}`;
    };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur2(P.kb))}</p>${r ? `<table>
        ${row(t('tip.minMonth'), r.G / 12)}${tot(t('aYear'), r.G)}</table>` : ''}${sources('reg', 'budget')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      fund: r => `<h4>${t('comp.fund')}</h4><p>${t('tip.minFund')}</p>${r ? `<p>${eur(r.parts.fund)}</p>` : ''}${sources('zus')}`,
      zr: () => `<h4>${t('comp.zr')}</h4><p>${t('tip.minZr')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules', eur2(P.kb))}</p>${sources('reg', 'budget', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      cadre: () => `<h4>${t('cadre')}</h4><p>${t('tip.youth', eur(P.youth))}</p>${sources('act')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('act', 'pit')}`,
      paToggle: () => `<h4>${t('comp.zr')}</h4><p>${t('tip.paToggle', eur(P.zr.crit), eur(P.zr.perChild))}</p>${sources('zr')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${row(t('comp.fund'), r.parts.fund)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.zus.cap))}</p>${r ? `<table>
          ${row(`${t('tip.em')} ${rate(P.zus.em)}`, r.emp.em)}
          ${row(`${t('tip.rent')} ${rate(P.zus.rentEr)}`, r.emp.rent)}
          ${row(`${t('tip.wyp')} ${rate(P.zus.wyp)}`, r.emp.wyp)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}${sources('zus', 'cap')}`,
      fund: r => `<h4>${t('comp.fund')}</h4><p>${t('tip.fund')}</p>${r ? `<table>
          ${row(`${t('tip.fp')} ${rate(P.zus.fp)}`, r.emp.fp)}
          ${r.emp.fgsp ? row(`${t('tip.fgsp')} ${rate(P.zus.fgsp)}`, r.emp.fgsp) : ''}
          ${tot(t('total'), r.parts.fund)}</table>` : ''}${sources('zus')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.zus.cap))}</p>${r ? `<table>
          ${row(`${t('tip.em')} ${rate(P.zus.em)}`, r.u.em)}
          ${row(`${t('tip.rent')} ${rate(P.zus.rentEe)}`, r.u.rent)}
          ${row(`${t('tip.chor')} ${rate(P.zus.chor)}`, r.u.chor)}
          ${tot(t('youPay'), r.u.soc)}</table>` : ''}${sources('zus', 'cap')}`,
      nfz: r => `<h4>${t('comp.nfz')}</h4><p>${t('tip.nfz')}</p>${r ? `<table>
          ${row(`9% × (${eur(r.G)} − ${eur(r.u.soc)})`, r.u.nfz)}</table>` : ''}${sources('pit')}`,
      kup: r => `<h4>${t('bd.kup')}</h4><p>${t('tip.kup')}</p>${r ? `<p>−${eur(r.u.kup)}</p>` : ''}${sources('act')}`,
      exempt: r => `<h4>${t('bd.exempt')}</h4><p>${t('tip.youth', eur(P.youth))}</p>${r ? `<p>−${eur(r.u.exempt)}</p>` : ''}${sources('act')}`,
      taxable: r => `<h4>${t('bd.taxablePl')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.inc)}</b>` : '')}</p>${sources('pit')}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('act', 'pit')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM', h.mode)}</p><table>
          ${irTable(h, '')}
          ${h.people.length > 1 || r.tax.wo.total ? `${row('− ' + t('tip.irWithout'), -r.tax.wo.total)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${sources('act', 'pit')}`;
      },
      child: r => {
        const h = r && r.tax.hh;
        return `<h4>${t('comp.child')}</h4><p>${t('tip.child', eur(P.childLimit))}</p>${h && h.credit ? `<table>
          ${row(t('tip.childFull', s.children), h.credit)}
          ${row(t('tip.childUsed'), h.used)}</table>` : ''}${sources('act')}`;
      },
      zr: r => {
        const d = r && r.tax;
        return `<h4>${t('comp.zr')}</h4><p>${t('tip.zr', eur(P.zr.crit), eur(P.zr.perChild))}</p>${d && d.full ? `<table>
          ${row(t('tip.zrFull', s.children), d.full)}
          ${row(t('tip.zrWith'), d.zrWith)}
          ${row(t('tip.zrWithout'), d.zrWo)}
          ${tot(t('tip.zrYear'), r.parts.zr)}</table>` : ''}${sources('zr')}`;
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

  function breakdown(r) {
    const p = r.parts, u = r.u, min = r.regime === 'minister', h = r.tax.hh;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
    ];
    if (p.fund > 0) L.push({ op: '+', k: 'fund', label: t('comp.fund'), v: p.fund, tax: p.fund, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: u.soc, tax: u.soc },
      { op: '−', k: 'nfz', label: t('comp.nfz'), v: u.nfz, tax: u.nfz },
    );
    if (u.exempt > 0) L.push({ op: '', k: 'exempt', label: t('bd.exempt'), v: u.exempt, cls: 'sub' });
    if (u.kup > 0) L.push({ op: '', k: 'kup', label: t('bd.kup'), v: u.kup, cls: 'sub' });
    L.push(
      { op: '=', k: 'taxable', label: t('bd.taxablePl'), v: u.inc, cls: 'sub' },
      { op: p.ir < 0 ? '+' : '−', k: 'ir', label: t(p.ir < 0 ? 'bd.irRefund' : 'comp.ir'), v: Math.abs(p.ir), tax: p.ir },
    );
    if (h.used > .5) L.push({ op: '', k: 'child', label: t('bd.childIn'), v: h.used, cls: 'sub' });
    if (Math.abs(p.zr) > .5) L.push({ op: '−', k: 'zr', label: t('zrLost'), v: p.zr, tax: p.zr });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low pay: from the minimum wage, or the zone where the family allowance melts away zloty for zloty.
  function trap(x) {
    const s = x.s, mw = MIN_WAGE * 12 / s.factor;
    if (s.pa && s.children > 0 && s.regime !== 'minister') {
      const env = x.env(), at = m => compute(m * s.factor, s, env).tax;
      const full = s.children * P.zr.perChild;
      const start = x.firstMonthly(m => at(m).zrWith < full - .5, 0, 50000);
      const end = start == null ? null : x.firstMonthly(m => at(m).zrWith <= 0, start, 50000);
      if (start != null && end != null && end > start + 1) return { band: [start, end], text: [x.fmtM(start, 10), x.fmtM(end, 10) + x.perUnit(), x.fmtM(mw, 10)] };
    }
    return { band: [mw, mw], text: [x.fmtM(mw, 10), null, x.fmtM(mw, 10)] };
  }

  // The 32% bracket starts at 120,000 zł of income; pension and disability ZUS stop at the yearly ceiling.
  function top(x) {
    const s = x.s;
    const at = (P.pit.thr + P.kup) / (1 - P.zus.em - P.zus.rentEe - P.zus.chor) / s.factor;
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), x.fmtM(P.zus.cap / s.factor, 50) + x.perUnit(), eur(P.zus.cap)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'PLN', nextStep: 500,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 23,
    features: { cadre: true, pa: true, partsHint: true },
    communes: false,
    local: null,
    state: { salary: 7000, factor: 12, minRole: 'min', cadre: false, pa: true, commune: '', region: '', local: 0, vatRate: 23, size: '' },
    urlFields: { young: ['cadre', 'bool'], zr: ['pa', 'bool'], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => {
      const allow = p.regime === 'mp' ? dietaNet() : 0;
      return { net: computeMinister(p.lo, plain, env, p.regime).net + allow, allow };
    },
    segLabels: { zr: 'zrLost' }, recvLabels: { ir: 'irRefund' },
    partsHint: x => x.s.children > 0 ? t('partsHint', eur(P.b800 * x.s.children)) : '',
    polNote: p => p.regime === 'mp' ? 'polNote.mp' : 'polNote.minister',
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'reg',
    refKeys: ['er', 'ee', 'nfz', 'ir', 'child', 'zr', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
