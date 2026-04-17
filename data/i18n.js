export const i18n = {
  tr: {
    // Header
    nav: [
      { label: 'Ürünler',    href: '/urunler',     internal: true },
      { label: 'Hizmetler',  href: '/servisler',  internal: true },
      { label: 'Referanslar', href: '/referanslar', internal: true },
      { label: 'Haberler',  href: '/haberler',  internal: true },
      { label: 'Hakkımızda', href: '/hakkimizda', internal: true, dropdown: [
        { label: 'Şirket Hakkında', href: '/hakkimizda' },
        { label: 'Ekibimiz',        href: '/ekibimiz' },
      ]},
      { label: 'İletişim',  href: '/iletisim',  internal: true },
    ],
    headerCta: 'Görüşme Planlayın',

    // LogoMarquee
    logoMarquee: {
      label: 'Güvenilir Kurumların Tercihi',
    },

    // Hero
    hero: {
      badge: 'Kurumsal Yazılım & Yapay Zekâ',
      h1Line1: 'Kurumunuz için',
      h1Line2: ['Yapay Zekâ', 'Veri Analitiği', 'Kurumsal Yazılım', 'Karar Desteği'],
      h1Line3: 'çözümleri',
      paragraph: 'Sağlık ve kurumsal sektörde yapay zekâ destekli yazılım ürünleri ve veri odaklı çözümler geliştiriyor; kurumların karar alma kapasitesini ve operasyonel verimliliğini kalıcı biçimde artırıyoruz.',
      ctaPrimary: 'Görüşme Talep Edin',
      ctaSecondary: 'Çözümlerimiz',
      trustText: 'LIV Hospital, Medical Park, MLP Care ve 40\'tan fazla kurumun tercih ettiği platform',
      statsLabels: ['Aktif Kullanıcı', 'Kurumsal Müşteri', 'Yıllık Deneyim'],
      dashboardTitle: 'Kumanda Merkezi',
      dashboardSubtitle: 'Genel Bakış',
      dashboardLive: 'Canlı',
      dashboardChartLabel: 'Haftalık İşlem Hacmi',
      dashboardChartSub: 'Bu hafta',
      kpiCards: [
        { label: 'Aktif Kullanıcı', value: '2.847', change: '+12%', up: true },
        { label: 'İşlem Süresi', value: '1.4s', change: '−8%', up: false },
        { label: 'Memnuniyet', value: '94.7%', change: '+3%', up: true },
      ],
      floatingCard1Title: 'AI Karar Desteği',
      floatingCard1Sub: 'Akıllı öneri aktif',
      floatingCard2Title: 'KVKK Uyumlu',
      floatingCard2Sub: 'Veri şifrelemesi aktif',
    },

    // Services
    services: {
      overline: 'Hizmetlerimiz',
      h2: 'Dijital dönüşümde uçtan uca çözümler',
      discoveryTitle: 'Tüm\nHizmetlerimiz',
      discoveryDesc: 'Projenize ve kurumunuza uygun bir modelimiz mutlaka vardır. Tüm hizmetlerimizi keşfedin.',
      discoveryLink: 'Keşfet',
      items: [
        {
          title: 'Yazılım Geliştirme',
          description: 'Süreç yönetim sistemlerinden karar destek yazılımlarına kadar sektöre özel, ölçeklenebilir ve güvenli yazılımlar geliştiriyoruz.',
        },
        {
          title: 'Raporlama Sistemleri',
          description: 'Kurumunuza özel raporlama altyapısı kurarak verileri anlamlı çıktılara dönüştürüyor, karar süreçlerini hızlandırıyoruz.',
        },
        {
          title: 'Teknoloji Danışmanlığı',
          description: 'Dijital dönüşüm yol haritası, süreç analizi ve teknoloji seçiminde kurumlara özel danışmanlık sunarak en doğru yatırım kararlarını almanıza yardımcı oluyoruz.',
        },
        {
          title: 'Yapay Zekâ',
          description: 'Yapay zekâ destekli otomasyon sistemleri, veri analitiği ve süreç optimizasyonuyla kurumların karar alma kapasitesini artırıyoruz.',
        },
        {
          title: 'Veri Bilimi Hizmeti',
          description: 'Makine öğrenmesi modelleri ve istatistiksel analizlerle kurumsal verilerden tahmin gücü elde ediyor, operasyonel verimliliği artırıyoruz.',
        },
        {
          title: 'Veri Analitiği',
          description: 'Kurumsal verileri anlamlı içgörülere dönüştürüyor; raporlama sistemleri ve gerçek zamanlı panolarla yöneticilere stratejik görünürlük sağlıyoruz.',
        },
      ],
    },

    // Products section (homepage)
    productsSection: {
      overline: 'Ürünlerimiz',
      h2Line1: 'Öne çıkan',
      h2Line2: 'ürünlerimiz',
      allProducts: 'Tüm Ürünlerimiz',
      viewProduct: 'Ürünü İncele',
    },

    // CTA
    cta: {
      badge: 'Bize Ulaşın',
      h2: 'Kurumunuz için doğru çözümü birlikte tasarlayalım.',
      paragraph: 'Yazılım geliştirme, yapay zekâ ya da dijital dönüşüm çözümleri konusunda uzmanlarımızla ücretsiz bir keşif görüşmesi planlayın.',
      ctaPrimary: 'Görüşme Talep Edin',
      ctaSecondary: 'info@hcdijital.com.tr',
      note: 'Ortalama yanıt süremiz 24 saattir. Tüm görüşmeler gizlilik sözleşmesi kapsamında yürütülür.',
    },

    // Footer
    footer: {
      description: 'Kurumların daha verimli, daha akıllı ve daha rekabetçi çalışmasını sağlayan yapay zekâ destekli dijital çözümler geliştiriyoruz.',
      taglineLine1: 'Dijital dönüşümde',
      taglineLine2: 'geleceği birlikte',
      taglineLine3: 'inşa edelim.',
      cta: 'Görüşme Planlayın',
      pagesTitle: 'Sayfalar',
      productsTitle: 'Ürünlerimiz',
      contactTitle: 'İletişim',
      addressLabel: 'Merkez Ofis',
      address: 'Ayazağa, Vadis Istanbul Park Etabı\nKemerburgaz Cad. D:7A Blok\n34396 Sarıyer/İstanbul',
      copyright: 'HC Dijital. Tüm hakları saklıdır.',
      privacy: 'KVKK',
      cookies: 'Gizlilik Politikası',
      navLinks: [
        { label: 'Ürünler',     href: '/urunler' },
        { label: 'Hizmetler',   href: '/servisler' },
        { label: 'Referanslar', href: '/referanslar' },
        { label: 'Haberler',        href: '/haberler' },
        { label: 'Şirket Hakkında', href: '/hakkimizda' },
        { label: 'Ekibimiz',        href: '/ekibimiz' },
        { label: 'İletişim',        href: '/iletisim', internal: true },
      ],
      products: [
        { label: 'AirX IKYS',               to: '/urunler/airx-ikys' },
        { label: 'Tercümed',                to: '/urunler/tercumed' },
        { label: 'Hastane Bütçe Yönetimi', to: '/urunler/butce-yonetim' },
      ],
    },

    // Products listing page
    productsPage: {
      breadcrumb: 'Ürünler',
      overline: 'Ürünlerimiz',
      h1Line1: 'Kurumları dönüştüren',
      h1Line2: ['yazılım çözümleri', 'dijital ürünler', 'akıllı sistemler'],
      paragraph: 'Kurumunuzun ihtiyacına özel geliştirilen, ölçeklenebilir ve güvenilir yazılım ürünleri.',
      allCategory: 'Tümü',
      featuredBadge: 'Öne Çıkan Ürün',
      viewProduct: 'Ürünü İncele',
      emptyText: 'Bu kategoride henüz ürün bulunmuyor.',
      ctaOverline: 'Özel Çözüm',
      ctaH2: 'İhtiyacınıza özel bir çözüm mü arıyorsunuz?',
      ctaP: 'Listelenen ürünlerin yanı sıra kurumunuza özel yazılım geliştirme hizmeti sunuyoruz. Gereksinimlerinizi paylaşın, birlikte tasarlayalım.',
      ctaBtn1: 'Görüşme Talep Et',
      ctaBtn2: 'Ana Sayfaya Dön',
    },

    // Product detail page
    productDetail: {
      breadcrumbHome: 'Ana Sayfa',
      breadcrumbProducts: 'Ürünler',
      aboutOverline: 'Ürün Hakkında',
      categoryLabel: 'Kategori',
      tagsLabel: 'Etiketler',
      demoBtn: 'Demo Talep Et',
      whyOverline: 'Neden Bu Ürün?',
      whyH2: 'Size sağladığı avantajlar',
      featuresOverline: 'Özellikler',
      featuresH2: 'Neler sunuyor?',
      howOverline: 'Nasıl Çalışır?',
      howH2: 'Dört adımda sonuca ulaşın',
      galleryOverline: 'Galeri',
      galleryH2: 'Görseller',
      faqOverline: 'SSS',
      faqH2: 'Sıkça sorulan sorular',
      relatedOverline: 'Diğer Ürünler',
      relatedH2: 'İlgili ürünler',
      allProducts: 'Tümünü Gör',
      explore: 'İncele',
      ctaOverline: 'İletişim',
      ctaH2: 'Bu ürün hakkında daha fazla bilgi almak ister misiniz?',
      ctaP: 'Demo talebinde bulunun ya da doğrudan iletişime geçin. Ortalama yanıt süremiz 24 saattir.',
      ctaBtn1: 'Demo Talep Et',
      ctaBtn2: 'Tüm Ürünler',
    },

    // Services listing page
    servicesPage: {
      breadcrumb: 'Hizmetler',
      overline: 'Hizmetlerimiz',
      h1Line1: 'Dijital dönüşüm',
      h1Line2: 'hizmetleri',
      paragraph: 'Yazılım geliştirmeden yapay zekâya, veri analitiğinden teknoloji danışmanlığına kadar her ihtiyacınız için yanınızdayız.',
      featuredBadge: 'Öne Çıkan',
      ctaOverline: 'Özel Proje',
      ctaH2: 'İhtiyacınıza özel bir çözüm mü arıyorsunuz?',
      ctaP: 'Listelenen hizmetlerin yanı sıra kurumunuza özel geliştirme hizmeti sunuyoruz. Gereksinimlerinizi paylaşın, birlikte tasarlayalım.',
      ctaBtn1: 'Görüşme Talep Et',
      ctaBtn2: 'Ana Sayfaya Dön',
    },

    // Categories
    categories: [
      'Tümü',
      'İK & Zaman Yönetimi',
      'Yapay Zekâ',
      'Kontrol & İzleme',
      'Yapay Zekâ / Otomasyon',
      'Finans',
      'Gıda Teknolojisi',
    ],
  },

  en: {
    // Header
    nav: [
      { label: 'Products',  href: '/urunler',     internal: true },
      { label: 'Services',  href: '/servisler',  internal: true },
      { label: 'References', href: '/referanslar', internal: true },
      { label: 'News',    href: '/haberler',   internal: true },
      { label: 'About',   href: '/hakkimizda',  internal: true, dropdown: [
        { label: 'About Us', href: '/hakkimizda' },
        { label: 'Our Team', href: '/ekibimiz' },
      ]},
      { label: 'Contact', href: '/iletisim',    internal: true },
    ],
    headerCta: 'Schedule a Meeting',

    // LogoMarquee
    logoMarquee: {
      label: 'Trusted by Leading Institutions',
    },

    // Hero
    hero: {
      badge: 'Enterprise Software & AI',
      h1Line1: 'Enterprise',
      h1Line2: ['AI Solutions', 'Data Analytics', 'Decision Support', 'Software Platforms'],
      h1Line3: 'for institutions',
      paragraph: 'We build AI-powered software products and data-driven solutions for healthcare and enterprise institutions — permanently elevating decision-making capacity and operational efficiency.',
      ctaPrimary: 'Request a Meeting',
      ctaSecondary: 'Our Solutions',
      trustText: 'The platform of choice for LIV Hospital, Medical Park, MLP Care and 40+ institutions',
      statsLabels: ['Active Users', 'Enterprise Clients', 'Years of Experience'],
      dashboardTitle: 'Control Center',
      dashboardSubtitle: 'Overview',
      dashboardLive: 'Live',
      dashboardChartLabel: 'Weekly Transaction Volume',
      dashboardChartSub: 'This week',
      kpiCards: [
        { label: 'Active Users', value: '2,847', change: '+12%', up: true },
        { label: 'Process Time', value: '1.4s', change: '−8%', up: false },
        { label: 'Satisfaction', value: '94.7%', change: '+3%', up: true },
      ],
      floatingCard1Title: 'AI Decision Support',
      floatingCard1Sub: 'Smart suggestion active',
      floatingCard2Title: 'GDPR Compliant',
      floatingCard2Sub: 'Data encryption active',
    },

    // Services
    services: {
      overline: 'Our Services',
      h2: 'End-to-end solutions in digital transformation',
      discoveryTitle: 'All\nServices',
      discoveryDesc: 'There is a model suitable for your project and institution. Discover all our services.',
      discoveryLink: 'Explore',
      items: [
        {
          title: 'Software Development',
          description: 'From process management systems to decision support software, we develop scalable and secure solutions tailored to your industry.',
        },
        {
          title: 'Reporting Systems',
          description: 'We build custom reporting infrastructure to transform data into meaningful outputs and accelerate decision-making processes.',
        },
        {
          title: 'Technology Consulting',
          description: 'We help you make the right investment decisions with custom consulting in digital transformation roadmaps, process analysis, and technology selection.',
        },
        {
          title: 'Artificial Intelligence',
          description: 'We enhance institutions\' decision-making capacity with AI-powered automation systems, data analytics, and process optimization.',
        },
        {
          title: 'Data Science Services',
          description: 'We extract predictive power from institutional data with machine learning models and statistical analyses, improving operational efficiency.',
        },
        {
          title: 'Data Analytics',
          description: 'We transform institutional data into meaningful insights, providing strategic visibility to managers through reporting systems and real-time dashboards.',
        },
      ],
    },

    // Products section (homepage)
    productsSection: {
      overline: 'Our Products',
      h2Line1: 'Featured',
      h2Line2: 'products',
      allProducts: 'All Products',
      viewProduct: 'View Product',
    },

    // CTA
    cta: {
      badge: 'Contact Us',
      h2: 'Let\'s design the right solution for your institution together.',
      paragraph: 'Schedule a free discovery meeting with our experts on software development, AI, or digital transformation solutions.',
      ctaPrimary: 'Request a Meeting',
      ctaSecondary: 'info@hcdijital.com.tr',
      note: 'Our average response time is 24 hours. All meetings are conducted under a confidentiality agreement.',
    },

    // Footer
    footer: {
      description: 'We develop AI-powered digital solutions that help institutions work more efficiently, intelligently, and competitively.',
      taglineLine1: 'Let\'s build the future',
      taglineLine2: 'of digital transformation',
      taglineLine3: 'together.',
      cta: 'Schedule a Meeting',
      pagesTitle: 'Pages',
      productsTitle: 'Our Products',
      contactTitle: 'Contact',
      addressLabel: 'Headquarters',
      address: 'Ayazağa, Vadis Istanbul Park Etabı\nKemerburgaz Cad. D:7A Blok\n34396 Sarıyer/İstanbul',
      copyright: 'HC Dijital. All rights reserved.',
      privacy: 'KVKK',
      cookies: 'Privacy Policy',
      navLinks: [
        { label: 'Products', href: '/urunler' },
        { label: 'Services', href: '/#servisler' },
        { label: 'References', href: '/referanslar' },
        { label: 'News',  href: '/haberler' },
        { label: 'About', href: '/hakkimizda' },
        { label: 'Team',  href: '/ekibimiz' },
        { label: 'Contact',  href: '/iletisim' },
      ],
      products: [
        { label: 'AirX IKYS',                      to: '/urunler/airx-ikys' },
        { label: 'Tercümed',                       to: '/urunler/tercumed' },
        { label: 'Hospital Budget Management',     to: '/urunler/butce-yonetim' },
      ],
    },

    // Services listing page
    servicesPage: {
      breadcrumb: 'Services',
      overline: 'Our Services',
      h1Line1: 'Digital transformation',
      h1Line2: 'services',
      paragraph: 'From software development to AI, from data analytics to technology consulting — we\'re here for every need.',
      featuredBadge: 'Featured',
      ctaOverline: 'Custom Project',
      ctaH2: 'Looking for a custom solution?',
      ctaP: 'In addition to the listed services, we offer custom development for your institution. Share your requirements and let\'s design it together.',
      ctaBtn1: 'Request a Meeting',
      ctaBtn2: 'Back to Home',
    },

    // Products listing page
    productsPage: {
      breadcrumb: 'Products',
      overline: 'Our Products',
      h1Line1: 'Software solutions',
      h1Line2: ['transforming institutions', 'digital products', 'smart systems'],
      paragraph: 'Scalable and reliable software products developed specifically for your institution\'s needs.',
      allCategory: 'All',
      featuredBadge: 'Featured Product',
      viewProduct: 'View Product',
      emptyText: 'No products in this category yet.',
      ctaOverline: 'Custom Solution',
      ctaH2: 'Looking for a custom solution?',
      ctaP: 'In addition to the listed products, we offer custom software development for your institution. Share your requirements and let\'s design it together.',
      ctaBtn1: 'Request a Meeting',
      ctaBtn2: 'Back to Home',
    },

    // Product detail page
    productDetail: {
      breadcrumbHome: 'Home',
      breadcrumbProducts: 'Products',
      aboutOverline: 'About the Product',
      categoryLabel: 'Category',
      tagsLabel: 'Tags',
      demoBtn: 'Request a Demo',
      whyOverline: 'Why This Product?',
      whyH2: 'Advantages it provides',
      featuresOverline: 'Features',
      featuresH2: 'What does it offer?',
      howOverline: 'How It Works',
      howH2: 'Reach results in four steps',
      galleryOverline: 'Gallery',
      galleryH2: 'Visuals',
      faqOverline: 'FAQ',
      faqH2: 'Frequently asked questions',
      relatedOverline: 'Other Products',
      relatedH2: 'Related products',
      allProducts: 'View All',
      explore: 'Explore',
      ctaOverline: 'Contact',
      ctaH2: 'Would you like to learn more about this product?',
      ctaP: 'Request a demo or contact us directly. Our average response time is 24 hours.',
      ctaBtn1: 'Request a Demo',
      ctaBtn2: 'All Products',
    },

    // Categories
    categories: [
      'All',
      'HR & Time Management',
      'Artificial Intelligence',
      'Control & Monitoring',
      'AI / Automation',
      'Finance',
      'Food Technology',
    ],
  },
}
