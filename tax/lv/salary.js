// Latvian salary rules for income year 2026. Loaded by ../index.html?country=lv.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['mp', 'minister', 'pm'];

  const P = {
    cap: 105300,
    low: .255, high: .33,
    brackets: [[105300, .255], [INF, .33]],
    extra: { rate: .03, from: 200000 },
    ntm: 6600,
    dep: 3000,
    ee: .105, er: .2359,
    // Above the cap the 34.09% becomes a 25% solidarity tax: the 9.09-point overpayment goes back to the employer.
    sn: { rate: .25, ee: .105, er: .145, iin: .10 },
  };
  const MIN_WAGE = 780;

  // Monthly gross: minimum wage 2026, CSP full-time median and mean for Q2 2026.
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 1527, year: 2026, color: '--w-med' },
    { key: 'avg', m: 1886, year: 2026, color: '--w-avg' },
  ];

  // Monthly salary, unchanged from 2025: the 2026 budget froze officials' pay.
  const ROLE = { pm: { m: 8659 }, minister: { m: 7670 }, mp: { m: 4330 } };
  const DOC_PAY = 'https://bnn-news.com/salaries-of-saeima-mps-and-ministers-rise-despite-budget-constraints-262547';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: ROLE.pm.m * 12, hi: ROLE.pm.m * 12, url: DOC_PAY },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: ROLE.minister.m * 12, hi: ROLE.minister.m * 12, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: ROLE.mp.m * 12, hi: ROLE.mp.m * 12, url: 'https://eng.lsm.lv/article/politics/saeima/30.07.2026-does-the-saeima-provide-good-value-for-money.a656862/' },
    { kind: 'gov', name: 'Edgars Rinkēvičs', role: 'president', lo: 8659 * 12, hi: 8659 * 12, url: DOC_PAY },
  ];

  const SRC = {
    fm: 'https://www.fm.gov.lv/en/changes-taxation-and-finances-2026',
    rates: 'https://ifinanses.lv/uploads/Nodoklu_likmes_5_gadi_2026.pdf',
    vid: 'https://www.vid.gov.lv/lv/media/27996/download',
    iin: 'https://likumi.lv/ta/id/56880-par-iedzivotaju-ienakuma-nodokli',
    sn: 'https://www.fm.gov.lv/en/solidarity-tax',
    snLaw: 'https://likumi.lv/doc.php?id=278636',
    wages: 'https://lvportals.lv/dienaskartiba/393948-videjais-atalgojums-pirms-nodoklu-nomaksas-si-gada-2-ceturksni-1886-eiro-2026',
    polPay: DOC_PAY,
  };

  const employee = G => {
    const vsa = P.ee * Math.min(G, P.cap), sn = P.sn.ee * Math.max(0, G - P.cap);
    return { G, vsa, sn, ins: vsa + sn, own: G - vsa - sn };
  };
  const employerSide = G => {
    const vsa = P.er * Math.min(G, P.cap), sn = P.sn.er * Math.max(0, G - P.cap);
    return { vsa, sn, er: vsa + sn };
  };

  // Annual tax of one person with `deps` dependants claimed. The 33% band starts at the cap on gross pay,
  // the way VID applies it; deductions come off the 25.5% part first.
  function personTax(u, deps) {
    const G = u.G, ntm = Math.min(P.ntm, u.own), depUsed = Math.min(deps * P.dep, u.own - ntm);
    const T = Math.max(0, u.own - ntm - depUsed);
    const high = Math.min(T, Math.max(0, G - P.cap)), low = T - high;
    const extra = P.extra.rate * Math.max(0, u.own - P.extra.from);
    const snCredit = P.sn.iin * Math.max(0, G - P.cap);
    const raw = P.low * low + P.high * high + extra;
    return { G, ntm, deps, depUsed, T, low, high, extra, snCredit, raw, tax: raw - snCredit };
  }

  // A couple puts each child on whichever parent saves the household the most.
  function householdTax(mine, partner, kids) {
    if (!partner) {
      const me = personTax(mine, kids), me0 = personTax(mine, 0);
      return { me, them: null, total: me.tax, pre: me0.tax, kidsMine: kids };
    }
    const pre = personTax(mine, 0).tax + personTax(partner, 0).tax;
    let best = null;
    for (let c = 0; c <= kids; c++) {
      const me = personTax(mine, c), them = personTax(partner, kids - c);
      const sum = me.tax + them.tax;
      if (!best || sum < best.total - 1e-9) best = { me, them, total: sum, pre, kidsMine: c };
    }
    return best;
  }

  const none = employee(0);

  // Your share = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', pu = couple ? env.partner : null;
    const hh = householdTax(u, pu, s.children);
    const wo = couple ? householdTax(none, pu, s.children) : null;
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
    const net = G - u.ins - tax.ir - tax.kids;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + emp.er, net, u, tax, emp, vatShare, regime: s.regime === 'minister' ? 'minister' : undefined,
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

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const capped = G => Math.min(G, P.cap), over = G => Math.max(0, G - P.cap);
    const irTable = (p, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${row(`${pct(P.low, 1)} × ${eur(p.low)}`, P.low * p.low)}
      ${p.high > 0 ? row(`${pct(P.high, 0)} × ${eur(p.high)}`, P.high * p.high) : ''}
      ${p.extra > 0 ? row(t('tip.irExtra'), p.extra) : ''}
      ${p.snCredit > 0 ? row('− ' + t('bd.snCredit'), -p.snCredit) : ''}
      ${tot(t('tip.irPre'), p.raw - p.snCredit)}`;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('polPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('polPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('iin')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.cap))}</p>${r ? `<table>
          ${row(`${t('bd.erVsa')} ${pct(P.er, 2)} × ${eur(capped(r.G))}`, r.emp.vsa)}
          ${r.emp.sn > 0 ? row(`${t('bd.erSn')} ${pct(P.sn.er, 1)} × ${eur(over(r.G))}`, r.emp.sn) : ''}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}${sources('fm', 'sn')}`,
      erVsa: () => `<h4>${t('bd.erVsa')}</h4><p>${t('tip.erVsa', eur(P.cap))}</p>${sources('fm')}`,
      erSn: () => `<h4>${t('bd.erSn')}</h4><p>${t('tip.sn', eur(P.cap))}</p>${sources('sn', 'snLaw')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.cap))}</p>${r ? `<table>
          ${row(`${t('bd.eeVsa')} ${pct(P.ee, 1)} × ${eur(capped(r.G))}`, r.u.vsa)}
          ${r.u.sn > 0 ? row(`${t('bd.eeSn')} ${pct(P.sn.ee, 1)} × ${eur(over(r.G))}`, r.u.sn) : ''}
          ${tot(t('youPay'), r.u.ins)}</table>` : ''}${sources('fm', 'sn')}`,
      eeVsa: () => `<h4>${t('bd.eeVsa')}</h4><p>${t('tip.eeVsa', eur(P.cap))}</p>${sources('fm')}`,
      eeSn: () => `<h4>${t('bd.eeSn')}</h4><p>${t('tip.sn', eur(P.cap))}</p>${sources('sn', 'snLaw')}`,
      taxable: () => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable')}</p>${sources('vid')}`,
      ntm: () => `<h4>${t('bd.ntm')}</h4><p>${t('tip.ntm', eur(P.ntm / 12), eur(P.ntm))}</p>${sources('fm')}`,
      deps: () => `<h4>${t('bd.deps')}</h4><p>${t('tip.deps', eur(P.dep / 12))}</p>${sources('fm')}`,
      snCredit: () => `<h4>${t('bd.snCredit')}</h4><p>${t('tip.snCredit', eur(P.cap))}</p>${sources('iin', 'snLaw')}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort', eur(P.cap), eur(P.extra.from))}</p>${sources('iin', 'vid')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM', eur(P.cap))}</p><table>
          ${irTable(personTax(r.u, 0), h.them ? t('tip.irYou') : '')}
          ${h.them ? irTable(personTax(x.env().partner, 0), t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.pre)}${row('− ' + t('tip.irWithout'), -r.tax.wo.pre)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${sources('iin', 'vid')}`;
      },
      kids: r => {
        const h = r && r.tax.hh;
        return `<h4>${t('comp.kids')}</h4><p>${t('tip.kids', eur(P.dep / 12), eur(P.dep))}</p>${h && s.children ? `<table>
          ${row(t('tip.kidsAll', s.children), s.children * P.dep)}
          ${h.them ? row(t('tip.kidsMine'), h.kidsMine * P.dep) : ''}
          ${row(t('tip.kidsUsedMe'), h.me.depUsed)}
          ${h.them ? row(t('tip.kidsUsedThem'), h.them.depUsed) : ''}
          ${tot(t('tip.irYours'), -r.parts.kids)}</table>
          ${h.me.depUsed + (h.them ? h.them.depUsed : 0) < s.children * P.dep - .5 ? `<p class="m">${t('tip.kidsLostNote')}</p>` : ''}` : ''}${sources('fm')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('rates')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const p = r.parts, min = r.regime === 'minister', me = r.tax.hh.me;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'erVsa', label: t('bd.erVsa'), v: r.emp.vsa, tax: r.emp.vsa, cls: 'sub' },
    ];
    if (r.emp.sn > 0) L.push({ op: '+', k: 'erSn', label: t('bd.erSn'), v: r.emp.sn, tax: r.emp.sn, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'eeVsa', label: t('bd.eeVsa'), v: r.u.vsa, tax: r.u.vsa },
    );
    if (r.u.sn > 0) L.push({ op: '−', k: 'eeSn', label: t('bd.eeSn'), v: r.u.sn, tax: r.u.sn });
    L.push({ op: '', k: 'ntm', label: t('bd.ntm'), v: me.ntm, cls: 'sub' });
    if (me.depUsed > .5) L.push({ op: '', k: 'deps', label: t('bd.deps'), v: me.depUsed, cls: 'sub' });
    L.push({ op: '', k: 'taxable', label: t('bd.taxable'), v: me.T, cls: 'sub' });
    if (me.snCredit > 0) L.push({ op: '', k: 'snCredit', label: t('bd.snCredit'), v: me.snCredit, cls: 'sub' });
    L.push({ op: p.ir < 0 ? '+' : '−', k: 'ir', label: t('comp.ir'), v: Math.abs(p.ir), tax: p.ir });
    if (Math.abs(p.kids) > .5) L.push({ op: p.kids < 0 ? '+' : '−', k: 'kids', label: t(p.kids < 0 ? 'kidsReceived' : 'kidsLost'), v: Math.abs(p.kids), tax: p.kids });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // No benefit tapers with pay: contributions start at the first euro, income tax once pay beats the non-taxable minimum.
  function trap(x) {
    const s = x.s, m = MIN_WAGE * 12 / s.factor;
    const zero = P.ntm / (1 - P.ee) / s.factor;
    return { band: [m, m], text: [x.fmtM(m, 100), null, x.fmtM(zero, 100) + x.perUnit()] };
  }

  // 33% and the solidarity tax from the cap, then the 3% surcharge on top earners.
  function top(x) {
    const s = x.s;
    return { at: P.cap / s.factor, text: [x.fmtM(P.cap / s.factor, 100) + x.perUnit(), x.fmtM(P.extra.from / (1 - P.ee) / s.factor, 100) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 21,
    features: {},
    communes: false,
    local: null,
    state: { salary: 1900, factor: 12, minRole: 'minister', commune: '', region: '', local: 0, vatRate: 21, size: '' },
    urlFields: { role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => ROLE[role].m * 12,
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: 0 }),
    segLabels: { kids: 'kidsLost' }, recvLabels: { kids: 'kidsReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'polPay',
    refKeys: ['er', 'ee', 'ir', 'kids', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
