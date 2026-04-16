import './globals.css'
import Providers from '../components/Providers'

export const metadata = {
  metadataBase: new URL('https://www.hcdijital.com.tr'),
  title: {
    default: 'HC Dijital | Yapay Zeka Destekli Sağlık ve Kurumsal Yazılım Çözümleri',
    template: '%s | HC Dijital',
  },
  description: 'HC Dijital, sağlık kurumları ve işletmeler için yapay zeka destekli yazılım çözümleri geliştiriyor.',
  keywords: ['dijital sağlık yazılımı', 'yapay zeka sağlık', 'IK yönetim sistemi', 'hastane yazılımı', 'HC Dijital'],
  authors: [{ name: 'HC Dijital' }],
  creator: 'HC Dijital',
  publisher: 'HC Dijital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.hcdijital.com.tr',
    siteName: 'HC Dijital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HC Dijital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hcdijital',
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HC Dijital',
              alternateName: 'HC Dijital Sağlık Teknolojileri',
              url: 'https://www.hcdijital.com.tr',
              logo: 'https://www.hcdijital.com.tr/logos/logo.webp',
              description: 'Sağlık kurumları ve işletmeler için yapay zeka destekli dijital yazılım çözümleri geliştiren teknoloji şirketi.',
              foundingDate: '2016',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Ayazağa, Vadis Istanbul Park Etabı, Kemerburgaz Cad. D:7A Blok',
                addressLocality: 'Sarıyer',
                addressRegion: 'İstanbul',
                postalCode: '34396',
                addressCountry: 'TR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@hcdijital.com.tr',
                contactType: 'customer service',
                areaServed: 'TR',
                availableLanguage: ['Turkish', 'English'],
              },
              sameAs: [
                'https://www.linkedin.com/company/hc-dijital-sa%C4%9Fl%C4%B1k-teknolojileri/',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
