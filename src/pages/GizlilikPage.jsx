import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function GizlilikPage() {
  return (
    <div className="bg-white text-dark">
      <Header white />

      <main className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
          Gizlilik Politikası
        </h1>
        <p className="text-sm text-slate-400 mb-12">Son güncelleme: Mart 2025</p>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-dark mb-3">1. Gizlilik İlkemiz</h2>
          <p className="text-slate-600 leading-relaxed">
            Kullanıcı bilgileriniz, yalnızca açık rıza veya yasal zorunluluklar doğrultusunda işlenir. Verilerin toplanması, kullanımı, paylaşımı ve saklanması süreçlerinde şeffaflık ilkesi benimsenmiştir.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-dark mb-3">2. Toplanan Bilgi Türleri</h2>
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
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-dark mb-3">3. Bilgilerin Toplanma Yöntemleri</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Bilgileriniz şu yollarla toplanabilir:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>İletişim formlarının doldurulması</li>
            <li>Bülten aboneliği</li>
            <li>Çerezler aracılığıyla otomatik toplama</li>
            <li>Kullanıcı destek talepleri</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-dark mb-3">4. Kullanım Amaçları</h2>
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
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-dark mb-3">5. Bilgilerin Paylaşımı</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Bilgileriniz asla izinsiz olarak üçüncü kişilerle paylaşılmaz. Ancak aşağıdaki durumlarda paylaşım söz konusu olabilir:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-1.5 leading-relaxed">
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Resmi makamların talebi</li>
            <li>Alt hizmet sağlayıcılarla teknik gereklilikler çerçevesinde</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-dark mb-3">6. Veri Güvenliği</h2>
          <p className="text-slate-600 leading-relaxed">
            HC Dijital, kişisel verilerinizi korumak adına güncel güvenlik önlemleri uygulamaktadır. Verileriniz; erişim denetimleri, şifreleme ve sunucu güvenliği gibi teknik önlemlerle korunur.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-dark mb-3">7. Çocukların Gizliliği</h2>
          <p className="text-slate-600 leading-relaxed">
            Web sitemiz 18 yaş altı kullanıcıları hedeflemez. Bilerek çocuklardan veri toplanmaz. Farkında olmadan böyle bir veri işlenirse en kısa sürede silinir.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-dark mb-3">8. Gizlilik Politikası Güncellemeleri</h2>
          <p className="text-slate-600 leading-relaxed">
            Bu gizlilik bildirimi zaman zaman güncellenebilir. Herhangi bir değişiklik durumunda, revize edilen metin web sitemizde yayınlanarak yürürlüğe girer.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
