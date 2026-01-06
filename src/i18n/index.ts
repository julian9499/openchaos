import type { Locale } from "./config";
import { DEFAULT_LOCALE } from "./config";
import en from "./messages/en";
import de from "./messages/de";
import fr from "./messages/fr";
import es from "./messages/es";
import it from "./messages/it";
import pt from "./messages/pt";
import nl from "./messages/nl";
import sv from "./messages/sv";
import no from "./messages/no";
import da from "./messages/da";
import fi from "./messages/fi";
import pl from "./messages/pl";
import cs from "./messages/cs";
import tr from "./messages/tr";
import ja from "./messages/ja";
import ko from "./messages/ko";
import zh from "./messages/zh";

const ALL_MESSAGES = {
  en,
  de,
  fr,
  es,
  it,
  pt,
  nl,
  sv,
  no,
  da,
  fi,
  pl,
  cs,
  tr,
  ja,
  ko,
  zh,
} as const;

export type Messages = (typeof ALL_MESSAGES)[Locale];

export function getMessages(locale: Locale | undefined | null): Messages {
  if (!locale || !(locale in ALL_MESSAGES)) {
    return ALL_MESSAGES[DEFAULT_LOCALE];
  }
  return ALL_MESSAGES[locale as Locale];
}

export function createTranslator(messages: Messages) {
  return (key: keyof typeof messages | string, fallback?: string): string => {
    if (key in messages) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (messages as any)[key] as string;
    }
    return fallback ?? String(key);
  };
}

