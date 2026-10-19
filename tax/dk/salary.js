// Danish salary rules for income year 2026. Loaded by ../index.html?country=dk.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const MIN_ROLES = ['minister', 'fin', 'pm'];

  const P = {
    am: .08,
    // ATP for 117+ hours a month, private sector; the other employer funds are per full-time employee.
    atp: { ee: 99 * 12, er: 198 * 12 },
    er: { aub: 705.25 * 4, barsel: 550 * 4, fin: 82 * 4, ferie: 5 * 4, aes: 457 },
    pf: 54100,
    bund: .1201,
    mellem: { at: 641200, r: .075 },
    top: { at: 777900, r: .075 },
    toptop: { at: 2592700, r: .05 },
    loft: .4457,
    besk: { pct: .1275, max: 63300 },
    beskSingle: { pct: .115, max: 50600 },
    job: { pct: .045, lo: 235200, max: 3100 },
    kirkeAvg: .87,
    // State tax on personal income after AM-bidrag, for the reference table.
    brackets: [[54100, 0], [641200, .1201], [777900, .1951], [2592700, .2701], [Infinity, .3201]],
    // Børne- og ungeydelse for a child aged 7-14, and the grøn check for parents.
    fam: { child: 13368, lo: 961100, rate: .02, green: 240, greenKids: 2, greenLo: 498200, greenRate: .075 },
  };
  const ER_FIXED = Object.values(P.er).reduce((a, b) => a + b, 0) + P.atp.er;

  // DST standardised monthly earnings 2025 minus pension contributions (12.5%); the median is scaled the same way.
  const REF_WAGES = [
    { key: 'med', m: 42070, year: 2025, color: '--w-med' },
    { key: 'avg', m: 46250, year: 2025, color: '--w-avg' },
  ];

  // Ministers on the pre-2026 scheme, rates from 1 April 2026. Old-scheme MPs get a tax-free 73 304 kr. on top.
  const GOV = {
    pm: 2030628.77, fin: 1786953.32, minister: 1624503.02,
    allow: 73304,
    mp: 1624503.02 - 793827.65, mpNew: 1140700,
  };
  const DOC_MIN = 'https://medst.dk/media/vava2onb/faktaark-om-vederlag-eftervederlag-og-pension-for-ministre.pdf';
  const DOC_MP = 'https://www.ft.dk/da/medlemmer/medlemmernes-vilkaar';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_MIN },
    { kind: 'stat', key: 'fin', icon: '💰', regime: 'fin', lo: GOV.fin, hi: GOV.fin, url: DOC_MIN },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_MIN },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.mp, hi: GOV.mp, url: DOC_MP },
    { kind: 'stat', key: 'mpNew', icon: '🆕', regime: 'mpNew', lo: GOV.mpNew, hi: GOV.mpNew, url: DOC_MP },
    // Salary without and with the employer's pension contribution, 2025 annual report.
    { kind: 'gov', name: 'Christian Kettel Thomsen', role: 'nb', lo: 4287000, hi: 5121000, url: 'https://www.nationalbanken.dk/media/eiybyol3/aarsrapport-2025-final-24-03-2026.pdf' },
    { kind: 'corp', name: 'Flemming Jensen', role: 'dsb', lo: 6944000, hi: 7994000, url: 'https://www.dsb.dk/globalassets/arsrapport/2025/vederlagsrapport-2025.pdf' },
    // CEO from 1 Feb 2025: fixed salary and total awarded, scaled from 11 months to a year.
    { kind: 'corp', name: 'Rasmus Errboe', role: 'orsted', lo: 13500000, hi: 20008000, url: 'https://cdn.orsted.com/-/media/annual-2025/remuneration-report-2025.pdf' },
  ];

  const SRC = {
    skatRates: 'https://skat.dk/hjaelp/bundskat-mellemskat-topskat-og-toptopskat',
    rsm: 'https://www.rsm.global/denmark/sites/default/files/media/ePublikationer/Satser%20og%20bel%C3%B8bsgr%C3%A6nser%2020252026%20-%20RSM%20-%20NET_0.pdf',
    themis: 'https://themis.dk/synopsis/docs/Oversigt_over_beloebsgraenser_2026_.html',
    besk: 'https://skm.dk/media/azxljwfl/faktaark-5-beskaeftigelsesfradrag.pdf',
    pskat: 'https://www.statistikbanken.dk/PSKAT',
    atp: 'https://www.borger.dk/pension-og-efterloen/atp-livslang-pension-oversigt/atp-bidraget/atp-satser-for-privat-virksomhed',
    sb: 'https://virk.dk/vejledning/samlet-betaling/sb-arbejdsgiver/sb-tidligere-satser/',
    aes: 'https://virk.dk/assets/6feKOXUjVtAaPklFxxBz9C/aes_bidragssatser_2026.pdf',
    bu: 'https://borger.dk/familie-og-boern/Familieydelser-oversigt/Boerne-ungeydelse',
    green: 'https://skat.dk/borger/fradrag/groen-check',
    vat: 'https://skat.dk/erhverv/moms',
    wages: 'https://www.dst.dk/nyt/51150',
    minPay: DOC_MIN,
    mpPay: DOC_MP,
    nb: 'https://www.nationalbanken.dk/media/eiybyol3/aarsrapport-2025-final-24-03-2026.pdf',
    dsb: 'https://www.dsb.dk/globalassets/arsrapport/2025/vederlagsrapport-2025.pdf',
    orsted: 'https://cdn.orsted.com/-/media/annual-2025/remuneration-report-2025.pdf',
  };

  let KIRKE = {};
  const kirkeOf = s => s.pa ? (KIRKE[s.commune] ?? P.kirkeAvg) : 0;
  const pos = v => Math.max(0, v);

  // Gross → AM-bidrag → personal income → taxable income. noAtp: politicians, who pay no ATP on their pay.
  function employeeSide(G, s, noAtp) {
    const atp = G > 0 && !noAtp ? P.atp.ee : 0;
    const amBase = pos(G - atp);
    const am = P.am * amBase;
    const pi = amBase - am;
    const besk = Math.min(P.besk.max, P.besk.pct * amBase);
    const single = s.household !== 'joint' && s.children > 0 ? Math.min(P.beskSingle.max, P.beskSingle.pct * amBase) : 0;
    const job = Math.min(P.job.max, P.job.pct * pos(amBase - P.job.lo));
    return { G, m: 0, atp, amBase, am, pi, besk, single, job, taxable: pi - besk - single - job };
  }

  // One person's income taxes; extraK/extraB is the personfradrag the spouse couldn't use.
  function personTax(u, s, extraK = 0, extraB = 0) {
    const kom = s.local / 100, kir = kirkeOf(s) / 100;
    const pfK = P.pf + extraK, pfB = P.pf + extraB;
    const baseK = pos(u.taxable - pfK);
    const mellemCut = pos(kom + P.bund + P.mellem.r - P.loft);
    const mellemRate = P.mellem.r - mellemCut;
    const kommune = kom * baseK, kirke = kir * baseK;
    const bund = P.bund * pos(u.pi - pfB);
    const mellem = mellemRate * pos(u.pi - P.mellem.at);
    const top = P.top.r * pos(u.pi - P.top.at);
    const toptop = P.toptop.r * pos(u.pi - P.toptop.at);
    return {
      kommune, kirke, bund, mellem, top, toptop, mellemRate, mellemCut,
      state: bund + mellem + top + toptop,
      unusedK: pos(pfK - u.taxable), unusedB: pos(pfB - u.pi),
    };
  }

  // Couples share only the personfradrag: your share of tax = household with your pay − household without it.
  function incomeTaxes(u, s, env) {
    const own = personTax(u, s);
    if (s.household !== 'joint') return { ...own, own, joint: null };
    const pu = env.partner, pOwn = personTax(pu, s);
    const me = personTax(u, s, pOwn.unusedK, pOwn.unusedB);
    const pWith = personTax(pu, s, own.unusedK, own.unusedB);
    const zero = personTax(employeeSide(0, s), s);
    const pWithout = personTax(pu, s, zero.unusedK, zero.unusedB);
    const diff = k => me[k] + pWith[k] - zero[k] - pWithout[k];
    return { ...me, kommune: diff('kommune'), kirke: diff('kirke'), state: diff('state'), own: me, joint: { pWith, pWithout } };
  }

  // Child benefit and the parents' grøn check you lose to your own income (each parent's half is cut on their own pay).
  function famLoss(u, s) {
    const n = s.children;
    if (!n) return { bu: 0, green: 0, total: 0, benefit: 0, greenMax: 0 };
    const share = s.household === 'joint' ? .5 : 1, f = P.fam;
    const benefit = share * n * f.child, greenMax = share * Math.min(n, f.greenKids) * f.green;
    const bu = Math.min(benefit, f.rate * pos(u.pi - f.lo));
    const green = Math.min(greenMax, f.greenRate * pos(u.pi - f.greenLo));
    return { bu, green, total: bu + green, benefit, greenMax };
  }

  function finish(G, u, tax, fam, s, er, allow, regime) {
    const cost = G + er + allow;
    const net = G - u.atp - u.am - tax.kommune - tax.kirke - tax.state - fam.total + allow;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? pos(net) * vatShare : 0;
    return {
      G, cost, net, u, tax, fam, allow, vatShare, regime,
      parts: { er, ee: u.atp, am: u.am, kom: tax.kommune, kirke: tax.kirke, stat: tax.state, fam: fam.total, vat },
    };
  }

  // Ministers: AM-bidrag and income tax as on a salary, no ATP, plus the tax-free expense allowance.
  function computeMinister(G, s, env) {
    const u = employeeSide(G, s, true);
    u.m = G / 12;
    return finish(G, u, incomeTaxes(u, s, env), famLoss(u, s), s, 0, G > 0 ? GOV.allow : 0, 'minister');
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = employeeSide(G, s);
    u.m = G / s.factor;
    return finish(G, u, incomeTaxes(u, s, env), famLoss(u, s), s, G > 0 ? ER_FIXED : 0, 0);
  }

  function own(p, plain, env) {
    if (p.regime === 'mp' || p.regime === 'mpNew') {
      const allow = p.regime === 'mp' ? GOV.allow : 0;
      const u = employeeSide(p.lo, plain, true);
      const r = finish(p.lo, u, incomeTaxes(u, plain, env), famLoss(u, plain), plain, 0, allow);
      return { net: r.net, allow };
    }
    return { net: computeMinister(p.lo, plain, env).net, allow: GOV.allow };
  }

  const COMP_KEYS = ['er', 'ee', 'am', 'stat', 'kom', 'kirke', 'fam', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', am: 'var(--k-csg)', stat: 'var(--k-fed)', kom: 'var(--k-com)', kirke: 'var(--k-reg)', fam: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'am', 'stat', 'kom', 'kirke', 'fam', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'am', 'stat', 'kom', 'kirke', 'fam'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'am', 'stat', 'kom', 'kirke', 'fam'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const rate = r => pct(r, r * 1000 % 1 ? 2 : 1);
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(GOV.pm), eur(GOV.fin), eur(GOV.minister))}</p>${sources('minPay')}`,
      allow: r => `<h4>${t('bd.allow')}</h4><p>${t('tip.allow', eur(GOV.allow))}</p>${r ? `<p><b>${eur(r.allow)}</b>${t('aYear')}</p>` : ''}${sources('minPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>${sources('minPay')}`,
      ee: () => `<h4>${t('comp.ee')}</h4><p>${t('tip.minEe')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('minPay', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      'factor12.12': () => `<h4>${t('tip.monthsPaid', num(12.12, 2))}</h4><p>${t('tip.f1212')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.pf))}</p>${sources('rsm')}`,
      paToggle: () => `<h4>${t('includePa')}</h4><p>${t('tip.church', num(P.kirkeAvg, 2) + '%')}</p>${sources('pskat')}`,
      komRule: () => `<h4>${t('comp.kom')}</h4><p>${t('tip.komRule', num(x.localRange()[0], 2) + '%', num(x.localRange()[1], 2) + '%')}</p>${sources('pskat')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), num(s.factor, 2), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p><table>
          <tr><td>${t('er.atp')}</td><td>${eur(P.atp.er)}</td></tr>
          <tr><td>${t('er.aub')}</td><td>${eur(P.er.aub)}</td></tr>
          <tr><td>${t('er.barsel')}</td><td>${eur(P.er.barsel)}</td></tr>
          <tr><td>${t('er.aes')}</td><td>${eur(P.er.aes)}</td></tr>
          <tr><td>${t('er.fin')}</td><td>${eur(P.er.fin + P.er.ferie)}</td></tr>
          <tr class="t"><td>${t('total')}${r && r.G > 0 ? ` (${pct(r.parts.er / r.G, 2)})` : ''}</td><td>${eur(ER_FIXED)}</td></tr></table>
          <p class="m">${t('tip.erM')}</p>${sources('atp', 'sb', 'aes')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.atp.ee / 12), eur(P.atp.er / 12))}</p>${sources('atp')}`,
      am: r => `<h4>${t('comp.am')}</h4><p>${t('tip.am')}</p>${r ? `<p>8% × ${eur(r.u.amBase)} = <b>${eur(r.parts.am)}</b></p>` : ''}${sources('rsm')}`,
      pi: r => `<h4>${t('bd.pi')}</h4><p>${t('tip.pi', r ? ` = <b>${eur(r.u.pi)}</b>` : '')}</p>`,
      besk: r => `<h4>${t('bd.besk')}</h4><p>${t('tip.besk', eur(P.besk.max), eur(P.job.lo), eur(P.job.max), eur(P.beskSingle.max))}</p>
        ${r ? `<table><tr><td>${t('bd.beskOnly')}</td><td>${eur(r.u.besk)}</td></tr>
          ${r.u.single > 0 ? `<tr><td>${t('bd.beskSingle')}</td><td>${eur(r.u.single)}</td></tr>` : ''}
          <tr><td>${t('bd.job')}</td><td>${eur(r.u.job)}</td></tr></table>` : ''}${sources('besk', 'rsm')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.taxable)}</b>` : '')}</p>`,
      kom: r => {
        const c = x.commune();
        return `<h4>${t('comp.kom')}</h4><p>${t('tip.kom', c && esc(c.name), num(s.local, 2) + '%', eur(P.pf))}</p>
          ${r && !r.tax.joint ? `<p>${num(s.local, 2)}% × (${eur(r.u.taxable)} − ${eur(P.pf)}) = <b>${eur(r.parts.kom)}</b></p>` : ''}
          ${r && r.tax.joint ? `<p class="m">${t('tip.jointCalc')}</p>` : ''}${sources('pskat')}`;
      },
      kirke: r => `<h4>${t('comp.kirke')}</h4><p>${t('tip.church', num(kirkeOf({ ...s, pa: true }), 2) + '%')}</p>
          ${r && s.pa ? `<p><b>${eur(r.parts.kirke)}</b>${t('aYear')}</p>` : ''}${sources('pskat')}`,
      stat: r => {
        if (!r) return `<h4>${t('comp.stat')}</h4><p>${t('tip.statShort')}</p>${sources('skatRates', 'rsm')}`;
        const o = r.tax.own, u = r.u;
        const row = (label, base, rr, v) => v > 0 ? `<tr><td>${label}: ${rate(rr)} × ${eur(base)}</td><td>${eur(v)}</td></tr>` : '';
        return `<h4>${t('comp.stat')}</h4><p class="m">${t('tip.statM', eur(P.mellem.at), eur(P.top.at), eur(P.toptop.at))}</p><table>
          ${row(t('tax.bund'), pos(u.pi - P.pf), P.bund, o.bund)}
          ${row(t('tax.mellem'), pos(u.pi - P.mellem.at), o.mellemRate, o.mellem)}
          ${row(t('tax.top'), pos(u.pi - P.top.at), P.top.r, o.top)}
          ${row(t('tax.toptop'), pos(u.pi - P.toptop.at), P.toptop.r, o.toptop)}
          <tr class="t"><td>${t('total')}</td><td>${eur(o.state)}</td></tr>
          ${r.tax.joint ? `<tr class="t"><td>${t('tip.yourShare')}</td><td>${eur(r.parts.stat)}</td></tr>` : ''}</table>
          ${o.mellemCut > 0 ? `<p class="m">${t('tip.loft', pct(P.loft, 2), rate(o.mellemRate))}</p>` : ''}
          ${r.tax.joint ? `<p class="m">${t('tip.jointCalc')}</p>` : ''}${sources('skatRates', 'rsm')}`;
      },
      fam: r => {
        const f = r && r.fam;
        return `<h4>${t('comp.fam')}</h4><p>${t('tip.fam', eur(P.fam.child), eur(P.fam.lo), eur(P.fam.green), eur(P.fam.greenLo))}</p>
          ${f && f.benefit ? `<table><tr><td>${t('tip.famBenefit')}</td><td>${eur(f.benefit)}</td></tr>
            <tr><td>− ${t('tip.famCut')}</td><td>${eur(f.bu)}</td></tr>
            <tr><td>${t('tip.famGreen')}</td><td>${eur(f.greenMax)}</td></tr>
            <tr><td>− ${t('tip.famCut')}</td><td>${eur(f.green)}</td></tr></table>` : ''}${sources('bu', 'green')}`;
      },
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
    const s = x.s, p = r.parts, u = r.u, c = x.commune(), min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (min) L.push({ op: '+', k: 'allow', label: t('bd.allow'), v: r.allow, cls: 'sub' });
    else L.push({ op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (p.ee > 0) L.push({ op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee });
    L.push(
      { op: '−', k: 'am', label: t('comp.am'), v: p.am, tax: p.am },
      { op: '=', k: 'pi', label: t('bd.pi'), v: u.pi, cls: 'tot' },
      { op: '−', k: 'besk', label: t('bd.beskAll'), v: u.besk + u.single + u.job, cls: 'sub' },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.taxable, cls: 'sub' },
      { op: '', k: 'pi', label: t('bd.pi'), v: u.pi },
      { op: '−', k: 'stat', label: t('comp.stat'), v: p.stat, tax: p.stat },
      { op: '−', k: 'kom', label: `${t('comp.kom')} (${num(s.local, 2)}%${c ? ', ' + c.name : ''})`, v: p.kom, tax: p.kom },
    );
    if (p.kirke > 0) L.push({ op: '−', k: 'kirke', label: `${t('comp.kirke')} (${num(kirkeOf(s), 2)}%)`, v: p.kirke, tax: p.kirke });
    if (p.fam > .5) L.push({ op: '−', k: 'fam', label: t('comp.fam'), v: p.fam, tax: p.fam });
    if (min) L.push({ op: '+', k: 'allow', label: t('bd.allow'), v: r.allow, cls: 'sub' });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // The work deductions grow with pay up to their caps; above the beskæftigelsesfradrag cap each krone is taxed in full.
  function trap(x) {
    const s = x.s, amAt = v => (v + P.atp.ee) / s.factor;
    const band = [amAt(P.pf / (1 - P.am)), amAt(P.besk.max / P.besk.pct)];
    return { band, text: [x.fmtM(band[0], 100), x.fmtM(band[1], 100) + x.perUnit(), x.fmtM(amAt(P.job.lo), 100), eur(P.besk.max)] };
  }

  function top(x) {
    const s = x.s, pi = m => employeeSide(m * s.factor, s).pi;
    const at = x.firstMonthly(m => pi(m) > P.mellem.at, 0, 1e6);
    if (!at) return null;
    const topAt = x.firstMonthly(m => pi(m) > P.top.at, 0, 1e6);
    const tt = x.firstMonthly(m => pi(m) > P.toptop.at, 0, 1e6);
    return { at, text: [x.fmtM(at, 100) + x.perUnit(), topAt ? x.fmtM(topAt, 100) + x.perUnit() : null, tt ? x.fmtM(tt, 1000) + x.perUnit() : null, eur(P.mellem.at)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'DKK', nextStep: 1000,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12, 12.12], factorDigits: 2, vatStandard: 25,
    features: { pa: true },
    state: { salary: 45000, factor: 12, minRole: 'minister', pa: false, commune: '101', region: '', local: 23.39, vatRate: 25, size: '' },
    urlFields: {
      months: ['factor', 'num', [12, 12.12]], church: ['pa', 'bool'],
      commune: ['commune', 'str'], kom: ['local', 'num'], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'komLabel', tip: 'komRule', digits: 2, step: .01, range: list => list.length ? [Math.min(...list.map(c => c.rate)), Math.max(...list.map(c => c.rate))] : [22, 27], notDue: () => false, hideInMinister: false },
    parseCommunes: list => {
      KIRKE = Object.fromEntries(list.map(([, , kirke, code]) => [code, kirke]));
      return list.map(([name, rate, kirke, code]) => ({ name, rate, kirke, region: '', sub: '', id: code }));
    },
    communeLabel: c => c.name,
    communeTag: c => `${num(c.rate, 2)}%`,
    communeHint: c => t('komHint', num(c.rate, 2) + '%', num(c.kirke, 2) + '%'),
    minSalary: role => Math.round(GOV[role]),
    env: s => ({ partner: employeeSide(pos(s.partnerGross || 0), s) }),
    compute, own,
    segLabels: {}, recvLabels: {},
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.' + (p.role || (p.regime.startsWith('mp') ? 'mpPay' : 'minPay'))),
    polNoteLink: 'minPay',
    refKeys: ['er', 'am', 'taxable', 'levels', 'couple', 'fam', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
