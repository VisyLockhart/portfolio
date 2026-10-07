// 所有頁面文字(繁中 / 英文)。公開內容規則見 Aequor Eranos Project 的 D-169、D-173。
export const GITHUB = 'https://github.com/VisyLockhart';
export const LINKS = {
  demo: 'https://demo.eranaut.aequoreranos.com/',
  eranautRepo: `${GITHUB}/eranaut-pwa`,
  eranautArchZh: `${GITHUB}/eranaut-pwa/blob/main/docs/ARCHITECTURE.md`,
  eranautArchEn: `${GITHUB}/eranaut-pwa/blob/main/docs/ARCHITECTURE.en.md`,
  eranarchRepo: `${GITHUB}/eranarch-bot`,
  unityRepo: `${GITHUB}/submarine-voyage-demo`,
  unityRelease: `${GITHUB}/submarine-voyage-demo/releases/tag/v1.0.0`,
  unityGdd: `${GITHUB}/submarine-voyage-demo/blob/HEAD/docs/GDD.md`,
};

const zh = {
  htmlLang: 'zh-TW',
  ogLocale: 'zh_TW',
  name: 'Visy Lockhart',
  role: '全端開發者 · 遊戲開發學習中',
  skip: '跳到主要內容',
  nav: { eranaut: 'Eranaut', eranarch: 'Eranarch', game: '遊戲開發學習中', about: '關於我', home: '首頁' },
  switchTo: 'English',
  switchLabel: '切換成英文',
  themeLabel: '切換淺色 / 深色主題',
  footer: {
    copy: '© 2026 Visy Lockhart',
    disclaimer:
      'Eranaut 與 Eranarch 為非官方粉絲工具,與 SQUARE ENIX CO., LTD. 無關,僅供社群內部使用,不得用於商業用途。',
  },
  common: {
    demo: '線上展示',
    source: '原始碼',
    release: 'Windows 版 Release',
    gdd: 'GDD 文件',
    arch: '完整架構說明(GitHub)',
    github: 'GitHub',
    mail: '寄信給我',
    mailDone: '已開啟郵件程式',
    stack: '技術棧',
    features: '功能',
    tradeoffs: '設計取捨',
    done: '已完成',
    planned: '計畫中',
    more: '了解更多',
    projects: '精選專案',
    contact: '聯絡',
    breadcrumbHome: '首頁',
  },
  home: {
    title: 'Visy Lockhart — 全端開發者(.NET · Angular)作品集',
    description:
      '7 年以上 .NET 後端與全端經驗。作品:Eranaut(Angular PWA + Fastify + OCR + Docker 自架上線)、Eranarch(Discord bot)、Unity 小型遊戲 demo。',
    badge: '全端開發 · Full-stack',
    h1: '把社群的小麻煩,做成真的上線的產品。',
    lead:
      'Hi,我是 Visy Lockhart。從 Angular PWA、Fastify API、OCR 辨識到 Docker 與 Cloudflare Tunnel 部署,一個人把 Eranaut 從畫面做到上線。',
    ctaPrimary: '看 Eranaut',
    ctaSecondary: '關於我',
    avatarAlt: '藍色貓咪插圖(AI 生成)',
    cards: [
      {
        slug: 'eranaut',
        title: 'Eranaut',
        text: 'FFXIV 玩家社群的潛水艇返航倒數 PWA。Angular、Fastify、SQLite、OCR、Web Push,Docker 自架上線。',
        tags: ['Angular', 'Fastify', 'OCR', 'Docker'],
      },
      {
        slug: 'eranarch',
        title: 'Eranarch',
        text: 'Discord bot:暱稱同步、身份組與頻道設定即時讀取、管理員與成員指令。',
        tags: ['discord.js', 'Node.js', 'Docker'],
      },
      {
        slug: 'game-dev',
        title: '遊戲開發學習中',
        text: '已完成 Unity 小型遊戲 demo 與 GDD,期待在實務中學習 UE5 與 GAS。',
        tags: ['Unity', 'C#', 'GDD'],
      },
    ],
    contactText: '想聊聊合作或職缺,歡迎來信或到 GitHub 看原始碼。',
  },
  eranaut: {
    title: 'Eranaut — FFXIV 潛水艇返航倒數 PWA(Angular + Fastify + OCR)',
    description:
      'Eranaut 是為 FFXIV 玩家社群做的潛水艇返航倒數與提醒 PWA:Angular、Fastify、SQLite、截圖 OCR、Web Push,以 Docker 自架上線。',
    h1: 'Eranaut',
    sub: 'FFXIV 玩家社群的潛水艇返航倒數 PWA',
    overview:
      'Eranaut 讓玩家記錄潛水艇的返航時間,到時間時透過 Discord 私訊、頻道 @ 或瀏覽器推播提醒。目前提供給約百人的社群內部使用。從畫面、API、截圖辨識到部署都由我一人完成,並與 AI 協作開發:需求、設計決策與實機驗證由我負責,每個決定都記錄在決策文件中。',
    features: [
      'Discord OAuth2 登入與身份組權限(規則可用 AND / OR 組合)',
      '截圖辨識:PP-OCRv4 自架,不連外部服務、辨識完不存檔,支援貼上與擷取畫面',
      '三種提醒:Discord 私訊、頻道 @、瀏覽器推播(Web Push)',
      'PWA:手機與桌機介面、介面大小切換、殼層離線載入',
      '管理員與成員指令(透過 Eranarch bot 呼叫內部 API)',
    ],
    stack: [
      'Angular · TypeScript',
      'Fastify · Node.js',
      'SQLite (better-sqlite3)',
      'PP-OCRv4 (onnxruntime-node)',
      'Web Push',
      'Docker',
      'Cloudflare Tunnel + Caddy',
    ],
    tradeoffs: [
      '登入用伺服器端 session cookie 而不是 JWT:只有單一 API 與 SQLite,可即時撤銷登入。',
      '公開埠與內部埠兩個入口、共用同一套 service 層:bot 只能走內部埠,外網結構上碰不到。',
      'OCR 自架於同一程序,不連外部服務、不存圖:隱私與成本都比較好控制。',
      '提醒用 upsert、全系統只有兩個排程:資料量有上限,不需要清理排程。',
    ],
    challengeH: '最有挑戰的部分:OCR 與 Docker 部署',
    challenge:
      'OCR 以 11 張真實截圖加 77 張劣化圖驗證(單艘辨識約 99.5%),並在 Windows x64 與 Linux arm64 兩個平台跑完整測試。Docker 在 arm64 上遇到原生套件(better-sqlite3、onnxruntime-node)的建置問題,逐一排除後在自有主機上線。',
    archH: '系統架構',
    diagram: {
      scrollLabel: '架構圖(可左右捲動)',
      title: 'Eranaut 系統架構圖',
      desc: '瀏覽器經 Cloudflare Tunnel 與 Caddy 連到 Eranaut API 的公開埠;Eranarch bot 只經內部埠;兩個入口共用同一個 service 與 repository 層,底下是 SQLite、OCR 與兩個排程;排程透過 Discord API 與 Web Push 服務發送提醒。',
      host: '自有主機 · Docker Compose',
      browser: '瀏覽器 / PWA',
      caddy: '靜態檔 + /api/*',
      bot: '/eran 指令',
      pub: '公開埠',
      pubSub: 'session cookie',
      int: '內部埠',
      intSub: '共用密鑰 Bearer',
      svc: 'service / repository 層',
      svcSub1: '業務邏輯與 SQL',
      svcSub2: '只放這一層',
      ocrSub: '同程序',
      sched: '排程 ×2',
      sched1: '提醒輪詢',
      sched2: '資格比對',
      push: 'Web Push 服務',
      gateway: 'Discord gateway',
      dm: 'DM · 頻道 @',
      caption: '主機不開任何 inbound port,對外只經 Cloudflare Tunnel;bot 與 API 在同一個 Docker network,以 service 名稱互相呼叫。虛線框為外部服務。',
    },
    shotsH: '畫面',
    shotDesktopAlt: 'Eranaut 桌機版總覽畫面,依返航時間排序的潛水艇列表(展示資料)',
    shotMobileAlt: 'Eranaut 手機版總覽畫面(展示資料)',
    shotNote: '截圖為展示版的假資料。',
  },
  eranarch: {
    title: 'Eranarch — Discord bot(discord.js · Node.js · Docker)',
    description:
      'Eranarch 是為 FFXIV 社群做的 Discord bot:事件驅動的暱稱同步、即時讀取頻道與身份組設定,並串接 Eranaut 的內部 API 提供成員與管理員指令。',
    h1: 'Eranarch',
    sub: '為同一個社群服務的 Discord bot',
    overview:
      'Eranarch 負責伺服器內的暱稱同步與設定,並作為 Eranaut 的 Discord 入口:成員可用指令查詢自己的潛水艇,管理員可停權與解除停權。',
    features: [
      '暱稱同步(事件驅動,不輪詢)',
      '即時讀取頻道與身份組設定',
      '管理員指令 /eran-m(停權、解除停權等),無權限者在 Discord 端就看不到',
      '成員指令 /eran submarines:查詢自己的工坊與潛水艇返航時間',
      '經內部 API 與 Eranaut 溝通,bot 不直接碰資料庫',
    ],
    stack: ['discord.js', 'Node.js', 'Docker'],
    note: '公開的 eranarch-bot 是精簡的 demo 版,不含依賴 Eranaut 內部埠的指令。',
  },
  game: {
    title: '遊戲開發學習中 — Unity 小型遊戲 demo 與學習計畫 | Visy Lockhart',
    description:
      '從 .NET 全端轉入遊戲開發:已完成 Unity 潛水艇出航小遊戲 demo 與 GDD(含原始碼與 Windows 版),期待在實務中學習 UE5 與 GAS。',
    h1: '遊戲開發學習中',
    sub: '我沒有遊戲業實務經驗,正在用自學的方式轉入遊戲開發。',
    intro:
      '過去的 Angular、Vue、OIDC、Docker 都是自學後實際上線的。我會用同樣的方式學習遊戲開發:先做出完整的小東西,寫下設計文件,再往下一個引擎走。',
    unityTitle: 'Submarine Voyage — Unity 小型遊戲 demo + GDD',
    unityText:
      '派潛水艇出航、等待返航、收穫資源的放置型小遊戲。4 艘潛艇依序解鎖、3 條航線、載貨量與航速升級(Lv1–5)、艦隊目標與完成視窗。',
    unityPoints: [
      '規則寫在不依賴 Unity 的純 C# 層;潛艇狀態由返航時間戳推算,因此可以做離線補算。',
      'JSON 存檔:先寫暫存檔再替換,壞檔備份;EditMode 測試 32 個。',
      '附一頁 GDD(玩法循環、MVP 範圍、數值、技術設計)與英文 README。',
      '與 AI 協作:我決定規格與驗證,程式碼由 AI 協助撰寫。',
    ],
    logH: '學習紀錄:三天做出 Submarine Voyage',
    logIntro: '邊做邊學 Hierarchy、Inspector、Canvas、Prefab、ScriptableObject、Layout Group 與錨點。',
    log: [
      {
        name: '試玩後調整',
        text: '用 600x 倍率很快就把四艘升滿,而且之後沒有目標,所以加上艦隊目標進度與完成視窗;航線視窗也改成顯示該艘潛艇實際的等待時間與收穫範圍。',
      },
      {
        name: '踩到的坑',
        text: 'Canvas Scaler 原本的設定在 4:3 視窗會裁掉卡片,改成 Expand 並固定卡片寬度。',
      },
    ],
    planH: '接下來',
    plan: [
      { name: 'UE5', text: '期待在實務中學習 UE5,從連線、3D 取向的專案開始累積經驗。' },
      {
        name: 'GAS 概念筆記',
        text: '閱讀官方 GAS 文件,寫一頁自己的筆記:Ability、Attribute Set、Gameplay Effect、Gameplay Tag 的分工。',
      },
    ],
  },
  about: {
    title: '關於我 — Visy Lockhart,7 年以上 .NET 後端與全端工程師',
    description:
      '7 年以上 .NET 後端與全端經驗(ASP.NET Core、Entity Framework Core、Angular),做過金流、股務、醫療資訊與航空 CMS 系統,現在自學遊戲開發。',
    h1: '關於我',
    intro:
      '我是 Visy Lockhart,有 7 年以上 .NET 後端與全端經驗(ASP.NET Core、Entity Framework、Angular),做過金流、股務、醫療資訊與航空 CMS 系統。我也是 FFXIV 玩家,為玩家社群做了 Eranaut:從畫面、API、截圖 OCR 到 Docker 部署都由我完成的 PWA,搭配 Discord bot Eranarch。這是我第一次與 AI 協作開發。我對遊戲開發與 3D 有高度興趣。雖然目前還沒有實務經驗,但過去的 Angular、Vue、OIDC、Docker 我都是自學上手並實際上線,Eranaut 也是從零到部署完整做完。我有信心用同樣的方式完成學習目標。',
    avatarNote: '首頁插圖為 AI 生成(Grok)。',
    skillsH: '技能',
    skills: [
      ['程式語言(熟練度由高到低)', 'C# > JavaScript > TypeScript'],
      ['後端', '.NET Core / ASP.NET Core、Entity Framework Core、RESTful API、Razor Pages;Node.js(Fastify)'],
      ['前端', 'Angular、Vue、jQuery、HTML/CSS'],
      ['資料庫', 'MSSQL、Oracle、SQLite'],
      ['工程實務', 'Git、Code Review、xUnit、OIDC、Azure、Azure DevOps、Jenkins、Docker、Cloudflare Tunnel'],
      ['AI 協作開發', 'GitHub Copilot、Claude'],
      ['遊戲開發', 'Unity(一個完整 demo)'],
    ] as [string, string][],
    expH: '工作經歷',
    experience: [
      {
        company: '三宏科技',
        role: '後端工程師',
        period: '2024/7 – 2025/5',
        points: [
          '受邀加入遠端團隊,協助後端從 PHP 轉成 .NET Core。',
          '開發航空公司 CMS 的後台與 API,串接 API 並實作 audit log;開發同步信用卡資料與黑名單的排程。',
          '與 Flutter 行動應用團隊協作,完成商品出入庫與機上銷售的資料同步。',
        ],
        tech: '.NET Core、Entity Framework Core、Oracle、SQLite',
      },
      {
        company: '鼎盛佳科技',
        role: '主任工程師',
        period: '2022/3 – 2024/5',
        points: [
          '主導自建銷售獎金結算系統:在沒有既有程式碼與文件的情況下重新設計流程與演算法,取代使用 10 年、按電腦台數計價的外部付費系統,降低授權成本。',
          '負責系統開發與架構規劃,從需求分析到上線;另完成會員中心、公司官網與銷售系統後台。',
          '擔任面試官、篩選履歷並帶領新進工程師;學習 OIDC 與 PCI DSS 相關知識。',
        ],
        tech: '.NET Core、Entity Framework Core、Razor Pages、MSSQL、Angular、TypeScript',
      },
      {
        company: '昕力資訊',
        role: '資深工程師',
        period: '2020/4 – 2022/2',
        points: [
          '開發與維運金流相關的金融科技系統:股務系統維運、電子開會通知書、銷售管理後台、撥款與保險模組、金融機構官網後台。',
          '使用 Azure Web App、Azure DevOps、Jenkins 進行 CI/CD;與同事組織讀書會,定期分享所學。',
        ],
        tech: 'ASP.NET Core Web API、Entity Framework Core、MSSQL、Angular',
      },
      {
        company: '多奇數位創意',
        role: 'Web 開發工程師',
        period: '2018/6 – 2020/2',
        points: ['負責多個企業客戶的官網與站台開發、維運,以及跨國 CRM 行動系統與 API 開發;導入 Git 與 CI/CD 流程。'],
        tech: 'ASP.NET MVC / Web API、Entity Framework、MSSQL、Angular、Vue、jQuery',
      },
      {
        company: '高雄醫學大學附設中和醫院 資訊室',
        role: '資訊工程師',
        period: '2016/7 – 2018/5',
        points: ['參與醫院核心醫療資訊系統(HIS)的設計與開發:醫囑、批價計價、院內一卡通與轉診掛號模組,並串接第三方支付。'],
        tech: 'ASP.NET MVC / WebForm、Oracle PL/SQL、jQuery、Bootstrap',
      },
    ],
    eduH: '學歷與語言',
    edu: ['正修科技大學 資訊工程系(四技),2012/9 – 2014/6', '英文:讀寫中等,聽說基礎'],
    techLabel: '技術',
  },
  notFound: {
    title: '找不到頁面 — Visy Lockhart',
    h1: '找不到這個頁面',
    text: '網址可能打錯了,或頁面已移動。',
    back: '回首頁',
  },
};

type Content = typeof zh;

const en: Content = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  name: 'Visy Lockhart',
  role: 'Full-stack developer · learning game development',
  skip: 'Skip to main content',
  nav: { eranaut: 'Eranaut', eranarch: 'Eranarch', game: 'Game dev', about: 'About', home: 'Home' },
  switchTo: '繁體中文',
  switchLabel: 'Switch to Traditional Chinese',
  themeLabel: 'Toggle light / dark theme',
  footer: {
    copy: '© 2026 Visy Lockhart',
    disclaimer:
      'Eranaut and Eranarch are unofficial fan tools, not affiliated with SQUARE ENIX CO., LTD., made for a community and not for commercial use.',
  },
  common: {
    demo: 'Live demo',
    source: 'Source code',
    release: 'Windows release',
    gdd: 'GDD document',
    arch: 'Full architecture notes (GitHub)',
    github: 'GitHub',
    mail: 'Email me',
    mailDone: 'Mail app opened',
    stack: 'Tech stack',
    features: 'Features',
    tradeoffs: 'Design trade-offs',
    done: 'Done',
    planned: 'Planned',
    more: 'Learn more',
    projects: 'Selected projects',
    contact: 'Contact',
    breadcrumbHome: 'Home',
  },
  home: {
    title: 'Visy Lockhart — Full-stack developer portfolio (.NET · Angular)',
    description:
      '7+ years of .NET backend and full-stack experience. Projects: Eranaut (Angular PWA + Fastify + OCR, self-hosted with Docker), Eranarch (Discord bot) and a small Unity game demo.',
    badge: 'Full-stack · 全端開發',
    h1: 'I turn a community’s small annoyances into products that actually ship.',
    lead:
      'Hi, I’m Visy Lockhart. From the Angular PWA and Fastify API to OCR and Docker / Cloudflare Tunnel deployment, I built Eranaut end to end on my own.',
    ctaPrimary: 'See Eranaut',
    ctaSecondary: 'About me',
    avatarAlt: 'Blue cat illustration (AI-generated)',
    cards: [
      {
        slug: 'eranaut',
        title: 'Eranaut',
        text: 'A voyage-timer PWA for an FFXIV player community. Angular, Fastify, SQLite, OCR and Web Push, self-hosted with Docker.',
        tags: ['Angular', 'Fastify', 'OCR', 'Docker'],
      },
      {
        slug: 'eranarch',
        title: 'Eranarch',
        text: 'A Discord bot: nickname sync, live channel and role settings, plus admin and member commands.',
        tags: ['discord.js', 'Node.js', 'Docker'],
      },
      {
        slug: 'game-dev',
        title: 'Learning game development',
        text: 'A small Unity game demo with a GDD is done; I look forward to learning UE5 and GAS on the job.',
        tags: ['Unity', 'C#', 'GDD'],
      },
    ],
    contactText: 'For collaboration or job opportunities, send me an email or browse the source on GitHub.',
  },
  eranaut: {
    title: 'Eranaut — Voyage-timer PWA for an FFXIV community (Angular + Fastify + OCR)',
    description:
      'Eranaut is a voyage countdown and reminder PWA for an FFXIV player community: Angular, Fastify, SQLite, screenshot OCR and Web Push, self-hosted with Docker.',
    h1: 'Eranaut',
    sub: 'A voyage-timer PWA for an FFXIV player community',
    overview:
      'Eranaut lets players record when their submarines return and reminds them by Discord DM, channel mention or browser push. It is used internally by a community of about 100 people. I built everything on my own, from the screens and API to screenshot recognition and deployment, in collaboration with AI: I own the requirements, design decisions and on-device verification, and every decision is recorded in a decision log.',
    features: [
      'Discord OAuth2 login with role-based access (rules combine with AND / OR)',
      'Screenshot recognition with a self-hosted PP-OCRv4: no external service, images are not stored, paste and screen-capture supported',
      'Three reminder channels: Discord DM, channel mention, browser push (Web Push)',
      'PWA: mobile and desktop layouts, adjustable interface size, offline app shell',
      'Admin and member commands (via the Eranarch bot calling an internal API)',
    ],
    stack: [
      'Angular · TypeScript',
      'Fastify · Node.js',
      'SQLite (better-sqlite3)',
      'PP-OCRv4 (onnxruntime-node)',
      'Web Push',
      'Docker',
      'Cloudflare Tunnel + Caddy',
    ],
    tradeoffs: [
      'Server-side session cookies instead of JWT: a single API with SQLite means sessions can be revoked instantly.',
      'A public port and an internal port sharing one service layer: the bot can only use the internal port, which the internet cannot reach by construction.',
      'OCR runs in the same process, with no external service and no stored images, which keeps privacy and cost under control.',
      'Reminders use upsert and the whole system has just two schedulers, so data stays bounded and needs no cleanup job.',
    ],
    challengeH: 'The hardest parts: OCR and Docker deployment',
    challenge:
      'I validated OCR against 11 real screenshots plus 77 degraded variants (about 99.5% per-submarine accuracy) and ran the full test suite on both Windows x64 and Linux arm64. On arm64, Docker builds hit native-module problems (better-sqlite3, onnxruntime-node); I worked through them one by one and went live on my own machine.',
    archH: 'Architecture',
    diagram: {
      scrollLabel: 'Architecture diagram (scrolls horizontally)',
      title: 'Eranaut system architecture',
      desc: 'The browser reaches the Eranaut API public port through Cloudflare Tunnel and Caddy; the Eranarch bot uses the internal port only; both entry points share one service and repository layer on top of SQLite, OCR and two schedulers; the schedulers send reminders through the Discord API and a Web Push service.',
      host: 'Self-hosted · Docker Compose',
      browser: 'Browser / PWA',
      caddy: 'static + /api/*',
      bot: '/eran commands',
      pub: 'Public port',
      pubSub: 'session cookie',
      int: 'Internal port',
      intSub: 'shared-secret Bearer',
      svc: 'Service / repo layer',
      svcSub1: 'Business rules and SQL',
      svcSub2: 'live only here',
      ocrSub: 'in-process',
      sched: '2 schedulers',
      sched1: 'reminder poll',
      sched2: 'eligibility check',
      push: 'Web Push service',
      gateway: 'Discord gateway',
      dm: 'DM · channel mention',
      caption: 'The host opens no inbound port; traffic comes in only through Cloudflare Tunnel. The bot and the API share a Docker network and call each other by service name. Dashed boxes are external services.',
    },
    shotsH: 'Screens',
    shotDesktopAlt: 'Eranaut desktop overview showing submarines sorted by return time (demo data)',
    shotMobileAlt: 'Eranaut mobile overview (demo data)',
    shotNote: 'Screenshots use the demo’s fake data.',
  },
  eranarch: {
    title: 'Eranarch — Discord bot (discord.js · Node.js · Docker)',
    description:
      'Eranarch is a Discord bot for an FFXIV community: event-driven nickname sync, live reading of channel and role settings, and member and admin commands backed by Eranaut’s internal API.',
    h1: 'Eranarch',
    sub: 'A Discord bot serving the same community',
    overview:
      'Eranarch handles nickname sync and settings inside the server and acts as Eranaut’s Discord entry point: members can look up their own submarines with a command, and admins can suspend and unsuspend users.',
    features: [
      'Nickname sync (event-driven, no polling)',
      'Live reading of channel and role settings',
      'Admin commands under /eran-m (suspend, unsuspend and more), hidden in Discord from people without permission',
      'Member command /eran submarines: look up your own workshops and return times',
      'Talks to Eranaut through an internal API; the bot never touches the database',
    ],
    stack: ['discord.js', 'Node.js', 'Docker'],
    note: 'The public eranarch-bot repository is a trimmed demo version without the commands that depend on Eranaut’s internal port.',
  },
  game: {
    title: 'Learning game development — Unity demo and study plan | Visy Lockhart',
    description:
      'Moving from .NET full-stack into game development: a small Unity submarine-voyage game with a GDD (source and Windows build) is done, and I look forward to learning UE5 and GAS on the job.',
    h1: 'Learning game development',
    sub: 'I have no professional game-industry experience yet, and I am learning on my own.',
    intro:
      'Angular, Vue, OIDC and Docker were all self-taught and then shipped to production. I will learn game development the same way: finish something small but complete, write the design document, then move on to the next engine.',
    unityTitle: 'Submarine Voyage — small Unity game demo + GDD',
    unityText:
      'An idle game: send submarines on voyages, wait for them to return, collect resources. Four submarines unlock in order, three routes, cargo and speed upgrades (Lv1–5), a fleet goal and a completion screen.',
    unityPoints: [
      'Game rules live in a pure C# layer with no Unity dependency; submarine state is derived from return timestamps, which makes offline catch-up possible.',
      'JSON saves (write to a temp file, then replace; corrupt saves are backed up) and 32 EditMode tests.',
      'A one-page GDD (gameplay loop, MVP scope, numbers, technical design) and an English README.',
      'Built with AI: I decided the specification and verified the result, and AI helped write the code.',
    ],
    logH: 'Learning log: building Submarine Voyage in three days',
    logIntro: 'I learned the Hierarchy, Inspector, Canvas, Prefabs, ScriptableObjects, Layout Groups and anchors as I built.',
    log: [
      {
        name: 'After playtesting',
        text: 'At 600x speed all four submarines maxed out quickly and nothing was left to do, so I added a fleet-goal progress bar and a completion screen. The route window now shows each submarine’s actual wait time and reward range.',
      },
      {
        name: 'A snag',
        text: 'The default Canvas Scaler setting cropped cards in a 4:3 window; I switched it to Expand and fixed the card width.',
      },
    ],
    planH: 'Next',
    plan: [
      { name: 'UE5', text: 'I look forward to learning UE5 on the job, starting with networked, 3D-oriented projects.' },
      {
        name: 'GAS concept notes',
        text: 'Read the official GAS documentation and write a one-page note of my own on how Ability, Attribute Set, Gameplay Effect and Gameplay Tag divide responsibilities.',
      },
    ],
  },
  about: {
    title: 'About — Visy Lockhart, .NET backend and full-stack engineer with 7+ years',
    description:
      '7+ years of .NET backend and full-stack experience (ASP.NET Core, Entity Framework Core, Angular) across payments, shareholder services, hospital information and airline CMS systems; now learning game development.',
    h1: 'About me',
    intro:
      'I’m Visy Lockhart, with 7+ years of .NET backend and full-stack experience (ASP.NET Core, Entity Framework, Angular), having built payment, shareholder-services, hospital information and airline CMS systems. I am also an FFXIV player and built Eranaut for the player community: a PWA I did end to end, from screens and API to screenshot OCR and Docker deployment, with a companion Discord bot, Eranarch. It was my first project built in collaboration with AI. I have a strong interest in game development and 3D. I have no professional experience yet, but Angular, Vue, OIDC and Docker were all self-taught and then shipped, and Eranaut went from zero to deployment the same way. I am confident I can reach my learning goals the same way.',
    avatarNote: 'The illustration on the home page is AI-generated (Grok).',
    skillsH: 'Skills',
    skills: [
      ['Languages (strongest first)', 'C# > JavaScript > TypeScript'],
      ['Backend', '.NET Core / ASP.NET Core, Entity Framework Core, RESTful APIs, Razor Pages; Node.js (Fastify)'],
      ['Frontend', 'Angular, Vue, jQuery, HTML/CSS'],
      ['Databases', 'MSSQL, Oracle, SQLite'],
      ['Engineering practice', 'Git, code review, xUnit, OIDC, Azure, Azure DevOps, Jenkins, Docker, Cloudflare Tunnel'],
      ['AI-assisted development', 'GitHub Copilot, Claude'],
      ['Game development', 'Unity (one complete demo)'],
    ],
    expH: 'Experience',
    experience: [
      {
        company: 'Trident Technology',
        role: 'Backend Engineer',
        period: 'Jul 2024 – May 2025',
        points: [
          'Joined a remote team to help move the backend from PHP to .NET Core.',
          'Built back-office features and APIs for an airline CMS, including API integration, audit logging, and scheduled jobs that sync credit-card data and blacklists.',
          'Worked with the Flutter mobile team to sync inventory in/out and in-flight sales data.',
        ],
        tech: '.NET Core, Entity Framework Core, Oracle, SQLite',
      },
      {
        company: 'DSJ Technology',
        role: 'Senior Engineer',
        period: 'Mar 2022 – May 2024',
        points: [
          'Led the in-house sales-bonus settlement system: redesigned the process and algorithm without existing code or documentation, replacing a 10-year-old third-party system licensed per computer and reducing licensing cost.',
          'Owned development and architecture from requirements to release; also delivered a member center, the company website and a sales-system back office.',
          'Served as interviewer, screened resumes and mentored new engineers; learned OIDC and PCI DSS fundamentals.',
        ],
        tech: '.NET Core, Entity Framework Core, Razor Pages, MSSQL, Angular, TypeScript',
      },
      {
        company: 'TPI Software',
        role: 'Senior Engineer',
        period: 'Apr 2020 – Feb 2022',
        points: [
          'Developed and maintained payment-related fintech systems: shareholder-services maintenance, electronic meeting notices, a sales-management back office, disbursement and insurance modules, and a financial institution’s website back office.',
          'Used Azure Web App, Azure DevOps and Jenkins for CI/CD; co-organized a reading group to share lessons regularly.',
        ],
        tech: 'ASP.NET Core Web API, Entity Framework Core, MSSQL, Angular',
      },
      {
        company: 'Duotify',
        role: 'Web Developer',
        period: 'Jun 2018 – Feb 2020',
        points: [
          'Built and maintained websites and systems for several corporate clients, plus a cross-border CRM mobile system and APIs; introduced Git and CI/CD practices.',
        ],
        tech: 'ASP.NET MVC / Web API, Entity Framework, MSSQL, Angular, Vue, jQuery',
      },
      {
        company: 'Kaohsiung Medical University Chung-Ho Memorial Hospital, IT Office',
        role: 'Software Engineer',
        period: 'Jul 2016 – May 2018',
        points: [
          'Worked on the design and development of the hospital information system (HIS): order entry, billing, an in-hospital smart card and referral registration modules, with third-party payment integration.',
        ],
        tech: 'ASP.NET MVC / WebForm, Oracle PL/SQL, jQuery, Bootstrap',
      },
    ],
    eduH: 'Education and languages',
    edu: [
      'Cheng Shiu University, B.S. Computer Science and Information Engineering (Sep 2012 – Jun 2014)',
      'English: intermediate reading and writing, basic listening and speaking',
    ],
    techLabel: 'Tech',
  },
  notFound: {
    title: 'Page not found — Visy Lockhart',
    h1: 'Page not found',
    text: 'The address may be mistyped, or the page has moved.',
    back: 'Back to home',
  },
};

export type Lang = 'zh-TW' | 'en';
export const content: Record<Lang, Content> = { 'zh-TW': zh, en };
export type { Content };

// 路徑工具:繁中在根路徑,英文在 /en/
export function pathFor(lang: Lang, slug = ''): string {
  const base = lang === 'en' ? '/en/' : '/';
  return slug ? `${base}${slug}/` : base;
}
export const SLUGS = ['', 'eranaut', 'eranarch', 'game-dev', 'about'] as const;
