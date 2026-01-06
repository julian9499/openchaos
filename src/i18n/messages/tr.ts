const tr = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "Açık PR'ler — Merge için oy ver",
  "home.githubLink": "GitHub'da görüntüle",
  "home.empty.title": "Henüz açık PR yok.",
  "home.empty.subtitle": "İlk PR'yi gönderen sen ol!",
  "home.loading": "PR'ler yükleniyor…",
  "home.error.retry": "Bir dakika sonra tekrar dene.",
  "countdown.label": "sonraki merge'e kadar",
  "snow.toggle.on": "Karı aç",
  "snow.toggle.off": "Karı kapat",
  "language.switcher.label": "Dil",
} as const;

export type TrMessages = typeof tr;

export default tr;
