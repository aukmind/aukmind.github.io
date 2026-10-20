// Ukrainian tax on inherited property for 2026 (Tax Code art. 174 + military levy), paid by each heir. Loaded by ../inheritance.html?country=ua.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const PDFO = .05, ABROAD = .18, VZ = .05;
  const RELS = ['partner', 'child', 'parent', 'sibling', 'grand', 'other'];
  const FAMILY = ['partner', 'child', 'parent', 'sibling', 'grand'];
  const COLORS = { partner: '--r-partner', child: '--r-child', parent: '--r-parent', sibling: '--r-sibling', grand: '--r-grandchild', other: '--r-other' };
  const SOURCES = [
    ['pku', 'https://zakon.rada.gov.ua/laws/show/2755-17#n4528'],
    ['zero', 'https://yankiv.com/opodatkuvannya-podarunka-ta-spadschyny/'],
    ['vz', 'https://sud.ua/uk/news/ukraine/362568-voennyy-sbor-na-nasledstvo-i-darovanie-komu-pridetsya-platit-5'],
    ['abroad', 'https://news.dtkt.ua/taxation/pdfo/109050-spadshhina-vid-nerezidenta-iaki-pravila-deklaruvannia-i-opodatkuvannia-u-2026-roci'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function duty(inp, rel) {
    const share = pos(inp.share);
    const lines = [{ label: t('line.share'), amt: share }];
    let rate = 0;
    if (inp.abroad) rate = ABROAD;
    else if (FAMILY.includes(rel)) lines.push({ label: t('line.family'), tax: 0, cls: 'sub' });
    else if (inp.vuln) lines.push({ label: t('line.vuln'), tax: 0, cls: 'sub' });
    else rate = PDFO;
    if (rate) {
      lines.push({ label: t(inp.abroad ? 'line.pdfoAbroad' : 'line.pdfo'), amt: share, rate, tax: share * rate });
      lines.push({ label: t('line.vz'), amt: share, rate: VZ, tax: share * VZ });
    }
    const tax = rate ? share * (rate + VZ) : 0;
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    GAPS: ['abroadKin', 'levy', 'vulnAssets', 'notary', 'wartime'],
    SOURCES,
    currency: 'UAH',
    nextStep: 100000,
    state: { share: 2000000, rel: 'other', abroad: false, vuln: false },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], abroad: ['abroad', 'bool'], vuln: ['vuln', 'bool'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'shareLabel', hint: 'shareHint', step: 100000 },
      { key: 'rel', type: 'segCol', label: 'heirIs', options: RELS, optLabel: 'rel.' },
      { key: 'abroad', type: 'check', label: 'abroad', hint: 'abroadHint' },
      { key: 'vuln', type: 'check', label: 'vuln', hint: 'vulnHint', more: true, show: s => s.rel === 'other' && !s.abroad },
    ],
    totalLabel: 'totalTax',
    compute: s => duty(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(${COLORS[k]})`, me: k === s.rel, ...duty(s, k) })),
    },
    chart: {
      xMax: 20000000, step: 100000, yMax: 30,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.abroad, s.vuln],
      lines: s => [
        { label: t('chartFamily'), color: '--r-partner', me: FAMILY.includes(s.rel) && !s.abroad, f: () => 0 },
        { label: t('rel.other'), color: '--r-other', me: s.rel === 'other' && !s.abroad, f: () => s.vuln ? 0 : PDFO + VZ },
        { label: t('chartAbroad'), color: '--r-relative', me: !!s.abroad, f: () => ABROAD + VZ },
      ],
    },
    ref: () => [
      { table: { head: [t('relation'), t('refPdfo'), t('refVz'), t('refTotal')], rows: [
        { to: t('refFamily'), cells: [{ r: 0, txt: '0%' }, { r: 0, txt: '0%' }, { r: 0, txt: '0%' }] },
        { to: t('rel.other'), cells: [{ r: PDFO, txt: pct(PDFO, 0) }, { r: VZ, txt: pct(VZ, 0) }, { r: PDFO + VZ, txt: pct(PDFO + VZ, 0) }] },
        { to: t('refAbroad'), cells: [{ r: ABROAD, txt: pct(ABROAD, 0) }, { r: VZ, txt: pct(VZ, 0) }, { r: ABROAD + VZ, txt: pct(ABROAD + VZ, 0) }] },
      ] } },
      { h: t('refRulesH'), list: ['family', 'vuln', 'abroad', 'vz', 'when', 'notary'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
