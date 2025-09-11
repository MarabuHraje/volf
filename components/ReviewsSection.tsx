'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/lib/motion'
import { useState, useEffect } from 'react'
import { Review, ReviewStats, fetchReviews, createReview, computeReviewStats, latest } from '@/data/reviews'

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [stats, setStats] = useState<ReviewStats | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '', email: '' })

  useEffect(() => {
    (async () => {
      const all = await fetchReviews()
      setReviews(latest(all))
      setStats(computeReviewStats(all))
    })()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.comment) return
    // Uloží na server (JSON soubor přes API) a hned zobrazí na stránce
    const saved = await createReview({
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      email: formData.email
    })
    // Přepnout na zobrazení všech a přidat novou recenzi
    setShowAll(true)
    setReviews((prev) => [saved, ...prev])
    // Přepočítat statistiky z aktuálních dat na serveru
    const all = await fetchReviews()
    setReviews(all)
    setStats(computeReviewStats(all))
    setFormData({ name: '', rating: 5, comment: '', email: '' })
    setShowForm(false)
  }

  const loadAllReviews = async () => {
    const all = await fetchReviews()
    setReviews(all)
    setShowAll(true)
  }

  const StarRating = ({ rating, size = 'w-5 h-5' }: { rating: number; size?: string }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${size} ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )

  if (!stats) return <div>Načítám...</div>

  return (
    <section id="hodnoceni" className="py-20 bg-gradient-to-b from-off-white to-sand/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerChildren(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-serif text-dark-forest mb-6"
          >
            Zkušenosti a hodnocení
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-deep-moss text-lg mb-8"
          >
            Budeme rádi, když se podělíte o svou zkušenost s námi.
          </motion.p>

          {/* Statistiky */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center items-center gap-8 mb-8 p-6 bg-white/80 rounded-2xl backdrop-blur-sm border border-sand/30 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-copper">{stats.averageRating}</div>
              <StarRating rating={Math.round(stats.averageRating)} />
              <div className="text-sm text-deep-moss mt-1">Průměr</div>
            </div>
            <div className="w-px h-12 bg-sand/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-copper">{stats.totalReviews}</div>
              <div className="text-sm text-deep-moss">Celkem recenzí</div>
            </div>
          </motion.div>

          {/* Tlačítka */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-copper text-white px-6 py-3 rounded-xl hover:bg-copper/90 transition-colors"
            >
              Napsat recenzi
            </button>
            {!showAll && stats.totalReviews > 3 && (
              <button
                onClick={loadAllReviews}
                className="border-2 border-copper text-copper px-6 py-3 rounded-xl hover:bg-copper/10 transition-colors"
              >
                Zobrazit všech {stats.totalReviews} recenzí
              </button>
            )}
          </div>
        </motion.div>

        {/* Formulář pro přidání recenze */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-12 p-6 bg-white rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Jméno *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper/50 focus:border-copper"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hodnocení *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className={`w-8 h-8 ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400`}
                    >
                      <svg className="w-full h-full fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Komentář *</label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper/50 focus:border-copper"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-copper text-white px-6 py-2 rounded-lg hover:bg-copper/90"
                >
                  Odeslat recenzi
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 px-6 py-2 hover:text-gray-700"
                >
                  Zrušit
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Seznam recenzí */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={fadeInUp}
              custom={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-sand/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center text-copper font-semibold">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-dark-forest">{review.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={review.rating} size="w-4 h-4" />
                    <span className="text-sm text-deep-moss">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-deep-moss leading-relaxed">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
