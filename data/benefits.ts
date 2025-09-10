export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
}

export const benefits: Benefit[] = [
  {
    id: 'zkusenosti',
    title: 'Dlouholeté zkušenosti',
    description: 'Víme, co funguje v českých vodách i při cestách za rybami',
    icon: 'clock'
  },
  {
    id: 'pristup',
    title: 'Individuální přístup',
    description: 'Každý rybář je jiný, proto se věnujeme každému osobně',
    icon: 'user'
  },
  {
    id: 'kvalita',
    title: 'Prémiová kvalita',
    description: 'Spolupracujeme pouze se značkami, kterým důvěřujemy',
    icon: 'star'
  },
  {
    id: 'kompletni',
    title: 'Kompletní servis',
    description: 'Od výběru výbavy až po servis, vše na jednom místě',
    icon: 'check-circle'
  },
  {
    id: 'komunita',
    title: 'Aktivní komunita',
    description: 'Sdílíme zkušenosti a budujeme přátelství kolem rybolovu',
    icon: 'users'
  },
  {
    id: 'etika',
    title: 'Etický přístup',
    description: 'Učíme respektovat přírodu a praktikovat udržitelný rybolov',
    icon: 'heart'
  }
]
