"use client";

import { createContext, ReactNode, useContext } from "react";
import type { Locale } from "./config";
import type { Messages } from "./index";
import { createTranslator } from "./index";

interface I18nContextValue {
  locale: Locale;
  messages: Messages;
  t: (key: keyof Messages | string, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}

export function I18nProvider({ locale, messages, children }: I18nProviderProps) {
  const t = createTranslator(messages);

  return (
    <I18nContext.Provider value={{ locale, messages, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}

