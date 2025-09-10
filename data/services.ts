export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
}

export const services: ServiceItem[] = [
  {
    id: 'poradenstvi',
    title: 'Individuální poradenství',
    description: 'Najdeme společně řešení přesně pro váš styl rybolovu a oblíbená revíry',
    icon: 'user-group'
  },
  {
    id: 'servis',
    title: 'Servis výbavy',
    description: 'Profesionální opravy a údržba prutů, navijáků i další techniky s péčí o detail',
    icon: 'wrench-screwdriver'
  },
  {
    id: 'konzultace',
    title: 'Konzultace revírů',
    description: 'Znáte nové místo? Poradíme s taktikou, nástrahou i přípravou na konkrétní vody',
    icon: 'map'
  },
  {
    id: 'sestavy',
    title: 'Příprava sestav',
    description: 'Sestavíme kompletní výbavu pro váš cílový druh ryb a způsob lovu',
    icon: 'squares-2x2'
  },
  {
    id: 'edukace',
    title: 'Edukace techniků',
    description: 'Předáváme praktické znalosti o moderních i tradičních metodách rybolovu',
    icon: 'academic-cap'
  }
]
