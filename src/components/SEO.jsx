import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.hcdijital.com.tr'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`
const SITE_NAME = 'HC Dijital'

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false,
  lang = 'tr',
  type = 'website',
  jsonLd,
}) {
  const fullTitle = title.includes('HC Dijital') ? title : `${title} | HC Dijital`
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined
  const image = ogImage || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} />
      <meta name="author" content={SITE_NAME} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content={lang === 'tr' ? 'tr_TR' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

/* ── Önceden hazırlanmış JSON-LD şablonları ── */

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HC Dijital',
  alternateName: 'HC Dijital Sağlık Teknolojileri',
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo.webp`,
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
}

export function productJsonLd({ title, description, url, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    image: `${SITE_URL}${image}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'TRY',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HC Dijital',
      url: SITE_URL,
    },
  }
}

export function serviceJsonLd({ title, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'HC Dijital',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
    availableLanguage: ['Turkish', 'English'],
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}
