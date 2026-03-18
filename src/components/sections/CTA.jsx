import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

export default function CTA() {
  const { lang } = useLang()
  const t = i18n[lang].cta

  return (
    <section className="relative bg-linear-to-b from-slate-100 to-slate-200" id="iletisim">

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-28 text-center">

        {/* Üst etiket */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {t.badge}
        </motion.div>

        {/* Ana başlık */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight"
        >
          {t.h2}
        </motion.h2>

        {/* Alt metin */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
          className="mt-7 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto"
        >
          {t.paragraph}
        </motion.p>

        {/* Butonlar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.22 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-dark text-white text-[15px] font-bold hover:bg-primary transition-colors duration-300 shadow-md hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {t.ctaPrimary}
            <ArrowRight size={15} />
          </Link>
          <a
            href="mailto:info@hcdijital.com.tr"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-slate-300 text-slate-600 text-[15px] font-semibold hover:border-dark hover:text-dark transition-all duration-200"
          >
            <Phone size={15} />
            {t.ctaSecondary}
          </a>
        </motion.div>

        {/* Alt not */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-slate-400 text-sm"
        >
          {t.note}
        </motion.p>

      </div>

    </section>
  )
}
