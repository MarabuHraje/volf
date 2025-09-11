import dynamic from 'next/dynamic'
import Footer from '@/components/Footer'
import ScrollSectionsPresence from '@/components/ScrollSectionsPresence'

// Lazy loaded sections (improves initial payload)
const IntroSection = dynamic(() => import('@/components/IntroSection'), { ssr: false })
const AboutSection = dynamic(() => import('@/components/AboutSection'))
const ServicesSection = dynamic(() => import('@/components/ServicesSection'))
const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'))
const EcologySection = dynamic(() => import('@/components/EcologySection'))
const GearTeaserSection = dynamic(() => import('@/components/GearTeaserSection'))
const BlogTeaserSection = dynamic(() => import('@/components/BlogTeaserSection'))
const PartnersSection = dynamic(() => import('@/components/PartnersSection'))
const FAQSection = dynamic(() => import('@/components/FAQSection'))
const ContactSection = dynamic(() => import('@/components/ContactSection'))
const GallerySection = dynamic(() => import('@/components/GallerySection'))
const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'))
const VisitUsSection = dynamic(() => import('@/components/VisitUsSection'))

export default function Home() {
  // Nastavení pro zobrazení výbavy sekce - zde lze vypnout
  const enableGearTeaser = true

  return (
    <main className="relative">
      <ScrollSectionsPresence>
        <div id="intro" data-scroll-section><IntroSection /></div>
  {/* 3D ukázka byla odstraněna ze stránky na přání */}
  <section id="o-znacce" data-scroll-section><AboutSection /></section>
        <section id="sluzby" data-scroll-section><ServicesSection /></section>
        <section id="proc-volf" data-scroll-section><BenefitsSection /></section>
  <section id="ekologie" data-scroll-section><EcologySection /></section>
  <section id="galerie" data-scroll-section><GallerySection /></section>
  <section id="vybava" data-scroll-section><GearTeaserSection enableGearTeaser={enableGearTeaser} /></section>
  
        <section id="blog" data-scroll-section><BlogTeaserSection /></section>
        <section id="partneri" data-scroll-section><PartnersSection /></section>
  <section id="hodnoceni" data-scroll-section><ReviewsSection /></section>
  <section id="faq" data-scroll-section><FAQSection /></section>
  <section id="navstivte-nas" data-scroll-section><VisitUsSection /></section>
        <section id="kontakt" data-scroll-section><ContactSection /></section>
        <Footer />
      </ScrollSectionsPresence>
    </main>
  )
}
