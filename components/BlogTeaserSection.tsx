"use client"

import { motion } from 'framer-motion'
import { blogTeasers } from '@/data/blogTeasers'
import { fadeInUp, staggerChildren } from '@/lib/motion'

export default function BlogTeaserSection() {
  return (
  <section id="blog" className="section-padding relative overflow-hidden bg-gradient-to-b from-sand/10 via-off-white to-off-white">
      <div className="blur-orb w-[32rem] h-[32rem] top-10 left-10" />
      <div className="blur-orb alt w-[36rem] h-[36rem] -bottom-20 right-0" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-6">
            Rady & články
          </h2>
          <p className="text-lg text-deep-moss max-w-2xl mx-auto">
            Postřehy, tipy a inspirace z vody i ze servisu. Praktické know-how pro váš růst.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {blogTeasers.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              custom={index}
              className="relative group rounded-2xl overflow-hidden bg-white border border-sand/50 hover:border-copper/60 transition-all duration-500 hover:shadow-[0_8px_40px_-10px_rgba(176,122,54,0.35)] cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(176,122,54,0.35),rgba(62,89,63,0.25),rgba(15,42,34,0.6))] opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_30%_40%,rgba(176,122,54,0.35),transparent_60%)]" />
                <div className="absolute top-3 left-3">
                  <span className="bg-copper/90 text-off-white px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-dark-forest/70 text-off-white px-2 py-1 rounded text-[11px] font-medium tracking-wide">
                    {post.readTime} min
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-serif font-semibold text-dark-forest mb-3 group-hover:text-copper transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-deep-moss leading-relaxed mb-5 line-clamp-4 min-h-[5.5rem]">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-copper font-medium text-sm mt-auto group/link">
                  <span className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-copper/40 after:scale-x-0 group-hover/link:scale-x-100 after:origin-left after:transition-transform after:duration-500">Číst více</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
