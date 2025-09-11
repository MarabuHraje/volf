"use client"

import { useEffect, useRef } from 'react'

// Lightweight canvas-based pseudo-3D rods using simple transforms, no heavy deps.
// Placeholder shapes resemble rods and reels for visual effect without large bundles.
export default function ThreeShowcase() {
  const ref = useRef<HTMLCanvasElement>(null!)

  useEffect(() => {
  const canvas = ref.current
  if (!canvas) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const ctx = canvas.getContext('2d')!

    function resize() {
  const rect = canvas.getBoundingClientRect()
  const width = rect.width
  const height = Math.round(width * 0.35)
  canvas.width = Math.floor(width * dpr)
  canvas.height = Math.floor(height * dpr)
  canvas.style.height = `${height}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    function draw() {
  const rect = canvas.getBoundingClientRect()
  const width = rect.width
  const height = parseFloat(canvas.style.height)
      ctx.clearRect(0, 0, width, height)

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, width, height)
      grad.addColorStop(0, 'rgba(201,191,175,0.25)')
      grad.addColorStop(1, 'rgba(62,89,63,0.08)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      // Draw a few tilted "rods" with simple lighting
      const rods = [
        { x: width * 0.1, y: height * 0.75, len: width * 0.65, tilt: -0.06, color: '#3E593F' },
        { x: width * 0.15, y: height * 0.6, len: width * 0.6, tilt: -0.03, color: '#0F2A22' },
        { x: width * 0.25, y: height * 0.5, len: width * 0.55, tilt: 0.02, color: '#B07A36' },
      ]

      rods.forEach((r, i) => {
        ctx.save()
        ctx.translate(r.x, r.y)
        ctx.rotate(r.tilt)
        // Rod body
        const w = Math.max(3, Math.floor(width * 0.006))
        const gradRod = ctx.createLinearGradient(0, 0, r.len, 0)
        gradRod.addColorStop(0, 'rgba(255,255,255,0.6)')
        gradRod.addColorStop(0.1, r.color)
        gradRod.addColorStop(1, 'rgba(0,0,0,0.2)')
        ctx.fillStyle = gradRod
        ctx.fillRect(0, -w / 2, r.len, w)
        // Guides
        ctx.strokeStyle = 'rgba(0,0,0,0.2)'
        ctx.lineWidth = 1
        for (let p = r.len * 0.15; p < r.len; p += r.len * 0.15) {
          ctx.beginPath(); ctx.moveTo(p, -w); ctx.lineTo(p, w); ctx.stroke()
        }
        // Reel hint
        if (i === 1) {
          ctx.beginPath()
          ctx.arc(r.len * 0.15, 0, w * 1.8, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(176,122,54,0.6)'
          ctx.fill()
        }
        ctx.restore()
      })
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let anim = 0 as number
    let t = 0
    function loop() {
      anim = requestAnimationFrame(loop)
      t += 0.008
      // Subtle parallax tilt
  canvas.style.transform = `perspective(800px) rotateX(${Math.sin(t) * 1.2}deg) rotateY(${Math.cos(t * 0.7) * 1.2}deg)`
    }
    loop()

    return () => {
      cancelAnimationFrame(anim)
      ro.disconnect()
    }
  }, [])

  return (
    <section className="section-padding bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-2">Lehká 3D ukázka</h2>
          <p className="text-deep-moss">Dynamické zobrazení prutů bez těžké 3D knihovny.</p>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl border border-sand/50 shadow bg-white overflow-hidden will-change-transform">
          <canvas ref={ref} className="w-full block" aria-label="3D ukázka prutů" />
        </div>
      </div>
    </section>
  )
}
