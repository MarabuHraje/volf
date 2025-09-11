"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

const navItems = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#vybava', label: 'Zboží' },
  { href: '#hodnoceni', label: 'Hodnocení' },
  { href: '#kontakt', label: 'Kontakt' },
]

function mapUrl() {
  const addr = `${siteConfig.address.street}, ${siteConfig.address.city} ${siteConfig.address.zip}`
  return `https://www.google.com/maps?q=${encodeURIComponent(addr)}`
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-off-white/80 border-b border-sand/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#intro" className="flex items-center gap-3 group" aria-label={siteConfig.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Logo Volf"
            className="h-8 w-auto object-contain hidden sm:block"
            loading="eager"
            decoding="async"
          />
          <span className="text-lg font-serif text-dark-forest group-hover:text-copper transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Hlavní navigace">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="px-3 py-2 rounded-lg text-deep-moss hover:text-dark-forest hover:bg-sand/30 premium-focus"
            >
              <span className="inline-flex items-center gap-2">
                {item.label}
                {item.href === '#vybava' && (
                  <span className="text-[10px] leading-none px-2 py-1 rounded-full bg-sand/70 text-deep-moss/90 border border-sand/80">
                    e‑shop ve vývoji
                  </span>
                )}
              </span>
            </motion.a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <a
            href={mapUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3 py-2 rounded-lg border-2 border-copper text-copper hover:bg-copper hover:text-off-white transition-colors premium-focus"
          >
            Navigovat k prodejně
          </a>
          <a
            href={siteConfig.telephoneHref}
            className="inline-flex items-center px-3 py-2 rounded-lg bg-copper text-off-white hover:bg-copper/90 transition-colors premium-focus"
          >
            Zavolat
          </a>
        </div>
      </div>
    </header>
  )
}
