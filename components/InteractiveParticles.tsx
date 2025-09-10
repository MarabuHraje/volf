'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export default function InteractiveParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  // Inicializace částic
  useEffect(() => {
    const initialParticles: Particle[] = []
    for (let i = 0; i < 25; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.5 ? 'rgba(255,255,255,0.8)' : 'rgba(176,122,54,0.6)'
      })
    }
    setParticles(initialParticles)
  }, [])

  // Sledování myši
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animační loop
  useEffect(() => {
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy
          let newVx = particle.vx
          let newVy = particle.vy

          // Bounce off walls
          if (newX <= 0 || newX >= (typeof window !== 'undefined' ? window.innerWidth : 1200)) {
            newVx = -newVx
            newX = Math.max(0, Math.min(newX, typeof window !== 'undefined' ? window.innerWidth : 1200))
          }
          if (newY <= 0 || newY >= (typeof window !== 'undefined' ? window.innerHeight : 800)) {
            newVy = -newVy  
            newY = Math.max(0, Math.min(newY, typeof window !== 'undefined' ? window.innerHeight : 800))
          }

          // Mouse interaction
          const dx = mousePos.x - newX
          const dy = mousePos.y - newY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const force = (100 - distance) / 100
            newVx += (dx / distance) * force * 0.02
            newVy += (dy / distance) * force * 0.02
          }

          // Damping
          newVx *= 0.99
          newVy *= 0.99

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          }
        })
      )
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePos])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            opacity: particle.opacity,
            filter: 'blur(0.5px)',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 0.7, particle.opacity]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}
