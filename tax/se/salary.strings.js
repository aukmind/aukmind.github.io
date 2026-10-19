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
    en: `Sweden taxes each person on their own income. A partner only changes how child benefit is split.`,
    nl: `Zweden belast iedereen apart op het eigen inkomen. Een partner verandert enkel hoe de kinderbijslag verdeeld wordt.`,
    fr: `La Suède impose chacun séparément sur ses propres revenus. Un conjoint change seulement le partage des allocations familiales.`,
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
    en: `A minister's fee (arvode) is taxed exactly like a salary, and the State pays the usual employer fees on it.`,
    nl: `Het honorarium (arvode) van een minister wordt belast als een loon, en de staat betaalt er de gewone werkgeversbijdragen op.`,
    fr: `L'indemnité (arvode) d'un ministre est imposée comme un salaire, et l'État paie dessus les cotisations patronales habituelles.`,
  },
  minSalaryHint: {
    en: `Yearly fee at the rate in force since 1 July 2026. Statutory amount by default.`,
    nl: `Jaarlijks honorarium aan het tarief sinds 1 juli 2026. Standaard het vastgelegde bedrag.`,
    fr: `Indemnité annuelle au taux en vigueur depuis le 1er juillet 2026. Montant officiel par défaut.`,
  },
  'tip.ministerRules': {
    en: `Ministers' fees are set by the Statsrådsarvodesnämnden, a board under the Riksdag: kr 211,000 a month for the Prime Minister and kr 166,500 for other ministers since 1 July 2026 (about 3.4% more than before). A minister who is also an MP gets no MP fee meanwhile. The fee is taxed like any salary, with the same deductions and credits. Extra living costs for working away from home are reimbursed and not counted here.`,
    nl: `De honoraria van ministers worden vastgelegd door de Statsrådsarvodesnämnden, een raad onder de Riksdag: kr 211.000 per maand voor de premier en kr 166.500 voor de andere ministers sinds 1 juli 2026 (ongeveer 3,4% meer dan ervoor). Een minister die ook Kamerlid is, krijgt intussen geen Kamervergoeding. Het honorarium wordt belast als elk loon, met dezelfde aftrekken en kortingen. Extra verblijfskosten worden terugbetaald en tellen hier niet mee.`,
    fr: `Les indemnités des ministres sont fixées par la Statsrådsarvodesnämnden, une commission du Riksdag : 211 000 kr par mois pour le Premier ministre et 166 500 kr pour les autres ministres depuis le 1er juillet 2026 (environ 3,4% de plus qu'avant). Un ministre également député ne touche pas l'indemnité de député pendant ce temps. L'indemnité est imposée comme tout salaire, avec les mêmes abattements et réductions. Les frais de séjour hors domicile sont remboursés et ne sont pas comptés ici.`,
  },
  'bd.minGross': { en: `Minister's fee (arvode)`, nl: `Honorarium van de minister (arvode)`, fr: `Indemnité de ministre (arvode)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, min) => `${pm} a month for the Prime Minister, ${min} for other ministers, from 1 July 2026.`,
    nl: (pm, min) => `${pm} per maand voor de premier, ${min} voor de andere ministers, vanaf 1 juli 2026.`,
    fr: (pm, min) => `${pm} par mois pour le Premier ministre, ${min} pour les autres ministres, à partir du 1er juillet 2026.`,
  },
  'tip.stateCost': {
    en: `The fee + the 31.42% employer fees the State pays on it. The work and full tax rates are measured against it.`,
    nl: `Het honorarium + de werkgeversbijdragen van 31,42% die de staat erop betaalt. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `L'indemnité + les cotisations patronales de 31,42% que l'État paie dessus. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.speaker': { en: `Speaker of the Riksdag`, nl: `Voorzitter van de Riksdag`, fr: `Président du Riksdag` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `Member of the Riksdag`, nl: `Lid van de Riksdag`, fr: `Député au Riksdag` },
  'pol.stat.pm': { en: `Statutory fee since 1 July 2026`, nl: `Vastgelegd honorarium sinds 1 juli 2026`, fr: `Indemnité officielle depuis le 1er juillet 2026` },
  'pol.stat.speaker': { en: `Same fee as the Prime Minister`, nl: `Hetzelfde honorarium als de premier`, fr: `Même indemnité que le Premier ministre` },
  'pol.stat.minister': { en: `Statutory fee since 1 July 2026`, nl: `Vastgelegd honorarium sinds 1 juli 2026`, fr: `Indemnité officielle depuis le 1er juillet 2026` },
  'pol.stat.mp': { en: `Basic fee since 1 January 2026, without committee supplements`, nl: `Basishonorarium sinds 1 januari 2026, zonder toeslagen voor commissies`, fr: `Indemnité de base depuis le 1er janvier 2026, hors suppléments de commission` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-owned companies, 2025 pay`, nl: `Topmensen van staatsbedrijven, loon 2025`, fr: `Dirigeants d'entreprises publiques, rémunération 2025` },
  'pol.rb': { en: `Governor, Sveriges Riksbank`, nl: `Gouverneur, Sveriges Riksbank`, fr: `Gouverneur de la Sveriges Riksbank` },
  'pol.sbab': { en: `CEO, SBAB Bank (State-owned)`, nl: `CEO, SBAB Bank (staatsbank)`, fr: `Directeur général de SBAB Bank (publique)` },
  'pol.sveaskog': { en: `CEO, Sveaskog (State forests)`, nl: `CEO, Sveaskog (staatsbossen)`, fr: `Directeur général de Sveaskog (forêts publiques)` },
  'polNote.pm': {
    en: `Taxed exactly like a salary: same deductions, credits and fees. The head sits at the employee salary with the same net, with your settings; the dot is the actual fee.`,
    nl: `Belast precies zoals een loon: dezelfde aftrekken, kortingen en bijdragen. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw instellingen; het bolletje is het echte honorarium.`,
    fr: `Imposée exactement comme un salaire : mêmes abattements, réductions et cotisations. La tête est au salaire d'un salarié au même net, avec vos réglages ; le point est l'indemnité réelle.`,
  },
  'polNote.minister': {
    en: `Taxed exactly like a salary: same deductions, credits and fees. The head sits at the employee salary with the same net, with your settings; the dot is the actual fee.`,
    nl: `Belast precies zoals een loon: dezelfde aftrekken, kortingen en bijdragen. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw instellingen; het bolletje is het echte honorarium.`,
    fr: `Imposée exactement comme un salaire : mêmes abattements, réductions et cotisations. La tête est au salaire d'un salarié au même net, avec vos réglages ; le point est l'indemnité réelle.`,
  },
  'polNote.mp': {
    en: `The fee is taxed like a salary and carries pension rights; the Riksdag pays social fees on it. Tax-free per diems for MPs living far from Stockholm are not counted.`,
    nl: `Het honorarium wordt belast als een loon en bouwt pensioen op; de Riksdag betaalt er sociale bijdragen op. Belastingvrije dagvergoedingen voor Kamerleden die ver van Stockholm wonen, tellen niet mee.`,
    fr: `L'indemnité est imposée comme un salaire et ouvre des droits à la retraite ; le Riksdag paie dessus les cotisations sociales. Les indemnités journalières exonérées des députés éloignés de Stockholm ne sont pas comptées.`,
  },
  'polTipNote.rb': {
    en: `Salary and other pay in 2025 from the Riksbank's annual report (kr 3.6 million; 3.4 million in 2024).`,
    nl: `Loon en andere vergoedingen in 2025 uit het jaarverslag van de Riksbank (3,6 miljoen kr; 3,4 miljoen in 2024).`,
    fr: `Salaire et autres rémunérations 2025 selon le rapport annuel de la Riksbank (3,6 millions kr ; 3,4 millions en 2024).`,
  },
  'polTipNote.sbab': {
    en: `2025: base salary kr 6,642,000; the top of the range adds benefits and the kr 1,939,000 pension contribution. State-owned companies pay no bonus to their CEO.`,
    nl: `2025: basisloon kr 6.642.000; de bovenkant van de vork telt voordelen en de pensioenbijdrage van kr 1.939.000 mee. Staatsbedrijven betalen hun CEO geen bonus.`,
    fr: `2025 : salaire de base 6 642 000 kr ; le haut de la fourchette ajoute les avantages et la cotisation retraite de 1 939 000 kr. Les entreprises publiques ne versent pas de bonus à leur directeur.`,
  },
  'polTipNote.sveaskog': {
    en: `2025: base salary kr 5,323,000; the top of the range adds benefits and the kr 1,650,000 pension contribution. No variable pay.`,
    nl: `2025: basisloon kr 5.323.000; de bovenkant van de vork telt voordelen en de pensioenbijdrage van kr 1.650.000 mee. Geen variabel loon.`,
    fr: `2025 : salaire de base 5 323 000 kr ; le haut de la fourchette ajoute les avantages et la cotisation retraite de 1 650 000 kr. Pas de variable.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ months paid. Members of government and parliament are taxed like employees, so they sit where an employee earns the same net. Fees: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ betaalde maanden. Regerings- en parlementsleden worden belast als werknemers en staan dus waar een werknemer hetzelfde netto verdient. Honoraria: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ mois payés. Les membres du gouvernement et du parlement sont imposés comme des salariés : ils sont placés là où un salarié gagne le même net. Indemnités : ${links}.`,
  },

  trapTitle: { en: (a, b) => `Why so high between ${a} and ${b}?`, nl: (a, b) => `Waarom zo hoog tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi si élevé entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, fee) => `From ${a} you owe the 7% pension fee: about ${fee} at once on the first krona above the threshold. The fee is credited against your income tax, but at this pay there is little or no tax to credit it against, so it is a real cost until ${b}. Above that the credit covers it in full and the fee costs nothing.`,
    nl: (a, b, fee) => `Vanaf ${a} betaal je de pensioenbijdrage van 7%: ongeveer ${fee} in één keer op de eerste kroon boven de drempel. De bijdrage wordt verrekend met je inkomstenbelasting, maar op dit loon is er weinig of geen belasting om mee te verrekenen, dus kost ze echt geld tot ${b}. Daarboven dekt de korting ze volledig en kost de bijdrage niets.`,
    fr: (a, b, fee) => `À partir de ${a}, vous devez la cotisation retraite de 7% : environ ${fee} d'un coup sur la première couronne au-dessus du seuil. Elle est déduite de votre impôt sur le revenu, mais à ce niveau il y a peu ou pas d'impôt à réduire : c'est un vrai coût jusqu'à ${b}. Au-delà, la réduction la compense entièrement et la cotisation ne coûte rien.`,
  },
  topTitle: {
    en: top => `Why the step at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi la marche à ${top} ?`,
  },
  topBody: {
    en: (top, flat, br) => `Up to ${flat} the earned income credit grows with your pay and softens the municipal tax; above, it stays flat, so each extra krona is taxed a little more. From ${top} your taxable income passes ${br}, and the 20% state income tax comes on top of the municipal tax (the "brytpunkt").`,
    nl: (top, flat, br) => `Tot ${flat} groeit de arbeidskorting mee met je loon en verzacht ze de gemeentebelasting; daarboven blijft ze gelijk, dus elke extra kroon wordt iets zwaarder belast. Vanaf ${top} komt je belastbaar inkomen boven ${br} en komt de staatsbelasting van 20% bovenop de gemeentebelasting (de "brytpunkt").`,
    fr: (top, flat, br) => `Jusqu'à ${flat}, le crédit sur le travail augmente avec votre salaire et allège l'impôt communal ; au-delà, il reste fixe et chaque couronne en plus est un peu plus imposée. À partir de ${top}, votre revenu imposable dépasse ${br} et l'impôt d'État de 20% s'ajoute à l'impôt communal (le « brytpunkt »).`,
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
    en: `12 monthly salaries, the usual Swedish package. Paid holidays are part of the monthly salary.`,
    nl: `12 maandlonen, het gebruikelijke Zweedse pakket. Betaald verlof zit in het maandloon.`,
    fr: `12 salaires mensuels, le cas habituel en Suède. Les congés payés sont inclus dans le salaire mensuel.`,
  },
  'tip.f1211': {
    en: `Adds the holiday supplement (semestertillägg) of 0.43% of a monthly salary per holiday day, 25 days, as in most white-collar agreements.`,
    nl: `Voegt de vakantietoeslag (semestertillägg) toe van 0,43% van een maandloon per vakantiedag, 25 dagen, zoals in de meeste cao's voor bedienden.`,
    fr: `Ajoute le supplément de congés (semestertillägg) de 0,43% d'un salaire mensuel par jour de congé, sur 25 jours, comme dans la plupart des conventions de cadres et employés.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `There is no joint return in Sweden: each partner is taxed on their own income, so your partner's pay changes nothing in your tax. Child benefit goes half to each parent unless they choose otherwise.`,
    nl: `Zweden kent geen gezamenlijke aangifte: elke partner wordt belast op het eigen inkomen, dus het loon van je partner verandert niets aan jouw belasting. De kinderbijslag gaat voor de helft naar elke ouder, tenzij ze anders kiezen.`,
    fr: `Pas de déclaration commune en Suède : chacun est imposé sur ses propres revenus, le salaire du conjoint ne change donc rien à votre impôt. Les allocations familiales vont pour moitié à chaque parent, sauf choix contraire.`,
  },
  'tip.church': {
    en: rate => `Members of the Church of Sweden pay a church fee on taxable income, set by each parish: ${rate} here (the average of the municipality's parishes; 1.06% nationally). Everyone pays the burial fee, member or not.`,
    nl: rate => `Leden van de Zweedse Kerk betalen een kerkbijdrage op het belastbaar inkomen, bepaald door elke parochie: hier ${rate} (het gemiddelde van de parochies in de gemeente; 1,06% landelijk). Iedereen betaalt de begrafenisbijdrage, lid of niet.`,
    fr: rate => `Les membres de l'Église de Suède paient une contribution sur le revenu imposable, fixée par chaque paroisse : ${rate} ici (la moyenne des paroisses de la commune ; 1,06% au niveau national). Tout le monde paie la taxe funéraire, membre ou non.`,
  },
  'tip.bbToggle': {
    en: `Försäkringskassan pays child benefit for every child under 16, whatever your income. It doesn't change with your pay, so it lowers your average rate but not the rate on the next krona.`,
    nl: `Försäkringskassan betaalt kinderbijslag voor elk kind onder 16, ongeacht je inkomen. Het verandert niet met je loon: het verlaagt je gemiddelde tarief, niet het tarief op de volgende kroon.`,
    fr: `La Försäkringskassan verse les allocations familiales pour chaque enfant de moins de 16 ans, quel que soit le revenu. Elles ne varient pas avec le salaire : elles baissent votre taux moyen, pas le taux sur la couronne suivante.`,
  },
  'tip.komRule': {
    en: (lo, hi) => `Each municipality and region sets its own income tax rate, paid on taxable income. Together they range from ${lo} to ${hi} in 2026, 32.38% on average. Pick your municipality above or set the rate here.`,
    nl: (lo, hi) => `Elke gemeente en regio bepaalt haar eigen inkomstenbelasting op het belastbaar inkomen. Samen gaat dat van ${lo} tot ${hi} in 2026, gemiddeld 32,38%. Kies je gemeente hierboven of stel het tarief hier in.`,
    fr: (lo, hi) => `Chaque commune et chaque région fixe son taux d'impôt sur le revenu imposable. Ensemble, de ${lo} à ${hi} en 2026, 32,38% en moyenne. Choisissez votre commune ci-dessus ou réglez le taux ici.`,
  },
  'tip.komShort': {
    en: `Most of the income tax: municipal + regional rate × taxable income, minus the pension fee credit, the earned income credit and the earned income reduction.`,
    nl: `Het grootste deel van de inkomstenbelasting: gemeente- + regiotarief × belastbaar inkomen, min de korting voor de pensioenbijdrage, de arbeidskorting en de korting op arbeidsinkomen.`,
    fr: `L'essentiel de l'impôt sur le revenu : taux communal + régional × revenu imposable, moins la réduction pour cotisation retraite, le crédit sur le travail et la réduction sur revenus d'activité.`,
  },
  'tip.kom': {
    en: (name, rate) => `${name ? name + ': ' : ''}${rate} on taxable income, the sum of the municipal and regional rates. The credits below are taken from it, never below zero.`,
    nl: (name, rate) => `${name ? name + ': ' : ''}${rate} op het belastbaar inkomen, de som van het gemeente- en regiotarief. De kortingen hieronder gaan ervan af, nooit onder nul.`,
    fr: (name, rate) => `${name ? name + ' : ' : ''}${rate} sur le revenu imposable, la somme des taux communal et régional. Les réductions ci-dessous s'y imputent, jamais en dessous de zéro.`,
  },
  'tip.capped': { en: v => `full credit ${v}, capped by the tax`, nl: v => `volledige korting ${v}, begrensd door de belasting`, fr: v => `crédit complet ${v}, plafonné par l'impôt` },
  'tip.size': {
    en: `Born 1959 to 2002: employer fees 31.42%. Born 2003 to 2007: from 1 April 2026 the employer pays 20.81% on pay up to kr 25,000 a month (9 of the 12 months of 2026). Born 1958 or earlier: the employer pays only the 10.21% old-age pension fee, and you get the larger basic deduction and earned income credit for people 66 or older.`,
    nl: `Geboren 1959 tot 2002: werkgeversbijdragen 31,42%. Geboren 2003 tot 2007: vanaf 1 april 2026 betaalt de werkgever 20,81% op het loon tot kr 25.000 per maand (9 van de 12 maanden van 2026). Geboren 1958 of vroeger: de werkgever betaalt enkel de ouderdomspensioenbijdrage van 10,21%, en jij krijgt de grotere basisaftrek en arbeidskorting voor 66-plussers.`,
    fr: `Nés de 1959 à 2002 : cotisations patronales de 31,42%. Nés de 2003 à 2007 : depuis le 1er avril 2026, l'employeur paie 20,81% sur le salaire jusqu'à 25 000 kr par mois (9 des 12 mois de 2026). Nés en 1958 ou avant : l'employeur ne paie que la cotisation vieillesse de 10,21%, et vous avez l'abattement de base et le crédit sur le travail majorés des 66 ans et plus.`,
  },
  'tip.costShort': { en: `Gross salary + employer fees.`, nl: `Brutoloon + werkgeversbijdragen.`, fr: `Salaire brut + cotisations patronales.` },
  'tip.er': {
    en: `Paid by your employer on top of your gross salary, on all of it with no ceiling: old-age pension 10.21%, health 3.55%, parental 2.00%, survivors 0.30%, work injury 0.10%, labour market 2.64% and the general payroll fee 12.62%.`,
    nl: `Betaald door je werkgever bovenop je brutoloon, op het hele loon zonder plafond: ouderdomspensioen 10,21%, ziekte 3,55%, ouderschap 2,00%, nabestaanden 0,30%, arbeidsongevallen 0,10%, arbeidsmarkt 2,64% en de algemene loonheffing 12,62%.`,
    fr: `Payées par votre employeur en plus du salaire brut, sur tout le salaire sans plafond : vieillesse 10,21%, maladie 3,55%, parentalité 2,00%, survivants 0,30%, accidents du travail 0,10%, marché du travail 2,64% et taxe générale sur les salaires 12,62%.`,
  },
  'tip.erSenior': {
    en: `For workers born 1958 or earlier the employer pays only the old-age pension fee of 10.21%.`,
    nl: `Voor werknemers geboren in 1958 of vroeger betaalt de werkgever enkel de ouderdomspensioenbijdrage van 10,21%.`,
    fr: `Pour les salariés nés en 1958 ou avant, l'employeur ne paie que la cotisation vieillesse de 10,21%.`,
  },
  'tip.youthCut': { en: `Youth reduction, April to December`, nl: `Jongerenkorting, april tot december`, fr: `Réduction jeunes, d'avril à décembre` },
  'tip.erM': {
    en: `Collective-agreement pension and insurance premiums (ITP, SAF-LO, AFA) are not counted: they are insurance, not tax.`,
    nl: `Pensioen- en verzekeringspremies uit cao's (ITP, SAF-LO, AFA) tellen niet mee: het zijn verzekeringen, geen belastingen.`,
    fr: `Les primes de retraite et d'assurance conventionnelles (ITP, SAF-LO, AFA) ne sont pas comptées : ce sont des assurances, pas des impôts.`,
  },
  'tip.pf': {
    en: (min, cap) => `7% of your pay, withheld for your public pension, but only from ${min} a year and on at most ${cap}. The same amount comes back as a credit against your income tax, so it only costs you when your tax is too small to absorb it.`,
    nl: (min, cap) => `7% van je loon, ingehouden voor je wettelijk pensioen, maar pas vanaf ${min} per jaar en op hoogstens ${cap}. Hetzelfde bedrag komt terug als korting op je inkomstenbelasting, dus het kost enkel iets als je belasting te klein is om het op te vangen.`,
    fr: (min, cap) => `7% du salaire, prélevés pour votre retraite publique, mais seulement à partir de ${min} par an et sur au plus ${cap}. Le même montant revient en réduction de votre impôt sur le revenu : elle ne coûte que si l'impôt est trop faible pour l'absorber.`,
  },
  'tip.pfCredit': { en: `Pension fee credit`, nl: `Korting voor de pensioenbijdrage`, fr: `Réduction pour cotisation retraite` },
  'tip.ga': {
    en: (lo, max, min) => `Deducted from earned income before tax: ${lo} at low pay, rising to ${max}, then shrinking back to ${min} for high pay. It never exceeds your income.`,
    nl: (lo, max, min) => `Afgetrokken van het arbeidsinkomen vóór belasting: ${lo} bij een laag loon, oplopend tot ${max}, daarna dalend tot ${min} bij hoge lonen. Nooit meer dan je inkomen.`,
    fr: (lo, max, min) => `Déduit du revenu d'activité avant impôt : ${lo} pour un bas salaire, jusqu'à ${max}, puis redescend à ${min} pour les hauts salaires. Jamais plus que votre revenu.`,
  },
  'tip.gaSenior': {
    en: `From 66, an extra basic deduction is added on top.`,
    nl: `Vanaf 66 komt er een extra basisaftrek bovenop.`,
    fr: `À partir de 66 ans, un abattement de base supplémentaire s'ajoute.`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − basic deduction${calc}. Municipal, state, burial, church and public service fees are all taken on it.`,
    nl: calc => `Brutoloon − basisaftrek${calc}. De gemeente-, staats-, begrafenis-, kerk- en omroepbijdrage worden er allemaal op berekend.`,
    fr: calc => `Salaire brut − abattement de base${calc}. Les impôts communal et d'État, la taxe funéraire, la contribution d'Église et la redevance s'y appliquent.`,
  },
  'tip.jsa': {
    en: `A credit that rewards work, taken only from the municipal tax. It grows with pay up to 8.08 price base amounts (kr 478,336), then stays flat; since 2026 there is no phase-out at high pay. It is worth more in high-tax municipalities.`,
    nl: `Een korting die werk beloont, enkel op de gemeentebelasting. Ze stijgt met het loon tot 8,08 prisbasbelopp (kr 478.336) en blijft dan gelijk; sinds 2026 wordt ze bij hoge lonen niet meer afgebouwd. In gemeenten met een hoog tarief is ze meer waard.`,
    fr: `Un crédit qui récompense le travail, imputé seulement sur l'impôt communal. Il augmente avec le salaire jusqu'à 8,08 montants de base (478 336 kr), puis reste stable ; depuis 2026, il ne diminue plus pour les hauts salaires. Il vaut davantage dans les communes à taux élevé.`,
  },
  'tip.jsaSenior': {
    en: `From 66 the credit is simpler: 22% of earned income up to kr 103,600, then slower growth up to kr 37,255 from kr 310,208.`,
    nl: `Vanaf 66 is de korting eenvoudiger: 22% van het arbeidsinkomen tot kr 103.600, daarna trager stijgend tot kr 37.255 vanaf kr 310.208.`,
    fr: `À partir de 66 ans, le crédit est plus simple : 22% du revenu d'activité jusqu'à 103 600 kr, puis une hausse plus lente jusqu'à 37 255 kr à partir de 310 208 kr.`,
  },
  'tip.fi': {
    en: `0.75% of taxable income above kr 40,000, at most kr 1,500, taken from the municipal tax.`,
    nl: `0,75% van het belastbaar inkomen boven kr 40.000, hoogstens kr 1.500, afgetrokken van de gemeentebelasting.`,
    fr: `0,75% du revenu imposable au-delà de 40 000 kr, au plus 1 500 kr, imputés sur l'impôt communal.`,
  },
  'tip.stat': {
    en: at => `20% of taxable income above ${at}.`,
    nl: at => `20% van het belastbaar inkomen boven ${at}.`,
    fr: at => `20% du revenu imposable au-delà de ${at}.`,
  },
  'tip.fee': {
    en: (begr, ps) => `Two small fees on taxable income that no credit can reduce: the burial fee (${begr} here) and the public service fee for radio and TV, 1% capped at ${ps} a year.`,
    nl: (begr, ps) => `Twee kleine bijdragen op het belastbaar inkomen die geen enkele korting verlaagt: de begrafenisbijdrage (hier ${begr}) en de bijdrage voor de publieke omroep, 1% met een plafond van ${ps} per jaar.`,
    fr: (begr, ps) => `Deux petites taxes sur le revenu imposable qu'aucune réduction ne diminue : la taxe funéraire (${begr} ici) et la redevance audiovisuelle, 1% plafonné à ${ps} par an.`,
  },
  'tip.begr': { en: `Burial fee`, nl: `Begrafenisbijdrage`, fr: `Taxe funéraire` },
  'tip.ps': { en: `Public service fee (1%, capped)`, nl: `Bijdrage publieke omroep (1%, begrensd)`, fr: `Redevance audiovisuelle (1%, plafonnée)` },
  'tip.bb': {
    en: child => `${child} a month per child under 16, plus a large-family supplement from the second child. Paid whatever your income; a couple usually splits it half and half.`,
    nl: child => `${child} per maand per kind onder 16, plus een toeslag voor grote gezinnen vanaf het tweede kind. Betaald ongeacht je inkomen; een koppel verdeelt ze meestal half om half.`,
    fr: child => `${child} par mois par enfant de moins de 16 ans, plus un supplément famille nombreuse dès le deuxième enfant. Versées quel que soit le revenu ; un couple les partage en général à moitié.`,
  },
  'tip.vatM': {
    en: `The 12% rate (hotels, restaurants), 6% on food from April 2026 to the end of 2027, the 6% rate (books, transport) and VAT-free spending such as rent are left out, so this is an upper bound.`,
    nl: `Het tarief van 12% (hotels, restaurants), 6% op voeding van april 2026 tot eind 2027, het tarief van 6% (boeken, vervoer) en btw-vrije uitgaven zoals huur zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Le taux de 12% (hôtels, restaurants), 6% sur l'alimentation d'avril 2026 à fin 2027, le taux de 6% (livres, transports) et les dépenses sans TVA comme le loyer ne sont pas pris en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − pension fee − income taxes after credits − fees, + child benefit if counted.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − pensioenbijdrage − inkomstenbelasting na kortingen − bijdragen, + kinderbijslag als die meetelt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisation retraite − impôts sur le revenu après réductions − taxes, + allocations familiales si elles sont comptées.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026 (assessed in 2027)`,
    nl: `Gebruikte regels · inkomstenjaar 2026 (aanslag in 2027)`,
    fr: `Règles utilisées · revenus 2026 (imposés en 2027)`,
  },
  'ref.er': {
    en: { h: `1 · Employer fees`, li: [
      `<span class="num">31.42%</span> of all pay, no ceiling: old-age pension 10.21%, health 3.55%, parental 2.00%, survivors 0.30%, work injury 0.10%, labour market 2.64%, general payroll fee 12.62%.`,
      `Born 2003 to 2007: <span class="num">20.81%</span> on pay up to kr 25,000 a month, 1 April 2026 to 30 September 2027.`,
      `Born 1938 to 1958: <span class="num">10.21%</span> only.`,
    ] },
    nl: { h: `1 · Werkgeversbijdragen`, li: [
      `<span class="num">31,42%</span> van het hele loon, geen plafond: ouderdomspensioen 10,21%, ziekte 3,55%, ouderschap 2,00%, nabestaanden 0,30%, arbeidsongevallen 0,10%, arbeidsmarkt 2,64%, algemene loonheffing 12,62%.`,
      `Geboren 2003 tot 2007: <span class="num">20,81%</span> op het loon tot kr 25.000 per maand, van 1 april 2026 tot 30 september 2027.`,
      `Geboren 1938 tot 1958: enkel <span class="num">10,21%</span>.`,
    ] },
    fr: { h: `1 · Cotisations patronales`, li: [
      `<span class="num">31,42%</span> de tout le salaire, sans plafond : vieillesse 10,21%, maladie 3,55%, parentalité 2,00%, survivants 0,30%, accidents du travail 0,10%, marché du travail 2,64%, taxe générale sur les salaires 12,62%.`,
      `Nés de 2003 à 2007 : <span class="num">20,81%</span> sur le salaire jusqu'à 25 000 kr par mois, du 1er avril 2026 au 30 septembre 2027.`,
      `Nés de 1938 à 1958 : <span class="num">10,21%</span> seulement.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `2 · Income tax`, li: [
      `Taxable income = gross − basic deduction (<span class="num">kr 25,042</span> to <span class="num">kr 45,584</span>, down to kr 17,346 at high pay). Price base amount kr 59,200.`,
      `Municipal + regional tax on all taxable income: <span class="num">28.93%</span> to <span class="num">35.65%</span>, 32.38% on average.`,
      `State income tax on taxable income:${br}`,
    ] }),
    nl: br => ({ h: `2 · Inkomstenbelasting`, li: [
      `Belastbaar inkomen = bruto − basisaftrek (<span class="num">kr 25.042</span> tot <span class="num">kr 45.584</span>, terug tot kr 17.346 bij hoge lonen). Prisbasbelopp kr 59.200.`,
      `Gemeente- + regiobelasting op het hele belastbaar inkomen: <span class="num">28,93%</span> tot <span class="num">35,65%</span>, gemiddeld 32,38%.`,
      `Staatsinkomstenbelasting op het belastbaar inkomen:${br}`,
    ] }),
    fr: br => ({ h: `2 · Impôt sur le revenu`, li: [
      `Revenu imposable = brut − abattement de base (<span class="num">25 042 kr</span> à <span class="num">45 584 kr</span>, ramené à 17 346 kr pour les hauts salaires). Montant de base des prix 59 200 kr.`,
      `Impôt communal + régional sur tout le revenu imposable : <span class="num">28,93%</span> à <span class="num">35,65%</span>, 32,38% en moyenne.`,
      `Impôt d'État sur le revenu imposable :${br}`,
    ] }),
  },
  'ref.credits': {
    en: { h: `3 · Pension fee and credits`, li: [
      `Pension fee <span class="num">7%</span> of pay from kr 25,042, on at most kr 673,038; credited in full against income tax.`,
      `Earned income credit (jobbskatteavdrag): up to <span class="num">3.027</span> price base amounts − basic deduction, × municipal rate. No phase-out in 2026.`,
      `Earned income reduction: 0.75% of taxable income above kr 40,000, at most <span class="num">kr 1,500</span>.`,
    ] },
    nl: { h: `3 · Pensioenbijdrage en kortingen`, li: [
      `Pensioenbijdrage <span class="num">7%</span> van het loon vanaf kr 25.042, op hoogstens kr 673.038; volledig verrekend met de inkomstenbelasting.`,
      `Arbeidskorting (jobbskatteavdrag): tot <span class="num">3,027</span> prisbasbelopp − basisaftrek, × gemeentetarief. Geen afbouw in 2026.`,
      `Korting op arbeidsinkomen: 0,75% van het belastbaar inkomen boven kr 40.000, hoogstens <span class="num">kr 1.500</span>.`,
    ] },
    fr: { h: `3 · Cotisation retraite et réductions`, li: [
      `Cotisation retraite <span class="num">7%</span> du salaire dès 25 042 kr, sur au plus 673 038 kr ; entièrement déduite de l'impôt sur le revenu.`,
      `Crédit sur le travail (jobbskatteavdrag) : jusqu'à <span class="num">3,027</span> montants de base − abattement de base, × taux communal. Pas de dégressivité en 2026.`,
      `Réduction sur revenus d'activité : 0,75% du revenu imposable au-delà de 40 000 kr, au plus <span class="num">1 500 kr</span>.`,
    ] },
  },
  'ref.fees': {
    en: { h: `4 · Fees`, li: [
      `Burial fee <span class="num">0.292%</span> (Stockholm 0.07%, Tranås 0.285%). Church fee 0.67% to 1.85% by parish, members only.`,
      `Public service fee 1% of taxable income, at most <span class="num">kr 1,184</span>.`,
      `Rates from Skatteverket's 2026 file for all 290 municipalities, checked against SCB.`,
    ] },
    nl: { h: `4 · Bijdragen`, li: [
      `Begrafenisbijdrage <span class="num">0,292%</span> (Stockholm 0,07%, Tranås 0,285%). Kerkbijdrage 0,67% tot 1,85% per parochie, enkel voor leden.`,
      `Bijdrage publieke omroep 1% van het belastbaar inkomen, hoogstens <span class="num">kr 1.184</span>.`,
      `Tarieven uit het bestand 2026 van Skatteverket voor alle 290 gemeenten, nagekeken met SCB.`,
    ] },
    fr: { h: `4 · Taxes`, li: [
      `Taxe funéraire <span class="num">0,292%</span> (Stockholm 0,07%, Tranås 0,285%). Contribution d'Église de 0,67% à 1,85% selon la paroisse, pour les membres.`,
      `Redevance audiovisuelle 1% du revenu imposable, au plus <span class="num">1 184 kr</span>.`,
      `Taux du fichier 2026 de Skatteverket pour les 290 communes, vérifiés avec le SCB.`,
    ] },
  },
  'ref.bb': {
    en: { h: `5 · Child benefit`, li: [
      `<span class="num">kr 1,250</span> a month per child under 16.`,
      `Large-family supplement: kr 150 for 2 children, kr 730 for 3, kr 1,740 for 4, kr 2,990 for 5, +kr 1,250 for each more.`,
    ] },
    nl: { h: `5 · Kinderbijslag`, li: [
      `<span class="num">kr 1.250</span> per maand per kind onder 16.`,
      `Toeslag grote gezinnen: kr 150 voor 2 kinderen, kr 730 voor 3, kr 1.740 voor 4, kr 2.990 voor 5, +kr 1.250 per extra kind.`,
    ] },
    fr: { h: `5 · Allocations familiales`, li: [
      `<span class="num">1 250 kr</span> par mois par enfant de moins de 16 ans.`,
      `Supplément famille nombreuse : 150 kr pour 2 enfants, 730 kr pour 3, 1 740 kr pour 4, 2 990 kr pour 5, +1 250 kr par enfant en plus.`,
    ] },
  },
  'ref.vat': {
    en: { h: `6 · VAT on spending`, li: [
      `Standard rate <span class="num">25%</span>, applied to all of your net pay as if you spent it. Use the slider to see other rates.`,
      `VAT inside a price = price × r / (100 + r): at 25% that's 25 / 125 = <span class="num">20%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">25%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar om andere tarieven te bekijken.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 25% is dat 25 / 125 = <span class="num">20%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">25%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour voir d'autres taux.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 25%, cela fait 25 / 125 = <span class="num">20%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and parliament`, li: [
      `Prime Minister and Speaker <span class="num">kr 211,000</span>/month, ministers <span class="num">kr 166,500</span>, since 1 July 2026. Members of the Riksdag <span class="num">kr 81,400</span> since 1 January 2026.`,
      `All taxed like salaries; employer fees are paid on them as on any pay.`,
    ] },
    nl: { h: `7 · Regering en parlement`, li: [
      `Premier en Kamervoorzitter <span class="num">kr 211.000</span>/maand, ministers <span class="num">kr 166.500</span>, sinds 1 juli 2026. Leden van de Riksdag <span class="num">kr 81.400</span> sinds 1 januari 2026.`,
      `Allemaal belast als lonen; er worden werkgeversbijdragen op betaald zoals op elk loon.`,
    ] },
    fr: { h: `7 · Gouvernement et parlement`, li: [
      `Premier ministre et président du Riksdag <span class="num">211 000 kr</span>/mois, ministres <span class="num">166 500 kr</span>, depuis le 1er juillet 2026. Députés <span class="num">81 400 kr</span> depuis le 1er janvier 2026.`,
      `Tous imposés comme des salaires ; les cotisations patronales s'y appliquent comme sur toute paie.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Collective-agreement pensions and insurance (ITP, SAF-LO, AFA), deductions for travel to work and double housing, ROT/RUT credits, housing allowance, maintenance support and capital income.`,
      `Workers aged 66 born in 1959 get the larger senior deduction but full employer fees: pick the closest age group. Figures are the final annual tax, smoothed: the tax office rounds the basic deduction up to the next kr 100. No statutory minimum wage exists, so none is shown.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Pensioenen en verzekeringen uit cao's (ITP, SAF-LO, AFA), aftrek voor woon-werkverkeer en dubbele huisvesting, ROT/RUT-kortingen, huursteun, onderhoudsbijdragen en inkomen uit kapitaal.`,
      `Werknemers van 66 geboren in 1959 krijgen de grotere aftrek voor ouderen maar volledige werkgeversbijdragen: kies de dichtste leeftijdsgroep. De bedragen zijn de uiteindelijke jaarbelasting, afgevlakt: de fiscus rondt de basisaftrek af naar boven op 100 kronen. Er bestaat geen wettelijk minimumloon, dus er wordt er geen getoond.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Retraites et assurances conventionnelles (ITP, SAF-LO, AFA), déductions pour trajets et double résidence, crédits ROT/RUT, aide au logement, pension alimentaire et revenus du capital.`,
      `Les salariés de 66 ans nés en 1959 ont l'abattement majoré des seniors mais des cotisations patronales pleines : choisissez la tranche d'âge la plus proche. Les montants sont l'impôt annuel définitif, lissé : le fisc arrondit l'abattement de base à la centaine supérieure. Il n'existe pas de salaire minimum légal, aucun n'est donc affiché.`,
    ] },
  },

  inheritLink: {
    en: `Sweden has no inheritance tax: see what that means →`,
    nl: `Zweden heeft geen erfbelasting: zie wat dat betekent →`,
    fr: `La Suède n'a pas de droits de succession : voyez ce que cela implique →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your final tax assessment from Skatteverket decides.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je definitieve aanslag van Skatteverket is bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seule votre taxation définitive par Skatteverket fait foi.`,
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
};
