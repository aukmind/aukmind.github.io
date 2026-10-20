// Liechtenstein salary rules for income year 2026. Loaded by ../index.html?country=li.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const MIN_ROLES = ['minister', 'deputy', 'pm'];

  // Landessteuer, SteG Art. 19: rate × x − d above each threshold (a single, b single parent, c married).
  const TARIFF = {
    a: [[15855, .01, 159], [21140, .03, 581], [42280, .04, 1004], [73990, .05, 1744], [105700, .06, 2801], [137410, .065, 3488], [169120, .07, 4334], [211400, .08, 6448]],
    b: [[23783, .01, 238], [31710, .03, 872], [63420, .04, 1506], [110985, .05, 2616], [158550, .06, 4202], [206115, .065, 5232], [253680, .07, 6501], [317100, .08, 9672]],
    c: [[31710, .01, 317], [42280, .03, 1163], [84560, .04, 2008], [147980, .05, 3488], [211400, .06, 5602], [274820, .065, 6976], [338240, .07, 8667], [422800, .08, 12895]],
  };

  const P = {
    ee: { ahv: .04025, iv: .00675, fak: .002 },
    er: { ahv: .04225, iv: .00675, fak: .019, vk: .00585 },
    alv: .005, alvCap: 126000,
    bpvg: { entry: 14700, cap: 88200, rate: .08 },
    kk: 180.5 * 12,
    prof: 1600, ins: { single: 3700, married: 7400 }, kid: 12700,
    // SteV Art. 8: monthly gross up to which the whole income is tax-free; children assumed aged 6 to 11.
    exMin: { a: 2100, b: 2600, c: 3200, kid: 450 },
    kz: { child: 310, many: 360, single: 120 },
    brackets: [[15855, 0], [21140, .01], [42280, .03], [73990, .04], [105700, .05], [137410, .06], [169120, .065], [211400, .07], [Infinity, .08]],
  };
  const EE = P.ee.ahv + P.ee.iv + P.ee.fak, ER = P.er.ahv + P.er.iv + P.er.fak + P.er.vk;

  // Statistikportal, Lohnstatistik 2024: full-time median, a twelfth of the 13th salary included. No statutory minimum wage.
  const REF_WAGES = [{ key: 'med', m: 7401, year: 2024, color: '--w-med' }];

  // BesG Art. 34 and annex: share of the top fixed salary of class 20 (CHF 240,720), rounded to CHF 10.
  const TOP20 = 240720;
  const GOV = { pm: Math.round(1.23 * TOP20 / 10) * 10, deputy: Math.round(1.16 * TOP20 / 10) * 10, minister: Math.round(1.085 * TOP20 / 10) * 10, secretary: Math.round(1.015 * TOP20 / 10) * 10 };
  const DOC_GOV = 'https://www.gesetze.li/konso/1991006000';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'minister', lo: GOV.pm, hi: GOV.pm, url: DOC_GOV },
    { kind: 'stat', key: 'deputy', icon: '🎖️', regime: 'minister', lo: GOV.deputy, hi: GOV.deputy, url: DOC_GOV },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_GOV },
    { kind: 'stat', key: 'secretary', icon: '📜', regime: 'minister', lo: GOV.secretary, hi: GOV.secretary, url: DOC_GOV },
  ];

  const SRC = {
    steg: 'https://www.gesetze.li/konso/2010340000',
    stev: 'https://www.gesetze.li/konso/2010437000',
    ahv: 'https://www.ahv.li/fileadmin/user_upload/Dokumente/Online-Schalter/MB/AHV-IV-FAK-MB-1-01-2026--AHV-IV-FAK-ALV-Beitraege.pdf',
    lohn: 'https://www.regierung.li/files/attachments/2026-merkblatt-lohnabrechnung.pdf',
    bpvg: 'https://www.gesetze.li/konso/1988012000',
    fak: 'https://www.ahv.li/fileadmin/user_upload/Dokumente/Online-Schalter/MB/AHV-IV-FAK-MB-4-01--Leistungen_FAK_2025.pdf',
    gem: 'https://www.balzers.li/Portal/UserFiles/files/Service/GR-Protokolle/GR-Protokolle_2025/hw_GRPR_45_2025.pdf',
    vat: 'https://www.estv.admin.ch/estv/de/home/mehrwertsteuer/mwst-steuersaetze.html',
    wages: 'https://www.statistikportal.li/de/themen/arbeit-und-erwerb/loehne',
    govPay: DOC_GOV,
  };

  const pos = v => Math.max(0, v);
  const tariffOf = s => s.household === 'joint' ? 'c' : s.children > 0 ? 'b' : 'a';

  function landTax(x, tf) {
    let v = 0;
    for (const [from, r, d] of TARIFF[tf]) if (x > from) v = r * x - d;
    return pos(v);
  }
  const marginal = (x, tf) => { let r = 0; for (const [from, rr] of TARIFF[tf]) if (x > from) r = rr; return r; };

  // One earner's contributions. The pension plan (BPVG) insures the whole AHV wage once it reaches the entry threshold.
  function social(G) {
    const alv = P.alv * Math.min(G, P.alvCap);
    const ahvEe = EE * G, ahvEr = ER * G;
    const bpvg = G >= P.bpvg.entry ? P.bpvg.rate / 2 * Math.min(G, P.bpvg.cap) : 0;
    return { G, ahvEe, ahvEr, alv, ee: ahvEe + alv, er: ahvEr + alv, bpvg, bpvgEr: bpvg, kk: G > 0 ? P.kk : 0 };
  }

  // Taxable income and tax of one household. ers: the earners' social() results.
  function household(ers, s) {
    const tf = tariffOf(s), kids = s.children, married = tf === 'c';
    const gross = ers.reduce((a, e) => a + e.G, 0);
    const prof = ers.reduce((a, e) => a + Math.min(e.G, P.prof), 0);
    const contrib = ers.reduce((a, e) => a + e.ee + e.bpvg, 0);
    const ins = married ? P.ins.married : P.ins.single;
    const kidDed = kids * P.kid;
    const ti = pos(gross - prof - contrib - ins - kidDed);
    const exLimit = 12 * (P.exMin[tf] + kids * P.exMin.kid);
    const exempt = gross <= exLimit;
    const land = exempt ? 0 : landTax(ti, tf);
    const gem = land * s.local / 100;
    return { tf, gross, prof, contrib, ins, kidDed, ti, exLimit, exempt, land, gem, total: land + gem };
  }

  // Your share = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const p = s.household === 'joint' ? env.partner : null;
    const w = household(p ? [u, p] : [u], s);
    const wo = household(p ? [p] : [], s);
    return { w, wo, land: w.land - wo.land, gem: w.gem - wo.gem, total: w.total - wo.total };
  }

  // Kinderzulage does not depend on pay; a couple counts half of it here.
  function childAllowance(s) {
    const n = s.pa ? s.children : 0;
    if (!n) return { month: 0, share: 0, v: 0 };
    const month = n * (n >= 3 ? P.kz.many : P.kz.child) + (s.household === 'joint' ? 0 : n * P.kz.single);
    const share = s.household === 'joint' ? .5 : 1;
    return { month, share, v: 12 * month * share };
  }

  function compute(G, s, env) {
    const min = s.regime === 'minister';
    const u = social(G);
    u.m = G / (min ? 12 : s.factor);
    const tax = incomeTaxes(u, s, env || { partner: social(0) }), kz = childAllowance(s);
    const cost = G + u.er + u.bpvgEr + u.kk;
    const net = G - u.ee - u.bpvg - tax.total + kz.v + u.kk;
    const vat = s.vat ? pos(net) * s.vatRate / (100 + s.vatRate) : 0;
    return {
      G, cost, net, u, tax, kz, regime: min ? 'minister' : undefined,
      parts: { er: u.er, bpvgEr: u.bpvgEr, ee: u.ee, bpvg: u.bpvg, land: tax.land, gem: tax.gem, kz: -kz.v, vat },
    };
  }

  const COMP_KEYS = ['er', 'bpvgEr', 'ee', 'bpvg', 'land', 'gem', 'kz', 'vat'];
  const COMP_COLORS = {
    er: 'var(--k-er)', bpvgEr: 'var(--k-vm)', ee: 'var(--k-ee)', bpvg: 'var(--k-vm)', land: 'var(--k-fed)', gem: 'var(--k-com)', kz: 'var(--k-pa)', vat: 'var(--k-vat)',
  };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: COMP_KEYS, base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: COMP_KEYS.filter(k => k !== 'vat'), base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'bpvg', 'land', 'gem', 'kz'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  const rate = r => pct(r, [0, 1, 2, 3].find(d => Math.abs(Math.round(r * 100 * 10 ** d) - r * 100 * 10 ** d) < 1e-6) ?? 3);
  const mul = s => 1 + s.local / 100;

  function tips(x) {
    const s = x.s;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(GOV.pm), eur(GOV.deputy), eur(GOV.minister))}</p>${sources('govPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules', eur(TOP20))}</p>${sources('govPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('steg')}`,
      paToggle: () => `<h4>${t('comp.kz')}</h4><p>${t('tip.kzToggle')}</p>${sources('fak')}`,
      localRule: () => `<h4>${t('comp.gem')}</h4><p>${t('tip.localRule')}</p>${sources('steg', 'gem')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), num(s.factor, 0), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr><td>${t('comp.bpvgEr')}</td><td>${eur(r.parts.bpvgEr)}</td></tr>
          <tr><td>${t('bd.kk')}</td><td>${eur(r.u.kk)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.alvCap))}</p>
        ${r && r.G > 0 ? `<table>
          <tr><td>${rate(ER)} × ${eur(r.G)}</td><td>${eur(r.u.ahvEr)}</td></tr>
          <tr><td>ALV ${rate(P.alv)} × ${eur(Math.min(r.G, P.alvCap))}</td><td>${eur(r.u.alv)}</td></tr>
          <tr class="t"><td>${t('total')}</td><td>${eur(r.parts.er)}</td></tr></table>` : ''}${sources('ahv')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.alvCap))}</p>
        ${r && r.G > 0 ? `<table>
          <tr><td>${rate(EE)} × ${eur(r.G)}</td><td>${eur(r.u.ahvEe)}</td></tr>
          <tr><td>ALV ${rate(P.alv)} × ${eur(Math.min(r.G, P.alvCap))}</td><td>${eur(r.u.alv)}</td></tr>
          <tr class="t"><td>${t('total')}</td><td>${eur(r.parts.ee)}</td></tr></table>` : ''}${sources('ahv')}`,
      bpvg: r => `<h4>${t('comp.bpvg')}</h4><p>${t('tip.bpvg', eur(P.bpvg.entry), eur(P.bpvg.cap))}</p>
        ${r && r.u.bpvg > 0 ? `<p>4% × ${eur(Math.min(r.G, P.bpvg.cap))} = <b>${eur(r.u.bpvg)}</b></p>` : ''}${sources('bpvg')}`,
      bpvgEr: r => `<h4>${t('comp.bpvgEr')}</h4><p>${t('tip.bpvgEr')}</p>
        ${r && r.u.bpvgEr > 0 ? `<p>4% × ${eur(Math.min(r.G, P.bpvg.cap))} = <b>${eur(r.u.bpvgEr)}</b></p>` : ''}${sources('bpvg')}`,
      kk: () => `<h4>${t('bd.kk')}</h4><p>${t('tip.kk', eur2(180.5), eur(P.kk))}</p>${sources('lohn')}`,
      prof: () => `<h4>${t('bd.prof')}</h4><p>${t('tip.prof', eur(P.prof))}</p>${sources('steg', 'stev')}`,
      contrib: () => `<h4>${t('bd.contrib')}</h4><p>${t('tip.contrib')}</p>${sources('steg')}`,
      ins: () => `<h4>${t('bd.ins')}</h4><p>${t('tip.ins', eur(P.ins.single), eur(P.ins.married))}</p>${sources('steg')}`,
      kids: () => `<h4>${t('bd.kids')}</h4><p>${t('tip.kids', eur(P.kid))}</p>${sources('steg')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable')}</p>${r ? `<p><b>${eur(r.tax.w.ti)}</b></p>` : ''}`,
      exempt: r => `<h4>${t('bd.exempt')}</h4><p>${t('tip.exempt', eur(P.exMin.a), eur(P.exMin.b), eur(P.exMin.c), eur(P.exMin.kid))}</p>${r ? `<p>${t('tip.exemptCalc', eur(r.tax.w.gross), eur(r.tax.w.exLimit))}</p>` : ''}${sources('stev')}`,
      land: r => {
        const tf = r ? r.tax.w.tf : tariffOf(s);
        return `<h4>${t('comp.land')}</h4><p>${t('tip.land.' + tf)}</p>
          ${r && r.tax.w.land > 0 ? `<p>${t('tip.landCalc', eur(r.tax.w.ti), rate(marginal(r.tax.w.ti, tf)), eur(r.tax.w.land))}</p>` : ''}
          ${r && s.household === 'joint' ? `<p>${t('tip.share', eur(r.parts.land))}</p>` : ''}${sources('steg')}`;
      },
      gem: r => {
        const c = x.commune();
        return `<h4>${t('comp.gem')}</h4><p>${t('tip.gem', c ? esc(c.name) : '', num(s.local, 0) + '%')}</p>
          ${r && r.tax.w.gem > 0 ? `<p>${num(s.local, 0)}% × ${eur(r.tax.w.land)} = <b>${eur(r.tax.w.gem)}</b></p>` : ''}
          ${r && s.household === 'joint' ? `<p>${t('tip.share', eur(r.parts.gem))}</p>` : ''}${sources('steg', 'gem')}`;
      },
      kz: r => `<h4>${t('comp.kz')}</h4><p>${t('tip.kz', eur(P.kz.child), eur(P.kz.many), eur(P.kz.single))}</p>
        ${r && r.kz.month ? `<p>${eur(r.kz.month)}${t('aMonth')} × 12${r.kz.share < 1 ? ' × ½' : ''} = <b>${eur(r.kz.v)}</b></p>` : ''}${sources('fak')}`,
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
    const s = x.s, p = r.parts, w = r.tax.w, c = x.commune(), min = r.regime === 'minister', joint = s.household === 'joint';
    const gross = t(min ? 'bd.minGross' : 'bd.gross');
    const L = [
      { op: '', k: 'gross', label: gross, v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
    ];
    if (p.bpvgEr > 0) L.push({ op: '+', k: 'bpvgEr', label: t('comp.bpvgEr'), v: p.bpvgEr, tax: p.bpvgEr, cls: 'sub' });
    if (r.u.kk > 0) L.push({ op: '+', k: 'kk', label: t('bd.kk'), v: r.u.kk, cls: 'sub' });
    L.push({ op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' });
    L.push({ op: '', k: 'gross', label: t(joint ? 'bd.grossHh' : 'bd.gross'), v: w.gross });
    L.push({ op: '−', k: 'prof', label: t('bd.prof'), v: w.prof, cls: 'sub' });
    L.push({ op: '−', k: 'contrib', label: t('bd.contrib'), v: w.contrib, cls: 'sub' });
    L.push({ op: '−', k: 'ins', label: t('bd.ins'), v: w.ins, cls: 'sub' });
    if (w.kidDed > 0) L.push({ op: '−', k: 'kids', label: t('bd.kids'), v: w.kidDed, cls: 'sub' });
    L.push({ op: '=', k: 'taxable', label: t(joint ? 'bd.taxableHh' : 'bd.taxable'), v: w.ti, cls: 'sub' });
    L.push({ op: '', k: 'gross', label: gross, v: r.G });
    L.push({ op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee });
    if (p.bpvg > 0) L.push({ op: '−', k: 'bpvg', label: t('comp.bpvg'), v: p.bpvg, tax: p.bpvg });
    if (w.exempt && w.gross > 0) L.push({ op: '', k: 'exempt', label: t('bd.exempt'), v: 0, cls: 'sub' });
    L.push({ op: '−', k: 'land', label: t(joint ? 'bd.landShare' : 'comp.land'), v: p.land, tax: p.land });
    L.push({ op: '−', k: 'gem', label: `${t(joint ? 'bd.gemShare' : 'comp.gem')} (${num(s.local, 0)}%${c ? ', ' + c.name : ''})`, v: p.gem, tax: p.gem });
    if (r.kz.v > 0) L.push({ op: '+', k: 'kz', label: t('comp.kz'), v: r.kz.v, tax: p.kz });
    if (r.u.kk > 0) L.push({ op: '+', k: 'kk', label: t('bd.kk'), v: r.u.kk });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low pay: the pension plan starts at once on the whole wage, then the tax-free minimum ends in one step.
  function trap(x) {
    const s = x.s, env = x.env();
    const entry = P.bpvg.entry / s.factor;
    const taxed = x.firstMonthly(m => compute(m * s.factor, { ...s, regime: 'employee' }, env).tax.total > 0, 0, 30000);
    const band = [entry, Math.max(entry * 1.2, taxed || entry * 2)];
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), eur(P.bpvg.rate / 2 * P.bpvg.entry)] };
  }

  function top(x) {
    const s = x.s, env = x.env(), tf = tariffOf(s);
    const br = TARIFF[tf][TARIFF[tf].length - 1][0];
    const at = x.firstMonthly(m => compute(m * s.factor, { ...s, regime: 'employee' }, env).tax.w.ti > br, 0, 1e6);
    if (!at) return null;
    return { at, text: [x.fmtM(at, 100) + x.perUnit(), rate(.08 * mul(s)), eur(br)] };
  }

  return {
    GAPS: ['communes2025', 'communeSource', 'noCheck', 'kidAge', 'fak2025', 'kzSplit', 'pension', 'healthEr', 'insDed', 'median', 'govPay', 'noLandtag', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'CHF', nextStep: 100,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12, 13], factorDigits: 0, vatStandard: 8.1,
    features: { pa: true },
    state: { salary: 7401, factor: 12, minRole: 'minister', pa: true, commune: 'vaduz', region: '', local: 150, vatRate: 8.1, size: '' },
    urlFields: {
      months: ['factor', 'num', [12, 13]], kz: ['pa', 'bool'],
      commune: ['commune', 'str'], surcharge: ['local', 'num'], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'localLabel', tip: 'localRule', digits: 0, step: 5, range: () => [150, 250], notDue: () => false, hideInMinister: false },
    parseCommunes: list => list.map(([name, rate, region, id]) => ({ name, rate, region: '', sub: t('area.' + region), area: region, id })),
    communeLabel: c => c.name,
    communeTag: c => `${num(c.rate, 0)}%`,
    communeHint: c => t('communeHint', num(c.rate, 0) + '%', t('area.' + c.area)),
    minSalary: role => GOV[role],
    env: s => ({ partner: social(Math.max(0, s.partnerGross || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: 0 }),
    segLabels: {}, recvLabels: { kz: 'kzReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: () => t('src.govPay'),
    polNoteLink: 'govPay',
    refKeys: ['social', 'bpvg', 'tax', 'deductions', 'communes', 'family', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
