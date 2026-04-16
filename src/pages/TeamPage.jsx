import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SEO, { breadcrumbJsonLd } from '../components/SEO'

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

const team = [
  // Kurucu
  {
    row: 'founder',
    members: [
      { name: 'Ersan Biçkioğlu', role: { tr: 'Kurucu', en: 'Founder' }, img: '/team/ersan-bickioglu.webp' },
    ],
  },
  // Danışman
  {
    row: 'advisor',
    members: [
      { name: 'Dr. Hasan Oğuz', role: { tr: 'Danışman', en: 'Advisor' }, img: '/team/hasan-oguz.webp' },
    ],
  },
  // Ekip
  {
    row: 'team',
    members: [
      { name: 'Batuhan Küçükkısa', role: { tr: 'Yazılım Geliştirme Uzmanı', en: 'Full Stack Developer' },                 img: '/team/batuhan-kucukkisa.webp' },
      { name: 'Deniz Yetim',       role: { tr: 'Yazılım Geliştirme Uzmanı', en: 'Full Stack Developer' },                 img: '/team/deniz-yetim.webp' },
      { name: 'Zeren Korkmaz',     role: { tr: 'Yazılım Geliştirme Uzmanı', en: 'Artificial Intelligence Developer' },    img: '/team/zeren-korkmaz.webp' },
      { name: 'Berat Kaan Seven',  role: { tr: 'Ürün ve Proje Müdürü',      en: 'Product Manager' },                      img: '/team/berat-kaan-seven.webp' },
      { name: 'Berat Kahveci',     role: { tr: 'Yazılım Geliştirme Uzmanı', en: 'Full Stack Developer' },                 img: '/team/berat-kahveci.webp' },
    ],
  },
]

export default function TeamPage() {
  const { lang } = useLang()

  return (
    <div className="bg-white text-dark">
      <SEO
        title={lang === 'tr' ? 'Ekibimiz – HC Dijital' : 'Our Team – HC Digital'}
        description={
          lang === 'tr'
            ? 'HC Dijital ekibini tanıyın. Yazılım geliştirme, yapay zekâ ve ürün yönetimi alanlarında uzman kadromuz.'
            : 'Meet the HC Digital team — experts in software development, AI, and product management.'
        }
        canonical="/ekibimiz"
        lang={lang}
        jsonLd={breadcrumbJsonLd([
          { name: lang === 'tr' ? 'Ana Sayfa' : 'Home', url: '/' },
          { name: lang === 'tr' ? 'Ekibimiz' : 'Our Team', url: '/ekibimiz' },
        ])}
      />
      <Header />

      {/* ── Banner ── */}
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
            <span className="text-white/60">{lang === 'en' ? 'Our Team' : 'Ekibimiz'}</span>
          </div>

          <motion.div {...fadeUp(0)}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              {lang === 'en' ? 'The People Behind HC Digital' : 'HC Dijital\'in Arkasındaki İnsanlar'}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {lang === 'en' ? 'Our Team' : 'Ekibimiz'}
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/40 leading-relaxed max-w-xl">
              {lang === 'en'
                ? 'A passionate team of engineers and advisors united by a single goal: building better technology for every sector.'
                : 'Daha iyi teknoloji üretmek amacıyla bir araya gelmiş tutkulu mühendisler ve danışmanlardan oluşan ekibimiz.'}
            </p>
          </motion.div>

          <div className="mt-8 pb-0 border-t border-white/10 pt-5">
            <p className="text-sm text-white/40">
              {team.reduce((acc, r) => acc + r.members.length, 0)} {lang === 'en' ? 'team members' : 'kişilik ekip'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Ekip ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-16">

          {/* Kurucu */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">
              {lang === 'en' ? 'Founder' : 'Kurucu'}
            </p>
            <div className="flex justify-start">
              {team[0].members.map((p, i) => (
                <motion.div key={i} {...fadeUpView(0)} className="flex flex-col gap-4 w-64">
                  <div className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-dark leading-snug">{p.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{p.role[lang]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Danışman */}
          <div className="border-t border-slate-100 pt-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">
              {lang === 'en' ? 'Advisor' : 'Danışman'}
            </p>
            <div className="flex justify-start">
              {team[1].members.map((p, i) => (
                <motion.div key={i} {...fadeUpView(0.05)} className="flex flex-col gap-4 w-64">
                  <div className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-dark leading-snug">{p.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{p.role[lang]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ekip */}
          <div className="border-t border-slate-100 pt-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">
              {lang === 'en' ? 'Team' : 'Ekip'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {team[2].members.map((p, i) => (
                <motion.div key={i} {...fadeUpView(i * 0.07)} className="flex flex-col gap-4">
                  <div className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark leading-snug">{p.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{p.role[lang]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
