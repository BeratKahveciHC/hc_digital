'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, BarChart2, Code2, Brain, FileBarChart, Lightbulb, FlaskConical } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
// SEO handled by Next.js metadata

// ── Tüm servis içerikleri ──────────────────────────────────────────────────
const serviceData = [
  {
    slug: 'yazilim-gelistirme',
    Icon: Code2,
    accent: 'primary',
    accentClass: 'text-primary',
    bgClass: 'bg-primary/8',
    borderClass: 'border-primary/15',
    activeBg: 'bg-primary',
    title: { tr: 'Yazılım Geliştirme', en: 'Software Development' },
    tagline: {
      tr: 'Sektörünüze özgü, ölçeklenebilir yazılım çözümleri geliştiriyoruz.',
      en: 'Building scalable software solutions tailored for your industry.',
    },
    description: {
      tr: [
        'Dijital dönüşüm standart paket yazılımlara sığmaz. Her işletmenin ve kurumun kendine özgü iş akışları, mevzuat gereksinimleri ve entegrasyon ihtiyaçları vardır.',
        'HC Dijital olarak kurumsal yönetim sistemlerinden mobil uygulamalara, API entegrasyon katmanlarından bulut tabanlı platformlara kadar her ihtiyaç için özel yazılım geliştiriyoruz. Agile metodoloji ile hızlı, güvenilir ve bakımı kolay sistemler inşa ediyoruz.',
      ],
      en: [
        "Digital transformation doesn't fit standard off-the-shelf software. Every business and institution has unique workflows, regulatory requirements, and integration needs.",
        'At HC Dijital, we develop custom software for every need — from enterprise management systems to mobile apps, API integration layers to cloud-based platforms. We build fast, reliable, and maintainable systems using agile methodology.',
      ],
    },
    offers: {
      tr: [
        { title: 'Kurumsal Bilgi Yönetim Sistemi', desc: 'Kayıt, planlama, iş akışı ve raporlamayı kapsayan uçtan uca kurumsal yazılım geliştirme.' },
        { title: 'Mobil Uygulama', desc: 'iOS ve Android üzerinde çalışan kurum personeli ve müşteri odaklı mobil uygulamalar.' },
        { title: 'API Entegrasyon Katmanı', desc: 'Mevcut sistemleri birbirine bağlayan REST, GraphQL ve SOAP entegrasyon servisleri.' },
        { title: 'Bulut Tabanlı Platform', desc: 'AWS, Azure veya özel sunucu altyapısında yüksek erişilebilirlikli platform geliştirme.' },
        { title: 'Mikro Servis Mimarisi', desc: 'Modüler, bağımsız dağıtılabilir ve yatay ölçeklenebilir yazılım mimarisi.' },
        { title: 'Mevcut Sistem Modernizasyonu', desc: 'Legacy sistemlerin modern teknoloji yığınına taşınması ve performans iyileştirmesi.' },
      ],
      en: [
        { title: 'Enterprise Information Management System', desc: 'End-to-end enterprise software development covering registration, scheduling, workflows, and reporting.' },
        { title: 'Mobile Application', desc: 'Staff and customer-focused mobile apps running on iOS and Android.' },
        { title: 'API Integration Layer', desc: 'REST, GraphQL, and SOAP integration services connecting existing systems.' },
        { title: 'Cloud-Based Platform', desc: 'High-availability platform development on AWS, Azure, or private server infrastructure.' },
        { title: 'Microservice Architecture', desc: 'Modular, independently deployable, and horizontally scalable software architecture.' },
        { title: 'Legacy System Modernization', desc: 'Migration of legacy systems to modern technology stacks with performance improvements.' },
      ],
    },
    steps: {
      tr: [
        { n: '01', title: 'Gereksinim Analizi', desc: 'Kullanıcı hikayeleri, süreç haritaları ve teknik kısıtlamaları detaylı biçimde belgeliyoruz.' },
        { n: '02', title: 'Mimari Tasarım', desc: 'Ölçeklenebilir, güvenli ve bakımı kolay bir teknik mimari tasarlıyoruz.' },
        { n: '03', title: 'Agile Geliştirme', desc: 'İki haftalık sprint döngüleriyle geliştiriyor, her iterasyonda çalışan yazılım teslim ediyoruz.' },
        { n: '04', title: 'Test, Yayın & Destek', desc: 'Kapsamlı test süreçleri, sorunsuz yayına alım ve süregelen teknik destek.' },
      ],
      en: [
        { n: '01', title: 'Requirements Analysis', desc: 'We thoroughly document user stories, process maps, and technical constraints.' },
        { n: '02', title: 'Architecture Design', desc: 'We design a scalable, secure, and maintainable technical architecture.' },
        { n: '03', title: 'Agile Development', desc: 'We develop in two-week sprint cycles, delivering working software at each iteration.' },
        { n: '04', title: 'Testing, Launch & Support', desc: 'Comprehensive testing processes, smooth deployment, and ongoing technical support.' },
      ],
    },
    why: {
      tr: [
        { title: 'Sektörel Uzmanlık', desc: 'Geliştirme ekibimiz kurumsal iş akışları, KVKK ve sektöre özgü mevzuat konusunda deneyimlidir.' },
        { title: 'Şeffaf Süreç', desc: 'Canlı proje panosu ile geliştirme sürecini anlık izleyebilir, her sprint sonunda çalışan ürünü görebilirsiniz.' },
        { title: 'Uzun Vadeli Ortaklık', desc: 'Yazılımı teslim edip çekilmiyoruz; bakım, güncelleme ve büyüme sürecinde yanınızdayız.' },
      ],
      en: [
        { title: 'Domain Expertise', desc: 'Our development team has experience in business workflows, GDPR, and industry-specific regulations.' },
        { title: 'Transparent Process', desc: 'Monitor the development process in real time via a live project board and see working product at each sprint end.' },
        { title: 'Long-Term Partnership', desc: "We don't just deliver the software and walk away — we're with you through maintenance, updates, and growth." },
      ],
    },
  },
  {
    slug: 'raporlama-sistemleri',
    Icon: FileBarChart,
    accent: 'accent',
    accentClass: 'text-accent',
    bgClass: 'bg-accent/8',
    borderClass: 'border-accent/15',
    activeBg: 'bg-accent',
    title: { tr: 'Raporlama Sistemleri', en: 'Reporting Systems' },
    tagline: {
      tr: 'Kurumunuza özgü raporlama altyapısı ile veriyi anlamlı çıktılara dönüştürüyoruz.',
      en: 'Transforming data into meaningful outputs with custom reporting infrastructure.',
    },
    description: {
      tr: [
        'Kurumlarda doğru raporlama, hem mevzuat uyumu hem de stratejik yönetim açısından kritik öneme sahiptir. Ancak çoğu kurum ya hazır raporlama araçlarının kısıtlamalarıyla ya da dağınık Excel dosyaları yığınıyla boğuşmaktadır.',
        'HC Dijital olarak kurumunuzun ihtiyaçlarına özel raporlama sistemleri geliştiriyoruz. Yasal raporlamadan operasyonel kalite göstergelerine, verimlilik analizinden yönetim tablolarına kadar her türlü raporlama gereksinimini karşılıyoruz.',
      ],
      en: [
        "In organizations, accurate reporting is critical for both regulatory compliance and strategic management. However, most institutions struggle with either the limitations of ready-made reporting tools or mountains of scattered Excel files.",
        "At HC Dijital, we develop custom reporting systems tailored to your institution's needs. We address every reporting requirement — from legal reporting to operational quality indicators, efficiency analysis to management dashboards.",
      ],
    },
    offers: {
      tr: [
        { title: 'Yasal & Mevzuat Raporlaması', desc: 'Denetim ve düzenleyici kurumlara gönderilen raporların otomasyonu.' },
        { title: 'Operasyonel Kalite Göstergeleri', desc: 'Süreç verimliliği, hizmet kalitesi ve operasyonel etkinlik metriklerinin izlenmesi.' },
        { title: 'Operasyonel Tablolar', desc: "Kapasite kullanımı, ekip verimliliği ve süreç yükü gibi operasyonel KPI'lar." },
        { title: 'Yönetici Özet Raporları', desc: 'Üst yönetim için tasarlanmış, eyleme dönüştürülebilir içgörüler sunan haftalık/aylık raporlar.' },
        { title: 'Otomatik Dağıtım', desc: 'Raporların zamanlanmış olarak e-posta, portal veya API üzerinden ilgili kişilere iletilmesi.' },
        { title: 'Self-Servis BI', desc: 'Teknik olmayan kullanıcıların kendi sorgularını oluşturabileceği self-servis raporlama arayüzü.' },
      ],
      en: [
        { title: 'Legal & Regulatory Reporting', desc: 'Automation of reports sent to regulatory and audit institutions.' },
        { title: 'Operational Quality Indicators', desc: 'Monitoring process efficiency, service quality, and operational effectiveness metrics.' },
        { title: 'Operational Dashboards', desc: 'Operational KPIs like capacity utilization, team efficiency, and process workload.' },
        { title: 'Executive Summary Reports', desc: 'Weekly/monthly reports designed for senior management presenting actionable insights.' },
        { title: 'Automated Distribution', desc: 'Scheduled delivery of reports to relevant parties via email, portal, or API.' },
        { title: 'Self-Service BI', desc: 'Self-service reporting interface where non-technical users can create their own queries.' },
      ],
    },
    steps: {
      tr: [
        { n: '01', title: 'Gereksinim Toplantıları', desc: 'Hangi kararların hangi verilerle desteklenmesi gerektiğini tüm paydaşlarla birlikte belirliyoruz.' },
        { n: '02', title: 'Veri Şeması Tasarımı', desc: 'Raporlama ihtiyaçlarını karşılayacak veri modeli ve ETL süreçlerini tasarlıyoruz.' },
        { n: '03', title: 'Geliştirme & Test', desc: 'Raporları geliştiriyor, gerçek veriyle doğruluk testleri yapıyoruz.' },
        { n: '04', title: 'Kullanıcı Eğitimi & Yayın', desc: 'Sistemi devreye alıyor, kullanıcı ekiplerine eğitim ve kullanım kılavuzu sunuyoruz.' },
      ],
      en: [
        { n: '01', title: 'Requirements Meetings', desc: 'We identify with all stakeholders which decisions need to be supported by which data.' },
        { n: '02', title: 'Data Schema Design', desc: 'We design the data model and ETL processes to meet reporting needs.' },
        { n: '03', title: 'Development & Testing', desc: 'We develop reports and run accuracy tests with real data.' },
        { n: '04', title: 'User Training & Launch', desc: 'We deploy the system and provide training and user guides to user teams.' },
      ],
    },
    why: {
      tr: [
        { title: 'Tek Doğruluk Kaynağı', desc: 'Tüm departmanların aynı veri üzerinden rapor aldığı merkezi bir altyapı kuruyoruz; çelişkili rakamlar tarihe karışıyor.' },
        { title: 'Mevzuat Takibi', desc: 'Yasal raporlama formatlarını ve değişen gereksinimleri yakından takip ediyor, sistemi güncel tutuyoruz.' },
        { title: 'Hızlı Uyarlanabilirlik', desc: 'Yeni bir rapor ihtiyacı doğduğunda altyapı zaten hazır; günler içinde yeni raporlar devreye alınabilir.' },
      ],
      en: [
        { title: 'Single Source of Truth', desc: 'We build centralized infrastructure where all departments report from the same data — conflicting numbers become a thing of the past.' },
        { title: 'Regulatory Tracking', desc: 'We closely follow legal reporting formats and changing requirements, keeping the system up to date.' },
        { title: 'Rapid Adaptability', desc: 'When a new reporting need arises, the infrastructure is already ready — new reports can be deployed in days.' },
      ],
    },
  },
  {
    slug: 'teknoloji-danismanligi',
    Icon: Lightbulb,
    accent: 'sky',
    accentClass: 'text-sky',
    bgClass: 'bg-sky/8',
    borderClass: 'border-sky/15',
    activeBg: 'bg-sky',
    title: { tr: 'Teknoloji Danışmanlığı', en: 'Technology Consulting' },
    tagline: {
      tr: 'Dijital dönüşüm yolculuğunuzda stratejik rehberiniz oluyoruz.',
      en: 'Becoming your strategic guide on the digital transformation journey.',
    },
    description: {
      tr: [
        'Teknoloji yatırımları doğru yapıldığında kurumsal dönüşümü hızlandırır; yanlış yapıldığında ise yıllarca sürüncemede kalan projeler ve boşa giden bütçelerle sonuçlanır. Fark genellikle teknik yetkinlikte değil, stratejik netlikte yatar.',
        'HC Dijital olarak teknoloji danışmanlığı hizmetimizle kurumunuzun dijital dönüşüm yol haritasını çiziyoruz. Mevcut sistemlerin olgunluk değerlendirmesinden teknoloji seçimine, süreç analizinden yatırım önceliklendirmesine kadar bağımsız ve deneyime dayalı danışmanlık sunuyoruz.',
      ],
      en: [
        "Technology investments, when done right, accelerate institutional transformation; when done wrong, they result in projects that drag on for years and wasted budgets. The difference usually lies not in technical competency but in strategic clarity.",
        "With our technology consulting service at HC Dijital, we chart your institution's digital transformation roadmap. We provide independent, experience-based consulting — from maturity assessment of existing systems to technology selection, process analysis to investment prioritization.",
      ],
    },
    offers: {
      tr: [
        { title: 'Dijital Dönüşüm Yol Haritası', desc: "Kurumunuzun mevcut durumunu analiz ederek 3-5 yıllık dijitalleşme stratejisi hazırlıyoruz." },
        { title: 'Teknoloji Seçim Danışmanlığı', desc: 'ERP, CRM veya özel yazılım tercihinde bağımsız değerlendirme ve karşılaştırmalı analiz.' },
        { title: 'Süreç Analizi & İyileştirme', desc: 'Mevcut iş süreçlerini haritalandırarak darboğazları ve otomasyon fırsatlarını tespit ediyoruz.' },
        { title: 'Dijital Olgunluk Değerlendirmesi', desc: "Kurumunuzun teknoloji kullanım seviyesini standart çerçevelerle ölçüyor, öncelik alanlarını belirliyoruz." },
        { title: 'Tedarikçi & RFP Yönetimi', desc: 'Teknoloji tedarikçisi seçim sürecini yapılandırıyor, teknik şartname hazırlıyoruz.' },
        { title: 'Proje Gözetimi', desc: 'Devam eden teknoloji projelerinde bağımsız teknik gözetim ve PMO desteği.' },
      ],
      en: [
        { title: 'Digital Transformation Roadmap', desc: "We analyze your institution's current state and prepare a 3-5 year digitalization strategy." },
        { title: 'Technology Selection Consulting', desc: 'Independent evaluation and comparative analysis for ERP, CRM, or custom software choices.' },
        { title: 'Process Analysis & Improvement', desc: 'We map existing business processes to identify bottlenecks and automation opportunities.' },
        { title: 'Digital Maturity Assessment', desc: "We measure your institution's technology usage level with standard frameworks and identify priority areas." },
        { title: 'Vendor & RFP Management', desc: 'We structure technology vendor selection processes and prepare technical specifications.' },
        { title: 'Project Oversight', desc: 'Independent technical oversight and PMO support for ongoing technology projects.' },
      ],
    },
    steps: {
      tr: [
        { n: '01', title: 'Durum Değerlendirmesi', desc: 'Mevcut teknoloji altyapısını, süreçleri ve kurumsal ihtiyaçları derinlemesine analiz ediyoruz.' },
        { n: '02', title: 'Boşluk & Fırsat Analizi', desc: 'Mevcut durum ile hedef durum arasındaki farkları ve öncelikli müdahale alanlarını belirliyoruz.' },
        { n: '03', title: 'Strateji Geliştirme', desc: 'Bulguları somut aksiyon planına dönüştürüyor, öncelik, süre ve kaynak tahminleriyle sunuyoruz.' },
        { n: '04', title: 'Uygulama Desteği', desc: 'Stratejiyi hayata geçirme sürecinde teknik gözetim ve karar desteği sağlıyoruz.' },
      ],
      en: [
        { n: '01', title: 'Current State Assessment', desc: 'We conduct in-depth analysis of existing technology infrastructure, processes, and institutional needs.' },
        { n: '02', title: 'Gap & Opportunity Analysis', desc: 'We identify differences between current and target states and priority intervention areas.' },
        { n: '03', title: 'Strategy Development', desc: 'We translate findings into a concrete action plan, presented with priorities, timelines, and resource estimates.' },
        { n: '04', title: 'Implementation Support', desc: 'We provide technical oversight and decision support throughout the strategy implementation process.' },
      ],
    },
    why: {
      tr: [
        { title: 'Bağımsız Perspektif', desc: 'Belirli bir ürün veya tedarikçiyle bağlantımız yoktur; tavsiyelerimiz yalnızca kurumunuzun çıkarına odaklanır.' },
        { title: 'Uygulamadan Gelen Deneyim', desc: 'Danışmanlarımız aynı zamanda uygulama yapan bir ekipten gelir; teorik değil, sahadan beslenmiş öneriler sunuruz.' },
        { title: 'Sonuç Odaklı Çalışma', desc: 'Raporla biten danışmanlıklar yapmayız; sonuçlar ölçülebilir çıktılara bağlanır ve ilerleme birlikte izlenir.' },
      ],
      en: [
        { title: 'Independent Perspective', desc: "We have no affiliations with specific products or vendors — our recommendations focus solely on your institution's interests." },
        { title: 'Experience from the Field', desc: 'Our consultants come from an implementation-oriented team — we provide field-tested recommendations, not theoretical ones.' },
        { title: 'Results-Oriented Work', desc: "We don't do consulting that ends with a report — outcomes are tied to measurable outputs and progress is monitored together." },
      ],
    },
  },
  {
    slug: 'yapay-zeka',
    Icon: Brain,
    accent: 'primary',
    accentClass: 'text-primary',
    bgClass: 'bg-primary/8',
    borderClass: 'border-primary/15',
    activeBg: 'bg-primary',
    title: { tr: 'Yapay Zekâ', en: 'Artificial Intelligence' },
    tagline: {
      tr: 'Yapay zekânın gücünü kurumların hizmetine sunuyoruz.',
      en: 'Putting the power of AI at the service of institutions.',
    },
    description: {
      tr: [
        'Yapay zekâ artık deneysel bir teknoloji değil; karar alma, süreç otomasyonu ve müşteri/kullanıcı deneyimini dönüştüren temel bir altyapı unsuru hâline gelmiştir. Ancak bu dönüşümü gerçekleştirmek için genel amaçlı AI araçları yeterli değildir.',
        'HC Dijital olarak kurumsal veriler üzerinde eğitilmiş, iş bağlamını anlayan ve mevcut sistemlere sorunsuz entegre olan yapay zekâ çözümleri geliştiriyoruz. NLP tabanlı belge işlemeden görüntü analizine, tahmine dayalı modellerden süreç otomasyon akışlarına kadar sektöre özgü AI çözümleri tasarlıyoruz.',
      ],
      en: [
        "Artificial intelligence is no longer an experimental technology — it has become a fundamental infrastructure element transforming decision-making, process automation, and customer/user experience. But general-purpose AI tools aren't enough to achieve this transformation.",
        "At HC Dijital, we develop AI solutions trained on institutional data, understanding business context, and seamlessly integrating with existing systems. We design industry-specific AI solutions — from NLP-based document processing to image analysis, predictive models to process automation workflows.",
      ],
    },
    offers: {
      tr: [
        { title: 'Belge NLP', desc: 'Raporlar, sözleşmeler ve kurumsal belgelerden yapılandırılmış veri çıkarımı.' },
        { title: 'Karar Destek Sistemi', desc: 'Operasyonel ve iş verilerini işleyen AI destekli karar destek modülleri.' },
        { title: 'Süreç Analitiği', desc: 'İş akışını modelleyen ve tıkanan süreçleri tespit eden öngörüsel analizler.' },
        { title: 'Süreç Otomasyonu', desc: 'Veri girişi, sınıflandırma ve rota planlaması gibi tekrarlayan işlemlerin AI ile otomasyonu.' },
        { title: 'Büyük Dil Modeli Entegrasyonu', desc: 'GPT, Llama ve özel modellerin kurumsal iş akışlarına entegrasyonu.' },
        { title: 'Model İzleme & MLOps', desc: 'Üretimdeki AI modellerinin performansını sürekli izleme ve güncelleme altyapısı.' },
      ],
      en: [
        { title: 'Document NLP', desc: 'Structured data extraction from reports, contracts, and institutional documents.' },
        { title: 'Decision Support System', desc: 'AI-powered decision support modules processing operational and business data.' },
        { title: 'Process Analytics', desc: 'Predictive analytics modeling workflow and detecting bottlenecks in processes.' },
        { title: 'Process Automation', desc: 'AI automation of repetitive tasks like data entry, classification, and routing.' },
        { title: 'Large Language Model Integration', desc: 'Integration of GPT, Llama, and custom models into institutional workflows.' },
        { title: 'Model Monitoring & MLOps', desc: 'Continuous monitoring and update infrastructure for AI models in production.' },
      ],
    },
    steps: {
      tr: [
        { n: '01', title: 'Veri Değerlendirmesi', desc: 'Mevcut veri kalitesini, etiketleme durumunu ve model için uygunluğu analiz ediyoruz.' },
        { n: '02', title: 'Model Tasarımı & Eğitimi', desc: 'Kullanım senaryosuna uygun mimariyi seçiyor, veriyle eğitiyoruz.' },
        { n: '03', title: 'Entegrasyon & Doğrulama', desc: 'Modeli mevcut sisteme entegre ediyor, doğrulama süreçleri yürütüyoruz.' },
        { n: '04', title: 'İzleme & Sürekli İyileştirme', desc: 'Üretimde model performansını izliyor, yeni verilerle periyodik olarak güncelliyoruz.' },
      ],
      en: [
        { n: '01', title: 'Data Assessment', desc: 'We analyze your existing data quality, labeling status, and suitability for modeling.' },
        { n: '02', title: 'Model Design & Training', desc: 'We select the right architecture for the use case and train it on your data.' },
        { n: '03', title: 'Integration & Validation', desc: 'We integrate the model into the existing system and conduct validation processes.' },
        { n: '04', title: 'Monitoring & Continuous Improvement', desc: 'We monitor model performance in production and periodically update it with new data.' },
      ],
    },
    why: {
      tr: [
        { title: 'Kurumsal Veri Uzmanlığı', desc: 'Modellerimiz genel metinler yerine kurumsal terminoloji, iş süreçleri ve sektöre özgü bağlam üzerinde eğitilir.' },
        { title: 'Açıklanabilir AI', desc: 'Kullanıcıların güvenerek kullanabilmesi için model kararlarını yorumlanabilir biçimde sunarız.' },
        { title: 'Sorumluluk Odaklı Geliştirme', desc: 'Her AI çözümünde önyargı tespiti, veri gizliliği ve güvenlik standartlarına uyum ön planda tutulur.' },
      ],
      en: [
        { title: 'Institutional Data Expertise', desc: 'Our models are trained on business terminology, institutional processes, and sector-specific context rather than general text.' },
        { title: 'Explainable AI', desc: 'We present model decisions in an interpretable way so users can rely on them with confidence.' },
        { title: 'Responsible Development', desc: 'Bias detection, data privacy, and security standards are prioritized in every AI solution.' },
      ],
    },
  },
  {
    slug: 'veri-bilimi',
    Icon: FlaskConical,
    accent: 'accent',
    accentClass: 'text-accent',
    bgClass: 'bg-accent/8',
    borderClass: 'border-accent/15',
    activeBg: 'bg-accent',
    title: { tr: 'Veri Bilimi', en: 'Data Science' },
    tagline: {
      tr: 'Kurumsal veriden makine öğrenmesi ile tahmin gücü ve stratejik içgörü elde ediyoruz.',
      en: 'Extracting predictive power and strategic insight from institutional data through machine learning.',
    },
    description: {
      tr: [
        'Veri bilimi, ham veriden istatistiksel modeller ve makine öğrenmesi algoritmaları aracılığıyla geleceğe yönelik içgörüler çıkarma disiplinidir. Bu disiplin; talep tahmininden kaynak optimizasyonuna, müşteri davranışı analizinden maliyet modellemesine kadar her sektörde geniş uygulama alanı bulur.',
        'HC Dijital olarak kurumsal veri üzerinde uzmanlaşmış veri bilimi hizmeti sunuyoruz. Veri setlerinin analizinden tahmine dayalı model geliştirmeye, istatistiksel araştırma desteğinden üretim ortamında model dağıtımına kadar her aşamada yanınızdayız.',
      ],
      en: [
        "Data science is the discipline of extracting forward-looking insights from raw data through statistical models and machine learning algorithms. This discipline finds broad application across every sector — from demand forecasting to resource optimization, customer behavior analysis to cost modeling.",
        "At HC Dijital, we offer specialized data science services on institutional data. We're with you at every stage — from analyzing datasets to developing predictive models, from statistical research support to model deployment in production environments.",
      ],
    },
    offers: {
      tr: [
        { title: 'Tahmine Dayalı Modelleme', desc: 'Talep tahmini, churn riski, sipariş hacmi ve operasyonel kapasite tahmin modelleri.' },
        { title: 'İstatistiksel Analiz', desc: 'İş araştırmalarında hipotez testi, regresyon analizi ve çok değişkenli istatistik.' },
        { title: 'Segmentasyon & Kümeleme', desc: 'Müşteri, ürün veya operasyonel verilerde anlamlı grupları keşfeden kümeleme analizleri.' },
        { title: 'Kaynak Optimizasyonu', desc: 'Personel planlaması, stok yönetimi ve operasyon takvimi için optimizasyon modelleri.' },
        { title: 'Anomali Tespiti', desc: 'Fatura sahteciliği, kullanım anomalileri ve süreç sapmalarının otomatik tespiti.' },
        { title: 'Model Dağıtımı & İzleme', desc: 'Geliştirilen modellerin üretim ortamına taşınması ve performans takibi.' },
      ],
      en: [
        { title: 'Predictive Modeling', desc: 'Demand forecasting, churn risk, order volume, and operational capacity prediction models.' },
        { title: 'Statistical Analysis', desc: 'Hypothesis testing, regression analysis, and multivariate statistics in business research.' },
        { title: 'Segmentation & Clustering', desc: 'Clustering analyses that discover meaningful groups in customer, product, or operational data.' },
        { title: 'Resource Optimization', desc: 'Optimization models for staff planning, inventory management, and operational scheduling.' },
        { title: 'Anomaly Detection', desc: 'Automated detection of billing fraud, usage anomalies, and process deviations.' },
        { title: 'Model Deployment & Monitoring', desc: 'Migrating developed models to production and tracking performance.' },
      ],
    },
    steps: {
      tr: [
        { n: '01', title: 'Problem Tanımı', desc: 'Çözülmek istenen iş problemini ve başarı metriklerini netleştiriyoruz.' },
        { n: '02', title: 'Veri Hazırlığı', desc: 'Veri toplama, temizleme, özellik mühendisliği ve keşifsel veri analizini yürütüyoruz.' },
        { n: '03', title: 'Model Geliştirme', desc: 'Birden fazla algoritma deniyor, en iyi performanslı modeli seçiyor ve iyileştiriyoruz.' },
        { n: '04', title: 'Dağıtım & İzleme', desc: 'Modeli üretim ortamına taşıyor, performansını düzenli olarak izliyor ve güncelliyoruz.' },
      ],
      en: [
        { n: '01', title: 'Problem Definition', desc: 'We clarify the business problem to be solved and success metrics.' },
        { n: '02', title: 'Data Preparation', desc: 'We conduct data collection, cleaning, feature engineering, and exploratory data analysis.' },
        { n: '03', title: 'Model Development', desc: 'We test multiple algorithms, select the best performing model, and refine it.' },
        { n: '04', title: 'Deployment & Monitoring', desc: 'We move the model to production and regularly monitor and update its performance.' },
      ],
    },
    why: {
      tr: [
        { title: 'Sektörel Bağlam Anlayışı', desc: 'Veri bilimcilerimiz iş süreçlerini ve sektörel dinamikleri biliyor; modeller gerçekçi kısıtlamalar gözetilerek tasarlanır.' },
        { title: 'Yorumlanabilir Sonuçlar', desc: 'Model çıktılarını yöneticilerin ve operasyon ekiplerinin anlayabileceği biçimde sunuyoruz; kara kutu kalmaz.' },
        { title: 'Yeniden Kullanılabilir Altyapı', desc: "Her proje, kurumunuzun veri bilimi kapasitesini kalıcı olarak artıran bir altyapı bırakır." },
      ],
      en: [
        { title: 'Sector Context Understanding', desc: 'Our data scientists know business processes and sector dynamics — models are designed with realistic constraints.' },
        { title: 'Interpretable Results', desc: 'We present model outputs in a way managers and operations teams can understand — nothing stays a black box.' },
        { title: 'Reusable Infrastructure', desc: "Every project leaves behind infrastructure that permanently increases your institution's data science capacity." },
      ],
    },
  },
  {
    slug: 'veri-analitigi',
    Icon: BarChart2,
    accent: 'sky',
    accentClass: 'text-sky',
    bgClass: 'bg-sky/8',
    borderClass: 'border-sky/15',
    activeBg: 'bg-sky',
    title: { tr: 'Veri Analitiği', en: 'Data Analytics' },
    tagline: {
      tr: 'Kurumsal verileri stratejik içgörülere dönüştürüyoruz.',
      en: 'Transforming institutional data into strategic insights.',
    },
    description: {
      tr: [
        'Kurumlar her gün milyonlarca satır veri üretir: operasyonel metrikler, finansal işlemler, müşteri verileri, süreç kayıtları. Ancak bu verilerin büyük çoğunluğu ham hâlde kalır ve stratejik karar alma süreçlerine katkı sağlayamaz.',
        "HC Dijital olarak veri analitiği hizmetimizle bu ham veriyi anlamlı içgörülere dönüştürüyor; kurumunuza özgü raporlama sistemleri, gerçek zamanlı panolar ve tahmine dayalı modeller kuruyoruz.",
      ],
      en: [
        'Organizations generate millions of rows of data every day: operational metrics, financial transactions, customer data, process records. Yet most of this data remains raw and fails to contribute to strategic decision-making.',
        "With our data analytics service at HC Dijital, we transform this raw data into meaningful insights — building custom reporting systems, real-time dashboards, and predictive models tailored to your institution.",
      ],
    },
    offers: {
      tr: [
        { title: 'Gerçek Zamanlı Panolar', desc: "Kurumunuzun KPI'larını anlık olarak izleyen, özelleştirilebilir web tabanlı panolar." },
        { title: 'İş Zekâsı Entegrasyonu', desc: 'Mevcut ERP ve kurumsal sistemlerinize bağlanan BI çözümleri.' },
        { title: 'Süreç Analizi', desc: 'İş akışları, darboğazlar ve operasyonel verimliliğe ilişkin derinlemesine analizler.' },
        { title: 'Finansal Raporlama', desc: 'Departman bazında gelir–gider takibi, bütçe sapma analizi.' },
        { title: 'Veri Ambarı Tasarımı', desc: 'Farklı kaynaklardan gelen kurumsal veriyi tek bir merkezi yapıda birleştirme.' },
        { title: 'Öngörüsel Analitik', desc: 'Geçmiş veriden geleceğe yönelik tahmin modelleri ve erken uyarı sistemleri.' },
      ],
      en: [
        { title: 'Real-Time Dashboards', desc: "Customizable web-based dashboards that monitor your institution's KPIs in real time." },
        { title: 'Business Intelligence Integration', desc: 'BI solutions connecting to your existing ERP and enterprise systems.' },
        { title: 'Process Analysis', desc: 'In-depth analysis of workflows, bottlenecks, and operational efficiency.' },
        { title: 'Financial Reporting', desc: 'Department-level revenue/expense tracking and budget variance analysis.' },
        { title: 'Data Warehouse Design', desc: 'Consolidating institutional data from multiple sources into a single central structure.' },
        { title: 'Predictive Analytics', desc: 'Forward-looking forecasting models and early warning systems from historical data.' },
      ],
    },
    steps: {
      tr: [
        { n: '01', title: 'Veri Keşfi', desc: 'Mevcut veri kaynaklarınızı, kalitesini ve boşluklarını analiz ediyoruz.' },
        { n: '02', title: 'Mimari Tasarım', desc: 'Kurumunuza özel veri ambarı ve raporlama mimarisini tasarlıyoruz.' },
        { n: '03', title: 'Geliştirme & Entegrasyon', desc: 'Panolar ve raporları inşa eder, mevcut sistemlere entegre ediyoruz.' },
        { n: '04', title: 'Eğitim & Sürekli Destek', desc: "Ekibinizi eğitir ve sistemin gelişimini desteklemeye devam ediyoruz." },
      ],
      en: [
        { n: '01', title: 'Data Discovery', desc: 'We analyze your existing data sources, quality, and gaps.' },
        { n: '02', title: 'Architecture Design', desc: 'We design a data warehouse and reporting architecture tailored to your institution.' },
        { n: '03', title: 'Development & Integration', desc: 'We build dashboards and reports, integrating with existing systems.' },
        { n: '04', title: 'Training & Ongoing Support', desc: "We train your team and continue supporting the system's evolution." },
      ],
    },
    why: {
      tr: [
        { title: 'Sektöre Özgü Uzmanlık', desc: 'Analistlerimiz kurumsal veri yapıları ve sektöre özgü metrikler konusunda derinlemesine deneyime sahiptir.' },
        { title: 'Hızlı Prototip', desc: 'İlk çalışan pano prototipini ortalama 2 hafta içinde teslim ediyoruz.' },
        { title: 'KVKK Uyumlu Altyapı', desc: 'Tüm veri akışları ve depolama süreçleri KVKK ve ilgili mevzuata uygundur.' },
      ],
      en: [
        { title: 'Sector-Specific Expertise', desc: 'Our analysts have deep experience with institutional data structures and sector-specific metrics.' },
        { title: 'Rapid Prototyping', desc: 'We deliver the first working dashboard prototype in an average of 2 weeks.' },
        { title: 'GDPR-Compliant Infrastructure', desc: 'All data flows and storage processes comply with GDPR and relevant regulations.' },
      ],
    },
  },
]

// ── Yardımcı bileşenler ───────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function ServicesPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const [activeSlug, setActiveSlug] = useState('yazilim-gelistirme')

  const active = serviceData.find((s) => s.slug === activeSlug)
  const { Icon } = active

  return (
    <div className="bg-white text-dark">
      <Header />

      {/* ══════════════════════════════════════════════════════════
          BANNER — Başlık + Servis Seçici Kartlar
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-dark pt-20 relative overflow-hidden pb-0">
        <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center justify-center -rotate-12">
          <span className="text-[55vw] font-black text-white/4 leading-none tracking-tighter">HC</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 relative">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">
              {lang === 'en' ? 'Home' : 'Ana Sayfa'}
            </Link>
            <span>/</span>
            <span className="text-white/60">{lang === 'en' ? 'Services' : 'Hizmetler'}</span>
          </div>

          {/* Başlık */}
          <motion.div {...fadeUp(0.05)} className="mb-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
              {lang === 'en' ? 'What We Do' : 'Neler Yapıyoruz'}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {lang === 'en' ? 'Our Services' : 'Hizmetlerimiz'}
            </h1>
          </motion.div>

          {/* Servis seçici kartlar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {serviceData.map((s, i) => {
              const SIcon = s.Icon
              const isActive = s.slug === activeSlug
              return (
                <motion.button
                  key={s.slug}
                  {...fadeUp(0.1 + i * 0.05)}
                  onClick={() => setActiveSlug(s.slug)}
                  className={`group relative flex flex-col items-start gap-3 p-4 md:p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-white text-dark shadow-lg'
                      : 'bg-white/8 border-white/10 hover:bg-white/12 hover:border-white/20'
                  }`}
                >
                  {/* İkon */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? `${s.bgClass} border ${s.borderClass}`
                      : 'bg-white/10 border border-white/15'
                  }`}>
                    <SIcon size={16} className={isActive ? s.accentClass : 'text-white/70'} />
                  </div>

                  {/* Başlık */}
                  <span className={`text-xs md:text-sm font-bold leading-snug transition-colors duration-200 ${
                    isActive ? 'text-dark' : 'text-white/80'
                  }`}>
                    {s.title[lang]}
                  </span>

                  {/* Aktif göstergesi */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-dark/20 rounded-full"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Seçili hizmet özet şeridi */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlug + '-tab'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 mt-6 pb-6 border-t border-white/10 pt-5"
            >
              <div className={`w-8 h-8 rounded-lg ${active.bgClass} border ${active.borderClass} flex items-center justify-center`}>
                <Icon size={15} className={active.accentClass} />
              </div>
              <div>
                <p className={`text-xs font-bold tracking-widest uppercase ${active.accentClass}`}>
                  {active.title[lang]}
                </p>
                <p className="text-sm text-white/40 mt-0.5">{active.tagline[lang]}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          İÇERİK — Seçili hizmet detayları
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlug}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ── Hizmet Açıklaması ── */}
          <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
                <div>
                  <p className={`text-xs font-bold tracking-[0.2em] uppercase ${active.accentClass}`}>
                    {lang === 'en' ? 'About the Service' : 'Hizmet Hakkında'}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  {active.description[lang].map((para, i) => (
                    <p key={i} className="text-lg md:text-xl text-slate-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Ne Sunuyoruz ── */}
          <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="mb-12">
                <p className={`text-xs font-bold tracking-[0.2em] uppercase ${active.accentClass} mb-3`}>
                  {lang === 'en' ? 'What We Offer' : 'Ne Sunuyoruz'}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-dark">
                  {lang === 'en' ? 'Our solution areas' : 'Çözüm alanlarımız'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden">
                {active.offers[lang].map((item, i) => (
                  <div key={i} className="bg-white p-7 flex flex-col gap-3 group hover:bg-slate-50 transition-colors duration-200">
                    <div className={`w-1.5 h-1.5 rounded-full ${active.activeBg}`} />
                    <h3 className="text-sm font-bold text-dark">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Yaklaşımımız ── */}
          <section className="py-20 md:py-28 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
                <div>
                  <p className={`text-xs font-bold tracking-[0.2em] uppercase ${active.accentClass} mb-3`}>
                    {lang === 'en' ? 'Our Approach' : 'Yaklaşımımız'}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark leading-tight">
                    {lang === 'en' ? 'How we work' : 'Nasıl çalışırız'}
                  </h2>
                </div>
                <div className="flex flex-col divide-y divide-slate-100">
                  {active.steps[lang].map((step, i) => (
                    <div key={i} className="grid grid-cols-[48px_1fr] gap-6 py-7 first:pt-0 last:pb-0">
                      <span className="text-3xl font-black text-slate-100 leading-none pt-1 select-none">{step.n}</span>
                      <div>
                        <h3 className="text-base font-bold text-dark mb-1.5">{step.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Neden HC Dijital ── */}
          <section className="py-16 md:py-24 border-t border-slate-100 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="mb-12">
                <p className={`text-xs font-bold tracking-[0.2em] uppercase ${active.accentClass} mb-3`}>
                  {lang === 'en' ? 'Why HC Dijital' : 'Neden HC Dijital'}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-dark">
                  {lang === 'en' ? 'What sets us apart' : 'Bizi farklı kılan'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {active.why[lang].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                    <div className={`w-8 h-8 rounded-lg ${active.activeBg} flex items-center justify-center mb-5`}>
                      <span className="text-white text-xs font-black">0{i + 1}</span>
                    </div>
                    <h3 className="text-base font-bold text-dark mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-linear-to-b from-slate-100 to-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t.cta.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight">
            {t.cta.h2}
          </h2>
          <p className="mt-7 text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {t.cta.paragraph}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-dark text-white text-[15px] font-bold hover:bg-primary transition-colors duration-300 shadow-md hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {t.cta.ctaPrimary}
              <ArrowRight size={15} />
            </Link>
            <a
              href="mailto:info@hcdijital.com.tr"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-slate-300 text-slate-600 text-[15px] font-semibold hover:border-dark hover:text-dark transition-all duration-200"
            >
              <Mail size={15} />
              {t.cta.ctaSecondary}
            </a>
          </div>
          <p className="mt-8 text-slate-400 text-sm">{t.cta.note}</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
