const VERSION_DEFINITIONS = [
  {
    id: 'chius',
    short: '和合本',
    englishShort: 'CUV',
    title: '和合本（简体）',
    language: '中文',
    languageCode: 'zh',
    file: 'chius.xml',
    accent: '#c47e52',
  },
  {
    id: 'english-esv',
    short: 'ESV',
    title: 'English Standard Version',
    language: 'English',
    languageCode: 'en',
    file: 'english-esv.xml',
    accent: '#4b7e84',
  },
  {
    id: 'english-nlt',
    short: 'NLT',
    title: 'New Living Translation',
    language: 'English',
    languageCode: 'en',
    file: 'english-nlt.xml',
    accent: '#7e83a1',
  },
  {
    id: 'english-niv',
    short: 'NIV',
    title: 'New International Version',
    language: 'English',
    languageCode: 'en',
    file: 'english-niv.xml',
    accent: '#638b68',
  },
  {
    id: 'english-message',
    short: 'MSG',
    title: 'The Message',
    language: 'English',
    languageCode: 'en',
    file: 'english-message.xml',
    accent: '#a1745d',
  },
  {
    id: 'japanese',
    short: 'JAP',
    title: 'Japanese Bible',
    language: '日本語',
    languageCode: 'ja',
    file: 'Japanese.xml',
    accent: '#ad6b69',
  },
  {
    id: 'korean',
    short: 'KOR',
    title: 'Korean Bible',
    language: '한국어',
    languageCode: 'ko',
    file: 'Korean.xml',
    accent: '#657aa0',
  },
  {
    id: 'french',
    short: 'FRA',
    title: 'French Bible',
    language: 'Français',
    languageCode: 'fr',
    file: 'French.xml',
    accent: '#9d8556',
  },
  {
    id: 'german',
    short: 'DEU',
    title: 'German Bible',
    language: 'Deutsch',
    languageCode: 'de',
    file: 'German.xml',
    accent: '#6c8073',
  },
];

const UI_LANGUAGES = [
  { id: 'zh', label: '中文' },
  { id: 'en', label: 'English' },
  { id: 'ja', label: '日本語' },
  { id: 'ko', label: '한국어' },
  { id: 'fr', label: 'Français' },
  { id: 'de', label: 'Deutsch' },
];

const APP_STORE_URL = 'https://apps.apple.com/cn/app/%E5%9C%A3%E7%BB%8F365/id6758766690';

const UI_COPY = {
  zh: {
    language: '网页语言', close: '关闭', downloadApp: '下载 App', emptyChapter: '这一章还没有可显示的经文', emptyChapterHint: '请切换书卷或版本后再试。',
    reader: '阅读器', annotations: '我的标注', plans: '阅读计划', index: '圣经目录', books: '{count} 卷',
    oldTestament: '旧约', newTestament: '新约', chapterLabel: '章节', testamentSelection: '约的选择',
    localReady: '本地版本已就绪', search: '查找经文', scriptureReader: '经文阅读', versionsUnit: '个版本',
    previousChapter: '上一章', nextChapter: '下一章', chapterUnit: '章', verseUnit: '节', font: '字号',
    light: '浅色', dark: '深色', compareVersions: '对照版本', addCompareHint: '可添加多个版本对照',
    manageVersions: '管理版本', chapterEnd: '本章结束', scriptureSource: '经文来自本地版本目录',
    positionSaved: '阅读位置会自动保存在本机', versionPanelTitle: '选择对照版本',
    versionPanelDescription: '勾选多个版本，在同一节中并排阅读。', selectedVersions: '{count} 个版本已选',
    done: '完成', searchPlaceholder: '输入关键词，例如：光、love、amor', searchHint: '在所有已载入版本中查找关键词',
    searchEnter: '按 Enter 开始搜索', found: '找到 {count} 条结果', noResults: '没有找到“{query}”相关经文。',
    copySuccess: '经文已复制', fontAdjusted: '字号已调整为 {value}%', decreaseFont: '减小字号', increaseFont: '增大字号', annotationsSoon: '标注功能即将开放',
    contextCopy: '复制', contextSearch: '搜索', contextSearchGoogle: '使用 Google 搜索', contextSearchBaidu: '使用百度搜索',
    plansSoon: '阅读计划即将开放', welcome: '欢迎回来，继续你的阅读', loading: '正在载入经文版本…',
    loadFailed: '经文载入失败', reload: '重新载入', serverHint: '请通过本地服务器打开。浏览器会拦截 file:// 页面读取 XML。',
  },
  en: {
    language: 'Language', close: 'Close', downloadApp: 'Get the app', emptyChapter: 'No scripture is available for this chapter', emptyChapterHint: 'Try another book or version.',
    reader: 'Reader', annotations: 'My highlights', plans: 'Reading plan', index: 'Bible index', books: '{count} books',
    oldTestament: 'Old Testament', newTestament: 'New Testament', chapterLabel: 'Chapters', testamentSelection: 'Testament selection',
    localReady: 'Local versions ready', search: 'Search scripture', scriptureReader: 'Scripture reader', versionsUnit: 'versions',
    previousChapter: 'Previous chapter', nextChapter: 'Next chapter', chapterUnit: 'chapter', verseUnit: 'verses', font: 'Type',
    light: 'Light', dark: 'Dark', compareVersions: 'Compare versions', addCompareHint: 'Add more versions to compare',
    manageVersions: 'Manage versions', chapterEnd: 'End of chapter', scriptureSource: 'Scripture loaded from the local versions folder',
    positionSaved: 'Reading position is saved on this device', versionPanelTitle: 'Choose comparison versions',
    versionPanelDescription: 'Select multiple versions to read the same verse side by side.', selectedVersions: '{count} selected',
    done: 'Done', searchPlaceholder: 'Search a word, for example: light, love, amor', searchHint: 'Search across all loaded versions',
    searchEnter: 'Press Enter to search', found: '{count} results found', noResults: 'No verses found for “{query}”.',
    copySuccess: 'Verse copied', fontAdjusted: 'Font size set to {value}%', decreaseFont: 'Decrease font size', increaseFont: 'Increase font size', annotationsSoon: 'Highlights are coming soon',
    contextCopy: 'Copy', contextSearch: 'Search', contextSearchGoogle: 'Search with Google', contextSearchBaidu: 'Search with Baidu',
    plansSoon: 'Reading plans are coming soon', welcome: 'Welcome back. Keep reading.', loading: 'Loading scripture versions…',
    loadFailed: 'Unable to load scripture', reload: 'Reload', serverHint: 'Open this site through a local server. Browsers block XML reads from file:// pages.',
  },
  ja: {
    language: '表示言語', close: '閉じる', downloadApp: 'アプリをダウンロード', emptyChapter: 'この章の聖句はありません', emptyChapterHint: '別の書巻またはバージョンを選んでください。',
    reader: 'リーダー', annotations: 'ハイライト', plans: '読書プラン', index: '聖書目次', books: '{count} 巻',
    oldTestament: '旧約', newTestament: '新約', chapterLabel: '章', testamentSelection: '約の選択',
    localReady: 'ローカル版を準備しました', search: '聖句を検索', scriptureReader: '聖書リーダー', versionsUnit: 'バージョン',
    previousChapter: '前の章', nextChapter: '次の章', chapterUnit: '章', verseUnit: '節', font: '文字サイズ',
    light: 'ライト', dark: 'ダーク', compareVersions: '対照バージョン', addCompareHint: '複数のバージョンを比較できます',
    manageVersions: 'バージョン管理', chapterEnd: '章の終わり', scriptureSource: 'ローカルのバージョンフォルダから読み込み',
    positionSaved: '読書位置はこの端末に保存されます', versionPanelTitle: '対照バージョンを選択',
    versionPanelDescription: '複数のバージョンを選び、同じ節を並べて読みます。', selectedVersions: '{count} 件選択',
    done: '完了', searchPlaceholder: 'キーワードを入力（光、love、amor など）', searchHint: '読み込み済みの全バージョンから検索',
    searchEnter: 'Enter で検索', found: '{count} 件の結果', noResults: '「{query}」に一致する聖句はありません。',
    copySuccess: '聖句をコピーしました', fontAdjusted: '文字サイズ {value}%', decreaseFont: '文字サイズを小さくする', increaseFont: '文字サイズを大きくする', annotationsSoon: 'ハイライト機能は近日公開',
    contextCopy: 'コピー', contextSearch: '検索', contextSearchGoogle: 'Google で検索', contextSearchBaidu: '百度で検索',
    plansSoon: '読書プランは近日公開', welcome: 'おかえりなさい。読書を続けましょう。', loading: '聖書のバージョンを読み込み中…',
    loadFailed: '聖書を読み込めません', reload: '再読み込み', serverHint: 'ローカルサーバー経由で開いてください。file:// ページでは XML が読み込めません。',
  },
  ko: {
    language: '웹 언어', close: '닫기', downloadApp: '앱 다운로드', emptyChapter: '이 장에 표시할 성경 구절이 없습니다', emptyChapterHint: '다른 책이나 버전을 선택해 보세요.',
    reader: '읽기', annotations: '내 하이라이트', plans: '읽기 계획', index: '성경 목차', books: '{count}권',
    oldTestament: '구약', newTestament: '신약', chapterLabel: '장', testamentSelection: '성경 구분 선택',
    localReady: '로컬 버전 준비됨', search: '성경 검색', scriptureReader: '성경 읽기', versionsUnit: '개 버전',
    previousChapter: '이전 장', nextChapter: '다음 장', chapterUnit: '장', verseUnit: '절', font: '글자 크기',
    light: '라이트', dark: '다크', compareVersions: '대조 버전', addCompareHint: '여러 버전을 비교할 수 있습니다',
    manageVersions: '버전 관리', chapterEnd: '이 장의 끝', scriptureSource: '로컬 버전 폴더에서 불러온 성경',
    positionSaved: '읽기 위치가 이 기기에 저장됩니다', versionPanelTitle: '대조 버전 선택',
    versionPanelDescription: '여러 버전을 선택해 같은 절을 나란히 읽어 보세요.', selectedVersions: '{count}개 선택',
    done: '완료', searchPlaceholder: '검색어 입력 (빛, love, amor 등)', searchHint: '불러온 모든 버전에서 검색',
    searchEnter: 'Enter를 눌러 검색', found: '{count}개 결과', noResults: '“{query}”에 해당하는 구절이 없습니다.',
    copySuccess: '구절이 복사되었습니다', fontAdjusted: '글자 크기 {value}%', decreaseFont: '글자 크기 줄이기', increaseFont: '글자 크기 키우기', annotationsSoon: '하이라이트 기능은 곧 제공됩니다',
    contextCopy: '복사', contextSearch: '검색', contextSearchGoogle: 'Google 검색', contextSearchBaidu: '百度 검색',
    plansSoon: '읽기 계획은 곧 제공됩니다', welcome: '돌아오신 것을 환영합니다. 계속 읽어 보세요.', loading: '성경 버전 불러오는 중…',
    loadFailed: '성경을 불러오지 못했습니다', reload: '다시 불러오기', serverHint: '로컬 서버를 통해 열어 주세요. file:// 페이지에서는 XML을 읽을 수 없습니다.',
  },
  fr: {
    language: 'Langue', close: 'Fermer', downloadApp: 'Télécharger l’app', emptyChapter: 'Aucun texte pour ce chapitre', emptyChapterHint: 'Essayez un autre livre ou une autre version.',
    reader: 'Lecture', annotations: 'Mes annotations', plans: 'Plan de lecture', index: 'Index biblique', books: '{count} livres',
    oldTestament: 'Ancien Testament', newTestament: 'Nouveau Testament', chapterLabel: 'Chapitres', testamentSelection: 'Choix du testament',
    localReady: 'Versions locales prêtes', search: 'Rechercher dans la Bible', scriptureReader: 'Lecteur biblique', versionsUnit: 'versions',
    previousChapter: 'Chapitre précédent', nextChapter: 'Chapitre suivant', chapterUnit: 'chapitre', verseUnit: 'versets', font: 'Taille',
    light: 'Clair', dark: 'Sombre', compareVersions: 'Comparer les versions', addCompareHint: 'Ajoutez des versions à comparer',
    manageVersions: 'Gérer les versions', chapterEnd: 'Fin du chapitre', scriptureSource: 'Texte chargé depuis le dossier local',
    positionSaved: 'La position de lecture est enregistrée', versionPanelTitle: 'Choisir les versions à comparer',
    versionPanelDescription: 'Sélectionnez plusieurs versions pour lire le même verset côte à côte.', selectedVersions: '{count} sélectionnées',
    done: 'Terminé', searchPlaceholder: 'Rechercher un mot, par exemple : lumière, love', searchHint: 'Rechercher dans toutes les versions chargées',
    searchEnter: 'Appuyez sur Entrée pour rechercher', found: '{count} résultats', noResults: 'Aucun verset trouvé pour « {query} ».',
    copySuccess: 'Verset copié', fontAdjusted: 'Taille du texte : {value}%', decreaseFont: 'Réduire la taille du texte', increaseFont: 'Agrandir la taille du texte', annotationsSoon: 'Les annotations arrivent bientôt',
    contextCopy: 'Copier', contextSearch: 'Rechercher', contextSearchGoogle: 'Rechercher avec Google', contextSearchBaidu: 'Rechercher avec Baidu',
    plansSoon: 'Les plans de lecture arrivent bientôt', welcome: 'Bon retour. Continuez votre lecture.', loading: 'Chargement des versions…',
    loadFailed: 'Impossible de charger la Bible', reload: 'Recharger', serverHint: 'Ouvrez ce site via un serveur local. Les navigateurs bloquent les fichiers XML depuis file://.',
  },
  de: {
    language: 'Sprache', close: 'Schließen', downloadApp: 'App laden', emptyChapter: 'Für dieses Kapitel ist kein Text verfügbar', emptyChapterHint: 'Wähle ein anderes Buch oder eine andere Version.',
    reader: 'Lesen', annotations: 'Meine Markierungen', plans: 'Leseplan', index: 'Bibelindex', books: '{count} Bücher',
    oldTestament: 'Altes Testament', newTestament: 'Neues Testament', chapterLabel: 'Kapitel', testamentSelection: 'Testament auswählen',
    localReady: 'Lokale Versionen bereit', search: 'Bibeltext suchen', scriptureReader: 'Bibel-Leser', versionsUnit: 'Versionen',
    previousChapter: 'Vorheriges Kapitel', nextChapter: 'Nächstes Kapitel', chapterUnit: 'Kapitel', verseUnit: 'Verse', font: 'Schrift',
    light: 'Hell', dark: 'Dunkel', compareVersions: 'Versionen vergleichen', addCompareHint: 'Weitere Versionen hinzufügen',
    manageVersions: 'Versionen verwalten', chapterEnd: 'Ende des Kapitels', scriptureSource: 'Text aus dem lokalen Versionsordner',
    positionSaved: 'Leseposition wird auf diesem Gerät gespeichert', versionPanelTitle: 'Vergleichsversionen auswählen',
    versionPanelDescription: 'Wähle mehrere Versionen, um denselben Vers nebeneinander zu lesen.', selectedVersions: '{count} ausgewählt',
    done: 'Fertig', searchPlaceholder: 'Suchwort eingeben, z. B. Licht, love', searchHint: 'Alle geladenen Versionen durchsuchen',
    searchEnter: 'Enter zum Suchen drücken', found: '{count} Ergebnisse', noResults: 'Keine Verse für „{query}“ gefunden.',
    copySuccess: 'Vers kopiert', fontAdjusted: 'Schriftgröße: {value}%', decreaseFont: 'Schrift verkleinern', increaseFont: 'Schrift vergrößern', annotationsSoon: 'Markierungen folgen bald',
    contextCopy: 'Kopieren', contextSearch: 'Suchen', contextSearchGoogle: 'Mit Google suchen', contextSearchBaidu: 'Mit Baidu suchen',
    plansSoon: 'Lesepläne folgen bald', welcome: 'Willkommen zurück. Lies weiter.', loading: 'Bibelversionen werden geladen…',
    loadFailed: 'Bibel konnte nicht geladen werden', reload: 'Neu laden', serverHint: 'Öffne diese Seite über einen lokalen Server. Browser blockieren XML über file://.',
  },
};

function t(key, values = {}) {
  const languageCopy = UI_COPY[state.uiLanguage] || UI_COPY.zh;
  let text = languageCopy[key] ?? UI_COPY.zh[key] ?? key;
  Object.entries(values).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, String(value));
  });
  return text;
}

const BOOKS = [
  ['Gen', '创世记', 'Genesis', '创'],
  ['Exod', '出埃及记', 'Exodus', '出'],
  ['Lev', '利未记', 'Leviticus', '利'],
  ['Num', '民数记', 'Numbers', '民'],
  ['Deut', '申命记', 'Deuteronomy', '申'],
  ['Josh', '约书亚记', 'Joshua', '书'],
  ['Judg', '士师记', 'Judges', '士'],
  ['Ruth', '路得记', 'Ruth', '得'],
  ['1Sam', '撒母耳记上', '1 Samuel', '撒上'],
  ['2Sam', '撒母耳记下', '2 Samuel', '撒下'],
  ['1Kgs', '列王纪上', '1 Kings', '王上'],
  ['2Kgs', '列王纪下', '2 Kings', '王下'],
  ['1Chr', '历代志上', '1 Chronicles', '代上'],
  ['2Chr', '历代志下', '2 Chronicles', '代下'],
  ['Ezra', '以斯拉记', 'Ezra', '拉'],
  ['Neh', '尼希米记', 'Nehemiah', '尼'],
  ['Esth', '以斯帖记', 'Esther', '斯'],
  ['Job', '约伯记', 'Job', '伯'],
  ['Ps', '诗篇', 'Psalms', '诗'],
  ['Prov', '箴言', 'Proverbs', '箴'],
  ['Eccl', '传道书', 'Ecclesiastes', '传'],
  ['Song', '雅歌', 'Song of Solomon', '歌'],
  ['Isa', '以赛亚书', 'Isaiah', '赛'],
  ['Jer', '耶利米书', 'Jeremiah', '耶'],
  ['Lam', '耶利米哀歌', 'Lamentations', '哀'],
  ['Ezek', '以西结书', 'Ezekiel', '结'],
  ['Dan', '但以理书', 'Daniel', '但'],
  ['Hos', '何西阿书', 'Hosea', '何'],
  ['Joel', '约珥书', 'Joel', '珥'],
  ['Amos', '阿摩司书', 'Amos', '摩'],
  ['Obad', '俄巴底亚书', 'Obadiah', '俄'],
  ['Jonah', '约拿书', 'Jonah', '拿'],
  ['Mic', '弥迦书', 'Micah', '弥'],
  ['Nah', '那鸿书', 'Nahum', '鸿'],
  ['Hab', '哈巴谷书', 'Habakkuk', '哈'],
  ['Zeph', '西番雅书', 'Zephaniah', '番'],
  ['Hag', '哈该书', 'Haggai', '该'],
  ['Zech', '撒迦利亚书', 'Zechariah', '亚'],
  ['Mal', '玛拉基书', 'Malachi', '玛'],
  ['Matt', '马太福音', 'Matthew', '太'],
  ['Mark', '马可福音', 'Mark', '可'],
  ['Luke', '路加福音', 'Luke', '路'],
  ['John', '约翰福音', 'John', '约'],
  ['Acts', '使徒行传', 'Acts', '徒'],
  ['Rom', '罗马书', 'Romans', '罗'],
  ['1Cor', '哥林多前书', '1 Corinthians', '林前'],
  ['2Cor', '哥林多后书', '2 Corinthians', '林后'],
  ['Gal', '加拉太书', 'Galatians', '加'],
  ['Eph', '以弗所书', 'Ephesians', '弗'],
  ['Phil', '腓立比书', 'Philippians', '腓'],
  ['Col', '歌罗西书', 'Colossians', '西'],
  ['1Thess', '帖撒罗尼迦前书', '1 Thessalonians', '帖前'],
  ['2Thess', '帖撒罗尼迦后书', '2 Thessalonians', '帖后'],
  ['1Tim', '提摩太前书', '1 Timothy', '提前'],
  ['2Tim', '提摩太后书', '2 Timothy', '提后'],
  ['Titus', '提多书', 'Titus', '多'],
  ['Phlm', '腓利门书', 'Philemon', '门'],
  ['Heb', '希伯来书', 'Hebrews', '来'],
  ['Jas', '雅各书', 'James', '雅'],
  ['1Pet', '彼得前书', '1 Peter', '彼前'],
  ['2Pet', '彼得后书', '2 Peter', '彼后'],
  ['1John', '约翰一书', '1 John', '约一'],
  ['2John', '约翰二书', '2 John', '约二'],
  ['3John', '约翰三书', '3 John', '约三'],
  ['Jude', '犹大书', 'Jude', '犹'],
  ['Rev', '启示录', 'Revelation', '启'],
].map(([id, zh, en, abbr]) => ({ id, zh, en, abbr }));

const ENGLISH_BOOK_ABBREVIATIONS = {
  Gen: 'Gen', Exod: 'Exod', Lev: 'Lev', Num: 'Num', Deut: 'Deut',
  Josh: 'Josh', Judg: 'Judg', Ruth: 'Ruth', '1Sam': '1 Sam', '2Sam': '2 Sam',
  '1Kgs': '1 Kgs', '2Kgs': '2 Kgs', '1Chr': '1 Chr', '2Chr': '2 Chr', Ezra: 'Ezra',
  Neh: 'Neh', Esth: 'Esth', Job: 'Job', Ps: 'Ps', Prov: 'Prov',
  Eccl: 'Eccl', Song: 'Song', Isa: 'Isa', Jer: 'Jer', Lam: 'Lam',
  Ezek: 'Ezek', Dan: 'Dan', Hos: 'Hos', Joel: 'Joel', Amos: 'Amos',
  Obad: 'Obad', Jonah: 'Jonah', Mic: 'Mic', Nah: 'Nah', Hab: 'Hab',
  Zeph: 'Zeph', Hag: 'Hag', Zech: 'Zech', Mal: 'Mal', Matt: 'Matt',
  Mark: 'Mark', Luke: 'Luke', John: 'John', Acts: 'Acts', Rom: 'Rom',
  '1Cor': '1 Cor', '2Cor': '2 Cor', Gal: 'Gal', Eph: 'Eph', Phil: 'Phil',
  Col: 'Col', '1Thess': '1 Thess', '2Thess': '2 Thess', '1Tim': '1 Tim', '2Tim': '2 Tim',
  Titus: 'Titus', Phlm: 'Phlm', Heb: 'Heb', Jas: 'Jas', '1Pet': '1 Pet',
  '2Pet': '2 Pet', '1John': '1 John', '2John': '2 John', '3John': '3 John', Jude: 'Jude',
  Rev: 'Rev',
};

const BOOK_NAMES_BY_LANGUAGE = {
  ja: {
    Gen: '創世記', Exod: '出エジプト記', Lev: 'レビ記', Num: '民数記', Deut: '申命記',
    Josh: 'ヨシュア記', Judg: '士師記', Ruth: 'ルツ記', '1Sam': 'サムエル記Ⅰ', '2Sam': 'サムエル記Ⅱ',
    '1Kgs': '列王記Ⅰ', '2Kgs': '列王記Ⅱ', '1Chr': '歴代誌Ⅰ', '2Chr': '歴代誌Ⅱ',
    Ezra: 'エズラ記', Neh: 'ネヘミヤ記', Esth: 'エステル記', Job: 'ヨブ記', Ps: '詩篇',
    Prov: '箴言', Eccl: '伝道者の書', Song: '雅歌', Isa: 'イザヤ書', Jer: 'エレミヤ書',
    Lam: '哀歌', Ezek: 'エゼキエル書', Dan: 'ダニエル書', Hos: 'ホセア書', Joel: 'ヨエル書',
    Amos: 'アモス書', Obad: 'オバデヤ書', Jonah: 'ヨナ書', Mic: 'ミカ書', Nah: 'ナホム書',
    Hab: 'ハバクク書', Zeph: 'ゼパニヤ書', Hag: 'ハガイ書', Zech: 'ゼカリヤ書', Mal: 'マラキ書',
    Matt: 'マタイの福音書', Mark: 'マルコの福音書', Luke: 'ルカの福音書', John: 'ヨハネの福音書',
    Acts: '使徒の働き', Rom: 'ローマ人への手紙', '1Cor': 'コリント人への手紙第一',
    '2Cor': 'コリント人への手紙第二', Gal: 'ガラテヤ人への手紙', Eph: 'エペソ人への手紙',
    Phil: 'ピリピ人への手紙', Col: 'コロサイ人への手紙', '1Thess': 'テサロニケ人への手紙第一',
    '2Thess': 'テサロニケ人への手紙第二', '1Tim': 'テモテへの手紙第一', '2Tim': 'テモテへの手紙第二',
    Titus: 'テトスへの手紙', Phlm: 'ピレモンへの手紙', Heb: 'ヘブル人への手紙',
    Jas: 'ヤコブの手紙', '1Pet': 'ペテロの手紙第一', '2Pet': 'ペテロの手紙第二',
    '1John': 'ヨハネの手紙第一', '2John': 'ヨハネの手紙第二', '3John': 'ヨハネの手紙第三',
    Jude: 'ユダの手紙', Rev: 'ヨハネの黙示録',
  },
  ko: {
    Gen: '창세기', Exod: '출애굽기', Lev: '레위기', Num: '민수기', Deut: '신명기',
    Josh: '여호수아', Judg: '사사기', Ruth: '룻기', '1Sam': '사무엘상', '2Sam': '사무엘하',
    '1Kgs': '열왕기상', '2Kgs': '열왕기하', '1Chr': '역대상', '2Chr': '역대하',
    Ezra: '에스라', Neh: '느헤미야', Esth: '에스더', Job: '욥기', Ps: '시편',
    Prov: '잠언', Eccl: '전도서', Song: '아가', Isa: '이사야', Jer: '예레미야',
    Lam: '예레미야애가', Ezek: '에스겔', Dan: '다니엘', Hos: '호세아', Joel: '요엘',
    Amos: '아모스', Obad: '오바댜', Jonah: '요나', Mic: '미가', Nah: '나훔',
    Hab: '하박국', Zeph: '스바냐', Hag: '학개', Zech: '스가랴', Mal: '말라기',
    Matt: '마태복음', Mark: '마가복음', Luke: '누가복음', John: '요한복음', Acts: '사도행전',
    Rom: '로마서', '1Cor': '고린도전서', '2Cor': '고린도후서', Gal: '갈라디아서',
    Eph: '에베소서', Phil: '빌립보서', Col: '골로새서', '1Thess': '데살로니가전서',
    '2Thess': '데살로니가후서', '1Tim': '디모데전서', '2Tim': '디모데후서', Titus: '디도서',
    Phlm: '빌레몬서', Heb: '히브리서', Jas: '야고보서', '1Pet': '베드로전서',
    '2Pet': '베드로후서', '1John': '요한일서', '2John': '요한이서', '3John': '요한삼서',
    Jude: '유다서', Rev: '요한계시록',
  },
  fr: {
    Gen: 'Genèse', Exod: 'Exode', Lev: 'Lévitique', Num: 'Nombres', Deut: 'Deutéronome',
    Josh: 'Josué', Judg: 'Juges', Ruth: 'Ruth', '1Sam': '1 Samuel', '2Sam': '2 Samuel',
    '1Kgs': '1 Rois', '2Kgs': '2 Rois', '1Chr': '1 Chroniques', '2Chr': '2 Chroniques',
    Ezra: 'Esdras', Neh: 'Néhémie', Esth: 'Esther', Job: 'Job', Ps: 'Psaumes',
    Prov: 'Proverbes', Eccl: 'Ecclésiaste', Song: 'Cantique des cantiques', Isa: 'Ésaïe',
    Jer: 'Jérémie', Lam: 'Lamentations', Ezek: 'Ézéchiel', Dan: 'Daniel', Hos: 'Osée',
    Joel: 'Joël', Amos: 'Amos', Obad: 'Abdias', Jonah: 'Jonas', Mic: 'Michée',
    Nah: 'Nahum', Hab: 'Habacuc', Zeph: 'Sophonie', Hag: 'Aggée', Zech: 'Zacharie',
    Mal: 'Malachie', Matt: 'Matthieu', Mark: 'Marc', Luke: 'Luc', John: 'Jean',
    Acts: 'Actes', Rom: 'Romains', '1Cor': '1 Corinthiens', '2Cor': '2 Corinthiens',
    Gal: 'Galates', Eph: 'Éphésiens', Phil: 'Philippiens', Col: 'Colossiens',
    '1Thess': '1 Thessaloniciens', '2Thess': '2 Thessaloniciens', '1Tim': '1 Timothée',
    '2Tim': '2 Timothée', Titus: 'Tite', Phlm: 'Philémon', Heb: 'Hébreux', Jas: 'Jacques',
    '1Pet': '1 Pierre', '2Pet': '2 Pierre', '1John': '1 Jean', '2John': '2 Jean',
    '3John': '3 Jean', Jude: 'Jude', Rev: 'Apocalypse',
  },
  de: {
    Gen: '1. Mose', Exod: '2. Mose', Lev: '3. Mose', Num: '4. Mose', Deut: '5. Mose',
    Josh: 'Josua', Judg: 'Richter', Ruth: 'Rut', '1Sam': '1. Samuel', '2Sam': '2. Samuel',
    '1Kgs': '1. Könige', '2Kgs': '2. Könige', '1Chr': '1. Chronik', '2Chr': '2. Chronik',
    Ezra: 'Esra', Neh: 'Nehemia', Esth: 'Ester', Job: 'Hiob', Ps: 'Psalmen',
    Prov: 'Sprüche', Eccl: 'Prediger', Song: 'Hohelied', Isa: 'Jesaja', Jer: 'Jeremia',
    Lam: 'Klagelieder', Ezek: 'Hesekiel', Dan: 'Daniel', Hos: 'Hosea', Joel: 'Joel',
    Amos: 'Amos', Obad: 'Obadja', Jonah: 'Jona', Mic: 'Micha', Nah: 'Nahum',
    Hab: 'Habakuk', Zeph: 'Zefanja', Hag: 'Haggai', Zech: 'Sacharja', Mal: 'Maleachi',
    Matt: 'Matthäus', Mark: 'Markus', Luke: 'Lukas', John: 'Johannes',
    Acts: 'Apostelgeschichte', Rom: 'Römer', '1Cor': '1. Korinther', '2Cor': '2. Korinther',
    Gal: 'Galater', Eph: 'Epheser', Phil: 'Philipper', Col: 'Kolosser',
    '1Thess': '1. Thessalonicher', '2Thess': '2. Thessalonicher', '1Tim': '1. Timotheus',
    '2Tim': '2. Timotheus', Titus: 'Titus', Phlm: 'Philemon', Heb: 'Hebräer',
    Jas: 'Jakobus', '1Pet': '1. Petrus', '2Pet': '2. Petrus', '1John': '1. Johannes',
    '2John': '2. Johannes', '3John': '3. Johannes', Jude: 'Judas', Rev: 'Offenbarung',
  },
};

const OLD_TESTAMENT_IDS = new Set(BOOKS.slice(0, 39).map((book) => book.id));
const BOOK_ALIASES = new Map();
const FONT_SCALE_DEFAULT = 1;
const FONT_SCALE_MIN = 0.75;
const FONT_SCALE_MAX = 1.5;
const FONT_SCALE_STEP = 0.05;
const storedFontScale = parseFloat(localStorage.getItem('7bible.fontScale') || '');
const initialFontScale = Number.isFinite(storedFontScale)
  ? Math.min(FONT_SCALE_MAX, Math.max(FONT_SCALE_MIN, storedFontScale))
  : FONT_SCALE_DEFAULT;

BOOKS.forEach((book) => {
  [book.id, book.en, book.zh, book.en.replace(/\s/g, ''), book.zh.replace(/书$/, '')].forEach((alias) => {
    BOOK_ALIASES.set(alias.toLowerCase(), book.id);
  });
});

const state = {
  versions: new Map(),
  selectedVersionIds: loadStoredArray('7bible.selectedVersions', ['chius', 'english-esv']),
  uiLanguage: localStorage.getItem('7bible.uiLanguage') || 'zh',
  selectedBookId: localStorage.getItem('7bible.book') || 'Gen',
  selectedChapter: Number(localStorage.getItem('7bible.chapter') || 1),
  testament: localStorage.getItem('7bible.testament') || 'old',
  fontScale: initialFontScale,
  darkMode: localStorage.getItem('7bible.darkMode') === 'true',
  sidebarOpen: window.innerWidth > 900,
  versionPanelOpen: false,
  searchOpen: false,
  searchQuery: '',
  searchResults: [],
  loading: true,
  error: '',
  toast: '',
  contextMenu: null,
};

const app = document.querySelector('#app');

function loadStoredArray(key, fallback) {
  try {
    const stored = JSON.parse(localStorage.getItem(key));
    return Array.isArray(stored) && stored.length ? stored : fallback;
  } catch {
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function highlightMatch(text, query) {
  const source = String(text || '');
  const term = String(query || '').trim();
  if (!term) return escapeHtml(source);

  const matcher = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  let cursor = 0;
  let output = '';
  source.replace(matcher, (match, offset) => {
    output += escapeHtml(source.slice(cursor, offset));
    output += `<mark>${escapeHtml(match)}</mark>`;
    cursor = offset + match.length;
    return match;
  });
  return output + escapeHtml(source.slice(cursor));
}

function localTag(node) {
  return (node.localName || node.tagName || '').split(':').pop().toLowerCase();
}

function cleanVerseText(text) {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

function splitVerseHeading(text) {
  const source = String(text || '').trim();
  const match = source.match(/^[＜〈<]\s*([^＞〉>]+?)\s*[＞〉>]\s*/);
  if (!match) return { heading: '', body: source };

  return {
    heading: match[1].trim(),
    body: source.slice(match[0].length).trim(),
  };
}

function renderVerseText(text) {
  const { heading, body } = splitVerseHeading(text);
  return `
    ${heading ? `<span class="translation-heading">${escapeHtml(heading)}</span>` : ''}
    <span class="translation-body">${escapeHtml(body)}</span>
  `;
}

function resolveBookId(raw) {
  const normalized = String(raw || '').trim().toLowerCase();
  return BOOK_ALIASES.get(normalized) || BOOK_ALIASES.get(normalized.replace(/[._-]/g, '')) || raw;
}

function normalizeOsisId(raw) {
  const value = String(raw || '').trim();
  const match = value.match(/\.(\d+)\.(\d+)$/);
  if (!match) return null;

  const bookPrefix = value.slice(0, match.index).toLowerCase();
  const book = BOOKS.find((candidate) => [
    candidate.id,
    candidate.en,
    candidate.en.replace(/\s/g, ''),
    candidate.zh,
    candidate.zh.replace(/书$/, ''),
  ].some((alias) => {
    const normalizedAlias = String(alias).toLowerCase();
    return bookPrefix === normalizedAlias || bookPrefix.endsWith(normalizedAlias);
  }));

  if (!book) return null;
  return `${book.id}.${Number(match[1])}.${Number(match[2])}`;
}

function findAncestor(node, wantedTags) {
  let current = node.parentElement;
  while (current) {
    if (wantedTags.has(localTag(current))) return current;
    current = current.parentElement;
  }
  return null;
}

function parseBibleXml(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, 'application/xml');
  const parseError = doc.querySelector('parsererror');
  if (parseError) throw new Error('XML 解析失败');

  const verses = new Map();
  const verseNodes = Array.from(doc.getElementsByTagName('*')).filter((node) => {
    return localTag(node) === 'verse' || localTag(node) === 'vers';
  });

  verseNodes.forEach((node) => {
    const osisId = node.getAttribute('osisID') || node.getAttribute('osisid');
    let key = normalizeOsisId(osisId);

    if (!key) {
      const chapterNode = findAncestor(node, new Set(['chapter']));
      const bookNode = findAncestor(node, new Set(['biblebook', 'book']));
      const chapterNumber = chapterNode?.getAttribute('cnumber') || chapterNode?.getAttribute('number');
      const verseNumber = node.getAttribute('vnumber') || node.getAttribute('number');
      const bookRaw = bookNode?.getAttribute('bname') || bookNode?.getAttribute('osisID') || bookNode?.getAttribute('osisid');
      const bookId = resolveBookId(bookRaw);
      if (bookId && chapterNumber && verseNumber) {
        key = `${bookId}.${Number(chapterNumber)}.${Number(verseNumber)}`;
      }
    }

    if (key) verses.set(key, cleanVerseText(node.textContent));
  });

  const chaptersByBook = new Map();
  verses.forEach((_, key) => {
    const [bookId, chapterNumber] = key.split('.');
    if (!chaptersByBook.has(bookId)) chaptersByBook.set(bookId, new Set());
    chaptersByBook.get(bookId).add(Number(chapterNumber));
  });

  return { verses, chaptersByBook };
}

async function loadBibleVersions() {
  const loaded = await Promise.all(
    VERSION_DEFINITIONS.map(async (definition) => {
      const versionUrl = new URL(`../versions/${encodeURIComponent(definition.file)}`, import.meta.url);
      const response = await fetch(versionUrl);
      if (!response.ok) throw new Error(`${definition.file} 加载失败`);
      const xml = await response.text();
      return [definition.id, { definition, ...parseBibleXml(xml) }];
    }),
  );
  state.versions = new Map(loaded);
}

function currentBook() {
  return BOOKS.find((book) => book.id === state.selectedBookId) || BOOKS[0];
}

function primaryVersion() {
  return state.versions.get(state.selectedVersionIds[0]) || state.versions.values().next().value;
}

function chapterCount(bookId) {
  const version = primaryVersion();
  return version?.chaptersByBook.get(bookId)?.size || 1;
}

function chapterNumbers(bookId) {
  const version = primaryVersion();
  return version ? [...(version.chaptersByBook.get(bookId) || [1])].sort((a, b) => a - b) : [1];
}

function chapterVerseNumbers(bookId, chapter) {
  const version = primaryVersion();
  if (!version) return [];
  const prefix = `${bookId}.${chapter}.`;
  return [...version.verses.keys()]
    .filter((key) => key.startsWith(prefix))
    .map((key) => Number(key.split('.')[2]))
    .sort((a, b) => a - b);
}

function bookNameForLanguage(book, language = state.uiLanguage) {
  const languageCode = String(language || '').toLowerCase().split('-')[0];
  return languageCode === 'zh' ? book.zh : BOOK_NAMES_BY_LANGUAGE[languageCode]?.[book.id] || book.en;
}

function bookAbbreviationForLanguage(book, language) {
  return String(language || '').toLowerCase().startsWith('zh')
    ? book.abbr
    : ENGLISH_BOOK_ABBREVIATIONS[book.id] || book.id;
}

function measureTextWidth(text, font) {
  const canvas = measureTextWidth.canvas || (measureTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  if (!context) return String(text).length * 12;
  context.font = font;
  return context.measureText(String(text)).width;
}

function sidebarWidthForLanguage(language) {
  const interfaceFont = getComputedStyle(document.documentElement).fontFamily;
  const widestCellContent = Math.max(...BOOKS.map((book) => {
    const nameWidth = measureTextWidth(bookNameForLanguage(book, language), `400 11px ${interfaceFont}`);
    const abbreviationWidth = measureTextWidth(bookAbbreviationForLanguage(book, language), '700 19px Georgia');
    return Math.max(nameWidth, abbreviationWidth);
  }));
  const columns = 4;
  const cellHorizontalSpace = 24;
  const gridGaps = 6 * (columns - 1);
  const sidebarPadding = 36;
  return Math.max(380, Math.ceil((widestCellContent + cellHorizontalSpace) * columns + gridGaps + sidebarPadding));
}

function getVerseText(versionId, bookId, chapter, verse) {
  return state.versions.get(versionId)?.verses.get(`${bookId}.${chapter}.${verse}`) || '（此版本暂无该节内容）';
}

function render() {
  document.documentElement.dataset.theme = state.darkMode ? 'dark' : 'light';
  document.documentElement.lang = state.uiLanguage;
  document.documentElement.style.setProperty('--reader-scale', String(state.fontScale));
  document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidthForLanguage(state.uiLanguage)}px`);

  if (state.loading) {
    app.innerHTML = `
      <div class="loading-screen">
        <div class="brand-lockup compact">
          <span class="brand-mark">7</span>
          <span>7bible</span>
        </div>
        <div class="loading-line"><span></span></div>
        <p>${t('loading')}</p>
      </div>
    `;
    return;
  }

  if (state.error) {
    app.innerHTML = `
      <div class="error-screen">
        <div class="brand-mark large">7</div>
        <h1>${t('loadFailed')}</h1>
        <p>${escapeHtml(state.error)}</p>
        <button class="button primary" data-action="retry">${t('reload')}</button>
      </div>
    `;
    return;
  }

  const book = currentBook();
  const selectedVersions = state.selectedVersionIds
    .map((id) => state.versions.get(id))
    .filter(Boolean);
  const verseNumbers = chapterVerseNumbers(book.id, state.selectedChapter);
  const canGoPrevious = state.selectedChapter > 1 || BOOKS.findIndex((item) => item.id === book.id) > 0;
  const canGoNext = state.selectedChapter < chapterCount(book.id) || BOOKS.findIndex((item) => item.id === book.id) < BOOKS.length - 1;

  app.innerHTML = `
    <div class="app-shell ${state.sidebarOpen ? 'sidebar-visible' : ''}">
      ${renderSidebar(state.uiLanguage)}
      <main class="main-pane">
        ${renderTopbar()}
        <div class="main-scroll">
          <section class="reader-heading">
            <div>
              <div class="eyebrow">${t('scriptureReader')} <span class="eyebrow-dot"></span> ${selectedVersions.length} ${t('versionsUnit')}</div>
              <div class="chapter-title-row">
                <button class="chapter-stepper" data-action="previous-chapter" aria-label="${t('previousChapter')}" ${canGoPrevious ? '' : 'disabled'}>←</button>
                <h1>${escapeHtml(bookNameForLanguage(book))} <span>${state.selectedChapter}</span></h1>
                <button class="chapter-stepper" data-action="next-chapter" aria-label="${t('nextChapter')}" ${canGoNext ? '' : 'disabled'}>→</button>
                ${renderChapterStrip(chapterNumbers(book.id))}
              </div>
              <p class="chapter-subtitle">${escapeHtml(book.en)} · ${state.selectedChapter} ${t('chapterUnit')} <span class="heading-rule"></span> ${verseNumbers.length} ${t('verseUnit')}</p>
            </div>
            <div class="heading-actions">
              <div class="font-stepper" role="group" aria-label="${t('font')}" title="${t('font')}">
                <span class="font-stepper-icon text-icon" aria-hidden="true">A</span>
                <button class="font-stepper-button" data-action="decrease-font" aria-label="${t('decreaseFont')}" title="${t('decreaseFont')}" ${state.fontScale <= FONT_SCALE_MIN ? 'disabled' : ''}>−</button>
                <span class="font-stepper-value" aria-live="polite">${Math.round(state.fontScale * 100)}%</span>
                <button class="font-stepper-button" data-action="increase-font" aria-label="${t('increaseFont')}" title="${t('increaseFont')}" ${state.fontScale >= FONT_SCALE_MAX ? 'disabled' : ''}>＋</button>
              </div>
              <button class="quiet-button ${state.darkMode ? 'is-active' : ''}" data-action="toggle-theme" title="${state.darkMode ? t('light') : t('dark')}"><span class="text-icon">◐</span><span>${state.darkMode ? t('light') : t('dark')}</span></button>
            </div>
          </section>

          <section class="version-toolbar">
            <div class="version-toolbar-copy">
              <span class="tiny-label">${t('compareVersions')}</span>
              <div class="version-pills">
                ${selectedVersions.map((version) => `<span class="version-pill" style="--pill-accent:${version.definition.accent}">${escapeHtml(version.definition.short)}</span>`).join('')}
              </div>
              <span class="muted-text">${t('addCompareHint')}</span>
            </div>
            <button class="button secondary" data-action="toggle-version-panel"><span class="button-icon">＋</span> ${t('manageVersions')}</button>
          </section>

          <section class="reader-card ${selectedVersions.length > 1 ? 'compare-mode' : 'single-mode'}" style="--version-columns:${Math.max(selectedVersions.length, 1)}">
            <div class="reader-card-topline">
              <span>${escapeHtml(bookNameForLanguage(book))}</span>
              <span class="reading-position">${book.abbr} ${state.selectedChapter}</span>
            </div>
            <div class="verse-list">
              ${verseNumbers.length ? verseNumbers.map((verseNumber, index) => renderVerseRow(verseNumber, selectedVersions, index)).join('') : renderEmptyVerseState()}
            </div>
            <div class="chapter-endnote">
              <span class="endnote-line"></span>
              <span>${t('chapterEnd')}</span>
              <span class="endnote-line"></span>
            </div>
          </section>

          <footer class="reader-footer">
            <div class="reader-footer-meta">
              <span>${t('scriptureSource')}</span>
              <span>${t('positionSaved')}</span>
            </div>
            <div class="chapter-navigation" aria-label="${t('chapterLabel')}">
              <button class="chapter-stepper" data-action="previous-chapter" aria-label="${t('previousChapter')}" title="${t('previousChapter')}" ${canGoPrevious ? '' : 'disabled'}>←</button>
              <span class="chapter-navigation-title">${escapeHtml(bookNameForLanguage(book))} <span>${state.selectedChapter}</span></span>
              <button class="chapter-stepper" data-action="next-chapter" aria-label="${t('nextChapter')}" title="${t('nextChapter')}" ${canGoNext ? '' : 'disabled'}>→</button>
            </div>
          </footer>
        </div>
      </main>
      ${state.versionPanelOpen ? renderVersionPanel() : ''}
      ${state.searchOpen ? renderSearchPanel() : ''}
      ${state.contextMenu ? renderContextMenu() : ''}
      ${state.toast ? `<div class="toast" role="status">${escapeHtml(state.toast)}</div>` : ''}
    </div>
  `;

  bindEvents();
}

function renderSidebar(language) {
  const visibleBooks = state.testament === 'old' ? BOOKS.slice(0, 39) : BOOKS.slice(39);

  return `
    <aside class="sidebar ${state.sidebarOpen ? '' : 'is-hidden'}" lang="${escapeHtml(language)}">
      <div class="sidebar-brand">
        <div class="brand-lockup">
          <span class="brand-mark">7</span>
          <span class="brand-name">7bible</span>
        </div>
        <div class="sidebar-brand-actions">
          <a class="app-download-link" href="${APP_STORE_URL}" target="_blank" rel="noopener noreferrer" aria-label="${t('downloadApp')}" title="${t('downloadApp')}">
            <span class="app-download-icon" aria-hidden="true">↗</span>
            <span>${t('downloadApp')}</span>
          </a>
          <button class="sidebar-close" data-action="toggle-sidebar" aria-label="关闭目录">×</button>
        </div>
      </div>

      <div class="sidebar-nav">
        <button class="sidebar-nav-item active"><span class="nav-symbol">⌂</span><span>${t('reader')}</span><span class="nav-count">LIVE</span></button>
        <!--
        <button class="sidebar-nav-item" data-action="show-toast" data-toast="${escapeHtml(t('annotationsSoon'))}"><span class="nav-symbol">✦</span><span>${t('annotations')}</span></button>
        <button class="sidebar-nav-item" data-action="show-toast" data-toast="${escapeHtml(t('plansSoon'))}"><span class="nav-symbol">◷</span><span>${t('plans')}</span></button>
        -->
      </div>

      <div class="sidebar-section-heading">
        <div><span class="tiny-label">BIBLE INDEX</span><strong>${t('index')}</strong></div>
        <span class="book-total">${t('books', { count: 66 })}</span>
      </div>

      <div class="testament-tabs" role="tablist" aria-label="${t('testamentSelection')}">
        <button class="testament-tab ${state.testament === 'old' ? 'active' : ''}" data-action="set-testament" data-value="old">${t('oldTestament')} <span>39</span></button>
        <button class="testament-tab ${state.testament === 'new' ? 'active' : ''}" data-action="set-testament" data-value="new">${t('newTestament')} <span>27</span></button>
      </div>

      <div class="book-grid">
        ${visibleBooks.map((book) => `
          <button class="book-tile ${book.id === state.selectedBookId ? 'selected' : ''}" data-action="select-book" data-book="${book.id}">
            <span class="book-abbr">${escapeHtml(bookAbbreviationForLanguage(book, language))}</span>
            <span class="book-name">${escapeHtml(bookNameForLanguage(book, language))}</span>
          </button>
        `).join('')}
      </div>

      <div class="sidebar-footer">
        <div class="local-data"><span class="status-dot"></span><span>${t('localReady')}</span></div>
        <span class="build-label">WEB 1.0</span>
      </div>
    </aside>
  `;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="topbar-left">
        <button class="menu-button" data-action="toggle-sidebar" aria-label="${t('index')}">☰</button>
        <div class="breadcrumb"><span class="breadcrumb-muted">${t('reader')}</span><span>/</span><strong>${escapeHtml(bookNameForLanguage(currentBook()))} ${state.selectedChapter}</strong></div>
      </div>
      <div class="topbar-actions">
        <button class="search-trigger" data-action="toggle-search"><span class="search-symbol">⌕</span><span>${t('search')}</span><kbd>⌘ K</kbd></button>
        <label class="language-picker" title="${t('language')}">
          <span class="language-symbol">文</span>
          <select id="ui-language-select" class="language-select" aria-label="${t('language')}">
            ${UI_LANGUAGES.map((language) => `<option value="${language.id}" ${state.uiLanguage === language.id ? 'selected' : ''}>${language.label}</option>`).join('')}
          </select>
        </label>
        <!-- <button class="profile-button" data-action="show-toast" data-toast="${escapeHtml(t('welcome'))}"><span>MJ</span></button> -->
      </div>
    </header>
  `;
}

function renderChapterStrip(chapters) {
  return `
    <div class="chapter-strip" title="${t('chapterLabel')}">
      <span class="chapter-strip-label">${t('chapterLabel')}</span>
      <div class="chapter-strip-scroll">
        ${chapters.map((chapter) => `<button class="chapter-strip-chip ${chapter === state.selectedChapter ? 'selected' : ''}" data-action="select-chapter" data-chapter="${chapter}">${chapter}</button>`).join('')}
      </div>
    </div>
  `;
}

function renderVerseRow(verseNumber, selectedVersions, index) {
  const book = currentBook();
  return `
    <article class="verse-row ${index === 0 ? 'first-verse' : ''}" id="verse-${verseNumber}">
      <div class="verse-number"><span>${verseNumber}</span></div>
      <div class="verse-columns">
        ${selectedVersions.map((version) => `
          <div class="translation-cell" data-verse-cell="true" data-version="${version.definition.id}" data-verse="${verseNumber}">
            <span class="translation-meta"><span class="translation-badge" style="--badge-accent:${version.definition.accent}">${escapeHtml(version.definition.short)}</span><span>${escapeHtml(version.definition.language)}</span></span>
            <span class="translation-text" lang="${version.definition.languageCode}">${renderVerseText(getVerseText(version.definition.id, book.id, state.selectedChapter, verseNumber))}</span>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}

function renderContextMenu() {
  const menu = state.contextMenu;
  const searchLabel = menu.isChinese ? t('contextSearchBaidu') : t('contextSearchGoogle');
  return `
    <div class="context-menu" style="left:${menu.x}px;top:${menu.y}px" role="menu" aria-label="${t('contextSearch')}">
      <button data-action="context-copy" role="menuitem"><span>⧉</span>${t('contextCopy')}</button>
      <button data-action="context-search" role="menuitem"><span>⌕</span>${searchLabel}</button>
    </div>
  `;
}

function renderEmptyVerseState() {
  return `
    <div class="empty-state">
      <div class="empty-icon">⌁</div>
      <h3>${t('emptyChapter')}</h3>
      <p>${t('emptyChapterHint')}</p>
    </div>
  `;
}

function renderVersionPanel() {
  return `
    <div class="overlay-layer" data-action="close-version-panel"></div>
    <section class="floating-panel version-panel" role="dialog" aria-modal="true" aria-label="${t('manageVersions')}">
      <div class="floating-panel-header">
        <div><span class="tiny-label">COMPARE MODE</span><h2>${t('versionPanelTitle')}</h2></div>
        <button class="icon-button" data-action="toggle-version-panel" aria-label="${t('close')}">×</button>
      </div>
      <p class="panel-description">${t('versionPanelDescription')}</p>
      <div class="version-option-list">
        ${VERSION_DEFINITIONS.map((definition) => {
          const selected = state.selectedVersionIds.includes(definition.id);
          const loaded = state.versions.has(definition.id);
          return `
            <label class="version-option ${selected ? 'selected' : ''} ${loaded ? '' : 'loading'}">
              <input type="checkbox" data-version-checkbox="${definition.id}" ${selected ? 'checked' : ''} ${loaded ? '' : 'disabled'} />
              <span class="custom-checkbox">✓</span>
              <span class="option-copy"><strong>${escapeHtml(definition.short)}</strong><span>${escapeHtml(definition.title)}</span></span>
              <span class="option-language">${escapeHtml(definition.language)}</span>
            </label>
          `;
        }).join('')}
      </div>
      <div class="panel-footer"><span>${t('selectedVersions', { count: state.selectedVersionIds.length })}</span><button class="button primary" data-action="toggle-version-panel">${t('done')}</button></div>
    </section>
  `;
}

function renderSearchPanel() {
  const hasResults = state.searchQuery.trim().length > 0;
  return `
    <div class="overlay-layer search-overlay" data-action="close-search"></div>
    <section class="floating-panel search-panel" role="dialog" aria-modal="true" aria-label="${t('search')}">
      <div class="search-panel-header">
        <div class="search-input-wrap"><span class="search-symbol">⌕</span><input id="search-input" value="${escapeHtml(state.searchQuery)}" placeholder="${t('searchPlaceholder')}" autocomplete="off" /></div>
        <button class="icon-button" data-action="close-search" aria-label="${t('close')}">×</button>
      </div>
      <div id="search-results-content">${hasResults ? renderSearchResults() : `<div class="search-hint"><span class="hint-icon">⌖</span><p>${t('searchHint')}</p><span>${t('searchEnter')}</span></div>`}</div>
    </section>
  `;
}

function renderSearchResults() {
  if (!state.searchResults.length) return `<div class="search-empty">${t('noResults', { query: escapeHtml(state.searchQuery) })}</div>`;
  return `
    <div class="search-result-heading">${t('found', { count: state.searchResults.length })}</div>
    <div class="search-results">
      ${state.searchResults.slice(0, 30).map((result) => `
        <button class="search-result" data-action="jump-to-result" data-book="${result.bookId}" data-chapter="${result.chapter}" data-verse="${result.verse}">
          <span class="result-reference">${escapeHtml(bookNameForLanguage(result.book))} ${result.chapter}:${result.verse}</span>
          <span class="result-version">${escapeHtml(result.version.short)}</span>
          <span class="result-text">${highlightMatch(result.text, state.searchQuery)}</span>
        </button>
      `).join('')}
    </div>
  `;
}

function bindActionElements(root = document) {
  root.querySelectorAll('[data-action]').forEach((element) => {
    element.addEventListener('click', handleAction);
  });
}

function bindEvents() {
  bindActionElements();

  document.querySelectorAll('[data-verse-cell]').forEach((cell) => {
    cell.addEventListener('contextmenu', handleVerseContextMenu);
  });

  document.querySelectorAll('[data-version-checkbox]').forEach((input) => {
    input.addEventListener('change', () => toggleVersion(input.dataset.versionCheckbox, input.checked));
  });

  const languageSelect = document.querySelector('#ui-language-select');
  if (languageSelect) {
    languageSelect.addEventListener('change', (event) => {
      state.uiLanguage = event.target.value;
      localStorage.setItem('7bible.uiLanguage', state.uiLanguage);
      render();
    });
  }

  const searchInput = document.querySelector('#search-input');
  if (searchInput) {
    searchInput.focus({ preventScroll: true });
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    searchInput.addEventListener('input', (event) => {
      state.searchQuery = event.target.value;
      if (state.searchQuery.trim().length >= 2) {
        state.searchResults = runSearch(state.searchQuery);
      } else {
        state.searchResults = [];
      }
      const resultsContent = document.querySelector('#search-results-content');
      if (resultsContent) {
        resultsContent.innerHTML = state.searchQuery.trim().length ? renderSearchResults() : `<div class="search-hint"><span class="hint-icon">⌖</span><p>${t('searchHint')}</p><span>${t('searchEnter')}</span></div>`;
        bindActionElements(resultsContent);
      }
    });
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        state.searchOpen = false;
        render();
      }
    });
  }
}

function handleVerseContextMenu(event) {
  event.preventDefault();
  const cell = event.currentTarget;
  const selection = window.getSelection();
  const selectedText = selection?.toString().trim() || '';
  const selectionInsideCell = selection?.rangeCount && cell.contains(selection.anchorNode) && cell.contains(selection.focusNode);
  const text = selectionInsideCell && selectedText ? selectedText : cell.querySelector('.translation-text')?.textContent?.trim() || '';
  if (!text) return;

  const selectionSnapshot = selectionInsideCell && selectedText
    ? captureContextSelection(cell, selection)
    : null;
  const menuWidth = 218;
  const menuHeight = 96;
  state.contextMenu = {
    x: Math.max(8, Math.min(event.clientX, window.innerWidth - menuWidth - 8)),
    y: Math.max(8, Math.min(event.clientY, window.innerHeight - menuHeight - 8)),
    text,
    isChinese: isChineseText(text),
    selection: selectionSnapshot,
  };
  render();
  restoreContextSelection(selectionSnapshot);
}

function captureContextSelection(cell, selection) {
  if (!selection?.rangeCount) return null;
  const root = cell.querySelector('.translation-text');
  const range = selection.getRangeAt(0);
  if (!root || !root.contains(range.startContainer) || !root.contains(range.endContainer)) return null;

  return {
    versionId: cell.dataset.version,
    verse: cell.dataset.verse,
    anchorOffset: textOffsetAt(root, selection.anchorNode, selection.anchorOffset),
    focusOffset: textOffsetAt(root, selection.focusNode, selection.focusOffset),
  };
}

function textOffsetAt(root, node, offset) {
  const range = document.createRange();
  range.selectNodeContents(root);
  range.setEnd(node, offset);
  return range.toString().length;
}

function textPositionAt(root, offset) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let remaining = Math.max(0, offset);
  let lastTextNode = null;
  let textNode = walker.nextNode();

  while (textNode) {
    lastTextNode = textNode;
    if (remaining <= textNode.nodeValue.length) {
      return { node: textNode, offset: remaining };
    }
    remaining -= textNode.nodeValue.length;
    textNode = walker.nextNode();
  }

  return lastTextNode
    ? { node: lastTextNode, offset: lastTextNode.nodeValue.length }
    : { node: root, offset: root.childNodes.length };
}

function restoreContextSelection(snapshot) {
  if (!snapshot) return;
  const cell = [...document.querySelectorAll('[data-verse-cell]')].find((candidate) => {
    return candidate.dataset.version === snapshot.versionId && candidate.dataset.verse === snapshot.verse;
  });
  const root = cell?.querySelector('.translation-text');
  const selection = window.getSelection();
  if (!root || !selection) return;

  const anchor = textPositionAt(root, snapshot.anchorOffset);
  const focus = textPositionAt(root, snapshot.focusOffset);
  selection.removeAllRanges();

  if (typeof selection.setBaseAndExtent === 'function') {
    selection.setBaseAndExtent(anchor.node, anchor.offset, focus.node, focus.offset);
    return;
  }

  const range = document.createRange();
  const start = snapshot.anchorOffset <= snapshot.focusOffset ? anchor : focus;
  const end = snapshot.anchorOffset <= snapshot.focusOffset ? focus : anchor;
  range.setStart(start.node, start.offset);
  range.setEnd(end.node, end.offset);
  selection.addRange(range);
}

function isChineseText(text) {
  return /[\u3400-\u4dbf\u4e00-\u9fff]/u.test(text) && !/[\u3040-\u30ff]/u.test(text);
}

async function copyText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Use the legacy path below when clipboard permissions are unavailable.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();
  return copied;
}

function handleAction(event) {
  const target = event.currentTarget;
  const action = target.dataset.action;
  if (!action) return;

  if (action === 'toggle-sidebar') {
    state.sidebarOpen = !state.sidebarOpen;
    render();
    return;
  }

  if (action === 'set-testament') {
    state.testament = target.dataset.value;
    const fallbackBook = state.testament === 'old' ? BOOKS[0] : BOOKS[39];
    if ((state.testament === 'old' && !OLD_TESTAMENT_IDS.has(state.selectedBookId)) || (state.testament === 'new' && OLD_TESTAMENT_IDS.has(state.selectedBookId))) {
      state.selectedBookId = fallbackBook.id;
      state.selectedChapter = 1;
      persistPosition();
    }
    localStorage.setItem('7bible.testament', state.testament);
    render();
    return;
  }

  if (action === 'select-book') {
    state.selectedBookId = target.dataset.book;
    state.selectedChapter = 1;
    state.testament = OLD_TESTAMENT_IDS.has(state.selectedBookId) ? 'old' : 'new';
    persistPosition();
    render();
    return;
  }

  if (action === 'select-chapter') {
    state.selectedChapter = Number(target.dataset.chapter);
    persistPosition();
    render();
    scrollToTop();
    return;
  }

  if (action === 'previous-chapter') {
    moveChapter(-1);
    return;
  }

  if (action === 'next-chapter') {
    moveChapter(1);
    return;
  }

  if (action === 'toggle-version-panel') {
    state.versionPanelOpen = !state.versionPanelOpen;
    render();
    return;
  }

  if (action === 'close-version-panel') {
    state.versionPanelOpen = false;
    render();
    return;
  }

  if (action === 'toggle-search') {
    state.searchOpen = true;
    state.searchQuery = '';
    state.searchResults = [];
    render();
    return;
  }

  if (action === 'close-search') {
    state.searchOpen = false;
    render();
    return;
  }

  if (action === 'context-copy') {
    const text = state.contextMenu?.text;
    state.contextMenu = null;
    if (text) {
      copyText(text).then((copied) => {
        if (copied) showToast(t('copySuccess'));
      });
    }
    render();
    return;
  }

  if (action === 'context-search') {
    const menu = state.contextMenu;
    state.contextMenu = null;
    if (!menu?.text) {
      render();
      return;
    }
    const searchUrl = menu.isChinese
      ? `https://www.baidu.com/s?wd=${encodeURIComponent(menu.text)}`
      : `https://www.google.com/search?q=${encodeURIComponent(menu.text)}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
    render();
    return;
  }

  if (action === 'jump-to-result') {
    state.selectedBookId = target.dataset.book;
    state.selectedChapter = Number(target.dataset.chapter);
    state.testament = OLD_TESTAMENT_IDS.has(state.selectedBookId) ? 'old' : 'new';
    state.searchOpen = false;
    persistPosition();
    render();
    setTimeout(() => document.querySelector(`#verse-${target.dataset.verse}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60);
    return;
  }

  if (action === 'toggle-theme') {
    state.darkMode = !state.darkMode;
    localStorage.setItem('7bible.darkMode', String(state.darkMode));
    render();
    return;
  }

  if (action === 'decrease-font' || action === 'increase-font') {
    const direction = action === 'decrease-font' ? -1 : 1;
    state.fontScale = Number(Math.min(
      FONT_SCALE_MAX,
      Math.max(FONT_SCALE_MIN, state.fontScale + direction * FONT_SCALE_STEP),
    ).toFixed(2));
    localStorage.setItem('7bible.fontScale', String(state.fontScale));
    showToast(t('fontAdjusted', { value: Math.round(state.fontScale * 100) }));
    return;
  }

  if (action === 'copy-verse') {
    const version = state.versions.get(target.dataset.version);
    const text = getVerseText(target.dataset.version, state.selectedBookId, state.selectedChapter, Number(target.dataset.verse));
    const copyText = `${bookNameForLanguage(currentBook())} ${state.selectedChapter}:${target.dataset.verse} · ${version.definition.short}\n${text}`;
    navigator.clipboard?.writeText(copyText).catch(() => undefined);
    showToast(t('copySuccess'));
    return;
  }

  if (action === 'show-toast') {
    showToast(target.dataset.toast || '已完成');
    return;
  }

  if (action === 'retry') {
    initialize();
  }
}

function toggleVersion(versionId, checked) {
  if (checked) {
    if (!state.selectedVersionIds.includes(versionId)) state.selectedVersionIds.push(versionId);
  } else {
    state.selectedVersionIds = state.selectedVersionIds.filter((id) => id !== versionId);
  }

  if (!state.selectedVersionIds.length) state.selectedVersionIds = ['chius'];
  localStorage.setItem('7bible.selectedVersions', JSON.stringify(state.selectedVersionIds));
  render();
}

function moveChapter(direction) {
  const bookIndex = BOOKS.findIndex((book) => book.id === state.selectedBookId);
  const chapters = chapterNumbers(state.selectedBookId);
  const currentIndex = chapters.indexOf(state.selectedChapter);
  const nextIndex = currentIndex + direction;

  if (nextIndex >= 0 && nextIndex < chapters.length) {
    state.selectedChapter = chapters[nextIndex];
  } else {
    const nextBookIndex = bookIndex + direction;
    if (nextBookIndex < 0 || nextBookIndex >= BOOKS.length) return;
    state.selectedBookId = BOOKS[nextBookIndex].id;
    state.testament = nextBookIndex < 39 ? 'old' : 'new';
    const nextChapters = chapterNumbers(state.selectedBookId);
    state.selectedChapter = direction > 0 ? nextChapters[0] : nextChapters.at(-1);
  }
  persistPosition();
  render();
  scrollToTop();
}

function persistPosition() {
  localStorage.setItem('7bible.book', state.selectedBookId);
  localStorage.setItem('7bible.chapter', String(state.selectedChapter));
  localStorage.setItem('7bible.testament', state.testament);
}

function scrollToTop() {
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

function runSearch(query) {
  const normalizedQuery = query.trim().toLowerCase();
  const results = [];
  state.versions.forEach((version) => {
    version.verses.forEach((text, key) => {
      if (!text.toLowerCase().includes(normalizedQuery)) return;
      const [bookId, chapter, verse] = key.split('.');
      const book = BOOKS.find((item) => item.id === bookId);
      if (book) results.push({ book, bookId, chapter: Number(chapter), verse: Number(verse), text, version: version.definition });
    });
  });
  return results.sort((a, b) => a.bookId.localeCompare(b.bookId) || a.chapter - b.chapter || a.verse - b.verse).slice(0, 60);
}

function showToast(message) {
  state.toast = message;
  render();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = '';
    render();
  }, 2800);
}

async function initialize() {
  state.loading = true;
  state.error = '';
  render();
  if (window.location.protocol === 'file:') {
    state.loading = false;
    state.error = t('serverHint');
    render();
    return;
  }
  try {
    await loadBibleVersions();
    if (!state.versions.has(state.selectedVersionIds[0])) state.selectedVersionIds = ['chius'];
    const selectedBookExists = primaryVersion()?.chaptersByBook.has(state.selectedBookId);
    if (!selectedBookExists) {
      state.selectedBookId = 'Gen';
      state.selectedChapter = 1;
      state.testament = 'old';
      persistPosition();
    }
    state.selectedChapter = chapterNumbers(state.selectedBookId).includes(state.selectedChapter) ? state.selectedChapter : 1;
    state.loading = false;
    render();
  } catch (error) {
    state.loading = false;
    state.error = error instanceof Error ? error.message : t('serverHint');
    render();
  }
}

window.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    state.searchOpen = true;
    render();
  }
  if (event.key === 'Escape' && state.versionPanelOpen) {
    state.versionPanelOpen = false;
    render();
  }
  if (event.key === 'Escape' && state.contextMenu) {
    state.contextMenu = null;
    render();
  }
});

window.addEventListener('click', (event) => {
  if (!state.contextMenu || event.target.closest('.context-menu')) return;
  state.contextMenu = null;
  render();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && !state.sidebarOpen) {
    state.sidebarOpen = true;
    render();
  }
});

initialize();
