import IntroSection from '@/components/IntroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import BenefitsSection from '@/components/BenefitsSection'
import EcologySection from '@/components/EcologySection'
import GearTeaserSection from '@/components/GearTeaserSection'
import BlogTeaserSection from '@/components/BlogTeaserSection'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import PartnersSection from '@/components/PartnersSection'
import Footer from '@/components/Footer'

export default function Home() {
  // Nastavení pro zobrazení výbavy sekce - zde lze vypnout
  const enableGearTeaser = true

  return (
    <main className="relative">
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <EcologySection />
      <GearTeaserSection enableGearTeaser={enableGearTeaser} />
      <BlogTeaserSection />
  <PartnersSection />
  <FAQSection />
  <ContactSection />
      <Footer />
    </main>
  )
}
