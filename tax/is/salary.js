// Icelandic salary rules for income year 2026. Loaded by ../index.html?country=is.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const MIN_ROLES = ['minister', 'pm'];

  const P = {
    pen: .04, erPen: .115,
    tg: { general: .049, unemp: .0135, wage: .0005, market: .0005 },
    pf: 869898,
    b1: 5977464, b2: 16781400, r: [.1655, .2305, .3135],
    avgUts: 14.94,
    // Per-head fees charged at assessment, ages 16 to 69, above the tax-free limit.
    fees: { utv: 22200, fra: 14614, lo: 2617618 },
    // Barnabætur for a child aged 7 or more; couples get the joint amount, split in two.
    fam: { single: 514500, couple: 345000, under7: 130000, loSingle: 5844000, loCouple: 11688000, rate: .04 },
    brackets: [[5977464, .1655], [16781400, .2305], [Infinity, .3135]],
  };
  const TG = Object.values(P.tg).reduce((a, b) => a + b, 0);

  // Statistics Iceland, total monthly earnings of full-time employees, 2025.
  const REF_WAGES = [
    { key: 'med', m: 948000, year: 2025, color: '--w-med' },
    { key: 'avg', m: 1058000, year: 2025, color: '--w-avg' },
  ];

  // 2023 pay, + the 2024 and 2025 updates (44.9% since January 2019 in all) and +3.5% on 1 July 2026: estimates.
  const UP = 1.449 / 1.252 * 1.035;
  const GOV = {
    pm: Math.round(2780817 * UP) * 12, minister: Math.round(2510823 * UP) * 12,
    mp: Math.round(1378722 * UP) * 12, cb: Math.round(2277829 * UP) * 12,
  };
  const DOC_PAY = 'https://is.wikipedia.org/wiki/Laun_og_starfskj%C3%B6r_emb%C3%A6ttismanna,_r%C3%A1%C3%B0amanna_og_kj%C3%B6rinna_fulltr%C3%BAa_%C3%A1_%C3%8Dslandi';
  const DOC_2026 = 'https://www.stjornarradid.is/efst-a-baugi/frettir/stok-frett/2026-04-22-Rikisstjornin-leggur-til-breytingu-a-logum-um-laun-kjorinna-fulltrua-og-embaettismanna';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', lo: GOV.pm, hi: GOV.pm, url: DOC_2026 },
    { kind: 'stat', key: 'minister', icon: '💼', lo: GOV.minister, hi: GOV.minister, url: DOC_2026 },
    { kind: 'stat', key: 'mp', icon: '🏛️', lo: GOV.mp, hi: GOV.mp, url: DOC_2026 },
    { kind: 'gov', name: 'Ásgeir Jónsson', role: 'cb', lo: GOV.cb, hi: GOV.cb, url: DOC_PAY },
  ];

  const SRC = {
    brackets: 'https://www.skatturinn.is/einstaklingar/stadgreidsla/skattthrep/2026/skattthrep-i-stadgreidslu-2026',
    withholding: 'https://www.skatturinn.is/einstaklingar/stadgreidsla/stadgreidsla/2026/stadgreidsla-2026',
    utsvar: 'https://www.samband.is/tekjustofnar',
    pwc: 'https://taxsummaries.pwc.com/iceland/individual/other-taxes',
    utv: 'https://island.is/skattframtal-og-alagning-einstaklinga/utvarpsgjald',
    fra: 'https://island.is/skattframtal-og-alagning-einstaklinga/gjald-i-framkvaemdasjod-aldradra',
    bb: 'https://island.is/barnabaetur/fjarhaedir-barnabota',
    vat: 'https://taxsummaries.pwc.com/iceland/corporate/other-taxes',
    wages: 'https://px.hagstofa.is/pxen/pxweb/en/Samfelag/Samfelag__launogtekjur__1_laun__1_laun/VIN02004.px',
    minPay: DOC_2026,
    pay2023: DOC_PAY,
  };

  const pos = v => Math.max(0, v);

  function employeeSide(G) {
    const pen = P.pen * pos(G);
    return { G, m: 0, pen, taxable: pos(G) - pen };
  }

  function stateTax(y) {
    return P.r[0] * Math.min(y, P.b1) + P.r[1] * pos(Math.min(y, P.b2) - P.b1) + P.r[2] * pos(y - P.b2);
  }

  // The credit goes against state tax first, then útsvar. extra = the spouse's unused credit.
  function personTax(u, s, extra = 0) {
    const gross = stateTax(u.taxable), utsGross = s.local / 100 * u.taxable;
    const credit = P.pf + extra;
    const cS = Math.min(credit, gross), cU = Math.min(credit - cS, utsGross);
    const fees = u.taxable > P.fees.lo ? P.fees.utv + P.fees.fra : 0;
    return { gross, utsGross, credit, cS, cU, state: gross - cS, uts: utsGross - cU, fees, unused: credit - cS - cU };
  }

  function incomeTaxes(u, s, env) {
    const own = personTax(u, s);
    if (s.household !== 'joint') return { ...own, own, joint: null };
    const pu = env.partner, pOwn = personTax(pu, s);
    const me = personTax(u, s, pOwn.unused);
    const pWith = personTax(pu, s, own.unused);
    const zero = personTax(employeeSide(0), s);
    const pWithout = personTax(pu, s, zero.unused);
    const diff = k => me[k] + pWith[k] - zero[k] - pWithout[k];
    return { ...me, state: diff('state'), uts: diff('uts'), own: me, joint: true };
  }

  // Child benefit lost to your pay. Couples are tested on joint income, so your share = loss with your pay − loss without it.
  function famLoss(u, s, env) {
    const n = s.children, f = P.fam;
    if (!n) return { total: 0, benefit: 0, cut: 0 };
    if (s.household !== 'joint') {
      const benefit = n * f.single;
      const cut = Math.min(benefit, f.rate * pos(u.taxable - f.loSingle));
      return { total: cut, benefit, cut };
    }
    const benefit = n * f.couple, p = env.partner.taxable;
    const loss = y => Math.min(benefit, f.rate * pos(y + p - f.loCouple));
    return { total: loss(u.taxable) - loss(0), benefit, cut: loss(u.taxable) };
  }

  function compute(G, s, env) {
    const u = employeeSide(G);
    u.m = s.regime === 'minister' ? G / 12 : G / s.factor;
    const tax = incomeTaxes(u, s, env), fam = famLoss(u, s, env);
    const erPen = G > 0 ? P.erPen * G : 0, tg = G > 0 ? TG * G : 0, er = erPen + tg;
    const cost = G + er;
    const net = G - u.pen - tax.state - tax.uts - tax.fees - fam.total;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? pos(net) * vatShare : 0;
    return {
      G, cost, net, u, tax, fam, erPen, tg, vatShare, regime: s.regime === 'minister' ? 'minister' : undefined,
      parts: { er, ee: u.pen, stat: tax.state, kom: tax.uts, fees: tax.fees, fam: fam.total, vat },
    };
  }

  const own = (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 });

  const COMP_KEYS = ['er', 'ee', 'stat', 'kom', 'fees', 'fam', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', stat: 'var(--k-fed)', kom: 'var(--k-com)', fees: 'var(--k-csg)', fam: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'stat', 'kom', 'fees', 'fam', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'stat', 'kom', 'fees', 'fam'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'stat', 'kom', 'fees', 'fam'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(GOV.pm / 12), eur(GOV.minister / 12), eur(GOV.mp / 12))}</p>${sources('minPay', 'pay2023')}`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('minPay', 'pay2023')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.pf))}</p>${sources('withholding')}`,
      komRule: () => `<h4>${t('comp.kom')}</h4><p>${t('tip.komRule', num(x.localRange()[0], 2) + '%', num(x.localRange()[1], 2) + '%', num(P.avgUts, 2) + '%')}</p>${sources('utsvar')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), num(s.factor, 0), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>
          <tr><td>${t('er.pen')} (11.5%)</td><td>${eur(r.erPen)}</td></tr>
          <tr><td>${t('er.tg')} (${pct(TG, 2)})</td><td>${eur(r.tg)}</td></tr>
          <tr class="t"><td>${t('total')}</td><td>${eur(r.parts.er)}</td></tr></table>` : ''}
          <p class="m">${t('tip.erM')}</p>${sources('withholding', 'pwc')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<p>4% × ${eur(r.G)} = <b>${eur(r.parts.ee)}</b></p>` : ''}${sources('pwc')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.taxable)}</b>` : '')}</p>`,
      stat: r => {
        if (!r) return `<h4>${t('comp.stat')}</h4><p>${t('tip.statShort')}</p>${sources('brackets')}`;
        const o = r.tax.own, y = r.u.taxable;
        const row = (label, base, rr) => base > 0 ? `<tr><td>${label}: ${pct(rr, 2)} × ${eur(base)}</td><td>${eur(rr * base)}</td></tr>` : '';
        return `<h4>${t('comp.stat')}</h4><p class="m">${t('tip.statM', eur(P.b1), eur(P.b2))}</p><table>
          ${row(t('tax.b1'), Math.min(y, P.b1), P.r[0])}
          ${row(t('tax.b2'), pos(Math.min(y, P.b2) - P.b1), P.r[1])}
          ${row(t('tax.b3'), pos(y - P.b2), P.r[2])}
          <tr><td>− ${t('bd.credit')}</td><td>${eur(o.cS)}</td></tr>
          <tr class="t"><td>${t('total')}</td><td>${eur(o.state)}</td></tr>
          ${r.tax.joint ? `<tr class="t"><td>${t('tip.yourShare')}</td><td>${eur(r.parts.stat)}</td></tr>` : ''}</table>
          ${r.tax.joint ? `<p class="m">${t('tip.jointCalc')}</p>` : ''}${sources('brackets', 'withholding')}`;
      },
      kom: r => {
        const c = x.commune(), o = r && r.tax.own;
        return `<h4>${t('comp.kom')}</h4><p>${t('tip.kom', c && esc(c.name), num(s.local, 2) + '%')}</p>
          ${o ? `<table><tr><td>${num(s.local, 2)}% × ${eur(r.u.taxable)}</td><td>${eur(o.utsGross)}</td></tr>
            <tr><td>− ${t('tip.creditLeft')}</td><td>${eur(o.cU)}</td></tr>
            <tr class="t"><td>${t('total')}</td><td>${eur(o.uts)}</td></tr>
            ${r.tax.joint ? `<tr class="t"><td>${t('tip.yourShare')}</td><td>${eur(r.parts.kom)}</td></tr>` : ''}</table>` : ''}
          ${r && r.tax.joint ? `<p class="m">${t('tip.jointCalc')}</p>` : ''}${sources('utsvar')}`;
      },
      credit: r => `<h4>${t('bd.credit')}</h4><p>${t('tip.credit', eur(P.pf), eur(P.pf / 12))}</p>${r ? `<p><b>${eur(r.tax.own.cS + r.tax.own.cU)}</b>${t('aYear')}</p>` : ''}${sources('withholding')}`,
      fees: r => `<h4>${t('comp.fees')}</h4><p>${t('tip.fees', eur(P.fees.utv), eur(P.fees.fra), eur(P.fees.lo))}</p>${r ? `<p><b>${eur(r.parts.fees)}</b>${t('aYear')}</p>` : ''}${sources('utv', 'fra')}`,
      fam: r => {
        const f = r && r.fam;
        return `<h4>${t('comp.fam')}</h4><p>${t('tip.fam', eur(P.fam.single), eur(P.fam.loSingle), eur(P.fam.couple), eur(P.fam.loCouple))}</p>
          ${f && f.benefit ? `<table><tr><td>${t('tip.famBenefit')}</td><td>${eur(f.benefit)}</td></tr>
            <tr><td>− ${t('tip.famCut')}</td><td>${eur(f.cut)}</td></tr>
            ${r.tax.joint ? `<tr class="t"><td>${t('tip.yourShare')}</td><td>${eur(f.total)}</td></tr>` : ''}</table>` : ''}${sources('bb')}`;
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
    const s = x.s, p = r.parts, u = r.u, c = x.commune(), min = r.regime === 'minister', o = r.tax.own;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.taxable, cls: 'sub' },
      { op: '', k: 'stat', label: t('bd.stateGross'), v: o.gross, cls: 'sub' },
      { op: '', k: 'kom', label: `${t('bd.utsGross')} (${num(s.local, 2)}%${c ? ', ' + c.name : ''})`, v: o.utsGross, cls: 'sub' },
      { op: '', k: 'credit', label: t('bd.credit'), v: o.cS + o.cU, cls: 'sub' },
      { op: '−', k: 'stat', label: t('comp.stat'), v: p.stat, tax: p.stat },
      { op: '−', k: 'kom', label: t('comp.kom'), v: p.kom, tax: p.kom },
    ];
    if (p.fees > 0) L.push({ op: '−', k: 'fees', label: t('comp.fees'), v: p.fees, tax: p.fees });
    if (p.fam > .5 || p.fam < -.5) L.push({ op: '−', k: 'fam', label: t('comp.fam'), v: p.fam, tax: p.fam });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Below the point where the credit covers all income tax, only the pension is due.
  function trap(x) {
    const s = x.s;
    const free = P.pf / (P.r[0] + s.local / 100) / (1 - P.pen);
    const band = [0, free / s.factor];
    return { band, text: [x.fmtM(band[1], 1000) + x.perUnit(), eur(P.pf), x.fmtM(P.fees.lo / (1 - P.pen) / s.factor, 1000)] };
  }

  function top(x) {
    const s = x.s;
    const at = x.firstMonthly(m => employeeSide(m * s.factor).taxable > P.b1, 0, 1e8);
    if (!at) return null;
    const top3 = x.firstMonthly(m => employeeSide(m * s.factor).taxable > P.b2, 0, 1e8);
    return { at, text: [x.fmtM(at, 1000) + x.perUnit(), top3 ? x.fmtM(top3, 1000) + x.perUnit() : null, eur(P.b1), eur(P.b2)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'ISK', nextStep: 15000,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 24,
    features: {},
    state: { salary: 900000, factor: 12, minRole: 'minister', commune: '0000', region: '', local: 14.97, vatRate: 24, size: '' },
    urlFields: {
      commune: ['commune', 'str'], uts: ['local', 'num'], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'komLabel', tip: 'komRule', digits: 2, step: .01, range: list => list.length ? [Math.min(...list.map(c => c.rate)), Math.max(...list.map(c => c.rate))] : [12.44, 14.97], notDue: () => false, hideInMinister: false },
    parseCommunes: list => list.map(([name, rate, region, code]) => ({ name, rate, region: '', sub: region, id: code })),
    communeLabel: c => c.name,
    communeTag: c => `${num(c.rate, 2)}%`,
    communeHint: c => t('komHint', num(c.rate, 2) + '%', c.sub),
    minSalary: role => GOV[role],
    env: s => ({ partner: employeeSide(pos(Number(s.partnerGross) || 0)) }),
    compute, own,
    segLabels: {}, recvLabels: {},
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t(p.role ? 'src.pay2023' : 'src.minPay'),
    polNoteLink: 'minPay',
    refKeys: ['er', 'taxable', 'levels', 'credit', 'couple', 'fam', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
