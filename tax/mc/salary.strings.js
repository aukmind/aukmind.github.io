window.TAX_STRINGS = {
  title: { en: `Monégasque Buying Power`, nl: `Koopkracht in Monaco`, fr: `Pouvoir d'achat à Monaco` },
  eyebrow: { en: `Monaco · 2026 · employee`, nl: `Monaco · 2026 · werknemer`, fr: `Monaco · 2026 · salarié` },
  eyebrowMinister: { en: `Monaco · 2026 · public office`, nl: `Monaco · 2026 · openbaar ambt`, fr: `Monaco · 2026 · fonction publique` },
  lead: {
    en: `Every compulsory charge on a salary in Monaco in 2026, from what your employer pays to what you can buy. Monaco has no income tax for its residents, but French nationals living there, and anyone who works in Monaco and lives in France, pay French income tax on their salary.`,
    nl: `Alle verplichte heffingen op een loon in Monaco in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Monaco heft geen inkomstenbelasting op zijn inwoners, maar Fransen die er wonen, en wie in Monaco werkt en in Frankrijk woont, betalen Franse inkomstenbelasting op hun loon.`,
    fr: `Tous les prélèvements obligatoires sur un salaire à Monaco en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Monaco ne prélève pas d'impôt sur le revenu de ses résidents, mais les Français qui y vivent, et ceux qui travaillent à Monaco en habitant en France, paient l'impôt sur le revenu français sur leur salaire.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married or in a PACS. Only matters if you are taxed by France: the couple files one return, with the quotient familial.`,
    nl: `Gehuwd of met een PACS. Telt enkel als Frankrijk je belast: het koppel doet één aangifte, met het quotient familial.`,
    fr: `Marié ou pacsé. Ne compte que si vous êtes imposé en France : le couple fait une déclaration commune, avec le quotient familial.`,
  },
  region: { en: `You are`, nl: `Jij bent`, fr: `Vous êtes` },
  'region.res': { en: `Resident, not French`, nl: `Inwoner, geen Fransman`, fr: `Résident non français` },
  'region.fr': { en: `French, or living in France`, nl: `Frans, of woont in Frankrijk`, fr: `Français, ou résident en France` },
  vatStandard: { en: `(Monaco applies French VAT: 20%)`, nl: `(Monaco past de Franse btw toe: 20%)`, fr: `(Monaco applique la TVA française : 20%)` },
  'refWage.min': { en: `Minimum (SMIC)`, nl: `Minimum (SMIC)`, fr: `Minimum (SMIC)` },

  // Minister mode
  ministerOn: { en: `💼 I HOLD PUBLIC OFFICE`, nl: `💼 IK BEKLEED EEN OPENBAAR AMBT`, fr: `💼 J'OCCUPE UNE FONCTION PUBLIQUE` },
  'minRole.ms': { en: `Minister of State`, nl: `Minister van Staat`, fr: `Ministre d'État` },
  ministerHint: {
    en: `Monaco doesn't publish what its Minister of State, government councillors or National Council members earn. The only figure found is a 2007 report for the Minister of State.`,
    nl: `Monaco publiceert niet wat de Minister van Staat, de regeringsraadsleden of de leden van de Nationale Raad verdienen. Het enige gevonden bedrag is een bericht uit 2007 voor de Minister van Staat.`,
    fr: `Monaco ne publie pas la rémunération du Ministre d'État, des Conseillers de Gouvernement ni des élus du Conseil National. Le seul chiffre trouvé est une mention de 2007 pour le Ministre d'État.`,
  },
  minSalaryHint: { en: `Yearly pay. Reported amount by default.`, nl: `Jaarloon. Standaard het gemelde bedrag.`, fr: `Rémunération annuelle. Montant rapporté par défaut.` },
  'tip.ministerRules': {
    en: `The Minister of State heads the government on the Prince's behalf. His pay was reported at 180 000 € a year in 2007 and hasn't been published since. Here it is treated like a civil servant's: 6% pension deduction, no Monaco income tax. The Minister of State is traditionally French, and French nationals living in Monaco are taxed by France: pick "French" above to see that.`,
    nl: `De Minister van Staat leidt de regering namens de Vorst. Zijn loon werd in 2007 op € 180.000 per jaar geschat en is sindsdien niet gepubliceerd. Hier wordt het behandeld als dat van een ambtenaar: 6% pensioeninhouding, geen Monegaskische inkomstenbelasting. De Minister van Staat is traditioneel Frans, en Fransen die in Monaco wonen worden door Frankrijk belast: kies hierboven "Frans" om dat te zien.`,
    fr: `Le Ministre d'État dirige le gouvernement au nom du Prince. Sa rémunération était rapportée à 180 000 € par an en 2007 et n'a pas été publiée depuis. Elle est traitée ici comme celle d'un fonctionnaire : retenue de 6% pour la pension, pas d'impôt monégasque. Le Ministre d'État est traditionnellement français, et les Français résidant à Monaco sont imposés en France : choisissez « Français » plus haut pour le voir.`,
  },
  'bd.minGross': { en: `Gross pay`, nl: `Brutoloon`, fr: `Rémunération brute` },
  'bd.minEe': { en: `Pension deduction (6%)`, nl: `Pensioeninhouding (6%)`, fr: `Retenue pour pension (6%)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de Staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `Reported yearly pay of the Minister of State (2007). Housing and other benefits in kind aren't known.`,
    nl: `Gemeld jaarloon van de Minister van Staat (2007). Woning en andere voordelen in natura zijn niet bekend.`,
    fr: `Rémunération annuelle rapportée du Ministre d'État (2007). Le logement et les autres avantages en nature ne sont pas connus.`,
  },
  'tip.stateCost': {
    en: `Only the pay is counted: the State pays civil-service pensions from its budget rather than through a contribution, so there is no employer charge to add.`,
    nl: `Enkel het loon telt: de Staat betaalt ambtenarenpensioenen uit zijn begroting en niet via een bijdrage, dus er komt geen werkgeverslast bij.`,
    fr: `Seule la rémunération est comptée : l'État paie les pensions de ses fonctionnaires sur son budget et non par une cotisation, il n'y a donc pas de charge patronale à ajouter.`,
  },
  'tip.minEe': {
    en: `Monaco civil servants pay 6% of their salary for their pension (Law 1.049 of 1982). Assumed here on the whole pay; the Minister of State's own terms aren't published.`,
    nl: `Monegaskische ambtenaren betalen 6% van hun wedde voor hun pensioen (Wet 1.049 van 1982). Hier toegepast op het hele loon; de eigen voorwaarden van de Minister van Staat zijn niet gepubliceerd.`,
    fr: `Les fonctionnaires monégasques versent 6% de leur traitement pour leur pension (loi n° 1.049 de 1982). Appliqué ici à toute la rémunération ; les conditions propres au Ministre d'État ne sont pas publiées.`,
  },
  'tip.minEr': {
    en: `No employer contribution: the State pays civil-service pensions and health cover directly.`,
    nl: `Geen werkgeversbijdrage: de Staat betaalt ambtenarenpensioenen en ziektekosten rechtstreeks.`,
    fr: `Pas de cotisation patronale : l'État prend directement en charge les pensions et la couverture maladie de ses fonctionnaires.`,
  },
  'stat.ms': { en: `Minister of State`, nl: `Minister van Staat`, fr: `Ministre d'État` },
  'pol.stat.ms': { en: `Head of government, reported pay (2007)`, nl: `Regeringsleider, gemeld loon (2007)`, fr: `Chef du gouvernement, rémunération rapportée (2007)` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, brut` },
  'polTitle.corp': { en: `Heads of state-owned companies, gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon`, fr: `Dirigeants d'entreprises publiques, brut` },
  'polNote.ms': {
    en: `Reported 180 000 € a year in 2007, 6% pension deduction, no Monaco income tax (French tax if you pick "French"). The head sits at the employee salary with the same net, with your settings; the dot is the actual pay.`,
    nl: `Gemeld € 180.000 per jaar in 2007, 6% pensioeninhouding, geen Monegaskische inkomstenbelasting (Franse belasting als je "Frans" kiest). Het hoofd staat bij het werknemersloon met hetzelfde netto, met jouw instellingen; de stip is het echte loon.`,
    fr: `180 000 € par an rapportés en 2007, retenue de 6% pour la pension, pas d'impôt monégasque (impôt français si vous choisissez « Français »). La tête est placée au salaire qui donne le même net, avec vos réglages ; le point est la rémunération réelle.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom. Yearly pay, shown on the chart as yearly ÷ 12, placed where an employee would net the same. Monaco doesn't publish what its officials earn; see ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Jaarloon, op de grafiek als jaarloon ÷ 12, geplaatst waar een werknemer hetzelfde netto zou krijgen. Monaco publiceert niet wat zijn ambtsdragers verdienen; zie ${links}.`,
    fr: links => `Survolez un nom pour le détail, cliquez pour zoomer. Rémunération annuelle, affichée ÷ 12 sur le graphique, placée là où un salarié aurait le même net. Monaco ne publie pas la rémunération de ses dirigeants ; voir ${links}.`,
  },
  'src.pol.ms': { en: `Wikipedia: Minister of State (Monaco)`, nl: `Wikipedia: Minister van Staat (Monaco)`, fr: `Wikipédia : Ministre d'État (Monaco)` },

  bracketTop: { en: `last step`, nl: `laatste trede`, fr: `dernière marche` },
  chartTitle: { en: `Charges and buying power at each salary level`, nl: `Heffingen en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat selon le salaire` },
  chartAria: { en: `Charge rate per salary chart`, nl: `Grafiek van de heffingsgraad per loon`, fr: `Graphique du taux de prélèvement selon le salaire` },
  trapTitle: { en: () => `What happens at low pay?`, nl: () => `Wat gebeurt er bij een laag loon?`, fr: () => `Que se passe-t-il pour un bas salaire ?` },
  trapBody: {
    en: (min, _, region) => `Nothing builds up: there is no means-tested benefit to lose, and contributions start at the first euro at the same rates. The minimum wage is the French SMIC on Monaco's 39-hour week, ${min} a month, plus a 5% indemnity that is free of contributions (not counted here).` + (region === 'fr' ? ` French income tax is softened at low pay by the décote, and under 61 € it isn't collected.` : ` Residents pay no income tax at any pay.`),
    nl: (min, _, region) => `Er stapelt zich niets op: er is geen inkomensgebonden uitkering die je verliest, en de bijdragen beginnen bij de eerste euro aan dezelfde tarieven. Het minimumloon is het Franse SMIC op de 39-urenweek van Monaco, ${min} per maand, plus een vergoeding van 5% zonder bijdragen (hier niet meegeteld).` + (region === 'fr' ? ` De Franse inkomstenbelasting wordt bij een laag loon verzacht door de décote, en onder € 61 wordt ze niet geïnd.` : ` Inwoners betalen bij geen enkel loon inkomstenbelasting.`),
    fr: (min, _, region) => `Rien ne s'accumule : il n'y a pas de prestation sous condition de ressources à perdre, et les cotisations s'appliquent dès le premier euro aux mêmes taux. Le salaire minimum est le SMIC français sur la semaine de 39 heures de Monaco, ${min} par mois, plus une indemnité de 5% exonérée de cotisations (non comptée ici).` + (region === 'fr' ? ` L'impôt français est adouci pour les bas revenus par la décote, et n'est pas recouvré sous 61 €.` : ` Les résidents ne paient d'impôt sur le revenu à aucun niveau de salaire.`),
  },
  topTitle: {
    en: (top, b, kind) => kind === 'fr' ? `Why the step at ${top}?` : `Why does the rate fall above ${top}?`,
    nl: (top, b, kind) => kind === 'fr' ? `Waarom de sprong bij ${top}?` : `Waarom daalt het tarief boven ${top}?`,
    fr: (top, b, kind) => kind === 'fr' ? `Pourquoi la marche à ${top} ?` : `Pourquoi le taux baisse-t-il au-delà de ${top} ?`,
  },
  topBody: {
    en: (top, b, kind, parts) => kind === 'fr'
      ? `From ${top} your household's taxable income per part (${parts} parts) passes ${b}, so the top 45% French bracket starts. The CEHR adds 3% from 250 000 € of income (500 000 € for a couple).`
      : `Every contribution has a ceiling: the employer's CCSS stops at ${b}, and the last one, the supplementary pension (CMRC), stops at ${top}. Above that nothing more is taken, so the average rate falls towards zero.`,
    nl: (top, b, kind, parts) => kind === 'fr'
      ? `Vanaf ${top} gaat het belastbaar inkomen van je gezin per deel (${parts} delen) boven ${b}, en begint de hoogste Franse schijf van 45%. De CEHR voegt 3% toe vanaf € 250.000 inkomen (€ 500.000 voor een koppel).`
      : `Elke bijdrage heeft een plafond: de CCSS van de werkgever stopt bij ${b}, en de laatste, het aanvullend pensioen (CMRC), stopt bij ${top}. Daarboven wordt niets meer ingehouden, dus het gemiddelde tarief daalt naar nul.`,
    fr: (top, b, kind, parts) => kind === 'fr'
      ? `À partir de ${top}, le revenu imposable de votre foyer par part (${parts} parts) dépasse ${b} : la tranche française à 45% commence. La CEHR ajoute 3% à partir de 250 000 € de revenu (500 000 € pour un couple).`
      : `Chaque cotisation a un plafond : la CCSS patronale s'arrête à ${b}, et la dernière, la retraite complémentaire (CMRC), à ${top}. Au-delà, plus rien n'est prélevé et le taux moyen baisse vers zéro.`,
  },

  // Components
  'comp.er': { en: `Employer contributions`, nl: `Werkgeversbijdragen`, fr: `Cotisations patronales` },
  'comp.ee': { en: `Your contributions`, nl: `Jouw bijdragen`, fr: `Vos cotisations` },
  'comp.ir': { en: `French income tax`, nl: `Franse inkomstenbelasting`, fr: `Impôt sur le revenu français` },
  'bd.erCcss': { en: `Health and family (CCSS)`, nl: `Ziekte en gezin (CCSS)`, fr: `Maladie et famille (CCSS)` },
  'bd.erCar': { en: `Basic pension (CAR), employer`, nl: `Basispensioen (CAR), werkgever`, fr: `Retraite de base (CAR), employeur` },
  'bd.erCmrc': { en: `Supplementary pension (CMRC), employer`, nl: `Aanvullend pensioen (CMRC), werkgever`, fr: `Retraite complémentaire (CMRC), employeur` },
  'bd.erChom': { en: `Unemployment, employer`, nl: `Werkloosheid, werkgever`, fr: `Chômage, employeur` },
  'bd.eeCar': { en: `Basic pension (CAR)`, nl: `Basispensioen (CAR)`, fr: `Retraite de base (CAR)` },
  'bd.eeCmrc': { en: `Supplementary pension (CMRC)`, nl: `Aanvullend pensioen (CMRC)`, fr: `Retraite complémentaire (CMRC)` },
  'bd.eeChom': { en: `Unemployment`, nl: `Werkloosheid`, fr: `Chômage` },
  'bd.taxable': { en: `Taxable in France`, nl: `Belastbaar in Frankrijk`, fr: `Imposable en France` },
  'bd.abat': { en: `10% professional expenses deduction`, nl: `Aftrek van 10% beroepskosten`, fr: `Abattement de 10% pour frais professionnels` },

  // Tooltips
  'tip.f12': { en: `12 monthly salaries.`, nl: `12 maandlonen.`, fr: `12 salaires mensuels.` },
  'tip.f13': {
    en: `Many collective agreements in Monaco pay a 13th month at the end of the year. It carries contributions like any pay.`,
    nl: `Veel collectieve overeenkomsten in Monaco betalen een 13de maand op het einde van het jaar. Er zijn bijdragen op verschuldigd zoals op elk loon.`,
    fr: `Beaucoup de conventions collectives monégasques prévoient un 13e mois en fin d'année. Il est soumis aux cotisations comme tout salaire.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Monaco taxes nobody's salary, so for a resident nothing depends on the household. If France taxes you, a married or PACS couple files one return and the quotient familial splits the income in parts. Your tax is the couple's tax minus what it would be without your pay. The partner is assumed to work in Monaco too.`,
    nl: `Monaco belast geen enkel loon, dus voor een inwoner hangt niets af van het gezin. Belast Frankrijk je, dan doet een gehuwd of gePACSt koppel één aangifte en verdeelt het quotient familial het inkomen in delen. Jouw belasting is die van het koppel min wat het zonder jouw loon zou zijn. Er wordt aangenomen dat je partner ook in Monaco werkt.`,
    fr: `Monaco n'impose aucun salaire : pour un résident, rien ne dépend du foyer. Si la France vous impose, un couple marié ou pacsé fait une déclaration commune et le quotient familial divise le revenu en parts. Votre impôt est celui du couple moins ce qu'il serait sans votre salaire. Le partenaire est supposé travailler lui aussi à Monaco.`,
  },
  'tip.reg': {
    en: `Monaco has no income tax on individuals. The 1963 tax convention with France makes French nationals who moved to Monaco (or couldn't show five years there by 13 October 1962) pay French income tax as if they lived in France. Anyone who works in Monaco and lives in France is a French tax resident and is taxed the same way. Social contributions are the same for everyone working in Monaco.`,
    nl: `Monaco heeft geen inkomstenbelasting voor particulieren. Door de belastingconventie van 1963 met Frankrijk betalen Fransen die naar Monaco verhuisd zijn (of op 13 oktober 1962 geen vijf jaar verblijf konden aantonen) Franse inkomstenbelasting alsof ze in Frankrijk woonden. Wie in Monaco werkt en in Frankrijk woont, is Frans fiscaal inwoner en wordt op dezelfde manier belast. De sociale bijdragen zijn voor iedereen die in Monaco werkt dezelfde.`,
    fr: `Monaco n'a pas d'impôt sur le revenu des personnes physiques. La convention fiscale de 1963 avec la France assujettit les Français installés à Monaco (ou qui ne justifiaient pas de cinq ans de résidence au 13 octobre 1962) à l'impôt français comme s'ils vivaient en France. Quiconque travaille à Monaco en habitant en France est résident fiscal français et imposé de la même façon. Les cotisations sociales sont les mêmes pour tous ceux qui travaillent à Monaco.`,
  },
  'tip.costShort': { en: `Gross salary + employer contributions.`, nl: `Brutoloon + werkgeversbijdragen.`, fr: `Salaire brut + cotisations patronales.` },
  'tip.er': {
    en: `Paid by your employer on top of your gross salary, each up to its own ceiling. Health and family insurance (CCSS) is paid by the employer alone.`,
    nl: `Betaald door je werkgever bovenop je brutoloon, elk tot zijn eigen plafond. De ziekte- en gezinsverzekering (CCSS) betaalt enkel de werkgever.`,
    fr: `Payées par votre employeur en plus du salaire brut, chacune jusqu'à son plafond. L'assurance maladie et famille (CCSS) est payée par l'employeur seul.`,
  },
  'tip.erCcss': {
    en: cap => `Caisse de Compensation des Services Sociaux: 13.45% of pay up to ${cap} a month, for health, maternity and family benefits, including 0.25% for occupational health and 0.05% for the wage guarantee fund. Employees pay nothing toward it.`,
    nl: cap => `Caisse de Compensation des Services Sociaux: 13,45% van het loon tot ${cap} per maand, voor ziekte, moederschap en gezinsbijslag, waarvan 0,25% voor arbeidsgeneeskunde en 0,05% voor het loongarantiefonds. Werknemers betalen niets.`,
    fr: cap => `Caisse de Compensation des Services Sociaux : 13,45% du salaire jusqu'à ${cap} par mois, pour la maladie, la maternité et les prestations familiales, dont 0,25% pour la médecine du travail et 0,05% pour la garantie des salaires. Le salarié ne paie rien.`,
  },
  'tip.erCar': {
    en: cap => `Caisse Autonome des Retraites, the basic pension: 8.39% for the employer (7.45% base + 0.94% variable) on pay up to ${cap} a month.`,
    nl: cap => `Caisse Autonome des Retraites, het basispensioen: 8,39% voor de werkgever (7,45% basis + 0,94% variabel) op het loon tot ${cap} per maand.`,
    fr: cap => `Caisse Autonome des Retraites, la retraite de base : 8,39% pour l'employeur (7,45% de base + 0,94% variable) sur le salaire jusqu'à ${cap} par mois.`,
  },
  'tip.eeCar': {
    en: cap => `Basic pension (CAR): 6.85% of your pay up to ${cap} a month.`,
    nl: cap => `Basispensioen (CAR): 6,85% van je loon tot ${cap} per maand.`,
    fr: cap => `Retraite de base (CAR) : 6,85% de votre salaire jusqu'à ${cap} par mois.`,
  },
  'tip.cmrc': {
    en: (ta, tb) => `Caisse Monégasque de Retraite Complémentaire, Monaco's counterpart of Agirc-Arrco: 10.02% on pay up to ${ta} a month (band A) and 24.29% from there up to ${tb} (band B), shared 60% employer, 40% employee.`,
    nl: (ta, tb) => `Caisse Monégasque de Retraite Complémentaire, de Monegaskische tegenhanger van Agirc-Arrco: 10,02% op het loon tot ${ta} per maand (schijf A) en 24,29% daarboven tot ${tb} (schijf B), verdeeld 60% werkgever, 40% werknemer.`,
    fr: (ta, tb) => `Caisse Monégasque de Retraite Complémentaire, pendant monégasque de l'Agirc-Arrco : 10,02% sur le salaire jusqu'à ${ta} par mois (tranche A) et 24,29% au-delà jusqu'à ${tb} (tranche B), répartis 60% employeur, 40% salarié.`,
  },
  'tip.chom': {
    en: cap => `Monaco is covered by the French unemployment insurance (Unédic): 4% employer and 2.4% employee, on pay up to ${cap} a month (four times the French social security ceiling).`,
    nl: cap => `Monaco valt onder de Franse werkloosheidsverzekering (Unédic): 4% werkgever en 2,4% werknemer, op het loon tot ${cap} per maand (vier keer het Franse socialezekerheidsplafond).`,
    fr: cap => `Monaco relève de l'assurance chômage française (Unédic) : 4% employeur et 2,4% salarié, sur le salaire jusqu'à ${cap} par mois (quatre plafonds de la Sécurité sociale française).`,
  },
  'tip.ee': {
    en: `Withheld from your pay: basic pension, supplementary pension and unemployment. There is no employee health contribution in Monaco, and no CSG.`,
    nl: `Ingehouden op je loon: basispensioen, aanvullend pensioen en werkloosheid. In Monaco is er geen werknemersbijdrage voor ziekte, en geen CSG.`,
    fr: `Retenues sur votre salaire : retraite de base, retraite complémentaire et chômage. Il n'y a pas de cotisation salariale maladie à Monaco, ni de CSG.`,
  },
  'tip.taxable': {
    en: `For French income tax: gross pay minus your contributions, which are all deductible. Pay from Monaco carries no CSG.`,
    nl: `Voor de Franse inkomstenbelasting: brutoloon min je bijdragen, die allemaal aftrekbaar zijn. Op loon uit Monaco is geen CSG verschuldigd.`,
    fr: `Pour l'impôt français : salaire brut moins vos cotisations, toutes déductibles. Un salaire monégasque ne supporte pas de CSG.`,
  },
  'tip.abat': {
    en: (min, max, calc) => `The French tax office deducts 10% for work costs, at least ${min} and at most ${max} per earner${calc}. Actual costs can be declared instead if higher.`,
    nl: (min, max, calc) => `De Franse fiscus trekt 10% af voor beroepskosten, minstens ${min} en hoogstens ${max} per verdiener${calc}. Werkelijke kosten mogen in de plaats komen als ze hoger zijn.`,
    fr: (min, max, calc) => `L'administration fiscale française déduit 10% pour frais professionnels, au moins ${min} et au plus ${max} par personne${calc}. Les frais réels peuvent être déclarés s'ils sont plus élevés.`,
  },
  'tip.irNone': {
    en: `None. Monaco doesn't tax its residents' income. Switch "You are" to French to see the French tax.`,
    nl: `Geen. Monaco belast het inkomen van zijn inwoners niet. Zet "Jij bent" op Frans om de Franse belasting te zien.`,
    fr: `Aucun. Monaco n'impose pas le revenu de ses résidents. Choisissez « Français » pour voir l'impôt français.`,
  },
  'tip.irShort': {
    en: `French income tax on 2026 pay, with the 2027 budget bill's brackets: progressive per part of the household, then the décote at low income.`,
    nl: `Franse inkomstenbelasting op het loon van 2026, met de schijven uit het begrotingsontwerp 2027: progressief per deel van het gezin, dan de décote bij een laag inkomen.`,
    fr: `Impôt français sur les salaires 2026, avec le barème du PLF 2027 : progressif par part du foyer, puis la décote pour les revenus modestes.`,
  },
  'tip.irM': {
    en: `French barème for 2026 income as tabled in the 2027 budget bill, applied as for a resident of France.`,
    nl: `Frans barema voor inkomen 2026 zoals ingediend in het begrotingsontwerp 2027, toegepast zoals voor een inwoner van Frankrijk.`,
    fr: `Barème français des revenus 2026 tel que déposé dans le PLF 2027, appliqué comme pour un résident de France.`,
  },
  'tip.irRni': { en: `Household net taxable income`, nl: `Netto belastbaar inkomen van het gezin`, fr: `Revenu net imposable du foyer` },
  'tip.irParts': { en: n => `${n} parts`, nl: n => `${n} delen`, fr: n => `${n} parts` },
  'tip.irCapped': { en: `After the quotient familial cap`, nl: `Na het plafond van het quotient familial`, fr: `Après plafonnement du quotient familial` },
  'tip.decote': { en: `Décote (low-tax relief)`, nl: `Décote (korting bij lage belasting)`, fr: `Décote` },
  'tip.irHousehold': { en: `Household tax`, nl: `Belasting van het gezin`, fr: `Impôt du foyer` },
  'tip.irWithout': { en: `Household tax without your pay`, nl: `Belasting van het gezin zonder jouw loon`, fr: `Impôt du foyer sans votre salaire` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.vatM': {
    en: `Rent, most healthcare and education are exempt, and food is at 5.5%, so this is an upper bound.`,
    nl: `Huur, de meeste zorg en onderwijs zijn vrijgesteld, en voeding staat op 5,5%, dus dit is een bovengrens.`,
    fr: `Les loyers, la plupart des soins et l'enseignement sont exonérés, et l'alimentation est à 5,5% : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − your contributions − French income tax if it applies.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − jouw bijdragen − Franse inkomstenbelasting als die geldt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − vos cotisations − impôt français s'il s'applique.`,
  },

  // Reference
  refEyebrow: { en: `Rules used · 2026`, nl: `Gebruikte regels · 2026`, fr: `Règles utilisées · 2026` },
  'ref.noTax': {
    en: { h: `1 · No income tax for residents`, li: [`Monaco levies no tax on individuals' income, whatever their nationality, except the French (next section). Companies pay a profits tax only on business mostly done outside Monaco; it doesn't touch salaries.`] },
    nl: { h: `1 · Geen inkomstenbelasting voor inwoners`, li: [`Monaco heft geen belasting op het inkomen van particulieren, ongeacht hun nationaliteit, behalve Fransen (volgende punt). Bedrijven betalen winstbelasting enkel op activiteit die vooral buiten Monaco plaatsvindt; lonen vallen erbuiten.`] },
    fr: { h: `1 · Pas d'impôt sur le revenu pour les résidents`, li: [`Monaco ne taxe pas le revenu des personnes physiques, quelle que soit leur nationalité, sauf les Français (point suivant). L'impôt sur les bénéfices ne vise que les entreprises réalisant l'essentiel de leur chiffre hors de Monaco ; il ne touche pas les salaires.`] },
  },
  'ref.fr': {
    en: br => ({ h: `2 · French nationals and French residents`, li: [
      `Under article 7 of the 1963 Franco-Monegasque tax convention, French nationals living in Monaco pay French income tax as if they lived in France. People who work in Monaco and live in France are French tax residents anyway.`,
      `Net taxable pay = gross − contributions, then − 10% for professional expenses (min <span class="num">520 €</span>, max <span class="num">14 861 €</span>).`,
      `Brackets per part for 2026 income (2027 budget bill):${br}`,
      `Parts, décote and CEHR as in France: +½ part for each of the first two children, +1 from the third; décote <span class="num">915 €</span> (single) or <span class="num">1 513 €</span> (couple) − 45.25% of the tax.`,
    ] }),
    nl: br => ({ h: `2 · Fransen en inwoners van Frankrijk`, li: [
      `Volgens artikel 7 van de Frans-Monegaskische belastingconventie van 1963 betalen Fransen die in Monaco wonen Franse inkomstenbelasting alsof ze in Frankrijk woonden. Wie in Monaco werkt en in Frankrijk woont, is sowieso Frans fiscaal inwoner.`,
      `Netto belastbaar loon = bruto − bijdragen, dan − 10% beroepskosten (min <span class="num">€ 520</span>, max <span class="num">€ 14.861</span>).`,
      `Schijven per deel voor inkomen 2026 (begrotingsontwerp 2027):${br}`,
      `Delen, décote en CEHR zoals in Frankrijk: +½ deel voor elk van de eerste twee kinderen, +1 vanaf het derde; décote <span class="num">€ 915</span> (alleenstaande) of <span class="num">€ 1.513</span> (koppel) − 45,25% van de belasting.`,
    ] }),
    fr: br => ({ h: `2 · Français et résidents de France`, li: [
      `Selon l'article 7 de la convention fiscale franco-monégasque de 1963, les Français qui résident à Monaco paient l'impôt sur le revenu français comme s'ils vivaient en France. Ceux qui travaillent à Monaco en habitant en France sont de toute façon résidents fiscaux français.`,
      `Salaire net imposable = brut − cotisations, puis − 10% de frais professionnels (min <span class="num">520 €</span>, max <span class="num">14 861 €</span>).`,
      `Barème par part des revenus 2026 (PLF 2027) :${br}`,
      `Parts, décote et CEHR comme en France : +½ part pour chacun des deux premiers enfants, +1 à partir du troisième ; décote de <span class="num">915 €</span> (seul) ou <span class="num">1 513 €</span> (couple) − 45,25% de l'impôt.`,
    ] }),
  },
  'ref.ccss': {
    en: { h: `3 · Health and family (CCSS)`, li: [`Employer only: <span class="num">13.45%</span> of pay up to <span class="num">10 000 €</span> a month (from 1 October 2026), including occupational health and the wage guarantee fund.`] },
    nl: { h: `3 · Ziekte en gezin (CCSS)`, li: [`Enkel de werkgever: <span class="num">13,45%</span> van het loon tot <span class="num">€ 10.000</span> per maand (vanaf 1 oktober 2026), inclusief arbeidsgeneeskunde en het loongarantiefonds.`] },
    fr: { h: `3 · Maladie et famille (CCSS)`, li: [`À la charge de l'employeur seul : <span class="num">13,45%</span> du salaire jusqu'à <span class="num">10 000 €</span> par mois (au 1er octobre 2026), médecine du travail et garantie des salaires comprises.`] },
  },
  'ref.car': {
    en: { h: `4 · Basic pension (CAR)`, li: [`Employee <span class="num">6.85%</span>, employer <span class="num">8.39%</span>, on pay up to <span class="num">6 276 €</span> a month (from 1 October 2026).`] },
    nl: { h: `4 · Basispensioen (CAR)`, li: [`Werknemer <span class="num">6,85%</span>, werkgever <span class="num">8,39%</span>, op het loon tot <span class="num">€ 6.276</span> per maand (vanaf 1 oktober 2026).`] },
    fr: { h: `4 · Retraite de base (CAR)`, li: [`Salarié <span class="num">6,85%</span>, employeur <span class="num">8,39%</span>, sur le salaire jusqu'à <span class="num">6 276 €</span> par mois (au 1er octobre 2026).`] },
  },
  'ref.cmrc': {
    en: { h: `5 · Supplementary pension (CMRC)`, li: [`Band A up to <span class="num">4 067 €</span> a month: <span class="num">10.02%</span>. Band B from there up to eight times that: <span class="num">24.29%</span>. Split 60% employer, 40% employee (4.008% and 9.716% for you).`] },
    nl: { h: `5 · Aanvullend pensioen (CMRC)`, li: [`Schijf A tot <span class="num">€ 4.067</span> per maand: <span class="num">10,02%</span>. Schijf B daarboven tot acht keer dat bedrag: <span class="num">24,29%</span>. Verdeeld 60% werkgever, 40% werknemer (4,008% en 9,716% voor jou).`] },
    fr: { h: `5 · Retraite complémentaire (CMRC)`, li: [`Tranche A jusqu'à <span class="num">4 067 €</span> par mois : <span class="num">10,02%</span>. Tranche B au-delà jusqu'à huit fois ce plafond : <span class="num">24,29%</span>. Répartition 60% employeur, 40% salarié (4,008% et 9,716% pour vous).`] },
  },
  'ref.chom': {
    en: { h: `6 · Unemployment (Unédic)`, li: [`Employer <span class="num">4%</span>, employee <span class="num">2.4%</span>, on pay up to <span class="num">16 020 €</span> a month in 2026.`] },
    nl: { h: `6 · Werkloosheid (Unédic)`, li: [`Werkgever <span class="num">4%</span>, werknemer <span class="num">2,4%</span>, op het loon tot <span class="num">€ 16.020</span> per maand in 2026.`] },
    fr: { h: `6 · Chômage (Unédic)`, li: [`Employeur <span class="num">4%</span>, salarié <span class="num">2,4%</span>, sur le salaire jusqu'à <span class="num">16 020 €</span> par mois en 2026.`] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [`Monaco is in a customs union with France and applies French VAT: standard rate <span class="num">20%</span>, applied to all of your net pay as if you spent it.`, `VAT inside a price = price × r / (100 + r): at 20% that's 20 / 120 = <span class="num">16.67%</span> of what you pay.`] },
    nl: { h: `7 · Btw op uitgaven`, li: [`Monaco vormt een douane-unie met Frankrijk en past de Franse btw toe: normaal tarief <span class="num">20%</span>, toegepast op je hele nettoloon alsof je het uitgeeft.`, `Btw in een prijs = prijs × r / (100 + r): bij 20% is dat 20 / 120 = <span class="num">16,67%</span> van wat je betaalt.`] },
    fr: { h: `7 · TVA sur les dépenses`, li: [`Monaco forme une union douanière avec la France et applique la TVA française : taux normal <span class="num">20%</span>, appliqué à tout votre net comme si vous le dépensiez.`, `TVA contenue dans un prix = prix × r / (100 + r) : à 20%, 20 / 120 = <span class="num">16,67%</span> de ce que vous payez.`] },
  },
  'ref.minister': {
    en: { h: `8 · Public offices`, li: [`Minister of State: <span class="num">180 000 €</span> a year, reported in 2007, the only figure found. Government councillors' and National Council members' pay isn't published.`, `Civil servants pay a 6% pension deduction (Law 1.049 of 1982) and no Monaco income tax.`] },
    nl: { h: `8 · Openbare ambten`, li: [`Minister van Staat: <span class="num">€ 180.000</span> per jaar, gemeld in 2007, het enige gevonden bedrag. Het loon van regeringsraadsleden en leden van de Nationale Raad is niet gepubliceerd.`, `Ambtenaren betalen 6% pensioeninhouding (Wet 1.049 van 1982) en geen Monegaskische inkomstenbelasting.`] },
    fr: { h: `8 · Fonctions publiques`, li: [`Ministre d'État : <span class="num">180 000 €</span> par an, rapportés en 2007, seul chiffre trouvé. La rémunération des Conseillers de Gouvernement et des élus du Conseil National n'est pas publiée.`, `Les fonctionnaires versent une retenue de 6% pour la pension (loi n° 1.049 de 1982) et pas d'impôt monégasque.`] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Work accident insurance, compulsory for employers but bought from private insurers at a rate set by risk.`,
      `The 5% indemnity added to minimum wages, which carries no contributions; family allowances, paid by the CCSS to employees with children whatever their pay; the national housing aid for Monegasques.`,
      `For French taxpayers: the 2025 minimum tax on very high incomes (CDHR), social levies on capital income, and French wealth tax on property (IFI) for French nationals in Monaco.`,
      `Rates and ceilings change each 1 October (CCSS, CAR, CMRC) and 1 January (unemployment); the year uses those in force from 1 October 2026.`,
    ] },
    nl: { h: `Niet meegerekend`, li: [
      `Arbeidsongevallenverzekering, verplicht voor werkgevers maar afgesloten bij private verzekeraars tegen een tarief volgens het risico.`,
      `De vergoeding van 5% bovenop de minimumlonen, zonder bijdragen; de kinderbijslag, door de CCSS aan werknemers met kinderen betaald ongeacht hun loon; de nationale huisvestingssteun voor Monegasken.`,
      `Voor Franse belastingplichtigen: de minimumbelasting op zeer hoge inkomens van 2025 (CDHR), sociale heffingen op vermogensinkomsten, en de Franse vastgoedvermogensbelasting (IFI) voor Fransen in Monaco.`,
      `Tarieven en plafonds wijzigen elk jaar op 1 oktober (CCSS, CAR, CMRC) en 1 januari (werkloosheid); het jaar gebruikt die vanaf 1 oktober 2026.`,
    ] },
    fr: { h: `Non inclus`, li: [
      `L'assurance accidents du travail, obligatoire pour l'employeur mais souscrite auprès d'assureurs privés à un taux fixé selon le risque.`,
      `L'indemnité de 5% ajoutée aux salaires minima, exonérée de cotisations ; les prestations familiales, versées par la CCSS aux salariés ayant des enfants quel que soit leur salaire ; l'aide nationale au logement des Monégasques.`,
      `Pour les contribuables français : la contribution différentielle sur les hauts revenus (CDHR), les prélèvements sociaux sur les revenus du patrimoine, et l'IFI pour les Français de Monaco.`,
      `Les taux et plafonds changent chaque 1er octobre (CCSS, CAR, CMRC) et 1er janvier (chômage) ; l'année utilise ceux en vigueur au 1er octobre 2026.`,
    ] },
  },
  inheritLink: { en: `What an estate pays when it's passed on, by who inherits →`, nl: `Wat een nalatenschap betaalt bij overdracht, volgens wie erft →`, fr: `Ce que coûte une succession, selon qui hérite →` },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip, the Caisses Sociales de Monaco and, for French taxpayers, the French tax office decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook, de Caisses Sociales de Monaco en, voor Franse belastingplichtigen, de Franse fiscus beslissen.`,
    fr: `Estimation indicative. Votre bulletin de paie, les Caisses Sociales de Monaco et, pour les contribuables français, l'administration fiscale française font foi.`,
  },

  'src.csm': { en: `Caisses Sociales de Monaco: rates and ceilings`, nl: `Caisses Sociales de Monaco: tarieven en plafonds`, fr: `Caisses Sociales de Monaco : taux et plafonds` },
  'src.csmLetter': { en: `CSM: employer letter, October 2026`, nl: `CSM: werkgeversbrief, oktober 2026`, fr: `CSM : lettre aux employeurs, octobre 2026` },
  'src.cmrc': { en: `CSM: CMRC bands`, nl: `CSM: CMRC-schijven`, fr: `CSM : tranches CMRC` },
  'src.smic': { en: `Legimonaco: minimum wage from 1 June 2026`, nl: `Legimonaco: minimumloon vanaf 1 juni 2026`, fr: `Legimonaco : SMIC au 1er juin 2026` },
  'src.wages': { en: `IMSEE: private-sector salaries 2025`, nl: `IMSEE: lonen in de privésector 2025`, fr: `IMSEE : salaires du secteur privé 2025` },
  'src.noTax': { en: `Monaco consulate: tax system`, nl: `Consulaat van Monaco: belastingstelsel`, fr: `Consulat de Monaco : fiscalité` },
  'src.convention': { en: `Franco-Monegasque tax convention of 1963`, nl: `Frans-Monegaskische belastingconventie van 1963`, fr: `Convention fiscale franco-monégasque de 1963` },
  'src.bareme': { en: `Service-public.fr: income tax brackets`, nl: `Service-public.fr: belastingschijven`, fr: `Service-public.fr : barème de l'impôt` },
  'src.qf': { en: `Service-public.fr: quotient familial`, nl: `Service-public.fr: quotient familial`, fr: `Service-public.fr : quotient familial` },
  'src.decote': { en: `Service-public.fr: décote`, nl: `Service-public.fr: décote`, fr: `Service-public.fr : décote` },
  'src.civil': { en: `Law 1.049: civil-service pensions`, nl: `Wet 1.049: ambtenarenpensioenen`, fr: `Loi n° 1.049 : pensions des fonctionnaires` },
  'src.vat': { en: `Service-public.fr: VAT rates`, nl: `Service-public.fr: btw-tarieven`, fr: `Service-public.fr : taux de TVA` },
  'src.polPay': { en: `Minister of State's pay`, nl: `loon van de Minister van Staat`, fr: `rémunération du Ministre d'État` },
};
