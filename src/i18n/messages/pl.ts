const pl = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "Otwarte PR-y — Głosuj za mergem",
  "home.githubLink": "Zobacz na GitHubie",
  "home.empty.title": "Brak otwartych PR-ów.",
  "home.empty.subtitle": "Bądź pierwszą osobą, która wyśle PR!",
  "home.loading": "Ładowanie PR-ów…",
  "home.error.retry": "Spróbuj ponownie za minutę.",
  "countdown.label": "do następnego merge'a",
  "snow.toggle.on": "Włącz śnieg",
  "snow.toggle.off": "Wyłącz śnieg",
  "language.switcher.label": "Język",
} as const;

export type PlMessages = typeof pl;

export default pl;

