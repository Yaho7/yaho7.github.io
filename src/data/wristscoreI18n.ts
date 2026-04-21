export const WRISTSCORE_DEFAULT_LOCALE = "zh-CN" as const;

export const WRISTSCORE_LANGUAGES = [
  { code: "zh-CN", label: "简体中文" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
] as const;

export const WRISTSCORE_ENABLED_LANGUAGES = [
  { code: "zh-CN", label: "简体中文" },
  { code: "en", label: "English" },
] as const;

export type WristScoreLocale = (typeof WRISTSCORE_LANGUAGES)[number]["code"];

type MetaContent = {
  title: string;
  description: string;
};

type TextCard = {
  title: string;
  desc: string;
};

type PolicySection = {
  title: string;
  body: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type SharedContent = {
  common: {
    languageLabel: string;
  };
  meta: MetaContent;
};

export type WristScoreHomeContent = SharedContent & {
  strings: {
    breadcrumbHome: string;
    breadcrumbRoot: string;
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    supportButton: string;
    privacyButton: string;
    contactButton: string;
    iconAlt: string;
    coreHeading: string;
    scenariosHeading: string;
    supportHeading: string;
    supportDescription: string;
  };
  lists: {
    featureCards: TextCard[];
    coreFeatures: TextCard[];
    scenarios: string[];
  };
};

export type WristScoreSupportContent = SharedContent & {
  strings: {
    breadcrumbHome: string;
    breadcrumbRoot: string;
    breadcrumbCurrent: string;
    badge: string;
    heroTitle: string;
    heroDescription: string;
    contactSupportButton: string;
    viewPrivacyButton: string;
    iconAlt: string;
    contactHeading: string;
    supportEmailLabel: string;
    supportedProductLabel: string;
    supportedProductValue: string;
    checklistHeading: string;
    faqSectionLabel: string;
    faqTitle: string;
  };
  lists: {
    supportChecklist: string[];
    faqItems: FaqItem[];
  };
};

export type WristScorePrivacyContent = SharedContent & {
  strings: {
    breadcrumbHome: string;
    breadcrumbRoot: string;
    breadcrumbCurrent: string;
    badge: string;
    heroTitle: string;
    updatedAt: string;
    heroDescription: string;
    iconAlt: string;
  };
  lists: {
    summaryCards: TextCard[];
    policySections: PolicySection[];
  };
};

export const WRISTSCORE_HOME_CONTENT: Record<
  WristScoreLocale,
  WristScoreHomeContent
> = {
  "zh-CN": {
    common: {
      languageLabel: "语言",
    },
    meta: {
      title: "腕上记分 | yaho",
      description:
        "腕上记分是一款简单的 Apple Watch 记分软件，支持比赛记分、历史记录、统计分析与分享卡片。",
    },
    strings: {
      breadcrumbHome: "首页",
      breadcrumbRoot: "腕上记分",
      badge: "Apple Watch Product Page",
      heroTitle: "腕上记分",
      heroSubtitle: "一款简单的 Apple Watch 记分软件",
      heroDescription:
        "在 Apple Watch 上快速完成比赛记分，减少中断，保留专注。无论是羽毛球、网球、乒乓球，还是日常训练中的自定义对局，你都可以更轻松地记录、回顾和分享每一场比赛。",
      supportButton: "技术支持",
      privacyButton: "隐私政策",
      contactButton: "联系邮箱",
      iconAlt: "腕上记分 App 图标",
      coreHeading: "核心功能",
      scenariosHeading: "适用场景",
      supportHeading: "联系与支持",
      supportDescription:
        "如果你在使用过程中遇到问题，或希望反馈功能建议，可以直接通过邮箱联系。",
    },
    lists: {
      featureCards: [
        ["腕上记分", "比赛中直接在手表上操作，减少频繁掏手机。"],
        ["规则可配", "支持常见运动模板，也支持自定义比赛规则。"],
        ["赛后可查", "自动保存对局历史，方便回看每一场比赛。"],
        ["一键分享", "把比分与统计生成分享卡片，直接发给朋友或队友。"],
      ].map(([title, desc]) => ({ title, desc })),
      coreFeatures: [
        [
          "Apple Watch 快速记分",
          "更适合比赛过程中的即时操作，动作更少，节奏更顺。",
        ],
        [
          "自定义比赛规则",
          "可按不同运动项目或个人习惯配置模板、局数与胜负条件。",
        ],
        [
          "历史记录与统计",
          "自动沉淀对局结果，帮助你查看胜率、趋势和使用情况。",
        ],
        ["分享卡片导出", "把比赛结果或统计页面导出为更适合社交分享的图片。"],
      ].map(([title, desc]) => ({ title, desc })),
      scenarios: [
        "羽毛球、网球、乒乓球等实时记分场景",
        "单打、双打、练习赛、友谊赛",
        "想长期记录训练与比赛数据的个人用户",
        "希望快速导出比分和统计卡片的人",
      ],
    },
  },
  en: {
    common: {
      languageLabel: "Language",
    },
    meta: {
      title: "WristScore | yaho",
      description:
        "WristScore is a simple Apple Watch scoring app with match tracking, history, statistics, and shareable cards.",
    },
    strings: {
      breadcrumbHome: "Home",
      breadcrumbRoot: "WristScore",
      badge: "Apple Watch Product Page",
      heroTitle: "WristScore",
      heroSubtitle: "A simple scoring app for Apple Watch",
      heroDescription:
        "Record scores quickly on Apple Watch with less interruption and more focus. Whether you play badminton, tennis, table tennis, or custom training matches, WristScore helps you track, review, and share every game with less friction.",
      supportButton: "Support",
      privacyButton: "Privacy Policy",
      contactButton: "Email",
      iconAlt: "WristScore app icon",
      coreHeading: "Core Features",
      scenariosHeading: "Best For",
      supportHeading: "Contact & Support",
      supportDescription:
        "If you run into issues or want to share product feedback, contact us directly by email.",
    },
    lists: {
      featureCards: [
        {
          title: "Score on Your Wrist",
          desc: "Operate directly on your watch during a match and keep your phone in your pocket.",
        },
        {
          title: "Flexible Rules",
          desc: "Use common sport presets or create rules that fit your own format.",
        },
        {
          title: "Review Later",
          desc: "Match history is saved automatically, so every game stays easy to revisit.",
        },
        {
          title: "Share Instantly",
          desc: "Turn scores and stats into share cards you can send to friends or teammates.",
        },
      ],
      coreFeatures: [
        {
          title: "Fast Apple Watch scoring",
          desc: "Built for real-time scoring during play, with fewer taps and a smoother rhythm.",
        },
        {
          title: "Custom match rules",
          desc: "Set templates, rounds, and winning conditions for different sports or personal habits.",
        },
        {
          title: "History and statistics",
          desc: "Keep match results over time and review win rate, trends, and usage at a glance.",
        },
        {
          title: "Share card export",
          desc: "Export match results or statistics as images that work well for social sharing.",
        },
      ],
      scenarios: [
        "Live scoring for badminton, tennis, table tennis, and similar sports",
        "Singles, doubles, practice sessions, and friendly matches",
        "Players who want a long-term record of training and competition",
        "Anyone who wants to export score or statistics cards quickly",
      ],
    },
  },
  ja: {
    common: {
      languageLabel: "言語",
    },
    meta: {
      title: "WristScore | yaho",
      description:
        "WristScore は、試合の記録、履歴、統計、共有カードに対応した Apple Watch 用のシンプルなスコアアプリです。",
    },
    strings: {
      breadcrumbHome: "ホーム",
      breadcrumbRoot: "WristScore",
      badge: "Apple Watch Product Page",
      heroTitle: "WristScore",
      heroSubtitle: "Apple Watch 向けのシンプルなスコア記録アプリ",
      heroDescription:
        "Apple Watch で素早くスコアを記録し、試合中の中断を減らして集中を保てます。バドミントン、テニス、卓球はもちろん、日常練習のカスタム対戦でも、各試合をもっと手軽に記録、振り返り、共有できます。",
      supportButton: "サポート",
      privacyButton: "プライバシーポリシー",
      contactButton: "メール",
      iconAlt: "WristScore アプリアイコン",
      coreHeading: "主な機能",
      scenariosHeading: "利用シーン",
      supportHeading: "お問い合わせとサポート",
      supportDescription:
        "ご利用中に問題が発生した場合や機能改善の提案がある場合は、メールで直接ご連絡ください。",
    },
    lists: {
      featureCards: [
        {
          title: "手元ですぐ記録",
          desc: "試合中に Apple Watch で直接操作でき、何度もスマホを取り出す必要がありません。",
        },
        {
          title: "ルールを柔軟に設定",
          desc: "一般的なスポーツテンプレートに加え、自分向けの試合ルールも設定できます。",
        },
        {
          title: "試合後に確認",
          desc: "対戦履歴を自動保存し、あとから各試合を簡単に振り返れます。",
        },
        {
          title: "ワンタップ共有",
          desc: "スコアや統計を共有カードにして、友人やチームメイトにすぐ送れます。",
        },
      ],
      coreFeatures: [
        {
          title: "Apple Watch ですばやく記録",
          desc: "試合中のリアルタイム操作に向いた設計で、操作回数が少なく流れを崩しません。",
        },
        {
          title: "試合ルールをカスタマイズ",
          desc: "競技や使い方に合わせてテンプレート、ゲーム数、勝敗条件を設定できます。",
        },
        {
          title: "履歴と統計",
          desc: "試合結果を蓄積し、勝率や推移、利用状況をまとめて確認できます。",
        },
        {
          title: "共有カードを書き出し",
          desc: "試合結果や統計画面を、共有しやすい画像として書き出せます。",
        },
      ],
      scenarios: [
        "バドミントン、テニス、卓球などのリアルタイム採点",
        "シングルス、ダブルス、練習試合、フレンドリーマッチ",
        "練習や試合データを長期的に残したい個人ユーザー",
        "スコアカードや統計カードを素早く共有したい人",
      ],
    },
  },
  ko: {
    common: {
      languageLabel: "언어",
    },
    meta: {
      title: "WristScore | yaho",
      description:
        "WristScore는 경기 기록, 히스토리, 통계, 공유 카드 기능을 제공하는 간단한 Apple Watch 점수 앱입니다.",
    },
    strings: {
      breadcrumbHome: "홈",
      breadcrumbRoot: "WristScore",
      badge: "Apple Watch Product Page",
      heroTitle: "WristScore",
      heroSubtitle: "Apple Watch를 위한 간단한 점수 기록 앱",
      heroDescription:
        "Apple Watch에서 빠르게 점수를 기록해 경기 흐름을 덜 끊고 집중을 유지할 수 있습니다. 배드민턴, 테니스, 탁구는 물론, 일상 훈련용 사용자 지정 경기까지 더 쉽게 기록하고, 돌아보고, 공유할 수 있습니다.",
      supportButton: "지원",
      privacyButton: "개인정보 처리방침",
      contactButton: "이메일",
      iconAlt: "WristScore 앱 아이콘",
      coreHeading: "핵심 기능",
      scenariosHeading: "적합한 사용 장면",
      supportHeading: "문의 및 지원",
      supportDescription:
        "사용 중 문제가 생기거나 기능 제안을 보내고 싶다면 이메일로 직접 연락해 주세요.",
    },
    lists: {
      featureCards: [
        {
          title: "손목에서 바로 기록",
          desc: "경기 중 시계에서 바로 조작할 수 있어 휴대폰을 자주 꺼낼 필요가 없습니다.",
        },
        {
          title: "유연한 규칙 설정",
          desc: "대표 스포츠 템플릿을 지원하고, 직접 경기 규칙을 만들 수도 있습니다.",
        },
        {
          title: "경기 후 다시 확인",
          desc: "대전 기록이 자동 저장되어 모든 경기를 나중에 쉽게 돌아볼 수 있습니다.",
        },
        {
          title: "한 번에 공유",
          desc: "점수와 통계를 공유 카드로 만들어 친구나 팀원에게 바로 보낼 수 있습니다.",
        },
      ],
      coreFeatures: [
        {
          title: "Apple Watch 빠른 기록",
          desc: "실시간 경기 기록에 맞춘 설계로, 탭 수를 줄이고 흐름을 더 자연스럽게 유지합니다.",
        },
        {
          title: "사용자 지정 경기 규칙",
          desc: "종목이나 습관에 맞게 템플릿, 세트 수, 승패 조건을 설정할 수 있습니다.",
        },
        {
          title: "기록과 통계",
          desc: "경기 결과를 쌓아 승률, 추세, 사용 현황을 한눈에 확인할 수 있습니다.",
        },
        {
          title: "공유 카드 내보내기",
          desc: "경기 결과나 통계 화면을 소셜 공유에 적합한 이미지로 내보낼 수 있습니다.",
        },
      ],
      scenarios: [
        "배드민턴, 테니스, 탁구 등의 실시간 점수 기록",
        "단식, 복식, 연습 경기, 친선 경기",
        "훈련과 경기 데이터를 장기적으로 남기고 싶은 개인 사용자",
        "점수 카드와 통계 카드를 빠르게 내보내고 싶은 사람",
      ],
    },
  },
  de: {
    common: {
      languageLabel: "Sprache",
    },
    meta: {
      title: "WristScore | yaho",
      description:
        "WristScore ist eine einfache Apple-Watch-App zum Punkten mit Spielverlauf, Statistiken und teilbaren Karten.",
    },
    strings: {
      breadcrumbHome: "Start",
      breadcrumbRoot: "WristScore",
      badge: "Apple Watch Product Page",
      heroTitle: "WristScore",
      heroSubtitle: "Eine einfache Score-App für die Apple Watch",
      heroDescription:
        "Erfasse Spielstände schnell auf der Apple Watch, mit weniger Unterbrechungen und mehr Fokus. Ob Badminton, Tennis, Tischtennis oder individuelle Trainingsspiele: WristScore hilft dir, jede Partie einfacher zu protokollieren, zu überprüfen und zu teilen.",
      supportButton: "Support",
      privacyButton: "Datenschutz",
      contactButton: "E-Mail",
      iconAlt: "WristScore App-Symbol",
      coreHeading: "Kernfunktionen",
      scenariosHeading: "Geeignet Für",
      supportHeading: "Kontakt & Support",
      supportDescription:
        "Wenn du auf Probleme stößt oder Feedback zum Produkt geben möchtest, kontaktiere uns direkt per E-Mail.",
    },
    lists: {
      featureCards: [
        {
          title: "Punkte direkt am Handgelenk",
          desc: "Bediene die App im Spiel direkt auf der Uhr und lass das iPhone in der Tasche.",
        },
        {
          title: "Anpassbare Regeln",
          desc: "Nutze gängige Sportvorlagen oder erstelle Regeln für dein eigenes Format.",
        },
        {
          title: "Später nachschauen",
          desc: "Die Spielhistorie wird automatisch gespeichert, damit du jede Partie erneut ansehen kannst.",
        },
        {
          title: "Sofort teilen",
          desc: "Verwandle Ergebnisse und Statistiken in Karten, die du an Freunde oder Teamkollegen senden kannst.",
        },
      ],
      coreFeatures: [
        {
          title: "Schnelles Scoring auf Apple Watch",
          desc: "Für Live-Eingaben im Spiel optimiert, mit weniger Aktionen und einem flüssigeren Ablauf.",
        },
        {
          title: "Individuelle Spielregeln",
          desc: "Lege Vorlagen, Satzanzahl und Siegbedingungen passend zu Sportart oder Gewohnheit fest.",
        },
        {
          title: "Historie und Statistiken",
          desc: "Speichere Ergebnisse dauerhaft und prüfe Gewinnquote, Trends und Nutzung im Überblick.",
        },
        {
          title: "Export von Share Cards",
          desc: "Exportiere Ergebnisse oder Statistikseiten als Bilder für soziale Netzwerke oder Chats.",
        },
      ],
      scenarios: [
        "Live-Scoring für Badminton, Tennis, Tischtennis und ähnliche Sportarten",
        "Einzel, Doppel, Training und Freundschaftsspiele",
        "Nutzerinnen und Nutzer, die Trainings- und Spieldaten langfristig festhalten wollen",
        "Alle, die Punktestände oder Statistik-Karten schnell exportieren möchten",
      ],
    },
  },
  fr: {
    common: {
      languageLabel: "Langue",
    },
    meta: {
      title: "WristScore | yaho",
      description:
        "WristScore est une application Apple Watch simple pour compter les points, conserver l'historique, suivre les statistiques et partager des cartes.",
    },
    strings: {
      breadcrumbHome: "Accueil",
      breadcrumbRoot: "WristScore",
      badge: "Apple Watch Product Page",
      heroTitle: "WristScore",
      heroSubtitle: "Une application de score simple pour Apple Watch",
      heroDescription:
        "Enregistrez rapidement les scores sur Apple Watch avec moins d'interruptions et plus de concentration. Badminton, tennis, tennis de table ou matchs d'entraînement personnalisés : WristScore facilite l'enregistrement, la relecture et le partage de chaque partie.",
      supportButton: "Assistance",
      privacyButton: "Politique de confidentialité",
      contactButton: "E-mail",
      iconAlt: "Icône de l'application WristScore",
      coreHeading: "Fonctionnalités Clés",
      scenariosHeading: "Cas D'usage",
      supportHeading: "Contact et assistance",
      supportDescription:
        "Si vous rencontrez un problème ou souhaitez envoyer une suggestion, contactez-nous directement par e-mail.",
    },
    lists: {
      featureCards: [
        {
          title: "Score au poignet",
          desc: "Utilisez directement votre montre pendant le match sans sortir souvent votre téléphone.",
        },
        {
          title: "Règles configurables",
          desc: "Utilisez des modèles sportifs courants ou créez vos propres règles de match.",
        },
        {
          title: "Consultation après match",
          desc: "L'historique est enregistré automatiquement pour revoir facilement chaque partie.",
        },
        {
          title: "Partage en un geste",
          desc: "Transformez les scores et statistiques en cartes à envoyer à vos amis ou coéquipiers.",
        },
      ],
      coreFeatures: [
        {
          title: "Score rapide sur Apple Watch",
          desc: "Pensé pour la saisie en temps réel pendant le jeu, avec moins de gestes et plus de fluidité.",
        },
        {
          title: "Règles de match personnalisées",
          desc: "Configurez modèles, manches et conditions de victoire selon le sport ou vos habitudes.",
        },
        {
          title: "Historique et statistiques",
          desc: "Conservez les résultats dans le temps et consultez rapidement taux de victoire et tendances.",
        },
        {
          title: "Export de cartes de partage",
          desc: "Exportez résultats ou statistiques sous forme d'images prêtes à être partagées.",
        },
      ],
      scenarios: [
        "Score en direct pour le badminton, le tennis, le tennis de table et sports similaires",
        "Simple, double, entraînements et matchs amicaux",
        "Personnes souhaitant conserver un historique durable de leurs entraînements et compétitions",
        "Utilisateurs voulant exporter rapidement des cartes de score ou de statistiques",
      ],
    },
  },
  es: {
    common: {
      languageLabel: "Idioma",
    },
    meta: {
      title: "WristScore | yaho",
      description:
        "WristScore es una app sencilla para Apple Watch con marcador, historial, estadísticas y tarjetas para compartir.",
    },
    strings: {
      breadcrumbHome: "Inicio",
      breadcrumbRoot: "WristScore",
      badge: "Apple Watch Product Page",
      heroTitle: "WristScore",
      heroSubtitle: "Una app sencilla de marcador para Apple Watch",
      heroDescription:
        "Registra puntuaciones rápidamente en Apple Watch con menos interrupciones y más concentración. Ya sea bádminton, tenis, tenis de mesa o partidos de entrenamiento personalizados, WristScore te ayuda a guardar, revisar y compartir cada encuentro con más facilidad.",
      supportButton: "Soporte",
      privacyButton: "Política de privacidad",
      contactButton: "Correo",
      iconAlt: "Icono de la app WristScore",
      coreHeading: "Funciones Principales",
      scenariosHeading: "Ideal Para",
      supportHeading: "Contacto y soporte",
      supportDescription:
        "Si encuentras algún problema o quieres enviarnos sugerencias, contáctanos directamente por correo electrónico.",
    },
    lists: {
      featureCards: [
        {
          title: "Marcador en tu muñeca",
          desc: "Controla el marcador desde el reloj durante el partido sin sacar el teléfono constantemente.",
        },
        {
          title: "Reglas configurables",
          desc: "Incluye plantillas deportivas habituales y también reglas personalizadas.",
        },
        {
          title: "Consulta después",
          desc: "El historial se guarda automáticamente para revisar cada partido cuando quieras.",
        },
        {
          title: "Comparte al instante",
          desc: "Convierte puntuaciones y estadísticas en tarjetas para amigos o compañeros de equipo.",
        },
      ],
      coreFeatures: [
        {
          title: "Puntuación rápida en Apple Watch",
          desc: "Pensado para marcar en tiempo real durante el juego, con menos acciones y mejor ritmo.",
        },
        {
          title: "Reglas de partido personalizadas",
          desc: "Configura plantillas, sets y condiciones de victoria según el deporte o tu costumbre.",
        },
        {
          title: "Historial y estadísticas",
          desc: "Guarda resultados a lo largo del tiempo y consulta tasa de victorias, tendencias y uso.",
        },
        {
          title: "Exportación de tarjetas",
          desc: "Exporta resultados o estadísticas como imágenes listas para compartir.",
        },
      ],
      scenarios: [
        "Marcador en vivo para bádminton, tenis, tenis de mesa y deportes similares",
        "Individuales, dobles, sesiones de práctica y partidos amistosos",
        "Usuarios que quieren conservar datos de entrenamiento y competición a largo plazo",
        "Personas que quieren exportar rápido tarjetas de puntuación o estadísticas",
      ],
    },
  },
  it: {
    common: {
      languageLabel: "Lingua",
    },
    meta: {
      title: "WristScore | yaho",
      description:
        "WristScore è una semplice app per Apple Watch con punteggi, cronologia, statistiche e schede condivisibili.",
    },
    strings: {
      breadcrumbHome: "Home",
      breadcrumbRoot: "WristScore",
      badge: "Apple Watch Product Page",
      heroTitle: "WristScore",
      heroSubtitle: "Una semplice app segnapunti per Apple Watch",
      heroDescription:
        "Registra i punteggi rapidamente su Apple Watch con meno interruzioni e più concentrazione. Che si tratti di badminton, tennis, ping pong o partite di allenamento personalizzate, WristScore ti aiuta a salvare, rivedere e condividere ogni incontro con meno attrito.",
      supportButton: "Supporto",
      privacyButton: "Informativa sulla privacy",
      contactButton: "Email",
      iconAlt: "Icona dell'app WristScore",
      coreHeading: "Funzioni Principali",
      scenariosHeading: "Scenari Ideali",
      supportHeading: "Contatti e supporto",
      supportDescription:
        "Se riscontri problemi durante l'uso o vuoi inviare suggerimenti, contattaci direttamente via email.",
    },
    lists: {
      featureCards: [
        {
          title: "Segna dal polso",
          desc: "Usa l'orologio direttamente durante la partita senza tirare fuori spesso il telefono.",
        },
        {
          title: "Regole configurabili",
          desc: "Supporta modelli sportivi comuni e anche regole di gara personalizzate.",
        },
        {
          title: "Rivedi dopo la partita",
          desc: "La cronologia viene salvata automaticamente per rivedere facilmente ogni incontro.",
        },
        {
          title: "Condivisione immediata",
          desc: "Trasforma punteggi e statistiche in schede da inviare ad amici o compagni di squadra.",
        },
      ],
      coreFeatures: [
        {
          title: "Punteggio rapido su Apple Watch",
          desc: "Progettato per l'inserimento in tempo reale durante il gioco, con meno tocchi e più fluidità.",
        },
        {
          title: "Regole di partita personalizzate",
          desc: "Configura modelli, set e condizioni di vittoria in base allo sport o alle tue abitudini.",
        },
        {
          title: "Cronologia e statistiche",
          desc: "Conserva i risultati nel tempo e controlla rapidamente percentuali di vittoria e tendenze.",
        },
        {
          title: "Esportazione di schede",
          desc: "Esporta risultati o statistiche come immagini più adatte alla condivisione.",
        },
      ],
      scenarios: [
        "Punteggio in tempo reale per badminton, tennis, ping pong e sport simili",
        "Singolare, doppio, allenamenti e partite amichevoli",
        "Utenti che vogliono tenere uno storico di allenamenti e gare nel lungo periodo",
        "Persone che vogliono esportare rapidamente schede punteggio o statistiche",
      ],
    },
  },
};

export const WRISTSCORE_SUPPORT_CONTENT: Record<
  WristScoreLocale,
  WristScoreSupportContent
> = {
  "zh-CN": {
    common: {
      languageLabel: "语言",
    },
    meta: {
      title: "腕上记分技术支持 | yaho",
      description:
        "腕上记分技术支持页面，包含联系方式、常见问题与问题反馈说明。",
    },
    strings: {
      breadcrumbHome: "首页",
      breadcrumbRoot: "腕上记分",
      breadcrumbCurrent: "技术支持",
      badge: "Support",
      heroTitle: "腕上记分技术支持",
      heroDescription:
        "如果你在使用腕上记分时遇到问题，或希望反馈建议，可以通过下面的方式联系。我们建议你在反馈时尽量提供设备信息与复现步骤，以便更快定位问题。",
      contactSupportButton: "联系技术支持",
      viewPrivacyButton: "查看隐私政策",
      iconAlt: "腕上记分 App 图标",
      contactHeading: "联系方式",
      supportEmailLabel: "支持邮箱",
      supportedProductLabel: "适用产品",
      supportedProductValue: "腕上记分 / WristScore",
      checklistHeading: "反馈时建议提供",
      faqSectionLabel: "常见问题",
      faqTitle: "FAQ",
    },
    lists: {
      supportChecklist: [
        "设备型号",
        "iPhone / Apple Watch 系统版本",
        "应用版本号",
        "问题出现的具体步骤",
        "问题截图或录屏",
        "是否可稳定复现",
      ],
      faqItems: [
        {
          question: "为什么手表端没有正常记录运动数据？",
          answer:
            "请先确认 Apple Watch 已授予相关健康与运动权限。如果权限未开启，比赛记分仍可正常进行，但部分运动数据可能无法记录。",
        },
        {
          question: "为什么历史记录或统计没有更新？",
          answer:
            "请确认比赛已经正常结束并保存；如使用手表同步到手机，也请确保 iPhone 与 Apple Watch 连接正常。",
        },
        {
          question: "为什么分享图内容和页面显示不一致？",
          answer:
            "分享图会按当前记录或当前统计筛选条件生成，请先确认你正在查看的是目标记录或目标时间范围。",
        },
        {
          question: "可以反馈新规则或新统计需求吗？",
          answer:
            "可以。你可以通过邮箱提出新的比赛规则、统计项或导出样式建议，我们会按实际使用价值持续优化。",
        },
      ],
    },
  },
  en: {
    common: {
      languageLabel: "Language",
    },
    meta: {
      title: "WristScore Support | yaho",
      description:
        "Support page for WristScore, including contact details, FAQ, and guidance for reporting issues.",
    },
    strings: {
      breadcrumbHome: "Home",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Support",
      badge: "Support",
      heroTitle: "WristScore Support",
      heroDescription:
        "If you run into issues while using WristScore or want to send feedback, contact us through the options below. Including device details and reproduction steps will help us diagnose the issue faster.",
      contactSupportButton: "Contact Support",
      viewPrivacyButton: "View Privacy Policy",
      iconAlt: "WristScore app icon",
      contactHeading: "Contact",
      supportEmailLabel: "Support Email",
      supportedProductLabel: "Product",
      supportedProductValue: "WristScore / 腕上记分",
      checklistHeading: "Please include when reporting",
      faqSectionLabel: "Frequently Asked Questions",
      faqTitle: "FAQ",
    },
    lists: {
      supportChecklist: [
        "Device model",
        "iPhone / Apple Watch system version",
        "App version",
        "Exact steps to reproduce the issue",
        "Screenshots or screen recordings",
        "Whether the issue is consistently reproducible",
      ],
      faqItems: [
        {
          question:
            "Why is workout data not being recorded correctly on Apple Watch?",
          answer:
            "Please make sure Apple Watch has the required Health and Motion permissions. Scoring still works without those permissions, but some workout data may not be recorded.",
        },
        {
          question: "Why did match history or statistics stop updating?",
          answer:
            "Make sure the match was finished and saved correctly. If you sync from the watch to the phone, also confirm that the iPhone and Apple Watch are connected normally.",
        },
        {
          question:
            "Why does the share card look different from what I see on screen?",
          answer:
            "Share cards are generated from the current record or the active statistics filter. Please confirm you are viewing the intended record or time range before exporting.",
        },
        {
          question: "Can I request new rule presets or additional statistics?",
          answer:
            "Yes. You can email ideas for new match rules, statistics, or export styles, and we will continue improving the app based on practical value.",
        },
      ],
    },
  },
  ja: {
    common: {
      languageLabel: "言語",
    },
    meta: {
      title: "WristScore サポート | yaho",
      description:
        "WristScore のサポートページです。連絡先、よくある質問、問題報告の案内を掲載しています。",
    },
    strings: {
      breadcrumbHome: "ホーム",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "サポート",
      badge: "Support",
      heroTitle: "WristScore サポート",
      heroDescription:
        "WristScore の利用中に問題が発生した場合やご意見を送りたい場合は、以下の方法でご連絡ください。端末情報や再現手順を添えていただくと、問題の特定がよりスムーズになります。",
      contactSupportButton: "サポートに連絡",
      viewPrivacyButton: "プライバシーポリシーを見る",
      iconAlt: "WristScore アプリアイコン",
      contactHeading: "連絡先",
      supportEmailLabel: "サポートメール",
      supportedProductLabel: "対象製品",
      supportedProductValue: "WristScore / 腕上记分",
      checklistHeading: "お問い合わせ時にあると助かる情報",
      faqSectionLabel: "よくある質問",
      faqTitle: "FAQ",
    },
    lists: {
      supportChecklist: [
        "デバイスの機種",
        "iPhone / Apple Watch のシステムバージョン",
        "アプリのバージョン",
        "問題が発生した具体的な手順",
        "スクリーンショットまたは録画",
        "安定して再現するかどうか",
      ],
      faqItems: [
        {
          question:
            "Apple Watch 側で運動データが正しく記録されないのはなぜですか？",
          answer:
            "Apple Watch に必要なヘルスケアおよびモーション権限が付与されているか確認してください。権限がなくてもスコア記録は可能ですが、一部の運動データは保存されない場合があります。",
        },
        {
          question: "履歴や統計が更新されないのはなぜですか？",
          answer:
            "試合が正常に終了して保存されているか確認してください。ウォッチから iPhone へ同期している場合は、両デバイスの接続状態もご確認ください。",
        },
        {
          question: "共有カードの内容が画面表示と一致しないのはなぜですか？",
          answer:
            "共有カードは現在の記録または統計の絞り込み条件に基づいて生成されます。書き出し前に、表示中の記録や期間が目的のものか確認してください。",
        },
        {
          question: "新しいルールや統計項目を提案できますか？",
          answer:
            "はい。新しい試合ルール、統計項目、書き出しスタイルの提案をメールでお送りください。実際の利用価値を見ながら継続的に改善します。",
        },
      ],
    },
  },
  ko: {
    common: {
      languageLabel: "언어",
    },
    meta: {
      title: "WristScore 지원 | yaho",
      description:
        "WristScore 지원 페이지로, 연락처, 자주 묻는 질문, 문제 제보 안내를 포함합니다.",
    },
    strings: {
      breadcrumbHome: "홈",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "지원",
      badge: "Support",
      heroTitle: "WristScore 지원",
      heroDescription:
        "WristScore 사용 중 문제가 생기거나 의견을 보내고 싶다면 아래 방법으로 연락해 주세요. 기기 정보와 재현 절차를 함께 보내주시면 원인 파악이 더 빨라집니다.",
      contactSupportButton: "지원팀에 문의",
      viewPrivacyButton: "개인정보 처리방침 보기",
      iconAlt: "WristScore 앱 아이콘",
      contactHeading: "연락처",
      supportEmailLabel: "지원 이메일",
      supportedProductLabel: "대상 제품",
      supportedProductValue: "WristScore / 腕上记分",
      checklistHeading: "문의 시 함께 보내면 좋은 정보",
      faqSectionLabel: "자주 묻는 질문",
      faqTitle: "FAQ",
    },
    lists: {
      supportChecklist: [
        "기기 모델",
        "iPhone / Apple Watch 시스템 버전",
        "앱 버전",
        "문제가 발생한 정확한 절차",
        "스크린샷 또는 화면 녹화",
        "항상 재현되는지 여부",
      ],
      faqItems: [
        {
          question:
            "왜 Apple Watch에서 운동 데이터가 정상적으로 기록되지 않나요?",
          answer:
            "Apple Watch에 필요한 건강 및 운동 권한이 허용되었는지 확인해 주세요. 권한이 없어도 점수 기록은 가능하지만 일부 운동 데이터는 저장되지 않을 수 있습니다.",
        },
        {
          question: "왜 경기 기록이나 통계가 업데이트되지 않나요?",
          answer:
            "경기가 정상적으로 종료되고 저장되었는지 확인해 주세요. 시계에서 휴대폰으로 동기화하는 경우 iPhone과 Apple Watch의 연결 상태도 확인해야 합니다.",
        },
        {
          question: "왜 공유 카드 내용이 화면과 다르게 보이나요?",
          answer:
            "공유 카드는 현재 기록 또는 현재 통계 필터 조건을 기준으로 생성됩니다. 내보내기 전에 원하는 기록이나 기간을 보고 있는지 확인해 주세요.",
        },
        {
          question: "새로운 규칙이나 통계 항목을 요청할 수 있나요?",
          answer:
            "가능합니다. 새로운 경기 규칙, 통계 항목, 내보내기 스타일에 대한 제안을 이메일로 보내 주시면 실제 활용도를 기준으로 계속 개선하겠습니다.",
        },
      ],
    },
  },
  de: {
    common: {
      languageLabel: "Sprache",
    },
    meta: {
      title: "WristScore Support | yaho",
      description:
        "Support-Seite für WristScore mit Kontaktinformationen, FAQ und Hinweisen zur Fehlerbeschreibung.",
    },
    strings: {
      breadcrumbHome: "Start",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Support",
      badge: "Support",
      heroTitle: "WristScore Support",
      heroDescription:
        "Wenn bei der Nutzung von WristScore Probleme auftreten oder du Feedback senden möchtest, nutze bitte die folgenden Kontaktwege. Geräteinformationen und Reproduktionsschritte helfen uns bei der schnelleren Analyse.",
      contactSupportButton: "Support kontaktieren",
      viewPrivacyButton: "Datenschutz ansehen",
      iconAlt: "WristScore App-Symbol",
      contactHeading: "Kontakt",
      supportEmailLabel: "Support-E-Mail",
      supportedProductLabel: "Produkt",
      supportedProductValue: "WristScore / 腕上记分",
      checklistHeading: "Bitte nach Möglichkeit mitsenden",
      faqSectionLabel: "Häufige Fragen",
      faqTitle: "FAQ",
    },
    lists: {
      supportChecklist: [
        "Gerätemodell",
        "iPhone- / Apple-Watch-Systemversion",
        "App-Version",
        "Genaue Schritte zum Auftreten des Problems",
        "Screenshots oder Bildschirmaufnahmen",
        "Ob sich das Problem zuverlässig reproduzieren lässt",
      ],
      faqItems: [
        {
          question:
            "Warum werden Trainingsdaten auf der Apple Watch nicht korrekt aufgezeichnet?",
          answer:
            "Bitte prüfe, ob die erforderlichen Health- und Bewegungsberechtigungen für die Apple Watch aktiviert sind. Das Punktesystem funktioniert auch ohne diese Berechtigungen, aber bestimmte Trainingsdaten werden dann möglicherweise nicht gespeichert.",
        },
        {
          question: "Warum werden Verlauf oder Statistiken nicht aktualisiert?",
          answer:
            "Stelle sicher, dass das Spiel korrekt beendet und gespeichert wurde. Wenn du von der Uhr auf das iPhone synchronisierst, prüfe außerdem die Verbindung zwischen beiden Geräten.",
        },
        {
          question:
            "Warum sieht die Share Card anders aus als die Anzeige auf dem Bildschirm?",
          answer:
            "Share Cards werden anhand des aktuellen Eintrags oder des aktiven Statistikfilters erzeugt. Bitte prüfe vor dem Export, ob du den gewünschten Datensatz oder Zeitraum geöffnet hast.",
        },
        {
          question:
            "Kann ich neue Regelvorlagen oder zusätzliche Statistiken anfragen?",
          answer:
            "Ja. Sende uns deine Ideen für neue Spielregeln, Statistikwerte oder Exportstile per E-Mail. Wir verbessern die App laufend nach praktischem Nutzen.",
        },
      ],
    },
  },
  fr: {
    common: {
      languageLabel: "Langue",
    },
    meta: {
      title: "Assistance WristScore | yaho",
      description:
        "Page d'assistance WristScore avec les coordonnées, la FAQ et les conseils pour signaler un problème.",
    },
    strings: {
      breadcrumbHome: "Accueil",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Assistance",
      badge: "Support",
      heroTitle: "Assistance WristScore",
      heroDescription:
        "Si vous rencontrez un problème avec WristScore ou souhaitez nous faire part d'une suggestion, contactez-nous par les moyens ci-dessous. Les informations sur l'appareil et les étapes de reproduction nous aideront à aller plus vite.",
      contactSupportButton: "Contacter l'assistance",
      viewPrivacyButton: "Voir la politique de confidentialité",
      iconAlt: "Icône de l'application WristScore",
      contactHeading: "Contact",
      supportEmailLabel: "E-mail d'assistance",
      supportedProductLabel: "Produit concerné",
      supportedProductValue: "WristScore / 腕上记分",
      checklistHeading: "À inclure si possible dans votre message",
      faqSectionLabel: "Questions fréquentes",
      faqTitle: "FAQ",
    },
    lists: {
      supportChecklist: [
        "Modèle de l'appareil",
        "Version du système iPhone / Apple Watch",
        "Version de l'application",
        "Étapes exactes pour reproduire le problème",
        "Captures d'écran ou enregistrements vidéo",
        "Indiquer si le problème est reproductible de façon stable",
      ],
      faqItems: [
        {
          question:
            "Pourquoi les données d'activité ne sont-elles pas correctement enregistrées sur l'Apple Watch ?",
          answer:
            "Vérifiez que l'Apple Watch dispose bien des autorisations Santé et Mouvement nécessaires. Le score fonctionne même sans elles, mais certaines données d'activité peuvent ne pas être enregistrées.",
        },
        {
          question:
            "Pourquoi l'historique ou les statistiques ne se mettent-ils pas à jour ?",
          answer:
            "Assurez-vous que le match a bien été terminé et enregistré. Si vous synchronisez de la montre vers l'iPhone, vérifiez aussi que les deux appareils sont correctement connectés.",
        },
        {
          question:
            "Pourquoi la carte de partage diffère-t-elle de ce qui apparaît à l'écran ?",
          answer:
            "Les cartes de partage sont générées à partir de l'enregistrement actuel ou du filtre statistique actif. Vérifiez avant l'export que vous affichez bien le bon élément ou la bonne période.",
        },
        {
          question: "Puis-je proposer de nouvelles règles ou statistiques ?",
          answer:
            "Oui. Vous pouvez envoyer par e-mail vos idées de nouvelles règles, statistiques ou styles d'export. Nous continuerons à améliorer l'application selon leur utilité réelle.",
        },
      ],
    },
  },
  es: {
    common: {
      languageLabel: "Idioma",
    },
    meta: {
      title: "Soporte de WristScore | yaho",
      description:
        "Página de soporte de WristScore con datos de contacto, preguntas frecuentes e instrucciones para reportar problemas.",
    },
    strings: {
      breadcrumbHome: "Inicio",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Soporte",
      badge: "Support",
      heroTitle: "Soporte de WristScore",
      heroDescription:
        "Si encuentras problemas al usar WristScore o quieres enviarnos comentarios, contáctanos por las vías siguientes. Incluir información del dispositivo y pasos de reproducción nos ayudará a revisar el caso más rápido.",
      contactSupportButton: "Contactar soporte",
      viewPrivacyButton: "Ver política de privacidad",
      iconAlt: "Icono de la app WristScore",
      contactHeading: "Contacto",
      supportEmailLabel: "Correo de soporte",
      supportedProductLabel: "Producto",
      supportedProductValue: "WristScore / 腕上记分",
      checklistHeading: "Información recomendada al reportar",
      faqSectionLabel: "Preguntas frecuentes",
      faqTitle: "FAQ",
    },
    lists: {
      supportChecklist: [
        "Modelo del dispositivo",
        "Versión del sistema de iPhone / Apple Watch",
        "Versión de la app",
        "Pasos exactos para reproducir el problema",
        "Capturas de pantalla o grabaciones",
        "Si el problema se puede reproducir de forma estable",
      ],
      faqItems: [
        {
          question:
            "¿Por qué los datos de ejercicio no se registran correctamente en el Apple Watch?",
          answer:
            "Asegúrate de que Apple Watch tenga concedidos los permisos necesarios de Salud y Movimiento. El marcador seguirá funcionando aunque no estén activados, pero parte de los datos de ejercicio podría no registrarse.",
        },
        {
          question:
            "¿Por qué no se actualizan el historial o las estadísticas?",
          answer:
            "Comprueba que el partido haya terminado y se haya guardado correctamente. Si sincronizas del reloj al teléfono, confirma también que iPhone y Apple Watch estén conectados con normalidad.",
        },
        {
          question:
            "¿Por qué la tarjeta compartida no coincide con lo que veo en pantalla?",
          answer:
            "Las tarjetas se generan según el registro actual o el filtro de estadísticas activo. Antes de exportar, confirma que estás viendo el registro o el rango de tiempo correctos.",
        },
        {
          question: "¿Puedo sugerir nuevas reglas o estadísticas?",
          answer:
            "Sí. Puedes enviarnos por correo ideas sobre nuevas reglas de juego, estadísticas o estilos de exportación, y seguiremos mejorando la app según su valor práctico.",
        },
      ],
    },
  },
  it: {
    common: {
      languageLabel: "Lingua",
    },
    meta: {
      title: "Supporto WristScore | yaho",
      description:
        "Pagina di supporto di WristScore con contatti, FAQ e indicazioni per segnalare problemi.",
    },
    strings: {
      breadcrumbHome: "Home",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Supporto",
      badge: "Support",
      heroTitle: "Supporto WristScore",
      heroDescription:
        "Se riscontri problemi durante l'uso di WristScore o vuoi inviare suggerimenti, contattaci con i canali qui sotto. Le informazioni sul dispositivo e i passaggi per riprodurre il problema ci aiuteranno a indagare più velocemente.",
      contactSupportButton: "Contatta il supporto",
      viewPrivacyButton: "Visualizza privacy",
      iconAlt: "Icona dell'app WristScore",
      contactHeading: "Contatti",
      supportEmailLabel: "Email di supporto",
      supportedProductLabel: "Prodotto",
      supportedProductValue: "WristScore / 腕上记分",
      checklistHeading: "Informazioni utili da includere",
      faqSectionLabel: "Domande frequenti",
      faqTitle: "FAQ",
    },
    lists: {
      supportChecklist: [
        "Modello del dispositivo",
        "Versione di sistema di iPhone / Apple Watch",
        "Versione dell'app",
        "Passaggi esatti per riprodurre il problema",
        "Screenshot o registrazioni dello schermo",
        "Se il problema è riproducibile in modo costante",
      ],
      faqItems: [
        {
          question:
            "Perché i dati di attività non vengono registrati correttamente su Apple Watch?",
          answer:
            "Assicurati che Apple Watch abbia i permessi necessari per Salute e Movimento. Il punteggio continuerà a funzionare anche senza quei permessi, ma parte dei dati di attività potrebbe non essere registrata.",
        },
        {
          question: "Perché cronologia o statistiche non si aggiornano?",
          answer:
            "Verifica che la partita sia terminata e salvata correttamente. Se sincronizzi dall'orologio al telefono, controlla anche che iPhone e Apple Watch siano collegati normalmente.",
        },
        {
          question:
            "Perché il contenuto della scheda condivisa è diverso da quello visibile nella pagina?",
          answer:
            "Le schede condivise vengono generate dal record attuale o dal filtro statistico attivo. Prima di esportare, assicurati di stare visualizzando il record o l'intervallo temporale corretto.",
        },
        {
          question: "Posso proporre nuove regole o statistiche?",
          answer:
            "Sì. Puoi inviarci via email idee per nuove regole di partita, statistiche o stili di esportazione. Continueremo a migliorare l'app in base al valore pratico.",
        },
      ],
    },
  },
};

export const WRISTSCORE_PRIVACY_CONTENT: Record<
  WristScoreLocale,
  WristScorePrivacyContent
> = {
  "zh-CN": {
    common: {
      languageLabel: "语言",
    },
    meta: {
      title: "腕上记分隐私政策 | yaho",
      description:
        "腕上记分隐私政策页面，说明应用如何处理本地数据存储、iCloud 同步备份与隐私相关事项。",
    },
    strings: {
      breadcrumbHome: "首页",
      breadcrumbRoot: "腕上记分",
      breadcrumbCurrent: "隐私政策",
      badge: "Privacy Policy",
      heroTitle: "腕上记分隐私政策",
      updatedAt: "更新日期：2026-04-20",
      heroDescription:
        "感谢您使用“腕上记分”应用。我们非常重视您的隐私，并承诺保护您的个人信息。本隐私政策旨在说明我们如何处理您的数据。",
      iconAlt: "腕上记分 App 图标",
    },
    lists: {
      summaryCards: [
        {
          title: "核心原则",
          desc: "以本地存储为主，不主动收集个人信息，不向第三方分享数据。",
        },
        {
          title: "涉及内容",
          desc: "记分规则、历史记录与偏好设置保存在设备本地，或通过个人 iCloud 账户同步备份。",
        },
        {
          title: "联系方式",
          desc: "如有疑问、建议或反馈，可通过应用设置页中的“联系与反馈”发送邮件。",
        },
      ],
      policySections: [
        {
          title: "1. 数据收集与使用",
          body: '"腕上记分"是一个纯本地运行的应用程序。您的所有记分规则、历史记录以及偏好设置均安全地存储在您的个人设备（iPhone 和 Apple Watch）本地，或是通过您的个人 iCloud 账户进行同步备份。我们不会主动收集任何您的个人信息。',
        },
        {
          title: "2. 数据分享与第三方",
          body: "我们不会将您的任何个人数据或使用记录出售、出租或以任何形式分享给任何第三方。本应用未集成任何隐蔽的第三方数据收集分析工具或广告追踪 SDK。",
        },
        {
          title: "3. 政策更新",
          body: "我们可能会适时更新本隐私政策。任何更新将随应用的更新版本一同发布，并在应用内体现。继续使用本应用即表示您同意更新后的隐私政策。",
        },
        {
          title: "4. 联系我们",
          body: "如果您对本隐私政策有任何疑问、建议或希望提供反馈，请通过设置页面中的“联系与反馈”功能向我们发送电子邮件。",
        },
      ],
    },
  },
  en: {
    common: {
      languageLabel: "Language",
    },
    meta: {
      title: "WristScore Privacy Policy | yaho",
      description:
        "Privacy policy for WristScore, explaining local data storage, iCloud backup, and how privacy-related information is handled.",
    },
    strings: {
      breadcrumbHome: "Home",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Privacy Policy",
      badge: "Privacy Policy",
      heroTitle: "WristScore Privacy Policy",
      updatedAt: "Updated: April 20, 2026",
      heroDescription:
        "Thank you for using WristScore. We take your privacy seriously and are committed to protecting your personal information. This policy explains how your data is handled.",
      iconAlt: "WristScore app icon",
    },
    lists: {
      summaryCards: [
        {
          title: "Core Principle",
          desc: "Data stays primarily on your own device. We do not proactively collect personal information or share data with third parties.",
        },
        {
          title: "What This Covers",
          desc: "Scoring rules, match history, and preferences are stored locally on your device or backed up through your personal iCloud account.",
        },
        {
          title: "Contact",
          desc: "If you have questions, suggestions, or feedback, send us an email through the in-app contact and feedback entry.",
        },
      ],
      policySections: [
        {
          title: "1. Data Collection and Use",
          body: "WristScore is an app that runs locally on your devices. Your scoring rules, history, and preferences are stored safely on your own iPhone and Apple Watch, or backed up through your personal iCloud account. We do not actively collect your personal information.",
        },
        {
          title: "2. Data Sharing and Third Parties",
          body: "We do not sell, rent, or share your personal data or usage records with any third party in any form. The app does not include hidden third-party analytics tools or advertising tracking SDKs.",
        },
        {
          title: "3. Policy Updates",
          body: "We may update this privacy policy from time to time. Any changes will be released together with app updates and reflected inside the app. By continuing to use the app, you agree to the updated policy.",
        },
        {
          title: "4. Contact Us",
          body: "If you have questions, suggestions, or feedback about this privacy policy, please use the in-app contact and feedback option to send us an email.",
        },
      ],
    },
  },
  ja: {
    common: {
      languageLabel: "言語",
    },
    meta: {
      title: "WristScore プライバシーポリシー | yaho",
      description:
        "WristScore のプライバシーポリシーです。ローカル保存、iCloud バックアップ、プライバシーに関する取り扱いを説明します。",
    },
    strings: {
      breadcrumbHome: "ホーム",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "プライバシーポリシー",
      badge: "Privacy Policy",
      heroTitle: "WristScore プライバシーポリシー",
      updatedAt: "更新日: 2026-04-20",
      heroDescription:
        "WristScore をご利用いただきありがとうございます。私たちはお客様のプライバシーを重視し、個人情報の保護に努めています。このポリシーでは、データの取り扱い方法について説明します。",
      iconAlt: "WristScore アプリアイコン",
    },
    lists: {
      summaryCards: [
        {
          title: "基本方針",
          desc: "データは主にお客様の端末内に保存されます。個人情報を積極的に収集したり、第三者へ共有したりすることはありません。",
        },
        {
          title: "対象データ",
          desc: "スコア記録ルール、対戦履歴、各種設定は端末内に保存されるか、個人の iCloud アカウントを通じてバックアップされます。",
        },
        {
          title: "お問い合わせ",
          desc: "ご質問、ご提案、ご意見がある場合は、アプリ内の問い合わせ機能からメールでご連絡ください。",
        },
      ],
      policySections: [
        {
          title: "1. データの収集と利用",
          body: "WristScore は端末上でローカルに動作するアプリです。スコア設定、履歴、各種設定は、お客様自身の iPhone と Apple Watch に安全に保存されるか、個人の iCloud アカウント経由でバックアップされます。私たちが個人情報を積極的に収集することはありません。",
        },
        {
          title: "2. データ共有と第三者",
          body: "個人データや利用履歴を第三者に販売、貸与、共有することはありません。また、アプリには隠れた第三者解析ツールや広告追跡 SDK は組み込まれていません。",
        },
        {
          title: "3. ポリシーの更新",
          body: "本プライバシーポリシーは必要に応じて更新される場合があります。変更内容はアプリの更新とあわせて公開され、アプリ内にも反映されます。引き続きアプリを利用することで、更新後のポリシーに同意したものとみなされます。",
        },
        {
          title: "4. お問い合わせ",
          body: "本プライバシーポリシーについてご質問、ご提案、ご意見がある場合は、アプリ内の問い合わせ機能からメールでご連絡ください。",
        },
      ],
    },
  },
  ko: {
    common: {
      languageLabel: "언어",
    },
    meta: {
      title: "WristScore 개인정보 처리방침 | yaho",
      description:
        "WristScore 개인정보 처리방침 페이지로, 로컬 저장, iCloud 백업, 개인정보 관련 처리 방식을 설명합니다.",
    },
    strings: {
      breadcrumbHome: "홈",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "개인정보 처리방침",
      badge: "Privacy Policy",
      heroTitle: "WristScore 개인정보 처리방침",
      updatedAt: "업데이트 날짜: 2026-04-20",
      heroDescription:
        "WristScore를 이용해 주셔서 감사합니다. 저희는 사용자의 개인정보를 중요하게 생각하며 이를 보호하기 위해 노력합니다. 이 문서는 데이터가 어떻게 처리되는지 설명합니다.",
      iconAlt: "WristScore 앱 아이콘",
    },
    lists: {
      summaryCards: [
        {
          title: "핵심 원칙",
          desc: "데이터는 주로 사용자 기기에 저장됩니다. 개인정보를 적극적으로 수집하지 않으며 제3자와 공유하지 않습니다.",
        },
        {
          title: "적용 대상",
          desc: "점수 규칙, 경기 기록, 환경설정은 기기에 로컬 저장되거나 개인 iCloud 계정을 통해 백업됩니다.",
        },
        {
          title: "연락 방법",
          desc: "질문, 제안, 피드백이 있다면 앱 내 문의 및 피드백 기능을 통해 이메일을 보내 주세요.",
        },
      ],
      policySections: [
        {
          title: "1. 데이터 수집 및 사용",
          body: "WristScore는 사용자의 기기에서 로컬로 실행되는 앱입니다. 점수 규칙, 기록, 환경설정은 사용자의 iPhone과 Apple Watch에 안전하게 저장되거나 개인 iCloud 계정을 통해 백업됩니다. 저희는 사용자의 개인정보를 적극적으로 수집하지 않습니다.",
        },
        {
          title: "2. 데이터 공유 및 제3자",
          body: "당사는 어떠한 형태로도 사용자의 개인정보나 사용 기록을 제3자에게 판매, 임대 또는 공유하지 않습니다. 앱에는 숨겨진 제3자 분석 도구나 광고 추적 SDK가 포함되어 있지 않습니다.",
        },
        {
          title: "3. 정책 업데이트",
          body: "본 개인정보 처리방침은 필요에 따라 업데이트될 수 있습니다. 변경 사항은 앱 업데이트와 함께 배포되며 앱 내에도 반영됩니다. 앱을 계속 사용하면 업데이트된 정책에 동의한 것으로 간주됩니다.",
        },
        {
          title: "4. 문의하기",
          body: "이 개인정보 처리방침에 대한 질문, 제안 또는 피드백이 있다면 앱 내 문의 및 피드백 기능을 통해 이메일로 연락해 주세요.",
        },
      ],
    },
  },
  de: {
    common: {
      languageLabel: "Sprache",
    },
    meta: {
      title: "WristScore Datenschutz | yaho",
      description:
        "Datenschutzrichtlinie für WristScore mit Informationen zu lokaler Speicherung, iCloud-Backup und dem Umgang mit Privatsphäre-relevanten Daten.",
    },
    strings: {
      breadcrumbHome: "Start",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Datenschutz",
      badge: "Privacy Policy",
      heroTitle: "WristScore Datenschutz",
      updatedAt: "Aktualisiert am: 20. April 2026",
      heroDescription:
        "Vielen Dank, dass du WristScore nutzt. Wir nehmen deine Privatsphäre ernst und verpflichten uns zum Schutz deiner persönlichen Informationen. Diese Richtlinie erklärt, wie deine Daten behandelt werden.",
      iconAlt: "WristScore App-Symbol",
    },
    lists: {
      summaryCards: [
        {
          title: "Grundprinzip",
          desc: "Daten bleiben in erster Linie auf deinem eigenen Gerät. Wir sammeln keine persönlichen Informationen aktiv und geben keine Daten an Dritte weiter.",
        },
        {
          title: "Was darunter fällt",
          desc: "Zählregeln, Spielhistorie und Einstellungen werden lokal auf deinem Gerät gespeichert oder über dein persönliches iCloud-Konto gesichert.",
        },
        {
          title: "Kontakt",
          desc: "Bei Fragen, Vorschlägen oder Feedback kannst du uns über die Kontaktfunktion in der App eine E-Mail senden.",
        },
      ],
      policySections: [
        {
          title: "1. Datenerhebung und Nutzung",
          body: "WristScore ist eine App, die lokal auf deinen Geräten läuft. Deine Zählregeln, Historie und Einstellungen werden sicher auf deinem iPhone und deiner Apple Watch gespeichert oder über dein persönliches iCloud-Konto gesichert. Wir sammeln deine persönlichen Informationen nicht aktiv.",
        },
        {
          title: "2. Datenweitergabe und Dritte",
          body: "Wir verkaufen, vermieten oder teilen deine persönlichen Daten oder Nutzungsaufzeichnungen in keiner Form mit Dritten. Die App enthält keine versteckten Analysewerkzeuge Dritter oder Werbe-Tracking-SDKs.",
        },
        {
          title: "3. Aktualisierungen der Richtlinie",
          body: "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Änderungen werden zusammen mit App-Updates veröffentlicht und in der App abgebildet. Durch die weitere Nutzung der App stimmst du der aktualisierten Richtlinie zu.",
        },
        {
          title: "4. Kontakt",
          body: "Wenn du Fragen, Vorschläge oder Feedback zu dieser Datenschutzrichtlinie hast, nutze bitte die Kontakt- und Feedbackfunktion in der App, um uns eine E-Mail zu senden.",
        },
      ],
    },
  },
  fr: {
    common: {
      languageLabel: "Langue",
    },
    meta: {
      title: "Politique de confidentialité WristScore | yaho",
      description:
        "Politique de confidentialité de WristScore expliquant le stockage local, la sauvegarde iCloud et le traitement des données liées à la vie privée.",
    },
    strings: {
      breadcrumbHome: "Accueil",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Politique de confidentialité",
      badge: "Privacy Policy",
      heroTitle: "Politique de confidentialité WristScore",
      updatedAt: "Mise à jour : 20 avril 2026",
      heroDescription:
        "Merci d'utiliser WristScore. Nous accordons une grande importance à votre vie privée et nous engageons à protéger vos informations personnelles. Cette politique explique comment vos données sont traitées.",
      iconAlt: "Icône de l'application WristScore",
    },
    lists: {
      summaryCards: [
        {
          title: "Principe clé",
          desc: "Les données restent principalement sur votre appareil. Nous ne collectons pas activement d'informations personnelles et ne partageons pas les données avec des tiers.",
        },
        {
          title: "Ce qui est concerné",
          desc: "Les règles de score, l'historique des matchs et les préférences sont stockés localement sur l'appareil ou sauvegardés via votre compte iCloud personnel.",
        },
        {
          title: "Contact",
          desc: "Pour toute question, suggestion ou remarque, vous pouvez nous écrire via l'option de contact intégrée à l'application.",
        },
      ],
      policySections: [
        {
          title: "1. Collecte et utilisation des données",
          body: "WristScore est une application qui fonctionne localement sur vos appareils. Vos règles de score, historiques et préférences sont stockés en sécurité sur votre iPhone et votre Apple Watch, ou sauvegardés via votre compte iCloud personnel. Nous ne collectons pas activement vos informations personnelles.",
        },
        {
          title: "2. Partage des données et tiers",
          body: "Nous ne vendons, ne louons et ne partageons vos données personnelles ou historiques d'utilisation avec aucun tiers, sous quelque forme que ce soit. L'application n'intègre aucun outil caché d'analyse tiers ni aucun SDK de suivi publicitaire.",
        },
        {
          title: "3. Mises à jour de la politique",
          body: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée avec les mises à jour de l'application et reflétée dans l'application. En continuant à utiliser l'application, vous acceptez la politique mise à jour.",
        },
        {
          title: "4. Nous contacter",
          body: "Si vous avez des questions, suggestions ou remarques au sujet de cette politique de confidentialité, veuillez utiliser l'option de contact et de retour intégrée à l'application pour nous envoyer un e-mail.",
        },
      ],
    },
  },
  es: {
    common: {
      languageLabel: "Idioma",
    },
    meta: {
      title: "Política de privacidad de WristScore | yaho",
      description:
        "Política de privacidad de WristScore con información sobre almacenamiento local, copia de seguridad en iCloud y tratamiento de datos relacionados con la privacidad.",
    },
    strings: {
      breadcrumbHome: "Inicio",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Política de privacidad",
      badge: "Privacy Policy",
      heroTitle: "Política de privacidad de WristScore",
      updatedAt: "Actualizado: 20 de abril de 2026",
      heroDescription:
        "Gracias por usar WristScore. Nos tomamos tu privacidad en serio y nos comprometemos a proteger tu información personal. Esta política explica cómo se tratan tus datos.",
      iconAlt: "Icono de la app WristScore",
    },
    lists: {
      summaryCards: [
        {
          title: "Principio central",
          desc: "Los datos permanecen principalmente en tu propio dispositivo. No recopilamos activamente información personal ni compartimos datos con terceros.",
        },
        {
          title: "Qué incluye",
          desc: "Las reglas de puntuación, el historial de partidos y las preferencias se guardan localmente en el dispositivo o se respaldan en tu cuenta personal de iCloud.",
        },
        {
          title: "Contacto",
          desc: "Si tienes preguntas, sugerencias o comentarios, puedes enviarnos un correo desde la opción de contacto incluida en la app.",
        },
      ],
      policySections: [
        {
          title: "1. Recopilación y uso de datos",
          body: "WristScore es una aplicación que funciona localmente en tus dispositivos. Tus reglas de puntuación, historial y preferencias se almacenan de forma segura en tu iPhone y Apple Watch, o se respaldan mediante tu cuenta personal de iCloud. No recopilamos activamente tu información personal.",
        },
        {
          title: "2. Compartición de datos y terceros",
          body: "No vendemos, alquilamos ni compartimos tus datos personales o registros de uso con terceros bajo ninguna forma. La aplicación no incluye herramientas ocultas de análisis de terceros ni SDK de seguimiento publicitario.",
        },
        {
          title: "3. Actualizaciones de la política",
          body: "Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio se publicará junto con las actualizaciones de la app y se reflejará dentro de la aplicación. Al seguir usando la app, aceptas la política actualizada.",
        },
        {
          title: "4. Contacto",
          body: "Si tienes preguntas, sugerencias o comentarios sobre esta política de privacidad, utiliza la opción de contacto y comentarios de la app para enviarnos un correo electrónico.",
        },
      ],
    },
  },
  it: {
    common: {
      languageLabel: "Lingua",
    },
    meta: {
      title: "Informativa sulla privacy di WristScore | yaho",
      description:
        "Informativa sulla privacy di WristScore con dettagli su archiviazione locale, backup iCloud e trattamento dei dati legati alla privacy.",
    },
    strings: {
      breadcrumbHome: "Home",
      breadcrumbRoot: "WristScore",
      breadcrumbCurrent: "Informativa sulla privacy",
      badge: "Privacy Policy",
      heroTitle: "Informativa sulla privacy di WristScore",
      updatedAt: "Aggiornato il: 20 aprile 2026",
      heroDescription:
        "Grazie per usare WristScore. Prendiamo molto sul serio la tua privacy e ci impegniamo a proteggere le tue informazioni personali. Questa informativa spiega come vengono trattati i tuoi dati.",
      iconAlt: "Icona dell'app WristScore",
    },
    lists: {
      summaryCards: [
        {
          title: "Principio fondamentale",
          desc: "I dati restano principalmente sul tuo dispositivo. Non raccogliamo attivamente informazioni personali né condividiamo dati con terze parti.",
        },
        {
          title: "Cosa comprende",
          desc: "Regole di punteggio, cronologia partite e preferenze vengono salvate localmente sul dispositivo o sottoposte a backup tramite il tuo account iCloud personale.",
        },
        {
          title: "Contatti",
          desc: "Per domande, suggerimenti o feedback, puoi inviarci un'email tramite la funzione di contatto integrata nell'app.",
        },
      ],
      policySections: [
        {
          title: "1. Raccolta e utilizzo dei dati",
          body: "WristScore è un'app che funziona localmente sui tuoi dispositivi. Le regole di punteggio, la cronologia e le preferenze vengono archiviate in modo sicuro sul tuo iPhone e Apple Watch, oppure sottoposte a backup tramite il tuo account iCloud personale. Non raccogliamo attivamente le tue informazioni personali.",
        },
        {
          title: "2. Condivisione dei dati e terze parti",
          body: "Non vendiamo, affittiamo né condividiamo in alcuna forma i tuoi dati personali o i registri di utilizzo con terze parti. L'app non integra strumenti nascosti di analisi di terze parti né SDK di tracciamento pubblicitario.",
        },
        {
          title: "3. Aggiornamenti dell'informativa",
          body: "Potremmo aggiornare questa informativa sulla privacy di tanto in tanto. Eventuali modifiche saranno pubblicate insieme agli aggiornamenti dell'app e riflesse all'interno dell'app stessa. Continuando a usare l'app, accetti l'informativa aggiornata.",
        },
        {
          title: "4. Contattaci",
          body: "Se hai domande, suggerimenti o feedback su questa informativa sulla privacy, utilizza l'opzione di contatto e feedback presente nell'app per inviarci un'email.",
        },
      ],
    },
  },
};
