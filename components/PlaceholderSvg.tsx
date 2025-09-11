"use client"

import { useMemo } from 'react'

type Props = {
  seed?: string | number
  className?: string
  aspect?: 'video' | 'square' | 'landscape' | 'portrait'
  label?: string
}

function hash(input: string) {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)
  }
  return Math.abs(h >>> 0)
}

export default function PlaceholderSvg({ seed = 'volf', className = '', aspect = 'video', label }: Props) {
  const rnd = useMemo(() => hash(String(seed)), [seed])
  const w = 1200
  const h = aspect === 'video' ? 675 : aspect === 'square' ? 800 : aspect === 'portrait' ? 1200 : 800
  const circles = 6
  const dots = Array.from({ length: circles }).map((_, i) => {
    const r = (rnd + i * 97) % 100
    const x = ((rnd >> (i % 16)) % w)
    const y = ((rnd >> ((i + 5) % 16)) % h)
    const rad = 40 + (r % 80)
    const opacity = 0.06 + ((r % 30) / 100)
    return { x, y, rad, opacity }
  })

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      role="img"
      aria-label={label || 'Šedý zástupný obrázek'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1" opacity="0.35" />
        </pattern>
      </defs>
      <rect width={w} height={h} fill="url(#grid)" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.rad} fill="#9ca3af" opacity={d.opacity} />
      ))}
      <rect x="0" y="0" width={w} height={h} fill="url(#g)" opacity="0.08" />
      {label && (
        <g>
          <rect x={w / 2 - 160} y={h / 2 - 28} width="320" height="56" rx="10" fill="#111827" opacity="0.15" />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="22" fill="#374151">
            {label}
          </text>
        </g>
      )}
    </svg>
  )
}
