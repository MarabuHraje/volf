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
  // Položka o rybích chovech odstraněna – nezabýváme se tím
  {
    id: 'krmiva',
    title: 'Krmiva a doplňky',
    description: 'Kvalitní krmiva pro ryby, vitamíny a doplňky stravy pro zdravý růst a vývoj',
    icon: 'squares-2x2'
  },
  {
    id: 'pro-mazlicky',
    title: 'Pro pejsky a kočky',
    description: 'Základní potřeby a krmiva pro domácí mazlíčky – pečujeme i o ně',
    icon: 'wrench-screwdriver'
  },
  {
    id: 'konzultace',
    title: 'Konzultace revírů',
    description: 'Poradíme s taktikou, nástrahou i přípravou na konkrétní vody',
    icon: 'map'
  }
]
