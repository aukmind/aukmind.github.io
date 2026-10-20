// Austrian salary rules for 2026, as assessed for the year (Arbeitnehmerveranlagung). Loaded by ../index.html?country=at.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['b', 'k', 'noe', 'ooe', 's', 'st', 't', 'v', 'w'];
  const MIN_ROLES = ['ss', 'minister', 'vice', 'chancellor'];

  const P = {
    wk: 132,
    vab: 496, zus: 804, zusLo: 19761, zusHi: 30259,
    avab: [612, 828, 273], avabLimit: 7411,
    fb: 2000.16, kmb: 700, svr: .55,
    sz: { free: 620, freigrenze: 2615, bands: [[25000, .06], [50000, .27], [83333, .3575]] },
    hbgl: 6930, hbglSz: 13860, gfg: 551.10,
    ee: { kv: .0387, pv: .1025, av: .0295, ak: .005, wf: .005 },
    er: { kv: .0378, pv: .1255, av: .0295, uv: .011, wf: .005, iesg: .001 },
    // Employee unemployment insurance on low monthly pay (§2a AMPFG); the employer keeps paying 2.95%.
    avSteps: [[2225, 0], [2427, .01], [2630, .02]],
    bv: .0153, db: .037, ks: .03,
    dz: { b: .0040, k: .0037, noe: .0033, ooe: .0031, s: .0035, st: .0034, t: .0039, v: .0033, w: .0036 },
    brackets: [[13539, 0], [21992, .2], [36458, .3], [70365, .4], [104859, .48], [1e6, .5], [INF, .55]],
  };

  // Monthly gross over 14 payments: Statistik Austria, full-year full-time employees, 2024. No statutory minimum wage.
  const REF_WAGES = [
    { key: 'med', m: 54143 / 14, year: 2024, color: '--w-med' },
    { key: 'avg', m: 63918 / 14, year: 2024, color: '--w-avg' },
  ];

  // Monthly pay, 14 times a year; 2026 is a second pay freeze for federal politicians.
  const MONTHLY = { president: 26701, chancellor: 23840, vice: 20979, minister: 19072, ss: 17165, nrp: 20025, mp: 10351 };
  const GOV = Object.fromEntries(Object.entries(MONTHLY).map(([k, v]) => [k, v * 14]));
  const DOC_BBEZG = 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001475';
  const DOC_PAY = 'https://exxpress.at/politik/vom-kanzler-bis-zum-abgeordneten-so-viel-verdienen-politiker-2026/';
  const pol = (key, icon) => ({ kind: 'stat', key, icon, regime: key, lo: GOV[key], hi: GOV[key], url: key === 'ss' ? DOC_BBEZG : DOC_PAY });
  const POLITICIANS = [
    pol('president', '🏛️'), pol('chancellor', '⭐'), pol('vice', '🥈'), pol('nrp', '🔔'), pol('minister', '💼'), pol('ss', '📎'), pol('mp', '🗳️'),
  ];

  const SRC = {
    tariff: 'https://www.wko.at/steuern/einkommen-koerperschaftsteuer-2026',
    estg33: 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10004570&Paragraf=33',
    sz: 'https://www.wko.at/lohnverrechnung/sonstige-bezuege-steuerliche-behandlung',
    sv: 'https://www.wko.at/entlohnung/beitragswesen-dienstnehmer-2026',
    fb: 'https://www.bmf.gv.at/themen/steuern/arbeitnehmerveranlagung/steuertarif-steuerabsetzbetraege/familienbonusplus-faq.html',
    kmb: 'https://www.oesterreich.gv.at/lexicon/K/Seite.992745.html',
    stat: 'https://www.statistik.at/fileadmin/announcement/2025/12/20251217LST2024.pdf',
    vat: 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10004873&Paragraf=10',
    bbezg: DOC_BBEZG,
    polPay: DOC_PAY,
    freeze: 'https://orf.at/stories/3413369/',
  };

  function tariff(E) {
    let tax = 0, lo = 0;
    for (const [hi, r] of P.brackets) {
      if (E > lo) tax += (Math.min(E, hi) - lo) * r;
      lo = hi;
    }
    return tax;
  }
  const avRate = m => { for (const [hi, r] of P.avSteps) if (m <= hi) return r; return P.ee.av; };
  const zuschlag = E => E <= P.zusLo ? P.zus : E >= P.zusHi ? 0 : P.zus * (P.zusHi - E) / (P.zusHi - P.zusLo);
  const avabFor = kids => kids <= 0 ? 0 : kids === 1 ? P.avab[0] : P.avab[1] + P.avab[2] * (kids - 2);

  // Fixed-rate tax on the 13th and 14th month, after their own contributions.
  function szTaxOf(net) {
    let tax = 0, lo = P.sz.free;
    for (const [hi, r] of P.sz.bands) {
      if (net > lo) tax += (Math.min(net, hi) - lo) * r;
      lo = hi;
    }
    return { tax, excess: Math.max(0, net - P.sz.bands[P.sz.bands.length - 1][0]) };
  }

  // One person's pay for the year: contributions, the fixed-rate tax on the special payments, and Einkommen for the tariff.
  // Politicians (pol) pay health and pension insurance only.
  function person(G, f, region, isPol) {
    G = Math.max(0, G);
    const R = G * 12 / f, SZ = G - R, m = R / 12, nSz = f - 12;
    const gering = !isPol && G > 0 && m <= P.gfg;
    const e = P.ee, r = P.er;
    const avM = avRate(m), avS = nSz ? avRate(SZ / nSz) : 0;
    const baseR = gering ? 0 : Math.min(m, P.hbgl) * 12, baseS = gering ? 0 : Math.min(SZ, P.hbglSz);
    const eeRateR = isPol ? e.kv + e.pv : e.kv + e.pv + avM + e.ak + e.wf;
    const eeRateS = isPol ? e.kv + e.pv : e.kv + e.pv + avS;
    const erRateR = isPol ? r.kv + r.pv : r.kv + r.pv + r.av + r.uv + r.wf + r.iesg;
    const erRateS = isPol ? erRateR : erRateR - r.wf;
    const eeR = baseR * eeRateR, eeS = baseS * eeRateS;
    const erSv = gering ? r.uv * G : baseR * erRateR + baseS * erRateS;
    const bv = isPol ? 0 : P.bv * G;
    const db = isPol ? 0 : P.db * G, dz = isPol ? 0 : (P.dz[region] || 0) * G, ks = isPol ? 0 : P.ks * G;
    let szTax = 0, excess = 0;
    const szNet = SZ - eeS;
    if (SZ > 0 && R / 6 > P.sz.freigrenze) ({ tax: szTax, excess } = szTaxOf(szNet));
    const wk = Math.min(P.wk, Math.max(0, R - eeR));
    const E = Math.max(0, R - eeR - wk) + excess;
    return { G, f, m, R, SZ, gering, isPol, avM, eeR, eeS, ee: eeR + eeS, erSv, bv, db, dz, ks, pay: db + dz + ks,
      erTot: erSv + bv, szNet, szTax, excess, wk, E, worker: G > 0 };
  }

  // Tariff tax after the Absetzbeträge for one person, with the negative tax and the Kindermehrbetrag.
  function itax(u, kids, fbShare, avab, kmbOn) {
    const T = tariff(u.E);
    const fb = Math.min(T, P.fb * kids * fbShare);
    const T1 = T - fb;
    const vab = u.worker ? P.vab : 0, zus = u.worker ? zuschlag(u.E) : 0;
    const T2 = T1 - avab - vab - zus;
    const refund = T2 < 0 ? Math.min(-T2, avab + (u.worker ? Math.min(P.svr * u.eeR, P.vab + zus) : 0)) : 0;
    const kmb = kmbOn && u.worker ? Math.max(0, P.kmb * kids - T) : 0;
    const tax = (T2 < 0 ? -refund : T2) - kmb;
    return { T, fb, T1, avab, vab, zus, T2, refund, kmb, tax };
  }

  // Austria taxes each person on their own; a couple only shares the child credits.
  function household(u, p, kids) {
    if (!p) {
      const a = itax(u, kids, 1, u.worker ? avabFor(kids) : 0, kids > 0);
      return { you: a, partner: null, total: a.tax, alone: true };
    }
    let best = null;
    for (const share of [1, .5, 0]) {
      let avU = 0, avP = 0;
      if (kids > 0) {
        if (u.worker && p.E <= P.avabLimit && u.E >= p.E) avU = avabFor(kids);
        else if (p.worker && u.E <= P.avabLimit && p.E > u.E) avP = avabFor(kids);
      }
      let a = itax(u, kids, share, avU, avU > 0), b = itax(p, kids, 1 - share, avP, avP > 0);
      // Without the single-earner credit, the Kindermehrbetrag needs both partners under 700 € of tax, once per child.
      if (kids > 0 && !avU && !avP && a.T < P.kmb && b.T < P.kmb) {
        const ka = itax(u, kids, share, 0, true), kb = itax(p, kids, 1 - share, 0, true);
        if (ka.tax + b.tax <= a.tax + kb.tax) a = ka; else b = kb;
      }
      const total = a.tax + b.tax;
      if (!best || total < best.total - 1e-9) best = { you: a, partner: b, total, share };
    }
    return best;
  }

  function incomeTax(u, s, env) {
    const kids = s.children, joint = s.household === 'joint';
    const hh = household(u, joint ? env.partner : null, kids);
    const wo = joint ? household(person(0, 14, s.region, false), env.partner, kids) : null;
    return { hh, wo, ir: hh.total - (wo ? wo.total : 0) };
  }

  function finish(G, u, s, env, extra) {
    const tax = incomeTax(u, s, env);
    const net = G - u.ee - u.szTax - tax.ir;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + u.erTot + u.pay, net, u, tax, vatShare, ...extra,
      parts: { er: u.erTot, pay: u.pay, ee: u.ee, ir: tax.ir, sz: u.szTax, vat } };
  }

  function computeMinister(G, s, env, role = s.minRole) {
    return finish(G, person(G, 14, s.region, true), { ...s, regime: 'minister' }, env, { regime: 'minister', role });
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    return finish(G, person(G, s.factor, s.region, false), s, env, {});
  }

  const COMP_KEYS = ['er', 'pay', 'ee', 'ir', 'sz', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', pay: 'var(--k-vm)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', sz: 'var(--k-csg)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'pay', 'ee', 'ir', 'sz', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'pay', 'ee', 'ir', 'sz'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'sz'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const geringNote = r => r && r.u.gering ? `<p class="m">${t('tip.geringNote', eur2(P.gfg))}</p>` : '';
    const steps = a => `${row(t('tip.tarif'), a.T)}
      ${a.fb ? row('− ' + t('bd.fb'), -a.fb) : ''}
      ${a.avab ? row('− ' + t('bd.avab'), -a.avab) : ''}
      ${a.vab ? row('− ' + t('bd.vab'), -a.vab) : ''}
      ${a.zus > .5 ? row('− ' + t('bd.zus'), -a.zus) : ''}
      ${a.T2 < 0 ? row(t('tip.capped'), -a.refund) : ''}
      ${a.kmb ? row('− ' + t('bd.kmb'), -a.kmb) : ''}
      ${tot(t('tip.after'), a.tax)}`;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${r ? `<p>${t('tip.minGrossCalc', eur(r.G / 14), eur(r.G))}</p>` : ''}${sources('bbezg', 'polPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>`,
      pay: () => `<h4>${t('comp.pay')}</h4><p>${t('tip.minPay')}</p>`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.minEe')}</p>${r ? `<table>${row(t('bd.eeReg'), r.u.eeR)}${row(t('bd.eeSz'), r.u.eeS)}${tot(t('youPay'), r.u.ee)}</table>` : ''}`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('bbezg', 'polPay', 'freeze')}`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.f14')}</p>${sources('sz')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('estg33', 'fb')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('sv')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${row(t('comp.pay'), r.parts.pay)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r && r.G ? `<table>
          ${row(t(r.u.gering ? 'bd.uvOnly' : 'bd.erSv'), r.u.erSv)}${r.u.bv ? row(t('bd.bv'), r.u.bv) : ''}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}${geringNote(r)}${sources('sv')}`,
      erSv: () => `<h4>${t('bd.erSv')}</h4><p>${t('tip.erSv', eur(P.hbgl), eur(P.hbglSz))}</p>${sources('sv')}`,
      bv: () => `<h4>${t('bd.bv')}</h4><p>${t('tip.bv')}</p>${sources('sv')}`,
      pay: r => `<h4>${t('comp.pay')}</h4><p>${t('tip.pay', pct(P.dz[s.region], 2))}</p>${r && r.G ? `<table>
          ${row(t('bd.db'), r.u.db)}${row(t('bd.dz'), r.u.dz)}${row(t('bd.ks'), r.u.ks)}
          ${tot(`${t('total')} ${pct(r.parts.pay / r.G, 2)}`, r.parts.pay)}</table>` : ''}${sources('sv')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r && r.G ? `<table>
          ${row(t('bd.eeReg'), r.u.eeR)}${r.u.SZ ? row(t('bd.eeSz'), r.u.eeS) : ''}
          ${tot(t('youPay'), r.u.ee)}</table><p class="m">${t('tip.avNow', pct(r.u.avM, 2))}</p>` : ''}${geringNote(r)}${sources('sv')}`,
      eeReg: () => `<h4>${t('bd.eeReg')}</h4><p>${t('tip.eeReg', eur(P.hbgl))}</p>${sources('sv')}`,
      eeSz: () => `<h4>${t('bd.eeSz')}</h4><p>${t('tip.eeSz', eur(P.hbglSz))}</p>${sources('sv')}`,
      wk: () => `<h4>${t('bd.wk')}</h4><p>${t('tip.wk')}</p>`,
      einkommen: r => `<h4>${t('bd.einkommen')}</h4><p>${t('tip.einkommen')}</p>${r ? `<table>
          ${row(t('tip.regPay'), r.u.R)}${row('− ' + t('bd.eeReg'), -r.u.eeR)}${row('− ' + t('bd.wk'), -r.u.wk)}
          ${r.u.excess ? row('+ ' + t('tip.excess'), r.u.excess) : ''}${tot(t('bd.einkommen'), r.u.E)}</table>` : ''}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('tariff', 'estg33')}`;
        const d = r.tax;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t(d.wo ? 'tip.irJoint' : 'tip.irSingle')}</p><table>
          ${d.wo ? `<tr><td colspan="2"><b>${t('tip.you')}</b></td></tr>` : ''}${steps(d.hh.you)}
          ${d.wo ? `<tr><td colspan="2"><b>${t('tip.partner')}</b></td></tr>${steps(d.hh.partner)}
            ${tot(t('tip.irHousehold'), d.hh.total)}${row('− ' + t('tip.irWithout'), -d.wo.total)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${s.children ? `<p class="m">${t('tip.kidsNote', eur(P.fb))}</p>` : ''}${sources('tariff', 'estg33', 'fb', 'kmb')}`;
      },
      tarif: () => `<h4>${t('tip.tarif')}</h4><p>${t('tip.irShort')}</p>${sources('tariff')}`,
      fb: () => `<h4>${t('bd.fb')}</h4><p>${t('tip.fb', eur(P.fb))}</p>${sources('fb')}`,
      avab: () => `<h4>${t('bd.avab')}</h4><p>${t('tip.avab', eur(P.avab[0]), eur(P.avab[1]), eur(P.avab[2]), eur(P.avabLimit))}</p>${sources('estg33')}`,
      vab: () => `<h4>${t('bd.vab')}</h4><p>${t('tip.vab', eur(P.vab))}</p>${sources('estg33')}`,
      zus: () => `<h4>${t('bd.zus')}</h4><p>${t('tip.zus', eur(P.zus), eur(P.zusLo), eur(P.zusHi))}</p>${sources('estg33')}`,
      refund: () => `<h4>${t('bd.refund')}</h4><p>${t('tip.refund', eur(P.vab), eur(P.zus))}</p>${sources('estg33')}`,
      kmb: () => `<h4>${t('bd.kmb')}</h4><p>${t('tip.kmb', eur(P.kmb))}</p>${sources('kmb')}`,
      sz: r => `<h4>${t('comp.sz')}</h4><p>${t('tip.sz', eur(P.sz.free), eur(P.sz.freigrenze))}</p>${r && r.u.SZ ? `<table>
          ${row(t('tip.szGross'), r.u.SZ)}${row('− ' + t('bd.eeSz'), -r.u.eeS)}${tot(t('tip.szNet'), r.u.szNet)}
          ${tot(`${t('comp.sz')} ${r.u.szNet > 0 ? pct(r.u.szTax / r.u.szNet, 2) : ''}`, r.u.szTax)}</table>` : ''}${sources('sz')}`,
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
    const p = r.parts, u = r.u, min = r.regime === 'minister';
    const gross = { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G };
    const L = [gross];
    if (u.erSv) L.push({ op: '+', k: 'erSv', label: t(u.gering ? 'bd.uvOnly' : 'bd.erSv'), v: u.erSv, tax: u.erSv, cls: 'sub' });
    if (u.bv) L.push({ op: '+', k: 'bv', label: t('bd.bv'), v: u.bv, tax: u.bv, cls: 'sub' });
    if (u.pay) L.push({ op: '+', k: 'pay', label: t('comp.pay'), v: u.pay, tax: u.pay, cls: 'sub' });
    L.push({ op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' }, { ...gross });
    if (u.eeR) L.push({ op: '−', k: 'eeReg', label: t('bd.eeReg'), v: u.eeR, tax: u.eeR });
    if (u.eeS) L.push({ op: '−', k: 'eeSz', label: t('bd.eeSz'), v: u.eeS, tax: u.eeS });
    if (u.szTax) L.push({ op: '−', k: 'sz', label: t('comp.sz'), v: u.szTax, tax: u.szTax });
    L.push({ op: '', k: 'wk', label: t('bd.wk'), v: u.wk, cls: 'sub' });
    L.push({ op: '=', k: 'einkommen', label: t('bd.einkommen'), v: u.E, cls: 'sub' });
    const a = r.tax.hh.you;
    if (!r.tax.wo) {
      L.push({ op: '', k: 'tarif', label: t('tip.tarif'), v: a.T, cls: 'sub' });
      if (a.fb) L.push({ op: '−', k: 'fb', label: t('bd.fb'), v: -a.fb, cls: 'sub' });
      if (a.avab) L.push({ op: '−', k: 'avab', label: t('bd.avab'), v: -a.avab, cls: 'sub' });
      if (a.vab) L.push({ op: '−', k: 'vab', label: t('bd.vab'), v: -a.vab, cls: 'sub' });
      if (a.zus > .5) L.push({ op: '−', k: 'zus', label: t('bd.zus'), v: -a.zus, cls: 'sub' });
      if (a.T2 < 0) L.push({ op: '', k: 'refund', label: t('bd.refund'), v: -a.refund, cls: 'sub' });
      if (a.kmb) L.push({ op: '', k: 'kmb', label: t('bd.kmb'), v: -a.kmb, cls: 'sub' });
    }
    L.push({ op: '−', k: 'ir', label: t(p.ir < 0 ? 'irNeg' : r.tax.wo ? 'bd.irYours' : 'comp.ir'), v: p.ir, tax: p.ir });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low pay: no employee contributions up to the marginal-job limit, then full rates at once, softened by the unemployment steps and the refund.
  function trap(x) {
    return { band: [P.gfg, P.avSteps[P.avSteps.length - 1][0]], text: [x.fmtM(P.gfg, 1), x.fmtM(P.avSteps[P.avSteps.length - 1][0], 1) + x.perUnit()] };
  }

  // Where the 48% rate starts on the monthly salary, and the contribution ceiling.
  function top(x) {
    const s = x.s, env = x.env();
    const plain = { ...s, regime: 'employee', household: 'single', children: 0 };
    const at = x.firstMonthly(m => compute(m * s.factor, plain, env).u.E > 70365, 1000, 50000);
    if (!at) return null;
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), x.fmtM(P.hbgl, 1) + x.perUnit(), pct(.48, 0)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [14, 12], factorDigits: 0, vatStandard: 20,
    features: {},
    communes: false,
    local: null,
    currency: 'EUR', nextStep: 100,
    state: { salary: 3500, factor: 14, minRole: 'minister', commune: '', region: 'w', local: 0, vatRate: 20, size: '' },
    urlFields: { state: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES], months: ['factor', 'num', [14, 12]] },
    minSalary: role => GOV[role],
    env: s => ({ partner: person(Math.max(0, Number(s.partnerGross) || 0), 14, s.region, false) }),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: {}, recvLabels: { ir: 'irNeg' },
    polNote: () => 'polNote.pol',
    polTipNote: p => 'polNote.pol',
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'bbezg',
    refKeys: ['er', 'ee', 'sz', 'ir', 'kids', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
    GAPS: ['noCheck', 'assessment', 'dz', 'fixed', 'kmb', 'kidsAge', 'household', 'sz', 'gering', 'refWages', 'polPay', 'polSv', 'notIncl'],
  };
};
