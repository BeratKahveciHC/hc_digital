import _tercumedHero from '../assets/images/products/tercumed-hero.webp'
import _airxMobile   from '../assets/images/products/airx-mobile.webp'
import _butce2       from '../assets/images/products/butce-2.webp'
import _spiralHero   from '../assets/images/products/spiral-hero.webp'
import _yonHero      from '../assets/images/products/yon-hero.webp'

const s = (x) => x?.src ?? x
const tercumedHero = s(_tercumedHero)
const airxMobile   = s(_airxMobile)
const butce2       = s(_butce2)
const spiralHero   = s(_spiralHero)
const yonHero      = s(_yonHero)

export const news = [
  {
    slug: 'tercumed-ai-kosgeb-tam-puan',
    date: '2026-01-06',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: tercumedHero,
    title: {
      tr: 'TercüMed AI Projesi KOSGEB Tarafından Tam Puanla Kabul Edildi',
      en: 'TercüMed AI Project Accepted by KOSGEB with a Perfect Score',
    },
    summary: {
      tr: 'HC Dijital tarafından sunulan TercüMed AI projesi, KOSGEB hakemleri tarafından yapılan değerlendirme sonucunda 100 tam puan alarak kabul edildi.',
      en: 'The TercüMed AI project submitted by HC Dijital was evaluated by KOSGEB reviewers and accepted with a perfect score of 100.',
    },
    content: {
      tr: [
        'HC Dijital tarafından sunulan TercüMed AI, KOSGEB hakemleri tarafından yapılan değerlendirme sonucunda 100 tam puan almış ve proje kabul edilmiştir.',
        'Tıbbi belgelerdeki dil engelini yapay zekâ ile ortadan kaldırmayı hedefleyen TercüMed AI, taburculuk belgeleri, onam formları ve klinik raporlar gibi içerikleri hasta ve hasta yakını için anlaşılır bir dile dönüştürüyor.',
        'Bu kabul, yalnızca bir destek programına dahil olmaktan öte; projenin teknik geçerliliğinin, inovatif niteliğinin ve toplumsal faydasının bağımsız uzmanlar tarafından tescillenmesi anlamını taşıyor.',
        'HC Dijital bu başarıyı, sağlık teknolojileri alanındaki kararlılığının ve AR-GE kapasitesinin somut bir yansıması olarak değerlendiriyor.',
      ],
      en: [
        'The TercüMed AI project submitted by HC Dijital was evaluated by KOSGEB reviewers and accepted with a perfect score of 100.',
        'TercüMed AI aims to eliminate the language barrier in medical documents using artificial intelligence, converting discharge summaries, consent forms, and clinical reports into language that patients and their families can understand.',
        'This acceptance goes beyond enrollment in a support program — it represents independent expert validation of the project\'s technical merit, innovative character, and societal value.',
        'HC Dijital regards this achievement as a concrete reflection of its commitment to healthcare technology and its R&D capacity.',
      ],
    },
  },
  {
    slug: 'airx-mobil-pdks-kullanima-acildi',
    date: '2025-12-10',
    category: { tr: 'Ürün Lansmanı', en: 'Product Launch' },
    image: airxMobile,
    title: {
      tr: 'AiRX Mobil PDKS Uygulaması Kullanıma Açıldı',
      en: 'AiRX Mobile Time & Attendance App Goes Live',
    },
    summary: {
      tr: 'HC Dijital\'in zaman yönetimi ve iş gücü takibi alanındaki yeni çözümü AiRX resmen kullanıma açıldı.',
      en: 'HC Dijital\'s new workforce and time management solution, AiRX, has officially gone live.',
    },
    content: {
      tr: [
        'HC Dijital\'in zaman yönetimi ve iş gücü takibi alanındaki yeni çözümü AiRX resmen kullanıma açıldı. Mobil PDKS yaklaşımıyla geliştirilen AiRX, giriş-çıkış süreçlerinden vardiya planlamasına, izin yönetiminden fazla mesai takibine kadar birçok operasyonel ihtiyacı tek yapı altında toplamayı hedefliyor.',
        'Günümüzde ekip yönetimi, özellikle sahada, şubelerde, depo yapılarında ve vardiyalı çalışma düzenlerinde sadece takip değil; aynı zamanda hız, netlik ve kayıt disiplini gerektiriyor. AiRX, bu ihtiyaca karşılık veren sade ama güçlü bir yapı sunuyor.',
        'AiRX\'in öne çıkan tarafı, günlük operasyonu karmaşıklaştırmadan düzen altına alması. Çalışan hareketliliğinin yoğun olduğu yapılarda zaman kaybını azaltan, süreçleri görünür hale getiren ve yöneticinin karar alma hızını artıran bir sistem olarak konumlanıyor.',
        'HC Dijital için AiRX\'in kullanıma açılması yeni bir ürünün yayına alınmasından daha fazlasını ifade ediyor.',
      ],
      en: [
        'HC Dijital\'s new workforce and time management solution, AiRX, has officially gone live. Developed with a mobile time-and-attendance approach, AiRX aims to consolidate many operational needs under a single platform.',
        'Today, team management requires not just tracking, but also speed, clarity, and record discipline. AiRX offers a clean yet powerful structure to meet these needs.',
        'What sets AiRX apart is its ability to bring order to daily operations without adding complexity.',
        'For HC Dijital, launching AiRX means more than releasing a new product.',
      ],
    },
  },
  {
    slug: 'butce-planlama-sistemi-lisanslama',
    date: '2025-11-05',
    category: { tr: 'Ürün Güncellemesi', en: 'Product Update' },
    image: butce2,
    title: {
      tr: 'Bütçe Planlama Sistemi: Lisanslama',
      en: 'Budget Planning System: Licensing Phase',
    },
    summary: {
      tr: 'HC Dijital\'in Bütçe Planlama Sistemi, kurumsal kullanım için ölçeklenebilir bir yapıya kavuşarak lisanslama aşamasına geçti.',
      en: 'HC Dijital\'s Budget Planning System has transitioned to the licensing phase, reaching a scalable structure for enterprise use.',
    },
    content: {
      tr: [
        'HC Dijital, kurumların bütçe süreçlerini daha kontrollü, daha şeffaf ve daha sürdürülebilir hale getirmek amacıyla geliştirdiği Bütçe Planlama Sistemi\'nde lisanslama aşamasına geçti.',
        'Özellikle çok katmanlı karar alma yapısına sahip kurumlarda bütçe planlaması, yalnızca rakamların toplandığı bir süreç değil; aynı zamanda kaynak yönetimi, önceliklendirme ve performans takibi açısından kritik bir yönetim alanı olarak öne çıkıyor.',
        'Lisanslama süreciyle birlikte Bütçe Planlama Sistemi\'nin kurumlara daha net bir kullanım modeliyle sunulması, ürünün yaygınlaşması açısından da önemli bir eşik anlamı taşıyor.',
        'HC Dijital, bu adımla birlikte yalnızca yazılım geliştiren bir şirket değil, aynı zamanda süreçlerin kurumsallaşmasına katkı sunan bir teknoloji ortağı olma hedefini de güçlendiriyor.',
      ],
      en: [
        'HC Dijital has moved its Budget Planning System into the licensing phase. This step signals that the product has evolved from a purely technical solution into a scalable structure ready for enterprise deployment.',
        'In organizations with multi-layered decision-making structures, budget planning stands out as a critical management domain for resource allocation, prioritization, and performance tracking.',
        'Presenting the Budget Planning System to institutions under a clearer usage model through the licensing process also marks an important milestone for broader adoption.',
        'With this step, HC Dijital reinforces its goal of being not just a software development company, but a technology partner that contributes to the institutionalization of processes.',
      ],
    },
  },
  {
    slug: 'hc-dijital-teknogisim-rozeti',
    date: '2025-10-14',
    category: { tr: 'Şirket Haberleri', en: 'Company News' },
    image: spiralHero,
    title: {
      tr: 'HC Dijital Teknogirişim Rozetini Aldı',
      en: 'HC Dijital Receives Technoenterprise Badge',
    },
    summary: {
      tr: 'HC Dijital, geliştirdiği yenilikçi çözümler ve teknoloji odaklı yaklaşımıyla teknogirişim ekosistemindeki konumunu resmi olarak tescilledi.',
      en: 'HC Dijital has officially registered its position in the technoenterprise ecosystem through its innovative solutions and technology-driven approach.',
    },
    content: {
      tr: [
        'HC Dijital, geliştirdiği yenilikçi çözümler ve teknoloji odaklı yaklaşımıyla teknogirişim ekosistemindeki konumunu güçlendirmeye devam ediyor.',
        'Bugünün rekabet ortamında şirketleri ayrıştıran temel unsur yalnızca fikir üretmek değil, bu fikirleri gerçek iş problemlerine uygulanabilir ürünlere dönüştürebilmek.',
        'Teknogirişim kimliği, aynı zamanda hızlı öğrenme, çevik uyum ve yüksek problem çözme kapasitesi anlamına geliyor.',
      ],
      en: [
        'HC Dijital continues to strengthen its position in the technoenterprise ecosystem through its innovative solutions and technology-driven approach.',
        'In today\'s competitive landscape, what sets companies apart is not just generating ideas, but the ability to turn those ideas into applicable products for real business problems.',
        'The technoenterprise identity also means rapid learning, agile adaptation, and high problem-solving capacity.',
      ],
    },
  },
  {
    slug: 'tera-projesi-istanbul-kalkinma-ajansi',
    date: '2025-09-03',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: yonHero,
    title: {
      tr: 'İştirakçisi Olduğumuz TERA Projesi İstanbul Kalkınma Ajansı Tarafından Kabul Edildi',
      en: 'TERA Project We Participated in Accepted by Istanbul Development Agency',
    },
    summary: {
      tr: 'HC Dijital\'in iştirakçisi olduğu TERA projesi, İstanbul Kalkınma Ajansı tarafından değerlendirilerek kabul edildi.',
      en: 'The TERA project that HC Dijital participated in was evaluated and accepted by the Istanbul Development Agency.',
    },
    content: {
      tr: [
        'HC Dijital\'in iştirakçisi olduğu TERA projesi, İstanbul Kalkınma Ajansı tarafından gerçekleştirilen değerlendirme süreci sonucunda kabul edildi.',
        'Bu kabul, HC Dijital\'in bölgesel kalkınma ekosistemiyle kurduğu işbirlikleri ve katma değer yaratan projelerdeki aktif rolünü bir kez daha teyit ediyor.',
        'Projenin hayata geçirilmesiyle birlikte elde edilecek çıktılar, HC Dijital\'in teknoloji üretme ve kurumsal dönüşüme katkı sunma vizyonuyla örtüşüyor.',
      ],
      en: [
        'The TERA project that HC Dijital participated in was accepted following the evaluation process carried out by the Istanbul Development Agency.',
        'This acceptance once again confirms HC Dijital\'s collaborations with the regional development ecosystem and its active role in value-creating projects.',
        'The outputs to be achieved through the implementation of the project align with HC Dijital\'s vision of producing technology and contributing to institutional transformation.',
      ],
    },
  },
]
