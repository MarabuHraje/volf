"use client"

import { motion } from 'framer-motion'

// Simple static gallery; images can be added to public/images/gallery/
const images = [
  { src: '/images/gallery/1.jpg', alt: 'Prodejna Volf – náhled' },
  { src: '/images/gallery/2.jpg', alt: 'Ukázka zboží' },
  { src: '/images/gallery/3.jpg', alt: 'Rybářská výbava' },
  { src: '/images/gallery/4.jpg', alt: 'Zákoutí prodejny' },
  { src: '/images/gallery/5.jpg', alt: 'Detail produktu' },
  { src: '/images/gallery/6.jpg', alt: 'Vitrína s vybavením' },
]

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
              <div className="aspect-[4/3] bg-sand/30 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-sm text-deep-moss/80 mt-6">Pošlete nám elektronické logo a fotografie, rádi galerii doplníme.</p>
      </div>
    </section>
  )
}
