"use client";

import { ReactNode, useCallback, useState } from "react";
import { SnowOverlay } from "@/components/SnowOverlay";
import { SnowToggle } from "@/components/SnowToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface ClientShellProps {
  children: ReactNode;
}

export default function ClientShell({ children }: ClientShellProps) {
  const [snowEnabled, setSnowEnabled] = useState(true);

  const handleSnowChange = useCallback((enabled: boolean) => {
    setSnowEnabled(enabled);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Snow overlay layer */}
      <SnowOverlay enabled={snowEnabled} />

      {/* Top-right controls */}
      <div className="pointer-events-none fixed right-4 top-4 z-20 flex flex-col items-end gap-2 sm:right-6 sm:top-6">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200 shadow-lg backdrop-blur">
          <LanguageSwitcher />
          <SnowToggle onChange={handleSnowChange} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center">
        {children}
      </div>
    </div>
  );
}
