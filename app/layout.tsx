import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import AmbientBackground from '@/components/AmbientBackground'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rybářské a chovatelské služby Volf - Rybolov s respektem k přírodě',
  description: 'Expertní rybářské poradenství, servis výbavy a prémiové vybavení pro rybolov s respektem k přírodě. Individuální přístup s více než 20letými zkušenostmi.',
  keywords: 'rybářské služby, rybářské poradenství, servis rybářské výbavy, rybolov, kaprařina, feeder, spinning, muškařina',
  authors: [{ name: 'Rybářské a chovatelské služby Volf' }],
  creator: 'Rybářské a chovatelské služby Volf',
  publisher: 'Rybářské a chovatelské služby Volf',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://volf-rybarsky-web.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rybářské a chovatelské služby Volf - Rybolov s respektem k přírodě',
    description: 'Specializujeme se na individuální poradenství, profesionální servis a pomáháme najít tu správnou výbavu pro váš styl rybolovu.',
    url: 'https://volf-rybarsky-web.vercel.app',
    siteName: 'Rybářské a chovatelské služby Volf',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rybářské a chovatelské služby Volf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rybářské a chovatelské služby Volf',
    description: 'Expertní rybářské poradenství a servis s respektem k přírodě',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased selection:bg-copper/30 bg-dark-forest text-off-white">
        <AmbientBackground />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
