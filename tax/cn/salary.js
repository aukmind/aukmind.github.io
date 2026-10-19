// Chinese salary rules for income year 2026, Beijing or Shanghai social insurance. Loaded by ../index.html?country=cn.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['bj', 'sh'];
  const SIZES = ['none', 'only', 'shared'];
  const MIN_ROLES = ['pres', 'premier'];

  const CITY = {
    // Beijing: bases from July 2026 (京人社发〔2026〕7号), housing fund year 2026.
    bj: { lo: 7270, hi: 36348, hfLo: 2540, hfHi: 36348, minWage: 2540,
      ee: { pen: .08, med: .02, unemp: .005 }, medFlat: 3,
      er: { pen: .16, med: .098, unemp: .005, inj: .002 } },
    // Shanghai: bases from July 2025; the July 2026 update wasn't found.
    sh: { lo: 7460, hi: 37302, hfLo: 2740, hfHi: 37302, minWage: 2740,
      ee: { pen: .08, med: .02, unemp: .005 }, medFlat: 0,
      er: { pen: .16, med: .09, unemp: .005, inj: .002 } },
  };

  const P = {
    basic: 60000, child: 24000, rent: 18000,
    elder: { none: 0, only: 36000, shared: 18000 },
    brackets: [[36000, .03], [144000, .10], [300000, .20], [420000, .25], [660000, .30], [960000, .35], [INF, .45]],
    monthly: [[3000, .03], [12000, .10], [25000, .20], [35000, .25], [55000, .30], [80000, .35], [INF, .45]],
  };

  const quick = table => { let lo = 0, q = 0, prev = 0; return table.map(([hi, r]) => { q += lo * (r - prev); prev = r; lo = hi; return [hi, r, q]; }); };
  const MONTHLY = quick(P.monthly);
  const progressive = x => { if (x <= 0) return 0; let lo = 0, tax = 0; for (const [hi, r] of P.brackets) { if (x > lo) tax += (Math.min(x, hi) - lo) * r; lo = hi; } return tax; };
  // Separate bonus: the rate comes from bonus / 12 on the monthly table, applied to the whole bonus.
  const bonusTax = b => { if (b <= 0) return 0; const row = MONTHLY.find(([hi]) => b / 12 <= hi); return b * row[1] - row[2]; };

  const REF_WAGES = [
    { key: 'min', m: 2540, year: 2025, color: '--w-min' },
    { key: 'avg', m: 12116, year: 2025, color: '--w-avg' },
  ];

  const LEADER = 11385 * 12;
  const GOV = { pres: LEADER, premier: LEADER };
  const DOC_LEADER = 'https://foreignpolicy.com/2015/01/21/running-china-on-1833-a-month-xi-jinping-salary/';
  const DOC_CMCC = 'https://www.chinamobileltd.com/en/ir/reports/ar2025.pdf';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '⭐', lo: LEADER, hi: LEADER, url: DOC_LEADER },
    { kind: 'stat', key: 'premier', icon: '🏛️', lo: LEADER, hi: LEADER, url: DOC_LEADER },
    { kind: 'corp', name: '何飚 He Biao', role: 'cmccCeo', lo: 625000, hi: 625000 + 297000 + 216000, url: DOC_CMCC },
    { kind: 'corp', name: '杨杰 Yang Jie', role: 'cmccChair', lo: 573000, hi: 573000 + 367000 + 864000, url: DOC_CMCC },
  ];

  const SRC = {
    iit: 'https://taxsummaries.pwc.com/peoples-republic-of-china/individual/taxes-on-personal-income',
    ded: 'https://taxsummaries.pwc.com/peoples-republic-of-china/individual/deductions',
    si: 'https://taxsummaries.pwc.com/peoples-republic-of-china/individual/other-taxes',
    bjBase: 'https://rsj.beijing.gov.cn/xxgk/2024zcwj/202608/t20260821_4831461.html',
    bjHf: 'https://gjj.beijing.gov.cn/web/zwgk61/2024zcwj/436433461/744103382/index.html',
    vat: 'https://taxsummaries.pwc.com/peoples-republic-of-china/individual/other-taxes',
    leaderPay: DOC_LEADER,
    cmcc: DOC_CMCC,
  };

  function compute(G, s) {
    const c = CITY[s.region] || CITY.bj;
    const m = G / 12;
    const base = m > 0 ? Math.min(Math.max(m, c.lo), c.hi) : 0;
    const hfBase = m > 0 ? Math.min(Math.max(m, c.hfLo), c.hfHi) : 0;
    const eeRate = c.ee.pen + c.ee.med + c.ee.unemp, erRate = c.er.pen + c.er.med + c.er.unemp + c.er.inj;
    const ee = m > 0 ? (base * eeRate + c.medFlat) * 12 : 0;
    const er = base * erRate * 12;
    const hfRate = s.local / 100;
    const hfEe = hfBase * hfRate * 12, hfEr = hfEe;
    const special = P.child * s.children + (P.elder[s.size] || 0) + (s.cadre ? P.rent : 0);
    const ded = P.basic + ee + hfEe + special;
    const bonus = s.factor > 12 ? G * (s.factor - 12) / s.factor : 0;
    const merged = progressive(G - ded);
    const sepMain = progressive(G - bonus - ded), sepBonus = bonusTax(bonus);
    const separate = bonus > 0 && sepMain + sepBonus < merged - 1e-6;
    const ir = separate ? sepMain + sepBonus : merged;
    const net = G - ee - hfEe - ir;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    const u = { m, base, hfBase, eeRate, erRate, hfRate, hfEe, hfEr, special, ded, bonus, separate, sepMain, sepBonus, merged,
      taxable: Math.max(0, (separate ? G - bonus : G) - ded), city: c };
    return { G, cost: G + er + hfEr, net, u, vatShare,
      parts: { er, ee, ir, hf: hfEe + hfEr, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'hf', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', hf: 'var(--k-vm)', vat: 'var(--k-vat)' };
  // The housing fund is your own savings account, so it's shown but not counted as tax (like Ireland's auto-enrolment).
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  const pc = (v, d = 1) => pct(v, Math.round(v * 1e4) % 100 ? d : 0);

  function tips(x) {
    const s = x.s;
    const c = CITY[s.region] || CITY.bj;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const bonusTip = n => () => `<h4>${t('tip.monthsPaid', n)}</h4><p>${t(n === 12 ? 'tip.f12' : 'tip.fBonus', n - 12)}</p>${sources('iit')}`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('leaderPay')}`,
      factor12: bonusTip(12), factor13: bonusTip(13), factor14: bonusTip(14), factor15: bonusTip(15),
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('ded')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('bjBase', 'bjHf', 'si')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size', eur(3000), eur(1500))}</p>${sources('ded')}`,
      cadre: () => `<h4>${t('cadre')}</h4><p>${t('tip.cadre', eur(1500))}</p>${sources('ded')}`,
      hfRule: () => `<h4>${t('hfLabel')}</h4><p>${t('tip.hfRule')}</p>${sources('bjHf')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.G / s.factor), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${row(t('bd.hfEr'), r.u.hfEr)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const u = r && r.u;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(c.lo), eur(c.hi), pc(c.er.med))}</p>${u ? `<table>
          ${row(t('tip.siBase'), u.base)}
          ${tot(`${pc(u.erRate)} × ${eur(u.base)} × 12`, r.parts.er)}</table>` : ''}${sources(s.region === 'sh' ? 'si' : 'bjBase', 'si')}`;
      },
      ee: r => {
        const u = r && r.u;
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(c.lo), eur(c.hi))}${c.medFlat ? ' ' + t('tip.eeFlat', eur(c.medFlat)) : ''}</p>${u ? `<table>
          ${row(t('tip.siBase'), u.base)}
          ${tot(`${pc(u.eeRate)} × ${eur(u.base)} × 12`, r.parts.ee)}</table>` : ''}${sources(s.region === 'sh' ? 'si' : 'bjBase', 'si')}`;
      },
      hf: r => {
        const u = r && r.u;
        return `<h4>${t('comp.hf')}</h4><p>${t('tip.hf', eur(c.hfLo), eur(c.hfHi))}</p>${u ? `<table>
          ${row(t('tip.hfBase'), u.hfBase)}
          ${row(t('bd.hfEe'), u.hfEe)}
          ${row(t('bd.hfEr'), u.hfEr)}
          ${tot(t('tip.hfTotal'), r.parts.hf)}</table>` : ''}<p class="m">${t('tip.hfM')}</p>${sources('bjHf')}`;
      },
      taxable: r => {
        const u = r && r.u;
        return `<h4>${t('bd.taxableCn')}</h4><p>${t('tip.taxable')}</p>${u ? `<table>
          ${row(u.separate ? t('tip.grossNoBonus') : t('bd.gross'), u.separate ? r.G - u.bonus : r.G)}
          ${row('− ' + t('tip.basic'), P.basic)}
          ${row('− ' + t('comp.ee'), r.parts.ee)}
          ${row('− ' + t('bd.hfEe'), u.hfEe)}
          ${row('− ' + t('tip.special'), u.special)}
          ${tot(t('bd.taxableCn'), u.taxable)}</table>` : ''}${sources('ded')}`;
      },
      ir: r => {
        const u = r && r.u;
        return `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${u && u.bonus > 0 ? `<table>
          ${row(t('tip.irMerged'), u.merged)}
          ${row(t('tip.irSep', eur(u.bonus)), u.sepMain + u.sepBonus)}
          ${tot(u.separate ? t('tip.irPickSep') : t('tip.irPickMerged'), r.parts.ir)}</table>` : ''}${sources('iit', 'ded')}`;
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
    const p = r.parts, u = r.u;
    return [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '+', k: 'hf', label: t('bd.hfEr'), v: u.hfEr, cls: 'sub' },
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
      { op: '−', k: 'hf', label: t('bd.hfEe'), v: u.hfEe },
      { op: '', k: 'taxable', label: t('bd.taxableCn'), v: u.taxable, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    ];
  }

  // Below the city's floor, contributions are due on the floor: at the minimum wage that's about 30% of pay.
  function trap(x) {
    const c = CITY[x.s.region] || CITY.bj, f = 12 / x.s.factor;
    return { band: [c.minWage * f, c.lo * f], text: [x.fmtM(c.minWage * f, 1), x.fmtM(c.lo * f, 1) + x.perUnit(), pct((c.lo * (c.ee.pen + c.ee.med + c.ee.unemp) + c.medFlat) / c.minWage, 0)] };
  }

  function top(x) {
    const c = CITY[x.s.region] || CITY.bj, at = c.hi * 12 / x.s.factor;
    return { at, text: [x.fmtM(at, 1) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'CNY', nextStep: 1000,
    regions: REGIONS, sizes: SIZES, minRoles: MIN_ROLES, factors: [12, 13, 14, 15], factorDigits: 0, vatStandard: 13,
    features: { cadre: true },
    communes: false,
    local: { label: 'hfLabel', tip: 'hfRule', digits: 0, step: 1, range: () => [5, 12], notDue: () => false, hideInMinister: false },
    state: { salary: 12000, factor: 12, minRole: 'pres', cadre: false, commune: '', region: 'bj', local: 12, vatRate: 13, size: 'none' },
    urlFields: { city: ['region', 'str', REGIONS], hf: ['local', 'num'], elder: ['size', 'str', SIZES], rent: ['cadre', 'bool'], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'leaderPay',
    refKeys: ['si', 'hf', 'ded', 'ir', 'bonus', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
