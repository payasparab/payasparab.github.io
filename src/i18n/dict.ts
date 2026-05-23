// Translations seeded by Claude — please verify wording with native fluency before shipping.
// Add new keys to all four objects to keep types in sync.

export type Lang = 'en' | 'es' | 'zh' | 'mr';

export const LANGUAGES: { code: Lang; short: string; long: string }[] = [
  { code: 'en', short: 'EN', long: 'English' },
  { code: 'es', short: 'ES', long: 'Español' },
  { code: 'zh', short: '中', long: '中文' },
  { code: 'mr', short: 'म', long: 'मराठी' },
];

const en = {
  // nav
  'nav.home': 'Home',
  'nav.experience': 'Experience',
  'nav.consulting': 'Consulting',
  'nav.dlanc': 'DTLA Council',
  'nav.blog': 'Blog',
  'nav.search': 'Search',
  // hero
  'hero.eyebrow': 'Los Angeles · Management Scientist',
  'hero.lede':
    'Management scientist — building data, AI, and product systems for businesses, local government, policy, and applied research.',
  'hero.intro':
    'Head of Analytics Engineering at <b>Proper Hospitality</b>. Elected Board Director on the <b>DTLA Council</b> (Business &amp; Innovation Committee). Independent research in collaboration with <b>Cal State Fullerton</b> and the <b>Harvard Kennedy School</b> on data brokers, privacy, and applied forecasting. Currently exiting <b>Handy Point Group</b>, my data + AI consultancy, after a long stretch of high-impact special-ops data science and strategy work across <b>TikTok</b>, a <b>$400M hedge fund</b>, Series-A operating, and ~30 client engagements.',
  'hero.cta.primary': 'Work with me',
  'hero.cta.secondary': 'Get in touch',
  // sections
  'sec.approach':
    'Most of what I do comes down to one idea — <em>management science</em>: bringing mathematical, data-based sophistication to organizations that have run on instinct, and leaving them measurably better. The same rigor belongs in civic life, so public service runs alongside the work rather than after it.',
  'sec.fun.title': 'Fun facts',
  'sec.fun.sub': 'Pieces of the path so far.',
  'sec.where.title': 'Where to go',
  'sec.where.sub': 'Pick a thread.',
  'sec.artifacts.title': 'Work artifacts',
  'sec.artifacts.sub': 'Résumé, open-source, publications, presentations, teaching.',
  'sec.bookshelf.title': 'Bookshelf',
  'sec.bookshelf.sub': 'What I\'ve been reading.',
  'sec.teaching.title': 'Teaching',
  'sec.teaching.sub': 'Lectures, videos, lesson plans.',
  'sec.embed.title': 'Lately',
  'sec.embed.sub': 'Recent on X and Instagram.',
  'sec.contact.title': 'Get in touch',
  'sec.contact.sub': "Everything's @payasparab.",
  // tabs
  'tab.resume': 'Résumé',
  'tab.opensource': 'Open-source',
  'tab.publications': 'Publications',
  'tab.presentations': 'Presentations',
  'tab.teaching': 'Teaching',
  // toggle
  'theme.to_dark': 'Switch to dark mode',
  'theme.to_light': 'Switch to light mode',
  'lang.label': 'Language',
};

type Key = keyof typeof en;
type Dict = Record<Key, string>;

const es: Dict = {
  'nav.home': 'Inicio',
  'nav.experience': 'Experiencia',
  'nav.consulting': 'Consultoría',
  'nav.dlanc': 'Consejo DTLA',
  'nav.blog': 'Blog',
  'nav.search': 'Buscar',
  'hero.eyebrow': 'Los Ángeles · Científico de Gestión',
  'hero.lede':
    'Científico de gestión — construyo sistemas de datos, IA y producto para empresas, gobierno local, política e investigación aplicada.',
  'hero.intro':
    'Jefe de Ingeniería Analítica en <b>Proper Hospitality</b>. Director Electo del <b>Consejo DTLA</b> (Comité de Negocios e Innovación). Investigación independiente en colaboración con <b>Cal State Fullerton</b> y la <b>Harvard Kennedy School</b> sobre corredores de datos, privacidad y pronóstico aplicado. Actualmente saliendo de <b>Handy Point Group</b>, mi consultoría de datos + IA, después de una larga etapa de trabajo de alto impacto en ciencia de datos y estrategia en <b>TikTok</b>, un <b>fondo de cobertura de $400M</b>, operaciones de Serie A, y ~30 compromisos con clientes.',
  'hero.cta.primary': 'Trabaja conmigo',
  'hero.cta.secondary': 'Contacto',
  'sec.approach':
    'La mayor parte de lo que hago se reduce a una idea — <em>ciencia de gestión</em>: aportar sofisticación matemática y basada en datos a organizaciones que han funcionado por instinto, dejándolas medibles y mejores. El mismo rigor pertenece a la vida cívica.',
  'sec.fun.title': 'Datos curiosos',
  'sec.fun.sub': 'Piezas del camino hasta aquí.',
  'sec.where.title': 'A dónde ir',
  'sec.where.sub': 'Elige un hilo.',
  'sec.artifacts.title': 'Artefactos de trabajo',
  'sec.artifacts.sub': 'Currículum, open-source, publicaciones, presentaciones, enseñanza.',
  'sec.bookshelf.title': 'Estantería',
  'sec.bookshelf.sub': 'Lo que he estado leyendo.',
  'sec.teaching.title': 'Enseñanza',
  'sec.teaching.sub': 'Conferencias, videos, planes de lecciones.',
  'sec.embed.title': 'Últimamente',
  'sec.embed.sub': 'Reciente en X e Instagram.',
  'sec.contact.title': 'Contacto',
  'sec.contact.sub': 'Todo es @payasparab.',
  'tab.resume': 'Currículum',
  'tab.opensource': 'Open-source',
  'tab.publications': 'Publicaciones',
  'tab.presentations': 'Presentaciones',
  'tab.teaching': 'Enseñanza',
  'theme.to_dark': 'Cambiar a modo oscuro',
  'theme.to_light': 'Cambiar a modo claro',
  'lang.label': 'Idioma',
};

const zh: Dict = {
  'nav.home': '首页',
  'nav.experience': '经历',
  'nav.consulting': '咨询',
  'nav.dlanc': 'DTLA 委员会',
  'nav.blog': '博客',
  'nav.search': '搜索',
  'hero.eyebrow': '洛杉矶 · 管理科学家',
  'hero.lede':
    '管理科学家 — 为企业、地方政府、政策和应用研究构建数据、AI 和产品系统。',
  'hero.intro':
    '<b>Proper Hospitality</b> 分析工程负责人。当选 <b>DTLA 委员会</b>董事（商业与创新委员会）。与<b>加州州立大学富勒顿分校</b>和<b>哈佛肯尼迪学院</b>合作进行关于数据经纪人、隐私和应用预测的独立研究。目前正在退出我的数据 + AI 咨询公司 <b>Handy Point Group</b>，此前长期从事高影响力的特种数据科学与战略工作，涵盖 <b>TikTok</b>、一家 <b>4 亿美元对冲基金</b>、A 轮运营，以及约 30 个客户合作项目。',
  'hero.cta.primary': '与我合作',
  'hero.cta.secondary': '联系我',
  'sec.approach':
    '我所做的大部分事情归结为一个理念 — <em>管理科学</em>：为依靠直觉运作的组织带来基于数学和数据的精细化，使其可衡量地变得更好。同样的严谨也属于公民生活。',
  'sec.fun.title': '趣事',
  'sec.fun.sub': '一路走来的片段。',
  'sec.where.title': '去哪里',
  'sec.where.sub': '选择一条线索。',
  'sec.artifacts.title': '工作成果',
  'sec.artifacts.sub': '简历、开源、出版物、演讲、教学。',
  'sec.bookshelf.title': '书架',
  'sec.bookshelf.sub': '最近在读的书。',
  'sec.teaching.title': '教学',
  'sec.teaching.sub': '讲座、视频、教案。',
  'sec.embed.title': '最近动态',
  'sec.embed.sub': 'X 和 Instagram 最新内容。',
  'sec.contact.title': '联系我',
  'sec.contact.sub': '一切都是 @payasparab。',
  'tab.resume': '简历',
  'tab.opensource': '开源',
  'tab.publications': '出版物',
  'tab.presentations': '演讲',
  'tab.teaching': '教学',
  'theme.to_dark': '切换到深色模式',
  'theme.to_light': '切换到浅色模式',
  'lang.label': '语言',
};

const mr: Dict = {
  'nav.home': 'मुख्यपृष्ठ',
  'nav.experience': 'अनुभव',
  'nav.consulting': 'सल्लागार',
  'nav.dlanc': 'DTLA परिषद',
  'nav.blog': 'ब्लॉग',
  'nav.search': 'शोधा',
  'hero.eyebrow': 'लॉस एंजेलिस · व्यवस्थापन शास्त्रज्ञ',
  'hero.lede':
    'व्यवस्थापन शास्त्रज्ञ — व्यवसाय, स्थानिक सरकार, धोरण आणि उपयोजित संशोधनासाठी डेटा, AI आणि उत्पादन प्रणाली तयार करत आहे.',
  'hero.intro':
    '<b>Proper Hospitality</b> येथे विश्लेषण अभियांत्रिकीचे प्रमुख. <b>DTLA परिषदेचे</b> निवडून आलेले संचालक (व्यवसाय आणि नवोपक्रम समिती). <b>Cal State Fullerton</b> आणि <b>Harvard Kennedy School</b> सोबत डेटा ब्रोकर, गोपनीयता आणि उपयोजित अंदाजावर स्वतंत्र संशोधन. सध्या माझी डेटा + AI सल्लागार कंपनी <b>Handy Point Group</b> सोडत आहे, <b>TikTok</b>, $400M हेज फंड, सिरीज-A ऑपरेटिंग आणि सुमारे 30 क्लायंट प्रकल्पांमध्ये उच्च-प्रभावी विशेष कार्यवाही डेटा सायन्स आणि रणनीती कामाच्या दीर्घ कालावधीनंतर.',
  'hero.cta.primary': 'माझ्यासोबत काम करा',
  'hero.cta.secondary': 'संपर्क करा',
  'sec.approach':
    'मी जे करतो ते बहुतांश एका कल्पनेवर अवलंबून आहे — <em>व्यवस्थापन शास्त्र</em>: अंतःप्रेरणेने चालणाऱ्या संस्थांना गणितीय, डेटा-आधारित परिष्करण आणून त्यांना मोजमापानुसार चांगले बनवणे.',
  'sec.fun.title': 'मनोरंजक तथ्ये',
  'sec.fun.sub': 'आत्तापर्यंतच्या प्रवासाचे काही तुकडे.',
  'sec.where.title': 'कुठे जायचे',
  'sec.where.sub': 'एक धागा निवडा.',
  'sec.artifacts.title': 'कामाचे नमुने',
  'sec.artifacts.sub': 'रेझ्युमे, ओपन-सोर्स, प्रकाशने, सादरीकरणे, शिकवणी.',
  'sec.bookshelf.title': 'पुस्तकशेल्फ',
  'sec.bookshelf.sub': 'मी काय वाचत आहे.',
  'sec.teaching.title': 'शिकवणी',
  'sec.teaching.sub': 'व्याख्याने, व्हिडिओ, पाठ योजना.',
  'sec.embed.title': 'अलीकडे',
  'sec.embed.sub': 'X आणि Instagram वर अलीकडील.',
  'sec.contact.title': 'संपर्क',
  'sec.contact.sub': 'सर्व काही @payasparab.',
  'tab.resume': 'रेझ्युमे',
  'tab.opensource': 'ओपन-सोर्स',
  'tab.publications': 'प्रकाशने',
  'tab.presentations': 'सादरीकरणे',
  'tab.teaching': 'शिकवणी',
  'theme.to_dark': 'गडद मोडवर स्विच करा',
  'theme.to_light': 'उजळ मोडवर स्विच करा',
  'lang.label': 'भाषा',
};

export const dict: Record<Lang, Dict> = { en, es, zh, mr };
export type TKey = Key;
