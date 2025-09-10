'use client'

import { motion } from 'framer-motion'

const ecologyPoints = [
  {
    id: 'setrne-postupy',
    title: 'Šetrné postupy',
    description: 'Doporučujeme techniky, které minimalizují stres ryb a poškození'
  },
  {
    id: 'catch-release',
    title: 'Catch & Release',
    description: 'Pomáháme osvojit si správné postupy pro bezpečné vrácení úlovku'
  },
  {
    id: 'ochrana-biotopu',
    title: 'Ochrana biotopů',
    description: 'Vzděláváme o významu čistých vod a zdravých ekosystémů'
  }
]

export default function EcologySection() {
  return (
    <section id="ekologie" className="section-padding bg-gradient-to-b from-olive/20 to-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Ekologie & Etika
          </h2>
          <p className="text-lg text-deep-moss leading-relaxed">
            Rybolov může být v souladu s přírodou, pokud k němu přistupujeme s respektem a znalostmi. 
            Podporujemy metody, které minimalizují zátěž pro ryby i ekosystémy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ecologyPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-olive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                {/* Leaf icon */}
                <svg className="w-8 h-8 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-dark-forest mb-4">
                {point.title}
              </h3>
              
              <p className="text-deep-moss leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border-l-4 border-olive">
            <blockquote className="text-lg italic text-deep-moss font-medium mb-4">
              &ldquo;Nejlepší rybář není ten, kdo uloví nejvíce ryb, ale ten, kdo zanechá přírodu v lepším stavu, než ji našel.&rdquo;
            </blockquote>
            <cite className="text-sm text-olive font-medium not-italic">
              — Naše motto
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
