"use client"
import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

/**
 * AmbientBackground
 * Interaktivní vrstvy reagující na pohyb myši a čas (jemné barevné posuny).
 * Používá CSS proměnné pro plynulý gradient.
 */
export default function AmbientBackground() {
  const rafRef = useRef<number>()
  const cursor = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    const root = document.documentElement
    let t = 0

    const onPointerMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      root.style.setProperty('--pointer-x', x.toString())
      root.style.setProperty('--pointer-y', y.toString())
      if (cursor.current) {
        cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const loop = () => {
      t += 0.005
      // Jemná sinusová modulace barev
      root.style.setProperty('--ambient-shift-a', (50 + Math.sin(t) * 50).toFixed(2) + '%')
      root.style.setProperty('--ambient-shift-b', (50 + Math.cos(t * 0.7) * 50).toFixed(2) + '%')
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    window.addEventListener('pointermove', onPointerMove)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamický multi-gradient reagující na pozici myši */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_calc(var(--pointer-x,0.5)*100%)_calc(var(--pointer-y,0.5)*100%),rgba(176,122,54,0.20),transparent_55%)]" />
      <div className="absolute inset-0 mix-blend-soft-light opacity-60 animate-gradient-x bg-[linear-gradient(120deg,#0F2A22,#12352A,#3E593F,#0F2A22)] bg-[length:300%_300%]" />
      {/* Jemné plovoucí organické blob vrstvy */}
      <motion.div
        animate={controls}
        className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full opacity-30 blur-[100px] bg-gradient-to-br from-copper/25 via-olive/20 to-deep-moss/40 animate-pulse-glow" />
      <motion.div
        animate={controls}
        className="absolute bottom-[-20rem] right-[-10rem] w-[50rem] h-[50rem] rounded-full opacity-25 blur-[120px] bg-gradient-to-tl from-olive/30 via-deep-moss/30 to-copper/20" />
      {/* Reaktivní kurzor - zvýraznění */}
      <div ref={cursor} className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-copper/20 backdrop-blur-sm ring-1 ring-copper/40 transition-transform duration-200 pointer-events-none hidden md:block" />
    </div>
  )
}
