import { useCallback, useEffect, useState } from "react";
import {
  fetchTodayPanchang,
  getCachedPanchangToday,
  type PanchangTodayView,
} from "@/services/panchang";

interface UseTodayPanchangResult {
  data: PanchangTodayView | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useTodayPanchang(): UseTodayPanchangResult {
  const cached = getCachedPanchangToday();
  const [data, setData] = useState<PanchangTodayView | null>(() => cached);
  const [loading, setLoading] = useState(() => cached == null);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const force = reloadKey > 0;
    const existing = getCachedPanchangToday();

    if (!force && existing) {
      setData(existing);
      setLoading(false);
      setError(null);
      return;
    }

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const view = await fetchTodayPanchang({ force });
        if (!cancelled) {
          setData(view);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load today's Panchangam.",
          );
          if (!getCachedPanchangToday()) setData(null);
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

  return { data, loading, error, refetch };
}
