'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { fadeInUp, fadeIn, fishSwim, staggerChildren } from '@/lib/motion'
import { useEffect, useState } from 'react'
import InteractiveParticles from './InteractiveParticles'
import { ParallaxLayer } from './Parallax'

export default function IntroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    mouseX.set((e.clientX - rect.left - centerX) / centerX)
    mouseY.set((e.clientY - rect.top - centerY) / centerY)
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
      style={{
        background: 'radial-gradient(ellipse at top, #1a3b2e 0%, #0f2419 35%, #050b0a 100%)'
      }}
    >
      {/* Animated 3D Background Layers */}
      <motion.div 
        className="absolute inset-0"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Dynamic parallax layers */}
        <ParallaxLayer strength={0.1} className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_20%,rgba(176,122,54,0.15),transparent_120deg)] animate-spin" 
               style={{ animationDuration: '60s' }} />
        </ParallaxLayer>
        
        <ParallaxLayer strength={0.2} className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(62,89,63,0.3),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_60%,rgba(176,122,54,0.2),transparent)]" />
        </ParallaxLayer>

        {/* 3D Floating Orbs */}
        {isLoaded && [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${15 + (i * 70) / 12}%`,
              top: `${10 + (i * 80) / 12}%`,
              width: `${20 + i * 8}px`,
              height: `${20 + i * 8}px`,
              background: `radial-gradient(circle at 30% 30%, 
                rgba(255,255,255,${0.1 + i * 0.02}), 
                rgba(176,122,54,${0.05 + i * 0.01}), 
                transparent 70%)`,
              filter: 'blur(1px)',
              translateZ: `${i * 20}px`
            }}
            animate={{
              y: [-20 - i * 2, 20 + i * 2, -20 - i * 2],
              x: [-10, 10, -10],
              scale: [1, 1.2 + i * 0.1, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>
      
      {/* Ambient parallax layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_40%,#B07A36_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_70%_60%,#3E593F_0%,transparent_65%)]" />
      </div>

      {/* Interactive Particle System */}
      <InteractiveParticles />

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
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
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
            className="backdrop-blur-md bg-gradient-to-b from-white/10 to-white/5 rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl"
            whileHover={{ 
              scale: 1.02,
              rotateX: 2,
              rotateY: 1,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-serif font-light text-white mb-8 text-balance tracking-tight"
              variants={fadeInUp}
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Rybolov s respektem k přírodě
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-emerald-100/90 mb-10 font-light text-balance max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
              custom={1}
            >
              Expertní poradenství a prémiová výbava pro váš úspěch
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
              custom={2}
            >
              <motion.a 
                href="#sluzby" 
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Naše služby</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a 
                href="#kontakt" 
                className="group relative px-8 py-4 border-2 border-white/30 text-white font-medium rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Napište nám
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced 3D Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={6}
        whileHover={{ scale: 1.2, rotateX: 10 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative">
          <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center items-start p-1.5 backdrop-blur-sm bg-white/5">
            <motion.div
              className="w-2 h-4 bg-gradient-to-b from-white to-emerald-200 rounded-full shadow-lg"
              animate={{ 
                y: [3, 22, 3], 
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 w-8 h-14 border border-white/20 rounded-full blur-sm opacity-60" />
        </div>
        
        {/* Floating text hint */}
        <motion.p 
          className="text-white/70 text-sm mt-3 font-light tracking-wide"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Objevte více
        </motion.p>
      </motion.div>
    </section>
  )
}
