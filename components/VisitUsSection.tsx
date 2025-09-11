import { siteConfig } from '@/lib/siteConfig'

function mapUrl() {
  const addr = `${siteConfig.address.street}, ${siteConfig.address.city} ${siteConfig.address.zip}`
  return `https://www.google.com/maps?q=${encodeURIComponent(addr)}`
}

export default function VisitUsSection() {
  return (
    <section id="navstivte-nas" className="section-padding bg-sand/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-serif text-dark-forest mb-3">Navštivte nás</h2>
          <p className="text-deep-moss">{siteConfig.address.street}, {siteConfig.address.city} {siteConfig.address.zip}</p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-sand/50 bg-white shadow">
          <iframe
            title="Mapa prodejny Volf"
            src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.street + ', ' + siteConfig.address.city)}&output=embed`}
            className="w-full h-[360px]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a href={mapUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">Navigovat do prodejny</a>
          <a href={siteConfig.telephoneHref} className="btn-outline">Zavolat</a>
        </div>
      </div>
    </section>
  )
}
