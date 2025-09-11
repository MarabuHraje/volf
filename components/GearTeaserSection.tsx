'use client'

import { motion } from 'framer-motion'
import { gearCategories } from '@/data/gearCategories'
import PlaceholderSvg from './PlaceholderSvg'

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
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-deep-moss/80 bg-sand/50 px-3 py-1 rounded-full">
            <span className="inline-block w-2 h-2 rounded-full bg-copper animate-pulse" aria-hidden />
            E‑shop je v procesu příprav a brzy bude spuštěn
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
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-video relative bg-sand/20">
                <PlaceholderSvg className="w-full h-full object-cover" aspect="video" label={category.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-forest/50 via-transparent to-transparent" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-semibold text-dark-forest mb-3">
                  {category.title}
                </h3>
                <p className="text-deep-moss leading-relaxed line-clamp-4">
                  {category.description}
                </p>
                <div className="mt-4 text-sm text-deep-moss/70">Detail brzy doplníme.</div>
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
