import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowUpRight, Linkedin, Instagram } from 'lucide-react'
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
    breadcrumb: 'İletişim',
    overline: 'Bize Ulaşın',
    h1a: 'Projeniz hakkında',
    h1b: 'konuşalım.',
    heroParagraph: 'Sorularınız, iş birliği teklifleriniz veya demo talepleriniz için bize yazın. Ortalama yanıt süremiz 24 saattir.',
    formHeading: 'Mesaj Gönderin',
    fields: {
      name: 'Ad Soyad',
      email: 'E-posta',
      subject: 'Konu',
      message: 'Mesajınız',
      send: 'Gönder',
      sending: 'Gönderiliyor...',
      placeholder: {
        name: 'Adınızı ve soyadınızı girin',
        email: 'ornek@sirket.com',
        subject: 'Nasıl yardımcı olabiliriz?',
        message: 'Projeniz veya talebiniz hakkında bize bilgi verin...',
      },
    },
    successMsg: 'Mesajınız iletildi. En kısa sürede size geri döneceğiz.',
    infoHeading: 'İletişim Bilgileri',
    email: 'info@hcdijital.com.tr',
    address: 'Ayazağa, Vadis Istanbul Park Etabı\nKemerburgaz Cad. D:7A Blok\n34396 Sarıyer/İstanbul',
    addressLabel: 'Merkez Ofis',
    socialLabel: 'Sosyal Medya',
    subjectsHeading: 'Ne hakkında konuşmak istersiniz?',
    subjects: [
      'Demo Talebi',
      'Fiyat Bilgisi',
      'Teknik Destek',
      'İş Birliği',
      'Kariyer',
    ],
  },
  en: {
    breadcrumb: 'Contact',
    overline: 'Get in Touch',
    h1a: "Let's talk about",
    h1b: 'your project.',
    heroParagraph: 'Write to us for your questions, partnership proposals, or demo requests. Our average response time is 24 hours.',
    formHeading: 'Send a Message',
    fields: {
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send',
      sending: 'Sending...',
      placeholder: {
        name: 'Enter your full name',
        email: 'example@company.com',
        subject: 'How can we help you?',
        message: 'Tell us about your project or request...',
      },
    },
    successMsg: 'Your message has been sent. We will get back to you as soon as possible.',
    infoHeading: 'Contact Information',
    email: 'info@hcdijital.com.tr',
    address: 'Ayazağa, Vadis Istanbul Park Etabı\nKemerburgaz Cad. D:7A Blok\n34396 Sarıyer/İstanbul',
    addressLabel: 'Headquarters',
    socialLabel: 'Social Media',
    subjectsHeading: 'What would you like to talk about?',
    subjects: [
      'Demo Request',
      'Pricing',
      'Technical Support',
      'Partnership',
      'Career',
    ],
  },
}

export default function ContactPage() {
  const { lang } = useLang()
  const c = content[lang]

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      alert('Mail gönderilemedi. Lütfen tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

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

      {/* ── Form + Bilgiler ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-20">

            {/* Form */}
            <motion.div {...fadeUpView(0)}>
              <h2 className="text-2xl font-bold text-dark mb-10">{c.formHeading}</h2>

              {/* Hızlı konu seçimi */}
              <div className="mb-8">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-4">{c.subjectsHeading}</p>
                <div className="flex flex-wrap gap-2">
                  {c.subjects.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, subject: s }))}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                        form.subject === s
                          ? 'bg-dark text-white border-dark'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-dark'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-dark">{c.successMsg}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-500 tracking-wide">{c.fields.name}</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={c.fields.placeholder.name}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-dark placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-500 tracking-wide">{c.fields.email}</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder={c.fields.placeholder.email}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-dark placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-500 tracking-wide">{c.fields.subject}</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder={c.fields.placeholder.subject}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-dark placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-500 tracking-wide">{c.fields.message}</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={c.fields.placeholder.message}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-dark placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-dark text-white text-sm font-semibold hover:bg-primary transition-colors duration-300 disabled:opacity-60"
                    >
                      {loading ? c.fields.sending : c.fields.send}
                      {!loading && <ArrowUpRight size={15} />}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Sağ — İletişim Bilgileri */}
            <motion.div {...fadeUpView(0.1)} className="flex flex-col gap-10">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-6">{c.infoHeading}</p>

                {/* Email */}
                <a href={`mailto:${c.email}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center text-primary shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-1">E-posta</p>
                    <p className="text-sm font-semibold text-dark group-hover:text-primary transition-colors duration-200">{c.email}</p>
                  </div>
                </a>

                {/* Adres */}
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-1">{c.addressLabel}</p>
                    <p className="text-sm font-semibold text-dark leading-relaxed whitespace-pre-line">{c.address}</p>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-5">{c.socialLabel}</p>
                <div className="flex flex-col gap-3">
                  <a href="https://www.linkedin.com/company/hc-dijital-sağlık-teknolojileri/" target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm font-semibold text-slate-600 hover:text-dark transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center group-hover:border-slate-400 transition-colors duration-200">
                      <Linkedin size={15} />
                    </div>
                    LinkedIn
                    <ArrowUpRight size={13} className="text-slate-300 group-hover:text-dark transition-colors duration-200" />
                  </a>
                  <a href="https://instagram.com/hcdijital" target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm font-semibold text-slate-600 hover:text-dark transition-colors duration-200">
                    <div className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center group-hover:border-slate-400 transition-colors duration-200">
                      <Instagram size={15} />
                    </div>
                    Instagram
                    <ArrowUpRight size={13} className="text-slate-300 group-hover:text-dark transition-colors duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
