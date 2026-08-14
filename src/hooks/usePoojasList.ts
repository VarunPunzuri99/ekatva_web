import { useCallback, useEffect, useState } from "react";
import {
  fetchPoojasList,
  getCachedPoojasList,
  type PoojaListItem,
} from "@/services/poojas";

interface UsePoojasListResult {
  poojas: PoojaListItem[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function usePoojasList(): UsePoojasListResult {
  const cached = getCachedPoojasList();
  const [poojas, setPoojas] = useState<PoojaListItem[]>(() => cached ?? []);
  const [loading, setLoading] = useState(() => cached == null);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const force = reloadKey > 0;
    const existing = getCachedPoojasList();

    if (!force && existing) {
      setPoojas(existing);
      setLoading(false);
      setError(null);
      return;
    }

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPoojasList({ force });
        if (!cancelled) {
          setPoojas(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          if (!getCachedPoojasList()?.length) setPoojas([]);
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load poojas.",
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

  return { poojas, loading, error, refetch };
}
