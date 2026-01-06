
const ko = {
  "home.title": "OPENCHAOS.DEV",
  "home.subtitle": "열려 있는 PR — 머지에 투표하세요",
  "home.githubLink": "GitHub에서 보기",
  "home.empty.title": "아직 열린 PR이 없습니다.",
  "home.empty.subtitle": "가장 먼저 PR을 보내 보세요!",
  "home.loading": "PR 불러오는 중…",
  "home.error.retry": "1분 후에 다시 시도해 주세요.",
  "countdown.label": "다음 머지까지",
  "snow.toggle.on": "눈 효과 켜기",
  "snow.toggle.off": "눈 효과 끄기",
  "language.switcher.label": "언어",
} as const;

export type KoMessages = typeof ko;

export default ko;
