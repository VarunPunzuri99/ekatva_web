import { useEffect, useState } from "react";
import { SEO } from "@/components/layout/SEO";
import { ComingSoonPage } from "@/components/sections/ComingSoonPage";
import {
  LAUNCH_ACCESS_EVENT,
  hasLaunchAccess,
} from "@/lib/launchAccess";
import { HomePage } from "@/pages/HomePage";

/**
 * Soft-launch root gate for `/`:
 * - no localStorage unlock → Coming Soon
 * - unlock present (or just granted via modal) → Home
 */
export function RootPage() {
  const [unlocked, setUnlocked] = useState(() => hasLaunchAccess());

  useEffect(() => {
    const sync = () => setUnlocked(hasLaunchAccess());
    window.addEventListener(LAUNCH_ACCESS_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(LAUNCH_ACCESS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (unlocked) {
    return <HomePage />;
  }

  return (
    <>
      <SEO />
      <ComingSoonPage />
    </>
  );
}
