'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MonitorDot, Globe, Code2, Brain, FileBarChart, Lightbulb } from 'lucide-react'
import { useLang } from '../../context/LanguageContext'
import { i18n } from '../../data/i18n'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
// SEO handled by Next.js metadata

// ── Tüm servis içerikleri ──────────────────────────────────────────────────
const serviceData = [
  {
    slug: 'kumanda-yonetim-merkezi',
    Icon: MonitorDot,
    accent: 'sky',
    accentClass: 'text-sky',
    bgClass: 'bg-sky/8',
    borderClass: 'border-sky/15',
    activeBg: 'bg-sky',
    title: { tr: 'Kumanda ve Yönetim Merkezi Kuruluşu', en: 'Command & Control Center Setup' },
    tagline: {
      tr: 'Tüm operasyonlarınızı tek ekrandan gerçek zamanlı izleyin ve yönetin.',
      en: 'Monitor and manage all your operations in real time from a single screen.',
    },
    description: {
      tr: [
        'Kurumlar büyüdükçe, farklı sistemlerden gelen verileri anlık olarak izlemek ve doğru kararı hızlı almak giderek zorlaşır. Kumanda ve yönetim merkezleri, bu dağınıklığı ortadan kaldırarak tüm operasyonel süreçleri tek bir merkezi noktada görünür hâle getirir.',
        'HC Dijital olarak kurumunuzun ihtiyaçlarına özel, gerçek zamanlı veri akışı, alarm yönetimi ve karar destek modüllerini bir arada sunan kumanda merkezi altyapıları kuruyoruz. Sağlık tesislerinden lojistik operasyon merkezlerine, fabrika yönetim odalarından belediye kontrol merkezlerine kadar her ölçekte çözüm üretiyoruz.',
      ],
      en: [
        'As organizations grow, monitoring data from different systems in real time and making the right decisions quickly becomes increasingly difficult. Command and control centers eliminate this fragmentation, making all operational processes visible from a single central point.',
        "At HC Dijital, we build command center infrastructure tailored to your institution's needs — combining real-time data streams, alarm management, and decision support modules. We deliver solutions at every scale, from healthcare facilities to logistics operation centers, factory management rooms to municipal control centers.",
      ],
    },
    offers: {
      tr: [
        { title: 'Gerçek Zamanlı İzleme Panosu', desc: 'Tüm sistemlerden gelen verileri tek ekranda birleştiren, özelleştirilebilir canlı panolar.' },
        { title: 'Alarm & Uyarı Yönetimi', desc: 'Kritik eşiklere ulaşıldığında anlık bildirim ve eskalasyon akışları.' },
        { title: 'Çoklu Kaynak Entegrasyonu', desc: 'SCADA, ERP, CRM ve IoT sensörlerinden gelen verilerin tek platformda birleştirilmesi.' },
        { title: 'Video & Sensör Yönetimi', desc: 'Güvenlik kameraları ve saha sensörlerinin merkezi yönetim altyapısına entegrasyonu.' },
        { title: 'Karar Destek Modülü', desc: 'Anlık verilere dayalı aksiyon önerileri sunan yapay zekâ destekli karar destek araçları.' },
        { title: 'Tarihsel Veri & Raporlama', desc: 'Geçmiş operasyonel verilerin analizi ve yönetim raporlaması için arşiv altyapısı.' },
      ],
      en: [
        { title: 'Real-Time Monitoring Dashboard', desc: 'Customizable live dashboards that consolidate data from all systems onto a single screen.' },
        { title: 'Alarm & Alert Management', desc: 'Instant notifications and escalation workflows when critical thresholds are reached.' },
        { title: 'Multi-Source Integration', desc: 'Consolidating data from SCADA, ERP, CRM, and IoT sensors into a single platform.' },
        { title: 'Video & Sensor Management', desc: 'Integration of security cameras and field sensors into central management infrastructure.' },
        { title: 'Decision Support Module', desc: 'AI-powered decision support tools providing action recommendations based on real-time data.' },
        { title: 'Historical Data & Reporting', desc: 'Archive infrastructure for analyzing historical operational data and management reporting.' },
      ],
    },
    steps: {
      tr: [
        { n: '01', title: 'Operasyonel Analiz', desc: 'Mevcut süreçleri, veri kaynaklarını ve izleme ihtiyaçlarını detaylı biçimde haritalandırıyoruz.' },
        { n: '02', title: 'Mimari & Entegrasyon Tasarımı', desc: 'Tüm sistemlerin veri akışını tek platform üzerinde buluşturacak teknik mimariyi tasarlıyoruz.' },
        { n: '03', title: 'Geliştirme & Kurulum', desc: 'Panoları, alarm akışlarını ve entegrasyonları geliştiriyor, donanım altyapısını kuruyoruz.' },
        { n: '04', title: 'Eğitim & Canlı Destek', desc: 'Operatör ekibini eğitiyor, canlıya geçiş sonrasında sahada destek sağlıyoruz.' },
      ],
      en: [
        { n: '01', title: 'Operational Analysis', desc: 'We thoroughly map existing processes, data sources, and monitoring requirements.' },
        { n: '02', title: 'Architecture & Integration Design', desc: 'We design the technical architecture that brings all system data flows together on a single platform.' },
        { n: '03', title: 'Development & Installation', desc: 'We develop dashboards, alarm workflows, and integrations, and set up hardware infrastructure.' },
        { n: '04', title: 'Training & Live Support', desc: 'We train the operator team and provide on-site support after go-live.' },
      ],
    },
    why: {
      tr: [
        { title: 'Sektörel Deneyim', desc: 'Sağlık, sanayi ve belediye gibi farklı sektörlerde kumanda merkezi kurulum deneyimine sahibiz.' },
        { title: 'Uçtan Uca Teslimat', desc: 'Yazılım geliştirmeden donanım kurulumuna, eğitimden devreye almaya kadar tüm süreci yönetiyoruz.' },
        { title: '7/24 Operasyonel Dayanıklılık', desc: 'Yüksek erişilebilirlik mimarisi ve yedeklilik planlamasıyla sistemin kesintisiz çalışmasını garanti ediyoruz.' },
      ],
      en: [
        { title: 'Sector Experience', desc: 'We have command center setup experience across different sectors including healthcare, industry, and municipalities.' },
        { title: 'End-to-End Delivery', desc: 'We manage the entire process — from software development and hardware installation to training and commissioning.' },
        { title: '24/7 Operational Resilience', desc: 'We guarantee uninterrupted system operation with high-availability architecture and redundancy planning.' },
      ],
    },
  },
  {
    slug: 'web-gelistirme',
    Icon: Globe,
    accent: 'accent',
    accentClass: 'text-accent',
    bgClass: 'bg-accent/8',
    borderClass: 'border-accent/15',
    activeBg: 'bg-accent',
    title: { tr: 'Web Geliştirme', en: 'Web Development' },
    tagline: {
      tr: 'Kurumsal ihtiyaçlara özel, modern ve ölçeklenebilir web uygulamaları geliştiriyoruz.',
      en: 'Building modern and scalable web applications tailored to institutional needs.',
    },
    description: {
      tr: [
        'Dijital dünyada kurumunuzun yüzü web uygulamalarıdır. Kurumsal portallardan hasta/müşteri self-servis platformlarına, dahili iş akışı araçlarından halkla iletişim sitelerine kadar her web uygulaması hem işlevsel hem de güvenilir olmak zorundadır.',
        'HC Dijital olarak modern teknoloji yığınıyla kurumsal web uygulamaları geliştiriyoruz. Hızlı yükleme süreleri, güçlü güvenlik altyapısı, mobil uyumlu tasarım ve kolay yönetilebilir içerik yapısıyla uzun vadeli dijital varlığınızı inşa ediyoruz.',
      ],
      en: [
        "In the digital world, web applications are your institution's face. From corporate portals to patient/customer self-service platforms, internal workflow tools to public communication sites — every web application must be both functional and reliable.",
        'At HC Dijital, we develop enterprise web applications with modern technology stacks. We build your long-term digital presence with fast load times, robust security infrastructure, mobile-responsive design, and easily manageable content structure.',
      ],
    },
    offers: {
      tr: [
        { title: 'Kurumsal Web Portalı', desc: 'Hizmet tanıtımı, içerik yönetimi ve kurumsal iletişim için kapsamlı kurumsal web siteleri.' },
        { title: 'Self-Servis Platformu', desc: 'Hasta, müşteri veya çalışanların randevu, başvuru ve takip işlemlerini kendi yapabildiği portal uygulamaları.' },
        { title: 'Dahili İş Akışı Arayüzü', desc: 'Personelin günlük operasyonlarını yönettiği kurumsal intranet ve iş akışı uygulamaları.' },
        { title: 'API Entegrasyonlu Web Uygulaması', desc: 'Mevcut ERP, CRM veya klinik sistemlere bağlanan entegre web arayüzleri.' },
        { title: 'İçerik Yönetim Sistemi', desc: 'Teknik bilgi gerektirmeden içerik eklenip güncellenebilen özel CMS altyapısı.' },
        { title: 'Performans & SEO Optimizasyonu', desc: 'Hız, erişilebilirlik ve arama motoru görünürlüğü için kapsamlı teknik optimizasyon.' },
      ],
      en: [
        { title: 'Corporate Web Portal', desc: 'Comprehensive corporate websites for service presentation, content management, and institutional communication.' },
        { title: 'Self-Service Platform', desc: 'Portal applications where patients, customers, or staff can independently handle appointments, applications, and tracking.' },
        { title: 'Internal Workflow Interface', desc: 'Enterprise intranet and workflow applications where staff manage daily operations.' },
        { title: 'API-Integrated Web Application', desc: 'Integrated web interfaces connecting to existing ERP, CRM, or clinical systems.' },
        { title: 'Content Management System', desc: 'Custom CMS infrastructure where content can be added and updated without technical knowledge.' },
        { title: 'Performance & SEO Optimization', desc: 'Comprehensive technical optimization for speed, accessibility, and search engine visibility.' },
      ],
    },
    steps: {
      tr: [
        { n: '01', title: 'Keşif & Planlama', desc: 'Hedef kitle, içerik yapısı, entegrasyon ihtiyaçları ve teknik gereksinimleri birlikte belirliyoruz.' },
        { n: '02', title: 'Tasarım & Prototip', desc: 'Kullanıcı deneyimini ön planda tutan wireframe ve görsel tasarımları hazırlıyor, onay alıyoruz.' },
        { n: '03', title: 'Geliştirme & Test', desc: 'Uygulamayı geliştiriyor, çapraz tarayıcı ve mobil uyumluluk testleri yürütüyoruz.' },
        { n: '04', title: 'Yayın & Sürekli Destek', desc: 'Uygulamayı canlıya alıyor, güvenlik güncellemeleri ve içerik desteğini sürdürüyoruz.' },
      ],
      en: [
        { n: '01', title: 'Discovery & Planning', desc: 'We collaboratively define target audience, content structure, integration needs, and technical requirements.' },
        { n: '02', title: 'Design & Prototype', desc: 'We prepare user-experience-first wireframes and visual designs and get approval.' },
        { n: '03', title: 'Development & Testing', desc: 'We develop the application and conduct cross-browser and mobile compatibility tests.' },
        { n: '04', title: 'Launch & Ongoing Support', desc: 'We go live and maintain security updates and content support.' },
      ],
    },
    why: {
      tr: [
        { title: 'Kurumsal Odak', desc: 'Yalnızca vitrin siteler değil; entegrasyon, güvenlik ve ölçeklenebilirlik gözetilerek inşa edilmiş kurumsal web altyapıları geliştiriyoruz.' },
        { title: 'Hız & Performans', desc: 'Core Web Vitals standartlarında, gerçek dünya kullanımında hızlı ve akıcı çalışan uygulamalar teslim ediyoruz.' },
        { title: 'Uzun Vadeli Sahiplik', desc: 'Yayın sonrasında bakım, güncelleme ve geliştirme süreçlerinde kurumunuzla birlikte yürüyoruz.' },
      ],
      en: [
        { title: 'Enterprise Focus', desc: "We build enterprise web infrastructure constructed with integration, security, and scalability in mind — not just showcase sites." },
        { title: 'Speed & Performance', desc: 'We deliver applications that are fast and fluid in real-world usage, meeting Core Web Vitals standards.' },
        { title: 'Long-Term Ownership', desc: "We walk alongside your institution through maintenance, updates, and development processes after launch." },
      ],
    },
  },
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
]

// ── Yardımcı bileşenler ───────────────────────────────────────────────────

const fadeUp = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
})

export default function ServicesPage() {
  const { lang } = useLang()
  const t = i18n[lang]
  const [activeSlug, setActiveSlug] = useState('kumanda-yonetim-merkezi')

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
                <button
                  key={s.slug}
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
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-dark/20 rounded-full" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Seçili hizmet özet şeridi */}
          <AnimatePresence mode="sync">
            <motion.div
              key={activeSlug + '-tab'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
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
      <AnimatePresence mode="sync">
        <motion.div
          key={activeSlug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
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
