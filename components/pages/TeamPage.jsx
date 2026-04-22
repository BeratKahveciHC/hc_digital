'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import _ersanBickioglu  from '../../assets/team/ersan-bickioglu.webp'
import _hasanOguz        from '../../assets/team/hasan-oguz.webp'
import _batuhanKucukkisa from '../../assets/team/batuhan-kucukkisa.webp'
import _denizYetim       from '../../assets/team/deniz-yetim.webp'
import _zerenKorkmaz     from '../../assets/team/zeren-korkmaz.webp'
import _beratKaanSeven   from '../../assets/team/berat-kaan-seven.webp'
import _beratKahveci     from '../../assets/team/berat-kahveci.webp'
const s = (x) => x?.src ?? x
const ersanBickioglu  = s(_ersanBickioglu)
const hasanOguz       = s(_hasanOguz)
const batuhanKucukkisa = s(_batuhanKucukkisa)
const denizYetim      = s(_denizYetim)
const zerenKorkmaz    = s(_zerenKorkmaz)
const beratKaanSeven  = s(_beratKaanSeven)
const beratKahveci    = s(_beratKahveci)

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

const team = [
  {
    row: 'founder',
    members: [
      {
        name: 'Ersan Biçkioğlu',
        role: { tr: 'Kurucu', en: 'Founder' },
        img: ersanBickioglu,
        cv: {
          tr: [
            'Girişimin kurucusu ve yöneticisi Ersan Biçkioğlu, sağlık sektörü bilgi teknolojileri, dijital dönüşüm ve yapay zekâ entegrasyonu alanında 20 yılı aşkın deneyime sahiptir. İstanbul Üniversitesi Fizik lisansı yanı sıra, İstanbul Üniversitesi\'nde İşletme yüksek lisansı, Cumhuriyet Üniversitesi Sağlık Kurumları Yöneticiliği, İstinye Üniversitesi Veri Bilimi ve A. Yesevi Üniversitesi\'nde Bilgisayar Mühendisliği yüksek lisanslarını tamamlamış, bilgisayar programcılığı temelinde güçlü bir altyapıya sahiptir. İş Mevzuatı, Sağlık Bütçe Sistemleri, İş Sağlığı Güvenliği, Dijital Dönüşüm ve Mali Süreçlerde uzmanlıklara sahiptir.',
            'Kariyeri boyunca Türkiye\'nin önde gelen sağlık kuruluşlarında (MEDICANA, MLPCARE — Medicalpark & Liv Hospital) bilgi sistemleri, bütçe yönetimi ve dijital dönüşüm projelerini başarıyla yönetmiş; yapay zekâ destekli iş çözümleri geliştirilmesine liderlik etmiştir. Sağlık sektörüne çözümler sunan yazılım şirketinde Proje Yöneticiliği yapmış, aile şirketinde kurucu olarak yöneticilik yapmıştır. Hâlihazırda start-up ekosisteminde aktif bir mentor olarak sektörel bilgi birikimini girişimcilere aktarmaktadır.',
            'Sahip olduğu yapay zekâ entegrasyonu, dijital dönüşüm stratejileri, proje yönetimi, iş geliştirme ve sağlık bilişim sistemleri alanındaki uzmanlık, HC Dijital\'in teknoloji tabanlı iş modelini güçlendirmekte ve sürdürülebilir rekabet avantajı yaratmaktadır. Ekosistem geliştirme ve start-up hızlandırma konularındaki deneyimi, girişimin ölçeklenme sürecine doğrudan katkı sağlamaktadır. SMMM belgesi, çeşitli hukuki/finansal eğitimleri ve insan kaynakları yönetimi ile iş sağlığı güvenliği konularındaki uzmanlığı, hem teknik hem mali boyutta girişime stratejik yön verecek donanımda olmasını sağlamaktadır.',
          ],
          en: [
            'Ersan Biçkioğlu, founder and director of the venture, has over 20 years of experience in healthcare information technology, digital transformation, and artificial intelligence integration. In addition to his Physics degree from Istanbul University, he holds an MBA from Istanbul University, a Healthcare Management degree from Cumhuriyet University, a Data Science degree from İstinye University, and a Computer Engineering master\'s degree from A. Yesevi University, backed by a strong foundation in computer programming. He specializes in Labor Law, Healthcare Budget Systems, Occupational Health & Safety, Digital Transformation, and Financial Processes.',
            'Throughout his career, he has successfully managed information systems, budget management, and digital transformation projects at Turkey\'s leading healthcare institutions (MEDICANA, MLPCARE — Medicalpark & Liv Hospital) and led the development of AI-powered business solutions. He has served as Project Manager at a software company providing solutions to the healthcare sector and as a founding director of a family business. He currently serves as an active mentor in the start-up ecosystem, sharing his industry expertise with entrepreneurs.',
            'His expertise in AI integration, digital transformation strategies, project management, business development, and healthcare information systems strengthens HC Digital\'s technology-based business model and creates a sustainable competitive advantage. His experience in ecosystem development and start-up acceleration directly contributes to the venture\'s scaling process. His CPA certification, various legal/financial training, and expert-level knowledge in human resources management and occupational health & safety equip him to provide strategic direction to the venture in both technical and financial dimensions.',
          ],
        },
      },
    ],
  },
  {
    row: 'advisor',
    members: [
      { name: 'Dr. Hasan Oğuz', role: { tr: 'Danışman', en: 'Advisor' }, img: hasanOguz, cv: null },
    ],
  },
  {
    row: 'team',
    members: [
      { name: 'Batuhan Küçükkısa', role: { tr: 'Yazılım Geliştirme Uzmanı', en: 'Full Stack Developer' },              img: batuhanKucukkisa, cv: null },
      { name: 'Deniz Yetim',       role: { tr: 'Yazılım Geliştirme Uzmanı', en: 'Full Stack Developer' },              img: denizYetim,       cv: null },
      { name: 'Zeren Korkmaz',     role: { tr: 'Yazılım Geliştirme Uzmanı', en: 'Artificial Intelligence Developer' }, img: zerenKorkmaz,     cv: null },
      { name: 'Berat Kaan Seven',  role: { tr: 'Ürün ve Proje Müdürü',      en: 'Product Manager' },                   img: beratKaanSeven,   cv: null },
      { name: 'Berat Kahveci',     role: { tr: 'Yazılım Geliştirme Uzmanı', en: 'Full Stack Developer' },              img: beratKahveci,     cv: null },
    ],
  },
]

function MemberCard({ member, lang, onOpen, delay = 0, size = 'md' }) {
  const hasCv = !!member.cv
  return (
    <motion.div
      {...fadeUpView(delay)}
      className={`flex flex-col gap-4 ${size === 'lg' ? 'w-full sm:w-64' : ''}`}
    >
      <div
        onClick={() => hasCv && onOpen(member)}
        className={`aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 relative group ${hasCv ? 'cursor-pointer' : ''}`}
      >
        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        {hasCv && (
          <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
            <span className="text-white text-xs font-semibold tracking-widest uppercase">
              {lang === 'en' ? 'View CV' : 'CV\'yi Gör'}
            </span>
          </div>
        )}
      </div>
      <div>
        <p className={`font-bold text-dark leading-snug ${size === 'lg' ? 'text-base' : 'text-sm'}`}>{member.name}</p>
        <p className="text-xs text-slate-400 mt-1">{member.role[lang]}</p>
      </div>
    </motion.div>
  )
}

function CvModal({ member, lang, onClose }) {
  const paragraphs = member.cv[lang] || member.cv.tr
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center gap-4 p-6 border-b border-slate-100">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-dark leading-tight">{member.name}</p>
              <p className="text-xs text-slate-400 mt-1">{member.role[lang]}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              aria-label="Kapat"
            >
              <X size={16} className="text-slate-500" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 flex flex-col gap-4">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-sm text-slate-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function TeamPage() {
  const { lang } = useLang()
  const [selected, setSelected] = useState(null)

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
            <span className="text-white/60">{lang === 'en' ? 'Our Team' : 'Ekibimiz'}</span>
          </div>

          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-3 mb-3">
              <div style={{ height: '1px', width: '24px', background: 'linear-gradient(to right, #1b5fc1, #4EA8FF)' }} />
              <span style={{ fontFamily:"'Albert Sans',sans-serif", fontSize:'1rem', fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', background:'linear-gradient(to right,#1b5fc1,#4EA8FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{lang === 'en' ? 'The People Behind HC Digital' : 'HC Dijital\'in Arkasındaki İnsanlar'}</span>
            </div>
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
            <div className="flex items-center gap-3 mb-8">
              <div style={{ height: '1px', width: '24px', background: 'linear-gradient(to right, #1b5fc1, #4EA8FF)' }} />
              <span style={{ fontFamily:"'Albert Sans',sans-serif", fontSize:'1rem', fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', background:'linear-gradient(to right,#1b5fc1,#4EA8FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{lang === 'en' ? 'Founder' : 'Kurucu'}</span>
            </div>
            <div className="flex justify-center">
              {team[0].members.map((p, i) => (
                <MemberCard key={i} member={p} lang={lang} onOpen={setSelected} delay={0} size="lg" />
              ))}
            </div>
          </div>

          {/* Danışman */}
          <div className="border-t border-slate-100 pt-16">
            <div className="flex items-center gap-3 mb-8">
              <div style={{ height: '1px', width: '24px', background: 'linear-gradient(to right, #1b5fc1, #4EA8FF)' }} />
              <span style={{ fontFamily:"'Albert Sans',sans-serif", fontSize:'1rem', fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', background:'linear-gradient(to right,#1b5fc1,#4EA8FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{lang === 'en' ? 'Advisor' : 'Danışman'}</span>
            </div>
            <div className="flex justify-center">
              {team[1].members.map((p, i) => (
                <MemberCard key={i} member={p} lang={lang} onOpen={setSelected} delay={0.05} size="lg" />
              ))}
            </div>
          </div>

          {/* Ekip */}
          <div className="border-t border-slate-100 pt-16">
            <div className="flex items-center gap-3 mb-8">
              <div style={{ height: '1px', width: '24px', background: 'linear-gradient(to right, #1b5fc1, #4EA8FF)' }} />
              <span style={{ fontFamily:"'Albert Sans',sans-serif", fontSize:'1rem', fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', background:'linear-gradient(to right,#1b5fc1,#4EA8FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{lang === 'en' ? 'Team' : 'Ekip'}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {team[2].members.map((p, i) => (
                <MemberCard key={i} member={p} lang={lang} onOpen={setSelected} delay={i * 0.07} />
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />

      {/* ── CV Modal ── */}
      {selected && (
        <CvModal member={selected} lang={lang} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
