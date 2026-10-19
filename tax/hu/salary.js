// Hungarian salary rules for income year 2026. Loaded by ../index.html?country=hu.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['none', 'u25', 'mother'];
  const MIN_ROLES = ['ss', 'min', 'minMp', 'pm'];

  const P = {
    szja: .15, tb: .185, szocho: .13,
    // Under-25 exemption: July 2025 average gross, per month.
    u25: 715765,
    // Családi kedvezmény: monthly tax-base reduction per child, by number of children.
    fam: [0, 133340, 266660, 440000],
    brackets: [[INF, .15]],
  };
  const MIN_WAGE = 322800;
  const AVG_2025 = 727496;

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 575000, year: 2025, color: '--w-med' },
    { key: 'avg', m: AVG_2025, year: 2025, color: '--w-avg' },
  ];

  // Monthly gross since the 2026 cuts: MP base = 1.8 × the 2025 average wage, the PM gets 1.91 × that on top.
  const MP = Math.round(1.8 * AVG_2025);
  const MONTHLY = { pm: MP + Math.round(1.91 * MP), minMp: 2000000 + MP, min: 3500000, ss: 3000000, mp: MP };
  const GOV = Object.fromEntries(Object.entries(MONTHLY).map(([k, v]) => [k, v * 12]));
  const CAP = Math.round(4.94 * AVG_2025);
  const DOC_GOV = 'https://telex.hu/belfold/2026/09/19/kormanytagok-miniszterek-allamtitkarok-fizetes-csokkentes-magyar-peter-auto';
  const DOC_PM = 'https://index.hu/belfold/2026/09/11/megye-varmegye-kormanymegbizott-foispan-miniszterelnoki-illetmeny-valasztokeruletek-torveny-magyar-kozlony/';
  const DOC_MP = 'https://www.vg.hu/vilaggazdasag-magyar-gazdasag/2026/06/kepviselo-fizetes-csokkentes-politikus-parlament';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', lo: GOV.pm, hi: GOV.pm, url: DOC_PM },
    { kind: 'stat', key: 'min', icon: '💼', lo: GOV.min, hi: GOV.min, url: DOC_GOV },
    { kind: 'stat', key: 'minMp', icon: '📎', lo: GOV.minMp, hi: GOV.minMp, url: DOC_GOV },
    { kind: 'stat', key: 'ss', icon: '🖇️', lo: GOV.ss, hi: GOV.ss, url: DOC_GOV },
    { kind: 'stat', key: 'mp', icon: '🏛️', lo: GOV.mp, hi: GOV.mp, url: DOC_MP },
    { kind: 'gov', name: 'Varga Mihály', role: 'mnb', lo: 6854000 * 12, hi: 6854000 * 12, url: 'https://mfor.hu/cikkek/kozelet/varga-mihaly-fizetese-csaknem-megduplazodik-.html' },
    { kind: 'gov', name: 'Orbán Viktor', role: 'pmOld', lo: 8075206 * 12, hi: 8075206 * 12, url: 'https://www.penzcentrum.hu/karrier/20260405/ennyi-orban-viktor-fizetese-2026-ban-ekkora-osszeget-keres-a-magyar-miniszterelnok-havonta-1196346' },
    { kind: 'corp', key: 'cap', icon: '🏢', lo: CAP * 12, hi: CAP * 12 * 1.2, url: 'https://telex.hu/gazdasag/2026/08/19/magas-kozepes-alacsony-komplexitasu-allami-cegek-szabalyozes-dijazas-magyar-kozlony' },
  ];

  const SRC = {
    szja: 'https://nav.gov.hu/ado/szja',
    tb: 'https://adozona.hu/2026_os_adovaltozasok/Tarsadalombiztositasi_kozterhek_es_minimali_5904FK',
    szocho: 'https://tudastar.novitax.hu/szocialis-hozzajarulasi-ado-2026/',
    fam: 'https://www.bdo.hu/hu-hu/aktualitasok-blog/blog/csaladi-kedvezmenyek-2026',
    famJar: 'https://nav.gov.hu/sajtoszoba/hirek/Az_szja-mentesseg_mellett_is_jar_a_csaladi_kedvezmeny',
    u25: 'https://nav.gov.hu/ado/szja/szja-kedvezmenyek/25-ev-alatti-fiatalok-kedvezmenye',
    mothers: 'https://nav.gov.hu/sajtoszoba/hirek/Januartol_a_40_ev_alatti_ketgyerekes_anyak_is_csatlakoznak_az_szja-mentesseghez',
    mothers30: 'https://adozona.hu/szja_ekho_kulonado/Anyak_szjamentessege__januartol_nem_adoznak_FSEZIN',
    minWage: 'https://eduline.hu/palyakezdes/20251128_minimber_es_garantalt_berminimum_2026',
    ksh: 'https://eduline.hu/palyakezdes/20260220_ksh-fizetes-median-atlagber',
    vat: 'https://nav.gov.hu/ado/afa',
    govPay: DOC_GOV,
    pmPay: DOC_PM,
    mpPay: DOC_MP,
    budget27: 'https://dailynewshungary.com/budget-magyar-tax-cuts-allowance-pension/',
  };

  const famBase = kids => kids > 0 ? kids * P.fam[Math.min(kids, 3)] * 12 : 0;
  const famValue = kids => P.szja * famBase(kids);

  // One person's SZJA and TB before the family allowance.
  function person(G, exemption = 'none') {
    const exempt = exemption === 'mother' ? G : exemption === 'u25' ? Math.min(G, P.u25 * 12) : 0;
    const base = G - exempt;
    return { G, exempt, base, szja: P.szja * base, tb: P.tb * G };
  }
  const room = p => p ? p.szja + p.tb : 0;

  // The family allowance comes off SZJA, then TB; a couple may split it however suits them best.
  function family(me, partner, kids) {
    const value = famValue(kids);
    const used = Math.min(value, room(me) + room(partner));
    const usedWo = Math.min(value, room(partner));
    return { value, used, usedWo, mine: used - usedWo };
  }

  function compute(G, s, env) {
    const u = person(G, s.region);
    u.m = G / s.factor;
    const partner = s.household === 'joint' ? env.partner : null;
    const fam = family(u, partner, s.children);
    const er = P.szocho * G;
    const net = G - u.szja - u.tb + fam.mine;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + er, net, u, fam, er, vatShare,
      parts: { er, ee: u.tb, ir: u.szja, fam: -fam.mine, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'fam', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', fam: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'fam', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'fam'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'fam'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pmPay', 'govPay', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('fam', 'famJar')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg', eur(P.u25))}</p>${sources('u25', 'mothers', 'mothers30')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>${tot(`13% × ${eur(r.G)}`, r.er)}</table>` : ''}${sources('szocho')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>${tot(`18.5% × ${eur(r.G)}`, r.u.tb)}</table>` : ''}${sources('tb')}`,
      exempt: r => `<h4>${t('bd.exempt')}</h4><p>${t('tip.reg', eur(P.u25))}</p>${r ? `<p>−${eur(r.u.exempt)}</p>` : ''}${sources('u25', 'mothers')}`,
      taxable: r => `<h4>${t('bd.taxableHu')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.base)}</b>` : '')}</p>`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${row(t('bd.taxableHu'), r.u.base)}${tot(`15% × ${eur(r.u.base)}`, r.u.szja)}</table>` : ''}${sources('szja')}`,
      fam: r => {
        const f = r && r.fam;
        return `<h4>${t('comp.fam')}</h4><p>${t('tip.fam')}</p>${f && f.value ? `<table>
          ${row(t('tip.famBase', s.children), famBase(s.children))}
          ${row(t('tip.famValue'), f.value)}
          ${tot(t('tip.famUsed'), f.used)}
          ${f.usedWo ? row('− ' + t('tip.famWithout'), -f.usedWo) : ''}
          ${tot(t('tip.famYours'), f.mine)}</table>` : ''}<p class="m">${t('tip.famM')}</p>${sources('fam', 'famJar')}`;
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
    if (r.u.exempt > 0) L.push({ op: '', k: 'exempt', label: t('bd.exempt'), v: r.u.exempt, cls: 'sub' });
    L.push(
      { op: '', k: 'taxable', label: t('bd.taxableHu'), v: r.u.base, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
    );
    if (Math.abs(p.fam) > .5) L.push({ op: '+', k: 'fam', label: t('comp.fam'), v: -p.fam, tax: p.fam });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // With children the family allowance can wipe out SZJA and then TB: no employee tax until it runs out.
  function trap(x) {
    const s = x.s, minM = MIN_WAGE * 12 / s.factor;
    const env = x.env();
    const end = s.children > 0 ? x.firstMonthly(m => {
      const r = compute(m * s.factor, s, env);
      return r.parts.ee + r.parts.ir + r.parts.fam > 1;
    }, 0, 5e7) : null;
    const fam = s.children > 0 ? eur(famValue(s.children) / 12) : null;
    if (!end || end <= minM + 1) return { band: [minM, minM], text: [x.fmtM(minM, 100), null, fam] };
    return { band: [minM, end], text: [x.fmtM(minM, 100), x.fmtM(end, 1000) + x.perUnit(), fam] };
  }

  // The under-25 exemption stops at the average wage; above it SZJA applies on the extra.
  function top(x) {
    const s = x.s;
    if (s.region !== 'u25') return null;
    return { at: P.u25 * 12 / s.factor, text: [x.fmtM(P.u25 * 12 / s.factor, 1) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'HUF', nextStep: 40000,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 27,
    features: {},
    communes: false,
    local: null,
    state: { salary: 600000, factor: 12, minRole: 'pm', commune: '', region: 'none', local: 0, vatRate: 27, size: 'all' },
    urlFields: { exempt: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: s => ({ partner: person(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    segLabels: { fam: 'famLost' }, recvLabels: { fam: 'famReceived' },
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'govPay',
    refKeys: ['er', 'ee', 'ir', 'exempt', 'fam', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
