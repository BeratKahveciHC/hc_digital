'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

export default function CTA() {
  const { lang } = useLang()
  const t = i18n[lang].cta

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError(lang === 'tr' ? 'Bir hata oluştu, lütfen tekrar deneyin.' : 'Something went wrong, please try again.')
      }
    } catch {
      setError(lang === 'tr' ? 'Sunucuya ulaşılamıyor.' : 'Cannot reach server.')
    } finally {
      setLoading(false)
    }
  }

  const labels = lang === 'tr'
    ? { name: 'Ad Soyad', email: 'E-posta', phone: 'Telefon', message: 'Mesajınız', send: 'Gönder', sent: 'Mesajınız iletildi, en kısa sürede dönüş yapacağız.' }
    : { name: 'Full Name', email: 'Email', phone: 'Phone', message: 'Your Message', send: 'Send', sent: 'Your message has been sent, we will get back to you shortly.' }

  return (
    <section className="relative bg-linear-to-b from-slate-100 to-slate-200" id="iletisim">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Sol: Metin ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">
              {t.h2}
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed">
              {t.paragraph}
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <div className="inline-flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <Mail size={16} className="text-dark" />
                </div>
                <span className="text-sm font-semibold">info@hcdijital.com.tr</span>
              </div>
              <div className="inline-flex items-start gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-dark" />
                </div>
                <span className="text-sm font-semibold leading-relaxed">
                  Ayazağa, Vadis Istanbul Park Etabı<br />
                  Kemerburgaz Cad. D:7A Blok<br />
                  34396 Sarıyer/İstanbul
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Sağ: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <ArrowRight size={24} className="text-accent" />
                </div>
                <p className="text-base font-semibold text-dark">{labels.sent}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">{labels.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handle}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-dark text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">{labels.email}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handle}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-dark text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">{labels.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-dark text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">{labels.message}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handle}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-dark text-sm focus:outline-none focus:border-primary focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-neon inline-flex items-center justify-center gap-2.5 rounded-full bg-dark text-white px-7 py-3.5 text-[15px] font-semibold hover:bg-primary transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? '...' : labels.send}
                  {!loading && <ArrowRight size={15} />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
