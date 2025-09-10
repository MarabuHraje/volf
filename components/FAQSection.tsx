"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqData } from '@/data/faq'
import { fadeInUp } from '@/lib/motion'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="section-padding bg-off-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Často se ptáte
          </h2>
          <p className="text-deep-moss text-lg">
            Stručné odpovědi na nejčastější otázky. Další dotazy? Napište nám.
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqData.map(item => {
            const opened = openId === item.id
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-sand/40 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow gradient-border"
              >
                <button
                  onClick={() => setOpenId(opened ? null : item.id)}
                  className="w-full flex items-center justify-between text-left p-5 gap-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-white rounded-xl transition-all duration-200"
                  aria-expanded={opened}
                >
                  <span className="font-medium text-dark-forest font-serif text-lg">
                    {item.question}
                  </span>
                  <motion.span
                    initial={false}
                    animate={{ rotate: opened ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-copper"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {opened && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="px-5 pb-5 overflow-hidden"
                    >
                      <p className="text-deep-moss leading-relaxed text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
