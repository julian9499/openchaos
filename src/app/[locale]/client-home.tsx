"use client";

import { ReactNode } from "react";
import { useI18n } from "@/i18n/I18nProvider";

interface ClientHomeProps {
  countdown: ReactNode;
  prSection: ReactNode;
}

export default function ClientHome({ countdown, prSection }: ClientHomeProps) {
  const { t } = useI18n();

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        {t("home.title", "OPENCHAOS.DEV")}
      </h1>

      <div className="mt-12">{countdown}</div>

      <section className="mt-16 w-full flex flex-col items-center">
        <h2 className="text-xl font-medium text-zinc-600 mb-6">
          {t("home.subtitle", "Open PRs — Vote to merge")}
        </h2>
        {prSection}
      </section>

      <footer className="mt-16 flex flex-col items-center gap-4 text-sm text-zinc-500">
        <p>
          <a
            href="https://github.com/skridlevsky/openchaos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
          >
            {t("home.githubLink", "View on GitHub")}
          </a>
        </p>
      </footer>
    </main>
  );
}

