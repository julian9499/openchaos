import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/i18n/config";

function pickPreferredLocale(
  cookieLocale: string | null,
  headerLocale: string | null
): Locale {
  if (cookieLocale && isSupportedLocale(cookieLocale)) return cookieLocale;

  if (headerLocale) {
    const candidates = headerLocale
      .split(",")
      .map((part: string) => part.split(";")[0]?.trim().toLowerCase())
      .filter((v): v is string => Boolean(v));

    for (const cand of candidates) {
      if (isSupportedLocale(cand)) return cand;
      const base = cand.split("-")[0];
      if (isSupportedLocale(base)) return base as Locale;
    }
  }

  return DEFAULT_LOCALE;
}

export default async function RootRedirectPage() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("openchaos-locale")?.value ?? null;

  const hdrs = await headers();
  const headerLocale = hdrs.get("accept-language");

  const locale = pickPreferredLocale(cookieLocale, headerLocale);
  redirect(`/${locale}`);
}

