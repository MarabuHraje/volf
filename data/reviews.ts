export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  email?: string
}

export interface ReviewStats {
  totalReviews: number
  averageRating: number
  ratingDistribution: { [key: number]: number }
}

// API klient (běží na klientu – používá app route /api/reviews)
function apiUrl(path: string) {
  if (typeof window === 'undefined') return path
  const base = window.location.origin
  return `${base}${path}`
}

export async function fetchReviews(): Promise<Review[]> {
  const res = await fetch(apiUrl('/api/reviews'), { cache: 'no-store' })
  if (!res.ok) throw new Error('Nepodařilo se načíst recenze')
  const data: Review[] = await res.json()
  return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function createReview(review: Omit<Review, 'id' | 'date'>): Promise<Review> {
  const res = await fetch(apiUrl('/api/reviews'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  })
  if (!res.ok) throw new Error('Nepodařilo se uložit recenzi')
  return res.json()
}

export function computeReviewStats(reviews: Review[]): ReviewStats {
  const totalReviews = reviews.length
  const averageRating = totalReviews === 0 ? 0 : reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
  const ratingDistribution: { [key: number]: number } = { 1:0,2:0,3:0,4:0,5:0 }
  for (const r of reviews) ratingDistribution[r.rating] = (ratingDistribution[r.rating] || 0) + 1
  return {
    totalReviews,
    averageRating: Math.round(averageRating * 10) / 10,
    ratingDistribution
  }
}

export function latest(reviews: Review[], limit: number = 3): Review[] {
  return reviews.slice(0, limit)
}