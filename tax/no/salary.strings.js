window.TAX_STRINGS = {
  title: { en: `Norwegian Buying Power`, nl: `Noorse koopkracht`, fr: `Pouvoir d'achat en Norvège` },
  eyebrow: { en: `Norway · income year 2026 · employee`, nl: `Noorwegen · inkomstenjaar 2026 · werknemer`, fr: `Norvège · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Norway · income year 2026 · minister`, nl: `Noorwegen · inkomstenjaar 2026 · minister`, fr: `Norvège · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Norwegian salary in 2026, from what your employer pays to what you can buy. A flat 22% on income after deductions, a bracket tax on gross pay, and an employer contribution that depends on where the firm is.`,
    nl: `Alle belastingen op een Noors loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Een vlakke 22% op het inkomen na aftrek, een schijventaks op het brutoloon en een werkgeversbijdrage die afhangt van waar het bedrijf zit.`,
    fr: `Tous les prélèvements sur un salaire norvégien en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Un taux unique de 22% sur le revenu après déductions, un impôt par tranches sur le brut et une cotisation patronale qui dépend du lieu de l'entreprise.`,
  },

  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married or not, in Norway each partner is taxed alone: your partner's pay doesn't change your tax.`,
    nl: `Getrouwd of niet, in Noorwegen wordt elke partner apart belast: het loon van je partner verandert je belasting niet.`,
    fr: `Mariés ou non, en Norvège chacun est imposé seul : la paie de votre partenaire ne change pas votre impôt.`,
  },
  region: { en: `Where the employer is (sets its payroll tax)`, nl: `Waar de werkgever zit (bepaalt zijn loonheffing)`, fr: `Lieu de l'employeur (fixe sa cotisation)` },
  'region.z1': { en: `I · 14.1%`, nl: `I · 14,1%`, fr: `I · 14,1%` },
  'region.z1a': { en: `Ia · 10.6%`, nl: `Ia · 10,6%`, fr: `Ia · 10,6%` },
  'region.z2': { en: `II · 10.6%`, nl: `II · 10,6%`, fr: `II · 10,6%` },
  'region.z3': { en: `III · 6.4%`, nl: `III · 6,4%`, fr: `III · 6,4%` },
  'region.z4': { en: `IV · 5.1%`, nl: `IV · 5,1%`, fr: `IV · 5,1%` },
  'region.z4a': { en: `IVa · 7.9%`, nl: `IVa · 7,9%`, fr: `IVa · 7,9%` },
  'region.z5': { en: `V · 0% (Finnmark)`, nl: `V · 0% (Finnmark)`, fr: `V · 0% (Finnmark)` },
  vatStandard: { en: `(Norway's standard rate is 25%)`, nl: `(het Noorse normale tarief is 25%)`, fr: `(le taux normal norvégien est de 25%)` },

  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Pay set by parliament (the Storting) from 1 May 2026. Taxed like any salary.`,
    nl: `Loon vastgelegd door het parlement (het Storting) vanaf 1 mei 2026. Belast zoals elk loon.`,
    fr: `Paie fixée par le parlement (le Storting) depuis le 1er mai 2026. Imposée comme tout salaire.`,
  },
  minSalaryHint: {
    en: `Yearly pay from 1 May 2026. By default, the amount set by parliament.`,
    nl: `Jaarloon vanaf 1 mei 2026. Standaard het bedrag dat het parlement vastlegde.`,
    fr: `Paie annuelle depuis le 1er mai 2026. Par défaut, le montant fixé par le parlement.`,
  },
  'tip.ministerRules': {
    en: `Every year from 1 May, the Norwegian parliament (the Storting) sets the pay of its members and of the government. In 2026: kr 2,234,978 for the Prime Minister (the same as the Speaker of parliament), kr 1,815,703 for every other minister, kr 1,272,209 for an MP. An MP who becomes a minister stops getting MP pay while in government. All of it is taxed like a salary, with the national insurance charge, and the employer pays its usual contribution on top.`,
    nl: `Elk jaar vanaf 1 mei legt het Noorse parlement (het Storting) het loon van zijn leden en van de regering vast. In 2026: kr 2.234.978 voor de premier (evenveel als de voorzitter van het parlement), kr 1.815.703 voor elke andere minister, kr 1.272.209 voor een parlementslid. Een parlementslid dat minister wordt, krijgt geen parlementsloon zolang hij in de regering zit. Alles wordt belast zoals een loon, met de volksverzekeringsbijdrage, en de werkgever betaalt er zijn gewone bijdrage bovenop.`,
    fr: `Chaque année au 1er mai, le parlement norvégien (le Storting) fixe la paie de ses membres et du gouvernement. En 2026 : 2 234 978 kr pour le Premier ministre (autant que le président du parlement), 1 815 703 kr pour chaque autre ministre, 1 272 209 kr pour un député. Un député devenu ministre ne touche plus sa paie de député tant qu'il est au gouvernement. Tout est imposé comme un salaire, avec la cotisation d'assurance nationale, et l'employeur paie sa cotisation habituelle en plus.`,
  },

  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.president': { en: `President of the Storting`, nl: `Voorzitter van het Storting`, fr: `Président du Storting` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'pol.stat.pm': { en: `Set by parliament, from 1 May 2026`, nl: `Vastgelegd door het parlement, vanaf 1 mei 2026`, fr: `Fixé par le parlement, depuis le 1er mai 2026` },
  'pol.stat.president': { en: `Same pay as the Prime Minister`, nl: `Zelfde loon als de premier`, fr: `Même rémunération que le Premier ministre` },
  'pol.stat.minister': { en: `Every member of the government except the Prime Minister`, nl: `Elk regeringslid behalve de premier`, fr: `Chaque membre du gouvernement sauf le Premier ministre` },
  'pol.stat.mp': { en: `Base pay, without daily expense money`, nl: `Basisloon, zonder dagelijkse onkostenvergoeding`, fr: `Paie de base, sans l'indemnité journalière de frais` },
  'polTitle.gov': { en: `Public bodies, gross pay`, nl: `Openbare instellingen, brutoloon`, fr: `Organismes publics, rémunération brute` },
  'pol.nbim': { en: `CEO, Norges Bank Investment Management (the national oil fund)`, nl: `CEO, Norges Bank Investment Management (het nationale oliefonds)`, fr: `Directeur général, Norges Bank Investment Management (le fonds pétrolier national)` },
  'polNote.stat': {
    en: `Taxed like any salary. The face sits at their gross pay.`,
    nl: `Belast zoals elk loon. Het hoofdje staat op hun brutoloon.`,
    fr: `Imposé comme tout salaire. La tête est placée à leur salaire brut.`,
  },
  'polTipNote.pm': {
    en: `Jonas Gahr Støre: kr 2,234,978 a year from 1 May 2026, up from kr 2,134,434. The Prime Minister also gets the official home in Inkognitogata.`,
    nl: `Jonas Gahr Støre: kr 2.234.978 per jaar vanaf 1 mei 2026, eerst kr 2.134.434. De premier krijgt ook de ambtswoning in de Inkognitogata.`,
    fr: `Jonas Gahr Støre : 2 234 978 kr par an depuis le 1er mai 2026, contre 2 134 434 kr avant. Le Premier ministre a aussi la résidence officielle d'Inkognitogata.`,
  },
  'polTipNote.president': {
    en: `The Speaker of parliament earns the same as the Prime Minister.`,
    nl: `De voorzitter van het parlement verdient evenveel als de premier.`,
    fr: `Le président du parlement gagne autant que le Premier ministre.`,
  },
  'polTipNote.minister': {
    en: `kr 1,815,703 a year from 1 May 2026, the same for every minister.`,
    nl: `kr 1.815.703 per jaar vanaf 1 mei 2026, voor elke minister gelijk.`,
    fr: `1 815 703 kr par an depuis le 1er mai 2026, identique pour tous les ministres.`,
  },
  'polTipNote.mp': {
    en: `kr 1,272,209 a year from 1 May 2026. MPs who live more than 40 km from parliament also get daily expense money, and their travel is paid; neither is counted here.`,
    nl: `kr 1.272.209 per jaar vanaf 1 mei 2026. Parlementsleden die meer dan 40 km van het parlement wonen, krijgen ook een dagelijkse onkostenvergoeding, en hun reizen worden betaald; geen van beide telt hier mee.`,
    fr: `1 272 209 kr par an depuis le 1er mai 2026. Les députés qui habitent à plus de 40 km du parlement touchent aussi une indemnité journalière de frais, et leurs trajets sont payés ; rien de cela n'est compté ici.`,
  },
  'polTipNote.nbim': {
    en: `Nicolai Tangen, CEO since 2020: a yearly salary of kr 7,606,000 at the end of 2025, with kr 7,172,790 paid over the year. Fixed salary only, no bonus.`,
    nl: `Nicolai Tangen, CEO sinds 2020: een jaarloon van kr 7.606.000 eind 2025, waarvan kr 7.172.790 uitbetaald over het jaar. Enkel vast loon, geen bonus.`,
    fr: `Nicolai Tangen, directeur depuis 2020 : un salaire annuel de 7 606 000 kr fin 2025, dont 7 172 790 kr versés sur l'année. Salaire fixe seulement, sans prime.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. Pay is yearly gross, shown on the chart as the yearly amount divided by 12. Norwegian politicians are taxed like employees, so each one sits at their own gross pay. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Het loon is jaarlijks bruto, op de grafiek getoond als jaarbedrag gedeeld door 12. Noorse politici worden belast als werknemers, dus iedereen staat op zijn eigen brutoloon. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La paie est un brut annuel, placé sur le graphique en montant annuel divisé par 12. Les politiciens norvégiens sont imposés comme des salariés : chacun est placé à son propre brut. Sources : ${links}.`,
  },
  bracketTop: { en: `top bracket`, nl: `hoogste schijf`, fr: `tranche supérieure` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => `What happens between ${a} and ${b}?`,
    nl: (a, b) => `Wat gebeurt er tussen ${a} en ${b}?`,
    fr: (a, b) => `Que se passe-t-il entre ${a} et ${b} ?`,
  },
  trapBody: {
    en: (a, b, c) => `Up to ${a} you pay nothing. Above that, the 7.6% national insurance charge (trygdeavgift) kicks in gently: 25 øre (a quarter of a krone) on each extra krone, until ${b}, where it has caught up with the normal 7.6% of all your pay. The 22% income tax only starts around ${c}, once the two tax-free amounts (one for work costs, one for everyone) are used up.`,
    nl: (a, b, c) => `Tot ${a} betaal je niets. Daarboven begint de volksverzekeringsbijdrage van 7,6% (trygdeavgift) zachtjes: 25 øre (een kwart kroon) op elke extra kroon, tot ${b}, waar ze de gewone 7,6% van je hele loon heeft ingehaald. De inkomstenbelasting van 22% begint pas rond ${c}, als de twee belastingvrije bedragen (één voor werkkosten, één voor iedereen) opgebruikt zijn.`,
    fr: (a, b, c) => `Jusqu'à ${a}, vous ne payez rien. Au-delà, la cotisation d'assurance nationale de 7,6% (trygdeavgift) démarre en douceur : 25 øre (un quart de couronne) sur chaque couronne en plus, jusqu'à ${b}, où elle a rattrapé les 7,6% normaux de toute la paie. L'impôt de 22% ne commence que vers ${c}, une fois les deux montants exonérés (un pour les frais de travail, un pour tout le monde) épuisés.`,
  },
  topTitle: {
    en: top => `Why the top rate from ${top}?`,
    nl: top => `Waarom het hoogste tarief vanaf ${top}?`,
    fr: top => `Pourquoi le taux maximal dès ${top} ?`,
  },
  topBody: {
    en: (top, t3, m) => `The tax on gross pay (bracket tax) jumps from 4% to 13.7% at ${t3} a month, then rises to 16.8%, and to 17.8% from ${top}. Add the 22% income tax and the 7.6% national insurance, and each extra krone costs you ${m}. There is no upper limit.`,
    nl: (top, t3, m) => `De belasting op het brutoloon (schijventaks) springt van 4% naar 13,7% bij ${t3} per maand, stijgt dan naar 16,8%, en vanaf ${top} naar 17,8%. Tel de inkomstenbelasting van 22% en de volksverzekering van 7,6% erbij, en elke extra kroon kost je ${m}. Er is geen bovengrens.`,
    fr: (top, t3, m) => `L'impôt sur le brut (impôt par tranches) passe de 4% à 13,7% à ${t3} par mois, puis à 16,8%, et à 17,8% dès ${top}. Ajoutez l'impôt de 22% et l'assurance nationale de 7,6% : chaque couronne en plus vous coûte ${m}. Il n'y a pas de plafond.`,
  },

  'comp.er': { en: `Employer payroll tax (arbeidsgiveravgift)`, nl: `Loonheffing werkgever (arbeidsgiveravgift)`, fr: `Cotisation patronale (arbeidsgiveravgift)` },
  'comp.ee': { en: `National insurance (trygdeavgift)`, nl: `Volksverzekering (trygdeavgift)`, fr: `Assurance nationale (trygdeavgift)` },
  'comp.ir': { en: `Income tax (22%)`, nl: `Inkomstenbelasting (22%)`, fr: `Impôt sur le revenu (22%)` },
  'comp.trinn': { en: `Tax on gross pay (trinnskatt)`, nl: `Belasting op brutoloon (trinnskatt)`, fr: `Impôt sur le brut (trinnskatt)` },
  'bd.minst': { en: `Work costs allowance (minstefradrag)`, nl: `Aftrek voor werkkosten (minstefradrag)`, fr: `Abattement pour frais (minstefradrag)` },
  'bd.north': { en: `Finnmark deduction`, nl: `Finnmark-aftrek`, fr: `Déduction du Finnmark` },
  'bd.pf': { en: `Tax-free amount (personfradrag)`, nl: `Belastingvrij bedrag (personfradrag)`, fr: `Montant exonéré (personfradrag)` },
  'bd.taxableNo': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'tax.step': { en: n => `Step ${n}`, nl: n => `Schijf ${n}`, fr: n => `Tranche ${n}` },

  'tip.f12': {
    en: `12 monthly salaries. In June most employees get holiday pay (feriepenger, 10.2% or 12% of last year's pay) instead of their June salary, and in December they pay only half the usual tax. Over the year it comes to about 12 salaries and the same tax.`,
    nl: `12 maandlonen. In juni krijgen de meeste werknemers vakantiegeld (feriepenger, 10,2% of 12% van het loon van vorig jaar) in plaats van hun junisalaris, en in december betalen ze maar de helft van de gewone belasting. Over het jaar komt dat neer op ongeveer 12 lonen en dezelfde belasting.`,
    fr: `12 salaires mensuels. En juin, la plupart des salariés touchent la paie de vacances (feriepenger, 10,2% ou 12% du salaire de l'année passée) à la place du salaire de juin, et en décembre ils ne paient que la moitié de l'impôt habituel. Sur l'année, cela fait environ 12 salaires et le même impôt.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Since 2018, married people are taxed separately, with the same tax-free amount and rates as a single person. Your partner's pay and your children don't change your tax. Child benefit (barnetrygd) is paid whatever you earn, so it is not counted.`,
    nl: `Sinds 2018 worden getrouwde mensen apart belast, met hetzelfde belastingvrije bedrag en dezelfde tarieven als een alleenstaande. Het loon van je partner en je kinderen veranderen je belasting niet. Kinderbijslag (barnetrygd) wordt betaald wat je ook verdient, dus telt niet mee.`,
    fr: `Depuis 2018, les personnes mariées sont imposées séparément, avec le même montant exonéré et les mêmes taux qu'une personne seule. La paie de votre partenaire et vos enfants ne changent pas votre impôt. Les allocations familiales (barnetrygd) sont versées quel que soit le revenu : elles ne sont pas comptées.`,
  },
  'tip.reg': {
    en: free => `Employers pay a tax on wages that depends on where the firm is registered: 14.1% in cities and most of the south, less in the countryside, and 0% in Finnmark and northern Troms (zone V). In zone Ia, the 10.6% rate applies until the firm has saved ${free} a year compared with 14.1%. Here, zone V also means you live there: 18.5% income tax instead of 22%, plus an extra tax-free amount.`,
    nl: free => `Werkgevers betalen een belasting op lonen die afhangt van waar het bedrijf geregistreerd is: 14,1% in steden en het grootste deel van het zuiden, minder op het platteland, en 0% in Finnmark en Noord-Troms (zone V). In zone Ia geldt 10,6% tot het bedrijf ${free} per jaar bespaard heeft tegenover 14,1%. Hier betekent zone V ook dat je er woont: 18,5% inkomstenbelasting in plaats van 22%, plus een extra belastingvrij bedrag.`,
    fr: free => `Les employeurs paient une taxe sur les salaires qui dépend du lieu où l'entreprise est enregistrée : 14,1% dans les villes et presque tout le sud, moins à la campagne, et 0% dans le Finnmark et le nord du Troms (zone V). En zone Ia, le taux de 10,6% s'applique jusqu'à ce que l'entreprise ait économisé ${free} par an par rapport à 14,1%. Ici, la zone V veut aussi dire que vous y vivez : 18,5% d'impôt au lieu de 22%, plus un montant exonéré en plus.`,
  },
  'tip.costShort': { en: `Gross salary plus the employer's payroll tax for its zone.`, nl: `Brutoloon plus de loonheffing van de werkgever voor zijn zone.`, fr: `Salaire brut plus la cotisation patronale de sa zone.` },
  'tip.er': {
    en: (zone, r) => `What your employer pays on top of your gross salary: ${r} in zone ${zone}, on all of it, with no upper limit.`,
    nl: (zone, r) => `Wat je werkgever bovenop je brutoloon betaalt: ${r} in zone ${zone}, op alles, zonder bovengrens.`,
    fr: (zone, r) => `Ce que l'employeur paie en plus de votre salaire brut : ${r} en zone ${zone}, sur la totalité, sans plafond.`,
  },
  'tip.erM': {
    en: `The extra 5% employers paid on pay above kr 750,000 was scrapped from 2025. The pension the employer must pay into for you (at least 2% of pay) is not counted.`,
    nl: `De extra 5% die werkgevers betaalden op loon boven kr 750.000 is sinds 2025 geschrapt. Het pensioen waarin de werkgever voor jou moet storten (minstens 2% van het loon) telt niet mee.`,
    fr: `Les 5% en plus que payaient les employeurs sur la paie au-delà de 750 000 kr ont été supprimés depuis 2025. La retraite à laquelle l'employeur doit cotiser pour vous (au moins 2% du salaire) n'est pas comptée.`,
  },
  'tip.ee': {
    en: lo => `Taken from your pay for national insurance: 7.6% of gross pay, with no upper limit. Nothing is due up to ${lo}. Above that, it is never more than 25% of what you earn over ${lo}. It does not lower your taxable income.`,
    nl: lo => `Van je loon afgehouden voor de volksverzekering: 7,6% van het brutoloon, zonder bovengrens. Tot ${lo} is niets verschuldigd. Daarboven is het nooit meer dan 25% van wat je boven ${lo} verdient. Het verlaagt je belastbaar inkomen niet.`,
    fr: lo => `Retenu sur votre paie pour l'assurance nationale : 7,6% du brut, sans plafond. Rien n'est dû jusqu'à ${lo}. Au-delà, ce n'est jamais plus de 25% de ce que vous gagnez au-dessus de ${lo}. Cela ne réduit pas votre revenu imposable.`,
  },
  'tip.minst': {
    en: max => `A part of your pay that is not taxed, to cover work costs without receipts: 46% of your pay, at most ${max}. It only lowers the 22% income tax, not the tax on gross pay or national insurance.`,
    nl: max => `Een deel van je loon dat niet belast wordt, om werkkosten te dekken zonder bonnetjes: 46% van je loon, hoogstens ${max}. Het verlaagt alleen de inkomstenbelasting van 22%, niet de belasting op het brutoloon of de volksverzekering.`,
    fr: max => `Une part de la paie non imposée, pour couvrir les frais de travail sans justificatif : 46% de votre paie, au plus ${max}. Elle ne réduit que l'impôt de 22%, pas l'impôt sur le brut ni l'assurance nationale.`,
  },
  'tip.north': {
    en: amt => `People who live in Finnmark and northern Troms (zone V, not Tromsø or Harstad) get up to ${amt} more tax-free, and pay 18.5% income tax instead of 22%.`,
    nl: amt => `Wie in Finnmark of Noord-Troms woont (zone V, niet Tromsø of Harstad), krijgt tot ${amt} extra belastingvrij en betaalt 18,5% inkomstenbelasting in plaats van 22%.`,
    fr: amt => `Les habitants du Finnmark et du nord du Troms (zone V, hors Tromsø et Harstad) ont jusqu'à ${amt} de plus exonérés, et paient 18,5% d'impôt au lieu de 22%.`,
  },
  'tip.pf': {
    en: amt => `Everyone gets the same tax-free amount of ${amt}, single or married.`,
    nl: amt => `Iedereen krijgt hetzelfde belastingvrije bedrag van ${amt}, alleenstaand of getrouwd.`,
    fr: amt => `Tout le monde a le même montant exonéré de ${amt}, seul ou marié.`,
  },
  'tip.taxable': {
    en: calc => `The part of your pay that the 22% applies to: gross pay, minus the work costs allowance, minus the tax-free amount (minus the extra northern amount in zone V)${calc}.`,
    nl: calc => `Het deel van je loon waarop de 22% geldt: brutoloon, min de aftrek voor werkkosten, min het belastingvrije bedrag (min het extra bedrag voor het noorden in zone V)${calc}.`,
    fr: calc => `La part de la paie soumise aux 22% : salaire brut, moins l'abattement pour frais, moins le montant exonéré (moins le montant en plus du nord en zone V)${calc}.`,
  },
  'tip.ir': {
    en: `A single 22% rate on taxable income (18.5% in Finnmark and northern Troms). The money is shared between your town, your county and the state. Parliament sets the highest rate towns and counties may charge, and they all charge it, so where you live makes no difference.`,
    nl: `Eén tarief van 22% op het belastbaar inkomen (18,5% in Finnmark en Noord-Troms). Het geld wordt verdeeld tussen je gemeente, je provincie en de staat. Het parlement legt het hoogste tarief vast dat gemeenten en provincies mogen vragen, en ze vragen het allemaal, dus je woonplaats maakt geen verschil.`,
    fr: `Un taux unique de 22% sur le revenu imposable (18,5% dans le Finnmark et le nord du Troms). L'argent est partagé entre votre commune, votre comté et l'État. Le parlement fixe le taux le plus haut que communes et comtés peuvent demander, et tous le demandent : votre lieu de résidence ne change rien.`,
  },
  'tip.trinn': {
    en: free => `A national tax on your gross pay, with nothing taken off first. Nothing on the first ${free}, then five slices taxed from 1.7% to 17.8%.`,
    nl: free => `Een nationale belasting op je brutoloon, zonder dat er eerst iets afgaat. Niets op de eerste ${free}, daarna vijf schijven belast van 1,7% tot 17,8%.`,
    fr: free => `Un impôt national sur votre salaire brut, sans rien retirer avant. Rien sur les premiers ${free}, puis cinq tranches taxées de 1,7% à 17,8%.`,
  },
  'tip.vatM': {
    en: `Food has a 15% rate, transport, hotels and cinema 12%, and rent has none. We apply 25% to all your spending anyway, so this is the most it could be.`,
    nl: `Voeding heeft een tarief van 15%, vervoer, hotels en bioscoop 12%, en huur heeft er geen. We passen toch 25% toe op al je uitgaven, dus dit is het maximum.`,
    fr: `L'alimentation est à 15%, les transports, hôtels et cinémas à 12%, et le loyer n'en a pas. On applique quand même 25% à toutes vos dépenses : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross pay minus national insurance, minus the tax on gross pay, minus the 22% income tax.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon min volksverzekering, min de belasting op het brutoloon, min de inkomstenbelasting van 22%.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Salaire brut moins l'assurance nationale, moins l'impôt sur le brut, moins l'impôt de 22%.`,
  },

  refEyebrow: { en: `Rules used · income year 2026`, nl: `Gebruikte regels · inkomstenjaar 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Payroll tax (arbeidsgiveravgift) on gross pay, no upper limit, depending on where the firm is: I <span class="num">14.1%</span>, Ia 10.6% (until the firm has saved kr 850,000), II 10.6%, III 6.4%, IV 5.1%, IVa 7.9%, V 0%.`,
      `The extra 5% on pay above kr 750,000 ended in 2025.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Loonheffing (arbeidsgiveravgift) op het brutoloon, zonder bovengrens, naargelang waar het bedrijf zit: I <span class="num">14,1%</span>, Ia 10,6% (tot het bedrijf kr 850.000 bespaard heeft), II 10,6%, III 6,4%, IV 5,1%, IVa 7,9%, V 0%.`,
      `De extra 5% op loon boven kr 750.000 is in 2025 verdwenen.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Cotisation patronale (arbeidsgiveravgift) sur le brut, sans plafond, selon le lieu de l'entreprise : I <span class="num">14,1%</span>, Ia 10,6% (jusqu'à 850 000 kr d'économie pour l'entreprise), II 10,6%, III 6,4%, IV 5,1%, IVa 7,9%, V 0%.`,
      `Les 5% en plus sur la paie au-delà de 750 000 kr ont disparu en 2025.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · National insurance`, li: [`Trygdeavgift <span class="num">7.6%</span> of gross pay, no upper limit. Nothing up to kr 99,650; above that, never more than 25% of the part above.`] },
    nl: { h: `2 · Volksverzekering`, li: [`Trygdeavgift <span class="num">7,6%</span> van het brutoloon, zonder bovengrens. Niets tot kr 99.650; daarboven nooit meer dan 25% van het deel erboven.`] },
    fr: { h: `2 · Assurance nationale`, li: [`Trygdeavgift <span class="num">7,6%</span> du salaire brut, sans plafond. Rien jusqu'à 99 650 kr ; au-delà, jamais plus de 25% de la part au-dessus.`] },
  },
  'ref.ir': {
    en: { h: `3 · Income tax`, li: [
      `<span class="num">22%</span> of gross pay, minus a work costs allowance (46%, at most kr 95,700), minus a tax-free amount of kr 114,540.`,
      `Shared between town, county and state; every town charges the highest rate allowed.`,
    ] },
    nl: { h: `3 · Inkomstenbelasting`, li: [
      `<span class="num">22%</span> van het brutoloon, min een aftrek voor werkkosten (46%, hoogstens kr 95.700), min een belastingvrij bedrag van kr 114.540.`,
      `Verdeeld tussen gemeente, provincie en staat; elke gemeente vraagt het hoogste toegelaten tarief.`,
    ] },
    fr: { h: `3 · Impôt sur le revenu`, li: [
      `<span class="num">22%</span> du salaire brut, moins un abattement pour frais (46%, au plus 95 700 kr), moins un montant exonéré de 114 540 kr.`,
      `Partagé entre commune, comté et État ; chaque commune demande le taux le plus haut permis.`,
    ] },
  },
  'ref.trinn': {
    en: br => ({ h: `4 · Tax on gross pay (trinnskatt)`, li: [`On gross pay, nothing taken off first, per year:`, br] }),
    nl: br => ({ h: `4 · Belasting op brutoloon (trinnskatt)`, li: [`Op het brutoloon, zonder dat er eerst iets afgaat, per jaar:`, br] }),
    fr: br => ({ h: `4 · Impôt sur le brut (trinnskatt)`, li: [`Sur le salaire brut, sans rien retirer avant, par an :`, br] }),
  },
  'ref.north': {
    en: { h: `5 · Finnmark and northern Troms`, li: [`People living there pay <span class="num">18.5%</span> instead of 22% and get up to kr 45,000 more tax-free. Their employers pay 0%. The lower rate for slice 3 of the tax on gross pay ended in 2025.`] },
    nl: { h: `5 · Finnmark en Noord-Troms`, li: [`Wie er woont, betaalt <span class="num">18,5%</span> in plaats van 22% en krijgt tot kr 45.000 extra belastingvrij. Hun werkgevers betalen 0%. Het lagere tarief voor schijf 3 van de belasting op het brutoloon verdween in 2025.`] },
    fr: { h: `5 · Finnmark et nord du Troms`, li: [`Les habitants paient <span class="num">18,5%</span> au lieu de 22% et ont jusqu'à 45 000 kr de plus exonérés. Leurs employeurs paient 0%. Le taux réduit de la tranche 3 de l'impôt sur le brut a disparu en 2025.`] },
  },
  'ref.vat': {
    en: { h: `6 · VAT on spending`, li: [
      `Standard rate <span class="num">25%</span>, applied to all of your net pay as if you spent all of it.`,
      `The VAT hidden in a price = price × r / (100 + r). At 25% that is 25 / 125 = <span class="num">20%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">25%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `De btw verstopt in een prijs = prijs × r / (100 + r). Bij 25% is dat 25 / 125 = <span class="num">20%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">25%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 25%, cela fait 25 / 125 = <span class="num">20%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and parliament`, li: [
      `From 1 May 2026: Prime Minister and Speaker of parliament <span class="num">kr 2,234,978</span>, ministers kr 1,815,703, MPs kr 1,272,209 a year.`,
      `Taxed like any salary.`,
    ] },
    nl: { h: `7 · Regering en parlement`, li: [
      `Vanaf 1 mei 2026: premier en voorzitter van het parlement <span class="num">kr 2.234.978</span>, ministers kr 1.815.703, parlementsleden kr 1.272.209 per jaar.`,
      `Belast zoals elk loon.`,
    ] },
    fr: { h: `7 · Gouvernement et parlement`, li: [
      `Depuis le 1er mai 2026 : Premier ministre et président du parlement <span class="num">2 234 978 kr</span>, ministres 1 815 703 kr, députés 1 272 209 kr par an.`,
      `Imposés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `The work pension your employer must pay into (OTP, at least 2% of pay), work accident insurance, union fees, and tax breaks for commuting, childcare (foreldrefradrag) or loan interest.`,
      `Child benefit (barnetrygd) and the cash payment for parents who care for small children at home, both paid whatever you earn. The lower national insurance rate (5.1%) for people under 17 or over 69, and the tax on wealth.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Het bedrijfspensioen waarin je werkgever moet storten (OTP, minstens 2% van het loon), de verzekering tegen arbeidsongevallen, vakbondsbijdragen, en belastingvoordelen voor woon-werkverkeer, kinderopvang (foreldrefradrag) of rente op leningen.`,
      `Kinderbijslag (barnetrygd) en de uitkering voor ouders die kleine kinderen thuis opvangen, allebei betaald wat je ook verdient. Het lagere tarief voor de volksverzekering (5,1%) voor wie jonger is dan 17 of ouder dan 69, en de vermogensbelasting.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `La retraite professionnelle à laquelle l'employeur doit cotiser (OTP, au moins 2% du salaire), l'assurance accidents du travail, les cotisations syndicales, et les avantages pour les trajets, la garde d'enfants (foreldrefradrag) ou les intérêts d'emprunt.`,
      `Les allocations familiales (barnetrygd) et l'aide aux parents qui gardent de jeunes enfants à la maison, versées quel que soit le revenu. Le taux réduit d'assurance nationale (5,1%) avant 17 ans ou après 69 ans, et l'impôt sur la fortune.`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance, by relationship →`,
    nl: `Wat een erfgenaam betaalt op een erfenis, volgens verwantschap →`,
    fr: `Ce que paie un héritier sur une succession, selon le lien →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your tax card and Skatteetaten decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je belastingkaart en Skatteetaten zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre carte fiscale et Skatteetaten font foi.`,
  },

  'src.general': { en: `Skatteetaten: general income rate`, nl: `Skatteetaten: tarief algemeen inkomen`, fr: `Skatteetaten : taux du revenu général` },
  'src.pf': { en: `Skatteetaten: personal allowance`, nl: `Skatteetaten: persoonlijke aftrek`, fr: `Skatteetaten : abattement personnel` },
  'src.minst': { en: `Skatteetaten: minimum deduction`, nl: `Skatteetaten: forfaitaire aftrek`, fr: `Skatteetaten : déduction forfaitaire` },
  'src.trinn': { en: `Skatteetaten: bracket tax`, nl: `Skatteetaten: schijventaks`, fr: `Skatteetaten : impôt par tranches` },
  'src.tryg': { en: `Skatteetaten: trygdeavgift`, nl: `Skatteetaten: trygdeavgift`, fr: `Skatteetaten : trygdeavgift` },
  'src.aga': { en: `Skatteetaten: employer contribution`, nl: `Skatteetaten: werkgeversbijdrage`, fr: `Skatteetaten : cotisation patronale` },
  'src.north': { en: `Skatteetaten: Finnmark deduction`, nl: `Skatteetaten: Finnmark-aftrek`, fr: `Skatteetaten : déduction du Finnmark` },
  'src.pwc': { en: `PwC: other taxes in Norway`, nl: `PwC: andere belastingen in Noorwegen`, fr: `PwC : autres impôts en Norvège` },
  'src.ssb': { en: `SSB: monthly earnings 2025`, nl: `SSB: maandlonen 2025`, fr: `SSB : salaires mensuels 2025` },
  'src.pay': { en: `Storting: pay of MPs and government`, nl: `Storting: loon van parlement en regering`, fr: `Storting : rémunération des députés et du gouvernement` },
  'src.nbim': { en: `NBIM annual report 2025`, nl: `NBIM jaarverslag 2025`, fr: `NBIM rapport annuel 2025` },

  // Known gaps and caveats
  'gap.noCheck': {
    en: `Researched without searching the web, and no take-home pay was checked against the tax office's (Skatteetaten) calculator.`,
    nl: `Opgezocht zonder op het web te zoeken, en geen enkel nettoloon is nagerekend met de rekentool van de belastingdienst (Skatteetaten).`,
    fr: `Recherché sans recherche web, et aucun salaire net n'a été vérifié avec le simulateur du fisc (Skatteetaten).`,
  },
  'gap.maxRate': {
    en: `We assume every town charges the highest rate allowed, which gives 22% income tax everywhere. A town below the maximum would lower it a little.`,
    nl: `We nemen aan dat elke gemeente het hoogste toegelaten tarief vraagt, wat overal 22% inkomstenbelasting geeft. Een gemeente onder het maximum zou dat iets verlagen.`,
    fr: `On suppose que chaque commune demande le taux le plus haut permis, ce qui donne 22% d'impôt partout. Une commune en dessous du maximum le baisserait un peu.`,
  },
  'gap.split': {
    en: `How the 22% is split between town, county and state is not confirmed. That only changes the explanation, not the amount you pay.`,
    nl: `Hoe de 22% verdeeld wordt tussen gemeente, provincie en staat, is niet bevestigd. Dat verandert alleen de uitleg, niet het bedrag dat je betaalt.`,
    fr: `La répartition des 22% entre commune, comté et État n'est pas confirmée. Cela ne change que l'explication, pas ce que vous payez.`,
  },
  'gap.aga5': {
    en: `The extra 5% employers paid on pay above kr 750,000 is taken as scrapped from 2025, based only on PwC.`,
    nl: `De extra 5% die werkgevers betaalden op loon boven kr 750.000 wordt als geschrapt beschouwd vanaf 2025, alleen op basis van PwC.`,
    fr: `Les 5% en plus que payaient les employeurs sur la paie au-delà de 750 000 kr sont considérés comme supprimés depuis 2025, sur la seule base de PwC.`,
  },
  'gap.zone1a': {
    en: `Zone Ia charges 10.6% on all pay here. The yearly limit on how much a firm can save compared with 14.1% depends on its total wages, so it is not applied.`,
    nl: `Zone Ia rekent hier 10,6% op al het loon. De jaargrens op hoeveel een bedrijf kan besparen tegenover 14,1% hangt af van zijn totale loonsom, dus die is niet toegepast.`,
    fr: `La zone Ia applique ici 10,6% à toute la paie. La limite annuelle de ce qu'une entreprise peut économiser par rapport à 14,1% dépend de tous ses salaires : elle n'est pas appliquée.`,
  },
  'gap.polYear': {
    en: `Politicians' pay from 1 May 2026 is used for the whole year; January to April was paid at the 2025 amount.`,
    nl: `Het loon van politici vanaf 1 mei 2026 wordt voor het hele jaar gebruikt; januari tot april werd betaald aan het bedrag van 2025.`,
    fr: `La paie des politiciens au 1er mai 2026 est utilisée pour toute l'année ; de janvier à avril, ils étaient payés au montant de 2025.`,
  },
  'gap.nbim': {
    en: `Nicolai Tangen's pay comes from the oil fund's (NBIM) annual report for 2025; his 2026 salary is not published yet.`,
    nl: `Het loon van Nicolai Tangen komt uit het jaarverslag van het oliefonds (NBIM) over 2025; zijn loon voor 2026 is nog niet gepubliceerd.`,
    fr: `La paie de Nicolai Tangen vient du rapport annuel 2025 du fonds pétrolier (NBIM) ; son salaire 2026 n'est pas encore publié.`,
  },
  'gap.wages': {
    en: `The median wage (half of employees earn more, half less) and the average wage are 2025 figures from Statistics Norway (SSB), a year older than the tax rules.`,
    nl: `Het mediaanloon (de helft van de werknemers verdient meer, de helft minder) en het gemiddelde loon zijn cijfers van 2025 van Statistics Norway (SSB), een jaar ouder dan de belastingregels.`,
    fr: `Le salaire médian (la moitié des salariés gagne plus, l'autre moitié moins) et le salaire moyen sont des chiffres 2025 de Statistics Norway (SSB), un an plus anciens que les règles fiscales.`,
  },
  'gap.notIncl': {
    en: `The work pension the employer must pay, child benefit, the tax on wealth and the rest of "What's not included" are left out.`,
    nl: `Het bedrijfspensioen dat de werkgever moet betalen, de kinderbijslag, de vermogensbelasting en de rest van "Wat niet is meegerekend" ontbreken.`,
    fr: `La retraite professionnelle que l'employeur doit payer, les allocations familiales, l'impôt sur la fortune et le reste de « Ce qui n'est pas inclus » sont laissés de côté.`,
  },
};
