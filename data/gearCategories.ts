export interface GearCategory {
  id: string
  title: string
  description: string
  image: string
}

export const gearCategories: GearCategory[] = [
  {
    id: 'kaprarina',
    title: 'Kaprařina',
    description: 'Specializovaná výbava pro lov největších sladkovodních bojovníků',
    image: '/images/products/WhatsApp Image 2025-09-13 at 09.28.14.jpeg'
  },
  {
    id: 'feeder',
    title: 'Feederové sestavy',
    description: 'Precizní technika pro selektivní lov na krmítko',
    image: ''
  },
  {
    id: 'spinning',
    title: 'Spinning',
    description: 'Aktivní lov dravců s umělými nástrahami',
    image: '/images/products/WhatsApp Image 2025-09-13 at 09.28.15.jpeg'
  },
  {
    id: 'doplnky',
    title: 'Doplňky',
    description: 'Kvalitní pomocníci pro pohodlí a úspěch na vodě',
    image: '/images/products/WhatsApp Image 2025-09-13 at 09.28.16.jpeg'
  }
]
