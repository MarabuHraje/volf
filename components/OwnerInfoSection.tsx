"use client"

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/siteConfig'

export default function OwnerInfoSection() {
  return (
    <section id="o-nas" className="py-20 bg-gradient-to-b from-off-white to-sand/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm border border-sand/30 rounded-2xl p-8 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-serif text-dark-forest">{siteConfig.owner?.name}</h2>
              <p className="text-deep-moss">{siteConfig.owner?.role}</p>
              <p className="text-deep-moss/90">{siteConfig.tagline}</p>
              <div className="pt-4 grid sm:grid-cols-2 gap-4 text-deep-moss">
                <div>
                  <div className="text-sm text-deep-moss/70">Adresa</div>
                  <div className="font-medium">{siteConfig.address.street}</div>
                  <div className="">{siteConfig.address.city} {siteConfig.address.zip}</div>
                </div>
                <div>
                  <div className="text-sm text-deep-moss/70">Otevřeno</div>
                  <div className="font-medium">{siteConfig.openingHours}</div>
                </div>
                <div>
                  <div className="text-sm text-deep-moss/70">Telefon</div>
                  <a className="font-medium text-copper hover:underline" href={siteConfig.telephoneHref}>{siteConfig.telephone}</a>
                </div>
                <div>
                  <div className="text-sm text-deep-moss/70">E‑mail</div>
                  <a className="font-medium text-copper hover:underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
                </div>
              </div>

              <div className="pt-6">
                <div className="text-sm text-deep-moss/70 mb-2">Značky, které u nás najdete</div>
                <div className="flex flex-wrap gap-2">
                  {['#delphin', '#jetfish', '#carpservisvaclavik'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-sand/50 text-deep-moss text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
