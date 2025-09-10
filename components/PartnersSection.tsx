"use client"

import { motion } from 'framer-motion'
import { fadeInUp, staggerChildren } from '@/lib/motion'

const partners = Array.from({ length: 6 }).map((_, i) => ({
  id: `partner-${i + 1}`,
  name: `Partner Logo ${i + 1}`
}))

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
            Spolupráce & komunita
          </h2>
          <p className="text-deep-moss max-w-2xl mx-auto text-lg">
            Partnerství založené na důvěře, kvalitě a sdíleném respektu k vodě a přírodě.
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
              className="relative group aspect-[3/2] flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl border border-sand/40 overflow-hidden gradient-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-olive/0 via-copper/0 to-copper/0 group-hover:from-olive/5 group-hover:via-copper/10 group-hover:to-copper/5 transition-colors" />
              <span className="text-sm font-medium text-deep-moss/70 group-hover:text-deep-moss tracking-wide">
                {p.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
