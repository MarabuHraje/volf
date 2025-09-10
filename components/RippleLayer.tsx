"use client"
import { useEffect, useRef } from 'react'

const MAX_RIPPLES = 12

export default function RippleLayer() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return
      const el = document.createElement('span')
      el.className = 'ripple-dot'
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
      containerRef.current.appendChild(el)
      // cleanup when animation ends
      el.addEventListener('animationend', () => el.remove())
      // Hard cap
      const children = containerRef.current.querySelectorAll('.ripple-dot')
      if (children.length > MAX_RIPPLES) {
        children[0].remove()
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  return <div ref={containerRef} className="ripple-layer" aria-hidden />
}