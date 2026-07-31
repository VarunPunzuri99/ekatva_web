import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearUrlHash, requestScrollTop } from "@/lib/scrollTop";

/**
 * On full page load / Home remount: drop any `#hash` and start at the top.
 * In-session section clicks still set hashes; those do not remount Home.
 */
export function HomeFreshStart() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!window.location.hash) return;
    clearUrlHash();
    navigate({ pathname: "/", hash: "" }, { replace: true });
    requestScrollTop();
  }, [navigate]);

  return null;
}
