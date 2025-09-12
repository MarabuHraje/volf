"use client"

import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/lib/motion'

const partners = [
  { id: 'jogan', name: 'JoGi', src: '/images/suppliers/JoGi_x.png' },
  // Pro toto logo nastavíme vyšší max-height a plnou opacitu kvůli čitelnosti
  { id: 'f16', name: 'F16 Brand', src: '/images/suppliers/f16f47d5c7d275f33a9d95de6787404f.png', imgClass: 'max-h-20 md:max-h-24 lg:max-h-28 opacity-100 grayscale-0' },
  { id: 'jk-animals', name: 'JK Animals', src: '/images/suppliers/jk-animals-logo-velke.svg' },
  { id: 'juko', name: 'Juko', src: '/images/suppliers/juko-logo.png' },
  { id: 'rufruf', name: 'RufRuf', src: '/images/suppliers/rufruf-logo-green-animated.svg' },
  { id: 'shop-logo', name: 'Potřeby Volf', src: '/images/suppliers/logo.svg' }
]

export default function PartnersSection() {
  return (
    <section id="partneri" className="section-padding bg-gradient-to-b from-off-white to-sand/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Naši dodavatelé
          </h2>
          <p className="text-deep-moss max-w-2xl mx-auto text-lg">
            Ověřené značky, které u nás najdete. Loga níže jsou zobrazená jednotně pro čistý vzhled.
          </p>
        </motion.div>
        <motion.div
          variants={staggerChildren(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
      {partners.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeInUp}
              custom={i}
        className="relative group aspect-[3/2] flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl border border-sand/50 overflow-hidden"
            >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.03)_0,rgba(0,0,0,0.03)_10px,transparent_10px,transparent_20px)]" />
        <div className="relative z-10 p-4 w-full h-full flex items-center justify-center">
          {/* Konsistentní zobrazení: box pro logo, max-height a grayscale hover */}
          {/* Pro různé formáty (SVG/PNG/WebP) použijeme img, aby seděla barva/loga */}
          <img
            src={p.src}
            alt={p.name}
            className={`w-auto object-contain filter transition-all duration-300 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 ${p.imgClass ?? 'max-h-10 md:max-h-12 lg:max-h-14'}`}
            loading="lazy"
          />
        </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
