'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLang } from '../../context/LanguageContext'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
// SEO handled by Next.js metadata

function TypewriterNeon({ words }) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout
    if (typing) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1600)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), 45)
      } else {
        setWordIdx((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [display, typing, wordIdx, words])

  return (
    <span style={{
      color: '#4EA8FF',
      textShadow: '0 0 12px rgba(78,168,255,0.9), 0 0 30px rgba(78,168,255,0.6), 0 0 60px rgba(78,168,255,0.3)',
    }}>
      {display}<span className="animate-pulse">|</span>
    </span>
  )
}

function CountUp({ target, suffix, format, delay = 0, active = true }) {
  const [value, setValue] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (!active || started.current) return
    started.current = true
    const timer = setTimeout(() => {
      const duration = 1800
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(eased * target)
        if (progress < 1) requestAnimationFrame(tick)
        else setValue(target)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timer)
  }, [target, delay, active])
  return <>{format(value)}{suffix}</>
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

const content = {
  tr: {
    seo: {
      title: 'Şirket Hakkında - HC Dijital | Dijital Dönüşüm Partneri',
      description: 'HC Dijital hakkında: 8+ yıllık deneyim, 40+ aktif kurum ve 15.000+ kullanıcıyla Türkiye\'nin dijital dönüşümüne öncülük ediyoruz. Misyon ve vizyonumuzu keşfedin.',
    },
    breadcrumb: 'Şirket Hakkında',
    h1a: 'Her sektör için',
    h1typewriter: ['değer katan', 'fark yaratan', 'dönüştüren', 'güçlendiren'],
    h1b: 'teknolojiler üretiyoruz.',
    heroParagraph: 'İşletmelerin ve kurumların daha verimli çalışmasını, daha iyi kararlar almasını ve rekabette öne geçmesini sağlayan dijital ürünler geliştiriyoruz.',

    philosophyOverline: 'Felsefemiz',
    philosophyHeading: 'Teknoloji araçtır, sonuç dönüşümdür.',
    philosophyText: [
      'HC Dijital olarak yazılım yazmıyoruz, kurumlar için zaman kazanıyoruz. Yöneticiler için görünürlük yaratıyoruz. Çalışanlar için deneyim iyileştiriyoruz.',
      'Dijital dönüşüm standart paket yazılımlara sığmaz. Bu nedenle her projeye sıfırdan bakıyor, kurumun iş akışlarını, kısıtlamalarını ve hedeflerini önce anlıyoruz. Çözümü sonra tasarlıyoruz.',
    ],

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
      { value: '8+',  label: 'Yıllık deneyim' },
      { value: '15K+', label: 'Aktif kullanıcı' },
      { value: '%80', label: 'Tekrar müşteri oranı' },
    ],
  },
  en: {
    seo: {
      title: 'About the Company - HC Digital | Digital Transformation Partner',
      description: 'About HC Digital: 8+ years of experience, 40+ active institutions and 15,000+ users. Pioneering digital transformation in Turkey. Discover our mission and vision.',
    },
    breadcrumb: 'About',
    h1a: 'For every sector,',
    h1typewriter: ['value-creating', 'transformative', 'empowering', 'impactful'],
    h1b: 'technologies we build.',
    heroParagraph: 'We develop digital products that help businesses and institutions work more efficiently, make better decisions, and stay ahead of the competition.',

    philosophyOverline: 'Our Philosophy',
    philosophyHeading: 'Technology is the tool. Transformation is the outcome.',
    philosophyText: [
      'At HC Digital, we don\'t write software — we save time for institutions. We create visibility for managers. We improve experiences for employees.',
      'Digital transformation doesn\'t fit standard off-the-shelf software. That\'s why we approach every project from scratch, first understanding the institution\'s workflows, constraints, and goals. Then we design the solution.',
    ],

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
      { value: '40+',  label: 'Active institutions' },
      { value: '8+',   label: 'Years of experience' },
      { value: '15K+', label: 'Active users' },
      { value: '80%',  label: 'Repeat client rate' },
    ],
  },
}

const statsData = [
  { target: 40, suffix: '+',  format: (n) => String(Math.floor(n)) },
  { target: 8,  suffix: '+',  format: (n) => String(Math.floor(n)) },
  { target: 15, suffix: 'K+', format: (n) => String(Math.floor(n)) },
  { target: 80, suffix: '%',  format: (n) => String(Math.floor(n)) },
]

export default function AboutCompanyPage() {
  const { lang } = useLang()
  const c = content[lang]
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ── Banner ── */}
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
            <span className="text-white/60">{c.breadcrumb}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-snug tracking-tight">
                {c.h1a}<br />
                <TypewriterNeon words={c.h1typewriter} /><br />
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
              <div className="flex items-center gap-3 mb-4">
                <div style={{ height: '1px', width: '24px', background: 'linear-gradient(to right, #1b5fc1, #4EA8FF)' }} />
                <span style={{ fontFamily:"'Albert Sans',sans-serif", fontSize:'1rem', fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', background:'linear-gradient(to right,#1b5fc1,#4EA8FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{c.philosophyOverline}</span>
              </div>
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

      {/* ── Misyon & Vizyon ── */}
      <section className="py-24 md:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-100">
            <motion.div {...fadeUpView(0)} className="bg-white pr-0 lg:pr-16 pb-16 lg:pb-0 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{c.mission.label}</p>
                <h2 className="text-xl md:text-2xl font-bold text-dark leading-snug">{c.mission.heading}</h2>
                <p className="text-base text-slate-500 leading-relaxed">{c.mission.text}</p>
              </div>
            </motion.div>
            <motion.div {...fadeUpView(0.1)} className="bg-white pl-0 lg:pl-16 pt-16 lg:pt-0 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{c.vision.label}</p>
                <h2 className="text-xl md:text-2xl font-bold text-dark leading-snug">{c.vision.heading}</h2>
                <p className="text-base text-slate-500 leading-relaxed">{c.vision.text}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── İstatistikler ── */}
      <section ref={statsRef} className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUpView()} className="flex items-center gap-3 mb-12">
            <div style={{ height: '1px', width: '24px', background: 'linear-gradient(to right, #1b5fc1, #4EA8FF)' }} />
            <span style={{ fontFamily:"'Albert Sans',sans-serif", fontSize:'1rem', fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', background:'linear-gradient(to right,#1b5fc1,#4EA8FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{c.statsOverline}</span>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {c.stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUpView(i * 0.08)}
                className="rounded-2xl bg-white border border-primary/20 p-4 md:p-7 flex flex-col gap-2 md:gap-3"
                style={{ boxShadow: '0 0 18px rgba(78,168,255,0.12), 0 0 40px rgba(27,95,193,0.06)' }}
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none" style={{ color: '#1b5fc1' }}>
                  <CountUp {...statsData[i]} delay={i * 150} active={statsVisible} />
                </p>
                <p className="text-sm text-slate-500 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
