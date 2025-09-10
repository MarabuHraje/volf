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
    image: '/images/gear/kaprarina.jpg'
  },
  {
    id: 'feeder',
    title: 'Feederové sestavy',
    description: 'Precizní technika pro selektivní lov na krmítko',
    image: '/images/gear/feeder.jpg'
  },
  {
    id: 'spinning',
    title: 'Spinning',
    description: 'Aktivní lov dravců s umělými nástrahami',
    image: '/images/gear/spinning.jpg'
  },
  {
    id: 'muskarina',
    title: 'Muškařina',
    description: 'Tradiční umění lovu na umělou mouchu',
    image: '/images/gear/muskarina.jpg'
  },
  {
    id: 'ledove',
    title: 'Ledové rybaření',
    description: 'Speciální vybavení pro zimní výzvy',
    image: '/images/gear/ledove.jpg'
  },
  {
    id: 'doplnky',
    title: 'Doplňky',
    description: 'Kvalitní pomocníci pro pohodlí a úspěch na vodě',
    image: '/images/gear/doplnky.jpg'
  }
]
