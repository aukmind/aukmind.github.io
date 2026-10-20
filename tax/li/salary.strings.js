window.TAX_STRINGS = {
  title: { en: `Liechtenstein Buying Power`, nl: `Koopkracht in Liechtenstein`, fr: `Pouvoir d'achat au Liechtenstein` },
  eyebrow: { en: `Liechtenstein · income year 2026 · employee`, nl: `Liechtenstein · inkomstenjaar 2026 · werknemer`, fr: `Liechtenstein · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Liechtenstein · income year 2026 · member of government`, nl: `Liechtenstein · inkomstenjaar 2026 · regeringslid`, fr: `Liechtenstein · revenus 2026 · membre du gouvernement` },
  lead: {
    en: `Every tax on a Liechtenstein salary in 2026, from what your employer pays to what you can buy.`,
    nl: `Alle belastingen op een loon in Liechtenstein in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen.`,
    fr: `Tous les prélèvements sur un salaire au Liechtenstein en 2026, de ce que paie votre employeur à ce que vous pouvez acheter.`,
  },
  salaryPh: { en: `e.g. 7401`, nl: `bv. 7401`, fr: `p. ex. 7401` },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married couples and registered partners fill in one tax return together, on the married rates. Your share is what the couple pays with your pay, minus what it would pay without it.`,
    nl: `Gehuwden en geregistreerde partners doen samen één belastingaangifte, met de tarieven voor gehuwden. Jouw deel is wat het koppel betaalt met jouw loon, min wat het zonder jouw loon zou betalen.`,
    fr: `Les couples mariés et les partenaires enregistrés remplissent une seule déclaration ensemble, au tarif des mariés. Votre part, c'est ce que le couple paie avec votre salaire, moins ce qu'il paierait sans.`,
  },
  includePa: { en: `Count child allowance (Kinderzulage)`, nl: `Kinderbijslag (Kinderzulage) meetellen`, fr: `Compter les allocations familiales (Kinderzulage)` },
  commune: { en: `Municipality (Gemeinde)`, nl: `Gemeente (Gemeinde)`, fr: `Commune (Gemeinde)` },
  searchCommune: { en: `Search a municipality`, nl: `Zoek een gemeente`, fr: `Rechercher une commune` },
  searchN: { en: n => `Search ${n} municipalities`, nl: n => `Zoek in ${n} gemeenten`, fr: n => `Rechercher parmi ${n} communes` },
  communesError: {
    en: `Couldn't load the municipality list (communes.js next to this page). Set the surcharge by hand below.`,
    nl: `Kon de lijst met gemeenten niet laden (communes.js naast deze pagina). Stel de toeslag hieronder zelf in.`,
    fr: `Impossible de charger la liste des communes (communes.js à côté de cette page). Réglez la surtaxe à la main ci-dessous.`,
  },
  'area.Oberland': { en: `Oberland`, nl: `Oberland`, fr: `Oberland` },
  'area.Unterland': { en: `Unterland`, nl: `Unterland`, fr: `Unterland` },
  communeHint: {
    en: (r, a) => `Municipal surcharge ${r} of the national tax · ${a}`,
    nl: (r, a) => `Gemeentetoeslag ${r} van de landsbelasting · ${a}`,
    fr: (r, a) => `Surtaxe communale ${r} de l'impôt national · ${a}`,
  },
  localLabel: { en: `Municipal surcharge:`, nl: `Gemeentetoeslag:`, fr: `Surtaxe communale :` },
  vatStandard: { en: `(the standard rate, shared with Switzerland, is 8.1%)`, nl: `(het normale tarief, gedeeld met Zwitserland, is 8,1%)`, fr: `(le taux normal, commun avec la Suisse, est de 8,1%)` },
  lowWageTrap: { en: `Pension plan starts, tax-free minimum ends`, nl: `Pensioenplan start, belastingvrij minimum stopt`, fr: `Début du 2e pilier, fin du minimum exonéré` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  bracketTop: { en: `top rate 8% + surcharge`, nl: `toptarief 8% + toeslag`, fr: `taux maximal 8% + surtaxe` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Government councillor`, nl: `Regeringsraad`, fr: `Conseiller de gouvernement` },
  'minRole.deputy': { en: `Deputy head of government`, nl: `Vicepremier`, fr: `Vice-chef du gouvernement` },
  'minRole.pm': { en: `Head of government`, nl: `Regeringsleider`, fr: `Chef du gouvernement` },
  ministerHint: {
    en: `Government members get a normal salary, set by the civil service pay law. It is taxed and insured like anyone else's pay.`,
    nl: `Regeringsleden krijgen een gewoon loon, vastgelegd in de bezoldigingswet voor overheidspersoneel. Het wordt belast en verzekerd zoals ieders loon.`,
    fr: `Les membres du gouvernement touchent un salaire normal, fixé par la loi sur les salaires de la fonction publique. Il est imposé et assuré comme celui de tout le monde.`,
  },
  minSalaryHint: {
    en: `Salary for one year at the 2026 level, without the expense allowance. By default, the amount set by law.`,
    nl: `Loon voor één jaar op het niveau van 2026, zonder onkostenvergoeding. Standaard het bedrag uit de wet.`,
    fr: `Salaire d'une année au niveau 2026, sans le forfait de frais. Par défaut, le montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: top => `The pay law (Besoldungsgesetz) links government pay to the highest fixed salary in the civil service, pay class 20 (${top} in 2026). The head of government gets 123% of it, the deputy 116%, the other councillors 108.5% and the government secretary 101.5%. This salary is taxed like any other, with old-age insurance (AHV) and pension contributions. The expense allowance set by parliament (the Landtag) is not counted.`,
    nl: top => `De bezoldigingswet (Besoldungsgesetz) koppelt het regeringsloon aan het hoogste vaste loon bij de overheid, loonklasse 20 (${top} in 2026). De regeringsleider krijgt daar 123% van, de vicepremier 116%, de andere regeringsraden 108,5% en de regeringssecretaris 101,5%. Dat loon wordt belast als elk ander, met bijdragen voor het ouderdomspensioen (AHV) en het bedrijfspensioen. De onkostenvergoeding die het parlement (de Landtag) vastlegt, telt niet mee.`,
    fr: top => `La loi sur les salaires (Besoldungsgesetz) lie la paie du gouvernement au salaire fixe le plus élevé de la fonction publique, la classe 20 (${top} en 2026). Le chef du gouvernement en touche 123%, son suppléant 116%, les autres conseillers 108,5% et le secrétaire du gouvernement 101,5%. Ce salaire est imposé comme les autres, avec les cotisations à l'assurance vieillesse (AHV) et à la caisse de pension. Le forfait de frais fixé par le parlement (le Landtag) n'est pas compté.`,
  },
  'bd.minGross': { en: `Government salary`, nl: `Regeringsloon`, fr: `Traitement gouvernemental` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, dep, min) => `${pm} a year for the head of government, ${dep} for the deputy, ${min} for the other councillors.`,
    nl: (pm, dep, min) => `${pm} per jaar voor de regeringsleider, ${dep} voor de vicepremier, ${min} voor de andere regeringsraden.`,
    fr: (pm, dep, min) => `${pm} par an pour le chef du gouvernement, ${dep} pour son suppléant, ${min} pour les autres conseillers.`,
  },
  'tip.stateCost': {
    en: `Everything the State spends for this job: the salary, plus the social and pension contributions it pays on top, plus its share of health insurance. The tax rates on this page are measured against this total.`,
    nl: `Alles wat de staat aan deze functie uitgeeft: het loon, plus de sociale en pensioenbijdragen die hij erbovenop betaalt, plus zijn deel van de ziekteverzekering. De belastingpercentages op deze pagina worden op dit totaal berekend.`,
    fr: `Tout ce que l'État dépense pour ce poste : le salaire, plus les cotisations sociales et de retraite qu'il paie en plus, plus sa part d'assurance maladie. Les taux de prélèvement de cette page sont calculés sur ce total.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Head of government`, nl: `Regeringsleider`, fr: `Chef du gouvernement` },
  'stat.deputy': { en: `Deputy head of government`, nl: `Vicepremier`, fr: `Vice-chef du gouvernement` },
  'stat.minister': { en: `Government councillor`, nl: `Regeringsraad`, fr: `Conseiller de gouvernement` },
  'stat.secretary': { en: `Government secretary`, nl: `Regeringssecretaris`, fr: `Secrétaire du gouvernement` },
  'pol.stat.pm': { en: `123% of the highest civil service salary (class 20)`, nl: `123% van het hoogste overheidsloon (klasse 20)`, fr: `123% du plus haut salaire de la fonction publique (classe 20)` },
  'pol.stat.deputy': { en: `116% of the highest civil service salary (class 20)`, nl: `116% van het hoogste overheidsloon (klasse 20)`, fr: `116% du plus haut salaire de la fonction publique (classe 20)` },
  'pol.stat.minister': { en: `108.5% of the highest civil service salary (class 20)`, nl: `108,5% van het hoogste overheidsloon (klasse 20)`, fr: `108,5% du plus haut salaire de la fonction publique (classe 20)` },
  'pol.stat.secretary': { en: `101.5% of the highest civil service salary (class 20)`, nl: `101,5% van het hoogste overheidsloon (klasse 20)`, fr: `101,5% du plus haut salaire de la fonction publique (classe 20)` },
  'polNote.minister': {
    en: `Taxed exactly like normal pay, with the same contributions and deductions. The head is placed at the employee salary that gives the same take-home pay, with your settings. The dot is the real salary.`,
    nl: `Precies belast zoals een gewoon loon, met dezelfde bijdragen en aftrekken. Het hoofdje staat bij het werknemersloon dat hetzelfde nettoloon oplevert, met jouw instellingen. Het bolletje is het echte loon.`,
    fr: `Imposé exactement comme un salaire normal, avec les mêmes cotisations et déductions. La tête est placée au salaire d'employé qui donne le même net, avec vos réglages. Le point est le salaire réel.`,
  },
  'polTipNote.pm': {
    en: `Highest salary allowed by the pay law (Besoldungsgesetz, Art. 34). The expense allowance is not included.`,
    nl: `Hoogste loon dat de bezoldigingswet toelaat (Besoldungsgesetz, art. 34). De onkostenvergoeding zit er niet in.`,
    fr: `Salaire maximal permis par la loi sur les salaires (Besoldungsgesetz, art. 34). Le forfait de frais n'est pas inclus.`,
  },
  'polTipNote.deputy': {
    en: `Highest salary allowed by the pay law (Besoldungsgesetz, Art. 34). The expense allowance is not included.`,
    nl: `Hoogste loon dat de bezoldigingswet toelaat (Besoldungsgesetz, art. 34). De onkostenvergoeding zit er niet in.`,
    fr: `Salaire maximal permis par la loi sur les salaires (Besoldungsgesetz, art. 34). Le forfait de frais n'est pas inclus.`,
  },
  'polTipNote.minister': {
    en: `Highest salary allowed by the pay law (Besoldungsgesetz, Art. 34). A councillor who works part-time is paid less, in proportion.`,
    nl: `Hoogste loon dat de bezoldigingswet toelaat (Besoldungsgesetz, art. 34). Een regeringsraad die deeltijds werkt, krijgt naar verhouding minder.`,
    fr: `Salaire maximal permis par la loi sur les salaires (Besoldungsgesetz, art. 34). Un conseiller à temps partiel est payé moins, en proportion.`,
  },
  'polTipNote.secretary': {
    en: `The government secretary runs the government's office (the chancery). Highest salary allowed by the pay law (Besoldungsgesetz, Art. 34).`,
    nl: `De regeringssecretaris leidt het bureau van de regering (de kanselarij). Hoogste loon dat de bezoldigingswet toelaat (Besoldungsgesetz, art. 34).`,
    fr: `Le secrétaire du gouvernement dirige les services du gouvernement (la chancellerie). Salaire maximal permis par la loi sur les salaires (Besoldungsgesetz, art. 34).`,
  },
  polNote: {
    en: links => `Point at a name for details, click to zoom in. Pay is the gross for the year, shown on the chart as a monthly amount (yearly pay ÷ months paid). Government members are taxed like employees, so each sits where an employee takes home the same net pay. Members of parliament (Landtag) are paid per meeting, so they are not shown. Pay: ${links}.`,
    nl: links => `Wijs een naam aan voor details, klik om in te zoomen. Het loon is het bruto voor het jaar, op de grafiek als maandbedrag (jaarloon ÷ betaalde maanden). Regeringsleden worden belast als werknemers, dus elk staat waar een werknemer hetzelfde nettoloon overhoudt. Parlementsleden (Landtag) krijgen een vergoeding per zitting en staan er dus niet op. Lonen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La paie est le brut de l'année, affichée sur le graphique par mois (salaire annuel ÷ mois payés). Les membres du gouvernement sont imposés comme des salariés : chacun est placé là où un salarié garde le même net. Les députés (Landtag) sont payés par séance, ils ne figurent donc pas ici. Traitements : ${links}.`,
  },

  trapTitle: { en: (a, b) => `Why so high between ${a} and ${b}?`, nl: (a, b) => `Waarom zo hoog tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi si élevé entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, fee) => `Two things hit at once here. From ${a}, your employer must enrol you in a workplace pension plan, counted on your whole pay from the first franc. At the legal minimum, you suddenly pay about ${fee} a year, and your employer pays the same. Second, up to ${b} your whole income is tax-free (the Existenzminimum, the amount needed to live). One franc more and you pay tax on all of it at once.`,
    nl: (a, b, fee) => `Hier gebeuren twee dingen tegelijk. Vanaf ${a} moet je werkgever je aansluiten bij een bedrijfspensioenplan, berekend op je hele loon vanaf de eerste frank. Op het wettelijke minimum betaal je plots ongeveer ${fee} per jaar, en je werkgever evenveel. Daarnaast is je hele inkomen tot ${b} belastingvrij (het Existenzminimum, wat je nodig hebt om te leven). Eén frank meer en je betaalt meteen belasting op alles.`,
    fr: (a, b, fee) => `Deux choses arrivent en même temps ici. Dès ${a}, votre employeur doit vous inscrire à une caisse de pension, calculée sur tout votre salaire dès le premier franc. Au minimum légal, vous payez d'un coup environ ${fee} par an, et votre employeur autant. Ensuite, jusqu'à ${b} tout votre revenu est exonéré (l'Existenzminimum, le minimum pour vivre). Un franc de plus et vous payez l'impôt sur tout, d'un coup.`,
  },
  topTitle: { en: top => `Why the step at ${top}?`, nl: top => `Waarom de sprong bij ${top}?`, fr: top => `Pourquoi la marche à ${top} ?` },
  topBody: {
    en: (top, r, br) => `From ${top}, your taxable income goes above ${br}. That is where the national tax reaches its highest rate, 8%. Add the municipal surcharge and each extra franc you earn costs ${r} in income tax. Above this point that rate no longer goes up.`,
    nl: (top, r, br) => `Vanaf ${top} komt je belastbaar inkomen boven ${br}. Daar bereikt de landsbelasting haar hoogste tarief, 8%. Tel de gemeentetoeslag erbij en elke extra frank die je verdient kost ${r} inkomstenbelasting. Daarboven stijgt dat tarief niet meer.`,
    fr: (top, r, br) => `Dès ${top}, votre revenu imposable dépasse ${br}. C'est là que l'impôt national atteint son taux le plus haut, 8%. Ajoutez la surtaxe communale et chaque franc gagné en plus coûte ${r} d'impôt sur le revenu. Au-delà, ce taux n'augmente plus.`,
  },

  // Tax components
  'comp.er': { en: `Employer AHV/IV/FAK/ALV`, nl: `Werkgeversbijdragen AHV/IV/FAK/ALV`, fr: `Cotisations patronales AHV/IV/FAK/ALV` },
  'comp.bpvgEr': { en: `Employer pension plan (BPVG)`, nl: `Werkgeversdeel bedrijfspensioen (BPVG)`, fr: `Part patronale de prévoyance (BPVG)` },
  'comp.ee': { en: `Employee AHV/IV/FAK/ALV`, nl: `Werknemersbijdragen AHV/IV/FAK/ALV`, fr: `Cotisations salariales AHV/IV/FAK/ALV` },
  'comp.bpvg': { en: `Your pension plan (BPVG)`, nl: `Jouw bedrijfspensioen (BPVG)`, fr: `Votre prévoyance professionnelle (BPVG)` },
  'comp.land': { en: `National income tax (Landessteuer)`, nl: `Landsbelasting (Landessteuer)`, fr: `Impôt national (Landessteuer)` },
  'comp.gem': { en: `Municipal surcharge (Gemeindezuschlag)`, nl: `Gemeentetoeslag (Gemeindezuschlag)`, fr: `Surtaxe communale (Gemeindezuschlag)` },
  'comp.kz': { en: `Child allowance (Kinderzulage)`, nl: `Kinderbijslag (Kinderzulage)`, fr: `Allocations familiales (Kinderzulage)` },
  kzReceived: { en: `+ Child allowance, paid by the FAK`, nl: `+ Kinderbijslag, betaald door de FAK`, fr: `+ Allocations familiales, versées par la FAK` },
  'bd.kk': { en: `Employer health insurance contribution`, nl: `Werkgeversbijdrage ziekteverzekering`, fr: `Contribution patronale à l'assurance maladie` },
  'bd.grossHh': { en: `Household gross pay`, nl: `Brutoloon van het gezin`, fr: `Salaire brut du ménage` },
  'bd.prof': { en: `Work expenses, flat`, nl: `Beroepskosten, forfait`, fr: `Frais professionnels, forfait` },
  'bd.contrib': { en: `Own AHV/ALV and pension contributions`, nl: `Eigen AHV/ALV- en pensioenbijdragen`, fr: `Cotisations AHV/ALV et prévoyance propres` },
  'bd.ins': { en: `Insurance premiums`, nl: `Verzekeringspremies`, fr: `Primes d'assurance` },
  'bd.kids': { en: `Child deduction`, nl: `Aftrek voor kinderen`, fr: `Déduction pour enfants` },
  'bd.taxable': { en: `Taxable income (Erwerb)`, nl: `Belastbaar inkomen (Erwerb)`, fr: `Revenu imposable (Erwerb)` },
  'bd.taxableHh': { en: `Taxable income of the household`, nl: `Belastbaar inkomen van het gezin`, fr: `Revenu imposable du ménage` },
  'bd.exempt': { en: `Below the tax-free minimum: no tax`, nl: `Onder het belastingvrije minimum: geen belasting`, fr: `Sous le minimum exonéré : pas d'impôt` },
  'bd.landShare': { en: `National income tax, your share`, nl: `Landsbelasting, jouw deel`, fr: `Impôt national, votre part` },
  'bd.gemShare': { en: `Municipal surcharge, your share`, nl: `Gemeentetoeslag, jouw deel`, fr: `Surtaxe communale, votre part` },

  // Tooltips
  'tip.f12': {
    en: `Paid in 12 monthly salaries. Many employers in Liechtenstein pay a 13th month instead. Only the total for the year matters for tax and contributions.`,
    nl: `Uitbetaald in 12 maandlonen. Veel werkgevers in Liechtenstein betalen een 13e maand. Voor belasting en bijdragen telt alleen het totaal over het jaar.`,
    fr: `Versé en 12 salaires mensuels. Beaucoup d'employeurs au Liechtenstein versent plutôt un 13e mois. Pour l'impôt et les cotisations, seul compte le total de l'année.`,
  },
  'tip.f13': {
    en: `Paid in 13 monthly salaries, the 13th usually in November or December. The tax rules for the year stay the same.`,
    nl: `Uitbetaald in 13 maandlonen, de 13e meestal in november of december. De belastingregels voor het jaar blijven dezelfde.`,
    fr: `Versé en 13 salaires mensuels, le 13e en général en novembre ou décembre. Les règles d'impôt de l'année restent les mêmes.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Married and registered partners are taxed together, on the married rates. They get twice the tax-free amount (CHF 31,710), and each tax rate starts at twice the income. Unmarried couples each file their own return. A single parent has separate rates where each rate starts at 1.5 times the income.`,
    nl: `Gehuwden en geregistreerde partners worden samen belast, met de tarieven voor gehuwden. Ze krijgen het dubbele belastingvrije bedrag (CHF 31.710), en elk tarief begint pas bij het dubbele inkomen. Ongehuwde koppels doen elk een eigen aangifte. Een alleenstaande ouder heeft eigen tarieven, die elk pas bij 1,5 keer het inkomen beginnen.`,
    fr: `Les époux et partenaires enregistrés sont imposés ensemble, au tarif des mariés. Ils ont un montant exonéré doublé (CHF 31 710), et chaque taux ne commence qu'à un revenu deux fois plus élevé. Les couples non mariés font chacun leur déclaration. Un parent seul a son propre tarif, où chaque taux commence à un revenu 1,5 fois plus élevé.`,
  },
  'tip.kzToggle': {
    en: `The family fund pays a child allowance for every child of a resident, whatever you earn. It stays the same when your pay changes. So it lowers your overall tax rate, but not the tax on each extra franc you earn.`,
    nl: `Het gezinsfonds betaalt kinderbijslag voor elk kind van een inwoner, wat je ook verdient. Het bedrag blijft gelijk als je loon verandert. Het verlaagt dus je totale belastingdruk, maar niet de belasting op elke extra frank die je verdient.`,
    fr: `La caisse familiale verse une allocation pour chaque enfant d'un résident, quel que soit votre salaire. Elle ne change pas avec votre paie. Elle baisse donc votre taux d'imposition global, mais pas l'impôt sur chaque franc gagné en plus.`,
  },
  'tip.localRule': {
    en: `Each municipality adds its own tax on top of the national income tax. Its council sets it every year, between 150% and 250% of the national tax. In practice all 11 municipalities are at 150% to 160%. Pick yours above or set it here.`,
    nl: `Elke gemeente heft een eigen belasting bovenop de landsbelasting. De gemeenteraad legt die elk jaar vast, tussen 150% en 250% van de landsbelasting. In de praktijk zitten alle 11 gemeenten op 150% tot 160%. Kies de jouwe hierboven of stel ze hier in.`,
    fr: `Chaque commune ajoute son propre impôt à l'impôt national sur le revenu. Son conseil le fixe chaque année, entre 150% et 250% de l'impôt national. En pratique, les 11 communes sont entre 150% et 160%. Choisissez la vôtre ci-dessus ou réglez-la ici.`,
  },
  'tip.costShort': { en: `Your gross salary, plus what your employer pays on top for social insurance and health insurance.`, nl: `Je brutoloon, plus wat je werkgever erbovenop betaalt voor sociale verzekering en ziekteverzekering.`, fr: `Votre salaire brut, plus ce que votre employeur paie en plus pour la sécurité sociale et l'assurance maladie.` },
  'tip.er': {
    en: cap => `Your employer pays this on top of your gross salary. On your whole pay: old-age pension (AHV) 4.225%, disability insurance (IV) 0.675%, family fund (FAK) 1.9% and admin costs 0.585%. Plus unemployment insurance (ALV) 0.5%, only on pay up to ${cap}.`,
    nl: cap => `Je werkgever betaalt dit bovenop je brutoloon. Op je hele loon: ouderdomspensioen (AHV) 4,225%, invaliditeitsverzekering (IV) 0,675%, gezinsfonds (FAK) 1,9% en administratiekosten 0,585%. Plus werkloosheidsverzekering (ALV) 0,5%, alleen op het loon tot ${cap}.`,
    fr: cap => `Votre employeur paie ceci en plus de votre salaire brut. Sur tout le salaire : assurance vieillesse (AHV) 4,225%, assurance invalidité (IV) 0,675%, caisse familiale (FAK) 1,9% et frais de gestion 0,585%. Plus l'assurance chômage (ALV) 0,5%, seulement sur le salaire jusqu'à ${cap}.`,
  },
  'tip.ee': {
    en: cap => `Taken from your pay before you get it. On your whole pay: old-age pension (AHV) 4.025%, disability insurance (IV) 0.675% and family fund (FAK) 0.2%, new in 2026 to pay for paid parental leave. Plus unemployment insurance (ALV) 0.5% on pay up to ${cap}. You don't pay income tax on these amounts.`,
    nl: cap => `Afgehouden van je loon voor je het krijgt. Op je hele loon: ouderdomspensioen (AHV) 4,025%, invaliditeitsverzekering (IV) 0,675% en gezinsfonds (FAK) 0,2%, nieuw in 2026 om betaald ouderschapsverlof te betalen. Plus werkloosheidsverzekering (ALV) 0,5% op het loon tot ${cap}. Op deze bedragen betaal je geen inkomstenbelasting.`,
    fr: cap => `Retenu sur votre salaire avant que vous le touchiez. Sur tout le salaire : assurance vieillesse (AHV) 4,025%, assurance invalidité (IV) 0,675% et caisse familiale (FAK) 0,2%, nouvelle en 2026 pour financer le congé parental payé. Plus l'assurance chômage (ALV) 0,5% sur le salaire jusqu'à ${cap}. Vous ne payez pas d'impôt sur ces montants.`,
  },
  'tip.bpvg': {
    en: (entry, cap) => `A workplace pension (the "2nd pillar") is required once you earn ${entry} a year. Unlike in Switzerland, no part of your pay is left out: your whole pay counts, up to at least ${cap}. By law at least 8% goes into retirement savings, and your employer pays at least half. Insurance against death and disability comes on top and depends on the fund. You pay no income tax on your share.`,
    nl: (entry, cap) => `Een bedrijfspensioen (de "2e pijler") is verplicht zodra je ${entry} per jaar verdient. Anders dan in Zwitserland valt er geen deel van je loon buiten: je hele loon telt, tot minstens ${cap}. Volgens de wet gaat minstens 8% naar pensioensparen, en je werkgever betaalt minstens de helft. Verzekering bij overlijden en invaliditeit komt erbovenop en hangt af van het fonds. Op jouw deel betaal je geen inkomstenbelasting.`,
    fr: (entry, cap) => `Une caisse de pension d'entreprise (le « 2e pilier ») est obligatoire dès que vous gagnez ${entry} par an. Contrairement à la Suisse, aucune partie du salaire n'est mise de côté : tout votre salaire compte, jusqu'à au moins ${cap}. La loi impose au moins 8% d'épargne retraite, dont au moins la moitié payée par l'employeur. L'assurance décès et invalidité s'y ajoute et dépend de la caisse. Vous ne payez pas d'impôt sur votre part.`,
  },
  'tip.bpvgEr': {
    en: `Your employer pays at least half of the pension plan. We show the legal minimum: 8% in total, split half and half. Many plans pay more.`,
    nl: `Je werkgever betaalt minstens de helft van het pensioenplan. We tonen het wettelijke minimum: 8% in totaal, half om half verdeeld. Veel plannen betalen meer.`,
    fr: `Votre employeur paie au moins la moitié de la caisse de pension. Nous montrons le minimum légal : 8% au total, partagés moitié-moitié. Beaucoup de plans versent plus.`,
  },
  'tip.kk': {
    en: (m, y) => `Every employer must pay each employee half of the average health insurance premium: ${m} a month for an adult in 2026 (${y} a year full-time). It is not salary, so there is no AHV and no income tax on it. It helps pay your required health insurance. That insurance is not counted on this page, so this money shows up as part of your net pay.`,
    nl: (m, y) => `Elke werkgever moet elke werknemer de helft van de gemiddelde ziekteverzekeringspremie betalen: ${m} per maand voor een volwassene in 2026 (${y} per jaar voltijds). Het is geen loon, dus er gaat geen AHV en geen inkomstenbelasting af. Het helpt je verplichte ziekteverzekering te betalen. Die verzekering telt op deze pagina niet mee, dus dit geld staat bij je nettoloon.`,
    fr: (m, y) => `Chaque employeur doit verser à chaque salarié la moitié de la prime moyenne d'assurance maladie : ${m} par mois pour un adulte en 2026 (${y} par an à temps plein). Ce n'est pas du salaire : pas d'AHV ni d'impôt dessus. Elle aide à payer votre assurance maladie obligatoire. Cette assurance n'est pas comptée sur cette page, cet argent apparaît donc dans votre net.`,
  },
  'tip.prof': {
    en: v => `Every employee can take ${v} off taxable income for work costs, with no receipts needed. If your real travel and meal costs are higher you can claim those instead; that isn't calculated here.`,
    nl: v => `Elke werknemer mag ${v} aftrekken van het belastbaar inkomen voor beroepskosten, zonder bewijsstukken. Zijn je echte reis- en maaltijdkosten hoger, dan kun je die aftrekken; dat wordt hier niet berekend.`,
    fr: v => `Chaque salarié peut retirer ${v} de son revenu imposable pour ses frais de travail, sans justificatifs. Si vos vrais frais de trajet et de repas sont plus élevés, vous pouvez les déduire à la place ; ce n'est pas calculé ici.`,
  },
  'tip.contrib': {
    en: `What you pay yourself for AHV, IV, FAK, ALV and your pension plan is not taxed. It is taken off your taxable income in full (for the pension plan, up to 18% of your income).`,
    nl: `Wat je zelf betaalt voor AHV, IV, FAK, ALV en je bedrijfspensioen wordt niet belast. Het gaat volledig af van je belastbaar inkomen (voor het pensioen tot 18% van je inkomen).`,
    fr: `Ce que vous payez vous-même pour l'AHV, l'IV, la FAK, l'ALV et votre caisse de pension n'est pas imposé. C'est retiré en entier de votre revenu imposable (pour la caisse de pension, jusqu'à 18% du revenu).`,
  },
  'tip.ins': {
    en: (one, two) => `What you pay for health, life and accident insurance can be taken off taxable income, up to ${one} a year, or ${two} for a married couple. An adult's health insurance alone costs more than that, so we take the full amount. Children under 16 pay no premium.`,
    nl: (one, two) => `Wat je betaalt voor ziekte-, levens- en ongevallenverzekering mag af van je belastbaar inkomen, tot ${one} per jaar, of ${two} voor een gehuwd koppel. De ziekteverzekering van een volwassene alleen kost al meer, dus we nemen het volle bedrag. Kinderen onder 16 betalen geen premie.`,
    fr: (one, two) => `Ce que vous payez pour l'assurance maladie, vie et accident peut être retiré du revenu imposable, jusqu'à ${one} par an, ou ${two} pour un couple marié. L'assurance maladie d'un adulte coûte déjà plus, nous prenons donc le montant entier. Les enfants de moins de 16 ans ne paient pas de prime.`,
  },
  'tip.kids': {
    en: v => `${v} is taken off taxable income for each child under 18, or each adult child still in school or training.`,
    nl: v => `${v} gaat af van het belastbaar inkomen voor elk kind onder 18, of elk meerderjarig kind dat nog studeert of een opleiding volgt.`,
    fr: v => `${v} sont retirés du revenu imposable pour chaque enfant de moins de 18 ans, ou chaque enfant majeur encore aux études ou en formation.`,
  },
  'tip.taxable': {
    en: `The part of your pay that is taxed: gross pay − flat work costs − your own contributions − insurance premiums − child deduction. For a married couple, both incomes are added up. Savings and property would also add 4% of their value here, as if they earned that; we leave them out.`,
    nl: `Het deel van je loon dat belast wordt: brutoloon − forfaitaire beroepskosten − eigen bijdragen − verzekeringspremies − aftrek voor kinderen. Voor een gehuwd koppel worden beide inkomens samengeteld. Spaargeld en bezit zouden hier ook 4% van hun waarde toevoegen, alsof ze dat opbrengen; die laten we weg.`,
    fr: `La partie de votre salaire qui est imposée : salaire brut − forfait de frais − vos cotisations − primes d'assurance − déduction pour enfants. Pour un couple marié, les deux revenus sont additionnés. L'épargne et les biens ajouteraient aussi ici 4% de leur valeur, comme s'ils rapportaient cela ; nous les laissons de côté.`,
  },
  'tip.exempt': {
    en: (a, b, c, k) => `If your gross pay is no more than the minimum needed to live, you pay no income tax at all. That minimum is ${a} a month for a single person, ${b} for a single parent, ${c} for a married couple, plus ${k} per child (we assume children aged 6 to 11). Earn more and the normal rates apply to all of your income.`,
    nl: (a, b, c, k) => `Is je brutoloon niet hoger dan het minimum om van te leven, dan betaal je helemaal geen inkomstenbelasting. Dat minimum is ${a} per maand voor een alleenstaande, ${b} voor een alleenstaande ouder, ${c} voor een gehuwd koppel, plus ${k} per kind (we gaan uit van kinderen van 6 tot 11 jaar). Verdien je meer, dan gelden de gewone tarieven op je hele inkomen.`,
    fr: (a, b, c, k) => `Si votre salaire brut ne dépasse pas le minimum pour vivre, vous ne payez aucun impôt sur le revenu. Ce minimum est de ${a} par mois pour une personne seule, ${b} pour un parent seul, ${c} pour un couple marié, plus ${k} par enfant (nous supposons des enfants de 6 à 11 ans). Si vous gagnez plus, le tarif normal s'applique à tout votre revenu.`,
  },
  'tip.exemptCalc': {
    en: (g, lim) => `Your gross: ${g} a year. Limit: ${lim}.`,
    nl: (g, lim) => `Jouw bruto: ${g} per jaar. Grens: ${lim}.`,
    fr: (g, lim) => `Votre brut : ${g} par an. Limite : ${lim}.`,
  },
  'tip.land.a': {
    en: `Rates for a single person: no tax on the first CHF 15,855 of taxable income. Each next slice is taxed a bit more: 1%, 3%, 4%, 5%, 6%, 6.5% and 7%, and 8% on everything above CHF 211,400.`,
    nl: `Tarieven voor een alleenstaande: geen belasting op de eerste CHF 15.855 belastbaar inkomen. Elke volgende schijf wordt iets zwaarder belast: 1%, 3%, 4%, 5%, 6%, 6,5% en 7%, en 8% op alles boven CHF 211.400.`,
    fr: `Tarif pour une personne seule : pas d'impôt sur les premiers CHF 15 855 de revenu imposable. Chaque tranche suivante est un peu plus imposée : 1%, 3%, 4%, 5%, 6%, 6,5% et 7%, et 8% sur tout ce qui dépasse CHF 211 400.`,
  },
  'tip.land.b': {
    en: `Rates for a single parent: the same percentages, but each slice is 1.5 times wider. No tax up to CHF 23,783, and 8% above CHF 317,100.`,
    nl: `Tarieven voor een alleenstaande ouder: dezelfde percentages, maar elke schijf is 1,5 keer breder. Geen belasting tot CHF 23.783, en 8% boven CHF 317.100.`,
    fr: `Tarif pour un parent seul : les mêmes pourcentages, mais chaque tranche est 1,5 fois plus large. Pas d'impôt jusqu'à CHF 23 783, et 8% au-delà de CHF 317 100.`,
  },
  'tip.land.c': {
    en: `Rates for a married couple: the same percentages, but each slice is twice as wide. No tax up to CHF 31,710, and 8% above CHF 422,800.`,
    nl: `Tarieven voor een gehuwd koppel: dezelfde percentages, maar elke schijf is dubbel zo breed. Geen belasting tot CHF 31.710, en 8% boven CHF 422.800.`,
    fr: `Tarif pour un couple marié : les mêmes pourcentages, mais chaque tranche est deux fois plus large. Pas d'impôt jusqu'à CHF 31 710, et 8% au-delà de CHF 422 800.`,
  },
  'tip.landCalc': {
    en: (ti, r, v) => `On ${ti} of taxable income, with ${r} on your last franc: <b>${v}</b>.`,
    nl: (ti, r, v) => `Op ${ti} belastbaar inkomen, met ${r} op je laatste frank: <b>${v}</b>.`,
    fr: (ti, r, v) => `Sur ${ti} de revenu imposable, avec ${r} sur votre dernier franc : <b>${v}</b>.`,
  },
  'tip.share': {
    en: v => `Your share (what the household pays with your pay, minus without it): <b>${v}</b>.`,
    nl: v => `Jouw deel (wat het gezin betaalt met jouw loon, min zonder): <b>${v}</b>.`,
    fr: v => `Votre part (ce que le ménage paie avec votre salaire, moins sans) : <b>${v}</b>.`,
  },
  'tip.gem': {
    en: (name, r) => `${name ? name + ': ' : ''}you pay ${r} of the national tax again, on top of it. With 150%, the highest rate of 8% becomes 20% in total.`,
    nl: (name, r) => `${name ? name + ': ' : ''}je betaalt ${r} van de landsbelasting nog eens extra. Met 150% wordt het hoogste tarief van 8% in totaal 20%.`,
    fr: (name, r) => `${name ? name + ' : ' : ''}vous payez en plus ${r} de l'impôt national. Avec 150%, le taux le plus haut de 8% devient 20% au total.`,
  },
  'tip.kz': {
    en: (a, b, c) => `${a} a month per child, or ${b} from age 10, and for every child in families with three or more. Single parents get ${c} more per child. No tax on it, and you get it whatever you earn. For a couple, we count half of it as yours.`,
    nl: (a, b, c) => `${a} per maand per kind, of ${b} vanaf 10 jaar, en voor elk kind in gezinnen met drie of meer kinderen. Alleenstaande ouders krijgen ${c} extra per kind. Er gaat geen belasting af, en je krijgt het wat je ook verdient. Voor een koppel tellen we de helft als de jouwe.`,
    fr: (a, b, c) => `${a} par mois par enfant, ou ${b} dès 10 ans, et pour chaque enfant dans les familles de trois enfants ou plus. Les parents seuls touchent ${c} de plus par enfant. Pas d'impôt dessus, et vous la recevez quel que soit votre revenu. Pour un couple, nous en comptons la moitié pour vous.`,
  },
  'tip.vatM': {
    en: `In reality some things have lower VAT: 2.6% on food, books and medicine, 3.8% on hotels, and none on rent. We ignore that, so the real VAT you pay is probably lower than shown.`,
    nl: `In werkelijkheid geldt voor sommige dingen minder btw: 2,6% op voeding, boeken en geneesmiddelen, 3,8% op hotels, en geen op huur. Dat laten we weg, dus de echte btw die je betaalt ligt waarschijnlijk lager.`,
    fr: `En réalité, certaines choses ont moins de TVA : 2,6% sur l'alimentation, les livres et les médicaments, 3,8% sur l'hôtellerie, et rien sur le loyer. Nous l'ignorons, la TVA réelle que vous payez est donc sans doute plus basse.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. That's gross pay − contributions − income tax + child allowance (if counted) + your employer's health insurance contribution.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Dat is brutoloon − bijdragen − inkomstenbelasting + kinderbijslag (als die meetelt) + de bijdrage van je werkgever voor de ziekteverzekering.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. C'est le brut − les cotisations − l'impôt sur le revenu + les allocations familiales (si comptées) + la contribution de votre employeur à l'assurance maladie.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026 (assessed in 2027)`,
    nl: `Gebruikte regels · inkomstenjaar 2026 (aanslag in 2027)`,
    fr: `Règles utilisées · revenus 2026 (imposés en 2027)`,
  },
  'ref.social': {
    en: { h: `1 · AHV, IV, FAK, ALV`, li: [
      `You pay <span class="num">5.4%</span>: old-age pension (AHV) 4.025%, disability (IV) 0.675%, family fund (FAK) 0.2% (new in 2026), unemployment (ALV) 0.5%.`,
      `Your employer pays <span class="num">7.885%</span>: AHV 4.225%, IV 0.675%, FAK 1.9%, admin 0.585%, ALV 0.5%.`,
      `Charged on all your pay, except ALV, which stops at CHF 126,000. Your employer also pays CHF 180.50 a month towards your health insurance.`,
    ] },
    nl: { h: `1 · AHV, IV, FAK, ALV`, li: [
      `Jij betaalt <span class="num">5,4%</span>: ouderdomspensioen (AHV) 4,025%, invaliditeit (IV) 0,675%, gezinsfonds (FAK) 0,2% (nieuw in 2026), werkloosheid (ALV) 0,5%.`,
      `Je werkgever betaalt <span class="num">7,885%</span>: AHV 4,225%, IV 0,675%, FAK 1,9%, administratie 0,585%, ALV 0,5%.`,
      `Op je hele loon, behalve ALV, die stopt bij CHF 126.000. Je werkgever betaalt ook CHF 180,50 per maand voor je ziekteverzekering.`,
    ] },
    fr: { h: `1 · AHV, IV, FAK, ALV`, li: [
      `Vous payez <span class="num">5,4%</span> : vieillesse (AHV) 4,025%, invalidité (IV) 0,675%, caisse familiale (FAK) 0,2% (nouveau en 2026), chômage (ALV) 0,5%.`,
      `Votre employeur paie <span class="num">7,885%</span> : AHV 4,225%, IV 0,675%, FAK 1,9%, gestion 0,585%, ALV 0,5%.`,
      `Sur tout votre salaire, sauf l'ALV, qui s'arrête à CHF 126 000. Votre employeur paie aussi CHF 180,50 par mois pour votre assurance maladie.`,
    ] },
  },
  'ref.bpvg': {
    en: { h: `2 · Workplace pension (BPVG)`, li: [
      `Required once you earn <span class="num">CHF 14,700</span> a year, on all your pay up to at least CHF 88,200.`,
      `At least <span class="num">8%</span> goes into retirement savings, at least half paid by the employer. We use 4% + 4%. Death and disability cover is not included.`,
    ] },
    nl: { h: `2 · Bedrijfspensioen (BPVG)`, li: [
      `Verplicht zodra je <span class="num">CHF 14.700</span> per jaar verdient, op je hele loon tot minstens CHF 88.200.`,
      `Minstens <span class="num">8%</span> gaat naar pensioensparen, minstens de helft betaald door de werkgever. We rekenen met 4% + 4%. Dekking bij overlijden en invaliditeit zit er niet in.`,
    ] },
    fr: { h: `2 · Caisse de pension (BPVG)`, li: [
      `Obligatoire dès que vous gagnez <span class="num">CHF 14 700</span> par an, sur tout le salaire jusqu'à au moins CHF 88 200.`,
      `Au moins <span class="num">8%</span> vont à l'épargne retraite, dont au moins la moitié payée par l'employeur. Nous comptons 4% + 4%. La couverture décès et invalidité n'est pas incluse.`,
    ] },
  },
  'ref.tax': {
    en: br => ({ h: `3 · National income tax (Landessteuer)`, li: [
      `Rates for a single person. Each rate applies only to the slice of taxable income in its band:${br}`,
      `Single parents: bands 1.5 times wider (no tax up to CHF 23,783). Married couples: bands twice as wide (no tax up to CHF 31,710).`,
      `No tax at all if gross pay is at most CHF 2,100 a month (single), 2,600 (single parent) or 3,200 (couple), + 300 to 600 per child.`,
    ] }),
    nl: br => ({ h: `3 · Landsbelasting (Landessteuer)`, li: [
      `Tarieven voor een alleenstaande. Elk tarief geldt alleen voor het deel van het belastbaar inkomen in die schijf:${br}`,
      `Alleenstaande ouders: schijven 1,5 keer breder (geen belasting tot CHF 23.783). Gehuwden: schijven dubbel zo breed (geen belasting tot CHF 31.710).`,
      `Helemaal geen belasting als het brutoloon hoogstens CHF 2.100 per maand is (alleenstaand), 2.600 (alleenstaande ouder) of 3.200 (koppel), + 300 tot 600 per kind.`,
    ] }),
    fr: br => ({ h: `3 · Impôt national (Landessteuer)`, li: [
      `Tarif pour une personne seule. Chaque taux ne s'applique qu'à la part du revenu imposable dans sa tranche :${br}`,
      `Parents seuls : tranches 1,5 fois plus larges (pas d'impôt jusqu'à CHF 23 783). Couples mariés : tranches deux fois plus larges (pas d'impôt jusqu'à CHF 31 710).`,
      `Aucun impôt si le salaire brut ne dépasse pas CHF 2 100 par mois (seul), 2 600 (parent seul) ou 3 200 (couple), + 300 à 600 par enfant.`,
    ] }),
  },
  'ref.deductions': {
    en: { h: `4 · Amounts taken off taxable income`, li: [
      `Work costs: a flat <span class="num">CHF 1,600</span> per employee. Your own AHV/IV/FAK/ALV in full; pension contributions up to 18% of income.`,
      `Insurance premiums up to <span class="num">CHF 3,700</span> (CHF 7,400 for a married couple). <span class="num">CHF 12,700</span> per child.`,
    ] },
    nl: { h: `4 · Wat van het belastbaar inkomen afgaat`, li: [
      `Beroepskosten: een forfait van <span class="num">CHF 1.600</span> per werknemer. Je eigen AHV/IV/FAK/ALV volledig; pensioenbijdragen tot 18% van het inkomen.`,
      `Verzekeringspremies tot <span class="num">CHF 3.700</span> (CHF 7.400 voor een gehuwd koppel). <span class="num">CHF 12.700</span> per kind.`,
    ] },
    fr: { h: `4 · Ce qui est retiré du revenu imposable`, li: [
      `Frais de travail : forfait de <span class="num">CHF 1 600</span> par salarié. Vos cotisations AHV/IV/FAK/ALV en entier ; caisse de pension jusqu'à 18% du revenu.`,
      `Primes d'assurance jusqu'à <span class="num">CHF 3 700</span> (CHF 7 400 pour un couple marié). <span class="num">CHF 12 700</span> par enfant.`,
    ] },
  },
  'ref.communes': {
    en: { h: `5 · Municipal surcharge`, li: [
      `Each municipal council sets it between <span class="num">150%</span> and <span class="num">250%</span> of the national tax. For tax year 2025: 150% in Vaduz, Schaan, Balzers, Triesen, Triesenberg, Planken, Gamprin and Schellenberg; <span class="num">160%</span> in Eschen, Mauren and Ruggell.`,
      `Councils set the rate for a year only in November of that same year, with the next budget. The 2026 rates aren't known yet, so we use the 2025 ones. Ruggell plans 155% next, Eschen 150% from 2027.`,
    ] },
    nl: { h: `5 · Gemeentetoeslag`, li: [
      `Elke gemeenteraad legt hem vast tussen <span class="num">150%</span> en <span class="num">250%</span> van de landsbelasting. Voor belastingjaar 2025: 150% in Vaduz, Schaan, Balzers, Triesen, Triesenberg, Planken, Gamprin en Schellenberg; <span class="num">160%</span> in Eschen, Mauren en Ruggell.`,
      `De raden leggen het tarief voor een jaar pas in november van dat jaar vast, samen met de volgende begroting. De tarieven voor 2026 zijn nog niet bekend, dus we gebruiken die van 2025. Ruggell plant hierna 155%, Eschen 150% vanaf 2027.`,
    ] },
    fr: { h: `5 · Surtaxe communale`, li: [
      `Chaque conseil communal la fixe entre <span class="num">150%</span> et <span class="num">250%</span> de l'impôt national. Pour l'année fiscale 2025 : 150% à Vaduz, Schaan, Balzers, Triesen, Triesenberg, Planken, Gamprin et Schellenberg ; <span class="num">160%</span> à Eschen, Mauren et Ruggell.`,
      `Les conseils fixent le taux d'une année seulement en novembre de cette même année, avec le budget suivant. Les taux 2026 ne sont pas encore connus, nous utilisons donc ceux de 2025. Ruggell prévoit ensuite 155%, Eschen 150% dès 2027.`,
    ] },
  },
  'ref.family': {
    en: { h: `6 · Child allowance`, li: [
      `<span class="num">CHF 310</span> a month per child, CHF 360 from age 10 or for each child from the third. Single parents get CHF 120 more per child. No tax on it.`,
    ] },
    nl: { h: `6 · Kinderbijslag`, li: [
      `<span class="num">CHF 310</span> per maand per kind, CHF 360 vanaf 10 jaar of voor elk kind vanaf het derde. Alleenstaande ouders krijgen CHF 120 extra per kind. Er gaat geen belasting af.`,
    ] },
    fr: { h: `6 · Allocations familiales`, li: [
      `<span class="num">CHF 310</span> par mois par enfant, CHF 360 dès 10 ans ou pour chaque enfant dès le troisième. Les parents seuls touchent CHF 120 de plus par enfant. Pas d'impôt dessus.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">8.1%</span>, the same as in Switzerland because the two countries share a customs union. We apply it as if you spent all your net pay.`,
      `The VAT hidden in a price = price × r / (100 + r). At 8.1%, that's <span class="num">7.49%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">8,1%</span>, hetzelfde als in Zwitserland omdat beide landen een douane-unie hebben. We passen het toe alsof je je hele nettoloon uitgeeft.`,
      `De btw die in een prijs zit = prijs × r / (100 + r). Bij 8,1% is dat <span class="num">7,49%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">8,1%</span>, le même qu'en Suisse car les deux pays partagent une union douanière. Nous l'appliquons comme si vous dépensiez tout votre salaire net.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 8,1%, cela fait <span class="num">7,49%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government`, li: [
      `Head of government <span class="num">CHF 296,090</span> a year, deputy CHF 279,240, councillors <span class="num">CHF 261,180</span>, government secretary CHF 244,330 (each a percentage of the highest civil service salary, class 20).`,
      `Taxed and insured like normal pay. Members of parliament (Landtag) are paid per meeting plus CHF 25,000 for expenses, so they are not shown.`,
    ] },
    nl: { h: `8 · Regering`, li: [
      `Regeringsleider <span class="num">CHF 296.090</span> per jaar, vicepremier CHF 279.240, regeringsraden <span class="num">CHF 261.180</span>, regeringssecretaris CHF 244.330 (elk een percentage van het hoogste overheidsloon, klasse 20).`,
      `Belast en verzekerd als een gewoon loon. Parlementsleden (Landtag) krijgen een vergoeding per zitting plus CHF 25.000 voor onkosten, dus ze staan er niet op.`,
    ] },
    fr: { h: `8 · Gouvernement`, li: [
      `Chef du gouvernement <span class="num">CHF 296 090</span> par an, suppléant CHF 279 240, conseillers <span class="num">CHF 261 180</span>, secrétaire du gouvernement CHF 244 330 (chacun un pourcentage du plus haut salaire de la fonction publique, classe 20).`,
      `Imposés et assurés comme un salaire normal. Les députés (Landtag) sont payés par séance plus CHF 25 000 de frais, ils ne figurent donc pas ici.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Health insurance (required, about CHF 361 a month for an adult), insurance for accidents outside work and for sick pay, pension death and disability cover, savings and property (taxed as if they earned 4% a year, added to income), extra work costs, and cross-border workers, who pay 4% taken at source plus 150% instead.`,
      `Amounts are the final tax for the year, smoothed out: the tax office rounds taxable income down to the nearest CHF 10. There is no legal minimum wage, so none is shown.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Ziekteverzekering (verplicht, ongeveer CHF 361 per maand voor een volwassene), verzekering voor ongevallen buiten het werk en voor loon bij ziekte, dekking bij overlijden en invaliditeit in het pensioen, spaargeld en bezit (belast alsof ze 4% per jaar opbrengen, bij het inkomen geteld), extra beroepskosten, en grensarbeiders, die in de plaats 4% aan de bron plus 150% betalen.`,
      `De bedragen zijn de uiteindelijke belasting voor het jaar, afgevlakt: de belastingdienst rondt het belastbaar inkomen af naar beneden op CHF 10. Er is geen wettelijk minimumloon, dus er wordt er geen getoond.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `L'assurance maladie (obligatoire, environ CHF 361 par mois pour un adulte), l'assurance accidents hors travail et perte de salaire en cas de maladie, la couverture décès et invalidité de la caisse de pension, l'épargne et les biens (imposés comme s'ils rapportaient 4% par an, ajoutés au revenu), les frais de travail en plus, et les frontaliers, qui paient à la place 4% retenus à la source plus 150%.`,
      `Les montants sont l'impôt final de l'année, lissé : le fisc arrondit le revenu imposable aux CHF 10 inférieurs. Il n'y a pas de salaire minimum légal, aucun n'est donc affiché.`,
    ] },
  },

  inheritLink: {
    en: `Liechtenstein has no inheritance tax: see what that means →`,
    nl: `Liechtenstein heeft geen erfbelasting: zie wat dat betekent →`,
    fr: `Le Liechtenstein n'a pas de droits de succession : voyez ce que cela implique →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your final assessment from the Steuerverwaltung decides.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je definitieve aanslag van de Steuerverwaltung is bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seule votre taxation définitive par la Steuerverwaltung fait foi.`,
  },

  'src.steg': { en: `Tax Act (SteG), version of 1 July 2026`, nl: `Belastingwet (SteG), versie van 1 juli 2026`, fr: `Loi fiscale (SteG), version du 1er juillet 2026` },
  'src.stev': { en: `Tax Ordinance (SteV)`, nl: `Belastingverordening (SteV)`, fr: `Ordonnance fiscale (SteV)` },
  'src.ahv': { en: `AHV-IV-FAK: contributions 2026`, nl: `AHV-IV-FAK: bijdragen 2026`, fr: `AHV-IV-FAK : cotisations 2026` },
  'src.lohn': { en: `Government: payroll fact sheet 2026`, nl: `Regering: fiche loonberekening 2026`, fr: `Gouvernement : fiche sur le calcul des salaires 2026` },
  'src.bpvg': { en: `Occupational Pensions Act (BPVG)`, nl: `Wet op het bedrijfspensioen (BPVG)`, fr: `Loi sur la prévoyance professionnelle (BPVG)` },
  'src.fak': { en: `FAK: family allowances`, nl: `FAK: gezinsbijslagen`, fr: `FAK : allocations familiales` },
  'src.gem': { en: `Municipal councils: surcharge decisions 2025 (Balzers shown)`, nl: `Gemeenteraden: beslissingen over de toeslag 2025 (Balzers)`, fr: `Conseils communaux : décisions de surtaxe 2025 (Balzers)` },
  'src.vat': { en: `Swiss FTA: VAT rates`, nl: `Zwitserse belastingdienst: btw-tarieven`, fr: `AFC suisse : taux de TVA` },
  'src.wages': { en: `Statistics office: wage statistics 2024`, nl: `Bureau voor de statistiek: loonstatistiek 2024`, fr: `Office de la statistique : statistique des salaires 2024` },
  'src.govPay': { en: `Civil Service Pay Act (BesG)`, nl: `Bezoldigingswet (BesG)`, fr: `Loi sur les traitements (BesG)` },

  // Known gaps and caveats
  'gap.communes2025': {
    en: `The municipal surcharges are the 2025 rates. Councils only set the 2026 rate in November 2026, so it may change (Ruggell plans 155%).`,
    nl: `De gemeentetoeslagen zijn de tarieven van 2025. De gemeenteraden leggen het tarief voor 2026 pas in november 2026 vast, dus het kan nog veranderen (Ruggell plant 155%).`,
    fr: `Les surtaxes communales sont les taux 2025. Les conseils ne fixent le taux 2026 qu'en novembre 2026, il peut donc changer (Ruggell prévoit 155%).`,
  },
  'gap.communeSource': {
    en: `Five of the rates (four municipalities at 150% and Mauren at 160%) come from news reports, not from the councils' own records.`,
    nl: `Vijf van de tarieven (vier gemeenten op 150% en Mauren op 160%) komen uit nieuwsberichten, niet uit de verslagen van de gemeenteraden zelf.`,
    fr: `Cinq des taux (quatre communes à 150% et Mauren à 160%) viennent de la presse, pas des comptes rendus des conseils eux-mêmes.`,
  },
  'gap.noCheck': {
    en: `We haven't compared any result with the tax office's own calculator.`,
    nl: `We hebben geen enkel resultaat vergeleken met de rekentool van de belastingdienst.`,
    fr: `Nous n'avons comparé aucun résultat avec le calculateur de l'administration fiscale.`,
  },
  'gap.kidAge': {
    en: `The child allowance is CHF 310 per child (CHF 360 from the third child). Children aged 10 and over also get CHF 360, but we don't calculate that. For the tax-free minimum we assume children aged 6 to 11.`,
    nl: `De kinderbijslag is CHF 310 per kind (CHF 360 vanaf het derde kind). Kinderen van 10 jaar en ouder krijgen ook CHF 360, maar dat rekenen we niet mee. Voor het belastingvrije minimum gaan we uit van kinderen van 6 tot 11 jaar.`,
    fr: `L'allocation est de CHF 310 par enfant (CHF 360 dès le troisième enfant). Les enfants de 10 ans et plus reçoivent aussi CHF 360, mais nous ne le calculons pas. Pour le minimum exonéré, nous supposons des enfants de 6 à 11 ans.`,
  },
  'gap.fak2025': {
    en: `The child allowance amounts come from the family fund's 2025 leaflet. We found no 2026 version.`,
    nl: `De bedragen van de kinderbijslag komen uit de folder van 2025 van het gezinsfonds. We vonden geen versie voor 2026.`,
    fr: `Les montants de l'allocation viennent de la brochure 2025 de la caisse familiale. Nous n'avons pas trouvé de version 2026.`,
  },
  'gap.kzSplit': {
    en: `For a couple, we count half of the child allowance as yours, no matter which of you actually gets it.`,
    nl: `Voor een koppel tellen we de helft van de kinderbijslag als de jouwe, wie van jullie hem ook echt krijgt.`,
    fr: `Pour un couple, nous comptons la moitié de l'allocation pour vous, quel que soit celui de vous deux qui la reçoit.`,
  },
  'gap.pension': {
    en: `The pension plan is at the legal minimum: 8%, split half and half. Many plans pay more, and the cost of death and disability cover isn't counted.`,
    nl: `Het pensioenplan staat op het wettelijke minimum: 8%, half om half verdeeld. Veel plannen betalen meer, en de kosten van dekking bij overlijden en invaliditeit tellen niet mee.`,
    fr: `La caisse de pension est au minimum légal : 8%, partagés moitié-moitié. Beaucoup de plans versent plus, et le coût de la couverture décès et invalidité n'est pas compté.`,
  },
  'gap.healthEr': {
    en: `Your employer's health insurance payment (CHF 180.50 a month) is counted in full at every salary. People who work part-time really get less.`,
    nl: `De bijdrage van je werkgever voor de ziekteverzekering (CHF 180,50 per maand) telt volledig mee bij elk loon. Wie deeltijds werkt, krijgt in werkelijkheid minder.`,
    fr: `La contribution de votre employeur à l'assurance maladie (CHF 180,50 par mois) est comptée en entier à tous les salaires. Les personnes à temps partiel reçoivent en réalité moins.`,
  },
  'gap.insDed': {
    en: `We always take off the full amount for insurance premiums (CHF 3,700, or CHF 7,400 for a couple), as if you pay at least that much.`,
    nl: `We trekken altijd het volle bedrag voor verzekeringspremies af (CHF 3.700, of CHF 7.400 voor een koppel), alsof je minstens zoveel betaalt.`,
    fr: `Nous retirons toujours le montant entier pour les primes d'assurance (CHF 3 700, ou CHF 7 400 pour un couple), comme si vous payiez au moins autant.`,
  },
  'gap.median': {
    en: `Half of full-time employees earn more than CHF 7,401 a month, and half earn less (2024 wage statistics, including a twelfth of the 13th month). There is no legal minimum wage, so there is no minimum line.`,
    nl: `De helft van de voltijdse werknemers verdient meer dan CHF 7.401 per maand, de andere helft minder (loonstatistiek 2024, met een twaalfde van de 13e maand). Er is geen wettelijk minimumloon, dus ook geen lijn voor het minimum.`,
    fr: `La moitié des salariés à temps plein gagnent plus de CHF 7 401 par mois, l'autre moitié moins (statistique des salaires 2024, avec un douzième du 13e mois). Il n'y a pas de salaire minimum légal, donc pas de ligne minimum.`,
  },
  'gap.govPay': {
    en: `Government pay is worked out from the legal percentages of the highest civil service salary, class 20 (CHF 240,720). We couldn't confirm whether that amount was raised for 2026, and the expense allowance isn't included.`,
    nl: `Het regeringsloon is berekend uit de wettelijke percentages van het hoogste overheidsloon, klasse 20 (CHF 240.720). We konden niet bevestigen of dat bedrag voor 2026 verhoogd werd, en de onkostenvergoeding zit er niet in.`,
    fr: `La paie du gouvernement est calculée à partir des pourcentages légaux du plus haut salaire de la fonction publique, classe 20 (CHF 240 720). Nous n'avons pas pu confirmer s'il a été relevé pour 2026, et le forfait de frais n'est pas inclus.`,
  },
  'gap.noLandtag': {
    en: `Members of parliament (Landtag) aren't shown. They are paid per meeting plus CHF 25,000 for expenses, with no fixed salary to compare.`,
    nl: `Parlementsleden (Landtag) worden niet getoond. Ze krijgen een vergoeding per zitting plus CHF 25.000 voor onkosten, zonder vast loon om mee te vergelijken.`,
    fr: `Les députés (Landtag) ne sont pas affichés. Ils sont payés par séance plus CHF 25 000 de frais, sans salaire fixe à comparer.`,
  },
  'gap.notIncl': {
    en: `Health insurance, other insurance, tax on savings and property, extra costs and cross-border workers are left out. See "What's not included".`,
    nl: `Ziekteverzekering, andere verzekeringen, belasting op spaargeld en bezit, extra kosten en grensarbeiders vallen weg. Zie "Wat niet is meegerekend".`,
    fr: `L'assurance maladie, les autres assurances, l'impôt sur l'épargne et les biens, les frais en plus et les frontaliers sont omis. Voir « Ce qui n'est pas inclus ».`,
  },
};
