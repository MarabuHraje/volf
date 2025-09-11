'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="o-znacce" className="section-padding bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-8">
            O nás
          </h2>
          
          <div className="prose prose-lg mx-auto text-deep-moss leading-relaxed">
            <p className="text-xl md:text-2xl font-light">
              Jsme pár z Českých Budějovic se srdcem pro zvířata a rybářský sport. 
              V obchodě i u vody se s vámi dělíme o zkušenosti a poradíme s výběrem výbavy, která vám sedne. 
              Děláme věci jednoduše, s úctou k přírodě a s důrazem na osobní přístup.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-r from-olive/10 to-deep-moss/10 rounded-2xl border-l-4 border-copper"
          >
            <blockquote className="text-lg italic text-deep-moss font-medium">
              &ldquo;Rybolov je o radosti, klidu a respektu k vodě. Rádi vás tím provedeme.&rdquo;
            </blockquote>
            <cite className="block mt-4 text-sm text-olive font-medium not-italic">
              — Filozofie Volf
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
