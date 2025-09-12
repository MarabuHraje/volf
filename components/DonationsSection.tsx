"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/lib/motion'

function getDogImages() {
  // statický seznam souborů z public/images/dogs (název s mezerami je ok)
  return [
    '/images/dogs/WhatsApp Image 2025-09-12 at 08.30.21.jpeg',
    '/images/dogs/WhatsApp Image 2025-09-12 at 08.30.22.jpeg',
    '/images/dogs/WhatsApp Image 2025-09-12 at 08.30.23.jpeg',
    '/images/dogs/WhatsApp Image 2025-09-12 at 08.31.43.jpeg',
    '/images/dogs/WhatsApp Image 2025-09-12 at 08.31.43 (1).jpeg',
    '/images/dogs/WhatsApp Image 2025-09-12 at 08.31.44.jpeg',
    '/images/dogs/WhatsApp Image 2025-09-12 at 08.31.44 (1).jpeg'
  ]
}

export default function DonationsSection() {
  const images = getDogImages()
  return (
    <section id="sbirky" className="section-padding bg-gradient-to-b from-sand/10 to-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-4">
            Pejskům se věnujeme i mimo obchod
          </h2>
          <p className="text-deep-moss max-w-2xl mx-auto">
            Pejsky chováme a máme je u srdce. Níže pár momentek. Zároveň připravujeme možnost, jak společně pomoci těm, kteří to potřebují.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {images.map((src, i) => (
            <motion.div key={src} variants={fadeInUp} custom={i} className="relative aspect-square overflow-hidden rounded-xl border border-sand/40 bg-white/70">
              <Image
                src={src}
                alt={`Pejsek ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority={i < 2}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Zvýrazněný box o sbírce pro útulky */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto mt-10"
        >
          <div className="relative p-6 md:p-8 rounded-2xl border border-copper/30 bg-gradient-to-br from-amber-50 to-sand/20">
            <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(176,122,54,0.25)' }} />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-copper/15 text-copper flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4 3h16a1 1 0 011 1v5.382a1 1 0 01-.293.707l-8.5 8.5a1 1 0 01-1.414 0l-8.5-8.5A1 1 0 012 9.382V4a1 1 0 011-1zm3 3a2 2 0 100 4 2 2 0 000-4zm5 0a2 2 0 100 4 2 2 0 000-4zm5 0a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-forest mb-1">Plánujeme potravinovou sbírku</h3>
                <p className="text-deep-moss/90">
                  Připravujeme sbírku krmiv a pomůcek, které následně věnujeme útulkům pro pejsky a kočky. Termíny a možnosti zapojení zveřejníme u nás v obchodě a na sociálních sítích.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
