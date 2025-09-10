export interface BlogPostTeaser {
  id: string
  title: string
  excerpt: string
  slug: string
  category: string
  readTime: number
  image: string
}

export const blogTeasers: BlogPostTeaser[] = [
  {
    id: 'jarni-kapri',
    title: 'Jarní awakening kaprů',
    excerpt: 'Jak rozluštit chování kaprů po zimě a najít je v časných jarních vodách',
    slug: 'jarni-awakening-kapru',
    category: 'Kaprařina',
    readTime: 8,
    image: '/images/blog/jarni-kapri.jpg'
  },
  {
    id: 'feeder-leto',
    title: 'Feeder v létě',
    excerpt: 'Tipy pro úspěšný lov na krmítko během nejteplejších měsíců roku',
    slug: 'feeder-v-lete',
    category: 'Technika',
    readTime: 6,
    image: '/images/blog/feeder-leto.jpg'
  },
  {
    id: 'catch-release',
    title: 'Etika catch & release',
    excerpt: 'Praktický průvodce šetrným zacházením s ulovkami pro jejich přežití',
    slug: 'etika-catch-release',
    category: 'Ekologie',
    readTime: 5,
    image: '/images/blog/catch-release.jpg'
  }
]
