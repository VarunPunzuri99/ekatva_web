import { useCallback, useEffect, useState } from "react";
import type { OnlinePoojaDetail } from "@/services/onlinePooja";
import {
  fetchCatalogPoojaDetail,
  getCachedCatalogPoojaDetail,
} from "@/services/poojas";

interface UseCatalogPoojaDetailResult {
  detail: OnlinePoojaDetail | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCatalogPoojaDetail(
  poojaId: string | undefined,
): UseCatalogPoojaDetailResult {
  const cached =
    poojaId != null ? getCachedCatalogPoojaDetail(poojaId) : null;

  const [detail, setDetail] = useState<OnlinePoojaDetail | null>(
    () => cached,
  );
  const [loading, setLoading] = useState(() => cached == null);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (!poojaId) {
      setDetail(null);
      setLoading(false);
      setError("Missing pooja reference.");
      return;
    }

    let cancelled = false;
    const force = reloadKey > 0;
    const existing = getCachedCatalogPoojaDetail(poojaId);

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
        const data = await fetchCatalogPoojaDetail(poojaId!, { force });
        if (!cancelled) {
          setDetail(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setDetail(getCachedCatalogPoojaDetail(poojaId!) ?? null);
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
  }, [poojaId, reloadKey]);

  const refetch = useCallback(() => {
    setReloadKey((key) => key + 1);
  }, []);

  return { detail, loading, error, refetch };
}
