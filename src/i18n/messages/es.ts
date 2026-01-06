const es = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "PR abiertas — Vota para hacer merge",
  "home.githubLink": "Ver en GitHub",
  "home.empty.title": "Todavía no hay PR abiertas.",
  "home.empty.subtitle": "¡Sé la primera persona en enviar una!",
  "home.loading": "Cargando PR…",
  "home.error.retry": "Vuelve a intentarlo en un minuto.",
  "countdown.label": "hasta el próximo merge",
  "snow.toggle.on": "Activar nieve",
  "snow.toggle.off": "Desactivar nieve",
  "language.switcher.label": "Idioma",
} as const;

export type EsMessages = typeof es;

export default es;
