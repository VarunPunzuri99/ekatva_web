/** Dispatched to ask Home Lenis (if active) to scroll to the top. */
export const SCROLL_TOP_EVENT = "ekatva-scroll-top";

/** Strip `#…` from the address bar without adding history. */
export function clearUrlHash() {
  if (!window.location.hash) return;
  const next = `${window.location.pathname}${window.location.search}` || "/";
  window.history.replaceState(null, "", next);
}

export function requestScrollTop(options?: { clearHash?: boolean }) {
  if (options?.clearHash) {
    clearUrlHash();
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.dispatchEvent(new CustomEvent(SCROLL_TOP_EVENT));
}
