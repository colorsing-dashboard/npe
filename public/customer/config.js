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
    "titleGlassBlur": 3,
    "titlePaddingY": 10,
    "headerOverlayOpacity": 0.2,
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
    "gold": "#ffd700",
    "brightness": "dark"
  },
  "colorOverrides": {
    "headerGradientStart": "#52d6fc",
    "headerGradientEnd": "#016e8f",
    "titleGradientStart": "#74a7ff",
    "titleGradientMid": "#5c5c5c",
    "titleGradientEnd": "#6c0023",
    "cardBorder": "",
    "cardBorderHover": "",
    "primaryText": "#ffffff",
    "accentText": "#5a1c00",
    "rank1Card": "#5c0701",
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
    "display": "'Stick', sans-serif",
    "displayUrl": "https://fonts.googleapis.com/css2?family=Stick:wght@400&display=swap",
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
    "spreadsheetId": "1u5WLPZhWkxu5i3mIgMYUl-bfIVjly0iBnv0GfoQSTsY",
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
      "columnIndex": 1,
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
      "columnIndex": 2,
      "displayTemplate": "権利: {value}曲分",
      "isBoolean": false
    },
    {
      "key": "30k",
      "icon": "💬",
      "columnIndex": 3,
      "displayTemplate": "権利: {value}時間分"
    },
    {
      "key": "WANTED",
      "icon": "🐧",
      "columnIndex": 4,
      "displayTemplate": "獲得済み！",
      "isBoolean": true,
      "useKey": true,
      "isMembership": true,
      "accessKey": "2222",
      "lockedContent": {
        "text": "WANTEDアイコン。グッズも考えておりますので、少々正座してお待ちください",
        "imageUrl": "https://drive.google.com/file/d/1DdO6ElcTw8quSR1oUbQ8mABbsfurGhmH/view?usp=drivesdk"
      }
    },
    {
      "key": "ゲーム参加特典",
      "icon": "🔔",
      "columnIndex": 5,
      "displayTemplate": "特典: 特典内容は枠内で",
      "useKey": true,
      "isMembership": true,
      "lockedContent": {
        "text": "このホムペ専用アイコン！他のアプリに使用も可！あなたのスマホ監視員のペンギンです🐧🔍設定方法はイベントタブの設定画面より！",
        "imageUrl": "https://drive.google.com/file/d/1TxV7UZeCbnxBFT1rt4zJ5R0G9RD7G_9E/view?usp=drivesdk"
      },
      "accessKey": "oshitoyaka"
    },
    {
      "key": "設定方法",
      "icon": "📝",
      "columnIndex": 6,
      "displayTemplate": "特典: {value}",
      "isMembership": true,
      "useKey": true,
      "lockedContent": {
        "imageUrl": "https://drive.google.com/file/d/1JA0-CLptJ-Xo4J-3mF9EkvbNKLs9OCBK/view?usp=drivesdk",
        "text": "こちらが設定方法になります！"
      }
    }
  ],
  "home": {
    "rankingTitle": "Ranking",
    "pointsLabel": "刑期",
    "pointsUnit": "年",
    "targetsTitle": "🔑重罪判定🗡️",
    "targetLabels": [
      "🔑条件1",
      "🔑条件2"
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
          "answer": "ある年数に達すると、業務が課されることがあります。年数を重ねないように注意しましょう。また、ご用意してないものに関しては最初の到達者と相談になります。"
        },
        {
          "question": "枠について",
          "answer": "みんなでわちゃわちゃ楽しむことが大事なので、決して無理はしないこと。"
        }
      ]
    }
  },
  "menu": {
    "title": "案内板"
  },
  "ui": {
    "errorTitle": "指名手配呼び出してないので確認してください",
    "errorMessage": "手配書が読み込めません。看守の見回り来てないうちにロードしましょう",
    "retryButton": "再呼び出し中",
    "refreshButton": "罪状判定",
    "lastUpdate": "最終罪状",
    "iconLoading": "🔍手配犯検索中🔍....",
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
