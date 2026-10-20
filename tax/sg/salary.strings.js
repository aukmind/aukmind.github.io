window.TAX_STRINGS = {
  title: { en: `Singaporean Buying Power`, nl: `Singaporese koopkracht`, fr: `Pouvoir d'achat à Singapour` },
  eyebrow: { en: `Singapore · income 2026 (YA2027) · employee`, nl: `Singapore · inkomen 2026 (YA2027) · werknemer`, fr: `Singapour · revenus 2026 (YA2027) · salarié` },
  eyebrowMinister: { en: `Singapore · income 2026 (YA2027) · office holder`, nl: `Singapore · inkomen 2026 (YA2027) · ambtsdrager`, fr: `Singapour · revenus 2026 (YA2027) · titulaire de fonction` },
  lead: {
    en: `Every tax on a Singapore salary in 2026, from what your employer pays to what you can buy. Income tax is low and progressive, from 0% to 24%. The big item for citizens and PRs is CPF: up to 37% of pay goes into your own CPF accounts, which you can use for housing, healthcare and retirement but not spend freely.`,
    nl: `Alle belastingen op een Singaporees loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. De inkomstenbelasting is laag en progressief, van 0% tot 24%. De grote post voor burgers en PR's is CPF: tot 37% van het loon gaat naar je eigen CPF-rekeningen, die je voor wonen, zorg en pensioen kunt gebruiken maar niet vrij kunt uitgeven.`,
    fr: `Tous les prélèvements sur un salaire singapourien en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. L'impôt sur le revenu est faible et progressif, de 0% à 24%. Le gros poste pour les citoyens et résidents permanents est le CPF : jusqu'à 37% du salaire va sur vos propres comptes CPF, utilisables pour le logement, la santé et la retraite, mais pas librement.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `In Singapore each person is taxed alone. If your partner earns SG$8,000 a year or less, SG$2,000 more of your income is tax-free. Each child makes SG$4,000 tax-free for whichever parent it saves more.`,
    nl: `In Singapore wordt elke persoon apart belast. Verdient je partner SG$ 8.000 per jaar of minder, dan is SG$ 2.000 extra van jouw inkomen belastingvrij. Elk kind maakt SG$ 4.000 belastingvrij bij de ouder bij wie het meest bespaard wordt.`,
    fr: `À Singapour, chacun est imposé seul. Si votre partenaire gagne 8 000 SG$ par an ou moins, 2 000 SG$ de plus de votre revenu sont exonérés. Chaque enfant rend 4 000 SG$ exonérés chez le parent à qui cela fait gagner le plus.`,
  },
  region: { en: `Status`, nl: `Status`, fr: `Statut` },
  'region.cit': { en: `Citizen or PR (3rd year on)`, nl: `Burger of PR (vanaf 3e jaar)`, fr: `Citoyen ou RP (dès la 3e année)` },
  'region.for': { en: `Foreigner (work pass)`, nl: `Buitenlander (werkvergunning)`, fr: `Étranger (permis de travail)` },
  employerSize: { en: `Your age (CPF band)`, nl: `Je leeftijd (CPF-schijf)`, fr: `Votre âge (tranche CPF)` },
  'size.a55': { en: `55 or under`, nl: `55 of jonger`, fr: `55 ans ou moins` },
  'size.a60': { en: `56 to 60`, nl: `56 tot 60`, fr: `56 à 60 ans` },
  'size.a65': { en: `61 to 65`, nl: `61 tot 65`, fr: `61 à 65 ans` },
  'size.a70': { en: `66 to 70`, nl: `66 tot 70`, fr: `66 à 70 ans` },
  'size.a99': { en: `Over 70`, nl: `Ouder dan 70`, fr: `Plus de 70 ans` },
  vatStandard: { en: `(Singapore's GST is 9%)`, nl: `(de Singaporese GST bedraagt 9%)`, fr: `(la GST de Singapour est de 9%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.mp': { en: `Member of Parliament`, nl: `Parlementslid`, fr: `Député` },
  'minRole.min': { en: `Minister (MR4 entry grade)`, nl: `Minister (instapgraad MR4)`, fr: `Ministre (grade d'entrée MR4)` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Yearly pay under the 2012 pay rules, bonuses included. Income tax only: this pay does not go through CPF, the compulsory savings scheme.`,
    nl: `Jaarloon volgens de loonregels van 2012, bonussen inbegrepen. Alleen inkomstenbelasting: dit loon gaat niet via CPF, het verplichte spaarstelsel.`,
    fr: `Paie annuelle selon les règles de 2012, primes comprises. Impôt sur le revenu seulement : cette paie ne passe pas par le CPF, l'épargne obligatoire.`,
  },
  minSalaryHint: {
    en: `Yearly pay including the 13th month and bonuses. By default, the reference amount.`,
    nl: `Jaarloon inclusief 13e maand en bonussen. Standaard het referentiebedrag.`,
    fr: `Paie annuelle, 13e mois et primes compris. Par défaut, le montant de référence.`,
  },
  'tip.ministerRules': {
    en: `Since a 2012 review, a junior minister's pay (grade MR4) is tied to what top earners make: 60% of the median income of the 1,000 best-paid Singapore citizens, minus a discount. That is about SG$1.1 million a year. Part of it depends on how well they perform, and part is a national bonus linked to economic growth, wages and unemployment. The Prime Minister gets twice that, about SG$2.2 million. MPs get SG$192,500 a year. There is no pension. A new review was reported in 2026; until it is confirmed, the 2012 figures are used. Here only income tax is applied: we assume their pay does not go through CPF.`,
    nl: `Sinds een herziening van 2012 is het loon van een minister van de laagste rang (graad MR4) gekoppeld aan wat topverdieners verdienen: 60% van het mediane inkomen van de 1.000 best betaalde Singaporese burgers, min een korting. Dat is ongeveer SG$ 1,1 miljoen per jaar. Een deel hangt af van hoe goed ze presteren, en een deel is een nationale bonus gekoppeld aan economische groei, lonen en werkloosheid. De premier krijgt het dubbele, ongeveer SG$ 2,2 miljoen. Parlementsleden krijgen SG$ 192.500 per jaar. Er is geen pensioen. In 2026 werd een nieuwe herziening gemeld; tot die bevestigd is, gelden de cijfers van 2012. Hier geldt alleen inkomstenbelasting: we nemen aan dat hun loon niet via CPF gaat.`,
    fr: `Depuis une révision de 2012, la paie d'un ministre du rang le plus bas (grade MR4) est liée à ce que gagnent les plus hauts revenus : 60% du revenu médian des 1 000 citoyens singapouriens les mieux payés, moins une décote. Cela fait environ 1,1 million SG$ par an. Une part dépend de leurs résultats, et une part est une prime nationale liée à la croissance, aux salaires et au chômage. Le Premier ministre touche le double, environ 2,2 millions SG$. Les députés reçoivent 192 500 SG$ par an. Il n'y a pas de pension. Une nouvelle révision a été annoncée en 2026 ; tant qu'elle n'est pas confirmée, on garde les chiffres de 2012. Seul l'impôt sur le revenu est appliqué : on suppose que leur paie ne passe pas par le CPF.`,
  },
  'bd.minGross': { en: `Official pay`, nl: `Ambtsloon`, fr: `Traitement de fonction` },
  'bd.stateCost': { en: `Cost to the State`, nl: `Kost voor de staat`, fr: `Coût pour l'État` },
  'tip.minGross': {
    en: `Yearly pay for the job, bonuses included, under the 2012 pay rules.`,
    nl: `Jaarloon voor de functie, bonussen inbegrepen, volgens de loonregels van 2012.`,
    fr: `Paie annuelle du poste, primes comprises, selon les règles de 2012.`,
  },
  'tip.stateCost': {
    en: `The State pays just the pay itself; no CPF or training levy is added on top.`,
    nl: `De staat betaalt enkel het loon zelf; er komt geen CPF of opleidingsheffing bovenop.`,
    fr: `L'État paie seulement la paie elle-même ; ni CPF ni taxe de formation ne s'y ajoutent.`,
  },
  'tip.minEe': {
    en: `We assume office holders' pay does not go through CPF, so nothing is taken for it. Not confirmed by an official source.`,
    nl: `We nemen aan dat het loon van ambtsdragers niet via CPF gaat, dus er wordt niets voor afgehouden. Niet bevestigd door een officiële bron.`,
    fr: `On suppose que la paie des titulaires de fonction ne passe pas par le CPF : rien n'est retenu. Non confirmé par une source officielle.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.pres': { en: `President`, nl: `President`, fr: `Président` },
  'stat.min': { en: `Minister (MR4)`, nl: `Minister (MR4)`, fr: `Ministre (MR4)` },
  'stat.mp': { en: `Member of Parliament`, nl: `Parlementslid`, fr: `Député` },
  'pol.stat.pm': { en: `Twice a junior minister's pay, 2012 rules`, nl: `Twee keer het loon van een minister van de laagste rang, regels 2012`, fr: `Deux fois la paie d'un ministre du rang le plus bas, règles 2012` },
  'pol.stat.pres': { en: `Personal pay from the 2012 state budget for the head of state`, nl: `Persoonlijk loon uit het staatsbudget voor het staatshoofd van 2012`, fr: `Paie personnelle du budget du chef de l'État de 2012` },
  'pol.stat.min': { en: `Junior minister (grade MR4), 2012 rules`, nl: `Minister van de laagste rang (graad MR4), regels 2012`, fr: `Ministre du rang le plus bas (grade MR4), règles 2012` },
  'pol.stat.mp': { en: `MP allowance, 2012 rules`, nl: `Vergoeding parlementslid, regels 2012`, fr: `Indemnité de député, règles 2012` },
  'src.pol.pm': { en: `Wikipedia: Prime Minister of Singapore`, nl: `Wikipedia: premier van Singapore`, fr: `Wikipédia : Premier ministre de Singapour` },
  'src.pol.pres': { en: `Wikipedia: President of Singapore`, nl: `Wikipedia: president van Singapore`, fr: `Wikipédia : président de Singapour` },
  'src.pol.min': { en: `Wikipedia: Cabinet of Singapore`, nl: `Wikipedia: kabinet van Singapore`, fr: `Wikipédia : cabinet de Singapour` },
  'src.pol.mp': { en: `Wikipedia: Parliament of Singapore`, nl: `Wikipedia: parlement van Singapore`, fr: `Wikipédia : Parlement de Singapour` },
  'polNote.official': {
    en: `Income tax only, no CPF. The face sits at the employee salary that would leave the same take-home pay.`,
    nl: `Alleen inkomstenbelasting, geen CPF. Het hoofdje staat bij het werknemersloon dat hetzelfde netto zou overlaten.`,
    fr: `Impôt sur le revenu seulement, sans CPF. La tête est placée au salaire d'un salarié qui laisserait le même net.`,
  },
  'polTipNote.pm': {
    en: `About SG$2.2 million a year, including the 13th month, the yearly performance part and the national bonus (2012 review).`,
    nl: `Ongeveer SG$ 2,2 miljoen per jaar, inclusief de 13e maand, het jaarlijkse prestatiedeel en de nationale bonus (herziening 2012).`,
    fr: `Environ 2,2 millions SG$ par an, 13e mois, part annuelle liée aux résultats et prime nationale comprises (révision 2012).`,
  },
  'polTipNote.pres': {
    en: `SG$1,568,900 a year of personal pay in the state budget for the head of state, since February 2012.`,
    nl: `SG$ 1.568.900 per jaar persoonlijk loon in het staatsbudget voor het staatshoofd, sinds februari 2012.`,
    fr: `1 568 900 SG$ par an de paie personnelle dans le budget du chef de l'État, depuis février 2012.`,
  },
  'polTipNote.min': {
    en: `About SG$1.1 million a year for a junior minister (grade MR4), with bonuses at their usual target (2012 review).`,
    nl: `Ongeveer SG$ 1,1 miljoen per jaar voor een minister van de laagste rang (graad MR4), met bonussen op hun gewone streefniveau (herziening 2012).`,
    fr: `Environ 1,1 million SG$ par an pour un ministre du rang le plus bas (grade MR4), primes à leur niveau cible habituel (révision 2012).`,
  },
  'polTipNote.mp': {
    en: `SG$192,500 a year. Most MPs also keep their own job; that pay is not counted.`,
    nl: `SG$ 192.500 per jaar. De meeste parlementsleden houden ook hun eigen baan; dat loon telt niet mee.`,
    fr: `192 500 SG$ par an. La plupart des députés gardent aussi leur emploi ; cette paie n'est pas comptée.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. Pay is yearly gross, shown on the chart as the yearly amount divided by 12. Their pay is worked out without CPF, so each face sits at the employee salary that would leave the same take-home pay. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Het loon is jaarlijks bruto, op de grafiek getoond als jaarbedrag gedeeld door 12. Hun loon wordt zonder CPF berekend, dus elk hoofdje staat bij het werknemersloon dat hetzelfde netto zou overlaten. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La paie est un brut annuel, placé sur le graphique en montant annuel divisé par 12. Elle est calculée sans CPF : chaque tête est placée au salaire d'un salarié qui laisserait le même net. Sources : ${links}.`,
  },
  bracketTop: { en: `CPF ceiling`, nl: `CPF-plafond`, fr: `plafond CPF` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (end, free) => `Why no income tax up to ${free}?`,
    nl: (end, free) => `Waarom geen inkomstenbelasting tot ${free}?`,
    fr: (end, free) => `Pourquoi aucun impôt sur le revenu jusqu'à ${free} ?`,
  },
  trapBody: {
    en: (end, free, cit, rate, start) => `After a few tax-free amounts (one for working${cit ? `, plus what you pay into CPF` : ''}), the first SG$20,000 is taxed at 0%. So up to ${free} gross, you pay no income tax. ${cit ? `Your own CPF payment starts at ${start} and builds up until ${end}: in that shaded zone, each extra dollar costs ${rate} in CPF. Below ${start}, only your employer pays CPF.` : `Foreigners pay no CPF, so only the employer's small training levy is due.`} Singapore has no legal minimum wage. Workfare tops up the pay of citizens aged 30 and over who earn SG$500 to SG$3,000 a month; that is not counted here.`,
    nl: (end, free, cit, rate, start) => `Na enkele belastingvrije bedragen (één voor werken${cit ? `, plus wat je in CPF stort` : ''}), wordt de eerste SG$ 20.000 belast aan 0%. Tot ${free} bruto betaal je dus geen inkomstenbelasting. ${cit ? `Je eigen CPF-bijdrage begint bij ${start} en bouwt op tot ${end}: in die gearceerde zone kost elke extra dollar ${rate} aan CPF. Onder ${start} betaalt alleen je werkgever CPF.` : `Buitenlanders betalen geen CPF, dus alleen de kleine opleidingsheffing van de werkgever is verschuldigd.`} Singapore heeft geen wettelijk minimumloon. Workfare vult het loon aan van burgers van 30 jaar en ouder die SG$ 500 tot SG$ 3.000 per maand verdienen; dat telt hier niet mee.`,
    fr: (end, free, cit, rate, start) => `Après quelques montants exonérés (un pour le travail${cit ? `, plus ce que vous versez au CPF` : ''}), les premiers 20 000 SG$ sont taxés à 0%. Jusqu'à ${free} brut, vous ne payez donc pas d'impôt. ${cit ? `Votre propre versement CPF commence à ${start} et monte jusqu'à ${end} : dans cette zone grisée, chaque dollar en plus coûte ${rate} de CPF. Sous ${start}, seul l'employeur paie le CPF.` : `Les étrangers ne paient pas de CPF : seule la petite taxe de formation de l'employeur est due.`} Singapour n'a pas de salaire minimum légal. Workfare complète la paie des citoyens de 30 ans et plus gagnant 500 à 3 000 SG$ par mois ; ce n'est pas compté ici.`,
  },
  topTitle: {
    en: (top, kind) => kind === 'cpf' ? `Why does the rate drop above ${top}?` : `Why 24% above ${top}?`,
    nl: (top, kind) => kind === 'cpf' ? `Waarom daalt het tarief boven ${top}?` : `Waarom 24% boven ${top}?`,
    fr: (top, kind) => kind === 'cpf' ? `Pourquoi le taux baisse-t-il au-delà de ${top} ?` : `Pourquoi 24% au-delà de ${top} ?`,
  },
  topBody: {
    en: (top, kind) => kind === 'cpf' ? `CPF is only paid on the first SG$8,000 of monthly pay (from January 2026), plus bonuses until total pay reaches SG$102,000 a year. Above ${top}, each extra dollar only pays income tax, so your overall rate drops, then slowly climbs again as income tax rates rise.` : `Taxable income above SG$1 million is taxed at 24%, the top rate. You reach that point at about ${top}.`,
    nl: (top, kind) => kind === 'cpf' ? `CPF wordt alleen betaald op de eerste SG$ 8.000 maandloon (vanaf januari 2026), plus bonussen tot het totale loon SG$ 102.000 per jaar bereikt. Boven ${top} betaalt elke extra dollar alleen inkomstenbelasting, dus daalt je totale tarief, en stijgt het daarna langzaam weer naarmate de belastingtarieven stijgen.` : `Belastbaar inkomen boven SG$ 1 miljoen wordt belast aan 24%, het hoogste tarief. Dat punt bereik je rond ${top}.`,
    fr: (top, kind) => kind === 'cpf' ? `Le CPF n'est payé que sur les premiers 8 000 SG$ de salaire mensuel (depuis janvier 2026), plus les primes jusqu'à 102 000 SG$ de paie totale par an. Au-delà de ${top}, chaque dollar en plus ne paie que l'impôt : votre taux global baisse, puis remonte lentement avec les taux d'impôt.` : `Le revenu imposable au-delà de 1 million SG$ est taxé à 24%, le taux maximal. Vous atteignez ce point vers ${top}.`,
  },

  // Tax components
  'comp.er': { en: `CPF, employer share`, nl: `CPF, werkgeversdeel`, fr: `CPF, part employeur` },
  'comp.sdl': { en: `Training levy (SDL)`, nl: `Opleidingsheffing (SDL)`, fr: `Taxe de formation (SDL)` },
  'comp.ee': { en: `CPF, your share`, nl: `CPF, jouw deel`, fr: `CPF, votre part` },
  'comp.ir': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'bd.eir': { en: `Tax-free amount for working`, nl: `Belastingvrij bedrag voor werkenden`, fr: `Montant exonéré pour le travail` },
  'bd.cpfRel': { en: `Your CPF (not taxed)`, nl: `Jouw CPF (niet belast)`, fr: `Votre CPF (non imposé)` },
  'bd.spouse': { en: `Tax-free amount for a spouse`, nl: `Belastingvrij bedrag voor een partner`, fr: `Montant exonéré pour conjoint` },
  'bd.qcr': { en: `Tax-free amount for children`, nl: `Belastingvrij bedrag voor kinderen`, fr: `Montant exonéré pour enfants` },
  'bd.partner': { en: `Change in your partner's tax`, nl: `Verschil in de belasting van je partner`, fr: `Écart d'impôt de votre partenaire` },

  // Tooltips
  'tip.f12': {
    en: `12 equal monthly salaries, no bonus.`,
    nl: `12 gelijke maandlonen, zonder bonus.`,
    fr: `12 salaires mensuels égaux, sans prime.`,
  },
  'tip.f13': {
    en: `12 monthly salaries plus a 13th month (the Annual Wage Supplement many employers pay). For CPF it counts as extra pay, only until total pay reaches SG$102,000 for the year.`,
    nl: `12 maandlonen plus een 13e maand (de Annual Wage Supplement die veel werkgevers betalen). Voor CPF telt die als extra loon, alleen tot het totale loon SG$ 102.000 per jaar bereikt.`,
    fr: `12 salaires mensuels plus un 13e mois (l'Annual Wage Supplement que versent beaucoup d'employeurs). Pour le CPF, il compte comme paie en plus, seulement jusqu'à 102 000 SG$ de paie totale par an.`,
  },
  'tip.f14': {
    en: `12 monthly salaries plus two months of bonus. For CPF, bonuses only count until total pay reaches SG$102,000 for the year.`,
    nl: `12 maandlonen plus twee maanden bonus. Voor CPF tellen bonussen alleen tot het totale loon SG$ 102.000 per jaar bereikt.`,
    fr: `12 salaires mensuels plus deux mois de prime. Pour le CPF, les primes ne comptent que jusqu'à 102 000 SG$ de paie totale par an.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Each partner files their own return. If your spouse earned SG$8,000 or less in the year, SG$2,000 more of your income is tax-free. Each child makes SG$4,000 tax-free, split between the parents as they like; here it goes to whoever saves more. "Your" tax is the household's tax with your pay minus without it, so if your pay costs your partner their SG$2,000, that counts too. Your partner is assumed to be 55 or under with the same CPF status as you.`,
    nl: `Elke partner doet zijn eigen aangifte. Verdiende je partner SG$ 8.000 of minder in het jaar, dan is SG$ 2.000 extra van jouw inkomen belastingvrij. Elk kind maakt SG$ 4.000 belastingvrij, vrij te verdelen tussen de ouders; hier gaat het naar wie het meest bespaart. "Jouw" belasting is die van het gezin met jouw loon min zonder, dus als jouw loon je partner zijn SG$ 2.000 kost, telt dat ook. Je partner is hier 55 of jonger, met dezelfde CPF-status als jij.`,
    fr: `Chaque partenaire fait sa propre déclaration. Si votre conjoint a gagné 8 000 SG$ ou moins dans l'année, 2 000 SG$ de plus de votre revenu sont exonérés. Chaque enfant rend 4 000 SG$ exonérés, répartis librement entre les parents ; ici, ils vont à celui qui économise le plus. « Votre » impôt est celui du ménage avec votre paie moins sans, donc si votre paie fait perdre ses 2 000 SG$ à votre partenaire, cela compte aussi. Votre partenaire est supposé avoir 55 ans ou moins, avec le même statut CPF que vous.`,
  },
  'tip.reg': {
    en: `Singapore citizens and permanent residents (PRs) must pay into the Central Provident Fund (CPF), a compulsory savings scheme. New PRs pay lower rates in their first two years; that is not counted here. Foreigners with a work pass pay no CPF, and neither does their employer. Anyone living in Singapore 183 days a year or more pays the same income tax as citizens.`,
    nl: `Singaporese burgers en permanente inwoners (PR's) moeten betalen aan het Central Provident Fund (CPF), een verplicht spaarstelsel. Nieuwe PR's betalen de eerste twee jaar lagere tarieven; dat telt hier niet mee. Buitenlanders met een werkvergunning betalen geen CPF, en hun werkgever ook niet. Wie 183 dagen per jaar of meer in Singapore woont, betaalt dezelfde inkomstenbelasting als burgers.`,
    fr: `Les citoyens et résidents permanents (RP) de Singapour doivent cotiser au Central Provident Fund (CPF), une épargne obligatoire. Les nouveaux RP paient des taux plus bas les deux premières années ; ce n'est pas compté ici. Les étrangers avec un permis de travail ne paient pas de CPF, leur employeur non plus. Toute personne vivant à Singapour 183 jours par an ou plus paie le même impôt que les citoyens.`,
  },
  'tip.size': {
    en: `CPF rates go down with age: 37% at 55 or under (17% from your employer, 20% from you), down to 12.5% above 70. Rates from 1 January 2026. The tax-free amount for working goes up to SG$6,000 from age 55 and SG$8,000 from 60; here each age group uses the amount that fits most of its ages.`,
    nl: `De CPF-tarieven dalen met de leeftijd: 37% tot 55 jaar (17% van je werkgever, 20% van jou), tot 12,5% boven 70. Tarieven vanaf 1 januari 2026. Het belastingvrije bedrag voor werkenden stijgt tot SG$ 6.000 vanaf 55 jaar en SG$ 8.000 vanaf 60; hier gebruikt elke leeftijdsgroep het bedrag dat bij de meeste leeftijden erin past.`,
    fr: `Les taux CPF baissent avec l'âge : 37% jusqu'à 55 ans (17% de l'employeur, 20% de vous), jusqu'à 12,5% après 70 ans. Taux depuis le 1er janvier 2026. Le montant exonéré pour le travail passe à 6 000 SG$ dès 55 ans et 8 000 SG$ dès 60 ans ; ici, chaque tranche d'âge prend le montant de la plupart de ses âges.`,
  },
  'tip.costShort': {
    en: `Gross salary plus the employer's CPF (up to 17%) plus a small training levy.`,
    nl: `Brutoloon plus de CPF van de werkgever (tot 17%) plus een kleine opleidingsheffing.`,
    fr: `Salaire brut plus le CPF de l'employeur (jusqu'à 17%) plus une petite taxe de formation.`,
  },
  'tip.er': {
    en: `Your employer pays this on top of your gross, into your own CPF accounts (for housing, retirement and healthcare). It is counted as a charge here because you can't spend it freely, like a compulsory pension. It applies to monthly pay above SG$50, up to SG$8,000, and to bonuses until total pay reaches SG$102,000 a year.`,
    nl: `Je werkgever betaalt dit bovenop je bruto, op je eigen CPF-rekeningen (voor wonen, pensioen en gezondheidszorg). Het telt hier als heffing omdat je het niet vrij kunt uitgeven, zoals een verplicht pensioen. Het geldt op een maandloon boven SG$ 50, tot SG$ 8.000, en op bonussen tot het totale loon SG$ 102.000 per jaar bereikt.`,
    fr: `L'employeur paie ceci en plus de votre brut, sur vos propres comptes CPF (logement, retraite et santé). C'est compté ici comme un prélèvement car vous ne pouvez pas le dépenser librement, comme une retraite obligatoire. Cela s'applique au salaire mensuel au-delà de 50 SG$, jusqu'à 8 000 SG$, et aux primes jusqu'à 102 000 SG$ de paie totale par an.`,
  },
  'tip.awShort': { en: `(bonus)`, nl: `(bonus)`, fr: `(prime)` },
  'tip.noCpfFor': {
    en: `Foreigners with a work pass pay no CPF.`,
    nl: `Buitenlanders met een werkvergunning betalen geen CPF.`,
    fr: `Les étrangers avec un permis de travail ne paient pas de CPF.`,
  },
  'tip.noCpfLow': {
    en: `Nothing at this wage.`,
    nl: `Niets bij dit loon.`,
    fr: `Rien à ce salaire.`,
  },
  'tip.sdl': {
    en: `Paid by the employer for every employee, foreigners included: 0.25% of each month's pay, at least SG$2 and at most SG$11.25 a month (reached at SG$4,500). It pays for training.`,
    nl: `Betaald door de werkgever voor elke werknemer, buitenlanders inbegrepen: 0,25% van het maandloon, minstens SG$ 2 en hoogstens SG$ 11,25 per maand (bereikt bij SG$ 4.500). Het betaalt opleidingen.`,
    fr: `Payée par l'employeur pour chaque salarié, étrangers compris : 0,25% de la paie du mois, au moins 2 SG$ et au plus 11,25 SG$ par mois (atteint à 4 500 SG$). Elle finance la formation.`,
  },
  'tip.ee': {
    en: `Taken from your pay into your own CPF accounts: 20% at 55 or under, less when older. Nothing below SG$500 a month. Between SG$500 and SG$750 it builds up: three times the normal rate on the part above SG$500. Same limits as the employer's part. This money is not taxed.`,
    nl: `Van je loon afgehouden voor je eigen CPF-rekeningen: 20% tot 55 jaar, minder als je ouder bent. Niets onder SG$ 500 per maand. Tussen SG$ 500 en SG$ 750 bouwt het op: drie keer het gewone tarief op het deel boven SG$ 500. Dezelfde grenzen als het werkgeversdeel. Dit geld wordt niet belast.`,
    fr: `Retenu sur votre paie pour vos propres comptes CPF : 20% jusqu'à 55 ans, moins après. Rien sous 500 SG$ par mois. Entre 500 et 750 SG$, il monte : trois fois le taux normal sur la part au-delà de 500 SG$. Mêmes limites que la part de l'employeur. Cet argent n'est pas imposé.`,
  },
  'tip.phase': {
    en: (rate, from) => `${rate} × (monthly wage − ${from}) × 12`,
    nl: (rate, from) => `${rate} × (maandloon − ${from}) × 12`,
    fr: (rate, from) => `${rate} × (salaire mensuel − ${from}) × 12`,
  },
  'tip.eir': {
    en: `A tax-free amount for anyone who works: SG$1,000, SG$6,000 from age 55 and SG$8,000 from 60, never more than what you earn.`,
    nl: `Een belastingvrij bedrag voor iedereen die werkt: SG$ 1.000, SG$ 6.000 vanaf 55 jaar en SG$ 8.000 vanaf 60, nooit meer dan wat je verdient.`,
    fr: `Un montant exonéré pour toute personne qui travaille : 1 000 SG$, 6 000 SG$ dès 55 ans et 8 000 SG$ dès 60 ans, jamais plus que ce que vous gagnez.`,
  },
  'tip.cpfRel': {
    en: `What you must pay into CPF is not taxed.`,
    nl: `Wat je verplicht in CPF stort, wordt niet belast.`,
    fr: `Ce que vous devez verser au CPF n'est pas imposé.`,
  },
  'tip.spouse': {
    en: `SG$2,000 more is tax-free if your spouse earned SG$8,000 or less in the year.`,
    nl: `SG$ 2.000 extra is belastingvrij als je partner SG$ 8.000 of minder verdiende in het jaar.`,
    fr: `2 000 SG$ de plus sont exonérés si votre conjoint a gagné 8 000 SG$ ou moins dans l'année.`,
  },
  'tip.qcr': {
    en: `SG$4,000 tax-free per child under 16 or in full-time study, split between the parents as they like. Working mothers can also get an extra amount (Working Mother's Child Relief), not counted here.`,
    nl: `SG$ 4.000 belastingvrij per kind jonger dan 16 of voltijds studerend, vrij te verdelen tussen de ouders. Werkende moeders kunnen ook een extra bedrag krijgen (Working Mother's Child Relief), hier niet meegeteld.`,
    fr: `4 000 SG$ exonérés par enfant de moins de 16 ans ou étudiant à plein temps, répartis librement entre les parents. Les mères qui travaillent peuvent aussi obtenir un montant en plus (Working Mother's Child Relief), non compté ici.`,
  },
  'tip.taxable': {
    en: `The part of your pay that is taxed: gross pay minus the tax-free amounts, which can't add up to more than SG$80,000. The tax rates apply to what is left.`,
    nl: `Het deel van je loon dat belast wordt: brutoloon min de belastingvrije bedragen, die samen niet meer dan SG$ 80.000 mogen zijn. De belastingtarieven gelden op wat overblijft.`,
    fr: `La part de votre paie qui est imposée : brut moins les montants exonérés, qui ne peuvent pas dépasser 80 000 SG$ au total. Les taux d'impôt s'appliquent à ce qui reste.`,
  },
  'tip.cap': { en: `Limit on tax-free amounts`, nl: `Grens op belastingvrije bedragen`, fr: `Limite des montants exonérés` },
  'tip.ir': {
    en: `Rates for residents since 2024, still the same for 2026 income: 0% on the first SG$20,000 of taxable income, rising slice by slice to 24% above SG$1 million. You pay it the year after, when you get your tax bill; it is not taken from your pay. No discount has been announced for this tax year (the tax year 2025 had a 60% discount, at most SG$200).`,
    nl: `Tarieven voor inwoners sinds 2024, nog altijd dezelfde voor inkomen 2026: 0% op de eerste SG$ 20.000 belastbaar inkomen, schijf per schijf oplopend tot 24% boven SG$ 1 miljoen. Je betaalt het het jaar nadien, als je je aanslag krijgt; het wordt niet van je loon afgehouden. Voor dit belastingjaar is geen korting aangekondigd (belastingjaar 2025 had 60% korting, hoogstens SG$ 200).`,
    fr: `Taux des résidents depuis 2024, toujours les mêmes pour les revenus 2026 : 0% sur les premiers 20 000 SG$ de revenu imposable, puis tranche par tranche jusqu'à 24% au-delà de 1 million SG$. Vous le payez l'année suivante, à réception de l'avis d'impôt ; il n'est pas retenu sur la paie. Aucune remise n'est annoncée pour cette année fiscale (l'année fiscale 2025 avait 60% de remise, au plus 200 SG$).`,
  },
  'tip.yourReturn': { en: `Income tax on your return`, nl: `Inkomstenbelasting op je aangifte`, fr: `Impôt sur votre déclaration` },
  'tip.partnerWith': { en: `Partner's tax with your pay`, nl: `Belasting partner met jouw loon`, fr: `Impôt du partenaire avec votre salaire` },
  'tip.partnerWithout': { en: `Household tax without your pay`, nl: `Belasting gezin zonder jouw loon`, fr: `Impôt du ménage sans votre salaire` },
  'tip.yourShare': { en: `Your share of the household's tax`, nl: `Jouw deel van de belasting van het gezin`, fr: `Votre part de l'impôt du ménage` },
  'tip.partner': {
    en: `If you had no income, your partner could get SG$2,000 tax-free for you, plus all the tax-free amounts for the children. Your pay can take that away from them, or move the children's amount to you.`,
    nl: `Had je geen inkomen, dan kon je partner SG$ 2.000 belastingvrij krijgen voor jou, plus alle belastingvrije bedragen voor de kinderen. Jouw loon kan dat wegnemen, of het bedrag voor de kinderen naar jou verschuiven.`,
    fr: `Si vous n'aviez pas de revenu, votre partenaire pourrait avoir 2 000 SG$ exonérés pour vous, plus tous les montants exonérés pour les enfants. Votre paie peut lui retirer cela, ou vous transférer le montant pour les enfants.`,
  },
  'tip.vatM': {
    en: `GST (the tax on what you buy) has been 9% on almost everything since January 2024. Home rent, most financial services and home sales have none. We apply it to all your spending anyway, so this is the most it could be.`,
    nl: `GST (de belasting op wat je koopt) is sinds januari 2024 9% op bijna alles. Huur van een woning, de meeste financiële diensten en verkoop van woningen hebben er geen. We passen ze toch toe op al je uitgaven, dus dit is het maximum.`,
    fr: `La GST (la taxe sur vos achats) est de 9% sur presque tout depuis janvier 2024. Le loyer d'un logement, la plupart des services financiers et les ventes de logements n'en ont pas. On l'applique quand même à toutes vos dépenses : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross pay minus your CPF part, minus income tax. Your CPF savings grow by both parts, but that money is not counted as spendable.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon min jouw CPF-deel, min inkomstenbelasting. Je CPF-spaargeld groeit met beide delen, maar dat geld telt niet als besteedbaar.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Salaire brut moins votre part CPF, moins l'impôt. Votre épargne CPF grossit des deux parts, mais cet argent n'est pas compté comme dépensable.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026 (YA2027)`, nl: `Gebruikte regels · inkomen 2026 (YA2027)`, fr: `Règles utilisées · revenus 2026 (YA2027)` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [`CPF from 1 January 2026: <span class="num">17%</span> at 55 or under, <span class="num">16%</span> up to 60, <span class="num">12.5%</span> up to 65, <span class="num">9%</span> up to 70, <span class="num">7.5%</span> above. On monthly pay above SG$50, up to SG$8,000, and on bonuses until total pay reaches SG$102,000 a year.`, `Training levy (SDL) <span class="num">0.25%</span> of monthly pay, SG$2 to SG$11.25 a month, for every employee.`] },
    nl: { h: `1 · Werkgever`, li: [`CPF vanaf 1 januari 2026: <span class="num">17%</span> tot 55 jaar, <span class="num">16%</span> tot 60, <span class="num">12,5%</span> tot 65, <span class="num">9%</span> tot 70, <span class="num">7,5%</span> daarboven. Op een maandloon boven SG$ 50, tot SG$ 8.000, en op bonussen tot het totale loon SG$ 102.000 per jaar bereikt.`, `Opleidingsheffing (SDL) <span class="num">0,25%</span> van het maandloon, SG$ 2 tot SG$ 11,25 per maand, voor elke werknemer.`] },
    fr: { h: `1 · Employeur`, li: [`CPF depuis le 1er janvier 2026 : <span class="num">17%</span> jusqu'à 55 ans, <span class="num">16%</span> jusqu'à 60, <span class="num">12,5%</span> jusqu'à 65, <span class="num">9%</span> jusqu'à 70, <span class="num">7,5%</span> au-delà. Sur le salaire mensuel au-delà de 50 SG$, jusqu'à 8 000 SG$, et sur les primes jusqu'à 102 000 SG$ de paie totale par an.`, `Taxe de formation (SDL) <span class="num">0,25%</span> du salaire mensuel, 2 à 11,25 SG$ par mois, pour chaque salarié.`] },
  },
  'ref.ee': {
    en: { h: `2 · Your CPF`, li: [`<span class="num">20%</span> at 55 or under, <span class="num">18%</span> up to 60, <span class="num">12.5%</span> up to 65, <span class="num">7.5%</span> up to 70, <span class="num">5%</span> above, same limits. Builds up between SG$500 and SG$750 a month.`, `Only citizens, and PRs from their third year. Foreigners pay nothing.`] },
    nl: { h: `2 · Jouw CPF`, li: [`<span class="num">20%</span> tot 55 jaar, <span class="num">18%</span> tot 60, <span class="num">12,5%</span> tot 65, <span class="num">7,5%</span> tot 70, <span class="num">5%</span> daarboven, zelfde grenzen. Bouwt op tussen SG$ 500 en SG$ 750 per maand.`, `Alleen burgers, en PR's vanaf hun derde jaar. Buitenlanders betalen niets.`] },
    fr: { h: `2 · Votre CPF`, li: [`<span class="num">20%</span> jusqu'à 55 ans, <span class="num">18%</span> jusqu'à 60, <span class="num">12,5%</span> jusqu'à 65, <span class="num">7,5%</span> jusqu'à 70, <span class="num">5%</span> au-delà, mêmes limites. Monte progressivement entre 500 et 750 SG$ par mois.`, `Seulement les citoyens, et les RP dès leur troisième année. Les étrangers ne paient rien.`] },
  },
  'ref.ir': {
    en: br => ({ h: `3 · Income tax`, li: [`Rates for residents on each slice of taxable income, since 2024:${br}`, `No tax discount announced for this tax year (YA2027).`] }),
    nl: br => ({ h: `3 · Inkomstenbelasting`, li: [`Tarieven voor inwoners op elke schijf van het belastbaar inkomen, sinds 2024:${br}`, `Geen belastingkorting aangekondigd voor dit belastingjaar (YA2027).`] }),
    fr: br => ({ h: `3 · Impôt sur le revenu`, li: [`Taux des résidents sur chaque tranche du revenu imposable, depuis 2024 :${br}`, `Aucune remise annoncée pour cette année fiscale (YA2027).`] }),
  },
  'ref.reliefs': {
    en: { h: `4 · Tax-free amounts`, li: [`For working SG$1,000 (SG$6,000 from 55, SG$8,000 from 60), your CPF, SG$2,000 for a spouse with little income, SG$4,000 per child.`, `All together, no more than SG$80,000.`] },
    nl: { h: `4 · Belastingvrije bedragen`, li: [`Voor werkenden SG$ 1.000 (SG$ 6.000 vanaf 55, SG$ 8.000 vanaf 60), je CPF, SG$ 2.000 voor een partner met weinig inkomen, SG$ 4.000 per kind.`, `Samen niet meer dan SG$ 80.000.`] },
    fr: { h: `4 · Montants exonérés`, li: [`Pour le travail 1 000 SG$ (6 000 SG$ dès 55 ans, 8 000 SG$ dès 60), votre CPF, 2 000 SG$ pour un conjoint à faible revenu, 4 000 SG$ par enfant.`, `Au total, pas plus de 80 000 SG$.`] },
  },
  'ref.vat': {
    en: { h: `5 · GST on spending`, li: [
      `Standard rate <span class="num">9%</span> since January 2024, applied to all of your net pay as if you spent all of it.`,
      `The GST hidden in a price = price × r / (100 + r). At 9% that is 9 / 109 = <span class="num">8.26%</span> of what you pay.`,
    ] },
    nl: { h: `5 · GST op uitgaven`, li: [
      `Normaal tarief <span class="num">9%</span> sinds januari 2024, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `De GST verstopt in een prijs = prijs × r / (100 + r). Bij 9% is dat 9 / 109 = <span class="num">8,26%</span> van wat je betaalt.`,
    ] },
    fr: { h: `5 · GST sur les dépenses`, li: [
      `Taux normal <span class="num">9%</span> depuis janvier 2024, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `La GST cachée dans un prix = prix × r / (100 + r). À 9%, cela fait 9 / 109 = <span class="num">8,26%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `6 · State and parliament`, li: [
      `2012 rules: Prime Minister about <span class="num">SG$2.2 million</span>, junior minister about <span class="num">SG$1.1 million</span>, President <span class="num">SG$1,568,900</span>, MPs <span class="num">SG$192,500</span> a year.`,
      `Income tax only, no CPF (assumed). A 2026 review was reported but is not confirmed here.`,
    ] },
    nl: { h: `6 · Staat en parlement`, li: [
      `Regels 2012: premier ongeveer <span class="num">SG$ 2,2 miljoen</span>, minister van de laagste rang ongeveer <span class="num">SG$ 1,1 miljoen</span>, president <span class="num">SG$ 1.568.900</span>, parlementsleden <span class="num">SG$ 192.500</span> per jaar.`,
      `Alleen inkomstenbelasting, geen CPF (aangenomen). Een herziening in 2026 werd gemeld maar is hier niet bevestigd.`,
    ] },
    fr: { h: `6 · État et parlement`, li: [
      `Règles 2012 : Premier ministre environ <span class="num">2,2 millions SG$</span>, ministre du rang le plus bas environ <span class="num">1,1 million SG$</span>, Président <span class="num">1 568 900 SG$</span>, députés <span class="num">192 500 SG$</span> par an.`,
      `Impôt sur le revenu seulement, sans CPF (supposé). Une révision de 2026 a été annoncée mais n'est pas confirmée ici.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Workfare top-ups (citizens 30+ earning SG$500 to SG$3,000 a month, SG$2,450 to SG$4,900 a year at most, 60% paid into CPF), small monthly gifts to community self-help groups (CDAC, SINDA, MBMF, ECF), lower rates for new PRs, the extra amount for working mothers, tax-free amounts for parents and others, and non-residents (who pay a flat 15% or the resident rates, whichever is higher).`,
      `The median and average wages are Ministry of Manpower figures (2025 median, mid-2026 average without bonus) with the 17% employer CPF taken out. Singapore has no legal minimum wage.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Workfare-aanvullingen (burgers vanaf 30 die SG$ 500 tot SG$ 3.000 per maand verdienen, hoogstens SG$ 2.450 tot SG$ 4.900 per jaar, 60% op CPF gestort), kleine maandelijkse bijdragen aan zelfhulpgroepen (CDAC, SINDA, MBMF, ECF), lagere tarieven voor nieuwe PR's, het extra bedrag voor werkende moeders, belastingvrije bedragen voor ouders en andere, en niet-inwoners (die vlak 15% betalen of de tarieven voor inwoners, het hoogste van beide).`,
      `Het mediaan- en gemiddelde loon zijn cijfers van het ministerie van Arbeid (mediaan 2025, gemiddelde medio 2026 zonder bonus) zonder de 17% CPF van de werkgever. Singapore heeft geen wettelijk minimumloon.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les compléments Workfare (citoyens de 30 ans et plus gagnant 500 à 3 000 SG$ par mois, au plus 2 450 à 4 900 SG$ par an, 60% versés au CPF), les petits dons mensuels aux associations d'entraide (CDAC, SINDA, MBMF, ECF), les taux plus bas des nouveaux RP, le montant en plus pour les mères qui travaillent, les montants exonérés pour les parents et autres, et les non-résidents (qui paient 15% forfaitaires ou les taux des résidents, le plus élevé des deux).`,
      `Les salaires médian et moyen sont ceux du ministère du Travail (médiane 2025, moyenne mi-2026 sans prime), CPF patronal de 17% retiré. Singapour n'a pas de salaire minimum légal.`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance, by relationship →`,
    nl: `Wat een erfgenaam betaalt op een erfenis, volgens verwantschap →`,
    fr: `Ce que paie un héritier sur une succession, selon le lien →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip, the CPF Board and IRAS decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook, de CPF Board en IRAS zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie, le CPF Board et l'IRAS font foi.`,
  },
  'src.rates': { en: `IRAS: individual income tax rates`, nl: `IRAS: tarieven personenbelasting`, fr: `IRAS : barème de l'impôt sur le revenu` },
  'src.pwc': { en: `PwC: Singapore, taxes on personal income`, nl: `PwC: Singapore, personenbelasting`, fr: `PwC : Singapour, impôt sur le revenu` },
  'src.reliefs': { en: `PwC: Singapore, personal reliefs`, nl: `PwC: Singapore, persoonlijke aftrekken`, fr: `PwC : Singapour, abattements personnels` },
  'src.cpf': { en: `CPF Board: contribution rates from 2026`, nl: `CPF Board: bijdragetarieven vanaf 2026`, fr: `CPF Board : taux de cotisation depuis 2026` },
  'src.other': { en: `PwC: Singapore, CPF ceilings, SDL, GST`, nl: `PwC: Singapore, CPF-plafonds, SDL, GST`, fr: `PwC : Singapour, plafonds CPF, SDL, GST` },
  'src.wis': { en: `CPF Board: Workfare Income Supplement`, nl: `CPF Board: Workfare Income Supplement`, fr: `CPF Board : Workfare Income Supplement` },
  'src.wages': { en: `MOM: income from work, 2025-2026`, nl: `MOM: arbeidsinkomen, 2025-2026`, fr: `MOM : revenus du travail, 2025-2026` },
  'src.psd': { en: `PSD: 2012 White Paper on political salaries`, nl: `PSD: witboek 2012 over politieke lonen`, fr: `PSD : livre blanc 2012 sur les rémunérations politiques` },

  // Known gaps and caveats
  'gap.noCheck': {
    en: `Researched without searching the web, and no take-home pay was checked against the CPF or tax office (IRAS) calculators.`,
    nl: `Opgezocht zonder op het web te zoeken, en geen enkel nettoloon is nagerekend met de rekentools van CPF of de belastingdienst (IRAS).`,
    fr: `Recherché sans recherche web, et aucun salaire net n'a été vérifié avec les simulateurs du CPF ou du fisc (IRAS).`,
  },
  'gap.polPay': {
    en: `The pay of ministers, the Prime Minister and MPs follows the 2012 rules (minister about SG$1.1 million). A 2026 review was reported but not confirmed, so the figures may be out of date.`,
    nl: `Het loon van ministers, de premier en parlementsleden volgt de regels van 2012 (minister ongeveer SG$ 1,1 miljoen). Een herziening in 2026 werd gemeld maar niet bevestigd, dus de bedragen kunnen verouderd zijn.`,
    fr: `La paie des ministres, du Premier ministre et des députés suit les règles de 2012 (ministre environ 1,1 million SG$). Une révision en 2026 a été annoncée mais pas confirmée : les montants peuvent être dépassés.`,
  },
  'gap.polBonus': {
    en: `Office holders' bonuses are set at their usual target. The real performance and national bonuses change every year.`,
    nl: `De bonussen van ambtsdragers staan op hun gewone streefniveau. De echte prestatie- en nationale bonussen veranderen elk jaar.`,
    fr: `Les primes des titulaires de fonction sont prises à leur niveau cible habituel. Les vraies primes de résultats et nationale changent chaque année.`,
  },
  'gap.polCpf': {
    en: `We assume office holders' pay does not go through CPF, so only income tax applies. Not confirmed by an official source.`,
    nl: `We nemen aan dat het loon van ambtsdragers niet via CPF gaat, dus alleen inkomstenbelasting geldt. Niet bevestigd door een officiële bron.`,
    fr: `On suppose que la paie des titulaires de fonction ne passe pas par le CPF : seul l'impôt sur le revenu s'applique. Non confirmé par une source officielle.`,
  },
  'gap.phase': {
    en: `Between SG$500 and SG$750 a month, your CPF part is taken as 3 times the full rate on the pay above SG$500. That factor is not confirmed for every age group.`,
    nl: `Tussen SG$ 500 en SG$ 750 per maand wordt je CPF-deel genomen als 3 keer het volle tarief op het loon boven SG$ 500. Die factor is niet voor elke leeftijdsgroep bevestigd.`,
    fr: `Entre 500 et 750 SG$ par mois, votre part CPF est prise à 3 fois le taux plein sur la paie au-delà de 500 SG$. Ce facteur n'est pas confirmé pour toutes les tranches d'âge.`,
  },
  'gap.rebate': {
    en: `No income tax discount is applied for this tax year (YA2027), as none was found. If one was announced, the tax is a little lower.`,
    nl: `Er is geen korting op de inkomstenbelasting toegepast voor dit belastingjaar (YA2027), omdat er geen gevonden is. Als er een is aangekondigd, ligt de belasting iets lager.`,
    fr: `Aucune remise d'impôt n'est appliquée pour cette année fiscale (YA2027), faute d'en avoir trouvé une. Si une a été annoncée, l'impôt est un peu plus bas.`,
  },
  'gap.workfare': {
    en: `Workfare top-ups are not counted, so low earners aged 30 or over get up to SG$4,900 a year more than shown.`,
    nl: `Workfare-aanvullingen tellen niet mee, dus lage verdieners van 30 jaar of ouder krijgen tot SG$ 4.900 per jaar meer dan getoond.`,
    fr: `Les compléments Workfare ne sont pas comptés : les bas salaires de 30 ans ou plus touchent jusqu'à 4 900 SG$ par an de plus qu'affiché.`,
  },
  'gap.partner': {
    en: `For a couple, your partner is taken to be 55 or under, with the same CPF status as you.`,
    nl: `Voor een koppel is je partner hier 55 of jonger, met dezelfde CPF-status als jij.`,
    fr: `Pour un couple, votre partenaire est supposé avoir 55 ans ou moins, avec le même statut CPF que vous.`,
  },
  'gap.wages': {
    en: `The median wage (half of employees earn more, half less, 2025) and the average wage (mid-2026, without bonus) are Ministry of Manpower figures, with the 17% employer CPF taken out by hand.`,
    nl: `Het mediaanloon (de helft van de werknemers verdient meer, de helft minder, 2025) en het gemiddelde loon (medio 2026, zonder bonus) zijn cijfers van het ministerie van Arbeid, waar de 17% CPF van de werkgever met de hand is afgetrokken.`,
    fr: `Le salaire médian (la moitié des salariés gagne plus, l'autre moitié moins, 2025) et le salaire moyen (mi-2026, sans prime) sont des chiffres du ministère du Travail, dont les 17% de CPF patronal ont été retirés à la main.`,
  },
  'gap.notIncl': {
    en: `Gifts to community self-help groups, new PR rates, other tax-free amounts, non-residents and the rest of "What's not included" are left out.`,
    nl: `Bijdragen aan zelfhulpgroepen, tarieven voor nieuwe PR's, andere belastingvrije bedragen, niet-inwoners en de rest van "Wat niet is meegerekend" ontbreken.`,
    fr: `Les dons aux associations d'entraide, les taux des nouveaux RP, les autres montants exonérés, les non-résidents et le reste de « Ce qui n'est pas inclus » sont laissés de côté.`,
  },
};
