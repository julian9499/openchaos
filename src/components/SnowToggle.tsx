"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

interface SnowToggleProps {
  onChange?: (enabled: boolean) => void;
}

const STORAGE_KEY = "openchaos-snow-enabled";

export function SnowToggle({ onChange }: SnowToggleProps) {
  const { t } = useI18n();

  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === null ? !mqReduced.matches : stored === "true";
  });

  const labelOn = t("snow.toggle.off", "Turn snow off");
  const labelOff = t("snow.toggle.on", "Turn snow on");

  useEffect(() => {
    // Notify parent of the current state, but do not change local state here.
    onChange?.(enabled);

    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      if (mqReduced.matches) {
        setEnabled(false);
        onChange?.(false);
      }
    };

    mqReduced.addEventListener("change", handleChange);
    return () => mqReduced.removeEventListener("change", handleChange);
  }, [enabled, onChange]);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, String(next));
    }
    onChange?.(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      className="rounded-full border border-zinc-700/60 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-100 shadow-sm backdrop-blur hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
    >
      {enabled ? labelOn : labelOff}
    </button>
  );
}
