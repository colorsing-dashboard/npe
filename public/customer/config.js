// ダッシュボード設定ファイル
// 管理画面（admin.html）からエクスポートされた設定です

window.DASHBOARD_CONFIG = {
  "brand": {
    "name": "吊し台(推し特典ぺ)",
    "sidebarTitle": "　color sing",
    "footerText": "",
    "footerSubText": "",
    "footerNote": "",
    "pageTitle": "鶴し台 - 特典管理",
    "loadingEmoji": "🐧🐾🐾🐾",
    "loadingText": "手配班呼び出し中...",
    "showTitle": true,
    "titleGradient": true,
    "titleGradientDirection": "to-b"
  },
  "colors": {
    "deepBlue": "#06080e",
    "oceanTeal": "#0c1428",
    "lightBlue": "#58c0e0",
    "amber": "#c0b8f0",
    "accent": "#4080d8",
    "gold": "#e8f4ff"
  },
  "colorOverrides": {
    "headerGradientStart": "#012f7b",
    "headerGradientEnd": "#474747",
    "cardBorder": "",
    "cardBorderHover": "",
    "primaryText": "",
    "accentText": "",
    "rank1Card": "",
    "backgroundMain": "",
    "backgroundMid": "",
    "nameText": "",
    "footerText": "",
    "contentText": "",
    "titleColor": "",
    "glassBgColor": "#454d59",
    "glassBgOpacity": 0.8
  },
  "fonts": {
    "display": "'Hachi Maru Pop', cursive",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap",
    "body": "'Hachi Maru Pop', cursive",
    "bodyUrl": "https://fonts.googleapis.com/css2?family=Hachi%20Maru%20Pop:wght@400&display=swap",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap"
  },
  "images": {
    "headerDesktop": "",
    "headerMobile": "",
    "favicon": "./customer/vite.svg"
  },
  "sheets": {
    "spreadsheetId": "1-HbWK_-RuNYTt5jHklwrM-LQMzSOttBa2Vb51L0C_GQ",
    "rankingSheetName": "目標管理・ランキング",
    "benefitsSheetName": "特典管理",
    "benefitsContentSheetName": "特典内容",
    "historySheetName": "特典履歴",
    "iconSheetName": "枠内アイコン",
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
      "label": "罪人",
      "icon": "👥",
      "enabled": true,
      "title": "罪人"
    },
    {
      "id": "icons",
      "label": "手配写真",
      "icon": "🖼️",
      "enabled": true,
      "title": "手配写真"
    }
  ],
  "benefitTiers": [
    {
      "key": "3k",
      "icon": "🖼️",
      "columnIndex": 1,
      "displayTemplate": "獲得済！",
      "isMembership": false,
      "isBoolean": true
    },
    {
      "key": "5k",
      "icon": "🔒",
      "columnIndex": 2,
      "displayTemplate": "獲得済！",
      "isBoolean": true
    },
    {
      "key": "10k",
      "icon": "🎭",
      "columnIndex": 3,
      "displayTemplate": "獲得済！",
      "isBoolean": true
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
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "歌推しPt",
    "targetsTitle": "Targets",
    "targetLabels": [
      "今旬の目標",
      "今月の目標"
    ],
    "faq": {
      "enabled": true,
      "title": "📝 FAQ・注意事項",
      "items": [
        {
          "question": "ギフトに関して",
          "answer": "アイテム非推奨の枠になってます。枠の背景にも吊し上げられますので、ご容赦ください。"
        }
      ]
    }
  },
  "menu": {
    "title": "Menu"
  },
  "ui": {
    "errorTitle": "エラー",
    "errorMessage": "データの読み込みに失敗しました。しばらくしてから再度お試しください。",
    "retryButton": "再読み込み",
    "refreshButton": "更新",
    "lastUpdate": "最終更新",
    "iconLoading": "アイコンデータを読み込み中...",
    "iconEmpty": "アイコンデータがありません",
    "iconNoImages": "アイコンがありません",
    "userListTitle": "獲得者一覧",
    "userIconTitle": "{user} ",
    "searchPlaceholder": "🔍 名前で検索...",
    "specialRightLabel": "Special権利",
    "imageError": "画像エラー"
  },
  "effects": {
    "iconFloat": true,
    "particles": "bubble",
    "particleDirection": "up",
    "particleColor": "#ebebeb",
    "particleSize": 1,
    "particleOpacity": 2
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
