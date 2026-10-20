// Bulgarian salary rules for income year 2026. Loaded by ../index.html?country=bg.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const SIZES = ['z04', 'z07', 'z11'];
  const TZPB = { z04: .004, z07: .007, z11: .011 };
  const MIN_ROLES = ['min', 'dpm', 'pm'];

  // Employee born after 1959: pension, sickness and maternity, unemployment, second pillar (UPF), health.
  const EE = { pen: .0658, sick: .014, unemp: .004, upf: .022, health: .032 };
  const ER = { pen: .0822, sick: .021, unemp: .006, upf: .028, health: .048 };
  const sum = o => Object.values(o).reduce((a, b) => a + b, 0);
  const P = {
    tax: .10, ee: sum(EE), er: sum(ER),
    // Monthly ceiling: 4,130 lev until July, 2,300 € from August (2026 DOO budget act).
    caps: [[7, 2111.64], [5, 2300]],
    // Child relief, a yearly tax-base reduction: 6,000 / 12,000 / 18,000 lev.
    kids: [0, 3067.75, 6135.50, 9203.25],
    brackets: [[Infinity, .10]],
  };
  const capYear = P.caps.reduce((a, [n, c]) => a + n * c, 0);
  const MIN_WAGE = 620.20;

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'avg', m: 1444, year: 2026, color: '--w-avg' },
  ];

  // Monthly base pay since the June 2026 freeze: MP = 3 × March 2026 public-sector average.
  const MP = 4236;
  const MONTHLY = { pm: 6566, dpm: 6142.20, min: 5719, mp: MP, pres: 8472 };
  const GOV = Object.fromEntries(Object.entries(MONTHLY).map(([k, v]) => [k, v * 12]));
  const DOC_GOV = 'https://fakti.bg/razsledvania/1055350-osnovnata-zaplata-na-deputatite-mina-4-200-na-ministrite-okolo-5-719-a-vicepremierite-6-200';
  const DOC_MP = 'https://www.novinite.com/articles/239074/Bulgarian+MPs+Freeze+Salaries+at+%E2%82%AC4,236+After+Automatic+Indexation+is+Scrapped';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '🏛️', lo: GOV.pres, hi: GOV.pres, url: DOC_GOV },
    { kind: 'stat', key: 'pm', icon: '⭐', lo: GOV.pm, hi: GOV.pm, url: DOC_GOV },
    { kind: 'stat', key: 'dpm', icon: '📎', lo: GOV.dpm, hi: GOV.dpm, url: DOC_GOV },
    { kind: 'stat', key: 'min', icon: '💼', lo: GOV.min, hi: GOV.min, url: DOC_GOV },
    { kind: 'stat', key: 'mp', icon: '🖇️', lo: GOV.mp, hi: GOV.mp, url: DOC_MP },
  ];

  const SRC = {
    tax: 'https://nra.bg/wps/portal/nra/taxes/danak-varhu-dohodite-na-fizicheskite-lica',
    contrib: 'https://kik-info.com/spravochnik/osigurovki-i-danaci/',
    cap: 'https://eurofast.eu/changes-to-the-social-security-system-in-bulgaria-as-of-1-august-2026/',
    tzpb: 'https://kik-info.com/novini/novini-i-akcenti/Ot-01082026-Osigurovki-MOD-TZPB-bolnichni.208156.php',
    fam: 'https://trudipravo.bg/?p=140875',
    famShare: 'https://www.innovires.com/blog/danachni-oblekchenia-deca.html',
    minWage: 'https://bntnews.bg/news/minimum-wage-in-bulgaria-will-be-%E2%82%AC62020-from-1-january-2026-1364952news.html',
    nsi: 'https://finorum.com/?p=24470',
    vat: 'https://nra.bg/wps/portal/nra/taxes/dds',
    govPay: DOC_GOV,
    mpPay: DOC_MP,
  };

  const insured = G => P.caps.reduce((a, [n, c]) => a + n * Math.min(G / 12, c), 0);
  const kidsBase = kids => P.kids[Math.min(kids, 3)];

  function person(G) {
    const ins = insured(G);
    const ee = P.ee * ins;
    const base = Math.max(0, G - ee);
    return { G, ins, ee, base, tax: P.tax * base };
  }

  // One parent claims the relief; what their tax can't absorb passes to the other through the annual returns.
  function family(me, partner, kids) {
    const value = P.tax * kidsBase(kids);
    const used = Math.min(value, me.tax + (partner ? partner.tax : 0));
    const usedWo = Math.min(value, partner ? partner.tax : 0);
    return { value, used, usedWo, mine: used - usedWo };
  }

  function compute(G, s, env) {
    const u = person(G);
    u.m = G / s.factor;
    const partner = s.household === 'joint' ? env.partner : null;
    const fam = family(u, partner, s.children);
    const tz = TZPB[s.size] || TZPB.z04;
    const er = P.er * u.ins + tz * u.ins;
    const net = G - u.ee - u.tax + fam.mine;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + er, net, u, fam, er, tz, vatShare,
      parts: { er, ee: u.ee, ir: u.tax, fam: -fam.mine, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'fam', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', fam: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'fam', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'fam'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'fam'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };
  const p2 = v => pct(v, 2);

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const split = (o, ins) => Object.entries(o).map(([k, r]) => row(`${t('fund.' + k)} ${p2(r)}`, r * ins)).join('');
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('fam', 'famShare')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('tzpb')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      insured: r => `<h4>${t('bd.insured')}</h4><p>${t('tip.insured', eur(P.caps[0][1]), eur(P.caps[1][1]), eur(capYear))}</p>${r ? `<table>${tot(t('bd.insured'), r.u.ins)}</table>` : ''}${sources('cap')}`,
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>${split(ER, r.u.ins)}${row(`${t('fund.tzpb')} ${p2(r.tz)}`, r.tz * r.u.ins)}${tot(t('comp.er'), r.er)}</table>` : ''}${sources('contrib', 'tzpb', 'cap')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>${split(EE, r.u.ins)}${tot(t('comp.ee'), r.u.ee)}</table>` : ''}${sources('contrib', 'cap')}`,
      taxable: r => `<h4>${t('bd.taxableBg')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.base)}</b>` : '')}</p>`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${row(t('bd.taxableBg'), r.u.base)}${tot(`10% × ${eur(r.u.base)}`, r.u.tax)}</table>` : ''}${sources('tax')}`,
      fam: r => {
        const f = r && r.fam;
        return `<h4>${t('comp.fam')}</h4><p>${t('tip.fam')}</p>${f && f.value ? `<table>
          ${row(t('tip.famBase', s.children), kidsBase(s.children))}
          ${row(t('tip.famValue'), f.value)}
          ${tot(t('tip.famUsed'), f.used)}
          ${f.usedWo ? row('− ' + t('tip.famWithout'), -f.usedWo) : ''}
          ${tot(t('tip.famYours'), f.mine)}</table>` : ''}<p class="m">${t('tip.famM')}</p>${sources('fam', 'famShare')}`;
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
    ];
    if (r.u.ins < r.G - .5) L.push({ op: '', k: 'insured', label: t('bd.insured'), v: r.u.ins, cls: 'sub' });
    L.push(
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
      { op: '', k: 'taxable', label: t('bd.taxableBg'), v: r.u.base, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
    );
    if (Math.abs(p.fam) > .5) L.push({ op: '+', k: 'fam', label: t('comp.fam'), v: -p.fam, tax: p.fam });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // The child relief can cancel the income tax at low pay; contributions are due from the first euro.
  function trap(x) {
    const s = x.s, minM = MIN_WAGE * 12 / s.factor;
    const env = x.env();
    const end = s.children > 0 ? x.firstMonthly(m => {
      const r = compute(m * s.factor, s, env);
      return r.parts.ir + r.parts.fam > 1;
    }, 0, 1e5) : null;
    const fam = s.children > 0 ? eur(P.tax * kidsBase(s.children) / 12) : null;
    if (!end || end <= minM + 1) return { band: [minM, minM], text: [x.fmtM(minM, 1), null, fam] };
    return { band: [minM, end], text: [x.fmtM(minM, 1), x.fmtM(end, 10) + x.perUnit(), fam] };
  }

  // Above the ceiling, contributions stop: only the 10% tax applies on each extra euro.
  function top(x) {
    const at = P.caps[1][1] * 12 / x.s.factor;
    return { at, text: [x.fmtM(at, 1) + x.perUnit(), x.fmtM(P.caps[0][1] * 12 / x.s.factor, 1)] };
  }

  return {
    GAPS: ['polPay', 'polIns', 'wages', 'ceiling', 'tzpb', 'kids', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: [], sizes: SIZES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 20,
    features: {},
    communes: false,
    local: null,
    state: { salary: 1444, factor: 12, minRole: 'pm', commune: '', region: '', local: 0, vatRate: 20, size: 'z04' },
    urlFields: { tzpb: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: s => ({ partner: person(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    segLabels: { fam: 'famLost' }, recvLabels: { fam: 'famReceived' },
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'govPay',
    refKeys: ['er', 'ee', 'ir', 'fam', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
