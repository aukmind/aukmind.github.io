// Spanish salary rules for income year 2026 (common regime). Loaded by ../index.html?country=es.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['and', 'ara', 'ast', 'bal', 'can', 'cnt', 'cyl', 'clm', 'cat', 'ext', 'gal', 'mad', 'mur', 'rio', 'val'];
  const MIN_ROLES = ['minister', 'vp', 'pm'];
  // [lower bound, rate %] pairs to [[upper bound, rate]].
  const scale = (...rows) => rows.map(([, r], i) => [i + 1 < rows.length ? rows[i + 1][0] : INF, r / 100]);

  const P = {
    // Art. 63 LIRPF; the 2023 budget is still extended in 2026, the scale lives in the IRPF law itself.
    brackets: scale([0, 9.5], [12450, 12], [20200, 15], [35200, 18.5], [60000, 22.5], [300000, 24.5]),
    cap: 5101.20 * 12,
    ee: { cc: .047, unemp: .0155, fp: .001, mei: .0015 },
    er: { cc: .236, unemp: .055, fogasa: .002, fp: .006, mei: .0075, atep: .01 },
    // Solidarity contribution on pay above the cap: [share of the cap, total rate, employee part as published].
    sol: [[.10, .0115, .0019], [.50, .0125, .0021], [INF, .0146, .0024]],
    otherExpenses: 2000,
    red20: { lo: 14852, mid: 17673.52, hi: 19747.5, max: 7302, k1: 1.75, base2: 2364.34, k2: 1.14 },
    joint: 3400, single: 2150,
    smi: { year: 17094, full: 590.89, end: 20048.45, k: .2 },
    minState: { p: 5550, d: [2400, 2700, 4000, 4500], u3: 2800 },
  };

  const SCALES = {
    and: scale([0, 9.5], [13000, 12], [21100, 15], [35200, 18.5], [60000, 22.5]),
    ara: scale([0, 9.5], [13072.5, 12], [21210, 15], [36960, 18.5], [52500, 20.5], [60000, 23], [80000, 24], [90000, 25], [130000, 25.5]),
    ast: scale([0, 9], [12450, 12], [17707.2, 14], [33007.2, 19.2], [53407.2, 21.5], [70000, 22.5], [90000, 25], [175000, 26]),
    bal: scale([0, 9], [10000, 11.25], [18000, 14.25], [30000, 17.5], [48000, 19], [70000, 21.75], [90000, 22.75], [120000, 23.75], [175000, 24.75]),
    can: scale([0, 9], [13748, 11.5], [19422, 14], [35924, 18.5], [57566, 23.5], [93268, 25], [123745, 26]),
    cnt: scale([0, 8.5], [13000, 11], [21000, 14.5], [35200, 18], [60000, 22.5], [90000, 24.5]),
    cyl: scale([0, 9], [12450, 12], [20200, 14], [35200, 18.5], [53407.2, 21.5]),
    clm: scale([0, 9.5], [12450, 12], [20200, 15], [35200, 18.5], [60000, 22.5]),
    cat: scale([0, 9.5], [12500, 12.5], [22000, 16], [33000, 19], [53000, 21.5], [90000, 23.5], [120000, 24.5], [175000, 25.5]),
    // Ley 2/2026 (3 Aug), with effect from 1 January 2026.
    ext: scale([0, 7.75], [12450, 9.75], [20200, 16], [24200, 17.5], [35200, 21], [60000, 23.5], [80200, 24], [99200, 24.5], [120200, 25]),
    gal: scale([0, 9], [12985.35, 11.65], [21068.60, 14.9], [35200, 18.4], [60000, 22.5]),
    mad: scale([0, 8.5], [13362.22, 10.7], [19004.63, 12.8], [35425.68, 17.4], [57320.40, 20.5]),
    mur: scale([0, 9.5], [12450, 11.2], [20200, 13.3], [34000, 17.9], [60000, 22.5]),
    rio: scale([0, 8], [12450, 10.6], [20200, 13.6], [35200, 17.8], [40000, 18.3], [50000, 19], [60000, 24.5], [120000, 27]),
    // Ley 5/2026 (31 Jul), with effect from 1 January 2026.
    val: scale([0, 8.8], [12000, 11.7], [22000, 14.6], [32000, 17], [42000, 19.4], [52000, 21.9], [62000, 24.4], [72000, 26.1], [100000, 27.35], [150000, 28.35], [200000, 29.35]),
  };
  const MIN = {
    and: { p: 5790, d: [2510, 2820, 4170, 4700], u3: 2920 },
    ast: { p: 6105, d: [2640, 2970, 4400, 4950], u3: 3080 },
    bal: { p: 5550, d: [2400, 2970, 4400, 4950], u3: 2800 },
    can: { p: 5606, d: [2424, 2727, 4040, 4545], u3: 2828 },
    gal: { p: 5789, d: [2503, 2816, 4172, 4694], u3: 2920 },
    mad: { p: 5956.65, d: [2575.85, 2897.83, 4400, 4950], u3: 3005.16 },
    val: { p: 6105, d: [2640, 2970, 4400, 4950], u3: 3080 },
  };

  // Monthly gross in 14 payments: SMI 2026 and INE's wage survey 2024 (annual ÷ 14).
  const REF_WAGES = [
    { key: 'min', m: 1221, year: 2026, color: '--w-min' },
    { key: 'med', m: 24497.17 / 14, year: 2024, color: '--w-med' },
    { key: 'avg', m: 29540.26 / 14, year: 2024, color: '--w-avg' },
  ];

  // 2025 pay from the Transparency Portal (no seniority) + 1.5% for 2026 (RD-ley 14/2025), paid in 12 months.
  const GOV = {
    pm: 95943.96 * 1.015, vp: 90177.84 * 1.015, minister: 84650.52 * 1.015,
    mp: 3366.99 * 14, mpAllow: 2162.85 * 12,
    presCongreso: { lo: 3366.99 * 14 + (3683.74 + 4000.26 + 3279.85) * 12, hi: (3366.99 + 3683.74) * 14 + (4000.26 + 3279.85) * 12 },
  };
  const DOC_GOV = 'https://transparencia.gob.es/publicidad-activa/por-materias/altos-cargos/retribuciones';
  const DOC_MP = 'https://www.congreso.es/es/cem/regecodip';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_GOV },
    { kind: 'stat', key: 'vp', icon: '🎖️', regime: 'vp', lo: GOV.vp, hi: GOV.vp, url: DOC_GOV },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_GOV },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.mp, hi: GOV.mp, url: DOC_MP },
    { kind: 'gov', key: 'presCongreso', icon: '🔔', lo: GOV.presCongreso.lo, hi: GOV.presCongreso.hi, url: DOC_MP },
    { kind: 'gov', name: 'José Luis Escrivá', role: 'bde', lo: 212796.68, hi: 212796.68, url: 'https://www.bde.es/f/webbe/INF/MenuHorizontal/SobreElBanco/transparencia/Informacion_economica/Retribuciones_altos_cargos/2025_Retribuciones_texto_.pdf' },
    { kind: 'gov', name: 'Carlos San Basilio', role: 'cnmv', lo: 184017, hi: 184017, url: 'https://www.cnmv.es/portal/quees/retribuciones-altos-cargos' },
    { kind: 'corp', name: 'Pedro Saura', role: 'correos', lo: 234754.07, hi: 234754.07, url: 'https://www.correos.com/portal-transparencia/retribuciones-e-indemnizaciones/' },
    { kind: 'corp', name: 'Maurici Lucena', role: 'aena', lo: 196460, hi: 197000, url: 'https://www.aena.es/es/accionistas-e-inversores/gobierno-corporativo/informes/remuneracion-consejeros.html' },
    { kind: 'corp', name: 'José Pablo López', role: 'rtve', lo: 164000, hi: 194000, url: 'https://www.rtve.es/corporacion/transparencia/' },
  ];

  const SRC = {
    ssRates: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores/36537',
    orden: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2026-7041',
    atep: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores/10721/10957/583',
    manual: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/presentacion.html',
    red20: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c03-rendimientos-trabajo/rendimiento-neto-trabajo-integrar-base-imponible/fase-3-determinacion-rendimiento-neto-reducido.html',
    minimos: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c14-adecuacion-impuesto-circunstancias-personales/minimo-autonomico-personal-familiar/cuadro-minimos-personales-familiares-estatal-autonomicos.html',
    joint: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c13-determinacion-renta-contribuyente-sujeta-gravamen/reducciones-base-imponible-general/reduccion-tributacion-conjunta.html',
    regional: 'https://www.hacienda.gob.es/sgfal/financiacionterritorial/autonomica/capitulo-i-tributacion-autonomica-2026.pdf',
    regional2026: 'https://www.hacienda.gob.es/sgfal/financiacionterritorial/autonomica/capitulo-ii-tributacion-autonomica-2026.pdf',
    reaf: 'https://multimedia2.coev.com/pdfs/panorama-fiscalidad2026.pdf',
    smiDed: 'https://www.iberley.es/noticias/medidas-fiscales-rd-ley-5-2026-elimina-irpf-perceptores-smi-2026-adopta-medidas-los-afectados-las-borrascas-36098',
    smi: 'https://www.iberley.es/noticias/publicado-salario-minimo-interprofesional-2026-36093',
    ine: 'https://ine.es/dyngs/Prensa/EAES2024.htm',
    iva: 'https://sede.agenciatributaria.gob.es/Sede/iva/calculo-iva-repercutido-clientes/tipos-impositivos-iva.html',
    govPay: DOC_GOV,
    payRise: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-24445',
    mpPay: DOC_MP,
  };

  const progressive = (x, br) => {
    let tot = 0, lo = 0;
    for (const [hi, r] of br) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };
  const bracketRows = (x, br) => {
    const rows = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) rows.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return rows;
  };
  const sum = o => Object.values(o).reduce((a, b) => a + b, 0);

  function solidarity(G, ee) {
    const over = Math.max(0, G - P.cap);
    let tot = 0, lo = 0;
    for (const [hi, r, e] of P.sol) { const top = hi * P.cap; if (over > lo) tot += (Math.min(over, top) - lo) * (ee ? e : r - e); lo = top; }
    return tot;
  }
  function eeParts(G) {
    const b = Math.min(G, P.cap), e = P.ee;
    return { cc: e.cc * b, unemp: e.unemp * b, fp: e.fp * b, mei: e.mei * b, sol: solidarity(G, true) };
  }
  function erParts(G, pub) {
    const b = Math.min(G, P.cap), e = P.er;
    return { cc: e.cc * b, unemp: e.unemp * b, fogasa: pub ? 0 : e.fogasa * b, fp: e.fp * b, mei: e.mei * b, atep: e.atep * b, sol: solidarity(G, false) };
  }

  const red20 = rn => {
    const r = P.red20;
    if (rn <= 0) return 0;
    if (rn <= r.lo) return r.max;
    if (rn <= r.mid) return r.max - r.k1 * (rn - r.lo);
    if (rn <= r.hi) return r.base2 - r.k2 * (rn - r.mid);
    return 0;
  };
  const smiDed = G => {
    const m = P.smi;
    return G <= 0 ? 0 : G <= m.year ? m.full : G < m.end ? m.full - m.k * (G - m.year) : 0;
  };

  // One earner's work income, before any household choice.
  function employeeSide(G) {
    const ee = eeParts(G), eeTot = sum(ee);
    const rn = Math.max(0, G - eeTot - P.otherExpenses);
    return { G, m: 0, ee, eeTot, netPay: G - eeTot, other: Math.min(P.otherExpenses, Math.max(0, G - eeTot)), rn };
  }

  function minimos(region, kids, u3, share) {
    const out = {};
    for (const [k, M] of [['st', P.minState], ['rg', MIN[region] || P.minState]]) {
      let d = 0;
      for (let i = 0; i < kids; i++) d += M.d[Math.min(i, 3)];
      out[k] = M.p + share * (d + Math.min(u3, kids) * M.u3);
    }
    return out;
  }

  // One tax return: rn = net work income of everyone on it, gross = each earner's gross (for the SMI deduction).
  function taxReturn(rn, gross, region, kids, u3, share, cut) {
    const red = red20(rn);
    const base = Math.max(0, rn - red - cut);
    const m = minimos(region, kids, u3, share);
    const sc = SCALES[region];
    const st = Math.max(0, progressive(base, P.brackets) - progressive(Math.min(base, m.st), P.brackets));
    const rg = Math.max(0, progressive(base, sc) - progressive(Math.min(base, m.rg), sc));
    const ded = Math.min(st + rg, gross.reduce((tot, g) => tot + smiDed(g), 0));
    const k = st + rg > 0 ? 1 - ded / (st + rg) : 0;
    return { rn, red, cut, base, m, stGross: st, rgGross: rg, ded, st: st * k, rg: rg * k, total: st + rg - ded };
  }
  const zero = { rn: 0, red: 0, cut: 0, base: 0, m: { st: 0, rg: 0 }, stGross: 0, rgGross: 0, ded: 0, st: 0, rg: 0, total: 0 };

  // A couple picks the cheaper of two individual returns or one joint return.
  function household(u, s, pu) {
    const kids = s.children, u3 = s.under3 || 0;
    if (!pu) {
      const r = taxReturn(u.rn, [u.G], s.region, kids, u3, 1, kids > 0 ? P.single : 0);
      return { mode: kids > 0 ? 'mono' : 'single', mine: r, st: r.st, rg: r.rg, total: r.total };
    }
    const mine = u.G > 0 ? taxReturn(u.rn, [u.G], s.region, kids, u3, .5, 0) : zero;
    const theirs = pu.G > 0 ? taxReturn(pu.rn, [pu.G], s.region, kids, u3, .5, 0) : zero;
    const joint = taxReturn(u.rn + pu.rn, [u.G, pu.G].filter(g => g > 0), s.region, kids, u3, 1, P.joint);
    if (joint.total < mine.total + theirs.total) return { mode: 'joint', joint, st: joint.st, rg: joint.rg, total: joint.total };
    return { mode: 'separate', mine, theirs, st: mine.st + theirs.st, rg: mine.rg + theirs.rg, total: mine.total + theirs.total };
  }

  // Your share of household income tax = the household with your pay − the household without it.
  function incomeTax(u, s, env) {
    const couple = s.household === 'joint', pu = couple ? env.partner : null;
    const hh = household(u, s, pu);
    const without = couple ? household(employeeSide(0), s, pu) : null;
    return { hh, without, st: hh.st - (without ? without.st : 0), rg: hh.rg - (without ? without.rg : 0) };
  }

  function compute(G, s, env) {
    const pub = s.regime === 'minister';
    const u = employeeSide(G);
    u.m = G / s.factor;
    const tax = incomeTax(u, s, env);
    const ers = erParts(G, pub), er = sum(ers);
    const cost = G + er;
    const net = G - u.eeTot - tax.st - tax.rg;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost, net, u, tax, ers, vatShare, regime: pub ? 'minister' : undefined, parts: { er, ee: u.eeTot, irpfS: tax.st, irpfR: tax.rg, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'irpfS', 'irpfR', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', irpfS: 'var(--k-fed)', irpfR: 'var(--k-reg)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'irpfS', 'irpfR', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'irpfS', 'irpfR'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'irpfS', 'irpfR'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const partRows = (obj, prefix, rates) => Object.entries(obj).filter(([, v]) => v > .005)
      .map(([k, v]) => `<tr><td>${t(prefix + k)}${rates[k] ? ' ' + pct(rates[k], 2) : ''}</td><td>${eur(v)}</td></tr>`).join('');
    const scaleRows = (base, br) => bracketRows(base, br).filter(b => b.r > 0).map(b => `<tr><td>${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, b.r * 1000 % 10 ? 2 : 1)}</td><td>${eur(b.amt)}</td></tr>`).join('');
    const ret = r => r && (r.tax.hh.mode === 'joint' ? r.tax.hh.joint : r.tax.hh.mine);
    const irpfTip = (key, which) => r => {
      const head = `<h4>${t('comp.' + key)}</h4><p>${t('tip.' + key)}</p>`;
      if (!r) return head + sources('manual', which === 'st' ? 'manual' : 'regional');
      const h = r.tax.hh, R = ret(r) || zero;
      const br = which === 'st' ? P.brackets : SCALES[s.region];
      const mVal = R.m[which];
      return `${head}<p class="m">${t('tip.mode.' + h.mode)}</p><table>
        <tr><td>${t('bd.base')}</td><td>${eur(R.base)}</td></tr>
        ${scaleRows(R.base, br)}
        <tr><td>− ${t('tip.onMinimo', eur(mVal))}</td><td>−${eur(progressive(Math.min(R.base, mVal), br))}</td></tr>
        <tr class="t"><td>${t('tip.quota')}</td><td>${eur(which === 'st' ? R.stGross : R.rgGross)}</td></tr>
        ${R.ded > 0 ? `<tr><td>− ${t('tip.smiShare')}</td><td>−${eur((which === 'st' ? R.stGross : R.rgGross) - R[which])}</td></tr>` : ''}
        ${h.mode === 'separate' ? `<tr><td>+ ${t('tip.partnerReturn')}</td><td>${eur(h.theirs[which])}</td></tr>` : ''}
        <tr class="t"><td>${t('tip.irHousehold')}</td><td>${eur(h[which])}</td></tr>
        ${r.tax.without ? `<tr><td>− ${t('tip.irWithout')}</td><td>−${eur(r.tax.without[which])}</td></tr><tr class="t"><td>${t('tip.irYours')}</td><td>${eur(r.parts[which === 'st' ? 'irpfS' : 'irpfR'])}</td></tr>` : ''}
        </table>${sources('manual', which === 'st' ? 'manual' : 'regional', 'regional2026')}`;
    };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(GOV.minister), eur(GOV.vp), eur(GOV.pm))}</p>${sources('govPay', 'payRise')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay', 'payRise')}`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.f14')}</p>`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.joint))}</p>${sources('joint')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('regional', 'regional2026', 'reaf')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.cap))}</p>${r ? `<table>${partRows(r.ers, 'er.', { ...P.er, fogasa: r.regime ? 0 : P.er.fogasa })}
          <tr class="t"><td>${t('total')} ${pct(r.parts.er / r.G, 2)}</td><td>${eur(r.parts.er)}</td></tr></table>` : ''}
          <p class="m">${t('tip.erM')}</p>${sources('ssRates', 'atep')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>${partRows(r.u.ee, 'ee.', P.ee)}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.parts.ee)}</td></tr></table>` : ''}${sources('ssRates', 'orden')}`,
      netPay: r => `<h4>${t('bd.netPay')}</h4><p>${t('tip.netPay', r ? ` <b>${eur(r.u.netPay)}</b>, ${eur(r.u.netPay / s.factor)} × ${s.factor}` : '')}</p>`,
      other: () => `<h4>${t('bd.other')}</h4><p>${t('tip.other')}</p>${sources('manual')}`,
      red20: r => `<h4>${t('bd.red20')}</h4><p>${t('tip.red20')}</p>${r ? `<p>${t('tip.red20Calc', eur(r.u.rn), eur(red20(r.u.rn)))}</p>` : ''}${sources('red20')}`,
      base: r => `<h4>${t('bd.base')}</h4><p>${t('tip.base', eur(P.joint), eur(P.single))}</p>${r ? `<p class="m">${t('tip.mode.' + r.tax.hh.mode)}</p>` : ''}${sources('joint')}`,
      minimo: r => {
        const M = MIN[s.region] || P.minState;
        return `<h4>${t('bd.minimo')}</h4><p>${t('tip.minimo', eur(P.minState.p), eur(M.p))}</p><p class="m">${t('tip.minimoKids', eur(P.minState.d[0]), eur(P.minState.u3))}</p>${sources('minimos')}`;
      },
      irpfS: irpfTip('irpfS', 'st'),
      irpfR: irpfTip('irpfR', 'rg'),
      smi: r => `<h4>${t('bd.smi')}</h4><p>${t('tip.smi', eur2(P.smi.full), eur(P.smi.year), eur(P.smi.end))}</p>${sources('smiDed', 'smi')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('iva')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const p = r.parts, u = r.u, min = r.regime === 'minister';
    const R = r.tax.hh.mode === 'joint' ? r.tax.hh.joint : r.tax.hh.mine;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
      { op: '=', k: 'netPay', label: t('bd.netPay'), v: u.netPay, cls: 'tot' },
      { op: '−', k: 'other', label: t('bd.other'), v: u.other, cls: 'sub' },
    ];
    if (R && R.red > 0) L.push({ op: '−', k: 'red20', label: t('bd.red20'), v: Math.min(R.red, R.rn), cls: 'sub' });
    if (R && R.cut > 0) L.push({ op: '−', k: 'base', label: t(r.tax.hh.mode === 'joint' ? 'bd.jointCut' : 'bd.singleCut'), v: Math.min(R.cut, R.rn), cls: 'sub' });
    if (R) L.push({ op: '=', k: 'base', label: t(r.tax.hh.mode === 'joint' ? 'bd.baseJoint' : 'bd.base'), v: R.base, cls: 'sub' });
    if (R) L.push({ op: '', k: 'minimo', label: t('bd.minimo'), v: R.m.rg, cls: 'sub' });
    L.push(
      { op: '', k: 'netPay', label: t('bd.netPay'), v: u.netPay },
      { op: '−', k: 'irpfS', label: t('comp.irpfS'), v: p.irpfS, tax: p.irpfS },
      { op: '−', k: 'irpfR', label: `${t('comp.irpfR')} (${t('region.' + x.s.region)})`, v: p.irpfR, tax: p.irpfR },
    );
    if (R && R.ded > 0) L.push({ op: '', k: 'smi', label: t('bd.smiIncl'), v: R.ded, cls: 'sub' });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-wage zone: from the SMI to where the work-income reduction runs out.
  function trap(x) {
    const s = x.s;
    const end = x.firstMonthly(m => m * s.factor > P.smi.year && red20(employeeSide(m * s.factor).rn) <= 0, 0, 10000);
    const band = [P.smi.year / s.factor, end || P.smi.end / s.factor];
    return { band, text: [x.fmtM(band[0], 1), x.fmtM(band[1], 10) + x.perUnit(), eur(P.red20.max), eur(P.smi.end)] };
  }

  function top(x) {
    const s = x.s, br = SCALES[s.region];
    const thr = Math.max(P.brackets[P.brackets.length - 2][0], br.length > 1 ? br[br.length - 2][0] : 0);
    const at = x.firstMonthly(m => {
      const u = employeeSide(m * s.factor);
      return u.rn - red20(u.rn) > thr;
    });
    if (!at) return null;
    const rate = P.brackets[P.brackets.length - 1][1] + br[br.length - 1][1];
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), pct(rate, Math.round(rate * 1e4) % 10 ? 2 : 1), eur(thr), x.fmtM(P.cap / s.factor, 10) + x.perUnit()] };
  }

  const ownGov = (p, plain, env) => {
    if (p.regime === 'mp') {
      const r = compute(GOV.mp, { ...plain, regime: 'employee' }, env);
      return { net: r.net + GOV.mpAllow, allow: GOV.mpAllow };
    }
    return { net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: 0 };
  };

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [14, 12], factorDigits: 0, vatStandard: 21,
    features: { under3: true },
    state: { salary: 2000, factor: 14, minRole: 'minister', under3: 0, commune: '', region: 'mad', local: 0, vatRate: 21, size: '' },
    urlFields: {
      months: ['factor', 'num', [14, 12]], under3: ['under3', 'num'],
      region: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES],
    },
    communes: false,
    local: null,
    minSalary: role => Math.round(GOV[role]),
    env: s => ({ partner: employeeSide(Math.max(0, s.partnerGross || 0)) }),
    compute,
    own: ownGov,
    segLabels: {}, recvLabels: {},
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'payRise',
    refKeys: ['ss', 'irpf', 'regional', 'family', 'smi', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
