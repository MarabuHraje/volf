import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import AmbientBackground from '@/components/AmbientBackground'
import { ThemeProvider } from '@/components/ThemeProvider'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'

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
  title: 'Rybářské a chovatelské potřeby Volf | České Budějovice',
  description: 'Obchod s rybářským vybavením a chovatelskými potřebami v Českých Budějovicích. Kaprařina, feeder, spinning, doplňky a krmiva pro psy a kočky. Poradíme s výběrem.',
  keywords: 'rybářské potřeby, rybářský obchod, rybářské vybavení, chovatelské potřeby, kaprařina, feeder, spinning, doplňky, České Budějovice',
  authors: [{ name: 'Rybářské a chovatelské potřeby Volf' }],
  creator: 'Rybářské a chovatelské potřeby Volf',
  publisher: 'Rybářské a chovatelské potřeby Volf',
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
    title: 'Rybářské a chovatelské potřeby Volf',
    description: 'Rybářské potřeby a chovatelské zboží v Českých Budějovicích. Přátelské poradenství a pomoc s výběrem.',
    url: 'https://volf-rybarsky-web.vercel.app',
    siteName: 'Rybářské a chovatelské potřeby Volf',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rybářské a chovatelské potřeby Volf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rybářské a chovatelské potřeby Volf',
    description: 'Rybářské potřeby a chovatelské zboží. Přátelské poradenství a servis.',
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

export const viewport: Viewport = {
  themeColor: '#0f2e1e',
}

// Dynamic client-only layers
const Ripple = dynamic(() => import('../components/RippleLayer'), { ssr: false })
const AnnouncementBar = dynamic(() => import('../components/AnnouncementBar'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
  <body className="font-sans antialiased selection:bg-copper/30 bg-off-white text-dark-forest">
        <ThemeProvider>
          <AmbientBackground />
          {/* Skip link pro přístupnost */}
          <a href="#sluzby" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:bg-off-white focus:text-dark-forest focus:rounded focus:shadow">
            Přeskočit na obsah
          </a>
          <Header />
          {/** Oznámení o stavu e‑shopu */}
          <AnnouncementBar />
          {/** Ripple click efekt */}
          <Ripple />
          <div className="noise-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
