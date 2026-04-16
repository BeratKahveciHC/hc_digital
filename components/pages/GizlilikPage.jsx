'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
// SEO handled by Next.js metadata

const sections = [
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
    title: '7. Çocukların Gizliliği',
    content: (
      <p className="text-slate-600 leading-relaxed">
        Web sitemiz 18 yaş altı kullanıcıları hedeflemez. Bilerek çocuklardan veri toplanmaz. Farkında olmadan böyle bir veri işlenirse en kısa sürede silinir.
      </p>
    ),
  },
  {
    title: '8. Gizlilik Politikası Güncellemeleri',
    content: (
      <p className="text-slate-600 leading-relaxed">
        Bu gizlilik bildirimi zaman zaman güncellenebilir. Herhangi bir değişiklik durumunda, revize edilen metin web sitemizde yayınlanarak yürürlüğe girer.
      </p>
    ),
  },
]

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
  return (
    <div className="bg-white text-dark">
      <Header solid />

      <main className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
          Gizlilik Politikası
        </h1>
        <p className="text-sm text-slate-400 mb-12">Son güncelleme: Mart 2025</p>

        <div>
          {sections.map((s) => (
            <Accordion key={s.title} title={s.title} content={s.content} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
