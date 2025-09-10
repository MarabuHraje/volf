"use client"
import { useRef, useEffect, useState } from 'react'

interface ParallaxLayerProps {
  strength?: number // multiplier
  className?: string
  children?: React.ReactNode
  as?: keyof JSX.IntrinsicElements
}

// Hook vrací translateY pro danou vrstvu dle scrollu
function useParallax(strength: number = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handle = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const viewportH = window.innerHeight
      // Normalizace: centrum elementu vůči středu viewportu (-1 .. 1)
      const centerDelta = (rect.top + rect.height / 2 - viewportH / 2) / (viewportH / 2)
      setOffset(centerDelta * strength * -50) // px posun
    }
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }
  }, [strength])

  return { ref, offset }
}

export function ParallaxLayer({ strength = 0.2, className = '', children }: ParallaxLayerProps) {
  const { ref, offset } = useParallax(strength)
  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      data-parallax
    >
      {children}
    </div>
  )
}

export default ParallaxLayer