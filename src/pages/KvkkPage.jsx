import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const sections = [
  {
    title: '1. Veri Sorumlusu',
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-2">
          KVKK uyarınca, kişisel verileriniz aşağıda belirtilen veri sorumlusu tarafından işlenmektedir:
        </p>
        <p className="text-slate-600 leading-relaxed">
          <strong className="text-dark">Veri Sorumlusu:</strong> HC Dijital<br />
          <strong className="text-dark">İletişim:</strong> info@hcdijital.com.tr
        </p>
      </>
    ),
  },
  {
    title: '2. Toplanan Kişisel Veriler',
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">
          Aşağıdaki kişisel veriler, web sitemiz üzerinden çeşitli kanallarla toplanabilmektedir:
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
          <li>Ad, soyad</li>
          <li>E-posta adresi</li>
          <li>Telefon numarası</li>
          <li>IP adresi ve trafik verileri</li>
          <li>Konum verisi (mobil kullanımda)</li>
          <li>Geri bildirim ve destek talepleri</li>
          <li>Form doldurma içerikleri</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Kişisel Verilerin İşlenme Amaçları',
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">
          Toplanan veriler aşağıdaki amaçlarla işlenmektedir:
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
          <li>Hizmetlerimiz hakkında bilgilendirme</li>
          <li>İletişim taleplerinin karşılanması</li>
          <li>Kullanıcı deneyimini iyileştirme</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          <li>Güvenlik süreçlerinin sağlanması</li>
          <li>İstatistiksel analiz ve raporlama</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Verilerin Saklanma Süresi',
    content: (
      <p className="text-slate-600 leading-relaxed">
        Kişisel veriler, işleme amacının gerektirdiği süre boyunca saklanır. Süre bitiminde, veriler güvenli yöntemlerle silinir, yok edilir veya anonim hale getirilir.
      </p>
    ),
  },
  {
    title: '5. Verilerin Aktarımı',
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">
          Kişisel veriler, yasal zorunluluklar veya hizmetin gereklilikleri doğrultusunda aşağıdaki taraflarla sınırlı olarak ve KVKK'ya uygun şekilde paylaşılabilir:
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
          <li>Yetkili kamu kurumları</li>
          <li>Sunucu ve altyapı sağlayıcıları</li>
          <li>İş ortakları ve çözüm sağlayıcılar</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. İlgili Kişinin Hakları (KVKK Madde 11)',
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">
          Veri sahibi olarak aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içi veya yurt dışı üçüncü kişilere aktarılmışsa bunu öğrenme</li>
          <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
          <li>Kanuni şartlar dâhilinde verilerin silinmesini veya yok edilmesini isteme</li>
          <li>Otomatik sistemlerle analiz sonucu aleyhinize bir sonucun çıkmasına itiraz etme</li>
          <li>Maddi/manevi zarar halinde tazminat talep etme</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mt-4">
          Haklarınızı kullanmak için <a href="mailto:info@hcdijital.com.tr" className="text-dark font-medium underline underline-offset-2">info@hcdijital.com.tr</a> adresine e-posta gönderebilirsiniz.
        </p>
      </>
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

export default function KvkkPage() {
  return (
    <div className="bg-white text-dark">
      <Header solid />

      <main className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
          Kişisel Verilerin Korunması Kanunu Hakkında Aydınlatma Metni
        </h1>
        <p className="text-sm text-slate-400 mb-12">Son güncelleme: Mart 2025</p>

        <p className="text-slate-600 leading-relaxed mb-10">
          HC Dijital olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kullanıcılarımızın kişisel verilerinin gizliliğini ve güvenliğini en üst düzeyde korumayı taahhüt ederiz. İşbu metin, hangi kişisel verilerin ne şekilde işlendiği, saklandığı ve haklarınızın neler olduğu hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
        </p>

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
