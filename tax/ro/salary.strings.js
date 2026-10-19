window.TAX_STRINGS = {
  title: { en: `Romanian Buying Power`, nl: `Roemeense koopkracht`, fr: `Pouvoir d'achat en Roumanie` },
  eyebrow: { en: `Romania · income 2026 · employee`, nl: `Roemenië · inkomen 2026 · werknemer`, fr: `Roumanie · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Romania · income 2026 · minister`, nl: `Roemenië · inkomen 2026 · minister`, fr: `Roumanie · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Romanian salary in 2026, from what your employer pays to what you can buy. A 10% flat income tax, but 35% of social contributions taken from the employee, and a personal deduction that fades out just above the minimum wage.`,
    nl: `Alle belastingen op een Roemeens loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Een vlakke inkomstenbelasting van 10%, maar 35% sociale bijdragen ten laste van de werknemer, en een persoonlijke aftrek die net boven het minimumloon wegvalt.`,
    fr: `Tous les prélèvements sur un salaire roumain en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Un impôt unique de 10%, mais 35% de cotisations à charge du salarié, et une déduction personnelle qui disparaît juste au-dessus du salaire minimum.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married. Each spouse is taxed alone, but a spouse earning almost nothing counts as a dependant of the other.`,
    nl: `Gehuwd. Elke echtgenoot wordt apart belast, maar een echtgenoot die bijna niets verdient, telt als persoon ten laste van de andere.`,
    fr: `Marié(e). Chaque conjoint est imposé séparément, mais un conjoint qui ne gagne presque rien compte comme personne à charge de l'autre.`,
  },
  region: { en: `Age`, nl: `Leeftijd`, fr: `Âge` },
  'region.o26': { en: `26 or older`, nl: `26 of ouder`, fr: `26 ans ou plus` },
  'region.u26': { en: `Under 26`, nl: `Jonger dan 26`, fr: `Moins de 26 ans` },
  vatStandard: { en: `(Romania's standard rate is 21%)`, nl: `(het Roemeense normale tarief is 21%)`, fr: `(le taux normal roumain est de 21%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.mp': { en: `Deputy or senator`, nl: `Volksvertegenwoordiger of senator`, fr: `Député ou sénateur` },
  'minRole.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'minRole.pres': { en: `President`, nl: `President`, fr: `Président` },
  ministerHint: {
    en: `Pay frozen at its 2019 level. Taxed like any salary: 25% CAS, 10% CASS, 10% income tax, 2.25% CAM.`,
    nl: `Loon bevroren op het niveau van 2019. Belast zoals elk loon: 25% CAS, 10% CASS, 10% inkomstenbelasting, 2,25% CAM.`,
    fr: `Rémunération gelée à son niveau de 2019. Imposée comme tout salaire : 25% de CAS, 10% de CASS, 10% d'impôt sur le revenu, 2,25% de CAM.`,
  },
  minSalaryHint: {
    en: `Yearly pay, current monthly amount × 12. Statutory amount by default.`,
    nl: `Jaarloon, huidig maandbedrag × 12. Standaard het wettelijke bedrag.`,
    fr: `Rémunération annuelle, montant mensuel actuel × 12. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `Under the 2017 public pay law, each office has a coefficient applied to a reference value of 2,080 lei, frozen since 2019: 12 for the President (24,960 lei a month), 11.5 for the Prime Minister (23,920 lei), 10.5 for a minister (21,840 lei), 9 for a deputy or senator (18,720 lei). A new pay law with higher coefficients on 4,100 lei is still a draft. All of it is employment income, taxed like a salary.`,
    nl: `Volgens de wet op het overheidsloon van 2017 heeft elk ambt een coëfficiënt op een referentiewaarde van 2.080 lei, bevroren sinds 2019: 12 voor de president (24.960 lei per maand), 11,5 voor de premier (23.920 lei), 10,5 voor een minister (21.840 lei), 9 voor een volksvertegenwoordiger of senator (18.720 lei). Een nieuwe loonwet met hogere coëfficiënten op 4.100 lei is nog een ontwerp. Alles is arbeidsinkomen, belast zoals een loon.`,
    fr: `Selon la loi de 2017 sur les rémunérations publiques, chaque fonction a un coefficient appliqué à une valeur de référence de 2 080 lei, gelée depuis 2019 : 12 pour le Président (24 960 lei par mois), 11,5 pour le Premier ministre (23 920 lei), 10,5 pour un ministre (21 840 lei), 9 pour un député ou sénateur (18 720 lei). Une nouvelle loi avec des coefficients plus élevés sur 4 100 lei n'est encore qu'un projet. Tout est un revenu salarial, imposé comme un salaire.`,
  },

  // Politicians on the chart
  'stat.pres': { en: `President`, nl: `President`, fr: `Président` },
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `Deputy or senator`, nl: `Parlementslid`, fr: `Parlementaire` },
  'pol.stat.pres': { en: `12 × 2,080 lei`, nl: `12 × 2.080 lei`, fr: `12 × 2 080 lei` },
  'pol.stat.pm': { en: `11.5 × 2,080 lei`, nl: `11,5 × 2.080 lei`, fr: `11,5 × 2 080 lei` },
  'pol.stat.min': { en: `10.5 × 2,080 lei`, nl: `10,5 × 2.080 lei`, fr: `10,5 × 2 080 lei` },
  'pol.stat.mp': { en: `9 × 2,080 lei, without expense allowances`, nl: `9 × 2.080 lei, zonder onkostenvergoedingen`, fr: `9 × 2 080 lei, hors indemnités de frais` },
  'polNote.stat': {
    en: `Taxed like any salary. The head sits at its gross.`,
    nl: `Belast zoals elk loon. Het hoofdje staat op het bruto.`,
    fr: `Imposé comme tout salaire. La tête est placée à son brut.`,
  },
  'polTipNote.pres': {
    en: `Nicușor Dan, President since May 2025: 24,960 lei a month.`,
    nl: `Nicușor Dan, president sinds mei 2025: 24.960 lei per maand.`,
    fr: `Nicușor Dan, Président depuis mai 2025 : 24 960 lei par mois.`,
  },
  'polTipNote.pm': {
    en: `Ilie Bolojan, acting Prime Minister since his government fell in May 2026; Luca Niculescu's cabinet faces its vote on 20 October 2026. Some press reports put the pay at about 26,450 lei; the 2017 law gives 23,920 lei.`,
    nl: `Ilie Bolojan, waarnemend premier sinds zijn regering in mei 2026 viel; de regering van Luca Niculescu krijgt haar stemming op 20 oktober 2026. Sommige media noemen ongeveer 26.450 lei; de wet van 2017 geeft 23.920 lei.`,
    fr: `Ilie Bolojan, Premier ministre par intérim depuis la chute de son gouvernement en mai 2026 ; le cabinet de Luca Niculescu passe son vote le 20 octobre 2026. Certains médias parlent d'environ 26 450 lei ; la loi de 2017 donne 23 920 lei.`,
  },
  'polTipNote.min': {
    en: `21,840 lei a month, the same for every minister. Deputy prime ministers get a little more.`,
    nl: `21.840 lei per maand, voor elke minister gelijk. Vicepremiers krijgen iets meer.`,
    fr: `21 840 lei par mois, identique pour tous les ministres. Les vice-Premiers ministres touchent un peu plus.`,
  },
  'polTipNote.mp': {
    en: `18,720 lei a month for deputies and senators. Office and constituency allowances come on top and aren't counted.`,
    nl: `18.720 lei per maand voor volksvertegenwoordigers en senatoren. Vergoedingen voor kantoor en kiesdistrict komen erbovenop en tellen niet mee.`,
    fr: `18 720 lei par mois pour les députés et sénateurs. Les indemnités de bureau et de circonscription s'ajoutent et ne sont pas comptées.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. Romanian office holders are taxed like employees, so everyone sits at their gross. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Roemeense ambtsdragers worden belast als werknemers, dus iedereen staat op het eigen bruto. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. Les élus roumains sont imposés comme des salariés : chacun est placé à son brut. Sources : ${links}.`,
  },
  'src.pol.pres': { en: `Cotidianul: dignitaries' pay, July 2026`, nl: `Cotidianul: lonen van ambtsdragers, juli 2026`, fr: `Cotidianul : rémunération des dignitaires, juillet 2026` },
  'src.pol.pm': { en: `Capital: the Prime Minister's pay, May 2026`, nl: `Capital: loon van de premier, mei 2026`, fr: `Capital : salaire du Premier ministre, mai 2026` },
  'src.pol.min': { en: `Cotidianul: dignitaries' pay, July 2026`, nl: `Cotidianul: lonen van ambtsdragers, juli 2026`, fr: `Cotidianul : rémunération des dignitaires, juillet 2026` },
  'src.pol.mp': { en: `Folositor: what an MP earns in 2026`, nl: `Folositor: wat een parlementslid verdient in 2026`, fr: `Folositor : ce que gagne un parlementaire en 2026` },
  bracketTop: { en: `flat rate`, nl: `vlak tarief`, fr: `taux unique` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => `Why do rates climb between ${a} and ${b}?`,
    nl: (a, b) => `Waarom stijgen de tarieven tussen ${a} en ${b}?`,
    fr: (a, b) => `Pourquoi les taux montent-ils entre ${a} et ${b} ?`,
  },
  trapBody: {
    en: (a, c, b) => `Two reliefs end just above the minimum wage of ${a}. With base pay at the minimum, the first 200 lei a month are free of income tax and contributions while gross pay stays at or under ${b}: one more leu past it costs about 80 lei a month. And the personal deduction, worth 20% of the minimum wage for a single person (more with dependants), shrinks by a fixed slice for every 50 lei up to ${c}, then stops: that adds about 4 points to the rate on each extra leu along the way. Below the minimum wage (part-time), contributions are still due on a full minimum wage, and the employer pays the gap.`,
    nl: (a, c, b) => `Twee voordelen stoppen net boven het minimumloon van ${a}. Met een basisloon op het minimum zijn de eerste 200 lei per maand vrij van inkomstenbelasting en bijdragen zolang het brutoloon niet boven ${b} gaat: één leu erboven kost ongeveer 80 lei per maand. En de persoonlijke aftrek, 20% van het minimumloon voor een alleenstaande (meer met personen ten laste), krimpt met een vaste schijf per 50 lei tot ${c} en valt dan weg: dat telt onderweg ongeveer 4 punten op bij het tarief op elke extra leu. Onder het minimumloon (deeltijds) zijn de bijdragen toch verschuldigd op een volledig minimumloon, en betaalt de werkgever het verschil.`,
    fr: (a, c, b) => `Deux allègements s'arrêtent juste au-dessus du salaire minimum de ${a}. Avec un salaire de base au minimum, les 200 premiers lei par mois sont exonérés d'impôt et de cotisations tant que le brut ne dépasse pas ${b} : un leu de plus coûte environ 80 lei par mois. Et la déduction personnelle, qui vaut 20% du salaire minimum pour une personne seule (plus avec des personnes à charge), diminue d'une tranche fixe tous les 50 lei jusqu'à ${c}, puis disparaît : cela ajoute environ 4 points au taux sur chaque leu en plus. Sous le salaire minimum (temps partiel), les cotisations restent dues sur un salaire minimum complet, et l'employeur paie la différence.`,
  },
  topTitle: { en: top => `Why the jump at ${top}?`, nl: top => `Waarom de sprong bij ${top}?`, fr: top => `Pourquoi le saut à ${top} ?` },
  topBody: { en: top => `${top}`, nl: top => `${top}`, fr: top => `${top}` },

  // Tax components
  'comp.er': { en: `Work insurance contribution (CAM)`, nl: `Arbeidsverzekeringsbijdrage (CAM)`, fr: `Contribution d'assurance pour le travail (CAM)` },
  'comp.cas': { en: `Pension contribution (CAS)`, nl: `Pensioenbijdrage (CAS)`, fr: `Cotisation retraite (CAS)` },
  'comp.cass': { en: `Health contribution (CASS)`, nl: `Gezondheidsbijdrage (CASS)`, fr: `Cotisation santé (CASS)` },
  'comp.ir': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'bd.untaxed': { en: `Untaxed part of the minimum wage`, nl: `Onbelast deel van het minimumloon`, fr: `Part non imposable du salaire minimum` },
  'bd.ded': { en: `Personal deduction`, nl: `Persoonlijke aftrek`, fr: `Déduction personnelle` },
  'bd.taxableRo': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.irPartner': { en: `Extra tax for your spouse`, nl: `Extra belasting voor je echtgenoot`, fr: `Impôt en plus pour votre conjoint` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the norm in Romania. Bonuses are taxed like any pay, in the month they're paid.`,
    nl: `12 maandlonen, de norm in Roemenië. Bonussen worden belast zoals elk loon, in de maand van betaling.`,
    fr: `12 salaires mensuels, la norme en Roumanie. Les primes sont imposées comme tout salaire, le mois où elles sont versées.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: cap => `Romania taxes each spouse alone, month by month. A spouse whose income is at most ${cap} a month (20% of the minimum wage) counts as a dependant and raises the other's personal deduction. Minor children count for each parent. The 100 lei per child at school goes to one parent, here whichever it helps more. Your share = the household's tax with your pay − without it.`,
    nl: cap => `Roemenië belast elke echtgenoot apart, maand per maand. Een echtgenoot met een inkomen van hoogstens ${cap} per maand (20% van het minimumloon) is persoon ten laste en verhoogt de persoonlijke aftrek van de andere. Minderjarige kinderen tellen voor elke ouder. De 100 lei per schoolgaand kind gaat naar één ouder, hier wie er het meest aan heeft. Jouw deel = de belasting van het gezin met jouw loon − zonder.`,
    fr: cap => `La Roumanie impose chaque conjoint séparément, mois par mois. Un conjoint dont le revenu ne dépasse pas ${cap} par mois (20% du salaire minimum) est à charge et augmente la déduction personnelle de l'autre. Les enfants mineurs comptent pour chaque parent. Les 100 lei par enfant scolarisé vont à un seul parent, ici celui à qui ils profitent le plus. Votre part = l'impôt du foyer avec votre salaire − sans.`,
  },
  'tip.reg': {
    en: (extra, cap) => `Under 26, an extra personal deduction of ${extra} a month (15% of the minimum wage) while gross pay stays at or under ${cap}. Worth up to 10% of it in income tax.`,
    nl: (extra, cap) => `Onder de 26 een extra persoonlijke aftrek van ${extra} per maand (15% van het minimumloon) zolang het brutoloon niet boven ${cap} gaat. Waard tot 10% daarvan aan inkomstenbelasting.`,
    fr: (extra, cap) => `Avant 26 ans, une déduction personnelle supplémentaire de ${extra} par mois (15% du salaire minimum) tant que le brut ne dépasse pas ${cap}. Elle vaut jusqu'à 10% de ce montant en impôt.`,
  },
  'tip.costShort': { en: `Gross salary + 2.25% work insurance contribution.`, nl: `Brutoloon + 2,25% arbeidsverzekeringsbijdrage.`, fr: `Salaire brut + 2,25% de contribution d'assurance pour le travail.` },
  'tip.er': {
    en: `Since 2018 almost every contribution is the employee's. The employer pays only 2.25% CAM, which funds unemployment, work accidents and wage guarantees. Part-time pay below the minimum wage: the employer also pays the CAS and CASS missing to reach a full minimum wage.`,
    nl: `Sinds 2018 zijn bijna alle bijdragen voor de werknemer. De werkgever betaalt enkel 2,25% CAM, voor werkloosheid, arbeidsongevallen en loongarantie. Deeltijds loon onder het minimumloon: de werkgever betaalt ook de CAS en CASS die ontbreken tot een volledig minimumloon.`,
    fr: `Depuis 2018, presque toutes les cotisations sont à charge du salarié. L'employeur ne paie que 2,25% de CAM, qui finance le chômage, les accidents du travail et la garantie des salaires. Temps partiel sous le salaire minimum : l'employeur paie aussi la CAS et la CASS manquantes pour atteindre un salaire minimum complet.`,
  },
  'tip.topUp': { en: `Contributions up to a full minimum wage`, nl: `Bijdragen tot een volledig minimumloon`, fr: `Cotisations jusqu'à un salaire minimum complet` },
  'tip.untaxed': {
    en: (u, min, cap) => `From July to December 2026, ${u} a month of a minimum wage (${min}) is left out of income tax, CAS, CASS and CAM, as long as base pay is the minimum and gross pay stays at or under ${cap}. It was 300 lei until June. Here it applies to any gross between the minimum and the ceiling, as if the extra were bonuses, and pro rata below the minimum.`,
    nl: (u, min, cap) => `Van juli tot december 2026 valt ${u} per maand van een minimumloon (${min}) buiten de inkomstenbelasting, CAS, CASS en CAM, zolang het basisloon het minimum is en het brutoloon niet boven ${cap} gaat. Tot juni was dat 300 lei. Hier geldt het voor elk brutoloon tussen het minimum en het plafond, alsof het verschil bonussen zijn, en naar verhouding onder het minimum.`,
    fr: (u, min, cap) => `De juillet à décembre 2026, ${u} par mois d'un salaire minimum (${min}) échappent à l'impôt, à la CAS, à la CASS et à la CAM, tant que le salaire de base est le minimum et que le brut ne dépasse pas ${cap}. C'était 300 lei jusqu'en juin. Ici, cela s'applique à tout brut entre le minimum et le plafond, comme si l'écart était des primes, et au prorata sous le minimum.`,
  },
  'tip.cas': {
    en: `Withheld from your pay: 25% of gross for the public pension, no ceiling. For people born after 1972, 4.75 points of it go to their private pension fund (pillar II).`,
    nl: `Ingehouden op je loon: 25% van het bruto voor het wettelijk pensioen, zonder plafond. Voor wie na 1972 geboren is, gaan 4,75 punten daarvan naar een privaat pensioenfonds (pijler II).`,
    fr: `Retenue sur votre paie : 25% du brut pour la retraite publique, sans plafond. Pour les personnes nées après 1972, 4,75 points vont à leur fonds de pension privé (pilier II).`,
  },
  'tip.cass': {
    en: `Withheld from your pay: 10% of gross for health insurance, no ceiling.`,
    nl: `Ingehouden op je loon: 10% van het bruto voor de ziekteverzekering, zonder plafond.`,
    fr: `Retenue sur votre paie : 10% du brut pour l'assurance maladie, sans plafond.`,
  },
  'tip.ded': {
    en: (min, cap) => `Taken off taxable income at the main job. At or under the minimum wage (${min}) it is 20% of it with no dependant, 25%, 30%, 35% or 45% with 1, 2, 3, 4 or more. Each 50 lei above the minimum takes off half a point, until it reaches 0 at ${cap} for a single person (5% to 25% are left there with dependants, then nothing). Plus 15% of the minimum wage under 26, and 100 lei per child at school.`,
    nl: (min, cap) => `Afgetrokken van het belastbaar inkomen bij de hoofdbetrekking. Tot het minimumloon (${min}) is dat 20% ervan zonder persoon ten laste, 25%, 30%, 35% of 45% met 1, 2, 3, 4 of meer. Per 50 lei boven het minimum gaat er een half punt af, tot 0 bij ${cap} voor een alleenstaande (met personen ten laste blijft daar 5% tot 25% over, daarna niets). Plus 15% van het minimumloon onder de 26 en 100 lei per schoolgaand kind.`,
    fr: (min, cap) => `Déduite du revenu imposable chez l'employeur principal. Jusqu'au salaire minimum (${min}), elle vaut 20% de celui-ci sans personne à charge, 25%, 30%, 35% ou 45% avec 1, 2, 3, 4 ou plus. Chaque tranche de 50 lei au-dessus du minimum retire un demi-point, jusqu'à 0 à ${cap} pour une personne seule (avec des personnes à charge, il reste 5% à 25% à ce niveau, puis plus rien). Plus 15% du salaire minimum avant 26 ans, et 100 lei par enfant scolarisé.`,
  },
  'tip.dedBase': { en: p => `Basic deduction, ${p} of the minimum wage`, nl: p => `Basisaftrek, ${p} van het minimumloon`, fr: p => `Déduction de base, ${p} du salaire minimum` },
  'tip.dedU26': { en: `Under 26`, nl: `Onder 26`, fr: `Moins de 26 ans` },
  'tip.dedSchool': { en: `Children at school`, nl: `Schoolgaande kinderen`, fr: `Enfants scolarisés` },
  'tip.dedUsed': { en: `Used, within taxable income`, nl: `Gebruikt, binnen het belastbaar inkomen`, fr: `Utilisée, dans la limite du revenu imposable` },
  'tip.dedM': {
    en: `Children are assumed to be minors at school. A dependant is a spouse, child or relative up to the second degree with income of at most 20% of the minimum wage.`,
    nl: `De kinderen worden verondersteld minderjarig en schoolgaand te zijn. Persoon ten laste: echtgenoot, kind of familielid tot de tweede graad met een inkomen van hoogstens 20% van het minimumloon.`,
    fr: `Les enfants sont supposés mineurs et scolarisés. Personne à charge : conjoint, enfant ou parent jusqu'au deuxième degré dont le revenu ne dépasse pas 20% du salaire minimum.`,
  },
  'tip.taxable': {
    en: calc => `Gross − untaxed part − CAS − CASS − personal deduction${calc}.`,
    nl: calc => `Bruto − onbelast deel − CAS − CASS − persoonlijke aftrek${calc}.`,
    fr: calc => `Brut − part non imposable − CAS − CASS − déduction personnelle${calc}.`,
  },
  'tip.ir': {
    en: `One flat rate of 10% on taxable income, withheld every month.`,
    nl: `Eén vlak tarief van 10% op het belastbaar inkomen, elke maand ingehouden.`,
    fr: `Un taux unique de 10% sur le revenu imposable, retenu chaque mois.`,
  },
  'tip.irPartner': { en: `Your spouse's tax goes up by`, nl: `De belasting van je echtgenoot stijgt met`, fr: `L'impôt de votre conjoint augmente de` },
  'tip.irPartnerLong': {
    en: cap => `Once your income passes ${cap} a month, you no longer count as your spouse's dependant, so their personal deduction shrinks. The child school deduction may also move between you. That extra tax is counted as yours.`,
    nl: cap => `Zodra je inkomen boven ${cap} per maand gaat, ben je niet langer ten laste van je echtgenoot, dus krimpt diens persoonlijke aftrek. Ook de aftrek voor schoolgaande kinderen kan van ouder wisselen. Die extra belasting telt als de jouwe.`,
    fr: cap => `Dès que votre revenu dépasse ${cap} par mois, vous n'êtes plus à charge de votre conjoint : sa déduction personnelle diminue. La déduction pour enfants scolarisés peut aussi changer de parent. Cet impôt en plus est compté comme le vôtre.`,
  },
  'tip.vatM': {
    en: `Food, medicines, water, heating and hotels are at 11%, and rent is exempt, so this is an upper bound. The standard rate rose from 19% to 21% on 1 August 2025.`,
    nl: `Voeding, geneesmiddelen, water, verwarming en hotels hebben 11%, en huur is vrijgesteld, dus dit is een bovengrens. Het normale tarief steeg van 19% naar 21% op 1 augustus 2025.`,
    fr: `L'alimentation, les médicaments, l'eau, le chauffage et l'hôtellerie sont à 11%, et les loyers exonérés : c'est donc un maximum. Le taux normal est passé de 19% à 21% le 1er août 2025.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − CAS − CASS − income tax, minus any extra tax your pay causes your spouse.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − CAS − CASS − inkomstenbelasting, min de extra belasting die je loon je echtgenoot kost.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − CAS − CASS − impôt, moins l'impôt en plus que votre salaire coûte à votre conjoint.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [`Work insurance contribution (CAM) <span class="num">2.25%</span> of gross pay, no ceiling.`, `Part-time below the minimum wage: the employer pays the CAS and CASS missing up to a full minimum wage.`] },
    nl: { h: `1 · Werkgever`, li: [`Arbeidsverzekeringsbijdrage (CAM) <span class="num">2,25%</span> van het brutoloon, zonder plafond.`, `Deeltijds onder het minimumloon: de werkgever betaalt de CAS en CASS die ontbreken tot een volledig minimumloon.`] },
    fr: { h: `1 · Employeur`, li: [`Contribution d'assurance pour le travail (CAM) <span class="num">2,25%</span> du salaire brut, sans plafond.`, `Temps partiel sous le salaire minimum : l'employeur paie la CAS et la CASS manquantes jusqu'à un salaire minimum complet.`] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [`Pension (CAS) <span class="num">25%</span> and health (CASS) <span class="num">10%</span> of gross pay, no ceiling.`] },
    nl: { h: `2 · Werknemersbijdragen`, li: [`Pensioen (CAS) <span class="num">25%</span> en gezondheid (CASS) <span class="num">10%</span> van het brutoloon, zonder plafond.`] },
    fr: { h: `2 · Cotisations salariales`, li: [`Retraite (CAS) <span class="num">25%</span> et santé (CASS) <span class="num">10%</span> du salaire brut, sans plafond.`] },
  },
  'ref.untaxed': {
    en: { h: `3 · Minimum wage`, li: [`<span class="num">4,325 lei</span> a month from 1 July 2026 (4,050 lei before).`, `<span class="num">200 lei</span> of it free of tax, CAS, CASS and CAM while gross ≤ <span class="num">4,600 lei</span> (300 lei until June).`] },
    nl: { h: `3 · Minimumloon`, li: [`<span class="num">4.325 lei</span> per maand vanaf 1 juli 2026 (eerst 4.050 lei).`, `<span class="num">200 lei</span> daarvan vrij van belasting, CAS, CASS en CAM zolang het bruto ≤ <span class="num">4.600 lei</span> (300 lei tot juni).`] },
    fr: { h: `3 · Salaire minimum`, li: [`<span class="num">4 325 lei</span> par mois depuis le 1er juillet 2026 (4 050 lei avant).`, `<span class="num">200 lei</span> exonérés d'impôt, de CAS, de CASS et de CAM tant que le brut ≤ <span class="num">4 600 lei</span> (300 lei jusqu'en juin).`] },
  },
  'ref.ded': {
    en: { h: `4 · Personal deduction`, li: [
      `At or under the minimum wage: <span class="num">20%</span> of it, 25%, 30%, 35% or 45% with 1 to 4+ dependants.`,
      `Half a point less per 50 lei above the minimum; none above the minimum + <span class="num">2,000 lei</span>.`,
      `Under 26: + 15% of the minimum wage, same ceiling. Child at school: + 100 lei, one parent.`,
    ] },
    nl: { h: `4 · Persoonlijke aftrek`, li: [
      `Tot het minimumloon: <span class="num">20%</span> ervan, 25%, 30%, 35% of 45% met 1 tot 4+ personen ten laste.`,
      `Een half punt minder per 50 lei boven het minimum; niets boven het minimum + <span class="num">2.000 lei</span>.`,
      `Onder 26: + 15% van het minimumloon, zelfde plafond. Schoolgaand kind: + 100 lei, één ouder.`,
    ] },
    fr: { h: `4 · Déduction personnelle`, li: [
      `Jusqu'au salaire minimum : <span class="num">20%</span> de celui-ci, 25%, 30%, 35% ou 45% avec 1 à 4+ personnes à charge.`,
      `Un demi-point de moins par tranche de 50 lei au-dessus du minimum ; rien au-delà du minimum + <span class="num">2 000 lei</span>.`,
      `Moins de 26 ans : + 15% du salaire minimum, même plafond. Enfant scolarisé : + 100 lei, un seul parent.`,
    ] },
  },
  'ref.ir': {
    en: { h: `5 · Income tax`, li: [`<span class="num">10%</span> flat on gross − CAS − CASS − deductions, withheld monthly. No annual return for a salary.`] },
    nl: { h: `5 · Inkomstenbelasting`, li: [`<span class="num">10%</span> vlak op bruto − CAS − CASS − aftrekken, maandelijks ingehouden. Geen jaarlijkse aangifte voor een loon.`] },
    fr: { h: `5 · Impôt sur le revenu`, li: [`<span class="num">10%</span> unique sur brut − CAS − CASS − déductions, retenu chaque mois. Pas de déclaration annuelle pour un salaire.`] },
  },
  'ref.vat': {
    en: { h: `6 · VAT on spending`, li: [
      `Standard rate <span class="num">21%</span> since 1 August 2025, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × r / (100 + r): at 21% that's 21 / 121 = <span class="num">17.36%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">21%</span> sinds 1 augustus 2025, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 21% is dat 21 / 121 = <span class="num">17,36%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">21%</span> depuis le 1er août 2025, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 21%, cela fait 21 / 121 = <span class="num">17,36%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and Parliament`, li: [
      `President <span class="num">24,960 lei</span>, Prime Minister <span class="num">23,920 lei</span>, minister <span class="num">21,840 lei</span>, deputy or senator <span class="num">18,720 lei</span> a month.`,
      `Taxed like any salary.`,
    ] },
    nl: { h: `7 · Regering en parlement`, li: [
      `President <span class="num">24.960 lei</span>, premier <span class="num">23.920 lei</span>, minister <span class="num">21.840 lei</span>, volksvertegenwoordiger of senator <span class="num">18.720 lei</span> per maand.`,
      `Belast zoals elk loon.`,
    ] },
    fr: { h: `7 · Gouvernement et Parlement`, li: [
      `Président <span class="num">24 960 lei</span>, Premier ministre <span class="num">23 920 lei</span>, ministre <span class="num">21 840 lei</span>, député ou sénateur <span class="num">18 720 lei</span> par mois.`,
      `Imposés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `The first half of 2026 (minimum wage 4,050 lei, 300 lei untaxed): the whole year uses the rules in force since July.`,
      `Meal vouchers (CASS and tax since August 2025), pillar III pension and health subscriptions deductible up to 400 lei a month, disability exemption, and the reliefs for the construction sector. Pupils, students and pensioners are spared the part-time contribution floor.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `De eerste helft van 2026 (minimumloon 4.050 lei, 300 lei onbelast): het hele jaar gebruikt de regels die sinds juli gelden.`,
      `Maaltijdcheques (CASS en belasting sinds augustus 2025), aftrekbare bijdragen aan pijler III en ziekteabonnementen tot 400 lei per maand, de vrijstelling voor personen met een handicap en de voordelen voor de bouwsector. Scholieren, studenten en gepensioneerden zijn vrijgesteld van het minimum voor deeltijdse bijdragen.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Le premier semestre 2026 (salaire minimum 4 050 lei, 300 lei non imposables) : toute l'année suit les règles en vigueur depuis juillet.`,
      `Les titres-repas (CASS et impôt depuis août 2025), les cotisations au pilier III et abonnements santé déductibles jusqu'à 400 lei par mois, l'exonération pour handicap et les allègements du secteur de la construction. Élèves, étudiants et retraités échappent au plancher de cotisations du temps partiel.`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance →`,
    nl: `Wat een erfgenaam betaalt op een erfenis →`,
    fr: `Ce que paie un héritier sur une succession →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and ANAF decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en ANAF zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et l'ANAF font foi.`,
  },

  'src.cf': { en: `ANAF: Fiscal Code, updated 2026`, nl: `ANAF: fiscaal wetboek, bijgewerkt 2026`, fr: `ANAF : Code fiscal, à jour 2026` },
  'src.untaxed': { en: `Contzilla: payroll changes from July 2026`, nl: `Contzilla: loonwijzigingen vanaf juli 2026`, fr: `Contzilla : changements de paie depuis juillet 2026` },
  'src.untaxedEx': { en: `Profit.ro: worked example at 4,325 lei`, nl: `Profit.ro: rekenvoorbeeld bij 4.325 lei`, fr: `Profit.ro : exemple chiffré à 4 325 lei` },
  'src.minWage': { en: `Minimum wage 4,325 lei from July 2026`, nl: `Minimumloon 4.325 lei vanaf juli 2026`, fr: `Salaire minimum de 4 325 lei depuis juillet 2026` },
  'src.ins': { en: `INS via Cotidianul: average wage, August 2026`, nl: `INS via Cotidianul: gemiddeld loon, augustus 2026`, fr: `INS via Cotidianul : salaire moyen, août 2026` },
  'src.vat': { en: `Fiscal Code art. 291: VAT rates`, nl: `Fiscaal wetboek art. 291: btw-tarieven`, fr: `Code fiscal art. 291 : taux de TVA` },
  'src.govPay': { en: `Cotidianul: dignitaries' pay`, nl: `Cotidianul: lonen van ambtsdragers`, fr: `Cotidianul : rémunération des dignitaires` },
};
