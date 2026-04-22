import _tercumedHero      from '../assets/images/products/tercumed-hero.webp'
import _airxMobile        from '../assets/images/products/airx-mobile.webp'
import _butce2            from '../assets/images/products/butce-2.webp'
import _spiralHero        from '../assets/images/products/spiral-hero.webp'
import _yonHero           from '../assets/images/products/yon-hero.webp'
import _saglikIkizAcilis  from '../assets/images/news/saglik-ikiz-donusum-acilis.webp'
import _saglikIkizAcilisEk1 from '../assets/images/news/saglikIkizAcilisEk1.webp'
import _saglikIkizAcilisEk2 from '../assets/images/news/saglikIkizAcilisEk2.webp'
import _saglikIkizAcilisEk3 from '../assets/images/news/saglikIkizAcilisEk3.webp'
import _kosgeb           from '../assets/images/news/kosgeb-logo.webp'
import _patentLisanslama  from '../assets/images/news/patent-lisanslama.webp'
import _teknogisimRozeti  from '../assets/images/news/teknogisim-rozeti.webp'
import _teknogisimRozetiDetay from '../assets/images/news/teknogisim-rozeti-detay.webp'
import _okanUniversitesi  from '../assets/images/news/okan-universitesi-protokol.webp'
import _okanUniversitesi1 from '../assets/images/news/okan-universitesi-protokol-1.webp'
import _okanUniversitesi2 from '../assets/images/news/okan-universitesi-protokol-2.webp'
import _okanUniversitesi3  from '../assets/images/news/okan-universitesi-protokol-3.webp'
import _bilisimVadisiHaber from '../assets/images/news/bilisim-vadisi-haber.webp'

const s = (x) => x?.src ?? x
const tercumedHero     = s(_tercumedHero)
const airxMobile       = s(_airxMobile)
const butce2           = s(_butce2)
const spiralHero       = s(_spiralHero)
const yonHero          = s(_yonHero)
const saglikIkizAcilis = s(_saglikIkizAcilis)
const saglikIkizAcilisEk3 = s(_saglikIkizAcilisEk3)
const saglikIkizAcilisEk1 = s(_saglikIkizAcilisEk1)
const saglikIkizAcilisEk2 = s(_saglikIkizAcilisEk2)
const kosgeb           = s(_kosgeb)
const patentLisanslama = s(_patentLisanslama)
const teknogisimRozeti = s(_teknogisimRozeti)
const teknogisimRozetiDetay = s(_teknogisimRozetiDetay)
const okanUniversitesi  = s(_okanUniversitesi)
const okanUniversitesi1 = s(_okanUniversitesi1)
const okanUniversitesi2 = s(_okanUniversitesi2)
const okanUniversitesi3  = s(_okanUniversitesi3)
const bilisimVadisiHaber = s(_bilisimVadisiHaber)

export const news = [
  {
    slug: 'hc-dijital-bilisim-vadisi',
    date: '2024-12-17',
    category: { tr: 'Ekosistem', en: 'Ecosystem' },
    image: bilisimVadisiHaber,
    title: {
      tr: 'HC Dijital Sağlık Teknolojilerinin Yeni Adresi: Bilişim Vadisi',
      en: 'HC Dijital Health Technologies\' New Address: Bilişim Vadisi',
    },
    summary: {
      tr: 'Türkiye\'nin teknoloji ve inovasyon üssü Bilişim Vadisi\'nin vizyonuyla örtüşen HC Dijital, sağlık teknolojileri alanında yapay zekâ, veri analitiği ve dijital dönüşüm odaklı çözümleriyle sağlık kurumlarının geleceğini şekillendirmeye devam ediyor.',
      en: 'Aligned with the vision of Bilişim Vadisi, Turkey\'s technology and innovation hub, HC Dijital continues to shape the future of healthcare institutions with its AI, data analytics, and digital transformation-focused solutions in health technologies.',
    },
    content: {
      tr: [
        'Türkiye\'nin teknoloji ve inovasyon üssü olarak konumlanan Bilişim Vadisi; bilimin teknolojiye, teknolojinin ise ürüne ve ticarileşmeye dönüştüğü bir ekosistem inşa ediyor. Mobilite, bağlantı teknolojileri, siber güvenlik, tasarım teknolojileri, akıllı şehirler ve oyun teknolojileri gibi alanlarda yürütülen bu yapı, yüksek katma değerli dijital çözümler geliştiren şirketler için güçlü bir zemin oluşturuyor.',
        { type: 'image', src: bilisimVadisiHaber, alt: 'HC Dijital - Bilişim Vadisi' },
        'HC Dijital ise sağlık sektörüne yönelik yapay zekâ, veri analitiği, yazılım geliştirme ve raporlama sistemleri alanlarında geliştirdiği çözümlerle, sağlık hizmetlerinde verimlilik ve dijital dönüşüm odağını büyütmeye devam ediyor. Şirketin yaklaşımı; sağlık profesyonelleri ile hastalar arasındaki iletişimi güçlendirmek, klinik süreçleri hızlandırmak, veri odaklı karar alma kültürünü desteklemek ve güvenilir dijital altyapılar kurmak üzerine şekilleniyor.',
        'Bu çerçevede Bilişim Vadisi\'nin ortaya koyduğu teknoloji üretim ve ürünleşme vizyonu, HC Dijital\'in sağlık teknolojilerinde geliştirdiği çözümlerle güçlü bir paralellik taşıyor. Özellikle yapay zekâ destekli sağlık uygulamaları, veri analitiği tabanlı operasyonel iyileştirmeler ve kurumsal ölçekte ölçeklenebilir yazılım sistemleri; Türkiye\'de sağlık teknolojilerinin geleceğini belirleyecek temel alanlar arasında yer alıyor.',
        'HC Dijital, TercüMed, Bütçe Planlama Sistemleri, AiRX Mobil PDKS ve farklı dijital çözümleriyle yalnızca bugünün ihtiyaçlarına cevap vermeyi değil, aynı zamanda sağlık kurumlarının daha akıllı, daha hızlı ve daha sürdürülebilir sistemlerle çalışmasına katkı sunmayı hedefliyor. Bu yönüyle şirket, Türkiye\'nin teknoloji geliştirme vizyonuyla uyumlu biçimde sağlıkta dijitalleşmenin somut karşılıklarını üretmeye devam ediyor.',
      ],
      en: [
        'Positioned as Turkey\'s technology and innovation hub, Bilişim Vadisi is building an ecosystem where science transforms into technology, and technology into products and commercialization. This structure, operating in areas such as mobility, connectivity technologies, cybersecurity, design technologies, smart cities, and gaming technologies, provides a strong foundation for companies developing high-value-added digital solutions.',
        { type: 'image', src: bilisimVadisiHaber, alt: 'HC Dijital - Bilişim Vadisi' },
        'HC Dijital, in turn, continues to expand its focus on efficiency and digital transformation in healthcare with solutions it develops in the areas of artificial intelligence, data analytics, software development, and reporting systems for the healthcare sector. The company\'s approach is shaped around strengthening communication between healthcare professionals and patients, accelerating clinical processes, supporting a data-driven decision-making culture, and establishing reliable digital infrastructures.',
        'In this context, the technology production and productization vision put forward by Bilişim Vadisi bears a strong parallel with the solutions HC Dijital develops in health technologies. AI-powered healthcare applications, operational improvements based on data analytics, and enterprise-scale scalable software systems are among the key areas that will determine the future of health technologies in Turkey.',
        'With TercüMed, Budget Planning Systems, AiRX Mobile Time & Attendance, and various other digital solutions, HC Dijital aims not only to meet today\'s needs but also to contribute to healthcare institutions working with smarter, faster, and more sustainable systems. In this regard, the company continues to produce concrete outcomes of healthcare digitalization in alignment with Turkey\'s technology development vision.',
      ],
    },
  },
  {
    slug: 'okan-universitesi-akademi-sektor-isbirligi',
    date: '2026-04-21',
    category: { tr: 'İş Birliği', en: 'Collaboration' },
    image: okanUniversitesi,
    title: {
      tr: 'HC Dijital Sağlık Teknolojileri ve İstanbul Okan Üniversitesi\'nden Akademi-Sektör İş Birliğinde Güçlü Adım',
      en: 'A Strong Step in Academia-Industry Collaboration from HC Dijital Health Technologies and Istanbul Okan University',
    },
    summary: {
      tr: 'HC Dijital Sağlık Teknolojileri ile T.C. İstanbul Okan Üniversitesi arasında imzalanan Mesleki ve Sanayi İş Birliği Protokolü, bilgi üretimini sahadaki ihtiyaçlarla buluşturan değerli bir iş birliğinin kapısını araladı.',
      en: 'The Professional and Industrial Cooperation Protocol signed between HC Dijital Health Technologies and Istanbul Okan University opened the door to a valuable collaboration that bridges knowledge production with real-world needs.',
    },
    content: {
      tr: [
        'HC Dijital Sağlık Teknolojileri, akademi ile sektör arasındaki bağı güçlendirecek önemli bir adım daha attı. Şirketimiz ile T.C. İstanbul Okan Üniversitesi arasında imzalanan Mesleki ve Sanayi İş Birliği Protokolü, bilgi üretimini sahadaki ihtiyaçlarla buluşturan değerli bir iş birliğinin kapısını araladı.',
        { type: 'image', src: okanUniversitesi1, alt: 'HC Dijital - İstanbul Okan Üniversitesi İş Birliği Protokolü' },
        'Sağlık teknolojileri alanında yenilikçi yaklaşımı, çözüm odaklı bakışı ve büyüme vizyonuyla öne çıkan HC Dijital Sağlık Teknolojileri, yalnızca bugünün ihtiyaçlarına yanıt vermeyi değil, geleceği şekillendirecek yapılar kurmayı da hedefliyor. Bu protokol de söz konusu vizyonun somut bir yansıması olarak öne çıkıyor.',
        'İmzalanan iş birliği kapsamında, üniversite ile sektör arasında daha güçlü bir etkileşim kurulması, öğrencilerin ve akademik çevrenin uygulama sahasıyla daha yakın temas etmesi ve sağlık teknolojileri odağında bilgi paylaşımının artırılması hedefleniyor. Böylece hem genç yeteneklerin gelişimine katkı sunulacak hem de sektörün ihtiyaç duyduğu nitelikli bilgi ve insan kaynağına daha güçlü bir köprü kurulmuş olacak.',
        { type: 'image', src: okanUniversitesi2, alt: 'HC Dijital - İstanbul Okan Üniversitesi İş Birliği Protokolü İmza' },
        'Bu kıymetli sürecin önemli isimlerinden biri de şirketimizin danışmanı Dr. Hasan OĞUZ oldu. Aynı zamanda İstanbul Okan Üniversitesi bünyesinde yer alan Dr. Hasan OĞUZ, akademik birikimi ile sektör deneyimini bir araya getiren yaklaşımı sayesinde bu iş birliğine önemli bir derinlik kazandırıyor. Dr. OĞUZ\'un rehberliği, HC Dijital\'in yalnızca ticari hedeflere değil, aynı zamanda sürdürülebilir bilgi üretimine ve uzun vadeli kurumsal gelişime odaklandığını da ortaya koyuyor.',
        'Süreçte ayrıca Dr. Çağlar AKAR ve Dr. Alper ÇELTİKÇİ gibi İstanbul Okan Üniversitesi\'nin değerli akademik isimlerinin yer alması, bu iş birliğinin akademik açıdan da güçlü bir zemine oturduğunu gösterdi. Sektörün dinamizmi ile akademinin disiplinini bir araya getiren bu yapı, önümüzdeki dönemde üretilecek projeler açısından oldukça kıymetli bir vizyon sunuyor.',
        { type: 'image', src: okanUniversitesi3, alt: 'HC Dijital - İstanbul Okan Üniversitesi Akademi Sektör İş Birliği' },
        'HC Dijital Sağlık Teknolojileri olarak her zaman teknoloji, sağlık ve eğitim ekseninde kurduğumuz her yeni teması yalnızca bir iş birliği değil, aynı zamanda geleceğe yapılan stratejik bir yatırım olarak görüyoruz. Bu noktada şirketimizin uzun vadeli vizyonu ve Dr. Hasan OĞUZ\'un akademik danışmanlığı, büyüme yolculuğumuzda itici bir güç olmaya devam ediyor.',
        'İstanbul Okan Üniversitesi ile imzalanan bu protokolün, önümüzdeki dönemde yeni projelere, ortak üretim alanlarına ve değerli çıktılara zemin hazırlayacağına inanıyoruz.',
      ],
      en: [
        'HC Dijital Health Technologies has taken another important step to strengthen the bond between academia and industry. The Professional and Industrial Cooperation Protocol signed between our company and Istanbul Okan University has opened the door to a valuable collaboration that bridges knowledge production with real-world needs.',
        { type: 'image', src: okanUniversitesi1, alt: 'HC Dijital - Istanbul Okan University Cooperation Protocol' },
        'HC Dijital Health Technologies stands out with its innovative approach to health technologies, solution-oriented perspective, and growth vision, aiming not only to address today’s needs but also to help build the future. This protocol stands out as a concrete reflection of that vision.',
        'Within the scope of the signed cooperation, the goals include establishing stronger interaction between the university and the industry, bringing students and the academic community into closer contact with the field of application, and increasing knowledge sharing with a focus on health technologies. This way, both the development of young talents will be supported and a stronger bridge will be built to the qualified knowledge and human resources that the sector needs.',
        { type: 'image', src: okanUniversitesi2, alt: 'HC Dijital - Istanbul Okan University Cooperation Protocol Signing' },
        'One of the key figures in this valuable process was our company\'s consultant Dr. Hasan OĞUZ. Dr. Hasan OĞUZ, who is also affiliated with Istanbul Okan University, adds significant depth to this collaboration through his approach that combines academic knowledge with industry experience. Dr. OĞUZ\'s guidance also reveals that HC Dijital focuses not only on commercial goals but also on sustainable knowledge production and long-term institutional development.',
        'The participation of valuable academic figures from Istanbul Okan University such as Dr. Çağlar AKAR and Dr. Alper ÇELTİKÇİ showed that this collaboration is also built on a strong academic foundation. This structure, which brings together the dynamism of the industry and the discipline of academia, offers a very valuable vision for projects to be produced in the coming period.',
        { type: 'image', src: okanUniversitesi3, alt: 'HC Dijital - Istanbul Okan University Academia Industry Collaboration' },
        'As HC Dijital Health Technologies, we always view every new contact we establish at the intersection of technology, health, and education not just as a collaboration, but as a strategic investment in the future. At this point, our long-term vision together with the academic consultancy of Dr. Hasan OĞUZ continues to be a driving force in our company\'s growth journey.',
        'We believe that this protocol signed with Istanbul Okan University will lay the groundwork for new projects, joint production areas, and valuable outputs in the coming period.',
      ],
    },
  },
  {
    slug: 'istinye-universitesi-patent-lisanslama',
    date: '2026-03-27',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: patentLisanslama,
    sourceLink: 'https://www.istinye.edu.tr/tr/haberler/universitemizden-ticarilesmede-tarihi-adim-6-patent-5-firmaya-lisanslandi',
    title: {
      tr: 'İstinye Üniversitesi\'nden Ticarileşmede Tarihi Adım: 6 Patent Lisanslandı, HC Dijital Sağlık Teknolojileri Süreçte Yer Aldı',
      en: 'Historic Step in Commercialization from İstinye University: 6 Patents Licensed, HC Dijital Health Technologies Part of the Process',
    },
    summary: {
      tr: 'İSTKA desteğiyle İstinye Üniversitesi bünyesinde geliştirilen 6 patent 5 firmaya lisanslandı; HC Dijital Sağlık Teknolojileri de bu süreçte yerini aldı.',
      en: '6 patents developed at İstinye University with İSTKA support were licensed to 5 companies; HC Dijital Health Technologies was part of this milestone process.',
    },
    content: {
      tr: [
        'İstanbul Kalkınma Ajansı (İSTKA) desteğiyle İstinye Üniversitesi tarafından yürütülen çalışmalar kapsamında, üniversite-sanayi iş birliği ve teknoloji ticarileştirme alanında önemli bir ilerleme kaydedilmiştir. Bu çerçevede, dijital dönüşüm, farmakoloji ve sağlık teknolojileri alanlarında geliştirilen altı patent, beş farklı firmaya lisanslanmıştır.',
        { type: 'image', src: patentLisanslama, alt: 'Patent Lisanslama Töreni' },
        'Lisanslanan patentler arasında HC Dijital Sağlık Teknolojileri de yer almakta olup, bu süreç şirketimizin teknoloji odaklı yaklaşımını ve ticarileşme konusundaki kararlılığını yansıtmaktadır. Akademik üretimin yalnızca teorik düzeyde kalmayıp, uygulanabilir ve ticarileştirilebilir çözümlere dönüşmesi yönünde yürüttüğümüz çalışmalar bu başarının temel belirleyicilerinden biri olmuştur.',
        'Gerçekleşen lisanslama süreci, üniversite-sanayi iş birliğinin doğru liderlik ve uygun teknoloji vizyonu ile birleştiğinde somut çıktılar üretebildiğini açıkça ortaya koymaktadır. Ayrıca, sağlık teknolojileri alanında geliştirilen çözümlerin yalnızca operasyonel verimliliği artırmakla kalmayıp, sürdürülebilir ve rekabetçi bir yapı oluşturma açısından da kritik bir rol oynadığını göstermektedir.',
        'Bu gelişme, fikri mülkiyetin ve teknoloji üretiminin stratejik bir değer olarak ele alınmasının ve doğru yönlendirme ile ticarileştirilebilmesinin güçlü bir göstergesi olarak değerlendirilmektedir.',
      ],
      en: [
        'Within the scope of work carried out by İstinye University with the support of the Istanbul Development Agency (İSTKA), significant progress has been made in university-industry collaboration and technology commercialization. In this context, six patents developed in the fields of digital transformation, pharmacology, and health technologies have been licensed to five different companies.',
        { type: 'image', src: patentLisanslama, alt: 'Patent Licensing Ceremony' },
        'HC Dijital Health Technologies is among the companies receiving licensed patents, and this process reflects our technology-focused approach and strong commitment to commercialization. Our efforts to ensure that academic output does not remain merely theoretical but transforms into applicable and commercializable solutions have been one of the key drivers behind this achievement.',
        'HC Dijital’s investments in data-driven systems, AI applications, and decision support mechanisms in the healthcare sector have made it possible for the developed technologies to find real-world application and generate value at the patent level.',
        'The licensing process clearly demonstrates that university-industry collaboration can produce concrete outputs when combined with the right leadership and an appropriate technology vision. It also shows that solutions developed in health technologies play a critical role not only in increasing operational efficiency but also in building a sustainable and competitive structure.',
        'This development is regarded as a strong indicator that intellectual property and technology production can be treated as strategic assets and successfully commercialized with the right guidance.',
      ],
    },
  },
  {
    slug: 'saglik-ikiz-donusum-merkezi-acilis',
    date: '2026-03-31',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: saglikIkizAcilis,
    sourceLink: 'https://www.istka.org.tr/haber/saglik-sektoru-ikiz-donusum-ve-surdurulebilir-uretimmerkezi-projesinin-acilis-toplantisi-vqz3',
    continuationLink: { url: 'https://www.istinye.edu.tr/tr/haberler/ikiz-donusum-ve-surdurulebilir-uretim-merkezi-t-era-center-acildi', label: { tr: 'T-ERA Center Açılış Haberi — İstinye Üniversitesi', en: 'T-ERA Center Opening News — İstinye University' } },
    title: {
      tr: 'Sağlıkta İkiz Dönüşümde Güç Birliği: HC Dijital Sağlık Teknolojileri Projede Yerini Aldı',
      en: 'Joining Forces in Twin Transformation in Healthcare: HC Dijital Health Technologies Takes Its Place in the Project',
    },
    summary: {
      tr: 'İSTKA desteğiyle İstinye Üniversitesi tarafından yürütülen "Sağlık Sektörü İkiz Dönüşüm ve Sürdürülebilir Üretim Merkezi" projesinin açılış toplantısında HC Dijital Sağlık Teknolojileri de yerini aldı.',
      en: 'HC Dijital Health Technologies took its place at the opening meeting of the "Health Sector Twin Transformation and Sustainable Production Center" project, supported by İSTKA and carried out by İstinye University.',
    },
    content: {
      tr: [
        'İstanbul Kalkınma Ajansı (İSTKA) desteğiyle İstinye Üniversitesi tarafından yürütülen "Sağlık Sektörü İkiz Dönüşüm ve Sürdürülebilir Üretim Merkezi" projesinin açılışı toplantısı, İstinye Üniversitesi Rektörü Erkan İbiş, İstanbul Vali Yardımcısı Elif Canan Tuncer ve İSTKA İzleme ve Değerlendirme Birim Başkanı Gökhan Çoban\'ın katılımıyla gerçekleştirildi.',
        { type: 'image', src: saglikIkizAcilisEk3, alt: 'Sağlık Sektörü İkiz Dönüşüm Projesi Görseli 3' },
        'Sağlık sektöründe dijitalleşme ve sürdürülebilirlik ekseninde kritik bir adım olan bu proje; imalat sanayisinde yalın üretim, dijital dönüşüm ve çevresel sürdürülebilirliği entegre eden yeni nesil bir değer üretim modeli oluşturmayı hedefliyor. Geliştirilecek ara yüz ve süreç yapıları ile üretim süreçlerinin optimize edilmesi, kaynak verimliliğinin artırılması ve yeşil dönüşümün hızlandırılması amaçlanıyor.',
        { type: 'image', src: saglikIkizAcilisEk1, alt: 'Sağlık Sektörü İkiz Dönüşüm Projesi Görseli 1' },
        'Bu proje ile birlikte, dijital dönüşüm ve yalın üretim yaklaşımının birlikte ele alınmasının artık bir seçenek değil, sektör için stratejik bir zorunluluk olduğuna inanıyoruz. Özellikle üretim ve sağlık hizmetleri tarafında faaliyet gösteren kurumların, veri temelli yönetim anlayışıyla süreçlerini yeniden yapılandırmasının rekabet avantajı yaratacağı kesin bir biçimde görünmektedir.',
        'Proje kapsamında oluşturulan laboratuvar altyapısı ve yazılım ekosistemi sayesinde sektördeki firmalara dijital ve yeşil dönüşüm, yalın üretim, atık yönetimi, geri dönüşüm ve sürdürülebilirlik başlıklarında eğitim ve danışmanlık programları sunulacak. Biz de bu dönüşüm sürecinde teknoloji tarafında aktif rol alarak, sektörün daha verimli, izlenebilir ve sürdürülebilir bir yapıya kavuşmasına katkı sağlamayı hedefliyoruz.',
        { type: 'image', src: saglikIkizAcilisEk2, alt: 'Sağlık Sektörü İkiz Dönüşüm Projesi Görseli 2' },
        'Sağlık sektöründe yüksek katma değerli, veri odaklı ve sürdürülebilir bir gelecek için çalışmalarımıza hız kesmeden devam ediyoruz.',
      ],
      en: [
        'The opening meeting of the "Health Sector Twin Transformation and Sustainable Production Center" project, supported by the Istanbul Development Agency (İSTKA) and carried out by İstinye University, was held with the attendance of İstinye University Rector Erkan İbiş, Istanbul Deputy Governor Elif Canan Tuncer, and İSTKA Monitoring and Evaluation Unit Head Gökhan Çoban.',
        { type: 'image', src: saglikIkizAcilisEk3, alt: 'Health Sector Twin Transformation Project Visual 3' },
        'This project, a critical step in healthcare digitalization and sustainability, aims to create a next-generation value production model integrating lean manufacturing, digital transformation, and environmental sustainability in the manufacturing sector. The goal is to optimize production processes, increase resource efficiency, and accelerate the green transformation through the interfaces and process structures to be developed.',
        { type: 'image', src: saglikIkizAcilisEk1, alt: 'Health Sector Twin Transformation Project Visual 1' },
        'As HC Dijital Health Technologies, we were present at this important opening. We develop data-driven decision support systems, AI, and digital infrastructure solutions in the healthcare sector, contributing concretely to sustainability goals while increasing the operational efficiency of institutions.',
        'With this project, we believe that addressing digital transformation and lean production together is no longer an option but a strategic necessity for the sector. It is clear that institutions operating in manufacturing and healthcare services will create competitive advantage by restructuring their processes with a data-driven management approach.',
        { type: 'image', src: saglikIkizAcilisEk2, alt: 'Health Sector Twin Transformation Project Visual 2' },
        'Through the laboratory infrastructure and software ecosystem established within the scope of the project, training and consultancy programs in digital and green transformation, lean production, waste management, recycling, and sustainability will be offered to companies in the sector. We aim to take an active role on the technology side of this transformation process, contributing to the sector\'s transition to a more efficient, traceable, and sustainable structure.',
        'We continue our work without slowing down for a high-value-added, data-driven, and sustainable future in the healthcare sector.',
      ],
    },
  },
  {
    slug: 'tercumed-ai-kosgeb-tam-puan',
    date: '2026-01-06',
    category: { tr: 'Proje & Hibe', en: 'Project & Grant' },
    image: kosgeb,
    imageFit: 'contain',
    title: {
      tr: 'TercüMed Projesi KOSGEB\'ten Tam Not Aldı',
      en: 'TercüMed Project Receives a Perfect Score from KOSGEB',
    },
    summary: {
      tr: 'KOSGEB\'in yürüttüğü değerlendirme sürecinde TercüMed projesi 100 tam puan alarak önemli bir başarıya imza attı.',
      en: 'In the evaluation process conducted by KOSGEB, the TercüMed project achieved a perfect score of 100, marking a significant milestone.',
    },
    content: {
      tr: [
        'KOSGEB\'in yürüttüğü değerlendirme sürecinde TercüMed projesi 100 tam puan alarak önemli bir başarıya imza attı.',
        { type: 'image', src: kosgeb, alt: 'KOSGEB', fit: 'contain' },
        'HC Dijital Sağlık Teknolojileri çatısı altında geliştirilen TercüMed, dijitalleşme ve operasyonel verimlilik odağında sunduğu çözümlerle öne çıkıyor. Projenin bu seviyeye ulaşmasında şirketimizin stratejik bakış açısı ve teknolojiye dayalı yaklaşımı belirleyici oldu.',
        'Doğru problemi tanımlama, çözüm mimarisini kurma ve ticarileşmeye odaklanan ürün yaklaşımı, TercüMed\'in değerlendirmede maksimum skora ulaşmasının en önemli unsurlarından biri olarak öne çıkıyor.',
        'Elde edilen bu sonuç, sadece bir proje başarısı olmakla kalmıyor; güçlü bir ürün vizyonunun, doğru liderlikle birleştiğinde nasıl somut çıktılara dönüştüğünü de açıkça ortaya koyuyor.',
      ],
      en: [
        'In the evaluation process conducted by KOSGEB, the TercüMed project achieved a perfect score of 100, marking a significant milestone.',
        { type: 'image', src: kosgeb, alt: 'KOSGEB', fit: 'contain' },
        'TercüMed, developed under the HC Dijital Health Technologies umbrella, stands out with the solutions it offers focused on digitalization and operational efficiency. Our strategic perspective and technology-driven approach played a decisive role in the project reaching this level.',
        'The product approach focused on defining the right problem, building a strong solution architecture, and advancing commercialization stands out as one of the most important factors in TercüMed achieving the maximum score in the evaluation.',
        'This result goes beyond being merely a project success; it clearly demonstrates how a strong product vision, when combined with the right leadership, transforms into concrete outcomes.',
      ],
    },
  },
  {
    slug: 'airx-mobil-pdks-kullanima-acildi',
    date: '2025-12-10',
    category: { tr: 'Ürün Lansmanı', en: 'Product Launch' },
    image: airxMobile,
    title: {
      tr: 'AiRX Kullanıma Açıldı: Yeni Nesil Mobil PDKS Deneyimi Başladı',
      en: 'AiRX Goes Live: Next-Generation Mobile Time & Attendance Experience Begins',
    },
    summary: {
      tr: 'HC Dijital Sağlık Teknolojileri tarafından geliştirilen yeni nesil personel devam kontrol ve iş gücü yönetim platformu AiRX Mobil PDKS hizmete sunuldu.',
      en: 'AiRX Mobile, the next-generation personnel attendance control and workforce management platform developed by HC Dijital Health Technologies, has been launched.',
    },
    sourceLink: 'https://airx.com.tr',
    continuationLink: { url: 'https://airx.com.tr', label: { tr: 'airx.com.tr — Ürünü İncele', en: 'airx.com.tr — Explore the Product' } },
    content: {
      tr: [
        'AiRX Mobil PDKS, HC Dijital Sağlık Teknolojileri tarafından geliştirilen yeni nesil bir personel devam kontrol ve iş gücü yönetim platformu olarak hizmete sunuldu. Kurumların giriş-çıkış takibini, vardiya planlamasını ve operasyonel süreçlerini dijital ortamda yönetmeyi mümkün kılan AiRX, sade arayüzü ve güçlü altyapısıyla kurumların sisteme hızlıca uyum sağlamasını destekliyor.',
        { type: 'image', src: airxMobile, alt: 'AiRX Mobil PDKS' },
        'AiRX sayesinde; konum bazlı giriş-çıkış, QR ile doğrulama, izin ve mesai yönetimi, anlık dashboard\'lar ve kapsamlı raporlama gibi önemli fonksiyonlar tek bir platformda bir araya geliyor. Özellikle birden fazla lokasyona sahip yapılarda merkezi kontrol ve anlık veri takibi sağlayarak operasyonel verimliliği artırıyor.',
        'HC Dijital olarak AiRX\'in yalnızca bir PDKS çözümü olmadığını; kurumların iş gücü yönetimini uçtan uca dijitalleştiren kapsamlı bir platform sunduğunu vurguluyoruz. Ayrıca veri odaklı karar alma süreçlerini güçlendirmeyi hedefliyoruz.',
        'AiRX ile birlikte kurumlar, manuel yürütülen süreçlerden vazgeçerek daha hızlı, hatasız ve denetlenebilir bir yapıya geçmenin yanı sıra çalışan deneyimini de geliştiren modern bir sistemle tanışıyor.',
      ],
      en: [
        'AiRX Mobile has been launched as a next-generation personnel attendance control and workforce management platform developed by HC Dijital Health Technologies. Enabling institutions to manage entry-exit tracking, shift planning, and operational processes in a digital environment, AiRX supports institutions in quickly adapting to the system with its clean interface and powerful infrastructure.',
        { type: 'image', src: airxMobile, alt: 'AiRX Mobile Time & Attendance' },
        'Through AiRX, important functions such as location-based entry-exit, QR verification, leave and overtime management, real-time dashboards, and comprehensive reporting come together on a single platform. It increases operational efficiency by providing central control and real-time data tracking, especially in multi-location structures.',
        'At HC Dijital, we emphasize that AiRX is not just a time-and-attendance solution, but a platform that end-to-end digitalizes workforce management for institutions. We also aim to strengthen data-driven decision-making processes.',
        'With AiRX, institutions move away from manually managed processes to a faster, error-free, and auditable structure while getting acquainted with a modern system that also improves the employee experience.',
      ],
    },
  },
  {
    slug: 'butce-planlama-sistemi-lisanslama',
    date: '2025-11-05',
    category: { tr: 'Ürün Güncellemesi', en: 'Product Update' },
    image: butce2,
    title: {
      tr: 'Bütçe Planlama Sistemimizin Lisanslama Sürecini Tamamladık',
      en: 'We Have Completed the Licensing Process for Our Budget Planning System',
    },
    summary: {
      tr: 'HC Dijital Sağlık Teknolojileri, sağlık kurumlarına finansal planlama ve bütçe yönetiminde şeffaflık ve veri odaklı kontrol sunan Bütçe Planlama Sistemi\'nin lisanslama sürecini tamamladı.',
      en: 'HC Dijital Health Technologies has completed the licensing process for its Budget Planning System, which provides healthcare institutions with transparency and data-driven control in financial planning and budget management.',
    },
    content: {
      tr: [
        'HC Dijital Sağlık Teknolojileri olarak geliştirdiğimiz Bütçe Planlama Sistemi\'nin lisanslama sürecini tamamladık. Sistemimiz, sağlık kurumlarının finansal planlama ve bütçe yönetimini daha şeffaf, daha izlenebilir ve veri temelli bir şekilde yürütmesine destek oluyor. Özellikle birden fazla şubeye sahip yapılarda merkezi kontrolü güçlendirerek operasyonel süreçlerde de verimliliği artırıyor.',
        { type: 'image', src: butce2, alt: 'Bütçe Planlama Sistemi' },
        'HC Dijital olarak bütçe yönetiminin sağlık sektöründe stratejik kararların şekillenmesinde kritik bir noktada durduğunu düşünüyoruz. Geliştirdiğimiz sistem sayesinde kurumların kısa vadeli operasyonlarını ve uzun vadeli finansal hedeflerini daha kontrollü ve sağlıklı biçimde yönetebileceğine inanıyoruz.',
        'Bütçe Planlama Sistemimiz; gelir-gider hiyerarşisi, kurum bazlı kırılımlar, gerçekleşme takibi ve raporlama altyapısı ile sağlık sektöründe dijital dönüşümün önemli unsurlarından biri olmayı amaçlıyor. Bu lisanslama adımıyla birlikte çözümümüzün daha geniş ölçekte hayata geçmesi ve sektörde daha standart bir yaklaşıma dönüşmesi için çalışmalarımızı hız kesmeden sürdürüyoruz.',
      ],
      en: [
        'We have completed the licensing process for our Budget Planning System, developed by HC Dijital Health Technologies. Our system supports healthcare institutions in conducting financial planning and budget management in a more transparent, traceable, and data-driven manner. It particularly strengthens central control in multi-branch structures while increasing efficiency in operational processes.',
        { type: 'image', src: butce2, alt: 'Budget Planning System' },
        'At HC Dijital, we see budget management as a critical element in shaping strategic decisions in the healthcare sector. Through the system we have developed, institutions can manage their short-term operations and long-term financial goals in a more controlled and healthier way.',
        'Our Budget Planning System aims to be one of the key elements of digital transformation in the healthcare sector, with its revenue-expense hierarchy, institution-based breakdowns, actuals tracking, and reporting infrastructure. With this licensing step, we continue our work without slowing down to bring our solution to life at a wider scale and transform it into a more standard approach in the sector.',
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
      tr: 'HC Dijital Sağlık Teknolojileri\'ne Teknogirişim Rozeti: Milli Teknoloji Hamlesi Kapsamında Güçleniyoruz',
      en: 'Technoenterprise Badge for HC Dijital Health Technologies: Growing Stronger Under the National Technology Initiative',
    },
    summary: {
      tr: 'HC Dijital Sağlık Teknolojileri, T.C. Sanayi ve Teknoloji Bakanlığı tarafından Teknogirişim Şirketi Rozeti\'ne layık görüldü. Bu rozet, AR-GE çalışmalarımızın ve yüksek katma değerli teknoloji üretimindeki kabiliyetimizin resmi doğrulaması niteliği taşıyor.',
      en: 'HC Dijital Health Technologies has been awarded the Technoenterprise Company Badge by the Turkish Ministry of Industry and Technology, officially validating our R&D efforts and capability in producing high-value-added technology.',
    },
    content: {
      tr: [
        'HC Dijital Sağlık Teknolojileri olarak, teknoloji ve inovasyona dayalı büyüme yaklaşımımız doğrultusunda önemli bir gelişmeyi daha geride bıraktık ve Teknogirişim Şirketi Rozeti almaya hak kazandık. Bu rozet AR-GE çalışmalarımızın, yazılım geliştirme süreçlerimizin ve yüksek katma değerli teknoloji üretimindeki kabiliyetimizin resmen doğrulandığını ifade ediyor.',
        { type: 'image', src: teknogisimRozetiDetay, alt: 'Teknogirişim Rozeti', fit: 'contain' },
        'Sanayi ve Teknoloji Bakanlığı\'nın yürüttüğü Milli Teknoloji Hamlesi vizyonuna paralel şekilde faaliyetlerimizi sürdürürken, Türkiye\'nin önde gelen teknoloji ve inovasyon odaklarından biri olan Bilişim Vadisi ekosisteminde de konumumuzu güçlendiriyoruz. Bilişim Vadisi\'nin sunduğu güçlü AR-GE imkânları, girişimcilik destekleri ve geliştirdiği iş birlikleri sayesinde sağlık teknolojileri alanında geliştirdiğimiz ürünleri daha kısa sürede geliştirerek hem ulusal hem de uluslararası pazarlara ulaşma hedefimize ivme kazandırıyoruz.',
        'HC Dijital olarak bu süreci şirketimiz adına önemli bir eşik olarak görüyoruz. Milli Teknoloji Hamlesi vizyonuyla uyumlu biçimde, sağlık sektöründe dijital dönüşümü hızlandırmaya yardımcı olacak çözümler geliştirmeyi sürdürüyor; Bilişim Vadisi\'nde yer almanın ve Teknogirişim rozeti almanın doğru yönde ilerlediğimizi gösterdiğine inanıyoruz.',
        'Bu gelişmelerle birlikte HC Dijital Sağlık Teknolojileri olarak yapay zekâ, veri analitiği ve dijital sağlık çözümleri alanlarında daha güçlü ürünler geliştirerek sektörün dönüşümüne katkı veren oyunculardan biri olmayı hedefliyoruz.',
      ],
      en: [
        'As HC Dijital Health Technologies, we have passed another important milestone in line with our technology and innovation-driven growth approach, earning the right to receive the Technoenterprise Company Badge. This badge signifies the official validation of our R&D activities, software development processes, and our capability in producing high-value-added technology.',
        { type: 'image', src: teknogisimRozetiDetay, alt: 'Technoenterprise Badge', fit: 'contain' },
        'While continuing our activities in parallel with the National Technology Initiative vision of the Ministry of Industry and Technology, we are also strengthening our position in the Bilişim Vadisi (IT Valley) ecosystem, one of Turkey\'s leading technology and innovation hubs. Thanks to the strong R&D opportunities, entrepreneurship support, and collaborations offered by Bilişim Vadisi, we are accelerating our goal of reaching both national and international markets by developing our healthcare technology products in a shorter timeframe.',
        'At HC Dijital, we see this process as an important milestone for the company. In line with the National Technology Initiative vision, we continue to develop solutions that help accelerate digital transformation in the healthcare sector, and we believe that being part of Bilişim Vadisi and receiving the Technoenterprise badge demonstrates that we are moving in the right direction.',
        'With these developments, as HC Dijital Health Technologies, we aim to be one of the contributors to the sector\'s transformation by developing stronger products in the areas of artificial intelligence, data analytics, and digital health solutions.',
      ],
    },
  },
]
