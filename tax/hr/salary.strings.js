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
    en: `Croatia taxes each person on their own pay. A partner who earns up to 3 600 € a year counts as someone you support. The tax break for children goes to whichever parent can use it.`,
    nl: `Kroatië belast iedereen apart op het eigen loon. Een partner die tot € 3.600 per jaar verdient, telt als iemand die je onderhoudt. Het belastingvoordeel voor kinderen gaat naar de ouder die het kan gebruiken.`,
    fr: `La Croatie impose chacun sur son propre salaire. Un conjoint qui gagne jusqu'à 3 600 € par an compte comme personne à votre charge. L'avantage fiscal pour enfants va au parent qui peut l'utiliser.`,
  },
  cadre: { en: `State pension only (no private pension fund)`, nl: `Alleen staatspensioen (geen privé-pensioenfonds)`, fr: `Retraite publique seulement (pas de fonds de pension privé)` },
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
    en: (kind, lo, hi, cut) => `${kind} · income tax ${lo} on the first 60 000 € a year, ${hi} on the rest${cut ? ' · poorer area: tax cut in half' : ''}`,
    nl: (kind, lo, hi, cut) => `${kind} · inkomstenbelasting ${lo} op de eerste € 60.000 per jaar, ${hi} op de rest${cut ? ' · armere regio: belasting gehalveerd' : ''}`,
    fr: (kind, lo, hi, cut) => `${kind} · impôt sur le revenu ${lo} sur les 60 000 premiers euros par an, ${hi} sur le reste${cut ? ' · zone moins riche : impôt divisé par deux' : ''}`,
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
  lowWageTrap: { en: `Pension discount fading out`, nl: `Pensioenkorting bouwt af`, fr: `Remise retraite qui diminue` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  bracketTop: { en: `higher income tax rate`, nl: `hoog tarief inkomstenbelasting`, fr: `taux haut de l'impôt sur le revenu` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.dpm': { en: `Deputy Prime Minister`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `A minister's salary is taxed like any salary: the same pension contributions and income tax. The State also pays the 16.5% health contribution on top.`,
    nl: `Het loon van een minister wordt belast zoals elk loon: dezelfde pensioenbijdragen en inkomstenbelasting. De staat betaalt er ook de gezondheidsbijdrage van 16,5% bovenop.`,
    fr: `Le salaire d'un ministre est imposé comme tout salaire : mêmes cotisations retraite et même impôt sur le revenu. L'État paie aussi en plus la cotisation santé de 16,5%.`,
  },
  minSalaryHint: {
    en: `Pay for the whole year before tax, since the July 2024 pay decision, without the 0.5% extra per year of service. It starts at the official amount.`,
    nl: `Loon voor het hele jaar vóór belasting, sinds het loonbesluit van juli 2024, zonder de 0,5% extra per dienstjaar. Het begint bij het officiële bedrag.`,
    fr: `Paie de toute l'année avant impôts, depuis la décision salariale de juillet 2024, sans les 0,5% de plus par année de service. On part du montant officiel.`,
  },
  'tip.ministerRules': {
    en: `Top state officials get a base amount (947.18 € since July 2024, the same as civil servants) multiplied by a number set by law: about 5.84 for the Prime Minister, 5.04 for a deputy Prime Minister and 4.40 for a minister. Each year of service adds 0.5%. The pay is taxed like any salary.`,
    nl: `Hoge staatsambtsdragers krijgen een basisbedrag (€ 947,18 sinds juli 2024, hetzelfde als ambtenaren) vermenigvuldigd met een getal dat de wet vastlegt: ongeveer 5,84 voor de premier, 5,04 voor een vicepremier en 4,40 voor een minister. Elk dienstjaar voegt 0,5% toe. Het loon wordt belast zoals elk loon.`,
    fr: `Les hauts responsables de l'État touchent un montant de base (947,18 € depuis juillet 2024, le même que les fonctionnaires) multiplié par un chiffre fixé par la loi : environ 5,84 pour le Premier ministre, 5,04 pour un vice-Premier ministre et 4,40 pour un ministre. Chaque année de service ajoute 0,5%. Le salaire est imposé comme tout salaire.`,
  },
  'bd.minGross': { en: `Minister's gross salary`, nl: `Brutoloon van de minister`, fr: `Salaire brut du ministre` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, dpm, min) => `Per month before tax: ${pm} for the Prime Minister, ${dpm} for a deputy Prime Minister who is also finance minister, ${min} for a minister. These are the amounts reported for the July 2024 decision.`,
    nl: (pm, dpm, min) => `Per maand vóór belasting: ${pm} voor de premier, ${dpm} voor een vicepremier die ook minister van Financiën is, ${min} voor een minister. Dit zijn de bedragen die gemeld werden bij het besluit van juli 2024.`,
    fr: (pm, dpm, min) => `Par mois avant impôts : ${pm} pour le Premier ministre, ${dpm} pour un vice-Premier ministre qui est aussi ministre des Finances, ${min} pour un ministre. Ce sont les montants publiés pour la décision de juillet 2024.`,
  },
  'tip.stateCost': {
    en: `The salary plus the 16.5% health contribution the State pays on it. The tax rates on the chart are measured against this total.`,
    nl: `Het loon plus de gezondheidsbijdrage van 16,5% die de staat erop betaalt. De belastingtarieven op de grafiek worden afgemeten aan dit totaal.`,
    fr: `Le salaire plus la cotisation santé de 16,5% que l'État paie dessus. Les taux sur le graphique sont calculés par rapport à ce total.`,
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
    en: `Taxed exactly like a normal salary, so the face and the dot sit at the same pay before tax.`,
    nl: `Belast precies zoals een gewoon loon, dus het gezichtje en het bolletje staan op hetzelfde loon vóór belasting.`,
    fr: `Imposé exactement comme un salaire normal : le visage et le point sont au même salaire avant impôts.`,
  },
  'polNote.minister': {
    en: `Taxed exactly like a normal salary, so the face and the dot sit at the same pay before tax.`,
    nl: `Belast precies zoals een gewoon loon, dus het gezichtje en het bolletje staan op hetzelfde loon vóór belasting.`,
    fr: `Imposé exactement comme un salaire normal : le visage et le point sont au même salaire avant impôts.`,
  },
  'polTipNote.pm': {
    en: `Andrej Plenković. 5 535 € a month before tax after the July 2024 raise (3 263 € before). We could not confirm any later raise of the base amount.`,
    nl: `Andrej Plenković. € 5.535 per maand vóór belasting na de verhoging van juli 2024 (€ 3.263 ervoor). Een latere verhoging van het basisbedrag konden we niet bevestigen.`,
    fr: `Andrej Plenković. 5 535 € par mois avant impôts après la hausse de juillet 2024 (3 263 € avant). Nous n'avons pas pu confirmer de hausse ultérieure du montant de base.`,
  },
  'polTipNote.speaker': {
    en: `Gordan Jandroković. 5 314 € a month before tax after the July 2024 raise (3 113 € before).`,
    nl: `Gordan Jandroković. € 5.314 per maand vóór belasting na de verhoging van juli 2024 (€ 3.113 ervoor).`,
    fr: `Gordan Jandroković. 5 314 € par mois avant impôts après la hausse de juillet 2024 (3 113 € avant).`,
  },
  'polTipNote.dpm': {
    en: `Deputy Prime Minister and finance minister: 4 776 € a month before tax after the July 2024 raise (2 769 € before).`,
    nl: `Vicepremier en minister van Financiën: € 4.776 per maand vóór belasting na de verhoging van juli 2024 (€ 2.769 ervoor).`,
    fr: `Vice-Premier ministre et ministre des Finances : 4 776 € par mois avant impôts après la hausse de juillet 2024 (2 769 € avant).`,
  },
  'polTipNote.minister': {
    en: `For example, the justice minister: 4 167 € a month before tax after the July 2024 raise (2 357 € before). Each year of service adds 0.5%.`,
    nl: `Bijvoorbeeld de minister van Justitie: € 4.167 per maand vóór belasting na de verhoging van juli 2024 (€ 2.357 ervoor). Elk dienstjaar voegt 0,5% toe.`,
    fr: `Par exemple, le ministre de la Justice : 4 167 € par mois avant impôts après la hausse de juillet 2024 (2 357 € avant). Chaque année de service ajoute 0,5%.`,
  },
  polNote: {
    en: links => `Point at a name to see details, click it to zoom in. Pay is for the year before tax; the chart shows it per month (÷ 12). Top state officials are taxed like normal employees. Pay: ${links}.`,
    nl: links => `Wijs een naam aan voor details, klik om in te zoomen. Het loon is voor het jaar vóór belasting; de grafiek toont het per maand (÷ 12). Hoge staatsambtsdragers worden belast als gewone werknemers. Lonen: ${links}.`,
    fr: links => `Pointez un nom pour voir les détails, cliquez pour zoomer. La paie est celle de l'année avant impôts ; le graphique la montre par mois (÷ 12). Les hauts responsables de l'État sont imposés comme des salariés ordinaires. Salaires : ${links}.`,
  },

  trapTitle: { en: (a, b) => `Why higher between ${a} and ${b}?`, nl: (a, b) => `Waarom hoger tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi plus élevé entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, extra) => `If you earn up to ${a} a month, you pay no state pension contribution on 300 € of your pay. Between ${a} and ${b}, that discount gets 50 cents smaller for each extra euro you earn, so each euro also costs you ${extra} more in contributions. Above ${b}, the discount is gone. Your future pension is still based on your full pay.`,
    nl: (a, b, extra) => `Verdien je tot ${a} per maand, dan betaal je op € 300 van je loon geen bijdrage voor het staatspensioen. Tussen ${a} en ${b} wordt die korting 50 cent kleiner per extra euro die je verdient, dus kost elke euro je ook ${extra} meer aan bijdragen. Boven ${b} is de korting weg. Je latere pensioen wordt nog altijd berekend op je volle loon.`,
    fr: (a, b, extra) => `Si vous gagnez jusqu'à ${a} par mois, vous ne payez pas de cotisation à la retraite publique sur 300 € de votre salaire. Entre ${a} et ${b}, cette remise baisse de 50 centimes par euro gagné en plus : chaque euro vous coûte donc aussi ${extra} de cotisations en plus. Au-delà de ${b}, la remise disparaît. Votre future retraite reste calculée sur tout votre salaire.`,
  },
  topTitle: {
    en: top => `Why the step at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi la marche à ${top} ?`,
  },
  topBody: {
    en: (top, thr, hi) => `From ${top}, your taxable income goes over ${thr} a year (5 000 € a month). The part above that is taxed at your city's higher rate, ${hi} here, instead of the lower one.`,
    nl: (top, thr, hi) => `Vanaf ${top} komt je belastbaar inkomen boven ${thr} per jaar (€ 5.000 per maand). Het deel daarboven wordt belast aan het hoge tarief van je stad, hier ${hi}, in plaats van het lage.`,
    fr: (top, thr, hi) => `À partir de ${top}, votre revenu imposable dépasse ${thr} par an (5 000 € par mois). La part au-delà est imposée au taux haut de votre ville, ${hi} ici, au lieu du taux bas.`,
  },

  // Tax components
  'comp.er': { en: `Health insurance, paid by the employer`, nl: `Ziekteverzekering, betaald door de werkgever`, fr: `Assurance maladie, payée par l'employeur` },
  'comp.mio1': { en: `State pension (pillar I, MIO I)`, nl: `Staatspensioen (pijler I, MIO I)`, fr: `Retraite publique (pilier I, MIO I)` },
  'comp.mio2': { en: `Private pension fund (pillar II, MIO II)`, nl: `Privé-pensioenfonds (pijler II, MIO II)`, fr: `Fonds de pension privé (pilier II, MIO II)` },
  'comp.pd': { en: `Income tax (porez na dohodak)`, nl: `Inkomstenbelasting (porez na dohodak)`, fr: `Impôt sur le revenu (porez na dohodak)` },
  'comp.dz': { en: `Child benefit (doplatak za djecu)`, nl: `Kinderbijslag (doplatak za djecu)`, fr: `Allocations familiales (doplatak za djecu)` },
  dzReceived: { en: `+ Child benefit, paid by HZMO`, nl: `+ Kinderbijslag, betaald door HZMO`, fr: `+ Allocations familiales, versées par le HZMO` },
  'bd.relief': { en: `State pension discount for low pay`, nl: `Korting staatspensioen voor lage lonen`, fr: `Remise retraite publique pour bas salaires` },
  'bd.doh': { en: `Income after contributions (dohodak)`, nl: `Inkomen na bijdragen (dohodak)`, fr: `Revenu après cotisations (dohodak)` },
  'bd.ded': { en: `Personal deduction (osobni odbitak)`, nl: `Persoonlijke aftrek (osobni odbitak)`, fr: `Abattement personnel (osobni odbitak)` },
  'bd.base': { en: `Tax base`, nl: `Belastbare grondslag`, fr: `Base imposable` },
  'bd.pdGross': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'bd.youth': { en: `Youth tax cut`, nl: `Belastingkorting voor jongeren`, fr: `Réduction d'impôt jeunes` },
  'bd.area': { en: `Assisted-area tax cut (50%)`, nl: `Korting steungebied (50%)`, fr: `Réduction zone aidée (50%)` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries. Croatia has no 13th month by law. Many employers pay Christmas and holiday bonuses that are tax-free up to a limit; they are not counted here.`,
    nl: `12 maandlonen. Kroatië heeft geen wettelijke 13de maand. Veel werkgevers betalen kerst- en vakantiepremies die tot een grens belastingvrij zijn; die tellen hier niet mee.`,
    fr: `12 salaires mensuels. La Croatie n'a pas de 13e mois obligatoire. Beaucoup d'employeurs versent des primes de Noël et de vacances non imposées jusqu'à une limite ; elles ne sont pas comptées ici.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: max => `Couples don't file together: each partner is taxed on their own pay. A partner who earns at most ${max} a year counts as someone you support, so you can earn 300 € a month more without tax. The tax break for children can go to either parent. This page gives it to whoever saves the most, so your tax = the household's tax with your pay − the household's tax without it.`,
    nl: max => `Koppels doen geen gezamenlijke aangifte: elke partner wordt belast op het eigen loon. Een partner die hoogstens ${max} per jaar verdient, telt als iemand die je onderhoudt, dus mag jij € 300 per maand meer verdienen zonder belasting. Het voordeel voor kinderen kan naar elke ouder. Deze pagina geeft het aan wie het meest bespaart, dus jouw belasting = de belasting van het gezin met jouw loon − zonder jouw loon.`,
    fr: max => `Les couples ne déclarent pas ensemble : chacun est imposé sur son salaire. Un conjoint qui gagne au plus ${max} par an compte comme personne à votre charge : vous pouvez alors gagner 300 € de plus par mois sans impôt. L'avantage pour enfants peut aller à l'un ou l'autre parent. Cette page le donne à celui qui économise le plus, donc votre impôt = l'impôt du ménage avec votre salaire − sans votre salaire.`,
  },
  'tip.cadre': {
    en: `Some workers only pay into the state pension and have no private pension fund (mostly people who were over 50 in 2002, or who left the private fund). They pay the whole 20% to the state pension. The discount for low pay then applies to all 20%.`,
    nl: `Sommige werknemers betalen alleen voor het staatspensioen en hebben geen privé-pensioenfonds (vooral wie in 2002 ouder was dan 50, of wie uit het privéfonds stapte). Zij betalen de hele 20% aan het staatspensioen. De korting voor lage lonen geldt dan op de volle 20%.`,
    fr: `Certains salariés ne cotisent qu'à la retraite publique, sans fonds de pension privé (surtout ceux qui avaient plus de 50 ans en 2002, ou qui ont quitté le fonds privé). Ils versent les 20% entiers à la retraite publique. La remise pour bas salaires s'applique alors aux 20%.`,
  },
  'tip.dzToggle': {
    en: `Paid by the pension office (HZMO) for children until they finish school. You get it if, the year before, the household's net income was at most 618.02 € a month per person. The amount drops in steps as income goes up, so a raise can make you lose part of it.`,
    nl: `Betaald door de pensioendienst (HZMO) voor kinderen tot ze klaar zijn met school. Je krijgt het als het netto-inkomen van het gezin het jaar ervoor hoogstens € 618,02 per maand per persoon was. Het bedrag daalt in stappen als het inkomen stijgt, dus door een opslag kun je een deel ervan verliezen.`,
    fr: `Versées par la caisse de retraite (HZMO) pour les enfants jusqu'à la fin de leur scolarité. Vous y avez droit si, l'année d'avant, le revenu net du ménage était au plus de 618,02 € par mois et par personne. Le montant baisse par paliers quand le revenu monte : une augmentation peut vous en faire perdre une partie.`,
  },
  'tip.pdRule': {
    en: `Since 2024, each city and town sets its own two income tax rates, within limits: towns 15 to 20% and 25 to 30%, cities up to 21% and 31%, large cities and regional capitals up to 22% and 32%, Zagreb up to 23% and 33%. If a city decided nothing, 20% and 30% apply. Pick your city above, or set the lower rate here; the higher one is then 10 points more.`,
    nl: `Sinds 2024 bepaalt elke stad en gemeente haar eigen twee tarieven voor inkomstenbelasting, binnen grenzen: gemeenten 15 tot 20% en 25 tot 30%, steden tot 21% en 31%, grote steden en provinciehoofdsteden tot 22% en 32%, Zagreb tot 23% en 33%. Besliste een stad niets, dan gelden 20% en 30%. Kies je stad hierboven, of stel hier het lage tarief in; het hoge is dan 10 punten meer.`,
    fr: `Depuis 2024, chaque ville et commune fixe ses deux taux d'impôt sur le revenu, dans des limites : communes de 15 à 20% et de 25 à 30%, villes jusqu'à 21% et 31%, grandes villes et chefs-lieux de région jusqu'à 22% et 32%, Zagreb jusqu'à 23% et 33%. Si une ville n'a rien décidé, 20% et 30% s'appliquent. Choisissez votre ville ci-dessus, ou réglez ici le taux bas ; le taux haut est alors 10 points de plus.`,
  },
  'tip.size': {
    en: `Up to the year you turn 25, you pay no income tax at the lower rate on your salary. From 26 to 30 you pay half. The whole year in which you reach that age counts. Tax at the higher rate is not reduced.`,
    nl: `Tot het jaar waarin je 25 wordt, betaal je geen inkomstenbelasting aan het lage tarief op je loon. Van 26 tot 30 betaal je de helft. Het hele jaar waarin je die leeftijd bereikt, telt mee. Belasting aan het hoge tarief wordt niet verlaagd.`,
    fr: `Jusqu'à l'année de vos 25 ans, vous ne payez pas l'impôt au taux bas sur votre salaire. De 26 à 30 ans, vous en payez la moitié. Toute l'année où vous atteignez cet âge compte. L'impôt au taux haut n'est pas réduit.`,
  },
  'tip.reg': {
    en: `If you live in one of the poorest areas (group I: the least developed quarter of towns and cities, NN 3/2024) or in the city of Vukovar, you pay half the income tax on your salary. Picking your town sets this for you.`,
    nl: `Woon je in een van de armste gebieden (groep I: het minst ontwikkelde kwart van de steden en gemeenten, NN 3/2024) of in de stad Vukovar, dan betaal je de helft van de inkomstenbelasting op je loon. Als je je gemeente kiest, wordt dit voor je ingesteld.`,
    fr: `Si vous habitez une des zones les moins riches (groupe I : le quart le moins développé des villes et communes, NN 3/2024) ou la ville de Vukovar, vous payez la moitié de l'impôt sur votre salaire. Choisir votre commune règle cela pour vous.`,
  },
  'tip.costShort': { en: `Your gross salary plus the health contribution your employer pays on top.`, nl: `Je brutoloon plus de gezondheidsbijdrage die je werkgever erbovenop betaalt.`, fr: `Votre salaire brut plus la cotisation santé que votre employeur paie en plus.` },
  'tip.er': {
    en: `Health insurance of 16.5% on all your gross pay, with no upper limit. Your employer pays it on top of your salary. Since 2019 it is the only thing employers pay on top.`,
    nl: `Ziekteverzekering van 16,5% op je hele brutoloon, zonder bovengrens. Je werkgever betaalt ze bovenop je loon. Sinds 2019 is dat het enige wat werkgevers erbovenop betalen.`,
    fr: `Assurance maladie de 16,5% sur tout votre salaire brut, sans limite. Votre employeur la paie en plus de votre salaire. Depuis 2019, c'est la seule chose que les employeurs paient en plus.`,
  },
  'tip.mio1': {
    en: (cap, full, lo, hi) => `15% of your gross pay goes to the state pension, on pay up to ${cap} a month. If you earn up to ${lo} a month, ${full} of your pay is skipped. Between ${lo} and ${hi}, the skipped amount shrinks to zero.`,
    nl: (cap, full, lo, hi) => `15% van je brutoloon gaat naar het staatspensioen, op loon tot ${cap} per maand. Verdien je tot ${lo} per maand, dan wordt ${full} van je loon overgeslagen. Tussen ${lo} en ${hi} krimpt het overgeslagen bedrag tot nul.`,
    fr: (cap, full, lo, hi) => `15% de votre salaire brut vont à la retraite publique, sur la paie jusqu'à ${cap} par mois. Si vous gagnez jusqu'à ${lo} par mois, ${full} de votre salaire ne sont pas comptés. Entre ${lo} et ${hi}, ce montant non compté diminue jusqu'à zéro.`,
  },
  'tip.base': { en: `Gross pay, capped`, nl: `Brutoloon, begrensd`, fr: `Salaire brut, plafonné` },
  'tip.relief': {
    en: (full, lo, hi) => `${full} a month if you earn up to ${lo}, then 0.5 × (${hi} − your monthly gross pay). It only lowers the state pension contribution, and your future pension is still based on your full pay.`,
    nl: (full, lo, hi) => `${full} per maand als je tot ${lo} verdient, daarna 0,5 × (${hi} − je bruto maandloon). Het verlaagt alleen de bijdrage voor het staatspensioen, en je latere pensioen wordt nog altijd op je volle loon berekend.`,
    fr: (full, lo, hi) => `${full} par mois si vous gagnez jusqu'à ${lo}, puis 0,5 × (${hi} − votre brut mensuel). Cela ne réduit que la cotisation à la retraite publique, et votre future retraite reste calculée sur tout votre salaire.`,
  },
  'tip.mio2': {
    en: cap => `5% of your gross pay goes into your own private pension fund, saved in your name, on pay up to ${cap} a month. There is no discount for low pay.`,
    nl: cap => `5% van je brutoloon gaat naar je eigen privé-pensioenfonds, gespaard op jouw naam, op loon tot ${cap} per maand. Er is geen korting voor lage lonen.`,
    fr: cap => `5% de votre salaire brut vont dans votre propre fonds de pension privé, épargnés à votre nom, sur la paie jusqu'à ${cap} par mois. Il n'y a pas de remise pour bas salaires.`,
  },
  'tip.doh': {
    en: `Gross pay minus pension contributions. Income tax is worked out from this.`,
    nl: `Brutoloon min pensioenbijdragen. De inkomstenbelasting wordt hiervan berekend.`,
    fr: `Salaire brut moins cotisations retraite. L'impôt sur le revenu est calculé à partir de là.`,
  },
  'tip.ded': {
    en: (basic, dep) => `Everyone pays no tax on the first ${basic} a month. Each person you support adds a share of that: 0.5 for a partner or other family member earning at most ${dep} a year; 0.5, 0.7, 1.0, 1.4, 1.9 … for the 1st, 2nd, 3rd, 4th, 5th child.`,
    nl: (basic, dep) => `Iedereen betaalt geen belasting op de eerste ${basic} per maand. Elke persoon die je onderhoudt, voegt daar een deel van toe: 0,5 voor een partner of ander gezinslid die hoogstens ${dep} per jaar verdient; 0,5, 0,7, 1,0, 1,4, 1,9 … voor het 1e, 2e, 3e, 4e, 5e kind.`,
    fr: (basic, dep) => `Chacun ne paie pas d'impôt sur les ${basic} premiers euros par mois. Chaque personne à votre charge ajoute une part de ce montant : 0,5 pour un conjoint ou autre membre de la famille gagnant au plus ${dep} par an ; 0,5, 0,7, 1,0, 1,4, 1,9 … pour le 1er, 2e, 3e, 4e, 5e enfant.`,
  },
  'tip.dedBasic': { en: `Basic deduction (600 € × 12)`, nl: `Basisaftrek (€ 600 × 12)`, fr: `Abattement de base (600 € × 12)` },
  'tip.dedKids': { en: n => `Children (${n})`, nl: n => `Kinderen (${n})`, fr: n => `Enfants (${n})` },
  'tip.dedDep': { en: `Dependent partner`, nl: `Partner ten laste`, fr: `Conjoint à charge` },
  'tip.dedPartner': { en: `Children's deduction used by your partner`, nl: `Kinderaftrek gebruikt door je partner`, fr: `Déduction enfants utilisée par votre conjoint` },
  'tip.baseTxt': {
    en: thr => `Income after contributions minus your tax-free amount. The lower rate applies up to ${thr} a year, the higher rate above that.`,
    nl: thr => `Inkomen na bijdragen min je belastingvrije bedrag. Het lage tarief geldt tot ${thr} per jaar, het hoge daarboven.`,
    fr: thr => `Revenu après cotisations moins votre montant libre d'impôt. Le taux bas s'applique jusqu'à ${thr} par an, le taux haut au-delà.`,
  },
  'tip.pdShort': {
    en: `Your city's lower rate on taxable income up to 60 000 € a year and its higher rate above that, minus the cuts for young people and poorer areas.`,
    nl: `Het lage tarief van je stad op het belastbaar inkomen tot € 60.000 per jaar en het hoge daarboven, min de kortingen voor jongeren en armere gebieden.`,
    fr: `Le taux bas de votre ville sur le revenu imposable jusqu'à 60 000 € par an et son taux haut au-delà, moins les réductions pour les jeunes et les zones moins riches.`,
  },
  'tip.pd': {
    en: (name, lo, hi, thr) => `${name ? name + ': ' : ''}${lo} on taxable income up to ${thr} a year, ${hi} above that. The tax goes to the city or town where you live.`,
    nl: (name, lo, hi, thr) => `${name ? name + ': ' : ''}${lo} op belastbaar inkomen tot ${thr} per jaar, ${hi} daarboven. De belasting gaat naar de stad of gemeente waar je woont.`,
    fr: (name, lo, hi, thr) => `${name ? name + ' : ' : ''}${lo} sur le revenu imposable jusqu'à ${thr} par an, ${hi} au-delà. L'impôt va à la ville ou commune où vous habitez.`,
  },
  'tip.pdPartner': { en: `Change in your partner's tax`, nl: `Verschil in de belasting van je partner`, fr: `Variation de l'impôt de votre conjoint` },
  'tip.dz': {
    en: (base, cap, max, min, extra) => `It depends on the household's net income per person per month. Up to 20% of a reference amount set in the state budget (${base}), you get 14% of it per child (${max}). Then 12.5%, 11%, 9% and 7% (${min}) up to ${cap}; nothing above that. Plus ${extra} for the 3rd and 4th child. Here a couple splits it half and half.`,
    nl: (base, cap, max, min, extra) => `Het hangt af van het netto-inkomen van het gezin per persoon per maand. Tot 20% van een referentiebedrag uit de staatsbegroting (${base}) krijg je 14% ervan per kind (${max}). Daarna 12,5%, 11%, 9% en 7% (${min}) tot ${cap}; daarboven niets. Plus ${extra} voor het 3e en 4e kind. Hier verdeelt een koppel het half om half.`,
    fr: (base, cap, max, min, extra) => `Cela dépend du revenu net du ménage par personne et par mois. Jusqu'à 20% d'un montant de référence fixé dans le budget de l'État (${base}), vous recevez 14% de celui-ci par enfant (${max}). Puis 12,5%, 11%, 9% et 7% (${min}) jusqu'à ${cap} ; rien au-delà. Plus ${extra} pour le 3e et le 4e enfant. Ici, un couple les partage à moitié.`,
  },
  'tip.vatM': {
    en: `Restaurants, hotels and some food have 13% VAT, bread, milk, books and medicine 5%, and things like rent have none. We don't count those, so the real VAT you pay is probably lower than this.`,
    nl: `Restaurants, hotels en sommige voeding hebben 13% btw, brood, melk, boeken en geneesmiddelen 5%, en zaken zoals huur hebben geen btw. Dat rekenen we niet mee, dus de echte btw die je betaalt, ligt waarschijnlijk lager.`,
    fr: `Les restaurants, hôtels et certains aliments ont 13% de TVA, le pain, le lait, les livres et les médicaments 5%, et des choses comme le loyer n'en ont pas. Nous ne les comptons pas : la TVA réelle que vous payez est donc sans doute plus basse.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross pay minus pension contributions minus income tax, plus child benefit if counted.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon min pensioenbijdragen min inkomstenbelasting, plus kinderbijslag als die meetelt.`,
    fr: calc => `Ce qui arrive sur votre compte en banque sur l'année${calc}. Salaire brut moins cotisations retraite moins impôt, plus allocations familiales si elles sont comptées.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026`,
    nl: `Gebruikte regels · inkomstenjaar 2026`,
    fr: `Règles utilisées · revenus 2026`,
  },
  'ref.contrib': {
    en: { h: `1 · Contributions`, li: [
      `You pay: state pension <span class="num">15%</span> and private pension fund <span class="num">5%</span>, on pay up to <span class="num">11 958 €</span> a month (143 496 € a year).`,
      `Discount for low pay on the state pension: 300 € of pay skipped up to 700 € gross a month, then 0.5 × (1 300 € − gross pay).`,
      `Your employer pays: health insurance <span class="num">16.5%</span> on all pay, no upper limit.`,
    ] },
    nl: { h: `1 · Bijdragen`, li: [
      `Jij betaalt: staatspensioen <span class="num">15%</span> en privé-pensioenfonds <span class="num">5%</span>, op loon tot <span class="num">€ 11.958</span> per maand (€ 143.496 per jaar).`,
      `Korting voor lage lonen op het staatspensioen: € 300 van het loon overgeslagen tot € 700 bruto per maand, daarna 0,5 × (€ 1.300 − brutoloon).`,
      `Je werkgever betaalt: ziekteverzekering <span class="num">16,5%</span> op het hele loon, zonder bovengrens.`,
    ] },
    fr: { h: `1 · Cotisations`, li: [
      `Vous payez : retraite publique <span class="num">15%</span> et fonds de pension privé <span class="num">5%</span>, sur la paie jusqu'à <span class="num">11 958 €</span> par mois (143 496 € par an).`,
      `Remise bas salaires sur la retraite publique : 300 € de salaire non comptés jusqu'à 700 € brut par mois, puis 0,5 × (1 300 € − brut).`,
      `Votre employeur paie : assurance maladie <span class="num">16,5%</span> sur toute la paie, sans limite.`,
    ] },
  },
  'ref.tax': {
    en: br => ({ h: `2 · Income tax`, li: [
      `Taxable income = gross pay − pension contributions − tax-free amount. Standard rates on yearly taxable income, used where the city decided nothing. Each rate only applies to the slice of income in its step:${br}`,
      `Cities and towns set their own: lower rate <span class="num">15%</span> to <span class="num">23%</span>, higher rate <span class="num">25%</span> to <span class="num">33%</span>. The rates of all 556 come from the Tax Administration's 2026 table.`,
      `Young people pay less tax at the lower rate: nothing up to 25, half from 26 to 30. Poorest areas (group I) and Vukovar: half of what is left.`,
    ] }),
    nl: br => ({ h: `2 · Inkomstenbelasting`, li: [
      `Belastbaar inkomen = brutoloon − pensioenbijdragen − belastingvrij bedrag. Standaardtarieven op het jaarlijkse belastbaar inkomen, gebruikt waar de stad niets besliste. Elk tarief geldt alleen voor het stuk inkomen in die stap:${br}`,
      `Steden en gemeenten bepalen hun eigen: laag tarief <span class="num">15%</span> tot <span class="num">23%</span>, hoog tarief <span class="num">25%</span> tot <span class="num">33%</span>. De tarieven van alle 556 komen uit de tabel 2026 van de belastingdienst.`,
      `Jongeren betalen minder belasting aan het lage tarief: niets tot 25, de helft van 26 tot 30. Armste gebieden (groep I) en Vukovar: de helft van wat overblijft.`,
    ] }),
    fr: br => ({ h: `2 · Impôt sur le revenu`, li: [
      `Revenu imposable = salaire brut − cotisations retraite − montant libre d'impôt. Taux standard sur le revenu imposable annuel, utilisés là où la ville n'a rien décidé. Chaque taux ne touche que la part du revenu dans son palier :${br}`,
      `Villes et communes fixent les leurs : taux bas de <span class="num">15%</span> à <span class="num">23%</span>, taux haut de <span class="num">25%</span> à <span class="num">33%</span>. Les taux des 556 viennent du tableau 2026 de l'administration fiscale.`,
      `Les jeunes paient moins d'impôt au taux bas : rien jusqu'à 25 ans, la moitié de 26 à 30 ans. Zones les moins riches (groupe I) et Vukovar : la moitié de ce qui reste.`,
    ] }),
  },
  'ref.ded': {
    en: { h: `3 · Tax-free amount`, li: [
      `<span class="num">600 €</span> a month (7 200 € a year) of your income is not taxed, for everyone.`,
      `Children add 0.5, 0.7, 1.0, 1.4, 1.9, 2.5, 3.2, 4.0, 4.9 × 600 € for the 1st to 9th child. A partner you support adds 0.5 × 600 € if they earn at most 3 600 € a year.`,
    ] },
    nl: { h: `3 · Belastingvrij bedrag`, li: [
      `<span class="num">€ 600</span> per maand (€ 7.200 per jaar) van je inkomen wordt niet belast, voor iedereen.`,
      `Kinderen voegen 0,5, 0,7, 1,0, 1,4, 1,9, 2,5, 3,2, 4,0, 4,9 × € 600 toe voor het 1e tot 9e kind. Een partner die je onderhoudt, voegt 0,5 × € 600 toe als die hoogstens € 3.600 per jaar verdient.`,
    ] },
    fr: { h: `3 · Montant libre d'impôt`, li: [
      `<span class="num">600 €</span> par mois (7 200 € par an) de votre revenu ne sont pas imposés, pour tous.`,
      `Les enfants ajoutent 0,5, 0,7, 1,0, 1,4, 1,9, 2,5, 3,2, 4,0, 4,9 × 600 € du 1er au 9e enfant. Un conjoint à charge ajoute 0,5 × 600 € s'il gagne au plus 3 600 € par an.`,
    ] },
  },
  'ref.dz': {
    en: { h: `4 · Child benefit`, li: [
      `Reference amount from the state budget: <span class="num">441.44 €</span>. Per child you get 14%, 12.5%, 11%, 9% or 7% of it, if the household's net income per person is up to 20%, 40%, 60%, 100% or 140% of it a month.`,
      `Plus <span class="num">66.36 €</span> for the 3rd and the 4th child.`,
    ] },
    nl: { h: `4 · Kinderbijslag`, li: [
      `Referentiebedrag uit de staatsbegroting: <span class="num">€ 441,44</span>. Per kind krijg je 14%, 12,5%, 11%, 9% of 7% ervan, als het netto-inkomen van het gezin per persoon tot 20%, 40%, 60%, 100% of 140% ervan per maand is.`,
      `Plus <span class="num">€ 66,36</span> voor het 3e en het 4e kind.`,
    ] },
    fr: { h: `4 · Allocations familiales`, li: [
      `Montant de référence du budget de l'État : <span class="num">441,44 €</span>. Par enfant, vous recevez 14%, 12,5%, 11%, 9% ou 7% de celui-ci, si le revenu net du ménage par personne va jusqu'à 20%, 40%, 60%, 100% ou 140% de celui-ci par mois.`,
      `Plus <span class="num">66,36 €</span> pour le 3e et le 4e enfant.`,
    ] },
  },
  'ref.vat': {
    en: { h: `5 · VAT on spending`, li: [
      `VAT is the tax hidden in shop prices. Normal rate <span class="num">25%</span>, counted here as if you spent all your net pay. Move the slider to try other rates.`,
      `The VAT part of a price = price × r / (100 + r). At 25%, that's 25 / 125 = <span class="num">20%</span> of what you pay.`,
    ] },
    nl: { h: `5 · Btw op uitgaven`, li: [
      `Btw is de belasting die in winkelprijzen zit. Normaal tarief <span class="num">25%</span>, hier gerekend alsof je je hele nettoloon uitgeeft. Verschuif de schuifregelaar om andere tarieven te proberen.`,
      `Het btw-deel van een prijs = prijs × r / (100 + r). Bij 25% is dat 25 / 125 = <span class="num">20%</span> van wat je betaalt.`,
    ] },
    fr: { h: `5 · TVA sur les dépenses`, li: [
      `La TVA est la taxe cachée dans les prix. Taux normal <span class="num">25%</span>, compté ici comme si vous dépensiez tout votre salaire net. Bougez le curseur pour essayer d'autres taux.`,
      `La part de TVA dans un prix = prix × r / (100 + r). À 25%, cela fait 25 / 125 = <span class="num">20%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `6 · Government`, li: [
      `Per month before tax: Prime Minister <span class="num">5 535 €</span>, deputy Prime Minister and finance minister <span class="num">4 776 €</span>, minister <span class="num">4 167 €</span>, as reported for July 2024 (base amount 947.18 €).`,
      `Taxed like salaries; the State pays the health contribution on them.`,
    ] },
    nl: { h: `6 · Regering`, li: [
      `Per maand vóór belasting: premier <span class="num">€ 5.535</span>, vicepremier en minister van Financiën <span class="num">€ 4.776</span>, minister <span class="num">€ 4.167</span>, zoals gemeld voor juli 2024 (basisbedrag € 947,18).`,
      `Belast als lonen; de staat betaalt er de gezondheidsbijdrage op.`,
    ] },
    fr: { h: `6 · Gouvernement`, li: [
      `Par mois avant impôts : Premier ministre <span class="num">5 535 €</span>, vice-Premier ministre et ministre des Finances <span class="num">4 776 €</span>, ministre <span class="num">4 167 €</span>, selon la décision de juillet 2024 (montant de base 947,18 €).`,
      `Imposés comme des salaires ; l'État paie la cotisation santé dessus.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Tax-free extras (Christmas bonus, meal and travel money), the tax cut for Croatians coming back from abroad, tax breaks for disability, voluntary private pension savings, other income and the yearly tax return.`,
      `Child benefit is really based on last year's income; here we use this year's. For reference wages, no median is shown.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Belastingvrije extra's (kerstpremie, maaltijd- en reisgeld), de belastingkorting voor Kroaten die uit het buitenland terugkeren, belastingvoordelen bij handicap, vrijwillig privé-pensioensparen, ander inkomen en de jaarlijkse aangifte.`,
      `Kinderbijslag hangt eigenlijk af van het inkomen van vorig jaar; hier gebruiken we dat van dit jaar. Bij de referentielonen staat geen mediaan.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les extras non imposés (prime de Noël, indemnités de repas et de transport), la baisse d'impôt pour les Croates qui reviennent de l'étranger, les avantages liés au handicap, l'épargne retraite privée volontaire, les autres revenus et la déclaration annuelle.`,
      `Les allocations familiales se calculent en réalité sur les revenus de l'année précédente ; ici sur ceux de l'année. Pour les salaires de référence, aucune médiane n'est affichée.`,
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

  'gap.polPay': {
    en: `Officials' pay is the July 2024 decision, as reported in the press (tportal). We could not confirm any raise of the 947.18 € base amount for 2026.`,
    nl: `Het loon van ambtsdragers is het besluit van juli 2024, zoals de pers het meldde (tportal). Een verhoging van het basisbedrag van € 947,18 voor 2026 konden we niet bevestigen.`,
    fr: `La paie des responsables est celle de la décision de juillet 2024, rapportée par la presse (tportal). Nous n'avons pas pu confirmer de hausse du montant de base de 947,18 € pour 2026.`,
  },
  'gap.seniority': {
    en: `We leave out the 0.5% extra per year of service on officials' pay.`,
    nl: `De 0,5% extra per dienstjaar op het loon van ambtsdragers laten we weg.`,
    fr: `Nous ne comptons pas les 0,5% de plus par année de service sur la paie des responsables.`,
  },
  'gap.noMp': {
    en: `There's no line for MPs: we could not find their 2026 pay. The Speaker of Parliament is shown instead.`,
    nl: `Er is geen lijn voor parlementsleden: we vonden hun loon van 2026 niet. De voorzitter van het parlement staat er wel.`,
    fr: `Pas de ligne pour les députés : nous n'avons pas trouvé leur paie 2026. Le président du Parlement est affiché à la place.`,
  },
  'gap.minWage': {
    en: `The minimum wage (1 050 €) comes from a payroll company's guide. We did not read the official decree itself.`,
    nl: `Het minimumloon (€ 1.050) komt uit de gids van een loonbureau. Het officiële besluit zelf hebben we niet gelezen.`,
    fr: `Le salaire minimum (1 050 €) vient du guide d'un cabinet de paie. Nous n'avons pas lu le décret officiel lui-même.`,
  },
  'gap.wages': {
    en: `The average wage is for January to August 2025, the figure used to set the 2026 contribution limits. We found no median wage (the pay that half of workers earn more than), so there is no line for it.`,
    nl: `Het gemiddelde loon is dat van januari tot augustus 2025, het cijfer waarmee de bijdragegrenzen van 2026 werden bepaald. We vonden geen mediaanloon (het loon waarboven de helft van de werknemers zit), dus daar is geen lijn voor.`,
    fr: `Le salaire moyen est celui de janvier à août 2025, le chiffre qui sert à fixer les plafonds de cotisation 2026. Nous n'avons pas trouvé de salaire médian (celui au-dessus duquel gagne la moitié des salariés), donc il n'a pas de ligne.`,
  },
  'gap.areas': {
    en: `Poorer areas use the January 2024 list of group I towns plus Vukovar. We assume it still holds in 2026.`,
    nl: `Voor armere gebieden gebruiken we de lijst van groep I van januari 2024 plus Vukovar. We gaan ervan uit dat die in 2026 nog geldt.`,
    fr: `Les zones moins riches suivent la liste du groupe I de janvier 2024 plus Vukovar. Nous supposons qu'elle vaut encore en 2026.`,
  },
  'gap.dz': {
    en: `Child benefit uses a reference amount of 441.44 €. We worked it out from a 618.02 € income limit reported in the press, not from the law.`,
    nl: `De kinderbijslag gebruikt een referentiebedrag van € 441,44. Dat hebben we afgeleid uit een inkomensgrens van € 618,02 die de pers meldde, niet uit de wet.`,
    fr: `Les allocations familiales utilisent un montant de référence de 441,44 €. Nous l'avons calculé à partir d'un plafond de revenu de 618,02 € publié par la presse, pas à partir de la loi.`,
  },
  'gap.hiRate': {
    en: `When you set the city's lower rate yourself, we put the higher rate 10 points above it. A city can choose a different gap within the limits.`,
    nl: `Als je het lage tarief van de stad zelf instelt, zetten we het hoge 10 punten hoger. Een stad kan binnen de grenzen een ander verschil kiezen.`,
    fr: `Si vous fixez vous-même le taux bas de la ville, nous plaçons le taux haut 10 points au-dessus. Une ville peut choisir un autre écart dans les limites.`,
  },
  'gap.notIncl': {
    en: `Tax-free bonuses, the tax cut for returning Croatians, disability tax breaks and the yearly tax return are left out. See "What's not included" below.`,
    nl: `Belastingvrije premies, de belastingkorting voor terugkerende Kroaten, belastingvoordelen bij handicap en de jaarlijkse aangifte tellen niet mee. Zie "Wat niet is meegerekend" hieronder.`,
    fr: `Les primes non imposées, la baisse d'impôt pour les Croates de retour, les avantages liés au handicap et la déclaration annuelle ne sont pas comptés. Voir « Ce qui n'est pas inclus » plus bas.`,
  },
};
