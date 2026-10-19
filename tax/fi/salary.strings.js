window.TAX_STRINGS = {
  title: { en: `Finnish Buying Power`, nl: `Finse koopkracht`, fr: `Pouvoir d'achat en Finlande` },
  eyebrow: { en: `Finland · income year 2026 · private-sector employee`, nl: `Finland · inkomstenjaar 2026 · werknemer in de privésector`, fr: `Finlande · revenus 2026 · salarié du privé` },
  eyebrowMinister: { en: `Finland · income year 2026 · member of government`, nl: `Finland · inkomstenjaar 2026 · regeringslid`, fr: `Finlande · revenus 2026 · membre du gouvernement` },
  lead: {
    en: `Every tax on a Finnish salary in 2026, from what your employer pays to what you can buy. Mainland Finland and Åland.`,
    nl: `Alle belastingen op een Fins loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Het Finse vasteland en Åland.`,
    fr: `Tous les prélèvements sur un salaire finlandais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Finlande continentale et Åland.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: { en: `Spouses are taxed separately in Finland: your partner's pay doesn't change your tax.`, nl: `Partners worden in Finland apart belast: het loon van je partner verandert jouw belasting niet.`, fr: `En Finlande, les conjoints sont imposés séparément : le salaire de votre conjoint ne change pas votre impôt.` },
  partsHint: {
    en: (one, two) => `Each child under 18 raises your work income deduction by ${one}, ${two} for a single parent.`,
    nl: (one, two) => `Elk kind jonger dan 18 verhoogt je aftrek op arbeidsinkomen met ${one}, ${two} voor een alleenstaande ouder.`,
    fr: (one, two) => `Chaque enfant de moins de 18 ans augmente votre déduction sur les revenus du travail de ${one}, ${two} pour un parent seul.`,
  },
  cadre: { en: `Church member (parish tax)`, nl: `Lid van de kerk (kerkbelasting)`, fr: `Membre de l'Église (impôt paroissial)` },
  commune: { en: `Municipality`, nl: `Gemeente`, fr: `Commune` },
  communesError: {
    en: `Couldn't load the municipality list (communes.js next to this page). Set the rate by hand below.`,
    nl: `Kon de lijst met gemeenten niet laden (communes.js naast deze pagina). Stel het tarief hieronder zelf in.`,
    fr: `Impossible de charger la liste des communes (communes.js à côté de cette page). Réglez le taux à la main ci-dessous.`,
  },
  communeHint: {
    en: (m, ch, orth) => `Municipal tax ${m} · Lutheran parish ${ch}, Orthodox ${orth}`,
    nl: (m, ch, orth) => `Gemeentebelasting ${m} · lutherse parochie ${ch}, orthodoxe ${orth}`,
    fr: (m, ch, orth) => `Impôt communal ${m} · paroisse luthérienne ${ch}, orthodoxe ${orth}`,
  },
  communeHintAx: {
    en: (m, ch, orth) => `Åland: its own state tax scale and basic deduction · municipal tax ${m} · Lutheran parish ${ch}`,
    nl: (m, ch, orth) => `Åland: eigen schalen voor de staatsbelasting en basisaftrek · gemeentebelasting ${m} · lutherse parochie ${ch}`,
    fr: (m, ch, orth) => `Åland : barème d'État et déduction de base propres · impôt communal ${m} · paroisse luthérienne ${ch}`,
  },
  muniLabel: { en: `Municipal tax:`, nl: `Gemeentebelasting:`, fr: `Impôt communal :` },
  vatStandard: { en: `(Finnish standard rate is 25.5%)`, nl: `(het Finse normale tarief is 25,5%)`, fr: `(le taux normal finlandais est de 25,5%)` },
  'size.small': { en: `Payroll up to €2.5 M`, nl: `Loonsom tot € 2,5 mln`, fr: `Masse salariale jusqu'à 2,5 M€` },
  'size.big': { en: `Larger payroll`, nl: `Grotere loonsom`, fr: `Masse salariale plus grande` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Government rules: a fee instead of a salary, no unemployment contribution, taxed like a salary.`,
    nl: `Regels voor regeringsleden: een vergoeding in plaats van een loon, geen werkloosheidsbijdrage, belast als een loon.`,
    fr: `Règles des membres du gouvernement : une indemnité plutôt qu'un salaire, pas de cotisation chômage, imposée comme un salaire.`,
  },
  minSalaryHint: {
    en: `Yearly ministerial fee + half the MP fee (ministers are usually MPs). Statutory amount by default.`,
    nl: `Jaarlijkse ministervergoeding + de helft van de vergoeding als parlementslid (ministers zijn meestal parlementslid). Standaard het wettelijke bedrag.`,
    fr: `Indemnité ministérielle annuelle + la moitié de l'indemnité de député (les ministres sont en général députés). Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `A minister's fee equals a deputy speaker's (€11 942 a month) and the Prime Minister's equals the Speaker's (€15 315), both cut by 5% until the end of the term: €11 344.90 and €14 549.25. A minister who is an MP also keeps half the MP fee. Everything is taxed as earned income, with the same deductions as a salary. Not confirmed: the pension contributions on the fees, taken here as the public-sector pension at the private rates (7.30% for them, about 17.55% for the State), and the State's sickness insurance contribution.`,
    nl: `De vergoeding van een minister is gelijk aan die van een vicevoorzitter van het parlement (€ 11.942 per maand) en die van de premier aan die van de voorzitter (€ 15.315), beide tot het einde van de regeerperiode met 5% verlaagd: € 11.344,90 en € 14.549,25. Een minister die ook parlementslid is, houdt de helft van die vergoeding. Alles wordt belast als arbeidsinkomen, met dezelfde aftrekken als een loon. Niet bevestigd: de pensioenbijdragen op de vergoedingen, hier genomen als het overheidspensioen aan de privétarieven (7,30% voor hen, ongeveer 17,55% voor de staat), en de ziektebijdrage van de staat.`,
    fr: `L'indemnité d'un ministre est celle d'un vice-président de l'Eduskunta (11 942 € par mois) et celle du Premier ministre celle du président (15 315 €), toutes deux réduites de 5% jusqu'à la fin de la législature : 11 344,90 € et 14 549,25 €. Un ministre député garde la moitié de son indemnité de député. Tout est imposé comme un revenu du travail, avec les mêmes déductions qu'un salaire. Non confirmé : les cotisations retraite sur ces indemnités, prises ici au régime public aux taux du privé (7,30% pour eux, environ 17,55% pour l'État), et la cotisation maladie de l'État.`,
  },
  'bd.minGross': { en: `Taxable fees (minister + half MP fee)`, nl: `Belastbare vergoedingen (minister + halve parlementsvergoeding)`, fr: `Indemnités imposables (ministre + demi-indemnité de député)` },
  'bd.minEr': { en: `State pension and sickness contributions`, nl: `Pensioen- en ziektebijdragen van de staat`, fr: `Cotisations retraite et maladie de l'État` },
  'bd.minEe': { en: `Pension and daily allowance contributions`, nl: `Pensioen- en dagvergoedingsbijdragen`, fr: `Cotisations retraite et indemnités journalières` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The ministerial fee and half the MP fee, both taxable. Ministers have no holiday bonus.`,
    nl: `De ministervergoeding en de helft van de parlementsvergoeding, allebei belastbaar. Ministers hebben geen vakantiegeld.`,
    fr: `L'indemnité ministérielle et la moitié de l'indemnité de député, toutes deux imposables. Pas de prime de vacances.`,
  },
  'tip.stateCost': {
    en: `Fees + the State's pension and sickness contributions. No unemployment or accident insurance for an elected office. The work and full tax rates are measured against it.`,
    nl: `Vergoedingen + de pensioen- en ziektebijdragen van de staat. Geen werkloosheids- of ongevallenverzekering voor een verkozen ambt. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `Indemnités + cotisations retraite et maladie de l'État. Ni assurance chômage ni accident du travail pour un mandat électif. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },
  'tip.minEr': {
    en: `Assumed: the State pays the average private employer pension rate (17.55%) and the 1.91% sickness insurance contribution. Not confirmed.`,
    nl: `Aangenomen: de staat betaalt het gemiddelde pensioentarief van een privéwerkgever (17,55%) en de ziektebijdrage van 1,91%. Niet bevestigd.`,
    fr: `Hypothèse : l'État paie le taux moyen de retraite d'un employeur privé (17,55%) et la cotisation maladie de 1,91%. Non confirmé.`,
  },
  'tip.minEe': {
    en: `Pension 7.30% and the 0.88% daily allowance charge, deducted from taxable income. No unemployment contribution for an elected office.`,
    nl: `Pensioen 7,30% en de dagvergoedingsbijdrage van 0,88%, aftrekbaar van het belastbaar inkomen. Geen werkloosheidsbijdrage voor een verkozen ambt.`,
    fr: `Retraite 7,30% et cotisation d'indemnités journalières de 0,88%, déductibles du revenu imposable. Pas de cotisation chômage pour un mandat électif.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'stat.speaker': { en: `Speaker of Parliament`, nl: `Voorzitter van het parlement`, fr: `Président de l'Eduskunta` },
  'pol.stat.pm': { en: `Speaker's fee −5% + half the MP fee (12+ years as MP)`, nl: `Vergoeding van de voorzitter −5% + halve parlementsvergoeding (12+ jaar parlementslid)`, fr: `Indemnité du président −5% + demi-indemnité de député (12 ans et plus)` },
  'pol.stat.minister': { en: `Deputy speaker's fee −5% + half the MP fee`, nl: `Vergoeding van een vicevoorzitter −5% + halve parlementsvergoeding`, fr: `Indemnité de vice-président −5% + demi-indemnité de député` },
  'pol.stat.mp': { en: `MP fee, up to 4 years in office (up to €8 393 a month after 12 years)`, nl: `Parlementsvergoeding, tot 4 jaar in functie (tot € 8.393 per maand na 12 jaar)`, fr: `Indemnité de député, jusqu'à 4 ans de mandat (jusqu'à 8 393 € par mois après 12 ans)` },
  'pol.stat.speaker': { en: `Speaker's fee`, nl: `Vergoeding van de voorzitter`, fr: `Indemnité du président` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-owned companies`, nl: `Topmensen van staatsbedrijven`, fr: `Dirigeants d'entreprises publiques` },
  'pol.fortum': { en: `CEO, Fortum (State 51%)`, nl: `CEO, Fortum (staat 51%)`, fr: `PDG de Fortum (État 51%)` },
  'pol.posti': { en: `CEO, Posti (State 66%)`, nl: `CEO, Posti (staat 66%)`, fr: `PDG de Posti (État 66%)` },
  'pol.patria': { en: `CEO, Patria (State 50.1%)`, nl: `CEO, Patria (staat 50,1%)`, fr: `PDG de Patria (État 50,1%)` },
  'pol.finnair': { en: `CEO, Finnair (State 56%)`, nl: `CEO, Finnair (staat 56%)`, fr: `PDG de Finnair (État 56%)` },
  'pol.vr': { en: `CEO, VR Group (State 100%)`, nl: `CEO, VR Group (staat 100%)`, fr: `PDG de VR Group (État 100%)` },
  'pol.veikkaus': { en: `CEO, Veikkaus (State 100%)`, nl: `CEO, Veikkaus (staat 100%)`, fr: `PDG de Veikkaus (État 100%)` },
  'pol.alko': { en: `CEO, Alko (State 100%)`, nl: `CEO, Alko (staat 100%)`, fr: `PDG d'Alko (État 100%)` },
  'polNote.pm': {
    en: `Taxed as earned income with the same deductions as a salary; assumed public-sector pension at the private rates. The head sits at the employee salary with the same net, with your settings; the dot is their actual fee.`,
    nl: `Belast als arbeidsinkomen met dezelfde aftrekken als een loon; aangenomen overheidspensioen aan de privétarieven. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw instellingen; het bolletje is hun echte vergoeding.`,
    fr: `Imposé comme un revenu du travail avec les mêmes déductions qu'un salaire ; retraite publique supposée aux taux du privé. La tête est au salaire d'un salarié au même net, avec vos réglages ; le point est leur vraie indemnité.`,
  },
  'polNote.minister': {
    en: `Taxed as earned income with the same deductions as a salary; assumed public-sector pension at the private rates. The head sits at the employee salary with the same net, with your settings; the dot is their actual fee.`,
    nl: `Belast als arbeidsinkomen met dezelfde aftrekken als een loon; aangenomen overheidspensioen aan de privétarieven. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw instellingen; het bolletje is hun echte vergoeding.`,
    fr: `Imposé comme un revenu du travail avec les mêmes déductions qu'un salaire ; retraite publique supposée aux taux du privé. La tête est au salaire d'un salarié au même net, avec vos réglages ; le point est leur vraie indemnité.`,
  },
  'polNote.mp': {
    en: `Taxed fee, plus a tax-free expense allowance of €987 to €1 809 a month depending on where they live (the lowest is counted). No unemployment contribution. The head sits at the employee salary with the same net.`,
    nl: `Belaste vergoeding, plus een belastingvrije onkostenvergoeding van € 987 tot € 1.809 per maand naargelang hun woonplaats (de laagste telt mee). Geen werkloosheidsbijdrage. Het hoofdje staat bij het werknemersloon met hetzelfde netto.`,
    fr: `Indemnité imposée, plus une indemnité de frais exonérée de 987 € à 1 809 € par mois selon le lieu de résidence (la plus basse est comptée). Pas de cotisation chômage. La tête est au salaire d'un salarié au même net.`,
  },
  'polTipNote.speaker': {
    en: `€15 315 a month × 12, since October 2025.`,
    nl: `€ 15.315 per maand × 12, sinds oktober 2025.`,
    fr: `15 315 € par mois × 12, depuis octobre 2025.`,
  },
  'polTipNote.fortum': {
    en: `2025: fixed pay €100 000 a month (€1.2 M a year); the top of the range adds the short-term incentive of 45.1% of fixed pay. Long-term share plans come on top.`,
    nl: `2025: vast loon € 100.000 per maand (€ 1,2 mln per jaar); de bovenkant van de vork telt de kortetermijnbonus van 45,1% van het vaste loon mee. Langetermijnaandelenplannen komen erbovenop.`,
    fr: `2025 : fixe de 100 000 € par mois (1,2 M€ par an) ; le haut de la fourchette ajoute le bonus de court terme de 45,1% du fixe. Les plans d'actions de long terme s'y ajoutent.`,
  },
  'polTipNote.taxdata': {
    en: `Taxable income for 2024 from the public tax data (published November 2025), as reported by Yle: an approximation of their gross pay, not the contract.`,
    nl: `Belastbaar inkomen over 2024 uit de openbare belastinggegevens (gepubliceerd in november 2025), volgens Yle: een benadering van hun brutoloon, niet het contract.`,
    fr: `Revenu imposable 2024 issu des données fiscales publiques (publiées en novembre 2025), d'après Yle : une approximation de leur salaire brut, pas leur contrat.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ months paid. Members of government and parliament are placed where an employee would earn the same net; the others sit at their gross. Government fees were cut by 5% for the rest of the term (${links}).`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ betaalde maanden. Regerings- en parlementsleden staan waar een werknemer hetzelfde netto zou verdienen; de anderen staan op hun bruto. De regeringsvergoedingen zijn voor de rest van de regeerperiode met 5% verlaagd (${links}).`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ mois payés. Les membres du gouvernement et les députés sont placés là où un salarié gagnerait le même net ; les autres à leur brut. Les indemnités du gouvernement ont été réduites de 5% jusqu'à la fin de la législature (${links}).`,
  },
  'src.pol.pm': { en: `Duunitori: what ministers and MPs earn`, nl: `Duunitori: wat ministers en parlementsleden verdienen`, fr: `Duunitori : ce que gagnent ministres et députés` },
  'src.pol.minister': { en: `Duunitori: what ministers and MPs earn`, nl: `Duunitori: wat ministers en parlementsleden verdienen`, fr: `Duunitori : ce que gagnent ministres et députés` },
  'src.pol.mp': { en: `Verkkouutiset: MP fees from October 2025`, nl: `Verkkouutiset: parlementsvergoedingen vanaf oktober 2025`, fr: `Verkkouutiset : indemnités des députés depuis octobre 2025` },
  'src.pol.speaker': { en: `Verkkouutiset: MP fees from October 2025`, nl: `Verkkouutiset: parlementsvergoedingen vanaf oktober 2025`, fr: `Verkkouutiset : indemnités des députés depuis octobre 2025` },
  'src.pol.fortum': { en: `Fortum: remuneration`, nl: `Fortum: verloning`, fr: `Fortum : rémunération` },
  'src.pol.posti': { en: `Yle: pay of state-company heads`, nl: `Yle: loon van topmensen van staatsbedrijven`, fr: `Yle : revenus des dirigeants d'entreprises publiques` },
  'src.pol.patria': { en: `Yle: pay of state-company heads`, nl: `Yle: loon van topmensen van staatsbedrijven`, fr: `Yle : revenus des dirigeants d'entreprises publiques` },
  'src.pol.finnair': { en: `Yle: pay of state-company heads`, nl: `Yle: loon van topmensen van staatsbedrijven`, fr: `Yle : revenus des dirigeants d'entreprises publiques` },
  'src.pol.vr': { en: `Yle: pay of state-company heads`, nl: `Yle: loon van topmensen van staatsbedrijven`, fr: `Yle : revenus des dirigeants d'entreprises publiques` },
  'src.pol.veikkaus': { en: `Yle: pay of state-company heads`, nl: `Yle: loon van topmensen van staatsbedrijven`, fr: `Yle : revenus des dirigeants d'entreprises publiques` },
  'src.pol.alko': { en: `Yle: pay of state-company heads`, nl: `Yle: loon van topmensen van staatsbedrijven`, fr: `Yle : revenus des dirigeants d'entreprises publiques` },
  polAllow: { en: `Tax-free expense allowance`, nl: `Belastingvrije onkostenvergoeding`, fr: `Indemnité de frais exonérée` },
  bracketTop: { en: `37.5% state bracket`, nl: `staatsschijf van 37,5%`, fr: `tranche d'État à 37,5%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: { en: (a, b) => `Why the jump between ${a} and ${b}?`, nl: (a, b) => `Waarom de sprong tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi le saut entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, work, day) => `Below ${work} the work income deduction grows by 18 cents for each euro of pay and wipes out most of the income tax. From there it stops growing, and from ${day} a year the 0.88% daily allowance charge applies to the whole salary at once. Until ${b} the basic deduction also shrinks by 18 cents per euro of income, so each euro is taxed a little more than the plain rates. Above, rates follow the brackets.`,
    nl: (a, b, work, day) => `Onder ${work} stijgt de aftrek op arbeidsinkomen met 18 cent per euro loon en schrapt die het grootste deel van de inkomstenbelasting. Daarboven groeit hij niet meer, en vanaf ${day} per jaar geldt de dagvergoedingsbijdrage van 0,88% in één keer op het hele loon. Tot ${b} krimpt ook de basisaftrek met 18 cent per euro inkomen, dus elke euro wordt iets zwaarder belast dan de gewone tarieven. Daarboven volgen de tarieven de schijven.`,
    fr: (a, b, work, day) => `Sous ${work}, la déduction sur les revenus du travail augmente de 18 centimes par euro de salaire et efface l'essentiel de l'impôt. Au-delà, elle ne grandit plus, et dès ${day} par an la cotisation d'indemnités journalières de 0,88% s'applique d'un coup à tout le salaire. Jusqu'à ${b}, la déduction de base fond aussi de 18 centimes par euro de revenu : chaque euro est un peu plus taxé que le barème. Au-delà, les taux suivent les tranches.`,
  },
  topTitle: {
    en: top => `Why the step at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi la marche à ${top} ?`,
  },
  topBody: {
    en: (top, _, br) => `From ${top} your taxable income passes ${br}, where the top state bracket of 37.5% starts. With municipal tax and contributions, the next euro is taxed at about 52%, down from up to 59% before 2026. Between €35 000 and €50 550 of income the work income deduction also shrinks by 2%, then stays put.`,
    nl: (top, _, br) => `Vanaf ${top} komt je belastbaar inkomen boven ${br}, waar de hoogste staatsschijf van 37,5% begint. Met gemeentebelasting en bijdragen wordt de volgende euro belast aan ongeveer 52%, tegenover tot 59% vóór 2026. Tussen € 35.000 en € 50.550 inkomen krimpt de aftrek op arbeidsinkomen ook met 2%, daarna niet meer.`,
    fr: (top, _, br) => `À partir de ${top}, votre revenu imposable dépasse ${br} : la tranche d'État à 37,5% commence. Avec l'impôt communal et les cotisations, l'euro suivant est taxé à environ 52%, contre jusqu'à 59% avant 2026. Entre 35 000 € et 50 550 € de revenu, la déduction sur les revenus du travail baisse aussi de 2%, puis se stabilise.`,
  },

  // Tax components
  'comp.er': { en: `Employer contributions`, nl: `Werkgeversbijdragen`, fr: `Cotisations patronales` },
  'comp.ee': { en: `Employee contributions`, nl: `Werknemersbijdragen`, fr: `Cotisations salariales` },
  'comp.state': { en: `State income tax`, nl: `Inkomstenbelasting van de staat`, fr: `Impôt d'État sur le revenu` },
  'comp.muni': { en: `Municipal tax`, nl: `Gemeentebelasting`, fr: `Impôt communal` },
  'comp.church': { en: `Church tax`, nl: `Kerkbelasting`, fr: `Impôt paroissial` },
  'comp.hc': { en: `Health care charge`, nl: `Bijdrage gezondheidszorg`, fr: `Cotisation soins de santé` },
  'comp.yle': { en: `Yle tax (public broadcasting)`, nl: `Yle-belasting (openbare omroep)`, fr: `Taxe Yle (audiovisuel public)` },
  'comp.media': { en: `Åland media fee`, nl: `Mediaheffing van Åland`, fr: `Redevance média d'Åland` },
  'er.pension': { en: `Earnings-related pension (TyEL)`, nl: `Pensioen (TyEL)`, fr: `Retraite (TyEL)` },
  'er.sick': { en: `Sickness insurance`, nl: `Ziekteverzekering`, fr: `Assurance maladie` },
  'er.unemp': { en: `Unemployment insurance`, nl: `Werkloosheidsverzekering`, fr: `Assurance chômage` },
  'er.accident': { en: `Accident insurance (average)`, nl: `Ongevallenverzekering (gemiddelde)`, fr: `Assurance accidents du travail (moyenne)` },
  'er.life': { en: `Group life insurance (average)`, nl: `Groepslevensverzekering (gemiddelde)`, fr: `Assurance vie collective (moyenne)` },
  'ee.pension': { en: `Pension (TyEL)`, nl: `Pensioen (TyEL)`, fr: `Retraite (TyEL)` },
  'ee.unemp': { en: `Unemployment insurance`, nl: `Werkloosheidsverzekering`, fr: `Assurance chômage` },
  'ee.day': { en: `Daily allowance charge`, nl: `Bijdrage dagvergoedingen`, fr: `Cotisation indemnités journalières` },
  'bd.netPay': { en: `Pay after contributions`, nl: `Loon na bijdragen`, fr: `Salaire après cotisations` },
  'bd.deductions': { en: `Income-earning and basic deductions`, nl: `Beroepskosten- en basisaftrek`, fr: `Déductions forfaitaire et de base` },
  'bd.taxable': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.work': { en: `Work income deduction`, nl: `Aftrek op arbeidsinkomen`, fr: `Déduction sur les revenus du travail` },
  'bd.workLine': { en: `Work income deduction, taken off the taxes below`, nl: `Aftrek op arbeidsinkomen, afgetrokken van de belastingen hieronder`, fr: `Déduction sur les revenus du travail, retirée des impôts ci-dessous` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, with no holiday bonus.`,
    nl: `12 maandlonen, zonder vakantiegeld.`,
    fr: `12 salaires mensuels, sans prime de vacances.`,
  },
  'tip.f125': {
    en: `12 months + the holiday bonus (lomaraha), half a month's pay under most collective agreements. Taxed like any pay.`,
    nl: `12 maanden + het vakantiegeld (lomaraha), een half maandloon in de meeste cao's. Belast als elk loon.`,
    fr: `12 mois + la prime de vacances (lomaraha), un demi-mois de salaire dans la plupart des conventions collectives. Imposée comme tout salaire.`,
  },
  'tip.churchToggle': {
    en: avg => `Members of the Lutheran or Orthodox church pay a parish tax of 1 to 2.25% on the same base as municipal tax. Uses your municipality's Lutheran rate (${avg} on average without one). About 6 in 10 Finns are members.`,
    nl: avg => `Leden van de lutherse of orthodoxe kerk betalen een parochiebelasting van 1 tot 2,25% op dezelfde basis als de gemeentebelasting. Gebruikt het lutherse tarief van je gemeente (gemiddeld ${avg} zonder gemeente). Ongeveer 6 op 10 Finnen zijn lid.`,
    fr: avg => `Les membres de l'Église luthérienne ou orthodoxe paient un impôt paroissial de 1 à 2,25% sur la même base que l'impôt communal. Utilise le taux luthérien de votre commune (${avg} en moyenne sans commune). Environ 6 Finlandais sur 10 sont membres.`,
  },
  'tip.jointH': { en: `Separate taxation`, nl: `Afzonderlijke aanslag`, fr: `Imposition séparée` },
  'tip.joint': {
    en: `Finland taxes each spouse alone, so being a couple changes nothing here, except that a single parent gets twice the child increase of the work income deduction.`,
    nl: `Finland belast elke partner afzonderlijk, dus een koppel zijn verandert hier niets, behalve dat een alleenstaande ouder de verhoging voor kinderen van de aftrek op arbeidsinkomen dubbel krijgt.`,
    fr: `La Finlande impose chaque conjoint séparément : être en couple ne change rien ici, sauf qu'un parent seul reçoit le double de la majoration pour enfants de la déduction sur les revenus du travail.`,
  },
  'tip.size': {
    en: `The employer's unemployment insurance is 0.31% on a payroll up to €2 509 500 a year, 1.23% on the part above. For a larger employer, your pay falls in the part above.`,
    nl: `De werkloosheidsbijdrage van de werkgever is 0,31% op een loonsom tot € 2.509.500 per jaar en 1,23% op het deel daarboven. Bij een grotere werkgever valt jouw loon in het deel daarboven.`,
    fr: `La cotisation chômage patronale est de 0,31% sur une masse salariale jusqu'à 2 509 500 € par an, 1,23% au-delà. Chez un employeur plus grand, votre salaire tombe dans la part au-delà.`,
  },
  'tip.muniRule': {
    en: (lo, hi) => `Each municipality sets its own flat tax on earned income, from ${lo} to ${hi}. Mainland rates fell by 12.64 points in 2023 when the wellbeing services counties took over health and social care, and the State raised its tax by the same amount. Åland wasn't part of that reform: its rates stayed high and its residents get a lower state scale instead.`,
    nl: (lo, hi) => `Elke gemeente bepaalt haar eigen vlaktaks op arbeidsinkomen, van ${lo} tot ${hi}. Op het vasteland daalden de tarieven in 2023 met 12,64 punten toen de welzijnsregio's de zorg overnamen, en de staat verhoogde zijn belasting met hetzelfde bedrag. Åland deed niet mee aan die hervorming: de tarieven bleven hoog en de inwoners krijgen een lagere staatsschaal.`,
    fr: (lo, hi) => `Chaque commune fixe son propre impôt proportionnel sur les revenus du travail, de ${lo} à ${hi}. Sur le continent, les taux ont baissé de 12,64 points en 2023 quand les régions de bien-être ont repris la santé et le social, et l'État a relevé son impôt d'autant. Åland n'a pas fait cette réforme : ses taux sont restés élevés et ses habitants ont un barème d'État plus bas.`,
  },
  'tip.costShort': { en: `Gross salary + employer contributions.`, nl: `Brutoloon + werkgeversbijdragen.`, fr: `Salaire brut + cotisations patronales.` },
  'tip.er': {
    en: `Paid by your employer on top of your gross salary, on all of it: there's no ceiling.`,
    nl: `Betaald door je werkgever bovenop je brutoloon, op het hele loon: er is geen plafond.`,
    fr: `Payées par votre employeur en plus de votre salaire brut, sur tout le salaire : il n'y a pas de plafond.`,
  },
  'tip.erM': {
    en: `The pension rate is the 2026 average (24.85% minus your 7.30%); each pension company adds its own fees and rebates. Accident and group life insurance are 2026 averages; they depend on the job's risk and the insurer.`,
    nl: `Het pensioentarief is het gemiddelde van 2026 (24,85% min jouw 7,30%); elke pensioenverzekeraar telt er eigen kosten en kortingen bij. Ongevallen- en groepslevensverzekering zijn gemiddelden van 2026; ze hangen af van het risico van de job en de verzekeraar.`,
    fr: `Le taux de retraite est la moyenne 2026 (24,85% moins vos 7,30%) ; chaque caisse ajoute ses frais et ristournes. Accidents du travail et assurance vie collective sont des moyennes 2026 ; elles dépendent du risque du poste et de l'assureur.`,
  },
  'tip.ee': {
    en: day => `Withheld from your pay and deducted from your taxable income: pension 7.30% at every age since 2026, unemployment 0.89%, and the 0.88% daily allowance charge once your yearly pay reaches ${day}.`,
    nl: day => `Ingehouden op je loon en aftrekbaar van je belastbaar inkomen: pensioen 7,30% op elke leeftijd sinds 2026, werkloosheid 0,89% en de dagvergoedingsbijdrage van 0,88% zodra je jaarloon ${day} bereikt.`,
    fr: day => `Retenues sur votre paie et déductibles du revenu imposable : retraite 7,30% à tout âge depuis 2026, chômage 0,89%, et cotisation d'indemnités journalières de 0,88% dès que votre salaire annuel atteint ${day}.`,
  },
  'tip.netPay': {
    en: `Gross − employee contributions. Income taxes are then withheld from this with your tax card.`,
    nl: `Bruto − werknemersbijdragen. Daarop wordt dan de inkomstenbelasting ingehouden volgens je belastingkaart.`,
    fr: `Brut − cotisations salariales. Les impôts sont ensuite retenus dessus selon votre carte d'impôt.`,
  },
  'tip.deductions': {
    en: (ded, basic) => `The tax office takes off ${ded} for work costs and your contributions, then the basic deduction: up to ${basic}, shrinking by 18% of the income above it. The same base is used for state and municipal tax.`,
    nl: (ded, basic) => `De belastingdienst trekt ${ded} beroepskosten en je bijdragen af, daarna de basisaftrek: tot ${basic}, met 18% van het inkomen daarboven afgebouwd. Dezelfde basis geldt voor de staats- en de gemeentebelasting.`,
    fr: (ded, basic) => `Le fisc déduit ${ded} de frais professionnels et vos cotisations, puis la déduction de base : jusqu'à ${basic}, réduite de 18% du revenu au-delà. La même base sert à l'impôt d'État et à l'impôt communal.`,
  },
  'tip.earnedDed': { en: `Income-earning deduction`, nl: `Aftrek beroepskosten`, fr: `Déduction pour frais professionnels` },
  'tip.netIncome': { en: `Net earned income`, nl: `Netto arbeidsinkomen`, fr: `Revenu net du travail` },
  'tip.basic': { en: `Basic deduction`, nl: `Basisaftrek`, fr: `Déduction de base` },
  'tip.muniBaseAx': { en: `Municipal base (Åland basic deduction)`, nl: `Gemeentelijke basis (basisaftrek Åland)`, fr: `Base communale (déduction de base d'Åland)` },
  'tip.stateShort': {
    en: `Progressive from the first euro, from 12.64% to 37.5%, then reduced by the work income deduction.`,
    nl: `Progressief vanaf de eerste euro, van 12,64% tot 37,5%, daarna verminderd met de aftrek op arbeidsinkomen.`,
    fr: `Progressif dès le premier euro, de 12,64% à 37,5%, puis réduit par la déduction sur les revenus du travail.`,
  },
  'tip.stateM': {
    en: `Scale for 2026 income, enacted in December 2025 (HE 98/2025).`,
    nl: `Schaal voor het inkomen 2026, aangenomen in december 2025 (HE 98/2025).`,
    fr: `Barème des revenus 2026, adopté en décembre 2025 (HE 98/2025).`,
  },
  'tip.stateAx': {
    en: `Åland residents use their own state scale (tax act 124 § 5), with nothing due up to €22 000.`,
    nl: `Inwoners van Åland gebruiken een eigen staatsschaal (belastingwet 124 § 5), met niets verschuldigd tot € 22.000.`,
    fr: `Les habitants d'Åland ont leur propre barème d'État (loi fiscale, 124 § 5), sans impôt jusqu'à 22 000 €.`,
  },
  'tip.stateBefore': { en: `State tax before the deduction`, nl: `Staatsbelasting vóór de aftrek`, fr: `Impôt d'État avant la déduction` },
  'tip.yours': { en: `Your state tax`, nl: `Jouw staatsbelasting`, fr: `Votre impôt d'État` },
  'tip.work': {
    en: (max, child, lo, hi) => `18% of your pay, at most ${max} + ${child} per child under 18 (double for a single parent). It shrinks by 2% of your income between ${lo} and ${hi}, then stays. It comes off the state tax first, and what's left off the municipal tax, church tax and health care charge in proportion.`,
    nl: (max, child, lo, hi) => `18% van je loon, hoogstens ${max} + ${child} per kind jonger dan 18 (dubbel voor een alleenstaande ouder). Hij krimpt met 2% van je inkomen tussen ${lo} en ${hi} en blijft daarna gelijk. Hij gaat eerst af van de staatsbelasting, het restant evenredig van de gemeentebelasting, kerkbelasting en bijdrage gezondheidszorg.`,
    fr: (max, child, lo, hi) => `18% de votre salaire, au plus ${max} + ${child} par enfant de moins de 18 ans (le double pour un parent seul). Elle baisse de 2% du revenu entre ${lo} et ${hi}, puis reste stable. Elle s'impute d'abord sur l'impôt d'État, le reste sur l'impôt communal, l'impôt paroissial et la cotisation santé au prorata.`,
  },
  'tip.workMax': { en: max => `at most ${max}`, nl: max => `hoogstens ${max}`, fr: max => `au plus ${max}` },
  'tip.workState': { en: `Taken off the state tax`, nl: `Afgetrokken van de staatsbelasting`, fr: `Imputé sur l'impôt d'État` },
  'tip.workOthers': { en: `Taken off the other income taxes`, nl: `Afgetrokken van de andere inkomstenbelastingen`, fr: `Imputé sur les autres impôts` },
  'tip.workUnused': { en: `Left unused (no tax to take it from)`, nl: `Onbenut (geen belasting om van af te trekken)`, fr: `Non utilisé (pas d'impôt sur lequel l'imputer)` },
  'tip.afterWork': { en: `after the work income deduction`, nl: `na de aftrek op arbeidsinkomen`, fr: `après la déduction sur les revenus du travail` },
  'tip.muni': {
    en: `Your municipality's flat rate on taxable income. It funds schools, daycare and local services.`,
    nl: `Het vlakke tarief van je gemeente op het belastbaar inkomen. Het financiert scholen, kinderopvang en lokale diensten.`,
    fr: `Le taux proportionnel de votre commune sur le revenu imposable. Il finance écoles, crèches et services locaux.`,
  },
  'tip.church': {
    en: `Only for church members, on the same base as municipal tax, at your parish's rate.`,
    nl: `Alleen voor kerkleden, op dezelfde basis als de gemeentebelasting, aan het tarief van je parochie.`,
    fr: `Seulement pour les membres de l'Église, sur la même base que l'impôt communal, au taux de votre paroisse.`,
  },
  'tip.hc': {
    en: `Part of the sickness insurance contribution, charged with your income taxes on the municipal tax base.`,
    nl: `Een deel van de ziekteverzekeringsbijdrage, geïnd met je inkomstenbelasting op de basis van de gemeentebelasting.`,
    fr: `Une part de la cotisation d'assurance maladie, prélevée avec vos impôts sur la base de l'impôt communal.`,
  },
  'tip.yle': {
    en: (lo, max) => `Funds the public broadcaster: 2.5% of your income above ${lo}, at most ${max} a year.`,
    nl: (lo, max) => `Financiert de openbare omroep: 2,5% van je inkomen boven ${lo}, hoogstens ${max} per jaar.`,
    fr: (lo, max) => `Finance l'audiovisuel public : 2,5% du revenu au-delà de ${lo}, au plus ${max} par an.`,
  },
  'tip.media': {
    en: (lo, max, fee, axLo) => `On Åland the Yle tax is replaced by a flat media fee of ${fee} once your income is above ${axLo}.`,
    nl: (lo, max, fee, axLo) => `Op Åland vervangt een vaste mediaheffing van ${fee} de Yle-belasting zodra je inkomen boven ${axLo} ligt.`,
    fr: (lo, max, fee, axLo) => `À Åland, la taxe Yle est remplacée par une redevance média forfaitaire de ${fee} dès que le revenu dépasse ${axLo}.`,
  },
  'tip.vatM': {
    en: `The 13.5% and 10% rates (food, restaurants, medicines, books, transport) and VAT-free spending such as rent are left out, so this is an upper bound.`,
    nl: `De tarieven van 13,5% en 10% (voeding, restaurants, geneesmiddelen, boeken, vervoer) en btw-vrije uitgaven zoals huur zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Les taux de 13,5% et 10% (alimentation, restauration, médicaments, livres, transports) et les dépenses sans TVA comme le loyer ne sont pas pris en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − contributions − income taxes.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − bijdragen − inkomstenbelastingen.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisations − impôts sur le revenu.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026 (assessed in 2027)`,
    nl: `Gebruikte regels · inkomstenjaar 2026 (aanslag in 2027)`,
    fr: `Règles utilisées · revenus 2026 (imposés en 2027)`,
  },
  'ref.er': {
    en: { h: `1 · Employer contributions`, li: [
      `Pension (TyEL) <span class="num">17.55%</span> on average (24.85% total minus the employee's 7.30%), sickness insurance <span class="num">1.91%</span>.`,
      `Unemployment <span class="num">0.31%</span> on a payroll up to €2 509 500, <span class="num">1.23%</span> above. Accident insurance <span class="num">0.51%</span> and group life <span class="num">0.06%</span> on average.`,
    ] },
    nl: { h: `1 · Werkgeversbijdragen`, li: [
      `Pensioen (TyEL) gemiddeld <span class="num">17,55%</span> (24,85% in totaal min 7,30% van de werknemer), ziekteverzekering <span class="num">1,91%</span>.`,
      `Werkloosheid <span class="num">0,31%</span> op een loonsom tot € 2.509.500, <span class="num">1,23%</span> daarboven. Ongevallenverzekering gemiddeld <span class="num">0,51%</span> en groepsleven <span class="num">0,06%</span>.`,
    ] },
    fr: { h: `1 · Cotisations patronales`, li: [
      `Retraite (TyEL) <span class="num">17,55%</span> en moyenne (24,85% au total moins les 7,30% du salarié), assurance maladie <span class="num">1,91%</span>.`,
      `Chômage <span class="num">0,31%</span> sur une masse salariale jusqu'à 2 509 500 €, <span class="num">1,23%</span> au-delà. Accidents du travail <span class="num">0,51%</span> et assurance vie collective <span class="num">0,06%</span> en moyenne.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [
      `Pension <span class="num">7.30%</span> at every age (the 53 to 62 surcharge ended in 2026), unemployment <span class="num">0.89%</span>, daily allowance <span class="num">0.88%</span> from €17 255 a year.`,
      `All three are deducted from taxable income. Health care charge <span class="num">1.10%</span> of the municipal tax base.`,
    ] },
    nl: { h: `2 · Werknemersbijdragen`, li: [
      `Pensioen <span class="num">7,30%</span> op elke leeftijd (de toeslag voor 53 tot 62 jaar verviel in 2026), werkloosheid <span class="num">0,89%</span>, dagvergoeding <span class="num">0,88%</span> vanaf € 17.255 per jaar.`,
      `Alle drie zijn aftrekbaar van het belastbaar inkomen. Bijdrage gezondheidszorg <span class="num">1,10%</span> van de basis van de gemeentebelasting.`,
    ] },
    fr: { h: `2 · Cotisations salariales`, li: [
      `Retraite <span class="num">7,30%</span> à tout âge (la majoration des 53 à 62 ans a pris fin en 2026), chômage <span class="num">0,89%</span>, indemnités journalières <span class="num">0,88%</span> dès 17 255 € par an.`,
      `Les trois sont déductibles du revenu imposable. Cotisation soins de santé <span class="num">1,10%</span> de la base de l'impôt communal.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `3 · State income tax`, li: [
      `Pay − €750 income-earning deduction − contributions − basic deduction (up to <span class="num">€4 265</span>, −18% of income above).`,
      `State scale for 2026:${br}`,
      `The municipal earned income allowance was abolished in 2025: state and municipal tax now share one base.`,
    ] }),
    nl: br => ({ h: `3 · Inkomstenbelasting van de staat`, li: [
      `Loon − € 750 aftrek beroepskosten − bijdragen − basisaftrek (tot <span class="num">€ 4.265</span>, −18% van het inkomen daarboven).`,
      `Staatsschaal 2026:${br}`,
      `De gemeentelijke aftrek op arbeidsinkomen is in 2025 afgeschaft: staats- en gemeentebelasting delen nu één basis.`,
    ] }),
    fr: br => ({ h: `3 · Impôt d'État sur le revenu`, li: [
      `Salaire − 750 € de frais professionnels − cotisations − déduction de base (jusqu'à <span class="num">4 265 €</span>, −18% du revenu au-delà).`,
      `Barème d'État 2026 :${br}`,
      `La déduction communale sur les revenus du travail a été supprimée en 2025 : impôt d'État et impôt communal ont désormais la même base.`,
    ] }),
  },
  'ref.work': {
    en: { h: `4 · Work income deduction`, li: [
      `<span class="num">18%</span> of pay, at most <span class="num">€3 430</span> + €105 per child under 18 (€210 for a single parent).`,
      `−2% of net income between €35 000 and €50 550, no further cut above. Taken off the state tax first, then the other income taxes.`,
    ] },
    nl: { h: `4 · Aftrek op arbeidsinkomen`, li: [
      `<span class="num">18%</span> van het loon, hoogstens <span class="num">€ 3.430</span> + € 105 per kind jonger dan 18 (€ 210 voor een alleenstaande ouder).`,
      `−2% van het netto-inkomen tussen € 35.000 en € 50.550, daarboven niet verder. Eerst van de staatsbelasting, daarna van de andere inkomstenbelastingen.`,
    ] },
    fr: { h: `4 · Déduction sur les revenus du travail`, li: [
      `<span class="num">18%</span> du salaire, au plus <span class="num">3 430 €</span> + 105 € par enfant de moins de 18 ans (210 € pour un parent seul).`,
      `−2% du revenu net entre 35 000 € et 50 550 €, pas au-delà. Imputée d'abord sur l'impôt d'État, puis sur les autres impôts.`,
    ] },
  },
  'ref.muni': {
    en: { h: `5 · Municipal, church and Yle tax`, li: [
      `All 308 municipalities and their Lutheran and Orthodox parish rates for 2026, from the Tax Administration's decision of 18 November 2025. Mainland municipal rates <span class="num">4.70%</span> (Kauniainen) to <span class="num">10.90%</span> (Pomarkku), average 7.57%.`,
      `Yle tax <span class="num">2.5%</span> of income above €15 150, at most €160.`,
    ] },
    nl: { h: `5 · Gemeente-, kerk- en Yle-belasting`, li: [
      `Alle 308 gemeenten met hun lutherse en orthodoxe parochietarieven voor 2026, uit de beslissing van de belastingdienst van 18 november 2025. Gemeentetarieven op het vasteland van <span class="num">4,70%</span> (Kauniainen) tot <span class="num">10,90%</span> (Pomarkku), gemiddeld 7,57%.`,
      `Yle-belasting <span class="num">2,5%</span> van het inkomen boven € 15.150, hoogstens € 160.`,
    ] },
    fr: { h: `5 · Impôts communal, paroissial et Yle`, li: [
      `Les 308 communes et leurs taux paroissiaux luthériens et orthodoxes pour 2026, d'après la décision de l'administration fiscale du 18 novembre 2025. Taux communaux continentaux de <span class="num">4,70%</span> (Kauniainen) à <span class="num">10,90%</span> (Pomarkku), moyenne 7,57%.`,
      `Taxe Yle <span class="num">2,5%</span> du revenu au-delà de 15 150 €, au plus 160 €.`,
    ] },
  },
  'ref.aland': {
    en: { h: `6 · Åland`, li: [
      `Own state scale: nothing to €22 000, then 6.36%, 17.61%, 20.61% and <span class="num">24.86%</span> above €52 100. Municipal rates 17% to 19.7%.`,
      `Municipal basic deduction <span class="num">€3 925</span>, −8.4% above. Media fee €128 instead of the Yle tax above €14 000 of income. Other local deductions (commuting, students, disability) are left out.`,
    ] },
    nl: { h: `6 · Åland`, li: [
      `Eigen staatsschaal: niets tot € 22.000, daarna 6,36%, 17,61%, 20,61% en <span class="num">24,86%</span> boven € 52.100. Gemeentetarieven 17% tot 19,7%.`,
      `Gemeentelijke basisaftrek <span class="num">€ 3.925</span>, −8,4% daarboven. Mediaheffing € 128 in plaats van de Yle-belasting boven € 14.000 inkomen. Andere lokale aftrekken (woon-werkverkeer, studenten, handicap) zijn niet meegerekend.`,
    ] },
    fr: { h: `6 · Åland`, li: [
      `Barème d'État propre : rien jusqu'à 22 000 €, puis 6,36%, 17,61%, 20,61% et <span class="num">24,86%</span> au-delà de 52 100 €. Taux communaux de 17% à 19,7%.`,
      `Déduction de base communale <span class="num">3 925 €</span>, −8,4% au-delà. Redevance média de 128 € au lieu de la taxe Yle au-delà de 14 000 € de revenu. Les autres déductions locales (trajets, étudiants, handicap) ne sont pas prises en compte.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">25.5%</span>, applied to all of your net pay as if you spent it. Use the slider to see other rates.`,
      `VAT inside a price = price × r / (100 + r): at 25.5% that's 25.5 / 125.5 = <span class="num">20.32%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">25,5%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar om andere tarieven te bekijken.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 25,5% is dat 25,5 / 125,5 = <span class="num">20,32%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">25,5%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour voir d'autres taux.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 25,5%, cela fait 25,5 / 125,5 = <span class="num">20,32%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government and parliament`, li: [
      `Prime Minister <span class="num">€14 549.25</span>/month, minister <span class="num">€11 344.90</span>, after the 5% cut, plus half the MP fee for ministers who are MPs.`,
      `MP <span class="num">€7 637</span>/month (€7 944 after 4 years, €8 393 after 12), plus a tax-free expense allowance of €987 to €1 809. Speaker €15 315.`,
    ] },
    nl: { h: `8 · Regering en parlement`, li: [
      `Premier <span class="num">€ 14.549,25</span>/maand, minister <span class="num">€ 11.344,90</span>, na de verlaging met 5%, plus de helft van de parlementsvergoeding voor ministers die parlementslid zijn.`,
      `Parlementslid <span class="num">€ 7.637</span>/maand (€ 7.944 na 4 jaar, € 8.393 na 12), plus een belastingvrije onkostenvergoeding van € 987 tot € 1.809. Voorzitter € 15.315.`,
    ] },
    fr: { h: `8 · Gouvernement et Parlement`, li: [
      `Premier ministre <span class="num">14 549,25 €</span>/mois, ministre <span class="num">11 344,90 €</span>, après la baisse de 5%, plus la moitié de l'indemnité de député pour les ministres députés.`,
      `Député <span class="num">7 637 €</span>/mois (7 944 € après 4 ans, 8 393 € après 12), plus une indemnité de frais exonérée de 987 € à 1 809 €. Président de l'Eduskunta 15 315 €.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Commuting, household and union-fund deductions, the 65+ increase of the work income deduction, fringe benefits, housing allowance and child benefit (paid whatever your income).`,
      `Finland has no legal minimum wage: the floor is set by collective agreements. Figures are your final annual tax, not the withholding on your tax card.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Aftrek voor woon-werkverkeer, huishoudelijke diensten en werkloosheidskas, de verhoging van de aftrek op arbeidsinkomen voor 65-plussers, voordelen in natura, huurtoelage en kinderbijslag (betaald los van je inkomen).`,
      `Finland heeft geen wettelijk minimumloon: de ondergrens staat in cao's. De bedragen zijn je uiteindelijke jaarbelasting, niet de inhouding volgens je belastingkaart.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Déductions pour trajets domicile-travail, services à domicile et caisse de chômage, majoration de la déduction pour les 65 ans et plus, avantages en nature, aide au logement et allocations familiales (versées quel que soit le revenu).`,
      `La Finlande n'a pas de salaire minimum légal : le plancher est fixé par les conventions collectives. Les montants sont votre impôt annuel définitif, pas la retenue de votre carte d'impôt.`,
    ] },
  },

  inheritLink: {
    en: `What you'd pay on what you inherit, by relationship →`,
    nl: `Wat je zou betalen op wat je erft, volgens verwantschap →`,
    fr: `Ce que vous paieriez sur un héritage, selon le lien de parenté →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your actual tax decision decides.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je echte aanslag is bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seule votre décision d'imposition fait foi.`,
  },

  'src.scale': { en: `Veronmaksajat: state tax scale 2026`, nl: `Veronmaksajat: staatsschaal 2026`, fr: `Veronmaksajat : barème d'État 2026` },
  'src.veroperusteet': { en: `Vero: tax bases 2026`, nl: `Vero: belastinggrondslagen 2026`, fr: `Vero : paramètres fiscaux 2026` },
  'src.deductions': { en: `Veronmaksajat: deductions 2026`, nl: `Veronmaksajat: aftrekken 2026`, fr: `Veronmaksajat : déductions 2026` },
  'src.changes': { en: `Veronmaksajat: tax changes 2026`, nl: `Veronmaksajat: belastingwijzigingen 2026`, fr: `Veronmaksajat : changements fiscaux 2026` },
  'src.rates': { en: `Vero: municipal and parish rates 2026`, nl: `Vero: gemeente- en parochietarieven 2026`, fr: `Vero : taux communaux et paroissiaux 2026` },
  'src.kunnat': { en: `Statistics Finland: municipalities 2026`, nl: `Statistics Finland: gemeenten 2026`, fr: `Statistics Finland : communes 2026` },
  'src.aland': { en: `Vero: taxation on Åland`, nl: `Vero: belasting op Åland`, fr: `Vero : fiscalité à Åland` },
  'src.yle': { en: `Vero: Yle tax`, nl: `Vero: Yle-belasting`, fr: `Vero : taxe Yle` },
  'src.social': { en: `Elo: social insurance contributions 2026`, nl: `Elo: sociale bijdragen 2026`, fr: `Elo : cotisations sociales 2026` },
  'src.etk': { en: `ETK: statutory contributions 2026`, nl: `ETK: wettelijke bijdragen 2026`, fr: `ETK : cotisations obligatoires 2026` },
  'src.check': { en: `Veronmaksajat: employee tax rates 2026`, nl: `Veronmaksajat: belastingtarieven werknemers 2026`, fr: `Veronmaksajat : taux d'imposition des salariés 2026` },
  'src.wages': { en: `Statistics Finland: wage structure 2024`, nl: `Statistics Finland: loonstructuur 2024`, fr: `Statistics Finland : structure des salaires 2024` },
  'src.vat': { en: `Vero: VAT rates`, nl: `Vero: btw-tarieven`, fr: `Vero : taux de TVA` },
  'src.govPay': { en: `Duunitori: what ministers and MPs earn`, nl: `Duunitori: wat ministers en parlementsleden verdienen`, fr: `Duunitori : ce que gagnent ministres et députés` },
  'src.govCut': { en: `the government's 5% cut`, nl: `de verlaging met 5% van de regering`, fr: `la baisse de 5% du gouvernement` },
  'src.mpPay': { en: `Verkkouutiset: MP fees`, nl: `Verkkouutiset: parlementsvergoedingen`, fr: `Verkkouutiset : indemnités des députés` },
  'src.ceoPay': { en: `Yle: pay of state-company heads`, nl: `Yle: loon van topmensen van staatsbedrijven`, fr: `Yle : revenus des dirigeants d'entreprises publiques` },
};
