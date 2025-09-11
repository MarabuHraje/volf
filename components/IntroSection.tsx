'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fishSwim, staggerChildren } from '@/lib/motion'

export default function IntroSection() {
  // Odlehčená verze bez realtime 3D transformací

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-moss via-dark-forest to-dark-forest"
    >
      {/* Odlehčené statické vrstvy */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_40%,#B07A36_0%,transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_70%_60%,#3E593F_0%,transparent_70%)]" />
      
      
  {/* Jemná zrnitá textura */}
  <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=http://www.w3.org/2000/svg viewBox=0 0 100 100%3E%3Cfilter id=noise%3E%3CfeTurbulence baseFrequency=.8 numOctaves=4 stitchTiles=stitch/%3E%3C/filter%3E%3Crect width=100%25 height=100%25 filter=url(%23noise)/%3E%3C/svg%3E')" }} />

      {/* Enhanced Swimming fish with 3D depth */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { size: 160, top: '20%', duration: 45, opacity: 0.12, depth: 50 },
          { size: 120, top: '40%', duration: 38, opacity: 0.15, depth: 30 },
          { size: 90, top: '65%', duration: 52, opacity: 0.10, depth: 70 },
          { size: 70, top: '80%', duration: 35, opacity: 0.08, depth: 20 }
        ].map((fish, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ 
              top: fish.top, 
              left: 0,
              transform: `translateZ(${fish.depth}px)`,
              filter: `blur(${fish.depth * 0.02}px)`
            }}
            variants={fishSwim(fish.duration)}
            initial="initial"
            animate="animate"
          >
            <motion.svg
              width={fish.size}
              height={fish.size / 3}
              viewBox="0 0 120 40"
              className="text-emerald-100"
              style={{ opacity: fish.opacity }}
              whileHover={{ scale: 1.1, opacity: fish.opacity * 1.5 }}
              transition={{ duration: 0.3 }}
            >
              <defs>
                <linearGradient id={`fishGrad${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="50%" stopColor="rgba(176,122,54,0.6)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                </linearGradient>
              </defs>
              <path
                d="M5 20c25-18 55-18 80 0-25 18-55 18-80 0Zm80 0l30-12-8 12 8 12-30-12Z"
                fill={`url(#fishGrad${i})`}
                fillRule="evenodd"
              />
            </motion.svg>
          </motion.div>
        ))}
      </div>

      {/* Main Content with 3D Transform */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center"
      >
        <motion.div
          variants={staggerChildren(0.2)}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Premium glassmorphism card */}
          <motion.div
            variants={fadeInUp}
            className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-xl"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] font-serif font-light text-off-white mb-8 text-balance tracking-tight"
              variants={fadeInUp}
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.25)'
              }}
            >
              Moderní a přehledný rybářský servis
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-emerald-100/90 mb-10 font-light text-balance max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
              custom={1}
            >
              Přátelsky poradíme a vybavíme. Jednoduše a s respektem k přírodě.
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
        </motion.div>
      </motion.div>

      {/* Enhanced 3D Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wide">
        Scrollujte
      </div>
    </section>
  )
}
