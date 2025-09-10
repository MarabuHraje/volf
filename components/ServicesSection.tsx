"use client"

import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/lib/motion'
import { services, type ServiceItem } from '@/data/services'

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
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-sand/20 hover:border-copper/40 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-copper/5 via-olive/5 to-copper/10" />
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="w-16 h-16 bg-copper/10 rounded-xl flex items-center justify-center mb-6 text-copper group-hover:scale-110 transition-transform">
          {icons[service.icon as keyof typeof icons]}
        </div>
        <h3 className="text-xl font-serif font-semibold text-dark-forest mb-4 group-hover:text-copper transition-colors">
          {service.title}
        </h3>
        <p className="text-deep-moss leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="sluzby" className="section-padding bg-gradient-to-b from-sand/10 to-off-white relative overflow-hidden">
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
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Naše služby
          </h2>
          <p className="text-lg text-deep-moss max-w-2xl mx-auto">
            Poskytujeme komplexní služby pro rybolov s důrazem na kvalitu a individuální přístup
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#kontakt" className="btn-primary">Domluvit konzultaci</a>
        </motion.div>
      </div>
    </section>
  )
}
