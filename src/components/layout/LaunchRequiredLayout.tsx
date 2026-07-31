import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import {
  LAUNCH_ACCESS_EVENT,
  hasLaunchAccess,
} from "@/lib/launchAccess";

/** Requires launch unlock; otherwise sends users back to Coming Soon on `/`. */
export function LaunchRequiredLayout() {
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

  if (!unlocked) {
    return <Navigate to="/" replace />;
  }

  return <MainLayout />;
}
