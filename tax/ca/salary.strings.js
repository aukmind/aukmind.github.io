window.TAX_STRINGS = {
  title: { en: `Canadian Buying Power`, nl: `Canadese koopkracht`, fr: `Pouvoir d'achat au Canada` },
  eyebrow: { en: `Canada · tax year 2026 · employee`, nl: `Canada · belastingjaar 2026 · werknemer`, fr: `Canada · année d'imposition 2026 · salarié` },
  eyebrowMinister: { en: `Canada · tax year 2026 · Member of Parliament`, nl: `Canada · belastingjaar 2026 · parlementslid`, fr: `Canada · année d'imposition 2026 · député` },
  lead: {
    en: `Every tax on a Canadian salary in 2026, from what your employer pays to what you can buy: CPP or QPP, Employment Insurance, federal income tax, your province's or territory's income tax, the Canada Workers Benefit and the Canada Child Benefit.`,
    nl: `Alle belastingen op een Canadees loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen: CPP of QPP, Employment Insurance, federale inkomstenbelasting, de inkomstenbelasting van je provincie of territorium, de Canada Workers Benefit en de Canada Child Benefit.`,
    fr: `Tous les prélèvements sur un salaire canadien en 2026, de ce que paie votre employeur à ce que vous pouvez acheter : RPC ou RRQ, assurance-emploi, impôt fédéral, impôt de votre province ou territoire, Allocation canadienne pour les travailleurs et Allocation canadienne pour enfants.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married or common-law. Each partner files their own return; the couple's income counts for the spousal amount, the Canada Child Benefit and the Canada Workers Benefit.`,
    nl: `Gehuwd of samenwonend (common-law). Elke partner doet een eigen aangifte; het inkomen van het koppel telt voor het partnerbedrag, de Canada Child Benefit en de Canada Workers Benefit.`,
    fr: `Mariés ou conjoints de fait. Chacun produit sa propre déclaration ; le revenu du couple compte pour le montant pour époux, l'Allocation canadienne pour enfants et l'Allocation canadienne pour les travailleurs.`,
  },
  under3: { en: `Of whom under 6`, nl: `Waarvan jonger dan 6`, fr: `Dont moins de 6 ans` },
  fewerUnder3: { en: `Fewer children under 6`, nl: `Minder kinderen onder 6`, fr: `Moins d'enfants de moins de 6 ans` },
  moreUnder3: { en: `More children under 6`, nl: `Meer kinderen onder 6`, fr: `Plus d'enfants de moins de 6 ans` },
  includePa: { en: `Count the Canada Workers Benefit`, nl: `Canada Workers Benefit meetellen`, fr: `Compter l'Allocation canadienne pour les travailleurs` },
  commune: { en: `Province or territory`, nl: `Provincie of territorium`, fr: `Province ou territoire` },
  searchCommune: { en: `Search a province or territory`, nl: `Zoek een provincie of territorium`, fr: `Rechercher une province ou un territoire` },
  searchN: { en: n => `Search ${n} provinces and territories`, nl: n => `Zoek in ${n} provincies en territoria`, fr: n => `Rechercher parmi ${n} provinces et territoires` },
  loadingCommunes: { en: `Loading provinces…`, nl: `Provincies laden…`, fr: `Chargement des provinces…` },
  noCommune: { en: q => `Nothing matches "${q}"`, nl: q => `Niets gevonden voor "${q}"`, fr: q => `Rien ne correspond à « ${q} »` },
  communesError: { en: `Couldn't load the province list.`, nl: `De lijst met provincies kon niet geladen worden.`, fr: `Impossible de charger la liste des provinces.` },
  setByCommune: { en: `(set by the province)`, nl: `(volgt uit de provincie)`, fr: `(déterminé par la province)` },
  noProv: { en: `no province picked`, nl: `geen provincie gekozen`, fr: `aucune province choisie` },
  'provHint.std': {
    en: (top, sales) => `Top provincial rate ${top}, on top of the federal 33%. Sales tax ${sales} (GST plus HST or PST).`,
    nl: (top, sales) => `Hoogste provinciaal tarief ${top}, bovenop de federale 33%. Omzetbelasting ${sales} (GST plus HST of PST).`,
    fr: (top, sales) => `Taux provincial le plus élevé ${top}, en plus des 33% fédéraux. Taxe de vente ${sales} (TPS plus TVH ou TVP).`,
  },
  'provHint.on': {
    en: (top, sales) => `Top rate ${top}, raised by the Ontario surtax to 20.53%, plus the Ontario Health Premium. HST ${sales}.`,
    nl: (top, sales) => `Toptarief ${top}, door de Ontario-surtax opgetrokken tot 20,53%, plus de Ontario Health Premium. HST ${sales}.`,
    fr: (top, sales) => `Taux le plus élevé ${top}, porté à 20,53% par la surtaxe ontarienne, plus la contribution-santé de l'Ontario. TVH ${sales}.`,
  },
  'provHint.qc': {
    en: (top, sales) => `Quebec runs its own income tax (top rate ${top}) and pension plan (QPP), and has parental insurance (QPIP); federal tax is cut by 16.5%. GST + QST ${sales}.`,
    nl: (top, sales) => `Quebec heft een eigen inkomstenbelasting (toptarief ${top}), heeft een eigen pensioenstelsel (QPP) en ouderschapsverzekering (QPIP); de federale belasting daalt met 16,5%. GST + QST ${sales}.`,
    fr: (top, sales) => `Le Québec a son propre impôt (taux le plus élevé ${top}), son régime de rentes (RRQ) et le RQAP ; l'impôt fédéral est réduit de 16,5%. TPS + TVQ ${sales}.`,
  },
  'prov.AB': { en: `Alberta`, nl: `Alberta`, fr: `Alberta` },
  'prov.BC': { en: `British Columbia`, nl: `Brits-Columbia`, fr: `Colombie-Britannique` },
  'prov.MB': { en: `Manitoba`, nl: `Manitoba`, fr: `Manitoba` },
  'prov.NB': { en: `New Brunswick`, nl: `New Brunswick`, fr: `Nouveau-Brunswick` },
  'prov.NL': { en: `Newfoundland and Labrador`, nl: `Newfoundland en Labrador`, fr: `Terre-Neuve-et-Labrador` },
  'prov.NS': { en: `Nova Scotia`, nl: `Nova Scotia`, fr: `Nouvelle-Écosse` },
  'prov.NT': { en: `Northwest Territories`, nl: `Northwest Territories`, fr: `Territoires du Nord-Ouest` },
  'prov.NU': { en: `Nunavut`, nl: `Nunavut`, fr: `Nunavut` },
  'prov.ON': { en: `Ontario`, nl: `Ontario`, fr: `Ontario` },
  'prov.PE': { en: `Prince Edward Island`, nl: `Prins Edwardeiland`, fr: `Île-du-Prince-Édouard` },
  'prov.QC': { en: `Quebec`, nl: `Quebec`, fr: `Québec` },
  'prov.SK': { en: `Saskatchewan`, nl: `Saskatchewan`, fr: `Saskatchewan` },
  'prov.YT': { en: `Yukon`, nl: `Yukon`, fr: `Yukon` },
  'size.small': { en: `Small payroll`, nl: `Kleine loonsom`, fr: `Petite masse salariale` },
  'size.large': { en: `Large payroll`, nl: `Grote loonsom`, fr: `Grande masse salariale` },
  'tip.size': {
    en: `Five provinces tax the employer's whole payroll. A large employer pays the full rate on every salary: Ontario and BC 1.95%, Manitoba 2.15%, Newfoundland and Labrador 2%, Quebec's Health Services Fund 4.26% plus 1% for training. A small one is under the exemption (around CA$1 million to CA$2 million of payroll) and pays nothing, except in Quebec where the Health Services Fund starts at 1.65%.`,
    nl: `Vijf provincies belasten de volledige loonsom van de werkgever. Een grote werkgever betaalt het volle tarief op elk loon: Ontario en BC 1,95%, Manitoba 2,15%, Newfoundland en Labrador 2%, het Health Services Fund van Quebec 4,26% plus 1% voor opleiding. Een kleine zit onder de vrijstelling (zowat CA$ 1 tot 2 miljoen loonsom) en betaalt niets, behalve in Quebec waar het Health Services Fund begint bij 1,65%.`,
    fr: `Cinq provinces taxent la masse salariale de l'employeur. Un grand employeur paie le plein taux sur chaque salaire : Ontario et C.-B. 1,95%, Manitoba 2,15%, Terre-Neuve-et-Labrador 2%, Fonds des services de santé du Québec 4,26% plus 1% pour la formation. Un petit employeur est sous l'exemption (environ 1 à 2 millions CA$ de masse salariale) et ne paie rien, sauf au Québec où le FSS commence à 1,65%.`,
  },
  vatStandard: { en: `(GST + provincial sales tax)`, nl: `(GST + provinciale omzetbelasting)`, fr: `(TPS + taxe de vente provinciale)` },
  includeVat: { en: `Include sales tax on what you spend`, nl: `Omzetbelasting op je uitgaven meerekenen`, fr: `Inclure la taxe de vente sur vos dépenses` },
  vatRateLabel: { en: `Sales tax rate:`, nl: `Omzetbelasting:`, fr: `Taux de taxe de vente :` },
  'comp.vat': { en: `GST/HST/PST`, nl: `GST/HST/PST`, fr: `TPS/TVH/TVP` },
  'bd.vat': { en: r => `Sales tax on spending it all (${r})`, nl: r => `Omzetbelasting als je alles uitgeeft (${r})`, fr: r => `Taxe de vente si vous dépensez tout (${r})` },
  'rowDesc.full': { en: `employer + employee + sales tax`, nl: `werkgever + werknemer + omzetbelasting`, fr: `employeur + salarié + taxe de vente` },
  'rowTipM.full': {
    en: `Employer contributions + employee taxes + sales tax, out of employer cost.`,
    nl: `Werkgeversbijdragen + belastingen van de werknemer + omzetbelasting, op de loonkost.`,
    fr: `Cotisations patronales + impôts du salarié + taxe de vente, rapportés au coût employeur.`,
  },
  vatWhenSpent: { en: `Sales tax, paid when you spend it`, nl: `Omzetbelasting, betaald wanneer je het uitgeeft`, fr: `Taxe de vente, payée quand vous le dépensez` },
  'chip.full': {
    en: `<b>Full tax</b>: share of your employer cost that ends up as tax, sales tax included.`,
    nl: `<b>Totale belasting</b>: deel van je loonkost dat als belasting eindigt, omzetbelasting inbegrepen.`,
    fr: `<b>Taxation totale</b> : part de votre coût employeur qui finit en impôts, taxe de vente comprise.`,
  },
  'chip.power': {
    en: vat => `<b>Buying power</b>: share of your employer cost you can actually spend on goods and services${vat ? ', after sales tax' : ''}. The mirror of ${vat ? 'Full' : 'Work'} tax.`,
    nl: vat => `<b>Koopkracht</b>: deel van je loonkost dat je echt aan goederen en diensten kunt uitgeven${vat ? ', na omzetbelasting' : ''}. Het spiegelbeeld van de ${vat ? 'totale belasting' : 'belasting op arbeid'}.`,
    fr: vat => `<b>Pouvoir d'achat</b> : part de votre coût employeur que vous pouvez réellement dépenser en biens et services${vat ? ', après taxe de vente' : ''}. Le miroir de la ${vat ? 'taxation totale' : 'taxation du travail'}.`,
  },
  raise: {
    en: o => `A raise of <b>${o.h} gross/month</b> costs your employer <b>${o.cost}</b>/month and adds <b>${o.net}</b> to your net pay${o.afterVat ? `, which buys <b>${o.afterVat}</b> worth of goods after sales tax` : ''}. <b>${o.taxShare}</b> of what your employer pays for the raise goes to tax.`,
    nl: o => `Een opslag van <b>${o.h} bruto/maand</b> kost je werkgever <b>${o.cost}</b>/maand en levert je <b>${o.net}</b> extra nettoloon op${o.afterVat ? `, waarmee je na omzetbelasting voor <b>${o.afterVat}</b> aan goederen koopt` : ''}. <b>${o.taxShare}</b> van wat je werkgever voor de opslag betaalt, gaat naar belastingen.`,
    fr: o => `Une augmentation de <b>${o.h} brut/mois</b> coûte <b>${o.cost}</b>/mois à votre employeur et ajoute <b>${o.net}</b> à votre salaire net${o.afterVat ? `, de quoi acheter <b>${o.afterVat}</b> de biens après taxe de vente` : ''}. <b>${o.taxShare}</b> de ce que votre employeur paie pour l'augmentation va aux impôts.`,
  },
  'tip.vatH': { en: `Sales tax on what you spend`, nl: `Omzetbelasting op wat je uitgeeft`, fr: `Taxe de vente sur vos dépenses` },
  'tip.vat1': {
    en: (r, base, price, vat) => `Sales tax of ${r} is added at the till: an item tagged ${base} costs <b>${price}</b>, and ${vat} of that goes to Ottawa and the province.`,
    nl: (r, base, price, vat) => `Omzetbelasting van ${r} komt er aan de kassa bij: een product met een prijskaartje van ${base} kost <b>${price}</b>, en ${vat} daarvan gaat naar Ottawa en de provincie.`,
    fr: (r, base, price, vat) => `La taxe de vente de ${r} s'ajoute en caisse : un article affiché ${base} coûte <b>${price}</b>, dont ${vat} vont à Ottawa et à la province.`,
  },
  'tip.vat2': {
    en: (r, rr, share) => `So sales tax is ${r} ÷ ${rr} = <b>${share}</b> of what you pay, not ${r}%.`,
    nl: (r, rr, share) => `Omzetbelasting is dus ${r} ÷ ${rr} = <b>${share}</b> van wat je betaalt, niet ${r}%.`,
    fr: (r, rr, share) => `La taxe de vente représente donc ${r} ÷ ${rr} = <b>${share}</b> de ce que vous payez, pas ${r}%.`,
  },
  'tip.yoursVat': {
    en: `Your net salary minus the sales tax paid on everything you buy with it.`,
    nl: `Je nettoloon min de omzetbelasting op alles wat je ermee koopt.`,
    fr: `Votre salaire net moins la taxe de vente payée sur tout ce que vous achetez avec.`,
  },
  'tip.vatM': {
    en: `GST is 5% everywhere. Five provinces merge it into an HST (13% to 15%), British Columbia, Manitoba and Saskatchewan add a PST, Quebec adds QST, and Alberta and the territories have GST only. Basic groceries, rent and many services are zero-rated or exempt, so this is an upper bound.`,
    nl: `GST is overal 5%. Vijf provincies voegen die samen tot een HST (13% tot 15%), Brits-Columbia, Manitoba en Saskatchewan heffen een PST bovenop, Quebec een QST, en Alberta en de territoria enkel GST. Basisvoeding, huur en veel diensten zijn vrijgesteld, dus dit is een bovengrens.`,
    fr: `La TPS est de 5% partout. Cinq provinces la fusionnent en TVH (13% à 15%), la Colombie-Britannique, le Manitoba et la Saskatchewan ajoutent une TVP, le Québec la TVQ, et l'Alberta et les territoires n'ont que la TPS. L'épicerie de base, les loyers et beaucoup de services sont détaxés ou exonérés : c'est donc un maximum.`,
  },

  // Minister mode
  ministerOn: { en: `🏛️ I AM AN MP OR MINISTER`, nl: `🏛️ IK BEN PARLEMENTSLID OF MINISTER`, fr: `🏛️ JE SUIS DÉPUTÉ OU MINISTRE` },
  'minRole.mp': { en: `Member of Parliament`, nl: `Parlementslid`, fr: `Député` },
  'minRole.sec': { en: `Secretary of State`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'minRole.min': { en: `Cabinet Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `The MP's sessional allowance plus the additional salary of the office, taxed as employment income with CPP or QPP. MPs don't pay Employment Insurance.`,
    nl: `De parlementaire vergoeding plus het extra loon voor het ambt, belast als inkomen uit arbeid met CPP of QPP. Parlementsleden betalen geen Employment Insurance.`,
    fr: `L'indemnité de député plus le traitement supplémentaire de la fonction, imposés comme un revenu d'emploi avec RPC ou RRQ. Les députés ne cotisent pas à l'assurance-emploi.`,
  },
  minSalaryHint: {
    en: `Yearly rate from 1 April 2026. Statutory amount by default.`,
    nl: `Jaarbedrag vanaf 1 april 2026. Standaard het wettelijke bedrag.`,
    fr: `Montant annuel depuis le 1er avril 2026. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `Every MP receives the sessional allowance, CA$217,700 from 1 April 2026; it rises each April with private-sector wage settlements. Office holders add a salary: CA$217,700 more for the Prime Minister, CA$103,600 for a Cabinet Minister, CA$77,500 for a Secretary of State. All of it is employment income, with CPP or QPP but no Employment Insurance. Not counted: the MP pension plan contribution, the official residences and the travel and office budgets.`,
    nl: `Elk parlementslid krijgt de parlementaire vergoeding, CA$ 217.700 vanaf 1 april 2026; ze stijgt elk jaar in april met de loonakkoorden in de privésector. Ambtsdragers krijgen er een loon bij: CA$ 217.700 extra voor de premier, CA$ 103.600 voor een minister, CA$ 77.500 voor een staatssecretaris. Alles is inkomen uit arbeid, met CPP of QPP maar zonder Employment Insurance. Niet meegeteld: de pensioenbijdrage van parlementsleden, de ambtswoningen en de reis- en kantoorbudgetten.`,
    fr: `Chaque député reçoit l'indemnité de session, 217 700 CA$ depuis le 1er avril 2026 ; elle augmente chaque avril selon les règlements salariaux du secteur privé. Les titulaires de charge reçoivent un traitement en plus : 217 700 CA$ pour le premier ministre, 103 600 CA$ pour un ministre, 77 500 CA$ pour un secrétaire d'État. Tout est revenu d'emploi, avec RPC ou RRQ mais sans assurance-emploi. Non comptés : la cotisation au régime de retraite des députés, les résidences officielles et les budgets de déplacement et de bureau.`,
  },
  'bd.minGross': { en: `Sessional allowance and salary`, nl: `Parlementaire vergoeding en loon`, fr: `Indemnité et traitement` },
  'bd.minEr': { en: `Government CPP/QPP contributions`, nl: `CPP/QPP-bijdragen van de overheid`, fr: `Cotisations RPC/RRQ de l'État` },
  'bd.minEe': { en: `CPP/QPP contributions`, nl: `CPP/QPP-bijdragen`, fr: `Cotisations RPC/RRQ` },
  'bd.stateCost': { en: `Total paid by the government`, nl: `Totaal betaald door de overheid`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The MP's sessional allowance plus the additional salary of the office, without the office budget, residence or travel.`,
    nl: `De parlementaire vergoeding plus het extra loon voor het ambt, zonder kantoorbudget, woning of reizen.`,
    fr: `L'indemnité de session plus le traitement supplémentaire de la fonction, hors budget de bureau, résidence et déplacements.`,
  },
  'tip.stateCost': {
    en: `Salary + the matching CPP or QPP contribution. The federal government pays no provincial payroll tax.`,
    nl: `Loon + de overeenkomstige CPP- of QPP-bijdrage. De federale overheid betaalt geen provinciale loonsombelasting.`,
    fr: `Traitement + la cotisation RPC ou RRQ correspondante. L'État fédéral ne paie pas de taxe provinciale sur la masse salariale.`,
  },
  'tip.minEr': {
    en: `The House of Commons matches the CPP or QPP contribution. No Employment Insurance, no provincial payroll tax. The employer side of the MP pension plan isn't counted.`,
    nl: `Het Lagerhuis betaalt dezelfde CPP- of QPP-bijdrage. Geen Employment Insurance, geen provinciale loonsombelasting. Het werkgeversdeel van het pensioenstelsel van parlementsleden telt niet mee.`,
    fr: `La Chambre des communes verse la même cotisation RPC ou RRQ. Pas d'assurance-emploi ni de taxe provinciale sur la masse salariale. La part employeur du régime de retraite des députés n'est pas comptée.`,
  },
  'tip.minEe': {
    en: `CPP or QPP like any employee, up to the second ceiling. MPs aren't insured for Employment Insurance. The MP pension plan contribution isn't counted.`,
    nl: `CPP of QPP zoals elke werknemer, tot het tweede plafond. Parlementsleden zijn niet verzekerd voor Employment Insurance. De pensioenbijdrage van parlementsleden telt niet mee.`,
    fr: `RPC ou RRQ comme tout salarié, jusqu'au second plafond. Les députés ne sont pas assurés à l'assurance-emploi. La cotisation au régime de retraite des députés n'est pas comptée.`,
  },
  'tip.minCwb': { en: `Not paid at this income.`, nl: `Niet uitbetaald bij dit inkomen.`, fr: `Non versée à ce niveau de revenu.` },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.min': { en: `Cabinet Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.sec': { en: `Secretary of State`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'stat.mp': { en: `Member of Parliament`, nl: `Parlementslid`, fr: `Député` },
  'pol.stat.pm': { en: `Sessional allowance plus the Prime Minister's salary`, nl: `Parlementaire vergoeding plus het loon van de premier`, fr: `Indemnité de session plus le traitement du premier ministre` },
  'pol.stat.min': { en: `Sessional allowance plus a minister's salary`, nl: `Parlementaire vergoeding plus het loon van een minister`, fr: `Indemnité de session plus le traitement d'un ministre` },
  'pol.stat.sec': { en: `Sessional allowance plus a Secretary of State's salary`, nl: `Parlementaire vergoeding plus het loon van een staatssecretaris`, fr: `Indemnité de session plus le traitement d'un secrétaire d'État` },
  'pol.stat.mp': { en: `Sessional allowance, without the office budget`, nl: `Parlementaire vergoeding, zonder kantoorbudget`, fr: `Indemnité de session, hors budget de bureau` },
  'polNote.pm': {
    en: `Employment income with CPP or QPP, no Employment Insurance. 24 Sussex, Harrington Lake and travel aren't counted. The head sits at the employee salary with the same net, with your household; the dot is the actual gross.`,
    nl: `Inkomen uit arbeid met CPP of QPP, zonder Employment Insurance. De ambtswoningen en reizen tellen niet mee. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin; het bolletje is het echte bruto.`,
    fr: `Revenu d'emploi avec RPC ou RRQ, sans assurance-emploi. Les résidences officielles et les déplacements ne sont pas comptés. La tête est au salaire d'un salarié au même net, avec votre foyer ; le point est le vrai brut.`,
  },
  'polNote.min': {
    en: `Employment income with CPP or QPP, no Employment Insurance, MP pension contribution not counted. The head sits at the employee salary with the same net; the dot is the actual gross.`,
    nl: `Inkomen uit arbeid met CPP of QPP, zonder Employment Insurance; de pensioenbijdrage telt niet mee. Het hoofdje staat bij het werknemersloon met hetzelfde netto; het bolletje is het echte bruto.`,
    fr: `Revenu d'emploi avec RPC ou RRQ, sans assurance-emploi ; cotisation de retraite non comptée. La tête est au salaire d'un salarié au même net ; le point est le vrai brut.`,
  },
  'polNote.sec': {
    en: `Employment income with CPP or QPP, no Employment Insurance, MP pension contribution not counted. The head sits at the employee salary with the same net; the dot is the actual gross.`,
    nl: `Inkomen uit arbeid met CPP of QPP, zonder Employment Insurance; de pensioenbijdrage telt niet mee. Het hoofdje staat bij het werknemersloon met hetzelfde netto; het bolletje is het echte bruto.`,
    fr: `Revenu d'emploi avec RPC ou RRQ, sans assurance-emploi ; cotisation de retraite non comptée. La tête est au salaire d'un salarié au même net ; le point est le vrai brut.`,
  },
  'polNote.mp': {
    en: `Employment income with CPP or QPP, no Employment Insurance, MP pension contribution not counted. Office and staff budgets aren't counted. The head sits at the employee salary with the same net; the dot is the actual gross.`,
    nl: `Inkomen uit arbeid met CPP of QPP, zonder Employment Insurance; de pensioenbijdrage telt niet mee. Kantoor- en personeelsbudget tellen niet mee. Het hoofdje staat bij het werknemersloon met hetzelfde netto; het bolletje is het echte bruto.`,
    fr: `Revenu d'emploi avec RPC ou RRQ, sans assurance-emploi ; cotisation de retraite non comptée. Les budgets de bureau et de personnel ne sont pas comptés. La tête est au salaire d'un salarié au même net ; le point est le vrai brut.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. Office holders are placed where an employee in your province would earn the same net. Pay rates: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Ambtsdragers staan waar een werknemer in jouw provincie hetzelfde netto zou verdienen. Lonen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. Les titulaires de charge sont placés là où un salarié de votre province gagnerait le même net. Rémunérations : ${links}.`,
  },
  'src.pol.pm': { en: `House of Commons: additional salaries 2026`, nl: `Lagerhuis: extra lonen 2026`, fr: `Chambre des communes : traitements 2026` },
  'src.pol.min': { en: `House of Commons: additional salaries 2026`, nl: `Lagerhuis: extra lonen 2026`, fr: `Chambre des communes : traitements 2026` },
  'src.pol.sec': { en: `House of Commons: additional salaries 2026`, nl: `Lagerhuis: extra lonen 2026`, fr: `Chambre des communes : traitements 2026` },
  'src.pol.mp': { en: `House of Commons: sessional allowance 2026`, nl: `Lagerhuis: parlementaire vergoeding 2026`, fr: `Chambre des communes : indemnité de session 2026` },
  bracketTop: { en: `CPP ceiling`, nl: `CPP-plafond`, fr: `plafond du RPC` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why so high between ${a} and ${b}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom zo hoog tussen ${a} en ${b}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi si élevé entre ${a} et ${b} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, rate, max) => b
      ? `The Canada Workers Benefit tops up low pay, up to ${max} a year for your household. In this band it's withdrawn at ${rate} of each extra dollar of net income, on top of CPP, EI and income tax. It's gone at ${b}. With children, the Canada Child Benefit is also being cut from much lower incomes.`
      : `Without the Canada Workers Benefit (switched off, or none for your household at this pay), a low salary from the federal minimum wage of ${a} pays CPP from CA$3,500 a year and EI from the first dollar; the basic personal amounts keep most of it free of income tax.`,
    nl: (a, b, rate, max) => b
      ? `De Canada Workers Benefit vult lage lonen aan, tot ${max} per jaar voor jouw gezin. In deze zone wordt die afgebouwd met ${rate} van elke extra dollar netto-inkomen, bovenop CPP, EI en inkomstenbelasting. Hij verdwijnt bij ${b}. Met kinderen wordt ook de Canada Child Benefit al vanaf veel lagere inkomens afgebouwd.`
      : `Zonder Canada Workers Benefit (uitgeschakeld, of niets voor jouw gezin bij dit loon) betaalt een laag loon vanaf het federale minimumloon van ${a} CPP vanaf CA$ 3.500 per jaar en EI vanaf de eerste dollar; de persoonlijke basisbedragen houden het grootste deel vrij van inkomstenbelasting.`,
    fr: (a, b, rate, max) => b
      ? `L'Allocation canadienne pour les travailleurs complète les bas salaires, jusqu'à ${max} par an pour votre foyer. Dans cette zone elle diminue de ${rate} par dollar de revenu net en plus, en plus du RPC, de l'AE et de l'impôt. Elle s'éteint à ${b}. Avec des enfants, l'Allocation canadienne pour enfants diminue aussi dès des revenus bien plus bas.`
      : `Sans l'Allocation canadienne pour les travailleurs (désactivée, ou nulle pour votre foyer à ce salaire), un bas salaire dès le salaire minimum fédéral de ${a} paie le RPC au-delà de 3 500 CA$ par an et l'AE dès le premier dollar ; les montants personnels de base en exonèrent l'essentiel d'impôt.`,
  },
  topTitle: {
    en: at => `Why does the rate dip above ${at}?`,
    nl: at => `Waarom daalt het tarief boven ${at}?`,
    fr: at => `Pourquoi le taux baisse-t-il au-delà de ${at} ?`,
  },
  topBody: {
    en: (at, ei) => `CPP stops at CA$85,000 a year: 5.95% up to CA$74,600, then 4% more up to the second ceiling, for you and again for your employer. EI already stopped at ${ei}. Above it, each extra dollar escapes those contributions, so the marginal rate drops even though income tax keeps rising.`,
    nl: (at, ei) => `CPP stopt bij CA$ 85.000 per jaar: 5,95% tot CA$ 74.600, daarna nog 4% tot het tweede plafond, voor jou en nog eens voor je werkgever. EI stopte al bij ${ei}. Daarboven ontsnapt elke extra dollar aan die bijdragen, dus het marginale tarief daalt ook al stijgt de inkomstenbelasting.`,
    fr: (at, ei) => `Le RPC s'arrête à 85 000 CA$ par an : 5,95% jusqu'à 74 600 CA$, puis 4% de plus jusqu'au second plafond, pour vous et autant pour l'employeur. L'AE s'arrêtait déjà à ${ei}. Au-delà, chaque dollar échappe à ces cotisations : le taux marginal baisse alors que l'impôt continue de monter.`,
  },

  // Tax components
  'comp.er': { en: `Employer contributions`, nl: `Werkgeversbijdragen`, fr: `Charges patronales` },
  'comp.ee': { en: `CPP/QPP, EI and QPIP`, nl: `CPP/QPP, EI en QPIP`, fr: `RPC/RRQ, AE et RQAP` },
  'comp.sp': { en: `Territorial payroll tax`, nl: `Loonbelasting van het territorium`, fr: `Taxe sur la masse salariale (territoire)` },
  'comp.fed': { en: `Federal income tax`, nl: `Federale inkomstenbelasting`, fr: `Impôt fédéral` },
  'comp.prov': { en: `Provincial income tax`, nl: `Provinciale inkomstenbelasting`, fr: `Impôt provincial` },
  'comp.cwb': { en: `Canada Workers Benefit`, nl: `Canada Workers Benefit`, fr: `Allocation canadienne pour les travailleurs` },
  'comp.ccb': { en: `Canada Child Benefit lost`, nl: `Verloren Canada Child Benefit`, fr: `Allocation canadienne pour enfants perdue` },
  cwbReceived: { en: `+ Canada Workers Benefit received`, nl: `+ Canada Workers Benefit ontvangen`, fr: `+ Allocation canadienne pour les travailleurs reçue` },
  cwbLost: { en: `Canada Workers Benefit your pay costs the household`, nl: `Canada Workers Benefit die je loon het gezin kost`, fr: `Allocation pour les travailleurs que votre salaire fait perdre au foyer` },
  cwbLostShort: { en: `Canada Workers Benefit lost`, nl: `Verloren Canada Workers Benefit`, fr: `Allocation pour les travailleurs perdue` },
  ccbReceived: { en: `+ Canada Child Benefit gained`, nl: `+ Extra Canada Child Benefit`, fr: `+ Allocation canadienne pour enfants gagnée` },
  ccbLost: { en: `Canada Child Benefit your pay takes away`, nl: `Canada Child Benefit die je loon wegneemt`, fr: `Allocation canadienne pour enfants que votre salaire retire` },
  ccbLostShort: { en: `Canada Child Benefit lost`, nl: `Verloren Canada Child Benefit`, fr: `Allocation canadienne pour enfants perdue` },
  ccbGained: { en: `Canada Child Benefit gained`, nl: `Extra Canada Child Benefit`, fr: `Allocation canadienne pour enfants gagnée` },
  'bd.cpp': { en: `CPP 5.95%`, nl: `CPP 5,95%`, fr: `RPC 5,95%` },
  'bd.cpp2': { en: `CPP2 4%`, nl: `CPP2 4%`, fr: `RPC2 4%` },
  'bd.qpp': { en: `QPP 6.3%`, nl: `QPP 6,3%`, fr: `RRQ 6,3%` },
  'bd.qpp2': { en: `QPP2 4%`, nl: `QPP2 4%`, fr: `RRQ2 4%` },
  'bd.cppAll': { en: `Canada Pension Plan (CPP + CPP2)`, nl: `Canada Pension Plan (CPP + CPP2)`, fr: `Régime de pensions du Canada (RPC + RPC2)` },
  'bd.qppAll': { en: `Quebec Pension Plan (QPP + QPP2)`, nl: `Quebec Pension Plan (QPP + QPP2)`, fr: `Régime de rentes du Québec (RRQ + RRQ2)` },
  'bd.ei': { en: `Employment Insurance`, nl: `Employment Insurance`, fr: `Assurance-emploi` },
  'bd.qpip': { en: `Quebec Parental Insurance Plan`, nl: `Quebec Parental Insurance Plan`, fr: `Régime québécois d'assurance parentale` },
  'bd.erCpp': { en: `Employer CPP + CPP2`, nl: `CPP + CPP2 werkgever`, fr: `RPC + RPC2 employeur` },
  'bd.erQpp': { en: `Employer QPP + QPP2`, nl: `QPP + QPP2 werkgever`, fr: `RRQ + RRQ2 employeur` },
  'bd.erEi': { en: `Employer EI (1.4 × employee)`, nl: `EI werkgever (1,4 × werknemer)`, fr: `AE employeur (1,4 × salarié)` },
  'bd.erQpip': { en: `Employer QPIP 0.602%`, nl: `QPIP werkgever 0,602%`, fr: `RQAP employeur 0,602%` },
  'bd.eht': { en: `Provincial payroll tax`, nl: `Provinciale loonsombelasting`, fr: `Taxe provinciale sur la masse salariale` },
  'bd.fss': { en: `Health Services Fund`, nl: `Health Services Fund`, fr: `Fonds des services de santé` },
  'bd.fssAll': { en: `Health Services Fund, CNT, training`, nl: `Health Services Fund, CNT, opleiding`, fr: `FSS, CNT et formation` },
  'bd.cnt': { en: `Labour standards (CNT) 0.06%`, nl: `Arbeidsnormen (CNT) 0,06%`, fr: `Normes du travail (CNT) 0,06%` },
  'bd.wsdrf': { en: `Training levy (WSDRF) 1%`, nl: `Opleidingsheffing (WSDRF) 1%`, fr: `Développement de la main-d'œuvre (FDRCMO) 1%` },
  'bd.taxable': { en: `Net income`, nl: `Netto-inkomen`, fr: `Revenu net` },
  'bd.surtax': { en: `Ontario surtax`, nl: `Ontario-surtax`, fr: `Surtaxe de l'Ontario` },
  'bd.otr': { en: `Ontario tax reduction`, nl: `Ontario tax reduction`, fr: `Réduction d'impôt de l'Ontario` },
  'bd.bcRed': { en: `BC tax reduction`, nl: `BC tax reduction`, fr: `Réduction d'impôt de la C.-B.` },
  'bd.lift': { en: `Ontario LIFT credit`, nl: `Ontario LIFT-krediet`, fr: `Crédit LIFT de l'Ontario` },
  'bd.ohp': { en: `Ontario Health Premium`, nl: `Ontario Health Premium`, fr: `Contribution-santé de l'Ontario` },
  'bd.ohpIncl': { en: `of which Ontario Health Premium`, nl: `waarvan Ontario Health Premium`, fr: `dont contribution-santé de l'Ontario` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries. Many Canadian employers pay every two weeks; the year's total is what counts here.`,
    nl: `12 maandlonen. Veel Canadese werkgevers betalen om de twee weken; hier telt het jaartotaal.`,
    fr: `12 salaires mensuels. Beaucoup d'employeurs canadiens paient aux deux semaines ; seul le total annuel compte ici.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Canada taxes each person separately, but the higher earner can claim a spousal amount for a partner with little income, and the Canada Child Benefit and the Canada Workers Benefit look at the couple's income. Here, your tax = the household's taxes − what it would pay if you earned nothing. A single parent claims the eligible dependant amount.`,
    nl: `Canada belast elke persoon apart, maar de hoogste verdiener kan een partnerbedrag inbrengen voor een partner met weinig inkomen, en de Canada Child Benefit en de Canada Workers Benefit kijken naar het inkomen van het koppel. Hier is jouw belasting = de belastingen van het gezin − wat het zou betalen als jij niets verdiende. Een alleenstaande ouder krijgt het bedrag voor een persoon ten laste.`,
    fr: `Le Canada impose chaque personne séparément, mais celui qui gagne le plus peut demander le montant pour époux si l'autre a peu de revenus, et l'Allocation canadienne pour enfants et l'Allocation pour les travailleurs tiennent compte du revenu du couple. Ici, votre impôt = les impôts du foyer − ce qu'il paierait si vous ne gagniez rien. Un parent seul demande le montant pour personne à charge admissible.`,
  },
  'tip.paToggle': {
    en: `A refundable federal credit for low earners: 27% of working income above CA$3,000, up to CA$1,665 single or CA$2,869 for a family, then cut by 15% of net income above CA$27,392 (CA$31,251 for a family). Modelled for an eligible worker aged 19 or more, not a full-time student.`,
    nl: `Een terugbetaalbaar federaal krediet voor lage lonen: 27% van het arbeidsinkomen boven CA$ 3.000, tot CA$ 1.665 voor een alleenstaande of CA$ 2.869 voor een gezin, daarna afgebouwd met 15% van het netto-inkomen boven CA$ 27.392 (CA$ 31.251 voor een gezin). Berekend voor een rechthebbende werknemer van 19 jaar of ouder, geen voltijdse student.`,
    fr: `Un crédit fédéral remboursable pour les bas revenus : 27% du revenu de travail au-delà de 3 000 CA$, jusqu'à 1 665 CA$ pour une personne seule ou 2 869 CA$ pour une famille, puis réduit de 15% du revenu net au-delà de 27 392 CA$ (31 251 CA$ pour une famille). Calculé pour un travailleur admissible de 19 ans ou plus, pas étudiant à temps plein.`,
  },
  'tip.costShort': { en: `Gross salary + employer CPP, EI and payroll taxes.`, nl: `Brutoloon + werkgeversdeel CPP, EI en loonsombelastingen.`, fr: `Salaire brut + RPC, AE et taxes sur la masse salariale de l'employeur.` },
  'tip.er': {
    en: `Paid by your employer on top of your gross: the same CPP or QPP as you, EI at 1.4 times your premium, QPIP in Quebec, and the provincial payroll tax where there is one.`,
    nl: `Betaald door je werkgever bovenop je bruto: dezelfde CPP of QPP als jij, EI aan 1,4 keer jouw premie, QPIP in Quebec, en de provinciale loonsombelasting waar die bestaat.`,
    fr: `Payé par votre employeur en plus du brut : le même RPC ou RRQ que vous, l'AE à 1,4 fois votre cotisation, le RQAP au Québec et la taxe provinciale sur la masse salariale là où elle existe.`,
  },
  'tip.erM': {
    en: `Not counted: workers' compensation premiums (WSIB, WorkSafeBC, CNESST), set by industry and claims history.`,
    nl: `Niet meegeteld: premies voor arbeidsongevallen (WSIB, WorkSafeBC, CNESST), volgens sector en schadeverleden.`,
    fr: `Non comptées : les primes d'accidents du travail (WSIB, WorkSafeBC, CNESST), fixées selon le secteur et l'historique.`,
  },
  'tip.eht': {
    en: `A provincial tax on the employer's payroll: Ontario's Employer Health Tax and BC's Employer Health Tax 1.95%, Manitoba's Health and Post-Secondary Education levy 2.15%, Newfoundland and Labrador 2%, Quebec's Health Services Fund 4.26% for large employers. Quebec employers also pay 0.06% for labour standards and, above CA$2 million of payroll, 1% for training.`,
    nl: `Een provinciale belasting op de loonsom van de werkgever: de Employer Health Tax van Ontario en van BC 1,95%, de heffing voor gezondheid en hoger onderwijs van Manitoba 2,15%, Newfoundland en Labrador 2%, het Health Services Fund van Quebec 4,26% voor grote werkgevers. Werkgevers in Quebec betalen ook 0,06% voor de arbeidsnormen en, boven CA$ 2 miljoen loonsom, 1% voor opleiding.`,
    fr: `Une taxe provinciale sur la masse salariale : impôt-santé des employeurs de l'Ontario et de la C.-B. 1,95%, prélèvement santé et enseignement postsecondaire du Manitoba 2,15%, Terre-Neuve-et-Labrador 2%, Fonds des services de santé du Québec 4,26% pour les grands employeurs. Les employeurs québécois versent aussi 0,06% pour les normes du travail et, au-delà de 2 millions CA$ de masse salariale, 1% pour la formation.`,
  },
  'tip.ee': {
    en: `Withheld from your pay: CPP 5.95% on earnings between CA$3,500 and CA$74,600, CPP2 4% up to CA$85,000, and EI 1.63% up to CA$68,900. They fund your pension and unemployment, sickness and parental benefits. The enhanced part of CPP is deducted from income; the base part gives a tax credit.`,
    nl: `Ingehouden op je loon: CPP 5,95% op het loon tussen CA$ 3.500 en CA$ 74.600, CPP2 4% tot CA$ 85.000, en EI 1,63% tot CA$ 68.900. Ze financieren je pensioen en je werkloosheids-, ziekte- en ouderschapsuitkeringen. Het verhoogde deel van CPP is aftrekbaar van het inkomen; het basisdeel geeft een belastingkrediet.`,
    fr: `Retenus sur votre paie : RPC 5,95% sur la rémunération entre 3 500 CA$ et 74 600 CA$, RPC2 4% jusqu'à 85 000 CA$, et AE 1,63% jusqu'à 68 900 CA$. Ils financent votre retraite et vos prestations de chômage, de maladie et parentales. La partie bonifiée du RPC est déduite du revenu ; la partie de base donne un crédit d'impôt.`,
  },
  'tip.eeQc': {
    en: `Withheld from your pay in Quebec: QPP 6.3% between CA$3,500 and CA$74,600, QPP2 4% up to CA$85,000, EI at the lower Quebec rate of 1.30% up to CA$68,900 (parental benefits come from QPIP instead), and QPIP 0.43% up to CA$103,000.`,
    nl: `Ingehouden op je loon in Quebec: QPP 6,3% tussen CA$ 3.500 en CA$ 74.600, QPP2 4% tot CA$ 85.000, EI aan het lagere Quebec-tarief van 1,30% tot CA$ 68.900 (ouderschapsuitkeringen komen van QPIP), en QPIP 0,43% tot CA$ 103.000.`,
    fr: `Retenus sur votre paie au Québec : RRQ 6,3% entre 3 500 CA$ et 74 600 CA$, RRQ2 4% jusqu'à 85 000 CA$, AE au taux réduit du Québec de 1,30% jusqu'à 68 900 CA$ (les prestations parentales viennent du RQAP) et RQAP 0,43% jusqu'à 103 000 CA$.`,
  },
  'tip.sp': {
    en: `The Northwest Territories and Nunavut withhold a 2% payroll tax from every employee's pay, on top of income tax.`,
    nl: `De Northwest Territories en Nunavut houden 2% loonbelasting in op het loon van elke werknemer, bovenop de inkomstenbelasting.`,
    fr: `Les Territoires du Nord-Ouest et le Nunavut retiennent une taxe de 2% sur la paie de chaque salarié, en plus de l'impôt.`,
  },
  'tip.taxable': {
    en: `Gross pay minus the enhanced CPP or QPP contributions (the 1% first additional part and CPP2). Federal and provincial brackets apply to it.`,
    nl: `Brutoloon min de verhoogde CPP- of QPP-bijdragen (het eerste extra deel van 1% en CPP2). De federale en provinciale schijven gelden hierop.`,
    fr: `Salaire brut moins les cotisations bonifiées au RPC ou au RRQ (la première partie supplémentaire de 1% et le RPC2). Les tranches fédérales et provinciales s'y appliquent.`,
  },
  'tip.fedShort': {
    en: `Net income through five brackets from 14% to 33%, minus 14% of the basic personal amount, CPP and EI and the Canada employment amount.`,
    nl: `Netto-inkomen door vijf schijven van 14% tot 33%, min 14% van het persoonlijk basisbedrag, CPP en EI en het Canada employment amount.`,
    fr: `Revenu net passé dans cinq tranches de 14% à 33%, moins 14% du montant personnel de base, du RPC et de l'AE et du montant canadien pour emploi.`,
  },
  'tip.bpa': { en: `basic personal amount`, nl: `persoonlijk basisbedrag`, fr: `montant personnel de base` },
  'tip.spouseAmt': { en: `spousal amount`, nl: `partnerbedrag`, fr: `montant pour époux` },
  'tip.depAmt': { en: `eligible dependant amount`, nl: `bedrag voor een persoon ten laste`, fr: `montant pour personne à charge admissible` },
  'tip.contribCred': { en: `base CPP and EI`, nl: `basis-CPP en EI`, fr: `RPC de base et AE` },
  'tip.cea': { en: `Canada employment amount`, nl: `Canada employment amount`, fr: `montant canadien pour emploi` },
  'tip.abate': { en: `Quebec abatement 16.5%`, nl: `Quebec-korting 16,5%`, fr: `abattement du Québec 16,5%` },
  'tip.fedM': {
    en: `2026 brackets, with the lowest rate cut to 14%. The basic personal amount of CA$16,452 shrinks to CA$14,829 between CA$181,440 and CA$258,482. Quebec residents get 16.5% off, because Quebec runs its own programs.`,
    nl: `Schijven 2026, met het laagste tarief verlaagd tot 14%. Het persoonlijk basisbedrag van CA$ 16.452 daalt tot CA$ 14.829 tussen CA$ 181.440 en CA$ 258.482. Inwoners van Quebec krijgen 16,5% korting, omdat Quebec eigen programma's heeft.`,
    fr: `Tranches 2026, le premier taux étant ramené à 14%. Le montant personnel de base de 16 452 CA$ descend à 14 829 CA$ entre 181 440 CA$ et 258 482 CA$. Les résidents du Québec ont 16,5% de moins, car le Québec gère ses propres programmes.`,
  },
  'tip.provShort': {
    en: `Your province's or territory's own brackets on the same net income, minus credits at its lowest rate, plus surtaxes and premiums.`,
    nl: `De eigen schijven van je provincie of territorium op hetzelfde netto-inkomen, min kredieten aan het laagste tarief, plus surtaxen en premies.`,
    fr: `Les tranches propres à votre province ou territoire sur le même revenu net, moins des crédits au taux le plus bas, plus surtaxes et contributions.`,
  },
  'tip.qcEd': { en: `deduction for employment income`, nl: `aftrek voor inkomen uit arbeid`, fr: `déduction pour travailleur` },
  'tip.qcTaxable': { en: `Quebec taxable income`, nl: `Belastbaar inkomen in Quebec`, fr: `Revenu imposable du Québec` },
  'tip.provCred': { en: `personal amounts, CPP and EI`, nl: `persoonlijke bedragen, CPP en EI`, fr: `montants personnels, RPC et AE` },
  'tip.provM': {
    en: `2026 rates, including British Columbia's lowest rate raised to 5.6%, the new 20% Prince Edward Island bracket above CA$200,000 and Newfoundland and Labrador's higher basic amount. Not counted: low-income reductions in New Brunswick, Nova Scotia, Newfoundland and Labrador, Manitoba and PEI, and refundable provincial credits.`,
    nl: `Tarieven 2026, met het laagste tarief van Brits-Columbia opgetrokken tot 5,6%, de nieuwe schijf van 20% boven CA$ 200.000 op Prins Edwardeiland en het hogere basisbedrag in Newfoundland en Labrador. Niet meegeteld: verminderingen voor lage inkomens in New Brunswick, Nova Scotia, Newfoundland en Labrador, Manitoba en PEI, en terugbetaalbare provinciale kredieten.`,
    fr: `Taux 2026, dont le premier taux de la Colombie-Britannique porté à 5,6%, la nouvelle tranche de 20% au-delà de 200 000 CA$ à l'Île-du-Prince-Édouard et le montant de base relevé à Terre-Neuve-et-Labrador. Non comptés : les réductions pour faible revenu du Nouveau-Brunswick, de la Nouvelle-Écosse, de Terre-Neuve-et-Labrador, du Manitoba et de l'Î.-P.-É., et les crédits provinciaux remboursables.`,
  },
  'tip.provQcM': {
    en: `Quebec's own return: 14% to 25.75%, on income after the 6% deduction for employment income (up to CA$1,450). The basic amount of CA$18,952 already covers QPP, EI and QPIP, which get no separate credit. Not counted: the solidarity tax credit, the work premium and the credit for persons living alone.`,
    nl: `De eigen aangifte van Quebec: 14% tot 25,75%, op het inkomen na de aftrek van 6% voor inkomen uit arbeid (tot CA$ 1.450). Het basisbedrag van CA$ 18.952 dekt al QPP, EI en QPIP, die geen apart krediet krijgen. Niet meegeteld: het solidariteitskrediet, de arbeidspremie en het krediet voor alleenwonenden.`,
    fr: `La déclaration du Québec : 14% à 25,75%, sur le revenu après la déduction pour travailleur de 6% (jusqu'à 1 450 CA$). Le montant de base de 18 952 CA$ tient déjà compte du RRQ, de l'AE et du RQAP, sans crédit séparé. Non comptés : le crédit pour solidarité, la prime au travail et le montant pour personne vivant seule.`,
  },
  'tip.surtax': {
    en: `Ontario adds 20% of its basic tax above CA$5,818 and another 36% above CA$7,446, so its top rate of 13.16% becomes 20.53%.`,
    nl: `Ontario telt 20% van zijn basisbelasting boven CA$ 5.818 erbij, en nog eens 36% boven CA$ 7.446, zodat het toptarief van 13,16% 20,53% wordt.`,
    fr: `L'Ontario ajoute 20% de son impôt de base au-delà de 5 818 CA$ et encore 36% au-delà de 7 446 CA$ : son taux le plus élevé de 13,16% devient 20,53%.`,
  },
  'tip.ohp': {
    en: `Ontario residents pay a health premium with their income tax: nothing up to CA$20,000 of taxable income, rising in steps to CA$900 above CA$200,600.`,
    nl: `Inwoners van Ontario betalen een gezondheidspremie met hun inkomstenbelasting: niets tot CA$ 20.000 belastbaar inkomen, in stappen oplopend tot CA$ 900 boven CA$ 200.600.`,
    fr: `Les résidents de l'Ontario paient une contribution-santé avec leur impôt : rien jusqu'à 20 000 CA$ de revenu imposable, puis par paliers jusqu'à 900 CA$ au-delà de 200 600 CA$.`,
  },
  'tip.cwb': {
    en: `A refundable credit paid with your return, and partly in advance: 27% of working income above CA$3,000, up to CA$1,665 single or CA$2,869 for a couple or single parent, cut by 15% of net income above CA$27,392 (CA$31,251 for a family, ignoring up to CA$16,714 of the lower earner's income).`,
    nl: `Een terugbetaalbaar krediet, uitbetaald met je aangifte en deels vooraf: 27% van het arbeidsinkomen boven CA$ 3.000, tot CA$ 1.665 alleenstaand of CA$ 2.869 voor een koppel of alleenstaande ouder, afgebouwd met 15% van het netto-inkomen boven CA$ 27.392 (CA$ 31.251 voor een gezin, waarbij tot CA$ 16.714 van het inkomen van de laagste verdiener niet meetelt).`,
    fr: `Un crédit remboursable versé avec la déclaration, et en partie d'avance : 27% du revenu de travail au-delà de 3 000 CA$, jusqu'à 1 665 CA$ seul ou 2 869 CA$ pour un couple ou un parent seul, réduit de 15% du revenu net au-delà de 27 392 CA$ (31 251 CA$ pour une famille, sans compter jusqu'à 16 714 CA$ du revenu du conjoint qui gagne le moins).`,
  },
  'tip.cwbHh': { en: `Household's Canada Workers Benefit`, nl: `Canada Workers Benefit van het gezin`, fr: `Allocation pour les travailleurs du foyer` },
  'tip.cwbM': {
    en: `Quebec, Alberta and Nunavut have their own CWB amounts under federal agreements: the federal default is used everywhere here. The disability supplement isn't counted.`,
    nl: `Quebec, Alberta en Nunavut hebben eigen CWB-bedragen via federale akkoorden: hier wordt overal de federale standaard gebruikt. Het supplement voor handicap telt niet mee.`,
    fr: `Le Québec, l'Alberta et le Nunavut ont leurs propres montants par entente fédérale : le barème fédéral est utilisé partout ici. Le supplément pour personnes handicapées n'est pas compté.`,
  },
  'tip.ccb': {
    en: `Tax-free monthly payment for each child: up to CA$8,157 a year under 6 and CA$6,883 from 6 to 17 (July 2026 to June 2027). It shrinks with family net income above CA$38,237, faster above CA$82,847. What your pay takes away counts as a tax here.`,
    nl: `Belastingvrije maandelijkse uitkering per kind: tot CA$ 8.157 per jaar onder 6 en CA$ 6.883 van 6 tot 17 (juli 2026 tot juni 2027). Ze daalt met het netto-inkomen van het gezin boven CA$ 38.237, sneller boven CA$ 82.847. Wat je loon wegneemt, telt hier als belasting.`,
    fr: `Versement mensuel non imposable pour chaque enfant : jusqu'à 8 157 CA$ par an avant 6 ans et 6 883 CA$ de 6 à 17 ans (juillet 2026 à juin 2027). Elle diminue avec le revenu net familial au-delà de 38 237 CA$, plus vite au-delà de 82 847 CA$. Ce que votre salaire retire compte ici comme un impôt.`,
  },
  'tip.ccbWo': { en: `If you earned nothing`, nl: `Als jij niets verdiende`, fr: `Si vous ne gagniez rien` },
  'tip.ccbWith': { en: `With your pay`, nl: `Met jouw loon`, fr: `Avec votre salaire` },
  'tip.ccbM': {
    en: `The benefit actually follows the previous year's income: this uses this year's, as if it were stable. Provincial child benefits (Ontario, Quebec, BC, Alberta and others) aren't counted.`,
    nl: `De uitkering volgt eigenlijk het inkomen van het vorige jaar: hier dat van dit jaar, alsof het stabiel is. Provinciale kinderbijslagen (Ontario, Quebec, BC, Alberta en andere) tellen niet mee.`,
    fr: `L'allocation suit en réalité le revenu de l'année précédente : on prend ici celui de l'année, supposé stable. Les allocations provinciales pour enfants (Ontario, Québec, C.-B., Alberta et autres) ne sont pas comptées.`,
  },
  'tip.hhWith': { en: `Household`, nl: `Gezin`, fr: `Foyer` },
  'tip.hhWithout': { en: `Household if you earned nothing`, nl: `Gezin als jij niets verdiende`, fr: `Foyer sans vos revenus` },
  'tip.yours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − CPP/QPP, EI and QPIP − federal and provincial income tax, + the Canada Workers Benefit, − Canada Child Benefit your pay takes away.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − CPP/QPP, EI en QPIP − federale en provinciale inkomstenbelasting, + Canada Workers Benefit, − de Canada Child Benefit die je loon wegneemt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − RPC/RRQ, AE et RQAP − impôts fédéral et provincial, + Allocation pour les travailleurs, − l'Allocation canadienne pour enfants que votre salaire retire.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · tax year 2026 (1 January to 31 December 2026)`,
    nl: `Gebruikte regels · belastingjaar 2026 (1 januari tot 31 december 2026)`,
    fr: `Règles utilisées · année d'imposition 2026 (1er janvier au 31 décembre 2026)`,
  },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `CPP <span class="num">5.95%</span> on CA$3,500 to CA$74,600 and CPP2 <span class="num">4%</span> up to CA$85,000, matching the employee. QPP 6.3% in Quebec.`,
      `EI <span class="num">2.282%</span> up to CA$68,900 (1.82% in Quebec), QPIP 0.602% up to CA$103,000.`,
      `Large employer payroll taxes: Ontario and BC 1.95%, Manitoba 2.15%, Newfoundland and Labrador 2%, Quebec Health Services Fund 4.26% + training 1% + labour standards 0.06%. Workers' compensation not counted.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `CPP <span class="num">5,95%</span> op CA$ 3.500 tot CA$ 74.600 en CPP2 <span class="num">4%</span> tot CA$ 85.000, gelijk aan de werknemer. QPP 6,3% in Quebec.`,
      `EI <span class="num">2,282%</span> tot CA$ 68.900 (1,82% in Quebec), QPIP 0,602% tot CA$ 103.000.`,
      `Loonsombelastingen voor grote werkgevers: Ontario en BC 1,95%, Manitoba 2,15%, Newfoundland en Labrador 2%, Health Services Fund van Quebec 4,26% + opleiding 1% + arbeidsnormen 0,06%. Arbeidsongevallenverzekering niet meegeteld.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `RPC <span class="num">5,95%</span> de 3 500 CA$ à 74 600 CA$ et RPC2 <span class="num">4%</span> jusqu'à 85 000 CA$, comme le salarié. RRQ 6,3% au Québec.`,
      `AE <span class="num">2,282%</span> jusqu'à 68 900 CA$ (1,82% au Québec), RQAP 0,602% jusqu'à 103 000 CA$.`,
      `Taxes sur la masse salariale d'un grand employeur : Ontario et C.-B. 1,95%, Manitoba 2,15%, Terre-Neuve-et-Labrador 2%, FSS du Québec 4,26% + formation 1% + normes du travail 0,06%. Accidents du travail non comptés.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [
      `CPP <span class="num">5.95%</span> between CA$3,500 and CA$74,600 (max CA$4,230.45), CPP2 <span class="num">4%</span> up to CA$85,000 (max CA$416). QPP 6.3% (max CA$4,479.30).`,
      `EI <span class="num">1.63%</span> up to CA$68,900 (max CA$1,123.07); Quebec 1.30% plus QPIP 0.43% up to CA$103,000.`,
      `Northwest Territories and Nunavut payroll tax <span class="num">2%</span> of pay.`,
    ] },
    nl: { h: `2 · Werknemersbijdragen`, li: [
      `CPP <span class="num">5,95%</span> tussen CA$ 3.500 en CA$ 74.600 (max CA$ 4.230,45), CPP2 <span class="num">4%</span> tot CA$ 85.000 (max CA$ 416). QPP 6,3% (max CA$ 4.479,30).`,
      `EI <span class="num">1,63%</span> tot CA$ 68.900 (max CA$ 1.123,07); Quebec 1,30% plus QPIP 0,43% tot CA$ 103.000.`,
      `Loonbelasting Northwest Territories en Nunavut <span class="num">2%</span> van het loon.`,
    ] },
    fr: { h: `2 · Cotisations salariales`, li: [
      `RPC <span class="num">5,95%</span> entre 3 500 CA$ et 74 600 CA$ (max 4 230,45 CA$), RPC2 <span class="num">4%</span> jusqu'à 85 000 CA$ (max 416 CA$). RRQ 6,3% (max 4 479,30 CA$).`,
      `AE <span class="num">1,63%</span> jusqu'à 68 900 CA$ (max 1 123,07 CA$) ; Québec 1,30% plus RQAP 0,43% jusqu'à 103 000 CA$.`,
      `Taxe sur la paie des Territoires du Nord-Ouest et du Nunavut <span class="num">2%</span> du salaire.`,
    ] },
  },
  'ref.fed': {
    en: br => ({ h: `3 · Federal income tax`, li: [
      `Brackets on net income, with the CA$16,452 basic personal amount as a 0% band:${br}`,
      `Credits at 14%: basic personal amount, base CPP and EI, Canada employment amount CA$1,501, spousal or eligible dependant amount. Quebec abatement 16.5% of basic federal tax.`,
    ] }),
    nl: br => ({ h: `3 · Federale inkomstenbelasting`, li: [
      `Schijven op het netto-inkomen, met het persoonlijk basisbedrag van CA$ 16.452 als schijf aan 0%:${br}`,
      `Kredieten aan 14%: persoonlijk basisbedrag, basis-CPP en EI, Canada employment amount CA$ 1.501, partnerbedrag of bedrag voor een persoon ten laste. Quebec-korting 16,5% van de federale basisbelasting.`,
    ] }),
    fr: br => ({ h: `3 · Impôt fédéral`, li: [
      `Tranches sur le revenu net, le montant personnel de base de 16 452 CA$ formant une tranche à 0% :${br}`,
      `Crédits à 14% : montant personnel de base, RPC de base et AE, montant canadien pour emploi 1 501 CA$, montant pour époux ou pour personne à charge admissible. Abattement du Québec 16,5% de l'impôt fédéral de base.`,
    ] }),
  },
  'ref.prov': {
    en: { h: `4 · Provincial and territorial income tax`, li: [
      `Each province's and territory's 2026 brackets and basic personal amount from the CRA payroll formulas, credits at its lowest rate, with the changes announced in 2026 for British Columbia, Newfoundland and Labrador and Prince Edward Island.`,
      `Ontario surtax 20% above CA$5,818 and 36% above CA$7,446 of Ontario tax, Ontario Health Premium up to CA$900, Ontario tax reduction and LIFT credit. BC tax reduction up to CA$690. Alberta supplemental credit. Manitoba's basic amount phased out from CA$200,000 to CA$400,000.`,
    ] },
    nl: { h: `4 · Provinciale en territoriale inkomstenbelasting`, li: [
      `Schijven en persoonlijk basisbedrag 2026 van elke provincie en elk territorium uit de loonformules van de CRA, kredieten aan het laagste tarief, met de in 2026 aangekondigde wijzigingen voor Brits-Columbia, Newfoundland en Labrador en Prins Edwardeiland.`,
      `Ontario-surtax 20% boven CA$ 5.818 en 36% boven CA$ 7.446 Ontario-belasting, Ontario Health Premium tot CA$ 900, Ontario tax reduction en LIFT-krediet. BC tax reduction tot CA$ 690. Aanvullend krediet in Alberta. Basisbedrag van Manitoba afgebouwd van CA$ 200.000 tot CA$ 400.000.`,
    ] },
    fr: { h: `4 · Impôt provincial et territorial`, li: [
      `Tranches et montant personnel de base 2026 de chaque province et territoire d'après les formules de retenue de l'ARC, crédits au taux le plus bas, avec les changements annoncés en 2026 pour la Colombie-Britannique, Terre-Neuve-et-Labrador et l'Île-du-Prince-Édouard.`,
      `Surtaxe ontarienne de 20% au-delà de 5 818 CA$ et 36% au-delà de 7 446 CA$ d'impôt de l'Ontario, contribution-santé jusqu'à 900 CA$, réduction d'impôt de l'Ontario et crédit LIFT. Réduction d'impôt de la C.-B. jusqu'à 690 CA$. Crédit supplémentaire de l'Alberta. Montant de base du Manitoba réduit de 200 000 CA$ à 400 000 CA$.`,
    ] },
  },
  'ref.qc': {
    en: { h: `5 · Quebec`, li: [
      `Quebec tax <span class="num">14% / 19% / 24% / 25.75%</span> with bands at CA$54,345, CA$108,680 and CA$132,245; basic amount CA$18,952 at 14%; 6% deduction for employment income up to CA$1,450.`,
      `Federal tax reduced by 16.5% (Quebec abatement). QPP instead of CPP, QPIP instead of the parental part of EI.`,
    ] },
    nl: { h: `5 · Quebec`, li: [
      `Quebec-belasting <span class="num">14% / 19% / 24% / 25,75%</span> met grenzen op CA$ 54.345, CA$ 108.680 en CA$ 132.245; basisbedrag CA$ 18.952 aan 14%; aftrek van 6% voor inkomen uit arbeid tot CA$ 1.450.`,
      `Federale belasting verlaagd met 16,5% (Quebec-korting). QPP in plaats van CPP, QPIP in plaats van het ouderschapsdeel van EI.`,
    ] },
    fr: { h: `5 · Québec`, li: [
      `Impôt du Québec <span class="num">14% / 19% / 24% / 25,75%</span> avec seuils à 54 345 CA$, 108 680 CA$ et 132 245 CA$ ; montant de base 18 952 CA$ à 14% ; déduction pour travailleur de 6% jusqu'à 1 450 CA$.`,
      `Impôt fédéral réduit de 16,5% (abattement du Québec). RRQ au lieu du RPC, RQAP au lieu du volet parental de l'AE.`,
    ] },
  },
  'ref.cr': {
    en: { h: `6 · Benefits`, li: [
      `Canada Workers Benefit: 27% above CA$3,000 of working income, max <span class="num">CA$1,665</span> single, <span class="num">CA$2,869</span> family, minus 15% above CA$27,392 / CA$31,251 net income.`,
      `Canada Child Benefit (July 2026 to June 2027): <span class="num">CA$8,157</span> per child under 6, <span class="num">CA$6,883</span> from 6 to 17, reduced above CA$38,237 and CA$82,847 of family net income.`,
    ] },
    nl: { h: `6 · Uitkeringen`, li: [
      `Canada Workers Benefit: 27% boven CA$ 3.000 arbeidsinkomen, max <span class="num">CA$ 1.665</span> alleenstaand, <span class="num">CA$ 2.869</span> gezin, min 15% boven CA$ 27.392 / CA$ 31.251 netto-inkomen.`,
      `Canada Child Benefit (juli 2026 tot juni 2027): <span class="num">CA$ 8.157</span> per kind onder 6, <span class="num">CA$ 6.883</span> van 6 tot 17, verminderd boven CA$ 38.237 en CA$ 82.847 netto-inkomen van het gezin.`,
    ] },
    fr: { h: `6 · Prestations`, li: [
      `Allocation canadienne pour les travailleurs : 27% au-delà de 3 000 CA$ de revenu de travail, max <span class="num">1 665 CA$</span> seul, <span class="num">2 869 CA$</span> famille, moins 15% au-delà de 27 392 / 31 251 CA$ de revenu net.`,
      `Allocation canadienne pour enfants (juillet 2026 à juin 2027) : <span class="num">8 157 CA$</span> par enfant de moins de 6 ans, <span class="num">6 883 CA$</span> de 6 à 17 ans, réduite au-delà de 38 237 CA$ et 82 847 CA$ de revenu net familial.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · Sales tax on spending`, li: [
      `GST 5% everywhere; HST 13% in Ontario, 14% in Nova Scotia, 15% in New Brunswick, Newfoundland and Labrador and PEI; GST + PST 12% in BC and Manitoba, 11% in Saskatchewan; GST + QST 14.975% in Quebec.`,
      `Tax inside what you spend = price × r / (100 + r), applied to all of your net pay as if you spent it.`,
    ] },
    nl: { h: `7 · Omzetbelasting op uitgaven`, li: [
      `GST 5% overal; HST 13% in Ontario, 14% in Nova Scotia, 15% in New Brunswick, Newfoundland en Labrador en PEI; GST + PST 12% in BC en Manitoba, 11% in Saskatchewan; GST + QST 14,975% in Quebec.`,
      `Belasting in wat je uitgeeft = prijs × r / (100 + r), toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
    ] },
    fr: { h: `7 · Taxe de vente sur les dépenses`, li: [
      `TPS 5% partout ; TVH 13% en Ontario, 14% en Nouvelle-Écosse, 15% au Nouveau-Brunswick, à Terre-Neuve-et-Labrador et à l'Î.-P.-É. ; TPS + TVP 12% en C.-B. et au Manitoba, 11% en Saskatchewan ; TPS + TVQ 14,975% au Québec.`,
      `Taxe comprise dans vos dépenses = prix × r / (100 + r), appliquée à tout votre salaire net comme si vous le dépensiez entièrement.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Parliament and Cabinet`, li: [
      `From 1 April 2026: MP <span class="num">CA$217,700</span>, Secretary of State <span class="num">CA$295,200</span>, Cabinet Minister <span class="num">CA$321,300</span>, Prime Minister <span class="num">CA$435,400</span>.`,
      `Taxed as employment income with CPP or QPP, no EI. The MP pension plan isn't counted.`,
    ] },
    nl: { h: `8 · Parlement en regering`, li: [
      `Vanaf 1 april 2026: parlementslid <span class="num">CA$ 217.700</span>, staatssecretaris <span class="num">CA$ 295.200</span>, minister <span class="num">CA$ 321.300</span>, premier <span class="num">CA$ 435.400</span>.`,
      `Belast als inkomen uit arbeid met CPP of QPP, zonder EI. Het pensioenstelsel van parlementsleden telt niet mee.`,
    ] },
    fr: { h: `8 · Parlement et Cabinet`, li: [
      `Depuis le 1er avril 2026 : député <span class="num">217 700 CA$</span>, secrétaire d'État <span class="num">295 200 CA$</span>, ministre <span class="num">321 300 CA$</span>, premier ministre <span class="num">435 400 CA$</span>.`,
      `Imposés comme un revenu d'emploi avec RPC ou RRQ, sans AE. Le régime de retraite des députés n'est pas compté.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `RRSP and pension plan contributions, union dues, workers' compensation premiums, the GST/HST credit (Canada Groceries and Essentials Benefit), provincial child and family benefits, Quebec's solidarity credit and work premium, provincial low-income reductions outside Ontario and BC.`,
      `The Canada Workers Benefit disability supplement and the Quebec, Alberta and Nunavut versions of the CWB; property tax and municipal levies.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Bijdragen aan RRSP en pensioenfondsen, vakbondsbijdragen, premies voor arbeidsongevallen, het GST/HST-krediet (Canada Groceries and Essentials Benefit), provinciale kinder- en gezinsbijslagen, het solidariteitskrediet en de arbeidspremie van Quebec, provinciale verminderingen voor lage inkomens buiten Ontario en BC.`,
      `Het supplement voor handicap van de Canada Workers Benefit en de varianten in Quebec, Alberta en Nunavut; vastgoedbelasting en gemeentelijke heffingen.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Cotisations REER et aux régimes de retraite, cotisations syndicales, primes d'accidents du travail, le crédit pour TPS/TVH (Allocation canadienne pour l'épicerie et les besoins essentiels), allocations familiales provinciales, crédit pour solidarité et prime au travail du Québec, réductions provinciales pour faible revenu hors Ontario et C.-B.`,
      `Le supplément pour personnes handicapées de l'Allocation pour les travailleurs et ses versions du Québec, de l'Alberta et du Nunavut ; taxes foncières et municipales.`,
    ] },
  },

  inheritLink: {
    en: `No inheritance tax: what an estate pays at death →`,
    nl: `Geen erfbelasting: wat een nalatenschap betaalt bij overlijden →`,
    fr: `Pas de droits de succession : ce que paie une succession au décès →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your T4, your returns and the CRA (and Revenu Québec) decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je T4, je aangiftes en de CRA (en Revenu Québec) zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls vos feuillets T4 et relevés, vos déclarations et l'ARC (et Revenu Québec) font foi.`,
  },

  'src.t4127': { en: `CRA: payroll deductions formulas, January 2026`, nl: `CRA: formules voor loonheffingen, januari 2026`, fr: `ARC : formules de retenues sur la paie, janvier 2026` },
  'src.t4127jul': { en: `CRA: payroll deductions formulas, July 2026`, nl: `CRA: formules voor loonheffingen, juli 2026`, fr: `ARC : formules de retenues sur la paie, juillet 2026` },
  'src.index': { en: `CRA: 2026 indexed amounts`, nl: `CRA: geïndexeerde bedragen 2026`, fr: `ARC : montants indexés 2026` },
  'src.ccb': { en: `CRA: how the CCB is calculated`, nl: `CRA: berekening van de CCB`, fr: `ARC : calcul de l'ACE` },
  'src.cwb': { en: `CRA: Canada Workers Benefit`, nl: `CRA: Canada Workers Benefit`, fr: `ARC : Allocation canadienne pour les travailleurs` },
  'src.pwc': { en: `PwC: Canada personal income tax`, nl: `PwC: Canadese personenbelasting`, fr: `PwC : impôt des particuliers au Canada` },
  'src.pwcOther': { en: `PwC: Canada payroll and sales taxes`, nl: `PwC: Canadese loonsom- en omzetbelastingen`, fr: `PwC : taxes sur la masse salariale et de vente au Canada` },
  'src.eyQc': { en: `EY: Quebec tax rates 2026`, nl: `EY: belastingtarieven Quebec 2026`, fr: `EY : taux d'imposition du Québec 2026` },
  'src.pay': { en: `House of Commons: allowance and salaries 2026`, nl: `Lagerhuis: vergoeding en lonen 2026`, fr: `Chambre des communes : indemnité et traitements 2026` },
  'src.minWage': { en: `Government of Canada: federal minimum wage`, nl: `Canadese overheid: federaal minimumloon`, fr: `Gouvernement du Canada : salaire minimum fédéral` },
  'src.lfs': { en: `Statistics Canada: Labour Force Survey, September 2026`, nl: `Statistics Canada: Labour Force Survey, september 2026`, fr: `Statistique Canada : Enquête sur la population active, septembre 2026` },
};
