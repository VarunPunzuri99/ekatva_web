import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SCROLL_TOP_EVENT } from "@/lib/scrollTop";

const HEADER_OFFSET = 80;

function scrollToHash(lenis: Lenis, hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  lenis.scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.1 });
}

/**
 * Lenis smooth scroll for the Home experience.
 * Disabled when prefers-reduced-motion is set.
 * Intercepts in-page hash links (#download, #services, …).
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const html = document.documentElement;
    html.classList.add("lenis", "lenis-smooth");
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const url = new URL(href, window.location.origin);
      if (url.pathname !== window.location.pathname && url.pathname !== "/") {
        return;
      }
      event.preventDefault();
      history.pushState(null, "", href);
      scrollToHash(lenis, href);
    };

    const onScrollTop = () => {
      lenis.scrollTo(0, { duration: 1.05 });
    };

    document.addEventListener("click", onClick);
    window.addEventListener(SCROLL_TOP_EVENT, onScrollTop);

    // Full reload / first mount: start at top — do not restore #hash deep links
    if (window.location.hash) {
      const { pathname, search } = window.location;
      window.history.replaceState(null, "", `${pathname}${search}` || "/");
    }
    lenis.scrollTo(0, { immediate: true });

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener(SCROLL_TOP_EVENT, onScrollTop);
      cancelAnimationFrame(rafId);
      html.classList.remove("lenis", "lenis-smooth");
      html.style.scrollBehavior = previousScrollBehavior;
      lenis.scrollTo(0, { immediate: true });
      lenis.destroy();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
  }, [reduced]);

  return children;
}
