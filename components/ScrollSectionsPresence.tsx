"use client"
import { ReactNode, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface SectionConfig {
  id: string
  element: HTMLElement
  index: number
}

export default function ScrollSectionsPresence({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState<string | null>(null)
  const sectionsRef = useRef<SectionConfig[]>([])
  const lastScroll = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return
    const nodes = Array.from(containerRef.current.querySelectorAll('[data-scroll-section]')) as HTMLElement[]
    sectionsRef.current = nodes.map((el, i) => ({ id: el.id || `sec-${i}`, element: el, index: i }))

    const onScroll = () => {
      const y = window.scrollY
      lastScroll.current = y
      const vh = window.innerHeight
      let best: { id: string; dist: number } | null = null
      for (const s of sectionsRef.current) {
        const rect = s.element.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const dist = Math.abs(vh / 2 - center)
        if (!best || dist < best.dist) best = { id: s.id, dist }
      }
      if (best && best.id !== active) setActive(best.id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [active])

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence mode="wait">
        {/* Invisible marker just to force presence parent */}
        <motion.div key={active || 'none'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      </AnimatePresence>
      {children}
    </div>
  )
}
