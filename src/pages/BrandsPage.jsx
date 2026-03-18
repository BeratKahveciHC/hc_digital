import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
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
      src: '/brands/istinye.png',
      description: 'İstanbul merkezli vakıf üniversitesi. Tıp fakültesi ve sağlık bilimleri programlarıyla HC Dijital çözümlerini akademik ve klinik süreçlerinde kullanmaktadır.',
    },
    {
      name: 'LIV Hospital',
      src: '/brands/liv-hospital.png',
      description: 'JCI akreditasyonlu özel hastane grubu. Veri analitiği ve raporlama sistemleri alanında HC Dijital ile iş birliği yapmaktadır.',
    },
    {
      name: 'Medical Park',
      src: '/brands/medical-park.png',
      description: 'Türkiye\'nin önde gelen özel hastane zincirlerinden biri. Klinik süreç yönetimi ve dijital dönüşüm projelerinde HC Dijital\'i tercih etmektedir.',
    },
    {
      name: 'MLP Care',
      src: '/brands/mlpcare.jpg',
      description: 'Geniş hastane ağıyla faaliyet gösteren sağlık grubu. Operasyonel verimlilik ve merkezi raporlama ihtiyaçları için HC Dijital platformlarını kullanmaktadır.',
    },
    {
      name: '5E Tasarım',
      src: '/brands/5e-tasarim.jpg',
      description: 'Teknoloji odaklı tasarım ajansı. HC Dijital ile ortak projelerde kullanıcı deneyimi ve arayüz tasarımı konularında iş birliği yapmaktadır.',
    },
    {
      name: 'Cafrost',
      src: '/brands/cafrost.jpg',
      description: 'Soğuk zincir çözümleri alanında faaliyet gösteren sektör kuruluşu. Spiral Freezer teknolojisi ve SCADA entegrasyonu için HC Dijital ile çalışmaktadır.',
    },
    {
      name: 'Brainco',
      src: '/brands/brainco.png',
      description: 'Beyin-bilgisayar arayüzü ve nöroteknoloji alanında ürünler geliştiren inovasyon şirketi. Yapay zekâ entegrasyonu süreçlerinde HC Dijital ile iş ortaklığı yürütmektedir.',
    },
  ],
  en: [
    {
      name: 'İstinye University',
      src: '/brands/istinye.png',
      description: 'Istanbul-based private university with a medical faculty and health sciences programs, using HC Digital solutions in academic and clinical processes.',
    },
    {
      name: 'LIV Hospital',
      src: '/brands/liv-hospital.png',
      description: 'JCI-accredited private hospital group collaborating with HC Digital on data analytics and reporting systems.',
    },
    {
      name: 'Medical Park',
      src: '/brands/medical-park.png',
      description: 'One of Turkey\'s leading private hospital chains, partnering with HC Digital for clinical process management and digital transformation projects.',
    },
    {
      name: 'MLP Care',
      src: '/brands/mlp-care.png',
      description: 'A healthcare group operating a wide hospital network, using HC Digital platforms for operational efficiency and centralized reporting needs.',
    },
    {
      name: '5E Design',
      src: '/brands/5e-tasarim.jpg',
      description: 'Technology-focused design agency collaborating with HC Digital on joint projects covering user experience and interface design.',
    },
    {
      name: 'Cafrost',
      src: '/brands/cafrost.jpg',
      description: 'A sector company specializing in cold chain solutions, working with HC Digital on Spiral Freezer technology and SCADA integration.',
    },
    {
      name: 'Brainco',
      src: '/brands/brainco.png',
      description: 'An innovation company developing brain-computer interface and neurotechnology products, partnering with HC Digital on AI integration processes.',
    },
  ],
}

export default function BrandsPage() {
  const { lang } = useLang()
  const brandList = brands[lang]

  // 4'lü satırlara böl
  const rows = []
  for (let i = 0; i < brandList.length; i += 4) {
    rows.push(brandList.slice(i, i + 4))
  }

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
            <Link to="/" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <span className="text-white/60">{lang === 'en' ? 'Brands' : 'Markalar'}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-4">
                {lang === 'en' ? 'Our Partners & References' : 'İş Ortaklarımız & Referanslarımız'}
              </motion.p>
              <motion.h1 {...fadeUp(0.08)} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
                {lang === 'en' ? 'Brands We' : 'Birlikte'}<br />
                <span className="text-white/30">{lang === 'en' ? 'Work With' : 'Çalıştığımız'}</span>
              </motion.h1>
            </div>
            <motion.p {...fadeUp(0.18)} className="text-sm text-white/40 leading-relaxed max-w-xs lg:text-right lg:pb-2">
              {lang === 'en'
                ? 'Healthcare groups, hospitals, universities and technology companies that trust HC Digital.'
                : 'HC Dijital\'e güvenen sağlık grupları, hastaneler, üniversiteler ve teknoloji şirketleri.'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {rows.map((row, ri) => (
            <div key={ri}>
              {/* Ayırıcı — ilk satırdan önce yok */}
              {ri > 0 && <div className="my-16 md:my-20" />}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
                {row.map((brand, bi) => (
                  <motion.div key={bi} {...fadeUpView(bi * 0.08 + ri * 0.05)} className="flex flex-col gap-5">
                    {/* Logo */}
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="h-16 w-auto object-contain object-left"
                    />
                    {/* Açıklama */}
                    <p className="text-sm text-slate-500 leading-relaxed">{brand.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
                {lang === 'en' ? 'Join the Ecosystem' : 'Ekosisteme Katılın'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark leading-snug max-w-lg">
                {lang === 'en'
                  ? 'Want to become one of our partners?'
                  : 'Referanslarımız arasına katılmak ister misiniz?'}
              </h2>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-md">
                {lang === 'en'
                  ? 'Let\'s schedule a meeting to explore how we can create value for your institution together.'
                  : 'Kurumunuza nasıl değer katabileceğimizi keşfetmek için bir görüşme planlayalım.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-dark text-white text-sm font-semibold hover:bg-primary transition-colors duration-300">
                {lang === 'en' ? 'Get in Touch' : 'İletişime Geçin'} <ArrowUpRight size={15} />
              </Link>
              <Link to="/urunler"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-dark text-sm font-semibold hover:border-dark transition-colors duration-200">
                {lang === 'en' ? 'View Products' : 'Ürünleri İncele'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
