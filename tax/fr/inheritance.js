// French inheritance tax for deaths in 2026, by relationship. Loaded by ../inheritance.html?country=fr.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  // Art. 777 CGI, unchanged by the 2026 finance law.
  const RATES = {
    direct: [[8072, .05], [12109, .10], [15932, .15], [552324, .20], [902838, .30], [1805677, .40], [INF, .45]],
    sibling: [[24430, .35], [INF, .45]],
    relative: [[INF, .55]],
    other: [[INF, .60]],
  };
  const ALLOW = { child: 100000, grandchild: 1594, sibling: 15932, nephew: 7967, relative: 1594, other: 1594, disabled: 159325 };
  const AV = { before: 152500, mid: 700000, r1: .20, r2: .3125, after: 30500 };
  const RELS = ['partner', 'child', 'grandchild', 'sibling', 'nephew', 'relative', 'other'];
  const GROUPS = ['direct', 'sibling', 'relative', 'other'];
  const SOURCES = [
    ['spRates', 'https://www.service-public.gouv.fr/particuliers/vosdroits/F14198'],
    ['impots', 'https://www.impots.gouv.fr/particulier/questions/comment-dois-je-calculer-les-droits-de-succession'],
    ['spAv', 'https://www.service-public.gouv.fr/particuliers/vosdroits/F35794'],
    ['home', 'https://www.cnaf.notaires.fr/actualites/succession-abattement-de-20-au-titre-de-la-residence-principale'],
    ['bofipSib', 'https://bofip.impots.gouv.fr/bofip/3543-PGP.html/identifiant=BOI-ENR-DMTG-10-10-30-20120912'],
    ['lf2026', 'https://www.assemblee-nationale.fr/dyn/17/textes/l17t0227_texte-adopte-seance.pdf'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function slices(x, br, from = 0) {
    const out = []; let lo = 0;
    for (const [hi, r] of br) {
      const a = Math.max(lo, from), b = Math.min(from + x, hi);
      if (b > a) out.push({ from: a, to: b, r, tax: (b - a) * r });
      lo = hi;
    }
    return out;
  }

  function bracketsFor(inp, rel) {
    if (rel === 'child' || rel === 'grandchild') return RATES.direct;
    if (rel === 'sibling' || (rel === 'nephew' && inp.rep)) return RATES.sibling;
    return rel === 'nephew' || rel === 'relative' ? RATES.relative : RATES.other;
  }
  function allowanceFor(inp, rel) {
    let a = ALLOW[rel];
    if (inp.rep && rel === 'grandchild') a = ALLOW.child / Math.max(1, inp.repN);
    if (inp.rep && rel === 'nephew') a = ALLOW.sibling / Math.max(1, inp.repN);
    return a + (inp.disabled ? ALLOW.disabled : 0);
  }

  // Returns the tax and the steps that produce it.
  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), avB = pos(inp.avBefore), avA = pos(inp.avAfter);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    const exempt = rel === 'partner' || (rel === 'sibling' && inp.sibExempt);

    // 990 I is a separate levy: a sibling living with them still pays it, only spouses and partners don't.
    let avTax = 0;
    if (avB > 0 && rel !== 'partner') {
      const x = Math.max(0, avB - AV.before);
      avTax = Math.min(x, AV.mid) * AV.r1 + Math.max(0, x - AV.mid) * AV.r2;
    }

    let tax = 0;
    if (exempt) {
      lines.push({ label: t(rel === 'partner' ? 'line.partner' : 'line.sibExempt'), tax: 0, cls: 'sub' });
    } else {
      let base = share;
      const homeOff = inp.homeLived ? .2 * Math.min(pos(inp.home), share) : 0;
      if (homeOff > 0) { lines.push({ label: t('line.home'), amt: -homeOff, cls: 'sub' }); base -= homeOff; }
      const av757 = Math.max(0, avA - AV.after);
      if (av757 > 0) { lines.push({ label: t('line.av757'), amt: av757, cls: 'sub' }); base += av757; }

      // Gifts from the last 15 years use the allowance first, then the low brackets.
      const allow = allowanceFor(inp, rel), gifts = pos(inp.gifts);
      const used = Math.min(gifts, allow), giftTaxed = gifts - used;
      lines.push({ label: used > 0 ? t('line.allowUsed', eur(allow), eur(used)) : t('line.allow', eur(allow)), amt: -Math.min(base, allow - used), cls: 'sub' });
      const taxable = Math.max(0, base - (allow - used));
      if (giftTaxed > 0) lines.push({ label: t('line.giftBrackets', eur(giftTaxed)), cls: 'sub' });
      lines.push({ label: t('line.taxable'), amt: taxable, cls: 'sub' });
      for (const sl of slices(taxable, bracketsFor(inp, rel), giftTaxed)) {
        lines.push({ label: `${eur(sl.from)} – ${eur(sl.to)}`, amt: sl.to - sl.from, rate: sl.r, tax: sl.tax });
        tax += sl.tax;
      }
    }
    if (avTax > 0) lines.push({ label: t('line.av990'), amt: avB - AV.before, rate: avB - AV.before > AV.mid ? null : AV.r1, tax: avTax });
    const total = share + avB + avA;
    const all = tax + avTax;
    return { tax: all, inh: tax, avTax, lines, total, avg: total > 0 ? all / total : 0 };
  }

  function refTable() {
    const bounds = [...new Set(GROUPS.flatMap(c => RATES[c].map(b => b[0])))].sort((a, b) => a - b);
    return bounds.map(b => ({
      to: b === INF ? t('inh.above') : eur(b),
      cells: GROUPS.map(c => { const r = RATES[c].find(x => x[0] >= b)[1]; return { r, txt: pct(r, 0) }; }),
    }));
  }
  const repShown = s => s.rel === 'grandchild' || s.rel === 'nephew';
  const plain = { share: 0, rep: false, repN: 1, sibExempt: false, disabled: false, home: 0, homeLived: false, gifts: 0, avBefore: 0, avAfter: 0 };

  return {
    SOURCES,
    GAPS: ['usufruct', 'largeFamily', 'gifts', 'av757', 'av990', 'abroad'],
    state: { share: 200000, rel: 'child', rep: false, repN: 1, sibExempt: false, disabled: false, home: 0, homeLived: false, gifts: 0, avBefore: 0, avAfter: 0 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS],
      rep: ['rep', 'bool'], repn: ['repN', 'num'], sib: ['sibExempt', 'bool'], dis: ['disabled', 'bool'],
      home: ['home', 'num'], lived: ['homeLived', 'bool'], gifts: ['gifts', 'num'], av: ['avBefore', 'num'], av70: ['avAfter', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'rep', id: 'repChild', type: 'check', label: 'rep', hint: 'repHint', show: s => s.rel === 'grandchild' },
      { key: 'rep', id: 'repSib', type: 'check', label: 'repSib', hint: 'repHint', show: s => s.rel === 'nephew' },
      { key: 'repN', type: 'stepper', min: 1, label: 'repCount', show: s => repShown(s) && s.rep },
      { key: 'sibExempt', type: 'check', label: 'sibExempt', hint: 'sibExemptHint', show: s => s.rel === 'sibling' },
      { key: 'disabled', type: 'check', label: 'disabled', hint: 'disabledHint', hintIf: s => s.disabled, show: s => s.rel !== 'partner' },
      { key: 'home', type: 'money', label: 'home', more: true },
      { key: 'homeLived', type: 'check', label: 'homeLived', hint: 'homeHint', more: true },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true },
      { key: 'avBefore', type: 'money', label: 'avBefore', hint: 'avBeforeHint', more: true },
      { key: 'avAfter', type: 'money', label: 'avAfter', hint: 'avAfterHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = inheritanceTax(s, s.rel);
      return { ...r, segs: [
        { k: 'inh', label: t('inh.inhTax'), v: r.inh, color: 'var(--k-tax)' },
        { k: 'av', label: t('avTax'), v: r.avTax, color: 'var(--k-rate)' },
      ] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel, ...inheritanceTax({ ...s, rep: false, sibExempt: false }, k) })),
    },
    chart: {
      xMax: 1500000, step: 5000, yMax: 65,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.disabled],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => inheritanceTax({ ...plain, disabled: s.disabled, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), ...GROUPS.map(g => t('relShort.' + g))], rows: refTable() } },
      { h: t('refAllowH'), list: ['partner', 'child', 'grandchild', 'sibling', 'nephew', 'other'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
