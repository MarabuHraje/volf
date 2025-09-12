"use client"

import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/lib/motion'
import { services, type ServiceItem } from '@/data/services'
import TiltCard from './TiltCard'

// Heroicons jako inline SVG (alternativa k balíčku)
const icons = {
  'user-group': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.196-2.196M17 20H7m10 0v-2c0-1.654-.686-3.159-1.852-4.176M7 20H2v-2a3 3 0 015.196-2.196M7 20v-2m5-4a3 3 0 110-6 3 3 0 010 6zm4 2c-.398-.616-.902-1.186-1.479-1.694C16.074 12.738 17 11.942 17 11a4 4 0 00-8 0c0 .942.926 1.738 2.479 2.306C10.902 13.814 10.398 14.384 10 15" />
    </svg>
  ),
  'wrench-screwdriver': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  'map': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  'squares-2x2': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  'academic-cap': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  )
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="relative h-full"
    >
      <TiltCard 
        className="group relative bg-gradient-to-br from-white via-white/95 to-emerald-50/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 hover:border-emerald-200/60 overflow-hidden backdrop-blur-sm h-full"
        intensity={0.3}
        scale={1.03}
        rotationRange={8}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-emerald-600/10 via-teal-500/5 to-emerald-400/15 rounded-2xl" />
        
        {/* Animated glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
        
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-700 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
            {icons[service.icon as keyof typeof icons]}
          </div>
          <h3 className="text-xl font-serif font-semibold text-dark-forest mb-4 group-hover:text-emerald-700 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-deep-moss leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
            {service.description}
          </p>
        </div>
      </TiltCard>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
  <section id="sluzby" className="section-padding bg-sand/10 relative overflow-hidden" aria-labelledby="sluzby-heading">
      <div className="blur-orb w-72 h-72 -top-10 -left-10" />
      <div className="blur-orb alt w-80 h-80 bottom-0 -right-10" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="sluzby-heading" className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Naše služby
          </h2>
          <p className="text-lg text-deep-moss max-w-2xl mx-auto">
            Jsme obchod s výbavou pro rybáře a základními potřebami pro mazlíčky. Poradíme s výběrem.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* CTA na kontakt můžeme ponechat jen v hlavičce a v sekci O nás */}
      </div>
    </section>
  )
}
