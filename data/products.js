import _airxHero         from '../assets/images/products/airx-hero.webp'
import _airx2            from '../assets/images/products/airx-2.webp'
import _airx3            from '../assets/images/products/airx-3.webp'
import _airx4            from '../assets/images/products/airx-4.webp'
import _airxSetup        from '../assets/images/products/airx-setup.webp'
import _airxMobile       from '../assets/images/products/airx-mobile.webp'
import _airxReport       from '../assets/images/products/airx-report.webp'
import _tercumedHero     from '../assets/images/products/tercumed-hero.webp'
import _tercumed2        from '../assets/images/products/tercumed-2.webp'
import _tercumed3        from '../assets/images/products/tercumed-3.webp'
import _tercumed4        from '../assets/images/products/tercumed-4.webp'
import _tercumedTerminology from '../assets/images/products/tercumed-terminology.webp'
import _tercumedPdf      from '../assets/images/products/tercumed-pdf.webp'
import _tercumedSteps    from '../assets/images/products/tercumed-steps.webp'
import _butce2           from '../assets/images/products/butce-2.webp'
import _butce3           from '../assets/images/products/butce-3.webp'

const s = (x) => x?.src ?? x
const airxHero          = s(_airxHero)
const airx2             = s(_airx2)
const airx3             = s(_airx3)
const airx4             = s(_airx4)
const airxSetup         = s(_airxSetup)
const airxMobile        = s(_airxMobile)
const airxReport        = s(_airxReport)
const tercumedHero      = s(_tercumedHero)
const tercumed2         = s(_tercumed2)
const tercumed3         = s(_tercumed3)
const tercumed4         = s(_tercumed4)
const tercumedTerminology = s(_tercumedTerminology)
const tercumedPdf       = s(_tercumedPdf)
const tercumedSteps     = s(_tercumedSteps)
const butce2            = s(_butce2)
const butce3            = s(_butce3)

export const products = [
  {
    id: 'airx-ikys',
    slug: 'airx-ikys',
    category: 'İK & Zaman Yönetimi',
    title: 'AirX IKYS',
    tagline: 'Zaman takibini düzene otur ve ekibini tek ekrandan yönet.',
    description: 'Personel giriş-çıkış takibi, vardiya planlaması ve izin yönetimini tek platformda birleştiren iş gücü yönetim sistemi.',
    longDescription: [
      'AirX, çalışan giriş ve çıkışlarını, vardiya düzenini ve izin süreçlerini tek yerde toplamanızı sağlar. Karmaşayı azaltır, hataları düşürür, yöneticilere kesin kontrol sağlar.',
      'Mobil ve web üzerinden erişilebilen platform, rol bazlı yetkilendirme yapısıyla her kademeye uygun görünürlük sunar. Düzenli raporlar ve veri dışa aktarma özellikleriyle operasyonel kararlar daha hızlı alınır.',
      'Kolay kurulum ve hızlı kullanım odaklı tasarımı sayesinde teknik altyapı gerektirmeden hayata geçirilir; ekibiniz aynı gün kullanmaya başlayabilir.',
    ],
    stats: [
      { value: '%40', label: 'Daha az idari iş yükü' },
      { value: '1 Gün', label: 'Kurulum ve canlıya geçiş süresi' },
      { value: '7/24', label: 'Mobil erişim imkânı' },
    ],
    benefits: [
      { icon: 'Zap', title: 'Anında Kurulum', description: 'Teknik altyapı gerektirmez; ekibiniz aynı gün sistemi kullanmaya başlar.' },
      { icon: 'Smartphone', title: 'Çok Cihaz Desteği', description: 'Masaüstü, tablet ve mobilde kesintisiz erişim sağlanır.' },
      { icon: 'BarChart3', title: 'Otomatik Raporlama', description: 'Devam ve mesai verileri Excel/PDF formatında otomatik çıktı üretir.' },
      { icon: 'ShieldCheck', title: 'Rol Bazlı Yetkilendirme', description: 'Her kademeye uygun görünürlük; yalnızca doğru kişi doğru veriye erişir.' },
      { icon: 'Users', title: 'Ekip Yönetimi', description: 'Vardiya planlama ve izin süreçleri tek panelden yönetilir.' },
      { icon: 'Plug', title: 'Kolay Entegrasyon', description: 'Mevcut bordro ve HBYS sistemleriyle API üzerinden sorunsuz bağlanır.' },
    ],
    howItWorks: [
      { step: 1, title: 'Kurulumu Başlatın', description: 'Web tarayıcınız üzerinden hesabınızı oluşturun; sunucu veya teknik ekip gerektirmez.' },
      { step: 2, title: 'Ekibinizi Tanımlayın', description: 'Çalışanları, departmanları ve vardiya planını sisteme ekleyin.' },
      { step: 3, title: 'Takibi Başlatın', description: 'Giriş-çıkış, izin ve mesai verileri otomatik olarak işlenmeye başlar.' },
      { step: 4, title: 'Raporlarınızı Alın', description: 'Haftalık ve aylık raporları tek tıkla oluşturun; bordro sürecinize doğrudan entegre edin.' },
    ],
    faqs: [
      { question: 'Kurulum ne kadar sürer?', answer: 'Standart bir kurum için kurulum ve ön yapılandırma ortalama yarım gün içinde tamamlanır. Ekibiniz aynı gün sistemi kullanmaya başlayabilir.' },
      { question: 'Mobil uygulama var mı?', answer: 'Evet. iOS ve Android için optimize edilmiş mobil arayüz, çalışanların giriş-çıkış ve izin işlemlerini her cihazdan yapmasına olanak tanır.' },
      { question: 'Mevcut bordro yazılımımla çalışır mı?', answer: 'AirX, yaygın bordro ve İK sistemleriyle API entegrasyonu sunar. Özel entegrasyon ihtiyaçları için teknik ekibimiz destek sağlar.' },
      { question: 'Veri güvenliği nasıl sağlanıyor?', answer: 'Tüm veriler şifreli kanallar üzerinden iletilir ve rol bazlı erişim kontrolüyle korunur. Günlük otomatik yedekleme standarttır.' },
    ],
    tags: ['İK Yönetimi', 'Zaman Takibi', 'Yazılım', 'Vardiya Planlama'],
    website: 'https://airx.com.tr',
    image: airxHero,
    heroImage: airxHero,
    gallery: [airxHero, airx2, airx3, airx4],
    features: [
      { number: '01', title: 'Kolay Kurulum ve Hızlı Kullanım', description: 'Teknik altyapı gerektirmeyen kurulum süreci sayesinde ekibiniz aynı gün sistemi kullanmaya başlar. Sezgisel arayüz, eğitim süresini minimize eder.', image: airxSetup },
      { number: '02', title: 'Mobil & Web Üzerinden Erişim', description: 'Çalışanlar giriş-çıkış kaydı, izin talebi ve vardiya bilgilerine her cihazdan ulaşır. Yöneticiler anlık durumu web panelinden veya mobil uygulamadan takip eder.', image: airxMobile },
      { number: '03', title: 'Düzenli Raporlar ve Dışa Aktarma', description: 'Devam, devamsızlık, mesai ve izin verileri otomatik olarak raporlanır. Excel ve PDF formatında dışa aktarılarak bordro ve denetim süreçlerine doğrudan entegre edilir.', image: airxReport },
    ],
    featured: true,
    color: 'bg-primary/8 text-primary border-primary/15',
    dot: 'bg-primary',
    en: {
      category: 'HR & Time Management',
      tagline: 'Organize time tracking and manage your team from a single screen.',
      description: 'A workforce management platform that brings together employee attendance, shift scheduling, and leave management in one place.',
      longDescription: [
        'AirX consolidates employee check-ins, shift arrangements, and leave processes in a single platform — reducing complexity, minimizing errors, and giving managers full control.',
        'Accessible on mobile and web, the platform provides role-based visibility at every level. Automated reports and data export features enable faster operational decisions.',
        'Designed for easy setup and immediate use, AirX goes live without any technical infrastructure — your team can start using it the same day.',
      ],
      tags: ['HR Management', 'Time Tracking', 'Software', 'Shift Planning'],
      stats: [
        { value: '40%', label: 'Less administrative workload' },
        { value: '1 Day', label: 'Setup and go-live' },
        { value: '24/7', label: 'Mobile access' },
      ],
      benefits: [
        { icon: 'Zap', title: 'Instant Setup', description: 'No technical infrastructure needed — your team can start using the system the same day.' },
        { icon: 'Smartphone', title: 'Multi-Device Support', description: 'Seamless access on desktop, tablet, and mobile.' },
        { icon: 'BarChart3', title: 'Automated Reporting', description: 'Attendance and overtime data automatically generates Excel/PDF reports.' },
        { icon: 'ShieldCheck', title: 'Role-Based Access', description: 'Each level sees only the relevant data; only the right person accesses the right information.' },
        { icon: 'Users', title: 'Team Management', description: 'Shift planning and leave processes managed from a single control panel.' },
        { icon: 'Plug', title: 'Easy Integration', description: 'Connects seamlessly with existing payroll and HIS systems via API.' },
      ],
      features: [
        { number: '01', title: 'Easy Setup & Fast Onboarding', description: 'Cloud-based setup requires no technical infrastructure. Your team can start using the platform the same day with an intuitive interface that minimizes training time.', image: airxSetup },
        { number: '02', title: 'Mobile & Web Access', description: 'Employees access check-in records, leave requests, and shift information from any device. Managers monitor real-time status from the web panel or mobile app.', image: airxMobile },
        { number: '03', title: 'Automated Reports & Data Export', description: 'Attendance, absence, overtime, and leave data are automatically reported. Excel and PDF exports integrate directly with payroll and audit processes.', image: airxReport },
      ],
      howItWorks: [
        { step: 1, title: 'Get Started', description: 'Create your account through a web browser — no server or technical team required.' },
        { step: 2, title: 'Define Your Team', description: 'Add employees, departments, and shift plans to the system.' },
        { step: 3, title: 'Start Tracking', description: 'Check-ins, leave, and overtime data begins processing automatically.' },
        { step: 4, title: 'Get Your Reports', description: 'Generate weekly and monthly reports with one click; integrate directly with payroll.' },
      ],
      faqs: [
        { question: 'How long does setup take?', answer: 'Setup and initial configuration for a standard organization is completed within half a day. Your team can start using the system the same day.' },
        { question: 'Is there a mobile app?', answer: 'Yes. An iOS and Android optimized mobile interface allows employees to perform check-in/out and leave operations from any device.' },
        { question: 'Does it work with our existing payroll software?', answer: 'AirX offers API integration with popular payroll and HR systems. Our technical team provides support for custom integration needs.' },
        { question: 'How is data security ensured?', answer: 'All data is transmitted via encrypted channels and protected with role-based access control. Daily automatic backups are standard.' },
      ],
    },
  },
  {
    id: 'tercumed',
    slug: 'tercumed',
    category: 'Yapay Zekâ / Sağlık',
    title: 'Tercümed',
    tagline: 'Tıbbi belgeleri saniyeler içinde anlaşılır dile çevir.',
    description: 'Taburculuk belgesi ve onam formu gibi tıbbi belgelerdeki dil engelini kaldıran, hızlı ve anlamlı çıktılar üreten yapay zekâ destekli çeviri çözümü.',
    longDescription: [
      'Tercümed, taburculuk belgesi ve onam formu gibi tıbbi belgelerdeki dil engelini kaldırmak için tasarlanmış yapay zekâ destekli bir çözümdür. Hızlı, anlamlı ve pratik çıktılar üretir.',
      'Tıbbi terminolojiye duyarlı çeviri yaklaşımı sayesinde genel amaçlı çeviri araçlarının hata yapabileceği klinik terimleri doğru şekilde işler. PDF ve Word çıktı seçenekleriyle mevcut iş akışına sorunsuz entegre olur.',
      'Süreç üç adımda tamamlanır: Dosyayı yükle → Hedef dili seç → Çevrilmiş çıktıyı indir. Hasta kabul biriminden klinisyenlere kadar her kullanıcı için sezgisel ve pratik bir deneyim sunar.',
    ],
    stats: [
      { value: '30+', label: 'Desteklenen dil' },
      { value: '3 Adım', label: 'Tüm süreç bu kadar' },
      { value: '%95+', label: 'Terminoloji doğruluğu' },
    ],
    benefits: [
      { icon: 'Zap', title: 'Saniyeler İçinde Çeviri', description: 'Belgeler yüklenir yüklenmez yapay zekâ motoru çeviriyi başlatır; bekleme süresi yok.' },
      { icon: 'ShieldCheck', title: 'Klinik Doğruluk', description: 'Tıbbi terminolojiye özel eğitilmiş model; genel çeviri hatalarını ortadan kaldırır.' },
      { icon: 'BarChart3', title: 'PDF & Word Çıktı', description: 'Orijinal belge düzeni korunarak doğrudan kullanıma hazır dosya elde edilir.' },
      { icon: 'Users', title: 'Çok Kullanıcılı Erişim', description: 'Hasta kabul, klinik ve idari birimler aynı platformu eş zamanlı kullanır.' },
      { icon: 'Plug', title: 'HBS Entegrasyonu', description: 'Mevcut hastane bilgi sisteminize API bağlantısıyla sorunsuz entegre olur.' },
      { icon: 'Headphones', title: '7/24 Teknik Destek', description: 'Mesai saati dışında da erişilebilir destek hattı ve öncelikli ticket sistemi.' },
    ],
    howItWorks: [
      { step: 1, title: 'Belgeyi Yükleyin', description: 'PDF, Word veya görüntü formatında tıbbi belgenizi platforma yükleyin.' },
      { step: 2, title: 'Hedef Dili Seçin', description: '30\'dan fazla dil arasından çeviri yapılacak dili seçin.' },
      { step: 3, title: 'Yapay Zekâ İşliyor', description: 'Tıbbi terminolojiye duyarlı model belgeyi analiz edip çeviriyi üretir.' },
      { step: 4, title: 'İndirin ve Kullanın', description: 'PDF veya Word formatındaki çevrilmiş belgeyi indirin, hasta dosyasına ekleyin.' },
    ],
    faqs: [
      { question: 'Hangi belge türlerini destekliyor?', answer: 'Taburculuk belgeleri, onam formları, epikriz, laboratuvar raporları ve radyoloji raporları başta olmak üzere tüm klinik belge türleri desteklenmektedir.' },
      { question: 'Çeviri ne kadar sürede tamamlanır?', answer: 'Standart bir sayfa için çeviri süresi 10-30 saniye arasındadır. Yoğun dönemlerde bile gecikme yaşanmaz.' },
      { question: 'Genel çeviri araçlarından farkı nedir?', answer: 'Tercümed, genel amaçlı değil tıbbi terminoloji üzerinde özel olarak eğitilmiştir. Bu sayede ilaç adları, tanı kodları ve prosedür terimleri doğru çevrilir.' },
      { question: 'KVKK ve hasta gizliliği uyumlu mu?', answer: 'Evet. Yüklenen belgeler yalnızca çeviri sürecinde işlenir, depolanmaz. Tüm aktarımlar şifreli bağlantı üzerinden gerçekleşir.' },
    ],
    website: 'https://tercumed.medtech.tr',
    tags: ['Yapay Zekâ', 'NLP', 'Sağlık', 'Çeviri'],
    image: tercumedHero,
    heroImage: tercumedHero,
    gallery: [tercumedHero, tercumed2, tercumed3, tercumed4],
    features: [
      { number: '01', title: 'Tıbbi Terminolojiye Duyarlı Çeviri', description: 'Genel amaçlı çeviri araçlarının aksine Tercümed, tıbbi terminoloji üzerinde özel olarak eğitilmiştir. Tanı, ilaç adları ve klinik prosedür terimleri yüksek doğrulukla çevrilir.', image: tercumedTerminology },
      { number: '02', title: 'PDF ve Word Çıktı Seçenekleri', description: 'Çevrilen belgeler PDF veya Word formatında indirilebilir. Orijinal belge düzeni korunarak çıktı doğrudan hasta dosyasına eklenmeye hazır hâle gelir.', image: tercumedPdf },
      { number: '03', title: 'Üç Adımda Tamamlanan Süreç', description: 'Dosyayı yükle, hedef dili seç, çevrilmiş çıktıyı indir. Karmaşık kurulum ya da eğitim gerektirmez; hasta kabul biriminden klinisyene kadar herkes anında kullanabilir.', image: tercumedSteps },
    ],
    featured: false,
    color: 'bg-accent/8 text-accent-dark border-accent/15',
    dot: 'bg-accent',
    en: {
      category: 'AI / Healthcare',
      tagline: 'Translate medical documents into clear language within seconds.',
      description: 'An AI-powered translation solution that removes language barriers in medical documents such as discharge summaries and consent forms.',
      longDescription: [
        'Tercümed is an AI-powered solution designed to remove language barriers in medical documents such as discharge summaries and consent forms. It produces fast, meaningful, and practical outputs.',
        'Thanks to its medically-aware translation approach, it correctly processes clinical terms where general-purpose tools may fail. PDF and Word output options integrate seamlessly into existing workflows.',
        'The process is completed in three steps: Upload the file → Select the target language → Download the translated output. An intuitive experience for every user, from patient admission to clinicians.',
      ],
      tags: ['Artificial Intelligence', 'NLP', 'Healthcare', 'Translation'],
      stats: [
        { value: '30+', label: 'Supported languages' },
        { value: '3 Steps', label: 'The entire process' },
        { value: '95%+', label: 'Terminology accuracy' },
      ],
      benefits: [
        { icon: 'Zap', title: 'Translation in Seconds', description: 'As soon as documents are uploaded, the AI engine starts translating — no waiting.' },
        { icon: 'ShieldCheck', title: 'Clinical Accuracy', description: 'Model trained specifically on medical terminology eliminates general translation errors.' },
        { icon: 'BarChart3', title: 'PDF & Word Output', description: 'Download files ready to use immediately, with original document layout preserved.' },
        { icon: 'Users', title: 'Multi-User Access', description: 'Patient admission, clinical, and administrative units use the same platform simultaneously.' },
        { icon: 'Plug', title: 'HIS Integration', description: 'Integrates seamlessly with your existing hospital information system via API.' },
        { icon: 'Headphones', title: '24/7 Technical Support', description: 'Support line accessible outside business hours with priority ticket system.' },
      ],
      features: [
        { number: '01', title: 'Medically-Aware Translation', description: 'Unlike general-purpose tools, Tercümed is specially trained on medical terminology. Diagnoses, drug names, and clinical procedure terms are translated with high accuracy.', image: tercumedTerminology },
        { number: '02', title: 'PDF and Word Output Options', description: 'Translated documents can be downloaded in PDF or Word format. Output is ready to be added directly to patient files with original layout preserved.', image: tercumedPdf },
        { number: '03', title: 'Three-Step Process', description: 'Upload the file, select the target language, download the translated output. No complex setup required — usable instantly by anyone from patient admission to clinician.', image: tercumedSteps },
      ],
      howItWorks: [
        { step: 1, title: 'Upload the Document', description: 'Upload your medical document in PDF, Word, or image format to the platform.' },
        { step: 2, title: 'Select Target Language', description: 'Choose the translation language from 30+ options.' },
        { step: 3, title: 'AI Processing', description: 'The medically-aware model analyzes the document and generates the translation.' },
        { step: 4, title: 'Download and Use', description: 'Download the translated document in PDF or Word format, ready to add to patient records.' },
      ],
      faqs: [
        { question: 'What document types are supported?', answer: 'Discharge summaries, consent forms, epicrises, laboratory and radiology reports, along with all clinical document types, are supported.' },
        { question: 'How quickly is translation completed?', answer: 'Translation time for a standard page is between 10-30 seconds. No delays even during peak periods.' },
        { question: 'What makes it different from general translation tools?', answer: 'Tercümed is trained specifically on medical terminology. This ensures drug names, diagnosis codes, and procedure terms are translated correctly.' },
        { question: 'Is it GDPR compliant?', answer: 'Yes. Uploaded documents are processed only during translation and are not stored. All transfers occur over encrypted connections.' },
      ],
    },
  },
  {
    id: 'butce-yonetim',
    slug: 'butce-yonetim',
    category: 'Finans / Sağlık',
    title: 'Hastane Bütçe Yönetim Sistemi',
    tagline: 'Bütçe yönetiminde yeni nesil.',
    description: 'Otomatik gider–gelir takibi, gerçek zamanlı öngörüler ve yapay zekâ destekli raporlarla stratejik kararlar almanızı sağlayan, ölçeklenebilir ve güvenli bütçe yönetim platformu.',
    longDescription: [
      'Hastane Bütçe Yönetim Sistemi, ekip yönetimi ve iş süreçlerini tek kontrol panelinde birleştirir. Otomatik gider–gelir takibi, gerçek zamanlı öngörüler ve yapay zekâ destekli raporlarla stratejik kararlar almanızı sağlar.',
      'Ölçeklenebilir ve güvenli altyapısıyla küçük kliniklerden büyük hastane zincirlerine kadar her ölçekte kuruma uyum sağlar.',
      'Bütçe aşımları oluşmadan önce yapay zekâ tabanlı uyarı mekanizması devreye girer.',
    ],
    stats: [
      { value: '%100', label: 'Otomatik gider-gelir takibi' },
      { value: '1 Tık', label: 'Yönetim kurulu raporu' },
      { value: 'ERP Uyumlu', label: 'Sistem entegrasyonu' },
    ],
    benefits: [
      { icon: 'BarChart3', title: 'Otomatik Takip', description: 'Gelir ve gider kalemleri sınıflandırılır; manuel giriş ihtiyacı tamamen ortadan kalkar.' },
      { icon: 'TrendingUp', title: 'AI Öngörü Motoru', description: 'Gelecek dönem bütçe sapmaları oluşmadan önce tespit edilir ve yönetici uyarılır.' },
      { icon: 'ShieldCheck', title: 'Güvenli Altyapı', description: 'Rol bazlı erişim ve veri şifreleme ile hassas finansal veriler her zaman korunaklıdır.' },
      { icon: 'Plug', title: 'ERP & HBYS Entegrasyonu', description: 'Mevcut sistemlerinizle veri silolarını ortadan kaldırır; tek doğru kaynak oluşturur.' },
      { icon: 'Users', title: 'Birim Bazlı Analiz', description: 'Her klinikteki maliyet merkezi ayrı ayrı izlenir ve karşılaştırmalı analize açılır.' },
      { icon: 'Zap', title: 'Anlık Uyarılar', description: 'Bütçe aşımı riski oluştuğunda ilgili yöneticilere otomatik bildirim gider.' },
    ],
    howItWorks: [
      { step: 1, title: 'Entegrasyonu Kurun', description: 'Mevcut ERP, HBYS ve muhasebe sistemlerinizi platforma bağlayın.' },
      { step: 2, title: 'Bütçe Hedeflerini Girin', description: 'Birim ve dönem bazlı bütçe limitlerini ve gider kalemlerini tanımlayın.' },
      { step: 3, title: 'Otomatik Takip Başlar', description: 'Tüm gelir ve giderler gerçek zamanlı olarak işlenir ve görselleştirilir.' },
      { step: 4, title: 'Raporlarla Karar Alın', description: 'Yapay zekâ destekli raporlar ve tahminlerle stratejik bütçe kararları verin.' },
    ],
    faqs: [
      { question: 'Hangi ERP sistemleriyle entegre olur?', answer: 'SAP, Oracle ve yerli HBYS çözümleriyle entegrasyon desteklenmektedir.' },
      { question: 'Küçük bir klinik için uygun mu?', answer: 'Evet. Platform, tek birimli kliniklerden çok şubeli hastane zincirlerine kadar ölçeklenebilir modüler yapıya sahiptir.' },
      { question: 'Yapay zekâ tahminleri ne kadar güvenilir?', answer: 'Ortalama hata payı %5\'in altındadır.' },
      { question: 'Muhasebe ekibim ek eğitim alması gerekiyor mu?', answer: 'Sezgisel arayüz tasarımı sayesinde temel eğitim 2 saatte tamamlanmaktadır.' },
    ],
    tags: ['Finans', 'AI Raporlama', 'Sağlık', 'Analitik'],
    image: butce2,
    heroImage: butce2,
    gallery: [butce2, butce3, butce2, butce3],
    features: [
      { number: '01', title: 'Otomatik Gider–Gelir Takibi', description: 'Tüm gelir ve gider kalemleri otomatik olarak sınıflandırılır ve izlenir.', image: butce2 },
      { number: '02', title: 'Yapay Zekâ Destekli Raporlar', description: 'Geçmiş verileri analiz eden yapay zekâ motoru, gelecek dönem bütçe tahminleri ve sapma uyarıları üretir.', image: butce2 },
      { number: '03', title: 'Ölçeklenebilir ve Güvenli Altyapı', description: 'Bulut tabanlı güvenli altyapı, kurumunuzun büyümesiyle birlikte ölçeklenir.', image: butce3 },
    ],
    featured: false,
    color: 'bg-primary/8 text-primary border-primary/15',
    dot: 'bg-primary',
    en: {
      category: 'Finance / Healthcare',
      tagline: 'Next generation in budget management.',
      description: 'A scalable and secure budget management platform enabling strategic decisions with automated expense-income tracking, real-time insights, and AI-powered reports.',
      longDescription: [
        'The Hospital Budget Management System consolidates team management and business processes in a single control panel.',
        'With its scalable and secure infrastructure, it adapts to any size institution from small clinics to large hospital chains.',
        'The AI-based warning mechanism activates before budget overruns occur.',
      ],
      tags: ['Finance', 'AI Reporting', 'Healthcare', 'Analytics'],
      stats: [
        { value: '100%', label: 'Automated expense-income tracking' },
        { value: '1 Click', label: 'Board report generation' },
        { value: 'ERP Ready', label: 'System integration' },
      ],
      benefits: [
        { icon: 'BarChart3', title: 'Automated Tracking', description: 'Revenue and expense items are classified; the need for manual entry is completely eliminated.' },
        { icon: 'TrendingUp', title: 'AI Forecasting Engine', description: 'Future budget deviations are detected before they occur and the manager is alerted.' },
        { icon: 'ShieldCheck', title: 'Secure Infrastructure', description: 'Role-based access and data encryption keep sensitive financial data always protected.' },
        { icon: 'Plug', title: 'ERP & HIS Integration', description: 'Eliminates data silos with existing systems; creates a single source of truth.' },
        { icon: 'Users', title: 'Unit-Based Analysis', description: 'Cost centers in each clinic are monitored separately and open for comparative analysis.' },
        { icon: 'Zap', title: 'Instant Alerts', description: 'Automatic notifications are sent to relevant managers when budget overrun risk arises.' },
      ],
      features: [
        { number: '01', title: 'Automated Expense-Income Tracking', description: 'All revenue and expense items are automatically classified and monitored.', image: butce2 },
        { number: '02', title: 'AI-Powered Reports', description: 'The AI engine analyzing historical data generates future period budget forecasts and deviation warnings.', image: butce2 },
        { number: '03', title: 'Scalable and Secure Infrastructure', description: 'The cloud-based secure infrastructure scales with your organization\'s growth.', image: butce3 },
      ],
      howItWorks: [
        { step: 1, title: 'Set Up Integration', description: 'Connect your existing ERP, HIS, and accounting systems to the platform.' },
        { step: 2, title: 'Enter Budget Targets', description: 'Define unit and period-based budget limits and expense items.' },
        { step: 3, title: 'Automated Tracking Begins', description: 'All revenues and expenses are processed in real time and visualized.' },
        { step: 4, title: 'Decide with Reports', description: 'Make strategic budget decisions with AI-powered reports and forecasts.' },
      ],
      faqs: [
        { question: 'Which ERP systems does it integrate with?', answer: 'Integration with SAP, Oracle, and local HIS solutions is supported.' },
        { question: 'Is it suitable for a small clinic?', answer: 'Yes. The platform has a scalable modular structure from single-unit clinics to multi-branch hospital chains.' },
        { question: 'How reliable are the AI forecasts?', answer: 'The average margin of error is below 5%.' },
        { question: 'Does my accounting team need additional training?', answer: 'Basic training is completed in 2 hours thanks to the intuitive interface design.' },
      ],
    },
  },
]

export const categories = {
  tr: ['Tümü', 'İK & Zaman Yönetimi', 'Yapay Zekâ / Sağlık', 'Finans / Sağlık'],
  en: ['All', 'HR & Time Management', 'AI / Healthcare', 'Finance / Healthcare'],
}
