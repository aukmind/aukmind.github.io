window.TAX_STRINGS = {
  title: { en: `Hungarian Buying Power`, nl: `Hongaarse koopkracht`, fr: `Pouvoir d'achat en Hongrie` },
  eyebrow: { en: `Hungary · income 2026 · employee`, nl: `Hongarije · inkomen 2026 · werknemer`, fr: `Hongrie · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Hungary · income 2026 · minister`, nl: `Hongarije · inkomen 2026 · minister`, fr: `Hongrie · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Hungarian salary in 2026, from what your employer pays to what you can buy. Flat rates, no tax-free amount, and a family allowance that can wipe out an employee's taxes.`,
    nl: `Alle belastingen op een Hongaars loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Vlakke tarieven, geen belastingvrije som en een gezinskorting die de belastingen van een werknemer kan wegvegen.`,
    fr: `Tous les prélèvements sur un salaire hongrois en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Des taux uniques, aucun abattement personnel, et une réduction familiale qui peut effacer les impôts d'un salarié.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Living together, married or not. Each partner is taxed alone, but the couple can split the family allowance however suits them.`,
    nl: `Samenwonend, gehuwd of niet. Elke partner wordt apart belast, maar het koppel mag de gezinskorting naar keuze verdelen.`,
    fr: `En couple, marié ou non. Chacun est imposé séparément, mais le couple peut répartir la réduction familiale comme il veut.`,
  },
  region: { en: `Personal exemption`, nl: `Persoonlijke vrijstelling`, fr: `Exonération personnelle` },
  'region.none': { en: `None`, nl: `Geen`, fr: `Aucune` },
  'region.u25': { en: `Under 25`, nl: `Jonger dan 25`, fr: `Moins de 25 ans` },
  'region.mother': { en: `Exempt mother`, nl: `Vrijgestelde moeder`, fr: `Mère exonérée` },
  vatStandard: { en: `(Hungary's standard rate is 27%)`, nl: `(het Hongaarse normale tarief is 27%)`, fr: `(le taux normal hongrois est de 27%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.ss': { en: `State secretary`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'minRole.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.minMp': { en: `Minister and MP`, nl: `Minister en parlementslid`, fr: `Ministre et député` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Pay since the 2026 cuts. Taxed like any salary: 15% SZJA, 18.5% TB, 13% SZOCHO.`,
    nl: `Loon sinds de besparingen van 2026. Belast zoals elk loon: 15% SZJA, 18,5% TB, 13% SZOCHO.`,
    fr: `Rémunération depuis les baisses de 2026. Imposée comme tout salaire : 15% de SZJA, 18,5% de TB, 13% de SZOCHO.`,
  },
  minSalaryHint: {
    en: `Yearly pay, current monthly amount × 12. Statutory amount by default.`,
    nl: `Jaarloon, huidig maandbedrag × 12. Standaard het wettelijke bedrag.`,
    fr: `Rémunération annuelle, montant mensuel actuel × 12. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `Since June 2026 an MP's base pay is 1.8 times last year's average wage (Ft 1,309,493 a month, down from Ft 2,182,488). From 1 October 2026 a Prime Minister who is an MP gets 1.91 times that on top, Ft 3,810,625 in all; Viktor Orbán was paid about 8.1 million Ft. The Prime Minister sets ministers' pay: 3.5 million Ft for ministers without a seat, 2 million Ft plus the MP pay for those with one, 3 million Ft for state secretaries. All of it is employment income, taxed like a salary.`,
    nl: `Sinds juni 2026 is het basisloon van een parlementslid 1,8 keer het gemiddelde loon van vorig jaar (Ft 1.309.493 per maand, eerst Ft 2.182.488). Vanaf 1 oktober 2026 krijgt een premier die parlementslid is daar 1,91 keer bovenop, samen Ft 3.810.625; Viktor Orbán kreeg ongeveer Ft 8,1 miljoen. De premier bepaalt het loon van de ministers: Ft 3,5 miljoen voor ministers zonder zetel, Ft 2 miljoen plus het parlementsloon voor wie een zetel heeft, Ft 3 miljoen voor staatssecretarissen. Alles is arbeidsinkomen, belast zoals een loon.`,
    fr: `Depuis juin 2026, l'indemnité de base d'un député vaut 1,8 fois le salaire moyen de l'année précédente (1 309 493 Ft par mois, contre 2 182 488 Ft avant). Depuis le 1er octobre 2026, un Premier ministre député touche 1,91 fois ce montant en plus, soit 3 810 625 Ft ; Viktor Orbán touchait environ 8,1 millions Ft. Le Premier ministre fixe la rémunération des ministres : 3,5 millions Ft sans siège, 2 millions Ft plus l'indemnité de député avec un siège, 3 millions Ft pour les secrétaires d'État. Tout est un revenu salarial, imposé comme un salaire.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.min': { en: `Minister (no seat)`, nl: `Minister (geen zetel)`, fr: `Ministre (sans siège)` },
  'stat.minMp': { en: `Minister and MP`, nl: `Minister en parlementslid`, fr: `Ministre et député` },
  'stat.ss': { en: `State secretary`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'stat.cap': { en: `State company CEO (cap)`, nl: `CEO staatsbedrijf (plafond)`, fr: `PDG d'entreprise publique (plafond)` },
  'pol.stat.pm': { en: `MP pay + 1.91 × MP pay, from October 2026`, nl: `Parlementsloon + 1,91 × parlementsloon, vanaf oktober 2026`, fr: `Indemnité de député + 1,91 × cette indemnité, depuis octobre 2026` },
  'pol.stat.min': { en: `Set by the Prime Minister`, nl: `Bepaald door de premier`, fr: `Fixé par le Premier ministre` },
  'pol.stat.minMp': { en: `Ministerial pay + MP pay`, nl: `Ministersloon + parlementsloon`, fr: `Salaire ministériel + indemnité de député` },
  'pol.stat.ss': { en: `Set by the Prime Minister`, nl: `Bepaald door de premier`, fr: `Fixé par le Premier ministre` },
  'pol.stat.mp': { en: `1.8 × last year's average wage, without expense budgets`, nl: `1,8 × het gemiddelde loon van vorig jaar, zonder onkostenbudgetten`, fr: `1,8 × le salaire moyen de l'année précédente, hors budgets de frais` },
  'pol.stat.cap': { en: `Base-pay ceiling for large state companies, + up to 20% bonus`, nl: `Plafond op het basisloon in grote staatsbedrijven, + tot 20% bonus`, fr: `Plafond du salaire de base dans les grandes entreprises publiques, + jusqu'à 20% de prime` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `State companies, gross pay`, nl: `Staatsbedrijven, brutoloon`, fr: `Entreprises publiques, rémunération brute` },
  'pol.mnb': { en: `Governor, Magyar Nemzeti Bank`, nl: `Gouverneur, Magyar Nemzeti Bank`, fr: `Gouverneur de la Magyar Nemzeti Bank` },
  'pol.pmOld': { en: `Prime Minister until May 2026`, nl: `Premier tot mei 2026`, fr: `Premier ministre jusqu'en mai 2026` },
  'polNote.stat': {
    en: `Taxed like any salary. The head sits at its gross.`,
    nl: `Belast zoals elk loon. Het hoofdje staat op het bruto.`,
    fr: `Imposé comme tout salaire. La tête est placée à son brut.`,
  },
  'polTipNote.pm': {
    en: `Péter Magyar, an MP: Ft 1,309,493 as MP + Ft 2,501,132 as Prime Minister a month. A Prime Minister without a seat would get 2.91 times the MP pay, the same total.`,
    nl: `Péter Magyar, parlementslid: Ft 1.309.493 als parlementslid + Ft 2.501.132 als premier per maand. Een premier zonder zetel zou 2,91 keer het parlementsloon krijgen, hetzelfde totaal.`,
    fr: `Péter Magyar, député : 1 309 493 Ft comme député + 2 501 132 Ft comme Premier ministre par mois. Un Premier ministre sans siège toucherait 2,91 fois l'indemnité de député, le même total.`,
  },
  'polTipNote.min': {
    en: `3.5 million Ft a month for ministers without a seat in Parliament, the same for all of them. Plus official car, flat and healthcare.`,
    nl: `Ft 3,5 miljoen per maand voor ministers zonder zetel in het parlement, voor allemaal gelijk. Plus dienstwagen, woning en zorg.`,
    fr: `3,5 millions Ft par mois pour les ministres sans siège au Parlement, identique pour tous. Plus voiture, logement et soins de fonction.`,
  },
  'polTipNote.minMp': {
    en: `2 million Ft a month as minister + Ft 1,309,493 as MP. Under Orbán, ministers with a seat got up to 5.95 million Ft.`,
    nl: `Ft 2 miljoen per maand als minister + Ft 1.309.493 als parlementslid. Onder Orbán kregen ministers met een zetel tot Ft 5,95 miljoen.`,
    fr: `2 millions Ft par mois comme ministre + 1 309 493 Ft comme député. Sous Orbán, les ministres députés touchaient jusqu'à 5,95 millions Ft.`,
  },
  'polTipNote.ss': {
    en: `3 million Ft a month; with a seat in Parliament, 1.7 million Ft + the MP pay, about the same.`,
    nl: `Ft 3 miljoen per maand; met een zetel in het parlement Ft 1,7 miljoen + het parlementsloon, ongeveer hetzelfde.`,
    fr: `3 millions Ft par mois ; avec un siège au Parlement, 1,7 million Ft + l'indemnité de député, à peu près pareil.`,
  },
  'polTipNote.mp': {
    en: `Ft 1,309,493 a month since July 2026. Committee and group posts pay more; housing, office and staff budgets come on top and aren't counted.`,
    nl: `Ft 1.309.493 per maand sinds juli 2026. Commissie- en fractiefuncties betalen meer; budgetten voor woning, kantoor en personeel komen erbovenop en tellen niet mee.`,
    fr: `1 309 493 Ft par mois depuis juillet 2026. Les fonctions en commission et de groupe paient plus ; les budgets de logement, bureau et personnel s'ajoutent et ne sont pas comptés.`,
  },
  'polTipNote.mnb': {
    en: `Mihály Varga, governor since March 2025: 6.85 million Ft a month as reported at his appointment.`,
    nl: `Mihály Varga, gouverneur sinds maart 2025: Ft 6,85 miljoen per maand volgens berichten bij zijn benoeming.`,
    fr: `Mihály Varga, gouverneur depuis mars 2025 : 6,85 millions Ft par mois selon la presse à sa nomination.`,
  },
  'polTipNote.pmOld': {
    en: `Under the old rules: 5.89 million Ft as Prime Minister + 2.18 million Ft as MP, about 8.1 million Ft a month in early 2026.`,
    nl: `Volgens de oude regels: Ft 5,89 miljoen als premier + Ft 2,18 miljoen als parlementslid, ongeveer Ft 8,1 miljoen per maand begin 2026.`,
    fr: `Selon les anciennes règles : 5,89 millions Ft comme Premier ministre + 2,18 millions Ft comme député, environ 8,1 millions Ft par mois début 2026.`,
  },
  'polTipNote.cap': {
    en: `Since August 2026, executives of large state companies get at most 4.94 times last year's average wage as base pay (about 3.59 million Ft a month), plus a bonus of up to 20% of it. The government can allow more case by case.`,
    nl: `Sinds augustus 2026 krijgen bestuurders van grote staatsbedrijven hoogstens 4,94 keer het gemiddelde loon van vorig jaar als basisloon (ongeveer Ft 3,59 miljoen per maand), plus een bonus tot 20% daarvan. De regering kan per geval meer toestaan.`,
    fr: `Depuis août 2026, les dirigeants des grandes entreprises publiques touchent au plus 4,94 fois le salaire moyen de l'année précédente en salaire de base (environ 3,59 millions Ft par mois), plus une prime de 20% au maximum. Le gouvernement peut autoriser davantage au cas par cas.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. Hungarian politicians are taxed like employees, so everyone sits at their gross. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Hongaarse politici worden belast als werknemers, dus iedereen staat op het eigen bruto. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. Les politiciens hongrois sont imposés comme des salariés : chacun est placé à son brut. Sources : ${links}.`,
  },
  'src.pol.pm': { en: `Index: Act XLIX of 2026`, nl: `Index: wet XLIX van 2026`, fr: `Index : loi XLIX de 2026` },
  'src.pol.min': { en: `Telex: government pay, September 2026`, nl: `Telex: regeringslonen, september 2026`, fr: `Telex : salaires du gouvernement, septembre 2026` },
  'src.pol.minMp': { en: `Telex: government pay, September 2026`, nl: `Telex: regeringslonen, september 2026`, fr: `Telex : salaires du gouvernement, septembre 2026` },
  'src.pol.ss': { en: `Telex: government pay, September 2026`, nl: `Telex: regeringslonen, september 2026`, fr: `Telex : salaires du gouvernement, septembre 2026` },
  'src.pol.mp': { en: `VG: MPs' pay cut, June 2026`, nl: `VG: verlaging parlementsloon, juni 2026`, fr: `VG : baisse de l'indemnité des députés, juin 2026` },
  'src.pol.mnb': { en: `Mfor: the governor's pay`, nl: `Mfor: loon van de gouverneur`, fr: `Mfor : salaire du gouverneur` },
  'src.pol.pmOld': { en: `Pénzcentrum: Orbán's pay in 2026`, nl: `Pénzcentrum: loon van Orbán in 2026`, fr: `Pénzcentrum : salaire d'Orbán en 2026` },
  'src.pol.cap': { en: `Telex: state company pay caps`, nl: `Telex: loonplafonds staatsbedrijven`, fr: `Telex : plafonds de salaire des entreprises publiques` },
  bracketTop: { en: `flat rate`, nl: `vlak tarief`, fr: `taux unique` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why no employee tax up to ${b}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom geen belasting voor de werknemer tot ${b}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi aucun prélèvement salarial jusqu'à ${b} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, fam) => b
      ? `Your children give the household a family allowance worth ${fam} a month. It comes off SZJA first, then off the 18.5% TB contribution, so up to ${b} it cancels everything withheld from your pay: only the employer's 13% remains. Above that, each extra forint is taxed at the full 33.5%.`
      : `Hungary has no tax-free amount: from the first forint, even at the minimum wage of ${a}, you pay 15% SZJA and 18.5% TB, and your employer 13% SZOCHO.${fam ? ` Your family allowance (${fam} a month) is already used up by your partner's pay or your own taxes.` : ''}`,
    nl: (a, b, fam) => b
      ? `Je kinderen geven het gezin een gezinskorting van ${fam} per maand. Die gaat eerst van de SZJA af, daarna van de TB-bijdrage van 18,5%, dus tot ${b} valt alles weg wat van je loon wordt ingehouden: alleen de 13% van de werkgever blijft. Daarboven wordt elke extra forint belast aan de volle 33,5%.`
      : `Hongarije heeft geen belastingvrije som: vanaf de eerste forint, ook op het minimumloon van ${a}, betaal je 15% SZJA en 18,5% TB, en je werkgever 13% SZOCHO.${fam ? ` Je gezinskorting (${fam} per maand) wordt al opgebruikt door het loon van je partner of je eigen belastingen.` : ''}`,
    fr: (a, b, fam) => b
      ? `Vos enfants donnent au foyer une réduction familiale de ${fam} par mois. Elle s'impute d'abord sur la SZJA, puis sur la cotisation TB de 18,5% : jusqu'à ${b}, elle annule tout ce qui est retenu sur votre salaire, il ne reste que les 13% de l'employeur. Au-delà, chaque forint en plus est taxé au taux plein de 33,5%.`
      : `La Hongrie n'a pas d'abattement : dès le premier forint, même au salaire minimum de ${a}, vous payez 15% de SZJA et 18,5% de TB, et votre employeur 13% de SZOCHO.${fam ? ` Votre réduction familiale (${fam} par mois) est déjà absorbée par le salaire de votre conjoint ou vos propres impôts.` : ''}`,
  },
  topTitle: {
    en: top => `Why the jump at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi le saut à ${top} ?`,
  },
  topBody: {
    en: top => `Under 25, wages up to the July 2025 average (${top}) are free of SZJA. Above it, each extra forint pays the 15% SZJA on top of the 18.5% TB.`,
    nl: top => `Onder de 25 jaar is loon tot het gemiddelde van juli 2025 (${top}) vrij van SZJA. Daarboven betaalt elke extra forint 15% SZJA bovenop de 18,5% TB.`,
    fr: top => `Avant 25 ans, le salaire jusqu'à la moyenne de juillet 2025 (${top}) est exonéré de SZJA. Au-delà, chaque forint en plus paie 15% de SZJA en plus des 18,5% de TB.`,
  },

  // Tax components
  'comp.er': { en: `Social contribution tax (SZOCHO)`, nl: `Sociale bijdrage (SZOCHO)`, fr: `Contribution sociale (SZOCHO)` },
  'comp.ee': { en: `Social security contribution (TB)`, nl: `Socialezekerheidsbijdrage (TB)`, fr: `Cotisation de sécurité sociale (TB)` },
  'comp.ir': { en: `Personal income tax (SZJA)`, nl: `Personenbelasting (SZJA)`, fr: `Impôt sur le revenu (SZJA)` },
  'comp.fam': { en: `Family allowance`, nl: `Gezinskorting`, fr: `Réduction familiale` },
  famReceived: { en: `+ Family allowance used`, nl: `+ Gebruikte gezinskorting`, fr: `+ Réduction familiale utilisée` },
  famLost: { en: `Family allowance your pay costs the household`, nl: `Gezinskorting die je loon het gezin kost`, fr: `Réduction familiale que votre salaire fait perdre au foyer` },
  'bd.exempt': { en: `Exempt from SZJA`, nl: `Vrijgesteld van SZJA`, fr: `Exonéré de SZJA` },
  'bd.taxableHu': { en: `Taxable for SZJA`, nl: `Belastbaar voor SZJA`, fr: `Imposable à la SZJA` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the norm in Hungary. Bonuses are taxed like any pay.`,
    nl: `12 maandlonen, de norm in Hongarije. Bonussen worden belast zoals elk loon.`,
    fr: `12 salaires mensuels, la norme en Hongrie. Les primes sont imposées comme tout salaire.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Hungary taxes each person alone. Only the family allowance is shared: the couple can split it, so what one partner can't use, the other can. Here, your share = the allowance the household uses − what it would use if you earned nothing. Your partner is assumed to have no personal exemption.`,
    nl: `Hongarije belast elke persoon apart. Alleen de gezinskorting wordt gedeeld: het koppel mag ze verdelen, dus wat de ene partner niet gebruikt, kan de andere gebruiken. Hier is jouw deel = de korting die het gezin gebruikt − wat het zou gebruiken als jij niets verdiende. Je partner heeft geen persoonlijke vrijstelling.`,
    fr: `La Hongrie impose chaque personne séparément. Seule la réduction familiale est partagée : le couple peut la répartir, ce qu'un conjoint ne peut pas utiliser, l'autre le peut. Ici, votre part = la réduction utilisée par le foyer − celle qu'il utiliserait sans vos revenus. Votre conjoint est supposé sans exonération personnelle.`,
  },
  'tip.reg': {
    en: cap => `Some people pay no SZJA on their wages. Under 25: up to ${cap} a month, the July 2025 average wage. Exempt mothers, with no ceiling: mothers under 30, mothers of two children who are under 40 (rising to everyone by 2029), and mothers of three or more. TB, SZOCHO and VAT are still due.`,
    nl: cap => `Sommige mensen betalen geen SZJA op hun loon. Jonger dan 25: tot ${cap} per maand, het gemiddelde loon van juli 2025. Vrijgestelde moeders, zonder plafond: moeders jonger dan 30, moeders van twee kinderen jonger dan 40 (tegen 2029 voor iedereen) en moeders van drie of meer. TB, SZOCHO en btw blijven verschuldigd.`,
    fr: cap => `Certaines personnes ne paient pas de SZJA sur leur salaire. Moins de 25 ans : jusqu'à ${cap} par mois, le salaire moyen de juillet 2025. Mères exonérées, sans plafond : les mères de moins de 30 ans, les mères de deux enfants de moins de 40 ans (étendu à toutes d'ici 2029) et les mères de trois enfants ou plus. TB, SZOCHO et TVA restent dus.`,
  },
  'tip.costShort': { en: `Gross salary + 13% social contribution tax.`, nl: `Brutoloon + 13% sociale bijdrage.`, fr: `Salaire brut + 13% de contribution sociale.` },
  'tip.er': {
    en: `Paid by your employer on top of your gross salary: 13% of all of it, with no ceiling.`,
    nl: `Betaald door je werkgever bovenop je brutoloon: 13% op alles, zonder plafond.`,
    fr: `Payée par votre employeur en plus de votre salaire brut : 13% de la totalité, sans plafond.`,
  },
  'tip.ee': {
    en: `Withheld from your pay: 18.5% of all of it (10% pension, 7% health, 1.5% labour market), with no ceiling.`,
    nl: `Ingehouden op je loon: 18,5% op alles (10% pensioen, 7% gezondheid, 1,5% arbeidsmarkt), zonder plafond.`,
    fr: `Retenue sur votre paie : 18,5% de la totalité (10% retraite, 7% santé, 1,5% marché du travail), sans plafond.`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − any personal exemption${calc}. TB isn't deductible and there's no tax-free amount.`,
    nl: calc => `Brutoloon − eventuele persoonlijke vrijstelling${calc}. TB is niet aftrekbaar en er is geen belastingvrije som.`,
    fr: calc => `Salaire brut − exonération personnelle éventuelle${calc}. La TB n'est pas déductible et il n'y a pas d'abattement.`,
  },
  'tip.ir': {
    en: `One flat rate of 15% on taxable pay.`,
    nl: `Eén vlak tarief van 15% op het belastbare loon.`,
    fr: `Un taux unique de 15% sur le salaire imposable.`,
  },
  'tip.fam': {
    en: `Parents who get családi pótlék take a monthly amount per child off their taxable income: worth Ft 20,000 a month for one child, Ft 40,000 per child for two, Ft 66,000 per child for three or more. What SZJA can't absorb comes off the 18.5% TB contribution.`,
    nl: `Ouders die családi pótlék krijgen, trekken per kind een maandbedrag af van hun belastbaar inkomen: Ft 20.000 per maand waard voor één kind, Ft 40.000 per kind voor twee, Ft 66.000 per kind voor drie of meer. Wat de SZJA niet opvangt, gaat van de TB-bijdrage van 18,5% af.`,
    fr: `Les parents qui perçoivent le családi pótlék déduisent chaque mois un montant par enfant de leur revenu imposable : 20 000 Ft par mois pour un enfant, 40 000 Ft par enfant pour deux, 66 000 Ft par enfant pour trois ou plus. Ce que la SZJA n'absorbe pas s'impute sur la cotisation TB de 18,5%.`,
  },
  'tip.famBase': { en: n => `Tax base reduction for ${n} child${n > 1 ? 'ren' : ''}, per year`, nl: n => `Vermindering belastbare basis voor ${n} kind${n > 1 ? 'eren' : ''}, per jaar`, fr: n => `Réduction de base pour ${n} enfant${n > 1 ? 's' : ''}, par an` },
  'tip.famValue': { en: `Worth at 15%`, nl: `Waard aan 15%`, fr: `Valeur à 15%` },
  'tip.famUsed': { en: `Used by the household`, nl: `Gebruikt door het gezin`, fr: `Utilisée par le foyer` },
  'tip.famWithout': { en: `Used if you earned nothing`, nl: `Gebruikt als jij niets verdiende`, fr: `Utilisée sans vos revenus` },
  'tip.famYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.famM': {
    en: `Doubled in two steps (July 2025, January 2026). Családi pótlék itself is paid whatever you earn, so it doesn't change your tax rate and isn't counted.`,
    nl: `Verdubbeld in twee stappen (juli 2025, januari 2026). De családi pótlék zelf wordt betaald ongeacht je loon, dus verandert je belastingtarief niet en telt niet mee.`,
    fr: `Doublée en deux étapes (juillet 2025, janvier 2026). Le családi pótlék lui-même est versé quel que soit le salaire : il ne change pas votre taux et n'est pas compté.`,
  },
  'tip.vatM': {
    en: `Some food, medicines, books and district heating are at 5% or 18%, and rent is exempt, so this is an upper bound.`,
    nl: `Sommige voeding, geneesmiddelen, boeken en stadsverwarming hebben 5% of 18%, en huur is vrijgesteld, dus dit is een bovengrens.`,
    fr: `Certains aliments, médicaments, livres et le chauffage urbain sont à 5% ou 18%, et les loyers exonérés : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − TB − SZJA + the family allowance you use.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − TB − SZJA + de gezinskorting die je gebruikt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − TB − SZJA + la réduction familiale utilisée.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [`Social contribution tax (SZOCHO) <span class="num">13%</span> of gross pay, no ceiling.`] },
    nl: { h: `1 · Werkgever`, li: [`Sociale bijdrage (SZOCHO) <span class="num">13%</span> van het brutoloon, zonder plafond.`] },
    fr: { h: `1 · Employeur`, li: [`Contribution sociale (SZOCHO) <span class="num">13%</span> du salaire brut, sans plafond.`] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contribution`, li: [`TB <span class="num">18.5%</span> of gross pay, no ceiling: pension 10%, health 7%, labour market 1.5%.`] },
    nl: { h: `2 · Werknemersbijdrage`, li: [`TB <span class="num">18,5%</span> van het brutoloon, zonder plafond: pensioen 10%, gezondheid 7%, arbeidsmarkt 1,5%.`] },
    fr: { h: `2 · Cotisation salariale`, li: [`TB <span class="num">18,5%</span> du salaire brut, sans plafond : retraite 10%, santé 7%, marché du travail 1,5%.`] },
  },
  'ref.ir': {
    en: { h: `3 · Personal income tax`, li: [`SZJA <span class="num">15%</span> on all wage income, no tax-free amount, no brackets.`] },
    nl: { h: `3 · Personenbelasting`, li: [`SZJA <span class="num">15%</span> op het hele loon, geen belastingvrije som, geen schijven.`] },
    fr: { h: `3 · Impôt sur le revenu`, li: [`SZJA <span class="num">15%</span> sur tout le salaire, sans abattement ni tranches.`] },
  },
  'ref.exempt': {
    en: { h: `4 · Personal exemptions from SZJA`, li: [
      `Under 25: wages up to <span class="num">Ft 715,765</span> a month.`,
      `Mothers under 30, mothers of two under 40, mothers of three or more: all wages, no ceiling. TB still applies.`,
    ] },
    nl: { h: `4 · Persoonlijke vrijstellingen van SZJA`, li: [
      `Jonger dan 25: loon tot <span class="num">Ft 715.765</span> per maand.`,
      `Moeders jonger dan 30, moeders van twee jonger dan 40, moeders van drie of meer: het hele loon, zonder plafond. TB blijft verschuldigd.`,
    ] },
    fr: { h: `4 · Exonérations personnelles de SZJA`, li: [
      `Moins de 25 ans : salaire jusqu'à <span class="num">715 765 Ft</span> par mois.`,
      `Mères de moins de 30 ans, mères de deux enfants de moins de 40 ans, mères de trois enfants ou plus : tout le salaire, sans plafond. La TB reste due.`,
    ] },
  },
  'ref.fam': {
    en: { h: `5 · Family allowance`, li: [
      `Monthly tax base reduction per child: <span class="num">Ft 133,340</span> with one child, <span class="num">Ft 266,660</span> each with two, <span class="num">Ft 440,000</span> each with three or more.`,
      `Taken off SZJA, then off TB. Shared freely between partners.`,
    ] },
    nl: { h: `5 · Gezinskorting`, li: [
      `Maandelijkse vermindering van de belastbare basis per kind: <span class="num">Ft 133.340</span> met één kind, <span class="num">Ft 266.660</span> elk met twee, <span class="num">Ft 440.000</span> elk met drie of meer.`,
      `Eerst van de SZJA, daarna van de TB af. Vrij te verdelen tussen partners.`,
    ] },
    fr: { h: `5 · Réduction familiale`, li: [
      `Réduction mensuelle de la base par enfant : <span class="num">133 340 Ft</span> avec un enfant, <span class="num">266 660 Ft</span> chacun avec deux, <span class="num">440 000 Ft</span> chacun avec trois ou plus.`,
      `Imputée sur la SZJA, puis sur la TB. Librement partagée entre conjoints.`,
    ] },
  },
  'ref.vat': {
    en: { h: `6 · VAT on spending`, li: [
      `Standard rate <span class="num">27%</span>, the highest in the EU, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × r / (100 + r): at 27% that's 27 / 127 = <span class="num">21.26%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">27%</span>, het hoogste van de EU, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 27% is dat 27 / 127 = <span class="num">21,26%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">27%</span>, le plus élevé de l'UE, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 27%, cela fait 27 / 127 = <span class="num">21,26%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and Parliament`, li: [
      `MP base pay <span class="num">Ft 1,309,493</span> a month since July 2026. Prime Minister <span class="num">Ft 3,810,625</span> from October 2026. Ministers 3.5 million Ft, or 2 million Ft + MP pay; state secretaries about 3 million Ft.`,
      `Taxed like any salary.`,
    ] },
    nl: { h: `7 · Regering en parlement`, li: [
      `Basisloon parlementslid <span class="num">Ft 1.309.493</span> per maand sinds juli 2026. Premier <span class="num">Ft 3.810.625</span> vanaf oktober 2026. Ministers Ft 3,5 miljoen, of Ft 2 miljoen + parlementsloon; staatssecretarissen ongeveer Ft 3 miljoen.`,
      `Belast zoals elk loon.`,
    ] },
    fr: { h: `7 · Gouvernement et Parlement`, li: [
      `Indemnité de base d'un député <span class="num">1 309 493 Ft</span> par mois depuis juillet 2026. Premier ministre <span class="num">3 810 625 Ft</span> depuis octobre 2026. Ministres 3,5 millions Ft, ou 2 millions Ft + l'indemnité de député ; secrétaires d'État environ 3 millions Ft.`,
      `Imposés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Családi pótlék (paid whatever you earn), the newlyweds' allowance, the disability allowance, SZOCHO reliefs for some hires, and the higher allowance for a child with a long-term illness.`,
      `The 2027 budget bill (9% SZJA on the minimum wage, doubled családi pótlék) isn't law yet. Figures are the year's tax, assuming even monthly pay.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Családi pótlék (betaald ongeacht je loon), de korting voor jonggehuwden, de korting voor personen met een handicap, SZOCHO-kortingen voor sommige aanwervingen en de hogere korting voor een langdurig ziek kind.`,
      `Het begrotingsontwerp 2027 (9% SZJA op het minimumloon, verdubbelde családi pótlék) is nog geen wet. De bedragen zijn de belasting voor het jaar, met een gelijk maandloon.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Le családi pótlék (versé quel que soit le salaire), la réduction des jeunes mariés, la réduction pour handicap, les allègements de SZOCHO pour certaines embauches et la majoration pour un enfant atteint d'une maladie de longue durée.`,
      `Le projet de budget 2027 (SZJA à 9% sur le salaire minimum, családi pótlék doublé) n'est pas encore voté. Les montants sont l'impôt de l'année, pour un salaire mensuel régulier.`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance, by relationship →`,
    nl: `Wat een erfgenaam betaalt op een erfenis, volgens verwantschap →`,
    fr: `Ce que paie un héritier sur une succession, selon le lien →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and NAV decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en de NAV zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et la NAV font foi.`,
  },

  'src.szja': { en: `NAV: personal income tax`, nl: `NAV: personenbelasting`, fr: `NAV : impôt sur le revenu` },
  'src.tb': { en: `Adózóna: contributions 2026`, nl: `Adózóna: bijdragen 2026`, fr: `Adózóna : cotisations 2026` },
  'src.szocho': { en: `Novitax: SZOCHO 2026`, nl: `Novitax: SZOCHO 2026`, fr: `Novitax : SZOCHO 2026` },
  'src.fam': { en: `BDO: family allowances 2026`, nl: `BDO: gezinskortingen 2026`, fr: `BDO : réductions familiales 2026` },
  'src.famJar': { en: `NAV: family allowance next to the exemption`, nl: `NAV: gezinskorting naast de vrijstelling`, fr: `NAV : réduction familiale avec l'exonération` },
  'src.u25': { en: `NAV: under-25 exemption`, nl: `NAV: vrijstelling onder 25`, fr: `NAV : exonération des moins de 25 ans` },
  'src.mothers': { en: `NAV: mothers of two under 40`, nl: `NAV: moeders van twee onder 40`, fr: `NAV : mères de deux enfants de moins de 40 ans` },
  'src.mothers30': { en: `Adózóna: mothers under 30, no ceiling`, nl: `Adózóna: moeders onder 30, zonder plafond`, fr: `Adózóna : mères de moins de 30 ans, sans plafond` },
  'src.minWage': { en: `Eduline: minimum wage 2026`, nl: `Eduline: minimumloon 2026`, fr: `Eduline : salaire minimum 2026` },
  'src.ksh': { en: `KSH via Eduline: median wage`, nl: `KSH via Eduline: mediaanloon`, fr: `KSH via Eduline : salaire médian` },
  'src.vat': { en: `NAV: VAT`, nl: `NAV: btw`, fr: `NAV : TVA` },
  'src.govPay': { en: `Telex: government pay`, nl: `Telex: regeringslonen`, fr: `Telex : salaires du gouvernement` },
  'src.pmPay': { en: `Index: the Prime Minister's pay`, nl: `Index: loon van de premier`, fr: `Index : salaire du Premier ministre` },
  'src.mpPay': { en: `VG: MPs' pay`, nl: `VG: parlementsloon`, fr: `VG : indemnité des députés` },
  'src.budget27': { en: `Daily News Hungary: 2027 budget bill`, nl: `Daily News Hungary: begrotingsontwerp 2027`, fr: `Daily News Hungary : projet de budget 2027` },
};
