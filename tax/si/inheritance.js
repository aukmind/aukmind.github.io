// Slovenian inheritance and gift tax (davek na dediščine in darila, ZDDD) in 2026. Loaded by ../inheritance.html?country=si.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  // Art. 8 ZDDD: progressive bands, the same for every class, rates by class. The first class is exempt.
  const BANDS = [10000, 50000, 100000, 200000, 300000, 400000, INF];
  const RATES = {
    II: [.05, .06, .07, .08, .10, .12, .14],
    III: [.08, .09, .10, .11, .13, .15, .17],
    IV: [.12, .16, .20, .25, .30, .35, .39],
  };
  const MOVABLES = 5000;
  const RELS = ['partner', 'child', 'parent', 'sibling', 'grandparent', 'uncle', 'other'];
  const CLASS = { partner: 'I', child: 'I', parent: 'II', sibling: 'II', grandparent: 'III', uncle: 'III', other: 'IV' };
  const COLORS = { partner: 'partner', child: 'child', parent: 'relative', sibling: 'sibling', grandparent: 'grandchild', uncle: 'nephew', other: 'other' };
  const SOURCES = [
    ['furs', 'https://www.fu.gov.si/fileadmin/Internet/Davki_in_druge_dajatve/Podrocja/Davek_na_dediscine_in_darila/Opis/Obdavcitev_z_davkom_na_dediscine_in_darila.docx'],
    ['classes', 'https://www.fu.gov.si/fileadmin/Internet/Davki_in_druge_dajatve/Podrocja/Davek_na_dediscine_in_darila/Opis/Dedni_redi_in_davcne_oprostitve.docx'],
    ['law', 'http://www.pisrs.si/Pis.web/pregledPredpisa?id=ZAKO4705'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function bandLines(x, cls) {
    const r = RATES[cls], out = [];
    let lo = 0, tax = 0;
    BANDS.forEach((hi, i) => {
      if (x > lo) {
        const part = Math.min(x, hi) - lo;
        out.push({ label: hi === INF ? t('line.above', eur(lo)) : t('line.band', eur(lo), eur(hi)), amt: part, rate: r[i], tax: part * r[i], cls: 'sub' });
        tax += part * r[i];
      }
      lo = hi;
    });
    return { tax, lines: out };
  }

  function compute(s, rel = s.rel) {
    const share = pos(s.share), cls = CLASS[rel];
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (cls === 'I') {
      lines.push({ label: t('line.exemptI'), tax: 0, cls: 'sub' });
      return { tax: 0, lines, total: share, avg: 0 };
    }
    if (s.farm) {
      lines.push({ label: t('line.farm'), tax: 0, cls: 'sub' });
      return { tax: 0, lines, total: share, avg: 0 };
    }
    const mov = Math.min(MOVABLES, pos(s.movables), share);
    if (mov > 0) lines.push({ label: t('line.movables', eur(MOVABLES)), amt: -mov, cls: 'sub' });
    const base = share - mov;
    lines.push({ label: t('line.taxable', t('cls.' + cls)), amt: base, cls: 'sub' });
    const b = bandLines(base, cls);
    lines.push(...b.lines);
    return { tax: b.tax, lines, total: share, avg: share > 0 ? b.tax / share : 0 };
  }

  const plain = { share: 0, movables: 0, farm: false };

  return {
    GAPS: ['furs', 'farm', 'gifts', 'value'],
    SOURCES,
    currency: 'EUR', nextStep: 100,
    state: { share: 150000, rel: 'sibling', movables: 20000, farm: false },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], mov: ['movables', 'num'], farm: ['farm', 'bool'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'movables', type: 'money', label: 'movables', hint: 'movablesHint', show: s => CLASS[s.rel] !== 'I' },
      { key: 'farm', type: 'check', label: 'farm', hint: 'farmHint', show: s => CLASS[s.rel] !== 'I', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => compute(s),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...compute(s, k) })),
    },
    chart: {
      xMax: 1000000, step: 5000, yMax: 40,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.filter(k => k !== 'partner').map(k => ({ label: t(k === 'child' ? 'chart.first' : 'rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel || (k === 'child' && s.rel === 'partner'), f: x => compute({ ...plain, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('cls.II'), t('cls.III'), t('cls.IV')], rows: BANDS.map((b, i) => ({
        to: b === INF ? t('inh.above') : eur(b),
        cells: ['II', 'III', 'IV'].map(c => ({ r: RATES[c][i], txt: pct(RATES[c][i], 0) })),
      })) } },
      { h: t('refAllowH'), list: ['classes', 'exempt', 'movables', 'base', 'farm', 'gifts'].map(k => t('allow.' + k)), note: t('refNote') },
    ],
  };
};
