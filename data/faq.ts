export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

export const faqData: FAQItem[] = [
  {
    id: 'zacatecnici',
    question: 'Poskytujete poradenství i začátečníkům?',
    answer: 'Samozřejmě, rádi pomůžeme s prvními kroky i výběrem základní výbavy.',
    category: 'Poradenství'
  },
  {
    id: 'oprava-starsi',
    question: 'Opravujete i starší pruty a navijáky?',
    answer: 'Ano, specializujeme se i na renovace klasických a historických kusů.',
    category: 'Servis'
  },
  {
    id: 'zapujcka',
    question: 'Lze si u vás zapůjčit výbavu na zkoušku?',
    answer: 'V rámci konzultace můžete některé komponenty vyzkoušet před rozhodnutím.',
    category: 'Poradenství'
  },
  {
    id: 'kurzy',
    question: 'Organizujete kurzy rybaření?',
    answer: 'Poskytujeme individuální lekce a konzultace přímo na revíru.',
    category: 'Edukace'
  },
  {
    id: 'znacky-zacatecnici',
    question: 'Jaké značky doporučujete pro začátečníky?',
    answer: 'Vybíráme podle konkrétního případu, záleží na cílovém druhu ryb a rozpočtu.',
    category: 'Poradenství'
  },
  {
    id: 'oteviraci-doba',
    question: 'Máte otevřeno o víkendech?',
    answer: 'Otevírací doba je {{OPENING_HOURS}}, pro konzultace lze domluvit i jiný termín.',
    category: 'Provoz'
  },
  {
    id: 'servis-jinezacky',
    question: 'Poskytujete servis i pro jiné značky?',
    answer: 'Ano, opravujeme výbavu všech dostupných značek podle možností.',
    category: 'Servis'
  },
  {
    id: 'doba-servisu',
    question: 'Jak dlouho trvá servis prutu nebo navijáku?',
    answer: 'Standardní servis 5-10 dnů, složitější opravy podle dostupnosti dílů.',
    category: 'Servis'
  }
]
