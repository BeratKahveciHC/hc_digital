'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import _istinye    from '../../assets/brands/istinye.webp'
import _livHospital from '../../assets/brands/liv-hospital.webp'
import _medicalPark from '../../assets/brands/medical-park.webp'
import _mlpcare     from '../../assets/brands/mlpcare.webp'
import _mlpCare     from '../../assets/brands/mlp-care.webp'
import _tasarim5e   from '../../assets/brands/5e-tasarim.webp'
import _cafrost     from '../../assets/brands/cafrost.webp'
import _brainco       from '../../assets/brands/brainco.webp'
import _bilisimVadisi from '../../assets/brands/bilisim-vadisi.webp'
import _okanUni       from '../../assets/brands/okan-universitesi.webp'
const s = (x) => x?.src ?? x
const istinye    = s(_istinye)
const livHospital = s(_livHospital)
const medicalPark = s(_medicalPark)
const mlpcare    = s(_mlpcare)
const mlpCare    = s(_mlpCare)
const tasarim5e  = s(_tasarim5e)
const cafrost    = s(_cafrost)
const brainco       = s(_brainco)
const bilisimVadisi = s(_bilisimVadisi)
const okanUni       = s(_okanUni)

const seoData = {
  tr: {
    title: 'Referanslarımız - HC Dijital | Güvenen Kurumlar',
    description: 'HC Dijital\'e güvenen kurumlar: İstinye Üniversitesi, LIV Hospital, Medical Park, MLP Care, Brainco, Cafrost ve 5E Tasarım. Sağlık ve teknoloji sektörünün öncü isimleri.',
    keywords: 'HC Dijital referanslar, hastane yazılım müşterileri, sağlık teknoloji referansları, İstinye Üniversitesi, LIV Hospital, Medical Park, MLP Care',
  },
  en: {
    title: 'References - HC Digital | Trusted Institutions',
    description: 'Institutions that trust HC Digital: İstinye University, LIV Hospital, Medical Park, MLP Care, Brainco, Cafrost and 5E Design. Leading names in healthcare and technology.',
    keywords: 'HC Digital references, hospital software clients, health technology references, İstinye University, LIV Hospital, Medical Park, MLP Care',
  },
}

const fadeUp = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
})

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const brands = {
  tr: [
    {
      name: 'İstinye Üniversitesi',
      src: istinye,
      url: 'https://www.istinye.edu.tr',
      description: 'İstanbul merkezli vakıf üniversitesi. Tıp fakültesi ve sağlık bilimleri programlarıyla HC Dijital çözümlerini akademik ve klinik süreçlerinde kullanmaktadır.',
    },
    {
      name: 'LIV Hospital',
      src: livHospital,
      url: 'https://www.livhospital.com',
      description: 'JCI akreditasyonlu özel hastane grubu. Veri analitiği ve raporlama sistemleri alanında HC Dijital ile iş birliği yapmaktadır.',
    },
    {
      name: 'Medical Park',
      src: medicalPark,
      url: 'https://www.medicalpark.com.tr',
      description: 'Türkiye\'nin önde gelen özel hastane zincirlerinden biri. Klinik süreç yönetimi ve dijital dönüşüm projelerinde HC Dijital\'i tercih etmektedir.',
    },
    {
      name: 'MLP Care',
      src: mlpcare,
      url: 'https://www.mlpcare.com',
      description: 'Geniş hastane ağıyla faaliyet gösteren sağlık grubu. Operasyonel verimlilik ve merkezi raporlama ihtiyaçları için HC Dijital platformlarını kullanmaktadır.',
    },
    {
      name: '5E Tasarım',
      src: tasarim5e,
      url: 'https://www.5etasarim.com.tr',
      description: 'Teknoloji odaklı tasarım ajansı. HC Dijital ile ortak projelerde kullanıcı deneyimi ve arayüz tasarımı konularında iş birliği yapmaktadır.',
    },
    {
      name: 'Cafrost',
      src: cafrost,
      url: 'https://cafrost.de',
      description: 'Soğuk zincir çözümleri alanında faaliyet gösteren sektör kuruluşu. Spiral Freezer teknolojisi ve SCADA entegrasyonu için HC Dijital ile çalışmaktadır.',
    },
    {
      name: 'Brainco',
      src: brainco,
      url: 'https://brainco.com.tr',
      description: 'Beyin-bilgisayar arayüzü ve nöroteknoloji alanında ürünler geliştiren inovasyon şirketi. Yapay zekâ entegrasyonu süreçlerinde HC Dijital ile iş ortaklığı yürütmektedir.',
    },
    {
      name: 'Bilişim Vadisi',
      src: bilisimVadisi,
      url: 'https://www.bilisimvadisi.com.tr',
      description: 'Türkiye\'nin teknoloji ve inovasyon merkezi. HC Dijital, Bilişim Vadisi ekosistemi içinde yer alarak dijital dönüşüm ve sağlık teknolojileri alanındaki gelişim sürecini sürdürmektedir.',
    },
    {
      name: 'İstanbul Okan Üniversitesi',
      src: okanUni,
      url: 'https://www.okan.edu.tr',
      description: 'İstanbul Okan Üniversitesi ile imzalanan Mesleki ve Sanayi İş Birliği Protokolü kapsamında akademi-sektör iş birliği güçlendirilmekte; bilgi üretimi ve insan kaynağı geliştirme alanlarında ortak çalışmalar yürütülmektedir.',
    },
  ],
  en: [
    {
      name: 'İstinye University',
      src: istinye,
      url: 'https://www.istinye.edu.tr',
      description: 'Istanbul-based private university with a medical faculty and health sciences programs, using HC Digital solutions in academic and clinical processes.',
    },
    {
      name: 'LIV Hospital',
      src: livHospital,
      url: 'https://www.livhospital.com',
      description: 'JCI-accredited private hospital group collaborating with HC Digital on data analytics and reporting systems.',
    },
    {
      name: 'Medical Park',
      src: medicalPark,
      url: 'https://www.medicalpark.com.tr',
      description: 'One of Turkey\'s leading private hospital chains, partnering with HC Digital for clinical process management and digital transformation projects.',
    },
    {
      name: 'MLP Care',
      src: mlpCare,
      url: 'https://www.mlpcare.com',
      description: 'A healthcare group operating a wide hospital network, using HC Digital platforms for operational efficiency and centralized reporting needs.',
    },
    {
      name: '5E Design',
      src: tasarim5e,
      url: 'https://www.5etasarim.com.tr',
      description: 'Technology-focused design agency collaborating with HC Digital on joint projects covering user experience and interface design.',
    },
    {
      name: 'Cafrost',
      src: cafrost,
      url: 'https://cafrost.de',
      description: 'A sector company specializing in cold chain solutions, working with HC Digital on Spiral Freezer technology and SCADA integration.',
    },
    {
      name: 'Brainco',
      src: brainco,
      url: 'https://brainco.com.tr',
      description: 'An innovation company developing brain-computer interface and neurotechnology products, partnering with HC Digital on AI integration processes.',
    },
    {
      name: 'Bilişim Vadisi',
      src: bilisimVadisi,
      url: 'https://www.bilisimvadisi.com.tr',
      description: 'Turkey\'s technology and innovation hub. HC Digital operates within the Bilişim Vadisi ecosystem, advancing its growth in digital transformation and health technologies.',
    },
    {
      name: 'Istanbul Okan University',
      src: okanUni,
      url: 'https://www.okan.edu.tr',
      description: 'Under the Professional and Industrial Cooperation Protocol signed with Istanbul Okan University, academia-industry collaboration is being strengthened through joint efforts in knowledge production and human resource development.',
    },
  ],
}

function BrandsMarquee({ brandList }) {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const speed = 1.2 // px per frame
  const posRef = useRef(0)
  const rafRef = useRef(null)

  const CARD_WIDTH = 320 + 24 // w-80 + gap-6

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const half = track.scrollWidth / 2

    const tick = () => {
      if (!paused) {
        posRef.current += speed
        if (posRef.current >= half) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused])

  const shift = (dir) => {
    posRef.current = Math.max(0, posRef.current + dir * CARD_WIDTH)
  }

  return (
    <div className="relative">
      {/* Sol fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Sağ fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-6 will-change-transform">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-6 shrink-0" aria-hidden={copy === 1 || undefined}>
              {brandList.map((brand, i) => (
                <a
                  key={i}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-80 bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-slate-400 transition-all duration-300 flex flex-col gap-5 cursor-pointer"
                >
                  <img src={brand.src} alt={brand.name} className="h-12 w-auto object-contain object-left" />
                  <p className="text-sm text-slate-500 leading-relaxed">{brand.description}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-auto">
                    {brand.url.replace(/^https?:\/\/(www\.)?/, '')}
                    <ArrowUpRight size={12} />
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Oklar */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => shift(-1)}
          className="btn-neon w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-dark hover:text-white hover:border-dark transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => shift(1)}
          className="btn-neon w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-dark hover:text-white hover:border-dark transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default function BrandsPage() {
  const { lang } = useLang()
  const brandList = brands[lang]
  const seo = seoData[lang]

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ── Page Hero ── */}
      <section className="bg-dark pt-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center -rotate-12">
          <span className="text-[55vw] font-black text-white/4 leading-none tracking-tighter">HC</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 relative">
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <span className="text-white/60">{lang === 'en' ? 'References' : 'Referanslar'}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
                {lang === 'en' ? 'Brands We' : 'Birlikte'}<br />
                <span className="text-white/30">{lang === 'en' ? 'Work With' : 'Çalıştığımız'}</span>
              </motion.h1>
            </div>
            <motion.p {...fadeUp(0.18)} className="text-sm text-white/40 leading-relaxed max-w-xs lg:text-right lg:pb-2">
              {lang === 'en'
                ? 'Companies, hospitals, health groups and universities that trust HC Digital.'
                : 'HC Dijital\'e güvenen şirketler, hastaneler, sağlık grupları ve üniversiteler.'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <BrandsMarquee brandList={brandList} />
      </section>

      {/* ── Bottom ── */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex justify-center">
          <Link href="/"
            className="btn-neon inline-flex items-center gap-2 px-8 py-4 rounded-full bg-dark text-white text-sm font-semibold hover:bg-primary transition-colors duration-300">
            {lang === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
