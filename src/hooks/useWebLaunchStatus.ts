import { useCallback, useEffect, useState } from "react";
import {
  hasActiveWebLaunchCode,
  LaunchCodeApiError,
} from "@/services/launchCodes";

/** Fired after a successful Web launch so gates re-fetch. */
export const WEB_LAUNCH_STATUS_EVENT = "ekatva-web-launch-status";

export function notifyWebLaunchStatusChanged(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(WEB_LAUNCH_STATUS_EVENT));
}

export interface WebLaunchStatus {
  /** True while the first (or forced) fetch is in flight. */
  loading: boolean;
  /**
   * True when Active Web launch codes exist → Coming Soon / block feature routes.
   * False when none → main Home is live.
   */
  webPending: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Shared gate for `/` and LaunchRequiredLayout.
 * webPending === true → Coming Soon; false → Home / allow feature routes.
 */
export function useWebLaunchStatus(): WebLaunchStatus {
  const [loading, setLoading] = useState(true);
  const [webPending, setWebPending] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const refetch = useCallback(() => {
    setReloadKey((key) => key + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const pending = await hasActiveWebLaunchCode();
        if (!cancelled) {
          setWebPending(Boolean(pending));
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof LaunchCodeApiError
              ? err.message
              : err instanceof Error
                ? err.message
                : "Unable to load launch status.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

  useEffect(() => {
    const sync = () => refetch();
    window.addEventListener(WEB_LAUNCH_STATUS_EVENT, sync);
    return () => window.removeEventListener(WEB_LAUNCH_STATUS_EVENT, sync);
  }, [refetch]);

  return { loading, webPending, error, refetch };
}
