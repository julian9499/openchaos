"use client";

import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/i18n/I18nProvider";
import { SUPPORTED_LOCALES } from "@/i18n/config";

const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  nl: "Nederlands",
  sv: "Svenska",
  no: "Norsk",
  da: "Dansk",
  fi: "Suomi",
  pl: "Polski",
  cs: "Čeština",
  tr: "Türkçe",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
};

function stripLeadingLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  // Remove first segment (current locale)
  segments.shift();
  const rest = segments.join("/");
  return rest ? `/${rest}` : "/";
}

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useI18n();

  const handleChange = (nextLocale: string) => {
    const innerPath = stripLeadingLocaleFromPath(pathname || "/");
    router.push(`/${nextLocale}${innerPath}`);
    document.cookie = `openchaos-locale=${nextLocale}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`;
  };

  return (
    <label className="flex items-center gap-1 text-xs text-zinc-300">
      <span className="sr-only sm:not-sr-only sm:text-zinc-400 sm:mr-1">
        Language
      </span>
      <select
        className="rounded-full border border-zinc-700/60 bg-zinc-900/80 px-2 py-1 text-xs text-zinc-100 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        value={locale}
        onChange={(e) => handleChange(e.target.value)}
      >
        {SUPPORTED_LOCALES.map((code) => (
          <option key={code} value={code}>
            {LOCALE_LABELS[code] ?? code}
          </option>
        ))}
      </select>
    </label>
  );
}
