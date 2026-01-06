const sv = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "Öppna PR:er — Rösta om merge",
  "home.githubLink": "Visa på GitHub",
  "home.empty.title": "Inga öppna PR:er ännu.",
  "home.empty.subtitle": "Var först med att skicka in en!",
  "home.loading": "Laddar PR:er…",
  "home.error.retry": "Försök igen om en minut.",
  "countdown.label": "tills nästa merge",
  "snow.toggle.on": "Slå på snö",
  "snow.toggle.off": "Slå av snö",
  "language.switcher.label": "Språk",
} as const;

export type SvMessages = typeof sv;

export default sv;
