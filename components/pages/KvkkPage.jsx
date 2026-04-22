'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const sections = {
  tr: [
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
  ],
  en: [
    {
      title: '1. Data Controller',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-2">
            In accordance with applicable data protection law, your personal data is processed by the data controller identified below:
          </p>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-dark">Data Controller:</strong> HC Digital<br />
            <strong className="text-dark">Contact:</strong> info@hcdijital.com.tr
          </p>
        </>
      ),
    },
    {
      title: '2. Personal Data Collected',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            The following personal data may be collected through our website via various channels:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>IP address and traffic data</li>
            <li>Location data (on mobile use)</li>
            <li>Feedback and support requests</li>
            <li>Form submission content</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. Purposes of Processing Personal Data',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            The collected data is processed for the following purposes:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Providing information about our services</li>
            <li>Responding to contact requests</li>
            <li>Improving user experience</li>
            <li>Fulfilling legal obligations</li>
            <li>Ensuring security processes</li>
            <li>Statistical analysis and reporting</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Data Retention Period',
      content: (
        <p className="text-slate-600 leading-relaxed">
          Personal data is retained for as long as required by the purpose of processing. Upon expiry, data is securely deleted, destroyed, or anonymized.
        </p>
      ),
    },
    {
      title: '5. Data Transfers',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            Personal data may be shared on a limited basis and in accordance with applicable law with the following parties, where required by legal obligations or service needs:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Authorized public institutions</li>
            <li>Server and infrastructure providers</li>
            <li>Business partners and solution providers</li>
          </ul>
        </>
      ),
    },
    {
      title: '6. Rights of the Data Subject',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-3">
            As a data subject, you have the following rights:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>To learn whether your personal data is being processed</li>
            <li>To request information if it has been processed</li>
            <li>To learn the purpose of processing and whether it is used appropriately</li>
            <li>To learn if it has been transferred to third parties domestically or abroad</li>
            <li>To request correction of incomplete or incorrectly processed data</li>
            <li>To request deletion or destruction of data within legal conditions</li>
            <li>To object to a result arising against you from analysis by automated systems</li>
            <li>To claim compensation in case of material or moral damage</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-4">
            To exercise your rights, you may send an email to <a href="mailto:info@hcdijital.com.tr" className="text-dark font-medium underline underline-offset-2">info@hcdijital.com.tr</a>.
          </p>
        </>
      ),
    },
  ],
}

const intro = {
  tr: 'HC Dijital olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kullanıcılarımızın kişisel verilerinin gizliliğini ve güvenliğini en üst düzeyde korumayı taahhüt ederiz. İşbu metin, hangi kişisel verilerin ne şekilde işlendiği, saklandığı ve haklarınızın neler olduğu hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.',
  en: 'At HC Digital, we are committed to protecting the privacy and security of our users\' personal data at the highest level in accordance with applicable personal data protection legislation. This text has been prepared to inform you about which personal data is processed, how it is stored, and what your rights are.',
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

export default function KvkkPage() {
  const { lang } = useLang()
  const list = sections[lang]

  return (
    <div className="bg-white text-dark">
      <Header solid />

      <main className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
          {lang === 'en' ? 'Data Protection & Privacy Notice' : 'Kişisel Verilerin Korunması Kanunu Hakkında Aydınlatma Metni'}
        </h1>
        <p className="text-sm text-slate-400 mb-12">
          {lang === 'en' ? 'Last updated: March 2025' : 'Son güncelleme: Mart 2025'}
        </p>

        <p className="text-slate-600 leading-relaxed mb-10">{intro[lang]}</p>

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
