// Finnish inheritance tax for deaths from 1 January 2026, by relationship. Loaded by ../inheritance.html?country=fi.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const INF = Infinity;
  // [from, tax at from, rate above]. Nothing under the first threshold, then the whole share follows the table.
  const TABLE = {
    I: [[30000, 100, .07], [40000, 800, .10], [60000, 2800, .13], [200000, 21000, .16], [1000000, 149000, .19]],
    II: [[30000, 100, .19], [40000, 2000, .25], [60000, 7000, .29], [200000, 47600, .31], [1000000, 295600, .33]],
  };
  const GIFT = {
    I: [[7500, 100, .08], [25000, 1500, .10], [55000, 4500, .12], [200000, 21900, .15], [1000000, 141900, .17]],
    II: [[7500, 100, .19], [25000, 3425, .25], [55000, 10925, .29], [200000, 52975, .31], [1000000, 300975, .33]],
  };
  const DED = { partner: 90000, minor: 60000 };
  const RELS = ['partner', 'minor', 'child', 'grandchild', 'sibling', 'other'];
  const CLASS = { partner: 'I', minor: 'I', child: 'I', grandchild: 'I', sibling: 'II', other: 'II' };
  const COLOR = { partner: '--r-partner', minor: '--r-nephew', child: '--r-child', grandchild: '--r-grandchild', sibling: '--r-sibling', other: '--r-other' };
  const SOURCES = [
    ['vero', 'https://www.vero.fi/henkiloasiakkaat/omaisuus/perinto/perintoverolaskuri/'],
    ['gift', 'https://www.vero.fi/henkiloasiakkaat/omaisuus/lahja/lahjaverolaskuri/'],
    ['ded', 'https://www.veronmaksajat.fi/neuvot/henkiloverotus/perhe-lahjat-ja-perinto/perintoverotus/perintoverolaskuri/'],
    ['ins', 'https://www.veronmaksajat.fi/veronmaksajat/uutiset/2018/henkivakuutuskorvaus-nyt-kokonaan-perintoverolle/'],
    ['changes', 'https://www.veronmaksajat.fi/tutkimus-ja-tilastot/suomen-verot-ja-menot/veromuutokset/veromuutoksia-2026/'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  const row = (x, table) => { let r = null; for (const b of table) if (x >= b[0]) r = b; return r; };
  const fromTable = (x, table) => { const r = row(x, table); return r ? r[1] + r[2] * (x - r[0]) : 0; };

  function inheritanceTax(inp, rel) {
    const cls = CLASS[rel], share = pos(inp.share), gifts = pos(inp.gifts);
    const ins = cls === 'I' ? pos(inp.insurance) : 0;
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (ins > 0) lines.push({ label: t('line.insurance'), amt: ins, cls: 'sub' });
    if (gifts > 0) lines.push({ label: t('line.gifts'), amt: gifts, cls: 'sub' });
    const ded = DED[rel] || 0;
    const gross = share + ins + gifts;
    if (ded > 0) lines.push({ label: t('line.ded.' + rel), amt: -Math.min(gross, ded), cls: 'sub' });
    const taxable = Math.max(0, gross - ded);
    lines.push({ label: t('line.taxable', t('class.' + cls)), amt: taxable, cls: 'sub' });
    const r = row(taxable, TABLE[cls]);
    let tax = 0;
    if (r) {
      tax = r[1] + r[2] * (taxable - r[0]);
      lines.push({ label: t('line.step', eur(r[0]), eur(r[1])), amt: taxable - r[0], rate: r[2], tax });
    } else lines.push({ label: t('line.under', eur(TABLE[cls][0][0])), tax: 0 });
    // Gifts from the last 3 years are added back, and the gift tax already paid comes off.
    const giftTax = Math.min(tax, fromTable(gifts, GIFT[cls]));
    if (giftTax > 0) { lines.push({ label: t('line.giftCredit'), tax: -giftTax, cls: 'sub' }); tax -= giftTax; }
    const total = share + ins;
    return { tax, lines, total, avg: total > 0 ? tax / total : 0 };
  }

  const refTable = () => TABLE.I.map((b, i) => {
    const next = TABLE.I[i + 1];
    return {
      to: next ? `${eur(b[0])} – ${eur(next[0])}` : `${eur(b[0])} +`,
      cells: ['I', 'II'].map(c => { const [, base, rate] = TABLE[c][i]; return { r: rate, txt: `${eur(base)} + ${pct(rate, 0)}` }; }),
    };
  });
  const plain = { share: 0, gifts: 0, insurance: 0 };

  return {
    currency: 'EUR',
    SOURCES,
    state: { share: 200000, rel: 'child', gifts: 0, insurance: 0 },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], gifts: ['gifts', 'num'], ins: ['insurance', 'num'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'shareHint' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'insurance', type: 'money', label: 'insurance', hint: 'insuranceHint', show: s => CLASS[s.rel] === 'I', more: true },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(${COLOR[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 1500000, step: 5000, yMax: 35,
      title: () => t('chartTitle'),
      deps: () => [],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: COLOR[k], me: k === s.rel, f: x => inheritanceTax({ ...plain, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('refShare'), t('class.I'), t('class.II')], rows: refTable() }, note: t('refTableNote') },
      { h: t('refClassH'), list: [t('ref.classI'), t('ref.classII'), t('ref.ded'), t('ref.gifts'), t('ref.insurance')], note: t('refNote') },
    ],
  };
};
