'use client'

import { motion } from 'framer-motion'
import { blogTeasers } from '@/data/blogTeasers'

export default function BlogTeaserSection() {
  return (
    <section id="blog" className="section-padding bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Rady a tipy
          </h2>
          <p className="text-lg text-deep-moss max-w-2xl mx-auto">
            Praktické znalosti a zkušenosti z vody přímo od expertů
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogTeasers.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-olive/20 to-deep-moss/20 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for actual image */}
                <div className="text-4xl text-olive/30">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-forest/60 via-transparent to-transparent group-hover:from-dark-forest/70 transition-colors" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-copper/90 text-off-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Read time */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-dark-forest/70 text-off-white px-2 py-1 rounded text-xs">
                    {post.readTime} min
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-dark-forest mb-3 group-hover:text-copper transition-colors">
                  {post.title}
                </h3>
                <p className="text-deep-moss leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-copper font-medium text-sm">
                  Přečíst článek
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center px-8 py-4 border-2 border-copper text-copper font-medium rounded-lg hover:bg-copper hover:text-off-white transition-colors premium-focus"
          >
            Užitečné tipy
          </a>
        </motion.div>
      </div>
    </section>
  )
}
