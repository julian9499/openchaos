import { Suspense } from "react";
import { Countdown } from "@/components/Countdown";
import { PRList } from "@/components/PRList";
import ClientHome from "./client-home";

export default function HomePage() {
  const prSection = (
    <Suspense
      fallback={
        <div className="w-full max-w-xl text-center py-8">
          <p className="text-zinc-500">Loading PRs...</p>
        </div>
      }
    >
      <PRList />
    </Suspense>
  );

  return <ClientHome countdown={<Countdown />} prSection={prSection} />;
}
