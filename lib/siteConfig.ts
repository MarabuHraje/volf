// Central configuration for site-wide constants
export const siteConfig = {
  name: 'Rybářské a chovatelské služby Volf',
  // Prefer explicit env var, fallback to Vercel provided URL or localhost
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://volf-rybarsky-web.vercel.app',
  defaultLocale: 'cs-CZ',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'davidvolfrp@seznam.cz',
  // Display-friendly phone and a tel: safe version
  telephone: '+420 702 100 963',
  telephoneHref: 'tel:+420702100963',
  address: {
    street: 'Suchomelská 2251',
    city: 'České Budějovice',
    zip: '37004',
    country: 'CZ'
  },
  social: {
    instagram: 'https://www.instagram.com/potreby.volf?igsh=MTI4bmQ5dDgyeDdjNg%3D%3D&utm_source=qr',
    facebook: '',
    youtube: ''
  },
  openingHours: 'Dle domluvy – prosíme volejte předem.',
  whatsappUrl: 'https://wa.me/420702100963'
}

export function absoluteUrl(path: string = '/') {
  return siteConfig.url.replace(/\/$/, '') + path
}
