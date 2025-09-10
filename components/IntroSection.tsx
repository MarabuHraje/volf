'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, fishSwim, staggerChildren } from '@/lib/motion'

export default function IntroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-forest to-deep-moss">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-forest/80 via-transparent to-dark-forest/40" />
      </div>
      
      {/* Ambient parallax layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_40%,#B07A36_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_70%_60%,#3E593F_0%,transparent_65%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-sand/30 rounded-full"
            style={{
              left: `${10 + (i * 100) / 8}%`,
              top: `${20 + (i * 60) / 8}%`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              y: [-18, 18, -18],
              opacity: [0.15, 0.6, 0.15],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Swimming fish silhouettes */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { size: 140, top: '25%', duration: 40, opacity: 0.07 },
          { size: 90, top: '55%', duration: 32, opacity: 0.08 },
          { size: 70, top: '70%', duration: 50, opacity: 0.05 }
        ].map((fish, i) => (
          <motion.svg
            key={i}
            width={fish.size}
            height={fish.size / 3}
            viewBox="0 0 120 40"
            className="absolute text-off-white"
            style={{ top: fish.top, left: 0, opacity: fish.opacity }}
            variants={fishSwim(fish.duration)}
            initial="initial"
            animate="animate"
          >
            <path
              d="M5 20c25-18 55-18 80 0-25 18-55 18-80 0Zm80 0l30-12-8 12 8 12-30-12Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </motion.svg>
        ))}
      </div>

  <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          variants={staggerChildren(0.15)}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-serif font-light text-off-white mb-6 text-balance tracking-tight"
            variants={fadeInUp}
          >
            Rybolov s respektem k přírodě
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-sand/90 mb-12 font-light text-balance max-w-3xl mx-auto"
            variants={fadeInUp}
            custom={1}
          >
            Expertní poradenství a prémiová výbava pro váš úspěch
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            variants={fadeInUp}
            custom={2}
          >
            <a href="#sluzby" className="btn-primary">
              <span>Naše služby</span>
            </a>
            <a href="#kontakt" className="btn-outline">
              Napište nám
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={6}
      >
        <div className="w-7 h-12 border-2 border-sand/40 rounded-full flex justify-center items-start p-1">
          <motion.div
            className="w-1.5 h-3 bg-sand/70 rounded-full"
            animate={{ y: [2, 18, 2], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
