import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
})

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div {...fadeUp(index * 0.06)} className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-white group-hover:text-white/80 transition-colors duration-200 leading-snug">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 mt-0.5 text-white/30 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-7">
          <p className="text-sm md:text-base text-white/50 leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQSection({ faqs }) {
  const { lang } = useLang()
  const t = i18n[lang].productDetail
  if (!faqs?.length) return null

  return (
    <section className="bg-dark border-t border-white/8 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...fadeUp()} className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">{t.faqOverline}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t.faqH2}</h2>
        </motion.div>
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
