// Lithuanian salary rules for income year 2026. Loaded by ../index.html?country=lt.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const PILLARS = ['none', 'p3'];
  const CONTRACTS = ['open', 'fixed'];
  const MIN_ROLES = ['mp', 'min', 'pm', 'pres'];

  const MMA = 1153;
  const VDU = 2312.15;
  const P = {
    npdMax: 747, npdTaper: .49,
    vsd: .1252, psd: .0698, p2: .03,
    // Employee VSD stops at 60 VDU a year, summed over all employers; PSD and the employer's share don't.
    cap: 60 * VDU,
    er: { open: .0177, fixed: .0249 },
    brackets: [[36 * VDU, .20], [60 * VDU, .25], [INF, .32]],
  };

  const REF_WAGES = [
    { key: 'min', m: MMA, year: 2026, color: '--w-min' },
    { key: 'med', m: 1934, year: 2025, color: '--w-med' },
    { key: 'avg', m: 2480, year: 2025, color: '--w-avg' },
  ];

  // Base amount × the coefficient set by the Law on the Remuneration of State Politicians.
  const BASE = 1798;
  const MONTHLY = { pres: 5.8, pm: 4.9, min: 4.3, mp: 3.5 };
  const GOV = Object.fromEntries(Object.entries(MONTHLY).map(([k, c]) => [k, Math.round(c * BASE) * 12]));
  const DOC_PAY = 'https://www.dirba.lt/straipsniai/politiku-atlyginimai-2026-metais-kiek-uzdirba-617.html';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '⭐', lo: GOV.pres, hi: GOV.pres, url: DOC_PAY },
    { kind: 'stat', key: 'pm', icon: '🏛️', lo: GOV.pm, hi: GOV.pm, url: DOC_PAY },
    { kind: 'stat', key: 'min', icon: '💼', lo: GOV.min, hi: GOV.min, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '📎', lo: GOV.mp, hi: GOV.mp, url: DOC_PAY },
  ];

  const SRC = {
    gpm: 'https://kpmg.com/lt/lt/izvalgos/mokesciu-ir-teises-naujienlaiskiai/2026-sausis.html',
    npd: 'https://avizo.lt/naujienos/vmi-atnaujino-gpmi-20-straipsnio-komentara-npd-taikymo-tvarka-ir-skaiciavimo-pokyciai-2026-m',
    rates: 'https://www.visosskaiciuokles.lt/finansiniai-rodikliai.html',
    cap: 'https://taxsummaries.pwc.com/lithuania/corporate/other-taxes',
    mma: 'https://lrv.lt/media/viesa/saugykla/2025/10/jp41Tb9CdJQ.pdf',
    wages: 'https://www.lrt.lt/en/news-in-english/19/2849256/average-monthly-wage-in-lithuania-rises-to-eur1-514-sodra',
    vat: 'https://taxsummaries.pwc.com/lithuania/corporate/other-taxes',
    pay: DOC_PAY,
  };

  // Yearly NPD for even monthly pay: 12 × (747 − 0.49 × (monthly pay − MMA)).
  const npd = G => Math.max(0, Math.min(12 * P.npdMax, 12 * P.npdMax - P.npdTaper * (G - 12 * MMA)));

  function gpmTax(base) {
    let lo = 0, tax = 0;
    for (const [hi, r] of P.brackets) {
      if (base > lo) tax += (Math.min(base, hi) - lo) * r;
      lo = hi;
    }
    return tax;
  }

  function compute(G, s) {
    const capped = Math.min(G, P.cap);
    const vsd = P.vsd * capped, psd = P.psd * G;
    const p2 = s.region === 'p3' ? P.p2 * capped : 0;
    const allowance = Math.min(G, npd(G));
    const base = G - allowance;
    const gpm = gpmTax(base);
    const erRate = P.er[s.size] || P.er.open;
    const er = erRate * G;
    const u = { m: G / s.factor, vsd, psd, p2, capped, allowance, base, gpm, erRate };
    const net = G - vsd - psd - p2 - gpm;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + er, net, u, er, vatShare,
      parts: { er, ee: vsd + psd, p2, ir: gpm, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'p2', 'ir', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', p2: 'var(--k-com)', ir: 'var(--k-ir)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'p2', 'ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'p2', 'ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'p2', 'ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('gpm')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('rates')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>${tot(`${pct(r.u.erRate, 2)} × ${eur(r.G)}`, r.er)}</table>` : ''}${sources('rates')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.cap))}</p>${r ? `<table>
        ${row(`${pct(P.vsd, 2)} × ${eur(r.u.capped)}`, r.u.vsd)}
        ${row(`${pct(P.psd, 2)} × ${eur(r.G)}`, r.u.psd)}
        ${tot(t('comp.ee'), r.parts.ee)}</table>` : ''}${sources('rates', 'cap')}`,
      p2: r => `<h4>${t('comp.p2')}</h4><p>${t('tip.p2')}</p>${r && r.u.p2 ? `<table>${tot(`3% × ${eur(r.u.capped)}`, r.u.p2)}</table>` : ''}${sources('gpm')}`,
      npd: r => `<h4>${t('bd.npd')}</h4><p>${t('tip.npd', eur(P.npdMax), eur(MMA))}</p>${r ? `<p>−${eur(r.u.allowance)}</p>` : ''}${sources('npd')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.base)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.ir', eur(P.brackets[0][0]), eur(P.brackets[1][0]))}</p>${sources('gpm')}`;
        let lo = 0;
        const lines = P.brackets.map(([hi, rate]) => {
          const part = Math.max(0, Math.min(r.u.base, hi) - lo);
          const out = part > 0 ? row(`${pct(rate, 0)} × ${eur(part)}`, part * rate) : '';
          lo = hi;
          return out;
        }).join('');
        return `<h4>${t('comp.ir')}</h4><p>${t('tip.ir', eur(P.brackets[0][0]), eur(P.brackets[1][0]))}</p><table>${lines}${tot(t('comp.ir'), r.u.gpm)}</table>${sources('gpm')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const p = r.parts;
    const L = [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
    ];
    if (p.p2 > 0) L.push({ op: '−', k: 'p2', label: t('comp.p2'), v: p.p2, tax: p.p2 });
    if (r.u.allowance > 0) L.push({ op: '', k: 'npd', label: t('bd.npd'), v: r.u.allowance, cls: 'sub' });
    L.push(
      { op: '', k: 'taxable', label: t('bd.taxable'), v: r.u.base, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // NPD shrinks by 49 cents per euro above the minimum wage: GPM bites at 29.8% on each extra euro until it's gone.
  function trap(x) {
    const s = x.s, minM = MMA * 12 / s.factor, end = (MMA + P.npdMax / P.npdTaper) * 12 / s.factor;
    return { band: [minM, end], text: [x.fmtM(minM, 1), x.fmtM(end, 1)] };
  }

  // 25% from 36 VDU a year, 32% from 60 VDU, where VSD stops.
  function top(x) {
    const s = x.s;
    const a = P.brackets[0][0] / s.factor, b = P.brackets[1][0] / s.factor;
    return { at: a, text: [x.fmtM(a, 1) + x.perUnit(), x.fmtM(b, 1) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: PILLARS, sizes: CONTRACTS, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 21,
    features: {},
    communes: false,
    local: null,
    state: { salary: 2000, factor: 12, minRole: 'pm', commune: '', region: 'none', local: 0, vatRate: 21, size: 'open' },
    urlFields: { pillar: ['region', 'str', PILLARS], contract: ['size', 'str', CONTRACTS], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: () => t('src.pay'),
    polNoteLink: 'pay',
    refKeys: ['er', 'ee', 'ir', 'npd', 'p2', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
