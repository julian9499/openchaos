import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import "../globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getMessages } from "@/i18n";
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/i18n/config";
import ClientShell from "../shell";

export const metadata: Metadata = {
  title: "OpenChaos.dev",
  description:
    "A self-evolving open source project. Vote on PRs. Winner gets merged every Sunday.",
};

function pickBestLocale(requested: string | null, cookieLocale: string | null, headerLocale: string | null): Locale {
  // 1. URL param
  if (requested && isSupportedLocale(requested)) return requested;

  // 2. Cookie
  if (cookieLocale && isSupportedLocale(cookieLocale)) return cookieLocale;

  // 3. Accept-Language
  if (headerLocale) {
    const candidates = headerLocale
      .split(",")
      .map((part) => part.split(";")[0]?.trim().toLowerCase())
      .filter((v): v is string => Boolean(v));

    for (const cand of candidates) {
      if (isSupportedLocale(cand)) return cand;
      const base = cand.split("-")[0];
      if (isSupportedLocale(base)) return base as Locale;
    }
  }

  return DEFAULT_LOCALE;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("openchaos-locale")?.value ?? null;

  const hdrs = await headers();
  const headerLocale = hdrs.get("accept-language");

  const locale = pickBestLocale(resolvedParams.locale, cookieLocale, headerLocale);
  const messages = getMessages(locale);

  return (
    <I18nProvider locale={locale} messages={messages}>
      <ClientShell>{children}</ClientShell>
    </I18nProvider>
  );
}
