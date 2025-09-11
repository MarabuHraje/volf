'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { siteConfig } from '@/lib/siteConfig'

export default function Footer() {
  const { theme, toggle } = useTheme()
  return (
    <footer className="bg-dark-forest text-sand py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif text-off-white mb-4">
              Rybářské a chovatelské služby Volf
            </h3>
            <p className="text-sand/80 leading-relaxed mb-6">
              Rybolov s respektem k přírodě a tradicím
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.facebook || '#'} aria-disabled={!siteConfig.social.facebook} className="w-10 h-10 bg-sand/10 rounded-lg flex items-center justify-center text-sand hover:bg-copper hover:text-off-white transition-colors premium-focus">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sand/10 rounded-lg flex items-center justify-center text-sand hover:bg-copper hover:text-off-white transition-colors premium-focus">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987C18.635 23.974 24 18.607 24 11.987 24 5.367 18.635.001 12.017.001zM8.449 20.25c-4.148 0-7.515-3.366-7.515-7.515 0-4.148 3.367-7.515 7.515-7.515 4.148 0 7.515 3.367 7.515 7.515 0 4.149-3.366 7.515-7.515 7.515z"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href={siteConfig.social.youtube || '#'} aria-disabled={!siteConfig.social.youtube} className="w-10 h-10 bg-sand/10 rounded-lg flex items-center justify-center text-sand hover:bg-copper hover:text-off-white transition-colors premium-focus">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="sr-only">YouTube</span>
              </a>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-off-white transition-colors premium-focus" aria-label="WhatsApp">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M19.11 17.35c-.27-.14-1.59-.79-1.83-.88-.24-.09-.42-.14-.6.14-.18.27-.69.88-.84 1.06-.15.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.35-1.59-1.51-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.06-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.46h-.51c-.18 0-.48.07-.73.34-.24.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.69 4.14.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.59-.65 1.81-1.28.22-.63.22-1.17.15-1.28-.06-.11-.24-.18-.51-.31z"/><path d="M16.02 3C9.38 3 4 8.37 4 14.98c0 2.63.86 5.06 2.33 7.04L4 29l7.17-2.36c1.93 1.06 4.15 1.66 6.5 1.66 6.64 0 12.02-5.37 12.02-11.98C29.7 8.37 23.34 3 16.7 3h-.68zm0 21.8c-2.2 0-4.23-.66-5.93-1.8l-.43-.28-4.24 1.4 1.4-4.14-.29-.43a10.01 10.01 0 01-1.8-5.8c0-5.54 4.52-10.04 10.1-10.04 5.57 0 10.1 4.5 10.1 10.04 0 5.54-4.53 10.05-10.1 10.05z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-off-white mb-4">
              Rychlé odkazy
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#sluzby" className="text-sand/80 hover:text-copper transition-colors">
                  Služby
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-sand/80 hover:text-copper transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#proc-volf" className="text-sand/80 hover:text-copper transition-colors">
                  Proč Volf
                </a>
              </li>
              <li>
                <a href="#ekologie" className="text-sand/80 hover:text-copper transition-colors">
                  Ekologie & Etika
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sand/80 hover:text-copper transition-colors">
                  Rady a tipy
                </a>
              </li>
              <li>
                <a href="#hodnoceni" className="text-sand/80 hover:text-copper transition-colors">
                  Hodnocení
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-sand/80 hover:text-copper transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-off-white mb-4">
              Kontakt
            </h4>
            <div className="space-y-2 text-sand/80 text-sm">
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city} {siteConfig.address.zip}</p>
              <p>
                <a href={siteConfig.telephoneHref} className="hover:text-copper transition-colors">
                  {siteConfig.telephone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-copper transition-colors">
                  {siteConfig.contactEmail}
                </a>
              </p>
              <p className="mt-3 text-xs">
                Otevírací doba:<br />
                {siteConfig.openingHours}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-sand/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-sand/60"
        >
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Rybářské a chovatelské služby Volf. Všechna práva vyhrazena.</p>
          </div>
          <div className="flex space-x-6 items-center">
            <a href="#" className="hover:text-copper transition-colors">
              Ochrana osobních údajů
            </a>
            <a href="#" className="hover:text-copper transition-colors">
              Obchodní podmínky  
            </a>
            <button onClick={toggle} className="text-xs px-3 py-1 rounded-md bg-sand/10 hover:bg-sand/20 transition-colors border border-sand/20">
              {theme === 'dark' ? 'Světlý režim' : 'Tmavý režim'}
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
