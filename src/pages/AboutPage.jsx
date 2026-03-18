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

const content = {
  tr: {
    breadcrumb: 'Hakkımızda',
    overline: 'HC Dijital',
    h1a: 'Her sektör için',
    h1b: 'teknoloji üretiyoruz.',
    heroParagraph: 'İşletmelerin ve kurumların daha verimli çalışmasını, daha iyi kararlar almasını ve rekabette öne geçmesini sağlayan dijital ürünler geliştiriyoruz.',

    philosophyOverline: 'Felsefemiz',
    philosophyHeading: 'Teknoloji araçtır, sonuç dönüşümdür.',
    philosophyText: [
      'HC Dijital olarak yazılım yazmıyoruz, kurumlar için zaman kazanıyoruz. Yöneticiler için görünürlük yaratıyoruz. Çalışanlar için deneyim iyileştiriyoruz.',
      'Dijital dönüşüm standart paket yazılımlara sığmaz. Bu nedenle her projeye sıfırdan bakıyor, kurumun iş akışlarını, kısıtlamalarını ve hedeflerini önce anlıyoruz. Çözümü sonra tasarlıyoruz.',
    ],

    statementBg: 'Veri doğru kararlar doğurur — ama ancak doğru sistemlerle işlendiğinde.',

    missionOverline: 'Misyon & Vizyon',
    mission: {
      label: 'Misyonumuz',
      heading: 'Dijital dönüşümü herkes için erişilebilir kılmak',
      text: 'Kurumların karmaşık dijital dönüşüm süreçlerini sade, güvenilir ve sürdürülebilir çözümlerle yönetmelerine öncülük ediyoruz. Çalışanların daha az idari yük, daha fazla değer üretimi ile çalışabilmesi için teknolojiyi bir araç olarak, insanı ise her zaman merkezde tutarak yazılım geliştiriyoruz.',
    },
    vision: {
      label: 'Vizyonumuz',
      heading: 'Türkiye\'nin dijital dönüşümde küresel referans noktası olmak',
      text: 'Yapay zekâ destekli karar sistemlerinden gerçek zamanlı veri platformlarına kadar geliştirdiğimiz çözümlerle Türkiye\'yi teknoloji alanında dünya sahnesine taşımayı hedefliyoruz. 2030\'a kadar 10 ülkede aktif kullanıcıya sahip, sektörün standart belirleyen platformu olmak en büyük hedefimizdir.',
    },

    statsOverline: 'Rakamlarla HC Dijital',
    stats: [
      { value: '40+', label: 'Aktif kurum' },
      { value: '8+', label: 'Yıllık deneyim' },
      { value: '15K+', label: 'Aktif kullanıcı' },
      { value: '%80', label: 'Tekrar müşteri oranı' },
    ],

    ctaOverline: 'Birlikte Çalışalım',
    ctaHeading: 'Projeniz hakkında\nkonuşmaya hazır mısınız?',
    ctaText: '30 dakikalık keşif görüşmesinde ihtiyaçlarınızı, olası çözümleri ve nasıl bir süreç izleyebileceğimizi birlikte konuşalım.',
    ctaBtn1: 'Görüşme Planlayın',
    ctaBtn2: 'Ürünleri İncele',
  },
  en: {
    breadcrumb: 'About',
    overline: 'HC Digital',
    h1a: 'We build technology',
    h1b: 'for every sector.',
    heroParagraph: 'We develop digital products that help businesses and institutions work more efficiently, make better decisions, and stay ahead of the competition.',

    philosophyOverline: 'Our Philosophy',
    philosophyHeading: 'Technology is the tool. Transformation is the outcome.',
    philosophyText: [
      'At HC Digital, we don\'t write software — we save time for institutions. We create visibility for managers. We improve experiences for employees.',
      'Digital transformation doesn\'t fit standard off-the-shelf software. That\'s why we approach every project from scratch, first understanding the institution\'s workflows, constraints, and goals. Then we design the solution.',
    ],

    statementBg: 'Data leads to the right decisions — but only when processed through the right systems.',

    missionOverline: 'Mission & Vision',
    mission: {
      label: 'Our Mission',
      heading: 'Making digital transformation accessible for everyone',
      text: 'We lead institutions through complex digital transformation journeys with simple, reliable, and sustainable solutions. We build software that keeps humans at the center — so employees can spend less time on administrative burden and more time creating value.',
    },
    vision: {
      label: 'Our Vision',
      heading: 'Becoming Turkey\'s global reference point in digital transformation',
      text: 'From AI-powered decision systems to real-time data platforms, we aim to bring Turkey onto the world stage in technology. Our greatest goal is to become the standard-setting platform of the industry — with active users in 10 countries by 2030.',
    },

    statsOverline: 'HC Digital in Numbers',
    stats: [
      { value: '40+', label: 'Active institutions' },
      { value: '8+', label: 'Years of experience' },
      { value: '15K+', label: 'Active users' },
      { value: '80%', label: 'Repeat client rate' },
    ],

    ctaOverline: "Let's Work Together",
    ctaHeading: 'Ready to talk about\nyour project?',
    ctaText: 'In a 30-minute discovery call, let\'s discuss your needs, possible solutions, and the process we can follow together.',
    ctaBtn1: 'Schedule a Meeting',
    ctaBtn2: 'View Products',
  },
}

export default function AboutPage() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ── Hero ── */}
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
            <span className="text-white/60">{c.breadcrumb}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.p {...fadeUp(0)} className="text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-4">
                {c.overline}
              </motion.p>
              <motion.h1 {...fadeUp(0.08)} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
                {c.h1a}<br />
                <span className="text-white/30">{c.h1b}</span>
              </motion.h1>
            </div>
            <motion.p {...fadeUp(0.18)} className="text-sm text-white/40 leading-relaxed max-w-xs lg:text-right lg:pb-2">
              {c.heroParagraph}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Felsefe ── */}
      <section className="py-24 md:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-24">
            <motion.div {...fadeUpView()}>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">{c.philosophyOverline}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-dark leading-snug">{c.philosophyHeading}</h2>
            </motion.div>
            <motion.div {...fadeUpView(0.1)} className="flex flex-col gap-6">
              {c.philosophyText.map((para, i) => (
                <p key={i} className="text-lg md:text-xl text-slate-500 leading-relaxed">{para}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Ekibimiz ── */}
      <section className="py-24 md:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Başlık */}
          <motion.div {...fadeUpView()} className="mb-20">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              {lang === 'en' ? 'Our Team' : 'Ekibimiz'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight tracking-tight">
              {lang === 'en' ? 'Get to know\nour team' : 'Ekibimizi yakından\ntanıyın'}
            </h2>
            <p className="mt-5 text-base text-slate-500 leading-relaxed max-w-xl">
              {lang === 'en'
                ? 'A passionate team of engineers and advisors united by a single goal: building better technology for every sector.'
                : 'Daha iyi teknoloji üretmek amacıyla bir araya gelmiş tutkulu mühendisler ve danışmanlardan oluşan ekibimiz.'}
            </p>
          </motion.div>

          {/* Üst sıra — 3 kişi */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
            {[
              { name: 'Ersan Biçkioğlu',   role: lang === 'en' ? 'Founder'          : 'Kurucu',            img: '/team/ersan-bickioglu.jpg' },
              { name: 'Dr. Hasan Oğuz',    role: lang === 'en' ? 'Advisor'          : 'Danışman',          img: '/team/hasan-oguz.jpg' },
              { name: 'Batuhan Küçükkısa', role: lang === 'en' ? 'Full Stack Developer': 'Full Stack Developer', img: '/team/batuhan-kucukkisa.jpg' },
            ].map((p, i) => (
              <motion.div key={i} {...fadeUpView(i * 0.07)} className="flex flex-col gap-4">
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark leading-snug">{p.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{p.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Alt sıra — 4 kişi */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { name: 'Deniz Yetim',       role: 'Full Stack Developer',                                   img: '/team/deniz-yetim.jpg' },
              { name: 'Zeren Korkmaz',     role: lang === 'en' ? 'AI Engineer'      : 'Yapay Zekâ Mühendisi', img: '/team/zeren-korkmaz.jpg' },
              { name: 'Berat Kaan Seven',  role: lang === 'en' ? 'Product Manager'  : 'Ürün Yöneticisi',      img: '/team/berat-kaan-seven.jpg' },
              { name: 'Berat Kahveci',     role: 'Full Stack Developer',                                   img: '/team/berat-kahveci.jpg' },
            ].map((p, i) => (
              <motion.div key={i} {...fadeUpView(i * 0.07 + 0.15)} className="flex flex-col gap-4">
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark leading-snug">{p.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{p.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Full-width Statement ── */}
      <section className="bg-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            {...fadeUpView()}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug tracking-tight max-w-4xl"
          >
            {c.statementBg}
          </motion.p>
        </div>
      </section>

      {/* ── Misyon & Vizyon ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUpView()} className="mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">{c.missionOverline}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-100">
            {/* Misyon */}
            <motion.div {...fadeUpView(0)} className="bg-white pr-0 lg:pr-16 pb-16 lg:pb-0 flex flex-col gap-6">
              <span className="text-8xl font-black text-slate-100 leading-none select-none">01</span>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{c.mission.label}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-dark leading-snug">{c.mission.heading}</h2>
                <p className="text-base text-slate-500 leading-relaxed">{c.mission.text}</p>
              </div>
            </motion.div>

            {/* Vizyon */}
            <motion.div {...fadeUpView(0.1)} className="bg-white pl-0 lg:pl-16 pt-16 lg:pt-0 flex flex-col gap-6">
              <span className="text-8xl font-black text-slate-100 leading-none select-none">02</span>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{c.vision.label}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-dark leading-snug">{c.vision.heading}</h2>
                <p className="text-base text-slate-500 leading-relaxed">{c.vision.text}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── İstatistikler ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p {...fadeUpView()} className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-12">
            {c.statsOverline}
          </motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {c.stats.map((s, i) => (
              <motion.div key={i} {...fadeUpView(i * 0.08)}>
                <p className="text-5xl md:text-6xl font-black text-dark tracking-tight leading-none mb-3">{s.value}</p>
                <p className="text-sm text-slate-500 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div>
              <motion.p {...fadeUpView()} className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
                {c.ctaOverline}
              </motion.p>
              <motion.h2 {...fadeUpView(0.06)} className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight tracking-tight whitespace-pre-line">
                {c.ctaHeading}
              </motion.h2>
              <motion.p {...fadeUpView(0.12)} className="mt-6 text-base text-slate-500 leading-relaxed max-w-lg">
                {c.ctaText}
              </motion.p>
            </div>
            <motion.div {...fadeUpView(0.16)} className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-dark text-white text-sm font-semibold hover:bg-primary transition-colors duration-300"
              >
                {c.ctaBtn1} <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/urunler"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-dark text-sm font-semibold hover:border-dark transition-colors duration-200"
              >
                {c.ctaBtn2}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
