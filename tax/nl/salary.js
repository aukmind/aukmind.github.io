// Dutch salary rules for 2026, below AOW age. Loaded by ../index.html?country=nl.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const SIZES = ['small', 'big'];
  const MIN_ROLES = ['stas', 'minister', 'pm'];

  const P = {
    // Box 1 below AOW age; the first bracket includes the 27.65% national insurance premiums.
    brackets: [[38883, .3575], [78426, .3756], [INF, .495]],
    vv: { rate: .2765, cap: 38883, aow: .179, anw: .001, wlz: .0965 },
    ahk: { max: 3115, from: 29736, taper: .06398 },
    ak: [[11965, 0, .08324], [25845, 996, .31009], [45592, 5300, .0195], [132920, 5685, -.0651]],
    iack: { from: 6239, rate: .1145, max: 3032 },
    // Employer premiums on wages up to the maximum premium wage.
    er: { cap: 79409, awf: .0274, aof: { small: .0627, big: .0763 }, whk: .0152, zvw: .061 },
    zt: { single: 1548, couple: 2952, from: 29736, taper: .1373 },
    kgb: { child: 2580, single: 3416, from: { single: 29736, couple: 39141 }, taper: .076 },
    minWage: 14.71,
    mpAllow: 3532.82,
  };
  const ROLE_PAY = { pm: 211552.31, minister: 211552.31, stas: 197608.17 };
  const MP_PAY = 145248;
  // Full-time minimum wage at 40 h/week; CPB modal wage and mean wage per FTE (modal ≈ 79% of it), monthly with holiday pay spread out.
  const REF_WAGES = [
    { key: 'min', m: P.minWage * 40 * 52 / 12, year: 2026, color: '--w-min' },
    { key: 'med', m: 48000 / 12.96, year: 2026, color: '--w-med' },
    { key: 'avg', m: 48000 / .79 / 12.96, year: 2026, color: '--w-avg' },
  ];

  const DOC_MIN = 'https://www.rijksoverheid.nl/onderwerpen/beloningen-bestuurders/salaris-minister-staatssecretaris-en-bestuurders-provincies-en-gemeenten';
  const DOC_MP = 'https://salaristabel.nl/salaris/tweede-kamerlid';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: ROLE_PAY.pm, hi: ROLE_PAY.pm, url: DOC_MIN },
    { kind: 'stat', key: 'stas', icon: '📎', regime: 'stas', lo: ROLE_PAY.stas, hi: ROLE_PAY.stas, url: DOC_MIN },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: MP_PAY, hi: MP_PAY, url: DOC_MP },
    { kind: 'gov', key: 'wnt', icon: '📏', lo: 262000, hi: 262000, url: DOC_MIN },
    { kind: 'gov', name: 'Olaf Sleijpen', role: 'dnb', lo: 450000, hi: 450000, url: 'https://www.rijksoverheid.nl/actueel/nieuws/2025/06/13/benoeming-president-van-de-nederlandsche-bank' },
    { kind: 'corp', name: 'Wouter Koolmees', role: 'ns', lo: 479730, hi: 562838, url: 'https://nsannualreport.nl/annual-report-2025/financial-statements/consolidated-financial-statement/3-personnel-costs' },
  ];

  const SRC = {
    rates: 'https://www.belastingdienst.nl/wps/wcm/connect/nl/voorlopige-aanslag/content/voorlopige-aanslag-tarieven-en-heffingskortingen',
    bp2026: 'https://www.eerstekamer.nl/wetsvoorstel/36812_belastingplan_2026',
    premies: 'https://www.randstad.nl/werkgevers/hr-wet-en-regelgeving/werkgeverslasten-en-subsidies/sociale-zekerheid/volksverzekeringen',
    lonen: 'https://www.vanoers.nl/app/uploads/Special-Lonen-2026.pdf',
    zt: 'https://www.belastingdienst.nl/wps/wcm/connect/nl/zorgtoeslag/content/hoeveel-zorgtoeslag',
    kgb: 'https://help.afas.nl/help/NL/SE/Tax_Surtax_ChlBdg.htm',
    wml: 'https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon',
    modaal: 'https://www.cpb.nl/macro-economische-verkenning-mev-2026',
    vat: 'https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/btw-tarief-van-21-procent-9-procent-of-0-procent',
    minSal: DOC_MIN,
    mpPay: DOC_MP,
  };

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const ahkOf = inc => Math.max(0, P.ahk.max - P.ahk.taper * Math.max(0, inc - P.ahk.from));
  function akOf(inc) {
    let lo = 0;
    for (const [hi, base, r] of P.ak) { if (inc < hi) return Math.max(0, base + r * (inc - lo)); lo = hi; }
    return 0;
  }
  const iackOf = inc => inc < P.iack.from ? 0 : Math.min(P.iack.max, P.iack.rate * (inc - P.iack.from));

  // One person's wage tax on box 1 income. Credits can't exceed the tax; they come off the premium and tax parts pro rata.
  function personTax(inc, getsIack) {
    const sl = slices(inc, P.brackets);
    const gross = sl.reduce((tot, b) => tot + b.amt, 0);
    const vvGross = P.vv.rate * Math.min(inc, P.vv.cap);
    const irGross = gross - vvGross;
    const ahk = ahkOf(inc), ak = akOf(inc), iack = getsIack ? iackOf(inc) : 0;
    const credits = ahk + ak + iack, used = Math.min(credits, gross);
    const vvCredit = Math.min(vvGross, used * P.vv.rate / P.brackets[0][1]);
    return { inc, slices: sl, gross, vvGross, irGross, ahk, ak, iack, credits, used, lost: credits - used,
      vv: vvGross - vvCredit, ir: irGross - (used - vvCredit), tax: gross - used };
  }

  // Each partner is taxed alone; the combination credit goes to the lower earner, or to a single parent.
  function householdTax(mine, partner, kids) {
    if (partner == null) { const me = personTax(mine, kids > 0); return { me, them: null, total: me.tax }; }
    const meLow = mine <= partner;
    const me = personTax(mine, kids > 0 && meLow), them = personTax(partner, kids > 0 && !meLow);
    return { me, them, total: me.tax + them.tax };
  }

  // Yearly health-care allowance and child budget for a household's combined income; all children taken as under 12.
  function toeslagen(inc, couple, kids) {
    const zt = Math.max(0, (couple ? P.zt.couple : P.zt.single) - P.zt.taper * Math.max(0, inc - P.zt.from));
    const kgbMax = kids > 0 ? P.kgb.child * kids + (couple ? 0 : P.kgb.single) : 0;
    const kgb = Math.max(0, kgbMax - P.kgb.taper * Math.max(0, inc - P.kgb.from[couple ? 'couple' : 'single']));
    return { zt, kgb, kgbMax, total: zt + kgb };
  }

  // Your share = the household with your pay minus the household without it.
  function incomeTaxes(G, s, env) {
    const couple = s.household === 'joint', kids = s.children, pG = couple ? env.partner : null;
    const hh = householdTax(G, pG, kids);
    const wo = couple ? householdTax(0, pG, kids) : null;
    const tax = hh.total - (wo ? wo.total : 0);
    const vv = hh.me.vv + (hh.them ? hh.them.vv - wo.them.vv : 0);
    let tsl = 0, tsDet = null, tsWo = null;
    if (s.pa && s.regime !== 'minister') {
      tsDet = toeslagen(G + (pG || 0), couple, kids);
      // As for France's prime d'activité, what an out-of-work household would get isn't counted as taken away by your job.
      tsWo = pG > 0 ? toeslagen(pG, couple, kids) : null;
      tsl = tsDet.total - (tsWo ? tsWo.total : 0);
    }
    return { hh, wo, tax, vv, ir: tax - vv, tsl, tsDet, tsWo };
  }

  function employerSide(G, size) {
    const base = Math.min(G, P.er.cap), e = P.er;
    const awf = e.awf * base, aof = e.aof[size] * base, whk = e.whk * base, zvw = e.zvw * base;
    return { base, awf, aof, whk, zvw, er: awf + aof + whk };
  }

  // Ministers and MPs aren't employees: no unemployment or disability premiums, the State pays the Zvw levy.
  function computeMinister(G, s, env, role = s.minRole) {
    const tax = incomeTaxes(G, { ...s, regime: 'minister', pa: false }, env);
    const zvw = P.er.zvw * Math.min(G, P.er.cap);
    const net = G - tax.tax;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + zvw, net, tax, zvw, role, vatShare, regime: 'minister', u: { m: G / 12 },
      parts: { er: 0, zvw, vv: tax.vv, ir: tax.ir, tsl: 0, vat } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const tax = incomeTaxes(G, s, env);
    const emp = employerSide(G, s.size);
    const net = G - tax.tax + tax.tsl;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + emp.er + emp.zvw, net, u: { m: G / s.factor }, tax, emp, vatShare,
      parts: { er: emp.er, zvw: emp.zvw, vv: tax.vv, ir: tax.ir, tsl: -tax.tsl, vat } };
  }

  const COMP_KEYS = ['er', 'zvw', 'vv', 'ir', 'tsl', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', zvw: 'var(--k-vm)', vv: 'var(--k-ee)', ir: 'var(--k-ir)', tsl: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'zvw', 'vv', 'ir', 'tsl', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'zvw', 'vv', 'ir', 'tsl'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['vv', 'ir', 'tsl'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const pctTot = (r, v) => tot(`${t('total')} ${pct(v / r.G, 2)}`, v);
    const taxTable = (p, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${row(t('tip.box1Income'), p.inc)}
      ${p.slices.map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 2)}`, b.amt)).join('')}
      ${row('− ' + t('bd.ahk'), -Math.min(p.ahk, p.gross))}
      ${p.ak > 0 ? row('− ' + t('bd.ak'), -Math.min(p.ak, Math.max(0, p.gross - p.ahk))) : ''}
      ${p.iack > 0 ? row('− ' + t('bd.iack'), -Math.min(p.iack, Math.max(0, p.gross - p.ahk - p.ak))) : ''}
      ${tot(t('tip.taxPerson'), p.tax)}`;
    const creditTip = (k, body, calc) => r => {
      const me = r && r.tax && r.tax.hh && r.tax.hh.me;
      return `<h4>${t('bd.' + k)}</h4><p>${body}</p>${me ? `<p>${t('tip.yours', eur(calc(me)))}${me.lost > .5 ? ' ' + t('tip.creditLost', eur(me.lost)) : ''}</p>` : ''}${sources('rates')}`;
    };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('minSal', 'mpPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>`,
      zvw: r => `<h4>${t('comp.zvw')}</h4><p>${t('tip.minZvw')}</p>${r ? `<table>${row(`${pct(P.er.zvw, 2)} × ${eur(Math.min(r.G, P.er.cap))}`, r.parts.zvw)}</table>` : ''}${sources('lonen')}`,
      tsl: () => `<h4>${t('comp.tsl')}</h4><p>${t('tip.minTsl')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('minSal', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      'factor12.96': () => `<h4>${t('tip.monthsPaid', num(12.96, 2))}</h4><p>${t('tip.f1296')}</p>`,
      'factor13.96': () => `<h4>${t('tip.monthsPaid', num(13.96, 2))}</h4><p>${t('tip.f1396')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('rates', 'zt', 'kgb')}`,
      paToggle: () => `<h4>${t('comp.tsl')}</h4><p>${t('tip.paToggle')}</p>${sources('zt', 'kgb')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('lonen')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), num(s.factor, 2), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${row(t('comp.zvw'), r.parts.zvw)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r && r.emp ? `<table>
          ${row(`${t('bd.awf')} ${pct(P.er.awf, 2)} × ${eur(r.emp.base)}`, r.emp.awf)}
          ${row(`${t('bd.aof')} ${pct(P.er.aof[s.size], 2)} × ${eur(r.emp.base)}`, r.emp.aof)}
          ${row(`${t('bd.whk')} ${pct(P.er.whk, 2)} × ${eur(r.emp.base)}`, r.emp.whk)}
          ${pctTot(r, r.emp.er)}</table>` : ''}${sources('lonen')}`,
      awf: () => `<h4>${t('bd.awf')}</h4><p>${t('tip.awf')}</p>${sources('lonen')}`,
      aof: () => `<h4>${t('bd.aof')}</h4><p>${t('tip.aof')}</p>${sources('lonen')}`,
      whk: () => `<h4>${t('bd.whk')}</h4><p>${t('tip.whk')}</p>${sources('lonen')}`,
      zvw: r => `<h4>${t('comp.zvw')}</h4><p>${t('tip.zvw')}</p>${r && r.emp ? `<table>${row(`${pct(P.er.zvw, 2)} × ${eur(r.emp.base)}`, r.emp.zvw)}</table>` : ''}${sources('lonen')}`,
      vv: r => `<h4>${t('comp.vv')}</h4><p>${t('tip.vv')}</p>${r ? `<table>
          ${row(`${pct(P.vv.rate, 2)} × ${eur(Math.min(r.G, P.vv.cap))}`, r.tax.hh.me.vvGross)}
          ${row('− ' + t('tip.vvCredits'), r.tax.hh.me.vv - r.tax.hh.me.vvGross)}
          ${tot(t('youPay'), r.tax.hh.me.vv)}</table>` : ''}<p class="m">${t('tip.vvM')}</p>${sources('premies', 'rates')}`,
      vvGross: r => `<h4>${t('bd.vvGross')}</h4><p>${t('tip.vv')}</p>${sources('premies')}`,
      irGross: () => `<h4>${t('bd.irGross')}</h4><p>${t('tip.irGross')}</p>${sources('rates', 'bp2026')}`,
      ahk: creditTip('ahk', t('tip.ahk'), me => Math.min(me.ahk, me.gross)),
      ak: creditTip('ak', t('tip.ak'), me => me.ak),
      iack: creditTip('iack', t('tip.iack'), me => me.iack),
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('rates')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>
          ${taxTable(h.me, h.them ? t('tip.irYou') : '')}
          ${h.them ? taxTable(h.them, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.total)}${row('− ' + t('tip.irWithout'), -r.tax.wo.total)}${tot(t('tip.irYours'), r.tax.tax)}` : ''}
          ${row('− ' + t('comp.vv'), -r.tax.vv)}${tot(t('comp.ir'), r.parts.ir)}
          </table>${sources('rates', 'bp2026')}`;
      },
      tsl: r => {
        const d = r && r.tax && r.tax.tsDet, w = r && r.tax && r.tax.tsWo;
        return `<h4>${t('comp.tsl')}</h4><p>${t('tip.tsl')}</p>${d ? `<table>
          ${row(t('tip.zt'), d.zt)}
          ${d.kgbMax ? row(t('tip.kgb'), d.kgb) : ''}
          ${w && w.total ? row('− ' + t('tip.tslWithout'), -w.total) : ''}
          ${tot(t('tip.tslYear'), -r.parts.tsl)}</table>` : ''}
          <p class="m">${t('tip.tslM')}</p>${sources('zt', 'kgb')}`;
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
    const p = r.parts, me = r.tax.hh.me, min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (!min) L.push(
      { op: '+', k: 'awf', label: t('bd.awf'), v: r.emp.awf, tax: r.emp.awf, cls: 'sub' },
      { op: '+', k: 'aof', label: t('bd.aof'), v: r.emp.aof, tax: r.emp.aof, cls: 'sub' },
      { op: '+', k: 'whk', label: t('bd.whk'), v: r.emp.whk, tax: r.emp.whk, cls: 'sub' },
    );
    L.push(
      { op: '+', k: 'zvw', label: t('comp.zvw'), v: p.zvw, tax: p.zvw, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    // Your own wage tax; for a couple, the difference your pay makes to your partner's credits is added after.
    const credit = (k, v) => v > .5 ? L.push({ op: '+', k, label: t('bd.' + k), v, tax: -v, cls: 'sub' }) : 0;
    L.push(
      { op: '−', k: 'vvGross', label: t('bd.vvGross'), v: me.vvGross, tax: me.vvGross },
      { op: '−', k: 'irGross', label: t('bd.irGross'), v: me.irGross, tax: me.irGross },
    );
    const ahk = Math.min(me.ahk, me.gross), ak = Math.min(me.ak, me.gross - ahk), iack = Math.min(me.iack, me.gross - ahk - ak);
    credit('ahk', ahk); credit('ak', ak); credit('iack', iack);
    const partnerEffect = r.tax.tax - me.tax;
    if (Math.abs(partnerEffect) > .5) L.push({ op: partnerEffect > 0 ? '−' : '+', k: 'ir', label: t('bd.partnerEffect'), v: Math.abs(partnerEffect), tax: partnerEffect, cls: 'sub' });
    if (Math.abs(p.tsl) > .5) L.push({ op: p.tsl < 0 ? '+' : '−', k: 'tsl', label: t('comp.tsl'), v: Math.abs(p.tsl), tax: p.tsl });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // From the minimum wage to where the allowances run out; without them, the credits' build-up and taper.
  function trap(x) {
    const s = x.s, wml = P.minWage * 40 * 52 / 12;
    const tsEnd = s.pa && s.regime !== 'minister'
      ? x.firstMonthly(m => m > wml && !(compute(m * s.factor, s, x.env()).tax.tsDet || { total: 0 }).total, wml, 30000) : null;
    if (!tsEnd || tsEnd <= wml + 1) return { band: [wml, wml], text: [x.fmtM(wml, 10), null, null] };
    return { band: [wml, tsEnd], text: [x.fmtM(wml, 10), x.fmtM(tsEnd, 10) + x.perUnit(), s.children > 0 ? eur(s.children * P.kgb.child + (s.household === 'joint' ? 0 : P.kgb.single)) : null] };
  }

  // Top bracket from €78,426, while the labour credit keeps tapering until €132,920.
  function top(x) {
    const s = x.s, f = s.factor;
    return {
      at: P.brackets[1][0] / f,
      text: [x.fmtM(P.brackets[1][0] / f, 50) + x.perUnit(), x.fmtM(P.ak[3][0] / f, 50) + x.perUnit(), pct(P.brackets[2][1] - P.ak[3][2], 2), pct(P.brackets[2][1], 1)],
    };
  }

  const FACTORS = [12, 12.96, 13.96];
  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    regions: [], sizes: SIZES, minRoles: MIN_ROLES, factors: FACTORS, factorDigits: 2, vatStandard: 21,
    features: { pa: true },
    communes: false,
    local: null,
    state: { salary: 3500, factor: 12.96, minRole: 'minister', pa: true, commune: '', region: '', local: 0, vatRate: 21, size: 'big' },
    urlFields: {
      months: ['factor', 'num', FACTORS], ts: ['pa', 'bool'], size: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    minSalary: role => Math.round(ROLE_PAY[role]),
    env: s => ({ partner: s.household === 'joint' ? Math.max(0, Number(s.partnerGross) || 0) : null }),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: p.regime === 'mp' ? P.mpAllow : 0 }),
    segLabels: { tsl: 'tslLost' }, recvLabels: { tsl: 'tslReceived' },
    polNote: p => p.regime === 'mp' ? 'polNote.mp' : 'polNote.minister',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'minSal',
    refKeys: ['er', 'ir', 'credits', 'tsl', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
