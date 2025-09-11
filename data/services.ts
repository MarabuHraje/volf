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
    id: 'chovatelstvi',
    title: 'Chovatelské služby',
    description: 'Komplexní péče o rybí chovy, projektování jezírek a poradenství při zakládání nových chovů',
    icon: 'academic-cap'
  },
  {
    id: 'krmiva',
    title: 'Krmiva a doplňky',
    description: 'Kvalitní krmiva pro ryby, vitamíny a doplňky stravy pro zdravý růst a vývoj',
    icon: 'squares-2x2'
  },
  {
    id: 'technika',
    title: 'Chovatelská technika',
    description: 'Filtrace, provzdušňování, UV lampy a další technické vybavení pro chovy',
    icon: 'wrench-screwdriver'
  },
  {
    id: 'konzultace',
    title: 'Konzultace revírů',
    description: 'Poradíme s taktikou, nástrahou i přípravou na konkrétní vody',
    icon: 'map'
  }
]
