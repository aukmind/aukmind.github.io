window.TAX_STRINGS = {
  title: { en: `Maltese Buying Power`, nl: `Maltese koopkracht`, fr: `Pouvoir d'achat à Malte` },
  eyebrow: { en: `Malta · basis year 2026 · private-sector employee`, nl: `Malta · inkomstenjaar 2026 · werknemer in de privésector`, fr: `Malte · revenus 2026 · salarié du privé` },
  eyebrowMinister: { en: `Malta · basis year 2026 · member of government`, nl: `Malta · inkomstenjaar 2026 · regeringslid`, fr: `Malte · revenus 2026 · membre du gouvernement` },
  lead: {
    en: `Every tax on a Maltese salary in 2026, from what your employer pays to what you can buy. Full-time employee aged 18 or more, born in 1962 or later, on Class 1 social security.`,
    nl: `Alle belastingen op een Maltees loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Voltijdse werknemer van 18 jaar of ouder, geboren in 1962 of later, met sociale zekerheid klasse 1.`,
    fr: `Tous les prélèvements sur un salaire maltais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Salarié à temps plein de 18 ans ou plus, né en 1962 ou après, en sécurité sociale classe 1.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: { en: `Married: taxed jointly on the married rates, or separately if that costs less.`, nl: `Gehuwd: samen belast volgens het gehuwdentarief, of apart als dat minder kost.`, fr: `Mariés : imposés ensemble au barème des couples mariés, ou séparément si c'est moins cher.` },
  'partsHint.single': {
    en: `Parent computation: 0% up to 14 500 € with one child, 18 500 € with two or more.`,
    nl: `Ouderberekening: 0% tot € 14.500 met één kind, € 18.500 met twee of meer.`,
    fr: `Barème parent : 0% jusqu'à 14 500 € avec un enfant, 18 500 € avec deux ou plus.`,
  },
  'partsHint.couple': {
    en: `Married computation with children: 0% up to 17 500 € with one child, 22 500 € with two or more.`,
    nl: `Gehuwdenberekening met kinderen: 0% tot € 17.500 met één kind, € 22.500 met twee of meer.`,
    fr: `Barème des mariés avec enfants : 0% jusqu'à 17 500 € avec un enfant, 22 500 € avec deux ou plus.`,
  },
  includePa: { en: `Count the In-Work Benefit`, nl: `In-Work Benefit meetellen`, fr: `Compter l'In-Work Benefit` },
  vatStandard: { en: `(Maltese standard rate is 18%)`, nl: `(het Maltese normale tarief is 18%)`, fr: `(le taux normal maltais est de 18%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Eerste minister`, fr: `Premier ministre` },
  ministerHint: {
    en: `Ministers are paid a salary like employees: Class 1 social security and income tax on the same rates.`,
    nl: `Ministers krijgen een loon zoals werknemers: sociale zekerheid klasse 1 en inkomstenbelasting volgens dezelfde tarieven.`,
    fr: `Les ministres touchent un salaire comme les salariés : sécurité sociale classe 1 et impôt sur le revenu aux mêmes barèmes.`,
  },
  minSalaryHint: {
    en: `Yearly salary, pegged to the top civil service scale: 110% for a minister, 125% for the Prime Minister.`,
    nl: `Jaarloon, gekoppeld aan de hoogste loonschaal van de overheid: 110% voor een minister, 125% voor de eerste minister.`,
    fr: `Salaire annuel, indexé sur l'échelle la plus haute de la fonction publique : 110% pour un ministre, 125% pour le Premier ministre.`,
  },
  'tip.ministerRules': {
    en: `Cabinet members are paid as a share of salary scale 1 of the public service, 51 893 € in 2026: 125% for the Prime Minister (64 866 €) and 110% for ministers (57 082 €). Since 2013 they no longer draw the MP honorarium on top. The salary is taxed through FSS like any wage, with Class 1 social security paid by them and by the State. Allowances (car, residence, entertainment) are not counted. Not confirmed: whether the 2026 rise was applied in full.`,
    nl: `Kabinetsleden worden betaald als een deel van loonschaal 1 van de overheid, € 51.893 in 2026: 125% voor de eerste minister (€ 64.866) en 110% voor ministers (€ 57.082). Sinds 2013 krijgen ze het parlementaire honorarium er niet meer bovenop. Het loon wordt via FSS belast zoals elk loon, met sociale zekerheid klasse 1 betaald door henzelf en door de staat. Vergoedingen (auto, woning, representatie) tellen niet mee. Niet bevestigd: of de verhoging van 2026 volledig werd toegepast.`,
    fr: `Les membres du Cabinet sont payés en pourcentage de l'échelle 1 de la fonction publique, 51 893 € en 2026 : 125% pour le Premier ministre (64 866 €) et 110% pour les ministres (57 082 €). Depuis 2013, ils ne touchent plus l'indemnité de député en plus. Le salaire est imposé par FSS comme tout salaire, avec la sécurité sociale classe 1 payée par eux et par l'État. Les indemnités (voiture, résidence, représentation) ne sont pas comptées. Non confirmé : si la hausse de 2026 a été appliquée en entier.`,
  },
  'bd.minGross': { en: `Ministerial salary`, nl: `Ministerloon`, fr: `Salaire ministériel` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The salary set as a share of the top public service scale. Expense allowances are not counted.`,
    nl: `Het loon, vastgelegd als deel van de hoogste loonschaal van de overheid. Onkostenvergoedingen tellen niet mee.`,
    fr: `Le salaire fixé en pourcentage de l'échelle la plus haute de la fonction publique. Les indemnités de frais ne sont pas comptées.`,
  },
  'tip.stateCost': {
    en: `The salary plus the employer's Class 1 contribution and the Maternity Leave Fund, both paid by the State.`,
    nl: `Het loon plus de werkgeversbijdrage klasse 1 en het Maternity Leave Fund, allebei betaald door de staat.`,
    fr: `Le salaire plus la cotisation patronale classe 1 et le Maternity Leave Fund, tous deux payés par l'État.`,
  },
  'tip.minIwb': { en: `Not paid at this income.`, nl: `Niet uitbetaald bij dit inkomen.`, fr: `Non versé à ce niveau de revenu.` },

  // Politicians on the chart
  'polTitle.stat': { en: `Members of government, gross salary`, nl: `Regeringsleden, brutoloon`, fr: `Membres du gouvernement, salaire brut` },
  'stat.pm': { en: `Prime Minister`, nl: `Eerste minister`, fr: `Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'pol.stat.pm': { en: `Head of government: 125% of the top public service scale`, nl: `Regeringsleider: 125% van de hoogste loonschaal van de overheid`, fr: `Chef du gouvernement : 125% de l'échelle la plus haute de la fonction publique` },
  'pol.stat.minister': { en: `Cabinet minister: 110% of the top public service scale`, nl: `Kabinetsminister: 110% van de hoogste loonschaal van de overheid`, fr: `Ministre du Cabinet : 110% de l'échelle la plus haute de la fonction publique` },
  'polNote.office': {
    en: `A salary like any employee's: Class 1 social security and income tax on the same rates. Allowances are not counted.`,
    nl: `Een loon zoals dat van elke werknemer: sociale zekerheid klasse 1 en inkomstenbelasting volgens dezelfde tarieven. Vergoedingen tellen niet mee.`,
    fr: `Un salaire comme celui de tout salarié : sécurité sociale classe 1 et impôt sur le revenu aux mêmes barèmes. Les indemnités ne sont pas comptées.`,
  },
  'polTipNote.pm': {
    en: `125% of salary scale 1 (51 893 € in 2026). Robert Abela declared 64 000 € for 2024, his salary only.`,
    nl: `125% van loonschaal 1 (€ 51.893 in 2026). Robert Abela gaf € 64.000 aan voor 2024, enkel zijn loon.`,
    fr: `125% de l'échelle 1 (51 893 € en 2026). Robert Abela a déclaré 64 000 € pour 2024, son seul salaire.`,
  },
  'polTipNote.minister': {
    en: `110% of salary scale 1 (51 893 € in 2026), up about 1 700 € from 2024 in the 2026 budget.`,
    nl: `110% van loonschaal 1 (€ 51.893 in 2026), ongeveer € 1.700 meer dan in 2024 door de begroting 2026.`,
    fr: `110% de l'échelle 1 (51 893 € en 2026), environ 1 700 € de plus qu'en 2024 avec le budget 2026.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. Cabinet pay is pegged to the public service scales: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Het loon van het kabinet is gekoppeld aan de loonschalen van de overheid: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. La rémunération du Cabinet est indexée sur les échelles de la fonction publique : ${links}.`,
  },
  'src.pol.pm': { en: `Newsbook: 2026 ministerial pay rise`, nl: `Newsbook: loonsverhoging ministers 2026`, fr: `Newsbook : hausse des salaires ministériels 2026` },
  'src.pol.minister': { en: `Newsbook: 2026 ministerial pay rise`, nl: `Newsbook: loonsverhoging ministers 2026`, fr: `Newsbook : hausse des salaires ministériels 2026` },

  bracketTop: { en: `35% rate`, nl: `tarief van 35%`, fr: `taux de 35%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: { en: (a, b) => `Why the jumps between ${a} and ${b}?`, nl: (a, b) => `Waarom de sprongen tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi ces sauts entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, iwb, lim) => `On single rates, an employee earning ${lim} a year or less pays no income tax at all: the minimum wage is tax-free. One euro above, the whole 15% band from 12 000 € applies, so ${a} costs about 67 € at once. Then each extra euro pays 15% tax and 10% social security until the 25% band starts at 16 000 €.${iwb ? ` The In-Work Benefit is paid in flat steps by band of household income, not tapered: crossing a band edge loses the step at once, and the last one ends at ${iwb}.` : ''}`,
    nl: (a, b, iwb, lim) => `Volgens het tarief voor alleenstaanden betaalt een werknemer die ${lim} per jaar of minder verdient helemaal geen inkomstenbelasting: het minimumloon is belastingvrij. Eén euro meer en de hele schijf van 15% vanaf € 12.000 geldt, dus ${a} kost in één keer ongeveer € 67. Daarna betaalt elke extra euro 15% belasting en 10% sociale zekerheid tot de schijf van 25% begint bij € 16.000.${iwb ? ` De In-Work Benefit wordt in vaste trappen per schijf van gezinsinkomen betaald, niet afgebouwd: wie een grens overschrijdt, verliest de trap in één keer, en de laatste stopt bij ${iwb}.` : ''}`,
    fr: (a, b, iwb, lim) => `Au barème célibataire, un salarié qui gagne ${lim} par an ou moins ne paie aucun impôt sur le revenu : le salaire minimum est exonéré. Un euro de plus, et toute la tranche à 15% à partir de 12 000 € s'applique : ${a} coûte d'un coup environ 67 €. Ensuite, chaque euro supplémentaire paie 15% d'impôt et 10% de sécurité sociale jusqu'à la tranche à 25% qui commence à 16 000 €.${iwb ? ` L'In-Work Benefit est versé par paliers fixes selon le revenu du foyer, sans dégressivité : franchir une limite fait perdre le palier d'un coup, et le dernier s'arrête à ${iwb}.` : ''}`,
  },
  topTitle: {
    en: (top, cap) => `Why the step at ${top}${cap ? ` and the dip at ${cap}` : ''}?`,
    nl: (top, cap) => `Waarom de sprong bij ${top}${cap ? ` en de daling bij ${cap}` : ''}?`,
    fr: (top, cap) => `Pourquoi la marche à ${top}${cap ? ` et le creux à ${cap}` : ''} ?`,
  },
  topBody: {
    en: (top, cap) => `From ${top} your household's income passes 60 000 €, so each extra euro is taxed at 35% on every table.${cap ? ` At ${cap} your basic wage reaches the social security ceiling of 559,30 € a week: above it, you and your employer pay a fixed 55,93 € a week, so the rate on each extra euro falls by 10 points each.` : ''}`,
    nl: (top, cap) => `Vanaf ${top} komt het inkomen van je gezin boven € 60.000, dus elke extra euro wordt in elke tabel tegen 35% belast.${cap ? ` Bij ${cap} bereikt je basisloon het plafond van de sociale zekerheid van € 559,30 per week: daarboven betalen jij en je werkgever een vast bedrag van € 55,93 per week, dus het tarief op elke extra euro daalt telkens met 10 punten.` : ''}`,
    fr: (top, cap) => `À partir de ${top}, le revenu de votre foyer dépasse 60 000 € : chaque euro supplémentaire est imposé à 35% dans tous les barèmes.${cap ? ` À ${cap}, votre salaire de base atteint le plafond de la sécurité sociale de 559,30 € par semaine : au-delà, vous et votre employeur payez un montant fixe de 55,93 € par semaine, donc le taux sur chaque euro supplémentaire baisse de 10 points de chaque côté.` : ''}`,
  },
  'comp.er': { en: `Employer social security`, nl: `Werkgeversbijdrage sociale zekerheid`, fr: `Sécurité sociale patronale` },
  'comp.mf': { en: `Maternity Leave Fund`, nl: `Maternity Leave Fund`, fr: `Maternity Leave Fund` },
  'comp.ee': { en: `Employee social security`, nl: `Werknemersbijdrage sociale zekerheid`, fr: `Sécurité sociale salariale` },
  'comp.it': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'comp.iwb': { en: `In-Work Benefit`, nl: `In-Work Benefit`, fr: `In-Work Benefit` },
  iwbReceived: { en: `+ In-Work Benefit, from Social Security`, nl: `+ In-Work Benefit, van de sociale zekerheid`, fr: `+ In-Work Benefit, versé par la sécurité sociale` },
  iwbLost: { en: `In-Work Benefit your pay costs the household`, nl: `In-Work Benefit die je loon het gezin kost`, fr: `In-Work Benefit que votre salaire fait perdre au foyer` },
  'iwbType.single': { en: `Single parent, a year per child`, nl: `Alleenstaande ouder, per jaar per kind`, fr: `Parent seul, par an et par enfant` },
  'iwbType.both': { en: `Both parents working, a year per child`, nl: `Beide ouders werken, per jaar per kind`, fr: `Les deux parents travaillent, par an et par enfant` },
  'iwbType.one': { en: `One parent working, a year per child`, nl: `Eén ouder werkt, per jaar per kind`, fr: `Un seul parent travaille, par an et par enfant` },

  'tip.f12': {
    en: bonus => `Maltese salaries are quoted per year and paid monthly or every four weeks. The gross here includes the ${bonus} of statutory bonuses and weekly allowances (June, December, March, September), spread over 12 months.`,
    nl: bonus => `Maltese lonen worden per jaar uitgedrukt en maandelijks of om de vier weken betaald. Het bruto hier omvat de ${bonus} aan wettelijke bonussen en weektoelagen (juni, december, maart, september), gespreid over 12 maanden.`,
    fr: bonus => `Les salaires maltais sont exprimés à l'année et versés chaque mois ou toutes les quatre semaines. Le brut inclut ici les ${bonus} de primes légales et d'allocations hebdomadaires (juin, décembre, mars, septembre), répartis sur 12 mois.`,
  },
  'tip.grossBonus': {
    en: bonus => `It includes ${bonus} of statutory bonuses, which are taxed but carry no social security.`,
    nl: bonus => `Het omvat ${bonus} aan wettelijke bonussen, die belast worden maar zonder sociale zekerheid.`,
    fr: bonus => `Il inclut ${bonus} de primes légales, imposées mais sans sécurité sociale.`,
  },
  'tip.jointH': { en: `Married computation`, nl: `Gehuwdenberekening`, fr: `Imposition des couples mariés` },
  'tip.joint': {
    en: `Married couples add up their incomes and use the married rates: 0% up to 15 000 €, 17 500 € with one child, 22 500 € with two or more. They may instead opt for separate computation, each on single rates; the cheaper one is used here. Your tax = the couple's tax − what the couple would pay if you earned nothing. Unmarried couples are taxed as two singles (or parents).`,
    nl: `Gehuwde koppels tellen hun inkomens samen en gebruiken het gehuwdentarief: 0% tot € 15.000, € 17.500 met één kind, € 22.500 met twee of meer. Ze kunnen ook kiezen voor een aparte berekening, elk volgens het tarief voor alleenstaanden; hier wordt de goedkoopste gebruikt. Jouw belasting = de belasting van het koppel − wat het koppel zou betalen als jij niets verdiende. Ongehuwde koppels worden als twee alleenstaanden (of ouders) belast.`,
    fr: `Les couples mariés additionnent leurs revenus au barème des mariés : 0% jusqu'à 15 000 €, 17 500 € avec un enfant, 22 500 € avec deux ou plus. Ils peuvent aussi opter pour l'imposition séparée, chacun au barème célibataire ; la moins chère est retenue ici. Votre impôt = l'impôt du couple − ce que paierait le couple si vous ne gagniez rien. Les couples non mariés sont imposés comme deux célibataires (ou parents).`,
  },
  'tip.iwbToggle': {
    en: `A yearly payment per child for working families on low and middle incomes, paid by the Department of Social Security. You must apply; it is assessed on your income of two years earlier.`,
    nl: `Een jaarlijkse uitkering per kind voor werkende gezinnen met een laag of middeninkomen, betaald door het Department of Social Security. Je moet hem aanvragen; hij wordt berekend op je inkomen van twee jaar eerder.`,
    fr: `Un versement annuel par enfant pour les familles qui travaillent aux revenus modestes et moyens, payé par le Department of Social Security. Il faut le demander ; il est calculé sur le revenu d'il y a deux ans.`,
  },
  'tip.costShort': {
    en: `Gross salary + employer social security + Maternity Leave Fund.`,
    nl: `Brutoloon + werkgeversbijdrage sociale zekerheid + Maternity Leave Fund.`,
    fr: `Salaire brut + sécurité sociale patronale + Maternity Leave Fund.`,
  },
  'tip.er': {
    en: (cap, max) => `Class 1 social security: your employer pays 10% of your basic weekly wage, the same as you, up to a wage of ${cap} a week (${max} a week at most). Statutory bonuses are left out.`,
    nl: (cap, max) => `Sociale zekerheid klasse 1: je werkgever betaalt 10% van je basisweekloon, net als jij, tot een loon van ${cap} per week (hoogstens ${max} per week). Wettelijke bonussen tellen niet mee.`,
    fr: (cap, max) => `Sécurité sociale classe 1 : votre employeur paie 10% de votre salaire hebdomadaire de base, comme vous, jusqu'à un salaire de ${cap} par semaine (${max} par semaine au plus). Les primes légales sont exclues.`,
  },
  'tip.mf': {
    en: `0.3% of the basic weekly wage, paid by every employer into the fund that refunds maternity leave, so hiring women costs no more. Capped with the social security ceiling.`,
    nl: `0,3% van het basisweekloon, betaald door elke werkgever aan het fonds dat zwangerschapsverlof terugbetaalt, zodat vrouwen aannemen niet meer kost. Begrensd met het plafond van de sociale zekerheid.`,
    fr: `0,3% du salaire hebdomadaire de base, payé par tout employeur au fonds qui rembourse le congé de maternité, pour qu'embaucher des femmes ne coûte pas plus. Plafonné comme la sécurité sociale.`,
  },
  'tip.ee': {
    en: (cap, max, year) => `Class 1 social security: 10% of your basic weekly wage up to ${cap}, so at most ${max} a week, reached at about ${year} a year with bonuses. It funds the State pension, sickness and unemployment benefits. Not deductible from income tax.`,
    nl: (cap, max, year) => `Sociale zekerheid klasse 1: 10% van je basisweekloon tot ${cap}, dus hoogstens ${max} per week, bereikt bij ongeveer ${year} per jaar met bonussen. Ze financiert het staatspensioen, ziekte- en werkloosheidsuitkeringen. Niet aftrekbaar van de inkomstenbelasting.`,
    fr: (cap, max, year) => `Sécurité sociale classe 1 : 10% du salaire hebdomadaire de base jusqu'à ${cap}, donc au plus ${max} par semaine, atteint vers ${year} par an avec les primes. Elle finance la pension de l'État, les indemnités de maladie et de chômage. Non déductible de l'impôt sur le revenu.`,
  },
  'tip.eeWeek': { en: `Basic weekly wage`, nl: `Basisweekloon`, fr: `Salaire hebdomadaire de base` },
  'tip.eeCapped': { en: `capped`, nl: `begrensd`, fr: `plafonné` },
  'tip.itShort': {
    en: `Four bands, 0%, 15%, 25% and 35%, on a table that depends on being single, married or a parent, and on the number of children.`,
    nl: `Vier schijven, 0%, 15%, 25% en 35%, in een tabel die afhangt van alleenstaand, gehuwd of ouder zijn, en van het aantal kinderen.`,
    fr: `Quatre tranches, 0%, 15%, 25% et 35%, dans un barème qui dépend de votre situation (célibataire, marié, parent) et du nombre d'enfants.`,
  },
  'tip.itM': {
    en: `FSS: the table follows your household. Social security is not deducted first.`,
    nl: `FSS: de tabel volgt je gezin. De sociale zekerheid wordt niet eerst afgetrokken.`,
    fr: `FSS : le barème suit votre foyer. La sécurité sociale n'est pas déduite d'abord.`,
  },
  'tip.itIncome': { en: `Chargeable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'tip.itHhIncome': { en: `Couple's chargeable income`, nl: `Belastbaar inkomen van het koppel`, fr: `Revenu imposable du couple` },
  'tip.itLow': { en: lim => `Employment income of ${lim} or less: no tax`, nl: lim => `Inkomen uit arbeid van ${lim} of minder: geen belasting`, fr: lim => `Revenu salarial de ${lim} ou moins : pas d'impôt` },
  'tip.itSeparate': { en: `Each spouse on single rates`, nl: `Elke echtgenoot volgens het tarief voor alleenstaanden`, fr: `Chaque conjoint au barème célibataire` },
  'tip.itHousehold': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'tip.itWithout': { en: `Couple's tax if you earned nothing`, nl: `Belasting van het koppel als jij niets verdiende`, fr: `Impôt du couple si vous ne gagniez rien` },
  'tip.itYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'table.single': { en: `Single rates`, nl: `Tarief alleenstaanden`, fr: `Barème célibataire` },
  'table.married': { en: `Married rates`, nl: `Tarief gehuwden`, fr: `Barème des mariés` },
  'table.married1': { en: `Married rates, one child`, nl: `Tarief gehuwden, één kind`, fr: `Barème des mariés, un enfant` },
  'table.married2': { en: `Married rates, two or more children`, nl: `Tarief gehuwden, twee of meer kinderen`, fr: `Barème des mariés, deux enfants ou plus` },
  'table.parent': { en: `Parent rates`, nl: `Tarief ouders`, fr: `Barème parent` },
  'table.parent1': { en: `Parent rates, one child`, nl: `Tarief ouders, één kind`, fr: `Barème parent, un enfant` },
  'table.parent2': { en: `Parent rates, two or more children`, nl: `Tarief ouders, twee of meer kinderen`, fr: `Barème parent, deux enfants ou plus` },
  'table.separate': { en: `Separate computation`, nl: `Aparte berekening`, fr: `Imposition séparée` },
  'tip.iwb': {
    en: `Paid per child under 23 by band of the household's employment income after social security and tax. Single parent: 1 627 € per child from 6 600 € to 24 180 €. Both parents working: 1 627 € from 10 000 € to 36 846 €. One parent working: 856 € from 6 600 € to 27 180 €. Above, 327 € per child up to 35 000 € (50 000 € when both work).`,
    nl: `Per kind jonger dan 23 betaald volgens de schijf van het arbeidsinkomen van het gezin na sociale zekerheid en belasting. Alleenstaande ouder: € 1.627 per kind van € 6.600 tot € 24.180. Beide ouders werken: € 1.627 van € 10.000 tot € 36.846. Eén ouder werkt: € 856 van € 6.600 tot € 27.180. Daarboven € 327 per kind tot € 35.000 (€ 50.000 als beiden werken).`,
    fr: `Versé par enfant de moins de 23 ans selon la tranche du revenu salarial du foyer après sécurité sociale et impôt. Parent seul : 1 627 € par enfant de 6 600 € à 24 180 €. Les deux parents travaillent : 1 627 € de 10 000 € à 36 846 €. Un seul parent travaille : 856 € de 6 600 € à 27 180 €. Au-delà, 327 € par enfant jusqu'à 35 000 € (50 000 € si les deux travaillent).`,
  },
  'tip.iwbNet': { en: `Household employment income after tax and social security`, nl: `Arbeidsinkomen van het gezin na belasting en sociale zekerheid`, fr: `Revenu salarial du foyer après impôt et sécurité sociale` },
  'tip.iwbWithout': { en: `Paid if you earned nothing`, nl: `Betaald als jij niets verdiende`, fr: `Versé si vous ne gagniez rien` },
  'tip.iwbYear': { en: `Your share for the year`, nl: `Jouw deel voor het jaar`, fr: `Votre part sur l'année` },
  'tip.vatM': {
    en: `The 7%, 5% and 0% rates (accommodation, food, medicine, electricity, books) and VAT-free spending such as rent are left out, so this is an upper bound.`,
    nl: `De tarieven van 7%, 5% en 0% (logies, voeding, geneesmiddelen, elektriciteit, boeken) en btw-vrije uitgaven zoals huur zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Les taux de 7%, 5% et 0% (hébergement, alimentation, médicaments, électricité, livres) et les dépenses sans TVA comme le loyer ne sont pas pris en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − social security − income tax, + In-Work Benefit if counted.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − sociale zekerheid − inkomstenbelasting, + In-Work Benefit als die meetelt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − sécurité sociale − impôt sur le revenu, + In-Work Benefit s'il est compté.`,
  },

  refEyebrow: { en: `Rules used · basis year 2026`, nl: `Gebruikte regels · inkomstenjaar 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.ssc': {
    en: { h: `1 · Social security (Class 1)`, li: [
      `Employee and employer: <span class="num">10%</span> each of the basic weekly wage, up to 559,30 € a week (55,93 € each at most), born in 1962 or later. Born earlier: 49,04 € at most.`,
      `Maternity Leave Fund: <span class="num">0.3%</span>, employer only. Statutory bonuses (512,52 € a year) carry no contributions.`,
    ] },
    nl: { h: `1 · Sociale zekerheid (klasse 1)`, li: [
      `Werknemer en werkgever: elk <span class="num">10%</span> van het basisweekloon, tot € 559,30 per week (hoogstens € 55,93 elk), geboren in 1962 of later. Vroeger geboren: hoogstens € 49,04.`,
      `Maternity Leave Fund: <span class="num">0,3%</span>, enkel werkgever. Wettelijke bonussen (€ 512,52 per jaar) dragen geen bijdragen.`,
    ] },
    fr: { h: `1 · Sécurité sociale (classe 1)`, li: [
      `Salarié et employeur : <span class="num">10%</span> chacun du salaire hebdomadaire de base, jusqu'à 559,30 € par semaine (55,93 € chacun au plus), nés en 1962 ou après. Nés avant : 49,04 € au plus.`,
      `Maternity Leave Fund : <span class="num">0,3%</span>, à la charge de l'employeur. Les primes légales (512,52 € par an) ne supportent pas de cotisations.`,
    ] },
  },
  'ref.it': {
    en: br => ({ h: `2 · Income tax`, li: [
      `Single rates, 2026:${br}`,
      `Employment income of 12 445 € or less on single rates: no tax.`,
      `Parent: 0% up to 13 000 €, 15% to 17 500 €. With one child 14 500 € / 21 000 €, with two or more 18 500 € / 25 500 €. Then 25% to 60 000 €, 35% above.`,
      `Married: 0% up to 15 000 €, 15% to 23 000 €. With one child 17 500 € / 26 500 €, with two or more 22 500 € / 32 000 €. Then 25% to 60 000 €, 35% above.`,
      `The child tables are new in 2026 and rise again in 2027 and 2028. They need a child under 18 (23 in full-time education) and a Maltese or EU/EEA parent, or a long-term resident whose child was born and lives in Malta.`,
    ] }),
    nl: br => ({ h: `2 · Inkomstenbelasting`, li: [
      `Tarief alleenstaanden, 2026:${br}`,
      `Inkomen uit arbeid van € 12.445 of minder volgens het tarief voor alleenstaanden: geen belasting.`,
      `Ouder: 0% tot € 13.000, 15% tot € 17.500. Met één kind € 14.500 / € 21.000, met twee of meer € 18.500 / € 25.500. Daarna 25% tot € 60.000, 35% daarboven.`,
      `Gehuwd: 0% tot € 15.000, 15% tot € 23.000. Met één kind € 17.500 / € 26.500, met twee of meer € 22.500 / € 32.000. Daarna 25% tot € 60.000, 35% daarboven.`,
      `De tabellen met kinderen zijn nieuw in 2026 en stijgen opnieuw in 2027 en 2028. Ze vereisen een kind jonger dan 18 (23 in voltijds onderwijs) en een Maltese of EU/EER-ouder, of een langdurig ingezetene van wie het kind in Malta geboren is en er woont.`,
    ] }),
    fr: br => ({ h: `2 · Impôt sur le revenu`, li: [
      `Barème célibataire, 2026 :${br}`,
      `Revenu salarial de 12 445 € ou moins au barème célibataire : pas d'impôt.`,
      `Parent : 0% jusqu'à 13 000 €, 15% jusqu'à 17 500 €. Avec un enfant 14 500 € / 21 000 €, avec deux ou plus 18 500 € / 25 500 €. Puis 25% jusqu'à 60 000 €, 35% au-delà.`,
      `Mariés : 0% jusqu'à 15 000 €, 15% jusqu'à 23 000 €. Avec un enfant 17 500 € / 26 500 €, avec deux ou plus 22 500 € / 32 000 €. Puis 25% jusqu'à 60 000 €, 35% au-delà.`,
      `Les barèmes avec enfants sont nouveaux en 2026 et augmentent encore en 2027 et 2028. Ils exigent un enfant de moins de 18 ans (23 en études à temps plein) et un parent maltais ou de l'UE/EEE, ou un résident de longue durée dont l'enfant est né et vit à Malte.`,
    ] }),
  },
  'ref.couple': {
    en: { h: `3 · Couples`, li: [
      `Your tax = the couple's tax − the couple's tax without your income. Social security is always per person.`,
      `Joint married computation or separate computation on single rates, whichever costs less.`,
    ] },
    nl: { h: `3 · Koppels`, li: [
      `Jouw belasting = de belasting van het koppel − de belasting van het koppel zonder jouw inkomen. De sociale zekerheid is altijd per persoon.`,
      `Gezamenlijke gehuwdenberekening of aparte berekening volgens het tarief voor alleenstaanden, wat het minst kost.`,
    ] },
    fr: { h: `3 · Couples`, li: [
      `Votre impôt = l'impôt du couple − l'impôt du couple sans votre revenu. La sécurité sociale est toujours individuelle.`,
      `Imposition commune des mariés ou imposition séparée au barème célibataire, la moins chère des deux.`,
    ] },
  },
  'ref.iwb': {
    en: { h: `4 · In-Work Benefit`, li: [
      `Per child, by household employment income after tax and social security: 1 627 € (single parent up to 24 180 €, both working 10 000 € to 36 846 €), 856 € (one parent working up to 27 180 €), then 327 € up to 35 000 € (50 000 € when both work).`,
      `Paid on the income of two years earlier; the current year is used here. Flat within each band: the official scheme may taper.`,
    ] },
    nl: { h: `4 · In-Work Benefit`, li: [
      `Per kind, volgens het arbeidsinkomen van het gezin na belasting en sociale zekerheid: € 1.627 (alleenstaande ouder tot € 24.180, beiden werken € 10.000 tot € 36.846), € 856 (één ouder werkt tot € 27.180), daarna € 327 tot € 35.000 (€ 50.000 als beiden werken).`,
      `Betaald op het inkomen van twee jaar eerder; hier wordt het lopende jaar gebruikt. Vast binnen elke schijf: de officiële regeling kan afbouwen.`,
    ] },
    fr: { h: `4 · In-Work Benefit`, li: [
      `Par enfant, selon le revenu salarial du foyer après impôt et sécurité sociale : 1 627 € (parent seul jusqu'à 24 180 €, les deux travaillent de 10 000 € à 36 846 €), 856 € (un seul parent travaille jusqu'à 27 180 €), puis 327 € jusqu'à 35 000 € (50 000 € si les deux travaillent).`,
      `Versé sur le revenu d'il y a deux ans ; l'année en cours est utilisée ici. Fixe dans chaque tranche : le dispositif officiel peut être dégressif.`,
    ] },
  },
  'ref.vat': {
    en: { h: `5 · VAT`, li: [`Standard rate <span class="num">18%</span>, applied to all your net pay as an upper bound.`] },
    nl: { h: `5 · Btw`, li: [`Normaal tarief <span class="num">18%</span>, als bovengrens op je hele nettoloon toegepast.`] },
    fr: { h: `5 · TVA`, li: [`Taux normal de <span class="num">18%</span>, appliqué à tout le salaire net comme maximum.`] },
  },
  'ref.minister': {
    en: { h: `6 · Minister mode`, li: [`Prime Minister 64 866 €, minister 57 082 € (125% and 110% of salary scale 1, 51 893 € in 2026). Taxed like any employee.`] },
    nl: { h: `6 · Ministermodus`, li: [`Eerste minister € 64.866, minister € 57.082 (125% en 110% van loonschaal 1, € 51.893 in 2026). Belast zoals elke werknemer.`] },
    fr: { h: `6 · Mode ministre`, li: [`Premier ministre 64 866 €, ministre 57 082 € (125% et 110% de l'échelle 1, 51 893 € en 2026). Imposés comme tout salarié.`] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Children's Allowance (means-tested on income two years back), the 15% overtime and 10% part-time regimes, school fees and childcare deductions, the 15% rate for highly qualified people and the 35% resident non-domiciled regimes, the Category A to F details for under-18s and part-timers.`,
      `Figures are your final annual tax, not the FSS deductions on each payslip.`,
    ] },
    nl: { h: `Wat niet meegerekend is`, li: [
      `Kinderbijslag (getoetst aan het inkomen van twee jaar eerder), de regelingen van 15% voor overuren en 10% voor deeltijdwerk, aftrek voor schoolgeld en kinderopvang, het tarief van 15% voor hooggekwalificeerden en de regelingen voor niet-gedomicilieerde ingezetenen, de details van categorieën A tot F voor min-18-jarigen en deeltijders.`,
      `De bedragen zijn je uiteindelijke jaarbelasting, niet de FSS-inhoudingen op elke loonstrook.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les allocations familiales (sous condition de revenu d'il y a deux ans), les régimes à 15% pour les heures supplémentaires et à 10% pour le temps partiel, les déductions pour frais de scolarité et de garde, le taux de 15% pour les personnes très qualifiées et les régimes des résidents non domiciliés, le détail des catégories A à F pour les moins de 18 ans et le temps partiel.`,
      `Les montants sont votre impôt annuel final, pas les retenues FSS de chaque fiche de paie.`,
    ] },
  },
  inheritLink: {
    en: `What you'd pay on what you inherit, by relationship →`,
    nl: `Wat je zou betalen op wat je erft, volgens verwantschap →`,
    fr: `Ce que vous paieriez sur un héritage, selon le lien de parenté →`,
  },
  disclaimer: {
    en: `Estimate only, for a full-time employee with a steady weekly wage. Check your payslip and your FS3 for your real figures.`,
    nl: `Enkel een schatting, voor een voltijdse werknemer met een constant weekloon. Controleer je loonstrook en je FS3 voor je echte cijfers.`,
    fr: `Estimation uniquement, pour un salarié à temps plein au salaire hebdomadaire constant. Vérifiez votre fiche de paie et votre FS3 pour vos vrais chiffres.`,
  },
  'src.pwcIt': { en: `PwC: Malta income tax rates 2026`, nl: `PwC: Maltese tarieven inkomstenbelasting 2026`, fr: `PwC : barèmes de l'impôt sur le revenu maltais 2026` },
  'src.pwcOther': { en: `PwC: Malta social security, VAT and duty`, nl: `PwC: Maltese sociale zekerheid, btw en rechten`, fr: `PwC : sécurité sociale, TVA et droits à Malte` },
  'src.kpmg': { en: `KPMG: Malta budget 2026`, nl: `KPMG: Maltese begroting 2026`, fr: `KPMG : budget maltais 2026` },
  'src.rsm': { en: `RSM: 2026 tax rates for parents`, nl: `RSM: tarieven 2026 voor ouders`, fr: `RSM : barèmes 2026 pour les parents` },
  'src.mtca': { en: `MTCA: tax rates for individuals 2026`, nl: `MTCA: belastingtarieven voor particulieren 2026`, fr: `MTCA : barèmes des particuliers 2026` },
  'src.ssc': { en: `PwC: payroll updates 2026`, nl: `PwC: loonupdates 2026`, fr: `PwC : nouveautés de la paie 2026` },
  'src.hub': { en: `FreeMalta: 2026 tax and wage figures`, nl: `FreeMalta: belasting- en loongegevens 2026`, fr: `FreeMalta : chiffres fiscaux et salariaux 2026` },
  'src.iwb': { en: `Social Security: In-Work Benefit`, nl: `Social Security: In-Work Benefit`, fr: `Social Security : In-Work Benefit` },
  'src.minWage': { en: `WageIndicator: minimum wage 2026`, nl: `WageIndicator: minimumloon 2026`, fr: `WageIndicator : salaire minimum 2026` },
  'src.median': { en: `Parliament: NSO median salary 2024`, nl: `Parlement: mediaanloon NSO 2024`, fr: `Parlement : salaire médian NSO 2024` },
  'src.pay': { en: `Newsbook: 2026 ministerial pay`, nl: `Newsbook: ministerlonen 2026`, fr: `Newsbook : salaires ministériels 2026` },
};
