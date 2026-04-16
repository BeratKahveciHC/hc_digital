// ─────────────────────────────────────────────────────────────────────────────
// Haberler veri dosyası
//
// Yeni haber eklemek  → listeye yeni bir obje ekleyin (en üste = en yeni)
// Haber silmek        → ilgili objeyi listeden çıkarın
//
// Alanlar:
//   slug     → URL'de kullanılacak benzersiz kimlik
//   date     → 'YYYY-MM-DD'
//   category → { tr, en }
//   image    → görsel yolu (opsiyonel, yoksa null)
//   title    → { tr, en }
//   summary  → { tr, en } — liste kartındaki kısa özet
//   content  → { tr: [...paragraf], en: [...paragraf] }
// ─────────────────────────────────────────────────────────────────────────────

export const news = [
  {
    slug: 'tercumed-ai-kosgeb-tam-puan',
    date: '2026-01-06',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: '/images/products/tercumed-hero.webp',
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
    image: '/images/products/airx-mobile.webp',
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
        'Günümüzde ekip yönetimi, özellikle sahada, şubelerde, depo yapılarında ve vardiyalı çalışma düzenlerinde sadece takip değil; aynı zamanda hız, netlik ve kayıt disiplini gerektiriyor. AiRX, bu ihtiyaca karşılık veren sade ama güçlü bir yapı sunuyor. Yönetici ekranı üzerinden ekiplerin anlık durumu izlenebilirken, onay süreçleri ve raporlama mekanizmaları da merkezi hale geliyor.',
        'AiRX\'in öne çıkan tarafı, günlük operasyonu karmaşıklaştırmadan düzen altına alması. Çalışan hareketliliğinin yoğun olduğu yapılarda zaman kaybını azaltan, süreçleri görünür hale getiren ve yöneticinin karar alma hızını artıran bir sistem olarak konumlanıyor. Mobil erişim kabiliyeti sayesinde kullanımın sahaya yayılması da önemli bir avantaj sunuyor.',
        'HC Dijital için AiRX\'in kullanıma açılması yeni bir ürünün yayına alınmasından daha fazlasını ifade ediyor. Bu adım, şirketin ürün geliştirme kabiliyetinin somutlaşması, ihtiyaçlara cevap veren bir yapının sahaya çıkması ve operasyonel teknoloji alanındaki iddiasının güçlenmesi anlamına geliyor. AiRX\'in önümüzdeki dönemde farklı sektörlerde daha geniş kullanıcı kitlelerine ulaşması hedefleniyor.',
      ],
      en: [
        'HC Dijital\'s new workforce and time management solution, AiRX, has officially gone live. Developed with a mobile time-and-attendance approach, AiRX aims to consolidate many operational needs — from clock-in/out flows to shift planning, and from leave management to overtime tracking — under a single platform.',
        'Today, team management — especially in field operations, branch networks, warehouse settings, and shift-based work schedules — requires not just tracking, but also speed, clarity, and record discipline. AiRX offers a clean yet powerful structure to meet these needs. Managers can monitor their teams in real time from the admin screen, while approval workflows and reporting mechanisms are centralized.',
        'What sets AiRX apart is its ability to bring order to daily operations without adding complexity. The system is positioned to reduce time loss in high-employee-mobility environments, make processes visible, and accelerate managerial decision-making. Its mobile accessibility also provides a key advantage in extending usage to the field.',
        'For HC Dijital, launching AiRX means more than releasing a new product. This step represents the materialization of the company\'s product development capabilities, the deployment of a solution that addresses real needs, and the reinforcement of its claim in the operational technology space. AiRX is expected to reach a broader user base across different sectors in the coming period.',
      ],
    },
  },

  {
    slug: 'butce-planlama-sistemi-lisanslama',
    date: '2025-11-05',
    category: { tr: 'Ürün Güncellemesi', en: 'Product Update' },
    image: '/images/products/butce-2.webp',
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
        'HC Dijital, kurumların bütçe süreçlerini daha kontrollü, daha şeffaf ve daha sürdürülebilir hale getirmek amacıyla geliştirdiği Bütçe Planlama Sistemi\'nde lisanslama aşamasına geçti. Bu adım, ürünün yalnızca teknik olarak geliştirilmiş bir çözüm olmaktan çıkıp, kurumsal kullanım için ölçeklenebilir bir yapıya kavuştuğunu gösteriyor.',
        'Özellikle çok katmanlı karar alma yapısına sahip kurumlarda bütçe planlaması, yalnızca rakamların toplandığı bir süreç değil; aynı zamanda kaynak yönetimi, önceliklendirme ve performans takibi açısından kritik bir yönetim alanı olarak öne çıkıyor. HC Dijital\'in bu alana yönelik yaklaşımı, veriyi anlamlandıran, planlama disiplinini güçlendiren ve farklı kullanıcı seviyelerine uygun erişim kurgusu sunan bir sistem mimarisi üzerine kuruluyor.',
        'Lisanslama süreciyle birlikte Bütçe Planlama Sistemi\'nin kurumlara daha net bir kullanım modeliyle sunulması, ürünün yaygınlaşması açısından da önemli bir eşik anlamı taşıyor. Bu yapı sayesinde kurumlar, ihtiyaç duydukları kapsam ve kullanım senaryosuna göre sistemi daha esnek biçimde devreye alabilecek.',
        'HC Dijital, bu adımla birlikte yalnızca yazılım geliştiren bir şirket değil, aynı zamanda süreçlerin kurumsallaşmasına katkı sunan bir teknoloji ortağı olma hedefini de güçlendiriyor.',
      ],
      en: [
        'HC Dijital has moved its Budget Planning System — developed to make institutional budgeting processes more controlled, transparent, and sustainable — into the licensing phase. This step signals that the product has evolved from a purely technical solution into a scalable structure ready for enterprise deployment.',
        'In organizations with multi-layered decision-making structures, budget planning is not simply a process of aggregating numbers; it stands out as a critical management domain for resource allocation, prioritization, and performance tracking. HC Dijital\'s approach to this space is built on a system architecture that makes sense of data, strengthens planning discipline, and offers tiered access tailored to different user levels.',
        'Presenting the Budget Planning System to institutions under a clearer usage model through the licensing process also marks an important milestone for broader adoption. Thanks to this structure, institutions will be able to deploy the system more flexibly based on the scope and usage scenario they need.',
        'With this step, HC Dijital reinforces its goal of being not just a software development company, but a technology partner that contributes to the institutionalization of processes.',
      ],
    },
  },

  {
    slug: 'hc-dijital-teknogisim-rozeti',
    date: '2025-10-14',
    category: { tr: 'Şirket Haberleri', en: 'Company News' },
    image: '/images/products/spiral-hero.webp',
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
        'HC Dijital, geliştirdiği yenilikçi çözümler ve teknoloji odaklı yaklaşımıyla teknogirişim ekosistemindeki konumunu güçlendirmeye devam ediyor. Yapay zekâ, veri analitiği ve süreç yönetimi ekseninde şekillenen ürün yapısı, şirketin yalnızca hizmet sunan değil, aynı zamanda teknoloji üreten bir yapı olarak büyüdüğünü ortaya koyuyor.',
        'Bugünün rekabet ortamında şirketleri ayrıştıran temel unsur yalnızca fikir üretmek değil, bu fikirleri gerçek iş problemlerine uygulanabilir ürünlere dönüştürebilmek. HC Dijital\'in yaklaşımı da tam olarak bu noktada öne çıkıyor. Şirket, insan odaklı teknolojiyi operasyonel ihtiyaçlarla birleştirerek sahada karşılığı olan çözümler geliştirmeyi hedefliyor.',
        'Teknogirişim kimliği, aynı zamanda hızlı öğrenme, çevik uyum ve yüksek problem çözme kapasitesi anlamına geliyor. HC Dijital\'in ürünleşme yolculuğu, bu üç alanı birlikte taşıyan bir büyüme modeli üzerine kurulmuş durumda. Geliştirilen her çözüm, yalnızca teknik yeterlilik değil; aynı zamanda kullanım kolaylığı, entegrasyon kabiliyeti ve sürdürülebilir değer üretimi açısından ele alınmaktadır.',
      ],
      en: [
        'HC Dijital continues to strengthen its position in the technoenterprise ecosystem through its innovative solutions and technology-driven approach. The product portfolio shaped around artificial intelligence, data analytics, and process management demonstrates that the company is growing not only as a service provider, but also as a technology producer.',
        'In today\'s competitive landscape, what sets companies apart is not just generating ideas, but the ability to turn those ideas into applicable products for real business problems. HC Dijital\'s approach stands out precisely at this point. The company aims to develop field-tested solutions by combining human-centered technology with operational needs.',
        'The technoenterprise identity also means rapid learning, agile adaptation, and high problem-solving capacity. HC Dijital\'s product development journey is built on a growth model that carries all three of these dimensions. Every solution developed is addressed not only in terms of technical competency, but also ease of use, integration capability, and sustainable value creation.',
      ],
    },
  },

  {
    slug: 'tera-projesi-istanbul-kalkinma-ajansi',
    date: '2025-09-03',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: '/images/products/yon-hero.webp',
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
