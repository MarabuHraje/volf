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
const PartnersSection = dynamic(() => import('@/components/PartnersSection'))
const FAQSection = dynamic(() => import('@/components/FAQSection'))
// Kontakt sekci dočasně nahrazujeme informacemi o majiteli
const OwnerInfoSection = dynamic(() => import('@/components/OwnerInfoSection'))
const GallerySection = dynamic(() => import('@/components/GallerySection'))
const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'))
const DonationsSection = dynamic(() => import('@/components/DonationsSection'))
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
  <section id="sbirky" data-scroll-section><DonationsSection /></section>
  <section id="vybava" data-scroll-section><GearTeaserSection enableGearTeaser={enableGearTeaser} /></section>
  
        <section id="partneri" data-scroll-section><PartnersSection /></section>
  <section id="hodnoceni" data-scroll-section><ReviewsSection /></section>
  <section id="faq" data-scroll-section><FAQSection /></section>
  <section id="navstivte-nas" data-scroll-section><VisitUsSection /></section>
  <section id="o-nas" data-scroll-section><OwnerInfoSection /></section>
        <Footer />
      </ScrollSectionsPresence>
    </main>
  )
}
