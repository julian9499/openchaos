const cs = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "Otevřené PR — Hlasujte pro merge",
  "home.githubLink": "Zobrazit na GitHubu",
  "home.empty.title": "Zatím žádné otevřené PR.",
  "home.empty.subtitle": "Buďte první, kdo nějaké odešle!",
  "home.loading": "Načítání PR…",
  "home.error.retry": "Zkuste to znovu za minutu.",
  "countdown.label": "do příštího merge",
  "snow.toggle.on": "Zapnout sníh",
  "snow.toggle.off": "Vypnout sníh",
  "language.switcher.label": "Jazyk",
} as const;

export type CsMessages = typeof cs;

export default cs;
