"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { PRCard } from "./PRCard";
import type { PullRequest } from "@/lib/github";

interface PRListClientProps {
  prs: PullRequest[];
  error: string | null;
}

export function PRListClient({ prs, error }: PRListClientProps) {
  const { t } = useI18n();

  if (error) {
    return (
      <div className="w-full max-w-xl text-center py-8">
        <p className="text-zinc-500">{error}</p>
        <p className="mt-2 text-sm text-zinc-600">
          {t("home.error.retry", "Try refreshing the page in a minute.")}
        </p>
      </div>
    );
  }

  if (!prs || prs.length === 0) {
    return (
      <div className="w-full max-w-xl text-center py-8">
        <p className="text-zinc-400">
          {t("home.empty.title", "No open PRs yet.")}
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          {t("home.empty.subtitle", "Be the first to submit one!")}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl space-y-3">
      {prs.map((pr, index) => (
        <PRCard key={pr.number} pr={pr} rank={index + 1} />
      ))}
    </div>
  );
}

