import { useCallback, useEffect, useState } from "react";
import {
  fetchOnlinePoojaDetail,
  getCachedOnlinePoojaDetail,
  type OnlinePoojaDetail,
} from "@/services/onlinePooja";

interface UseOnlinePoojaDetailResult {
  detail: OnlinePoojaDetail | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useOnlinePoojaDetail(
  onlinePoojaId: string | undefined,
): UseOnlinePoojaDetailResult {
  const cached =
    onlinePoojaId != null
      ? getCachedOnlinePoojaDetail(onlinePoojaId)
      : null;

  const [detail, setDetail] = useState<OnlinePoojaDetail | null>(
    () => cached,
  );
  const [loading, setLoading] = useState(() => cached == null);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (!onlinePoojaId) {
      setDetail(null);
      setLoading(false);
      setError("Missing pooja reference.");
      return;
    }

    let cancelled = false;
    const force = reloadKey > 0;
    const existing = getCachedOnlinePoojaDetail(onlinePoojaId);

    if (!force && existing) {
      setDetail(existing);
      setLoading(false);
      setError(null);
      return;
    }

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchOnlinePoojaDetail(onlinePoojaId!, { force });
        if (!cancelled) {
          setDetail(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setDetail(getCachedOnlinePoojaDetail(onlinePoojaId!) ?? null);
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load pooja details.",
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
  }, [onlinePoojaId, reloadKey]);

  const refetch = useCallback(() => {
    setReloadKey((key) => key + 1);
  }, []);

  return { detail, loading, error, refetch };
}
