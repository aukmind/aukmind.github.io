// German salary rules for 2026, as assessed for the year (Veranlagung). Loaded by ../index.html?country=de.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['other', 'bybw', 'sn'];
  const MIN_ROLES = ['pst', 'minister', 'chancellor'];

  const P = {
    gfb: 12348, wk: 1230, sa: 36,
    bbg: { rv: 101400, kv: 69750 },
    // Employee and employer halves; KV includes half the average Zusatzbeitrag of 2.9%.
    rate: { rv: .093, av: .013, kv: .073 + .0145, pv: .018 },
    pv: { childless: .006, perKid: .0025, snShift: .005 },
    u3: .0015,
    vorsorgeCap: 1900, kvDeductible: .96,
    kfb: 3414 + 1464, kg: 259,
    entl: 4260, entlMore: 240,
    soli: { free: 20350, rate: .055, cap: .119 },
    kist: { bybw: .08, other: .09, sn: .09 },
    mini: 603, midi: 2000, F: .6619,
    miniEr: { kv: .13, rv: .15, tax: .02 }, miniEe: .036,
    // Reference table: zvE zones, with the marginal rate each zone starts at.
    brackets: [[12348, 0], [17799, .14], [69878, .24], [277825, .42], [INF, .45]],
  };
  const MIN_WAGE = 13.90 * 40 * 52 / 12;

  // Monthly gross, full-time: minimum wage at 40 h/week, Destatis median and mean for 2025 incl. bonuses.
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 54066 / 12, year: 2025, color: '--w-med' },
    { key: 'avg', m: 64441 / 12, year: 2025, color: '--w-avg' },
  ];

  // MP pay: the July 2026 rise was cancelled, so the year is 12 × 11,833.47.
  const MP = 11833.47 * 12;
  // B11: 16,567 until April, then the 2.8% advance from May 2026.
  const B11 = 16567 * 4 + 17031 * 8;
  const AMT = { chancellor: B11 * 5 / 3, minister: B11 * 4 / 3, pst: B11 * 4 / 3 * .75 };
  const GOV = Object.fromEntries(Object.entries(AMT).map(([k, v]) => [k, Math.round(v + MP / 2)]));
  const DOC_BMING = 'https://www.gesetze-im-internet.de/bming/__11.html';
  const DOC_MP = 'https://www.gesetze-im-internet.de/anpvfabwg_2026/__1.html';
  const POLITICIANS = [
    { kind: 'stat', key: 'chancellor', icon: '⭐', regime: 'chancellor', lo: GOV.chancellor, hi: GOV.chancellor, url: DOC_BMING },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_BMING },
    { kind: 'stat', key: 'pst', icon: '📎', regime: 'pst', lo: GOV.pst, hi: GOV.pst, url: 'https://www.gesetze-im-internet.de/parlstg_1974/__5.html' },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: MP, hi: MP, url: DOC_MP },
    { kind: 'gov', name: 'Joachim Nagel', role: 'bbk', lo: 440434.68 + 76693.78, hi: 522241.42, url: 'https://publikationen.bundesbank.de/caas/v1/media/953698/referenceDoc/cb63a201c4724df32f1485bb26e43ad9' },
    { kind: 'corp', name: 'Evelyn Palla', role: 'db', lo: 1170000, hi: 1170000, url: 'https://live.deutsche-boerse.com/nachrichten/Bahnvorstaende-bekamen-fuer-2025-rund-173-Millionen-Euro-b2c2da65-21f9-4385-93b6-6f6a40ed727d' },
  ];

  const SRC = {
    tariff: 'https://www.gesetze-im-internet.de/estg/__32a.html',
    wk: 'https://www.gesetze-im-internet.de/estg/__9a.html',
    vorsorge: 'https://www.gesetze-im-internet.de/estg/__10.html',
    kfb: 'https://www.gesetze-im-internet.de/estg/__32.html',
    kg: 'https://www.gesetze-im-internet.de/estg/__66.html',
    entl: 'https://www.gesetze-im-internet.de/estg/__24b.html',
    soli: 'https://www.gesetze-im-internet.de/solzg_1995/__3.html',
    kist: 'https://www.ekd.de/kirchensteuer.htm',
    sv: 'https://www.krankenkassen.de/gesetzliche-krankenkassen/system-gesetzliche-krankenversicherung/sozialversicherung-rechengroessen-beitragsbemessungsgrenze-versicherungspflichtgrenze/rechengroessen-2026/',
    pv: 'https://sozialversicherung-kompetent.de/pflegeversicherung/versicherungsrecht/1636-beitragssatz-pflegeversicherung-2026.html',
    u3: 'https://www.tk.de/firmenkunden/fachthemen/fachthema-beitraege/insolvenzgeldumlage-2047584',
    midi: 'https://lohn-info.de/uebergangsbereich_gleitzone_2026.html',
    mini: 'https://www.minijob-zentrale.de/',
    mw: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/mindestlohn.html',
    destatis: 'https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/04/PD26_113_621.html',
    vat: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html',
    bming: DOC_BMING,
    mpPay: DOC_MP,
    besold: 'https://correctiv.org/faktencheck/hintergrund/2026/05/12/was-hinter-dem-vorwurf-zu-merz-gehaltserhoehung-steckt/',
  };

  // §32a tariff on a single zvE, rounded down as the law does.
  function tariff(zve) {
    const x = Math.floor(Math.max(0, zve));
    let v;
    if (x <= 12348) v = 0;
    else if (x <= 17799) { const y = (x - 12348) / 1e4; v = (914.51 * y + 1400) * y; }
    else if (x <= 69878) { const z = (x - 17799) / 1e4; v = (173.10 * z + 2397) * z + 1034.87; }
    else if (x <= 277825) v = .42 * x - 11135.63;
    else v = .45 * x - 19470.38;
    return Math.floor(v);
  }
  const tariffFor = (zve, joint) => joint ? 2 * tariff(zve / 2) : tariff(zve);

  const pvEeRate = (region, kids) => P.rate.pv + (region === 'sn' ? P.pv.snShift : 0)
    + (kids === 0 ? P.pv.childless : 0) - P.pv.perKid * Math.max(0, Math.min(kids, 5) - 1);
  const pvErRate = region => P.rate.pv - (region === 'sn' ? P.pv.snShift : 0);

  // One employee's contributions for the year, assuming the same pay every month.
  function employee(G, region, kids) {
    const m = G / 12;
    const capRv = Math.min(G, P.bbg.rv), capKv = Math.min(G, P.bbg.kv);
    const pvEe = pvEeRate(region, kids), pvEr = pvErRate(region);
    if (G <= 0) return { G, regime: 'none', rv: 0, av: 0, kv: 0, pv: 0, ee: 0, er: { sv: 0, u3: 0, mini: 0, tax: 0 }, inc: 0, vors: 0 };
    if (m <= P.mini) {
      const rv = P.miniEe * G;
      const er = { sv: (P.miniEr.kv + P.miniEr.rv) * G, u3: P.u3 * G, mini: 0, tax: P.miniEr.tax * G };
      return { G, regime: 'mini', rv, av: 0, kv: 0, pv: 0, ee: rv, er, inc: 0, vors: 0 };
    }
    let rv, av, kv, pv, erSv;
    if (m <= P.midi) {
      // Übergangsbereich: contributions on a reduced base, the employee's share rising from zero.
      const span = P.midi - P.mini;
      const be = (P.F * P.mini + (P.midi / span - P.mini / span * P.F) * (m - P.mini)) * 12;
      const beAn = P.midi / span * (m - P.mini) * 12;
      rv = P.rate.rv * beAn; av = P.rate.av * beAn; kv = P.rate.kv * beAn;
      pv = (P.rate.pv + (region === 'sn' ? P.pv.snShift : 0)) * beAn
        + ((kids === 0 ? P.pv.childless : 0) - P.pv.perKid * Math.max(0, Math.min(kids, 5) - 1)) * be;
      const total = 2 * (P.rate.rv + P.rate.av + P.rate.kv + P.rate.pv) * be;
      const eeBase = (P.rate.rv + P.rate.av + P.rate.kv + P.rate.pv + (region === 'sn' ? P.pv.snShift : 0)) * beAn;
      erSv = total - eeBase;
      const out = { G, regime: 'midi', be, beAn, rv, av, kv, pv, ee: rv + av + kv + pv, er: { sv: erSv, u3: P.u3 * G, mini: 0, tax: 0 } };
      return withDeductions(out);
    }
    rv = P.rate.rv * capRv; av = P.rate.av * capRv; kv = P.rate.kv * capKv; pv = pvEe * capKv;
    erSv = (P.rate.rv + P.rate.av) * capRv + (P.rate.kv + pvEr) * capKv;
    return withDeductions({ G, regime: 'std', rv, av, kv, pv, ee: rv + av + kv + pv, er: { sv: erSv, u3: P.u3 * capRv, mini: 0, tax: 0 } });
  }
  // Einkünfte and deductible Vorsorgeaufwendungen (§10): pension in full, basic health and care in full, unemployment only under the 1,900 cap.
  function withDeductions(u) {
    const basic = u.kv * P.kvDeductible + u.pv;
    const other = basic >= P.vorsorgeCap ? basic : Math.min(P.vorsorgeCap, basic + u.av);
    return { ...u, wk: Math.min(u.G, P.wk), inc: Math.max(0, u.G - P.wk), basic, vors: u.rv + other };
  }

  // Household income tax with the Günstigerprüfung between Kindergeld and the child allowances.
  function assess(people, joint, kids) {
    const n = people.length;
    const inc = people.reduce((a, u) => a + u.inc, 0);
    const anyIncome = people.some(u => u.inc > 0);
    const sa = anyIncome ? P.sa * (joint ? 2 : 1) : 0;
    const vors = people.reduce((a, u) => a + u.vors, 0);
    const entl = !joint && kids > 0 ? P.entl + P.entlMore * (kids - 1) : 0;
    const base = Math.max(0, inc - sa - vors - entl);
    // A single parent keeps half the allowance; the other half belongs to the other parent.
    const kfb = kids * P.kfb * (joint ? 2 : 1);
    const kgCount = kids * P.kg * 12 * (joint ? 1 : .5);
    const e0 = tariffFor(base, joint), e1 = tariffFor(Math.max(0, base - kfb), joint);
    const useKfb = kids > 0 && e0 - e1 > kgCount;
    const est = useKfb ? e1 + kgCount : e0;
    const sb = e1;
    const free = P.soli.free * (joint ? 2 : 1);
    const soli = sb > free ? Math.min(P.soli.rate * sb, P.soli.cap * (sb - free)) : 0;
    return { n, inc, sa, vors, entl, base, kfb, kgCount, e0, e1, useKfb, est, sb, soli };
  }

  // Your share = the household with your pay − the household without it.
  function incomeTaxes(u, s, env) {
    const joint = s.household === 'joint', kids = s.children, pu = joint ? env.partner : null;
    const hh = assess(pu ? [u, pu] : [u], joint, kids);
    const wo = joint ? assess([{ inc: 0, vors: 0 }, pu], joint, kids) : null;
    const kRate = s.cadre ? P.kist[s.region] : 0;
    const ir = hh.est - (wo ? wo.est : 0);
    const soli = hh.soli - (wo ? wo.soli : 0);
    const kist = kRate * (hh.sb - (wo ? wo.sb : 0));
    return { hh, wo, ir, soli, kist, kRate };
  }

  // Ministers and MPs pay no social contributions: income tax, Soli and church tax only.
  function ministerPerson(G, role) {
    const diaet = role === 'mp' ? Math.min(G, MP) : Math.min(G, MP / 2);
    const amt = Math.max(0, G - diaet);
    const wk = Math.min(amt, P.wk);
    return { G, regime: 'minister', role, amt, diaet, rv: 0, av: 0, kv: 0, pv: 0, ee: 0, wk, inc: amt - wk + diaet, vors: 0, er: { sv: 0, u3: 0, mini: 0, tax: 0 } };
  }

  function finish(G, u, s, env, extra) {
    const tax = incomeTaxes(u, s, env);
    const er = u.er.sv + u.er.u3 + u.er.mini + u.er.tax;
    const net = G - u.ee - tax.ir - tax.soli - tax.kist;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + er, net, u, tax, vatShare, ...extra,
      parts: { er, ee: u.ee, ir: tax.ir, soli: tax.soli, kist: tax.kist, vat } };
  }

  function computeMinister(G, s, env, role = s.minRole) {
    return finish(G, ministerPerson(G, role), { ...s, regime: 'minister' }, env, { regime: 'minister' });
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = employee(G, s.region, s.children);
    u.m = G / s.factor;
    return finish(G, u, s, env, {});
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'soli', 'kist', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', soli: 'var(--k-csg)', kist: 'var(--k-com)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'soli', 'kist', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'soli', 'kist'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'soli', 'kist'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const regimeNote = r => r && r.u.regime === 'mini' ? `<p class="m">${t('tip.miniNote', eur(P.mini))}</p>`
      : r && r.u.regime === 'midi' ? `<p class="m">${t('tip.midiNote', eur(P.mini), eur(P.midi))}</p>` : '';
    const assessTable = (h, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${row(t('tip.incomes'), h.inc)}
      ${h.sa ? row('− ' + t('bd.sa'), -h.sa) : ''}
      ${row('− ' + t('bd.vorsorge'), -h.vors)}
      ${h.entl ? row('− ' + t('bd.entl'), -h.entl) : ''}
      ${tot(t('bd.zve'), h.base)}
      ${h.kfb ? row(t('tip.e0'), h.e0) : ''}
      ${h.kfb ? row(t('tip.e1', eur(h.kfb)), h.e1) : ''}
      ${h.kfb && h.useKfb ? row('+ ' + t('tip.kgBack'), h.kgCount) : ''}
      ${tot(t('tip.est'), h.est)}`;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${r ? `<table>
        ${r.u.amt > 0 ? row(t('tip.amtGehalt'), r.u.amt) : ''}${row(t(r.u.role === 'mp' ? 'tip.mpPay' : 'tip.halfMp'), r.u.diaet)}${tot(t('total'), r.G)}</table>` : ''}${sources('bming', 'besold', 'mpPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>`,
      ee: () => `<h4>${t('comp.ee')}</h4><p>${t('tip.minEe')}</p>`,
      wk: r => `<h4>${t('bd.wk')}</h4><p>${t('tip.minWk')}</p>${r ? `<p>${eur(r.u.wk)}</p>` : ''}`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('bming', 'besold', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('tariff', 'kfb')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('pv', 'kist')}`,
      cadre: () => `<h4>${t('comp.kist')}</h4><p>${t('tip.cadre')}</p>${sources('kist')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const e = r && r.u.er;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${e ? `<table>
          ${row(t(r.u.regime === 'mini' ? 'bd.miniSv' : 'bd.erSv'), e.sv)}
          ${e.tax ? row(t('bd.miniTax'), e.tax) : ''}
          ${row(t('bd.u3'), e.u3)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}${regimeNote(r)}${sources('sv', 'u3', 'mini', 'midi')}`;
      },
      u3: () => `<h4>${t('bd.u3')}</h4><p>${t('tip.u3')}</p>${sources('u3')}`,
      miniTax: () => `<h4>${t('bd.miniTax')}</h4><p>${t('tip.miniTax')}</p>${sources('mini')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>
          ${row(t('bd.rv'), r.u.rv)}${r.u.av ? row(t('bd.av'), r.u.av) : ''}${r.u.kv ? row(t('bd.kv'), r.u.kv) : ''}${r.u.pv ? row(t('bd.pv'), r.u.pv) : ''}
          ${tot(t('youPay'), r.u.ee)}</table>` : ''}${regimeNote(r)}${sources('sv', 'pv', 'midi')}`,
      rv: () => `<h4>${t('bd.rv')}</h4><p>${t('tip.rv', eur(P.bbg.rv))}</p>${sources('sv')}`,
      av: () => `<h4>${t('bd.av')}</h4><p>${t('tip.av', eur(P.bbg.rv))}</p>${sources('sv')}`,
      kv: () => `<h4>${t('bd.kv')}</h4><p>${t('tip.kv', eur(P.bbg.kv))}</p>${sources('sv')}`,
      pv: () => `<h4>${t('bd.pv')}</h4><p>${t('tip.pv', pct(pvEeRate(s.region, s.children), 2))}</p>${sources('pv')}`,
      wk: r => `<h4>${t('bd.wk')}</h4><p>${t('tip.wk')}</p>${r ? `<p>${eur(r.u.wk)}</p>` : ''}${sources('wk')}`,
      vorsorge: r => `<h4>${t('bd.vorsorge')}</h4><p>${t('tip.vorsorge')}</p>${r && r.u.vors ? `<table>
          ${row(t('bd.rv'), r.u.rv)}${row(t('tip.basic'), r.u.basic)}
          ${r.u.vors - r.u.rv - r.u.basic > .5 ? row(t('tip.avPart'), r.u.vors - r.u.rv - r.u.basic) : ''}
          ${tot(t('total'), r.u.vors)}</table>` : ''}${sources('vorsorge')}`,
      zve: r => `<h4>${t('bd.zve')}</h4><p>${t('tip.zve')}</p>${r ? `<table>${assessTable(r.tax.hh)}</table>` : ''}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('tariff', 'kfb')}`;
        const d = r.tax;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t(d.wo ? 'tip.irJoint' : 'tip.irSingle')}</p><table>
          ${assessTable(d.hh, d.wo ? t('tip.irHousehold') : '')}
          ${d.wo ? `${row('− ' + t('tip.irWithout'), -d.wo.est)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${s.children ? `<p class="m">${t('tip.guenstiger', eur(P.kg), d.hh.useKfb)}</p>` : ''}${sources('tariff', 'kfb', 'kg', 'entl')}`;
      },
      soli: r => `<h4>${t('comp.soli')}</h4><p>${t('tip.soli', eur(P.soli.free), eur(2 * P.soli.free))}</p>${r ? `<table>
          ${row(t('tip.soliBase'), r.tax.hh.sb)}${tot(t('tip.soliHh'), r.tax.hh.soli)}
          ${r.tax.wo ? `${row('− ' + t('tip.irWithout'), -r.tax.wo.soli)}${tot(t('tip.irYours'), r.parts.soli)}` : ''}</table>` : ''}${sources('soli')}`,
      kist: r => `<h4>${t('comp.kist')}</h4><p>${t('tip.kist')}</p>${r && r.tax.kRate ? `<p>${pct(r.tax.kRate, 0)} × ${eur(r.tax.hh.sb - (r.tax.wo ? r.tax.wo.sb : 0))} = ${eur(r.parts.kist)}</p>` : `<p>${t('tip.kistOff')}</p>`}${sources('kist')}`,
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
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (!min) {
      L.push({ op: '+', k: 'er', label: t(u.regime === 'mini' ? 'bd.miniSv' : 'bd.erSv'), v: u.er.sv, tax: u.er.sv, cls: 'sub' });
      if (u.er.tax) L.push({ op: '+', k: 'miniTax', label: t('bd.miniTax'), v: u.er.tax, tax: u.er.tax, cls: 'sub' });
      L.push({ op: '+', k: 'u3', label: t('bd.u3'), v: u.er.u3, tax: u.er.u3, cls: 'sub' });
    }
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (!min) {
      L.push({ op: '−', k: 'rv', label: t('bd.rv'), v: u.rv, tax: u.rv });
      if (u.av) L.push({ op: '−', k: 'av', label: t('bd.av'), v: u.av, tax: u.av });
      if (u.kv) L.push({ op: '−', k: 'kv', label: t('bd.kv'), v: u.kv, tax: u.kv });
      if (u.pv) L.push({ op: '−', k: 'pv', label: t('bd.pv'), v: u.pv, tax: u.pv });
    }
    if (u.regime !== 'mini') {
      L.push({ op: '', k: 'wk', label: t('bd.wk'), v: u.wk, cls: 'sub' });
      if (u.vors) L.push({ op: '', k: 'vorsorge', label: t('bd.vorsorge'), v: u.vors, cls: 'sub' });
      L.push({ op: '=', k: 'zve', label: t(r.tax.wo ? 'bd.zveHh' : 'bd.zve'), v: r.tax.hh.base, cls: 'sub' });
    }
    L.push({ op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir });
    if (p.soli > .5) L.push({ op: '−', k: 'soli', label: t('comp.soli'), v: p.soli, tax: p.soli });
    if (p.kist > .5) L.push({ op: '−', k: 'kist', label: t('comp.kist'), v: p.kist, tax: p.kist });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low pay: the minijob cliff at 603 € a month, then the Übergangsbereich up to 2,000 €.
  function trap(x) {
    const s = x.s, k = 12 / s.factor;
    return { band: [P.mini * k, P.midi * k], text: [x.fmtM(P.mini * k, 1), x.fmtM(P.midi * k, 1) + x.perUnit()] };
  }

  // Where the 42% rate starts, then the contribution ceilings.
  function top(x) {
    const s = x.s, env = x.env();
    const plain = { ...s, regime: 'employee', household: 'single', children: 0 };
    const at = x.firstMonthly(m => compute(m * s.factor, plain, env).tax.hh.base > 69878, 1000, 50000);
    if (!at) return null;
    return {
      at,
      text: [x.fmtM(at, 50) + x.perUnit(), x.fmtM(P.bbg.kv / s.factor, 1) + x.perUnit(), x.fmtM(P.bbg.rv / s.factor, 1) + x.perUnit(), pct(.42 * 1.055, 2)],
    };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [12, 13], factorDigits: 0, vatStandard: 19,
    features: { cadre: true },
    communes: false,
    local: null,
    state: { salary: 4000, factor: 12, minRole: 'minister', cadre: false, commune: '', region: 'other', local: 0, vatRate: 19, size: '' },
    urlFields: {
      church: ['cadre', 'bool'], region: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES], months: ['factor', 'num', [12, 13]],
    },
    minSalary: role => GOV[role],
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0), s.region, s.children) }),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: p => p.regime === 'mp' ? 'polNote.mp' : 'polNote.minister',
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'bming',
    refKeys: ['er', 'ee', 'midi', 'ir', 'kids', 'soli', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
