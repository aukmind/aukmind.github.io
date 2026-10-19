window.TAX_STRINGS = {
  title: { en: `Croatian Buying Power`, nl: `Kroatische koopkracht`, fr: `Pouvoir d'achat en Croatie` },
  eyebrow: { en: `Croatia · income year 2026 · employee`, nl: `Kroatië · inkomstenjaar 2026 · werknemer`, fr: `Croatie · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Croatia · income year 2026 · member of government`, nl: `Kroatië · inkomstenjaar 2026 · regeringslid`, fr: `Croatie · revenus 2026 · membre du gouvernement` },
  lead: {
    en: `Every tax on a Croatian salary in 2026, from what your employer pays to what you can buy.`,
    nl: `Alle belastingen op een Kroatisch loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen.`,
    fr: `Tous les prélèvements sur un salaire croate en 2026, de ce que paie votre employeur à ce que vous pouvez acheter.`,
  },
  salaryPh: { en: `e.g. 1993`, nl: `bv. 1993`, fr: `p. ex. 1993` },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Croatia taxes each person on their own pay. A partner earning up to 3 600 € a year is a dependant, and the children's deductions go to whichever parent can use them.`,
    nl: `Kroatië belast iedereen apart op het eigen loon. Een partner die tot € 3.600 per jaar verdient, is ten laste, en de aftrek voor de kinderen gaat naar de ouder die hem kan gebruiken.`,
    fr: `La Croatie impose chacun sur son propre salaire. Un conjoint qui gagne jusqu'à 3 600 € par an est à charge, et les déductions pour enfants vont au parent qui peut les utiliser.`,
  },
  cadre: { en: `Pension pillar I only (no pillar II fund)`, nl: `Enkel pensioenpijler I (geen fonds in pijler II)`, fr: `Pilier I de retraite seulement (pas de fonds du pilier II)` },
  includePa: { en: `Count child benefit (doplatak za djecu)`, nl: `Kinderbijslag (doplatak za djecu) meetellen`, fr: `Compter les allocations familiales (doplatak za djecu)` },
  commune: { en: `City or municipality`, nl: `Stad of gemeente`, fr: `Ville ou commune` },
  searchCommune: { en: `Search a city or municipality`, nl: `Zoek een stad of gemeente`, fr: `Rechercher une ville ou une commune` },
  searchN: { en: n => `Search ${n} cities and municipalities`, nl: n => `Zoek in ${n} steden en gemeenten`, fr: n => `Rechercher parmi ${n} villes et communes` },
  communesError: {
    en: `Couldn't load the list of cities and municipalities (communes.js next to this page). Set the rate by hand below.`,
    nl: `Kon de lijst met steden en gemeenten niet laden (communes.js naast deze pagina). Stel het tarief hieronder zelf in.`,
    fr: `Impossible de charger la liste des villes et communes (communes.js à côté de cette page). Réglez le taux à la main ci-dessous.`,
  },
  pdLabel: { en: `Income tax, lower rate:`, nl: `Inkomstenbelasting, laag tarief:`, fr: `Impôt sur le revenu, taux bas :` },
  pdHint: {
    en: (kind, lo, hi, cut) => `${kind} · income tax ${lo} up to 60 000 € a year, ${hi} above${cut ? ' · assisted area: tax halved' : ''}`,
    nl: (kind, lo, hi, cut) => `${kind} · inkomstenbelasting ${lo} tot € 60.000 per jaar, ${hi} daarboven${cut ? ' · steungebied: belasting gehalveerd' : ''}`,
    fr: (kind, lo, hi, cut) => `${kind} · impôt sur le revenu ${lo} jusqu'à 60 000 € par an, ${hi} au-delà${cut ? ' · zone aidée : impôt réduit de moitié' : ''}`,
  },
  'kind.g': { en: `City (grad)`, nl: `Stad (grad)`, fr: `Ville (grad)` },
  'kind.o': { en: `Municipality (općina)`, nl: `Gemeente (općina)`, fr: `Commune (općina)` },
  'kind.z': { en: `City of Zagreb`, nl: `Stad Zagreb`, fr: `Ville de Zagreb` },
  vatStandard: { en: `(Croatian standard rate is 25%)`, nl: `(het Kroatische normale tarief is 25%)`, fr: `(le taux normal croate est de 25%)` },
  employerSize: { en: `Your age in 2026`, nl: `Je leeftijd in 2026`, fr: `Votre âge en 2026` },
  'size.std': { en: `31 or older`, nl: `31 of ouder`, fr: `31 ans ou plus` },
  'size.u30': { en: `26 to 30`, nl: `26 tot 30`, fr: `26 à 30 ans` },
  'size.u25': { en: `25 or younger`, nl: `25 of jonger`, fr: `25 ans ou moins` },
  region: { en: `Where you live`, nl: `Waar je woont`, fr: `Où vous habitez` },
  'region.std': { en: `Most of Croatia`, nl: `Grootste deel van Kroatië`, fr: `La plupart de la Croatie` },
  'region.pp': { en: `Assisted area (group I) or Vukovar`, nl: `Steungebied (groep I) of Vukovar`, fr: `Zone aidée (groupe I) ou Vukovar` },
  lowWageTrap: { en: `Pension relief fading out`, nl: `Pensioenkorting bouwt af`, fr: `Allègement retraite dégressif` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  bracketTop: { en: `higher income tax rate`, nl: `hoog tarief inkomstenbelasting`, fr: `taux haut de l'impôt sur le revenu` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.dpm': { en: `Deputy Prime Minister`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `A minister's salary is taxed like any salary: the same pension contributions and income tax, and the State pays the 16.5% health contribution on top.`,
    nl: `Het loon van een minister wordt belast zoals elk loon: dezelfde pensioenbijdragen en inkomstenbelasting, en de staat betaalt er de ziekteverzekering van 16,5% bovenop.`,
    fr: `Le salaire d'un ministre est imposé comme tout salaire : mêmes cotisations retraite et même impôt sur le revenu, et l'État paie en plus la cotisation maladie de 16,5%.`,
  },
  minSalaryHint: {
    en: `Yearly gross since the July 2024 pay decision, without the 0.5% per year of service. Official amount by default.`,
    nl: `Jaarlijks bruto sinds het loonbesluit van juli 2024, zonder de 0,5% per dienstjaar. Standaard het officiële bedrag.`,
    fr: `Brut annuel depuis la décision salariale de juillet 2024, sans les 0,5% par année de service. Montant officiel par défaut.`,
  },
  'tip.ministerRules': {
    en: `State officials are paid a base (947.18 € since July 2024, the same as civil servants) times a coefficient set by law: about 5.84 for the Prime Minister, 5.04 for a deputy Prime Minister and 4.40 for a minister, plus 0.5% per year of service. The pay is taxed like any salary.`,
    nl: `Staatsambtsdragers krijgen een basisbedrag (€ 947,18 sinds juli 2024, hetzelfde als ambtenaren) maal een wettelijke coëfficiënt: ongeveer 5,84 voor de premier, 5,04 voor een vicepremier en 4,40 voor een minister, plus 0,5% per dienstjaar. Het loon wordt belast zoals elk loon.`,
    fr: `Les dignitaires de l'État touchent une base (947,18 € depuis juillet 2024, la même que les fonctionnaires) multipliée par un coefficient fixé par la loi : environ 5,84 pour le Premier ministre, 5,04 pour un vice-Premier ministre et 4,40 pour un ministre, plus 0,5% par année de service. Le salaire est imposé comme tout salaire.`,
  },
  'bd.minGross': { en: `Minister's gross salary`, nl: `Brutoloon van de minister`, fr: `Salaire brut du ministre` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, dpm, min) => `${pm} a month for the Prime Minister, ${dpm} for a deputy Prime Minister and finance minister, ${min} for a minister, as reported for the July 2024 decision.`,
    nl: (pm, dpm, min) => `${pm} per maand voor de premier, ${dpm} voor een vicepremier en minister van Financiën, ${min} voor een minister, zoals gemeld bij het besluit van juli 2024.`,
    fr: (pm, dpm, min) => `${pm} par mois pour le Premier ministre, ${dpm} pour un vice-Premier ministre et ministre des Finances, ${min} pour un ministre, selon la décision de juillet 2024.`,
  },
  'tip.stateCost': {
    en: `The salary + the 16.5% health contribution the State pays on it. The work and full tax rates are measured against it.`,
    nl: `Het loon + de ziekteverzekeringsbijdrage van 16,5% die de staat erop betaalt. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `Le salaire + la cotisation maladie de 16,5% que l'État paie dessus. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.speaker': { en: `Speaker of the Sabor`, nl: `Voorzitter van de Sabor`, fr: `Président du Sabor` },
  'stat.dpm': { en: `Deputy Prime Minister`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'pol.stat.pm': { en: `Gross pay since July 2024`, nl: `Brutoloon sinds juli 2024`, fr: `Salaire brut depuis juillet 2024` },
  'pol.stat.speaker': { en: `Gross pay since July 2024`, nl: `Brutoloon sinds juli 2024`, fr: `Salaire brut depuis juillet 2024` },
  'pol.stat.dpm': { en: `Gross pay since July 2024`, nl: `Brutoloon sinds juli 2024`, fr: `Salaire brut depuis juillet 2024` },
  'pol.stat.minister': { en: `Gross pay since July 2024`, nl: `Brutoloon sinds juli 2024`, fr: `Salaire brut depuis juillet 2024` },
  'polNote.pm': {
    en: `Taxed exactly like a salary, so the head and the dot sit at the same gross.`,
    nl: `Belast precies zoals een loon, dus het hoofdje en het bolletje staan bij hetzelfde bruto.`,
    fr: `Imposé exactement comme un salaire : la tête et le point sont au même brut.`,
  },
  'polNote.minister': {
    en: `Taxed exactly like a salary, so the head and the dot sit at the same gross.`,
    nl: `Belast precies zoals een loon, dus het hoofdje en het bolletje staan bij hetzelfde bruto.`,
    fr: `Imposé exactement comme un salaire : la tête et le point sont au même brut.`,
  },
  'polTipNote.pm': {
    en: `Andrej Plenković. 5 535 € gross a month after the July 2024 rise (3 263 € before). Later indexing of the base isn't confirmed here.`,
    nl: `Andrej Plenković. € 5.535 bruto per maand na de verhoging van juli 2024 (€ 3.263 ervoor). Latere indexering van het basisbedrag is hier niet bevestigd.`,
    fr: `Andrej Plenković. 5 535 € brut par mois après la hausse de juillet 2024 (3 263 € avant). Une indexation ultérieure de la base n'est pas confirmée ici.`,
  },
  'polTipNote.speaker': {
    en: `Gordan Jandroković. 5 314 € gross a month after the July 2024 rise (3 113 € before).`,
    nl: `Gordan Jandroković. € 5.314 bruto per maand na de verhoging van juli 2024 (€ 3.113 ervoor).`,
    fr: `Gordan Jandroković. 5 314 € brut par mois après la hausse de juillet 2024 (3 113 € avant).`,
  },
  'polTipNote.dpm': {
    en: `Deputy Prime Minister and finance minister: 4 776 € gross a month after the July 2024 rise (2 769 € before).`,
    nl: `Vicepremier en minister van Financiën: € 4.776 bruto per maand na de verhoging van juli 2024 (€ 2.769 ervoor).`,
    fr: `Vice-Premier ministre et ministre des Finances : 4 776 € brut par mois après la hausse de juillet 2024 (2 769 € avant).`,
  },
  'polTipNote.minister': {
    en: `Example of the justice minister: 4 167 € gross a month after the July 2024 rise (2 357 € before). Years of service add 0.5% each.`,
    nl: `Voorbeeld van de minister van Justitie: € 4.167 bruto per maand na de verhoging van juli 2024 (€ 2.357 ervoor). Elk dienstjaar voegt 0,5% toe.`,
    fr: `Exemple du ministre de la Justice : 4 167 € brut par mois après la hausse de juillet 2024 (2 357 € avant). Chaque année de service ajoute 0,5%.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. State officials are taxed like employees. Pay: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Staatsambtsdragers worden belast als werknemers. Lonen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. Les dignitaires de l'État sont imposés comme des salariés. Salaires : ${links}.`,
  },

  trapTitle: { en: (a, b) => `Why higher between ${a} and ${b}?`, nl: (a, b) => `Waarom hoger tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi plus élevé entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, extra) => `Up to ${a} a month, 300 € of your pay is free of the pillar I pension contribution. From ${a} to ${b} that relief shrinks by 50 cents for each extra euro, so each euro also costs ${extra} more in contributions. Above ${b} the relief is gone. Your pension rights still count the full pay.`,
    nl: (a, b, extra) => `Tot ${a} per maand is € 300 van je loon vrij van de pensioenbijdrage pijler I. Van ${a} tot ${b} krimpt die korting met 50 cent per extra euro, dus kost elke euro ook ${extra} meer aan bijdragen. Boven ${b} is de korting weg. Je pensioenrechten tellen wel het volle loon.`,
    fr: (a, b, extra) => `Jusqu'à ${a} par mois, 300 € de votre salaire échappent à la cotisation retraite du pilier I. De ${a} à ${b}, cet allègement diminue de 50 centimes par euro en plus : chaque euro coûte aussi ${extra} de cotisations en plus. Au-delà de ${b}, il n'y a plus d'allègement. Vos droits à la retraite comptent quand même le salaire entier.`,
  },
  topTitle: {
    en: top => `Why the step at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi la marche à ${top} ?`,
  },
  topBody: {
    en: (top, thr, hi) => `From ${top} your tax base passes ${thr} a year (5 000 € a month), and the part above is taxed at your city's higher rate, ${hi} here, instead of the lower one.`,
    nl: (top, thr, hi) => `Vanaf ${top} komt je belastbare grondslag boven ${thr} per jaar (€ 5.000 per maand), en het deel daarboven wordt belast aan het hoge tarief van je stad, hier ${hi}, in plaats van het lage.`,
    fr: (top, thr, hi) => `À partir de ${top}, votre base imposable dépasse ${thr} par an (5 000 € par mois), et la part au-delà est imposée au taux haut de votre ville, ${hi} ici, au lieu du taux bas.`,
  },

  // Tax components
  'comp.er': { en: `Health insurance, paid by the employer`, nl: `Ziekteverzekering, betaald door de werkgever`, fr: `Assurance maladie, payée par l'employeur` },
  'comp.mio1': { en: `Pension pillar I (MIO I)`, nl: `Pensioen pijler I (MIO I)`, fr: `Retraite pilier I (MIO I)` },
  'comp.mio2': { en: `Pension pillar II (MIO II)`, nl: `Pensioen pijler II (MIO II)`, fr: `Retraite pilier II (MIO II)` },
  'comp.pd': { en: `Income tax (porez na dohodak)`, nl: `Inkomstenbelasting (porez na dohodak)`, fr: `Impôt sur le revenu (porez na dohodak)` },
  'comp.dz': { en: `Child benefit (doplatak za djecu)`, nl: `Kinderbijslag (doplatak za djecu)`, fr: `Allocations familiales (doplatak za djecu)` },
  dzReceived: { en: `+ Child benefit, paid by HZMO`, nl: `+ Kinderbijslag, betaald door HZMO`, fr: `+ Allocations familiales, versées par le HZMO` },
  'bd.relief': { en: `Pillar I relief for low pay`, nl: `Korting pijler I voor lage lonen`, fr: `Allègement pilier I pour bas salaires` },
  'bd.doh': { en: `Income after contributions (dohodak)`, nl: `Inkomen na bijdragen (dohodak)`, fr: `Revenu après cotisations (dohodak)` },
  'bd.ded': { en: `Personal deduction (osobni odbitak)`, nl: `Persoonlijke aftrek (osobni odbitak)`, fr: `Abattement personnel (osobni odbitak)` },
  'bd.base': { en: `Tax base`, nl: `Belastbare grondslag`, fr: `Base imposable` },
  'bd.pdGross': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'bd.youth': { en: `Youth tax cut`, nl: `Belastingkorting voor jongeren`, fr: `Réduction d'impôt jeunes` },
  'bd.area': { en: `Assisted-area tax cut (50%)`, nl: `Korting steungebied (50%)`, fr: `Réduction zone aidée (50%)` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries. Croatia has no statutory 13th month; Christmas and holiday bonuses are paid tax-free up to a limit by many employers and are left out.`,
    nl: `12 maandlonen. Kroatië kent geen wettelijke 13e maand; kerst- en vakantiepremies worden door veel werkgevers tot een grens belastingvrij betaald en tellen hier niet mee.`,
    fr: `12 salaires mensuels. La Croatie n'a pas de 13e mois légal ; les primes de Noël et de vacances, versées sans impôt jusqu'à un plafond par beaucoup d'employeurs, ne sont pas comptées.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: max => `No joint return: each partner is taxed on their own pay. A partner with at most ${max} a year counts as a dependant and adds 300 € a month to your deduction. Children's deductions can go to either parent: the page gives them where they save the most tax, so your tax is the household's tax with your pay minus without it.`,
    nl: max => `Geen gezamenlijke aangifte: elke partner wordt belast op het eigen loon. Een partner met hoogstens ${max} per jaar is ten laste en voegt € 300 per maand aan je aftrek toe. De aftrek voor kinderen kan naar elke ouder: de pagina geeft hem waar hij het meest bespaart, dus jouw belasting is die van het gezin met jouw loon min zonder.`,
    fr: max => `Pas de déclaration commune : chacun est imposé sur son salaire. Un conjoint qui gagne au plus ${max} par an est à charge et ajoute 300 € par mois à votre abattement. Les déductions pour enfants peuvent aller à l'un ou l'autre parent : la page les place là où elles font gagner le plus, votre impôt est donc celui du ménage avec votre salaire moins sans.`,
  },
  'tip.cadre': {
    en: `Workers who are only in pillar I (mostly those who were over 50 in 2002, or who left pillar II) pay the whole 20% to pillar I. The low-pay relief then applies to all 20%.`,
    nl: `Werknemers die enkel in pijler I zitten (vooral wie in 2002 ouder was dan 50, of wie pijler II verliet) betalen de hele 20% aan pijler I. De korting voor lage lonen geldt dan op de volle 20%.`,
    fr: `Les salariés affiliés au seul pilier I (surtout ceux qui avaient plus de 50 ans en 2002, ou qui ont quitté le pilier II) versent les 20% au pilier I. L'allègement pour bas salaires s'applique alors aux 20%.`,
  },
  'tip.dzToggle': {
    en: `Paid by HZMO for children up to the end of school, when the household's net income per member in the year before was at most 618.02 € a month. The amount falls in steps as income rises, so a raise can cost part of it.`,
    nl: `Betaald door HZMO voor kinderen tot het einde van hun school, als het netto-inkomen van het gezin per lid het jaar ervoor hoogstens € 618,02 per maand was. Het bedrag daalt in stappen naarmate het inkomen stijgt, dus een opslag kan een deel ervan kosten.`,
    fr: `Versées par le HZMO pour les enfants jusqu'à la fin de leur scolarité, si le revenu net du ménage par membre l'année d'avant était au plus de 618,02 € par mois. Le montant baisse par paliers quand le revenu monte : une augmentation peut en coûter une partie.`,
  },
  'tip.pdRule': {
    en: `Since 2024 each city and municipality sets its own two income tax rates, within bands: municipalities 15 to 20% and 25 to 30%, cities up to 21% and 31%, large cities and county seats up to 22% and 32%, Zagreb up to 23% and 33%. Without a decision, 20% and 30% apply. Pick your city above or set the lower rate here; the higher one is then taken 10 points above.`,
    nl: `Sinds 2024 bepaalt elke stad en gemeente haar eigen twee tarieven, binnen marges: gemeenten 15 tot 20% en 25 tot 30%, steden tot 21% en 31%, grote steden en provinciehoofdsteden tot 22% en 32%, Zagreb tot 23% en 33%. Zonder besluit gelden 20% en 30%. Kies je stad hierboven of stel hier het lage tarief in; het hoge ligt dan 10 punten hoger.`,
    fr: `Depuis 2024, chaque ville et commune fixe ses deux taux, dans des fourchettes : communes de 15 à 20% et de 25 à 30%, villes jusqu'à 21% et 31%, grandes villes et chefs-lieux de comitat jusqu'à 22% et 32%, Zagreb jusqu'à 23% et 33%. Sans décision, 20% et 30% s'appliquent. Choisissez votre ville ci-dessus ou réglez ici le taux bas ; le taux haut est alors pris 10 points au-dessus.`,
  },
  'tip.size': {
    en: `Up to the year you turn 25 the income tax at the lower rate on your salary is cut by 100%, from 26 to 30 by 50% (the whole year in which you reach the age counts). Tax at the higher rate is not cut.`,
    nl: `Tot het jaar waarin je 25 wordt, wordt de inkomstenbelasting aan het lage tarief op je loon met 100% verminderd, van 26 tot 30 met 50% (het hele jaar waarin je die leeftijd bereikt, telt). Belasting aan het hoge tarief wordt niet verminderd.`,
    fr: `Jusqu'à l'année de vos 25 ans, l'impôt au taux bas sur votre salaire est réduit de 100%, de 26 à 30 ans de 50% (toute l'année où vous atteignez l'âge compte). L'impôt au taux haut n'est pas réduit.`,
  },
  'tip.reg': {
    en: `People living in a group I assisted area (the least developed quarter of local units, NN 3/2024) or in the city of Vukovar pay half the income tax on their salary. Picking a municipality sets this for you.`,
    nl: `Wie in een steungebied van groep I woont (het minst ontwikkelde kwart van de lokale besturen, NN 3/2024) of in de stad Vukovar, betaalt de helft van de inkomstenbelasting op zijn loon. Een gemeente kiezen stelt dit voor je in.`,
    fr: `Les habitants d'une zone aidée du groupe I (le quart le moins développé des collectivités locales, NN 3/2024) ou de la ville de Vukovar paient la moitié de l'impôt sur leur salaire. Choisir une commune règle cela pour vous.`,
  },
  'tip.costShort': { en: `Gross salary + the employer's health contribution.`, nl: `Brutoloon + de ziekteverzekeringsbijdrage van de werkgever.`, fr: `Salaire brut + la cotisation maladie de l'employeur.` },
  'tip.er': {
    en: `Health insurance at 16.5% of all gross pay, with no ceiling, paid by the employer on top of the salary. It is the only employer contribution since 2019.`,
    nl: `Ziekteverzekering van 16,5% op het hele brutoloon, zonder plafond, betaald door de werkgever bovenop het loon. Sinds 2019 is het de enige werkgeversbijdrage.`,
    fr: `Assurance maladie de 16,5% de tout le salaire brut, sans plafond, payée par l'employeur en plus du salaire. C'est la seule cotisation patronale depuis 2019.`,
  },
  'tip.mio1': {
    en: (cap, full, lo, hi) => `15% of your gross pay for the public pension, on at most ${cap} a month. Up to ${lo} a month, ${full} of pay is left out of the base; from ${lo} to ${hi} the amount left out shrinks to zero.`,
    nl: (cap, full, lo, hi) => `15% van je brutoloon voor het wettelijk pensioen, op hoogstens ${cap} per maand. Tot ${lo} per maand blijft ${full} van het loon buiten de grondslag; van ${lo} tot ${hi} krimpt dat bedrag tot nul.`,
    fr: (cap, full, lo, hi) => `15% du salaire brut pour la retraite publique, sur au plus ${cap} par mois. Jusqu'à ${lo} par mois, ${full} du salaire sont exclus de la base ; de ${lo} à ${hi}, ce montant diminue jusqu'à zéro.`,
  },
  'tip.base': { en: `Gross pay, capped`, nl: `Brutoloon, begrensd`, fr: `Salaire brut, plafonné` },
  'tip.relief': {
    en: (full, lo, hi) => `${full} a month for pay up to ${lo}, then 0.5 × (${hi} − monthly gross). It lowers pillar I only, and pension rights are still counted on the full pay.`,
    nl: (full, lo, hi) => `${full} per maand voor lonen tot ${lo}, daarna 0,5 × (${hi} − maandelijks bruto). Het verlaagt enkel pijler I, en pensioenrechten tellen nog altijd het volle loon.`,
    fr: (full, lo, hi) => `${full} par mois pour un salaire jusqu'à ${lo}, puis 0,5 × (${hi} − brut mensuel). Il ne réduit que le pilier I, et les droits à la retraite comptent toujours le salaire entier.`,
  },
  'tip.mio2': {
    en: cap => `5% of your gross pay into your own pension fund (capitalised), on at most ${cap} a month. No low-pay relief.`,
    nl: cap => `5% van je brutoloon naar je eigen pensioenfonds (kapitalisatie), op hoogstens ${cap} per maand. Geen korting voor lage lonen.`,
    fr: cap => `5% du salaire brut versés à votre propre fonds de pension (capitalisation), sur au plus ${cap} par mois. Pas d'allègement pour bas salaires.`,
  },
  'tip.doh': {
    en: `Gross pay − pension contributions. The income tax is computed from it.`,
    nl: `Brutoloon − pensioenbijdragen. De inkomstenbelasting wordt hierop berekend.`,
    fr: `Salaire brut − cotisations retraite. L'impôt sur le revenu se calcule à partir de là.`,
  },
  'tip.ded': {
    en: (basic, dep) => `${basic} a month for everyone, plus for each dependant a share of it: 0.5 for a partner or other family member with at most ${dep} a year, 0.5, 0.7, 1.0, 1.4, 1.9 … for the 1st, 2nd, 3rd, 4th, 5th child.`,
    nl: (basic, dep) => `${basic} per maand voor iedereen, plus voor elke persoon ten laste een deel ervan: 0,5 voor een partner of ander gezinslid met hoogstens ${dep} per jaar, 0,5, 0,7, 1,0, 1,4, 1,9 … voor het 1e, 2e, 3e, 4e, 5e kind.`,
    fr: (basic, dep) => `${basic} par mois pour tous, plus pour chaque personne à charge une part de ce montant : 0,5 pour un conjoint ou autre membre de la famille gagnant au plus ${dep} par an, 0,5, 0,7, 1,0, 1,4, 1,9 … pour le 1er, 2e, 3e, 4e, 5e enfant.`,
  },
  'tip.dedBasic': { en: `Basic deduction (600 € × 12)`, nl: `Basisaftrek (€ 600 × 12)`, fr: `Abattement de base (600 € × 12)` },
  'tip.dedKids': { en: n => `Children (${n})`, nl: n => `Kinderen (${n})`, fr: n => `Enfants (${n})` },
  'tip.dedDep': { en: `Dependent partner`, nl: `Partner ten laste`, fr: `Conjoint à charge` },
  'tip.dedPartner': { en: `Children's deduction used by your partner`, nl: `Kinderaftrek gebruikt door je partner`, fr: `Déduction enfants utilisée par votre conjoint` },
  'tip.baseTxt': {
    en: thr => `Income after contributions − personal deduction. The lower rate applies up to ${thr} a year, the higher rate above.`,
    nl: thr => `Inkomen na bijdragen − persoonlijke aftrek. Het lage tarief geldt tot ${thr} per jaar, het hoge daarboven.`,
    fr: thr => `Revenu après cotisations − abattement personnel. Le taux bas s'applique jusqu'à ${thr} par an, le taux haut au-delà.`,
  },
  'tip.pdShort': {
    en: `Your city's lower rate on the tax base up to 60 000 € a year, its higher rate above, minus the youth and assisted-area cuts.`,
    nl: `Het lage tarief van je stad op de grondslag tot € 60.000 per jaar, het hoge daarboven, min de kortingen voor jongeren en steungebieden.`,
    fr: `Le taux bas de votre ville sur la base jusqu'à 60 000 € par an, son taux haut au-delà, moins les réductions jeunes et zones aidées.`,
  },
  'tip.pd': {
    en: (name, lo, hi, thr) => `${name ? name + ': ' : ''}${lo} up to ${thr} of tax base a year, ${hi} above. The tax goes to the city or municipality you live in.`,
    nl: (name, lo, hi, thr) => `${name ? name + ': ' : ''}${lo} tot ${thr} grondslag per jaar, ${hi} daarboven. De belasting gaat naar de stad of gemeente waar je woont.`,
    fr: (name, lo, hi, thr) => `${name ? name + ' : ' : ''}${lo} jusqu'à ${thr} de base par an, ${hi} au-delà. L'impôt va à la ville ou commune où vous habitez.`,
  },
  'tip.pdPartner': { en: `Change in your partner's tax`, nl: `Verschil in de belasting van je partner`, fr: `Variation de l'impôt de votre conjoint` },
  'tip.dz': {
    en: (base, cap, max, min, extra) => `By the household's net income per member a month: up to 20% of the budget base (${base}) you get 14% of it per child (${max}), then 12.5%, 11%, 9% and 7% (${min}) up to ${cap}; nothing above. Plus ${extra} for the 3rd and 4th child. A couple shares it half and half here.`,
    nl: (base, cap, max, min, extra) => `Volgens het netto-inkomen van het gezin per lid per maand: tot 20% van de begrotingsbasis (${base}) krijg je 14% ervan per kind (${max}), daarna 12,5%, 11%, 9% en 7% (${min}) tot ${cap}; daarboven niets. Plus ${extra} voor het 3e en 4e kind. Een koppel deelt het hier half om half.`,
    fr: (base, cap, max, min, extra) => `Selon le revenu net du ménage par membre et par mois : jusqu'à 20% de la base budgétaire (${base}), 14% de celle-ci par enfant (${max}), puis 12,5%, 11%, 9% et 7% (${min}) jusqu'à ${cap} ; rien au-delà. Plus ${extra} pour le 3e et le 4e enfant. Un couple la partage ici à moitié.`,
  },
  'tip.vatM': {
    en: `The 13% rate (restaurants, hotels, some food), the 5% rate (bread, milk, books, medicines) and VAT-free spending such as rent are left out, so this is an upper bound.`,
    nl: `Het tarief van 13% (restaurants, hotels, sommige voeding), het tarief van 5% (brood, melk, boeken, geneesmiddelen) en btw-vrije uitgaven zoals huur zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Le taux de 13% (restaurants, hôtels, certains aliments), le taux de 5% (pain, lait, livres, médicaments) et les dépenses sans TVA comme le loyer ne sont pas pris en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − pension contributions − income tax, + child benefit if counted.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − pensioenbijdragen − inkomstenbelasting, + kinderbijslag als die meetelt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisations retraite − impôt sur le revenu, + allocations familiales si elles sont comptées.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026`,
    nl: `Gebruikte regels · inkomstenjaar 2026`,
    fr: `Règles utilisées · revenus 2026`,
  },
  'ref.contrib': {
    en: { h: `1 · Contributions`, li: [
      `Employee: pension pillar I <span class="num">15%</span> and pillar II <span class="num">5%</span>, on at most <span class="num">11 958 €</span> a month (143 496 € a year).`,
      `Low-pay relief on pillar I: 300 € off the base up to 700 € gross a month, then 0.5 × (1 300 € − gross).`,
      `Employer: health insurance <span class="num">16.5%</span> of all pay, no ceiling.`,
    ] },
    nl: { h: `1 · Bijdragen`, li: [
      `Werknemer: pensioen pijler I <span class="num">15%</span> en pijler II <span class="num">5%</span>, op hoogstens <span class="num">€ 11.958</span> per maand (€ 143.496 per jaar).`,
      `Korting voor lage lonen op pijler I: € 300 minder grondslag tot € 700 bruto per maand, daarna 0,5 × (€ 1.300 − bruto).`,
      `Werkgever: ziekteverzekering <span class="num">16,5%</span> van het hele loon, geen plafond.`,
    ] },
    fr: { h: `1 · Cotisations`, li: [
      `Salarié : retraite pilier I <span class="num">15%</span> et pilier II <span class="num">5%</span>, sur au plus <span class="num">11 958 €</span> par mois (143 496 € par an).`,
      `Allègement bas salaires sur le pilier I : 300 € de base en moins jusqu'à 700 € brut par mois, puis 0,5 × (1 300 € − brut).`,
      `Employeur : assurance maladie <span class="num">16,5%</span> de tout le salaire, sans plafond.`,
    ] },
  },
  'ref.tax': {
    en: br => ({ h: `2 · Income tax`, li: [
      `Tax base = gross − pension contributions − personal deduction. Default rates on the yearly base, where the city made no decision:${br}`,
      `Cities and municipalities set their own: lower rate <span class="num">15%</span> to <span class="num">23%</span>, higher <span class="num">25%</span> to <span class="num">33%</span>. Rates of all 556 from the Tax Administration's 2026 table.`,
      `Youth cut on the lower-rate tax: 100% up to 25, 50% from 26 to 30. Assisted areas of group I and Vukovar: −50% of what is left.`,
    ] }),
    nl: br => ({ h: `2 · Inkomstenbelasting`, li: [
      `Grondslag = bruto − pensioenbijdragen − persoonlijke aftrek. Standaardtarieven op de jaarlijkse grondslag, waar de stad niets besliste:${br}`,
      `Steden en gemeenten bepalen hun eigen: laag tarief <span class="num">15%</span> tot <span class="num">23%</span>, hoog <span class="num">25%</span> tot <span class="num">33%</span>. Tarieven van alle 556 uit de tabel 2026 van de belastingdienst.`,
      `Jongerenkorting op de belasting aan het lage tarief: 100% tot 25, 50% van 26 tot 30. Steungebieden van groep I en Vukovar: −50% van wat overblijft.`,
    ] }),
    fr: br => ({ h: `2 · Impôt sur le revenu`, li: [
      `Base = brut − cotisations retraite − abattement personnel. Taux par défaut sur la base annuelle, là où la ville n'a rien décidé :${br}`,
      `Villes et communes fixent les leurs : taux bas de <span class="num">15%</span> à <span class="num">23%</span>, haut de <span class="num">25%</span> à <span class="num">33%</span>. Taux des 556 selon le tableau 2026 de l'administration fiscale.`,
      `Réduction jeunes sur l'impôt au taux bas : 100% jusqu'à 25 ans, 50% de 26 à 30 ans. Zones aidées du groupe I et Vukovar : −50% du reste.`,
    ] }),
  },
  'ref.ded': {
    en: { h: `3 · Personal deduction`, li: [
      `<span class="num">600 €</span> a month (7 200 € a year) for everyone.`,
      `Children: 0.5, 0.7, 1.0, 1.4, 1.9, 2.5, 3.2, 4.0, 4.9 × 600 € for the 1st to 9th child. Dependent partner 0.5 × 600 € if they earn at most 3 600 € a year.`,
    ] },
    nl: { h: `3 · Persoonlijke aftrek`, li: [
      `<span class="num">€ 600</span> per maand (€ 7.200 per jaar) voor iedereen.`,
      `Kinderen: 0,5, 0,7, 1,0, 1,4, 1,9, 2,5, 3,2, 4,0, 4,9 × € 600 voor het 1e tot 9e kind. Partner ten laste 0,5 × € 600 als die hoogstens € 3.600 per jaar verdient.`,
    ] },
    fr: { h: `3 · Abattement personnel`, li: [
      `<span class="num">600 €</span> par mois (7 200 € par an) pour tous.`,
      `Enfants : 0,5, 0,7, 1,0, 1,4, 1,9, 2,5, 3,2, 4,0, 4,9 × 600 € du 1er au 9e enfant. Conjoint à charge 0,5 × 600 € s'il gagne au plus 3 600 € par an.`,
    ] },
  },
  'ref.dz': {
    en: { h: `4 · Child benefit`, li: [
      `Budget base <span class="num">441.44 €</span>. Per child: 14%, 12.5%, 11%, 9% or 7% of it for a net income per household member up to 20%, 40%, 60%, 100% or 140% of it a month.`,
      `Plus <span class="num">66.36 €</span> for the 3rd and the 4th child.`,
    ] },
    nl: { h: `4 · Kinderbijslag`, li: [
      `Begrotingsbasis <span class="num">€ 441,44</span>. Per kind: 14%, 12,5%, 11%, 9% of 7% ervan bij een netto-inkomen per gezinslid tot 20%, 40%, 60%, 100% of 140% ervan per maand.`,
      `Plus <span class="num">€ 66,36</span> voor het 3e en het 4e kind.`,
    ] },
    fr: { h: `4 · Allocations familiales`, li: [
      `Base budgétaire <span class="num">441,44 €</span>. Par enfant : 14%, 12,5%, 11%, 9% ou 7% de celle-ci pour un revenu net par membre du ménage jusqu'à 20%, 40%, 60%, 100% ou 140% de celle-ci par mois.`,
      `Plus <span class="num">66,36 €</span> pour le 3e et le 4e enfant.`,
    ] },
  },
  'ref.vat': {
    en: { h: `5 · VAT on spending`, li: [
      `Standard rate <span class="num">25%</span>, applied to all of your net pay as if you spent it. Use the slider to see other rates.`,
      `VAT inside a price = price × r / (100 + r): at 25% that's 25 / 125 = <span class="num">20%</span> of what you pay.`,
    ] },
    nl: { h: `5 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">25%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar om andere tarieven te bekijken.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 25% is dat 25 / 125 = <span class="num">20%</span> van wat je betaalt.`,
    ] },
    fr: { h: `5 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">25%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour voir d'autres taux.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 25%, cela fait 25 / 125 = <span class="num">20%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `6 · Government`, li: [
      `Prime Minister <span class="num">5 535 €</span>, deputy Prime Minister and finance minister <span class="num">4 776 €</span>, minister <span class="num">4 167 €</span> gross a month, as reported for July 2024 (base 947.18 €).`,
      `Taxed like salaries; the State pays the health contribution on them.`,
    ] },
    nl: { h: `6 · Regering`, li: [
      `Premier <span class="num">€ 5.535</span>, vicepremier en minister van Financiën <span class="num">€ 4.776</span>, minister <span class="num">€ 4.167</span> bruto per maand, zoals gemeld voor juli 2024 (basis € 947,18).`,
      `Belast als lonen; de staat betaalt er de ziekteverzekeringsbijdrage op.`,
    ] },
    fr: { h: `6 · Gouvernement`, li: [
      `Premier ministre <span class="num">5 535 €</span>, vice-Premier ministre et ministre des Finances <span class="num">4 776 €</span>, ministre <span class="num">4 167 €</span> brut par mois, selon la décision de juillet 2024 (base 947,18 €).`,
      `Imposés comme des salaires ; l'État paie la cotisation maladie dessus.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Tax-free benefits (Christmas bonus, meal and transport allowances), the returnee cut for Croatians coming back from abroad, disability deductions, the voluntary pillar III, other income and the yearly tax return.`,
      `The child benefit is assessed on last year's income; here it uses this year's. Reference wages: no median is shown.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Belastingvrije voordelen (kerstpremie, maaltijd- en vervoersvergoeding), de korting voor Kroaten die uit het buitenland terugkeren, aftrek voor handicap, de vrijwillige pijler III, ander inkomen en de jaarlijkse aangifte.`,
      `De kinderbijslag wordt berekend op het inkomen van vorig jaar; hier op dat van dit jaar. Referentielonen: er wordt geen mediaan getoond.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Avantages exonérés (prime de Noël, indemnités de repas et de transport), la réduction pour les Croates qui reviennent de l'étranger, les déductions pour handicap, le pilier III volontaire, les autres revenus et la déclaration annuelle.`,
      `Les allocations familiales se calculent sur les revenus de l'année précédente ; ici sur ceux de l'année. Salaires de référence : aucune médiane n'est affichée.`,
    ] },
  },

  inheritLink: {
    en: `Inheritance tax in Croatia: 4%, close family exempt →`,
    nl: `Erfbelasting in Kroatië: 4%, naaste familie vrijgesteld →`,
    fr: `Droits de succession en Croatie : 4%, famille proche exonérée →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and the Tax Administration's yearly assessment decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en de jaarlijkse aanslag van de belastingdienst zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et le calcul annuel de l'administration fiscale font foi.`,
  },

  'src.zpd': { en: `Income Tax Act (zakon.hr)`, nl: `Wet op de inkomstenbelasting (zakon.hr)`, fr: `Loi sur l'impôt sur le revenu (zakon.hr)` },
  'src.rates': { en: `Tax Administration: income tax rates by city 2026`, nl: `Belastingdienst: tarieven per stad 2026`, fr: `Administration fiscale : taux par ville 2026` },
  'src.groups': { en: `Development groups of local units (NN 3/2024)`, nl: `Ontwikkelingsgroepen van lokale besturen (NN 3/2024)`, fr: `Groupes de développement des collectivités (NN 3/2024)` },
  'src.doprinosi': { en: `Contributions Act (zakon.hr)`, nl: `Wet op de bijdragen (zakon.hr)`, fr: `Loi sur les cotisations (zakon.hr)` },
  'src.bases': { en: `Contribution bases for 2026 (NN 150/25)`, nl: `Grondslagen voor bijdragen 2026 (NN 150/25)`, fr: `Bases de cotisations 2026 (NN 150/25)` },
  'src.relief': { en: `Government: 2024 tax changes and pillar I relief`, nl: `Regering: belastingwijzigingen 2024 en korting pijler I`, fr: `Gouvernement : réforme fiscale 2024 et allègement pilier I` },
  'src.dz': { en: `Child Benefit Act (zakon.hr)`, nl: `Wet op de kinderbijslag (zakon.hr)`, fr: `Loi sur les allocations familiales (zakon.hr)` },
  'src.minWage': { en: `Moja Firma: payroll guide 2026 (minimum wage)`, nl: `Moja Firma: loongids 2026 (minimumloon)`, fr: `Moja Firma : guide de la paie 2026 (salaire minimum)` },
  'src.vat': { en: `PwC: Croatia, VAT and other taxes`, nl: `PwC: Kroatië, btw en andere belastingen`, fr: `PwC : Croatie, TVA et autres impôts` },
  'src.govPay': { en: `tportal: pay of state officials from July 2024`, nl: `tportal: lonen van staatsambtsdragers vanaf juli 2024`, fr: `tportal : salaires des dignitaires depuis juillet 2024` },
};
