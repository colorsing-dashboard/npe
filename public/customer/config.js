// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "吊され版",
    "sidebarTitle": "　color sing",
    "footerText": ".....ご利用は指名手配者入り.....",
    "footerSubText": "🐧🐾.......🐧🐾.......",
    "footerNote": "©️prodused by まぐろふぉん🐟🎧",
    "pageTitle": "吊るし台 - 特典管理",
    "loadingEmoji": "🐧🐾🐾🐾",
    "loadingText": "...手配犯呼び出し中...",
    "showHeader": true,
    "showTitle": true,
    "titleStyle": "glass",
    "titleGradient": true,
    "titleGradientDirection": "to-t",
    "titleGlow": true,
    "titlePosition": "center",
    "titleSize": "large",
    "titleTextFill": "gradient",
    "titleGlassBg": 0.05,
    "titleGlassBlur": 7,
    "titlePaddingY": 6,
    "headerOverlayOpacity": 0.15,
    "headerImageFit": "contain",
    "headerHeight": "",
    "headerHeightMobile": "",
    "headerImageW": 0,
    "headerImageH": 0,
    "headerImageWMobile": 0,
    "headerImageHMobile": 0
  },
  "colors": {
    "deepBlue": "#74a7ff",
    "oceanTeal": "#858585",
    "lightBlue": "#a7c6ff",
    "amber": "#ffc777",
    "accent": "#5c0701",
    "gold": "#ffd700"
  },
  "colorOverrides": {
    "headerGradientStart": "#52d6fc",
    "headerGradientEnd": "#004d65",
    "titleGradientStart": "",
    "titleGradientMid": "",
    "titleGradientEnd": "",
    "cardBorder": "",
    "cardBorderHover": "",
    "primaryText": "#ffffff",
    "accentText": "#5a1c00",
    "rank1Card": "",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "",
    "footerText": "#5c0701",
    "contentText": "",
    "titleColor": "#f7fadb",
    "subText": "#333333",
    "popupOverlayColor": "",
    "popupOverlayOpacity": 0.35,
    "menuCardLabelColor": "",
    "menuCardLabelOpacity": "",
    "glassBgColor": "#ffffff",
    "glassBgOpacity": 0.19999999999999996
  },
  "fonts": {
    "display": "'Noto Serif JP', serif",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&display=swap",
    "body": "'Stick', sans-serif",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=Stick:wght@400&display=swap",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap"
  },
  "images": {
    "headerDesktop": "https://drive.google.com/file/d/1nfUfNDofw7wgGKfE3IhRaLnJWfkeFzTG/view?usp=drivesdk",
    "headerMobile": "https://drive.google.com/file/d/1k08s1STFkw_J9uuUR_XJGU1nkQd_2gsq/view?usp=drivesdk",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "1kcbwCKJPBxK1m63xuvMs3-y7t0sBtv6TUA3SUYO5hsA",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
    "eventSheetName": "イベント",
    "ranges": {
      "ranking": "D2:G5",
      "goals": "A2:B10",
      "benefits": "A2:E20",
      "rights": "A2:I1000",
      "history": "A2:D1000"
    },
    "refreshIntervalMs": 300000,
    "dataSheetName": "data"
  },
  "views": [
    {
      "id": "home",
      "label": "準備台",
      "icon": "🏠",
      "enabled": true
    },
    {
      "id": "menu",
      "label": "刑罰",
      "icon": "🎭",
      "enabled": true,
      "title": "刑罰"
    },
    {
      "id": "rights",
      "label": "罪人掲示板",
      "icon": "👥",
      "enabled": true,
      "title": "罪人"
    },
    {
      "id": "icons",
      "label": "手配写真",
      "icon": "🃏",
      "enabled": true,
      "title": "手配写真"
    },
    {
      "id": "events",
      "label": "イベント",
      "icon": "📝",
      "enabled": true,
      "title": "イベント"
    }
  ],
  "benefitTiers": [
    {
      "key": "10k",
      "icon": "🎭",
      "columnIndex": 3,
      "displayTemplate": "獲得済！",
      "isBoolean": true,
      "useKey": true,
      "accessKey": "1111",
      "lockedContent": {
        "text": "ペアアイコンになります！月毎に作りますのでよろしく！ツーショは嫌だろ？とるな！"
      }
    },
    {
      "key": "20k",
      "icon": "🎧",
      "columnIndex": 4,
      "displayTemplate": "権利: {value}曲分",
      "isBoolean": false
    },
    {
      "key": "30k",
      "icon": "💬",
      "columnIndex": 5,
      "displayTemplate": "権利: {value}時間分"
    },
    {
      "key": "WANTED",
      "icon": "🐧",
      "columnIndex": 6,
      "displayTemplate": "特典: {value}",
      "isBoolean": true,
      "useKey": true,
      "isMembership": true,
      "accessKey": "2222",
      "lockedContent": {
        "text": "WANTEDアイコン。グッズも考えておりますので、少々正座してお待ちください",
        "imageUrl": "https://drive.google.com/file/d/1DdO6ElcTw8quSR1oUbQ8mABbsfurGhmH/view?usp=drivesdk"
      }
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "刑期",
    "pointsUnit": "年",
    "targetsTitle": "WANTED",
    "targetLabels": [
      "旬",
      "月"
    ],
    "faq": {
      "enabled": true,
      "title": "📝 FAQ・注意事項",
      "items": [
        {
          "question": "ギフトに関して",
          "answer": "アイテム非推奨の枠になってます。枠の背景にも吊し上げられますので、ご容赦ください。そのためここの使用は吊し上げ仕様です。"
        },
        {
          "question": "刑期について",
          "answer": "ある年数に達すると、良い行いをすることで得るものがあります。ご用意してないものに関しては最初の到達者と相談になります。"
        }
      ]
    }
  },
  "menu": {
    "title": "案内板"
  },
  "ui": {
    "errorTitle": "呼び出してないので確認してください",
    "errorMessage": "データの読み込みに失敗しました。しばらくしてから再度お試しください。",
    "retryButton": "再呼び出し中",
    "refreshButton": "罪状判定",
    "lastUpdate": "最終罪状",
    "iconLoading": "アイコンデータを読み込み中...",
    "iconEmpty": "アイコンデータがありません",
    "iconNoImages": "アイコンがありません",
    "userListTitle": "拘留中",
    "userIconTitle": "ならず者No.{user} ",
    "searchPlaceholder": "🔍 犯人を探す🔍",
    "specialRightLabel": "極",
    "imageError": "画像エラー"
  },
  "effects": {
    "iconFloat": true,
    "particles": "bubble",
    "particleDirection": "up",
    "particleColor": "#cbf0ff",
    "particleSize": 2,
    "particleOpacity": 2.5
  },
  "deploy": {
    "owner": "colorsing-dashboard",
    "repo": "npe",
    "branch": "main",
    "token": "rev:jQ70MeDJCMW3J7DLgZDED0J7XsF8CdmVITPTQ8rQ4J1DB9ShZAsHIa4PPpM_3fzINBxMwbX80IMBSTQB11_tap_buhtig"
  },
  "admin": {
    "password": "npepe",
    "developerKey": "CSadmin"
  }
}
