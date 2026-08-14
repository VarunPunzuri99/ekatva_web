import { useCallback, useEffect, useState } from "react";
import {
  fetchOnlinePoojaEvents,
  getCachedOnlinePoojaEvents,
  type OnlinePoojaEvent,
} from "@/services/onlinePooja";

interface UseOnlinePoojaEventsResult {
  events: OnlinePoojaEvent[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Loads online poojas once per session (shared cache).
 * Hydrates instantly from cache when navigating Home → Events.
 * Network fetch only when cache is empty or refetch() is called.
 */
export function useOnlinePoojaEvents(): UseOnlinePoojaEventsResult {
  const cached = getCachedOnlinePoojaEvents();
  const [events, setEvents] = useState<OnlinePoojaEvent[]>(() => cached ?? []);
  const [loading, setLoading] = useState(() => cached == null);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const force = reloadKey > 0;
    const existing = getCachedOnlinePoojaEvents();

    // Cache hit on first mount — no network needed.
    if (!force && existing) {
      setEvents(existing);
      setLoading(false);
      setError(null);
      return;
    }

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchOnlinePoojaEvents({ force });
        if (!cancelled) {
          setEvents(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          // Keep stale cache on refresh failure when possible.
          if (!getCachedOnlinePoojaEvents()?.length) {
            setEvents([]);
          }
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load upcoming events.",
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

  const refetch = useCallback(() => {
    setReloadKey((key) => key + 1);
  }, []);

  return {
    events,
    loading,
    error,
    refetch,
  };
}
