// Translations seeded by Claude. Verify wording with native fluency before shipping.
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
  'nav.dlanc': 'Fix DTLA',
  'nav.blog': 'Blog',
  'nav.search': 'Search',
  // hero
  'hero.eyebrow': 'Systems Thinker | Full Stack Data Expert | Technophile | Public Servant',
  'hero.lede':
    'Management Scientist (Applied Data Science Expert)',
  'hero.intro':
    'I call it <b>management science</b>, not AI. What holds my attention isn\'t the model. It\'s the <b>process</b> around it: how a decision actually gets made, where the data comes from, who reads the output, what they do next. I\'m interested in <b>thoughtfully built technology</b> that holds up in the messy interactions between <b>humans, systems, and tools</b>, not technology for its own sake. I can do the <b>data engineering and modeling</b> and also <b>build the UX/UI</b>. The value is in how they meet. I pride myself on being the <b>everything store of technologists</b>: I write code, I design systems, and I manage teams. I have applied these skills inside companies, as an external consultant, and as an advisor and board member across a range of sectors — bringing the same analytical discipline to each.',
  'hero.cta.primary': 'Work with me',
  'hero.cta.secondary': 'Get in touch',
  // sections
  'sec.approach.quote':
    'My work knits together a few things most people keep separate: <em>standing up 0→1 data stacks</em>, <em>scaling technology and public service organizations</em>, <em>incubating products &amp; processes</em>, and <em>innovation &amp; ideas through research and writing</em>.',
  'sec.approach.detail':
    'I\'ve done this from inside companies, advisory seats, an elected council, and university and policy fellowships. The institutions tend to <b>amplify each other</b> when you treat them as one connected practice rather than parallel hobbies. Management science is the thread: bringing mathematical, data-based sophistication to places that ran on instinct, and leaving them measurably better. The same rigor belongs in civic life, so public service runs alongside the work rather than after it.',
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
  'nav.dlanc': 'Fix DTLA',
  'nav.blog': 'Blog',
  'nav.search': 'Buscar',
  'hero.eyebrow': 'Pensador de Sistemas | Experto en Datos | Tecnófilo | Servidor Público',
  'hero.lede':
    'Científico de Gestión (Científico de Datos Aplicado)',
  'hero.intro':
    'Lo llamo <b>ciencia de la gestión</b>, no IA. Lo que me interesa no es el modelo. Es el <b>proceso</b> a su alrededor: cómo se toma realmente una decisión, de dónde vienen los datos, quién lee el resultado, qué hacen después. Me interesa la <b>tecnología construida con cuidado</b> que resiste las interacciones desordenadas entre <b>personas, sistemas y herramientas</b>, no la tecnología por sí misma. Puedo hacer la <b>ingeniería de datos y el modelado</b> y también <b>construir la UX/UI</b>. El valor está en cómo se encuentran. Me enorgullezco de ser la <b>tienda de todo de los tecnólogos</b>: escribo código, diseño sistemas y dirijo equipos.',
  'hero.cta.primary': 'Trabaja conmigo',
  'hero.cta.secondary': 'Contacto',
  'sec.approach.quote':
    'Mi trabajo une algunas cosas que la mayoría mantiene separadas: <em>levantar stacks de datos 0→1</em>, <em>escalar organizaciones tecnológicas</em>, <em>incubar productos y procesos</em>, e <em>innovación e ideas a través de investigación y escritura</em>.',
  'sec.approach.detail':
    'He hecho esto desde dentro de empresas, asientos de asesoría, un consejo electo, y becas universitarias y de políticas públicas. Las instituciones tienden a <b>amplificarse mutuamente</b> cuando las tratas como una sola práctica conectada. La ciencia de la gestión es el hilo: aportar sofisticación matemática y basada en datos a lugares que funcionaban por instinto. El mismo rigor pertenece a la vida cívica.',
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
  'nav.dlanc': 'Fix DTLA',
  'nav.blog': '博客',
  'nav.search': '搜索',
  'hero.eyebrow': '系统思考者 | 全栈数据专家 | 技术爱好者 | 公共服务者',
  'hero.lede':
    '管理科学家（应用数据科学家）',
  'hero.intro':
    '我称之为<b>管理科学</b>，不是 AI。吸引我的不是模型本身，而是它周围的<b>流程</b>：决策实际是如何做出的，数据从哪里来，谁来阅读结果，下一步做什么。我对<b>经过深思熟虑构建的技术</b>感兴趣，能够在<b>人、系统和工具</b>之间复杂的相互作用中站得住脚的技术，而不是为技术而技术。我既能做<b>数据工程与建模</b>，也能<b>构建 UX/UI</b>。价值在于它们如何结合。我以成为<b>技术人员的万能商店</b>为傲：我写代码、设计系统、也管理团队。',
  'hero.cta.primary': '与我合作',
  'hero.cta.secondary': '联系我',
  'sec.approach.quote':
    '我的工作把大多数人分开做的几件事编织在一起：<em>从零搭建数据栈</em>、<em>扩展技术组织</em>、<em>孵化产品与流程</em>，以及<em>通过研究与写作进行的创新与想法</em>。',
  'sec.approach.detail':
    '我从公司内部、顾问席位、民选委员会以及大学和政策研究院做这些事。当你把这些机构当作一个相互连接的实践而不是平行的爱好时，它们往往会<b>相互放大</b>。管理科学是贯穿其中的线索：为依靠直觉运作的地方带来基于数学和数据的精细化，使其可衡量地变得更好。同样的严谨也属于公民生活。',
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
  'nav.dlanc': 'Fix DTLA',
  'nav.blog': 'ब्लॉग',
  'nav.search': 'शोधा',
  'hero.eyebrow': 'सिस्टम्स थिंकर | फुल स्टॅक डेटा तज्ञ | तंत्रज्ञान प्रेमी | सार्वजनिक सेवक',
  'hero.lede':
    'व्यवस्थापन शास्त्रज्ञ (उपयोजित डेटा शास्त्रज्ञ)',
  'hero.intro':
    'मी याला AI ऐवजी <b>व्यवस्थापन शास्त्र</b> म्हणतो. मला आकर्षित करते ती मॉडेल नाही, तर त्याभोवतीची <b>प्रक्रिया</b>: निर्णय खरोखर कसा घेतला जातो, डेटा कुठून येतो, परिणाम कोण वाचतो, पुढे काय करतो. मला <b>विचारपूर्वक तयार केलेल्या तंत्रज्ञानात</b> रस आहे, जे <b>माणसे, प्रणाली आणि साधने</b> यांच्यातील गुंतागुंतीच्या परस्परसंवादात टिकून राहते, स्वतःसाठी असलेल्या तंत्रज्ञानात नाही. मी <b>डेटा अभियांत्रिकी आणि मॉडेलिंग</b> करू शकतो आणि <b>UX/UI देखील तयार</b> करू शकतो. मूल्य ते कसे एकत्र येतात यात आहे. मी <b>तंत्रज्ञांचे एव्हरिथिंग स्टोअर</b> असल्याचा अभिमान बाळगतो: मी कोड लिहितो, प्रणाली डिझाइन करतो आणि संघ व्यवस्थापित करतो.',
  'hero.cta.primary': 'माझ्यासोबत काम करा',
  'hero.cta.secondary': 'संपर्क करा',
  'sec.approach.quote':
    'माझे काम बहुतेक लोक वेगवेगळी ठेवतात अशा काही गोष्टी एकत्र विणते: <em>0→1 डेटा स्टॅक उभारणे</em>, <em>तंत्रज्ञान संस्था वाढवणे</em>, <em>उत्पादने व प्रक्रिया तयार करणे</em>, आणि <em>संशोधन व लेखनातून नवप्रवर्तन व कल्पना</em>.',
  'sec.approach.detail':
    'मी हे कंपन्यांच्या आत, सल्लागार पदांवरून, निवडून आलेल्या परिषदेतून आणि विद्यापीठ व धोरण फेलोशिप्समधून केले आहे. या संस्था एकमेकांना समांतर छंद म्हणून नव्हे तर एक जोडलेली प्रथा म्हणून वागवल्यास <b>एकमेकांना प्रोत्साहन</b> देतात. व्यवस्थापन शास्त्र हा धागा आहे: अंतःप्रेरणेने चालणाऱ्या ठिकाणी गणितीय, डेटा-आधारित परिष्करण आणून त्यांना मोजमापानुसार चांगले बनवणे. हीच कठोरता नागरी जीवनातही आहे.',
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
