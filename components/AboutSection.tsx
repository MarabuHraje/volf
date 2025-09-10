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
            O značce
          </h2>
          
          <div className="prose prose-lg mx-auto text-deep-moss leading-relaxed">
            <p className="text-xl md:text-2xl font-light">
              Víme, že skutečný rybolov není jen o úlovku, ale o hlubokém spojení s přírodou. 
              S více než dvacetiletou zkušeností poskytujeme individuální poradenství, kvalitní servis 
              a pomáháme vám najít tu správnou výbavu. Naším cílem je předávat tradice zodpovědného 
              rybolovu a budovat komunitu, která respektuje přírodu i jeden druhého.
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
              &ldquo;Rybolov je umění trpělivosti, respektu a porozumění přírodě. 
              Každý úlovek je příběh, každý den na vodě je učení.&rdquo;
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
