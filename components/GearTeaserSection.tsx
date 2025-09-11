'use client'

import { motion } from 'framer-motion'
import { gearCategories } from '@/data/gearCategories'

interface GearTeaserSectionProps {
  enableGearTeaser?: boolean
}

export default function GearTeaserSection({ enableGearTeaser = true }: GearTeaserSectionProps) {
  if (!enableGearTeaser) return null

  return (
    <section id="vybava" className="section-padding bg-sand/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Přehled zboží a výbavy
          </h2>
          <p className="text-lg text-deep-moss max-w-2xl mx-auto">
            Náhled našeho krámku a sortimentu pro všechny styly rybolovu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gearCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-olive/20 to-deep-moss/20 flex items-center justify-center">
                {/* Placeholder for actual image */}
                <div className="text-4xl text-olive/30">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-forest/60 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-dark-forest mb-3">
                  {category.title}
                </h3>
                <p className="text-deep-moss leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-deep-moss mb-6">
            Chcete vědět více o naší výbavě?
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center px-8 py-4 border-2 border-copper text-copper font-medium rounded-lg hover:bg-copper hover:text-off-white transition-colors premium-focus"
          >
            Zjistěte více
          </a>
        </motion.div>
      </div>
    </section>
  )
}
