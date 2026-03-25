import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const sections = [
  {
    title: '1. Çerez Nedir?',
    content: (
      <p className="text-slate-600 leading-relaxed">
        Çerezler (cookies), ziyaret ettiğiniz web siteleri tarafından tarayıcınıza gönderilen küçük veri dosyalarıdır. Bu dosyalar, ziyaretçilerin site içerisindeki tercihlerini hatırlamak ve kullanıcı deneyimini iyileştirmek için kullanılır.
      </p>
    ),
  },
  {
    title: '2. Çerez Türleri',
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-base font-semibold text-dark mb-1.5">a) Zorunlu Çerezler</h3>
          <p className="text-slate-600 leading-relaxed">
            Web sitesinin düzgün çalışması için gereklidir. Oturum yönetimi, güvenlik gibi temel işlevleri sağlar.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-dark mb-1.5">b) İşlevsel Çerezler</h3>
          <p className="text-slate-600 leading-relaxed">
            Kullanıcı tercihlerini (dil, bölge, temalar) hatırlayarak daha kişiselleştirilmiş bir deneyim sunar.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-dark mb-1.5">c) Analitik ve Performans Çerezleri</h3>
          <p className="text-slate-600 leading-relaxed">
            Web sitemizin kullanım istatistiklerini toplar, sayfa görüntüleme sayıları ve tıklama oranları gibi verileri analiz eder.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-dark mb-1.5">d) Reklam ve Hedefleme Çerezleri</h3>
          <p className="text-slate-600 leading-relaxed">
            Kullanıcılara ilgi alanlarına uygun reklamlar göstermek için kullanılır. Üçüncü taraf reklam hizmetleriyle entegre olabilir.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: '3. Çerezlerin Kullanım Amaçları',
    content: (
      <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
        <li>Web sitesinin daha hızlı ve güvenli çalışmasını sağlamak</li>
        <li>Site içeriğini ve kullanıcı deneyimini kişiselleştirmek</li>
        <li>İstatistiksel veriler toplayarak performansı değerlendirmek</li>
        <li>Hizmetleri tanıtmak ve pazarlama faaliyetlerini yürütmek</li>
      </ul>
    ),
  },
  {
    title: '4. Çerezleri Yönetme ve Kontrol Etme',
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Tarayıcınız üzerinden çerezleri yönetebilir veya tamamen devre dışı bırakabilirsiniz. Ancak bazı çerezlerin devre dışı bırakılması, sitenin belirli bölümlerinin doğru çalışmamasına neden olabilir.
        </p>
        <p className="text-slate-600 leading-relaxed mb-3 font-medium">Tarayıcı Bazlı Ayarlar:</p>
        <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
          <li>Google Chrome: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
          <li>Mozilla Firefox: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
          <li>Safari: Ayarlar &gt; Gizlilik &gt; Çerezleri Engelle</li>
          <li>Microsoft Edge: Ayarlar &gt; Site izinleri &gt; Çerezler ve site verileri</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Üçüncü Taraf Çerezleri',
    content: (
      <p className="text-slate-600 leading-relaxed">
        Web sitemiz, Google Analytics, Meta Pixel gibi analiz ve reklam sağlayıcılarının çerezlerini kullanabilir. Bu çerezler, ilgili üçüncü tarafların kendi politikalarına tabidir.
      </p>
    ),
  },
  {
    title: '6. Güncellemeler ve Değişiklikler',
    content: (
      <p className="text-slate-600 leading-relaxed">
        Bu politika, yasal düzenlemeler veya site işlevleri değiştikçe güncellenebilir. En güncel çerez politikası versiyonu her zaman bu sayfada yayınlanır.
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

export default function CerezPage() {
  return (
    <div className="bg-white text-dark">
      <Header solid />

      <main className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
          Çerez Politikası
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
