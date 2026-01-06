const fi = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "Avoimet PR:t — Äänestä mergestä",
  "home.githubLink": "Näytä GitHubissa",
  "home.empty.title": "Ei vielä avoimia PR:iä.",
  "home.empty.subtitle": "Ole ensimmäinen, joka lähettää sellaisen!",
  "home.loading": "Ladataan PR:iä…",
  "home.error.retry": "Yritä uudelleen minuutin kuluttua.",
  "countdown.label": "seuraavaan mergeen",
  "snow.toggle.on": "Ota lumi käyttöön",
  "snow.toggle.off": "Poista lumi käytöstä",
  "language.switcher.label": "Kieli",
} as const;

export type FiMessages = typeof fi;

export default fi;
