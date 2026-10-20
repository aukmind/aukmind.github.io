// Greek salary rules for income year 2026 (law 5246/2025 scale). Loaded by ../index.html?country=gr.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const AGES = ['none', 'u25', 'u30'];
  const MIN_ROLES = ['dep', 'min'];

  const P = {
    ee: .1337, er: .2179,
    // EFKA ceiling per payment, bonuses included.
    ceil: 7761.94,
    brackets: [[10000, .09], [20000, .20], [30000, .26], [40000, .34], [60000, .39], [INF, .44]],
    red: [777, 900, 1120, 1340, 1580, 1780], redExtra: 220,
    phaseFrom: 12000, phase: .02,
  };
  const MIN_WAGE = 920;

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'avg', m: 1516, year: 2025, color: '--w-avg' },
  ];

  // Monthly gross set in January 2024, paid 12 times a year.
  const MONTHLY = { min: 7583, dep: 6740, mp: 5135, gs: 5121 };
  const GOV = Object.fromEntries(Object.entries(MONTHLY).map(([k, v]) => [k, v * 12]));
  const DOC_GOV = 'https://www.parapolitika.gr/politiki/article/1331861/auxiseis-misthon-deite-ti-pairnoun-upourgoi-vouleutes-dimarhoi-kai-dioikites-apo-1i-ianouariou/';
  const POLITICIANS = [
    { kind: 'stat', key: 'min', icon: '💼', lo: GOV.min, hi: GOV.min, url: DOC_GOV },
    { kind: 'stat', key: 'dep', icon: '📎', lo: GOV.dep, hi: GOV.dep, url: DOC_GOV },
    { kind: 'stat', key: 'mp', icon: '🏛️', lo: GOV.mp, hi: GOV.mp, url: DOC_GOV },
    { kind: 'stat', key: 'gs', icon: '🖇️', lo: GOV.gs, hi: GOV.gs, url: DOC_GOV },
  ];

  const SRC = {
    scale: 'https://www.taxheaven.gr/law/5246/2025/arthro/3',
    red: 'https://www.taxheaven.gr/law/4172/2013/arthro/16',
    spouses: 'https://www.odigostoupoliti.eu/sizigi-miosis-forou-logo-exartomenon-teknon/',
    efka: 'https://taxsummaries.pwc.com/greece/individual/other-taxes',
    ceil: 'https://www.taxheaven.gr/circulars/51983/d-15-d-1865',
    minWage: 'https://www.powergame.gr/asfalisi/1328889/katotatos-misthos-se-efarmogi-i-nea-afxisi-poio-einai-to-katharo-poso/',
    ergani: 'https://www.skai.gr/news/greece/kerameos-espase-to-fragma-ton-1500-eyro-o-mesos-misthos',
    vat: 'https://www.aade.gr/epiheiriseis/forologikes-ypohreoseis/fpa',
    govPay: DOC_GOV,
    govLaw: 'https://www.taxheaven.gr/law/5079/2023/arthro/107',
  };

  // The 2026 scale, adjusted for dependent children and age.
  function scaleFor(kids, age) {
    const b = P.brackets.map(([hi, r]) => [hi, r]);
    if (kids >= 1) b[1][1] = [.18, .16, .09, 0][Math.min(kids, 4) - 1];
    if (kids >= 4) b[0][1] = 0;
    if (kids >= 1) b[2][1] = Math.max(0, [.24, .22, .20, .18][Math.min(kids, 4) - 1] - .02 * Math.max(0, kids - 4));
    if (age === 'u25') b[0][1] = b[1][1] = 0;
    if (age === 'u30') b[1][1] = Math.min(b[1][1], .09);
    return b;
  }
  function onScale(T, br) {
    let tax = 0, lo = 0;
    for (const [hi, r] of br) {
      if (T > lo) tax += (Math.min(T, hi) - lo) * r;
      lo = hi;
    }
    return tax;
  }
  const redBase = kids => kids <= 5 ? P.red[kids] : P.red[5] + (kids - 5) * P.redExtra;
  const redFor = (T, kids) => Math.max(0, redBase(kids) - (kids >= 5 ? 0 : P.phase * Math.max(0, T - P.phaseFrom)));

  function person(G, factor, kids, age) {
    const insured = Math.min(G / factor, P.ceil) * factor;
    const ee = P.ee * insured, er = P.er * insured;
    const T = Math.max(0, G - ee);
    const br = scaleFor(kids, age);
    const scale = onScale(T, br);
    const red = Math.min(scale, redFor(T, kids));
    return { G, m: G / factor, insured, ee, er, T, br, scale, red, tax: scale - red };
  }

  function compute(G, s) {
    const u = person(G, s.factor, s.children, s.region);
    const net = G - u.ee - u.tax;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + u.er, net, u, vatShare, parts: { er: u.er, ee: u.ee, ir: u.tax, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  const pc = r => pct(r, Math.round(r * 1e4) % 100 ? 2 : 0);

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const capNote = r => r && r.u.insured < r.G - .5 ? `<p class="m">${t('tip.capped', eur2(P.ceil))}</p>` : '';
    const scaleRows = r => {
      let lo = 0;
      return r.u.br.map(([hi, rate]) => {
        const part = Math.max(0, Math.min(r.u.T, hi) - lo);
        const out = part > 0 ? row(`${pc(rate)} × ${eur(part)}`, part * rate) : '';
        lo = hi;
        return out;
      }).join('');
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay', 'govLaw')}`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.f14')}</p>`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('spouses')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('scale')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur2(P.ceil))}</p>${r ? `<table>${tot(`21.79% × ${eur(r.u.insured)}`, r.u.er)}</table>` : ''}${capNote(r)}${sources('efka', 'ceil')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur2(P.ceil))}</p>${r ? `<table>${tot(`13.37% × ${eur(r.u.insured)}`, r.u.ee)}</table>` : ''}${capNote(r)}${sources('efka', 'ceil')}`,
      taxable: r => `<h4>${t('bd.taxableGr')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.T)}</b>` : '')}</p>`,
      scale: r => `<h4>${t('bd.scale')}</h4><p>${t('tip.scale')}</p>${r ? `<table>${scaleRows(r)}${tot(t('bd.scale'), r.u.scale)}</table>` : ''}${sources('scale')}`,
      red: r => `<h4>${t('bd.red')}</h4><p>${t('tip.red')}</p>${r ? `<table>
          ${row(t('tip.redBase', s.children), redBase(s.children))}
          ${s.children < 5 && r.u.T > P.phaseFrom ? row(t('tip.redPhase', eur(r.u.T - P.phaseFrom)), -Math.min(redBase(s.children), P.phase * (r.u.T - P.phaseFrom))) : ''}
          ${tot(t('tip.redUsed'), r.u.red)}</table>` : ''}${sources('red')}`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${row(t('bd.scale'), r.u.scale)}${row('− ' + t('bd.red'), -r.u.red)}${tot(t('comp.ir'), r.u.tax)}</table>` : ''}${sources('scale', 'red')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / s.factor)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const p = r.parts;
    return [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
      { op: '', k: 'taxable', label: t('bd.taxableGr'), v: r.u.T, cls: 'sub' },
      { op: '', k: 'scale', label: t('bd.scale'), v: r.u.scale, cls: 'sub' },
      { op: '', k: 'red', label: t('bd.red'), v: -r.u.red, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    ];
  }

  // The tax reduction cancels income tax on low pay; with four children the first 20,000 is untaxed too.
  function trap(x) {
    const s = x.s, minM = MIN_WAGE * 14 / s.factor;
    const start = x.firstMonthly(m => compute(m * s.factor, s).parts.ir > 1, 0, 1e5);
    const red = eur(redBase(s.children));
    if (!start || start <= minM + 1) return { band: [minM, minM], text: [x.fmtM(minM, 1), null, red] };
    return { band: [minM, start], text: [x.fmtM(minM, 1), x.fmtM(start, 10) + x.perUnit(), red] };
  }

  // The 44% bracket starts at 60,000 of taxable income.
  function top(x) {
    const s = x.s, T = P.brackets[4][0];
    let G = T / (1 - P.ee);
    if (G / s.factor > P.ceil) G = T + P.ee * P.ceil * s.factor;
    return { at: G / s.factor, text: [x.fmtM(G / s.factor, 10) + x.perUnit()] };
  }

  return {
    GAPS: ['polPay', 'mpAllow', 'polEfka', 'efka', 'spouses', 'kids1', 'phase', 'wages', 'netCheck', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: AGES, sizes: [], minRoles: MIN_ROLES, factors: [14, 12], factorDigits: 0, vatStandard: 24,
    features: {},
    communes: false,
    local: null,
    state: { salary: 1500, factor: 14, minRole: 'min', commune: '', region: 'none', local: 0, vatRate: 24, size: 'all' },
    urlFields: { age: ['region', 'str', AGES], months: ['factor', 'num', [14, 12]], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'govPay',
    refKeys: ['er', 'ee', 'ir', 'kids', 'young', 'red', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
