'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Neplatná emailová adresa'),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků')
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const validData = contactSchema.parse(formData)
      
      // TODO: Implementovat skutečné odeslání formuláře
      console.log('Form submission:', validData)
      
      // Simulace odeslání
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset formuláře
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      
      alert('Zpráva byla úspěšně odeslána!')
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactForm> = {}
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactForm] = err.message
          }
        })
        setErrors(fieldErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="kontakt" className="section-padding bg-gradient-to-b from-deep-moss to-dark-forest relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-off-white mb-6">
            Spojte se s námi
          </h2>
          <p className="text-lg text-sand max-w-2xl mx-auto">
            Rádi zodpovíme vaše dotazy a pomůžeme s výběrem správného řešení.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif text-off-white mb-6">
                Kontaktní informace
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-copper mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sand font-medium">Adresa</p>
                    <p className="text-sand/80">{'{{ADDRESS}}'}</p>
                    <p className="text-sand/80">{'{{CITY}}'} {'{{ZIP}}'}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-copper mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sand font-medium">Telefon</p>
                    <a href="tel:{{PHONE}}" className="text-sand/80 hover:text-copper transition-colors">
                      {'{{PHONE}}'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-copper mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sand font-medium">E-mail</p>
                    <a href="mailto:{{EMAIL}}" className="text-sand/80 hover:text-copper transition-colors">
                      {'{{EMAIL}}'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-copper mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sand font-medium">Otevírací doba</p>
                    <p className="text-sand/80">{'{{OPENING_HOURS}}'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-serif text-off-white mb-4">
                Sledujte nás
              </h4>
              <div className="flex space-x-4">
                <a href="{{FACEBOOK_URL}}" className="w-10 h-10 bg-copper/20 rounded-lg flex items-center justify-center text-copper hover:bg-copper hover:text-off-white transition-colors premium-focus">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="{{INSTAGRAM_URL}}" className="w-10 h-10 bg-copper/20 rounded-lg flex items-center justify-center text-copper hover:bg-copper hover:text-off-white transition-colors premium-focus">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987C18.635 23.974 24 18.607 24 11.987 24 5.367 18.635.001 12.017.001zM8.449 20.25c-4.148 0-7.515-3.366-7.515-7.515 0-4.148 3.367-7.515 7.515-7.515 4.148 0 7.515 3.367 7.515 7.515 0 4.149-3.366 7.515-7.515 7.515z"/>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="{{YOUTUBE_URL}}" className="w-10 h-10 bg-copper/20 rounded-lg flex items-center justify-center text-copper hover:bg-copper hover:text-off-white transition-colors premium-focus">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sand font-medium mb-2">
                  Jméno *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-deep-moss/20 border border-sand/30 rounded-lg text-off-white placeholder-sand/60 premium-focus"
                  placeholder="Vaše jméno"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-300">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sand font-medium mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-deep-moss/20 border border-sand/30 rounded-lg text-off-white placeholder-sand/60 premium-focus"
                  placeholder="vas@email.cz"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-300">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sand font-medium mb-2">
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-deep-moss/20 border border-sand/30 rounded-lg text-off-white placeholder-sand/60 premium-focus resize-none"
                  placeholder="Čím vám můžeme pomoci?"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-300">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-copper text-off-white font-medium rounded-lg hover:bg-copper/90 transition-colors premium-focus disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Odesílám...' : 'Napište nám'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
