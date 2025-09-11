"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-off-white/80 border-b border-sand/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#intro" className="flex items-center gap-3 group" aria-label={siteConfig.name}>
          <img src="/logo.svg" alt={siteConfig.name} className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2" aria-label="Hlavní navigace">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="px-3 py-2 rounded-lg text-deep-moss hover:text-dark-forest hover:bg-sand/30"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={mapUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg border-2 border-copper text-copper hover:bg-copper hover:text-off-white transition-colors text-sm"
          >
            Navigovat
          </a>
          <a
            href={siteConfig.telephoneHref}
            className="px-3 py-2 rounded-lg bg-copper text-off-white hover:bg-copper/90 transition-colors text-sm"
          >
            Zavolat
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-deep-moss hover:text-dark-forest"
          aria-label="Otevřít menu"
        >
          <motion.div
            animate={isMobileMenuOpen ? "open" : "closed"}
            className="w-6 h-6 flex flex-col justify-center items-center"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="w-6 h-0.5 bg-current block absolute"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-6 h-0.5 bg-current block absolute"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="w-6 h-0.5 bg-current block absolute"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-sand/40 bg-white/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-deep-moss hover:text-dark-forest hover:bg-sand/30 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              
              {/* Mobile CTAs */}
              <div className="mt-4 pt-4 border-t border-sand/30 flex flex-col gap-2">
                <a
                  href={mapUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center px-4 py-3 rounded-lg border-2 border-copper text-copper hover:bg-copper hover:text-off-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Navigovat k prodejně
                </a>
                <a
                  href={siteConfig.telephoneHref}
                  className="text-center px-4 py-3 rounded-lg bg-copper text-off-white hover:bg-copper/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Zavolat
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
