import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { requestScrollTop } from "@/lib/scrollTop";

/**
 * Resets scroll on pathname / hash-clear so pages open from the top.
 * Hash-only navigations (e.g. #download) are left alone for in-page anchors.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    requestScrollTop();
  }, [pathname, hash]);

  return null;
}
