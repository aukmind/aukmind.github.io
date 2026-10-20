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
  coupleHint: { en: `In Finland each partner is taxed on their own pay. Your partner's pay doesn't change your tax.`, nl: `In Finland betaalt ieder belasting op het eigen loon. Het loon van je partner verandert jouw belasting niet.`, fr: `En Finlande, chacun est imposé sur son propre salaire. Le salaire de votre conjoint ne change pas votre impôt.` },
  partsHint: {
    en: (one, two) => `Each child under 18 adds ${one} to your tax discount for working (${two} for a single parent).`,
    nl: (one, two) => `Elk kind jonger dan 18 voegt ${one} toe aan je belastingkorting voor werkenden (${two} voor een alleenstaande ouder).`,
    fr: (one, two) => `Chaque enfant de moins de 18 ans ajoute ${one} à votre réduction d'impôt pour les travailleurs (${two} pour un parent seul).`,
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
    en: (m, ch, orth) => `Åland: its own state tax rates and its own basic tax-free amount · municipal tax ${m} · Lutheran parish ${ch}`,
    nl: (m, ch, orth) => `Åland: eigen tarieven voor de staatsbelasting en een eigen belastingvrij basisbedrag · gemeentebelasting ${m} · lutherse parochie ${ch}`,
    fr: (m, ch, orth) => `Åland : ses propres taux d'impôt d'État et son propre montant de base non imposé · impôt communal ${m} · paroisse luthérienne ${ch}`,
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
    en: `Rules for government members: they get a fee instead of a salary and pay no unemployment insurance. The fee is taxed like a salary.`,
    nl: `Regels voor regeringsleden: ze krijgen een vergoeding in plaats van een loon en betalen geen werkloosheidsverzekering. De vergoeding wordt belast als een loon.`,
    fr: `Règles des membres du gouvernement : ils reçoivent une indemnité au lieu d'un salaire et ne paient pas d'assurance chômage. L'indemnité est imposée comme un salaire.`,
  },
  minSalaryHint: {
    en: `The minister's fee for the year + half the MP fee (ministers are usually MPs). By default, the amount set by law.`,
    nl: `De ministervergoeding voor het jaar + de helft van de parlementsvergoeding (ministers zijn meestal parlementslid). Standaard het bedrag uit de wet.`,
    fr: `L'indemnité de ministre sur l'année + la moitié de l'indemnité de député (les ministres sont en général députés). Par défaut, le montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: `A minister earns the same as a deputy speaker of parliament (€11 942 a month). The Prime Minister earns the same as the Speaker (€15 315). Both are cut by 5% until the end of this government's term: €11 344.90 and €14 549.25. A minister who is also an MP keeps half the MP fee. Everything is taxed like a salary, with the same deductions. Not confirmed: what they pay for pensions (here the private-sector rates: 7.30% for them, about 17.55% for the State), and what the State pays for sickness insurance.`,
    nl: `Een minister verdient evenveel als een vicevoorzitter van het parlement (€ 11.942 per maand). De premier verdient evenveel als de voorzitter (€ 15.315). Beide zijn met 5% verlaagd tot het einde van deze regeerperiode: € 11.344,90 en € 14.549,25. Een minister die ook parlementslid is, houdt de helft van de parlementsvergoeding. Alles wordt belast als een loon, met dezelfde aftrekken. Niet bevestigd: wat ze voor hun pensioen betalen (hier de tarieven van de privésector: 7,30% voor hen, ongeveer 17,55% voor de staat), en wat de staat voor de ziekteverzekering betaalt.`,
    fr: `Un ministre gagne autant qu'un vice-président du Parlement (11 942 € par mois). Le Premier ministre gagne autant que le président (15 315 €). Les deux sont réduits de 5% jusqu'à la fin de la législature : 11 344,90 € et 14 549,25 €. Un ministre qui est aussi député garde la moitié de son indemnité de député. Tout est imposé comme un salaire, avec les mêmes déductions. Non confirmé : ce qu'ils paient pour la retraite (ici, les taux du privé : 7,30% pour eux, environ 17,55% pour l'État), et ce que l'État paie pour l'assurance maladie.`,
  },
  'bd.minGross': { en: `Taxable fees (minister + half MP fee)`, nl: `Belastbare vergoedingen (minister + halve parlementsvergoeding)`, fr: `Indemnités imposables (ministre + demi-indemnité de député)` },
  'bd.minEr': { en: `State pension and sickness contributions`, nl: `Pensioen- en ziektebijdragen van de staat`, fr: `Cotisations retraite et maladie de l'État` },
  'bd.minEe': { en: `Pension and daily allowance contributions`, nl: `Pensioen- en dagvergoedingsbijdragen`, fr: `Cotisations retraite et indemnités journalières` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The minister's fee and half the MP fee, both taxed. Ministers get no holiday bonus.`,
    nl: `De ministervergoeding en de helft van de parlementsvergoeding, allebei belast. Ministers krijgen geen vakantiegeld.`,
    fr: `L'indemnité de ministre et la moitié de l'indemnité de député, toutes deux imposées. Les ministres n'ont pas de prime de vacances.`,
  },
  'tip.stateCost': {
    en: `Fees + what the State pays for their pension and sickness insurance. An elected office has no unemployment or work-accident insurance. The tax rates on work and in total are measured against this amount.`,
    nl: `Vergoedingen + wat de staat betaalt voor hun pensioen en ziekteverzekering. Een verkozen ambt heeft geen werkloosheids- of ongevallenverzekering. De belasting op arbeid en de totale belasting worden aan dit bedrag afgemeten.`,
    fr: `Indemnités + ce que l'État paie pour leur retraite et leur assurance maladie. Un mandat électif n'a ni assurance chômage ni assurance accidents du travail. Les taux de prélèvement sur le travail et au total sont calculés sur ce montant.`,
  },
  'tip.minEr': {
    en: `Our guess: the State pays the average private-employer pension rate (17.55%) and 1.91% for sickness insurance. Not confirmed.`,
    nl: `Onze aanname: de staat betaalt het gemiddelde pensioentarief van een privéwerkgever (17,55%) en 1,91% voor de ziekteverzekering. Niet bevestigd.`,
    fr: `Notre hypothèse : l'État paie le taux de retraite moyen d'un employeur privé (17,55%) et 1,91% pour l'assurance maladie. Non confirmé.`,
  },
  'tip.minEe': {
    en: `Pension 7.30%, and 0.88% that pays for sick and parental leave pay. No income tax is paid on this money. No unemployment insurance for an elected office.`,
    nl: `Pensioen 7,30%, en 0,88% dat ziekte- en ouderschapsuitkeringen betaalt. Op dit geld betaal je geen inkomstenbelasting. Geen werkloosheidsverzekering voor een verkozen ambt.`,
    fr: `Retraite 7,30%, et 0,88% qui paie les indemnités de maladie et de congé parental. Cet argent n'est pas imposé. Pas d'assurance chômage pour un mandat électif.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'stat.speaker': { en: `Speaker of Parliament`, nl: `Voorzitter van het parlement`, fr: `Président de l'Eduskunta` },
  'pol.stat.pm': { en: `Speaker's fee −5% + half the MP fee (MP for 12+ years)`, nl: `Vergoeding van de voorzitter −5% + halve parlementsvergoeding (12+ jaar parlementslid)`, fr: `Indemnité du président −5% + demi-indemnité de député (député depuis 12 ans et plus)` },
  'pol.stat.minister': { en: `Deputy speaker's fee −5% + half the MP fee`, nl: `Vergoeding van een vicevoorzitter −5% + halve parlementsvergoeding`, fr: `Indemnité de vice-président −5% + demi-indemnité de député` },
  'pol.stat.mp': { en: `MP fee, up to 4 years as MP (up to €8 393 a month after 12 years)`, nl: `Parlementsvergoeding, tot 4 jaar parlementslid (tot € 8.393 per maand na 12 jaar)`, fr: `Indemnité de député, jusqu'à 4 ans de mandat (jusqu'à 8 393 € par mois après 12 ans)` },
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
    en: `Taxed like a salary, with the same deductions. We assume they pay into the public pension at private-sector rates. The head marks the employee salary that leaves the same net pay, with your settings. The dot is their real fee.`,
    nl: `Belast als een loon, met dezelfde aftrekken. We nemen aan dat ze aan het overheidspensioen betalen tegen de tarieven van de privésector. Het hoofdje staat bij het werknemersloon dat hetzelfde netto oplevert, met jouw instellingen. Het bolletje is hun echte vergoeding.`,
    fr: `Imposé comme un salaire, avec les mêmes déductions. On suppose qu'ils cotisent à la retraite publique aux taux du privé. La tête marque le salaire d'un salarié qui donne le même net, avec vos réglages. Le point est leur vraie indemnité.`,
  },
  'polNote.minister': {
    en: `Taxed like a salary, with the same deductions. We assume they pay into the public pension at private-sector rates. The head marks the employee salary that leaves the same net pay, with your settings. The dot is their real fee.`,
    nl: `Belast als een loon, met dezelfde aftrekken. We nemen aan dat ze aan het overheidspensioen betalen tegen de tarieven van de privésector. Het hoofdje staat bij het werknemersloon dat hetzelfde netto oplevert, met jouw instellingen. Het bolletje is hun echte vergoeding.`,
    fr: `Imposé comme un salaire, avec les mêmes déductions. On suppose qu'ils cotisent à la retraite publique aux taux du privé. La tête marque le salaire d'un salarié qui donne le même net, avec vos réglages. Le point est leur vraie indemnité.`,
  },
  'polNote.mp': {
    en: `The fee is taxed. On top comes a tax-free allowance for costs of €987 to €1 809 a month, depending on where they live (the lowest is counted). No unemployment insurance. The head marks the employee salary that leaves the same net pay.`,
    nl: `De vergoeding wordt belast. Daarbovenop komt een belastingvrije onkostenvergoeding van € 987 tot € 1.809 per maand, naargelang waar ze wonen (de laagste telt mee). Geen werkloosheidsverzekering. Het hoofdje staat bij het werknemersloon dat hetzelfde netto oplevert.`,
    fr: `L'indemnité est imposée. S'y ajoute une indemnité de frais non imposée de 987 € à 1 809 € par mois, selon leur lieu de vie (la plus basse est comptée). Pas d'assurance chômage. La tête marque le salaire d'un salarié qui donne le même net.`,
  },
  'polTipNote.speaker': {
    en: `€15 315 a month × 12, since October 2025.`,
    nl: `€ 15.315 per maand × 12, sinds oktober 2025.`,
    fr: `15 315 € par mois × 12, depuis octobre 2025.`,
  },
  'polTipNote.fortum': {
    en: `2025: fixed pay of €100 000 a month (€1.2 M a year). The top of the range adds the yearly bonus, 45.1% of fixed pay. Shares given over several years come on top.`,
    nl: `2025: vast loon van € 100.000 per maand (€ 1,2 mln per jaar). De bovenkant telt de jaarlijkse bonus mee, 45,1% van het vaste loon. Aandelen die over meerdere jaren worden gegeven, komen er nog bij.`,
    fr: `2025 : fixe de 100 000 € par mois (1,2 M€ par an). Le haut de la fourchette ajoute le bonus annuel, 45,1% du fixe. Les actions attribuées sur plusieurs années s'y ajoutent.`,
  },
  'polTipNote.taxdata': {
    en: `Their taxed income for 2024, from the tax records Finland makes public (published November 2025), as reported by Yle. It is close to their gross pay, but it's not their contract.`,
    nl: `Hun belast inkomen over 2024, uit de belastinggegevens die Finland openbaar maakt (gepubliceerd in november 2025), volgens Yle. Het ligt dicht bij hun brutoloon, maar het is niet hun contract.`,
    fr: `Leur revenu imposé de 2024, tiré des données fiscales que la Finlande rend publiques (parues en novembre 2025), d'après Yle. C'est proche de leur salaire brut, mais ce n'est pas leur contrat.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. Pay is per year, shown on the chart as the year's pay ÷ months paid. Members of government and parliament sit where an employee would take home the same net pay. The others sit at their gross pay. Government fees were cut by 5% for the rest of the term (${links}).`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Het loon is per jaar, op de grafiek als jaarloon ÷ betaalde maanden. Regerings- en parlementsleden staan waar een werknemer hetzelfde netto zou overhouden. De anderen staan op hun brutoloon. De regeringsvergoedingen zijn voor de rest van de regeerperiode met 5% verlaagd (${links}).`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La rémunération est annuelle, placée sur le graphique en montant de l'année ÷ mois payés. Les membres du gouvernement et du Parlement sont placés là où un salarié toucherait le même net. Les autres sont à leur brut. Les indemnités du gouvernement ont été réduites de 5% jusqu'à la fin de la législature (${links}).`,
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
    en: (a, b, work, day) => `Below ${work}, your tax discount for working grows by 18 cents for each euro you earn, and wipes out most of the income tax. Above that it stops growing. From ${day} a year, a 0.88% charge (for sick and parental leave pay) starts on your whole salary at once. Up to ${b}, the basic tax-free amount also shrinks by 18 cents per euro, so each euro is taxed a bit more than the normal rates. Above that, the normal rates apply.`,
    nl: (a, b, work, day) => `Onder ${work} groeit je belastingkorting voor werkenden met 18 cent per euro die je verdient, en schrapt ze het grootste deel van de inkomstenbelasting. Daarboven groeit ze niet meer. Vanaf ${day} per jaar begint in één keer een bijdrage van 0,88% (voor ziekte- en ouderschapsuitkeringen) op je hele loon. Tot ${b} krimpt ook het belastingvrije basisbedrag met 18 cent per euro, dus elke euro wordt iets zwaarder belast dan de gewone tarieven. Daarboven gelden de gewone tarieven.`,
    fr: (a, b, work, day) => `Sous ${work}, votre réduction d'impôt pour les travailleurs augmente de 18 centimes par euro gagné, et efface l'essentiel de l'impôt. Au-delà, elle n'augmente plus. Dès ${day} par an, une cotisation de 0,88% (pour les indemnités de maladie et de congé parental) s'applique d'un coup à tout le salaire. Jusqu'à ${b}, le montant de base non imposé fond aussi de 18 centimes par euro : chaque euro est un peu plus taxé que les taux normaux. Au-delà, les taux normaux s'appliquent.`,
  },
  topTitle: {
    en: top => `Why the step at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi la marche à ${top} ?`,
  },
  topBody: {
    en: (top, _, br) => `From ${top}, your taxed income goes above ${br}, where the top state tax rate of 37.5% starts. With municipal tax and contributions, about 52 cents of the next euro go to tax, down from up to 59 before 2026. Between €35 000 and €50 550 of income, your tax discount for working also shrinks by 2 cents per euro, then stays the same.`,
    nl: (top, _, br) => `Vanaf ${top} komt je belast inkomen boven ${br}, waar het hoogste staatstarief van 37,5% begint. Met gemeentebelasting en bijdragen gaat zo'n 52 cent van de volgende euro naar belasting, tegenover tot 59 vóór 2026. Tussen € 35.000 en € 50.550 inkomen krimpt je belastingkorting voor werkenden ook met 2 cent per euro, daarna blijft ze gelijk.`,
    fr: (top, _, br) => `À partir de ${top}, votre revenu imposé dépasse ${br}, où commence le taux d'État le plus haut, 37,5%. Avec l'impôt communal et les cotisations, environ 52 centimes de l'euro suivant partent en impôt, contre jusqu'à 59 avant 2026. Entre 35 000 € et 50 550 € de revenu, votre réduction pour les travailleurs baisse aussi de 2 centimes par euro, puis reste stable.`,
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
  'ee.day': { en: `Sick and parental pay charge`, nl: `Bijdrage ziekte- en ouderschapsuitkering`, fr: `Cotisation indemnités maladie et parentales` },
  'bd.netPay': { en: `Pay after contributions`, nl: `Loon na bijdragen`, fr: `Salaire après cotisations` },
  'bd.deductions': { en: `Flat work costs and basic tax-free amount`, nl: `Vaste werkkosten en belastingvrij basisbedrag`, fr: `Frais de travail forfaitaires et montant de base non imposé` },
  'bd.taxable': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.work': { en: `Tax discount for working`, nl: `Belastingkorting voor werkenden`, fr: `Réduction d'impôt pour les travailleurs` },
  'bd.workLine': { en: `Tax discount for working, taken off the taxes below`, nl: `Belastingkorting voor werkenden, afgetrokken van de belastingen hieronder`, fr: `Réduction pour les travailleurs, retirée des impôts ci-dessous` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, with no holiday bonus.`,
    nl: `12 maandlonen, zonder vakantiegeld.`,
    fr: `12 salaires mensuels, sans prime de vacances.`,
  },
  'tip.f125': {
    en: `12 months + the holiday bonus (lomaraha), half a month's pay in most sector agreements. It is taxed like any pay.`,
    nl: `12 maanden + het vakantiegeld (lomaraha), een half maandloon in de meeste cao's. Het wordt belast zoals elk loon.`,
    fr: `12 mois + la prime de vacances (lomaraha), un demi-mois de salaire dans la plupart des conventions collectives. Elle est imposée comme tout salaire.`,
  },
  'tip.churchToggle': {
    en: avg => `Members of the Lutheran or Orthodox church pay a church tax of 1 to 2.25%, on the same income as the municipal tax. We use your municipality's Lutheran rate (${avg} on average if none is picked). About 6 in 10 Finns are members.`,
    nl: avg => `Leden van de lutherse of orthodoxe kerk betalen een kerkbelasting van 1 tot 2,25%, op hetzelfde inkomen als de gemeentebelasting. We gebruiken het lutherse tarief van je gemeente (gemiddeld ${avg} als je er geen kiest). Ongeveer 6 op 10 Finnen zijn lid.`,
    fr: avg => `Les membres de l'Église luthérienne ou orthodoxe paient un impôt d'Église de 1 à 2,25%, sur le même revenu que l'impôt communal. On utilise le taux luthérien de votre commune (${avg} en moyenne si aucune n'est choisie). Environ 6 Finlandais sur 10 sont membres.`,
  },
  'tip.jointH': { en: `Separate taxation`, nl: `Afzonderlijke aanslag`, fr: `Imposition séparée` },
  'tip.joint': {
    en: `In Finland each partner is taxed alone, so being a couple changes nothing here. One exception: a single parent gets twice the extra amount per child in the tax discount for working.`,
    nl: `In Finland wordt ieder apart belast, dus een koppel zijn verandert hier niets. Eén uitzondering: een alleenstaande ouder krijgt het dubbele extra bedrag per kind in de belastingkorting voor werkenden.`,
    fr: `En Finlande, chacun est imposé seul : être en couple ne change rien ici. Une exception : un parent seul reçoit le double du montant par enfant dans la réduction d'impôt pour les travailleurs.`,
  },
  'tip.size': {
    en: `Your employer pays 0.31% for unemployment insurance on the first €2 509 500 of total wages a year, and 1.23% on the rest. At a bigger employer, your pay falls in "the rest".`,
    nl: `Je werkgever betaalt 0,31% voor de werkloosheidsverzekering op de eerste € 2.509.500 aan totale lonen per jaar, en 1,23% op de rest. Bij een grotere werkgever valt jouw loon in "de rest".`,
    fr: `Votre employeur paie 0,31% d'assurance chômage sur les premiers 2 509 500 € de masse salariale par an, et 1,23% sur le reste. Chez un plus grand employeur, votre salaire tombe dans « le reste ».`,
  },
  'tip.muniRule': {
    en: (lo, hi) => `Each municipality sets its own single rate on income from work, from ${lo} to ${hi}. On the mainland, these rates fell by 12.64 points in 2023, when new regions took over health and social care, and the State raised its own tax by the same amount. Åland wasn't part of that change: its rates stayed high, and people there pay a lower state tax instead.`,
    nl: (lo, hi) => `Elke gemeente bepaalt een eigen tarief op inkomen uit werk, van ${lo} tot ${hi}. Op het vasteland daalden die tarieven in 2023 met 12,64 punten, toen nieuwe regio's de zorg overnamen, en de staat verhoogde zijn eigen belasting met hetzelfde bedrag. Åland deed niet mee aan die verandering: de tarieven bleven hoog, en de mensen daar betalen in ruil een lagere staatsbelasting.`,
    fr: (lo, hi) => `Chaque commune fixe son propre taux unique sur les revenus du travail, de ${lo} à ${hi}. Sur le continent, ces taux ont baissé de 12,64 points en 2023, quand de nouvelles régions ont repris la santé et le social, et l'État a relevé son propre impôt d'autant. Åland n'a pas suivi ce changement : ses taux sont restés élevés, et ses habitants paient en échange un impôt d'État plus bas.`,
  },
  'tip.costShort': { en: `Gross salary + what the employer pays on top for social insurance.`, nl: `Brutoloon + wat de werkgever er bovenop betaalt voor sociale verzekering.`, fr: `Salaire brut + ce que l'employeur paie en plus pour les assurances sociales.` },
  'tip.er': {
    en: `Your employer pays these on top of your gross salary, on all of it: there's no upper limit.`,
    nl: `Je werkgever betaalt deze bovenop je brutoloon, op het hele loon: er is geen bovengrens.`,
    fr: `Votre employeur les paie en plus de votre salaire brut, sur tout le salaire : il n'y a pas de plafond.`,
  },
  'tip.erM': {
    en: `The pension rate is the 2026 average (24.85% minus the 7.30% you pay). Each pension company adds its own fees and discounts. Work-accident and group life insurance are 2026 averages; they depend on how risky the job is and on the insurer.`,
    nl: `Het pensioentarief is het gemiddelde van 2026 (24,85% min de 7,30% die jij betaalt). Elke pensioenverzekeraar telt er eigen kosten en kortingen bij. Ongevallen- en groepslevensverzekering zijn gemiddelden van 2026; ze hangen af van hoe riskant het werk is en van de verzekeraar.`,
    fr: `Le taux de retraite est la moyenne 2026 (24,85% moins les 7,30% que vous payez). Chaque caisse ajoute ses frais et remises. Les assurances accidents du travail et vie collective sont des moyennes 2026 ; elles dépendent du risque du poste et de l'assureur.`,
  },
  'tip.ee': {
    en: day => `Taken from your pay, and you pay no tax on this money: pension 7.30% at every age since 2026, unemployment 0.89%, and 0.88% for sick and parental leave pay once your pay for the year reaches ${day}.`,
    nl: day => `Afgehouden van je loon, en op dit geld betaal je geen belasting: pensioen 7,30% op elke leeftijd sinds 2026, werkloosheid 0,89%, en 0,88% voor ziekte- en ouderschapsuitkeringen zodra je jaarloon ${day} bereikt.`,
    fr: day => `Retenu sur votre paie, et cet argent n'est pas imposé : retraite 7,30% à tout âge depuis 2026, chômage 0,89%, et 0,88% pour les indemnités de maladie et de congé parental dès que votre salaire de l'année atteint ${day}.`,
  },
  'tip.netPay': {
    en: `Gross − your contributions. Income taxes are then taken from this, using your tax card (the rate the tax office gives you).`,
    nl: `Bruto − jouw bijdragen. Daarvan gaan dan de inkomstenbelastingen af, volgens je belastingkaart (het tarief dat de belastingdienst je geeft).`,
    fr: `Brut − vos cotisations. Les impôts sont ensuite retenus dessus, selon votre carte d'impôt (le taux que vous donne le fisc).`,
  },
  'tip.deductions': {
    en: (ded, basic) => `The tax office takes off ${ded} for work costs, and your contributions. Then a basic tax-free amount: up to ${basic}, but it shrinks by 18 cents for each euro of income above that. State and municipal tax use the same result.`,
    nl: (ded, basic) => `De belastingdienst trekt ${ded} voor werkkosten af, en je bijdragen. Daarna een belastingvrij basisbedrag: tot ${basic}, maar het krimpt met 18 cent per euro inkomen erboven. De staats- en de gemeentebelasting gebruiken dezelfde uitkomst.`,
    fr: (ded, basic) => `Le fisc retire ${ded} de frais de travail, et vos cotisations. Puis un montant de base non imposé : jusqu'à ${basic}, mais il fond de 18 centimes par euro de revenu au-delà. L'impôt d'État et l'impôt communal partent du même résultat.`,
  },
  'tip.earnedDed': { en: `Flat work costs`, nl: `Vaste werkkosten`, fr: `Frais de travail forfaitaires` },
  'tip.netIncome': { en: `Income from work after costs`, nl: `Inkomen uit werk na kosten`, fr: `Revenu du travail après frais` },
  'tip.basic': { en: `Basic tax-free amount`, nl: `Belastingvrij basisbedrag`, fr: `Montant de base non imposé` },
  'tip.muniBaseAx': { en: `Municipal base (Åland basic tax-free amount)`, nl: `Gemeentelijke basis (belastingvrij basisbedrag Åland)`, fr: `Base communale (montant de base non imposé d'Åland)` },
  'tip.stateShort': {
    en: `Rises with income from the first euro, from 12.64% to 37.5% on each slice. Then your tax discount for working comes off.`,
    nl: `Stijgt met het inkomen vanaf de eerste euro, van 12,64% tot 37,5% per schijf. Daarna gaat je belastingkorting voor werkenden eraf.`,
    fr: `Monte avec le revenu dès le premier euro, de 12,64% à 37,5% par tranche. Puis votre réduction pour les travailleurs est retirée.`,
  },
  'tip.stateM': {
    en: `Rates for 2026 income, passed in December 2025 (HE 98/2025).`,
    nl: `Tarieven voor het inkomen 2026, aangenomen in december 2025 (HE 98/2025).`,
    fr: `Barème des revenus 2026, adopté en décembre 2025 (HE 98/2025).`,
  },
  'tip.stateAx': {
    en: `People on Åland have their own state tax rates (tax act 124 § 5), with nothing to pay up to €22 000.`,
    nl: `Inwoners van Åland hebben eigen tarieven voor de staatsbelasting (belastingwet 124 § 5), met niets te betalen tot € 22.000.`,
    fr: `Les habitants d'Åland ont leurs propres taux d'impôt d'État (loi fiscale, 124 § 5), sans rien à payer jusqu'à 22 000 €.`,
  },
  'tip.stateBefore': { en: `State tax before the discount`, nl: `Staatsbelasting vóór de korting`, fr: `Impôt d'État avant la réduction` },
  'tip.yours': { en: `Your state tax`, nl: `Jouw staatsbelasting`, fr: `Votre impôt d'État` },
  'tip.work': {
    en: (max, child, lo, hi) => `A tax discount for people who work: 18% of your pay, at most ${max}, + ${child} per child under 18 (double for a single parent). It shrinks by 2 cents per euro of income between ${lo} and ${hi}, then stays the same. It comes off the state tax first. What's left comes off the municipal tax, church tax and health charge, in proportion.`,
    nl: (max, child, lo, hi) => `Een belastingkorting voor wie werkt: 18% van je loon, hoogstens ${max}, + ${child} per kind jonger dan 18 (dubbel voor een alleenstaande ouder). Ze krimpt met 2 cent per euro inkomen tussen ${lo} en ${hi}, en blijft daarna gelijk. Ze gaat eerst af van de staatsbelasting. Wat overblijft, gaat evenredig af van de gemeentebelasting, kerkbelasting en zorgbijdrage.`,
    fr: (max, child, lo, hi) => `Une réduction d'impôt pour ceux qui travaillent : 18% de votre salaire, au plus ${max}, + ${child} par enfant de moins de 18 ans (le double pour un parent seul). Elle baisse de 2 centimes par euro de revenu entre ${lo} et ${hi}, puis reste stable. Elle s'impute d'abord sur l'impôt d'État. Le reste s'impute sur l'impôt communal, l'impôt d'Église et la cotisation santé, au prorata.`,
  },
  'tip.workMax': { en: max => `at most ${max}`, nl: max => `hoogstens ${max}`, fr: max => `au plus ${max}` },
  'tip.workState': { en: `Taken off the state tax`, nl: `Afgetrokken van de staatsbelasting`, fr: `Imputé sur l'impôt d'État` },
  'tip.workOthers': { en: `Taken off the other income taxes`, nl: `Afgetrokken van de andere inkomstenbelastingen`, fr: `Imputé sur les autres impôts` },
  'tip.workUnused': { en: `Left unused (no tax to take it from)`, nl: `Onbenut (geen belasting om van af te trekken)`, fr: `Non utilisé (pas d'impôt sur lequel l'imputer)` },
  'tip.afterWork': { en: `after the tax discount for working`, nl: `na de belastingkorting voor werkenden`, fr: `après la réduction pour les travailleurs` },
  'tip.muni': {
    en: `Your municipality's single rate on your taxed income. It pays for schools, daycare and local services.`,
    nl: `Het ene tarief van je gemeente op je belast inkomen. Het betaalt scholen, kinderopvang en lokale diensten.`,
    fr: `Le taux unique de votre commune sur votre revenu imposé. Il paie les écoles, les crèches et les services locaux.`,
  },
  'tip.church': {
    en: `Only for church members, on the same income as the municipal tax, at your parish's rate.`,
    nl: `Alleen voor kerkleden, op hetzelfde inkomen als de gemeentebelasting, tegen het tarief van je parochie.`,
    fr: `Seulement pour les membres de l'Église, sur le même revenu que l'impôt communal, au taux de votre paroisse.`,
  },
  'tip.hc': {
    en: `Part of what you pay for sickness insurance. It is collected with your income taxes, on the same income as the municipal tax.`,
    nl: `Een deel van wat je voor de ziekteverzekering betaalt. Het wordt met je inkomstenbelasting geïnd, op hetzelfde inkomen als de gemeentebelasting.`,
    fr: `Une partie de ce que vous payez pour l'assurance maladie. Elle est prélevée avec vos impôts, sur le même revenu que l'impôt communal.`,
  },
  'tip.yle': {
    en: (lo, max) => `Pays for the public broadcaster: 2.5% of your income above ${lo}, at most ${max} a year.`,
    nl: (lo, max) => `Betaalt de openbare omroep: 2,5% van je inkomen boven ${lo}, hoogstens ${max} per jaar.`,
    fr: (lo, max) => `Paie l'audiovisuel public : 2,5% du revenu au-delà de ${lo}, au plus ${max} par an.`,
  },
  'tip.media': {
    en: (lo, max, fee, axLo) => `On Åland there is no Yle tax. Instead you pay a fixed media fee of ${fee} once your income is above ${axLo}.`,
    nl: (lo, max, fee, axLo) => `Op Åland is er geen Yle-belasting. In de plaats betaal je een vaste mediaheffing van ${fee} zodra je inkomen boven ${axLo} ligt.`,
    fr: (lo, max, fee, axLo) => `À Åland, il n'y a pas de taxe Yle. À la place, vous payez une redevance média fixe de ${fee} dès que votre revenu dépasse ${axLo}.`,
  },
  'tip.vatM': {
    en: `Lower VAT rates of 13.5% and 10% (food, restaurants, medicines, books, transport) and spending with no VAT, like rent, are left out. So the real amount is lower than this.`,
    nl: `De lagere btw-tarieven van 13,5% en 10% (voeding, restaurants, geneesmiddelen, boeken, vervoer) en uitgaven zonder btw, zoals huur, zijn niet meegerekend. Het echte bedrag ligt dus lager.`,
    fr: `Les taux réduits de 13,5% et 10% (alimentation, restaurants, médicaments, livres, transports) et les dépenses sans TVA, comme le loyer, ne sont pas pris en compte. Le montant réel est donc plus bas.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − contributions − income taxes.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − bijdragen − inkomstenbelastingen.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisations − impôts sur le revenu.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026 (final tax set in 2027)`,
    nl: `Gebruikte regels · inkomstenjaar 2026 (definitieve aanslag in 2027)`,
    fr: `Règles utilisées · revenus 2026 (impôt définitif fixé en 2027)`,
  },
  'ref.er': {
    en: { h: `1 · Employer contributions`, li: [
      `Pension (TyEL) <span class="num">17.55%</span> on average (24.85% in total minus the employee's 7.30%), sickness insurance <span class="num">1.91%</span>.`,
      `Unemployment <span class="num">0.31%</span> on the first €2 509 500 of total wages, <span class="num">1.23%</span> on the rest. Work-accident insurance <span class="num">0.51%</span> and group life <span class="num">0.06%</span> on average.`,
    ] },
    nl: { h: `1 · Werkgeversbijdragen`, li: [
      `Pensioen (TyEL) gemiddeld <span class="num">17,55%</span> (24,85% in totaal min 7,30% van de werknemer), ziekteverzekering <span class="num">1,91%</span>.`,
      `Werkloosheid <span class="num">0,31%</span> op de eerste € 2.509.500 aan totale lonen, <span class="num">1,23%</span> op de rest. Ongevallenverzekering gemiddeld <span class="num">0,51%</span> en groepsleven <span class="num">0,06%</span>.`,
    ] },
    fr: { h: `1 · Cotisations patronales`, li: [
      `Retraite (TyEL) <span class="num">17,55%</span> en moyenne (24,85% au total moins les 7,30% du salarié), assurance maladie <span class="num">1,91%</span>.`,
      `Chômage <span class="num">0,31%</span> sur les premiers 2 509 500 € de masse salariale, <span class="num">1,23%</span> sur le reste. Accidents du travail <span class="num">0,51%</span> et assurance vie collective <span class="num">0,06%</span> en moyenne.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [
      `Pension <span class="num">7.30%</span> at every age (the extra for ages 53 to 62 ended in 2026), unemployment <span class="num">0.89%</span>, sick and parental pay <span class="num">0.88%</span> from €17 255 a year.`,
      `No income tax is paid on these three. Health charge <span class="num">1.10%</span> of the income the municipal tax uses.`,
    ] },
    nl: { h: `2 · Werknemersbijdragen`, li: [
      `Pensioen <span class="num">7,30%</span> op elke leeftijd (de toeslag voor 53 tot 62 jaar verviel in 2026), werkloosheid <span class="num">0,89%</span>, ziekte- en ouderschapsuitkering <span class="num">0,88%</span> vanaf € 17.255 per jaar.`,
      `Op deze drie betaal je geen inkomstenbelasting. Zorgbijdrage <span class="num">1,10%</span> van het inkomen dat de gemeentebelasting gebruikt.`,
    ] },
    fr: { h: `2 · Cotisations salariales`, li: [
      `Retraite <span class="num">7,30%</span> à tout âge (le supplément des 53 à 62 ans a pris fin en 2026), chômage <span class="num">0,89%</span>, indemnités maladie et parentales <span class="num">0,88%</span> dès 17 255 € par an.`,
      `Ces trois cotisations ne sont pas imposées. Cotisation santé <span class="num">1,10%</span> du revenu utilisé par l'impôt communal.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `3 · State income tax`, li: [
      `Pay − €750 flat for work costs − contributions − basic tax-free amount (up to <span class="num">€4 265</span>, minus 18 cents per euro of income above).`,
      `State tax rates for 2026, each on a slice of income:${br}`,
      `The municipal discount on work income was removed in 2025. State and municipal tax now start from the same income.`,
    ] }),
    nl: br => ({ h: `3 · Inkomstenbelasting van de staat`, li: [
      `Loon − € 750 vast voor werkkosten − bijdragen − belastingvrij basisbedrag (tot <span class="num">€ 4.265</span>, min 18 cent per euro inkomen erboven).`,
      `Tarieven van de staatsbelasting 2026, elk op een schijf van het inkomen:${br}`,
      `De gemeentelijke korting op arbeidsinkomen is in 2025 afgeschaft. Staats- en gemeentebelasting vertrekken nu van hetzelfde inkomen.`,
    ] }),
    fr: br => ({ h: `3 · Impôt d'État sur le revenu`, li: [
      `Salaire − 750 € fixes de frais de travail − cotisations − montant de base non imposé (jusqu'à <span class="num">4 265 €</span>, moins 18 centimes par euro de revenu au-delà).`,
      `Taux de l'impôt d'État 2026, chacun sur une tranche du revenu :${br}`,
      `La réduction communale sur les revenus du travail a été supprimée en 2025. L'impôt d'État et l'impôt communal partent désormais du même revenu.`,
    ] }),
  },
  'ref.work': {
    en: { h: `4 · Tax discount for working`, li: [
      `<span class="num">18%</span> of pay, at most <span class="num">€3 430</span>, + €105 per child under 18 (€210 for a single parent).`,
      `Minus 2 cents per euro of income between €35 000 and €50 550, no further cut above. Taken off the state tax first, then the other income taxes.`,
    ] },
    nl: { h: `4 · Belastingkorting voor werkenden`, li: [
      `<span class="num">18%</span> van het loon, hoogstens <span class="num">€ 3.430</span>, + € 105 per kind jonger dan 18 (€ 210 voor een alleenstaande ouder).`,
      `Min 2 cent per euro inkomen tussen € 35.000 en € 50.550, daarboven niet verder. Eerst van de staatsbelasting, daarna van de andere inkomstenbelastingen.`,
    ] },
    fr: { h: `4 · Réduction d'impôt pour les travailleurs`, li: [
      `<span class="num">18%</span> du salaire, au plus <span class="num">3 430 €</span>, + 105 € par enfant de moins de 18 ans (210 € pour un parent seul).`,
      `Moins 2 centimes par euro de revenu entre 35 000 € et 50 550 €, pas au-delà. Imputée d'abord sur l'impôt d'État, puis sur les autres impôts.`,
    ] },
  },
  'ref.muni': {
    en: { h: `5 · Municipal, church and Yle tax`, li: [
      `All 308 municipalities with their Lutheran and Orthodox church rates for 2026, from the Tax Administration's decision of 18 November 2025. Mainland municipal rates go from <span class="num">4.70%</span> (Kauniainen) to <span class="num">10.90%</span> (Pomarkku), 7.57% on average.`,
      `Yle tax <span class="num">2.5%</span> of income above €15 150, at most €160.`,
    ] },
    nl: { h: `5 · Gemeente-, kerk- en Yle-belasting`, li: [
      `Alle 308 gemeenten met hun lutherse en orthodoxe kerktarieven voor 2026, uit de beslissing van de belastingdienst van 18 november 2025. Gemeentetarieven op het vasteland gaan van <span class="num">4,70%</span> (Kauniainen) tot <span class="num">10,90%</span> (Pomarkku), gemiddeld 7,57%.`,
      `Yle-belasting <span class="num">2,5%</span> van het inkomen boven € 15.150, hoogstens € 160.`,
    ] },
    fr: { h: `5 · Impôts communal, d'Église et Yle`, li: [
      `Les 308 communes avec leurs taux d'Église luthérienne et orthodoxe pour 2026, d'après la décision de l'administration fiscale du 18 novembre 2025. Les taux communaux du continent vont de <span class="num">4,70%</span> (Kauniainen) à <span class="num">10,90%</span> (Pomarkku), 7,57% en moyenne.`,
      `Taxe Yle <span class="num">2,5%</span> du revenu au-delà de 15 150 €, au plus 160 €.`,
    ] },
  },
  'ref.aland': {
    en: { h: `6 · Åland`, li: [
      `Its own state tax rates: nothing up to €22 000, then 6.36%, 17.61%, 20.61% and <span class="num">24.86%</span> above €52 100. Municipal rates 17% to 19.7%.`,
      `Municipal basic tax-free amount <span class="num">€3 925</span>, minus 8.4 cents per euro above. Media fee of €128 instead of the Yle tax, from €14 000 of income. Other local deductions (travel to work, students, disability) are left out.`,
    ] },
    nl: { h: `6 · Åland`, li: [
      `Eigen tarieven voor de staatsbelasting: niets tot € 22.000, daarna 6,36%, 17,61%, 20,61% en <span class="num">24,86%</span> boven € 52.100. Gemeentetarieven 17% tot 19,7%.`,
      `Gemeentelijk belastingvrij basisbedrag <span class="num">€ 3.925</span>, min 8,4 cent per euro erboven. Mediaheffing van € 128 in plaats van de Yle-belasting, vanaf € 14.000 inkomen. Andere lokale aftrekken (woon-werkverkeer, studenten, handicap) zijn niet meegerekend.`,
    ] },
    fr: { h: `6 · Åland`, li: [
      `Ses propres taux d'impôt d'État : rien jusqu'à 22 000 €, puis 6,36%, 17,61%, 20,61% et <span class="num">24,86%</span> au-delà de 52 100 €. Taux communaux de 17% à 19,7%.`,
      `Montant de base communal non imposé <span class="num">3 925 €</span>, moins 8,4 centimes par euro au-delà. Redevance média de 128 € au lieu de la taxe Yle, dès 14 000 € de revenu. Les autres déductions locales (trajets, étudiants, handicap) ne sont pas prises en compte.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">25.5%</span>, applied to all your net pay as if you spent all of it. Use the slider to try other rates.`,
      `The VAT hidden in a price = price × r / (100 + r). At 25.5% that's 25.5 / 125.5 = <span class="num">20.32%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">25,5%</span>, toegepast op je hele nettoloon alsof je alles uitgeeft. Gebruik de schuifregelaar om andere tarieven te proberen.`,
      `De btw in een prijs = prijs × r / (100 + r). Bij 25,5% is dat 25,5 / 125,5 = <span class="num">20,32%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">25,5%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour essayer d'autres taux.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 25,5%, cela fait 25,5 / 125,5 = <span class="num">20,32%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government and parliament`, li: [
      `Prime Minister <span class="num">€14 549.25</span>/month, minister <span class="num">€11 344.90</span>, after the 5% cut. Ministers who are MPs also get half the MP fee.`,
      `MP <span class="num">€7 637</span>/month (€7 944 after 4 years, €8 393 after 12), plus a tax-free allowance for costs of €987 to €1 809. Speaker €15 315.`,
    ] },
    nl: { h: `8 · Regering en parlement`, li: [
      `Premier <span class="num">€ 14.549,25</span>/maand, minister <span class="num">€ 11.344,90</span>, na de verlaging met 5%. Ministers die parlementslid zijn, krijgen ook de helft van de parlementsvergoeding.`,
      `Parlementslid <span class="num">€ 7.637</span>/maand (€ 7.944 na 4 jaar, € 8.393 na 12), plus een belastingvrije onkostenvergoeding van € 987 tot € 1.809. Voorzitter € 15.315.`,
    ] },
    fr: { h: `8 · Gouvernement et Parlement`, li: [
      `Premier ministre <span class="num">14 549,25 €</span>/mois, ministre <span class="num">11 344,90 €</span>, après la baisse de 5%. Les ministres députés touchent aussi la moitié de l'indemnité de député.`,
      `Député <span class="num">7 637 €</span>/mois (7 944 € après 4 ans, 8 393 € après 12), plus une indemnité de frais non imposée de 987 € à 1 809 €. Président de l'Eduskunta 15 315 €.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Deductions for travel to work, for paid help at home and for union or unemployment fund fees. The bigger tax discount for working at 65 and over. Perks like a company car. Housing allowance and child benefit (paid whatever your income).`,
      `Finland has no minimum wage set by law: the lowest pay is set in sector agreements. Amounts are your final tax for the year, not what is taken monthly using your tax card.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Aftrekken voor woon-werkverkeer, voor betaalde hulp thuis en voor bijdragen aan vakbond of werkloosheidskas. De grotere belastingkorting voor werkenden vanaf 65. Voordelen zoals een auto van de zaak. Huurtoeslag en kinderbijslag (betaald wat je ook verdient).`,
      `Finland heeft geen wettelijk minimumloon: het laagste loon staat in cao's. De bedragen zijn je definitieve belasting voor het jaar, niet wat er maandelijks wordt afgehouden volgens je belastingkaart.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les déductions pour les trajets domicile-travail, l'aide payée à domicile et les cotisations syndicales ou à la caisse de chômage. La réduction plus grande pour les travailleurs de 65 ans et plus. Les avantages comme une voiture de société. L'aide au logement et les allocations familiales (versées quel que soit le revenu).`,
      `La Finlande n'a pas de salaire minimum légal : le plus bas salaire est fixé par les conventions collectives. Les montants sont votre impôt définitif de l'année, pas ce qui est retenu chaque mois selon votre carte d'impôt.`,
    ] },
  },

  inheritLink: {
    en: `What you'd pay on what you inherit, by relationship →`,
    nl: `Wat je zou betalen op wat je erft, volgens verwantschap →`,
    fr: `Ce que vous paieriez sur un héritage, selon le lien de parenté →`,
  },
  disclaimer: {
    en: `This is only an estimate to help you get an idea. Your final tax decision from the tax office has the final word.`,
    nl: `Dit is alleen een schatting om je een idee te geven. Je definitieve aanslag van de belastingdienst is bepalend.`,
    fr: `Ceci n'est qu'une estimation pour vous donner une idée. Seule votre décision d'imposition définitive fait foi.`,
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

  // Known gaps
  'gap.earnedAllow': {
    en: `We treat the municipal discount on work income (kunnallisverotuksen ansiotulovähennys) as gone since 2025. It no longer appears among the 2026 deductions, but we didn't read the repeal in the law itself.`,
    nl: `We beschouwen de gemeentelijke korting op arbeidsinkomen (kunnallisverotuksen ansiotulovähennys) als verdwenen sinds 2025. Ze staat niet meer tussen de aftrekken van 2026, maar we lazen de afschaffing niet in de wet zelf.`,
    fr: `On considère la réduction communale sur les revenus du travail (kunnallisverotuksen ansiotulovähennys) comme supprimée depuis 2025. Elle ne figure plus dans les déductions 2026, mais nous n'avons pas lu l'abrogation dans la loi elle-même.`,
  },
  'gap.alandBase': {
    en: `Åland: for state tax we use the mainland basic tax-free amount (€4 265, minus 18 cents per euro). Only municipal tax uses Åland's own €3 925 (minus 8.4 cents). That is how we read the income tax law; the tax office (Vero) hasn't confirmed it.`,
    nl: `Åland: voor de staatsbelasting gebruiken we het belastingvrije basisbedrag van het vasteland (€ 4.265, min 18 cent per euro). Alleen de gemeentebelasting gebruikt het eigen bedrag van Åland, € 3.925 (min 8,4 cent). Zo lezen wij de inkomstenbelastingwet; de belastingdienst (Vero) heeft het niet bevestigd.`,
    fr: `Åland : pour l'impôt d'État, on utilise le montant de base non imposé du continent (4 265 €, moins 18 centimes par euro). Seul l'impôt communal utilise celui d'Åland, 3 925 € (moins 8,4 centimes). C'est notre lecture de la loi sur l'impôt sur le revenu ; le fisc (Vero) ne l'a pas confirmée.`,
  },
  'gap.erPension': {
    en: `The employer's 17.55% for pensions is the 2026 average TyEL rate (24.85%) minus the employee's 7.30%. Each pension company adds its own fees and discounts, so a given employer pays a bit more or less.`,
    nl: `De 17,55% van de werkgever voor pensioen is het gemiddelde TyEL-tarief van 2026 (24,85%) min de 7,30% van de werknemer. Elke pensioenverzekeraar telt er eigen kosten en kortingen bij, dus een werkgever betaalt wat meer of minder.`,
    fr: `Les 17,55% de l'employeur pour la retraite sont le taux TyEL moyen 2026 (24,85%) moins les 7,30% du salarié. Chaque caisse ajoute ses frais et remises : un employeur donné paie un peu plus ou un peu moins.`,
  },
  'gap.erInsurance': {
    en: `Insurance for work accidents and job-related illness (0.51%) and group life insurance (0.06%) are national averages. The real rate depends on how risky the job is and on the insurer.`,
    nl: `De verzekering tegen arbeidsongevallen en beroepsziekten (0,51%) en de groepslevensverzekering (0,06%) zijn landelijke gemiddelden. Het echte tarief hangt af van hoe riskant het werk is en van de verzekeraar.`,
    fr: `L'assurance accidents du travail et maladies professionnelles (0,51%) et l'assurance vie collective (0,06%) sont des moyennes nationales. Le vrai taux dépend du risque du poste et de l'assureur.`,
  },
  'gap.erUnemp': {
    en: `The employer pays 0.31% for unemployment insurance on the first €2 509 500 of total wages and 1.23% on the rest. The employer-size switch uses one rate for your whole salary, while a real employer pays a mix of the two.`,
    nl: `De werkgever betaalt 0,31% voor de werkloosheidsverzekering op de eerste € 2.509.500 aan totale lonen en 1,23% op de rest. De keuze van werkgeversgrootte gebruikt één tarief voor je hele loon, terwijl een echte werkgever een mengeling van beide betaalt.`,
    fr: `L'employeur paie 0,31% d'assurance chômage sur les premiers 2 509 500 € de masse salariale et 1,23% sur le reste. Le choix de taille d'employeur applique un seul taux à tout votre salaire, alors qu'un vrai employeur paie un mélange des deux.`,
  },
  'gap.church': {
    en: `Church tax uses the municipality's Lutheran rate, or 1.38% on average if no municipality is picked. Orthodox members pay a different rate, shown only in the municipality hint.`,
    nl: `De kerkbelasting gebruikt het lutherse tarief van de gemeente, of gemiddeld 1,38% als je geen gemeente kiest. Orthodoxe leden betalen een ander tarief, dat alleen in de uitleg bij de gemeente staat.`,
    fr: `L'impôt d'Église utilise le taux luthérien de la commune, ou 1,38% en moyenne si aucune commune n'est choisie. Les membres orthodoxes paient un autre taux, indiqué seulement dans l'aide de la commune.`,
  },
  'gap.holiday': {
    en: `12.5 months counts the holiday bonus (lomaraha) as half a month's pay. The real bonus depends on your sector agreement and the holiday days you earned.`,
    nl: `12,5 maanden telt het vakantiegeld (lomaraha) als een half maandloon. Het echte bedrag hangt af van je cao en de vakantiedagen die je opbouwde.`,
    fr: `12,5 mois compte la prime de vacances (lomaraha) comme un demi-mois de salaire. Le vrai montant dépend de votre convention collective et des jours de congé acquis.`,
  },
  'gap.onlyWage': {
    en: `We assume your salary is your only income. Income from savings, benefits or a second job would change the Yle tax, the basic tax-free amount and the tax discount for working.`,
    nl: `We nemen aan dat je loon je enige inkomen is. Inkomen uit spaargeld, uitkeringen of een tweede job zou de Yle-belasting, het belastingvrije basisbedrag en de belastingkorting voor werkenden veranderen.`,
    fr: `On suppose que votre salaire est votre seul revenu. Des revenus d'épargne, des prestations ou un second emploi changeraient la taxe Yle, le montant de base non imposé et la réduction pour les travailleurs.`,
  },
  'gap.check': {
    en: `We compared with the Veronmaksajat 2026 tables only for a single person with no children, at 7.57% municipal tax and 1.38% church tax, and the results match. Children, couples and Åland weren't checked against an official calculator.`,
    nl: `We vergeleken met de tabellen van Veronmaksajat 2026 alleen voor een alleenstaande zonder kinderen, bij 7,57% gemeentebelasting en 1,38% kerkbelasting, en de uitkomsten kloppen. Kinderen, koppels en Åland zijn niet nagerekend met een officiële rekenmodule.`,
    fr: `Nous avons comparé aux tableaux Veronmaksajat 2026 seulement pour une personne seule sans enfant, à 7,57% d'impôt communal et 1,38% d'impôt d'Église, et les résultats concordent. Enfants, couples et Åland n'ont pas été vérifiés avec un simulateur officiel.`,
  },
  'gap.notIncl': {
    en: `Other deductions and benefits (travel to work, help at home, union fund, perks, housing allowance, child benefit) are left out: see "What's not included".`,
    nl: `Andere aftrekken en uitkeringen (woon-werkverkeer, hulp thuis, vakbondskas, voordelen in natura, huurtoeslag, kinderbijslag) zijn weggelaten: zie "Wat niet is meegerekend".`,
    fr: `Les autres déductions et prestations (trajets, aide à domicile, caisse syndicale, avantages en nature, aide au logement, allocations familiales) sont omises : voir « Ce qui n'est pas inclus ».`,
  },
  'gap.wages': {
    en: `Median (€3 611: half of full-time workers earn more, half less) and average (€4 070) monthly pay are total full-time earnings for 2024, without the holiday bonus. 2026 levels will be higher.`,
    nl: `Het mediaanloon (€ 3.611: de helft van de voltijders verdient meer, de helft minder) en het gemiddelde (€ 4.070) per maand zijn totale verdiensten van voltijders in 2024, zonder vakantiegeld. De niveaus van 2026 liggen hoger.`,
    fr: `Les salaires médian (3 611 € : la moitié des temps pleins gagne plus, l'autre moitié moins) et moyen (4 070 €) par mois sont les gains totaux des temps pleins en 2024, sans prime de vacances. Les niveaux de 2026 seront plus élevés.`,
  },
  'gap.govPay': {
    en: `Fees of ministers and MPs (minister €11 344.90, Prime Minister €14 549.25, MP €7 637 to €8 393, after the 5% cut where it applies) come from news and job sites (Duunitori, Yle, Verkkouutiset) at their October 2025 level, not from Parliament itself.`,
    nl: `De vergoedingen van ministers en parlementsleden (minister € 11.344,90, premier € 14.549,25, parlementslid € 7.637 tot € 8.393, na de verlaging met 5% waar die geldt) komen van nieuws- en vacaturesites (Duunitori, Yle, Verkkouutiset) op hun niveau van oktober 2025, niet van het parlement zelf.`,
    fr: `Les indemnités des ministres et députés (ministre 11 344,90 €, Premier ministre 14 549,25 €, député 7 637 € à 8 393 €, après la baisse de 5% le cas échéant) viennent de sites d'info et d'emploi (Duunitori, Yle, Verkkouutiset) au niveau d'octobre 2025, pas du Parlement lui-même.`,
  },
  'gap.ministerMp': {
    en: `We assume a minister has been an MP for less than 4 years (+ half of €7 637), and the Prime Minister for 12 years or more (+ half of €8 393). A minister who isn't an MP gets only the minister's fee.`,
    nl: `We nemen aan dat een minister minder dan 4 jaar parlementslid is (+ de helft van € 7.637), en de premier 12 jaar of meer (+ de helft van € 8.393). Een minister die geen parlementslid is, krijgt alleen de ministervergoeding.`,
    fr: `On suppose qu'un ministre est député depuis moins de 4 ans (+ la moitié de 7 637 €), et le Premier ministre depuis 12 ans ou plus (+ la moitié de 8 393 €). Un ministre qui n'est pas député ne touche que l'indemnité de ministre.`,
  },
  'gap.govSocial': {
    en: `We assume members of government and parliament pay 7.30% for their pension and 0.88% for sick and parental pay, and that the State pays 17.55% for pensions and 1.91% for sickness insurance, like a private employer. Their real pension scheme wasn't confirmed.`,
    nl: `We nemen aan dat regerings- en parlementsleden 7,30% voor hun pensioen en 0,88% voor ziekte- en ouderschapsuitkering betalen, en dat de staat 17,55% voor pensioen en 1,91% voor ziekteverzekering betaalt, zoals een privéwerkgever. Hun echte pensioenregeling is niet bevestigd.`,
    fr: `On suppose que les membres du gouvernement et du Parlement paient 7,30% pour leur retraite et 0,88% pour les indemnités maladie et parentales, et que l'État paie 17,55% de retraite et 1,91% d'assurance maladie, comme un employeur privé. Leur vrai régime de retraite n'a pas été confirmé.`,
  },
  'gap.mpAllow': {
    en: `MPs' tax-free allowance for costs is counted at its lowest level (€986.81 a month). It goes up to €1 809.15 depending on where they live. These amounts are less certain than the fee.`,
    nl: `De belastingvrije onkostenvergoeding van parlementsleden telt op het laagste niveau (€ 986,81 per maand). Ze gaat tot € 1.809,15 naargelang waar ze wonen. Die bedragen zijn minder zeker dan de vergoeding zelf.`,
    fr: `L'indemnité de frais non imposée des députés est comptée à son niveau le plus bas (986,81 € par mois). Elle monte jusqu'à 1 809,15 € selon leur lieu de vie. Ces montants sont moins sûrs que l'indemnité elle-même.`,
  },
  'gap.ceoPay': {
    en: `The heads of Posti, Patria, Finnair, VR, Veikkaus and Alko are shown at their 2024 taxed income from the public tax records, not their contract pay. Fortum is 2025 fixed pay plus bonus. We couldn't find the Bank of Finland governor's pay, so it's left out.`,
    nl: `De topmensen van Posti, Patria, Finnair, VR, Veikkaus en Alko staan op hun belast inkomen van 2024 uit de openbare belastinggegevens, niet op hun contractloon. Fortum is het vaste loon plus bonus van 2025. We vonden het loon van de gouverneur van de Bank of Finland niet, dus het ontbreekt.`,
    fr: `Les dirigeants de Posti, Patria, Finnair, VR, Veikkaus et Alko sont placés à leur revenu imposé 2024 tiré des données fiscales publiques, pas à leur salaire contractuel. Fortum : fixe 2025 plus bonus. Nous n'avons pas trouvé la paie du gouverneur de la Banque de Finlande : elle manque.`,
  },
};
