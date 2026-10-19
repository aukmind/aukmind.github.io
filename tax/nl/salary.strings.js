window.TAX_STRINGS = {
  title: { en: `Dutch Buying Power`, nl: `Nederlandse koopkracht`, fr: `Pouvoir d'achat aux Pays-Bas` },
  eyebrow: { en: `Netherlands · 2026 · employee below AOW age`, nl: `Nederland · 2026 · werknemer onder de AOW-leeftijd`, fr: `Pays-Bas · 2026 · salarié sous l'âge de la retraite` },
  eyebrowMinister: { en: `Netherlands · 2026 · minister`, nl: `Nederland · 2026 · minister`, fr: `Pays-Bas · 2026 · ministre` },
  lead: {
    en: `Every tax on a Dutch salary in 2026, from what your employer pays to what you can buy, with the tax credits and allowances that come and go with your pay.`,
    nl: `Alle belastingen en premies op een Nederlands loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen, met de heffingskortingen en toeslagen die meebewegen met je loon.`,
    fr: `Tous les prélèvements sur un salaire néerlandais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter, avec les crédits d'impôt et les allocations qui varient avec votre salaire.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Living together as tax and allowance partners. Each partner is taxed alone; the combination credit goes to the lower earner and the allowances look at your joint income.`,
    nl: `Samenwonend als fiscale partner en toeslagpartner. Elke partner wordt apart belast; de combinatiekorting gaat naar de minstverdienende partner en de toeslagen kijken naar jullie samen.`,
    fr: `En couple, partenaires fiscaux et pour les allocations. Chacun est imposé séparément ; le crédit pour parents qui travaillent va au plus petit revenu et les allocations regardent le revenu du couple.`,
  },
  includePa: { en: `Count health-care allowance and child budget`, nl: `Zorgtoeslag en kindgebonden budget meetellen`, fr: `Compter l'allocation santé et le budget enfant` },
  vatStandard: { en: `(Dutch standard rate is 21%)`, nl: `(het Nederlandse normale tarief is 21%)`, fr: `(le taux normal néerlandais est de 21%)` },
  'size.small': { en: `Small (low Aof)`, nl: `Klein (lage Aof)`, fr: `Petite (Aof bas)` },
  'size.big': { en: `Mid-size or large`, nl: `Middelgroot of groot`, fr: `Moyenne ou grande` },
  'refWage.med': { en: `Modal (CPB)`, nl: `Modaal (CPB)`, fr: `Modal (CPB)` },
  'refWage.avg': { en: `Mean per FTE`, nl: `Gemiddeld per fte`, fr: `Moyen par ETP` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.stas': { en: `State Secretary`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Minister-president`, fr: `Premier ministre` },
  ministerHint: {
    en: `Statutory pay with 8% holiday pay and an 8.3% year-end bonus. Wage tax and national insurance premiums like anyone, but no unemployment or disability premiums: ministers aren't employees.`,
    nl: `Wettelijke bezoldiging met 8% vakantie-uitkering en 8,3% eindejaarsuitkering. Loonheffing en premies volksverzekeringen zoals iedereen, maar geen WW- of WIA-premies: ministers zijn geen werknemer.`,
    fr: `Traitement légal avec 8% de pécule de vacances et 8,3% de prime de fin d'année. Impôt et cotisations nationales comme tout le monde, mais pas de cotisations chômage ni invalidité : les ministres ne sont pas salariés.`,
  },
  minSalaryHint: {
    en: `Yearly pay including holiday pay and year-end bonus. Statutory amount by default.`,
    nl: `Jaarbezoldiging inclusief vakantie- en eindejaarsuitkering. Standaard het wettelijke bedrag.`,
    fr: `Traitement annuel avec pécule de vacances et prime de fin d'année. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `The Prime Minister and every minister earn €211 552 a year, a State Secretary €197 608, both including 8% holiday pay and the 8.3% year-end bonus. A member of the House earns €145 248 from July 2026, plus a tax-free €3 533 expense allowance. All of it goes through wage tax with the usual tax credits. They aren't employees, so no WW, WIA or sickness premiums; the State pays the Zvw levy. Not confirmed: whether the Zvw is paid as the employer levy (modelled) or withheld from them. Their pension under the Appa and the ministers' fixed expense allowance are left out.`,
    nl: `De minister-president en elke minister verdienen € 211.552 per jaar, een staatssecretaris € 197.608, telkens inclusief 8% vakantie-uitkering en 8,3% eindejaarsuitkering. Een Tweede Kamerlid verdient € 145.248 vanaf juli 2026, plus een belastingvrije onkostenvergoeding van € 3.533. Alles gaat door de loonheffing met de gewone heffingskortingen. Ze zijn geen werknemer, dus geen WW-, WIA- of Ziektewetpremie; de Staat betaalt de Zvw-heffing. Niet bevestigd: of de Zvw als werkgeversheffing (zo berekend) of als inhouding wordt betaald. Het Appa-pensioen en de vaste onkostenvergoeding van ministers zijn niet meegerekend.`,
    fr: `Le Premier ministre et chaque ministre touchent 211 552 € par an, un secrétaire d'État 197 608 €, pécule de vacances de 8% et prime de fin d'année de 8,3% compris. Un député touche 145 248 € depuis juillet 2026, plus une indemnité de frais exonérée de 3 533 €. Tout passe par l'impôt sur les salaires avec les crédits d'impôt habituels. Ils ne sont pas salariés : pas de cotisations chômage, invalidité ou maladie ; l'État paie la cotisation santé Zvw. Non confirmé : si la Zvw est payée comme cotisation patronale (ici) ou retenue sur leur traitement. La pension Appa et l'indemnité de frais fixe des ministres ne sont pas comptées.`,
  },
  'bd.minGross': { en: `Statutory pay`, nl: `Bezoldiging`, fr: `Traitement` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de Staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `Pay set by the Act on the legal status of ministers and state secretaries, with 8% holiday pay and an 8.3% year-end bonus.`,
    nl: `Bezoldiging volgens de Wet rechtspositie ministers en staatssecretarissen, met 8% vakantie-uitkering en 8,3% eindejaarsuitkering.`,
    fr: `Traitement fixé par la loi sur le statut des ministres et secrétaires d'État, avec 8% de pécule de vacances et 8,3% de prime de fin d'année.`,
  },
  'tip.stateCost': {
    en: `Pay + the Zvw levy the State pays. The work and full tax rates are measured against it.`,
    nl: `Bezoldiging + de Zvw-heffing die de Staat betaalt. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `Traitement + la cotisation Zvw payée par l'État. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },
  'tip.minEr': {
    en: `None: ministers and MPs aren't insured for unemployment, disability or sickness benefits. They have their own severance rules (Appa).`,
    nl: `Geen: ministers en Kamerleden zijn niet verzekerd voor WW, WIA of Ziektewet. Ze hebben hun eigen uitkeringsregeling (Appa).`,
    fr: `Aucune : ministres et députés ne sont pas assurés pour le chômage, l'invalidité ou la maladie. Ils ont leur propre régime d'indemnités (Appa).`,
  },
  'tip.minZvw': {
    en: `6.10% on pay up to €79 409, paid by the State to fund health insurance.`,
    nl: `6,10% op de bezoldiging tot € 79.409, betaald door de Staat voor de zorgverzekering.`,
    fr: `6,10% du traitement jusqu'à 79 409 €, payés par l'État pour financer l'assurance santé.`,
  },
  'tip.minTsl': { en: `Not paid at this income.`, nl: `Niet uitbetaald bij dit inkomen.`, fr: `Non versé à ce niveau de revenu.` },
  polAllow: { en: `Tax-free expense allowance`, nl: `Belastingvrije onkostenvergoeding`, fr: `Indemnité de frais exonérée` },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister, minister`, nl: `Minister-president, minister`, fr: `Premier ministre, ministre` },
  'stat.stas': { en: `State Secretary`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'stat.mp': { en: `Member of the House`, nl: `Tweede Kamerlid`, fr: `Député` },
  'stat.wnt': { en: `Public-sector pay cap (WNT)`, nl: `WNT-maximum`, fr: `Plafond de rémunération publique (WNT)` },
  'pol.stat.pm': { en: `Statutory pay, the same for the Prime Minister and every minister`, nl: `Wettelijke bezoldiging, gelijk voor de minister-president en elke minister`, fr: `Traitement légal, le même pour le Premier ministre et chaque ministre` },
  'pol.stat.stas': { en: `Statutory pay`, nl: `Wettelijke bezoldiging`, fr: `Traitement légal` },
  'pol.stat.mp': { en: `Salary (schadeloosstelling), without the expense allowances`, nl: `Schadeloosstelling, zonder onkostenvergoedingen`, fr: `Indemnité parlementaire, hors indemnités de frais` },
  'pol.stat.wnt': { en: `Most a top official in the public sector may earn in 2026`, nl: `Wat een topfunctionaris in de publieke sector in 2026 maximaal mag verdienen`, fr: `Le maximum qu'un dirigeant du secteur public peut gagner en 2026` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere publieke functies, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-owned companies, gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon`, fr: `Dirigeants d'entreprises publiques, rémunération brute` },
  'pol.dnb': { en: `President, De Nederlandsche Bank`, nl: `President, De Nederlandsche Bank`, fr: `Président de De Nederlandsche Bank` },
  'pol.ns': { en: `CEO, NS (Dutch Railways)`, nl: `President-directeur, NS`, fr: `PDG des chemins de fer néerlandais (NS)` },
  'polNote.minister': {
    en: `Statutory pay with holiday pay and year-end bonus, wage tax and national insurance premiums, no employee insurance premiums. The head sits at the employee salary with the same net, with your household; the dot is their actual gross.`,
    nl: `Wettelijke bezoldiging met vakantie- en eindejaarsuitkering, loonheffing en premies volksverzekeringen, geen werknemersverzekeringen. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin; het bolletje is hun echte bruto.`,
    fr: `Traitement légal avec pécule de vacances et prime de fin d'année, impôt et cotisations nationales, sans assurances salariales. La tête est au salaire d'un salarié au même net, avec votre foyer ; le point est leur vrai brut.`,
  },
  'polNote.mp': {
    en: `Wage tax and national insurance premiums, no employee insurance premiums. The €3 533 expense allowance is tax-free and not in the net. The head sits at the employee salary with the same net.`,
    nl: `Loonheffing en premies volksverzekeringen, geen werknemersverzekeringen. De onkostenvergoeding van € 3.533 is belastingvrij en zit niet in het netto. Het hoofdje staat bij het werknemersloon met hetzelfde netto.`,
    fr: `Impôt et cotisations nationales, sans assurances salariales. L'indemnité de frais de 3 533 € est exonérée et n'est pas dans le net. La tête est au salaire d'un salarié au même net.`,
  },
  'polTipNote.pm': {
    en: `€15 158.52 a month, + 8% holiday pay and an 8.3% year-end bonus: €211 552 a year. The Prime Minister earns the same as other ministers.`,
    nl: `€ 15.158,52 per maand, + 8% vakantie-uitkering en 8,3% eindejaarsuitkering: € 211.552 per jaar. De minister-president verdient evenveel als de andere ministers.`,
    fr: `15 158,52 € par mois, + 8% de pécule de vacances et 8,3% de prime de fin d'année : 211 552 € par an. Le Premier ministre gagne autant que les autres ministres.`,
  },
  'polTipNote.stas': {
    en: `€14 159.37 a month, + 8% holiday pay and an 8.3% year-end bonus: €197 608 a year.`,
    nl: `€ 14.159,37 per maand, + 8% vakantie-uitkering en 8,3% eindejaarsuitkering: € 197.608 per jaar.`,
    fr: `14 159,37 € par mois, + 8% de pécule de vacances et 8,3% de prime de fin d'année : 197 608 € par an.`,
  },
  'polTipNote.mp': {
    en: `€10 407.54 a month from 1 July 2026, + 8% holiday pay and an 8.3% year-end bonus: €145 248 a year. Not confirmed: taken from salaristabel.nl; parlement.com still lists €10 133.92 (July 2024).`,
    nl: `€ 10.407,54 per maand vanaf 1 juli 2026, + 8% vakantie-uitkering en 8,3% eindejaarsuitkering: € 145.248 per jaar. Niet bevestigd: overgenomen van salaristabel.nl; parlement.com vermeldt nog € 10.133,92 (juli 2024).`,
    fr: `10 407,54 € par mois depuis le 1er juillet 2026, + 8% de pécule de vacances et 8,3% de prime de fin d'année : 145 248 € par an. Non confirmé : repris de salaristabel.nl ; parlement.com indique encore 10 133,92 € (juillet 2024).`,
  },
  'polTipNote.wnt': {
    en: `The Top Incomes Act (WNT) caps pay at most public bodies at €262 000 in 2026, holiday pay and pension contributions included. Ministers' pay is the reference it was built on.`,
    nl: `De Wet normering topinkomens (WNT) beperkt de bezoldiging bij de meeste publieke instellingen tot € 262.000 in 2026, inclusief vakantiegeld en pensioenbijdrage. Het ministerssalaris was het oorspronkelijke ijkpunt.`,
    fr: `La loi sur les hauts revenus (WNT) plafonne la rémunération dans la plupart des organismes publics à 262 000 € en 2026, pécule de vacances et cotisations retraite compris. Le traitement des ministres en était la référence.`,
  },
  'polTipNote.dnb': {
    en: `Olaf Sleijpen, president since 1 July 2025. The cabinet set his pay at up to €450 000 a year, an exception to the WNT cap, indexed. The amount actually paid isn't in this model.`,
    nl: `Olaf Sleijpen, president sinds 1 juli 2025. Het kabinet stelde zijn bezoldiging vast op maximaal € 450.000 per jaar, een uitzondering op de WNT, geïndexeerd. Het werkelijk uitbetaalde bedrag zit niet in dit model.`,
    fr: `Olaf Sleijpen, président depuis le 1er juillet 2025. Le gouvernement a fixé sa rémunération à 450 000 € par an au maximum, une exception au plafond WNT, indexée. Le montant réellement versé n'est pas dans ce modèle.`,
  },
  'polTipNote.ns': {
    en: `Fixed pay €479 730 in 2025; the top of the range adds a pension allowance, benefits and pension costs: €562 838 in total. NS is fully owned by the State.`,
    nl: `Vaste beloning € 479.730 in 2025; de bovenkant van de vork telt de pensioentoelage, vergoedingen en pensioenkosten mee: samen € 562.838. NS is volledig eigendom van de Staat.`,
    fr: `Rémunération fixe 479 730 € en 2025 ; le haut de la fourchette ajoute l'indemnité de retraite, les avantages et les coûts de pension : 562 838 € au total. NS appartient entièrement à l'État.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ months paid. Ministers and MPs are placed where an employee would earn the same net; the others sit at their gross. See ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ betaalde maanden. Ministers en Kamerleden staan waar een werknemer hetzelfde netto zou verdienen; de anderen staan op hun bruto. Zie ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ mois payés. Ministres et députés sont placés là où un salarié gagnerait le même net ; les autres à leur brut. Voir ${links}.`,
  },
  'src.pol.pm': { en: `Rijksoverheid: ministers' pay`, nl: `Rijksoverheid: salaris minister`, fr: `Rijksoverheid : traitement des ministres` },
  'src.pol.stas': { en: `Rijksoverheid: ministers' pay`, nl: `Rijksoverheid: salaris staatssecretaris`, fr: `Rijksoverheid : traitement des ministres` },
  'src.pol.mp': { en: `Salaristabel: MPs' pay 2026`, nl: `Salaristabel: salaris Tweede Kamerlid 2026`, fr: `Salaristabel : indemnité des députés 2026` },
  'src.pol.wnt': { en: `Rijksoverheid: WNT maximum 2026`, nl: `Rijksoverheid: WNT-maximum 2026`, fr: `Rijksoverheid : plafond WNT 2026` },
  'src.pol.dnb': { en: `Rijksoverheid: DNB president appointed`, nl: `Rijksoverheid: benoeming president DNB`, fr: `Rijksoverheid : nomination du président de DNB` },
  'src.pol.ns': { en: `NS annual report 2025: personnel costs`, nl: `NS jaarverslag 2025: personeelskosten`, fr: `NS rapport annuel 2025 : frais de personnel` },
  bracketTop: { en: `top bracket`, nl: `toptarief`, fr: `tranche supérieure` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why so high between ${a} and ${b}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom zo hoog tussen ${a} en ${b}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi si élevé entre ${a} et ${b} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, kgb) => b
      ? `From a household income of €29 736 the health-care allowance shrinks by 13.73 cents for each extra euro${kgb ? ` and the child budget (up to ${kgb} a year) by 7.6 cents` : ''}. On top of 35.75% or 37.56% tax and the general tax credit tapering at 6.4%, each extra euro of gross leaves you far less than half. The allowances run out at ${b}.`
      : `From the minimum wage of ${a}, the labour credit grows with your pay up to €45 592 and keeps the rate low, while the general tax credit starts tapering at €29 736. Switch on the allowances to see what they add.`,
    nl: (a, b, kgb) => b
      ? `Vanaf een gezamenlijk inkomen van € 29.736 daalt de zorgtoeslag met 13,73 cent per extra euro${kgb ? ` en het kindgebonden budget (tot ${kgb} per jaar) met 7,6 cent` : ''}. Bovenop 35,75% of 37,56% belasting en de algemene heffingskorting die met 6,4% afbouwt, hou je van elke extra euro bruto veel minder dan de helft over. De toeslagen stoppen bij ${b}.`
      : `Vanaf het minimumloon van ${a} groeit de arbeidskorting mee met je loon tot € 45.592 en houdt het tarief laag, terwijl de algemene heffingskorting vanaf € 29.736 afbouwt. Zet de toeslagen aan om te zien wat ze toevoegen.`,
    fr: (a, b, kgb) => b
      ? `À partir de 29 736 € de revenu du foyer, l'allocation santé baisse de 13,73 centimes par euro gagné en plus${kgb ? ` et le budget enfant (jusqu'à ${kgb} par an) de 7,6 centimes` : ''}. En plus de 35,75% ou 37,56% d'impôt et du crédit d'impôt général qui diminue de 6,4%, chaque euro brut en plus vous laisse bien moins de la moitié. Les allocations s'arrêtent à ${b}.`
      : `Dès le salaire minimum de ${a}, le crédit pour revenus du travail augmente avec votre salaire jusqu'à 45 592 € et garde le taux bas, tandis que le crédit d'impôt général diminue à partir de 29 736 €. Activez les allocations pour voir ce qu'elles ajoutent.`,
  },
  topTitle: {
    en: (top, end) => `Why the jump between ${top} and ${end}?`,
    nl: (top, end) => `Waarom de sprong tussen ${top} en ${end}?`,
    fr: (top, end) => `Pourquoi la hausse entre ${top} et ${end} ?`,
  },
  topBody: {
    en: (top, end, rate, topRate) => `Above €78 426 the 49.5% bracket starts, while the labour credit keeps shrinking by 6.51 cents per euro until it's gone at €132 920: ${rate} on each extra euro. Above that only the ${topRate} rate is left. Employer premiums stop at €79 409, so the cost of a raise drops there.`,
    nl: (top, end, rate, topRate) => `Boven € 78.426 begint de schijf van 49,5%, terwijl de arbeidskorting nog afbouwt met 6,51 cent per euro tot ze weg is bij € 132.920: ${rate} op elke extra euro. Daarboven blijft enkel het tarief van ${topRate}. De werkgeverspremies stoppen bij € 79.409, dus daar wordt een loonsverhoging goedkoper.`,
    fr: (top, end, rate, topRate) => `Au-delà de 78 426 € commence la tranche à 49,5%, alors que le crédit pour revenus du travail baisse encore de 6,51 centimes par euro jusqu'à disparaître à 132 920 € : ${rate} sur chaque euro en plus. Au-delà, il ne reste que le taux de ${topRate}. Les cotisations patronales s'arrêtent à 79 409 €, donc une augmentation coûte moins cher à partir de là.`,
  },

  // Tax components
  'comp.er': { en: `Employee insurance premiums (employer)`, nl: `Premies werknemersverzekeringen`, fr: `Assurances salariales (employeur)` },
  'comp.zvw': { en: `Health insurance levy (Zvw)`, nl: `Werkgeversheffing Zvw`, fr: `Cotisation santé (Zvw)` },
  'comp.vv': { en: `National insurance premiums`, nl: `Premies volksverzekeringen`, fr: `Cotisations nationales` },
  'comp.ir': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'comp.tsl': { en: `Allowances`, nl: `Toeslagen`, fr: `Allocations` },
  tslReceived: { en: `+ Health-care allowance and child budget`, nl: `+ Zorgtoeslag en kindgebonden budget`, fr: `+ Allocation santé et budget enfant` },
  tslLost: { en: `Allowances your pay costs the household`, nl: `Toeslagen die je loon het gezin kost`, fr: `Allocations que votre salaire fait perdre au foyer` },
  'bd.awf': { en: `Unemployment fund (AWf)`, nl: `Premie AWf`, fr: `Fonds chômage (AWf)` },
  'bd.aof': { en: `Disability fund (Aof)`, nl: `Premie Aof`, fr: `Fonds invalidité (Aof)` },
  'bd.whk': { en: `Return-to-work fund (Whk)`, nl: `Premie Whk`, fr: `Caisse de reprise du travail (Whk)` },
  'bd.vvGross': { en: `National insurance premiums before credits`, nl: `Premies volksverzekeringen vóór kortingen`, fr: `Cotisations nationales avant crédits` },
  'bd.irGross': { en: `Income tax before credits`, nl: `Inkomstenbelasting vóór kortingen`, fr: `Impôt avant crédits` },
  'bd.ahk': { en: `General tax credit`, nl: `Algemene heffingskorting`, fr: `Crédit d'impôt général` },
  'bd.ak': { en: `Labour tax credit`, nl: `Arbeidskorting`, fr: `Crédit pour revenus du travail` },
  'bd.iack': { en: `Working parents' credit (IACK)`, nl: `Inkomensafhankelijke combinatiekorting`, fr: `Crédit pour parents qui travaillent (IACK)` },
  'bd.partnerEffect': { en: `Effect of your pay on your partner's credits`, nl: `Effect van je loon op de kortingen van je partner`, fr: `Effet de votre salaire sur les crédits de votre partenaire` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries with holiday pay already spread in, or left out.`,
    nl: `12 maandlonen, met het vakantiegeld al inbegrepen of weggelaten.`,
    fr: `12 salaires mensuels, pécule de vacances déjà réparti ou laissé de côté.`,
  },
  'tip.f1296': {
    en: `12 months + the legal 8% holiday pay (vakantiegeld), usually paid in May. The norm.`,
    nl: `12 maanden + het wettelijke vakantiegeld van 8%, meestal uitbetaald in mei. De norm.`,
    fr: `12 mois + le pécule de vacances légal de 8%, en général versé en mai. La norme.`,
  },
  'tip.f1396': {
    en: `12 months + 8% holiday pay + a 13th month, which many collective agreements add as a year-end bonus.`,
    nl: `12 maanden + 8% vakantiegeld + een dertiende maand, die veel cao's toevoegen als eindejaarsuitkering.`,
    fr: `12 mois + 8% de pécule de vacances + un 13e mois, que beaucoup de conventions collectives ajoutent en prime de fin d'année.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `The Netherlands taxes each person alone. With children, the working parents' credit goes to the partner who earns less. The health-care allowance and child budget look at the couple's joint income. Here, your tax = the household's taxes − what it would pay if you earned nothing, and the same for the allowances.`,
    nl: `Nederland belast elke persoon apart. Met kinderen gaat de inkomensafhankelijke combinatiekorting naar de minstverdienende partner. Zorgtoeslag en kindgebonden budget kijken naar het gezamenlijke inkomen. Hier is jouw belasting = de belastingen van het gezin − wat het zou betalen als jij niets verdiende, en hetzelfde voor de toeslagen.`,
    fr: `Les Pays-Bas imposent chaque personne séparément. Avec des enfants, le crédit pour parents qui travaillent va au partenaire qui gagne le moins. L'allocation santé et le budget enfant regardent le revenu commun. Ici, votre impôt = les impôts du foyer − ce qu'il paierait si vous ne gagniez rien, et de même pour les allocations.`,
  },
  'tip.paToggle': {
    en: `Two income-tested payments: the health-care allowance (zorgtoeslag) helps pay the compulsory health insurance, the child budget (kindgebonden budget) comes on top of child benefit. They aren't taxes but work like negative ones: they shrink as your income grows. Modelled without savings and with all children under 12.`,
    nl: `Twee inkomensafhankelijke toeslagen: de zorgtoeslag helpt de verplichte zorgverzekering betalen, het kindgebonden budget komt bovenop de kinderbijslag. Het zijn geen belastingen maar ze werken als negatieve: ze krimpen als je inkomen groeit. Berekend zonder vermogen en met alle kinderen jonger dan 12.`,
    fr: `Deux aides sous condition de revenus : l'allocation santé (zorgtoeslag) aide à payer l'assurance maladie obligatoire, le budget enfant (kindgebonden budget) s'ajoute aux allocations familiales. Ce ne sont pas des impôts mais elles agissent comme des impôts négatifs : elles baissent quand votre revenu monte. Calculé sans épargne et avec tous les enfants de moins de 12 ans.`,
  },
  'tip.size': {
    en: `Small: a 2024 premium wage bill up to €1 082 500 pays the low disability-fund rate, 6.27%. Mid-size and large employers pay 7.63%. The return-to-work premium (Whk) also depends on the sector and the firm's own claims; the 1.52% average is used.`,
    nl: `Klein: een premieloonsom over 2024 tot € 1.082.500 betaalt de lage Aof-premie van 6,27%. Middelgrote en grote werkgevers betalen 7,63%. De Whk-premie hangt ook af van de sector en de eigen uitkeringslasten; het gemiddelde van 1,52% wordt gebruikt.`,
    fr: `Petite : une masse salariale 2024 jusqu'à 1 082 500 € paie le taux bas du fonds invalidité, 6,27%. Les moyennes et grandes entreprises paient 7,63%. La cotisation Whk dépend aussi du secteur et des sinistres de l'entreprise ; la moyenne de 1,52% est utilisée.`,
  },
  'tip.costShort': { en: `Gross salary + employer premiums + Zvw levy.`, nl: `Brutoloon + werkgeverspremies + Zvw-heffing.`, fr: `Salaire brut + cotisations patronales + cotisation Zvw.` },
  'tip.er': {
    en: `Paid by your employer on top of your gross salary, on pay up to €79 409 a year: unemployment fund 2.74% (permanent contract), disability fund 6.27% or 7.63%, return-to-work fund about 1.52%. Since 2013 employees pay none of these themselves.`,
    nl: `Betaald door je werkgever bovenop je brutoloon, op het loon tot € 79.409 per jaar: AWf 2,74% (vast contract), Aof 6,27% of 7,63%, Whk gemiddeld 1,52%. Sinds 2013 betalen werknemers hier zelf niets van.`,
    fr: `Payées par votre employeur en plus du salaire brut, sur le salaire jusqu'à 79 409 € par an : fonds chômage 2,74% (contrat à durée indéterminée), fonds invalidité 6,27% ou 7,63%, reprise du travail environ 1,52%. Depuis 2013, le salarié n'en paie rien lui-même.`,
  },
  'tip.awf': {
    en: `Funds unemployment benefit (WW). 2.74% for a permanent contract with fixed hours; 7.74% for flexible and temporary contracts.`,
    nl: `Financiert de WW. 2,74% bij een vast contract met vaste uren; 7,74% bij flexibele en tijdelijke contracten.`,
    fr: `Finance l'allocation de chômage (WW). 2,74% pour un contrat à durée indéterminée à horaire fixe ; 7,74% pour les contrats flexibles et temporaires.`,
  },
  'tip.aof': {
    en: `Funds disability benefits (WIA, WAO) and, through a 0.5% surcharge, childcare allowance. 6.27% for small employers, 7.63% for others.`,
    nl: `Financiert de WIA en WAO en, via een opslag van 0,5%, de kinderopvangtoeslag. 6,27% voor kleine werkgevers, 7,63% voor andere.`,
    fr: `Finance l'invalidité (WIA, WAO) et, via une surtaxe de 0,5%, l'allocation de garde d'enfants. 6,27% pour les petits employeurs, 7,63% pour les autres.`,
  },
  'tip.whk': {
    en: `Funds partial disability (WGA) and sickness benefit for temporary staff. Set per sector or per firm; 1.52% is the 2026 average.`,
    nl: `Financiert de WGA en de Ziektewet voor flexwerkers. Per sector of per werkgever vastgesteld; 1,52% is het gemiddelde voor 2026.`,
    fr: `Finance l'invalidité partielle (WGA) et les indemnités maladie des contrats temporaires. Fixée par secteur ou par entreprise ; 1,52% est la moyenne 2026.`,
  },
  'tip.zvw': {
    en: `Your employer pays 6.10% of your pay, up to €79 409, to the health insurance fund. You still pay your own health insurance premium to an insurer, about €150 a month; that's left out.`,
    nl: `Je werkgever betaalt 6,10% van je loon, tot € 79.409, aan het Zorgverzekeringsfonds. Je betaalt daarnaast zelf je zorgpremie aan een verzekeraar, zo'n € 150 per maand; die is niet meegerekend.`,
    fr: `Votre employeur paie 6,10% de votre salaire, jusqu'à 79 409 €, au fonds d'assurance santé. Vous payez en plus votre propre prime à un assureur, environ 150 € par mois ; elle n'est pas comptée.`,
  },
  'tip.vv': {
    en: `27.65% of the first €38 883 funds the state pension (AOW 17.90%), survivors' benefit (Anw 0.10%) and long-term care (Wlz 9.65%). It's collected with income tax as one first-bracket rate of 35.75%.`,
    nl: `27,65% over de eerste € 38.883 financiert de AOW (17,90%), de Anw (0,10%) en de Wlz (9,65%). Het wordt samen met de inkomstenbelasting geheven als één tarief van 35,75% in de eerste schijf.`,
    fr: `27,65% des premiers 38 883 € financent la pension d'État (AOW 17,90%), les survivants (Anw 0,10%) et les soins de longue durée (Wlz 9,65%). Elles sont perçues avec l'impôt, en un seul taux de 35,75% dans la première tranche.`,
  },
  'tip.vvCredits': { en: `Premium share of your tax credits`, nl: `Premiedeel van je heffingskortingen`, fr: `Part cotisations de vos crédits d'impôt` },
  'tip.vvM': {
    en: `Tax credits are split by law between the tax and premium parts, in the ratio of 27.65 to 8.10.`,
    nl: `Heffingskortingen worden wettelijk verdeeld over het belasting- en premiedeel, in de verhouding 27,65 op 8,10.`,
    fr: `La loi répartit les crédits d'impôt entre la part impôt et la part cotisations, dans le rapport 27,65 pour 8,10.`,
  },
  'tip.irGross': {
    en: `Box 1 on your wage: 35.75% to €38 883 (of which 27.65% premiums), 37.56% to €78 426, 49.50% above. Shown here without the premium part.`,
    nl: `Box 1 op je loon: 35,75% tot € 38.883 (waarvan 27,65% premies), 37,56% tot € 78.426, 49,50% daarboven. Hier zonder het premiedeel.`,
    fr: `Box 1 sur votre salaire : 35,75% jusqu'à 38 883 € (dont 27,65% de cotisations), 37,56% jusqu'à 78 426 €, 49,50% au-delà. Montré ici sans la part cotisations.`,
  },
  'tip.ahk': {
    en: `Everyone gets €3 115 off their tax. From €29 736 it shrinks by 6.398% of income above that, and it's gone at €78 426.`,
    nl: `Iedereen krijgt € 3.115 korting op de belasting. Vanaf € 29.736 daalt die met 6,398% van het inkomen erboven, en ze is weg bij € 78.426.`,
    fr: `Tout le monde reçoit 3 115 € de réduction d'impôt. À partir de 29 736 €, il baisse de 6,398% du revenu au-delà et disparaît à 78 426 €.`,
  },
  'tip.ak': {
    en: `A credit for working. It grows with pay: 8.3% to €11 965, then 31% to €25 845, then 1.95% up to €5 685 at €45 592. Then it shrinks by 6.51% of pay above that, gone at €132 920.`,
    nl: `Een korting omdat je werkt. Ze groeit met je loon: 8,3% tot € 11.965, dan 31% tot € 25.845, dan 1,95% tot € 5.685 bij € 45.592. Daarna daalt ze met 6,51% van het loon erboven, weg bij € 132.920.`,
    fr: `Un crédit pour le travail. Il augmente avec le salaire : 8,3% jusqu'à 11 965 €, puis 31% jusqu'à 25 845 €, puis 1,95% jusqu'à 5 685 € à 45 592 €. Ensuite il baisse de 6,51% du salaire au-delà et disparaît à 132 920 €.`,
  },
  'tip.iack': {
    en: `For a single parent, or the lower-earning partner, with a child under 12: 11.45% of work income above €6 239, up to €3 032.`,
    nl: `Voor een alleenstaande ouder of de minstverdienende partner met een kind jonger dan 12: 11,45% van het arbeidsinkomen boven € 6.239, tot € 3.032.`,
    fr: `Pour un parent seul, ou le partenaire qui gagne le moins, avec un enfant de moins de 12 ans : 11,45% du revenu du travail au-delà de 6 239 €, jusqu'à 3 032 €.`,
  },
  'tip.yours': { en: v => `Yours: <b>${v}</b>.`, nl: v => `Die van jou: <b>${v}</b>.`, fr: v => `Le vôtre : <b>${v}</b>.` },
  'tip.creditLost': {
    en: v => `${v} of your credits can't be used: they can't exceed the tax you owe.`,
    nl: v => `${v} van je kortingen kun je niet gebruiken: ze kunnen niet hoger zijn dan je belasting.`,
    fr: v => `${v} de vos crédits sont perdus : ils ne peuvent pas dépasser l'impôt dû.`,
  },
  'tip.box1Income': { en: `Box 1 income`, nl: `Inkomen box 1`, fr: `Revenu box 1` },
  'tip.taxPerson': { en: `Wage tax and premiums`, nl: `Loonheffing`, fr: `Impôt et cotisations` },
  'tip.irShort': {
    en: `Box 1 tax on your wage after the tax credits, without the national insurance premiums.`,
    nl: `Box 1-belasting op je loon na heffingskortingen, zonder de premies volksverzekeringen.`,
    fr: `Impôt box 1 sur votre salaire après crédits d'impôt, sans les cotisations nationales.`,
  },
  'tip.irM': {
    en: `2026 rates below AOW age, Belastingplan 2026 as adopted on 16 December 2025.`,
    nl: `Tarieven 2026 onder de AOW-leeftijd, Belastingplan 2026 zoals aangenomen op 16 december 2025.`,
    fr: `Barème 2026 sous l'âge de la retraite, Belastingplan 2026 adopté le 16 décembre 2025.`,
  },
  'tip.irYou': { en: `You`, nl: `Jij`, fr: `Vous` },
  'tip.irPartner': { en: `Your partner`, nl: `Je partner`, fr: `Votre partenaire` },
  'tip.irHousehold': { en: `Household tax`, nl: `Belasting van het gezin`, fr: `Impôt du foyer` },
  'tip.irWithout': { en: `Household tax if you earned nothing`, nl: `Belasting als jij niets verdiende`, fr: `Impôt du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.tsl': {
    en: `Health-care allowance: up to €1 548 a year single or €2 952 as a couple, minus 13.73% of income above €29 736. Child budget: €2 580 per child, + €3 416 for a single parent, minus 7.6% of income above €29 736 (single) or €39 141 (couple).`,
    nl: `Zorgtoeslag: tot € 1.548 per jaar alleen of € 2.952 samen, min 13,73% van het inkomen boven € 29.736. Kindgebonden budget: € 2.580 per kind, + € 3.416 voor een alleenstaande ouder, min 7,6% van het inkomen boven € 29.736 (alleen) of € 39.141 (samen).`,
    fr: `Allocation santé : jusqu'à 1 548 € par an seul ou 2 952 € en couple, moins 13,73% du revenu au-delà de 29 736 €. Budget enfant : 2 580 € par enfant, + 3 416 € pour un parent seul, moins 7,6% du revenu au-delà de 29 736 € (seul) ou 39 141 € (couple).`,
  },
  'tip.zt': { en: `Health-care allowance, per year`, nl: `Zorgtoeslag per jaar`, fr: `Allocation santé, par an` },
  'tip.kgb': { en: `Child budget, per year`, nl: `Kindgebonden budget per jaar`, fr: `Budget enfant, par an` },
  'tip.tslWithout': { en: `What you'd get if you earned nothing`, nl: `Wat je zou krijgen als jij niets verdiende`, fr: `Ce que vous recevriez sans vos revenus` },
  'tip.tslYear': { en: `Your share, per year`, nl: `Jouw deel, per jaar`, fr: `Votre part, par an` },
  'tip.tslM': {
    en: `Rent allowance, childcare allowance and child benefit (not income-tested) are left out. Children aged 12 and over get €724 or €964 more child budget.`,
    nl: `Huurtoeslag, kinderopvangtoeslag en kinderbijslag (niet inkomensafhankelijk) zijn niet meegerekend. Kinderen vanaf 12 jaar geven € 724 of € 964 meer kindgebonden budget.`,
    fr: `L'allocation logement, l'allocation de garde et les allocations familiales (sans condition de revenus) ne sont pas comptées. Un enfant de 12 ans ou plus ajoute 724 € ou 964 € de budget enfant.`,
  },
  'tip.vatM': {
    en: `Food, books and medicines are at 9% and rent is exempt, so this is an upper bound.`,
    nl: `Voeding, boeken en geneesmiddelen staan op 9% en huur is vrijgesteld, dus dit is een bovengrens.`,
    fr: `L'alimentation, les livres et les médicaments sont à 9% et les loyers exonérés : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − national insurance premiums − income tax, after tax credits, + allowances if counted.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − premies volksverzekeringen − inkomstenbelasting, na heffingskortingen, + toeslagen als die meetellen.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisations nationales − impôt, après crédits d'impôt, + allocations si comptées.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · 2026, below AOW age (67 years and 3 months)`,
    nl: `Gebruikte regels · 2026, onder de AOW-leeftijd (67 jaar en 3 maanden)`,
    fr: `Règles utilisées · 2026, sous l'âge de la retraite (67 ans et 3 mois)`,
  },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `On pay up to <span class="num">€79 409</span>: unemployment fund <span class="num">2.74%</span> (permanent) or 7.74% (flexible), disability fund <span class="num">6.27%</span> (small) or <span class="num">7.63%</span>, return-to-work fund about <span class="num">1.52%</span>.`,
      `Health insurance levy (Zvw) <span class="num">6.10%</span> on the same base.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Op het loon tot <span class="num">€ 79.409</span>: AWf <span class="num">2,74%</span> (vast) of 7,74% (flex), Aof <span class="num">6,27%</span> (klein) of <span class="num">7,63%</span>, Whk gemiddeld <span class="num">1,52%</span>.`,
      `Werkgeversheffing Zvw <span class="num">6,10%</span> op dezelfde grondslag.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Sur le salaire jusqu'à <span class="num">79 409 €</span> : fonds chômage <span class="num">2,74%</span> (CDI) ou 7,74% (flexible), fonds invalidité <span class="num">6,27%</span> (petite) ou <span class="num">7,63%</span>, reprise du travail environ <span class="num">1,52%</span>.`,
      `Cotisation santé Zvw <span class="num">6,10%</span> sur la même base.`,
    ] },
  },
  'ref.ir': {
    en: () => ({ h: `2 · Box 1: income tax and national insurance`, li: [
      `<span class="num">35.75%</span> to €38 883, of which 27.65% national insurance premiums (AOW 17.90%, Anw 0.10%, Wlz 9.65%).`,
      `<span class="num">37.56%</span> from €38 883 to €78 426, <span class="num">49.50%</span> above.`,
      `No deduction for work expenses: the labour credit stands in for it.`,
    ] }),
    nl: () => ({ h: `2 · Box 1: inkomstenbelasting en volksverzekeringen`, li: [
      `<span class="num">35,75%</span> tot € 38.883, waarvan 27,65% premies volksverzekeringen (AOW 17,90%, Anw 0,10%, Wlz 9,65%).`,
      `<span class="num">37,56%</span> van € 38.883 tot € 78.426, <span class="num">49,50%</span> daarboven.`,
      `Geen aftrek voor beroepskosten: de arbeidskorting vervangt die.`,
    ] }),
    fr: () => ({ h: `2 · Box 1 : impôt et cotisations nationales`, li: [
      `<span class="num">35,75%</span> jusqu'à 38 883 €, dont 27,65% de cotisations nationales (AOW 17,90%, Anw 0,10%, Wlz 9,65%).`,
      `<span class="num">37,56%</span> de 38 883 € à 78 426 €, <span class="num">49,50%</span> au-delà.`,
      `Pas de déduction des frais professionnels : le crédit pour revenus du travail en tient lieu.`,
    ] }),
  },
  'ref.credits': {
    en: { h: `3 · Tax credits`, li: [
      `General: <span class="num">€3 115</span>, − 6.398% of income above €29 736.`,
      `Labour: up to <span class="num">€5 685</span> at €45 592, − 6.51% of pay above, gone at €132 920.`,
      `Working parents (child under 12): 11.45% of work income above €6 239, up to <span class="num">€3 032</span>.`,
      `Credits can't exceed the tax owed; the unused part is lost.`,
    ] },
    nl: { h: `3 · Heffingskortingen`, li: [
      `Algemeen: <span class="num">€ 3.115</span>, − 6,398% van het inkomen boven € 29.736.`,
      `Arbeidskorting: tot <span class="num">€ 5.685</span> bij € 45.592, − 6,51% van het loon erboven, weg bij € 132.920.`,
      `Combinatiekorting (kind jonger dan 12): 11,45% van het arbeidsinkomen boven € 6.239, tot <span class="num">€ 3.032</span>.`,
      `Kortingen kunnen niet hoger zijn dan de verschuldigde belasting; de rest vervalt.`,
    ] },
    fr: { h: `3 · Crédits d'impôt`, li: [
      `Général : <span class="num">3 115 €</span>, − 6,398% du revenu au-delà de 29 736 €.`,
      `Travail : jusqu'à <span class="num">5 685 €</span> à 45 592 €, − 6,51% du salaire au-delà, nul à 132 920 €.`,
      `Parents qui travaillent (enfant de moins de 12 ans) : 11,45% du revenu du travail au-delà de 6 239 €, jusqu'à <span class="num">3 032 €</span>.`,
      `Les crédits ne peuvent pas dépasser l'impôt dû ; le reste est perdu.`,
    ] },
  },
  'ref.tsl': {
    en: { h: `4 · Allowances`, li: [
      `Health-care allowance: <span class="num">€129</span> a month single, <span class="num">€246</span> as a couple, − 13.73% of income above €29 736.`,
      `Child budget: <span class="num">€2 580</span> a year per child, + <span class="num">€3 416</span> for a single parent, − 7.6% of income above €29 736 (single) or €39 141 (couple).`,
    ] },
    nl: { h: `4 · Toeslagen`, li: [
      `Zorgtoeslag: <span class="num">€ 129</span> per maand alleen, <span class="num">€ 246</span> samen, − 13,73% van het inkomen boven € 29.736.`,
      `Kindgebonden budget: <span class="num">€ 2.580</span> per jaar per kind, + <span class="num">€ 3.416</span> voor een alleenstaande ouder, − 7,6% van het inkomen boven € 29.736 (alleen) of € 39.141 (samen).`,
    ] },
    fr: { h: `4 · Allocations`, li: [
      `Allocation santé : <span class="num">129 €</span> par mois seul, <span class="num">246 €</span> en couple, − 13,73% du revenu au-delà de 29 736 €.`,
      `Budget enfant : <span class="num">2 580 €</span> par an et par enfant, + <span class="num">3 416 €</span> pour un parent seul, − 7,6% du revenu au-delà de 29 736 € (seul) ou 39 141 € (couple).`,
    ] },
  },
  'ref.vat': {
    en: { h: `5 · VAT on spending`, li: [
      `Standard rate <span class="num">21%</span>, applied to all of your net pay as if you spent it. Use the slider to see other rates.`,
      `VAT inside a price = price × r / (100 + r): at 21% that's 21 / 121 = <span class="num">17.36%</span> of what you pay.`,
    ] },
    nl: { h: `5 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">21%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar om andere tarieven te bekijken.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 21% is dat 21 / 121 = <span class="num">17,36%</span> van wat je betaalt.`,
    ] },
    fr: { h: `5 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">21%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour voir d'autres taux.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 21%, cela fait 21 / 121 = <span class="num">17,36%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `6 · Government and Parliament`, li: [
      `Prime Minister and ministers <span class="num">€211 552</span>, State Secretaries <span class="num">€197 608</span>, members of the House <span class="num">€145 248</span> a year, all with holiday pay and year-end bonus.`,
      `Wage tax and national insurance premiums with the usual credits; no employee insurance premiums.`,
    ] },
    nl: { h: `6 · Regering en parlement`, li: [
      `Minister-president en ministers <span class="num">€ 211.552</span>, staatssecretarissen <span class="num">€ 197.608</span>, Tweede Kamerleden <span class="num">€ 145.248</span> per jaar, telkens met vakantie- en eindejaarsuitkering.`,
      `Loonheffing en premies volksverzekeringen met de gewone kortingen; geen werknemersverzekeringen.`,
    ] },
    fr: { h: `6 · Gouvernement et Parlement`, li: [
      `Premier ministre et ministres <span class="num">211 552 €</span>, secrétaires d'État <span class="num">197 608 €</span>, députés <span class="num">145 248 €</span> par an, pécule de vacances et prime de fin d'année compris.`,
      `Impôt et cotisations nationales avec les crédits habituels ; pas d'assurances salariales.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Pension contributions (savings, though they lower taxable pay), your own health insurance premium (about €150 a month) and its deductible, the 30% ruling for expats, benefits in kind and travel allowances.`,
      `Rent and childcare allowances, child benefit, other income and deductions such as mortgage interest. People over AOW age pay no AOW premium. The year's final tax is shown, assuming steady pay.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Pensioenpremies (sparen, al verlagen ze het belastbare loon), je eigen zorgpremie (zo'n € 150 per maand) en eigen risico, de 30%-regeling voor expats, voordelen in natura en reiskostenvergoedingen.`,
      `Huur- en kinderopvangtoeslag, kinderbijslag, ander inkomen en aftrekposten zoals hypotheekrente. Wie de AOW-leeftijd heeft, betaalt geen AOW-premie. De belasting voor het hele jaar wordt getoond, met een gelijk loon.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Cotisations de retraite (épargne, même si elles réduisent le salaire imposable), votre prime d'assurance santé (environ 150 € par mois) et sa franchise, le régime des 30% pour expatriés, avantages en nature et indemnités de déplacement.`,
      `Allocation logement, allocation de garde, allocations familiales, autres revenus et déductions comme les intérêts hypothécaires. Les personnes ayant l'âge de l'AOW ne paient pas la cotisation AOW. L'impôt de l'année est montré, pour un salaire régulier.`,
    ] },
  },

  inheritLink: {
    en: `What heirs pay on an inheritance, by relationship →`,
    nl: `Wat erfgenamen betalen op een erfenis, volgens verwantschap →`,
    fr: `Ce que paient les héritiers, selon le lien de parenté →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and the Belastingdienst decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en de Belastingdienst zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et la Belastingdienst font foi.`,
  },

  'src.rates': { en: `Belastingdienst: 2026 rates and tax credits`, nl: `Belastingdienst: tarieven en heffingskortingen 2026`, fr: `Belastingdienst : barème et crédits d'impôt 2026` },
  'src.bp2026': { en: `Eerste Kamer: Belastingplan 2026`, nl: `Eerste Kamer: Belastingplan 2026`, fr: `Eerste Kamer : Belastingplan 2026` },
  'src.premies': { en: `Randstad: national insurance premiums 2026`, nl: `Randstad: premies volksverzekeringen 2026`, fr: `Randstad : cotisations nationales 2026` },
  'src.lonen': { en: `Van Oers: Special Lonen 2026 (employer rates)`, nl: `Van Oers: Special Lonen 2026`, fr: `Van Oers : Special Lonen 2026 (taux patronaux)` },
  'src.zt': { en: `Belastingdienst: health-care allowance 2026`, nl: `Belastingdienst: hoeveel zorgtoeslag`, fr: `Belastingdienst : allocation santé 2026` },
  'src.kgb': { en: `AFAS: child budget 2026 parameters`, nl: `AFAS: kengetallen kindgebonden budget 2026`, fr: `AFAS : paramètres du budget enfant 2026` },
  'src.wml': { en: `Rijksoverheid: minimum wage`, nl: `Rijksoverheid: bedragen minimumloon`, fr: `Rijksoverheid : salaire minimum` },
  'src.modaal': { en: `CPB: MEV 2026 (modal wage)`, nl: `CPB: MEV 2026 (modaal inkomen)`, fr: `CPB : MEV 2026 (salaire modal)` },
  'src.vat': { en: `Belastingdienst: VAT rates`, nl: `Belastingdienst: btw-tarieven`, fr: `Belastingdienst : taux de TVA` },
  'src.minSal': { en: `Rijksoverheid on ministers' pay`, nl: `Rijksoverheid over het salaris van ministers`, fr: `Rijksoverheid sur le traitement des ministres` },
  'src.mpPay': { en: `Salaristabel: MPs' pay 2026`, nl: `Salaristabel: salaris Tweede Kamerlid 2026`, fr: `Salaristabel : indemnité des députés 2026` },
};
