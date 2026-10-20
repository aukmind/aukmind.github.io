window.TAX_STRINGS = {
  title: { en: `Monégasque Buying Power`, nl: `Koopkracht in Monaco`, fr: `Pouvoir d'achat à Monaco` },
  eyebrow: { en: `Monaco · 2026 · employee`, nl: `Monaco · 2026 · werknemer`, fr: `Monaco · 2026 · salarié` },
  eyebrowMinister: { en: `Monaco · 2026 · public office`, nl: `Monaco · 2026 · openbaar ambt`, fr: `Monaco · 2026 · fonction publique` },
  lead: {
    en: `Everything that must be paid on a salary in Monaco in 2026, from what your employer pays to what you can actually buy. People who live in Monaco pay no income tax. Two groups do pay French income tax on their salary: French citizens living in Monaco, and anyone who works in Monaco but lives in France.`,
    nl: `Alles wat er verplicht betaald moet worden op een loon in Monaco in 2026, van wat je werkgever betaalt tot wat jij er echt mee kunt kopen. Wie in Monaco woont, betaalt geen inkomstenbelasting. Twee groepen betalen wel Franse inkomstenbelasting op hun loon: Fransen die in Monaco wonen, en iedereen die in Monaco werkt maar in Frankrijk woont.`,
    fr: `Tout ce qui est prélevé sur un salaire à Monaco en 2026, de ce que paie votre employeur à ce que vous pouvez vraiment acheter. Les habitants de Monaco ne paient pas d'impôt sur le revenu. Deux groupes paient pourtant l'impôt sur le revenu français sur leur salaire : les Français qui vivent à Monaco, et ceux qui travaillent à Monaco mais habitent en France.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married or in a PACS (French civil partnership). This only matters if France taxes you: then the couple fills in one tax return together, and the tax depends on the size of the family.`,
    nl: `Gehuwd of met een PACS (Frans geregistreerd partnerschap). Dit telt alleen als Frankrijk je belast: dan doet het koppel samen één aangifte, en de belasting hangt af van de grootte van het gezin.`,
    fr: `Marié ou pacsé. Cela ne compte que si la France vous impose : le couple fait alors une seule déclaration, et l'impôt dépend de la taille de la famille.`,
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
    en: `Monaco does not publish what its leaders earn: not the Minister of State, not the government councillors, not the members of the National Council (the parliament). The only number found is from 2007, for the Minister of State.`,
    nl: `Monaco maakt niet bekend wat zijn leiders verdienen: niet de Minister van Staat, niet de regeringsraadsleden, niet de leden van de Nationale Raad (het parlement). Het enige gevonden bedrag komt uit 2007, voor de Minister van Staat.`,
    fr: `Monaco ne publie pas ce que gagnent ses dirigeants : ni le Ministre d'État, ni les Conseillers de Gouvernement, ni les élus du Conseil National (le parlement). Le seul chiffre trouvé date de 2007, pour le Ministre d'État.`,
  },
  minSalaryHint: { en: `Yearly pay. Reported amount by default.`, nl: `Jaarloon. Standaard het gemelde bedrag.`, fr: `Rémunération annuelle. Montant rapporté par défaut.` },
  'tip.ministerRules': {
    en: `The Minister of State runs the government for the Prince. In 2007 his pay was reported as 180 000 € a year. No newer figure has been published. Here he is treated like a civil servant: 6% of his pay goes to his pension, and Monaco takes no income tax. The Minister of State is usually French, and French citizens living in Monaco pay tax to France. Pick "French" above to see that case.`,
    nl: `De Minister van Staat leidt de regering namens de Vorst. In 2007 werd zijn loon op € 180.000 per jaar geschat. Een nieuwer bedrag is nooit gepubliceerd. Hier wordt hij behandeld als een ambtenaar: 6% van zijn loon gaat naar zijn pensioen, en Monaco heft geen inkomstenbelasting. De Minister van Staat is meestal een Fransman, en Fransen die in Monaco wonen betalen belasting aan Frankrijk. Kies hierboven "Frans" om dat te zien.`,
    fr: `Le Ministre d'État dirige le gouvernement au nom du Prince. En 2007, sa rémunération était estimée à 180 000 € par an. Aucun chiffre plus récent n'a été publié. Il est traité ici comme un fonctionnaire : 6% de sa paie vont à sa retraite, et Monaco ne prend pas d'impôt sur le revenu. Le Ministre d'État est en général français, et les Français qui vivent à Monaco paient l'impôt en France. Choisissez « Français » plus haut pour voir ce cas.`,
  },
  'bd.minGross': { en: `Gross pay`, nl: `Brutoloon`, fr: `Rémunération brute` },
  'bd.minEe': { en: `Pension deduction (6%)`, nl: `Pensioeninhouding (6%)`, fr: `Retenue pour pension (6%)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de Staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The yearly pay reported for the Minister of State in 2007. We don't know the value of his housing or other perks.`,
    nl: `Het jaarloon dat in 2007 voor de Minister van Staat werd gemeld. De waarde van zijn woning en andere voordelen kennen we niet.`,
    fr: `La rémunération annuelle rapportée pour le Ministre d'État en 2007. On ne connaît pas la valeur de son logement ni de ses autres avantages.`,
  },
  'tip.stateCost': {
    en: `Only the pay is counted. The State pays its civil servants' pensions straight from its budget, not through contributions, so there is no employer charge to add.`,
    nl: `Alleen het loon telt. De Staat betaalt de pensioenen van zijn ambtenaren rechtstreeks uit de begroting, niet via bijdragen, dus er komt geen werkgeverslast bij.`,
    fr: `Seule la paie est comptée. L'État paie les retraites de ses fonctionnaires directement sur son budget, pas par des cotisations : il n'y a donc pas de charge patronale à ajouter.`,
  },
  'tip.minEe': {
    en: `Civil servants in Monaco give 6% of their salary toward their pension (Law 1.049 of 1982). Here it is taken from the whole pay. The Minister of State's own contract is not public.`,
    nl: `Ambtenaren in Monaco geven 6% van hun loon voor hun pensioen (Wet 1.049 van 1982). Hier wordt het van het hele loon afgehouden. Het eigen contract van de Minister van Staat is niet openbaar.`,
    fr: `Les fonctionnaires monégasques versent 6% de leur traitement pour leur retraite (loi n° 1.049 de 1982). Ici, la retenue porte sur toute la paie. Le contrat propre au Ministre d'État n'est pas public.`,
  },
  'tip.minEr': {
    en: `Nothing extra from the employer. The State pays its civil servants' pensions and health care directly.`,
    nl: `Niets extra van de werkgever. De Staat betaalt de pensioenen en de ziektekosten van zijn ambtenaren zelf.`,
    fr: `Rien en plus côté employeur. L'État paie lui-même les retraites et les soins de ses fonctionnaires.`,
  },
  'stat.ms': { en: `Minister of State`, nl: `Minister van Staat`, fr: `Ministre d'État` },
  'pol.stat.ms': { en: `Head of government, reported pay (2007)`, nl: `Regeringsleider, gemeld loon (2007)`, fr: `Chef du gouvernement, rémunération rapportée (2007)` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, brut` },
  'polTitle.corp': { en: `Heads of state-owned companies, gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon`, fr: `Dirigeants d'entreprises publiques, brut` },
  'polNote.ms': {
    en: `Reported pay: 180 000 € a year in 2007. 6% goes to the pension. No Monaco income tax (French tax if you pick "French"). The head shows the employee salary that would leave the same amount in the bank, with your settings. The dot shows the real pay.`,
    nl: `Gemeld loon: € 180.000 per jaar in 2007. 6% gaat naar het pensioen. Geen Monegaskische inkomstenbelasting (Franse belasting als je "Frans" kiest). Het hoofd toont het werknemersloon dat hetzelfde bedrag op de rekening zou laten, met jouw instellingen. De stip toont het echte loon.`,
    fr: `Rémunération rapportée : 180 000 € par an en 2007. 6% vont à la retraite. Pas d'impôt monégasque (impôt français si vous choisissez « Français »). La tête montre le salaire d'un salarié qui laisserait le même montant sur le compte, avec vos réglages. Le point montre la vraie rémunération.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in. Their yearly pay is divided by 12 to fit the chart. Each person is placed at the employee salary that would leave the same amount in the bank. Monaco does not publish what its leaders earn; see ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Hun jaarloon wordt door 12 gedeeld om op de grafiek te passen. Elke persoon staat bij het werknemersloon dat hetzelfde bedrag op de rekening zou laten. Monaco maakt niet bekend wat zijn leiders verdienen; zie ${links}.`,
    fr: links => `Survolez un nom pour le détail, cliquez pour zoomer. Leur paie annuelle est divisée par 12 pour tenir sur le graphique. Chaque personne est placée au salaire d'un salarié qui laisserait le même montant sur le compte. Monaco ne publie pas ce que gagnent ses dirigeants ; voir ${links}.`,
  },
  'src.pol.ms': { en: `Wikipedia: Minister of State (Monaco)`, nl: `Wikipedia: Minister van Staat (Monaco)`, fr: `Wikipédia : Ministre d'État (Monaco)` },

  bracketTop: { en: `last step`, nl: `laatste trede`, fr: `dernière marche` },
  chartTitle: { en: `Charges and buying power at each salary level`, nl: `Heffingen en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat selon le salaire` },
  chartAria: { en: `Charge rate per salary chart`, nl: `Grafiek van de heffingsgraad per loon`, fr: `Graphique du taux de prélèvement selon le salaire` },
  trapTitle: { en: () => `What happens at low pay?`, nl: () => `Wat gebeurt er bij een laag loon?`, fr: () => `Que se passe-t-il pour un bas salaire ?` },
  trapBody: {
    en: (min, _, region) => `No hidden jumps here. There is no low-income benefit that you lose when you earn more, and contributions take the same share from the very first euro. The minimum wage is the French one (SMIC) for Monaco's 39-hour week: ${min} a month. On top comes a 5% bonus with no contributions on it (not counted here).` + (region === 'fr' ? ` French income tax is cut for low earners (a reduction called the "décote"), and a tax bill under 61 € is not collected at all.` : ` People living in Monaco pay no income tax, whatever they earn.`),
    nl: (min, _, region) => `Hier zijn er geen verborgen sprongen. Er is geen uitkering voor lage inkomens die je verliest als je meer verdient, en de bijdragen nemen vanaf de allereerste euro hetzelfde deel. Het minimumloon is het Franse (SMIC) voor de 39-urenweek van Monaco: ${min} per maand. Daar komt een toeslag van 5% bij waarop geen bijdragen gelden (hier niet meegeteld).` + (region === 'fr' ? ` De Franse inkomstenbelasting wordt verlaagd voor lage inkomens (een korting die "décote" heet), en een aanslag onder € 61 wordt helemaal niet geïnd.` : ` Wie in Monaco woont, betaalt geen inkomstenbelasting, hoeveel hij ook verdient.`),
    fr: (min, _, region) => `Pas de saut caché ici. Il n'y a pas d'aide pour bas revenus que l'on perd en gagnant plus, et les cotisations prennent la même part dès le premier euro. Le salaire minimum est le SMIC français, sur la semaine de 39 heures de Monaco : ${min} par mois. S'y ajoute une indemnité de 5% sans cotisations (non comptée ici).` + (region === 'fr' ? ` L'impôt français est allégé pour les petits revenus (c'est la « décote »), et un impôt de moins de 61 € n'est pas réclamé du tout.` : ` Les habitants de Monaco ne paient pas d'impôt sur le revenu, quel que soit leur salaire.`),
  },
  topTitle: {
    en: (top, b, kind) => kind === 'fr' ? `Why the step at ${top}?` : `Why does the rate fall above ${top}?`,
    nl: (top, b, kind) => kind === 'fr' ? `Waarom de sprong bij ${top}?` : `Waarom daalt het tarief boven ${top}?`,
    fr: (top, b, kind) => kind === 'fr' ? `Pourquoi la marche à ${top} ?` : `Pourquoi le taux baisse-t-il au-delà de ${top} ?`,
  },
  topBody: {
    en: (top, b, kind, parts) => kind === 'fr'
      ? `France splits a household's taxable income into "parts" (here ${parts}) and taxes each part. From ${top}, each part goes above ${b}, so the money above that is taxed at France's highest rate, 45%. On very high incomes an extra 3% (the CEHR) starts at 250 000 € a year (500 000 € for a couple).`
      : `Each contribution stops at a maximum salary. The employer's health and family contribution (CCSS) stops at ${b}. The last one, the extra pension (CMRC), stops at ${top}. Above that, nothing more is taken, so the share you lose keeps shrinking toward zero.`,
    nl: (top, b, kind, parts) => kind === 'fr'
      ? `Frankrijk deelt het belastbaar inkomen van een gezin op in "delen" (hier ${parts}) en belast elk deel. Vanaf ${top} komt elk deel boven ${b}, dus het geld daarboven wordt belast tegen het hoogste Franse tarief, 45%. Op zeer hoge inkomens komt er 3% bij (de CEHR), vanaf € 250.000 per jaar (€ 500.000 voor een koppel).`
      : `Elke bijdrage stopt bij een maximumloon. De ziekte- en gezinsbijdrage van de werkgever (CCSS) stopt bij ${b}. De laatste, het aanvullend pensioen (CMRC), stopt bij ${top}. Daarboven wordt niets meer afgehouden, dus het deel dat je verliest wordt steeds kleiner, richting nul.`,
    fr: (top, b, kind, parts) => kind === 'fr'
      ? `La France divise le revenu imposable du foyer en « parts » (ici ${parts}) et impose chaque part. À partir de ${top}, chaque part dépasse ${b} : l'argent au-dessus est taxé au taux français le plus haut, 45%. Sur les très hauts revenus, 3% de plus (la CEHR) s'ajoutent dès 250 000 € par an (500 000 € pour un couple).`
      : `Chaque cotisation s'arrête à un salaire maximum. La cotisation maladie et famille de l'employeur (CCSS) s'arrête à ${b}. La dernière, la retraite complémentaire (CMRC), s'arrête à ${top}. Au-delà, plus rien n'est prélevé : la part que vous perdez diminue alors vers zéro.`,
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
    en: `Many jobs in Monaco pay an extra, 13th month at the end of the year, set by the sector's collective agreement. Contributions are taken from it like from any other pay.`,
    nl: `Veel banen in Monaco betalen op het einde van het jaar een extra, 13de maand, vastgelegd in de cao van de sector. Er worden bijdragen op afgehouden zoals op elk ander loon.`,
    fr: `Beaucoup d'emplois à Monaco versent un 13e mois en fin d'année, prévu par la convention collective du secteur. Les cotisations sont prélevées dessus comme sur tout autre salaire.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Monaco taxes nobody's salary, so if you live there as a non-French person, your family situation changes nothing. If France taxes you, a married or PACS couple fills in one tax return together. France then divides the income into "parts" by family size, which lowers the tax. Your tax is what the couple pays minus what it would pay without your salary. We assume your partner also works in Monaco.`,
    nl: `Monaco belast niemands loon, dus als je er woont en geen Fransman bent, verandert je gezinssituatie niets. Belast Frankrijk je, dan doet een gehuwd of gePACSt koppel samen één aangifte. Frankrijk verdeelt het inkomen dan in "delen" volgens de gezinsgrootte, wat de belasting verlaagt. Jouw belasting is wat het koppel betaalt min wat het zonder jouw loon zou betalen. We gaan ervan uit dat je partner ook in Monaco werkt.`,
    fr: `Monaco n'impose aucun salaire : si vous y vivez sans être français, votre situation familiale ne change rien. Si la France vous impose, un couple marié ou pacsé fait une seule déclaration. La France divise alors le revenu en « parts » selon la taille de la famille, ce qui réduit l'impôt. Votre impôt est ce que paie le couple moins ce qu'il paierait sans votre salaire. On suppose que votre partenaire travaille aussi à Monaco.`,
  },
  'tip.reg': {
    en: `Monaco has no income tax for people. But a 1963 tax agreement with France says that French citizens who moved to Monaco pay French income tax as if they lived in France. (Those who could prove five years in Monaco by 13 October 1962 are spared.) Anyone who works in Monaco but lives in France pays French tax anyway. Social contributions are the same for everyone working in Monaco.`,
    nl: `Monaco heeft geen inkomstenbelasting voor personen. Maar een belastingakkoord met Frankrijk uit 1963 bepaalt dat Fransen die naar Monaco verhuisd zijn Franse inkomstenbelasting betalen alsof ze in Frankrijk woonden. (Wie op 13 oktober 1962 al vijf jaar in Monaco woonde, ontsnapt eraan.) Wie in Monaco werkt maar in Frankrijk woont, betaalt sowieso Franse belasting. De sociale bijdragen zijn voor iedereen die in Monaco werkt dezelfde.`,
    fr: `Monaco n'a pas d'impôt sur le revenu des personnes. Mais une convention fiscale de 1963 avec la France prévoit que les Français installés à Monaco paient l'impôt français comme s'ils vivaient en France. (Ceux qui prouvaient cinq ans de résidence à Monaco au 13 octobre 1962 y échappent.) Quiconque travaille à Monaco en habitant en France paie de toute façon l'impôt français. Les cotisations sociales sont les mêmes pour tous ceux qui travaillent à Monaco.`,
  },
  'tip.costShort': { en: `Gross salary + employer contributions.`, nl: `Brutoloon + werkgeversbijdragen.`, fr: `Salaire brut + cotisations patronales.` },
  'tip.er': {
    en: `Money your employer pays on top of your gross salary. Each contribution stops at its own maximum salary. Health and family insurance (CCSS) is paid only by the employer.`,
    nl: `Geld dat je werkgever bovenop je brutoloon betaalt. Elke bijdrage stopt bij haar eigen maximumloon. De ziekte- en gezinsverzekering (CCSS) wordt alleen door de werkgever betaald.`,
    fr: `L'argent que votre employeur paie en plus de votre salaire brut. Chaque cotisation s'arrête à son propre salaire maximum. L'assurance maladie et famille (CCSS) est payée par l'employeur seul.`,
  },
  'tip.erCcss': {
    en: cap => `The CCSS (Caisse de Compensation des Services Sociaux) pays for health care, maternity and family benefits. The employer pays 13.45% of your pay, counted up to ${cap} a month. That includes 0.25% for workplace doctors and 0.05% for a fund that pays wages if a company goes bust. You pay nothing.`,
    nl: cap => `De CCSS (Caisse de Compensation des Services Sociaux) betaalt ziektezorg, moederschap en gezinsbijslag. De werkgever betaalt 13,45% van je loon, gerekend tot ${cap} per maand. Daarin zit 0,25% voor de arbeidsarts en 0,05% voor een fonds dat lonen betaalt als een bedrijf failliet gaat. Jij betaalt niets.`,
    fr: cap => `La CCSS (Caisse de Compensation des Services Sociaux) finance les soins, la maternité et les prestations familiales. L'employeur paie 13,45% de votre salaire, compté jusqu'à ${cap} par mois. Cela comprend 0,25% pour la médecine du travail et 0,05% pour un fonds qui paie les salaires si l'entreprise fait faillite. Vous ne payez rien.`,
  },
  'tip.erCar': {
    en: cap => `The CAR (Caisse Autonome des Retraites) pays the basic state pension. The employer pays 8.39% (7.45% fixed + 0.94% that can change) on your pay, counted up to ${cap} a month.`,
    nl: cap => `De CAR (Caisse Autonome des Retraites) betaalt het basispensioen. De werkgever betaalt 8,39% (7,45% vast + 0,94% dat kan wijzigen) op je loon, gerekend tot ${cap} per maand.`,
    fr: cap => `La CAR (Caisse Autonome des Retraites) verse la retraite de base. L'employeur paie 8,39% (7,45% fixes + 0,94% qui peuvent changer) sur votre salaire, compté jusqu'à ${cap} par mois.`,
  },
  'tip.eeCar': {
    en: cap => `Your share for the basic state pension (CAR): 6.85% of your pay, counted up to ${cap} a month.`,
    nl: cap => `Jouw deel voor het basispensioen (CAR): 6,85% van je loon, gerekend tot ${cap} per maand.`,
    fr: cap => `Votre part pour la retraite de base (CAR) : 6,85% de votre salaire, compté jusqu'à ${cap} par mois.`,
  },
  'tip.cmrc': {
    en: (ta, tb) => `The CMRC (Caisse Monégasque de Retraite Complémentaire) pays a second pension on top of the basic one, like Agirc-Arrco in France. It takes 10.02% of pay up to ${ta} a month (band A), and 24.29% of the part between that and ${tb} (band B). The employer pays 60% of it, you pay 40%.`,
    nl: (ta, tb) => `De CMRC (Caisse Monégasque de Retraite Complémentaire) betaalt een tweede pensioen bovenop het basispensioen, zoals Agirc-Arrco in Frankrijk. Ze neemt 10,02% van het loon tot ${ta} per maand (schijf A), en 24,29% van het deel tussen dat bedrag en ${tb} (schijf B). De werkgever betaalt 60% ervan, jij 40%.`,
    fr: (ta, tb) => `La CMRC (Caisse Monégasque de Retraite Complémentaire) verse une deuxième retraite en plus de celle de base, comme l'Agirc-Arrco en France. Elle prend 10,02% du salaire jusqu'à ${ta} par mois (tranche A), et 24,29% de la partie entre ce montant et ${tb} (tranche B). L'employeur en paie 60%, vous 40%.`,
  },
  'tip.chom': {
    en: cap => `Monaco uses the French unemployment insurance (Unédic). The employer pays 4% and you pay 2.4%, on pay counted up to ${cap} a month (four times the French social security ceiling).`,
    nl: cap => `Monaco gebruikt de Franse werkloosheidsverzekering (Unédic). De werkgever betaalt 4% en jij 2,4%, op het loon gerekend tot ${cap} per maand (vier keer het Franse socialezekerheidsplafond).`,
    fr: cap => `Monaco utilise l'assurance chômage française (Unédic). L'employeur paie 4% et vous 2,4%, sur le salaire compté jusqu'à ${cap} par mois (quatre fois le plafond de la Sécurité sociale française).`,
  },
  'tip.ee': {
    en: `Taken from your pay before you get it: basic pension, extra pension and unemployment. In Monaco employees pay nothing for health insurance, and there is no CSG (the French social tax on income).`,
    nl: `Afgehouden van je loon voor je het krijgt: basispensioen, aanvullend pensioen en werkloosheid. In Monaco betalen werknemers niets voor de ziekteverzekering, en er is geen CSG (de Franse sociale heffing op inkomen).`,
    fr: `Retenu sur votre paie avant que vous la touchiez : retraite de base, retraite complémentaire et chômage. À Monaco, le salarié ne paie rien pour l'assurance maladie, et il n'y a pas de CSG.`,
  },
  'tip.taxable': {
    en: `The part of your pay France taxes: gross pay minus your contributions, which can all be taken off. Pay from Monaco has no CSG (the French social tax) on it.`,
    nl: `Het deel van je loon dat Frankrijk belast: brutoloon min je bijdragen, die je allemaal mag aftrekken. Op loon uit Monaco is geen CSG (de Franse sociale heffing) verschuldigd.`,
    fr: `La part de votre salaire que la France impose : le brut moins vos cotisations, toutes déductibles. Un salaire de Monaco ne supporte pas de CSG.`,
  },
  'tip.abat': {
    en: (min, max, calc) => `France assumes work costs you money (travel, clothes…) and takes 10% off your taxable pay for that. At least ${min}, at most ${max} per earner${calc}. If your real costs are higher, you can declare those instead.`,
    nl: (min, max, calc) => `Frankrijk gaat ervan uit dat werken geld kost (verplaatsing, kleding…) en trekt daarvoor 10% van je belastbaar loon af. Minstens ${min}, hoogstens ${max} per verdiener${calc}. Zijn je echte kosten hoger, dan mag je die aangeven.`,
    fr: (min, max, calc) => `La France considère que travailler coûte (trajets, vêtements…) et retire pour cela 10% de votre salaire imposable. Au moins ${min}, au plus ${max} par personne${calc}. Si vos frais réels sont plus élevés, vous pouvez les déclarer à la place.`,
  },
  'tip.irNone': {
    en: `None. Monaco does not tax the income of people who live there. Set "You are" to French to see the French tax.`,
    nl: `Geen. Monaco belast het inkomen van zijn inwoners niet. Zet "Jij bent" op Frans om de Franse belasting te zien.`,
    fr: `Aucun. Monaco n'impose pas le revenu de ceux qui y vivent. Choisissez « Français » pour voir l'impôt français.`,
  },
  'tip.irShort': {
    en: `French income tax on 2026 pay, using the rates in the 2027 budget plan. The more you earn, the higher the rate on the extra money, worked out per "part" of the household. Low earners get a reduction (the "décote").`,
    nl: `Franse inkomstenbelasting op het loon van 2026, met de tarieven uit het begrotingsplan 2027. Hoe meer je verdient, hoe hoger het tarief op het extra geld, berekend per "deel" van het gezin. Lage inkomens krijgen een korting (de "décote").`,
    fr: `Impôt français sur les salaires 2026, avec le barème du projet de budget 2027. Plus vous gagnez, plus le taux sur l'argent en plus est élevé, calculé par « part » du foyer. Les petits revenus ont une réduction (la décote).`,
  },
  'tip.irM': {
    en: `French tax rates for 2026 income, from the 2027 budget plan (not yet voted). Worked out as for someone living in France.`,
    nl: `Franse belastingtarieven voor inkomen 2026, uit het begrotingsplan 2027 (nog niet gestemd). Berekend zoals voor iemand die in Frankrijk woont.`,
    fr: `Barème français des revenus 2026, tiré du projet de budget 2027 (pas encore voté). Calculé comme pour quelqu'un qui vit en France.`,
  },
  'tip.irRni': { en: `Household net taxable income`, nl: `Netto belastbaar inkomen van het gezin`, fr: `Revenu net imposable du foyer` },
  'tip.irParts': { en: n => `${n} parts`, nl: n => `${n} delen`, fr: n => `${n} parts` },
  'tip.irCapped': { en: `After the limit on the family discount`, nl: `Na de grens op de gezinskorting`, fr: `Après plafonnement du quotient familial` },
  'tip.decote': { en: `Décote (low-tax relief)`, nl: `Décote (korting bij lage belasting)`, fr: `Décote` },
  'tip.irHousehold': { en: `Household tax`, nl: `Belasting van het gezin`, fr: `Impôt du foyer` },
  'tip.irWithout': { en: `Household tax without your pay`, nl: `Belasting van het gezin zonder jouw loon`, fr: `Impôt du foyer sans votre salaire` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.vatM': {
    en: `Rent, most health care and schooling have no VAT, and food has only 5.5%. So the real VAT you pay is lower than this.`,
    nl: `Op huur, de meeste zorg en onderwijs is geen btw, en op voeding maar 5,5%. De btw die je echt betaalt is dus lager dan dit.`,
    fr: `Les loyers, la plupart des soins et l'enseignement n'ont pas de TVA, et l'alimentation seulement 5,5%. La TVA que vous payez vraiment est donc plus basse que ceci.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − your contributions − French income tax if you pay it.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − jouw bijdragen − Franse inkomstenbelasting als je die betaalt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − vos cotisations − impôt français si vous le payez.`,
  },

  // Reference
  refEyebrow: { en: `Rules used · 2026`, nl: `Gebruikte regels · 2026`, fr: `Règles utilisées · 2026` },
  'ref.noTax': {
    en: { h: `1 · No income tax for residents`, li: [`Monaco does not tax people's income, whatever their nationality. The French are the exception (next section). Companies pay a tax on profits only if most of their business is outside Monaco; it never touches salaries.`] },
    nl: { h: `1 · Geen inkomstenbelasting voor inwoners`, li: [`Monaco belast het inkomen van personen niet, wat hun nationaliteit ook is. Fransen zijn de uitzondering (volgend punt). Bedrijven betalen alleen winstbelasting als ze het meeste werk buiten Monaco doen; op lonen komt die nooit.`] },
    fr: { h: `1 · Pas d'impôt sur le revenu pour les résidents`, li: [`Monaco n'impose pas le revenu des personnes, quelle que soit leur nationalité. Les Français font exception (point suivant). Les entreprises ne paient un impôt sur les bénéfices que si l'essentiel de leur activité est hors de Monaco ; il ne touche jamais les salaires.`] },
  },
  'ref.fr': {
    en: br => ({ h: `2 · French nationals and French residents`, li: [
      `Article 7 of the 1963 tax agreement between France and Monaco says French citizens living in Monaco pay French income tax as if they lived in France. People who work in Monaco and live in France pay French tax anyway.`,
      `Taxable pay = gross − contributions, then − 10% for work costs (at least <span class="num">520 €</span>, at most <span class="num">14 861 €</span>).`,
      `Tax rates per part for 2026 income (2027 budget plan):${br}`,
      `As in France, the household gets more "parts" with children: +½ part for each of the first two, +1 for each one after. Low earners get a reduction (décote): <span class="num">915 €</span> (single) or <span class="num">1 513 €</span> (couple) minus 45.25% of the tax.`,
    ] }),
    nl: br => ({ h: `2 · Fransen en inwoners van Frankrijk`, li: [
      `Artikel 7 van het belastingakkoord van 1963 tussen Frankrijk en Monaco bepaalt dat Fransen die in Monaco wonen Franse inkomstenbelasting betalen alsof ze in Frankrijk woonden. Wie in Monaco werkt en in Frankrijk woont, betaalt sowieso Franse belasting.`,
      `Belastbaar loon = bruto − bijdragen, dan − 10% voor beroepskosten (minstens <span class="num">€ 520</span>, hoogstens <span class="num">€ 14.861</span>).`,
      `Tarieven per deel voor inkomen 2026 (begrotingsplan 2027):${br}`,
      `Zoals in Frankrijk krijgt het gezin meer "delen" met kinderen: +½ deel voor elk van de eerste twee, +1 voor elk volgend kind. Lage inkomens krijgen een korting (décote): <span class="num">€ 915</span> (alleenstaande) of <span class="num">€ 1.513</span> (koppel) min 45,25% van de belasting.`,
    ] }),
    fr: br => ({ h: `2 · Français et résidents de France`, li: [
      `L'article 7 de la convention fiscale de 1963 entre la France et Monaco prévoit que les Français qui vivent à Monaco paient l'impôt sur le revenu français comme s'ils vivaient en France. Ceux qui travaillent à Monaco en habitant en France paient de toute façon l'impôt français.`,
      `Salaire imposable = brut − cotisations, puis − 10% pour frais professionnels (au moins <span class="num">520 €</span>, au plus <span class="num">14 861 €</span>).`,
      `Barème par part des revenus 2026 (projet de budget 2027) :${br}`,
      `Comme en France, le foyer a plus de « parts » avec des enfants : +½ part pour chacun des deux premiers, +1 pour chaque suivant. Les petits revenus ont une réduction (décote) : <span class="num">915 €</span> (seul) ou <span class="num">1 513 €</span> (couple) moins 45,25% de l'impôt.`,
    ] }),
  },
  'ref.ccss': {
    en: { h: `3 · Health and family (CCSS)`, li: [`Paid by the employer only: <span class="num">13.45%</span> of pay, counted up to <span class="num">10 000 €</span> a month (from 1 October 2026). It also covers workplace doctors and the fund that pays wages if a company goes bust.`] },
    nl: { h: `3 · Ziekte en gezin (CCSS)`, li: [`Alleen door de werkgever betaald: <span class="num">13,45%</span> van het loon, gerekend tot <span class="num">€ 10.000</span> per maand (vanaf 1 oktober 2026). Het dekt ook de arbeidsarts en het fonds dat lonen betaalt als een bedrijf failliet gaat.`] },
    fr: { h: `3 · Maladie et famille (CCSS)`, li: [`Payée par l'employeur seul : <span class="num">13,45%</span> du salaire, compté jusqu'à <span class="num">10 000 €</span> par mois (au 1er octobre 2026). Elle couvre aussi la médecine du travail et le fonds qui paie les salaires en cas de faillite.`] },
  },
  'ref.car': {
    en: { h: `4 · Basic pension (CAR)`, li: [`You pay <span class="num">6.85%</span>, the employer <span class="num">8.39%</span>, on pay counted up to <span class="num">6 276 €</span> a month (from 1 October 2026).`] },
    nl: { h: `4 · Basispensioen (CAR)`, li: [`Jij betaalt <span class="num">6,85%</span>, de werkgever <span class="num">8,39%</span>, op het loon gerekend tot <span class="num">€ 6.276</span> per maand (vanaf 1 oktober 2026).`] },
    fr: { h: `4 · Retraite de base (CAR)`, li: [`Vous payez <span class="num">6,85%</span>, l'employeur <span class="num">8,39%</span>, sur le salaire compté jusqu'à <span class="num">6 276 €</span> par mois (au 1er octobre 2026).`] },
  },
  'ref.cmrc': {
    en: { h: `5 · Supplementary pension (CMRC)`, li: [`Pay up to <span class="num">4 067 €</span> a month (band A): <span class="num">10.02%</span>. Pay above that, up to eight times that amount (band B): <span class="num">24.29%</span>. The employer pays 60%, you pay 40% (so 4.008% and 9.716% for you).`] },
    nl: { h: `5 · Aanvullend pensioen (CMRC)`, li: [`Loon tot <span class="num">€ 4.067</span> per maand (schijf A): <span class="num">10,02%</span>. Loon daarboven, tot acht keer dat bedrag (schijf B): <span class="num">24,29%</span>. De werkgever betaalt 60%, jij 40% (dus 4,008% en 9,716% voor jou).`] },
    fr: { h: `5 · Retraite complémentaire (CMRC)`, li: [`Salaire jusqu'à <span class="num">4 067 €</span> par mois (tranche A) : <span class="num">10,02%</span>. Salaire au-delà, jusqu'à huit fois ce montant (tranche B) : <span class="num">24,29%</span>. L'employeur paie 60%, vous 40% (soit 4,008% et 9,716% pour vous).`] },
  },
  'ref.chom': {
    en: { h: `6 · Unemployment (Unédic)`, li: [`Employer <span class="num">4%</span>, you <span class="num">2.4%</span>, on pay counted up to <span class="num">16 020 €</span> a month in 2026.`] },
    nl: { h: `6 · Werkloosheid (Unédic)`, li: [`Werkgever <span class="num">4%</span>, jij <span class="num">2,4%</span>, op het loon gerekend tot <span class="num">€ 16.020</span> per maand in 2026.`] },
    fr: { h: `6 · Chômage (Unédic)`, li: [`Employeur <span class="num">4%</span>, vous <span class="num">2,4%</span>, sur le salaire compté jusqu'à <span class="num">16 020 €</span> par mois en 2026.`] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [`Monaco shares a customs area with France and uses French VAT. The normal rate is <span class="num">20%</span>. Here it is applied to all your net pay, as if you spent all of it.`, `The VAT hidden in a price = price × r / (100 + r). At 20% that's 20 / 120 = <span class="num">16.67%</span> of what you pay.`] },
    nl: { h: `7 · Btw op uitgaven`, li: [`Monaco deelt een douanegebied met Frankrijk en gebruikt de Franse btw. Het normale tarief is <span class="num">20%</span>. Hier wordt het toegepast op je hele nettoloon, alsof je alles uitgeeft.`, `De btw die in een prijs zit = prijs × r / (100 + r). Bij 20% is dat 20 / 120 = <span class="num">16,67%</span> van wat je betaalt.`] },
    fr: { h: `7 · TVA sur les dépenses`, li: [`Monaco partage un territoire douanier avec la France et utilise la TVA française. Le taux normal est de <span class="num">20%</span>. Il est appliqué ici à tout votre net, comme si vous le dépensiez en entier.`, `La TVA cachée dans un prix = prix × r / (100 + r). À 20%, cela fait 20 / 120 = <span class="num">16,67%</span> de ce que vous payez.`] },
  },
  'ref.minister': {
    en: { h: `8 · Public offices`, li: [`Minister of State: <span class="num">180 000 €</span> a year, reported in 2007. It's the only figure found. What government councillors and National Council members earn is not published.`, `Civil servants give 6% of their pay to their pension (Law 1.049 of 1982) and pay no Monaco income tax.`] },
    nl: { h: `8 · Openbare ambten`, li: [`Minister van Staat: <span class="num">€ 180.000</span> per jaar, gemeld in 2007. Het is het enige gevonden bedrag. Wat regeringsraadsleden en leden van de Nationale Raad verdienen, wordt niet bekendgemaakt.`, `Ambtenaren geven 6% van hun loon voor hun pensioen (Wet 1.049 van 1982) en betalen geen Monegaskische inkomstenbelasting.`] },
    fr: { h: `8 · Fonctions publiques`, li: [`Ministre d'État : <span class="num">180 000 €</span> par an, rapportés en 2007. C'est le seul chiffre trouvé. Ce que gagnent les Conseillers de Gouvernement et les élus du Conseil National n'est pas publié.`, `Les fonctionnaires versent 6% de leur paie pour leur retraite (loi n° 1.049 de 1982) et ne paient pas d'impôt monégasque.`] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Insurance for accidents at work. Employers must have it, but they buy it from private insurers at a price that depends on how risky the job is.`,
      `The 5% bonus added to minimum wages, which has no contributions on it. Family allowances, paid by the CCSS to employees with children whatever they earn. The housing aid for Monaco citizens.`,
      `For people taxed by France: the minimum tax on very high incomes created in 2025 (CDHR), the social charges on income from savings and investments, and the French tax on large property wealth (IFI) for French citizens in Monaco.`,
      `Rates and maximum salaries change every 1 October (CCSS, CAR, CMRC) and every 1 January (unemployment). The whole year uses those in force from 1 October 2026.`,
    ] },
    nl: { h: `Niet meegerekend`, li: [
      `De verzekering tegen arbeidsongevallen. Werkgevers moeten ze hebben, maar ze kopen ze bij private verzekeraars, tegen een prijs die afhangt van hoe gevaarlijk het werk is.`,
      `De toeslag van 5% bovenop de minimumlonen, waarop geen bijdragen gelden. De kinderbijslag, die de CCSS betaalt aan werknemers met kinderen, wat ze ook verdienen. De huisvestingssteun voor Monegaskische burgers.`,
      `Voor wie door Frankrijk belast wordt: de minimumbelasting op zeer hoge inkomens die in 2025 werd ingevoerd (CDHR), de sociale heffingen op inkomen uit spaargeld en beleggingen, en de Franse belasting op groot vastgoedvermogen (IFI) voor Fransen in Monaco.`,
      `Tarieven en maximumlonen wijzigen elk jaar op 1 oktober (CCSS, CAR, CMRC) en op 1 januari (werkloosheid). Het hele jaar gebruikt die vanaf 1 oktober 2026.`,
    ] },
    fr: { h: `Non inclus`, li: [
      `L'assurance accidents du travail. L'employeur doit l'avoir, mais il l'achète à un assureur privé, à un prix qui dépend du risque du métier.`,
      `L'indemnité de 5% ajoutée aux salaires minimum, sans cotisations. Les prestations familiales, versées par la CCSS aux salariés qui ont des enfants, quel que soit leur salaire. L'aide au logement des Monégasques.`,
      `Pour ceux que la France impose : l'impôt minimum sur les très hauts revenus créé en 2025 (CDHR), les prélèvements sociaux sur les revenus de l'épargne et des placements, et l'impôt sur la fortune immobilière (IFI) pour les Français de Monaco.`,
      `Les taux et salaires maximum changent chaque 1er octobre (CCSS, CAR, CMRC) et chaque 1er janvier (chômage). Toute l'année utilise ceux en vigueur au 1er octobre 2026.`,
    ] },
  },
  inheritLink: { en: `What an estate pays when it's passed on, by who inherits →`, nl: `Wat een nalatenschap betaalt bij overdracht, volgens wie erft →`, fr: `Ce que coûte une succession, selon qui hérite →` },
  disclaimer: {
    en: `This is only an estimate to help you find your way. What counts is your payslip, the Caisses Sociales de Monaco and, if France taxes you, the French tax office.`,
    nl: `Dit is maar een schatting om je op weg te helpen. Wat telt is je loonstrook, de Caisses Sociales de Monaco en, als Frankrijk je belast, de Franse belastingdienst.`,
    fr: `Ceci n'est qu'une estimation pour vous repérer. Ce qui compte, c'est votre bulletin de paie, les Caisses Sociales de Monaco et, si la France vous impose, l'administration fiscale française.`,
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
  'gap.noCheck': {
    en: `This was researched without a web search engine. No result was checked against an official calculator (from the Caisses Sociales de Monaco, or the French tax calculator for people taxed by France).`,
    nl: `Dit werd opgezocht zonder zoekmachine. Geen enkel resultaat is nagekeken met een officiële rekenmodule (van de Caisses Sociales de Monaco, of de Franse belastingsimulator voor wie door Frankrijk belast wordt).`,
    fr: `Ces recherches ont été faites sans moteur de recherche. Aucun résultat n'a été vérifié avec un simulateur officiel (des Caisses Sociales de Monaco, ou celui des impôts français pour ceux que la France impose).`,
  },
  'gap.msPay': {
    en: `The Minister of State's pay, 180 000 € a year, comes from a 2007 book quoted on Wikipedia, so it may well be wrong. It is the only office shown, because what government councillors and the National Council earn is not published.`,
    nl: `Het loon van de Minister van Staat, € 180.000 per jaar, komt uit een boek van 2007 dat Wikipedia aanhaalt, dus het kan best fout zijn. Het is het enige getoonde ambt, want wat regeringsraadsleden en de Nationale Raad verdienen, wordt niet bekendgemaakt.`,
    fr: `La rémunération du Ministre d'État, 180 000 € par an, vient d'un livre de 2007 cité par Wikipédia : elle peut tout à fait être fausse. C'est la seule fonction affichée, car ce que gagnent les Conseillers de Gouvernement et le Conseil National n'est pas publié.`,
  },
  'gap.msPension': {
    en: `The Minister of State is treated like a civil servant: 6% of all his pay goes to his pension, and nothing else is taken. His real contract is not public.`,
    nl: `De Minister van Staat wordt behandeld als een ambtenaar: 6% van zijn hele loon gaat naar zijn pensioen, en verder wordt niets afgehouden. Zijn echte contract is niet openbaar.`,
    fr: `Le Ministre d'État est traité comme un fonctionnaire : 6% de toute sa paie vont à sa retraite, et rien d'autre n'est prélevé. Son vrai contrat n'est pas public.`,
  },
  'gap.octRates': {
    en: `The whole year uses the rates that start on 1 October 2026. Before that date, the changeable part of the employer's basic pension contribution (CAR) was 0.88% instead of 0.94%, and some other rates and maximum salaries were a little lower.`,
    nl: `Het hele jaar gebruikt de tarieven die op 1 oktober 2026 ingaan. Vóór die datum was het wisselende deel van de basispensioenbijdrage van de werkgever (CAR) 0,88% in plaats van 0,94%, en waren sommige andere tarieven en maximumlonen iets lager.`,
    fr: `Toute l'année utilise les taux applicables au 1er octobre 2026. Avant cette date, la partie variable de la cotisation retraite de base de l'employeur (CAR) était de 0,88% au lieu de 0,94%, et certains autres taux et salaires maximum étaient un peu plus bas.`,
  },
  'gap.cgcs': {
    en: `The employer's 13.45% health and family rate (CCSS) includes 0.05% for the fund that pays wages if a company goes bust. Employers who don't owe that part pay 13.40%.`,
    nl: `Het ziekte- en gezinstarief van de werkgever (CCSS), 13,45%, bevat 0,05% voor het fonds dat lonen betaalt als een bedrijf failliet gaat. Werkgevers die dat deel niet verschuldigd zijn, betalen 13,40%.`,
    fr: `Le taux maladie et famille de l'employeur (CCSS), 13,45%, comprend 0,05% pour le fonds qui paie les salaires en cas de faillite. Les employeurs qui ne doivent pas cette part paient 13,40%.`,
  },
  'gap.frBill': {
    en: `For people taxed by France, the 2026 tax rates come from the 2027 budget plan (PLF 2027). It is not law yet. They are copied from the France page.`,
    nl: `Voor wie door Frankrijk belast wordt, komen de tarieven voor 2026 uit het begrotingsplan 2027 (PLF 2027). Dat is nog geen wet. Ze zijn overgenomen van de pagina over Frankrijk.`,
    fr: `Pour ceux que la France impose, le barème 2026 vient du projet de loi de finances pour 2027 (PLF 2027). Il n'est pas encore voté. Il est repris de la page France.`,
  },
  'gap.frRule': {
    en: `Choosing "French, or living in France" applies French income tax, as the 1963 agreement says. French citizens who had already lived in Monaco for five years on 13 October 1962 don't pay it; that case is not handled here. We assume your partner also works in Monaco.`,
    nl: `"Frans, of woont in Frankrijk" kiezen past de Franse inkomstenbelasting toe, zoals het akkoord van 1963 bepaalt. Fransen die op 13 oktober 1962 al vijf jaar in Monaco woonden, betalen ze niet; dat geval wordt hier niet berekend. We gaan ervan uit dat je partner ook in Monaco werkt.`,
    fr: `Choisir « Français, ou résident en France » applique l'impôt français, comme le prévoit la convention de 1963. Les Français qui vivaient déjà à Monaco depuis cinq ans au 13 octobre 1962 ne le paient pas ; ce cas n'est pas calculé ici. On suppose que votre partenaire travaille aussi à Monaco.`,
  },
  'gap.wages': {
    en: `Median (3 475 €): half of full-time private-sector employees earn more than this each month, half earn less. Average (5 195 €): all their pay added up and divided by the number of jobs. Both are for 2025 and include bonuses (IMSEE).`,
    nl: `Mediaan (€ 3.475): de helft van de voltijdse werknemers in de privésector verdient per maand meer dan dit, de helft minder. Gemiddelde (€ 5.195): al hun lonen samen, gedeeld door het aantal banen. Beide gelden voor 2025, premies inbegrepen (IMSEE).`,
    fr: `Médiane (3 475 €) : la moitié des salariés à temps plein du privé gagnent plus que cela par mois, l'autre moitié moins. Moyenne (5 195 €) : tous leurs salaires additionnés, divisés par le nombre d'emplois. Les deux portent sur 2025, primes comprises (IMSEE).`,
  },
  'gap.notIncl': {
    en: `Insurance for accidents at work, family allowances and the other items under "What's not included" are left out.`,
    nl: `De verzekering tegen arbeidsongevallen, de kinderbijslag en de andere punten onder "Niet meegerekend" blijven buiten beschouwing.`,
    fr: `L'assurance accidents du travail, les prestations familiales et les autres points de « Non inclus » sont laissés de côté.`,
  },
};
