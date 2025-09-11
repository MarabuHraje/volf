import { absoluteUrl, siteConfig } from './siteConfig'

export function generateOrganizationJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl('/images/logo.png'),
    description: 'Expertní rybářské poradenství, servis výbavy a prémiové vybavení pro rybolov s respektem k přírodě.',
    address: {
      '@type': 'PostalAddress',
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.city,
  postalCode: siteConfig.address.zip,
      addressCountry: 'CZ'
    },
    contactPoint: {
      '@type': 'ContactPoint',
  telephone: siteConfig.telephone,
  email: siteConfig.contactEmail,
      contactType: 'customer service',
      availableLanguage: 'Czech'
    },
    sameAs: [
  siteConfig.social.facebook,
  siteConfig.social.instagram,
  siteConfig.social.youtube
    ]
  }
}

export function generateLocalBusinessJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
  name: siteConfig.name,
  url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.zip,
      addressCountry: 'CZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Přibližné souřadnice České Budějovice (centrum)
      latitude: '48.9747',
      longitude: '14.4743'
    },
  openingHours: siteConfig.openingHours,
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'CZK',
    description: 'Specializujeme se na individuální poradenství, profesionální servis a pomáháme najít tu správnou výbavu pro váš styl rybolovu.'
  }
}

export function generateFAQJSONLD(faqData: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

export function generateBreadcrumbJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Domů',
        item: siteConfig.url
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'O nás',
        item: absoluteUrl('#o-znacce')
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Galerie',
        item: absoluteUrl('#galerie')
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Hodnocení',
        item: absoluteUrl('#hodnoceni')
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Kontakt',
        item: absoluteUrl('#kontakt')
      }
    ]
  }
}

export function generateWebSiteJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: 'Expertní rybářské poradenství, servis výbavy a prémiové vybavení pro rybolov s respektem k přírodě.',
    potentialAction: {
      '@type': 'SearchAction',
      target: absoluteUrl('/search?q={search_term_string}'),
      'query-input': 'required name=search_term_string'
    }
  }
}
