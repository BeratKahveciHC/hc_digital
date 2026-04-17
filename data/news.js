import _tercumedHero      from '../assets/images/products/tercumed-hero.webp'
import _airxMobile        from '../assets/images/products/airx-mobile.webp'
import _butce2            from '../assets/images/products/butce-2.webp'
import _spiralHero        from '../assets/images/products/spiral-hero.webp'
import _yonHero           from '../assets/images/products/yon-hero.webp'
import _saglikIkizAcilis  from '../assets/images/news/saglik-ikiz-donusum-acilis.webp'
import _patentLisanslama  from '../assets/images/news/patent-lisanslama.webp'
import _teknogisimRozeti  from '../assets/images/news/teknogisim-rozeti.webp'

const s = (x) => x?.src ?? x
const tercumedHero     = s(_tercumedHero)
const airxMobile       = s(_airxMobile)
const butce2           = s(_butce2)
const spiralHero       = s(_spiralHero)
const yonHero          = s(_yonHero)
const saglikIkizAcilis = s(_saglikIkizAcilis)
const patentLisanslama = s(_patentLisanslama)
const teknogisimRozeti = s(_teknogisimRozeti)

export const news = [
  {
    slug: 'istinye-universitesi-patent-lisanslama',
    date: '2025-12-22',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: patentLisanslama,
    title: {
      tr: 'İstinye Üniversitesi\'nden Ticarileşmede Tarihi Adım: 6 Patent 5 Firmaya Lisanslandı',
      en: 'Historic Step in Commercialization from İstinye University: 6 Patents Licensed to 5 Companies',
    },
    summary: {
      tr: 'HC Dijital\'in de aralarında yer aldığı 5 firmaya dijital dönüşüm, farmakoloji ve sağlık teknolojileri alanlarında geliştirilen 6 patent lisanslandı.',
      en: '6 patents developed in digital transformation, pharmacology, and health technologies were licensed to 5 companies including HC Dijital.',
    },
    content: {
      tr: [
        '19 Aralık 2025 günü İstinye Üniversitesi Vadi Yerleşkesinde gerçekleşen lansmanda, dijital dönüşüm, farmakoloji ve sağlık teknolojileri alanlarında geliştirilen 6 patent, HC Dijital\'in de aralarında yer aldığı 5 firmaya lisanslandı. Bu lisanslamalar, üniversitenin kuruluşundan bu yana gerçekleştirilen ilk patent lisanslamaları olma özelliği taşımaktadır.',
        { type: 'image', src: patentLisanslama, alt: 'Patent Lisanslama Töreni' },
        'Programın açılış konuşmalarını gerçekleştiren Rektör Prof. Dr. Erkan İbiş, "İstinye Üniversitesi olarak üniversite–sanayi iş birliğini stratejik bir öncelik olarak görüyoruz. Gerçekleştirilen bu ilk patent lisanslamaları, üniversitemizin yükselen akademik ve araştırma çizgisinin önemli bir göstergesidir. Üretilen bilginin sahada karşılık bulması, üniversitemizin araştırma misyonunu güçlendiren temel unsurlardan biridir." dedi.',
        'Rektör Yardımcısı Prof. Dr. Bestami Özkaya da üniversitenin patent portföyüne ve ticarileştirmeye verdiği önemi vurgulayarak "Bu lisanslama faaliyeti, İstinye Üniversitesi\'nde bugüne kadar gerçekleştirilen en önemli çalışmalardan biridir ve araştırma çıktılarının ekonomik değere dönüşmesi açısından kritik bir dönüm noktasıdır." dedi. Mütevelli Heyet Başkanı Dr. Muharrem Usta da fikri mülkiyetin sürdürülebilir değer üretimindeki rolüne dikkat çekti.',
        'Lansman konukları arasında yer alan Türk Patent ve Marka Kurumu Başkanı Prof. Dr. M. Zeki Durak ise Türkiye\'nin sınai mülkiyet alanındaki başarılarını ve üniversitelerde üretilen bilginin ticarileşmesinin ülke ekonomisine katkısını vurguladı. HC Dijital olarak bu tarihi adımın bir parçası olmaktan büyük gurur duyuyor; elde edilen lisansı dijital dönüşüm alanındaki ürünlerimizi ve çözümlerimizi daha da güçlendirmek için bir fırsat olarak değerlendiriyoruz.',
      ],
      en: [
        'At a launch event held on December 19, 2025 at İstinye University\'s Vadi Campus, 6 patents developed in the fields of digital transformation, pharmacology, and health technologies were licensed to 5 companies, including HC Dijital. These represent the first patent licenses in the university\'s history.',
        { type: 'image', src: patentLisanslama, alt: 'Patent Licensing Ceremony' },
        'Rector Prof. Dr. Erkan İbiş stated: "At İstinye University, we view university–industry collaboration as a strategic priority. These first patent licenses are an important indicator of our university\'s rising academic and research trajectory. Knowledge finding real-world application is one of the key elements that strengthens our university\'s research mission."',
        'Vice Rector Prof. Dr. Bestami Özkaya emphasized the university\'s growing patent portfolio, calling this "one of the most important achievements to date at İstinye University and a critical turning point in transforming research outputs into economic value." Board of Trustees Chair Dr. Muharrem Usta also highlighted the role of intellectual property in sustainable value creation.',
        'Turkish Patent and Trademark Office President Prof. Dr. M. Zeki Durak underscored Turkey\'s achievements in industrial property and the economic contribution of commercializing university-generated knowledge. As HC Dijital, we are proud to be part of this historic step and see the licensed patent as an opportunity to further strengthen our products and solutions in digital transformation.',
      ],
    },
  },
  {
    slug: 'saglik-ikiz-donusum-merkezi-acilis',
    date: '2026-03-31',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: saglikIkizAcilis,
    title: {
      tr: 'İştirakçisi Olduğumuz "Sağlık Sektörü İkiz Dönüşüm ve Sürdürülebilir Üretim Merkezi" Projesinin Açılışı Gerçekleştirildi',
      en: 'Opening Ceremony of the "Health Sector Twin Transformation and Sustainable Production Center" Project We Participated In',
    },
    summary: {
      tr: 'HC Dijital\'in iştirakçisi olduğu, İSTKA desteğiyle İstinye Üniversitesi tarafından yürütülen "Sağlık Sektörü İkiz Dönüşüm ve Sürdürülebilir Üretim Merkezi" projesinin açılış toplantısı gerçekleştirildi.',
      en: 'The opening meeting of the "Health Sector Twin Transformation and Sustainable Production Center" project, supported by İSTKA and carried out by İstinye University, was held with the participation of HC Dijital.',
    },
    content: {
      tr: [
        'HC Dijital\'in iştirakçisi olduğu "Sağlık Sektörü İkiz Dönüşüm ve Sürdürülebilir Üretim Merkezi" projesinin açılış toplantısı, İstanbul Kalkınma Ajansı (İSTKA) desteğiyle İstinye Üniversitesi Rektörü Prof. Dr. Erkan İbiş, İstanbul Vali Yardımcısı Elif Canan Tuncer ve İSTKA İzleme ve Değerlendirme Birim Başkanı Gökhan Çoban\'ın katılımıyla gerçekleştirildi.',
        { type: 'image', src: saglikIkizAcilis, alt: 'Sağlık Sektörü İkiz Dönüşüm Merkezi Açılışı' },
        'Proje ile sağlık sektörü imalat sanayisinde sürdürülebilir yalın üretim ve dijital dönüşüm ilkelerini birleştiren bir değer üretim mekanizması ara yüzü geliştirilerek üretim süreçlerini optimize eden ve yeşil dönüşüme katkı sağlayan yüksek katma değerli bir üretim modeline geçişin kolaylaştırılması öngörülmektedir.',
        'Proje kapsamında temin edilen laboratuvar donanımları ve yazılımlar ile sektördeki firmalara yönelik dijital ve yeşil dönüşüm, yalın üretim, atık yönetimi ve geri dönüşüm, sürdürülebilirlik alanlarında farkındalık, eğitim ve danışmanlık programları uygulanacaktır.',
        'HC Dijital olarak bu projeye iştirakçi sıfatıyla katılmaktan büyük memnuniyet duyuyoruz. Sağlık teknolojileri ve dijital dönüşüm alanındaki birikimimizi bu kapsamlı girişimle buluşturmak, hem sektöre hem de ülkemizin sürdürülebilir üretim hedeflerine somut katkı sunma fırsatı olarak değerlendiriyoruz.',
      ],
      en: [
        'The opening meeting of the "Health Sector Twin Transformation and Sustainable Production Center" project, in which HC Dijital is a participant, was held with the attendance of İstinye University Rector Prof. Dr. Erkan İbiş, Istanbul Deputy Governor Elif Canan Tuncer, and İSTKA Monitoring and Evaluation Unit Head Gökhan Çoban. The project is supported by the Istanbul Development Agency (İSTKA) and carried out by İstinye University.',
        { type: 'image', src: saglikIkizAcilis, alt: 'Health Sector Twin Transformation Center Opening' },
        'The project aims to develop a value production mechanism interface combining sustainable lean manufacturing and digital transformation principles in the healthcare manufacturing sector, facilitating a transition to a high-value-added production model that optimizes production processes and contributes to the green transformation.',
        'Within the scope of the project, awareness, training, and consultancy programs in the areas of digital and green transformation, lean production, waste management and recycling, and sustainability will be implemented for companies in the sector using laboratory equipment and software procured for this purpose.',
        'As HC Dijital, we are pleased to participate in this project as a stakeholder. We consider it an opportunity to contribute concretely to both the sector and our country\'s sustainable production goals by bringing together our expertise in health technologies and digital transformation.',
      ],
    },
  },
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
        { type: 'image', src: tercumedHero, alt: 'TercüMed AI' },
        'Tıbbi belgelerdeki dil engelini yapay zekâ ile ortadan kaldırmayı hedefleyen TercüMed AI, taburculuk belgeleri, onam formları ve klinik raporlar gibi içerikleri hasta ve hasta yakını için anlaşılır bir dile dönüştürüyor.',
        'Bu kabul, yalnızca bir destek programına dahil olmaktan öte; projenin teknik geçerliliğinin, inovatif niteliğinin ve toplumsal faydasının bağımsız uzmanlar tarafından tescillenmesi anlamını taşıyor.',
        'HC Dijital bu başarıyı, sağlık teknolojileri alanındaki kararlılığının ve AR-GE kapasitesinin somut bir yansıması olarak değerlendiriyor.',
      ],
      en: [
        'The TercüMed AI project submitted by HC Dijital was evaluated by KOSGEB reviewers and accepted with a perfect score of 100.',
        { type: 'image', src: tercumedHero, alt: 'TercüMed AI' },
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
        { type: 'image', src: airxMobile, alt: 'AiRX Mobil PDKS' },
        'Günümüzde ekip yönetimi, özellikle sahada, şubelerde, depo yapılarında ve vardiyalı çalışma düzenlerinde sadece takip değil; aynı zamanda hız, netlik ve kayıt disiplini gerektiriyor. AiRX, bu ihtiyaca karşılık veren sade ama güçlü bir yapı sunuyor.',
        'AiRX\'in öne çıkan tarafı, günlük operasyonu karmaşıklaştırmadan düzen altına alması. Çalışan hareketliliğinin yoğun olduğu yapılarda zaman kaybını azaltan, süreçleri görünür hale getiren ve yöneticinin karar alma hızını artıran bir sistem olarak konumlanıyor.',
        'HC Dijital için AiRX\'in kullanıma açılması yeni bir ürünün yayına alınmasından daha fazlasını ifade ediyor.',
      ],
      en: [
        'HC Dijital\'s new workforce and time management solution, AiRX, has officially gone live. Developed with a mobile time-and-attendance approach, AiRX aims to consolidate many operational needs under a single platform.',
        { type: 'image', src: airxMobile, alt: 'AiRX Mobile Time & Attendance' },
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
        { type: 'image', src: butce2, alt: 'Bütçe Planlama Sistemi' },
        'Özellikle çok katmanlı karar alma yapısına sahip kurumlarda bütçe planlaması, yalnızca rakamların toplandığı bir süreç değil; aynı zamanda kaynak yönetimi, önceliklendirme ve performans takibi açısından kritik bir yönetim alanı olarak öne çıkıyor.',
        'Lisanslama süreciyle birlikte Bütçe Planlama Sistemi\'nin kurumlara daha net bir kullanım modeliyle sunulması, ürünün yaygınlaşması açısından da önemli bir eşik anlamı taşıyor.',
        'HC Dijital, bu adımla birlikte yalnızca yazılım geliştiren bir şirket değil, aynı zamanda süreçlerin kurumsallaşmasına katkı sunan bir teknoloji ortağı olma hedefini de güçlendiriyor.',
      ],
      en: [
        'HC Dijital has moved its Budget Planning System into the licensing phase. This step signals that the product has evolved from a purely technical solution into a scalable structure ready for enterprise deployment.',
        { type: 'image', src: butce2, alt: 'Budget Planning System' },
        'In organizations with multi-layered decision-making structures, budget planning stands out as a critical management domain for resource allocation, prioritization, and performance tracking.',
        'Presenting the Budget Planning System to institutions under a clearer usage model through the licensing process also marks an important milestone for broader adoption.',
        'With this step, HC Dijital reinforces its goal of being not just a software development company, but a technology partner that contributes to the institutionalization of processes.',
      ],
    },
  },
  {
    slug: 'hc-dijital-teknogisim-rozeti',
    date: '2025-10-07',
    category: { tr: 'Şirket Haberleri', en: 'Company News' },
    image: teknogisimRozeti,
    imageFit: 'contain',
    title: {
      tr: 'HC Dijital Teknogirişim Rozetini Aldı',
      en: 'HC Dijital Receives Technoenterprise Badge',
    },
    summary: {
      tr: 'HC Dijital Sağlık Teknolojileri, T.C. Sanayi ve Teknoloji Bakanlığı tarafından Teknogirişim Rozeti\'ne layık görüldü. Belge, 07.10.2025 tarihinde onaylanarak 3 yıl süreyle geçerlilik kazandı.',
      en: 'HC Dijital Sağlık Teknolojileri has been awarded the Technoenterprise Badge by the Ministry of Industry and Technology. The certificate was approved on 07.10.2025 and is valid for 3 years.',
    },
    content: {
      tr: [
        'HC Dijital Sağlık Teknolojileri Sanayi Ticaret Limited Şirketi, T.C. Sanayi ve Teknoloji Bakanlığı tarafından yürütülen Milli Teknoloji Hamlesi kapsamında Teknogirişim Rozeti\'ne layık görüldü. Belge, 3 Temmuz 2025 tarih ve 32945 sayılı "Teknoloji ve Yenilik Odaklı Girişimlerin Belirlenmesi ve Belgelendirilmesine Dair Yönetmelik" çerçevesinde düzenlenmiş olup 07.10.2025 tarihinde onaylanarak 3 yıl süreyle geçerlilik kazandı.',
        { type: 'image', src: teknogisimRozeti, alt: 'Teknogirişim Rozeti', fit: 'contain' },
        'Teknogirişim Rozeti; teknoloji ve yenilik odaklı faaliyet gösteren şirketlerin resmi olarak tanınmasını sağlayan, Bakanlık güvencesiyle verilen bir belgedir. Bu rozet, HC Dijital\'in sağlık teknolojileri alanındaki AR-GE faaliyetlerinin ve inovatif ürün geliştirme kapasitesinin bağımsız bir kurumsal teyidi niteliği taşımaktadır.',
        'HC Dijital, bu belgeyi yalnızca bir statü göstergesi olarak değil; sağlık dijitalleşmesine katkı sunma kararlılığının ve teknoloji üretme yetkinliğinin somut bir yansıması olarak değerlendirmektedir. Önümüzdeki dönemde de inovasyon odaklı yaklaşımını ve AR-GE yatırımlarını güçlendirerek sürdürmeyi hedeflemektedir.',
      ],
      en: [
        'HC Dijital Sağlık Teknolojileri Sanayi Ticaret Limited Şirketi has been awarded the Technoenterprise Badge under the National Technology Initiative led by the Turkish Ministry of Industry and Technology. The certificate was issued in accordance with the regulation numbered 32945 dated July 3, 2025, approved on October 7, 2025, and is valid for 3 years.',
        { type: 'image', src: teknogisimRozeti, alt: 'Technoenterprise Badge', fit: 'contain' },
        'The Technoenterprise Badge is an officially recognized document issued under Ministry guarantee that identifies companies operating with a technology and innovation focus. This badge serves as an independent institutional validation of HC Dijital\'s R&D activities and innovative product development capacity in health technologies.',
        'HC Dijital views this certificate not merely as a status symbol, but as a concrete reflection of its commitment to contributing to healthcare digitalization and its competency in producing technology. The company aims to continue and strengthen its innovation-driven approach and R&D investments in the coming period.',
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
        { type: 'image', src: yonHero, alt: 'TERA Projesi' },
        'Bu kabul, HC Dijital\'in bölgesel kalkınma ekosistemiyle kurduğu işbirlikleri ve katma değer yaratan projelerdeki aktif rolünü bir kez daha teyit ediyor.',
        'Projenin hayata geçirilmesiyle birlikte elde edilecek çıktılar, HC Dijital\'in teknoloji üretme ve kurumsal dönüşüme katkı sunma vizyonuyla örtüşüyor.',
      ],
      en: [
        'The TERA project that HC Dijital participated in was accepted following the evaluation process carried out by the Istanbul Development Agency.',
        { type: 'image', src: yonHero, alt: 'TERA Project' },
        'This acceptance once again confirms HC Dijital\'s collaborations with the regional development ecosystem and its active role in value-creating projects.',
        'The outputs to be achieved through the implementation of the project align with HC Dijital\'s vision of producing technology and contributing to institutional transformation.',
      ],
    },
  },
]
