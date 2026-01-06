const en = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "Open PRs — Vote to merge",
  "home.githubLink": "View on GitHub",
  "home.empty.title": "No open PRs yet.",
  "home.empty.subtitle": "Be the first to submit one!",
  "home.loading": "Loading PRs...",
  "home.error.retry": "Try refreshing the page in a minute.",
  "countdown.label": "until next merge",
  "snow.toggle.on": "Turn snow on",
  "snow.toggle.off": "Turn snow off",
  "language.switcher.label": "Language",
} as const;

export type EnMessages = typeof en;

export default en;

