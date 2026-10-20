// Brazilian ITCMD on inheritances for deaths in 2026, by state. Loaded by ../inheritance.html?country=br.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // Causa mortis rates in each state's law, lowest and highest (Senate cap 8%). Equal bounds = a single rate.
  const RATES = {
    SP: [.04, .04], RJ: [.04, .08], MG: [.05, .05], BA: [.04, .08], PR: [.04, .04], RS: [.03, .06], PE: [.02, .08], CE: [.02, .08], PA: [.02, .06],
    SC: [.01, .08], GO: [.02, .08], MA: [.01, .07], AM: [.02, .02], ES: [.04, .04], PB: [.02, .08], RN: [.03, .06], MT: [.02, .08], AL: [.04, .04],
    PI: [.02, .06], DF: [.04, .06], MS: [.06, .06], SE: [.03, .08], RO: [.02, .04], TO: [.02, .08], AC: [.04, .04], AP: [.04, .04], RR: [.04, .04],
  };
  const STATES = Object.keys(RATES);
  const BOUNDS = ['max', 'min'];
  const COLORS = ['child', 'partner', 'sibling', 'nephew', 'relative', 'other', 'grandchild', 'parent', 'step'];
  const SOURCES = [
    ['wiki', 'https://pt.wikipedia.org/wiki/Imposto_sobre_as_sucess%C3%B5es'],
    ['sp', 'https://legislacao.fazenda.sp.gov.br/Paginas/lei10705.aspx'],
    ['res9', 'https://legis.senado.leg.br/norma/590017/publicacao/15785996'],
    ['ec132', 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm'],
    ['pwc', 'https://taxsummaries.pwc.com/brazil/individual/other-taxes'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  const flat = st => RATES[st][0] === RATES[st][1];

  function itcmd(inp, st) {
    const share = pos(inp.share), [lo, hi] = RATES[st];
    const rate = flat(st) ? lo : inp.bound === 'min' ? lo : hi;
    const tax = rate * share;
    const lines = [{ label: t('inh.line.share'), amt: share }];
    lines.push({ label: flat(st) ? t('line.flat', t('st.' + st)) : t(inp.bound === 'min' ? 'line.min' : 'line.max', t('st.' + st), pct(lo, 0), pct(hi, 0)), amt: share, rate, tax });
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  const chartStates = st => [...new Set([st, 'SP', 'RJ', 'MG', 'AM'])];

  return {
    GAPS: ['noWeb', 'brackets', 'reform', 'exempt', 'rel', 'gifts', 'abroad'],
    SOURCES, currency: 'BRL', nextStep: 5000,
    state: { share: 500000, st: 'SP', bound: 'max' },
    urlFields: { share: ['share', 'num'], state: ['st', 'str', STATES], bound: ['bound', 'str', BOUNDS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint', step: 10000 },
      { key: 'st', type: 'seg', label: 'stateLabel', hint: 'stateHint', options: STATES, optLabel: 'stShort.' },
      { key: 'bound', type: 'seg', label: 'boundLabel', hint: 'boundHint', options: BOUNDS, optLabel: 'bound.', show: s => !flat(s.st) },
    ],
    totalLabel: 'totalTax',
    compute: s => itcmd(s, s.st),
    compare: {
      title: 'otherStates', head: 'stateCol',
      rows: s => STATES.map((k, i) => ({ k, label: t('st.' + k), color: `var(--r-${COLORS[i % COLORS.length]})`, me: k === s.st, ...itcmd(s, k) })),
    },
    chart: {
      xMax: 5000000, step: 50000, yMax: 10,
      title: s => t('chartTitle', t(s.bound === 'min' ? 'bound.min' : 'bound.max')),
      deps: s => [s.st, s.bound],
      lines: s => chartStates(s.st).map((k, i) => ({ label: t('st.' + k), color: '--r-' + COLORS[i], me: k === s.st,
        f: x => itcmd({ share: x, bound: s.bound }, k).avg })),
    },
    ref: () => [
      { h: t('refRatesH'), table: { head: [t('stateCol'), t('refLow'), t('refHigh')], rows: STATES.map(k => ({
        to: t('st.' + k), cells: [{ r: RATES[k][0], txt: pct(RATES[k][0], 0) }, { r: RATES[k][1], txt: pct(RATES[k][1], 0) }] })) } },
      { h: t('refRulesH'), list: ['who', 'cap', 'prog', 'spouse', 'base', 'gifts', 'income'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
