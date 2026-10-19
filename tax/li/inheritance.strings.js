window.TAX_STRINGS = {
  title: { en: 'Liechtenstein Inheritance Tax', nl: 'Erfbelasting in Liechtenstein', fr: 'Droits de succession au Liechtenstein' },
  eyebrow: { en: 'Liechtenstein · deaths in 2026 · no inheritance tax since 2011', nl: 'Liechtenstein · overlijdens in 2026 · geen erfbelasting sinds 2011', fr: 'Liechtenstein · décès en 2026 · pas de droits de succession depuis 2011' },
  lead: {
    en: 'What you pay on what you inherit in Liechtenstein: nothing. The 2011 Tax Act abolished inheritance and gift tax for every heir and every amount. What you inherit then counts as wealth, taxed each year through your income tax.',
    nl: 'Wat je betaalt op wat je erft in Liechtenstein: niets. De belastingwet van 2011 schafte erf- en schenkbelasting af voor elke erfgenaam en elk bedrag. Wat je erft, telt daarna als vermogen, elk jaar belast via je inkomstenbelasting.',
    fr: 'Ce que vous payez sur ce dont vous héritez au Liechtenstein : rien. La loi fiscale de 2011 a supprimé les droits de succession et de donation pour tous les héritiers et tous les montants. Ce dont vous héritez compte ensuite comme fortune, imposée chaque année via l\'impôt sur le revenu.',
  },
  'rel.partner': { en: 'Spouse or registered partner', nl: 'Echtgeno(o)t(e) of geregistreerde partner', fr: 'Conjoint ou partenaire enregistré' },
  'rel.cohab': { en: 'Unmarried partner', nl: 'Ongehuwde partner', fr: 'Concubin' },
  'rel.child': { en: 'Child or stepchild', nl: 'Kind of stiefkind', fr: 'Enfant ou beau-fils/belle-fille' },
  'rel.grandchild': { en: 'Grandchild', nl: 'Kleinkind', fr: 'Petit-enfant' },
  'rel.parent': { en: 'Parent', nl: 'Ouder', fr: 'Parent' },
  'rel.sibling': { en: 'Brother or sister', nl: 'Broer of zus', fr: 'Frère ou sœur' },
  'rel.other': { en: 'Someone else (friend, charity…)', nl: 'Iemand anders (vriend, goed doel…)', fr: 'Quelqu\'un d\'autre (ami, association…)' },
  more: { en: 'More situations', nl: 'Meer situaties', fr: 'Autres situations' },
  totalTax: { en: 'Inheritance tax', nl: 'Erfbelasting', fr: 'Droits de succession' },
  otherRels: { en: 'The same amount for every heir', nl: 'Hetzelfde bedrag voor elke erfgenaam', fr: 'Le même montant pour chaque héritier' },
  relation: { en: 'Relationship', nl: 'Verwantschap', fr: 'Lien' },
  chartTitle: { en: 'Average rate by amount inherited: 0% for everyone', nl: 'Gemiddeld tarief volgens geërfd bedrag: 0% voor iedereen', fr: 'Taux moyen selon le montant hérité : 0% pour tous' },
  refEyebrow: { en: 'Rules used · deaths in 2026', nl: 'Gebruikte regels · overlijdens in 2026', fr: 'Règles utilisées · décès en 2026' },

  'line.none': { en: 'No inheritance tax since 2011', nl: 'Geen erfbelasting sinds 2011', fr: 'Pas de droits de succession depuis 2011' },
  'line.wealth': {
    en: r => `Added to your yearly taxable income as wealth (${r} notional yield)`,
    nl: r => `Elk jaar bij je belastbaar inkomen geteld als vermogen (fictief rendement ${r})`,
    fr: r => `Ajouté chaque année à votre revenu imposable comme fortune (rendement fictif ${r})`,
  },
  'line.cohab': {
    en: 'An unmarried partner inherits only through a will, but pays no tax either way.',
    nl: 'Een ongehuwde partner erft enkel via een testament, maar betaalt hoe dan ook geen belasting.',
    fr: 'Un concubin n\'hérite que par testament, mais ne paie aucun impôt dans les deux cas.',
  },

  refNoneH: { en: 'What still applies', nl: 'Wat nog wel geldt', fr: 'Ce qui s\'applique encore' },
  'who.abolished': {
    en: 'The Tax Act of 2010, in force since 1 January 2011, dropped the inheritance and gift tax of the old law. One-off receipts by inheritance, legacy or gift are not income either (SteG Art. 15). They must still be declared in the tax return.',
    nl: 'De belastingwet van 2010, van kracht sinds 1 januari 2011, schafte de erf- en schenkbelasting van de oude wet af. Eenmalige ontvangsten via erfenis, legaat of schenking zijn ook geen inkomen (SteG art. 15). Ze moeten wel in de aangifte vermeld worden.',
    fr: 'La loi fiscale de 2010, en vigueur depuis le 1er janvier 2011, a supprimé les droits de succession et de donation de l\'ancienne loi. Les héritages, legs et donations ne sont pas non plus un revenu (SteG art. 15). Ils doivent toutefois être déclarés.',
  },
  'who.income': {
    en: 'Income the inherited assets earn (interest, dividends, rent) is not taxed as such either: it is covered by the wealth tax.',
    nl: 'Inkomsten uit het geërfde vermogen (rente, dividend, huur) worden als zodanig ook niet belast: de vermogensbelasting dekt ze.',
    fr: 'Les revenus des biens hérités (intérêts, dividendes, loyers) ne sont pas imposés en tant que tels : l\'impôt sur la fortune les couvre.',
  },
  'who.wealth': {
    en: 'Wealth is taxed through income tax: 4% of your net wealth (the Sollertrag) is added to your taxable income each year, then taxed at your marginal rate plus the municipal surcharge. CHF 100,000 inherited adds CHF 4,000 to taxable income, about CHF 100 to CHF 800 of tax a year.',
    nl: 'Vermogen wordt belast via de inkomstenbelasting: 4% van je nettovermogen (de Sollertrag) wordt elk jaar bij je belastbaar inkomen geteld en belast aan je marginale tarief plus de gemeentetoeslag. CHF 100.000 geërfd voegt CHF 4.000 belastbaar inkomen toe, ongeveer CHF 100 tot CHF 800 belasting per jaar.',
    fr: 'La fortune est imposée via l\'impôt sur le revenu : 4% de la fortune nette (le Sollertrag) s\'ajoutent chaque année au revenu imposable, imposés au taux marginal plus la surtaxe communale. CHF 100 000 hérités ajoutent CHF 4 000 au revenu imposable, soit environ CHF 100 à CHF 800 d\'impôt par an.',
  },
  'who.property': {
    en: 'Inheriting land or a home triggers no property gains tax: it is deferred, and the heir takes over the deceased\'s purchase price for a later sale (SteG Art. 36).',
    nl: 'Een grond of woning erven brengt geen meerwaardebelasting op onroerend goed mee: die wordt uitgesteld, en bij een latere verkoop neemt de erfgenaam de aankoopprijs van de overledene over (SteG art. 36).',
    fr: 'Hériter d\'un terrain ou d\'un logement ne déclenche pas d\'impôt sur les gains immobiliers : il est différé, et l\'héritier reprend le prix d\'achat du défunt en cas de vente (SteG art. 36).',
  },
  'who.foundation': {
    en: 'Distributions from a foundation or trust to its beneficiaries are taxable income, unless the assets were already taxed as the beneficiary\'s wealth.',
    nl: 'Uitkeringen van een stichting of trust aan begunstigden zijn belastbaar inkomen, tenzij het vermogen al als vermogen van de begunstigde belast werd.',
    fr: 'Les distributions d\'une fondation ou d\'un trust aux bénéficiaires sont un revenu imposable, sauf si les biens étaient déjà imposés comme fortune du bénéficiaire.',
  },
  'who.insurance': {
    en: 'A private life insurance with a surrender value paid out at death is tax-free. Pension capital and survivors\' pensions from AHV or a pension fund are taxed as income.',
    nl: 'Een private levensverzekering met afkoopwaarde die bij overlijden uitkeert, is belastingvrij. Pensioenkapitaal en nabestaandenpensioenen van de AHV of een pensioenfonds worden belast als inkomen.',
    fr: 'Une assurance-vie privée rachetable versée au décès est exonérée. Les capitaux de prévoyance et rentes de survivant de l\'AHV ou d\'une caisse de pension sont imposés comme revenu.',
  },
  'who.abroad': {
    en: 'If the deceased lived abroad, or left property there, that country\'s inheritance tax can still apply (Austria and Switzerland next door: none in Austria, cantonal tax in most Swiss cantons for distant heirs).',
    nl: 'Woonde de overledene in het buitenland, of liet die daar bezittingen na, dan kan de erfbelasting van dat land nog gelden (buren: geen in Oostenrijk, kantonale belasting in de meeste Zwitserse kantons voor verre erfgenamen).',
    fr: 'Si le défunt vivait à l\'étranger, ou y laisse des biens, les droits de succession de ce pays peuvent s\'appliquer (voisins : aucun en Autriche, impôt cantonal dans la plupart des cantons suisses pour les héritiers éloignés).',
  },
  refNote: {
    en: 'Before 2011 Liechtenstein charged inheritance and gift tax by relationship. Like Austria and Sweden, it now has none; the wealth tax does the work instead.',
    nl: 'Vóór 2011 hief Liechtenstein erf- en schenkbelasting volgens verwantschap. Net als Oostenrijk en Zweden heeft het er nu geen; de vermogensbelasting neemt die rol over.',
    fr: 'Avant 2011, le Liechtenstein prélevait des droits de succession et de donation selon le lien de parenté. Comme l\'Autriche et la Suède, il n\'en a plus ; l\'impôt sur la fortune en tient lieu.',
  },

  'src.steg': { en: 'Tax Act (SteG) Art. 5, 15, 36', nl: 'Belastingwet (SteG) art. 5, 15, 36', fr: 'Loi fiscale (SteG) art. 5, 15, 36' },
  'src.stev': { en: 'Tax Ordinance (SteV)', nl: 'Belastingverordening (SteV)', fr: 'Ordonnance fiscale (SteV)' },
  disclaimer: {
    en: 'This is an estimate for orientation only. Check with the Steuerverwaltung or a lawyer for your estate.',
    nl: 'Dit is enkel een schatting ter oriëntatie. Vraag de Steuerverwaltung of een jurist naar jouw nalatenschap.',
    fr: 'Ceci n\'est qu\'une estimation indicative. Renseignez-vous auprès de la Steuerverwaltung ou d\'un juriste pour votre succession.',
  },
};
