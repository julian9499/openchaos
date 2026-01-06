export const SUPPORTED_LOCALES = [
  "en",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "nl",
  "sv",
  "no",
  "da",
  "fi",
  "pl",
  "cs",
  "tr",
  "ja",
  "ko",
  "zh",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isSupportedLocale(locale: string | undefined | null): locale is Locale {
  return !!locale && (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

