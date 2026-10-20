// Hungarian inheritance duty (öröklési illeték) for deaths in 2026, paid by each heir. Loaded by ../inheritance.html?country=hu.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const GENERAL = .18, HOME = .09, STEP_FREE = 20000000, MOVABLE_FREE = 300000;
  const RELS = ['partner', 'lineal', 'sibling', 'step', 'other'];
  const EXEMPT = ['partner', 'lineal', 'sibling'];
  const COLORS = { partner: '--r-partner', lineal: '--r-child', sibling: '--r-sibling', step: '--r-relative', other: '--r-other' };
  const SOURCES = [
    ['itv', 'https://net.jogtar.hu/jogszabaly?docid=99000093.tv'],
    ['nav', 'https://nav.gov.hu/ado/illetek'],
    ['bank360', 'https://bank360.hu/blog/orokosodesi-illetek'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function duty(inp, rel) {
    const share = pos(inp.share), home = Math.min(pos(inp.home), share);
    const movables = Math.min(pos(inp.movables), share - home);
    const lines = [{ label: t('line.share'), amt: share }];
    let tax = 0;
    if (EXEMPT.includes(rel)) {
      lines.push({ label: t('line.exempt.' + rel), tax: 0, cls: 'sub' });
    } else {
      let homeBase = home, restBase = share - home;
      const mov = Math.min(movables, MOVABLE_FREE);
      if (mov > 0) {
        lines.push({ label: t('line.movables', eur(MOVABLE_FREE)), amt: -mov, cls: 'sub' });
        restBase -= mov;
      }
      if (rel === 'step') {
        // The 20 million first shrinks the home's base, what's left frees general-rate assets.
        const onHome = Math.min(homeBase, STEP_FREE), onRest = Math.min(restBase, STEP_FREE - onHome);
        lines.push({ label: t('line.step', eur(STEP_FREE)), amt: -(onHome + onRest), cls: 'sub' });
        homeBase -= onHome; restBase -= onRest;
      }
      if (homeBase > 0) {
        tax += homeBase * HOME;
        lines.push({ label: t('line.home'), amt: homeBase, rate: HOME, tax: homeBase * HOME });
      }
      if (restBase > 0) {
        tax += restBase * GENERAL;
        lines.push({ label: t('line.rest'), amt: restBase, rate: GENERAL, tax: restBase * GENERAL });
      }
    }
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    SOURCES,
    GAPS: ['valuation', 'usufruct', 'stepOrder', 'movOrder', 'special', 'gifts', 'minors', 'insurance', 'fees', 'date'],
    currency: 'HUF',
    nextStep: 1000000,
    state: { share: 40000000, rel: 'other', home: 25000000, movables: 0 },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], home: ['home', 'num'], movables: ['movables', 'num'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'shareLabel', hint: 'shareHint', step: 1000000 },
      { key: 'rel', type: 'segCol', label: 'heirIs', options: RELS, optLabel: 'rel.' },
      { key: 'home', type: 'money', label: 'home', hint: 'homeHint', step: 1000000, show: s => !EXEMPT.includes(s.rel) },
      { key: 'movables', type: 'money', label: 'movables', hint: 'movablesHint', step: 100000, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => duty(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(${COLORS[k]})`, me: k === s.rel, ...duty(s, k) })),
    },
    chart: {
      xMax: 300000000, step: 1000000, yMax: 20,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.share, s.home],
      lines: s => {
        const ratio = pos(s.share) > 0 ? Math.min(pos(s.home), pos(s.share)) / pos(s.share) : 0;
        const f = k => x => duty({ share: x, home: x * ratio, movables: 0 }, k).avg;
        return [
          { label: t('chartExempt'), color: '--r-partner', me: EXEMPT.includes(s.rel), f: () => 0 },
          ...['step', 'other'].map(k => ({ label: t('rel.' + k), color: COLORS[k], me: k === s.rel, f: f(k) })),
        ];
      },
    },
    ref: () => [
      { table: { head: [t('relation'), t('refHome'), t('refRest')], rows: RELS.map(k => {
        const free = EXEMPT.includes(k);
        const cell = r => free ? { r: 0, txt: t('refExempt') } : { r, txt: pct(r, 0) + (k === 'step' ? ' ' + t('refAfterStep') : '') };
        return { to: t('rel.' + k), cells: [cell(HOME), cell(GENERAL)] };
      }) } },
      { h: t('refAllowH'), list: ['exempt', 'step', 'movables', 'rates', 'gifts', 'land'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
