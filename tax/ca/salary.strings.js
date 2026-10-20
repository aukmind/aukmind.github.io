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
    en: `Married or living together as a couple (common-law). Each partner fills in their own tax return. But the couple's total income counts for the spousal amount (a tax break for a partner with little income), the Canada Child Benefit and the Canada Workers Benefit.`,
    nl: `Gehuwd of samenwonend als koppel (common-law). Elke partner vult een eigen aangifte in. Maar het totale inkomen van het koppel telt voor het partnerbedrag (een belastingvoordeel voor een partner met weinig inkomen), de Canada Child Benefit en de Canada Workers Benefit.`,
    fr: `Mariés ou en couple de fait. Chacun remplit sa propre déclaration. Mais le revenu total du couple compte pour le montant pour époux (un allègement d'impôt pour un conjoint qui gagne peu), l'Allocation canadienne pour enfants et l'Allocation canadienne pour les travailleurs.`,
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
    en: (top, sales) => `The province takes at most ${top} of each extra dollar, on top of up to 33% for Ottawa. Sales tax ${sales} (GST plus HST or PST).`,
    nl: (top, sales) => `De provincie neemt hoogstens ${top} van elke extra dollar, bovenop tot 33% voor Ottawa. Omzetbelasting ${sales} (GST plus HST of PST).`,
    fr: (top, sales) => `La province prend au plus ${top} de chaque dollar en plus, en plus de 33% au maximum pour Ottawa. Taxe de vente ${sales} (TPS plus TVH ou TVP).`,
  },
  'provHint.on': {
    en: (top, sales) => `Highest rate ${top}, pushed up to 20.53% by Ontario's extra tax on top (surtax), plus the Ontario Health Premium. Sales tax (HST) ${sales}.`,
    nl: (top, sales) => `Hoogste tarief ${top}, door de extra belasting van Ontario (surtax) opgetrokken tot 20,53%, plus de Ontario Health Premium. Omzetbelasting (HST) ${sales}.`,
    fr: (top, sales) => `Taux le plus élevé ${top}, porté à 20,53% par la surtaxe de l'Ontario, plus la contribution-santé de l'Ontario. Taxe de vente (TVH) ${sales}.`,
  },
  'provHint.qc': {
    en: (top, sales) => `Quebec has its own income tax (highest rate ${top}), its own pension plan (QPP) and its own parental leave insurance (QPIP). In exchange, federal tax is cut by 16.5%. Sales tax (GST + QST) ${sales}.`,
    nl: (top, sales) => `Quebec heeft een eigen inkomstenbelasting (hoogste tarief ${top}), een eigen pensioenstelsel (QPP) en een eigen verzekering voor ouderschapsverlof (QPIP). In ruil daalt de federale belasting met 16,5%. Omzetbelasting (GST + QST) ${sales}.`,
    fr: (top, sales) => `Le Québec a son propre impôt (taux le plus élevé ${top}), son propre régime de retraite (RRQ) et sa propre assurance pour les congés parentaux (RQAP). En échange, l'impôt fédéral baisse de 16,5%. Taxe de vente (TPS + TVQ) ${sales}.`,
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
    en: `Five provinces tax employers on the total they pay in wages. A big employer pays the full rate on every salary: Ontario and BC 1.95%, Manitoba 2.15%, Newfoundland and Labrador 2%, and in Quebec 4.26% for the Health Services Fund plus 1% for training. A small employer (total wages under about CA$1 million to CA$2 million) pays nothing, except in Quebec, where the Health Services Fund starts at 1.65%.`,
    nl: `Vijf provincies belasten werkgevers op het totaal dat ze aan lonen betalen. Een grote werkgever betaalt het volle tarief op elk loon: Ontario en BC 1,95%, Manitoba 2,15%, Newfoundland en Labrador 2%, en in Quebec 4,26% voor het Health Services Fund plus 1% voor opleiding. Een kleine werkgever (totale loonsom onder zowat CA$ 1 tot 2 miljoen) betaalt niets, behalve in Quebec, waar het Health Services Fund begint bij 1,65%.`,
    fr: `Cinq provinces taxent les employeurs sur le total des salaires qu'ils versent. Un grand employeur paie le plein taux sur chaque salaire : Ontario et C.-B. 1,95%, Manitoba 2,15%, Terre-Neuve-et-Labrador 2%, et au Québec 4,26% pour le Fonds des services de santé plus 1% pour la formation. Un petit employeur (masse salariale sous environ 1 à 2 millions CA$) ne paie rien, sauf au Québec où le FSS commence à 1,65%.`,
  },
  vatStandard: { en: `(GST + provincial sales tax)`, nl: `(GST + provinciale omzetbelasting)`, fr: `(TPS + taxe de vente provinciale)` },
  includeVat: { en: `Include sales tax on what you spend`, nl: `Omzetbelasting op je uitgaven meerekenen`, fr: `Inclure la taxe de vente sur vos dépenses` },
  vatRateLabel: { en: `Sales tax rate:`, nl: `Omzetbelasting:`, fr: `Taux de taxe de vente :` },
  'comp.vat': { en: `GST/HST/PST`, nl: `GST/HST/PST`, fr: `TPS/TVH/TVP` },
  'bd.vat': { en: r => `Sales tax on spending it all (${r})`, nl: r => `Omzetbelasting als je alles uitgeeft (${r})`, fr: r => `Taxe de vente si vous dépensez tout (${r})` },
  'rowDesc.full': { en: `employer + employee + sales tax`, nl: `werkgever + werknemer + omzetbelasting`, fr: `employeur + salarié + taxe de vente` },
  'rowTipM.full': {
    en: `Everything your employer pays on top, plus the taxes taken from you, plus sales tax, as a share of what your job costs your employer.`,
    nl: `Alles wat je werkgever bovenop betaalt, plus de belastingen die van jou worden ingehouden, plus omzetbelasting, als deel van wat je job je werkgever kost.`,
    fr: `Tout ce que votre employeur paie en plus, plus les impôts retenus sur vous, plus la taxe de vente, en part de ce que votre emploi coûte à votre employeur.`,
  },
  vatWhenSpent: { en: `Sales tax, paid when you spend it`, nl: `Omzetbelasting, betaald wanneer je het uitgeeft`, fr: `Taxe de vente, payée quand vous le dépensez` },
  'chip.full': {
    en: `<b>Full tax</b>: of everything your job costs your employer, the share that ends up as tax, sales tax included.`,
    nl: `<b>Totale belasting</b>: van alles wat je job je werkgever kost, het deel dat als belasting eindigt, omzetbelasting inbegrepen.`,
    fr: `<b>Taxation totale</b> : sur tout ce que votre emploi coûte à votre employeur, la part qui finit en impôts, taxe de vente comprise.`,
  },
  'chip.power': {
    en: vat => `<b>Buying power</b>: of everything your job costs your employer, the share you can really spend on things${vat ? ', after sales tax' : ''}. It's what's left after ${vat ? 'Full' : 'Work'} tax.`,
    nl: vat => `<b>Koopkracht</b>: van alles wat je job je werkgever kost, het deel dat je echt aan dingen kunt uitgeven${vat ? ', na omzetbelasting' : ''}. Het is wat overblijft na de ${vat ? 'totale belasting' : 'belasting op arbeid'}.`,
    fr: vat => `<b>Pouvoir d'achat</b> : sur tout ce que votre emploi coûte à votre employeur, la part que vous pouvez vraiment dépenser${vat ? ', après taxe de vente' : ''}. C'est ce qui reste après la ${vat ? 'taxation totale' : 'taxation du travail'}.`,
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
    en: `GST is 5% everywhere. Five provinces combine it with their own tax into one HST (13% to 15%). British Columbia, Manitoba and Saskatchewan add their own sales tax (PST), Quebec adds QST, and Alberta and the territories only have GST. Basic food, rent and many services carry no sales tax, so the real amount you pay is usually lower than this.`,
    nl: `GST is overal 5%. Vijf provincies voegen die samen met hun eigen belasting tot één HST (13% tot 15%). Brits-Columbia, Manitoba en Saskatchewan heffen een eigen omzetbelasting (PST) erbovenop, Quebec een QST, en Alberta en de territoria hebben enkel GST. Op basisvoeding, huur en veel diensten zit geen omzetbelasting, dus wat je echt betaalt is meestal lager.`,
    fr: `La TPS est de 5% partout. Cinq provinces la fusionnent avec leur propre taxe en une TVH (13% à 15%). La Colombie-Britannique, le Manitoba et la Saskatchewan ajoutent leur taxe de vente (TVP), le Québec la TVQ, et l'Alberta et les territoires n'ont que la TPS. L'épicerie de base, les loyers et beaucoup de services ne sont pas taxés : ce que vous payez vraiment est donc souvent plus bas.`,
  },

  // Minister mode
  ministerOn: { en: `🏛️ I AM AN MP OR MINISTER`, nl: `🏛️ IK BEN PARLEMENTSLID OF MINISTER`, fr: `🏛️ JE SUIS DÉPUTÉ OU MINISTRE` },
  'minRole.mp': { en: `Member of Parliament`, nl: `Parlementslid`, fr: `Député` },
  'minRole.sec': { en: `Secretary of State`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'minRole.min': { en: `Cabinet Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `An MP's base pay (sessional allowance) plus the extra salary for the job. Taxed like any wage, with CPP or QPP pension contributions. MPs don't pay Employment Insurance.`,
    nl: `Het basisloon van een parlementslid (parlementaire vergoeding) plus het extra loon voor de functie. Belast zoals elk loon, met CPP- of QPP-pensioenbijdragen. Parlementsleden betalen geen Employment Insurance.`,
    fr: `La paie de base d'un député (indemnité de session) plus le traitement en plus pour la fonction. Imposé comme tout salaire, avec les cotisations de retraite RPC ou RRQ. Les députés ne cotisent pas à l'assurance-emploi.`,
  },
  minSalaryHint: {
    en: `Yearly pay from 1 April 2026. By default, the amount set by law.`,
    nl: `Jaarloon vanaf 1 april 2026. Standaard het bedrag dat de wet vastlegt.`,
    fr: `Paie annuelle depuis le 1er avril 2026. Par défaut, le montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: `Every MP gets the same base pay (sessional allowance): CA$217,700 from 1 April 2026. It goes up each April in line with pay deals in private companies. Some jobs add a salary on top: CA$217,700 more for the Prime Minister, CA$103,600 for a Cabinet Minister, CA$77,500 for a Secretary of State. It is all taxed like a normal wage, with CPP or QPP but no Employment Insurance. Not counted: what they pay into the MP pension plan, the official homes, and the travel and office budgets.`,
    nl: `Elk parlementslid krijgt hetzelfde basisloon (parlementaire vergoeding): CA$ 217.700 vanaf 1 april 2026. Het stijgt elk jaar in april zoals de loonakkoorden in privébedrijven. Sommige functies geven er een loon bovenop: CA$ 217.700 extra voor de premier, CA$ 103.600 voor een minister, CA$ 77.500 voor een staatssecretaris. Alles wordt belast als een gewoon loon, met CPP of QPP maar zonder Employment Insurance. Niet meegeteld: wat ze in het pensioenplan voor parlementsleden storten, de ambtswoningen, en de reis- en kantoorbudgetten.`,
    fr: `Chaque député reçoit la même paie de base (indemnité de session) : 217 700 CA$ depuis le 1er avril 2026. Elle augmente chaque avril comme les hausses négociées dans les entreprises privées. Certaines fonctions ajoutent un traitement : 217 700 CA$ de plus pour le premier ministre, 103 600 CA$ pour un ministre, 77 500 CA$ pour un secrétaire d'État. Tout est imposé comme un salaire normal, avec RPC ou RRQ mais sans assurance-emploi. Non comptés : ce qu'ils versent au régime de retraite des députés, les résidences officielles, et les budgets de déplacement et de bureau.`,
  },
  'bd.minGross': { en: `Sessional allowance and salary`, nl: `Parlementaire vergoeding en loon`, fr: `Indemnité et traitement` },
  'bd.minEr': { en: `Government CPP/QPP contributions`, nl: `CPP/QPP-bijdragen van de overheid`, fr: `Cotisations RPC/RRQ de l'État` },
  'bd.minEe': { en: `CPP/QPP contributions`, nl: `CPP/QPP-bijdragen`, fr: `Cotisations RPC/RRQ` },
  'bd.stateCost': { en: `Total paid by the government`, nl: `Totaal betaald door de overheid`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The MP's base pay plus the extra salary for the job. Office budget, official home and travel are not included.`,
    nl: `Het basisloon van een parlementslid plus het extra loon voor de functie. Kantoorbudget, ambtswoning en reizen zitten er niet in.`,
    fr: `La paie de base du député plus le traitement en plus pour la fonction. Budget de bureau, résidence officielle et déplacements non compris.`,
  },
  'tip.stateCost': {
    en: `The pay plus the same CPP or QPP amount paid again by the employer. The federal government doesn't pay the provincial tax on wages.`,
    nl: `Het loon plus hetzelfde CPP- of QPP-bedrag, nog eens betaald door de werkgever. De federale overheid betaalt geen provinciale belasting op lonen.`,
    fr: `La paie plus le même montant de RPC ou RRQ, versé une seconde fois par l'employeur. L'État fédéral ne paie pas la taxe provinciale sur les salaires.`,
  },
  'tip.minEr': {
    en: `The House of Commons pays the same CPP or QPP amount as the MP. No Employment Insurance and no provincial tax on wages. We don't count what the House puts into the MP pension plan.`,
    nl: `Het Lagerhuis betaalt hetzelfde CPP- of QPP-bedrag als het parlementslid. Geen Employment Insurance en geen provinciale belasting op lonen. Wat het Lagerhuis in het pensioenplan voor parlementsleden stort, tellen we niet mee.`,
    fr: `La Chambre des communes verse le même montant de RPC ou RRQ que le député. Pas d'assurance-emploi ni de taxe provinciale sur les salaires. Ce que la Chambre verse au régime de retraite des députés n'est pas compté.`,
  },
  'tip.minEe': {
    en: `CPP or QPP like any employee, up to the second upper limit. MPs aren't covered by Employment Insurance. We don't count what they pay into the MP pension plan.`,
    nl: `CPP of QPP zoals elke werknemer, tot de tweede bovengrens. Parlementsleden zijn niet verzekerd bij Employment Insurance. Wat ze in het pensioenplan voor parlementsleden storten, tellen we niet mee.`,
    fr: `RPC ou RRQ comme tout salarié, jusqu'au second plafond. Les députés ne sont pas couverts par l'assurance-emploi. Ce qu'ils versent au régime de retraite des députés n'est pas compté.`,
  },
  'tip.minCwb': { en: `Nobody gets it at this income.`, nl: `Bij dit inkomen krijgt niemand ze.`, fr: `Personne ne la reçoit à ce revenu.` },

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
    en: `Taxed like a wage, with CPP or QPP, no Employment Insurance. The official homes (24 Sussex, Harrington Lake) and travel aren't counted. The face sits at the salary an ordinary employee would need to take home the same, with your household. The dot is the real gross pay.`,
    nl: `Belast als loon, met CPP of QPP, zonder Employment Insurance. De ambtswoningen (24 Sussex, Harrington Lake) en reizen tellen niet mee. Het hoofdje staat bij het loon dat een gewone werknemer nodig heeft om hetzelfde over te houden, met jouw gezin. Het bolletje is het echte brutoloon.`,
    fr: `Imposé comme un salaire, avec RPC ou RRQ, sans assurance-emploi. Les résidences officielles (24 Sussex, lac Harrington) et les déplacements ne sont pas comptés. La tête est placée au salaire dont un salarié ordinaire aurait besoin pour toucher le même net, avec votre foyer. Le point est le vrai brut.`,
  },
  'polNote.min': {
    en: `Taxed like a wage, with CPP or QPP, no Employment Insurance. The MP pension contribution isn't counted. The face sits at the salary an ordinary employee would need to take home the same. The dot is the real gross pay.`,
    nl: `Belast als loon, met CPP of QPP, zonder Employment Insurance. De pensioenbijdrage van parlementsleden telt niet mee. Het hoofdje staat bij het loon dat een gewone werknemer nodig heeft om hetzelfde over te houden. Het bolletje is het echte brutoloon.`,
    fr: `Imposé comme un salaire, avec RPC ou RRQ, sans assurance-emploi. La cotisation de retraite des députés n'est pas comptée. La tête est placée au salaire dont un salarié ordinaire aurait besoin pour toucher le même net. Le point est le vrai brut.`,
  },
  'polNote.sec': {
    en: `Taxed like a wage, with CPP or QPP, no Employment Insurance. The MP pension contribution isn't counted. The face sits at the salary an ordinary employee would need to take home the same. The dot is the real gross pay.`,
    nl: `Belast als loon, met CPP of QPP, zonder Employment Insurance. De pensioenbijdrage van parlementsleden telt niet mee. Het hoofdje staat bij het loon dat een gewone werknemer nodig heeft om hetzelfde over te houden. Het bolletje is het echte brutoloon.`,
    fr: `Imposé comme un salaire, avec RPC ou RRQ, sans assurance-emploi. La cotisation de retraite des députés n'est pas comptée. La tête est placée au salaire dont un salarié ordinaire aurait besoin pour toucher le même net. Le point est le vrai brut.`,
  },
  'polNote.mp': {
    en: `Taxed like a wage, with CPP or QPP, no Employment Insurance. The MP pension contribution and the office and staff budgets aren't counted. The face sits at the salary an ordinary employee would need to take home the same. The dot is the real gross pay.`,
    nl: `Belast als loon, met CPP of QPP, zonder Employment Insurance. De pensioenbijdrage van parlementsleden en het kantoor- en personeelsbudget tellen niet mee. Het hoofdje staat bij het loon dat een gewone werknemer nodig heeft om hetzelfde over te houden. Het bolletje is het echte brutoloon.`,
    fr: `Imposé comme un salaire, avec RPC ou RRQ, sans assurance-emploi. La cotisation de retraite des députés et les budgets de bureau et de personnel ne sont pas comptés. La tête est placée au salaire dont un salarié ordinaire aurait besoin pour toucher le même net. Le point est le vrai brut.`,
  },
  polNote: {
    en: links => `Hover a name for details, click it to zoom in. Their yearly gross pay is shown per month (÷ 12). Each one sits where an ordinary employee in your province would take home the same. Pay rates: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Hun jaarlijks brutoloon staat per maand op de grafiek (÷ 12). Elk staat waar een gewone werknemer in jouw provincie hetzelfde zou overhouden. Lonen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Leur brut annuel est montré par mois (÷ 12). Chacun est placé là où un salarié ordinaire de votre province toucherait le même net. Rémunérations : ${links}.`,
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
      ? `The Canada Workers Benefit adds money to low pay, up to ${max} a year for your household. In this range, you lose ${rate} of it for each extra dollar of net income, on top of CPP, EI and income tax. At ${b} it's all gone. With children, the Canada Child Benefit also starts shrinking, from much lower incomes.`
      : `Without the Canada Workers Benefit (turned off, or nothing for your household at this pay), low pay works like this from the federal minimum wage of ${a}: CPP is taken on pay above CA$3,500 a year, EI from the first dollar. Most of it stays free of income tax thanks to the tax-free basic personal amounts.`,
    nl: (a, b, rate, max) => b
      ? `De Canada Workers Benefit vult lage lonen aan, tot ${max} per jaar voor jouw gezin. In deze zone verlies je er ${rate} van voor elke extra dollar netto-inkomen, bovenop CPP, EI en inkomstenbelasting. Bij ${b} is ze helemaal weg. Met kinderen begint ook de Canada Child Benefit te dalen, al bij veel lagere inkomens.`
      : `Zonder Canada Workers Benefit (uitgeschakeld, of niets voor jouw gezin bij dit loon) werkt een laag loon zo vanaf het federale minimumloon van ${a}: CPP wordt ingehouden op loon boven CA$ 3.500 per jaar, EI vanaf de eerste dollar. Het meeste blijft vrij van inkomstenbelasting dankzij de belastingvrije persoonlijke basisbedragen.`,
    fr: (a, b, rate, max) => b
      ? `L'Allocation canadienne pour les travailleurs complète les bas salaires, jusqu'à ${max} par an pour votre foyer. Dans cette zone, vous en perdez ${rate} pour chaque dollar de revenu net en plus, en plus du RPC, de l'AE et de l'impôt. À ${b}, elle a disparu. Avec des enfants, l'Allocation canadienne pour enfants commence aussi à baisser, dès des revenus bien plus bas.`
      : `Sans l'Allocation canadienne pour les travailleurs (désactivée, ou rien pour votre foyer à ce salaire), un bas salaire fonctionne ainsi dès le salaire minimum fédéral de ${a} : le RPC est prélevé sur la paie au-delà de 3 500 CA$ par an, l'AE dès le premier dollar. L'essentiel reste sans impôt grâce aux montants personnels de base non imposés.`,
  },
  topTitle: {
    en: at => `Why does the rate dip above ${at}?`,
    nl: at => `Waarom daalt het tarief boven ${at}?`,
    fr: at => `Pourquoi le taux baisse-t-il au-delà de ${at} ?`,
  },
  topBody: {
    en: (at, ei) => `CPP stops at CA$85,000 a year: 5.95% of pay up to CA$74,600, then 4% more up to that second limit, for you and the same again for your employer. EI already stopped at ${ei}. Above that, extra dollars carry no more of those contributions. So less of each extra dollar is taken, even though income tax keeps rising.`,
    nl: (at, ei) => `CPP stopt bij CA$ 85.000 per jaar: 5,95% van het loon tot CA$ 74.600, daarna nog 4% tot die tweede grens, voor jou en nog eens evenveel voor je werkgever. EI stopte al bij ${ei}. Daarboven gaan er van extra dollars geen bijdragen meer af. Er wordt dus minder van elke extra dollar afgenomen, ook al stijgt de inkomstenbelasting verder.`,
    fr: (at, ei) => `Le RPC s'arrête à 85 000 CA$ par an : 5,95% de la paie jusqu'à 74 600 CA$, puis 4% de plus jusqu'à cette seconde limite, pour vous et autant pour votre employeur. L'AE s'arrêtait déjà à ${ei}. Au-delà, les dollars en plus ne paient plus ces cotisations. On prend donc moins sur chaque dollar en plus, même si l'impôt continue de monter.`,
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
    en: `12 monthly salaries. Many Canadian employers pay every two weeks; only the total for the year matters here.`,
    nl: `12 maandlonen. Veel Canadese werkgevers betalen om de twee weken; hier telt enkel het totaal voor het jaar.`,
    fr: `12 salaires mensuels. Beaucoup d'employeurs canadiens paient aux deux semaines ; seul le total de l'année compte ici.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Canada taxes each person on their own. But if one partner earns little, the other gets a tax break for them (spousal amount). And the Canada Child Benefit and the Canada Workers Benefit look at what the couple earns together. Here, your tax is what the household pays minus what it would pay if you earned nothing. A single parent gets a similar tax break for one child (eligible dependant amount).`,
    nl: `Canada belast elke persoon apart. Maar als een partner weinig verdient, krijgt de andere daarvoor een belastingvoordeel (partnerbedrag). En de Canada Child Benefit en de Canada Workers Benefit kijken naar wat het koppel samen verdient. Hier is jouw belasting wat het gezin betaalt min wat het zou betalen als jij niets verdiende. Een alleenstaande ouder krijgt een gelijkaardig voordeel voor één kind (bedrag voor een persoon ten laste).`,
    fr: `Le Canada impose chaque personne à part. Mais si l'un des conjoints gagne peu, l'autre a un allègement d'impôt pour lui (montant pour époux). Et l'Allocation canadienne pour enfants et l'Allocation pour les travailleurs regardent ce que le couple gagne ensemble. Ici, votre impôt est ce que paie le foyer moins ce qu'il paierait si vous ne gagniez rien. Un parent seul a un allègement semblable pour un enfant (montant pour personne à charge admissible).`,
  },
  'tip.paToggle': {
    en: `Money from the federal government for people with low pay, paid even if you owe no tax. You get 27% of what you earn above CA$3,000, up to CA$1,665 for a single person or CA$2,869 for a family. Then you lose 15 cents of it for each dollar of net income above CA$27,392 (CA$31,251 for a family). Worked out for a worker aged 19 or more who qualifies and isn't a full-time student.`,
    nl: `Geld van de federale overheid voor mensen met een laag loon, ook uitbetaald als je geen belasting verschuldigd bent. Je krijgt 27% van wat je boven CA$ 3.000 verdient, tot CA$ 1.665 voor een alleenstaande of CA$ 2.869 voor een gezin. Daarna verlies je 15 cent per dollar netto-inkomen boven CA$ 27.392 (CA$ 31.251 voor een gezin). Berekend voor een werknemer van 19 jaar of ouder die er recht op heeft en geen voltijdse student is.`,
    fr: `De l'argent du fédéral pour les bas salaires, versé même si vous ne devez pas d'impôt. Vous recevez 27% de ce que vous gagnez au-delà de 3 000 CA$, jusqu'à 1 665 CA$ pour une personne seule ou 2 869 CA$ pour une famille. Ensuite vous en perdez 15 cents par dollar de revenu net au-delà de 27 392 CA$ (31 251 CA$ pour une famille). Calculé pour un travailleur admissible de 19 ans ou plus qui n'est pas étudiant à temps plein.`,
  },
  'tip.costShort': { en: `Your gross salary plus what your employer pays on top: CPP, EI and taxes on wages.`, nl: `Je brutoloon plus wat je werkgever bovenop betaalt: CPP, EI en belastingen op lonen.`, fr: `Votre salaire brut plus ce que votre employeur paie en plus : RPC, AE et taxes sur les salaires.` },
  'tip.er': {
    en: `Your employer pays this on top of your gross: the same CPP or QPP pension amount as you, 1.4 times your EI, QPIP in Quebec, and the province's tax on wages where there is one.`,
    nl: `Je werkgever betaalt dit bovenop je bruto: hetzelfde CPP- of QPP-pensioenbedrag als jij, 1,4 keer jouw EI, QPIP in Quebec, en de provinciale belasting op lonen waar die bestaat.`,
    fr: `Votre employeur paie ceci en plus de votre brut : le même montant de retraite RPC ou RRQ que vous, 1,4 fois votre AE, le RQAP au Québec, et la taxe provinciale sur les salaires là où elle existe.`,
  },
  'tip.erM': {
    en: `Not counted: insurance for accidents at work (WSIB, WorkSafeBC, CNESST). Its price depends on the type of work and on past claims.`,
    nl: `Niet meegeteld: de verzekering voor arbeidsongevallen (WSIB, WorkSafeBC, CNESST). De prijs hangt af van het soort werk en van vroegere schadegevallen.`,
    fr: `Non comptée : l'assurance contre les accidents du travail (WSIB, WorkSafeBC, CNESST). Son prix dépend du type de travail et des accidents passés.`,
  },
  'tip.eht': {
    en: `A provincial tax on the total an employer pays in wages: 1.95% in Ontario and BC (Employer Health Tax), 2.15% in Manitoba (for health and higher education), 2% in Newfoundland and Labrador, and 4.26% in Quebec for big employers (Health Services Fund). Quebec employers also pay 0.06% for labour standards (CNT), and 1% for training if their total wages pass CA$2 million.`,
    nl: `Een provinciale belasting op het totaal dat een werkgever aan lonen betaalt: 1,95% in Ontario en BC (Employer Health Tax), 2,15% in Manitoba (voor gezondheid en hoger onderwijs), 2% in Newfoundland en Labrador, en 4,26% in Quebec voor grote werkgevers (Health Services Fund). Werkgevers in Quebec betalen ook 0,06% voor de arbeidsnormen (CNT), en 1% voor opleiding als hun loonsom boven CA$ 2 miljoen ligt.`,
    fr: `Une taxe provinciale sur le total des salaires versés par un employeur : 1,95% en Ontario et en C.-B. (impôt-santé des employeurs), 2,15% au Manitoba (pour la santé et l'enseignement postsecondaire), 2% à Terre-Neuve-et-Labrador, et 4,26% au Québec pour les grands employeurs (Fonds des services de santé). Les employeurs québécois paient aussi 0,06% pour les normes du travail (CNT), et 1% pour la formation si leur masse salariale dépasse 2 millions CA$.`,
  },
  'tip.ee': {
    en: `Taken from your pay. CPP (Canada Pension Plan): 5.95% of pay between CA$3,500 and CA$74,600, then 4% (CPP2) up to CA$85,000. EI (Employment Insurance): 1.63% up to CA$68,900. They pay for your pension and for your benefits if you lose your job, fall sick or have a child. Part of CPP (the newer extra part) is taken off your taxable income; the base part gives you a tax credit.`,
    nl: `Ingehouden op je loon. CPP (Canada Pension Plan): 5,95% van het loon tussen CA$ 3.500 en CA$ 74.600, daarna 4% (CPP2) tot CA$ 85.000. EI (Employment Insurance): 1,63% tot CA$ 68.900. Ze betalen je pensioen en je uitkering als je je job verliest, ziek wordt of een kind krijgt. Een deel van CPP (het nieuwere extra deel) gaat af van je belastbaar inkomen; het basisdeel geeft een belastingkrediet.`,
    fr: `Retenus sur votre paie. RPC (Régime de pensions du Canada) : 5,95% de la paie entre 3 500 CA$ et 74 600 CA$, puis 4% (RPC2) jusqu'à 85 000 CA$. AE (assurance-emploi) : 1,63% jusqu'à 68 900 CA$. Ils financent votre retraite et vos prestations si vous perdez votre emploi, tombez malade ou avez un enfant. Une partie du RPC (la partie supplémentaire, plus récente) est déduite de votre revenu imposable ; la partie de base donne un crédit d'impôt.`,
  },
  'tip.eeQc': {
    en: `Taken from your pay in Quebec. QPP (Quebec Pension Plan): 6.3% of pay between CA$3,500 and CA$74,600, then 4% (QPP2) up to CA$85,000. EI: a lower Quebec rate of 1.30% up to CA$68,900, because parental leave pay comes from QPIP instead. QPIP (parental insurance): 0.43% up to CA$103,000.`,
    nl: `Ingehouden op je loon in Quebec. QPP (Quebec Pension Plan): 6,3% van het loon tussen CA$ 3.500 en CA$ 74.600, daarna 4% (QPP2) tot CA$ 85.000. EI: een lager Quebec-tarief van 1,30% tot CA$ 68.900, omdat het geld bij ouderschapsverlof van QPIP komt. QPIP (ouderschapsverzekering): 0,43% tot CA$ 103.000.`,
    fr: `Retenus sur votre paie au Québec. RRQ (Régime de rentes du Québec) : 6,3% de la paie entre 3 500 CA$ et 74 600 CA$, puis 4% (RRQ2) jusqu'à 85 000 CA$. AE : un taux réduit au Québec de 1,30% jusqu'à 68 900 CA$, car les congés parentaux sont payés par le RQAP. RQAP (assurance parentale) : 0,43% jusqu'à 103 000 CA$.`,
  },
  'tip.sp': {
    en: `In the Northwest Territories and Nunavut, 2% of every employee's pay is taken as a payroll tax, on top of income tax.`,
    nl: `In de Northwest Territories en Nunavut wordt 2% van het loon van elke werknemer ingehouden als loonbelasting, bovenop de inkomstenbelasting.`,
    fr: `Dans les Territoires du Nord-Ouest et au Nunavut, 2% de la paie de chaque salarié sont prélevés comme taxe sur la paie, en plus de l'impôt.`,
  },
  'tip.taxable': {
    en: `The part of your pay that income tax is worked out on: your gross minus the newer extra CPP or QPP contributions (the first extra 1% and CPP2). Both federal and provincial tax rates apply to this amount.`,
    nl: `Het deel van je loon waarop de inkomstenbelasting wordt berekend: je bruto min de nieuwere extra CPP- of QPP-bijdragen (de eerste extra 1% en CPP2). Zowel de federale als de provinciale tarieven gelden op dit bedrag.`,
    fr: `La part de votre paie sur laquelle on calcule l'impôt : votre brut moins les cotisations RPC ou RRQ supplémentaires, plus récentes (le premier 1% supplémentaire et le RPC2). Les taux fédéraux et provinciaux s'appliquent à ce montant.`,
  },
  'tip.fedShort': {
    en: `Your net income is taxed in five slices, from 14% to 33%: the higher the slice, the higher the rate. Then you get 14% back on a few amounts: the tax-free basic personal amount, your CPP and EI, and the Canada employment amount.`,
    nl: `Je netto-inkomen wordt belast in vijf schijven, van 14% tot 33%: hoe hoger de schijf, hoe hoger het tarief. Daarna krijg je 14% terug op enkele bedragen: het belastingvrije persoonlijk basisbedrag, je CPP en EI, en het Canada employment amount.`,
    fr: `Votre revenu net est imposé en cinq tranches, de 14% à 33% : plus la tranche est haute, plus le taux l'est. Ensuite, vous récupérez 14% de quelques montants : le montant personnel de base non imposé, votre RPC et AE, et le montant canadien pour emploi.`,
  },
  'tip.bpa': { en: `basic personal amount`, nl: `persoonlijk basisbedrag`, fr: `montant personnel de base` },
  'tip.spouseAmt': { en: `spousal amount`, nl: `partnerbedrag`, fr: `montant pour époux` },
  'tip.depAmt': { en: `eligible dependant amount`, nl: `bedrag voor een persoon ten laste`, fr: `montant pour personne à charge admissible` },
  'tip.contribCred': { en: `base CPP and EI`, nl: `basis-CPP en EI`, fr: `RPC de base et AE` },
  'tip.cea': { en: `Canada employment amount`, nl: `Canada employment amount`, fr: `montant canadien pour emploi` },
  'tip.abate': { en: `Quebec abatement 16.5%`, nl: `Quebec-korting 16,5%`, fr: `abattement du Québec 16,5%` },
  'tip.fedM': {
    en: `2026 tax slices, with the lowest rate lowered to 14%. The tax-free basic personal amount of CA$16,452 shrinks to CA$14,829 for incomes between CA$181,440 and CA$258,482. People in Quebec pay 16.5% less federal tax, because Quebec runs some programs itself.`,
    nl: `Belastingschijven 2026, met het laagste tarief verlaagd tot 14%. Het belastingvrije persoonlijk basisbedrag van CA$ 16.452 daalt tot CA$ 14.829 voor inkomens tussen CA$ 181.440 en CA$ 258.482. Inwoners van Quebec betalen 16,5% minder federale belasting, omdat Quebec sommige programma's zelf regelt.`,
    fr: `Tranches 2026, avec le premier taux abaissé à 14%. Le montant personnel de base non imposé de 16 452 CA$ descend à 14 829 CA$ pour les revenus entre 181 440 CA$ et 258 482 CA$. Les Québécois paient 16,5% d'impôt fédéral en moins, car le Québec gère lui-même certains programmes.`,
  },
  'tip.provShort': {
    en: `Your province or territory taxes the same net income with its own slices and rates. You get some back on a few amounts at its lowest rate, and some provinces add extra taxes or premiums.`,
    nl: `Je provincie of territorium belast hetzelfde netto-inkomen met eigen schijven en tarieven. Je krijgt een deel terug op enkele bedragen aan het laagste tarief, en sommige provincies tellen er extra belastingen of premies bij.`,
    fr: `Votre province ou territoire impose le même revenu net avec ses propres tranches et taux. Vous récupérez une partie sur quelques montants au taux le plus bas, et certaines provinces ajoutent des surtaxes ou contributions.`,
  },
  'tip.qcEd': { en: `deduction for employment income`, nl: `aftrek voor inkomen uit arbeid`, fr: `déduction pour travailleur` },
  'tip.qcTaxable': { en: `Quebec taxable income`, nl: `Belastbaar inkomen in Quebec`, fr: `Revenu imposable du Québec` },
  'tip.provCred': { en: `personal amounts, CPP and EI`, nl: `persoonlijke bedragen, CPP en EI`, fr: `montants personnels, RPC et AE` },
  'tip.provM': {
    en: `2026 rates. They include BC's lowest rate going up to 5.6%, Prince Edward Island's new 20% slice above CA$200,000, and Newfoundland and Labrador's higher tax-free amount. Not counted: tax cuts for low incomes in New Brunswick, Nova Scotia, Newfoundland and Labrador, Manitoba and PEI, and provincial credits paid out even if you owe no tax.`,
    nl: `Tarieven 2026. Daarin zitten het laagste tarief van BC dat stijgt tot 5,6%, de nieuwe schijf van 20% boven CA$ 200.000 op Prins Edwardeiland, en het hogere belastingvrije bedrag in Newfoundland en Labrador. Niet meegeteld: belastingverlagingen voor lage inkomens in New Brunswick, Nova Scotia, Newfoundland en Labrador, Manitoba en PEI, en provinciale kredieten die ook uitbetaald worden als je geen belasting verschuldigd bent.`,
    fr: `Taux 2026. Ils incluent le premier taux de la C.-B. porté à 5,6%, la nouvelle tranche de 20% au-delà de 200 000 CA$ à l'Île-du-Prince-Édouard, et le montant non imposé relevé à Terre-Neuve-et-Labrador. Non comptés : les baisses d'impôt pour faible revenu au Nouveau-Brunswick, en Nouvelle-Écosse, à Terre-Neuve-et-Labrador, au Manitoba et à l'Î.-P.-É., et les crédits provinciaux versés même sans impôt à payer.`,
  },
  'tip.provQcM': {
    en: `Quebec has its own tax return: 14% to 25.75%. It's worked out after taking 6% of your pay off as a deduction for workers (up to CA$1,450). The tax-free basic amount of CA$18,952 already takes QPP, EI and QPIP into account, so they get no separate credit. Not counted: the solidarity tax credit, the work premium and the credit for people living alone.`,
    nl: `Quebec heeft een eigen belastingaangifte: 14% tot 25,75%. Ze wordt berekend nadat 6% van je loon is afgetrokken als aftrek voor werknemers (tot CA$ 1.450). Het belastingvrije basisbedrag van CA$ 18.952 houdt al rekening met QPP, EI en QPIP, dus die krijgen geen apart krediet. Niet meegeteld: het solidariteitskrediet, de arbeidspremie en het krediet voor alleenwonenden.`,
    fr: `Le Québec a sa propre déclaration : 14% à 25,75%. L'impôt est calculé après avoir retiré 6% de votre paie au titre de la déduction pour travailleur (jusqu'à 1 450 CA$). Le montant de base non imposé de 18 952 CA$ tient déjà compte du RRQ, de l'AE et du RQAP, qui n'ont donc pas de crédit à part. Non comptés : le crédit pour solidarité, la prime au travail et le montant pour personne vivant seule.`,
  },
  'tip.surtax': {
    en: `Ontario adds an extra tax on its own tax: 20% of the part above CA$5,818, and another 36% of the part above CA$7,446. That turns its top rate of 13.16% into 20.53%.`,
    nl: `Ontario telt een extra belasting op zijn eigen belasting: 20% van het deel boven CA$ 5.818, en nog eens 36% van het deel boven CA$ 7.446. Zo wordt het toptarief van 13,16% eigenlijk 20,53%.`,
    fr: `L'Ontario ajoute une surtaxe sur son propre impôt : 20% de la part au-delà de 5 818 CA$, et encore 36% de la part au-delà de 7 446 CA$. Son taux le plus élevé de 13,16% devient ainsi 20,53%.`,
  },
  'tip.ohp': {
    en: `People in Ontario pay a health premium with their income tax. Nothing if taxable income is up to CA$20,000, then more in steps, up to CA$900 above CA$200,600.`,
    nl: `Inwoners van Ontario betalen een gezondheidspremie met hun inkomstenbelasting. Niets als het belastbaar inkomen tot CA$ 20.000 is, daarna in stappen meer, tot CA$ 900 boven CA$ 200.600.`,
    fr: `Les Ontariens paient une contribution-santé avec leur impôt. Rien jusqu'à 20 000 CA$ de revenu imposable, puis davantage par paliers, jusqu'à 900 CA$ au-delà de 200 600 CA$.`,
  },
  'tip.cwb': {
    en: `Money paid with your tax return (and partly in advance), even if you owe no tax. You get 27% of what you earn above CA$3,000, up to CA$1,665 for a single person or CA$2,869 for a couple or single parent. You lose 15 cents of it for each dollar of net income above CA$27,392 (CA$31,251 for a family; up to CA$16,714 of the lower earner's income doesn't count).`,
    nl: `Geld dat je krijgt met je belastingaangifte (en deels vooraf), ook als je geen belasting verschuldigd bent. Je krijgt 27% van wat je boven CA$ 3.000 verdient, tot CA$ 1.665 voor een alleenstaande of CA$ 2.869 voor een koppel of alleenstaande ouder. Je verliest 15 cent per dollar netto-inkomen boven CA$ 27.392 (CA$ 31.251 voor een gezin; tot CA$ 16.714 van het inkomen van de laagste verdiener telt niet mee).`,
    fr: `De l'argent versé avec votre déclaration (et en partie d'avance), même si vous ne devez pas d'impôt. Vous recevez 27% de ce que vous gagnez au-delà de 3 000 CA$, jusqu'à 1 665 CA$ pour une personne seule ou 2 869 CA$ pour un couple ou un parent seul. Vous en perdez 15 cents par dollar de revenu net au-delà de 27 392 CA$ (31 251 CA$ pour une famille ; jusqu'à 16 714 CA$ du revenu du conjoint qui gagne le moins ne comptent pas).`,
  },
  'tip.cwbHh': { en: `Household's Canada Workers Benefit`, nl: `Canada Workers Benefit van het gezin`, fr: `Allocation pour les travailleurs du foyer` },
  'tip.cwbM': {
    en: `Quebec, Alberta and Nunavut have their own amounts, agreed with Ottawa. Here we use the standard federal amounts everywhere. The extra amount for people with a disability isn't counted.`,
    nl: `Quebec, Alberta en Nunavut hebben eigen bedragen, afgesproken met Ottawa. Hier gebruiken we overal de gewone federale bedragen. Het extra bedrag voor mensen met een handicap telt niet mee.`,
    fr: `Le Québec, l'Alberta et le Nunavut ont leurs propres montants, convenus avec Ottawa. Ici, on utilise partout les montants fédéraux standard. Le supplément pour personnes handicapées n'est pas compté.`,
  },
  'tip.ccb': {
    en: `A tax-free payment each month for each child: up to CA$8,157 a year for a child under 6 and CA$6,883 from 6 to 17 (July 2026 to June 2027). It gets smaller once the family's net income passes CA$38,237, and faster above CA$82,847. What your pay makes you lose counts here as a tax.`,
    nl: `Een belastingvrije maandelijkse uitkering per kind: tot CA$ 8.157 per jaar voor een kind onder 6 en CA$ 6.883 van 6 tot 17 (juli 2026 tot juni 2027). Ze wordt kleiner zodra het netto-inkomen van het gezin boven CA$ 38.237 komt, en sneller boven CA$ 82.847. Wat je door je loon verliest, telt hier als belasting.`,
    fr: `Un versement mensuel non imposable pour chaque enfant : jusqu'à 8 157 CA$ par an pour un enfant de moins de 6 ans et 6 883 CA$ de 6 à 17 ans (juillet 2026 à juin 2027). Il diminue dès que le revenu net de la famille dépasse 38 237 CA$, et plus vite au-delà de 82 847 CA$. Ce que votre salaire vous fait perdre compte ici comme un impôt.`,
  },
  'tip.ccbWo': { en: `If you earned nothing`, nl: `Als jij niets verdiende`, fr: `Si vous ne gagniez rien` },
  'tip.ccbWith': { en: `With your pay`, nl: `Met jouw loon`, fr: `Avec votre salaire` },
  'tip.ccbM': {
    en: `In real life the benefit is based on last year's income. Here we use this year's, as if it didn't change. Provincial child benefits (Ontario, Quebec, BC, Alberta and others) aren't counted.`,
    nl: `In het echt hangt de uitkering af van het inkomen van vorig jaar. Hier gebruiken we dat van dit jaar, alsof het niet verandert. Provinciale kinderbijslagen (Ontario, Quebec, BC, Alberta en andere) tellen niet mee.`,
    fr: `En réalité, l'allocation dépend du revenu de l'année précédente. Ici, on prend celui de cette année, comme s'il ne changeait pas. Les allocations provinciales pour enfants (Ontario, Québec, C.-B., Alberta et autres) ne sont pas comptées.`,
  },
  'tip.hhWith': { en: `Household`, nl: `Gezin`, fr: `Foyer` },
  'tip.hhWithout': { en: `Household if you earned nothing`, nl: `Gezin als jij niets verdiende`, fr: `Foyer sans vos revenus` },
  'tip.yours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. That's your gross, minus CPP/QPP, EI and QPIP, minus federal and provincial income tax, plus the Canada Workers Benefit, minus the Canada Child Benefit your pay makes you lose.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Dat is je bruto, min CPP/QPP, EI en QPIP, min federale en provinciale inkomstenbelasting, plus de Canada Workers Benefit, min de Canada Child Benefit die je door je loon verliest.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. C'est votre brut, moins RPC/RRQ, AE et RQAP, moins les impôts fédéral et provincial, plus l'Allocation pour les travailleurs, moins l'Allocation canadienne pour enfants que votre salaire vous fait perdre.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · tax year 2026 (1 January to 31 December 2026)`,
    nl: `Gebruikte regels · belastingjaar 2026 (1 januari tot 31 december 2026)`,
    fr: `Règles utilisées · année d'imposition 2026 (1er janvier au 31 décembre 2026)`,
  },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Pension: CPP <span class="num">5.95%</span> of pay from CA$3,500 to CA$74,600 and CPP2 <span class="num">4%</span> up to CA$85,000, the same as the employee pays. QPP 6.3% in Quebec.`,
      `Employment Insurance (EI) <span class="num">2.282%</span> up to CA$68,900 (1.82% in Quebec), Quebec parental insurance (QPIP) 0.602% up to CA$103,000.`,
      `Taxes on the total wages of big employers: Ontario and BC 1.95%, Manitoba 2.15%, Newfoundland and Labrador 2%, Quebec Health Services Fund 4.26% + training 1% + labour standards 0.06%. Insurance for accidents at work isn't counted.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Pensioen: CPP <span class="num">5,95%</span> van het loon van CA$ 3.500 tot CA$ 74.600 en CPP2 <span class="num">4%</span> tot CA$ 85.000, evenveel als de werknemer betaalt. QPP 6,3% in Quebec.`,
      `Werkloosheidsverzekering (EI) <span class="num">2,282%</span> tot CA$ 68.900 (1,82% in Quebec), ouderschapsverzekering van Quebec (QPIP) 0,602% tot CA$ 103.000.`,
      `Belastingen op de totale loonsom van grote werkgevers: Ontario en BC 1,95%, Manitoba 2,15%, Newfoundland en Labrador 2%, Health Services Fund van Quebec 4,26% + opleiding 1% + arbeidsnormen 0,06%. De verzekering voor arbeidsongevallen telt niet mee.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Retraite : RPC <span class="num">5,95%</span> de la paie de 3 500 CA$ à 74 600 CA$ et RPC2 <span class="num">4%</span> jusqu'à 85 000 CA$, autant que le salarié. RRQ 6,3% au Québec.`,
      `Assurance-emploi (AE) <span class="num">2,282%</span> jusqu'à 68 900 CA$ (1,82% au Québec), assurance parentale du Québec (RQAP) 0,602% jusqu'à 103 000 CA$.`,
      `Taxes sur le total des salaires des grands employeurs : Ontario et C.-B. 1,95%, Manitoba 2,15%, Terre-Neuve-et-Labrador 2%, FSS du Québec 4,26% + formation 1% + normes du travail 0,06%. L'assurance contre les accidents du travail n'est pas comptée.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [
      `Pension: CPP <span class="num">5.95%</span> of pay between CA$3,500 and CA$74,600 (at most CA$4,230.45), CPP2 <span class="num">4%</span> up to CA$85,000 (at most CA$416). In Quebec, QPP 6.3% (at most CA$4,479.30).`,
      `Employment Insurance (EI) <span class="num">1.63%</span> up to CA$68,900 (at most CA$1,123.07). In Quebec 1.30%, plus 0.43% parental insurance (QPIP) up to CA$103,000.`,
      `Northwest Territories and Nunavut: payroll tax of <span class="num">2%</span> of pay.`,
    ] },
    nl: { h: `2 · Werknemersbijdragen`, li: [
      `Pensioen: CPP <span class="num">5,95%</span> van het loon tussen CA$ 3.500 en CA$ 74.600 (hoogstens CA$ 4.230,45), CPP2 <span class="num">4%</span> tot CA$ 85.000 (hoogstens CA$ 416). In Quebec QPP 6,3% (hoogstens CA$ 4.479,30).`,
      `Werkloosheidsverzekering (EI) <span class="num">1,63%</span> tot CA$ 68.900 (hoogstens CA$ 1.123,07). In Quebec 1,30%, plus 0,43% ouderschapsverzekering (QPIP) tot CA$ 103.000.`,
      `Northwest Territories en Nunavut: loonbelasting van <span class="num">2%</span> van het loon.`,
    ] },
    fr: { h: `2 · Cotisations salariales`, li: [
      `Retraite : RPC <span class="num">5,95%</span> de la paie entre 3 500 CA$ et 74 600 CA$ (au plus 4 230,45 CA$), RPC2 <span class="num">4%</span> jusqu'à 85 000 CA$ (au plus 416 CA$). Au Québec, RRQ 6,3% (au plus 4 479,30 CA$).`,
      `Assurance-emploi (AE) <span class="num">1,63%</span> jusqu'à 68 900 CA$ (au plus 1 123,07 CA$). Au Québec 1,30%, plus 0,43% d'assurance parentale (RQAP) jusqu'à 103 000 CA$.`,
      `Territoires du Nord-Ouest et Nunavut : taxe de <span class="num">2%</span> sur la paie.`,
    ] },
  },
  'ref.fed': {
    en: br => ({ h: `3 · Federal income tax`, li: [
      `Rates by slice of net income. The first CA$16,452 (basic personal amount) is in effect tax-free:${br}`,
      `You get 14% back on: the basic personal amount, base CPP and EI, the Canada employment amount of CA$1,501, and the amount for a partner or dependant. In Quebec, federal tax is 16.5% lower (Quebec abatement).`,
    ] }),
    nl: br => ({ h: `3 · Federale inkomstenbelasting`, li: [
      `Tarieven per schijf van het netto-inkomen. De eerste CA$ 16.452 (persoonlijk basisbedrag) is in feite belastingvrij:${br}`,
      `Je krijgt 14% terug op: het persoonlijk basisbedrag, basis-CPP en EI, het Canada employment amount van CA$ 1.501, en het bedrag voor een partner of persoon ten laste. In Quebec is de federale belasting 16,5% lager (Quebec-korting).`,
    ] }),
    fr: br => ({ h: `3 · Impôt fédéral`, li: [
      `Taux par tranche de revenu net. Les premiers 16 452 CA$ (montant personnel de base) sont en pratique non imposés :${br}`,
      `Vous récupérez 14% sur : le montant personnel de base, le RPC de base et l'AE, le montant canadien pour emploi de 1 501 CA$, et le montant pour époux ou personne à charge. Au Québec, l'impôt fédéral est 16,5% plus bas (abattement du Québec).`,
    ] }),
  },
  'ref.prov': {
    en: { h: `4 · Provincial and territorial income tax`, li: [
      `Each province's and territory's 2026 tax slices and tax-free basic amount, taken from the payroll formulas of the CRA (the federal tax agency). Amounts are given back at the lowest rate. Includes the changes announced in 2026 for British Columbia, Newfoundland and Labrador and Prince Edward Island.`,
      `Ontario: extra tax (surtax) of 20% on Ontario tax above CA$5,818 and 36% above CA$7,446, Health Premium up to CA$900, Ontario tax reduction and LIFT credit for low incomes. BC tax reduction up to CA$690. Alberta's extra credit. Manitoba's tax-free amount fades out between CA$200,000 and CA$400,000.`,
    ] },
    nl: { h: `4 · Provinciale en territoriale inkomstenbelasting`, li: [
      `De belastingschijven en het belastingvrije basisbedrag 2026 van elke provincie en elk territorium, uit de loonformules van de CRA (de federale belastingdienst). Bedragen worden teruggegeven aan het laagste tarief. Met de in 2026 aangekondigde wijzigingen voor Brits-Columbia, Newfoundland en Labrador en Prins Edwardeiland.`,
      `Ontario: extra belasting (surtax) van 20% op de Ontario-belasting boven CA$ 5.818 en 36% boven CA$ 7.446, Health Premium tot CA$ 900, Ontario tax reduction en LIFT-krediet voor lage inkomens. BC tax reduction tot CA$ 690. Het extra krediet van Alberta. Het belastingvrije bedrag van Manitoba verdwijnt geleidelijk tussen CA$ 200.000 en CA$ 400.000.`,
    ] },
    fr: { h: `4 · Impôt provincial et territorial`, li: [
      `Les tranches et le montant de base non imposé 2026 de chaque province et territoire, tirés des formules de retenue de l'ARC (l'agence fédérale des impôts). Les montants sont rendus au taux le plus bas. Avec les changements annoncés en 2026 pour la Colombie-Britannique, Terre-Neuve-et-Labrador et l'Île-du-Prince-Édouard.`,
      `Ontario : surtaxe de 20% sur l'impôt de l'Ontario au-delà de 5 818 CA$ et 36% au-delà de 7 446 CA$, contribution-santé jusqu'à 900 CA$, réduction d'impôt de l'Ontario et crédit LIFT pour les bas revenus. Réduction d'impôt de la C.-B. jusqu'à 690 CA$. Le crédit supplémentaire de l'Alberta. Le montant non imposé du Manitoba disparaît peu à peu entre 200 000 CA$ et 400 000 CA$.`,
    ] },
  },
  'ref.qc': {
    en: { h: `5 · Quebec`, li: [
      `Quebec tax <span class="num">14% / 19% / 24% / 25.75%</span>, the rate changing at CA$54,345, CA$108,680 and CA$132,245. Tax-free basic amount CA$18,952, given back at 14%. 6% of pay taken off as a deduction for workers, up to CA$1,450.`,
      `Federal tax 16.5% lower (Quebec abatement). QPP instead of CPP, and QPIP instead of the parental leave part of EI.`,
    ] },
    nl: { h: `5 · Quebec`, li: [
      `Quebec-belasting <span class="num">14% / 19% / 24% / 25,75%</span>, het tarief verandert bij CA$ 54.345, CA$ 108.680 en CA$ 132.245. Belastingvrij basisbedrag CA$ 18.952, teruggegeven aan 14%. 6% van het loon afgetrokken als aftrek voor werknemers, tot CA$ 1.450.`,
      `Federale belasting 16,5% lager (Quebec-korting). QPP in plaats van CPP, en QPIP in plaats van het deel ouderschapsverlof van EI.`,
    ] },
    fr: { h: `5 · Québec`, li: [
      `Impôt du Québec <span class="num">14% / 19% / 24% / 25,75%</span>, le taux changeant à 54 345 CA$, 108 680 CA$ et 132 245 CA$. Montant de base non imposé 18 952 CA$, rendu à 14%. 6% de la paie retirés au titre de la déduction pour travailleur, jusqu'à 1 450 CA$.`,
      `Impôt fédéral 16,5% plus bas (abattement du Québec). RRQ au lieu du RPC, et RQAP au lieu du volet congé parental de l'AE.`,
    ] },
  },
  'ref.cr': {
    en: { h: `6 · Benefits`, li: [
      `Canada Workers Benefit: 27% of what you earn above CA$3,000, at most <span class="num">CA$1,665</span> single or <span class="num">CA$2,869</span> for a family. You lose 15 cents per dollar of net income above CA$27,392 / CA$31,251.`,
      `Canada Child Benefit (July 2026 to June 2027): <span class="num">CA$8,157</span> per child under 6, <span class="num">CA$6,883</span> from 6 to 17. It shrinks once family net income passes CA$38,237, and faster above CA$82,847.`,
    ] },
    nl: { h: `6 · Uitkeringen`, li: [
      `Canada Workers Benefit: 27% van wat je boven CA$ 3.000 verdient, hoogstens <span class="num">CA$ 1.665</span> alleenstaand of <span class="num">CA$ 2.869</span> voor een gezin. Je verliest 15 cent per dollar netto-inkomen boven CA$ 27.392 / CA$ 31.251.`,
      `Canada Child Benefit (juli 2026 tot juni 2027): <span class="num">CA$ 8.157</span> per kind onder 6, <span class="num">CA$ 6.883</span> van 6 tot 17. Ze daalt zodra het netto-inkomen van het gezin boven CA$ 38.237 komt, en sneller boven CA$ 82.847.`,
    ] },
    fr: { h: `6 · Prestations`, li: [
      `Allocation canadienne pour les travailleurs : 27% de ce que vous gagnez au-delà de 3 000 CA$, au plus <span class="num">1 665 CA$</span> seul ou <span class="num">2 869 CA$</span> pour une famille. Vous en perdez 15 cents par dollar de revenu net au-delà de 27 392 / 31 251 CA$.`,
      `Allocation canadienne pour enfants (juillet 2026 à juin 2027) : <span class="num">8 157 CA$</span> par enfant de moins de 6 ans, <span class="num">6 883 CA$</span> de 6 à 17 ans. Elle baisse dès que le revenu net familial dépasse 38 237 CA$, et plus vite au-delà de 82 847 CA$.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · Sales tax on spending`, li: [
      `GST 5% everywhere. HST (GST and provincial tax combined) 13% in Ontario, 14% in Nova Scotia, 15% in New Brunswick, Newfoundland and Labrador and PEI. GST + PST 12% in BC and Manitoba, 11% in Saskatchewan. GST + QST 14.975% in Quebec.`,
      `How much of a price is tax: price × r / (100 + r). We count it on all your take-home pay, as if you spent it all.`,
    ] },
    nl: { h: `7 · Omzetbelasting op uitgaven`, li: [
      `GST 5% overal. HST (GST en provinciale belasting samen) 13% in Ontario, 14% in Nova Scotia, 15% in New Brunswick, Newfoundland en Labrador en PEI. GST + PST 12% in BC en Manitoba, 11% in Saskatchewan. GST + QST 14,975% in Quebec.`,
      `Hoeveel van een prijs belasting is: prijs × r / (100 + r). We rekenen het op je hele nettoloon, alsof je alles uitgeeft.`,
    ] },
    fr: { h: `7 · Taxe de vente sur les dépenses`, li: [
      `TPS 5% partout. TVH (TPS et taxe provinciale réunies) 13% en Ontario, 14% en Nouvelle-Écosse, 15% au Nouveau-Brunswick, à Terre-Neuve-et-Labrador et à l'Î.-P.-É. TPS + TVP 12% en C.-B. et au Manitoba, 11% en Saskatchewan. TPS + TVQ 14,975% au Québec.`,
      `La part de taxe dans un prix : prix × r / (100 + r). On l'applique à tout votre salaire net, comme si vous dépensiez tout.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Parliament and Cabinet`, li: [
      `From 1 April 2026: MP <span class="num">CA$217,700</span>, Secretary of State <span class="num">CA$295,200</span>, Cabinet Minister <span class="num">CA$321,300</span>, Prime Minister <span class="num">CA$435,400</span>.`,
      `Taxed like a wage, with CPP or QPP, but no EI. The MP pension plan isn't counted.`,
    ] },
    nl: { h: `8 · Parlement en regering`, li: [
      `Vanaf 1 april 2026: parlementslid <span class="num">CA$ 217.700</span>, staatssecretaris <span class="num">CA$ 295.200</span>, minister <span class="num">CA$ 321.300</span>, premier <span class="num">CA$ 435.400</span>.`,
      `Belast als loon, met CPP of QPP, maar zonder EI. Het pensioenplan voor parlementsleden telt niet mee.`,
    ] },
    fr: { h: `8 · Parlement et Cabinet`, li: [
      `Depuis le 1er avril 2026 : député <span class="num">217 700 CA$</span>, secrétaire d'État <span class="num">295 200 CA$</span>, ministre <span class="num">321 300 CA$</span>, premier ministre <span class="num">435 400 CA$</span>.`,
      `Imposés comme un salaire, avec RPC ou RRQ, mais sans AE. Le régime de retraite des députés n'est pas compté.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Money you put in a retirement savings account (RRSP) or workplace pension, union dues, insurance for accidents at work, the GST/HST credit (Canada Groceries and Essentials Benefit), provincial child and family benefits, Quebec's solidarity credit and work premium, and provincial tax cuts for low incomes outside Ontario and BC.`,
      `The extra Canada Workers Benefit for people with a disability and the Quebec, Alberta and Nunavut versions of it; property tax and city taxes.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Geld dat je op een pensioenspaarrekening (RRSP) of in een bedrijfspensioen stort, vakbondsbijdragen, de verzekering voor arbeidsongevallen, het GST/HST-krediet (Canada Groceries and Essentials Benefit), provinciale kinder- en gezinsbijslagen, het solidariteitskrediet en de arbeidspremie van Quebec, en provinciale belastingverlagingen voor lage inkomens buiten Ontario en BC.`,
      `Het extra bedrag van de Canada Workers Benefit voor mensen met een handicap en de versies ervan in Quebec, Alberta en Nunavut; onroerendgoedbelasting en gemeentebelastingen.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `L'argent placé dans un compte d'épargne-retraite (REER) ou un régime de retraite d'entreprise, les cotisations syndicales, l'assurance contre les accidents du travail, le crédit pour TPS/TVH (Allocation canadienne pour l'épicerie et les besoins essentiels), les allocations familiales provinciales, le crédit pour solidarité et la prime au travail du Québec, et les baisses d'impôt provinciales pour faible revenu hors Ontario et C.-B.`,
      `Le supplément de l'Allocation pour les travailleurs pour les personnes handicapées et ses versions du Québec, de l'Alberta et du Nunavut ; taxes foncières et municipales.`,
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

  // Known gaps and caveats
  'gap.noCheck': {
    en: `We didn't compare any take-home amount with the CRA's online payroll calculator, and we didn't do a last online check of the provincial tables.`,
    nl: `We hebben geen enkel nettobedrag vergeleken met de online loonrekentool van de CRA, en de provinciale tabellen niet een laatste keer online nagekeken.`,
    fr: `Nous n'avons comparé aucun net au calculateur de retenues en ligne de l'ARC, ni fait de dernière vérification en ligne des barèmes provinciaux.`,
  },
  'gap.payrollTax': {
    en: `The employer taxes on wages outside Ontario (BC, Manitoba, Newfoundland and Labrador, Quebec) come from memory, not checked against the 2026 notices. In real life the rate depends on the employer's total wages, with a tax-free part and rising rates; the small/large switch is a simple stand-in.`,
    nl: `De werkgeversbelastingen op lonen buiten Ontario (BC, Manitoba, Newfoundland en Labrador, Quebec) komen uit het geheugen, niet nagekeken met de bekendmakingen van 2026. In het echt hangt het tarief af van de totale loonsom, met een vrijgesteld deel en stijgende tarieven; de keuze klein/groot is een eenvoudige benadering.`,
    fr: `Les taxes patronales sur les salaires hors Ontario (C.-B., Manitoba, Terre-Neuve-et-Labrador, Québec) viennent de mémoire, sans vérification des avis 2026. En réalité, le taux dépend de la masse salariale, avec une part exonérée et des taux qui montent ; le choix petite/grande est une simplification.`,
  },
  'gap.nunavut': {
    en: `We assume Nunavut's 2% tax on employees' pay works like the one in the Northwest Territories. We couldn't confirm it.`,
    nl: `We gaan ervan uit dat de belasting van 2% op het loon van werknemers in Nunavut werkt zoals die in de Northwest Territories. We konden dat niet bevestigen.`,
    fr: `Nous supposons que la taxe de 2% sur la paie des salariés au Nunavut fonctionne comme celle des Territoires du Nord-Ouest. Nous n'avons pas pu le confirmer.`,
  },
  'gap.qcEmpDed': {
    en: `Quebec's deduction for workers (6% of pay, up to CA$1,450) uses a maximum we couldn't confirm for 2026.`,
    nl: `De aftrek voor werknemers in Quebec (6% van het loon, tot CA$ 1.450) gebruikt een maximum dat we voor 2026 niet konden bevestigen.`,
    fr: `La déduction pour travailleur du Québec (6% de la paie, jusqu'à 1 450 CA$) utilise un maximum que nous n'avons pas pu confirmer pour 2026.`,
  },
  'gap.ccbYear': {
    en: `We show the Canada Child Benefit as if this year's pay decided it. In real life it's based on the family's net income from last year, so a raise only lowers it from the next July.`,
    nl: `We tonen de Canada Child Benefit alsof het loon van dit jaar hem bepaalt. In het echt hangt hij af van het netto gezinsinkomen van vorig jaar, dus een loonsverhoging verlaagt hem pas vanaf juli van het jaar erna.`,
    fr: `Nous montrons l'Allocation canadienne pour enfants comme si le salaire de cette année la fixait. En réalité, elle dépend du revenu net familial de l'année précédente : une hausse de salaire ne la réduit donc qu'à partir du mois de juillet suivant.`,
  },
  'gap.minWage': {
    en: `The minimum wage line is the federal CA$18.15 an hour, at 40 hours a week. Most workers fall under their own province's minimum wage, which is different.`,
    nl: `De lijn van het minimumloon is het federale CA$ 18,15 per uur, bij 40 uur per week. De meeste werknemers vallen onder het minimumloon van hun eigen provincie, dat anders is.`,
    fr: `La ligne du salaire minimum est le minimum fédéral de 18,15 CA$ de l'heure, à 40 heures par semaine. La plupart des salariés relèvent du salaire minimum de leur province, qui est différent.`,
  },
  'gap.avgWage': {
    en: `The average wage is the average hourly pay from the Labour Force Survey for September 2026, at 37.5 hours a week. There is no median line (the pay that half of workers earn more than).`,
    nl: `Het gemiddelde loon is het gemiddelde uurloon uit de Labour Force Survey voor september 2026, bij 37,5 uur per week. Er is geen lijn voor de mediaan (het loon waarboven de helft van de werknemers verdient).`,
    fr: `Le salaire moyen est la paie horaire moyenne de l'Enquête sur la population active de septembre 2026, à 37,5 heures par semaine. Il n'y a pas de ligne pour la médiane (le salaire au-dessus duquel gagne la moitié des salariés).`,
  },
  'gap.mpPension': {
    en: `MPs and ministers pay into the MP pension plan. We don't take that off, so their take-home pay here is higher than on their real pay slip.`,
    nl: `Parlementsleden en ministers betalen aan het pensioenplan voor parlementsleden. Dat trekken we niet af, dus hun nettoloon ligt hier hoger dan op hun echte loonstrook.`,
    fr: `Les députés et ministres cotisent au régime de retraite des parlementaires. Nous ne le retirons pas : leur net est donc ici plus élevé que sur leur vrai bulletin de paie.`,
  },
  'gap.notIncl': {
    en: `Left out: retirement savings (RRSP), union dues, provincial benefits and credits, and the Quebec, Alberta and Nunavut versions of the Workers Benefit. See "What's not included".`,
    nl: `Niet meegerekend: pensioensparen (RRSP), vakbondsbijdragen, provinciale uitkeringen en kredieten, en de versies van de Workers Benefit in Quebec, Alberta en Nunavut. Zie "Wat niet is meegerekend".`,
    fr: `Non comptés : l'épargne-retraite (REER), les cotisations syndicales, les prestations et crédits provinciaux, et les versions québécoise, albertaine et nunavoise de l'Allocation pour les travailleurs. Voir « Ce qui n'est pas inclus ».`,
  },
};
