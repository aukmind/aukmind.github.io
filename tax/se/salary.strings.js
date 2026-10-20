window.TAX_STRINGS = {
  title: { en: `Swedish Buying Power`, nl: `Zweedse koopkracht`, fr: `Pouvoir d'achat en Suède` },
  eyebrow: { en: `Sweden · income year 2026 · employee`, nl: `Zweden · inkomstenjaar 2026 · werknemer`, fr: `Suède · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Sweden · income year 2026 · member of government`, nl: `Zweden · inkomstenjaar 2026 · regeringslid`, fr: `Suède · revenus 2026 · membre du gouvernement` },
  lead: {
    en: `Every tax on a Swedish salary in 2026, from what your employer pays to what you can buy.`,
    nl: `Alle belastingen op een Zweeds loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen.`,
    fr: `Tous les prélèvements sur un salaire suédois en 2026, de ce que paie votre employeur à ce que vous pouvez acheter.`,
  },
  salaryPh: { en: `e.g. 38300`, nl: `bv. 38300`, fr: `p. ex. 38300` },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `In Sweden each person is taxed on their own income. A partner only changes how child benefit is split.`,
    nl: `In Zweden betaalt ieder belasting op het eigen inkomen. Een partner verandert alleen hoe de kinderbijslag verdeeld wordt.`,
    fr: `En Suède, chacun est imposé sur ses propres revenus. Un conjoint change seulement le partage des allocations familiales.`,
  },
  cadre: { en: `Member of the Church of Sweden`, nl: `Lid van de Zweedse Kerk`, fr: `Membre de l'Église de Suède` },
  includePa: { en: `Count child benefit (barnbidrag)`, nl: `Kinderbijslag (barnbidrag) meetellen`, fr: `Compter les allocations familiales (barnbidrag)` },
  commune: { en: `Municipality (kommun)`, nl: `Gemeente (kommun)`, fr: `Commune (kommun)` },
  searchCommune: { en: `Search a municipality`, nl: `Zoek een gemeente`, fr: `Rechercher une commune` },
  searchN: { en: n => `Search ${n} municipalities`, nl: n => `Zoek in ${n} gemeenten`, fr: n => `Rechercher parmi ${n} communes` },
  communesError: {
    en: `Couldn't load the municipality list (communes.js next to this page). Set the rate by hand below.`,
    nl: `Kon de lijst met gemeenten niet laden (communes.js naast deze pagina). Stel het tarief hieronder zelf in.`,
    fr: `Impossible de charger la liste des communes (communes.js à côté de cette page). Réglez le taux à la main ci-dessous.`,
  },
  komLabel: { en: `Municipal + regional tax:`, nl: `Gemeente- + regiobelasting:`, fr: `Impôt communal + régional :` },
  komHint: {
    en: (k, b, c) => `Municipal + regional tax ${k} · burial fee ${b} · church fee ${c}`,
    nl: (k, b, c) => `Gemeente- + regiobelasting ${k} · begrafenisbijdrage ${b} · kerkbijdrage ${c}`,
    fr: (k, b, c) => `Impôt communal + régional ${k} · taxe funéraire ${b} · contribution d'Église ${c}`,
  },
  vatStandard: { en: `(Swedish standard rate is 25%)`, nl: `(het Zweedse normale tarief is 25%)`, fr: `(le taux normal suédois est de 25%)` },
  employerSize: { en: `Year of birth`, nl: `Geboortejaar`, fr: `Année de naissance` },
  'size.std': { en: `1959 to 2002`, nl: `1959 tot 2002`, fr: `1959 à 2002` },
  'size.youth': { en: `2003 to 2007`, nl: `2003 tot 2007`, fr: `2003 à 2007` },
  'size.senior': { en: `1958 or earlier`, nl: `1958 of vroeger`, fr: `1958 ou avant` },
  lowWageTrap: { en: `Pension fee not yet credited`, nl: `Pensioenbijdrage nog niet verrekend`, fr: `Cotisation retraite pas encore compensée` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  bracketTop: { en: `state tax 20%`, nl: `staatsbelasting 20%`, fr: `impôt d'État 20%` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `A minister's fee (arvode) is taxed exactly like a salary. The State pays the usual employer fees on top, like any employer.`,
    nl: `Het honorarium (arvode) van een minister wordt belast precies zoals een loon. De staat betaalt er de gewone werkgeversbijdragen bovenop, zoals elke werkgever.`,
    fr: `L'indemnité (arvode) d'un ministre est imposée exactement comme un salaire. L'État paie en plus les cotisations patronales habituelles, comme tout employeur.`,
  },
  minSalaryHint: {
    en: `Fee for the year, at the amount in force since 1 July 2026. By default, the official amount.`,
    nl: `Honorarium voor het jaar, tegen het bedrag dat sinds 1 juli 2026 geldt. Standaard het officiële bedrag.`,
    fr: `Indemnité de l'année, au montant en vigueur depuis le 1er juillet 2026. Par défaut, le montant officiel.`,
  },
  'tip.ministerRules': {
    en: `Ministers' fees are set by a board of the parliament, the Statsrådsarvodesnämnden. Since 1 July 2026: kr 211,000 a month for the Prime Minister and kr 166,500 for other ministers, about 3.4% more than before. A minister who is also an MP doesn't get the MP fee while in government. The fee is taxed like any salary, with the same deductions and credits. Extra living costs for working away from home are paid back and not counted here.`,
    nl: `De honoraria van ministers worden vastgelegd door een raad van het parlement, de Statsrådsarvodesnämnden. Sinds 1 juli 2026: kr 211.000 per maand voor de premier en kr 166.500 voor de andere ministers, ongeveer 3,4% meer dan ervoor. Een minister die ook Kamerlid is, krijgt geen Kamervergoeding zolang hij in de regering zit. Het honorarium wordt belast zoals elk loon, met dezelfde aftrekken en kortingen. Extra woonkosten om ver van huis te werken, worden terugbetaald en tellen hier niet mee.`,
    fr: `Les indemnités des ministres sont fixées par une commission du Parlement, la Statsrådsarvodesnämnden. Depuis le 1er juillet 2026 : 211 000 kr par mois pour le Premier ministre et 166 500 kr pour les autres ministres, environ 3,4% de plus qu'avant. Un ministre qui est aussi député ne touche pas l'indemnité de député tant qu'il est au gouvernement. L'indemnité est imposée comme tout salaire, avec les mêmes abattements et réductions. Les frais de vie en plus pour travailler loin de chez soi sont remboursés et ne sont pas comptés ici.`,
  },
  'bd.minGross': { en: `Minister's fee (arvode)`, nl: `Honorarium van de minister (arvode)`, fr: `Indemnité de ministre (arvode)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, min) => `${pm} a month for the Prime Minister, ${min} for other ministers, from 1 July 2026.`,
    nl: (pm, min) => `${pm} per maand voor de premier, ${min} voor de andere ministers, vanaf 1 juli 2026.`,
    fr: (pm, min) => `${pm} par mois pour le Premier ministre, ${min} pour les autres ministres, à partir du 1er juillet 2026.`,
  },
  'tip.stateCost': {
    en: `The fee + the 31.42% employer fees the State pays on top. The tax rates on work and in total are measured against this amount.`,
    nl: `Het honorarium + de werkgeversbijdragen van 31,42% die de staat erbovenop betaalt. De belasting op arbeid en de totale belasting worden aan dit bedrag afgemeten.`,
    fr: `L'indemnité + les cotisations patronales de 31,42% que l'État paie en plus. Les taux de prélèvement sur le travail et au total sont calculés sur ce montant.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.speaker': { en: `Speaker of the Riksdag`, nl: `Voorzitter van de Riksdag`, fr: `Président du Riksdag` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `Member of the Riksdag`, nl: `Lid van de Riksdag`, fr: `Député au Riksdag` },
  'pol.stat.pm': { en: `Official fee since 1 July 2026`, nl: `Officieel honorarium sinds 1 juli 2026`, fr: `Indemnité officielle depuis le 1er juillet 2026` },
  'pol.stat.speaker': { en: `Same fee as the Prime Minister`, nl: `Hetzelfde honorarium als de premier`, fr: `Même indemnité que le Premier ministre` },
  'pol.stat.minister': { en: `Official fee since 1 July 2026`, nl: `Officieel honorarium sinds 1 juli 2026`, fr: `Indemnité officielle depuis le 1er juillet 2026` },
  'pol.stat.mp': { en: `Basic fee since 1 January 2026, without extra pay for committee work`, nl: `Basishonorarium sinds 1 januari 2026, zonder extra voor werk in commissies`, fr: `Indemnité de base depuis le 1er janvier 2026, sans le supplément pour le travail en commission` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-owned companies, 2025 pay`, nl: `Topmensen van staatsbedrijven, loon 2025`, fr: `Dirigeants d'entreprises publiques, rémunération 2025` },
  'pol.rb': { en: `Governor, Sveriges Riksbank`, nl: `Gouverneur, Sveriges Riksbank`, fr: `Gouverneur de la Sveriges Riksbank` },
  'pol.sbab': { en: `CEO, SBAB Bank (State-owned)`, nl: `CEO, SBAB Bank (staatsbank)`, fr: `Directeur général de SBAB Bank (publique)` },
  'pol.sveaskog': { en: `CEO, Sveaskog (State forests)`, nl: `CEO, Sveaskog (staatsbossen)`, fr: `Directeur général de Sveaskog (forêts publiques)` },
  'polNote.pm': {
    en: `Taxed exactly like a salary: same deductions, credits and fees. The head marks the employee salary that leaves the same net pay, with your settings. The dot is the real fee.`,
    nl: `Belast precies zoals een loon: dezelfde aftrekken, kortingen en bijdragen. Het hoofdje staat bij het werknemersloon dat hetzelfde netto oplevert, met jouw instellingen. Het bolletje is het echte honorarium.`,
    fr: `Imposée exactement comme un salaire : mêmes abattements, réductions et cotisations. La tête marque le salaire d'un salarié qui donne le même net, avec vos réglages. Le point est l'indemnité réelle.`,
  },
  'polNote.minister': {
    en: `Taxed exactly like a salary: same deductions, credits and fees. The head marks the employee salary that leaves the same net pay, with your settings. The dot is the real fee.`,
    nl: `Belast precies zoals een loon: dezelfde aftrekken, kortingen en bijdragen. Het hoofdje staat bij het werknemersloon dat hetzelfde netto oplevert, met jouw instellingen. Het bolletje is het echte honorarium.`,
    fr: `Imposée exactement comme un salaire : mêmes abattements, réductions et cotisations. La tête marque le salaire d'un salarié qui donne le même net, avec vos réglages. Le point est l'indemnité réelle.`,
  },
  'polNote.mp': {
    en: `The fee is taxed like a salary and builds up a pension. The Riksdag pays the social fees on top. MPs who live far from Stockholm get tax-free daily allowances, which aren't counted.`,
    nl: `Het honorarium wordt belast als een loon en bouwt pensioen op. De Riksdag betaalt de sociale bijdragen erbovenop. Kamerleden die ver van Stockholm wonen, krijgen belastingvrije dagvergoedingen, die niet meetellen.`,
    fr: `L'indemnité est imposée comme un salaire et ouvre des droits à la retraite. Le Riksdag paie en plus les cotisations sociales. Les députés qui vivent loin de Stockholm reçoivent des indemnités journalières non imposées, qui ne sont pas comptées.`,
  },
  'polTipNote.rb': {
    en: `Salary and other pay in 2025, from the Riksbank's annual report: kr 3.6 million (3.4 million in 2024).`,
    nl: `Loon en andere vergoedingen in 2025, uit het jaarverslag van de Riksbank: 3,6 miljoen kr (3,4 miljoen in 2024).`,
    fr: `Salaire et autres rémunérations en 2025, d'après le rapport annuel de la Riksbank : 3,6 millions de kr (3,4 millions en 2024).`,
  },
  'polTipNote.sbab': {
    en: `2025: base salary kr 6,642,000. The top of the range adds perks and the kr 1,939,000 paid into their pension. State-owned companies pay their CEO no bonus.`,
    nl: `2025: basisloon kr 6.642.000. De bovenkant telt voordelen en de kr 1.939.000 voor het pensioen mee. Staatsbedrijven betalen hun CEO geen bonus.`,
    fr: `2025 : salaire de base 6 642 000 kr. Le haut de la fourchette ajoute les avantages et les 1 939 000 kr versés pour la retraite. Les entreprises publiques ne versent pas de bonus à leur directeur.`,
  },
  'polTipNote.sveaskog': {
    en: `2025: base salary kr 5,323,000. The top of the range adds perks and the kr 1,650,000 paid into their pension. No bonus.`,
    nl: `2025: basisloon kr 5.323.000. De bovenkant telt voordelen en de kr 1.650.000 voor het pensioen mee. Geen bonus.`,
    fr: `2025 : salaire de base 5 323 000 kr. Le haut de la fourchette ajoute les avantages et les 1 650 000 kr versés pour la retraite. Pas de bonus.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. Pay is per year, shown on the chart as the year's pay ÷ months paid. Members of government and parliament are taxed like employees, so they sit where an employee takes home the same net pay. Fees: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Het loon is per jaar, op de grafiek als jaarloon ÷ betaalde maanden. Regerings- en parlementsleden worden belast als werknemers, dus ze staan waar een werknemer hetzelfde netto overhoudt. Honoraria: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La rémunération est annuelle, placée sur le graphique en montant de l'année ÷ mois payés. Les membres du gouvernement et du parlement sont imposés comme des salariés : ils sont placés là où un salarié touche le même net. Indemnités : ${links}.`,
  },

  trapTitle: { en: (a, b) => `Why so high between ${a} and ${b}?`, nl: (a, b) => `Waarom zo hoog tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi si élevé entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, fee) => `From ${a} you start paying the 7% pension fee: about ${fee} all at once on the first krona above that limit. Normally the same amount is given back by lowering your income tax. But at this pay there is little or no income tax to lower, so the fee really costs you money until ${b}. Above that it is fully given back, and the fee costs nothing.`,
    nl: (a, b, fee) => `Vanaf ${a} begin je de pensioenbijdrage van 7% te betalen: ongeveer ${fee} in één keer op de eerste kroon boven die grens. Normaal krijg je hetzelfde bedrag terug doordat je inkomstenbelasting daalt. Maar op dit loon is er weinig of geen inkomstenbelasting om te verlagen, dus kost de bijdrage je echt geld tot ${b}. Daarboven krijg je ze volledig terug en kost ze niets.`,
    fr: (a, b, fee) => `À partir de ${a}, vous commencez à payer la cotisation retraite de 7% : environ ${fee} d'un coup sur la première couronne au-dessus de ce seuil. Normalement, le même montant vous est rendu en baissant votre impôt sur le revenu. Mais à ce salaire, il y a peu ou pas d'impôt à baisser : la cotisation vous coûte donc vraiment jusqu'à ${b}. Au-delà, elle est entièrement rendue et ne coûte rien.`,
  },
  topTitle: {
    en: top => `Why the step at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi la marche à ${top} ?`,
  },
  topBody: {
    en: (top, flat, br) => `Up to ${flat}, your tax credit for working grows with your pay and lowers the municipal tax. Above that it stays the same, so each extra krona is taxed a little more. From ${top}, your taxed income goes above ${br}, and a 20% state income tax is added on top of the municipal tax (this point is called the "brytpunkt").`,
    nl: (top, flat, br) => `Tot ${flat} groeit je belastingkorting voor werkenden mee met je loon en verlaagt ze de gemeentebelasting. Daarboven blijft ze gelijk, dus elke extra kroon wordt iets zwaarder belast. Vanaf ${top} komt je belast inkomen boven ${br}, en komt er 20% staatsinkomstenbelasting bovenop de gemeentebelasting (dat punt heet de "brytpunkt").`,
    fr: (top, flat, br) => `Jusqu'à ${flat}, votre crédit d'impôt pour le travail augmente avec votre salaire et baisse l'impôt communal. Au-delà, il ne bouge plus, donc chaque couronne en plus est un peu plus imposée. À partir de ${top}, votre revenu imposé dépasse ${br}, et un impôt d'État de 20% s'ajoute à l'impôt communal (ce seuil s'appelle le « brytpunkt »).`,
  },

  // Tax components
  'comp.er': { en: `Employer fees (arbetsgivaravgifter)`, nl: `Werkgeversbijdragen (arbetsgivaravgifter)`, fr: `Cotisations patronales (arbetsgivaravgifter)` },
  'comp.pf': { en: `Pension fee (allmän pensionsavgift)`, nl: `Pensioenbijdrage (allmän pensionsavgift)`, fr: `Cotisation retraite (allmän pensionsavgift)` },
  'comp.kom': { en: `Municipal + regional tax, after credits`, nl: `Gemeente- + regiobelasting, na kortingen`, fr: `Impôt communal + régional, après réductions` },
  'comp.stat': { en: `State income tax`, nl: `Staatsinkomstenbelasting`, fr: `Impôt d'État sur le revenu` },
  'comp.fee': { en: `Burial + public service fees`, nl: `Begrafenis- + publieke-omroepbijdrage`, fr: `Taxe funéraire + redevance audiovisuelle` },
  'comp.kyrka': { en: `Church fee`, nl: `Kerkbijdrage`, fr: `Contribution d'Église` },
  'comp.bb': { en: `Child benefit (barnbidrag)`, nl: `Kinderbijslag (barnbidrag)`, fr: `Allocations familiales (barnbidrag)` },
  bbReceived: { en: `+ Child benefit, paid by Försäkringskassan`, nl: `+ Kinderbijslag, betaald door Försäkringskassan`, fr: `+ Allocations familiales, versées par la Försäkringskassan` },
  'bd.ga': { en: `Basic deduction (grundavdrag)`, nl: `Basisaftrek (grundavdrag)`, fr: `Abattement de base (grundavdrag)` },
  'bd.taxable': { en: `Taxable earned income`, nl: `Belastbaar arbeidsinkomen`, fr: `Revenu d'activité imposable` },
  'bd.komGross': { en: `Municipal + regional tax`, nl: `Gemeente- + regiobelasting`, fr: `Impôt communal + régional` },
  'bd.jsa': { en: `Earned income credit (jobbskatteavdrag)`, nl: `Arbeidskorting (jobbskatteavdrag)`, fr: `Crédit d'impôt sur le travail (jobbskatteavdrag)` },
  'bd.fi': { en: `Earned income reduction (förvärvsinkomst)`, nl: `Korting op arbeidsinkomen (förvärvsinkomst)`, fr: `Réduction sur revenus d'activité (förvärvsinkomst)` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the usual case in Sweden. Paid holidays are part of the monthly salary.`,
    nl: `12 maandlonen, het gewone geval in Zweden. Betaald verlof zit in het maandloon.`,
    fr: `12 salaires mensuels, le cas habituel en Suède. Les congés payés sont compris dans le salaire mensuel.`,
  },
  'tip.f1211': {
    en: `Adds the holiday supplement (semestertillägg): 0.43% of a monthly salary for each of 25 holiday days, as in most office-worker agreements.`,
    nl: `Voegt de vakantietoeslag (semestertillägg) toe: 0,43% van een maandloon voor elk van 25 vakantiedagen, zoals in de meeste cao's voor bedienden.`,
    fr: `Ajoute le supplément de congés (semestertillägg) : 0,43% d'un salaire mensuel pour chacun des 25 jours de congé, comme dans la plupart des conventions des employés de bureau.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Couples don't file together in Sweden. Each partner is taxed on their own income, so your partner's pay changes nothing in your tax. Child benefit goes half to each parent, unless they choose otherwise.`,
    nl: `Koppels doen in Zweden geen gezamenlijke aangifte. Ieder betaalt belasting op het eigen inkomen, dus het loon van je partner verandert niets aan jouw belasting. De kinderbijslag gaat voor de helft naar elke ouder, tenzij ze anders kiezen.`,
    fr: `Les couples ne déclarent pas ensemble en Suède. Chacun est imposé sur ses propres revenus, le salaire de votre conjoint ne change donc rien à votre impôt. Les allocations familiales vont pour moitié à chaque parent, sauf s'ils choisissent autrement.`,
  },
  'tip.church': {
    en: rate => `Members of the Church of Sweden pay a church fee on their taxed income. Each parish sets its own rate: ${rate} here (the average of the parishes in your municipality; 1.06% for the whole country). Everyone pays the burial fee, member or not.`,
    nl: rate => `Leden van de Zweedse Kerk betalen een kerkbijdrage op hun belast inkomen. Elke parochie bepaalt haar eigen tarief: hier ${rate} (het gemiddelde van de parochies in je gemeente; 1,06% voor het hele land). Iedereen betaalt de begrafenisbijdrage, lid of niet.`,
    fr: rate => `Les membres de l'Église de Suède paient une contribution sur leur revenu imposé. Chaque paroisse fixe son taux : ${rate} ici (la moyenne des paroisses de votre commune ; 1,06% pour tout le pays). Tout le monde paie la taxe funéraire, membre ou non.`,
  },
  'tip.bbToggle': {
    en: `The social insurance agency (Försäkringskassan) pays child benefit for every child under 16, whatever you earn. It doesn't change with your pay. So it lowers your average tax rate, but not what you lose on the next krona you earn.`,
    nl: `De sociale verzekeringsdienst (Försäkringskassan) betaalt kinderbijslag voor elk kind onder 16, wat je ook verdient. Het verandert niet met je loon. Het verlaagt dus je gemiddelde belastingtarief, maar niet wat je verliest op de volgende kroon die je verdient.`,
    fr: `La caisse d'assurance sociale (Försäkringskassan) verse les allocations familiales pour chaque enfant de moins de 16 ans, quel que soit le revenu. Elles ne changent pas avec le salaire. Elles baissent donc votre taux moyen, mais pas ce que vous perdez sur la prochaine couronne gagnée.`,
  },
  'tip.komRule': {
    en: (lo, hi) => `Each municipality and each region sets its own income tax rate, on your taxed income. Together they go from ${lo} to ${hi} in 2026, 32.38% on average. Pick your municipality above or set the rate here.`,
    nl: (lo, hi) => `Elke gemeente en elke regio bepaalt haar eigen inkomstenbelasting, op je belast inkomen. Samen gaat dat van ${lo} tot ${hi} in 2026, gemiddeld 32,38%. Kies je gemeente hierboven of stel het tarief hier in.`,
    fr: (lo, hi) => `Chaque commune et chaque région fixe son propre taux d'impôt, sur votre revenu imposé. Ensemble, de ${lo} à ${hi} en 2026, 32,38% en moyenne. Choisissez votre commune ci-dessus ou réglez le taux ici.`,
  },
  'tip.komShort': {
    en: `Most of your income tax: the municipal + regional rate × your taxed income. Then three discounts come off: one for the pension fee, the tax credit for working, and a small reduction on work income.`,
    nl: `Het grootste deel van je inkomstenbelasting: het gemeente- + regiotarief × je belast inkomen. Daarna gaan er drie kortingen af: een voor de pensioenbijdrage, de belastingkorting voor werkenden, en een kleine korting op arbeidsinkomen.`,
    fr: `L'essentiel de votre impôt sur le revenu : le taux communal + régional × votre revenu imposé. Puis trois réductions sont retirées : une pour la cotisation retraite, le crédit d'impôt pour le travail, et une petite réduction sur les revenus du travail.`,
  },
  'tip.kom': {
    en: (name, rate) => `${name ? name + ': ' : ''}${rate} on your taxed income, the municipal and regional rates added together. The discounts below come off it, but it never goes below zero.`,
    nl: (name, rate) => `${name ? name + ': ' : ''}${rate} op je belast inkomen, het gemeente- en regiotarief samen. De kortingen hieronder gaan ervan af, maar het gaat nooit onder nul.`,
    fr: (name, rate) => `${name ? name + ' : ' : ''}${rate} sur votre revenu imposé, les taux communal et régional additionnés. Les réductions ci-dessous s'en retirent, sans jamais passer sous zéro.`,
  },
  'tip.capped': { en: v => `full credit ${v}, but it can't be more than the tax`, nl: v => `volledige korting ${v}, maar niet meer dan de belasting`, fr: v => `crédit complet ${v}, mais pas plus que l'impôt` },
  'tip.size': {
    en: `Born 1959 to 2002: employer fees of 31.42%. Born 2003 to 2007: from 1 April 2026, the employer pays 20.81% on pay up to kr 25,000 a month (9 of the 12 months of 2026). Born 1958 or earlier: the employer only pays the 10.21% fee for old-age pensions, and you get the bigger tax-free amounts for people 66 or older.`,
    nl: `Geboren 1959 tot 2002: werkgeversbijdragen van 31,42%. Geboren 2003 tot 2007: vanaf 1 april 2026 betaalt de werkgever 20,81% op het loon tot kr 25.000 per maand (9 van de 12 maanden van 2026). Geboren 1958 of vroeger: de werkgever betaalt alleen de bijdrage van 10,21% voor het ouderdomspensioen, en jij krijgt de grotere belastingvrije bedragen voor 66-plussers.`,
    fr: `Nés de 1959 à 2002 : cotisations patronales de 31,42%. Nés de 2003 à 2007 : depuis le 1er avril 2026, l'employeur paie 20,81% sur le salaire jusqu'à 25 000 kr par mois (9 des 12 mois de 2026). Nés en 1958 ou avant : l'employeur ne paie que la cotisation de 10,21% pour la retraite, et vous avez les montants non imposés plus grands des 66 ans et plus.`,
  },
  'tip.costShort': { en: `Gross salary + what the employer pays on top in fees.`, nl: `Brutoloon + wat de werkgever er bovenop aan bijdragen betaalt.`, fr: `Salaire brut + ce que l'employeur paie en plus en cotisations.` },
  'tip.er': {
    en: `Your employer pays these on top of your gross salary, on all of it, with no upper limit: old-age pension 10.21%, health 3.55%, parents 2.00%, widows and orphans 0.30%, work injuries 0.10%, job market 2.64%, and a general payroll tax of 12.62%.`,
    nl: `Je werkgever betaalt deze bovenop je brutoloon, op het hele loon, zonder bovengrens: ouderdomspensioen 10,21%, ziekte 3,55%, ouders 2,00%, weduwen en wezen 0,30%, arbeidsongevallen 0,10%, arbeidsmarkt 2,64%, en een algemene loonbelasting van 12,62%.`,
    fr: `Votre employeur les paie en plus de votre salaire brut, sur tout le salaire, sans plafond : retraite 10,21%, maladie 3,55%, parents 2,00%, veuves et orphelins 0,30%, accidents du travail 0,10%, marché du travail 2,64%, et une taxe générale sur les salaires de 12,62%.`,
  },
  'tip.erSenior': {
    en: `For workers born in 1958 or earlier, the employer only pays the 10.21% fee for old-age pensions.`,
    nl: `Voor werknemers geboren in 1958 of vroeger betaalt de werkgever alleen de bijdrage van 10,21% voor het ouderdomspensioen.`,
    fr: `Pour les salariés nés en 1958 ou avant, l'employeur ne paie que la cotisation de 10,21% pour la retraite.`,
  },
  'tip.youthCut': { en: `Lower fees for young workers, April to December`, nl: `Lagere bijdragen voor jonge werknemers, april tot december`, fr: `Cotisations réduites pour les jeunes, d'avril à décembre` },
  'tip.erM': {
    en: `Not counted: pensions and insurance from sector agreements (ITP, SAF-LO, AFA). They are insurance, not tax.`,
    nl: `Niet meegeteld: pensioenen en verzekeringen uit cao's (ITP, SAF-LO, AFA). Het zijn verzekeringen, geen belastingen.`,
    fr: `Non comptées : les retraites et assurances des conventions collectives (ITP, SAF-LO, AFA). Ce sont des assurances, pas des impôts.`,
  },
  'tip.pf': {
    en: (min, cap) => `7% of your pay, taken for your state pension, but only once you earn ${min} a year, and on at most ${cap}. The same amount is given back by lowering your income tax. So it only costs you when your income tax is too small to give it all back.`,
    nl: (min, cap) => `7% van je loon, afgehouden voor je staatspensioen, maar pas zodra je ${min} per jaar verdient, en op hoogstens ${cap}. Hetzelfde bedrag krijg je terug doordat je inkomstenbelasting daalt. Het kost je dus alleen iets als je inkomstenbelasting te klein is om alles terug te geven.`,
    fr: (min, cap) => `7% de votre salaire, prélevés pour votre retraite publique, mais seulement dès que vous gagnez ${min} par an, et sur au plus ${cap}. Le même montant vous est rendu en baissant votre impôt sur le revenu. Elle ne vous coûte donc que si votre impôt est trop faible pour tout rendre.`,
  },
  'tip.pfCredit': { en: `Pension fee given back`, nl: `Pensioenbijdrage teruggegeven`, fr: `Cotisation retraite rendue` },
  'tip.ga': {
    en: (lo, max, min) => `An amount of your income that isn't taxed: ${lo} at low pay, rising to ${max}, then falling back to ${min} at high pay. It is never more than your income.`,
    nl: (lo, max, min) => `Een deel van je inkomen waarop je geen belasting betaalt: ${lo} bij een laag loon, oplopend tot ${max}, daarna terug dalend tot ${min} bij een hoog loon. Nooit meer dan je inkomen.`,
    fr: (lo, max, min) => `Une part de votre revenu qui n'est pas imposée : ${lo} pour un bas salaire, jusqu'à ${max}, puis qui redescend à ${min} pour un haut salaire. Jamais plus que votre revenu.`,
  },
  'tip.gaSenior': {
    en: `From 66, an extra tax-free amount is added on top.`,
    nl: `Vanaf 66 komt er een extra belastingvrij bedrag bovenop.`,
    fr: `À partir de 66 ans, un montant non imposé en plus s'ajoute.`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − the tax-free amount${calc}. The municipal tax, state tax, burial fee, church fee and public service fee are all worked out on it.`,
    nl: calc => `Brutoloon − het belastingvrije bedrag${calc}. De gemeentebelasting, staatsbelasting, begrafenisbijdrage, kerkbijdrage en omroepbijdrage worden er allemaal op berekend.`,
    fr: calc => `Salaire brut − le montant non imposé${calc}. L'impôt communal, l'impôt d'État, la taxe funéraire, la contribution d'Église et la redevance audiovisuelle sont tous calculés dessus.`,
  },
  'tip.jsa': {
    en: `A tax credit that rewards working. It only lowers the municipal tax. It grows with your pay up to 8.08 times a yearly reference amount (kr 478,336), then stays the same. Since 2026 it no longer shrinks at high pay. It is worth more in municipalities with a high tax rate.`,
    nl: `Een belastingkorting die werken beloont. Ze verlaagt alleen de gemeentebelasting. Ze groeit met je loon tot 8,08 keer een jaarlijks referentiebedrag (kr 478.336), en blijft dan gelijk. Sinds 2026 krimpt ze niet meer bij hoge lonen. In gemeenten met een hoog tarief is ze meer waard.`,
    fr: `Un crédit d'impôt qui récompense le travail. Il ne baisse que l'impôt communal. Il augmente avec votre salaire jusqu'à 8,08 fois un montant de référence annuel (478 336 kr), puis ne bouge plus. Depuis 2026, il ne diminue plus pour les hauts salaires. Il vaut plus dans les communes à taux élevé.`,
  },
  'tip.jsaSenior': {
    en: `From 66 the credit is simpler: 22% of work income up to kr 103,600, then it grows more slowly, reaching kr 37,255 from kr 310,208.`,
    nl: `Vanaf 66 is de korting eenvoudiger: 22% van het arbeidsinkomen tot kr 103.600, daarna groeit ze trager, tot kr 37.255 vanaf kr 310.208.`,
    fr: `À partir de 66 ans, le crédit est plus simple : 22% des revenus du travail jusqu'à 103 600 kr, puis il augmente plus lentement, jusqu'à 37 255 kr à partir de 310 208 kr.`,
  },
  'tip.fi': {
    en: `0.75% of taxed income above kr 40,000, at most kr 1,500, taken off the municipal tax.`,
    nl: `0,75% van het belast inkomen boven kr 40.000, hoogstens kr 1.500, afgetrokken van de gemeentebelasting.`,
    fr: `0,75% du revenu imposé au-delà de 40 000 kr, au plus 1 500 kr, retirés de l'impôt communal.`,
  },
  'tip.stat': {
    en: at => `20% of taxed income above ${at}.`,
    nl: at => `20% van het belast inkomen boven ${at}.`,
    fr: at => `20% du revenu imposé au-delà de ${at}.`,
  },
  'tip.fee': {
    en: (begr, ps) => `Two small fees on your taxed income, which no credit can lower: the burial fee (${begr} here), and the fee for public radio and TV, 1% up to ${ps} a year.`,
    nl: (begr, ps) => `Twee kleine bijdragen op je belast inkomen, die geen enkele korting verlaagt: de begrafenisbijdrage (hier ${begr}), en de bijdrage voor de publieke radio en tv, 1% tot hoogstens ${ps} per jaar.`,
    fr: (begr, ps) => `Deux petites taxes sur votre revenu imposé, qu'aucune réduction ne baisse : la taxe funéraire (${begr} ici), et la redevance pour la radio et la télé publiques, 1% jusqu'à ${ps} par an.`,
  },
  'tip.begr': { en: `Burial fee`, nl: `Begrafenisbijdrage`, fr: `Taxe funéraire` },
  'tip.ps': { en: `Public service fee (1%, capped)`, nl: `Bijdrage publieke omroep (1%, begrensd)`, fr: `Redevance audiovisuelle (1%, plafonnée)` },
  'tip.bb': {
    en: child => `${child} a month per child under 16, plus extra for big families from the second child. Paid whatever you earn. A couple usually splits it half and half.`,
    nl: child => `${child} per maand per kind onder 16, plus extra voor grote gezinnen vanaf het tweede kind. Betaald wat je ook verdient. Een koppel verdeelt het meestal half om half.`,
    fr: child => `${child} par mois par enfant de moins de 16 ans, plus un supplément pour les familles nombreuses dès le deuxième enfant. Versées quel que soit le revenu. Un couple les partage en général moitié-moitié.`,
  },
  'tip.vatM': {
    en: `Left out: the 12% rate (hotels, restaurants), 6% on food from April 2026 to the end of 2027, the 6% rate (books, transport), and spending with no VAT, like rent. So the real amount is lower than this.`,
    nl: `Niet meegerekend: het tarief van 12% (hotels, restaurants), 6% op voeding van april 2026 tot eind 2027, het tarief van 6% (boeken, vervoer), en uitgaven zonder btw, zoals huur. Het echte bedrag ligt dus lager.`,
    fr: `Non pris en compte : le taux de 12% (hôtels, restaurants), 6% sur l'alimentation d'avril 2026 à fin 2027, le taux de 6% (livres, transports), et les dépenses sans TVA, comme le loyer. Le montant réel est donc plus bas.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − pension fee − income taxes after credits − fees, + child benefit if you count it.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − pensioenbijdrage − inkomstenbelasting na kortingen − bijdragen, + kinderbijslag als je die meetelt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisation retraite − impôts sur le revenu après réductions − taxes, + allocations familiales si vous les comptez.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026 (final tax set in 2027)`,
    nl: `Gebruikte regels · inkomstenjaar 2026 (definitieve aanslag in 2027)`,
    fr: `Règles utilisées · revenus 2026 (impôt définitif fixé en 2027)`,
  },
  'ref.er': {
    en: { h: `1 · Employer fees`, li: [
      `<span class="num">31.42%</span> of all pay, no upper limit: old-age pension 10.21%, health 3.55%, parents 2.00%, widows and orphans 0.30%, work injuries 0.10%, job market 2.64%, general payroll tax 12.62%.`,
      `Born 2003 to 2007: <span class="num">20.81%</span> on pay up to kr 25,000 a month, from 1 April 2026 to 30 September 2027.`,
      `Born 1938 to 1958: only <span class="num">10.21%</span>.`,
    ] },
    nl: { h: `1 · Werkgeversbijdragen`, li: [
      `<span class="num">31,42%</span> van het hele loon, geen bovengrens: ouderdomspensioen 10,21%, ziekte 3,55%, ouders 2,00%, weduwen en wezen 0,30%, arbeidsongevallen 0,10%, arbeidsmarkt 2,64%, algemene loonbelasting 12,62%.`,
      `Geboren 2003 tot 2007: <span class="num">20,81%</span> op het loon tot kr 25.000 per maand, van 1 april 2026 tot 30 september 2027.`,
      `Geboren 1938 tot 1958: alleen <span class="num">10,21%</span>.`,
    ] },
    fr: { h: `1 · Cotisations patronales`, li: [
      `<span class="num">31,42%</span> de tout le salaire, sans plafond : retraite 10,21%, maladie 3,55%, parents 2,00%, veuves et orphelins 0,30%, accidents du travail 0,10%, marché du travail 2,64%, taxe générale sur les salaires 12,62%.`,
      `Nés de 2003 à 2007 : <span class="num">20,81%</span> sur le salaire jusqu'à 25 000 kr par mois, du 1er avril 2026 au 30 septembre 2027.`,
      `Nés de 1938 à 1958 : seulement <span class="num">10,21%</span>.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `2 · Income tax`, li: [
      `Taxed income = gross − a tax-free amount (<span class="num">kr 25,042</span> to <span class="num">kr 45,584</span>, falling back to kr 17,346 at high pay). Yearly reference amount (prisbasbelopp) kr 59,200.`,
      `Municipal + regional tax on all taxed income: <span class="num">28.93%</span> to <span class="num">35.65%</span>, 32.38% on average.`,
      `State income tax on taxed income:${br}`,
    ] }),
    nl: br => ({ h: `2 · Inkomstenbelasting`, li: [
      `Belast inkomen = bruto − een belastingvrij bedrag (<span class="num">kr 25.042</span> tot <span class="num">kr 45.584</span>, terug dalend tot kr 17.346 bij hoge lonen). Jaarlijks referentiebedrag (prisbasbelopp) kr 59.200.`,
      `Gemeente- + regiobelasting op het hele belast inkomen: <span class="num">28,93%</span> tot <span class="num">35,65%</span>, gemiddeld 32,38%.`,
      `Staatsinkomstenbelasting op het belast inkomen:${br}`,
    ] }),
    fr: br => ({ h: `2 · Impôt sur le revenu`, li: [
      `Revenu imposé = brut − un montant non imposé (<span class="num">25 042 kr</span> à <span class="num">45 584 kr</span>, qui redescend à 17 346 kr pour les hauts salaires). Montant de référence annuel (prisbasbelopp) 59 200 kr.`,
      `Impôt communal + régional sur tout le revenu imposé : <span class="num">28,93%</span> à <span class="num">35,65%</span>, 32,38% en moyenne.`,
      `Impôt d'État sur le revenu imposé :${br}`,
    ] }),
  },
  'ref.credits': {
    en: { h: `3 · Pension fee and tax credits`, li: [
      `Pension fee <span class="num">7%</span> of pay from kr 25,042, on at most kr 673,038. All of it is given back by lowering income tax.`,
      `Tax credit for working (jobbskatteavdrag): based on pay up to <span class="num">3.027</span> times the yearly reference amount, minus the tax-free amount, × the municipal rate. It doesn't shrink at high pay in 2026.`,
      `Small reduction on work income: 0.75% of taxed income above kr 40,000, at most <span class="num">kr 1,500</span>.`,
    ] },
    nl: { h: `3 · Pensioenbijdrage en belastingkortingen`, li: [
      `Pensioenbijdrage <span class="num">7%</span> van het loon vanaf kr 25.042, op hoogstens kr 673.038. Je krijgt alles terug doordat de inkomstenbelasting daalt.`,
      `Belastingkorting voor werkenden (jobbskatteavdrag): op basis van het loon tot <span class="num">3,027</span> keer het jaarlijkse referentiebedrag, min het belastingvrije bedrag, × het gemeentetarief. Ze krimpt in 2026 niet bij hoge lonen.`,
      `Kleine korting op arbeidsinkomen: 0,75% van het belast inkomen boven kr 40.000, hoogstens <span class="num">kr 1.500</span>.`,
    ] },
    fr: { h: `3 · Cotisation retraite et réductions d'impôt`, li: [
      `Cotisation retraite <span class="num">7%</span> du salaire dès 25 042 kr, sur au plus 673 038 kr. Elle est entièrement rendue en baissant l'impôt sur le revenu.`,
      `Crédit d'impôt pour le travail (jobbskatteavdrag) : calculé sur le salaire jusqu'à <span class="num">3,027</span> fois le montant de référence annuel, moins le montant non imposé, × le taux communal. Il ne diminue pas pour les hauts salaires en 2026.`,
      `Petite réduction sur les revenus du travail : 0,75% du revenu imposé au-delà de 40 000 kr, au plus <span class="num">1 500 kr</span>.`,
    ] },
  },
  'ref.fees': {
    en: { h: `4 · Fees`, li: [
      `Burial fee <span class="num">0.292%</span> (Stockholm 0.07%, Tranås 0.285%). Church fee 0.67% to 1.85% depending on the parish, members only.`,
      `Public radio and TV fee: 1% of taxed income, at most <span class="num">kr 1,184</span>.`,
      `Rates from the tax agency's (Skatteverket) 2026 file for all 290 municipalities, checked against Statistics Sweden (SCB).`,
    ] },
    nl: { h: `4 · Bijdragen`, li: [
      `Begrafenisbijdrage <span class="num">0,292%</span> (Stockholm 0,07%, Tranås 0,285%). Kerkbijdrage 0,67% tot 1,85% naargelang de parochie, alleen voor leden.`,
      `Bijdrage publieke radio en tv: 1% van het belast inkomen, hoogstens <span class="num">kr 1.184</span>.`,
      `Tarieven uit het bestand 2026 van de belastingdienst (Skatteverket) voor alle 290 gemeenten, nagekeken met het statistiekbureau (SCB).`,
    ] },
    fr: { h: `4 · Taxes`, li: [
      `Taxe funéraire <span class="num">0,292%</span> (Stockholm 0,07%, Tranås 0,285%). Contribution d'Église de 0,67% à 1,85% selon la paroisse, pour les membres.`,
      `Redevance radio et télé publiques : 1% du revenu imposé, au plus <span class="num">1 184 kr</span>.`,
      `Taux du fichier 2026 du fisc (Skatteverket) pour les 290 communes, vérifiés avec l'office statistique (SCB).`,
    ] },
  },
  'ref.bb': {
    en: { h: `5 · Child benefit`, li: [
      `<span class="num">kr 1,250</span> a month per child under 16.`,
      `Extra for big families: kr 150 for 2 children, kr 730 for 3, kr 1,740 for 4, kr 2,990 for 5, +kr 1,250 for each one after that.`,
    ] },
    nl: { h: `5 · Kinderbijslag`, li: [
      `<span class="num">kr 1.250</span> per maand per kind onder 16.`,
      `Extra voor grote gezinnen: kr 150 voor 2 kinderen, kr 730 voor 3, kr 1.740 voor 4, kr 2.990 voor 5, +kr 1.250 voor elk kind daarna.`,
    ] },
    fr: { h: `5 · Allocations familiales`, li: [
      `<span class="num">1 250 kr</span> par mois par enfant de moins de 16 ans.`,
      `Supplément familles nombreuses : 150 kr pour 2 enfants, 730 kr pour 3, 1 740 kr pour 4, 2 990 kr pour 5, +1 250 kr pour chaque enfant suivant.`,
    ] },
  },
  'ref.vat': {
    en: { h: `6 · VAT on spending`, li: [
      `Standard rate <span class="num">25%</span>, applied to all your net pay as if you spent all of it. Use the slider to try other rates.`,
      `The VAT hidden in a price = price × r / (100 + r). At 25% that's 25 / 125 = <span class="num">20%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">25%</span>, toegepast op je hele nettoloon alsof je alles uitgeeft. Gebruik de schuifregelaar om andere tarieven te proberen.`,
      `De btw in een prijs = prijs × r / (100 + r). Bij 25% is dat 25 / 125 = <span class="num">20%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">25%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour essayer d'autres taux.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 25%, cela fait 25 / 125 = <span class="num">20%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and parliament`, li: [
      `Prime Minister and Speaker <span class="num">kr 211,000</span>/month, ministers <span class="num">kr 166,500</span>, since 1 July 2026. Members of the Riksdag <span class="num">kr 81,400</span> since 1 January 2026.`,
      `All are taxed like salaries, and employer fees are paid on top as on any pay.`,
    ] },
    nl: { h: `7 · Regering en parlement`, li: [
      `Premier en Kamervoorzitter <span class="num">kr 211.000</span>/maand, ministers <span class="num">kr 166.500</span>, sinds 1 juli 2026. Leden van de Riksdag <span class="num">kr 81.400</span> sinds 1 januari 2026.`,
      `Allemaal belast als lonen, en er worden werkgeversbijdragen bovenop betaald zoals op elk loon.`,
    ] },
    fr: { h: `7 · Gouvernement et parlement`, li: [
      `Premier ministre et président du Riksdag <span class="num">211 000 kr</span>/mois, ministres <span class="num">166 500 kr</span>, depuis le 1er juillet 2026. Députés <span class="num">81 400 kr</span> depuis le 1er janvier 2026.`,
      `Tous sont imposés comme des salaires, et les cotisations patronales sont payées en plus comme sur toute paie.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Pensions and insurance from sector agreements (ITP, SAF-LO, AFA), deductions for travel to work and for a second home near work, tax credits for home repairs and household help (ROT/RUT), housing allowance, child support, and income from savings.`,
      `Workers aged 66 born in 1959 get the bigger senior tax-free amount but full employer fees: pick the closest age group. Amounts are the final tax for the year, smoothed: the tax office rounds the tax-free amount up to the next kr 100. Sweden has no minimum wage set by law, so none is shown.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Pensioenen en verzekeringen uit cao's (ITP, SAF-LO, AFA), aftrek voor woon-werkverkeer en voor een tweede woning bij het werk, belastingkortingen voor verbouwingen en huishoudhulp (ROT/RUT), huurtoeslag, kinderalimentatie, en inkomen uit spaargeld.`,
      `Werknemers van 66 geboren in 1959 krijgen het grotere belastingvrije bedrag voor ouderen maar volledige werkgeversbijdragen: kies de dichtste leeftijdsgroep. De bedragen zijn de definitieve belasting voor het jaar, afgevlakt: de belastingdienst rondt het belastingvrije bedrag af naar boven op 100 kronen. Zweden heeft geen wettelijk minimumloon, dus er wordt er geen getoond.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les retraites et assurances des conventions collectives (ITP, SAF-LO, AFA), les déductions pour les trajets et pour un second logement près du travail, les crédits d'impôt pour travaux et aide à domicile (ROT/RUT), l'aide au logement, les pensions alimentaires et les revenus de l'épargne.`,
      `Les salariés de 66 ans nés en 1959 ont le montant non imposé plus grand des seniors mais des cotisations patronales pleines : choisissez la tranche d'âge la plus proche. Les montants sont l'impôt définitif de l'année, lissé : le fisc arrondit le montant non imposé à la centaine supérieure. La Suède n'a pas de salaire minimum légal, aucun n'est donc affiché.`,
    ] },
  },

  inheritLink: {
    en: `Sweden has no inheritance tax: see what that means →`,
    nl: `Zweden heeft geen erfbelasting: zie wat dat betekent →`,
    fr: `La Suède n'a pas de droits de succession : voyez ce que cela implique →`,
  },
  disclaimer: {
    en: `This is only an estimate to help you get an idea. Your final tax decision from Skatteverket has the final word.`,
    nl: `Dit is alleen een schatting om je een idee te geven. Je definitieve aanslag van Skatteverket is bepalend.`,
    fr: `Ceci n'est qu'une estimation pour vous donner une idée. Seule votre imposition définitive par Skatteverket fait foi.`,
  },

  'src.skv433': { en: `Skatteverket: technical description SKV 433 (2026)`, nl: `Skatteverket: technische beschrijving SKV 433 (2026)`, fr: `Skatteverket : description technique SKV 433 (2026)` },
  'src.skvRates': { en: `Skatteverket: amounts and rates 2026`, nl: `Skatteverket: bedragen en tarieven 2026`, fr: `Skatteverket : montants et taux 2026` },
  'src.skvData': { en: `Skatteverket: tax rates by parish 2026`, nl: `Skatteverket: tarieven per parochie 2026`, fr: `Skatteverket : taux par paroisse 2026` },
  'src.scb': { en: `SCB: municipal taxes 2026`, nl: `SCB: gemeentebelastingen 2026`, fr: `SCB : impôts communaux 2026` },
  'src.agFees': { en: `Employer fees 2026 (Livsmedelsföretagen)`, nl: `Werkgeversbijdragen 2026 (Livsmedelsföretagen)`, fr: `Cotisations patronales 2026 (Livsmedelsföretagen)` },
  'src.youth': { en: `Skatteverket: lower fees for young people`, nl: `Skatteverket: lagere bijdragen voor jongeren`, fr: `Skatteverket : cotisations réduites pour les jeunes` },
  'src.bb': { en: `Försäkringskassan: current amounts`, nl: `Försäkringskassan: huidige bedragen`, fr: `Försäkringskassan : montants actuels` },
  'src.vat': { en: `Skatteverket: VAT rates`, nl: `Skatteverket: btw-tarieven`, fr: `Skatteverket : taux de TVA` },
  'src.wages': { en: `Ekonomifakta: median and mean wage (SCB)`, nl: `Ekonomifakta: mediaan- en gemiddeld loon (SCB)`, fr: `Ekonomifakta : salaires médian et moyen (SCB)` },
  'src.minPay': { en: `Government Offices: ministers' fees`, nl: `Regeringskansliet: honoraria van ministers`, fr: `Regeringskansliet : indemnités des ministres` },
  'src.mpPay': { en: `Riksdag: members' fees`, nl: `Riksdag: honoraria van de leden`, fr: `Riksdag : indemnités des députés` },
  'src.rb': { en: `Riksbank: annual report 2025`, nl: `Riksbank: jaarverslag 2025`, fr: `Riksbank : rapport annuel 2025` },
  'src.sbab': { en: `SBAB: remuneration report 2025`, nl: `SBAB: bezoldigingsverslag 2025`, fr: `SBAB : rapport de rémunération 2025` },
  'src.sveaskog': { en: `Sveaskog: remuneration report 2025`, nl: `Sveaskog: bezoldigingsverslag 2025`, fr: `Sveaskog : rapport de rémunération 2025` },

  // Known gaps
  'gap.creditOrder': {
    en: `The discounts come off the municipal tax in the order the monthly tax tables use: first the pension fee, then the tax credit for working, then the small reduction on work income. We assume the final tax uses the same order.`,
    nl: `De kortingen gaan van de gemeentebelasting af in de volgorde van de maandelijkse belastingtabellen: eerst de pensioenbijdrage, dan de belastingkorting voor werkenden, dan de kleine korting op arbeidsinkomen. We nemen aan dat de definitieve belasting dezelfde volgorde gebruikt.`,
    fr: `Les réductions sont retirées de l'impôt communal dans l'ordre des barèmes mensuels : d'abord la cotisation retraite, puis le crédit d'impôt pour le travail, puis la petite réduction sur les revenus du travail. On suppose que l'impôt définitif suit le même ordre.`,
  },
  'gap.rounding': {
    en: `The tax-free amount is smoothed instead of rounded up to the next kr 100. Compared with the tax agency's 2026 monthly table 32, the result is at most kr 3 a month off.`,
    nl: `Het belastingvrije bedrag is afgevlakt in plaats van naar boven afgerond op 100 kronen. Vergeleken met de maandtabel 32 van de belastingdienst voor 2026 wijkt de uitkomst hooguit kr 3 per maand af.`,
    fr: `Le montant non imposé est lissé au lieu d'être arrondi à la centaine de couronnes supérieure. Comparé au barème mensuel 32 du fisc pour 2026, l'écart est d'au plus 3 kr par mois.`,
  },
  'gap.youth': {
    en: `The lower 20.81% employer fee for young workers, on pay up to kr 25,000 a month (from 1 April 2026), is spread as 9/12 of the year, not month by month. Birth years 2003 to 2007 follow the tax agency; some payroll firms describe the ages differently.`,
    nl: `De lagere werkgeversbijdrage van 20,81% voor jonge werknemers, op loon tot kr 25.000 per maand (vanaf 1 april 2026), wordt gespreid als 9/12 van het jaar, niet maand per maand. De geboortejaren 2003 tot 2007 volgen de belastingdienst; sommige loonbureaus omschrijven de leeftijden anders.`,
    fr: `La cotisation patronale réduite de 20,81% pour les jeunes, sur le salaire jusqu'à 25 000 kr par mois (depuis le 1er avril 2026), est répartie sur 9/12 de l'année, pas mois par mois. Les années de naissance 2003 à 2007 suivent le fisc ; certains cabinets de paie décrivent les âges autrement.`,
  },
  'gap.age': {
    en: `Age groups are rough. People born in 1959 get the bigger senior tax-free amount but full employer fees, and the employer pays nothing for people born before 1938. Pick the closest group.`,
    nl: `De leeftijdsgroepen zijn ruw. Wie in 1959 geboren is, krijgt het grotere belastingvrije bedrag voor ouderen maar volledige werkgeversbijdragen, en voor wie vóór 1938 geboren is, betaalt de werkgever niets. Kies de dichtste groep.`,
    fr: `Les tranches d'âge sont approximatives. Les personnes nées en 1959 ont le montant non imposé plus grand des seniors mais des cotisations patronales pleines, et l'employeur ne paie rien pour celles nées avant 1938. Choisissez la tranche la plus proche.`,
  },
  'gap.church': {
    en: `A municipality's church fee is the simple average of its parishes; your own parish can differ (0.67% to 1.85%). If you set the rate by hand, the burial and church fees use the national averages, 0.26% and 1.06%.`,
    nl: `De kerkbijdrage van een gemeente is het gewone gemiddelde van haar parochies; jouw parochie kan afwijken (0,67% tot 1,85%). Stel je het tarief zelf in, dan gelden de landelijke gemiddelden voor begrafenis- en kerkbijdrage, 0,26% en 1,06%.`,
    fr: `La contribution d'Église d'une commune est la simple moyenne de ses paroisses ; votre paroisse peut différer (0,67% à 1,85%). Si vous réglez le taux à la main, les taxes funéraire et d'Église prennent les moyennes nationales, 0,26% et 1,06%.`,
  },
  'gap.vatFood': {
    en: `VAT uses one rate on all your net pay (25% by default). Food at 6% from 1 April 2026 (down from 12%) isn't weighed in, and that cut comes from news reports of the parliament vote.`,
    nl: `De btw gebruikt één tarief op je hele nettoloon (standaard 25%). Voeding aan 6% vanaf 1 april 2026 (was 12%) is niet meegewogen, en die verlaging komt uit nieuwsberichten over de stemming in het parlement.`,
    fr: `La TVA utilise un seul taux sur tout votre salaire net (25% par défaut). L'alimentation à 6% depuis le 1er avril 2026 (au lieu de 12%) n'est pas prise en compte, et cette baisse vient d'articles de presse sur le vote du Parlement.`,
  },
  'gap.bb': {
    en: `Child benefit (kr 1,250 per child plus the big-family extra) is split half and half in a couple. That is what happens when parents don't choose otherwise.`,
    nl: `De kinderbijslag (kr 1.250 per kind plus de extra voor grote gezinnen) wordt in een koppel half om half verdeeld. Zo gaat het als ouders niets anders kiezen.`,
    fr: `Les allocations familiales (1 250 kr par enfant plus le supplément familles nombreuses) sont partagées moitié-moitié dans un couple. C'est ce qui se passe si les parents ne choisissent rien d'autre.`,
  },
  'gap.wages': {
    en: `Median kr 38,300 (half of full-time workers earn more, half less) and average kr 42,900 a month are 2025 full-time figures from Statistics Sweden (SCB) via Ekonomifakta. 2026 figures aren't out yet.`,
    nl: `Mediaan kr 38.300 (de helft van de voltijders verdient meer, de helft minder) en gemiddelde kr 42.900 per maand zijn voltijdse cijfers van 2025 van het statistiekbureau (SCB) via Ekonomifakta. Die van 2026 zijn er nog niet.`,
    fr: `Médiane de 38 300 kr (la moitié des temps pleins gagne plus, l'autre moitié moins) et moyenne de 42 900 kr par mois : chiffres temps plein 2025 de l'office statistique (SCB) via Ekonomifakta. Ceux de 2026 ne sont pas encore publiés.`,
  },
  'gap.minYear': {
    en: `The Prime Minister's kr 211,000 and ministers' kr 166,500 a month apply from 1 July 2026, but are counted for all 12 months. Before July they got about kr 204,000 and kr 161,000.`,
    nl: `De kr 211.000 van de premier en kr 166.500 van ministers per maand gelden vanaf 1 juli 2026, maar zijn voor alle 12 maanden geteld. Vóór juli kregen ze ongeveer kr 204.000 en kr 161.000.`,
    fr: `Les 211 000 kr du Premier ministre et les 166 500 kr des ministres par mois s'appliquent depuis le 1er juillet 2026, mais sont comptés sur les 12 mois. Avant juillet, ils touchaient environ 204 000 kr et 161 000 kr.`,
  },
  'gap.minFees': {
    en: `We assume employer fees are paid on ministers' pay as on any salary. The parliament says so for its members; for ministers we found nothing in writing.`,
    nl: `We nemen aan dat op het loon van ministers werkgeversbijdragen betaald worden zoals op elk loon. Het parlement zegt dat voor zijn leden; voor ministers vonden we niets op papier.`,
    fr: `On suppose que les cotisations patronales sont payées sur la paie des ministres comme sur tout salaire. Le Parlement le dit pour ses membres ; pour les ministres, nous n'avons rien trouvé d'écrit.`,
  },
  'gap.corpPay': {
    en: `Pay of the Riksbank governor (kr 3.6M) and the SBAB and Sveaskog CEOs comes from their 2025 reports. The higher figure for the CEOs includes what is paid into their pension.`,
    nl: `Het loon van de gouverneur van de Riksbank (3,6 miljoen kr) en de CEO's van SBAB en Sveaskog komt uit hun verslagen over 2025. Het hoogste bedrag voor de CEO's omvat wat er in hun pensioen gestort wordt.`,
    fr: `La rémunération du gouverneur de la Riksbank (3,6 millions de kr) et des directeurs de SBAB et Sveaskog vient de leurs rapports 2025. Le montant haut des directeurs comprend ce qui est versé pour leur retraite.`,
  },
  'gap.notIncl': {
    en: `Pensions from sector agreements, work deductions, the home repair and household help credits (ROT/RUT), housing allowance and income from savings are left out: see "What's not included".`,
    nl: `Pensioenen uit cao's, aftrekposten voor werk, de kortingen voor verbouwingen en huishoudhulp (ROT/RUT), huurtoeslag en inkomen uit spaargeld zijn weggelaten: zie "Wat niet is meegerekend".`,
    fr: `Les retraites des conventions collectives, les déductions liées au travail, les crédits pour travaux et aide à domicile (ROT/RUT), l'aide au logement et les revenus de l'épargne sont laissés de côté : voir « Ce qui n'est pas inclus ».`,
  },
};
