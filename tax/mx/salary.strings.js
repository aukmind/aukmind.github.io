window.TAX_STRINGS = {
  title: { en: `Mexican Buying Power`, nl: `Mexicaanse koopkracht`, fr: `Pouvoir d'achat au Mexique` },
  eyebrow: { en: `Mexico · income 2026 · employee`, nl: `Mexico · inkomen 2026 · werknemer`, fr: `Mexique · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Mexico · income 2026 · federal official`, nl: `Mexico · inkomen 2026 · federaal ambtsdrager`, fr: `Mexique · revenus 2026 · élu fédéral` },
  lead: {
    en: `Every tax on a Mexican salary in 2026, from what your employer pays to what you can buy. IMSS social security on both sides, retirement and housing funds paid by the employer, a state payroll tax, and income tax (ISR) on a tariff raised by 13% for 2026, with the employment subsidy at low pay.`,
    nl: `Alle belastingen op een Mexicaans loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. IMSS-bijdragen aan beide kanten, pensioen- en woonfonds betaald door de werkgever, een loonbelasting van de deelstaat, en inkomstenbelasting (ISR) volgens een tabel die voor 2026 met 13% is opgetrokken, met de werkgelegenheidssubsidie bij lage lonen.`,
    fr: `Tous les prélèvements sur un salaire mexicain en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Cotisations IMSS des deux côtés, fonds de retraite et de logement payés par l'employeur, un impôt sur les salaires de l'État fédéré, et l'impôt sur le revenu (ISR) selon un barème relevé de 13% pour 2026, avec la subvention à l'emploi pour les bas salaires.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `In Mexico each person is taxed on their own pay. Couples never file together and there is no tax break for children. Your partner's pay changes nothing here.`,
    nl: `In Mexico wordt iedereen op zijn eigen loon belast. Koppels doen nooit samen aangifte en er is geen belastingvoordeel voor kinderen. Het loon van je partner verandert hier niets.`,
    fr: `Au Mexique, chacun est imposé sur son propre salaire. Les couples ne déclarent jamais ensemble et il n'y a pas d'avantage fiscal pour les enfants. Le salaire de votre partenaire ne change rien ici.`,
  },
  commune: { en: `State`, nl: `Deelstaat`, fr: `État` },
  searchCommune: { en: `Search a state`, nl: `Zoek een deelstaat`, fr: `Rechercher un État` },
  searchN: { en: n => `Search ${n} states`, nl: n => `Zoek in ${n} deelstaten`, fr: n => `Rechercher parmi ${n} États` },
  loadingCommunes: { en: `Loading states…`, nl: `Deelstaten laden…`, fr: `Chargement des États…` },
  noCommune: { en: q => `No state matches "${q}"`, nl: q => `Geen deelstaat gevonden voor "${q}"`, fr: q => `Aucun État ne correspond à « ${q} »` },
  communesError: {
    en: `Couldn't load the list of states (communes.js next to this page). Set the payroll tax rate by hand below.`,
    nl: `Kon de lijst met deelstaten niet laden (communes.js naast deze pagina). Stel het tarief van de loonbelasting hieronder zelf in.`,
    fr: `Impossible de charger la liste des États (communes.js à côté de cette page). Réglez le taux de l'impôt sur les salaires à la main ci-dessous.`,
  },
  setByCommune: { en: `(set by the state)`, nl: `(volgt uit de deelstaat)`, fr: `(déterminé par l'État)` },
  isnLabel: { en: `State payroll tax (ISN)`, nl: `Loonbelasting deelstaat (ISN)`, fr: `Impôt sur les salaires de l'État (ISN)` },
  isnHint: {
    en: r => `Your employer pays ${r} of all your pay to the state where you work. It does not show on your payslip.`,
    nl: r => `Je werkgever betaalt ${r} van al je loon aan de deelstaat waar je werkt. Het staat niet op je loonstrook.`,
    fr: r => `Votre employeur verse ${r} de toute votre paie à l'État où vous travaillez. Cela n'apparaît pas sur votre fiche de paie.`,
  },
  vatStandard: { en: `(Mexico's standard rate is 16%, 8% in the northern border region)`, nl: `(het Mexicaanse normale tarief is 16%, 8% in de noordelijke grensregio)`, fr: `(le taux normal mexicain est de 16%, 8% dans la région frontalière nord)` },

  // Minister mode
  ministerOn: { en: `🏛️ I AM A FEDERAL OFFICIAL`, nl: `🏛️ IK BEN FEDERAAL AMBTSDRAGER`, fr: `🏛️ JE SUIS ÉLU FÉDÉRAL` },
  'minRole.pres': { en: `President`, nl: `President`, fr: `Présidente` },
  'minRole.sen': { en: `Senator`, nl: `Senator`, fr: `Sénateur` },
  'minRole.dip': { en: `Federal deputy`, nl: `Federaal afgevaardigde`, fr: `Député fédéral` },
  ministerHint: {
    en: `Pay set in the 2026 federal budget (PEF), which only gives the amount after tax. The gross here is the pay that would leave that amount after social security (ISSSTE) and income tax (ISR). Paid 12 times a year; the year-end bonus is left out.`,
    nl: `Loon vastgelegd in de federale begroting 2026 (PEF), die enkel het bedrag na belasting geeft. Het bruto hier is het loon dat dat bedrag overlaat na sociale zekerheid (ISSSTE) en inkomstenbelasting (ISR). 12 keer per jaar betaald; de eindejaarspremie is weggelaten.`,
    fr: `Paie fixée par le budget fédéral 2026 (PEF), qui ne donne que le montant après impôt. Le brut ici est la paie qui laisse ce montant après la sécurité sociale (ISSSTE) et l'impôt sur le revenu (ISR). Versée 12 fois par an ; la prime de fin d'année est laissée de côté.`,
  },
  minSalaryHint: {
    en: `Yearly gross: the monthly amount × 12. By default, worked back from the take-home amount in the budget.`,
    nl: `Jaarlijks bruto: het maandbedrag × 12. Standaard teruggerekend vanaf het nettobedrag in de begroting.`,
    fr: `Brut annuel : le montant mensuel × 12. Par défaut, recalculé à partir du net donné par le budget.`,
  },
  'tip.ministerRules': {
    en: `Federal officials get social security from ISSSTE, the public servants' fund, not from IMSS like private employees. They pay income tax (ISR) like anyone. No state payroll tax is counted. The 2026 budget (PEF) gives the President MX$134,290 a month after tax, senators MX$131,874 and deputies MX$108,935 (listed as their total pay, read here as after tax). The Constitution (art. 127) says no public servant may earn more than the President.`,
    nl: `Federale ambtsdragers krijgen sociale zekerheid via het ISSSTE, het fonds voor ambtenaren, niet via het IMSS zoals werknemers in de privésector. Ze betalen inkomstenbelasting (ISR) zoals iedereen. Er wordt geen loonbelasting van de deelstaat meegeteld. De begroting 2026 (PEF) geeft de presidente MX$ 134.290 per maand na belasting, senatoren MX$ 131.874 en afgevaardigden MX$ 108.935 (vermeld als hun totale loon, hier gelezen als na belasting). Volgens de grondwet (art. 127) mag geen ambtenaar meer verdienen dan de president.`,
    fr: `Les élus fédéraux ont leur sécurité sociale à l'ISSSTE, la caisse des agents publics, pas à l'IMSS comme les salariés du privé. Ils paient l'impôt sur le revenu (ISR) comme tout le monde. Aucun impôt sur les salaires des États n'est compté. Le budget 2026 (PEF) donne à la présidente 134 290 MX$ par mois après impôt, aux sénateurs 131 874 MX$ et aux députés 108 935 MX$ (indiqué comme leur paie totale, lu ici comme après impôt). Selon la Constitution (art. 127), aucun agent public ne peut gagner plus que le président.`,
  },
  'bd.minGross': { en: `Gross pay (worked back)`, nl: `Brutoloon (teruggerekend)`, fr: `Paie brute (recalculée)` },
  'bd.stateCost': { en: `Cost to the state`, nl: `Kost voor de staat`, fr: `Coût pour l'État` },
  'tip.minGross': {
    en: `The budget only gives the pay after tax. This is the gross pay that leaves the same amount once social security (ISSSTE) and income tax (ISR) are taken.`,
    nl: `De begroting geeft enkel het loon na belasting. Dit is het brutoloon dat hetzelfde bedrag overlaat na sociale zekerheid (ISSSTE) en inkomstenbelasting (ISR).`,
    fr: `Le budget ne donne que la paie après impôt. Voici la paie brute qui laisse le même montant une fois la sécurité sociale (ISSSTE) et l'impôt (ISR) retirés.`,
  },
  'tip.stateCost': { en: `Gross pay plus what the government pays to ISSSTE and to the FOVISSSTE housing fund.`, nl: `Brutoloon plus wat de overheid aan het ISSSTE en aan het woonfonds FOVISSSTE betaalt.`, fr: `Paie brute plus ce que l'État verse à l'ISSSTE et au fonds de logement FOVISSSTE.` },
  'comp.erMin': { en: `Government ISSSTE contributions`, nl: `ISSSTE-bijdragen overheid`, fr: `Cotisations ISSSTE de l'État` },
  'comp.eeMin': { en: `Your ISSSTE contributions`, nl: `Jouw ISSSTE-bijdragen`, fr: `Vos cotisations ISSSTE` },
  'tip.minEr': {
    en: cap => `About 20.1% of base pay, on pay up to ${cap} a month. It covers health care, health care for retirees, disability and life insurance, work accidents, social services, retirement, old age, and 5% for the FOVISSSTE housing fund.`,
    nl: cap => `Ongeveer 20,1% van het basisloon, op een loon tot ${cap} per maand. Het dekt gezondheidszorg, zorg voor gepensioneerden, invaliditeits- en levensverzekering, arbeidsongevallen, sociale diensten, pensioen, ouderdom, en 5% voor het woonfonds FOVISSSTE.`,
    fr: cap => `Environ 20,1% de la paie de base, sur une paie jusqu'à ${cap} par mois. Cela couvre la santé, la santé des retraités, l'assurance invalidité et vie, les accidents du travail, les services sociaux, la retraite, la vieillesse, et 5% pour le fonds de logement FOVISSSTE.`,
  },
  'tip.minEe': {
    en: cap => `10.625% of base pay, on pay up to ${cap} a month: 6.125% into your own retirement account, 2.75% health care, 0.625% health care for retirees, 0.625% disability and life insurance, 0.5% social services.`,
    nl: cap => `10,625% van het basisloon, op een loon tot ${cap} per maand: 6,125% naar je eigen pensioenrekening, 2,75% gezondheidszorg, 0,625% zorg voor gepensioneerden, 0,625% invaliditeits- en levensverzekering, 0,5% sociale diensten.`,
    fr: cap => `10,625% de la paie de base, sur une paie jusqu'à ${cap} par mois : 6,125% sur votre propre compte retraite, 2,75% santé, 0,625% santé des retraités, 0,625% assurance invalidité et vie, 0,5% services sociaux.`,
  },
  'tip.minIsn': {
    en: `Not counted for federal officials: most states don't charge their payroll tax to the federal government.`,
    nl: `Niet meegeteld voor federale ambtsdragers: de meeste deelstaten rekenen hun loonbelasting niet aan de federale overheid aan.`,
    fr: `Non compté pour les élus fédéraux : la plupart des États ne font pas payer leur impôt sur les salaires au gouvernement fédéral.`,
  },

  // Politicians on the chart
  'stat.pres': { en: `President`, nl: `President`, fr: `Présidente` },
  'stat.sen': { en: `Senator`, nl: `Senator`, fr: `Sénateur` },
  'stat.dip': { en: `Federal deputy`, nl: `Federaal afgevaardigde`, fr: `Député fédéral` },
  'pol.stat.pres': { en: `MX$134,290 a month after tax (PEF 2026)`, nl: `MX$ 134.290 per maand na belasting (PEF 2026)`, fr: `134 290 MX$ par mois après impôt (PEF 2026)` },
  'pol.stat.sen': { en: `MX$131,874 a month after tax (PEF 2026)`, nl: `MX$ 131.874 per maand na belasting (PEF 2026)`, fr: `131 874 MX$ par mois après impôt (PEF 2026)` },
  'pol.stat.dip': { en: `MX$108,935 a month (PEF 2026)`, nl: `MX$ 108.935 per maand (PEF 2026)`, fr: `108 935 MX$ par mois (PEF 2026)` },
  'polNote.stat': {
    en: `Public servants' social security (ISSSTE) plus income tax. The face sits where a private-sector employee would take home the same.`,
    nl: `Sociale zekerheid voor ambtenaren (ISSSTE) plus inkomstenbelasting. Het hoofdje staat waar een werknemer in de privésector hetzelfde netto zou overhouden.`,
    fr: `Sécurité sociale des agents publics (ISSSTE) plus impôt sur le revenu. La tête est placée là où un salarié du privé toucherait le même net.`,
  },
  'polTipNote.pres': {
    en: `Claudia Sheinbaum. MX$134,290 a month after tax in 2026. No public servant may earn more.`,
    nl: `Claudia Sheinbaum. MX$ 134.290 per maand na belasting in 2026. Geen enkele ambtenaar mag meer verdienen.`,
    fr: `Claudia Sheinbaum. 134 290 MX$ par mois après impôt en 2026. Aucun agent public ne peut gagner plus.`,
  },
  'polTipNote.sen': {
    en: `A senator's normal pay after tax in 2026. Money for an office and staff comes on top and is not counted.`,
    nl: `Het gewone loon na belasting van een senator in 2026. Geld voor kantoor en medewerkers komt erbovenop en telt niet mee.`,
    fr: `La paie normale après impôt d'un sénateur en 2026. L'argent pour le bureau et le personnel s'ajoute et n'est pas compté.`,
  },
  'polTipNote.dip': {
    en: `A federal deputy's total pay in 2026 as listed in the budget, read as after tax (not confirmed). Extra money for law-making work is not counted.`,
    nl: `Het totale loon van een federaal afgevaardigde in 2026 volgens de begroting, gelezen als na belasting (niet bevestigd). Extra geld voor wetgevend werk telt niet mee.`,
    fr: `La paie totale d'un député fédéral en 2026 selon le budget, lue comme après impôt (non confirmé). L'argent en plus pour le travail législatif n'est pas compté.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. The budget only gives pay after tax. Each face sits where a private-sector employee paid 12.6 months a year would take home the same. Year-end bonuses are left out. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. De begroting geeft enkel het loon na belasting. Elk hoofdje staat waar een werknemer in de privésector met 12,6 maanden per jaar hetzelfde netto zou overhouden. Eindejaarspremies zijn weggelaten. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Le budget ne donne que la paie après impôt. Chaque tête est placée là où un salarié du privé payé 12,6 mois par an toucherait le même net. Les primes de fin d'année sont laissées de côté. Sources : ${links}.`,
  },
  'src.pol.pres': { en: `Wikipedia (es), citing PEF 2026 annex 23.1.2`, nl: `Wikipedia (es), naar PEF 2026 bijlage 23.1.2`, fr: `Wikipédia (es), d'après le PEF 2026 annexe 23.1.2` },
  'src.pol.sen': { en: `Wikipedia (es), citing PEF 2026 annex 23.2.3`, nl: `Wikipedia (es), naar PEF 2026 bijlage 23.2.3`, fr: `Wikipédia (es), d'après le PEF 2026 annexe 23.2.3` },
  'src.pol.dip': { en: `Wikipedia (es), citing PEF 2026 annex 23.3.4`, nl: `Wikipedia (es), naar PEF 2026 bijlage 23.3.4`, fr: `Wikipédia (es), d'après le PEF 2026 annexe 23.3.4` },
  bracketTop: { en: `35% bracket`, nl: `schijf van 35%`, fr: `tranche à 35%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why the jump just above ${a}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom de sprong net boven ${a}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi le saut juste au-dessus de ${a} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, sub) => b
      ? `On the minimum wage of ${a}, no income tax (ISR) is taken and your employer even pays your social security (IMSS) share. Earn one peso more and both come back at once: about 2.4% for IMSS, and income tax on your whole pay. A work subsidy of ${sub} a month softens the tax up to ${b}, then also stops all at once: a second drop.`
      : `On the minimum wage of ${a}, no income tax (ISR) is taken and your employer pays your social security (IMSS) share. Federal officials don't get the work subsidy.`,
    nl: (a, b, sub) => b
      ? `Op het minimumloon van ${a} wordt geen inkomstenbelasting (ISR) ingehouden en betaalt je werkgever zelfs jouw deel van de sociale zekerheid (IMSS). Verdien één peso meer en beide komen in één keer terug: ongeveer 2,4% IMSS, en inkomstenbelasting op je hele loon. Een werksubsidie van ${sub} per maand verzacht de belasting tot ${b}, en valt dan ook in één keer weg: een tweede val.`
      : `Op het minimumloon van ${a} wordt geen inkomstenbelasting (ISR) ingehouden en betaalt je werkgever jouw deel van de sociale zekerheid (IMSS). Federale ambtsdragers krijgen de werksubsidie niet.`,
    fr: (a, b, sub) => b
      ? `Au salaire minimum de ${a}, aucun impôt (ISR) n'est retenu et l'employeur paie même votre part de sécurité sociale (IMSS). Gagnez un peso de plus et les deux reviennent d'un coup : environ 2,4% d'IMSS, et l'impôt sur toute votre paie. Une aide à l'emploi de ${sub} par mois adoucit l'impôt jusqu'à ${b}, puis s'arrête aussi d'un coup : une deuxième chute.`
      : `Au salaire minimum de ${a}, aucun impôt (ISR) n'est retenu et l'employeur paie votre part de sécurité sociale (IMSS). Les élus fédéraux n'ont pas l'aide à l'emploi.`,
  },
  topTitle: {
    en: top => `What happens at ${top}?`,
    nl: top => `Wat gebeurt er bij ${top}?`,
    fr: top => `Que se passe-t-il à ${top} ?`,
  },
  topBody: {
    en: top => `From ${top}, taxable income passes MX$5,107,704 a year and each extra peso is taxed at 35%, the top rate. Much lower down, at 25 UMA (MX$2,933 a day, about MX$85,000 a month over 12.6 payments), social security, retirement and housing payments hit their maximum, so the rate drops back a little. The UMA is a government reference amount used to set limits.`,
    nl: top => `Vanaf ${top} komt het belastbare inkomen boven MX$ 5.107.704 per jaar en wordt elke extra peso belast aan 35%, het toptarief. Veel lager, bij 25 UMA (MX$ 2.933 per dag, ongeveer MX$ 85.000 per maand over 12,6 betalingen), bereiken sociale zekerheid, pensioen- en woonbijdragen hun maximum, dus daalt het tarief wat. De UMA is een referentiebedrag van de overheid om grenzen vast te leggen.`,
    fr: top => `À partir de ${top}, le revenu imposable dépasse 5 107 704 MX$ par an et chaque peso en plus est imposé à 35%, le taux maximal. Bien plus bas, à 25 UMA (2 933 MX$ par jour, environ 85 000 MX$ par mois sur 12,6 versements), la sécurité sociale, la retraite et le logement atteignent leur maximum : le taux redescend un peu. L'UMA est un montant de référence de l'État qui sert à fixer des limites.`,
  },

  // Tax components
  'comp.er': { en: `Employer IMSS contributions`, nl: `IMSS-bijdragen werkgever`, fr: `Cotisations patronales IMSS` },
  'comp.sar': { en: `Retirement account (AFORE)`, nl: `Pensioenrekening (AFORE)`, fr: `Compte retraite (AFORE)` },
  'comp.inf': { en: `Housing fund (INFONAVIT)`, nl: `Woonfonds (INFONAVIT)`, fr: `Fonds de logement (INFONAVIT)` },
  'comp.isn': { en: `State payroll tax (ISN)`, nl: `Loonbelasting deelstaat (ISN)`, fr: `Impôt sur les salaires (ISN)` },
  'comp.ee': { en: `Your IMSS contributions`, nl: `Jouw IMSS-bijdragen`, fr: `Vos cotisations IMSS` },
  'comp.isr': { en: `Income tax (ISR)`, nl: `Inkomstenbelasting (ISR)`, fr: `Impôt sur le revenu (ISR)` },
  'bd.taxable': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.exAg': { en: `Tax-free part of the year-end bonus`, nl: `Belastingvrij deel eindejaarspremie`, fr: `Part non imposée de la prime de fin d'année` },
  'bd.exPv': { en: `Tax-free part of the holiday bonus`, nl: `Belastingvrij deel vakantiepremie`, fr: `Part non imposée de la prime de vacances` },
  'bd.isrGross': { en: `Income tax before the subsidy`, nl: `Inkomstenbelasting vóór de subsidie`, fr: `Impôt avant l'aide` },
  'bd.sub': { en: `Work subsidy`, nl: `Werksubsidie`, fr: `Aide à l'emploi` },
  'er.fija': { en: `Flat health fee, 20.40% of the UMA per day`, nl: `Vaste gezondheidsbijdrage, 20,40% van de UMA per dag`, fr: `Cotisation santé fixe, 20,40% de l'UMA par jour` },
  'er.shifted': { en: `Your IMSS share, paid by the employer on the minimum wage`, nl: `Jouw IMSS-deel, betaald door de werkgever op het minimumloon`, fr: `Votre part IMSS, payée par l'employeur au salaire minimum` },
  'er.ret': { en: `Retirement`, nl: `Pensioen`, fr: `Retraite` },
  'er.cv': { en: `Old age and early retirement`, nl: `Ouderdom en vroegpensioen`, fr: `Vieillesse et retraite anticipée` },

  // Tooltips
  'tip.f126': {
    en: (ag, pv) => `12 monthly salaries plus the two bonuses the law requires: a year-end bonus (aguinaldo) of 15 days' pay, paid by 20 December, and a holiday bonus of 25% of the 12 days off in the first year, so 3 days' pay. Both count for social security. For income tax, the aguinaldo is tax-free up to ${ag} and the holiday bonus up to ${pv}.`,
    nl: (ag, pv) => `12 maandlonen plus de twee premies die de wet oplegt: een eindejaarspremie (aguinaldo) van 15 dagen loon, te betalen vóór 20 december, en een vakantiepremie van 25% van de 12 vrije dagen in het eerste jaar, dus 3 dagen loon. Beide tellen voor de sociale zekerheid. Voor de inkomstenbelasting is de aguinaldo belastingvrij tot ${ag} en de vakantiepremie tot ${pv}.`,
    fr: (ag, pv) => `12 salaires mensuels plus les deux primes imposées par la loi : une prime de fin d'année (aguinaldo) de 15 jours de salaire, versée avant le 20 décembre, et une prime de vacances de 25% des 12 jours de congé de la première année, soit 3 jours de salaire. Les deux comptent pour la sécurité sociale. Pour l'impôt, l'aguinaldo est exonéré jusqu'à ${ag} et la prime de vacances jusqu'à ${pv}.`,
  },
  'tip.f12': {
    en: `12 payments, as if the bonuses were spread into the monthly pay. The year-end and holiday bonuses are required by law, so this is mostly to compare with other countries.`,
    nl: `12 betalingen, alsof de premies over het maandloon gespreid zijn. De eindejaars- en vakantiepremie zijn wettelijk verplicht, dus dit dient vooral om met andere landen te vergelijken.`,
    fr: `12 versements, comme si les primes étaient réparties dans le salaire mensuel. Les primes de fin d'année et de vacances sont obligatoires : cette option sert surtout à comparer avec d'autres pays.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Couples never file together, and there is no tax break for a spouse or children. Each person files on their own income, so your partner's pay doesn't change your tax.`,
    nl: `Koppels doen nooit samen aangifte, en er is geen belastingvoordeel voor een partner of kinderen. Ieder doet aangifte over het eigen inkomen, dus het loon van je partner verandert jouw belasting niet.`,
    fr: `Les couples ne déclarent jamais ensemble, et il n'y a pas d'avantage fiscal pour un conjoint ou des enfants. Chacun déclare son propre revenu : la paie de votre partenaire ne change pas votre impôt.`,
  },
  'tip.isnRule': {
    en: `Each state sets its own payroll tax, paid by the employer on all pay, bonuses included. Mexico City charges 4% since 2025. Most states charge 2 to 3%, some with extra charges or discounts for small firms. Pick your state above, or set the rate here.`,
    nl: `Elke deelstaat bepaalt zijn eigen loonbelasting, betaald door de werkgever op al het loon, premies inbegrepen. Mexico-Stad rekent 4% sinds 2025. De meeste deelstaten rekenen 2 tot 3%, sommige met extra heffingen of kortingen voor kleine bedrijven. Kies je deelstaat hierboven, of stel het tarief hier in.`,
    fr: `Chaque État fixe son impôt sur les salaires, payé par l'employeur sur toute la paie, primes comprises. Mexico applique 4% depuis 2025. La plupart des États demandent 2 à 3%, certains avec des suppléments ou des remises pour les petites entreprises. Choisissez votre État ci-dessus, ou réglez le taux ici.`,
  },
  'tip.costShort': {
    en: `Gross salary plus the employer's social security (IMSS), retirement account, housing fund (INFONAVIT) and state payroll tax.`,
    nl: `Brutoloon plus de sociale zekerheid van de werkgever (IMSS), pensioenrekening, woonfonds (INFONAVIT) en loonbelasting van de deelstaat.`,
    fr: `Salaire brut plus la sécurité sociale patronale (IMSS), le compte retraite, le fonds de logement (INFONAVIT) et l'impôt sur les salaires de l'État.`,
  },
  'tip.er': {
    en: uma => `Your employer pays this for your health care, maternity, disability and life insurance, childcare and work injuries. Most of it is a share of your base wage (your daily pay, with the bonuses spread over the year). But one part is a flat amount, 20.40% of the UMA (${uma} a day), whatever you earn, so it weighs most on low pay. Work injury insurance is set at 0.54355%, the rate for the safest jobs.`,
    nl: uma => `Je werkgever betaalt dit voor je gezondheidszorg, moederschap, invaliditeits- en levensverzekering, kinderopvang en arbeidsongevallen. Het meeste is een deel van je basisloon (je dagloon, met de premies over het jaar gespreid). Maar één deel is een vast bedrag, 20,40% van de UMA (${uma} per dag), wat je ook verdient, dus het weegt het zwaarst op lage lonen. De verzekering arbeidsongevallen staat op 0,54355%, het tarief voor de veiligste banen.`,
    fr: uma => `L'employeur paie ceci pour votre santé, la maternité, l'assurance invalidité et vie, la garde d'enfants et les accidents du travail. L'essentiel est une part de votre salaire de base (votre salaire journalier, primes réparties sur l'année). Mais une part est un montant fixe, 20,40% de l'UMA (${uma} par jour), quel que soit votre salaire : elle pèse donc surtout sur les bas salaires. L'assurance accidents du travail est fixée à 0,54355%, le taux des emplois les plus sûrs.`,
  },
  'tip.sar': {
    en: `Your employer pays into your own AFORE retirement account: 2% for retirement plus an old-age part that a 2020 reform raises every year until 2030. In 2026 that part goes from 3.15% on the minimum wage to 7.513% above 4 UMA. It is compulsory, so it counts as a tax here, but the money is yours.`,
    nl: `Je werkgever stort op je eigen AFORE-pensioenrekening: 2% voor pensioen plus een ouderdomsdeel dat een hervorming van 2020 elk jaar optrekt tot 2030. In 2026 gaat dat deel van 3,15% op het minimumloon tot 7,513% boven 4 UMA. Het is verplicht, dus telt het hier als belasting, maar het geld is van jou.`,
    fr: `L'employeur verse sur votre propre compte retraite AFORE : 2% pour la retraite plus une part vieillesse qu'une réforme de 2020 augmente chaque année jusqu'en 2030. En 2026, cette part va de 3,15% au salaire minimum à 7,513% au-delà de 4 UMA. Elle est obligatoire, donc comptée ici comme un prélèvement, mais l'argent est à vous.`,
  },
  'tip.inf': {
    en: `5% of your base wage, paid by your employer into your INFONAVIT housing account. You can use it for a home loan. If you never use it, you get it back with your pension.`,
    nl: `5% van je basisloon, door je werkgever gestort op je INFONAVIT-woonrekening. Je kunt het gebruiken voor een woonlening. Gebruik je het nooit, dan krijg je het terug met je pensioen.`,
    fr: `5% de votre salaire de base, versés par l'employeur sur votre compte logement INFONAVIT. Vous pouvez l'utiliser pour un prêt immobilier. Si vous ne l'utilisez jamais, vous le récupérez avec votre retraite.`,
  },
  'tip.isn': {
    en: `A state tax on wages, paid by your employer on everything it pays you, bonuses included, with no upper limit.`,
    nl: `Een belasting van de deelstaat op lonen, betaald door je werkgever op alles wat hij je betaalt, premies inbegrepen, zonder bovengrens.`,
    fr: `Un impôt de l'État sur les salaires, payé par l'employeur sur tout ce qu'il vous verse, primes comprises, sans plafond.`,
  },
  'tip.isnM': {
    en: `State rates are estimates: only Mexico City (4%) was confirmed with a recent source. Some states add extra charges for education or security.`,
    nl: `De tarieven per deelstaat zijn schattingen: alleen Mexico-Stad (4%) is met een recente bron bevestigd. Sommige deelstaten rekenen extra voor onderwijs of veiligheid.`,
    fr: `Les taux des États sont des estimations : seule Mexico (4%) a été confirmée par une source récente. Certains États ajoutent des suppléments pour l'éducation ou la sécurité.`,
  },
  'tip.ee': {
    en: `Taken from your pay for social security (IMSS): 0.25% for sick pay, 0.375% for retirees' health care, 0.625% for disability and life insurance, 1.125% for old age into your AFORE, plus 0.40% on the part of your base wage above 3 UMA. It does not lower your income tax.`,
    nl: `Van je loon afgehouden voor sociale zekerheid (IMSS): 0,25% voor ziekte-uitkering, 0,375% voor zorg van gepensioneerden, 0,625% voor invaliditeits- en levensverzekering, 1,125% voor ouderdom naar je AFORE, plus 0,40% op het deel van je basisloon boven 3 UMA. Het verlaagt je inkomstenbelasting niet.`,
    fr: `Retenu sur votre paie pour la sécurité sociale (IMSS) : 0,25% pour les indemnités maladie, 0,375% pour la santé des retraités, 0,625% pour l'assurance invalidité et vie, 1,125% pour la vieillesse sur votre AFORE, plus 0,40% sur la part du salaire de base au-delà de 3 UMA. Cela ne réduit pas votre impôt.`,
  },
  'tip.capped': {
    en: cap => `Your base wage is above the maximum of 25 UMA (${cap} a day). The part above pays nothing for social security, retirement or housing.`,
    nl: cap => `Je basisloon ligt boven het maximum van 25 UMA (${cap} per dag). Het deel daarboven betaalt niets voor sociale zekerheid, pensioen of wonen.`,
    fr: cap => `Votre salaire de base dépasse le maximum de 25 UMA (${cap} par jour). La part au-delà ne paie rien pour la sécurité sociale, la retraite ou le logement.`,
  },
  'tip.taxable': {
    en: (ag, pv) => `The part of your pay that is taxed: gross pay minus the tax-free part of the bonuses. That is the year-end bonus up to 30 UMA (${ag}) and the holiday bonus up to 15 UMA (${pv}). Social security payments are not taken off.`,
    nl: (ag, pv) => `Het deel van je loon dat belast wordt: brutoloon min het belastingvrije deel van de premies. Dat is de eindejaarspremie tot 30 UMA (${ag}) en de vakantiepremie tot 15 UMA (${pv}). Bijdragen voor sociale zekerheid gaan er niet af.`,
    fr: (ag, pv) => `La part de votre paie qui est imposée : salaire brut moins la part non imposée des primes. C'est la prime de fin d'année jusqu'à 30 UMA (${ag}) et la prime de vacances jusqu'à 15 UMA (${pv}). Les cotisations sociales ne sont pas retirées.`,
  },
  'tip.isrGross': {
    en: `The 2026 tax table: each income band has a fixed amount, plus a rate on what you earn above the band's start, from 1.92% to 35%. The bands were raised by 13.2% for 2026, the first update since 2023.`,
    nl: `De belastingtabel van 2026: elke inkomensschijf heeft een vast bedrag, plus een tarief op wat je boven het begin van de schijf verdient, van 1,92% tot 35%. De schijven zijn voor 2026 met 13,2% opgetrokken, de eerste aanpassing sinds 2023.`,
    fr: `Le barème 2026 : chaque tranche de revenu a un montant fixe, plus un taux sur ce que vous gagnez au-dessus du début de la tranche, de 1,92% à 35%. Les tranches ont été relevées de 13,2% pour 2026, première mise à jour depuis 2023.`,
  },
  'tip.fee': { en: lo => `Fixed amount up to ${lo}`, nl: lo => `Vast bedrag tot ${lo}`, fr: lo => `Montant fixe jusqu'à ${lo}` },
  'tip.sub': {
    en: (amt, lim) => `If you earn ${lim} a month or less, your employer takes ${amt} a month off your income tax (15.02% of the monthly UMA). It can only cancel tax: you never get it as cash, and unused amounts are lost. Above the limit you get nothing at all.`,
    nl: (amt, lim) => `Verdien je ${lim} per maand of minder, dan haalt je werkgever ${amt} per maand van je inkomstenbelasting af (15,02% van de maandelijkse UMA). Het kan enkel belasting schrappen: je krijgt het nooit in geld, en wat niet gebruikt wordt gaat verloren. Boven de grens krijg je helemaal niets.`,
    fr: (amt, lim) => `Si vous gagnez ${lim} par mois ou moins, l'employeur retire ${amt} par mois de votre impôt (15,02% de l'UMA mensuelle). Elle ne peut qu'annuler de l'impôt : jamais versée en argent, et ce qui n'est pas utilisé est perdu. Au-delà du plafond, vous n'avez rien du tout.`,
  },
  'tip.subNone': { en: `You earn more than the limit each month: no subsidy.`, nl: `Je verdient elke maand meer dan de grens: geen subsidie.`, fr: `Vous gagnez plus que le plafond chaque mois : pas d'aide.` },
  'tip.isr': {
    en: mw => `Taken from your pay each month, and corrected by your employer at the end of the year. People who earn only the minimum wage (${mw} a month) pay no income tax.`,
    nl: mw => `Elke maand van je loon afgehouden, en op het einde van het jaar door je werkgever rechtgezet. Wie enkel het minimumloon verdient (${mw} per maand), betaalt geen inkomstenbelasting.`,
    fr: mw => `Retenu sur votre paie chaque mois, et corrigé par l'employeur en fin d'année. Les personnes au seul salaire minimum (${mw} par mois) ne paient pas d'impôt sur le revenu.`,
  },
  'tip.isrMin': { en: `You earn the minimum wage: no income tax.`, nl: `Je verdient het minimumloon: geen inkomstenbelasting.`, fr: `Vous êtes au salaire minimum : pas d'impôt sur le revenu.` },
  'tip.vatM': {
    en: `Food, medicine and books have 0% VAT, rent and some services have none, and the northern border area pays 8%. We apply the full rate to all your spending anyway, so this is the most it could be. Extra taxes on fuel, alcohol, tobacco and sugary drinks (IEPS) are not counted.`,
    nl: `Voeding, geneesmiddelen en boeken hebben 0% btw, huur en sommige diensten hebben er geen, en de noordelijke grensstreek betaalt 8%. We passen toch het volle tarief toe op al je uitgaven, dus dit is het maximum. Extra belastingen op brandstof, alcohol, tabak en suikerdranken (IEPS) tellen niet mee.`,
    fr: `L'alimentation, les médicaments et les livres ont 0% de TVA, le loyer et certains services n'en ont pas, et la zone frontalière nord paie 8%. On applique quand même le plein taux à toutes vos dépenses : c'est donc un maximum. Les taxes en plus sur les carburants, l'alcool, le tabac et les boissons sucrées (IEPS) ne sont pas comptées.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross pay minus social security (IMSS), minus income tax (ISR).`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon min sociale zekerheid (IMSS), min inkomstenbelasting (ISR).`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Salaire brut moins la sécurité sociale (IMSS), moins l'impôt sur le revenu (ISR).`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Social security (IMSS): <span class="num">20.40%</span> of the UMA per day, <span class="num">1.10%</span> of the base wage above 3 UMA, then <span class="num">0.70%</span> + <span class="num">1.05%</span> + <span class="num">1.75%</span> + <span class="num">1%</span> + work accidents <span class="num">0.54355%</span> of the base wage.`,
      `Retirement <span class="num">2%</span> and old age <span class="num">3.15%</span> (minimum wage) to <span class="num">7.513%</span> (above 4 UMA) into your AFORE; housing fund (INFONAVIT) <span class="num">5%</span>.`,
      `Base wage = yearly pay ÷ 365, up to 25 UMA (<span class="num">MX$2,932.75</span> a day). The UMA, a government reference amount, is <span class="num">MX$117.31</span> from February 2026.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Sociale zekerheid (IMSS): <span class="num">20,40%</span> van de UMA per dag, <span class="num">1,10%</span> van het basisloon boven 3 UMA, dan <span class="num">0,70%</span> + <span class="num">1,05%</span> + <span class="num">1,75%</span> + <span class="num">1%</span> + arbeidsongevallen <span class="num">0,54355%</span> van het basisloon.`,
      `Pensioen <span class="num">2%</span> en ouderdom <span class="num">3,15%</span> (minimumloon) tot <span class="num">7,513%</span> (boven 4 UMA) naar je AFORE; woonfonds (INFONAVIT) <span class="num">5%</span>.`,
      `Basisloon = jaarloon ÷ 365, tot 25 UMA (<span class="num">MX$ 2.932,75</span> per dag). De UMA, een referentiebedrag van de overheid, is <span class="num">MX$ 117,31</span> vanaf februari 2026.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Sécurité sociale (IMSS) : <span class="num">20,40%</span> de l'UMA par jour, <span class="num">1,10%</span> du salaire de base au-delà de 3 UMA, puis <span class="num">0,70%</span> + <span class="num">1,05%</span> + <span class="num">1,75%</span> + <span class="num">1%</span> + accidents du travail <span class="num">0,54355%</span> du salaire de base.`,
      `Retraite <span class="num">2%</span> et vieillesse de <span class="num">3,15%</span> (salaire minimum) à <span class="num">7,513%</span> (au-delà de 4 UMA) sur votre AFORE ; fonds de logement (INFONAVIT) <span class="num">5%</span>.`,
      `Salaire de base = paie annuelle ÷ 365, jusqu'à 25 UMA (<span class="num">2 932,75 MX$</span> par jour). L'UMA, un montant de référence de l'État, vaut <span class="num">117,31 MX$</span> depuis février 2026.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [`Social security (IMSS) <span class="num">2.375%</span> of the base wage, plus <span class="num">0.40%</span> above 3 UMA, with the same maximum. On the minimum wage the employer pays it instead (art. 36 of the Social Security Law).`] },
    nl: { h: `2 · Werknemersbijdragen`, li: [`Sociale zekerheid (IMSS) <span class="num">2,375%</span> van het basisloon, plus <span class="num">0,40%</span> boven 3 UMA, met hetzelfde maximum. Op het minimumloon betaalt de werkgever het in de plaats (art. 36 van de socialezekerheidswet).`] },
    fr: { h: `2 · Cotisations salariales`, li: [`Sécurité sociale (IMSS) <span class="num">2,375%</span> du salaire de base, plus <span class="num">0,40%</span> au-delà de 3 UMA, même maximum. Au salaire minimum, l'employeur la paie à la place (art. 36 de la loi sur la sécurité sociale).`] },
  },
  'ref.isn': {
    en: { h: `3 · State payroll tax`, li: [`Paid by the employer on all pay: Mexico City <span class="num">4%</span>, other states <span class="num">2%</span> to <span class="num">4%</span>. Rates outside Mexico City are estimates.`] },
    nl: { h: `3 · Loonbelasting deelstaat`, li: [`Betaald door de werkgever op al het loon: Mexico-Stad <span class="num">4%</span>, andere deelstaten <span class="num">2%</span> tot <span class="num">4%</span>. Tarieven buiten Mexico-Stad zijn schattingen.`] },
    fr: { h: `3 · Impôt sur les salaires des États`, li: [`Payé par l'employeur sur toute la paie : Mexico <span class="num">4%</span>, autres États de <span class="num">2%</span> à <span class="num">4%</span>. Taux hors Mexico estimés.`] },
  },
  'ref.ir': {
    en: br => ({ h: `4 · Income tax (ISR)`, li: [`Yearly table on taxable income. Each slice has its own rate (the law writes it as a fixed amount per band, which gives the same result):${br}`] }),
    nl: br => ({ h: `4 · Inkomstenbelasting (ISR)`, li: [`Jaartabel op het belastbare inkomen. Elke schijf heeft haar eigen tarief (de wet schrijft het als een vast bedrag per schijf, met hetzelfde resultaat):${br}`] }),
    fr: br => ({ h: `4 · Impôt sur le revenu (ISR)`, li: [`Barème annuel sur le revenu imposable. Chaque tranche a son propre taux (la loi l'écrit comme un montant fixe par tranche, même résultat) :${br}`] }),
  },
  'ref.exempt': {
    en: { h: `5 · Bonuses`, li: [`Year-end bonus (aguinaldo) of at least 15 days' pay, tax-free up to 30 UMA (<span class="num">MX$3,519</span>). Holiday bonus of 25% of 12 days, tax-free up to 15 UMA (<span class="num">MX$1,760</span>). No income tax on the minimum wage (<span class="num">MX$315.04</span> a day).`] },
    nl: { h: `5 · Premies`, li: [`Eindejaarspremie (aguinaldo) van minstens 15 dagen loon, belastingvrij tot 30 UMA (<span class="num">MX$ 3.519</span>). Vakantiepremie van 25% van 12 dagen, belastingvrij tot 15 UMA (<span class="num">MX$ 1.760</span>). Geen inkomstenbelasting op het minimumloon (<span class="num">MX$ 315,04</span> per dag).`] },
    fr: { h: `5 · Primes`, li: [`Prime de fin d'année (aguinaldo) d'au moins 15 jours de salaire, non imposée jusqu'à 30 UMA (<span class="num">3 519 MX$</span>). Prime de vacances de 25% sur 12 jours, non imposée jusqu'à 15 UMA (<span class="num">1 760 MX$</span>). Pas d'impôt au salaire minimum (<span class="num">315,04 MX$</span> par jour).`] },
  },
  'ref.sub': {
    en: { h: `6 · Work subsidy`, li: [`<span class="num">15.02%</span> of the monthly UMA (<span class="num">MX$535.65</span>) off the monthly income tax, for monthly pay up to <span class="num">MX$11,492.66</span>. Never paid out as cash. The 2026 percentage and limit were not checked against the official decree.`] },
    nl: { h: `6 · Werksubsidie`, li: [`<span class="num">15,02%</span> van de maandelijkse UMA (<span class="num">MX$ 535,65</span>) af van de maandelijkse inkomstenbelasting, voor een maandloon tot <span class="num">MX$ 11.492,66</span>. Nooit in geld uitbetaald. Percentage en grens voor 2026 zijn niet nagekeken in het officiële decreet.`] },
    fr: { h: `6 · Aide à l'emploi`, li: [`<span class="num">15,02%</span> de l'UMA mensuelle (<span class="num">535,65 MX$</span>) retirés de l'impôt mensuel, pour une paie jusqu'à <span class="num">11 492,66 MX$</span> par mois. Jamais versée en argent. Pourcentage et plafond 2026 non vérifiés dans le décret officiel.`] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">16%</span>, applied to all of your net pay as if you spent all of it.`,
      `The VAT hidden in a price = price × r / (100 + r). At 16% that is 16 / 116 = <span class="num">13.79%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">16%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `De btw verstopt in een prijs = prijs × r / (100 + r). Bij 16% is dat 16 / 116 = <span class="num">13,79%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">16%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 16%, cela fait 16 / 116 = <span class="num">13,79%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Federal officials`, li: [
      `Pay after tax per month in the 2026 budget: President <span class="num">MX$134,290</span>, senators <span class="num">MX$131,874</span>, deputies <span class="num">MX$108,935</span>.`,
      `Public servants' social security (ISSSTE): <span class="num">10.625%</span> paid by the official and about <span class="num">20.1%</span> by the government, on base pay up to 10 UMA. Income tax as on any salary.`,
    ] },
    nl: { h: `8 · Federale ambtsdragers`, li: [
      `Loon na belasting per maand in de begroting 2026: president <span class="num">MX$ 134.290</span>, senatoren <span class="num">MX$ 131.874</span>, afgevaardigden <span class="num">MX$ 108.935</span>.`,
      `Sociale zekerheid voor ambtenaren (ISSSTE): <span class="num">10,625%</span> betaald door de ambtsdrager en ongeveer <span class="num">20,1%</span> door de overheid, op het basisloon tot 10 UMA. Inkomstenbelasting zoals op elk loon.`,
    ] },
    fr: { h: `8 · Élus fédéraux`, li: [
      `Paie après impôt par mois au budget 2026 : présidente <span class="num">134 290 MX$</span>, sénateurs <span class="num">131 874 MX$</span>, députés <span class="num">108 935 MX$</span>.`,
      `Sécurité sociale des agents publics (ISSSTE) : <span class="num">10,625%</span> payés par l'élu et environ <span class="num">20,1%</span> par l'État, sur la paie de base jusqu'à 10 UMA. Impôt comme sur tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Profit sharing (PTU, 10% of company profits), savings funds and food vouchers, overtime, long-service bonuses, the higher minimum wage and 8% VAT of the northern border area, work accident rates above the safest class, and personal costs you can deduct in the yearly tax return (medical, home loan interest, school fees, extra retirement savings).`,
      `The figures assume a full year with the same pay each month and the 2026 UMA all year (it applies from February).`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Winstdeling (PTU, 10% van de bedrijfswinst), spaarfondsen en maaltijdbonnen, overuren, anciënniteitspremies, het hogere minimumloon en de 8% btw van de noordelijke grensstreek, tarieven arbeidsongevallen boven de veiligste klasse, en persoonlijke kosten die je in de jaaraangifte kunt aftrekken (medisch, hypotheekrente, schoolgeld, extra pensioensparen).`,
      `De bedragen gaan uit van een volledig jaar met elke maand hetzelfde loon en de UMA van 2026 het hele jaar (die geldt vanaf februari).`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `La participation aux bénéfices (PTU, 10% des bénéfices de l'entreprise), les fonds d'épargne et bons d'alimentation, les heures supplémentaires, les primes d'ancienneté, le salaire minimum plus élevé et la TVA à 8% de la zone frontalière nord, les taux d'accidents du travail au-delà de la classe la plus sûre, et les frais personnels déductibles dans la déclaration annuelle (médicaux, intérêts d'emprunt, frais de scolarité, épargne retraite en plus).`,
      `Les montants supposent une année complète au même salaire chaque mois et l'UMA 2026 toute l'année (elle s'applique depuis février).`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance in Mexico →`,
    nl: `Wat een erfgenaam betaalt op een erfenis in Mexico →`,
    fr: `Ce que paie un héritier sur une succession au Mexique →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip, the SAT and the IMSS decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook, de SAT en het IMSS zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie, le SAT et l'IMSS font foi.`,
  },

  'src.isr': { en: `PwC: ISR tariff 2026`, nl: `PwC: ISR-tabel 2026`, fr: `PwC : barème ISR 2026` },
  'src.exempt': { en: `PwC: exempt employment income`, nl: `PwC: vrijgesteld arbeidsinkomen`, fr: `PwC : revenus salariaux exonérés` },
  'src.other': { en: `PwC: social security, payroll tax, VAT`, nl: `PwC: sociale zekerheid, loonbelasting, btw`, fr: `PwC : sécurité sociale, impôt sur les salaires, TVA` },
  'src.oecd': { en: `OECD Taxing Wages 2025: Mexico`, nl: `OESO Taxing Wages 2025: Mexico`, fr: `OCDE Les impôts sur les salaires 2025 : Mexique` },
  'src.lss': { en: `Social Security Law (LSS)`, nl: `Socialezekerheidswet (LSS)`, fr: `Loi sur la sécurité sociale (LSS)` },
  'src.lisr': { en: `Income Tax Law (LISR)`, nl: `Wet inkomstenbelasting (LISR)`, fr: `Loi de l'impôt sur le revenu (LISR)` },
  'src.sub': { en: `Official Gazette (DOF): employment subsidy decree`, nl: `Staatsblad (DOF): decreet werkgelegenheidssubsidie`, fr: `Journal officiel (DOF) : décret de subvention à l'emploi` },
  'src.isn': { en: `Runa: payroll tax by state 2026`, nl: `Runa: loonbelasting per deelstaat 2026`, fr: `Runa : impôt sur les salaires par État 2026` },
  'src.minWage': { en: `CONASAMI: minimum wage 2026`, nl: `CONASAMI: minimumloon 2026`, fr: `CONASAMI : salaire minimum 2026` },
  'src.lft': { en: `Federal Labour Law (LFT)`, nl: `Federale arbeidswet (LFT)`, fr: `Loi fédérale du travail (LFT)` },
  'src.issste': { en: `ISSSTE Law`, nl: `ISSSTE-wet`, fr: `Loi de l'ISSSTE` },
  'src.pef': { en: `Federal budget 2026 (PEF), annex 23`, nl: `Federale begroting 2026 (PEF), bijlage 23`, fr: `Budget fédéral 2026 (PEF), annexe 23` },

  // Known gaps and caveats
  'gap.noCheck': {
    en: `Researched without searching the web, and the websites of the tax office (SAT), social security (IMSS) and official gazette (DOF) refused or did not respond. No take-home pay was checked against an official calculator.`,
    nl: `Opgezocht zonder op het web te zoeken, en de websites van de belastingdienst (SAT), de sociale zekerheid (IMSS) en het staatsblad (DOF) weigerden of antwoordden niet. Geen enkel nettoloon is nagerekend met een officiële rekentool.`,
    fr: `Recherché sans recherche web, et les sites du fisc (SAT), de la sécurité sociale (IMSS) et du journal officiel (DOF) ont refusé ou n'ont pas répondu. Aucun salaire net n'a été vérifié avec un simulateur officiel.`,
  },
  'gap.sub': {
    en: `Work subsidy: 15.02% of the monthly UMA, for monthly pay up to MX$11,492.66, is from memory and was not read in the 2026 decree. It is taken off the yearly income tax as 12 monthly amounts.`,
    nl: `Werksubsidie: 15,02% van de maandelijkse UMA, voor een maandloon tot MX$ 11.492,66, komt uit het geheugen en is niet gelezen in het decreet van 2026. Ze gaat af van de jaarlijkse inkomstenbelasting als 12 maandbedragen.`,
    fr: `Aide à l'emploi : 15,02% de l'UMA mensuelle, pour une paie jusqu'à 11 492,66 MX$ par mois, vient de mémoire et n'a pas été lue dans le décret 2026. Elle est retirée de l'impôt annuel comme 12 montants mensuels.`,
  },
  'gap.isn': {
    en: `State payroll tax: only Mexico City (4%) is confirmed. Eight states come from a payroll company's web page (not very reliable), and the other 23 are 2 to 3% from memory. Extra charges for education and security are left out.`,
    nl: `Loonbelasting van de deelstaten: alleen Mexico-Stad (4%) is bevestigd. Acht deelstaten komen van de webpagina van een loonbedrijf (weinig betrouwbaar), en de andere 23 zijn 2 tot 3% uit het geheugen. Extra heffingen voor onderwijs en veiligheid zijn weggelaten.`,
    fr: `Impôt sur les salaires des États : seule Mexico (4%) est confirmée. Huit États viennent de la page web d'une société de paie (peu fiable), et les 23 autres sont de 2 à 3% de mémoire. Les suppléments pour l'éducation et la sécurité sont laissés de côté.`,
  },
  'gap.rt': {
    en: `Work accident insurance uses the rate for the safest jobs, 0.54355%, from memory. The real rate goes from about 0.5% to 15% depending on how risky the firm's work is.`,
    nl: `De verzekering arbeidsongevallen gebruikt het tarief voor de veiligste banen, 0,54355%, uit het geheugen. Het echte tarief gaat van ongeveer 0,5% tot 15% naargelang hoe riskant het werk in het bedrijf is.`,
    fr: `L'assurance accidents du travail utilise le taux des emplois les plus sûrs, 0,54355%, de mémoire. Le vrai taux va d'environ 0,5% à 15% selon le risque du travail dans l'entreprise.`,
  },
  'gap.minWage': {
    en: `On the minimum wage, no income tax and the employer paying the worker's social security share both come from memory of the laws (LISR art. 96, LSS art. 36), not from reading them.`,
    nl: `Op het minimumloon komen geen inkomstenbelasting en de werkgever die het deel sociale zekerheid van de werknemer betaalt allebei uit het geheugen van de wetten (LISR art. 96, LSS art. 36), niet uit de tekst zelf.`,
    fr: `Au salaire minimum, l'absence d'impôt et la part de sécurité sociale du salarié payée par l'employeur viennent toutes deux de mémoire des lois (LISR art. 96, LSS art. 36), pas de leur lecture.`,
  },
  'gap.issste': {
    en: `Officials' social security (10.625% paid by them, 20.145% by the government with the FOVISSSTE housing fund, on base pay up to 10 UMA) is from memory and not very reliable.`,
    nl: `De sociale zekerheid van ambtsdragers (10,625% door henzelf, 20,145% door de overheid met het woonfonds FOVISSSTE, op het basisloon tot 10 UMA) komt uit het geheugen en is weinig betrouwbaar.`,
    fr: `La sécurité sociale des élus (10,625% à leur charge, 20,145% à celle de l'État avec le fonds de logement FOVISSSTE, sur la paie de base jusqu'à 10 UMA) vient de mémoire et est peu fiable.`,
  },
  'gap.pef': {
    en: `Politicians' pay comes from Spanish Wikipedia, quoting the 2026 budget. The deputies' MX$108,935 a month is listed as "total pay" and read here as after tax; it may be before tax.`,
    nl: `Het loon van politici komt van de Spaanse Wikipedia, die de begroting 2026 aanhaalt. De MX$ 108.935 per maand van de afgevaardigden staat er als "totaal loon" en wordt hier gelezen als na belasting; het kan vóór belasting zijn.`,
    fr: `La paie des politiciens vient de Wikipédia en espagnol, qui cite le budget 2026. Les 108 935 MX$ par mois des députés sont indiqués comme « paie totale » et lus ici comme après impôt ; ce pourrait être avant impôt.`,
  },
  'gap.polBonus': {
    en: `Politicians are paid 12 times a year here; their year-end bonus is left out.`,
    nl: `Politici worden hier 12 keer per jaar betaald; hun eindejaarsbonus is weggelaten.`,
    fr: `Les responsables sont payés 12 fois par an ici ; leur prime de fin d'année est laissée de côté.`,
  },
  'gap.avg': {
    en: `The average wage (about MX$640 a day, IMSS 2025) is from memory and not very reliable. There is no median wage line (the pay that half of employees are above).`,
    nl: `Het gemiddelde loon (ongeveer MX$ 640 per dag, IMSS 2025) komt uit het geheugen en is weinig betrouwbaar. Er is geen lijn voor het mediaanloon (het loon waar de helft van de werknemers boven zit).`,
    fr: `Le salaire moyen (environ 640 MX$ par jour, IMSS 2025) vient de mémoire et est peu fiable. Pas de ligne pour le salaire médian (celui au-dessus duquel se trouve la moitié des salariés).`,
  },
  'gap.notIncl': {
    en: `The northern border area, profit sharing, vouchers, yearly deductions and the rest of "What's not included" are left out.`,
    nl: `De noordelijke grensstreek, winstdeling, bonnen, jaarlijkse aftrekken en de rest van "Wat niet is meegerekend" ontbreken.`,
    fr: `La zone frontalière nord, la participation aux bénéfices, les bons, les déductions annuelles et le reste de « Ce qui n'est pas inclus » sont laissés de côté.`,
  },
};
