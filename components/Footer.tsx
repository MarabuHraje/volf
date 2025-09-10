'use client'

import { motion } from 'framer-motion'

export default function Footer() {
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
              <a href="{{FACEBOOK_URL}}" className="w-10 h-10 bg-sand/10 rounded-lg flex items-center justify-center text-sand hover:bg-copper hover:text-off-white transition-colors premium-focus">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="{{INSTAGRAM_URL}}" className="w-10 h-10 bg-sand/10 rounded-lg flex items-center justify-center text-sand hover:bg-copper hover:text-off-white transition-colors premium-focus">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987C18.635 23.974 24 18.607 24 11.987 24 5.367 18.635.001 12.017.001zM8.449 20.25c-4.148 0-7.515-3.366-7.515-7.515 0-4.148 3.367-7.515 7.515-7.515 4.148 0 7.515 3.367 7.515 7.515 0 4.149-3.366 7.515-7.515 7.515z"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="{{YOUTUBE_URL}}" className="w-10 h-10 bg-sand/10 rounded-lg flex items-center justify-center text-sand hover:bg-copper hover:text-off-white transition-colors premium-focus">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="sr-only">YouTube</span>
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
              <p>{'{{ADDRESS}}'}</p>
              <p>{'{{CITY}}'} {'{{ZIP}}'}</p>
              <p>
                <a href="tel:{{PHONE}}" className="hover:text-copper transition-colors">
                  {'{{PHONE}}'}
                </a>
              </p>
              <p>
                <a href="mailto:{{EMAIL}}" className="hover:text-copper transition-colors">
                  {'{{EMAIL}}'}
                </a>
              </p>
              <p className="mt-3 text-xs">
                Otevírací doba:<br />
                {'{{OPENING_HOURS}}'}
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
          <div className="flex space-x-6">
            <a href="#" className="hover:text-copper transition-colors">
              Ochrana osobních údajů
            </a>
            <a href="#" className="hover:text-copper transition-colors">
              Obchodní podmínky  
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
