"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Review {
  id: string
  name: string
  rating: number
  message: string
  date: string
}

const initialReviews: Review[] = [
  { id: 'r1', name: 'Petr', rating: 5, message: 'Skvělá rada s výběrem prutu. Doporučuji!', date: '2025-08-12' },
  { id: 'r2', name: 'Lenka', rating: 5, message: 'Milý přístup a rychlá domluva.', date: '2025-07-03' },
]

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !message) return
    setSubmitting(true)
    // Simulated submit – in production wire to API / backend / external form service
    await new Promise(r => setTimeout(r, 600))
    setReviews(prev => [{ id: Math.random().toString(36).slice(2), name, rating, message, date: new Date().toISOString().slice(0,10) }, ...prev])
    setName('')
    setRating(5)
    setMessage('')
    setSubmitting(false)
  }

  return (
    <section id="hodnoceni" className="section-padding bg-off-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-4">Zkušenosti a hodnocení</h2>
          <p className="text-deep-moss">Budeme rádi, když se podělíte o svou zkušenost s námi.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.form onSubmit={submit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow border border-sand/40">
            <div className="mb-4">
              <label className="block text-sm font-medium text-deep-moss mb-1">Jméno</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 bg-sand/10 border border-sand/50 rounded-lg premium-focus" placeholder="Vaše jméno" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-deep-moss mb-1">Hodnocení</label>
              <div className="flex items-center gap-2">
                {[1,2,3,4,5].map(star => (
                  <button key={star} type="button" onClick={() => setRating(star)} aria-label={`${star} hvězdiček`} className={`text-2xl ${star <= rating ? 'text-copper' : 'text-sand'}`}>★</button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-deep-moss mb-1">Zpráva</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} className="w-full px-4 py-3 bg-sand/10 border border-sand/50 rounded-lg premium-focus resize-none" placeholder="Napište krátkou zkušenost" />
            </div>
            <button type="submit" disabled={submitting} className="btn-primary w-full">
              {submitting ? 'Odesílám…' : 'Odeslat hodnocení'}
            </button>
            <p className="text-xs text-deep-moss/70 mt-3">Odesláním souhlasíte se zveřejněním jména a textu. Kontakty nezveřejňujeme.</p>
          </motion.form>

          <div className="space-y-4">
            {reviews.map((r) => (
              <motion.div key={r.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-5 shadow border border-sand/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-dark-forest">{r.name}</div>
                  <div className="text-copper">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                </div>
                <p className="text-deep-moss leading-relaxed">{r.message}</p>
                <div className="text-xs text-deep-moss/60 mt-2">{new Date(r.date).toLocaleDateString('cs-CZ')}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
