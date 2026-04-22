'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const sections = {
  tr: [
    {
      title: '1. Gizlilik İlkemiz',
      content: (
        <p className="text-slate-600 leading-relaxed">
          Kullanıcı bilgileriniz, yalnızca açık rıza veya yasal zorunluluklar doğrultusunda işlenir. Verilerin toplanması, kullanımı, paylaşımı ve saklanması süreçlerinde şeffaflık ilkesi benimsenmiştir.
        </p>
      ),
    },
    {
      title: '2. Toplanan Bilgi Türleri',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            Web sitemizi ziyaret ettiğinizde aşağıdaki bilgiler tarafımızca toplanabilir:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Adınız, soyadınız</li>
            <li>E-posta adresiniz</li>
            <li>Telefon numaranız</li>
            <li>IP adresiniz ve cihaz bilgileri</li>
            <li>Tarayıcı ve kullanım istatistikleri</li>
            <li>Talep ve geri bildirim içerikleri</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. Bilgilerin Toplanma Yöntemleri',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            Bilgileriniz şu yollarla toplanabilir:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>İletişim formlarının doldurulması</li>
            <li>Bülten aboneliği</li>
            <li>Çerezler aracılığıyla otomatik toplama</li>
            <li>Kullanıcı destek talepleri</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Kullanım Amaçları',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            Toplanan bilgiler aşağıdaki amaçlar için kullanılmaktadır:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Size en iyi hizmeti sunmak</li>
            <li>Taleplerinize hızlı geri dönüş sağlamak</li>
            <li>Web sitesi içeriğini kişiselleştirmek</li>
            <li>Analiz ve iyileştirme çalışmaları yürütmek</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
          </ul>
        </>
      ),
    },
    {
      title: '5. Bilgilerin Paylaşımı',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            Bilgileriniz asla izinsiz olarak üçüncü kişilerle paylaşılmaz. Ancak aşağıdaki durumlarda paylaşım söz konusu olabilir:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Resmi makamların talebi</li>
            <li>Alt hizmet sağlayıcılarla teknik gereklilikler çerçevesinde</li>
          </ul>
        </>
      ),
    },
    {
      title: '6. Veri Güvenliği',
      content: (
        <p className="text-slate-600 leading-relaxed">
          HC Dijital, kişisel verilerinizi korumak adına güncel güvenlik önlemleri uygulamaktadır. Verileriniz; erişim denetimleri, şifreleme ve sunucu güvenliği gibi teknik önlemlerle korunur.
        </p>
      ),
    },
    {
      title: '7. Gizlilik Politikası Güncellemeleri',
      content: (
        <p className="text-slate-600 leading-relaxed">
          Bu gizlilik bildirimi zaman zaman güncellenebilir. Herhangi bir değişiklik durumunda, revize edilen metin web sitemizde yayınlanarak yürürlüğe girer.
        </p>
      ),
    },
  ],
  en: [
    {
      title: '1. Our Privacy Principle',
      content: (
        <p className="text-slate-600 leading-relaxed">
          Your information is processed only with explicit consent or as required by law. We are committed to transparency in the collection, use, sharing, and storage of your data.
        </p>
      ),
    },
    {
      title: '2. Types of Information Collected',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            When you visit our website, we may collect the following information:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Your first and last name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>Your IP address and device information</li>
            <li>Browser and usage statistics</li>
            <li>Request and feedback content</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. Methods of Data Collection',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            Your information may be collected through the following means:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Completing contact forms</li>
            <li>Newsletter subscription</li>
            <li>Automatic collection via cookies</li>
            <li>User support requests</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Purposes of Use',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            The collected information is used for the following purposes:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>To provide you with the best service</li>
            <li>To respond to your requests promptly</li>
            <li>To personalize website content</li>
            <li>To conduct analysis and improvement activities</li>
            <li>To fulfill legal obligations</li>
          </ul>
        </>
      ),
    },
    {
      title: '5. Sharing of Information',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            Your information is never shared with third parties without permission. However, sharing may occur in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Fulfillment of legal obligations</li>
            <li>Request by official authorities</li>
            <li>With sub-service providers within the scope of technical requirements</li>
          </ul>
        </>
      ),
    },
    {
      title: '6. Data Security',
      content: (
        <p className="text-slate-600 leading-relaxed">
          HC Digital applies up-to-date security measures to protect your personal data. Your data is protected by technical measures such as access controls, encryption, and server security.
        </p>
      ),
    },
    {
      title: '7. Privacy Policy Updates',
      content: (
        <p className="text-slate-600 leading-relaxed">
          This privacy notice may be updated from time to time. In the event of any changes, the revised text will be published on our website and will come into effect immediately.
        </p>
      ),
    },
  ],
}

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-base font-semibold text-dark group-hover:text-primary transition-colors duration-200">{title}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-250 pb-6' : 'max-h-0'}`}>
        {content}
      </div>
    </div>
  )
}

export default function GizlilikPage() {
  const { lang } = useLang()
  const list = sections[lang]

  return (
    <div className="bg-white text-dark">
      <Header solid />

      <main className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
          {lang === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
        </h1>
        <p className="text-sm text-slate-400 mb-12">
          {lang === 'en' ? 'Last updated: March 2025' : 'Son güncelleme: Mart 2025'}
        </p>

        <div>
          {list.map((s) => (
            <Accordion key={s.title} title={s.title} content={s.content} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
