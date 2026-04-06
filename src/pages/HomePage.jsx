import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import LogoMarquee from '../components/sections/LogoMarquee'
import Services from '../components/sections/Services'
import Products from '../components/sections/Products'
import CTA from '../components/sections/CTA'
import Footer from '../components/layout/Footer'
import SEO, { organizationJsonLd } from '../components/SEO'
import { useLang } from '../context/LanguageContext'

const seoData = {
  tr: {
    title: 'HC Dijital | Yapay Zeka Destekli Sağlık ve Kurumsal Yazılım Çözümleri',
    description: 'HC Dijital, sağlık kurumları ve işletmeler için yapay zeka destekli yazılım çözümleri geliştiriyor. AirX IKYS, Tercümed, Kumanda Merkezi ve daha fazlası. 40+ aktif kurum, 8+ yıl deneyim.',
    keywords: 'dijital sağlık yazılımı, yapay zeka sağlık, IK yönetim sistemi, hastane yazılımı, veri analitiği, kurumsal yazılım, HC Dijital, sağlık teknolojileri, dijital dönüşüm',
  },
  en: {
    title: 'HC Digital | AI-Powered Healthcare & Enterprise Software Solutions',
    description: 'HC Digital develops AI-powered software solutions for healthcare institutions and enterprises. AirX IKYS, Tercümed, Kumanda Merkezi and more. 40+ active institutions, 8+ years of experience.',
    keywords: 'digital health software, AI healthcare, HR management system, hospital software, data analytics, enterprise software, HC Digital, health technology, digital transformation',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'HC Dijital',
  url: 'https://www.hcdijital.com.tr',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.hcdijital.com.tr/urunler?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  const { lang } = useLang()
  const seo = seoData[lang]

  return (
    <div className="bg-white text-dark">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical="/"
        lang={lang}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />
      <Header />
      <Hero />
      <LogoMarquee />
      <Products />
      <Services />
      <CTA />
      <Footer />
    </div>
  )
}
