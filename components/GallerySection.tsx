"use client"

import { motion } from 'framer-motion'
// Ručně sestavený seznam fotek, které jsme zkopírovali do public/images/gallery
const images = [
  'Obrázek WhatsApp, 2025-09-10 v 12.00.32_f381409a.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.33_bc04e6f1.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.34_ee97ba6e.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.35_80ef19a0.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.36_49416dc7.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.36_8ecc25fe.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.37_73a621d5.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.40_7c3f78a7.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.41_0580c6ed.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.41_ecc5cb5a.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.42_26716bc2.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.42_3371c203.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.43_cc0d5f75.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.44_4bf77da4.jpg',
  'Obrázek WhatsApp, 2025-09-10 v 12.00.45_4699b09f.jpg',
].map((name) => ({ src: `/images/gallery/${name}`, alt: 'Galerie – prodejna a vybavení' }))

export default function GallerySection() {
  return (
    <section id="galerie" className="section-padding bg-sand/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-4">Galerie</h2>
          <p className="text-deep-moss">Náhled na naši prodejnu a obecný přehled zboží.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.a
              href={img.src}
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="block group overflow-hidden rounded-xl bg-white shadow hover:shadow-md border border-sand/50"
            >
              <div className="aspect-[4/3] bg-sand/30 relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-sm text-deep-moss/80 mt-6">Galerie je průběžně doplňována dalšími fotografiemi.</p>
      </div>
    </section>
  )
}
