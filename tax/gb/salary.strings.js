window.TAX_STRINGS = {
  title: { en: `British Buying Power`, nl: `Britse koopkracht`, fr: `Pouvoir d'achat au Royaume-Uni` },
  eyebrow: { en: `United Kingdom · tax year 2026/27 · employee`, nl: `Verenigd Koninkrijk · belastingjaar 2026/27 · werknemer`, fr: `Royaume-Uni · année fiscale 2026/27 · salarié` },
  eyebrowMinister: { en: `United Kingdom · tax year 2026/27 · minister`, nl: `Verenigd Koninkrijk · belastingjaar 2026/27 · minister`, fr: `Royaume-Uni · année fiscale 2026/27 · ministre` },
  lead: {
    en: `Every tax on a UK salary from 6 April 2026 to 5 April 2027, from what your employer pays to what you can buy. England, Wales, Northern Ireland and Scotland.`,
    nl: `Alle belastingen op een Brits loon van 6 april 2026 tot 5 april 2027, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Engeland, Wales, Noord-Ierland en Schotland.`,
    fr: `Tous les prélèvements sur un salaire britannique du 6 avril 2026 au 5 avril 2027, de ce que paie votre employeur à ce que vous pouvez acheter. Angleterre, pays de Galles, Irlande du Nord et Écosse.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Living together. Each partner pays their own income tax, but Universal Credit and the Child Benefit charge look at the couple's income. The Marriage Allowance option assumes you are married or civil partners.`,
    nl: `Samenwonend. Elke partner betaalt zijn eigen inkomstenbelasting, maar Universal Credit en de heffing op kinderbijslag kijken naar het inkomen van het koppel. De optie Marriage Allowance gaat uit van een huwelijk of geregistreerd partnerschap.`,
    fr: `En couple. Chacun paie son propre impôt, mais l'Universal Credit et la taxe sur les allocations familiales regardent le revenu du couple. L'option Marriage Allowance suppose un mariage ou un partenariat civil.`,
  },
  includePa: { en: `Count Universal Credit`, nl: `Universal Credit meetellen`, fr: `Compter l'Universal Credit` },
  region: { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'region.ruk': { en: `England, Wales, NI`, nl: `Engeland, Wales, N-Ierland`, fr: `Angleterre, Galles, Irl. du Nord` },
  'region.scot': { en: `Scotland`, nl: `Schotland`, fr: `Écosse` },
  vatStandard: { en: `(UK standard rate is 20%)`, nl: `(het Britse normale tarief is 20%)`, fr: `(le taux normal britannique est de 20%)` },
  'size.solo': { en: `Small, its NI discount covers you`, nl: `Klein, de NI-korting dekt jou`, fr: `Petite, sa remise NI vous couvre` },
  'size.small': { en: `NI discount already used`, nl: `NI-korting al opgebruikt`, fr: `Remise NI déjà épuisée` },
  'size.big': { en: `Large (training levy)`, nl: `Groot (opleidingsheffing)`, fr: `Grande (taxe formation)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.pus': { en: `Under-Secretary`, nl: `Onderstaatssecretaris`, fr: `Sous-secrétaire` },
  'minRole.mos': { en: `Minister of State`, nl: `Minister of State`, fr: `Ministre d'État` },
  'minRole.cabinet': { en: `Cabinet minister`, nl: `Kabinetsminister`, fr: `Ministre du Cabinet` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `MP salary + the minister's salary they actually take. Taxed like any salary, with National Insurance (social security). 11.09% goes to the MPs' pension before tax.`,
    nl: `Loon als parlementslid + het ministersloon dat ze echt opnemen. Belast zoals elk loon, met National Insurance (sociale zekerheid). 11,09% gaat voor de belasting naar het pensioen van parlementsleden.`,
    fr: `Salaire de député + salaire de ministre réellement pris. Imposé comme tout salaire, avec la National Insurance (sécurité sociale). 11,09% vont à la retraite des députés avant impôt.`,
  },
  minSalaryHint: {
    en: `Yearly MP salary + the minister's salary they take. By default, the amount set by law.`,
    nl: `Jaarloon als parlementslid + het ministersloon dat ze opnemen. Standaard het bedrag dat de wet vastlegt.`,
    fr: `Salaire annuel de député + salaire de ministre pris. Par défaut, le montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: `Ministers in the House of Commons are MPs first: £98,599 a year, paid by IPSA (the body that sets MPs' pay), plus a minister's salary. Since 2008 every Prime Minister has kept ministers on frozen amounts below what the law allows (Prime Minister £75,440 of £83,837, Cabinet £67,505 of £75,170, Minister of State £31,680 of £36,045, Under-Secretary £22,375 of £25,882). All of it is taxed like a salary: income tax through the payroll (PAYE) and normal National Insurance (Class 1). Their pension contributions to the Parliamentary Contributory Pension Fund are taken before tax. Not confirmed: the 11.09% members pay and the 12.9% the Treasury pays (last published figures).`,
    nl: `Ministers in het Lagerhuis zijn eerst parlementslid: £ 98.599 per jaar, betaald door IPSA (de instantie die het loon van parlementsleden vastlegt), plus een ministersloon. Sinds 2008 houdt elke premier de ministers op bevroren bedragen onder wat de wet toelaat (premier £ 75.440 van £ 83.837, kabinet £ 67.505 van £ 75.170, Minister of State £ 31.680 van £ 36.045, onderstaatssecretaris £ 22.375 van £ 25.882). Alles wordt belast als loon: inkomstenbelasting via de loonlijst (PAYE) en gewone National Insurance (Class 1). Hun pensioenbijdragen aan het Parliamentary Contributory Pension Fund gaan eraf voor de belasting. Niet bevestigd: de 11,09% die leden betalen en de 12,9% die de schatkist betaalt (laatst gepubliceerde cijfers).`,
    fr: `Les ministres de la Chambre des communes sont d'abord députés : 98 599 £ par an, versés par l'IPSA (l'organisme qui fixe le salaire des députés), plus un salaire de ministre. Depuis 2008, chaque Premier ministre garde les ministres sur des montants gelés, sous ce que permet la loi (Premier ministre 75 440 £ sur 83 837 £, Cabinet 67 505 £ sur 75 170 £, Minister of State 31 680 £ sur 36 045 £, sous-secrétaire 22 375 £ sur 25 882 £). Tout est imposé comme un salaire : impôt via la paie (PAYE) et National Insurance normale (classe 1). Leurs cotisations au Parliamentary Contributory Pension Fund sont retenues avant impôt. Non confirmé : les 11,09% payés par les membres et les 12,9% payés par le Trésor (derniers chiffres publiés).`,
  },
  'bd.minGross': { en: `Taxable pay (MP + ministerial salary)`, nl: `Belastbaar loon (parlementslid + minister)`, fr: `Rémunération (député + ministre)` },
  'bd.minEr': { en: `State NI and pension contributions`, nl: `NI- en pensioenbijdragen van de staat`, fr: `NI et retraite payées par l'État` },
  'bd.minEe': { en: `NI + pension contributions`, nl: `NI + pensioenbijdragen`, fr: `NI + cotisations retraite` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The MP salary set by IPSA, plus the minister's salary they actually take.`,
    nl: `Het loon als parlementslid, vastgelegd door IPSA, plus het ministersloon dat ze echt opnemen.`,
    fr: `Le salaire de député fixé par l'IPSA, plus le salaire de ministre réellement pris.`,
  },
  'tip.mpSalary': { en: `MP salary`, nl: `Loon als parlementslid`, fr: `Salaire de député` },
  'tip.minSalary': { en: `Ministerial salary claimed`, nl: `Opgenomen ministersloon`, fr: `Salaire ministériel perçu` },
  'tip.stateCost': {
    en: `Pay + what the State pays on top for National Insurance + the Treasury's payment into the pension fund. This is everything the post costs, and the tax rates on the page are compared to it.`,
    nl: `Loon + wat de staat bovenop aan National Insurance betaalt + de storting van de schatkist in het pensioenfonds. Dit is alles wat de functie kost, en de belastingtarieven op de pagina worden ermee vergeleken.`,
    fr: `Rémunération + ce que l'État paie en plus pour la National Insurance + le versement du Trésor au fonds de retraite. C'est tout ce que coûte la fonction, et les taux de la page sont comparés à ce montant.`,
  },
  'tip.minEr': {
    en: rate => `National Insurance the State pays as employer (15% of pay above £5,000) and the Treasury's payment into the MPs' pension fund, about ${rate} of pay.`,
    nl: rate => `National Insurance die de staat als werkgever betaalt (15% van het loon boven £ 5.000) en de storting van de schatkist in het pensioenfonds van parlementsleden, ongeveer ${rate} van het loon.`,
    fr: rate => `National Insurance payée par l'État comme employeur (15% du salaire au-delà de 5 000 £) et versement du Trésor au fonds de retraite des députés, environ ${rate} de la rémunération.`,
  },
  'tip.erNi': { en: `Employer National Insurance`, nl: `Werkgevers-National Insurance`, fr: `National Insurance employeur` },
  'tip.erPen': { en: `Treasury's pension payment`, nl: `Pensioenstorting van de schatkist`, fr: `Versement retraite du Trésor` },
  'tip.minEe': {
    en: rate => `${rate} of pay goes to the MPs' pension, taken before income tax, plus normal National Insurance (Class 1) on all pay.`,
    nl: rate => `${rate} van het loon gaat naar het pensioen van parlementsleden, afgehouden voor de inkomstenbelasting, plus gewone National Insurance (Class 1) op het hele loon.`,
    fr: rate => `${rate} de la rémunération vont à la retraite des députés, retenus avant l'impôt, plus la National Insurance normale (classe 1) sur tout le salaire.`,
  },
  'tip.eePen': { en: `Pension contributions (MPs' scheme)`, nl: `Pensioenbijdragen (stelsel parlementsleden)`, fr: `Cotisations retraite (régime des députés)` },
  'tip.eeNi': { en: `Employee National Insurance`, nl: `Werknemers-National Insurance`, fr: `National Insurance salariale` },
  'tip.minUc': { en: `Not paid at this level of income.`, nl: `Niet uitbetaald bij dit inkomen.`, fr: `Pas versé à ce niveau de revenu.` },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.cabinet': { en: `Cabinet minister`, nl: `Kabinetsminister`, fr: `Ministre du Cabinet` },
  'stat.mos': { en: `Minister of State`, nl: `Minister of State`, fr: `Ministre d'État` },
  'stat.pus': { en: `Under-Secretary of State`, nl: `Onderstaatssecretaris`, fr: `Sous-secrétaire d'État` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'pol.stat.pm': { en: `MP salary + minister's salary taken`, nl: `Loon parlementslid + opgenomen ministersloon`, fr: `Salaire de député + salaire de ministre pris` },
  'pol.stat.cabinet': { en: `MP salary + minister's salary taken`, nl: `Loon parlementslid + opgenomen ministersloon`, fr: `Salaire de député + salaire de ministre pris` },
  'pol.stat.mos': { en: `MP salary + minister's salary taken`, nl: `Loon parlementslid + opgenomen ministersloon`, fr: `Salaire de député + salaire de ministre pris` },
  'pol.stat.pus': { en: `MP salary + minister's salary taken`, nl: `Loon parlementslid + opgenomen ministersloon`, fr: `Salaire de député + salaire de ministre pris` },
  'pol.stat.mp': { en: `Salary set by IPSA, without the money for staff and offices`, nl: `Loon vastgelegd door IPSA, zonder het geld voor personeel en kantoor`, fr: `Salaire fixé par l'IPSA, sans l'argent pour le personnel et les bureaux` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-owned companies, gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon`, fr: `Dirigeants d'entreprises publiques, rémunération brute` },
  'pol.boe': { en: `Governor, Bank of England`, nl: `Gouverneur, Bank of England`, fr: `Gouverneur de la Banque d'Angleterre` },
  'pol.hs2': { en: `CEO, HS2 Ltd`, nl: `CEO, HS2 Ltd`, fr: `Directeur général de HS2 Ltd` },
  'pol.nr': { en: `CEO, Network Rail (until October 2025)`, nl: `CEO, Network Rail (tot oktober 2025)`, fr: `Directeur général de Network Rail (jusqu'en octobre 2025)` },
  'polNote.minister': {
    en: `MP salary + minister's salary taken, normal National Insurance, 11.09% to the pension before tax, taxed like a salary. Official homes are not counted. The head shows which employee salary would leave the same net pay, with your household; the dot shows what they really earn before tax.`,
    nl: `Loon parlementslid + opgenomen ministersloon, gewone National Insurance, 11,09% naar het pensioen voor de belasting, belast als loon. Ambtswoningen tellen niet mee. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren, met jouw gezin; het bolletje toont wat ze echt verdienen voor belastingen.`,
    fr: `Salaire de député + salaire de ministre pris, National Insurance normale, 11,09% pour la retraite avant impôt, imposé comme un salaire. Les logements de fonction ne sont pas comptés. La tête montre quel salaire d'un salarié donnerait le même net, avec votre foyer ; le point montre ce qu'ils gagnent vraiment avant impôts.`,
  },
  'polNote.mp': {
    en: `Normal National Insurance, 11.09% to the pension before tax, taxed like a salary. Office, staff and second-home costs are paid by IPSA and not counted. The head shows which employee salary would leave the same net pay.`,
    nl: `Gewone National Insurance, 11,09% naar het pensioen voor de belasting, belast als loon. Kantoor, personeel en tweede woning betaalt IPSA, die tellen niet mee. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren.`,
    fr: `National Insurance normale, 11,09% pour la retraite avant impôt, imposé comme un salaire. Bureau, collaborateurs et second logement sont payés par l'IPSA et ne sont pas comptés. La tête montre quel salaire d'un salarié donnerait le même net.`,
  },
  'polTipNote.boe': {
    en: `Base salary £495,000 in 2025/26 (he has turned down every raise since 2020). The top of the range adds £99,000 paid instead of a pension, and other perks: £598,325 in total.`,
    nl: `Basisloon £ 495.000 in 2025/26 (hij weigert elke opslag sinds 2020). De bovenkant van de vork telt £ 99.000 mee die hij krijgt in plaats van een pensioen, en andere extraatjes: samen £ 598.325.`,
    fr: `Salaire de base 495 000 £ en 2025/26 (il refuse toute hausse depuis 2020). Le haut de la fourchette ajoute 99 000 £ versés à la place d'une retraite, et d'autres avantages : 598 325 £ au total.`,
  },
  'polTipNote.hs2': {
    en: `Salary £600,000 in 2025/26. The top of the range adds £60,000 of pension and taxed perks: £660,081 in total. No bonus.`,
    nl: `Loon £ 600.000 in 2025/26. De bovenkant van de vork telt £ 60.000 pensioen en belaste extraatjes mee: samen £ 660.081. Geen bonus.`,
    fr: `Salaire 600 000 £ en 2025/26. Le haut de la fourchette ajoute 60 000 £ de retraite et des avantages imposés : 660 081 £ au total. Pas de bonus.`,
  },
  'polTipNote.nr': {
    en: `Salary £590,000 in 2024/25, £593,000 with perks. He turned down every bonus and raise. Jeremy Westlake took over in October 2025; his pay as boss isn't published yet.`,
    nl: `Loon £ 590.000 in 2024/25, £ 593.000 met extraatjes. Hij weigerde elke bonus en opslag. Jeremy Westlake nam in oktober 2025 over; zijn loon als topman is nog niet gepubliceerd.`,
    fr: `Salaire 590 000 £ en 2024/25, 593 000 £ avec les avantages. Il a refusé toute prime et hausse. Jeremy Westlake lui a succédé en octobre 2025 ; sa rémunération de patron n'est pas encore publiée.`,
  },
  polNote: {
    en: links => `Point at a name to see details, click it to zoom in. Yearly pay before tax, placed on the chart as yearly ÷ 12. Ministers and MPs are placed where an employee would take home the same net pay; the others are placed at their pay before tax. Ministers take less than the law allows, see ${links}.`,
    nl: links => `Wijs een naam aan voor details, klik om in te zoomen. Jaarloon voor belastingen, op de grafiek geplaatst als jaarbedrag ÷ 12. Ministers en parlementsleden staan waar een werknemer hetzelfde netto zou overhouden; de anderen staan op hun loon voor belastingen. Ministers nemen minder op dan de wet toelaat, zie ${links}.`,
    fr: links => `Pointez un nom pour voir les détails, cliquez pour zoomer. Rémunération annuelle brute, placée sur le graphique en montant annuel ÷ 12. Les ministres et les députés sont placés là où un salarié toucherait le même net ; les autres à leur brut. Les ministres prennent moins que ce que permet la loi, voir ${links}.`,
  },
  'src.pol.pm': { en: `Ministerial salaries, September 2026`, nl: `Ministerslonen, september 2026`, fr: `Salaires ministériels, septembre 2026` },
  'src.pol.cabinet': { en: `Ministerial salaries, September 2026`, nl: `Ministerslonen, september 2026`, fr: `Salaires ministériels, septembre 2026` },
  'src.pol.mos': { en: `Ministerial salaries, September 2026`, nl: `Ministerslonen, september 2026`, fr: `Salaires ministériels, septembre 2026` },
  'src.pol.pus': { en: `Ministerial salaries, September 2026`, nl: `Ministerslonen, september 2026`, fr: `Salaires ministériels, septembre 2026` },
  'src.pol.mp': { en: `IPSA: MPs' pay 2026-27`, nl: `IPSA: loon parlementsleden 2026-27`, fr: `IPSA : salaire des députés 2026-27` },
  'src.pol.boe': { en: `Bank of England: annual report 2026`, nl: `Bank of England: jaarverslag 2026`, fr: `Banque d'Angleterre : rapport annuel 2026` },
  'src.pol.hs2': { en: `HS2 Ltd: annual report 2025-26`, nl: `HS2 Ltd: jaarverslag 2025-26`, fr: `HS2 Ltd : rapport annuel 2025-26` },
  'src.pol.nr': { en: `Network Rail: remuneration report 2025`, nl: `Network Rail: remuneratieverslag 2025`, fr: `Network Rail : rapport sur les rémunérations 2025` },
  bracketTop: { en: `tax-free amount lost`, nl: `belastingvrije som verloren`, fr: `perte de la part sans impôt` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why so high between ${a} and ${b}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom zo hoog tussen ${a} en ${b}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi si élevé entre ${a} et ${b} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, scp) => b
      ? `Universal Credit adds money to low pay. For each extra pound you take home, you lose 55p of it. Above £12,570 you also pay 20% income tax and 8% National Insurance, so each extra pound you earn leaves you about 32p: like a tax of nearly 68%. It ends at ${b}.${scp ? ` In Scotland, the Scottish Child Payment (${scp} a year for your children) stops all at once when Universal Credit reaches zero.` : ''}`
      : `Without Universal Credit (switched off, or nothing for your household from the minimum wage of ${a}), on low pay only your employer pays National Insurance until £12,570. Above that, you pay 8% National Insurance and 20% income tax.`,
    nl: (a, b, scp) => b
      ? `Universal Credit vult lage lonen aan. Per extra pond dat je netto overhoudt, verlies je er 55 pence van. Boven £ 12.570 betaal je ook 20% inkomstenbelasting en 8% National Insurance, dus van elk extra pond dat je verdient hou je ongeveer 32 pence over: alsof je bijna 68% belasting betaalt. Het stopt bij ${b}.${scp ? ` In Schotland valt de Scottish Child Payment (${scp} per jaar voor je kinderen) in één keer weg wanneer Universal Credit nul wordt.` : ''}`
      : `Zonder Universal Credit (uitgeschakeld, of niets voor jouw gezin vanaf het minimumloon van ${a}) betaalt bij een laag loon alleen je werkgever National Insurance tot £ 12.570. Daarboven betaal jij 8% National Insurance en 20% inkomstenbelasting.`,
    fr: (a, b, scp) => b
      ? `L'Universal Credit complète les bas salaires. Pour chaque livre nette en plus, vous en perdez 55 pence. Au-delà de 12 570 £, vous payez aussi 20% d'impôt et 8% de National Insurance : chaque livre gagnée en plus ne vous laisse qu'environ 32 pence, comme un impôt de près de 68%. Cela s'arrête à ${b}.${scp ? ` En Écosse, le Scottish Child Payment (${scp} par an pour vos enfants) disparaît d'un coup quand l'Universal Credit tombe à zéro.` : ''}`
      : `Sans Universal Credit (désactivé, ou rien pour votre foyer dès le salaire minimum de ${a}), sur un bas salaire seul votre employeur paie la National Insurance jusqu'à 12 570 £. Au-delà, vous payez 8% de National Insurance et 20% d'impôt.`,
  },
  topTitle: {
    en: (top, end) => `Why the jump between ${top} and ${end}?`,
    nl: (top, end) => `Waarom de sprong tussen ${top} en ${end}?`,
    fr: (top, end) => `Pourquoi la hausse entre ${top} et ${end} ?`,
  },
  topBody: {
    en: (top, end, rate, cbFrom, cbTo) => `Above £100,000 you lose £1 of your tax-free amount for every £2 you earn. So each extra pound is taxed once, and half a pound that used to be tax-free is now taxed too: ${rate} with National Insurance, until the tax-free amount is gone at £125,140. Above that, the rate drops back.${cbFrom ? ` Earlier, between ${cbFrom} and ${cbTo}, the Child Benefit charge takes back your household's Child Benefit.` : ''}`,
    nl: (top, end, rate, cbFrom, cbTo) => `Boven £ 100.000 verlies je £ 1 van je belastingvrije som per £ 2 die je verdient. Elk extra pond wordt dus belast, en een half pond dat eerst belastingvrij was ook: ${rate} met National Insurance, tot de belastingvrije som op is bij £ 125.140. Daarboven daalt het tarief weer.${cbFrom ? ` Eerder, tussen ${cbFrom} en ${cbTo}, neemt de heffing op kinderbijslag de kinderbijslag van je gezin terug.` : ''}`,
    fr: (top, end, rate, cbFrom, cbTo) => `Au-delà de 100 000 £, vous perdez 1 £ de votre part sans impôt pour chaque 2 £ gagnées. Chaque livre en plus est donc taxée, et une demi-livre qui était sans impôt l'est aussi : ${rate} avec la National Insurance, jusqu'à ce que la part sans impôt disparaisse à 125 140 £. Au-delà, le taux redescend.${cbFrom ? ` Plus bas, entre ${cbFrom} et ${cbTo}, la taxe sur les allocations familiales reprend celles de votre foyer.` : ''}`,
  },

  // Tax components
  'comp.er': { en: `Employer National Insurance`, nl: `Werkgevers-National Insurance`, fr: `National Insurance employeur` },
  'comp.ee': { en: `Employee National Insurance`, nl: `Werknemers-National Insurance`, fr: `National Insurance salariale` },
  'comp.ir': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'comp.cb': { en: `Child Benefit charge`, nl: `Heffing op kinderbijslag`, fr: `Taxe sur les allocations familiales` },
  'comp.uc': { en: `Universal Credit`, nl: `Universal Credit`, fr: `Universal Credit` },
  ucReceived: { en: `+ Universal Credit, paid by DWP`, nl: `+ Universal Credit, betaald door DWP`, fr: `+ Universal Credit, versé par le DWP` },
  ucLost: { en: `Universal Credit your pay costs the household`, nl: `Universal Credit die je loon het gezin kost`, fr: `Universal Credit que votre salaire fait perdre au foyer` },
  'bd.ea': { en: `Employer's NI discount (Employment Allowance)`, nl: `NI-korting voor de werkgever (Employment Allowance)`, fr: `Remise NI de l'employeur (Employment Allowance)` },
  'bd.levy': { en: `Training levy (Apprenticeship Levy)`, nl: `Opleidingsheffing (Apprenticeship Levy)`, fr: `Taxe formation (Apprenticeship Levy)` },
  'bd.persAllow': { en: `Tax-free amount (personal allowance)`, nl: `Belastingvrije som (personal allowance)`, fr: `Part sans impôt (personal allowance)` },
  'bd.taxableGb': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the normal case in the UK. Bonuses are taxed like any other pay.`,
    nl: `12 maandlonen, het gewone geval in het Verenigd Koninkrijk. Bonussen worden belast zoals elk ander loon.`,
    fr: `12 salaires mensuels, le cas normal au Royaume-Uni. Les primes sont imposées comme tout autre salaire.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `In the UK each person is taxed on their own. A married couple can move £1,260 of tax-free amount from a partner who pays no income tax to one who pays the basic 20% (up to £252 less tax). Universal Credit and the Child Benefit charge look at the household. Here, your tax = the household's taxes − what it would pay if you earned nothing.`,
    nl: `In het Verenigd Koninkrijk wordt elke persoon apart belast. Een gehuwd koppel kan £ 1.260 belastingvrije som verschuiven van een partner die geen inkomstenbelasting betaalt naar een partner die het basistarief van 20% betaalt (tot £ 252 minder belasting). Universal Credit en de heffing op kinderbijslag kijken naar het gezin. Hier is jouw belasting = de belastingen van het gezin − wat het zou betalen als jij niets verdiende.`,
    fr: `Au Royaume-Uni, chacun est imposé séparément. Un couple marié peut transférer 1 260 £ de part sans impôt d'un conjoint qui ne paie pas d'impôt vers un conjoint au taux de base de 20% (jusqu'à 252 £ d'impôt en moins). L'Universal Credit et la taxe sur les allocations familiales regardent le foyer. Ici, votre impôt = les impôts du foyer − ce qu'il paierait si vous ne gagniez rien.`,
  },
  'tip.paToggle': {
    en: `A monthly payment for households with low income, working or not. It isn't a tax, but it works like a tax in reverse: you lose 55p of it for each extra pound you take home. Calculated for adults aged 25+, no housing costs, no savings, children born after April 2017.`,
    nl: `Een maandelijkse uitkering voor gezinnen met een laag inkomen, met of zonder werk. Het is geen belasting, maar het werkt als een omgekeerde belasting: je verliest er 55 pence van per extra pond dat je netto overhoudt. Berekend voor volwassenen vanaf 25, zonder woonkosten, zonder spaargeld, kinderen geboren na april 2017.`,
    fr: `Une aide mensuelle pour les foyers à faible revenu, avec ou sans emploi. Ce n'est pas un impôt, mais ça agit comme un impôt à l'envers : vous en perdez 55 pence pour chaque livre nette en plus. Calculé pour des adultes de 25 ans ou plus, sans frais de logement ni épargne, enfants nés après avril 2017.`,
  },
  'tip.reg': {
    en: `Scotland sets its own income tax rates on pay: six rates from 19% to 48%. England, Wales and Northern Ireland use 20%, 40% and 45%. National Insurance is the same everywhere.`,
    nl: `Schotland bepaalt zelf de tarieven van de inkomstenbelasting op lonen: zes tarieven van 19% tot 48%. Engeland, Wales en Noord-Ierland gebruiken 20%, 40% en 45%. National Insurance is overal gelijk.`,
    fr: `L'Écosse fixe ses propres taux d'impôt sur les salaires : six taux de 19% à 48%. L'Angleterre, le pays de Galles et l'Irlande du Nord appliquent 20%, 40% et 45%. La National Insurance est la même partout.`,
  },
  'tip.size': {
    en: ea => `Small: your employer gets up to ${ea} a year off its National Insurance (Employment Allowance), enough to cover what it owes on your pay. Medium: that discount is already used for other staff, or not available. Large: total pay over £3 million, so it also pays a 0.5% training levy (Apprenticeship Levy).`,
    nl: ea => `Klein: je werkgever krijgt tot ${ea} per jaar korting op zijn National Insurance (Employment Allowance), genoeg om te dekken wat hij op jouw loon verschuldigd is. Middelgroot: die korting is al opgebruikt voor ander personeel, of niet beschikbaar. Groot: totale loonsom boven £ 3 miljoen, dus hij betaalt ook een opleidingsheffing van 0,5% (Apprenticeship Levy).`,
    fr: ea => `Petite : votre employeur a jusqu'à ${ea} par an de remise sur sa National Insurance (Employment Allowance), assez pour couvrir ce qu'il doit sur votre salaire. Moyenne : cette remise est déjà utilisée pour d'autres salariés, ou pas accessible. Grande : masse salariale au-delà de 3 millions £, il paie donc aussi une taxe formation de 0,5% (Apprenticeship Levy).`,
  },
  'tip.costShort': { en: `Gross salary + what your employer pays for National Insurance on top (+ the training levy).`, nl: `Brutoloon + wat je werkgever bovenop aan National Insurance betaalt (+ de opleidingsheffing).`, fr: `Salaire brut + ce que votre employeur paie en plus pour la National Insurance (+ la taxe formation).` },
  'tip.er': {
    en: `Your employer pays this on top of your gross salary: 15% of everything above £5,000 a year, with no upper limit.`,
    nl: `Je werkgever betaalt dit bovenop je brutoloon: 15% op alles boven £ 5.000 per jaar, zonder bovengrens.`,
    fr: `Votre employeur paie ceci en plus de votre salaire brut : 15% de tout ce qui dépasse 5 000 £ par an, sans limite haute.`,
  },
  'tip.ea': {
    en: ea => `Most employers can take up to ${ea} a year off their National Insurance bill. In a small firm it may cover all of it on your pay; in a bigger one other staff have already used it.`,
    nl: ea => `De meeste werkgevers mogen tot ${ea} per jaar van hun National Insurance aftrekken. In een kleine firma dekt dat misschien alles op jouw loon; in een grotere hebben andere werknemers het al opgebruikt.`,
    fr: ea => `La plupart des employeurs peuvent retirer jusqu'à ${ea} par an de leur National Insurance. Dans une petite entreprise, cela peut couvrir tout ce qui est dû sur votre salaire ; dans une plus grande, d'autres salariés l'ont déjà utilisé.`,
  },
  'tip.levy': {
    en: `Employers whose total pay is over £3 million pay 0.5% of it, after the first £15,000. It pays for apprenticeship training.`,
    nl: `Werkgevers met een totale loonsom boven £ 3 miljoen betalen daar 0,5% van, na de eerste £ 15.000. Het betaalt opleidingen voor leerlingen.`,
    fr: `Les employeurs dont la masse salariale dépasse 3 millions £ en paient 0,5%, après les premiers 15 000 £. Cela finance l'apprentissage.`,
  },
  'tip.ee': {
    en: `Taken from your pay: 8% of what you earn between £12,570 and £50,270 a year, 2% above. It builds your right to the State Pension.`,
    nl: `Afgehouden van je loon: 8% van wat je verdient tussen £ 12.570 en £ 50.270 per jaar, 2% daarboven. Het bouwt je recht op het staatspensioen op.`,
    fr: `Retirée de votre paie : 8% de ce que vous gagnez entre 12 570 £ et 50 270 £ par an, 2% au-delà. Elle ouvre vos droits à la pension d'État.`,
  },
  'tip.persAllow': {
    en: calc => `The first £12,570 is not taxed. From £100,000, this shrinks by £1 for every £2 you earn and is gone at £125,140. Yours:${calc}`,
    nl: calc => `De eerste £ 12.570 wordt niet belast. Vanaf £ 100.000 krimpt dat met £ 1 per £ 2 die je verdient, en is het weg bij £ 125.140. Die van jou:${calc}`,
    fr: calc => `Les premières 12 570 £ ne sont pas imposées. À partir de 100 000 £, cela baisse de 1 £ pour chaque 2 £ gagnées et disparaît à 125 140 £. La vôtre :${calc}`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − tax-free amount${calc}. National Insurance is not taken off first.`,
    nl: calc => `Brutoloon − belastingvrije som${calc}. National Insurance wordt er niet eerst afgetrokken.`,
    fr: calc => `Salaire brut − part sans impôt${calc}. La National Insurance n'est pas retirée avant.`,
  },
  'tip.irShort': {
    en: `Income tax works in bands: the higher part of your income is taxed at a higher rate. The bands depend on your part of the UK. Then the Marriage Allowance comes off, if you use it.`,
    nl: `De inkomstenbelasting werkt met schijven: het hogere deel van je inkomen wordt zwaarder belast. De schijven hangen af van je deel van het land. Daarna gaat de Marriage Allowance eraf, als je die gebruikt.`,
    fr: `L'impôt fonctionne par tranches : la partie haute de vos revenus est taxée à un taux plus élevé. Les tranches dépendent de votre partie du pays. Ensuite, la Marriage Allowance est retirée, si vous l'utilisez.`,
  },
  'tip.irM': {
    en: r => `Bands for 2026/27, ${r}. The UK tax-free amount and bands are frozen until April 2031.`,
    nl: r => `Schijven voor 2026/27, ${r}. De Britse belastingvrije som en schijven zijn bevroren tot april 2031.`,
    fr: r => `Tranches 2026/27, ${r}. La part sans impôt et les tranches britanniques sont gelées jusqu'en avril 2031.`,
  },
  'tip.irIncome': { en: `Income`, nl: `Inkomen`, fr: `Revenu` },
  'tip.maRelief': { en: `Marriage Allowance`, nl: `Marriage Allowance`, fr: `Marriage Allowance` },
  'tip.irPerson': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt` },
  'tip.irYou': { en: `You`, nl: `Jij`, fr: `Vous` },
  'tip.irPartner': { en: `Your partner`, nl: `Je partner`, fr: `Votre conjoint` },
  'tip.irHousehold': { en: `Household tax`, nl: `Belasting van het gezin`, fr: `Impôt du foyer` },
  'tip.irWithout': { en: `Household tax if you earned nothing`, nl: `Belasting als jij niets verdiende`, fr: `Impôt du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.maUsed': {
    en: d => d === 'in' ? `Your partner gives you £1,260 of their tax-free amount (Marriage Allowance).` : `You give your partner £1,260 of your tax-free amount (Marriage Allowance).`,
    nl: d => d === 'in' ? `Je partner geeft jou £ 1.260 van zijn belastingvrije som (Marriage Allowance).` : `Jij geeft je partner £ 1.260 van je belastingvrije som (Marriage Allowance).`,
    fr: d => d === 'in' ? `Votre conjoint vous transfère 1 260 £ de sa part sans impôt (Marriage Allowance).` : `Vous transférez 1 260 £ de votre part sans impôt à votre conjoint (Marriage Allowance).`,
  },
  'tip.cb': {
    en: `Child Benefit is paid whatever you earn: £27.05 a week for the first child, £17.90 for each other one. But if the higher earner in the household earns over £60,000, they pay back 1% of it for every £200 above that, and all of it from £80,000.`,
    nl: `Kinderbijslag wordt betaald wat je ook verdient: £ 27,05 per week voor het eerste kind, £ 17,90 voor elk ander. Maar verdient de grootste verdiener in het gezin meer dan £ 60.000, dan betaalt die 1% ervan terug per £ 200 erboven, en alles vanaf £ 80.000.`,
    fr: `Les allocations familiales sont versées quel que soit le revenu : 27,05 £ par semaine pour le premier enfant, 17,90 £ pour chacun des autres. Mais si le plus gros revenu du foyer dépasse 60 000 £, il en rembourse 1% par tranche de 200 £ au-delà, et tout à partir de 80 000 £.`,
  },
  'tip.cbYear': { en: n => `Child Benefit for ${n} child${n > 1 ? 'ren' : ''}, per year`, nl: n => `Kinderbijslag voor ${n} kind${n > 1 ? 'eren' : ''}, per jaar`, fr: n => `Allocations pour ${n} enfant${n > 1 ? 's' : ''}, par an` },
  'tip.cbWith': { en: `Charge for the household`, nl: `Heffing voor het gezin`, fr: `Taxe du foyer` },
  'tip.cbWithout': { en: `Charge if you earned nothing`, nl: `Heffing als jij niets verdiende`, fr: `Taxe sans vos revenus` },
  'tip.uc': {
    en: `Paid each month to households with low income: a basic amount + an amount per child, minus 55% of your take-home pay above a first slice you can keep (£710 a month with children and no help with rent, nothing without children).`,
    nl: `Elke maand betaald aan gezinnen met een laag inkomen: een basisbedrag + een bedrag per kind, min 55% van je nettoloon boven een eerste stuk dat je mag houden (£ 710 per maand met kinderen en zonder huursteun, niets zonder kinderen).`,
    fr: `Versé chaque mois aux foyers à faible revenu : un montant de base + un montant par enfant, moins 55% de votre salaire net au-delà d'une première part que vous gardez (710 £ par mois avec enfants et sans aide au loyer, rien sans enfant).`,
  },
  'tip.ucMax': { en: `Maximum award per month`, nl: `Maximumbedrag per maand`, fr: `Montant maximal par mois` },
  'tip.ucMonth': { en: `Universal Credit per month`, nl: `Universal Credit per maand`, fr: `Universal Credit par mois` },
  'tip.scp': { en: `Scottish Child Payment`, nl: `Scottish Child Payment`, fr: `Scottish Child Payment` },
  'tip.ucWithout': { en: `Award if you earned nothing`, nl: `Bedrag als jij niets verdiende`, fr: `Montant sans vos revenus` },
  'tip.ucYear': { en: `Your share, per year`, nl: `Jouw deel, per jaar`, fr: `Votre part, par an` },
  'tip.ucM': {
    en: `Amounts from April 2026: £424.90 single, £666.97 couple, £303.94 per child (the limit of two children is gone). In Scotland, a household on Universal Credit also gets £28.20 a week per child under 16. Housing costs, savings and the maximum total of benefits are left out.`,
    nl: `Bedragen vanaf april 2026: £ 424,90 alleenstaande, £ 666,97 koppel, £ 303,94 per kind (de grens van twee kinderen is weg). In Schotland krijgt een gezin met Universal Credit ook £ 28,20 per week per kind onder 16. Woonkosten, spaargeld en het maximum aan uitkeringen zijn niet meegerekend.`,
    fr: `Montants depuis avril 2026 : 424,90 £ seul, 666,97 £ en couple, 303,94 £ par enfant (la limite à deux enfants a disparu). En Écosse, un foyer à l'Universal Credit reçoit aussi 28,20 £ par semaine et par enfant de moins de 16 ans. Logement, épargne et plafond total des aides ne sont pas pris en compte.`,
  },
  'tip.vatM': {
    en: `Food, children's clothes and books have no VAT, energy has 5%, and rent has none. We ignore that here, so the real VAT you pay is probably lower.`,
    nl: `Op voeding, kinderkleding en boeken zit geen btw, op energie 5%, en op huur niets. Dat negeren we hier, dus de echte btw die je betaalt ligt waarschijnlijk lager.`,
    fr: `L'alimentation, les vêtements pour enfants et les livres n'ont pas de TVA, l'énergie 5%, et le loyer aucune. Nous l'ignorons ici, la TVA que vous payez vraiment est donc sans doute plus basse.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross − National Insurance − income tax − Child Benefit charge, + Universal Credit if you count it.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − National Insurance − inkomstenbelasting − heffing op kinderbijslag, + Universal Credit als je die meetelt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − National Insurance − impôt − taxe sur les allocations familiales, + Universal Credit si vous le comptez.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · tax year 2026/27 (6 April 2026 to 5 April 2027)`,
    nl: `Gebruikte regels · belastingjaar 2026/27 (6 april 2026 tot 5 april 2027)`,
    fr: `Règles utilisées · année fiscale 2026/27 (6 avril 2026 au 5 avril 2027)`,
  },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `National Insurance (social security) <span class="num">15%</span> of pay above <span class="num">£5,000</span> a year, no upper limit.`,
      `Discount (Employment Allowance) up to <span class="num">£10,500</span> a year per employer. Training levy (Apprenticeship Levy) <span class="num">0.5%</span> of total pay above £3 million.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `National Insurance (sociale zekerheid) <span class="num">15%</span> van het loon boven <span class="num">£ 5.000</span> per jaar, zonder bovengrens.`,
      `Korting (Employment Allowance) tot <span class="num">£ 10.500</span> per jaar per werkgever. Opleidingsheffing (Apprenticeship Levy) <span class="num">0,5%</span> van de totale loonsom boven £ 3 miljoen.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `National Insurance (sécurité sociale) <span class="num">15%</span> du salaire au-delà de <span class="num">5 000 £</span> par an, sans limite haute.`,
      `Remise (Employment Allowance) jusqu'à <span class="num">10 500 £</span> par an et par employeur. Taxe formation (Apprenticeship Levy) <span class="num">0,5%</span> de la masse salariale au-delà de 3 millions £.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee National Insurance`, li: [
      `<span class="num">8%</span> of what you earn from £12,570 to £50,270 a year, <span class="num">2%</span> above. It is worked out for each pay period; we assume the same salary every month.`,
    ] },
    nl: { h: `2 · Werknemers-National Insurance`, li: [
      `<span class="num">8%</span> van wat je verdient van £ 12.570 tot £ 50.270 per jaar, <span class="num">2%</span> daarboven. Het wordt per loonperiode berekend; we gaan uit van elke maand hetzelfde loon.`,
    ] },
    fr: { h: `2 · National Insurance salariale`, li: [
      `<span class="num">8%</span> de ce que vous gagnez de 12 570 £ à 50 270 £ par an, <span class="num">2%</span> au-delà. Elle est calculée à chaque paie ; nous supposons le même salaire chaque mois.`,
    ] },
  },
  'ref.ir': {
    en: br => ({ h: `3 · Income tax (England, Wales, Northern Ireland)`, li: [
      `Bands on gross pay with the full £12,570 tax-free. The higher part of your income is taxed at a higher rate:${br}`,
      `The tax-free amount drops by £1 for every £2 above £100,000 and is gone at £125,140. In between, each extra pound is taxed at 60%.`,
      `Marriage Allowance: £1,260 of tax-free amount moved to a husband or wife paying 20%, worth up to £252.`,
    ] }),
    nl: br => ({ h: `3 · Inkomstenbelasting (Engeland, Wales, Noord-Ierland)`, li: [
      `Schijven op het brutoloon met de volle £ 12.570 belastingvrij. Het hogere deel van je inkomen wordt zwaarder belast:${br}`,
      `De belastingvrije som daalt met £ 1 per £ 2 boven £ 100.000 en is weg bij £ 125.140. Daartussen wordt elk extra pond belast aan 60%.`,
      `Marriage Allowance: £ 1.260 belastingvrije som naar een echtgenoot die 20% betaalt, tot £ 252 waard.`,
    ] }),
    fr: br => ({ h: `3 · Impôt sur le revenu (Angleterre, pays de Galles, Irlande du Nord)`, li: [
      `Tranches sur le salaire brut avec les 12 570 £ complets sans impôt. La partie haute du revenu est taxée à un taux plus élevé :${br}`,
      `La part sans impôt baisse de 1 £ pour chaque 2 £ au-delà de 100 000 £ et disparaît à 125 140 £. Entre les deux, chaque livre en plus est taxée à 60%.`,
      `Marriage Allowance : 1 260 £ de part sans impôt transférés à un conjoint qui paie 20%, jusqu'à 252 £ d'impôt en moins.`,
    ] }),
  },
  'ref.scot': {
    en: { h: `4 · Scottish income tax`, li: [
      `Starter <span class="num">19%</span> up to £16,537, basic <span class="num">20%</span> to £29,526, intermediate <span class="num">21%</span> to £43,662, higher <span class="num">42%</span> to £75,000, advanced <span class="num">45%</span> to £125,140, top <span class="num">48%</span> above.`,
      `The same tax-free amount, lost the same way, so pay from £100,000 to £125,140 is taxed at 67.5%.`,
    ] },
    nl: { h: `4 · Schotse inkomstenbelasting`, li: [
      `Starter <span class="num">19%</span> tot £ 16.537, basis <span class="num">20%</span> tot £ 29.526, intermediate <span class="num">21%</span> tot £ 43.662, hoger <span class="num">42%</span> tot £ 75.000, advanced <span class="num">45%</span> tot £ 125.140, top <span class="num">48%</span> daarboven.`,
      `Dezelfde belastingvrije som, die op dezelfde manier wegvalt, dus loon van £ 100.000 tot £ 125.140 wordt belast aan 67,5%.`,
    ] },
    fr: { h: `4 · Impôt écossais`, li: [
      `Starter <span class="num">19%</span> jusqu'à 16 537 £, basic <span class="num">20%</span> jusqu'à 29 526 £, intermediate <span class="num">21%</span> jusqu'à 43 662 £, higher <span class="num">42%</span> jusqu'à 75 000 £, advanced <span class="num">45%</span> jusqu'à 125 140 £, top <span class="num">48%</span> au-delà.`,
      `Même part sans impôt, perdue de la même façon : le salaire de 100 000 £ à 125 140 £ est taxé à 67,5%.`,
    ] },
  },
  'ref.cb': {
    en: { h: `5 · Child Benefit charge`, li: [
      `Child Benefit <span class="num">£27.05</span> a week for the eldest child, <span class="num">£17.90</span> for each other child.`,
      `The higher earner pays back 1% for every £200 of income above <span class="num">£60,000</span>, and all of it from <span class="num">£80,000</span>. Married or not.`,
    ] },
    nl: { h: `5 · Heffing op kinderbijslag`, li: [
      `Kinderbijslag <span class="num">£ 27,05</span> per week voor het oudste kind, <span class="num">£ 17,90</span> voor elk ander kind.`,
      `De grootste verdiener betaalt 1% terug per £ 200 inkomen boven <span class="num">£ 60.000</span>, en alles vanaf <span class="num">£ 80.000</span>. Gehuwd of niet.`,
    ] },
    fr: { h: `5 · Taxe sur les allocations familiales`, li: [
      `Allocations <span class="num">27,05 £</span> par semaine pour l'aîné, <span class="num">17,90 £</span> pour chaque autre enfant.`,
      `Le plus gros revenu en rembourse 1% par tranche de 200 £ au-delà de <span class="num">60 000 £</span>, et tout à partir de <span class="num">80 000 £</span>. Mariés ou non.`,
    ] },
  },
  'ref.uc': {
    en: { h: `6 · Universal Credit`, li: [
      `Basic amount <span class="num">£424.90</span> a month (single, 25+) or <span class="num">£666.97</span> (couple), + <span class="num">£303.94</span> per child.`,
      `Minus <span class="num">55%</span> of the household's take-home pay above a first slice you keep: <span class="num">£710</span> a month with children and no help with rent, nothing without children.`,
      `Scotland: + Scottish Child Payment <span class="num">£28.20</span> a week per child under 16, as long as Universal Credit is paid.`,
    ] },
    nl: { h: `6 · Universal Credit`, li: [
      `Basisbedrag <span class="num">£ 424,90</span> per maand (alleenstaand, 25+) of <span class="num">£ 666,97</span> (koppel), + <span class="num">£ 303,94</span> per kind.`,
      `Min <span class="num">55%</span> van het nettoloon van het gezin boven een eerste stuk dat je houdt: <span class="num">£ 710</span> per maand met kinderen en zonder huursteun, niets zonder kinderen.`,
      `Schotland: + Scottish Child Payment <span class="num">£ 28,20</span> per week per kind onder 16, zolang er Universal Credit betaald wordt.`,
    ] },
    fr: { h: `6 · Universal Credit`, li: [
      `Montant de base <span class="num">424,90 £</span> par mois (seul, 25 ans et plus) ou <span class="num">666,97 £</span> (couple), + <span class="num">303,94 £</span> par enfant.`,
      `Moins <span class="num">55%</span> du salaire net du foyer au-delà d'une première part gardée : <span class="num">710 £</span> par mois avec enfants et sans aide au loyer, rien sans enfant.`,
      `Écosse : + Scottish Child Payment de <span class="num">28,20 £</span> par semaine et par enfant de moins de 16 ans, tant que l'Universal Credit est versé.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `VAT is the tax included in shop prices. Normal rate <span class="num">20%</span>. We act as if you spend all your net pay. Use the slider to try other rates.`,
      `The VAT hidden in a price = price × r / (100 + r). At 20% that's 20 / 120 = <span class="num">16.67%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Btw is de belasting die in winkelprijzen zit. Normaal tarief <span class="num">20%</span>. We doen alsof je je hele nettoloon uitgeeft. Gebruik de schuifregelaar om andere tarieven te proberen.`,
      `De btw die in een prijs zit = prijs × r / (100 + r). Bij 20% is dat 20 / 120 = <span class="num">16,67%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `La TVA est l'impôt compris dans les prix en magasin. Taux normal <span class="num">20%</span>. Nous faisons comme si vous dépensiez tout votre salaire net. Utilisez le curseur pour essayer d'autres taux.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 20%, cela fait 20 / 120 = <span class="num">16,67%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government and Parliament`, li: [
      `MP salary <span class="num">£98,599</span> from April 2026. Minister's salary taken on top: Prime Minister <span class="num">£75,440</span>, Cabinet <span class="num">£67,505</span>, Minister of State <span class="num">£31,680</span>, Under-Secretary <span class="num">£22,375</span>.`,
      `Taxed like a salary with normal National Insurance; 11.09% goes to the pension before tax.`,
    ] },
    nl: { h: `8 · Regering en parlement`, li: [
      `Loon parlementslid <span class="num">£ 98.599</span> vanaf april 2026. Opgenomen ministersloon erbovenop: premier <span class="num">£ 75.440</span>, kabinet <span class="num">£ 67.505</span>, Minister of State <span class="num">£ 31.680</span>, onderstaatssecretaris <span class="num">£ 22.375</span>.`,
      `Belast als loon met gewone National Insurance; 11,09% gaat voor de belasting naar het pensioen.`,
    ] },
    fr: { h: `8 · Gouvernement et Parlement`, li: [
      `Salaire de député <span class="num">98 599 £</span> depuis avril 2026. Salaire de ministre pris en plus : Premier ministre <span class="num">75 440 £</span>, Cabinet <span class="num">67 505 £</span>, Minister of State <span class="num">31 680 £</span>, sous-secrétaire <span class="num">22 375 £</span>.`,
      `Imposé comme un salaire avec la National Insurance normale ; 11,09% vont à la retraite avant impôt.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Work pension payments (automatic pension savings are savings, not tax), giving up salary for perks (salary sacrifice), student loan repayments, perks from your employer, and tax codes other than the usual 1257L.`,
      `Universal Credit help with rent, savings and the maximum total of benefits; Council Tax (a local tax on homes). The figures are the year's final tax, with the same pay every month.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Stortingen voor een bedrijfspensioen (automatisch pensioensparen is sparen, geen belasting), loon inruilen voor extraatjes (salary sacrifice), terugbetaling van studieleningen, extraatjes van je werkgever, en andere belastingcodes dan de gewone 1257L.`,
      `Huursteun via Universal Credit, spaargeld en het maximum aan uitkeringen; Council Tax (een lokale belasting op woningen). De bedragen zijn de belasting voor het hele jaar, met elke maand hetzelfde loon.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Versements de retraite d'entreprise (l'épargne retraite automatique est une épargne, pas un impôt), renoncer à du salaire contre des avantages (salary sacrifice), remboursements de prêt étudiant, avantages de l'employeur, et codes fiscaux autres que le 1257L habituel.`,
      `Aide au loyer de l'Universal Credit, épargne et plafond total des aides ; Council Tax (impôt local sur le logement). Les montants sont l'impôt de l'année, avec le même salaire chaque mois.`,
    ] },
  },

  inheritLink: {
    en: `What an estate pays when it's passed on, by who inherits →`,
    nl: `Wat een nalatenschap betaalt bij overdracht, volgens wie erft →`,
    fr: `Ce que paie une succession, selon qui hérite →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and HMRC decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en HMRC zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et le HMRC font foi.`,
  },

  'src.rates': { en: `GOV.UK: income tax rates`, nl: `GOV.UK: tarieven inkomstenbelasting`, fr: `GOV.UK : taux de l'impôt sur le revenu` },
  'src.taper': { en: `GOV.UK: income over £100,000`, nl: `GOV.UK: inkomen boven £ 100.000`, fr: `GOV.UK : revenus au-delà de 100 000 £` },
  'src.scot': { en: `GOV.UK: Scottish income tax`, nl: `GOV.UK: Schotse inkomstenbelasting`, fr: `GOV.UK : impôt écossais` },
  'src.ma': { en: `GOV.UK: Marriage Allowance`, nl: `GOV.UK: Marriage Allowance`, fr: `GOV.UK : Marriage Allowance` },
  'src.employers': { en: `HMRC: rates for employers 2026/27`, nl: `HMRC: tarieven voor werkgevers 2026/27`, fr: `HMRC : taux pour les employeurs 2026/27` },
  'src.ea': { en: `GOV.UK: Employment Allowance`, nl: `GOV.UK: Employment Allowance`, fr: `GOV.UK : Employment Allowance` },
  'src.levy': { en: `GOV.UK: Apprenticeship Levy`, nl: `GOV.UK: Apprenticeship Levy`, fr: `GOV.UK : Apprenticeship Levy` },
  'src.cb': { en: `GOV.UK: Child Benefit`, nl: `GOV.UK: kinderbijslag`, fr: `GOV.UK : allocations familiales` },
  'src.hicbc': { en: `GOV.UK: Child Benefit charge`, nl: `GOV.UK: heffing op kinderbijslag`, fr: `GOV.UK : taxe sur les allocations familiales` },
  'src.uc': { en: `GOV.UK: Universal Credit`, nl: `GOV.UK: Universal Credit`, fr: `GOV.UK : Universal Credit` },
  'src.ucWages': { en: `GOV.UK: how wages affect Universal Credit`, nl: `GOV.UK: invloed van loon op Universal Credit`, fr: `GOV.UK : effet du salaire sur l'Universal Credit` },
  'src.scp': { en: `Social Security Scotland: Scottish Child Payment`, nl: `Social Security Scotland: Scottish Child Payment`, fr: `Social Security Scotland : Scottish Child Payment` },
  'src.nlw': { en: `GOV.UK: minimum wage rates`, nl: `GOV.UK: minimumlonen`, fr: `GOV.UK : salaires minimums` },
  'src.ashe': { en: `ONS: earnings 2025 (ASHE)`, nl: `ONS: lonen 2025 (ASHE)`, fr: `ONS : salaires 2025 (ASHE)` },
  'src.vat': { en: `GOV.UK: VAT rates`, nl: `GOV.UK: btw-tarieven`, fr: `GOV.UK : taux de TVA` },
  'src.minSal': { en: `the ministerial salary data`, nl: `de gegevens over ministerslonen`, fr: `les données sur les salaires ministériels` },
  'src.mpPay': { en: `IPSA: MPs' pay 2026-27`, nl: `IPSA: loon parlementsleden 2026-27`, fr: `IPSA : salaire des députés 2026-27` },
  'src.pcpf': { en: `GAD: MPs' pension fund valuation`, nl: `GAD: waardering pensioenfonds parlementsleden`, fr: `GAD : évaluation du fonds de retraite des députés` },

  'gap.mpPension': { en: `MPs' and ministers' pension payment: 11.09% of all pay, before tax. Not confirmed for 2026; an answer in the House of Lords gives 11.2% for the ministers' scheme.`, nl: `Pensioenbijdrage van parlementsleden en ministers: 11,09% van het hele loon, voor belasting. Niet bevestigd voor 2026; een antwoord in het Hogerhuis noemt 11,2% voor de regeling van ministers.`, fr: `Cotisation retraite des députés et ministres : 11,09% de toute la rémunération, avant impôt. Non confirmée pour 2026 ; une réponse à la Chambre des lords cite 11,2% pour le régime des ministres.` },
  'gap.exchequerPension': { en: `What the State pays for MPs' and ministers' pensions: 12.9%, from the 2014 review. What the Treasury paid in 2023/24 suggests about 12.6%; the 2026 rate isn't published.`, nl: `Wat de staat betaalt voor de pensioenen van parlementsleden en ministers: 12,9%, uit de doorlichting van 2014. Wat de schatkist in 2023/24 betaalde, wijst eerder op 12,6%; het tarief voor 2026 is niet gepubliceerd.`, fr: `Ce que l'État paie pour la retraite des députés et ministres : 12,9%, d'après l'évaluation de 2014. Les versements du Trésor en 2023/24 suggèrent plutôt 12,6% ; le taux 2026 n'est pas publié.` },
  'gap.ministerClaimed': { en: `Ministers are shown with the salary they really take (frozen since 2008), not the higher amount they have a right to. Someone who takes it all pays more tax.`, nl: `Ministers staan erin met het loon dat ze echt opnemen (bevroren sinds 2008), niet het hogere bedrag waar ze recht op hebben. Wie alles opneemt, betaalt meer belasting.`, fr: `Les ministres sont comptés avec le salaire qu'ils prennent vraiment (gelé depuis 2008), pas le montant plus élevé auquel ils ont droit. Qui le prend en entier paie plus d'impôt.` },
  'gap.scotMa': { en: `Marriage Allowance in Scotland: we count the tax saved at 19% (£239.40 a year). We couldn't confirm the amount HMRC uses for Scottish taxpayers.`, nl: `Marriage Allowance in Schotland: we rekenen de besparing aan 19% (£ 239,40 per jaar). We konden het bedrag dat HMRC voor Schotse belastingplichtigen gebruikt niet bevestigen.`, fr: `Marriage Allowance en Écosse : nous comptons l'économie à 19% (239,40 £ par an). Nous n'avons pas pu confirmer le montant que le HMRC applique aux contribuables écossais.` },
  'gap.ucOutOfWork': { en: `Universal Credit that a single person or a couple with no other income would get without your job is not counted as taken away by your pay. Only the difference between two working situations is.`, nl: `De Universal Credit die een alleenstaande of een koppel zonder ander inkomen zou krijgen zonder jouw job, telt niet als iets wat je loon afneemt. Alleen het verschil tussen twee werksituaties telt.`, fr: `L'Universal Credit qu'une personne seule ou un couple sans autre revenu toucherait sans votre emploi n'est pas compté comme repris par votre salaire. Seul l'écart entre deux situations de travail l'est.` },
  'gap.ucSimple': { en: `Universal Credit assumes adults aged 25 or over, no housing costs, no savings and no extra for health. The extra £47.94 a month for a first child born before 6 April 2017 is ignored.`, nl: `Universal Credit gaat uit van volwassenen van 25 of ouder, zonder woonkosten, spaargeld of extra voor gezondheid. De extra £ 47,94 per maand voor een eerste kind geboren voor 6 april 2017 is genegeerd.`, fr: `L'Universal Credit suppose des adultes de 25 ans ou plus, sans frais de logement, sans épargne ni supplément santé. Les 47,94 £ de plus par mois pour un premier enfant né avant le 6 avril 2017 sont ignorés.` },
  'gap.employer': { en: `Employer size has three choices: its National Insurance discount (Employment Allowance) all used on your pay, already used up, or a large employer paying the 0.5% training levy on all of your pay (its first £15,000 without levy is ignored).`, nl: `De grootte van de werkgever heeft drie keuzes: zijn korting op National Insurance (Employment Allowance) helemaal gebruikt op jouw loon, al opgebruikt, of een grote werkgever die de opleidingsheffing van 0,5% op je hele loon betaalt (de eerste £ 15.000 zonder heffing is genegeerd).`, fr: `La taille de l'employeur a trois choix : sa remise de National Insurance (Employment Allowance) utilisée entièrement sur votre salaire, déjà épuisée, ou grande entreprise payant la taxe formation de 0,5% sur tout votre salaire (ses premiers 15 000 £ sans taxe sont ignorés).` },
  'gap.nlwHours': { en: `Minimum wage line: £12.71 an hour for 37.5 hours a week. The law doesn't set weekly hours.`, nl: `Lijn van het minimumloon: £ 12,71 per uur voor 37,5 uur per week. De wet legt geen uren per week vast.`, fr: `Ligne du salaire minimum : 12,71 £ de l'heure pour 37,5 heures par semaine. La loi ne fixe pas d'heures par semaine.` },
  'gap.ashe': { en: `Typical pay: from the ASHE survey of April 2025, early figures, full-time only. Half of full-time employees earn more than the median; the mean is the average. Pay in 2026 is probably higher.`, nl: `Gangbare lonen: uit de ASHE-enquête van april 2025, voorlopige cijfers, alleen voltijds. De helft van de voltijdse werknemers verdient meer dan de mediaan; het gemiddelde is het gemiddelde. Lonen in 2026 liggen waarschijnlijk hoger.`, fr: `Salaires courants : enquête ASHE d'avril 2025, chiffres provisoires, temps plein seulement. La moitié des salariés à temps plein gagnent plus que le médian ; le moyen est la moyenne. Les salaires 2026 sont sans doute plus élevés.` },
  'gap.networkRail': { en: `Network Rail: Andrew Haines' pay for 2024/25. He left in October 2025 and the pay of the person after him isn't published yet.`, nl: `Network Rail: het loon van Andrew Haines in 2024/25. Hij vertrok in oktober 2025 en het loon van zijn opvolger is nog niet gepubliceerd.`, fr: `Network Rail : la rémunération 2024/25 d'Andrew Haines. Il est parti en octobre 2025 et celle de son successeur n'est pas encore publiée.` },
  'gap.noCheck': { en: `No result was checked against HMRC's or a payroll firm's calculator.`, nl: `Geen enkel resultaat is nagekeken met de rekentool van HMRC of van een loonbureau.`, fr: `Aucun résultat n'a été vérifié avec le simulateur du HMRC ou d'un cabinet de paie.` },
  'gap.notIncl': { en: `Work pensions, salary sacrifice, student loans, employer perks and other tax codes are left out. See "What's not included".`, nl: `Bedrijfspensioen, salary sacrifice, studieleningen, extraatjes van de werkgever en andere belastingcodes zijn weggelaten. Zie "Wat niet is meegerekend".`, fr: `Retraite d'entreprise, salary sacrifice, prêts étudiants, avantages de l'employeur et autres codes fiscaux sont laissés de côté. Voir « Ce qui n'est pas inclus ».` },
};
