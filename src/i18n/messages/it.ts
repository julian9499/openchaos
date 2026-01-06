const it = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "PR aperte — Vota per il merge",
  "home.githubLink": "Vedi su GitHub",
  "home.empty.title": "Non ci sono ancora PR aperte.",
  "home.empty.subtitle": "Sii tu il primo o la prima a inviarne una!",
  "home.loading": "Caricamento delle PR…",
  "home.error.retry": "Riprova tra un minuto.",
  "countdown.label": "al prossimo merge",
  "snow.toggle.on": "Attiva la neve",
  "snow.toggle.off": "Disattiva la neve",
  "language.switcher.label": "Lingua",
} as const;

export type ItMessages = typeof it;

export default it;
