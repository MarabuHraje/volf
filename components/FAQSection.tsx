"use client"
import { useState } from 'react'
import { faqData } from '@/data/faq'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="section-padding bg-off-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Často se ptáte
          </h2>
          <p className="text-deep-moss text-lg">
            Stručné odpovědi na nejčastější otázky. Další dotazy? Napište nám.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map(item => {
            const opened = openId === item.id
            return (
              <div
                key={item.id}
                className="border border-sand/40 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenId(opened ? null : item.id)}
                  className="w-full flex items-center justify-between text-left p-5 gap-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-white rounded-xl transition-all duration-200"
                  aria-expanded={opened}
                >
                  <span className="font-medium text-dark-forest font-serif text-lg">
                    {item.question}
                  </span>
                  <span className={`text-copper transition-transform ${opened ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {opened && (
                  <div className="px-5 pb-5">
                    <p className="text-deep-moss leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
