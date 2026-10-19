// Swedish salary rules for income year 2026. Loaded by ../index.html?country=se.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const MIN_ROLES = ['minister', 'pm'];
  // The shell's employer-size row is used for the worker's age: it changes both employer fees and personal tax.
  const AGES = ['std', 'youth', 'senior'];
  const PBB = 59200, IBB = 83400;

  const P = {
    pbb: PBB,
    state: { at: 643000, r: .20 },
    pf: { r: .07, min: .423 * PBB, cap: 8.07 * IBB },
    ps: { r: .01, max: 1184 },
    fi: { lo: 40000, r: .0075, max: 1500 },
    er: { std: .3142, youth: .2081, youthCap: 25000, youthMonths: 9, senior: .1021 },
    // National averages, used when the rate is set by hand rather than from a municipality.
    begrAvg: .26, kyrkaAvg: 1.06,
    bb: { child: 1250, extra: [0, 0, 150, 730, 1740, 2990] },
    brackets: [[643000, 0], [Infinity, .20]],
  };

  // SCB wage structure statistics 2025, full-time equivalent, whole economy. Sweden has no statutory minimum wage.
  const REF_WAGES = [
    { key: 'med', m: 38300, year: 2025, color: '--w-med' },
    { key: 'avg', m: 42900, year: 2025, color: '--w-avg' },
  ];

  // Monthly fees from 1 July 2026 (ministers) and 1 January 2026 (MPs), × 12.
  const GOV = { pm: 211000 * 12, minister: 166500 * 12, mp: 81400 * 12 };
  const DOC_MIN = 'https://www.regeringen.se/regeringskansliet/arvoden-och-ersattningar/';
  const DOC_MP = 'https://riksdagen.se/sv/sa-funkar-riksdagen/ledamoternas-arvoden-och-villkor/ledamoternas-arvoden/';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_MIN },
    { kind: 'stat', key: 'speaker', icon: '🔔', regime: 'mp', lo: GOV.pm, hi: GOV.pm, url: DOC_MP },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_MIN },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.mp, hi: GOV.mp, url: DOC_MP },
    { kind: 'gov', name: 'Erik Thedéen', role: 'rb', lo: 3600000, hi: 3600000, url: 'https://www.riksbank.se/globalassets/media/rapporter/arsredovisning/svenska/arsredovisning-for-sveriges-riksbank-2025.pdf' },
    { kind: 'corp', name: 'Mikael Inglander', role: 'sbab', lo: 6642000, hi: 8603000, url: 'https://www.sbab.se/download/18.521ef89919cdfb3fcbc4ca/1773906586742/Ers%C3%A4ttningsrapport%202025.pdf' },
    { kind: 'corp', name: 'Erik Brandsma', role: 'sveaskog', lo: 5323000, hi: 7030000, url: 'https://www.sveaskog.se/globalassets/om-sveaskog/bolagsstyrning/ny-ersattningsrapport-2025.pdf' },
  ];

  const SRC = {
    skv433: 'https://skatteverket.se/download/18.1522bf3f19aea8075ba55c/1765284655603/teknisk-beskrivning-skv-433-2026-utgava-36.pdf',
    skvRates: 'https://www.skatteverket.se/privat/skatter/beloppochprocent/2026.4.1522bf3f19aea8075ba89.html',
    skvData: 'https://skatteverket.entryscape.net/rowstore/dataset/c67b320b-ffee-4876-b073-dd9236cd2a99',
    scb: 'https://www.scb.se/hitta-statistik/statistik-efter-amne/offentlig-ekonomi/finanser-for-den-kommunala-sektorn/kommunalskatterna/pong/statistiknyhet/kommunalskatterna-2026/',
    agFees: 'https://www.livsmedelsforetagen.se/app/uploads/2026/02/cirkular-avgifter-och-premier-for-ar-2026.pdf',
    youth: 'https://skatteverket.se/omoss/pressochmedia/nyheter/2026/nyheter/lagrearbetsgivaravgifterforungdomar.5.70685bee19c85dd5dd02b10.html',
    bb: 'https://www.forsakringskassan.se/privatperson/e-tjanster-blanketter-och-informationsmaterial/aktuella-belopp',
    vat: 'https://www.skatteverket.se/foretag/moms/saljavarorochtjanster/momssatspavarorochtjanster.4.58d555751259e4d66168000409.html',
    wages: 'https://www.ekonomifakta.se/sakomraden/arbetsmarknad/loner/medianlon-och-genomsnittslon-i-sverige_1210924.html',
    minPay: DOC_MIN,
    mpPay: DOC_MP,
    rb: 'https://www.riksbank.se/globalassets/media/rapporter/arsredovisning/svenska/arsredovisning-for-sveriges-riksbank-2025.pdf',
    sbab: 'https://www.sbab.se/download/18.521ef89919cdfb3fcbc4ca/1773906586742/Ers%C3%A4ttningsrapport%202025.pdf',
    sveaskog: 'https://www.sveaskog.se/globalassets/om-sveaskog/bolagsstyrning/ny-ersattningsrapport-2025.pdf',
  };

  const pos = v => Math.max(0, v);
  let FEES = {};
  const feesOf = s => FEES[s.commune] || { begr: P.begrAvg, kyrka: P.kyrkaAvg };

  // Grundavdrag on fastställd förvärvsinkomst; the tax office rounds it up to the next 100 kr, smoothed out here.
  function grund(f) {
    const b = PBB;
    if (f <= .99 * b) return .423 * b;
    if (f <= 2.72 * b) return .423 * b + .2 * (f - .99 * b);
    if (f <= 3.11 * b) return .77 * b;
    if (f <= 7.88 * b) return .77 * b - .1 * (f - 3.11 * b);
    return .293 * b;
  }
  // Extra grundavdrag for those 66 or older on 1 January.
  function forhojt(f) {
    const b = PBB;
    if (f <= .91 * b) return .687 * b;
    if (f <= 1.11 * b) return .885 * b - .2 * f;
    if (f <= 1.965 * b) return .6 * b + .057 * f;
    if (f <= 2.72 * b) return .333 * b + .1949 * f;
    if (f <= 3.11 * b) return .3949 * f - .212 * b;
    if (f <= 3.24 * b) return .4949 * f - .523 * b;
    if (f <= 5 * b) return .356 * f - .073 * b;
    if (f <= 7.88 * b) return .017 * b + .338 * f;
    if (f <= 8.08 * b) return .703 * b + .251 * f;
    if (f <= 11.16 * b) return 2.732 * b;
    if (f <= 12.84 * b) return 9.651 * b - .62 * f;
    return 1.691 * b;
  }
  // Jobbskatteavdrag, before the cap at what's left of the municipal tax.
  function jsa(f, ga, ki, senior) {
    const b = PBB;
    if (senior) return f <= 1.75 * b ? .22 * f : f <= 5.24 * b ? .2635 * b + .07 * f : .6293 * b;
    const base = f <= .91 * b ? f : f <= 3.24 * b ? .91 * b + .3874 * (f - .91 * b) : f <= 8.08 * b ? 1.813 * b + .251 * (f - 3.24 * b) : 3.027 * b;
    return pos(base - ga) * ki;
  }

  function employeeSide(G, age = 'std') {
    const f = pos(G), senior = age === 'senior';
    const gaOrd = grund(f);
    const ga = Math.min(f, gaOrd + (senior ? forhojt(f) : 0));
    const fee = f >= P.pf.min ? P.pf.r * Math.min(f, P.pf.cap) : 0;
    return { G, m: 0, f, gaOrd, ga, T: f - ga, fee, senior };
  }

  function incomeTaxes(u, s) {
    const ki = s.local / 100, fees = feesOf(s);
    const kommunal = ki * u.T, state = P.state.r * pos(u.T - P.state.at);
    const pfCredit = Math.min(u.fee, kommunal + state);
    const komLeft = pos(kommunal - pfCredit);
    const jsaFull = jsa(u.f, u.gaOrd, ki, u.senior);
    const jsaUsed = Math.min(jsaFull, komLeft);
    const fiFull = u.T <= P.fi.lo ? 0 : Math.min(P.fi.max, P.fi.r * (u.T - P.fi.lo));
    const fiUsed = Math.min(fiFull, komLeft - jsaUsed);
    const begr = fees.begr / 100 * u.T, kyrka = s.cadre ? fees.kyrka / 100 * u.T : 0;
    const ps = Math.min(P.ps.max, P.ps.r * u.T);
    return {
      ki, kommunal, state, pfCredit, jsaFull, jsaUsed, fiFull, fiUsed, begr, kyrka, ps, fees,
      kom: komLeft - jsaUsed - fiUsed, stat: state - pos(pfCredit - kommunal),
    };
  }

  // Barnbidrag doesn't depend on pay; a couple shares it half and half.
  function childBenefit(s) {
    const n = s.pa ? s.children : 0;
    if (!n) return { month: 0, share: 0, v: 0 };
    const extra = n <= 5 ? P.bb.extra[n] : P.bb.extra[5] + (n - 5) * P.bb.child;
    const month = n * P.bb.child + extra, share = s.household === 'joint' ? .5 : 1;
    return { month, share, v: 12 * month * share };
  }

  function employerFees(G, age) {
    const e = P.er;
    if (age === 'senior') return { er: e.senior * G, youthCut: 0 };
    const youthCut = age === 'youth' ? e.youthMonths / 12 * (e.std - e.youth) * Math.min(G, 12 * e.youthCap) : 0;
    return { er: e.std * G - youthCut, youthCut };
  }

  function compute(G, s) {
    const min = s.regime === 'minister', age = min ? 'std' : s.size;
    const u = employeeSide(G, age);
    u.m = G / (min ? 12 : s.factor);
    const tax = incomeTaxes(u, s), bb = childBenefit(s);
    const { er, youthCut } = G > 0 ? employerFees(G, age) : { er: 0, youthCut: 0 };
    const cost = G + er;
    const net = G - u.fee - tax.kom - tax.stat - tax.begr - tax.ps - tax.kyrka + bb.v;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? pos(net) * vatShare : 0;
    return {
      G, cost, net, u, tax, bb, youthCut, age, vatShare, regime: min ? 'minister' : undefined,
      parts: { er, pf: u.fee, kom: tax.kom, stat: tax.stat, fee: tax.begr + tax.ps, kyrka: tax.kyrka, bb: -bb.v, vat },
    };
  }

  const COMP_KEYS = ['er', 'pf', 'kom', 'stat', 'fee', 'kyrka', 'bb', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', pf: 'var(--k-ee)', kom: 'var(--k-com)', stat: 'var(--k-fed)', fee: 'var(--k-csg)', kyrka: 'var(--k-reg)', bb: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: COMP_KEYS, base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: COMP_KEYS.filter(k => k !== 'vat'), base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['pf', 'kom', 'stat', 'fee', 'kyrka', 'bb'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const rate = r => pct(r, Math.round(r * 1e4) % 100 ? 2 : 0);
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(GOV.pm / 12), eur(GOV.minister / 12))}</p>${sources('minPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const ageTip = () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('agFees', 'youth', 'skv433')}`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('minPay', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      'factor12.11': () => `<h4>${t('tip.monthsPaid', num(12.11, 2))}</h4><p>${t('tip.f1211')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>`,
      cadre: () => `<h4>${t('cadre')}</h4><p>${t('tip.church', num(feesOf({ ...s }).kyrka, 2) + '%')}</p>${sources('skvData')}`,
      paToggle: () => `<h4>${t('comp.bb')}</h4><p>${t('tip.bbToggle')}</p>${sources('bb')}`,
      komRule: () => `<h4>${t('comp.kom')}</h4><p>${t('tip.komRule', num(x.localRange()[0], 2) + '%', num(x.localRange()[1], 2) + '%')}</p>${sources('skvData', 'scb')}`,
      size: ageTip,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), num(s.factor, s.factor % 1 ? 2 : 0), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const age = r ? r.age : s.size;
        const head = age === 'senior' ? t('tip.erSenior') : t('tip.er');
        return `<h4>${t('comp.er')}</h4><p>${head}</p>
          ${r && r.G > 0 ? `<table>
            <tr><td>${pct(age === 'senior' ? P.er.senior : P.er.std, 2)} × ${eur(r.G)}</td><td>${eur(r.parts.er + r.youthCut)}</td></tr>
            ${r.youthCut > 0 ? `<tr><td>− ${t('tip.youthCut')}</td><td>−${eur(r.youthCut)}</td></tr>` : ''}
            <tr class="t"><td>${t('total')} ${pct(r.parts.er / r.G, 2)}</td><td>${eur(r.parts.er)}</td></tr></table>` : ''}
          <p class="m">${t('tip.erM')}</p>${sources('agFees', 'youth')}`;
      },
      pf: r => `<h4>${t('comp.pf')}</h4><p>${t('tip.pf', eur(P.pf.min), eur(P.pf.cap))}</p>
          ${r ? `<table><tr><td>7% × ${eur(Math.min(r.u.f, P.pf.cap))}</td><td>${eur(r.u.fee)}</td></tr>
            <tr><td>${t('tip.pfCredit')}</td><td>−${eur(r.tax.pfCredit)}</td></tr></table>` : ''}${sources('skv433')}`,
      ga: r => `<h4>${t('bd.ga')}</h4><p>${t('tip.ga', eur(.423 * PBB), eur(.77 * PBB), eur(.293 * PBB))}</p>
          ${r && r.u.senior ? `<p>${t('tip.gaSenior')}</p>` : ''}
          ${r ? `<p><b>${eur(r.u.ga)}</b></p>` : ''}${sources('skv433')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.T)}</b>` : '')}</p>`,
      kom: r => {
        const c = x.commune();
        if (!r) return `<h4>${t('comp.kom')}</h4><p>${t('tip.komShort')}</p>${sources('skvData', 'skv433')}`;
        const tx = r.tax;
        return `<h4>${t('comp.kom')}</h4><p>${t('tip.kom', c && esc(c.name), num(s.local, 2) + '%')}</p><table>
          <tr><td>${num(s.local, 2)}% × ${eur(r.u.T)}</td><td>${eur(tx.kommunal)}</td></tr>
          ${tx.pfCredit > 0 ? `<tr><td>− ${t('tip.pfCredit')}</td><td>−${eur(Math.min(tx.pfCredit, tx.kommunal))}</td></tr>` : ''}
          ${tx.jsaUsed > 0 ? `<tr><td>− ${t('bd.jsa')}${tx.jsaUsed < tx.jsaFull - .5 ? ` (${t('tip.capped', eur(tx.jsaFull))})` : ''}</td><td>−${eur(tx.jsaUsed)}</td></tr>` : ''}
          ${tx.fiUsed > 0 ? `<tr><td>− ${t('bd.fi')}</td><td>−${eur(tx.fiUsed)}</td></tr>` : ''}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.parts.kom)}</td></tr></table>${sources('skvData', 'skv433')}`;
      },
      jsa: r => `<h4>${t('bd.jsa')}</h4><p>${t(r && r.u.senior ? 'tip.jsaSenior' : 'tip.jsa')}</p>${r ? `<p><b>${eur(r.tax.jsaUsed)}</b>${t('aYear')}</p>` : ''}${sources('skv433')}`,
      fi: r => `<h4>${t('bd.fi')}</h4><p>${t('tip.fi')}</p>${r ? `<p><b>${eur(r.tax.fiUsed)}</b>${t('aYear')}</p>` : ''}${sources('skv433')}`,
      stat: r => `<h4>${t('comp.stat')}</h4><p>${t('tip.stat', eur(P.state.at))}</p>
          ${r && r.parts.stat > 0 ? `<p>20% × (${eur(r.u.T)} − ${eur(P.state.at)}) = <b>${eur(r.parts.stat)}</b></p>` : ''}${sources('skv433')}`,
      fee: r => {
        const f = feesOf(s);
        return `<h4>${t('comp.fee')}</h4><p>${t('tip.fee', num(f.begr, 3) + '%', eur(P.ps.max))}</p>
          ${r ? `<table><tr><td>${t('tip.begr')} ${num(f.begr, 3)}%</td><td>${eur(r.tax.begr)}</td></tr>
            <tr><td>${t('tip.ps')}</td><td>${eur(r.tax.ps)}</td></tr>
            <tr class="t"><td>${t('total')}</td><td>${eur(r.parts.fee)}</td></tr></table>` : ''}${sources('skvData', 'skv433')}`;
      },
      kyrka: r => `<h4>${t('comp.kyrka')}</h4><p>${t('tip.church', num(feesOf(s).kyrka, 2) + '%')}</p>
          ${r && s.cadre ? `<p><b>${eur(r.parts.kyrka)}</b>${t('aYear')}</p>` : ''}${sources('skvData')}`,
      bb: r => `<h4>${t('comp.bb')}</h4><p>${t('tip.bb', eur(P.bb.child))}</p>
          ${r && r.bb.month ? `<p>${eur(r.bb.month)}${t('aMonth')} × 12${r.bb.share < 1 ? ' × ½' : ''} = <b>${eur(r.bb.v)}</b></p>` : ''}${sources('bb')}`,
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
    const s = x.s, p = r.parts, u = r.u, tx = r.tax, c = x.commune(), min = r.regime === 'minister';
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ga', label: t('bd.ga'), v: u.ga, cls: 'sub' },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.T, cls: 'sub' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    ];
    if (p.pf > 0) L.push({ op: '−', k: 'pf', label: t('comp.pf'), v: p.pf, tax: p.pf });
    L.push({ op: '−', k: 'kom', label: `${t('bd.komGross')} (${num(s.local, 2)}%${c ? ', ' + c.name : ''})`, v: tx.kommunal, tax: tx.kommunal });
    if (tx.pfCredit > 0) L.push({ op: '+', k: 'pf', label: t('tip.pfCredit'), v: tx.pfCredit, tax: -tx.pfCredit, cls: 'sub' });
    if (tx.jsaUsed > 0) L.push({ op: '+', k: 'jsa', label: t('bd.jsa'), v: tx.jsaUsed, tax: -tx.jsaUsed, cls: 'sub' });
    if (tx.fiUsed > 0) L.push({ op: '+', k: 'fi', label: t('bd.fi'), v: tx.fiUsed, tax: -tx.fiUsed, cls: 'sub' });
    if (tx.state > 0) L.push({ op: '−', k: 'stat', label: t('comp.stat'), v: tx.state, tax: tx.state });
    L.push({ op: '−', k: 'fee', label: t('comp.fee'), v: p.fee, tax: p.fee });
    if (p.kyrka > 0) L.push({ op: '−', k: 'kyrka', label: `${t('comp.kyrka')} (${num(feesOf(s).kyrka, 2)}%)`, v: p.kyrka, tax: p.kyrka });
    if (r.bb.v > 0) L.push({ op: '+', k: 'bb', label: t('comp.bb'), v: r.bb.v, tax: p.bb });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low pay: the pension fee starts at 0.423 PBB before there is any tax to credit it against.
  function trap(x) {
    const s = x.s, m = v => v / s.factor;
    const covered = x.firstMonthly(mm => {
      const r = compute(mm * s.factor, { ...s, regime: 'employee' });
      return r.u.fee > 0 && r.tax.pfCredit >= r.u.fee - .5;
    }, 0, 20000);
    const band = [m(P.pf.min), covered || m(P.pf.min) * 2];
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), eur(P.pf.r * P.pf.min)] };
  }

  function top(x) {
    const s = x.s, age = s.size;
    const at = x.firstMonthly(m => employeeSide(m * s.factor, age).T > P.state.at, 0, 1e6);
    if (!at) return null;
    // Above 8.08 price base amounts the earned income credit stops growing (5.24 from 66).
    const flat = x.firstMonthly(m => m * s.factor > (age === 'senior' ? 5.24 : 8.08) * PBB, 0, 1e6);
    return { at, text: [x.fmtM(at, 100) + x.perUnit(), x.fmtM(flat, 100) + x.perUnit(), eur(P.state.at)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'SEK', nextStep: 1000,
    regions: [], sizes: AGES, minRoles: MIN_ROLES, factors: [12, 12.11], factorDigits: 2, vatStandard: 25,
    features: { cadre: true, pa: true },
    state: { salary: 38300, factor: 12, minRole: 'minister', cadre: false, pa: true, commune: '0180', region: '', local: 30.55, vatRate: 25, size: 'std' },
    urlFields: {
      months: ['factor', 'num', [12, 12.11]], church: ['cadre', 'bool'], bb: ['pa', 'bool'],
      commune: ['commune', 'str'], kom: ['local', 'num'], age: ['size', 'str', AGES], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'komLabel', tip: 'komRule', digits: 2, step: .01, range: list => list.length ? [Math.min(...list.map(c => c.rate)), Math.max(...list.map(c => c.rate))] : [28.93, 35.65], notDue: () => false, hideInMinister: false },
    parseCommunes: list => {
      FEES = Object.fromEntries(list.map(([, , begr, kyrka, code]) => [code, { begr, kyrka }]));
      return list.map(([name, rate, begr, kyrka, code, lan]) => ({ name, rate, begr, kyrka, region: '', sub: lan, id: code }));
    },
    communeLabel: c => c.name,
    communeTag: c => `${num(c.rate, 2)}%`,
    communeHint: c => t('komHint', num(c.rate, 2) + '%', num(c.begr, 3) + '%', num(c.kyrka, 2) + '%'),
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }).net, allow: 0 }),
    segLabels: {}, recvLabels: { bb: 'bbReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.' + (p.role || (p.regime === 'mp' ? 'mpPay' : 'minPay'))),
    polNoteLink: 'minPay',
    refKeys: ['er', 'taxable', 'credits', 'fees', 'bb', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
