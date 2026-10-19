// Slovak salary rules for income year 2026. Loaded by ../index.html?country=sk.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['mp', 'minister', 'pm'];
  const SIZES = ['none', 'spouse'];

  const P = {
    zm: 284.13,
    cap: 16764 * 12,
    // Rates on the tax base, after the allowances.
    brackets: [[43983.32, .19], [60349.21, .25], [75010.32, .30], [INF, .35]],
    nczd: { full: 5966.73, upTo: 26083.13, k: 14661.11 },
    spouse: { full: 5455.30, k: 20116.40, upTo: 43983.32 },
    bonus: { u15: 1200, u18: 600, from: 27432, caps: [.29, .36, .43, .50, .57, .64] },
    ee: { soc: .094, hlth: .05 },
    er: { soc: .244, acc: .008, hlth: .11 },
    official: .10,
  };
  const MIN_WAGE = 915;

  // Monthly gross: minimum wage 2026, ŠÚ SR mean for 2025. No recent median was reachable.
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'avg', m: 1620, year: 2025, color: '--w-avg' },
  ];

  // 2026 pay: MPs frozen at their 2025 salary; government members and the President follow 3 × the 2025 average wage (4,860).
  const ROLE = {
    pm: { m: 7290 + 746.87, allow: 4590 },
    minister: { m: 7290, allow: 1824 },
    mp: { m: 4115, allow: 3201 },
    president: { m: 19440, allow: 1327.76 },
  };
  const DOC_PAY = 'https://www.autora.sk/zz/1993/120/';
  const MP_PAY = 'https://spravy.stvr.sk/spravy-po-minute/plat-poslancov-ostava-rovnaky-zarabaju-vyse-6800-eur/';
  const GOV_PAY = 'https://www.noviny.sk/slovensko/1183250-hnutie-slovensko-plat-prezidenta-pellegriniho-ma-stupnut-nad-20-tisic-eur';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: ROLE.pm.m * 12, hi: ROLE.pm.m * 12, url: GOV_PAY },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: ROLE.minister.m * 12, hi: ROLE.minister.m * 12, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: ROLE.mp.m * 12, hi: ROLE.mp.m * 12, url: MP_PAY },
    { kind: 'gov', name: 'Peter Pellegrini', role: 'president', regime: 'president', lo: ROLE.president.m * 12, hi: ROLE.president.m * 12, url: GOV_PAY },
  ];

  const SRC = {
    rates: 'https://podpora.financnasprava.sk/081400-Sadzba-dane-z-pr%C3%ADjmov-fyzickej-osoby-za-rok-2026',
    payroll: 'https://www.forvismazars.com/sk/sk/postrehy/publikacie-a-podujatia/newslettre/payroll-alert-konsolidacia-2026-mzdove-dopady',
    odvody: 'https://www.podnikajte.sk/socialne-a-zdravotne-odvody/odvody-zamestnanca-zamestnavatela-od-2026',
    bonus: 'https://podpora.financnasprava.sk/549090-Da%C5%88ov%C3%BD-bonus-na-vy%C5%BEivovan%C3%A9-die%C5%A5a-v-roku-2026',
    official: 'https://podpora.financnasprava.sk/365340-Osobitn%C3%A1-sadzba-dane',
    wages: 'https://www.podnikajte.sk/zamestnanci-a-hr/priemerna-mesacna-mzda-2025-vyska-dosledky',
    vat: 'https://www.financnasprava.sk/sk/podnikatelia/dane/dan-z-pridanej-hodnoty',
    polPay: DOC_PAY,
    mpPay: MP_PAY,
  };

  const employee = G => {
    const soc = P.ee.soc * Math.min(G, P.cap), hlth = P.ee.hlth * G;
    return { G, soc, hlth, ins: soc + hlth, base: G - soc - hlth };
  };
  const employerSide = G => {
    const soc = P.er.soc * Math.min(G, P.cap), acc = P.er.acc * G, hlth = P.er.hlth * G;
    return { soc, acc, hlth, er: soc + acc + hlth };
  };

  const rawTax = tb => {
    let lo = 0, tax = 0;
    for (const [hi, r] of P.brackets) { tax += r * Math.max(0, Math.min(tb, hi) - lo); lo = hi; }
    return tax;
  };
  const payerAllowance = base => base <= P.nczd.upTo ? P.nczd.full : Math.max(0, P.nczd.k - base / 3);
  const spouseAllowance = (base, inc) => Math.max(0, (base <= P.spouse.upTo ? P.spouse.full : P.spouse.k - base / 3) - inc);

  // Each child's bonus loses a tenth of the base above 1.5 average wages, then the total is capped at a share of the base.
  function childBonus(base, n15, n17) {
    const n = n15 + n17;
    if (!n || base <= 0) return 0;
    const cut = Math.max(0, base - P.bonus.from) / 10;
    const sum = n15 * Math.max(0, P.bonus.u15 - cut) + n17 * Math.max(0, P.bonus.u18 - cut);
    return Math.min(sum, P.bonus.caps[Math.min(n, 6) - 1] * base);
  }

  function personTax(p, spouseInc, n15, n17) {
    const base = p.base;
    const payer = Math.min(base, payerAllowance(base));
    const sp = spouseInc == null ? 0 : Math.min(base - payer, spouseAllowance(base, spouseInc));
    const tb = Math.max(0, base - payer - sp);
    const pre = rawTax(tb);
    const bonus = childBonus(base, n15, n17);
    return { G: p.G, base, payer, sp, tb, pre, n15, n17, bonus, tax: pre - bonus };
  }

  // A couple picks who claims each child and who claims the spouse allowance; the household keeps the cheapest split.
  function householdTax(mine, partner, kids, older, spouseOk) {
    const k15 = Math.max(0, kids - older);
    if (!partner) {
      const me = personTax(mine, null, k15, older);
      return { me, them: null, total: me.tax, pre: me.pre, bonus: me.bonus };
    }
    let best = null;
    const claims = spouseOk ? ['none', 'me', 'them'] : ['none'];
    for (const c of claims) for (let a = 0; a <= k15; a++) for (let b = 0; b <= older; b++) {
      const me = personTax(mine, c === 'me' ? partner.base : null, a, b);
      const them = personTax(partner, c === 'them' ? mine.base : null, k15 - a, older - b);
      const total = me.tax + them.tax;
      if (!best || total < best.total - 1e-9) best = { me, them, total, pre: me.pre + them.pre, bonus: me.bonus + them.bonus };
    }
    return best;
  }

  const none = { G: 0, soc: 0, hlth: 0, ins: 0, base: 0 };

  // Your share = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', pu = couple ? env.partner : null;
    const older = Math.min(s.under3 || 0, s.children);
    const spouseOk = couple && s.size === 'spouse';
    const hh = householdTax(u, pu, s.children, older, spouseOk);
    const wo = couple ? householdTax(none, pu, s.children, older, spouseOk) : null;
    const ir = hh.pre - (wo ? wo.pre : 0);
    const kids = -(hh.bonus - (wo ? wo.bonus : 0));
    return { hh, wo, ir, kids };
  }

  function compute(G, s, env) {
    const u = employee(G);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const emp = employerSide(G);
    const min = s.regime === 'minister';
    const pol = min ? P.official * G : 0;
    const net = G - u.ins - tax.ir - tax.kids - pol;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + emp.er, net, u, tax, emp, vatShare, regime: min ? 'minister' : undefined,
      parts: { er: emp.er, ee: u.ins, ir: tax.ir, pol, kids: tax.kids, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'pol', 'kids', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', pol: 'var(--k-csg)', kids: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'pol', 'kids', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'pol', 'kids'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'pol', 'kids'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  // Gross pay that gives a tax base, below the social insurance ceiling.
  const grossOf = base => base / (1 - P.ee.soc - P.ee.hlth);

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const capped = G => Math.min(G, P.cap);
    const bands = tb => {
      let lo = 0;
      return P.brackets.map(([hi, r]) => {
        const part = Math.max(0, Math.min(tb, hi) - lo); lo = hi;
        return part > 0 ? row(`${pct(r, 0)} × ${eur(part)}`, r * part) : '';
      }).join('');
    };
    const irTable = (p, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${row(t('bd.taxable'), p.base)}
      ${row('− ' + t('bd.nczd'), -p.payer)}
      ${p.sp > 0 ? row('− ' + t('bd.spouse'), -p.sp) : ''}
      ${bands(p.tb)}
      ${tot(t('tip.irPre'), p.pre)}`;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(ROLE[s.minRole].allow * 12))}</p>${sources('polPay', 'mpPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('polPay', 'mpPay', 'official')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.spouse.full))}</p>${sources('payroll', 'bonus')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size', eur(P.spouse.full), eur(P.spouse.upTo))}</p>${sources('payroll')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.cap / 12))}</p>${r ? `<table>
          ${row(`${t('bd.erSoc')} ${pct(P.er.soc, 1)} × ${eur(capped(r.G))}`, r.emp.soc)}
          ${row(`${t('bd.erAcc')} ${pct(P.er.acc, 1)} × ${eur(r.G)}`, r.emp.acc)}
          ${row(`${t('bd.erHlth')} ${pct(P.er.hlth, 0)} × ${eur(r.G)}`, r.emp.hlth)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 1)}`, r.parts.er)}</table>` : ''}${sources('odvody')}`,
      erSoc: () => `<h4>${t('bd.erSoc')}</h4><p>${t('tip.erSoc', eur(P.cap / 12))}</p>${sources('odvody')}`,
      erAcc: () => `<h4>${t('bd.erAcc')}</h4><p>${t('tip.erAcc')}</p>${sources('odvody')}`,
      erHlth: () => `<h4>${t('bd.erHlth')}</h4><p>${t('tip.erHlth')}</p>${sources('odvody')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.cap / 12))}</p>${r ? `<table>
          ${row(`${t('bd.eeSoc')} ${pct(P.ee.soc, 1)} × ${eur(capped(r.G))}`, r.u.soc)}
          ${row(`${t('bd.eeHlth')} ${pct(P.ee.hlth, 0)} × ${eur(r.G)}`, r.u.hlth)}
          ${tot(t('youPay'), r.u.ins)}</table>` : ''}${sources('odvody')}`,
      eeSoc: () => `<h4>${t('bd.eeSoc')}</h4><p>${t('tip.eeSoc', eur(P.cap / 12))}</p>${sources('odvody')}`,
      eeHlth: () => `<h4>${t('bd.eeHlth')}</h4><p>${t('tip.eeHlth')}</p>${sources('payroll')}`,
      taxable: () => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable')}</p>`,
      nczd: () => `<h4>${t('bd.nczd')}</h4><p>${t('tip.nczd', eur(P.nczd.full), eur(P.nczd.upTo), eur(P.spouse.upTo))}</p>${sources('payroll')}`,
      spouse: () => `<h4>${t('bd.spouse')}</h4><p>${t('tip.size', eur(P.spouse.full), eur(P.spouse.upTo))}</p>${sources('payroll')}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('rates', 'payroll')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>
          ${irTable(h.me, h.them ? t('tip.irYou') : '')}
          ${h.them ? irTable(h.them, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.pre)}${row('− ' + t('tip.irWithout'), -r.tax.wo.pre)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${sources('rates', 'payroll')}`;
      },
      pol: r => `<h4>${t('comp.pol')}</h4><p>${t('tip.pol')}</p>${r && r.parts.pol ? `<table>${row(`${pct(P.official, 0)} × ${eur(r.G)}`, r.parts.pol)}</table>` : ''}${sources('official')}`,
      kids: r => {
        const h = r && r.tax.hh;
        return `<h4>${t('comp.kids')}</h4><p>${t('tip.kids', eur(P.bonus.u15 / 12), eur(P.bonus.u18 / 12), eur(P.bonus.from))}</p>${h && s.children ? `<table>
          ${row(t('tip.kidsMe', h.me.n15, h.me.n17), h.me.bonus)}
          ${h.them ? row(t('tip.kidsThem', h.them.n15, h.them.n17), h.them.bonus) : ''}
          ${h.them ? row('− ' + t('tip.kidsWithout'), -r.tax.wo.bonus) : ''}
          ${tot(t('tip.irYours'), -r.parts.kids)}</table>` : ''}${sources('bonus')}`;
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
    const p = r.parts, min = r.regime === 'minister', me = r.tax.hh.me;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'erSoc', label: t('bd.erSoc'), v: r.emp.soc, tax: r.emp.soc, cls: 'sub' },
      { op: '+', k: 'erAcc', label: t('bd.erAcc'), v: r.emp.acc, tax: r.emp.acc, cls: 'sub' },
      { op: '+', k: 'erHlth', label: t('bd.erHlth'), v: r.emp.hlth, tax: r.emp.hlth, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'eeSoc', label: t('bd.eeSoc'), v: r.u.soc, tax: r.u.soc },
      { op: '−', k: 'eeHlth', label: t('bd.eeHlth'), v: r.u.hlth, tax: r.u.hlth },
      { op: '', k: 'taxable', label: t('bd.taxable'), v: me.base, cls: 'sub' },
      { op: '', k: 'nczd', label: t('bd.nczd'), v: me.payer, cls: 'sub' },
    ];
    if (me.sp > 0) L.push({ op: '', k: 'spouse', label: t('bd.spouse'), v: me.sp, cls: 'sub' });
    L.push({ op: p.ir < 0 ? '+' : '−', k: 'ir', label: t('comp.ir'), v: Math.abs(p.ir), tax: p.ir });
    if (p.pol > .5) L.push({ op: '−', k: 'pol', label: t('comp.pol'), v: p.pol, tax: p.pol });
    if (Math.abs(p.kids) > .5) L.push({ op: p.kids < 0 ? '+' : '−', k: 'kids', label: t(p.kids < 0 ? 'kidsReceived' : 'kidsLost'), v: Math.abs(p.kids), tax: p.kids });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    if (min) L.push({ op: '+', k: 'allow', label: t('bd.allow'), v: ROLE[x.s.minRole].allow * 12, cls: 'sub' });
    return L;
  }

  // No benefit that tapers with pay; the shaded band is where the taxpayer allowance shrinks, which lifts the rate.
  function trap(x) {
    const s = x.s;
    const m0 = grossOf(P.nczd.upTo) / s.factor, m1 = grossOf(P.spouse.upTo) / s.factor;
    return { band: [m0, m1], text: [x.fmtM(m0, 100) + x.perUnit(), x.fmtM(m1, 100) + x.perUnit(), x.fmtM(MIN_WAGE * 12 / s.factor, 100), s.children > 0 ? x.fmtM(grossOf(P.bonus.from) / s.factor, 100) + x.perUnit() : null] };
  }

  // 25%, 30% and 35% bands, then the social insurance ceiling where the marginal rate drops back.
  function top(x) {
    const s = x.s, f = v => x.fmtM(v / s.factor, 100) + x.perUnit();
    const g35 = grossOf(P.brackets[2][0]);
    return { at: g35 / s.factor, text: [f(grossOf(P.brackets[0][0])), f(P.cap), f(grossOf(P.brackets[1][0])), f(g35)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: [], sizes: SIZES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 23,
    features: { under3: true },
    communes: false,
    local: null,
    state: { salary: 1800, factor: 12, minRole: 'minister', under3: 0, commune: '', region: '', local: 0, vatRate: 23, size: 'none' },
    urlFields: { older: ['under3', 'num'], spouse: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => ROLE[role].m * 12,
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: ROLE[p.regime].allow * 12 }),
    segLabels: { kids: 'kidsLost' }, recvLabels: { kids: 'kidsReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'polPay',
    refKeys: ['er', 'ee', 'ir', 'kids', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
