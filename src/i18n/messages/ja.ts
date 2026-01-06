import en from "./en";

const ja = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "オープンなPR — マージに投票しよう",
  "home.githubLink": "GitHubで見る",
  "home.empty.title": "まだオープンなPRはありません。",
  "home.empty.subtitle": "最初のPRを送信してみましょう！",
  "home.loading": "PRを読み込み中…",
  "home.error.retry": "1分後にもう一度お試しください。",
  "countdown.label": "次のマージまで",
  "snow.toggle.on": "雪をオンにする",
  "snow.toggle.off": "雪をオフにする",
  "language.switcher.label": "言語",
} as const;

export type JaMessages = typeof ja;

export default ja;

