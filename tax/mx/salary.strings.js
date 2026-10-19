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
    en: `Mexico taxes each person on their own pay, with no joint return and no allowance for children. Your partner's pay changes nothing here.`,
    nl: `Mexico belast ieder op het eigen loon, zonder gezamenlijke aangifte en zonder aftrek voor kinderen. Het loon van je partner verandert hier niets.`,
    fr: `Le Mexique impose chacun sur son propre salaire, sans déclaration commune ni abattement pour enfants. Le salaire de votre partenaire ne change rien ici.`,
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
    en: r => `Your employer pays ${r} of all pay to the state where you work. You don't see it on your payslip.`,
    nl: r => `Je werkgever betaalt ${r} van alle loon aan de deelstaat waar je werkt. Je ziet het niet op je loonstrook.`,
    fr: r => `Votre employeur verse ${r} de toute la rémunération à l'État où vous travaillez. Cela n'apparaît pas sur votre fiche de paie.`,
  },
  vatStandard: { en: `(Mexico's standard rate is 16%, 8% in the northern border region)`, nl: `(het Mexicaanse normale tarief is 16%, 8% in de noordelijke grensregio)`, fr: `(le taux normal mexicain est de 16%, 8% dans la région frontalière nord)` },

  // Minister mode
  ministerOn: { en: `🏛️ I AM A FEDERAL OFFICIAL`, nl: `🏛️ IK BEN FEDERAAL AMBTSDRAGER`, fr: `🏛️ JE SUIS ÉLU FÉDÉRAL` },
  'minRole.pres': { en: `President`, nl: `President`, fr: `Présidente` },
  'minRole.sen': { en: `Senator`, nl: `Senator`, fr: `Sénateur` },
  'minRole.dip': { en: `Federal deputy`, nl: `Federaal afgevaardigde`, fr: `Député fédéral` },
  ministerHint: {
    en: `Pay set by the 2026 federal budget (PEF), which publishes it net. The gross here is what nets that much with ISSSTE contributions and ISR. Paid 12 times a year, year-end bonus left out.`,
    nl: `Loon vastgelegd in de federale begroting 2026 (PEF), die het netto publiceert. Het bruto hier is wat zoveel netto oplevert met ISSSTE-bijdragen en ISR. 12 keer per jaar betaald, eindejaarspremie niet meegeteld.`,
    fr: `Rémunération fixée par le budget fédéral 2026 (PEF), qui la publie en net. Le brut ici est ce qui donne ce net avec les cotisations ISSSTE et l'ISR. Versée 12 fois par an, prime de fin d'année non comptée.`,
  },
  minSalaryHint: {
    en: `Yearly gross, monthly amount × 12. Derived from the budget's net amount by default.`,
    nl: `Jaarlijks bruto, maandbedrag × 12. Standaard afgeleid van het nettobedrag in de begroting.`,
    fr: `Brut annuel, montant mensuel × 12. Déduit par défaut du montant net du budget.`,
  },
  'tip.ministerRules': {
    en: `Federal officials are covered by ISSSTE, not IMSS, and pay ISR like any employee. No state payroll tax is counted. The budget (PEF 2026) gives the President MX$134,290 a month net, senators MX$131,874 and deputies MX$108,935 (published as their total pay, read here as net). By the Constitution (art. 127) no public servant may earn more than the President.`,
    nl: `Federale ambtsdragers vallen onder het ISSSTE, niet onder het IMSS, en betalen ISR zoals elke werknemer. Er wordt geen loonbelasting van de deelstaat meegeteld. De begroting (PEF 2026) geeft de presidente MX$ 134.290 per maand netto, senatoren MX$ 131.874 en afgevaardigden MX$ 108.935 (gepubliceerd als hun totale loon, hier gelezen als netto). Volgens de grondwet (art. 127) mag geen ambtenaar meer verdienen dan de president.`,
    fr: `Les élus fédéraux relèvent de l'ISSSTE, pas de l'IMSS, et paient l'ISR comme tout salarié. Aucun impôt sur les salaires d'État n'est compté. Le budget (PEF 2026) donne à la présidente 134 290 MX$ net par mois, aux sénateurs 131 874 MX$ et aux députés 108 935 MX$ (publié comme leur rémunération totale, lu ici comme un net). Selon la Constitution (art. 127), aucun agent public ne peut gagner plus que le président.`,
  },
  'bd.minGross': { en: `Gross pay (derived)`, nl: `Brutoloon (afgeleid)`, fr: `Rémunération brute (déduite)` },
  'bd.stateCost': { en: `Cost to the state`, nl: `Kost voor de staat`, fr: `Coût pour l'État` },
  'tip.minGross': {
    en: `The budget publishes net pay. This is the gross that nets the same once ISSSTE contributions and ISR are taken.`,
    nl: `De begroting publiceert het nettoloon. Dit is het bruto dat hetzelfde netto oplevert na ISSSTE-bijdragen en ISR.`,
    fr: `Le budget publie la rémunération nette. Voici le brut qui donne le même net une fois les cotisations ISSSTE et l'ISR retenus.`,
  },
  'tip.stateCost': { en: `Gross pay + the government's ISSSTE and FOVISSSTE contributions.`, nl: `Brutoloon + de ISSSTE- en FOVISSSTE-bijdragen van de overheid.`, fr: `Brut + les cotisations ISSSTE et FOVISSSTE de l'État.` },
  'comp.erMin': { en: `Government ISSSTE contributions`, nl: `ISSSTE-bijdragen overheid`, fr: `Cotisations ISSSTE de l'État` },
  'comp.eeMin': { en: `Your ISSSTE contributions`, nl: `Jouw ISSSTE-bijdragen`, fr: `Vos cotisations ISSSTE` },
  'tip.minEr': {
    en: cap => `About 20.1% of base pay up to ${cap} a month: health, pensioners' health, disability and life, work risk, social services, retirement, old age, and 5% to the FOVISSSTE housing fund.`,
    nl: cap => `Ongeveer 20,1% van het basisloon tot ${cap} per maand: gezondheid, gezondheid gepensioneerden, invaliditeit en leven, arbeidsrisico, sociale diensten, pensioen, ouderdom, en 5% voor het woonfonds FOVISSSTE.`,
    fr: cap => `Environ 20,1% de la rémunération de base jusqu'à ${cap} par mois : santé, santé des retraités, invalidité et vie, risques professionnels, services sociaux, retraite, vieillesse, et 5% au fonds de logement FOVISSSTE.`,
  },
  'tip.minEe': {
    en: cap => `10.625% of base pay up to ${cap} a month: 6.125% to your retirement account, 2.75% health, 0.625% pensioners' health, 0.625% disability and life, 0.5% social services.`,
    nl: cap => `10,625% van het basisloon tot ${cap} per maand: 6,125% naar je pensioenrekening, 2,75% gezondheid, 0,625% gezondheid gepensioneerden, 0,625% invaliditeit en leven, 0,5% sociale diensten.`,
    fr: cap => `10,625% de la rémunération de base jusqu'à ${cap} par mois : 6,125% sur votre compte retraite, 2,75% santé, 0,625% santé des retraités, 0,625% invalidité et vie, 0,5% services sociaux.`,
  },
  'tip.minIsn': {
    en: `Not counted for federal officials: most states exempt the federal government from their payroll tax.`,
    nl: `Niet meegeteld voor federale ambtsdragers: de meeste deelstaten stellen de federale overheid vrij van hun loonbelasting.`,
    fr: `Non compté pour les élus fédéraux : la plupart des États exonèrent le gouvernement fédéral de leur impôt sur les salaires.`,
  },

  // Politicians on the chart
  'stat.pres': { en: `President`, nl: `President`, fr: `Présidente` },
  'stat.sen': { en: `Senator`, nl: `Senator`, fr: `Sénateur` },
  'stat.dip': { en: `Federal deputy`, nl: `Federaal afgevaardigde`, fr: `Député fédéral` },
  'pol.stat.pres': { en: `MX$134,290 a month net (PEF 2026)`, nl: `MX$ 134.290 per maand netto (PEF 2026)`, fr: `134 290 MX$ net par mois (PEF 2026)` },
  'pol.stat.sen': { en: `MX$131,874 a month net (PEF 2026)`, nl: `MX$ 131.874 per maand netto (PEF 2026)`, fr: `131 874 MX$ net par mois (PEF 2026)` },
  'pol.stat.dip': { en: `MX$108,935 a month (PEF 2026)`, nl: `MX$ 108.935 per maand (PEF 2026)`, fr: `108 935 MX$ par mois (PEF 2026)` },
  'polNote.stat': {
    en: `Under ISSSTE with ISR. The head sits where a private employee would net the same.`,
    nl: `Onder het ISSSTE met ISR. Het hoofdje staat waar een werknemer in de privésector hetzelfde netto krijgt.`,
    fr: `Sous l'ISSSTE avec l'ISR. La tête est placée là où un salarié du privé toucherait le même net.`,
  },
  'polTipNote.pres': {
    en: `Claudia Sheinbaum. MX$134,290 a month net in 2026, the ceiling for every public servant.`,
    nl: `Claudia Sheinbaum. MX$ 134.290 per maand netto in 2026, het plafond voor elke ambtenaar.`,
    fr: `Claudia Sheinbaum. 134 290 MX$ net par mois en 2026, le plafond de tout agent public.`,
  },
  'polTipNote.sen': {
    en: `Ordinary net pay of a senator in 2026. Office and staff budgets come on top and aren't counted.`,
    nl: `Gewoon nettoloon van een senator in 2026. Budgetten voor kantoor en medewerkers komen erbovenop en tellen niet mee.`,
    fr: `Rémunération nette ordinaire d'un sénateur en 2026. Les budgets de bureau et de personnel s'ajoutent et ne sont pas comptés.`,
  },
  'polTipNote.dip': {
    en: `Total pay of a federal deputy in 2026 as listed in the budget, read as net (unconfirmed). Legislative support allowances aren't counted.`,
    nl: `Totaal loon van een federaal afgevaardigde in 2026 volgens de begroting, gelezen als netto (niet bevestigd). Vergoedingen voor wetgevend werk tellen niet mee.`,
    fr: `Rémunération totale d'un député fédéral en 2026 selon le budget, lue comme un net (non confirmé). Les indemnités d'assistance législative ne sont pas comptées.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. The budget publishes net pay; each head sits where a private employee paid 12.6 months would net the same. Year-end bonuses left out. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. De begroting publiceert het nettoloon; elk hoofdje staat waar een werknemer in de privésector met 12,6 maanden hetzelfde netto krijgt. Eindejaarspremies niet meegeteld. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Le budget publie la rémunération nette ; chaque tête est placée là où un salarié du privé payé 12,6 mois toucherait le même net. Primes de fin d'année non comptées. Sources : ${links}.`,
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
      ? `On the minimum wage of ${a}, no ISR is withheld and the employer pays your IMSS share too. One peso more and both come back at once: about 2.4% IMSS and ISR on the whole pay. The employment subsidy of ${sub} a month softens the ISR up to ${b}, then stops all at once, a second cliff.`
      : `On the minimum wage of ${a}, no ISR is withheld and the employer pays your IMSS share. Federal officials don't get the employment subsidy.`,
    nl: (a, b, sub) => b
      ? `Op het minimumloon van ${a} wordt geen ISR ingehouden en betaalt de werkgever ook jouw IMSS-deel. Eén peso meer en beide komen in één keer terug: ongeveer 2,4% IMSS en ISR op het hele loon. De werkgelegenheidssubsidie van ${sub} per maand verzacht de ISR tot ${b}, en stopt dan in één keer, een tweede klif.`
      : `Op het minimumloon van ${a} wordt geen ISR ingehouden en betaalt de werkgever jouw IMSS-deel. Federale ambtsdragers krijgen de werkgelegenheidssubsidie niet.`,
    fr: (a, b, sub) => b
      ? `Au salaire minimum de ${a}, aucun ISR n'est retenu et l'employeur paie aussi votre part IMSS. Un peso de plus et les deux reviennent d'un coup : environ 2,4% d'IMSS et l'ISR sur tout le salaire. La subvention à l'emploi de ${sub} par mois adoucit l'ISR jusqu'à ${b}, puis s'arrête d'un coup, une deuxième falaise.`
      : `Au salaire minimum de ${a}, aucun ISR n'est retenu et l'employeur paie votre part IMSS. Les élus fédéraux n'ont pas la subvention à l'emploi.`,
  },
  topTitle: {
    en: top => `What happens at ${top}?`,
    nl: top => `Wat gebeurt er bij ${top}?`,
    fr: top => `Que se passe-t-il à ${top} ?`,
  },
  topBody: {
    en: top => `From ${top}, taxable income passes MX$5,107,704 a year and each extra peso is taxed at 35%, the top rate. Far lower, at 25 UMA (MX$2,933 a day, about MX$85,000 a month on 12.6 payments), IMSS, retirement and housing contributions stop at their ceiling and the rate falls back.`,
    nl: top => `Vanaf ${top} komt het belastbare inkomen boven MX$ 5.107.704 per jaar en wordt elke extra peso belast aan 35%, het toptarief. Veel lager, bij 25 UMA (MX$ 2.933 per dag, ongeveer MX$ 85.000 per maand bij 12,6 betalingen), stoppen de IMSS-, pensioen- en woonbijdragen aan hun plafond en daalt het tarief weer.`,
    fr: top => `À partir de ${top}, le revenu imposable dépasse 5 107 704 MX$ par an et chaque peso en plus est imposé à 35%, le taux maximal. Bien plus bas, à 25 UMA (2 933 MX$ par jour, environ 85 000 MX$ par mois sur 12,6 versements), les cotisations IMSS, retraite et logement atteignent leur plafond et le taux redescend.`,
  },

  // Tax components
  'comp.er': { en: `Employer IMSS contributions`, nl: `IMSS-bijdragen werkgever`, fr: `Cotisations patronales IMSS` },
  'comp.sar': { en: `Retirement account (AFORE)`, nl: `Pensioenrekening (AFORE)`, fr: `Compte retraite (AFORE)` },
  'comp.inf': { en: `Housing fund (INFONAVIT)`, nl: `Woonfonds (INFONAVIT)`, fr: `Fonds de logement (INFONAVIT)` },
  'comp.isn': { en: `State payroll tax (ISN)`, nl: `Loonbelasting deelstaat (ISN)`, fr: `Impôt sur les salaires (ISN)` },
  'comp.ee': { en: `Your IMSS contributions`, nl: `Jouw IMSS-bijdragen`, fr: `Vos cotisations IMSS` },
  'comp.isr': { en: `Income tax (ISR)`, nl: `Inkomstenbelasting (ISR)`, fr: `Impôt sur le revenu (ISR)` },
  'bd.taxable': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.exAg': { en: `Exempt part of the year-end bonus`, nl: `Vrijgesteld deel eindejaarspremie`, fr: `Part exonérée de la prime de fin d'année` },
  'bd.exPv': { en: `Exempt part of the vacation premium`, nl: `Vrijgesteld deel vakantiepremie`, fr: `Part exonérée de la prime de vacances` },
  'bd.isrGross': { en: `ISR on the tariff`, nl: `ISR volgens de tabel`, fr: `ISR selon le barème` },
  'bd.sub': { en: `Employment subsidy`, nl: `Werkgelegenheidssubsidie`, fr: `Subvention à l'emploi` },
  'er.fija': { en: `Fixed health fee, 20.40% of the UMA per day`, nl: `Vaste gezondheidsbijdrage, 20,40% van de UMA per dag`, fr: `Cotisation santé fixe, 20,40% de l'UMA par jour` },
  'er.shifted': { en: `Your IMSS share, paid by the employer on the minimum wage`, nl: `Jouw IMSS-deel, betaald door de werkgever op het minimumloon`, fr: `Votre part IMSS, payée par l'employeur au salaire minimum` },
  'er.ret': { en: `Retirement`, nl: `Pensioen`, fr: `Retraite` },
  'er.cv': { en: `Old age and severance`, nl: `Ouderdom en vroegpensioen`, fr: `Vieillesse et cessation` },

  // Tooltips
  'tip.f126': {
    en: (ag, pv) => `12 monthly salaries plus the legal minimum bonuses: a year-end bonus (aguinaldo) of 15 days, paid by 20 December, and a vacation premium of 25% on the 12 days of first-year leave, so 3 days. Both count for IMSS; for ISR the aguinaldo is exempt up to ${ag} and the premium up to ${pv}.`,
    nl: (ag, pv) => `12 maandlonen plus de wettelijke minimale premies: een eindejaarspremie (aguinaldo) van 15 dagen, te betalen vóór 20 december, en een vakantiepremie van 25% op de 12 verlofdagen van het eerste jaar, dus 3 dagen. Beide tellen voor het IMSS; voor de ISR is de aguinaldo vrijgesteld tot ${ag} en de premie tot ${pv}.`,
    fr: (ag, pv) => `12 salaires mensuels plus les primes légales minimales : une prime de fin d'année (aguinaldo) de 15 jours, versée avant le 20 décembre, et une prime de vacances de 25% sur les 12 jours de congé de la première année, soit 3 jours. Les deux comptent pour l'IMSS ; pour l'ISR, l'aguinaldo est exonéré jusqu'à ${ag} et la prime jusqu'à ${pv}.`,
  },
  'tip.f12': {
    en: `12 payments, as if the bonuses were folded into the monthly pay. The legal aguinaldo and vacation premium are compulsory, so this mostly helps compare with other countries.`,
    nl: `12 betalingen, alsof de premies in het maandloon zitten. De wettelijke aguinaldo en vakantiepremie zijn verplicht, dus dit dient vooral om met andere landen te vergelijken.`,
    fr: `12 versements, comme si les primes étaient intégrées au salaire mensuel. L'aguinaldo et la prime de vacances légales sont obligatoires : cette option sert surtout à comparer avec d'autres pays.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `There is no joint return and no deduction for a spouse or children. Each person files on their own income, so your partner's pay doesn't change your tax.`,
    nl: `Er is geen gezamenlijke aangifte en geen aftrek voor een partner of kinderen. Ieder doet aangifte over het eigen inkomen, dus het loon van je partner verandert jouw belasting niet.`,
    fr: `Il n'y a ni déclaration commune ni déduction pour un conjoint ou des enfants. Chacun déclare son propre revenu : le salaire de votre partenaire ne change pas votre impôt.`,
  },
  'tip.isnRule': {
    en: `Each state sets its own payroll tax, paid by the employer on all pay including bonuses. Mexico City charges 4% since 2025; most states charge 2 to 3%, some with surcharges or small-firm discounts. Pick your state above, or set the rate here.`,
    nl: `Elke deelstaat bepaalt zijn eigen loonbelasting, betaald door de werkgever op alle loon inclusief premies. Mexico-Stad heft 4% sinds 2025; de meeste deelstaten 2 tot 3%, sommige met opcentiemen of kortingen voor kleine bedrijven. Kies je deelstaat hierboven of stel het tarief hier in.`,
    fr: `Chaque État fixe son impôt sur les salaires, payé par l'employeur sur toute la rémunération, primes comprises. Mexico applique 4% depuis 2025 ; la plupart des États 2 à 3%, certains avec des surtaxes ou des remises pour les petites entreprises. Choisissez votre État ci-dessus ou réglez le taux ici.`,
  },
  'tip.costShort': {
    en: `Gross salary + employer IMSS, retirement account, INFONAVIT and state payroll tax.`,
    nl: `Brutoloon + IMSS-bijdragen werkgever, pensioenrekening, INFONAVIT en loonbelasting van de deelstaat.`,
    fr: `Salaire brut + cotisations patronales IMSS, compte retraite, INFONAVIT et impôt sur les salaires de l'État.`,
  },
  'tip.er': {
    en: uma => `Paid by your employer for health, maternity, disability and life, childcare and work injuries. Most is a share of your base wage (daily pay with bonuses spread over the year), but a fixed 20.40% of the UMA (${uma} a day) is due whatever you earn, which weighs most on low pay. Work-injury premium at 0.54355%, the lowest risk class.`,
    nl: uma => `Betaald door je werkgever voor gezondheid, moederschap, invaliditeit en leven, kinderopvang en arbeidsongevallen. Het meeste is een deel van je basisloon (dagloon met premies gespreid over het jaar), maar een vaste 20,40% van de UMA (${uma} per dag) is verschuldigd wat je ook verdient, wat zwaarder weegt op lage lonen. Premie arbeidsongevallen aan 0,54355%, de laagste risicoklasse.`,
    fr: uma => `Payées par votre employeur pour la santé, la maternité, l'invalidité et la vie, la garde d'enfants et les accidents du travail. L'essentiel est une part de votre salaire de base (salaire journalier avec les primes réparties sur l'année), mais 20,40% fixes de l'UMA (${uma} par jour) sont dus quel que soit le salaire, ce qui pèse surtout sur les bas salaires. Prime d'accidents du travail à 0,54355%, la classe de risque la plus basse.`,
  },
  'tip.sar': {
    en: `Paid by your employer into your own AFORE retirement account: 2% for retirement plus the old-age share, which the 2020 reform raises each year until 2030. In 2026 it runs from 3.15% on the minimum wage to 7.513% above 4 UMA. Compulsory, so counted as a tax here, but the money is yours.`,
    nl: `Betaald door je werkgever op je eigen AFORE-pensioenrekening: 2% voor pensioen plus het ouderdomsdeel, dat de hervorming van 2020 elk jaar optrekt tot 2030. In 2026 gaat het van 3,15% op het minimumloon tot 7,513% boven 4 UMA. Verplicht, dus hier als belasting geteld, maar het geld is van jou.`,
    fr: `Versées par votre employeur sur votre propre compte retraite AFORE : 2% pour la retraite plus la part vieillesse, que la réforme de 2020 relève chaque année jusqu'en 2030. En 2026, elle va de 3,15% au salaire minimum à 7,513% au-delà de 4 UMA. Obligatoire, donc comptée ici comme un prélèvement, mais l'argent est à vous.`,
  },
  'tip.inf': {
    en: `5% of your base wage, paid by your employer into your INFONAVIT housing account. It can fund a mortgage, or comes back with your pension if unused.`,
    nl: `5% van je basisloon, betaald door je werkgever op je INFONAVIT-woonrekening. Het kan een hypotheek financieren, of komt terug met je pensioen als je het niet gebruikt.`,
    fr: `5% de votre salaire de base, versés par votre employeur sur votre compte logement INFONAVIT. Il peut financer un prêt immobilier, ou revient avec votre retraite s'il n'est pas utilisé.`,
  },
  'tip.isn': {
    en: `A state tax on the payroll, paid by your employer on everything it pays you, bonuses included, with no ceiling.`,
    nl: `Een deelstaatbelasting op de loonmassa, betaald door je werkgever op alles wat je krijgt, premies inbegrepen, zonder plafond.`,
    fr: `Un impôt de l'État fédéré sur la masse salariale, payé par votre employeur sur tout ce qu'il vous verse, primes comprises, sans plafond.`,
  },
  'tip.isnM': {
    en: `State rates are approximations: only Mexico City (4%) was confirmed against a current source. Some states add surtaxes for education or security.`,
    nl: `De tarieven per deelstaat zijn benaderingen: alleen Mexico-Stad (4%) is met een actuele bron bevestigd. Sommige deelstaten heffen opcentiemen voor onderwijs of veiligheid.`,
    fr: `Les taux par État sont approximatifs : seule Mexico (4%) a été confirmée par une source récente. Certains États ajoutent des surtaxes pour l'éducation ou la sécurité.`,
  },
  'tip.ee': {
    en: `Withheld from your pay for IMSS: 0.25% cash sickness benefits, 0.375% pensioners' health, 0.625% disability and life, 1.125% old age to your AFORE, plus 0.40% on the part of your base wage above 3 UMA. Not deductible from ISR.`,
    nl: `Ingehouden op je loon voor het IMSS: 0,25% ziekte-uitkeringen, 0,375% gezondheid gepensioneerden, 0,625% invaliditeit en leven, 1,125% ouderdom naar je AFORE, plus 0,40% op het deel van je basisloon boven 3 UMA. Niet aftrekbaar van de ISR.`,
    fr: `Retenues sur votre salaire pour l'IMSS : 0,25% indemnités maladie, 0,375% santé des retraités, 0,625% invalidité et vie, 1,125% vieillesse vers votre AFORE, plus 0,40% sur la part du salaire de base au-delà de 3 UMA. Non déductibles de l'ISR.`,
  },
  'tip.capped': {
    en: cap => `Your base wage is above the ceiling of 25 UMA (${cap} a day): the part above pays no IMSS, retirement or housing contributions.`,
    nl: cap => `Je basisloon ligt boven het plafond van 25 UMA (${cap} per dag): het deel daarboven betaalt geen IMSS-, pensioen- of woonbijdragen.`,
    fr: cap => `Votre salaire de base dépasse le plafond de 25 UMA (${cap} par jour) : la part au-delà ne cotise ni à l'IMSS, ni à la retraite, ni au logement.`,
  },
  'tip.taxable': {
    en: (ag, pv) => `Gross pay minus the exempt part of the bonuses: the aguinaldo up to 30 UMA (${ag}) and the vacation premium up to 15 UMA (${pv}). IMSS contributions are not deducted.`,
    nl: (ag, pv) => `Brutoloon min het vrijgestelde deel van de premies: de aguinaldo tot 30 UMA (${ag}) en de vakantiepremie tot 15 UMA (${pv}). IMSS-bijdragen worden niet afgetrokken.`,
    fr: (ag, pv) => `Salaire brut moins la part exonérée des primes : l'aguinaldo jusqu'à 30 UMA (${ag}) et la prime de vacances jusqu'à 15 UMA (${pv}). Les cotisations IMSS ne sont pas déduites.`,
  },
  'tip.isrGross': {
    en: `The 2026 tariff gives a fixed fee for your bracket plus its rate on the excess, from 1.92% to 35%. Brackets were raised by 13.2% for 2026, the first update since 2023.`,
    nl: `De tabel van 2026 geeft een vast bedrag voor je schijf plus het tarief op het overschot, van 1,92% tot 35%. De schijven zijn voor 2026 met 13,2% opgetrokken, de eerste aanpassing sinds 2023.`,
    fr: `Le barème 2026 donne un montant fixe pour votre tranche plus son taux sur l'excédent, de 1,92% à 35%. Les tranches ont été relevées de 13,2% pour 2026, première mise à jour depuis 2023.`,
  },
  'tip.fee': { en: lo => `Fixed fee up to ${lo}`, nl: lo => `Vast bedrag tot ${lo}`, fr: lo => `Montant fixe jusqu'à ${lo}` },
  'tip.sub': {
    en: (amt, lim) => `If your monthly wage is at most ${lim}, the employer takes ${amt} a month off your ISR (15.02% of the monthly UMA). It only cancels tax: it is never paid out and doesn't carry over. Above the limit it stops entirely.`,
    nl: (amt, lim) => `Is je maandloon hoogstens ${lim}, dan trekt de werkgever ${amt} per maand af van je ISR (15,02% van de maandelijkse UMA). Het schrapt alleen belasting: het wordt nooit uitbetaald en niet overgedragen. Boven de grens stopt het volledig.`,
    fr: (amt, lim) => `Si votre salaire mensuel ne dépasse pas ${lim}, l'employeur retire ${amt} par mois de votre ISR (15,02% de l'UMA mensuelle). Elle ne fait qu'annuler de l'impôt : jamais versée, jamais reportée. Au-delà du plafond, elle disparaît entièrement.`,
  },
  'tip.subNone': { en: `Your monthly wage is above the limit: no subsidy.`, nl: `Je maandloon ligt boven de grens: geen subsidie.`, fr: `Votre salaire mensuel dépasse le plafond : pas de subvention.` },
  'tip.isr': {
    en: mw => `Withheld each month and settled by the employer at year end. Workers who earn only the minimum wage (${mw} a month) have no ISR withheld.`,
    nl: mw => `Elke maand ingehouden en op het einde van het jaar door de werkgever verrekend. Wie enkel het minimumloon verdient (${mw} per maand), heeft geen ISR-inhouding.`,
    fr: mw => `Retenu chaque mois et régularisé par l'employeur en fin d'année. Les salariés payés au seul salaire minimum (${mw} par mois) n'ont pas de retenue d'ISR.`,
  },
  'tip.isrMin': { en: `You earn the minimum wage: no ISR.`, nl: `Je verdient het minimumloon: geen ISR.`, fr: `Vous êtes au salaire minimum : pas d'ISR.` },
  'tip.vatM': {
    en: `Food, medicine and books are at 0%, rent and some services are exempt, and the northern border region pays 8%, so this is an upper bound. Excise taxes (IEPS) on fuel, alcohol, tobacco and sugary drinks aren't counted.`,
    nl: `Voeding, geneesmiddelen en boeken hebben 0%, huur en sommige diensten zijn vrijgesteld, en de noordelijke grensregio betaalt 8%, dus dit is een bovengrens. Accijnzen (IEPS) op brandstof, alcohol, tabak en suikerdranken tellen niet mee.`,
    fr: `L'alimentation, les médicaments et les livres sont à 0%, les loyers et certains services sont exonérés, et la région frontalière nord paie 8% : c'est donc un maximum. Les accises (IEPS) sur les carburants, l'alcool, le tabac et les boissons sucrées ne sont pas comptées.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − IMSS − ISR.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − IMSS − ISR.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − IMSS − ISR.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `IMSS: <span class="num">20.40%</span> of the UMA per day, <span class="num">1.10%</span> of the base wage above 3 UMA, then <span class="num">0.70%</span> + <span class="num">1.05%</span> + <span class="num">1.75%</span> + <span class="num">1%</span> + work risk <span class="num">0.54355%</span> of the base wage.`,
      `Retirement <span class="num">2%</span> and old age <span class="num">3.15%</span> (minimum wage) to <span class="num">7.513%</span> (above 4 UMA) into your AFORE, INFONAVIT <span class="num">5%</span>.`,
      `Base wage = yearly pay ÷ 365, up to 25 UMA (<span class="num">MX$2,932.75</span> a day). UMA <span class="num">MX$117.31</span> from February 2026.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `IMSS: <span class="num">20,40%</span> van de UMA per dag, <span class="num">1,10%</span> van het basisloon boven 3 UMA, dan <span class="num">0,70%</span> + <span class="num">1,05%</span> + <span class="num">1,75%</span> + <span class="num">1%</span> + arbeidsrisico <span class="num">0,54355%</span> van het basisloon.`,
      `Pensioen <span class="num">2%</span> en ouderdom <span class="num">3,15%</span> (minimumloon) tot <span class="num">7,513%</span> (boven 4 UMA) naar je AFORE, INFONAVIT <span class="num">5%</span>.`,
      `Basisloon = jaarloon ÷ 365, tot 25 UMA (<span class="num">MX$ 2.932,75</span> per dag). UMA <span class="num">MX$ 117,31</span> vanaf februari 2026.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `IMSS : <span class="num">20,40%</span> de l'UMA par jour, <span class="num">1,10%</span> du salaire de base au-delà de 3 UMA, puis <span class="num">0,70%</span> + <span class="num">1,05%</span> + <span class="num">1,75%</span> + <span class="num">1%</span> + risques professionnels <span class="num">0,54355%</span> du salaire de base.`,
      `Retraite <span class="num">2%</span> et vieillesse de <span class="num">3,15%</span> (salaire minimum) à <span class="num">7,513%</span> (au-delà de 4 UMA) sur votre AFORE, INFONAVIT <span class="num">5%</span>.`,
      `Salaire de base = rémunération annuelle ÷ 365, jusqu'à 25 UMA (<span class="num">2 932,75 MX$</span> par jour). UMA <span class="num">117,31 MX$</span> depuis février 2026.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [`IMSS <span class="num">2.375%</span> of the base wage, plus <span class="num">0.40%</span> above 3 UMA, same ceiling. Paid by the employer on the minimum wage (art. 36 of the Social Security Law).`] },
    nl: { h: `2 · Werknemersbijdragen`, li: [`IMSS <span class="num">2,375%</span> van het basisloon, plus <span class="num">0,40%</span> boven 3 UMA, zelfde plafond. Op het minimumloon betaald door de werkgever (art. 36 van de socialezekerheidswet).`] },
    fr: { h: `2 · Cotisations salariales`, li: [`IMSS <span class="num">2,375%</span> du salaire de base, plus <span class="num">0,40%</span> au-delà de 3 UMA, même plafond. Payées par l'employeur au salaire minimum (art. 36 de la loi sur la sécurité sociale).`] },
  },
  'ref.isn': {
    en: { h: `3 · State payroll tax`, li: [`Employer, on all pay: Mexico City <span class="num">4%</span>, other states <span class="num">2%</span> to <span class="num">4%</span>. Rates outside Mexico City are approximate.`] },
    nl: { h: `3 · Loonbelasting deelstaat`, li: [`Werkgever, op alle loon: Mexico-Stad <span class="num">4%</span>, andere deelstaten <span class="num">2%</span> tot <span class="num">4%</span>. Tarieven buiten Mexico-Stad zijn bij benadering.`] },
    fr: { h: `3 · Impôt sur les salaires des États`, li: [`Employeur, sur toute la rémunération : Mexico <span class="num">4%</span>, autres États de <span class="num">2%</span> à <span class="num">4%</span>. Taux hors Mexico approximatifs.`] },
  },
  'ref.ir': {
    en: br => ({ h: `4 · Income tax (ISR)`, li: [`Yearly tariff on taxable income (rates on each slice; the law gives fixed fees per bracket, same result):${br}`] }),
    nl: br => ({ h: `4 · Inkomstenbelasting (ISR)`, li: [`Jaartabel op het belastbare inkomen (tarief per schijf; de wet geeft vaste bedragen per schijf, met hetzelfde resultaat):${br}`] }),
    fr: br => ({ h: `4 · Impôt sur le revenu (ISR)`, li: [`Barème annuel sur le revenu imposable (taux par tranche ; la loi donne des montants fixes par tranche, même résultat) :${br}`] }),
  },
  'ref.exempt': {
    en: { h: `5 · Bonuses`, li: [`Aguinaldo of at least 15 days, ISR-exempt up to 30 UMA (<span class="num">MX$3,519</span>). Vacation premium of 25% on 12 days, exempt up to 15 UMA (<span class="num">MX$1,760</span>). No ISR withheld on the minimum wage (<span class="num">MX$315.04</span> a day).`] },
    nl: { h: `5 · Premies`, li: [`Aguinaldo van minstens 15 dagen, vrijgesteld van ISR tot 30 UMA (<span class="num">MX$ 3.519</span>). Vakantiepremie van 25% op 12 dagen, vrijgesteld tot 15 UMA (<span class="num">MX$ 1.760</span>). Geen ISR-inhouding op het minimumloon (<span class="num">MX$ 315,04</span> per dag).`] },
    fr: { h: `5 · Primes`, li: [`Aguinaldo d'au moins 15 jours, exonéré d'ISR jusqu'à 30 UMA (<span class="num">3 519 MX$</span>). Prime de vacances de 25% sur 12 jours, exonérée jusqu'à 15 UMA (<span class="num">1 760 MX$</span>). Pas de retenue d'ISR au salaire minimum (<span class="num">315,04 MX$</span> par jour).`] },
  },
  'ref.sub': {
    en: { h: `6 · Employment subsidy`, li: [`<span class="num">15.02%</span> of the monthly UMA (<span class="num">MX$535.65</span>) off the monthly ISR, for monthly wages up to <span class="num">MX$11,492.66</span>. Never paid out. Percentage and limit for 2026 not confirmed against the decree.`] },
    nl: { h: `6 · Werkgelegenheidssubsidie`, li: [`<span class="num">15,02%</span> van de maandelijkse UMA (<span class="num">MX$ 535,65</span>) af van de maandelijkse ISR, voor maandlonen tot <span class="num">MX$ 11.492,66</span>. Nooit uitbetaald. Percentage en grens voor 2026 niet bevestigd met het decreet.`] },
    fr: { h: `6 · Subvention à l'emploi`, li: [`<span class="num">15,02%</span> de l'UMA mensuelle (<span class="num">535,65 MX$</span>) déduits de l'ISR mensuel, pour les salaires jusqu'à <span class="num">11 492,66 MX$</span> par mois. Jamais versée. Pourcentage et plafond 2026 non confirmés par le décret.`] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">16%</span>, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × r / (100 + r): at 16% that's 16 / 116 = <span class="num">13.79%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">16%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 16% is dat 16 / 116 = <span class="num">13,79%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">16%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 16%, cela fait 16 / 116 = <span class="num">13,79%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Federal officials`, li: [
      `Net pay per month in the 2026 budget: President <span class="num">MX$134,290</span>, senators <span class="num">MX$131,874</span>, deputies <span class="num">MX$108,935</span>.`,
      `ISSSTE <span class="num">10.625%</span> (employee) and about <span class="num">20.1%</span> (government) on base pay up to 10 UMA, ISR as on any salary.`,
    ] },
    nl: { h: `8 · Federale ambtsdragers`, li: [
      `Nettoloon per maand in de begroting 2026: president <span class="num">MX$ 134.290</span>, senatoren <span class="num">MX$ 131.874</span>, afgevaardigden <span class="num">MX$ 108.935</span>.`,
      `ISSSTE <span class="num">10,625%</span> (werknemer) en ongeveer <span class="num">20,1%</span> (overheid) op het basisloon tot 10 UMA, ISR zoals op elk loon.`,
    ] },
    fr: { h: `8 · Élus fédéraux`, li: [
      `Rémunération nette par mois au budget 2026 : présidente <span class="num">134 290 MX$</span>, sénateurs <span class="num">131 874 MX$</span>, députés <span class="num">108 935 MX$</span>.`,
      `ISSSTE <span class="num">10,625%</span> (salarié) et environ <span class="num">20,1%</span> (État) sur la rémunération de base jusqu'à 10 UMA, ISR comme sur tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Profit sharing (PTU, 10% of company profits), the savings fund and food vouchers, overtime, seniority bonuses, the higher minimum wage and 8% VAT of the northern border zone, work-risk premiums above the lowest class, and personal deductions on the annual return (medical, mortgage interest, school fees, voluntary retirement savings).`,
      `Figures assume a full year with the same pay each month and the 2026 UMA all year (it applies from February).`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Winstdeling (PTU, 10% van de bedrijfswinst), het spaarfonds en maaltijdbonnen, overuren, anciënniteitspremies, het hogere minimumloon en de 8% btw van de noordelijke grenszone, premies arbeidsrisico boven de laagste klasse, en persoonlijke aftrekken in de jaaraangifte (medische kosten, hypotheekrente, schoolgeld, vrijwillig pensioensparen).`,
      `De bedragen gaan uit van een volledig jaar met elke maand hetzelfde loon en de UMA van 2026 het hele jaar (die geldt vanaf februari).`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `La participation aux bénéfices (PTU, 10% des bénéfices de l'entreprise), le fonds d'épargne et les bons d'alimentation, les heures supplémentaires, les primes d'ancienneté, le salaire minimum plus élevé et la TVA à 8% de la zone frontalière nord, les primes de risque au-delà de la classe la plus basse, et les déductions personnelles de la déclaration annuelle (frais médicaux, intérêts d'emprunt, frais de scolarité, épargne retraite volontaire).`,
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
};
