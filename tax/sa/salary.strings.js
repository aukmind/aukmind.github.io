window.TAX_STRINGS = {
  title: { en: `Saudi Buying Power`, nl: `Koopkracht in Saudi-Arabië`, fr: `Pouvoir d'achat en Arabie saoudite` },
  eyebrow: { en: `Saudi Arabia · 2026 · private-sector employee`, nl: `Saudi-Arabië · 2026 · werknemer in de privésector`, fr: `Arabie saoudite · 2026 · salarié du privé` },
  eyebrowMinister: { en: `Saudi Arabia · 2026 · public office`, nl: `Saudi-Arabië · 2026 · openbaar ambt`, fr: `Arabie saoudite · 2026 · fonction publique` },
  lead: {
    en: `Every compulsory charge on a salary in Saudi Arabia in 2026, from what your employer pays to what you can buy. There is no income tax: what changes is whether you are a Saudi paying into GOSI, or an expat whose employer pays a monthly levy and who pays a fee for each dependant.`,
    nl: `Alle verplichte heffingen op een loon in Saudi-Arabië in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Er is geen inkomstenbelasting: het verschil zit in of je als Saudiër bijdraagt aan GOSI, of als expat werkt, waarbij je werkgever een maandelijkse heffing betaalt en jij een vergoeding per gezinslid ten laste.`,
    fr: `Tous les prélèvements obligatoires sur un salaire en Arabie saoudite en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Il n'y a pas d'impôt sur le revenu : tout dépend si vous êtes saoudien et cotisez à la GOSI, ou expatrié, avec une redevance mensuelle payée par l'employeur et une redevance par personne à charge payée par vous.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Living together. There is no income tax and no joint return. For an expat, a partner who doesn't work in Saudi Arabia is a dependant and costs a monthly fee.`,
    nl: `Samenwonend. Er is geen inkomstenbelasting en geen gezamenlijke aangifte. Voor een expat is een partner die niet in Saudi-Arabië werkt een persoon ten laste, met een maandelijkse vergoeding.`,
    fr: `En couple. Il n'y a ni impôt sur le revenu ni déclaration commune. Pour un expatrié, un partenaire qui ne travaille pas en Arabie saoudite est une personne à charge, soumise à une redevance mensuelle.`,
  },
  region: { en: `You are`, nl: `Jij bent`, fr: `Vous êtes` },
  'region.expat': { en: `Expat`, nl: `Expat`, fr: `Expatrié` },
  'region.nat': { en: `Saudi, insured since Jul 2024`, nl: `Saudiër, sinds juli 2024`, fr: `Saoudien, depuis juil. 2024` },
  'region.natOld': { en: `Saudi, insured before`, nl: `Saudiër, al eerder verzekerd`, fr: `Saoudien, assuré avant` },
  vatStandard: { en: `(Saudi standard rate is 15%)`, nl: `(het normale tarief in Saudi-Arabië is 15%)`, fr: `(le taux normal en Arabie saoudite est de 15%)` },
  'refWage.min': { en: `Saudi minimum`, nl: `Minimum Saudiërs`, fr: `Minimum saoudien` },
  'refWage.avg': { en: `Average Saudi, private sector`, nl: `Gemiddelde Saudiër, privésector`, fr: `Moyenne saoudienne, privé` },

  // Minister mode
  ministerOn: { en: `💼 I HOLD PUBLIC OFFICE`, nl: `💼 IK BEKLEED EEN OPENBAAR AMBT`, fr: `💼 J'OCCUPE UNE FONCTION PUBLIQUE` },
  'minRole.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  ministerHint: {
    en: `Saudi Arabia doesn't publish what ministers earn. This is the 2016 figure reported after a 20% cut, the only one found.`,
    nl: `Saudi-Arabië publiceert niet wat ministers verdienen. Dit is het bedrag dat in 2016 werd gemeld na een besparing van 20%, het enige dat gevonden werd.`,
    fr: `L'Arabie saoudite ne publie pas la rémunération des ministres. Voici le montant rapporté en 2016 après une baisse de 20%, le seul trouvé.`,
  },
  minSalaryHint: {
    en: `Yearly pay. Reported amount by default.`,
    nl: `Jaarloon. Standaard het gemelde bedrag.`,
    fr: `Rémunération annuelle. Montant rapporté par défaut.`,
  },
  'tip.ministerRules': {
    en: `Ministers' pay is set by royal order and isn't published. In September 2016 ministers' salaries were cut by 20%; the resulting pay was reported at about USD 132,400 a year (SAR 496,500). No income tax applies. Ministers are taken here as Saudis in the civil pension scheme, 9% from them and 9% from the State. Not confirmed: whether the cut was later reversed, and whether ministers contribute to the pension on their whole pay.`,
    nl: `Het loon van ministers wordt bij koninklijk besluit vastgelegd en niet gepubliceerd. In september 2016 werden de lonen van ministers met 20% verlaagd; het resterende loon werd gemeld op ongeveer USD 132.400 per jaar (SAR 496.500). Er is geen inkomstenbelasting. Ministers worden hier behandeld als Saudiërs in het burgerlijke pensioenstelsel, 9% van henzelf en 9% van de staat. Niet bevestigd: of de verlaging later werd teruggedraaid, en of ministers op hun hele loon pensioenbijdrage betalen.`,
    fr: `La rémunération des ministres est fixée par ordre royal et n'est pas publiée. En septembre 2016, elle a été réduite de 20 % ; le montant qui en résulte a été rapporté à environ 132 400 USD par an (496 500 SAR). Aucun impôt sur le revenu. Les ministres sont traités ici comme des Saoudiens du régime de retraite civil, 9% à leur charge et 9% à celle de l'État. Non confirmé : un éventuel retour sur cette baisse, et la cotisation retraite sur toute la rémunération.`,
  },
  'bd.minGross': { en: `Reported pay`, nl: `Gemeld loon`, fr: `Rémunération rapportée` },
  'bd.minEr': { en: `State pension contribution`, nl: `Pensioenbijdrage van de staat`, fr: `Cotisation retraite de l'État` },
  'bd.minEe': { en: `Your pension contribution`, nl: `Jouw pensioenbijdrage`, fr: `Votre cotisation retraite` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The yearly pay reported in 2016 after the 20% cut, converted at the fixed rate of SAR 3.75 to the dollar.`,
    nl: `Het jaarloon dat in 2016 werd gemeld na de verlaging met 20%, omgerekend aan de vaste koers van SAR 3,75 per dollar.`,
    fr: `La rémunération annuelle rapportée en 2016 après la baisse de 20 %, convertie au taux fixe de 3,75 SAR pour un dollar.`,
  },
  'tip.stateCost': {
    en: `Pay + the 9% the State pays into the civil pension. The work and full rates are measured against it.`,
    nl: `Loon + de 9% die de staat in het burgerlijke pensioen stort. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `Rémunération + les 9% versés par l'État à la retraite civile. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },
  'tip.minEr': {
    en: `9% of pay, paid by the State to the civil pension branch of GOSI (the former Public Pension Agency).`,
    nl: `9% van het loon, betaald door de staat aan de burgerlijke pensioentak van GOSI (het vroegere Public Pension Agency).`,
    fr: `9% de la rémunération, versés par l'État à la branche retraite civile de la GOSI (l'ancienne Public Pension Agency).`,
  },
  'tip.minEe': {
    en: `9% of pay withheld for the civil pension. Not confirmed for ministers.`,
    nl: `9% van het loon ingehouden voor het burgerlijke pensioen. Niet bevestigd voor ministers.`,
    fr: `9% de la rémunération retenus pour la retraite civile. Non confirmé pour les ministres.`,
  },
  'tip.minNone': { en: `Not due: ministers are Saudis.`, nl: `Niet verschuldigd: ministers zijn Saudiërs.`, fr: `Non dû : les ministres sont saoudiens.` },

  // Politicians on the chart
  'stat.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'pol.stat.min': { en: `Reported pay after the 2016 cut`, nl: `Gemeld loon na de verlaging van 2016`, fr: `Rémunération rapportée après la baisse de 2016` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-owned companies, gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon`, fr: `Dirigeants d'entreprises publiques, rémunération brute` },
  'polNote.civil': {
    en: `Reported pay (2016), 9% civil pension contribution, no income tax. The head sits at the employee salary with the same net, with your settings; the dot is their actual pay.`,
    nl: `Gemeld loon (2016), 9% burgerlijke pensioenbijdrage, geen inkomstenbelasting. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw instellingen; het bolletje is hun echte loon.`,
    fr: `Rémunération rapportée (2016), cotisation retraite civile de 9%, sans impôt. La tête est au salaire d'un salarié au même net, avec vos réglages ; le point est leur vraie rémunération.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly pay, shown on the chart as yearly ÷ 12. They are placed where an employee would net the same. Ministers' pay isn't published; see ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarloon, op de grafiek als jaarbedrag ÷ 12. Ze staan waar een werknemer hetzelfde netto zou verdienen. Het loon van ministers wordt niet gepubliceerd; zie ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Rémunération annuelle, placée sur le graphique en montant annuel ÷ 12. Ils sont placés là où un salarié toucherait le même net. La rémunération des ministres n'est pas publiée ; voir ${links}.`,
  },
  'src.pol.min': { en: `Wikipedia, citing Al Arabiya (2016)`, nl: `Wikipedia, naar Al Arabiya (2016)`, fr: `Wikipédia, d'après Al Arabiya (2016)` },
  bracketTop: { en: `GOSI ceiling`, nl: `GOSI-plafond`, fr: `plafond GOSI` },
  chartTitle: { en: `Charges and buying power at each salary level`, nl: `Heffingen en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Charge rate per salary chart`, nl: `Grafiek van het heffingspercentage per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: () => `What happens at low pay?`,
    nl: () => `Wat gebeurt er bij een laag loon?`,
    fr: () => `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, levy, dep) => `There is no income tax and no means-tested benefit to lose. For Saudis the rate is flat: GOSI takes the same share of every riyal, on at least SAR 1,500 a month. For expats it's the reverse: the employer's levy of ${levy} a month and the ${dep} a month for each dependant are flat amounts, so they weigh most on low pay. There is no general minimum wage; a Saudi must earn at least ${a} a month to count fully towards the Saudisation quota (Nitaqat).`,
    nl: (a, levy, dep) => `Er is geen inkomstenbelasting en geen inkomensafhankelijke uitkering die wegvalt. Voor Saudiërs is het tarief vlak: GOSI neemt hetzelfde deel van elke riyal, op minstens SAR 1.500 per maand. Voor expats is het omgekeerd: de heffing van ${levy} per maand voor de werkgever en ${dep} per maand per persoon ten laste zijn vaste bedragen en wegen dus het zwaarst op een laag loon. Er is geen algemeen minimumloon; een Saudiër moet minstens ${a} per maand verdienen om volledig mee te tellen voor het Saudisatie-quotum (Nitaqat).`,
    fr: (a, levy, dep) => `Il n'y a ni impôt sur le revenu ni prestation sous condition de ressources à perdre. Pour un Saoudien le taux est plat : la GOSI prend la même part de chaque riyal, sur au moins 1 500 SAR par mois. Pour un expatrié c'est l'inverse : la redevance de ${levy} par mois payée par l'employeur et les ${dep} par mois pour chaque personne à charge sont des montants fixes, qui pèsent surtout sur les bas salaires. Il n'y a pas de salaire minimum général ; un Saoudien doit gagner au moins ${a} par mois pour compter pleinement dans le quota de saoudisation (Nitaqat).`,
  },
  topTitle: {
    en: (top, end) => `Why does it drop above ${end}?`,
    nl: (top, end) => `Waarom daalt het boven ${end}?`,
    fr: (top, end) => `Pourquoi la baisse au-delà de ${end} ?`,
  },
  topBody: {
    en: (top, end, kind) => kind === 'expat'
      ? `The employer's 2% occupational hazards contribution stops at the GOSI ceiling of ${end}. The levy and dependant fees are flat, so the rate keeps falling as pay rises.`
      : `GOSI contributions stop at the ceiling of ${end}: above it, every extra riyal is free of charges except VAT.`,
    nl: (top, end, kind) => kind === 'expat'
      ? `De werkgeversbijdrage van 2% voor arbeidsongevallen stopt aan het GOSI-plafond van ${end}. De heffing en de vergoedingen voor personen ten laste zijn vast, dus het tarief blijft dalen naarmate het loon stijgt.`
      : `De GOSI-bijdragen stoppen aan het plafond van ${end}: daarboven is elke extra riyal vrij van heffingen, behalve btw.`,
    fr: (top, end, kind) => kind === 'expat'
      ? `La cotisation employeur de 2% pour les risques professionnels s'arrête au plafond GOSI de ${end}. La redevance et les frais par personne à charge sont fixes : le taux continue de baisser quand le salaire monte.`
      : `Les cotisations GOSI s'arrêtent au plafond de ${end} : au-delà, chaque riyal supplémentaire est libre de tout prélèvement, hors TVA.`,
  },

  // Components
  'comp.er': { en: `Employer GOSI contributions`, nl: `Werkgeversbijdragen GOSI`, fr: `Cotisations GOSI employeur` },
  'comp.levy': { en: `Expat levy (employer)`, nl: `Expatheffing (werkgever)`, fr: `Redevance expatriés (employeur)` },
  'comp.ee': { en: `Your GOSI contributions`, nl: `Jouw GOSI-bijdragen`, fr: `Vos cotisations GOSI` },
  'comp.dep': { en: `Dependant fees`, nl: `Vergoeding personen ten laste`, fr: `Redevance personnes à charge` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries. Bonuses are free of tax like any pay; GOSI is due only on basic salary and housing allowance.`,
    nl: `12 maandlonen. Bonussen zijn net als elk loon belastingvrij; GOSI is enkel verschuldigd op basisloon en woontoelage.`,
    fr: `12 salaires mensuels. Les primes sont exonérées comme tout salaire ; la GOSI n'est due que sur le salaire de base et l'indemnité de logement.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `With no income tax, there is nothing to split. For an expat, a partner without a job in Saudi Arabia is a dependant on your residence permit and costs SAR 400 a month; a partner with a salary set above isn't counted.`,
    nl: `Zonder inkomstenbelasting valt er niets te verdelen. Voor een expat is een partner zonder job in Saudi-Arabië een persoon ten laste op jouw verblijfsvergunning en kost SAR 400 per maand; een partner met een loon hierboven telt niet mee.`,
    fr: `Sans impôt sur le revenu, il n'y a rien à partager. Pour un expatrié, un partenaire sans emploi en Arabie saoudite est une personne à charge sur votre titre de séjour et coûte 400 SAR par mois ; un partenaire avec un salaire indiqué ci-dessus n'est pas compté.`,
  },
  'tip.reg': {
    en: `Saudis pay into GOSI for pensions and unemployment (SANED). Those first registered from 3 July 2024 fall under the new Social Insurance Law: the pension rate is 10% on each side since 1 July 2026, rising by 0.5 point each July to 11% in 2028. Those insured before stay at 9%. Expats have no pension: their employer pays only the 2% occupational hazards contribution, plus the monthly expat levy, and owes an end-of-service award instead. Citizens of other Gulf states pay into their home scheme (not modelled).`,
    nl: `Saudiërs dragen bij aan GOSI voor pensioen en werkloosheid (SANED). Wie voor het eerst is ingeschreven vanaf 3 juli 2024 valt onder de nieuwe socialeverzekeringswet: het pensioentarief is 10% aan elke kant sinds 1 juli 2026 en stijgt elke juli met 0,5 punt tot 11% in 2028. Wie eerder verzekerd was, blijft op 9%. Expats hebben geen pensioen: hun werkgever betaalt enkel de bijdrage van 2% voor arbeidsongevallen, plus de maandelijkse expatheffing, en is een eindeloonvergoeding verschuldigd. Burgers van andere Golfstaten betalen aan hun eigen stelsel (niet gemodelleerd).`,
    fr: `Les Saoudiens cotisent à la GOSI pour la retraite et le chômage (SANED). Ceux inscrits pour la première fois depuis le 3 juillet 2024 relèvent de la nouvelle loi sur les assurances sociales : le taux retraite est de 10% de chaque côté depuis le 1er juillet 2026 et monte de 0,5 point chaque juillet jusqu'à 11% en 2028. Ceux assurés avant restent à 9%. Les expatriés n'ont pas de retraite : leur employeur ne paie que la cotisation de 2% pour les risques professionnels, plus la redevance mensuelle, et doit une indemnité de fin de service. Les citoyens des autres pays du Golfe cotisent à leur propre régime (non modélisé).`,
  },
  'tip.costShort': { en: `Gross salary + employer GOSI + the expat levy.`, nl: `Brutoloon + werkgeversbijdragen GOSI + de expatheffing.`, fr: `Salaire brut + GOSI employeur + la redevance expatriés.` },
  'tip.er': {
    en: `Paid by your employer to GOSI on top of your gross salary, on basic salary plus housing allowance, up to SAR 45,000 a month. Here your whole gross is taken as that base, which overstates it when part of your pay is a transport or other allowance.`,
    nl: `Betaald door je werkgever aan GOSI bovenop je brutoloon, op basisloon plus woontoelage, tot SAR 45.000 per maand. Hier telt je hele brutoloon als die basis, wat te hoog is als een deel van je loon een vervoers- of andere toelage is.`,
    fr: `Versées par votre employeur à la GOSI en plus de votre salaire brut, sur le salaire de base plus l'indemnité de logement, jusqu'à 45 000 SAR par mois. Ici tout le brut est pris comme base, ce qui la surestime si une partie de votre paie est une indemnité de transport ou autre.`,
  },
  'tip.base': { en: `Contribution base for the year`, nl: `Bijdragebasis voor het jaar`, fr: `Base de cotisation sur l'année` },
  'tip.pen': { en: `Pension`, nl: `Pensioen`, fr: `Retraite` },
  'tip.saned': { en: `Unemployment (SANED)`, nl: `Werkloosheid (SANED)`, fr: `Chômage (SANED)` },
  'tip.ohi': { en: `Occupational hazards`, nl: `Arbeidsongevallen`, fr: `Risques professionnels` },
  'tip.levy': {
    en: `A monthly fee the employer pays to the Ministry of Human Resources for each foreign worker: SAR 800 where expats outnumber Saudis in the firm, SAR 700 otherwise (SAR 800 used here). It costs your employer, not you, so it counts in the cost of your job.`,
    nl: `Een maandelijkse vergoeding die de werkgever aan het ministerie van Human Resources betaalt per buitenlandse werknemer: SAR 800 als er in het bedrijf meer expats dan Saudiërs werken, anders SAR 700 (hier SAR 800). Je werkgever betaalt ze, niet jij, dus ze telt mee in de kost van je job.`,
    fr: `Une redevance mensuelle que l'employeur verse au ministère des Ressources humaines pour chaque travailleur étranger : 800 SAR si l'entreprise compte plus d'expatriés que de Saoudiens, 700 SAR sinon (800 SAR ici). Elle est à la charge de l'employeur, pas de vous, et compte donc dans le coût de votre emploi.`,
  },
  'tip.noLevy': { en: `Not due for Saudis.`, nl: `Niet verschuldigd voor Saudiërs.`, fr: `Non due pour les Saoudiens.` },
  'tip.dep': {
    en: `Expats pay SAR 400 a month for each dependant on their residence permit (iqama), here your children and a partner without a salary. It is paid when the permit is renewed. Saudis pay nothing.`,
    nl: `Expats betalen SAR 400 per maand per persoon ten laste op hun verblijfsvergunning (iqama), hier je kinderen en een partner zonder loon. Het wordt betaald bij de verlenging van de vergunning. Saudiërs betalen niets.`,
    fr: `Les expatriés paient 400 SAR par mois pour chaque personne à charge sur leur titre de séjour (iqama), ici vos enfants et un partenaire sans salaire. Elle se paie au renouvellement du titre. Les Saoudiens ne paient rien.`,
  },
  'tip.depN': { en: n => `${n} dependant${n > 1 ? 's' : ''} × SAR 400 × 12`, nl: n => `${n} ${n > 1 ? 'personen' : 'persoon'} ten laste × SAR 400 × 12`, fr: n => `${n} personne${n > 1 ? 's' : ''} à charge × 400 SAR × 12` },
  'tip.noEeExpat': {
    en: `Expats: no contribution from you, and no income tax either.`,
    nl: `Expats: geen bijdrage van jou, en ook geen inkomstenbelasting.`,
    fr: `Expatriés : aucune cotisation à votre charge, ni impôt sur le revenu.`,
  },
  'tip.ee': {
    en: `Withheld from your pay for GOSI, Saudis only: pension (10% for those insured since July 2024, 9% before) and unemployment insurance (SANED, 0.75%), on basic salary plus housing up to SAR 45,000 a month.`,
    nl: `Ingehouden op je loon voor GOSI, enkel Saudiërs: pensioen (10% voor wie sinds juli 2024 verzekerd is, 9% daarvoor) en werkloosheidsverzekering (SANED, 0,75%), op basisloon plus woontoelage tot SAR 45.000 per maand.`,
    fr: `Retenues sur votre paie pour la GOSI, Saoudiens seulement : retraite (10% pour les assurés depuis juillet 2024, 9% avant) et assurance chômage (SANED, 0,75%), sur le salaire de base plus le logement jusqu'à 45 000 SAR par mois.`,
  },
  'tip.vatM': {
    en: `Residential rent is exempt, and private healthcare and education for Saudi citizens are taken over by the State, so this is an upper bound.`,
    nl: `Woninghuur is vrijgesteld, en de staat neemt de btw op privézorg en -onderwijs voor Saudische burgers over, dus dit is een bovengrens.`,
    fr: `Les loyers d'habitation sont exonérés, et l'État prend en charge la TVA sur les soins et l'enseignement privés des citoyens saoudiens : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What you keep over the year${calc}. Gross − GOSI contributions − dependant fees.`,
    nl: calc => `Wat je over het jaar overhoudt${calc}. Bruto − GOSI-bijdragen − vergoeding personen ten laste.`,
    fr: calc => `Ce qui vous reste sur l'année${calc}. Brut − cotisations GOSI − redevance personnes à charge.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · 2026`, nl: `Gebruikte regels · 2026`, fr: `Règles utilisées · 2026` },
  'ref.noTax': {
    en: { h: `1 · No income tax`, li: [
      `No tax on employment income, for Saudis and expats alike. Zakat is levied on businesses and their Saudi owners, not on salaries.`,
    ] },
    nl: { h: `1 · Geen inkomstenbelasting`, li: [
      `Geen belasting op arbeidsinkomen, voor Saudiërs en expats. Zakat wordt geheven op bedrijven en hun Saudische eigenaars, niet op lonen.`,
    ] },
    fr: { h: `1 · Pas d'impôt sur le revenu`, li: [
      `Aucun impôt sur les salaires, pour les Saoudiens comme pour les expatriés. La zakat frappe les entreprises et leurs propriétaires saoudiens, pas les salaires.`,
    ] },
  },
  'ref.gosi': {
    en: { h: `2 · GOSI, Saudis insured since 3 July 2024`, li: [
      `Pension <span class="num">10%</span> employee + <span class="num">10%</span> employer since 1 July 2026 (9.5% before), rising to <span class="num">11%</span> each by July 2028.`,
      `Unemployment (SANED) <span class="num">0.75%</span> + <span class="num">0.75%</span>; occupational hazards <span class="num">2%</span>, employer.`,
      `Base: basic salary + housing allowance, from <span class="num">SAR 1,500</span> to <span class="num">SAR 45,000</span> a month.`,
    ] },
    nl: { h: `2 · GOSI, Saudiërs verzekerd sinds 3 juli 2024`, li: [
      `Pensioen <span class="num">10%</span> werknemer + <span class="num">10%</span> werkgever sinds 1 juli 2026 (daarvoor 9,5%), oplopend tot <span class="num">11%</span> elk tegen juli 2028.`,
      `Werkloosheid (SANED) <span class="num">0,75%</span> + <span class="num">0,75%</span>; arbeidsongevallen <span class="num">2%</span>, werkgever.`,
      `Basis: basisloon + woontoelage, van <span class="num">SAR 1.500</span> tot <span class="num">SAR 45.000</span> per maand.`,
    ] },
    fr: { h: `2 · GOSI, Saoudiens assurés depuis le 3 juillet 2024`, li: [
      `Retraite <span class="num">10%</span> salarié + <span class="num">10%</span> employeur depuis le 1er juillet 2026 (9,5% avant), jusqu'à <span class="num">11%</span> chacun en juillet 2028.`,
      `Chômage (SANED) <span class="num">0,75%</span> + <span class="num">0,75%</span> ; risques professionnels <span class="num">2%</span>, employeur.`,
      `Base : salaire de base + indemnité de logement, de <span class="num">1 500 SAR</span> à <span class="num">45 000 SAR</span> par mois.`,
    ] },
  },
  'ref.old': {
    en: { h: `3 · Saudis insured before`, li: [
      `Pension <span class="num">9%</span> + <span class="num">9%</span>, SANED 0.75% + 0.75%, occupational hazards 2%: <span class="num">9.75%</span> from you, <span class="num">11.75%</span> from the employer. Same base and ceiling.`,
    ] },
    nl: { h: `3 · Saudiërs die al eerder verzekerd waren`, li: [
      `Pensioen <span class="num">9%</span> + <span class="num">9%</span>, SANED 0,75% + 0,75%, arbeidsongevallen 2%: <span class="num">9,75%</span> van jou, <span class="num">11,75%</span> van de werkgever. Zelfde basis en plafond.`,
    ] },
    fr: { h: `3 · Saoudiens assurés avant`, li: [
      `Retraite <span class="num">9%</span> + <span class="num">9%</span>, SANED 0,75% + 0,75%, risques professionnels 2% : <span class="num">9,75%</span> pour vous, <span class="num">11,75%</span> pour l'employeur. Même base et plafond.`,
    ] },
  },
  'ref.expat': {
    en: { h: `4 · Expats`, li: [
      `No pension or unemployment contribution. Employer pays occupational hazards <span class="num">2%</span> on basic + housing, up to SAR 45,000 a month.`,
    ] },
    nl: { h: `4 · Expats`, li: [
      `Geen pensioen- of werkloosheidsbijdrage. De werkgever betaalt <span class="num">2%</span> voor arbeidsongevallen op basisloon + woontoelage, tot SAR 45.000 per maand.`,
    ] },
    fr: { h: `4 · Expatriés`, li: [
      `Aucune cotisation retraite ni chômage. L'employeur paie <span class="num">2%</span> pour les risques professionnels sur le salaire de base + logement, jusqu'à 45 000 SAR par mois.`,
    ] },
  },
  'ref.levy': {
    en: { h: `5 · Expat levy and dependant fees`, li: [
      `Employer: <span class="num">SAR 800</span> a month per expat worker (SAR 700 if Saudis are at least as many as expats in the firm).`,
      `Employee: <span class="num">SAR 400</span> a month per dependant on the iqama.`,
    ] },
    nl: { h: `5 · Expatheffing en vergoeding personen ten laste`, li: [
      `Werkgever: <span class="num">SAR 800</span> per maand per expat (SAR 700 als er minstens evenveel Saudiërs als expats in het bedrijf werken).`,
      `Werknemer: <span class="num">SAR 400</span> per maand per persoon ten laste op de iqama.`,
    ] },
    fr: { h: `5 · Redevance expatriés et personnes à charge`, li: [
      `Employeur : <span class="num">800 SAR</span> par mois par expatrié (700 SAR si l'entreprise compte au moins autant de Saoudiens que d'expatriés).`,
      `Salarié : <span class="num">400 SAR</span> par mois par personne à charge sur l'iqama.`,
    ] },
  },
  'ref.vat': {
    en: { h: `6 · VAT on spending`, li: [
      `Standard rate <span class="num">15%</span> since 1 July 2020 (5% from 2018), applied to all of your net pay as if you spent it. Use the slider to see other rates.`,
      `VAT inside a price = price × r / (100 + r): at 15% that's 15 / 115 = <span class="num">13.04%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">15%</span> sinds 1 juli 2020 (5% vanaf 2018), toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar om andere tarieven te bekijken.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 15% is dat 15 / 115 = <span class="num">13,04%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">15%</span> depuis le 1er juillet 2020 (5% dès 2018), appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour voir d'autres taux.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 15%, cela fait 15 / 115 = <span class="num">13,04%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Public offices`, li: [
      `Ministers: about <span class="num">SAR 496,500</span> a year (USD 132,400), reported in 2016 after a 20% cut. Not published officially.`,
      `No income tax; 9% civil pension contribution assumed.`,
    ] },
    nl: { h: `7 · Openbare ambten`, li: [
      `Ministers: ongeveer <span class="num">SAR 496.500</span> per jaar (USD 132.400), gemeld in 2016 na een verlaging met 20%. Niet officieel gepubliceerd.`,
      `Geen inkomstenbelasting; 9% burgerlijke pensioenbijdrage verondersteld.`,
    ] },
    fr: { h: `7 · Fonctions publiques`, li: [
      `Ministres : environ <span class="num">496 500 SAR</span> par an (132 400 USD), rapportés en 2016 après une baisse de 20 %. Non publié officiellement.`,
      `Aucun impôt ; cotisation retraite civile de 9% supposée.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `The end-of-service award (half a month's wage per year for the first five years, a full month after), deferred pay owed by the employer. Compulsory health insurance for expats, iqama, work permit and visa fees.`,
      `Citizens of other Gulf states (their home scheme applies through GOSI), the public-sector civil pension for other civil servants, and support such as Citizen's Account payments or HRDF wage subsidies for Saudis.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `De eindeloonvergoeding (een half maandloon per jaar de eerste vijf jaar, daarna een volledig), uitgesteld loon dat de werkgever verschuldigd is. De verplichte ziekteverzekering voor expats, kosten voor iqama, werkvergunning en visum.`,
      `Burgers van andere Golfstaten (hun eigen stelsel geldt via GOSI), het burgerlijke pensioen voor andere ambtenaren, en steun zoals de Citizen's Account of loonsubsidies van HRDF voor Saudiërs.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `L'indemnité de fin de service (un demi-mois de salaire par an les cinq premières années, un mois ensuite), un salaire différé dû par l'employeur. L'assurance santé obligatoire des expatriés, les frais d'iqama, de permis de travail et de visa.`,
      `Les citoyens des autres pays du Golfe (leur régime s'applique via la GOSI), la retraite civile des autres fonctionnaires, et les aides comme le Citizen's Account ou les subventions salariales du HRDF pour les Saoudiens.`,
    ] },
  },

  inheritLink: {
    en: `What an estate pays when it's passed on, by who inherits →`,
    nl: `Wat een nalatenschap betaalt bij overdracht, volgens wie erft →`,
    fr: `Ce que paie une succession, selon qui hérite →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip, GOSI and the Ministry of Human Resources decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook, GOSI en het ministerie van Human Resources zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie, la GOSI et le ministère des Ressources humaines font foi.`,
  },

  'src.noTax': { en: `PwC: no personal income tax`, nl: `PwC: geen personenbelasting`, fr: `PwC : pas d'impôt sur le revenu` },
  'src.gosi': { en: `PwC: GOSI contributions`, nl: `PwC: GOSI-bijdragen`, fr: `PwC : cotisations GOSI` },
  'src.newLaw': { en: `Rivermate: GOSI rates under the 2024 law`, nl: `Rivermate: GOSI-tarieven onder de wet van 2024`, fr: `Rivermate : taux GOSI sous la loi de 2024` },
  'src.vat': { en: `PwC: VAT at 15%`, nl: `PwC: btw van 15%`, fr: `PwC : TVA à 15%` },
  'src.zatca': { en: `ZATCA: taxes`, nl: `ZATCA: belastingen`, fr: `ZATCA : impôts` },
  'src.wages': { en: `Rivermate: average Saudi private-sector salary`, nl: `Rivermate: gemiddeld loon Saudiërs in de privésector`, fr: `Rivermate : salaire moyen des Saoudiens du privé` },
  'src.minWage': { en: `Wikipedia: minimum wages`, nl: `Wikipedia: minimumlonen`, fr: `Wikipédia : salaires minimaux` },
  'src.mol': { en: `Ministry of Human Resources`, nl: `Ministerie van Human Resources`, fr: `Ministère des Ressources humaines` },
  'src.pol': { en: `Wikipedia: ministers' pay (Al Arabiya, 2016)`, nl: `Wikipedia: loon van ministers (Al Arabiya, 2016)`, fr: `Wikipédia : rémunération des ministres (Al Arabiya, 2016)` },
};
