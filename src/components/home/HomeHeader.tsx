import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import { HOME_NAV } from "@/content/home";
import { requestScrollTop } from "@/lib/scrollTop";
import { easeOutExpo, slideDown } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function HomeHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/" || pathname === "";
  const reduced = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const onLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onHome) return;
    event.preventDefault();
    navigate({ pathname: "/", hash: "" }, { replace: true });
    requestScrollTop({ clearHash: true });
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  const navItems = HOME_NAV.map((item) => {
    const isRoute = item.href.startsWith("/");
    const href = isRoute ? item.href : onHome ? item.href : `/${item.href}`;
    const active = isRoute && pathname === item.href;
    return { ...item, isRoute, href, active };
  });

  return (
    <>
      <m.header
        variants={reduced ? undefined : slideDown}
        initial={reduced ? false : "hidden"}
        animate="visible"
        className={cn(
          "sticky top-0 z-40 border-b transition-[background-color,backdrop-filter,box-shadow,height] duration-300",
          scrolled
            ? "border-black/8 bg-white/80 shadow-[0_4px_24px_rgba(31,41,55,0.06)] backdrop-blur-md"
            : "border-black/5 bg-white",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 transition-[height] duration-300 sm:gap-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24",
            scrolled ? "h-[64px] xl:h-[68px]" : "h-[72px] xl:h-[80px]",
          )}
        >
          <m.div
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.05 }}
          >
            <Link
              to="/"
              className="shrink-0"
              aria-label="Ekatva home"
              onClick={onLogoClick}
            >
              <Logo
                className="justify-start"
                imgClassName={cn(
                  "transition-[height] duration-300",
                  scrolled
                    ? "!h-8 sm:!h-9 md:!h-10"
                    : "!h-9 sm:!h-10 md:!h-11",
                )}
              />
            </Link>
          </m.div>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 lg:flex xl:gap-6"
          >
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  data-active={item.active ? "true" : "false"}
                  className={cn(
                    "nav-link-underline font-home text-[13px] font-medium text-home-text transition-colors hover:text-home-orange",
                    item.active && "text-home-orange",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  data-active="false"
                  className="nav-link-underline font-home text-[13px] font-medium text-home-text transition-colors hover:text-home-orange"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={onHome ? "#download" : "/#download"}
              className="btn-shine hidden items-center gap-2 rounded-md bg-home-orange px-3.5 py-2.5 font-home text-[11px] font-semibold tracking-wide text-white uppercase shadow-[0_4px_14px_rgba(242,112,34,0.25)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-home-orange-deep hover:shadow-[0_8px_20px_rgba(242,112,34,0.32)] active:translate-y-0 sm:inline-flex sm:px-4 sm:text-xs"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download App
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-home-text transition-colors hover:border-home-orange/40 hover:bg-[#FFF8EE] hover:text-home-orange lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <m.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            <m.aside
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed top-0 right-0 z-50 flex h-dvh w-[min(100%,320px)] flex-col bg-white shadow-[-8px_0_32px_rgba(31,41,55,0.14)] lg:hidden"
              initial={reduced ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: easeOutExpo }}
            >
              <div className="flex h-[64px] items-center justify-between border-b border-black/8 px-4">
                <Logo className="justify-start" imgClassName="!h-8" />
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-home-text transition-colors hover:bg-[#FFF8EE] hover:text-home-orange"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <X className="h-5 w-5" strokeWidth={2} />
                </button>
              </div>

              <nav
                aria-label="Mobile primary"
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
              >
                {navItems.map((item, index) => {
                  const className = cn(
                    "rounded-lg px-3.5 py-3 font-home text-[15px] font-medium transition-colors",
                    item.active
                      ? "bg-[#FFF3E6] text-home-orange"
                      : "text-home-text hover:bg-[#FFF8EE] hover:text-home-orange",
                  );

                  return (
                    <m.div
                      key={item.href}
                      initial={reduced ? false : { opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05 + index * 0.04,
                        ease: easeOutExpo,
                      }}
                    >
                      {item.isRoute ? (
                        <Link
                          to={item.href}
                          className={className}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className={className}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </a>
                      )}
                    </m.div>
                  );
                })}
              </nav>

              <div className="border-t border-black/8 p-4">
                <a
                  href={onHome ? "#download" : "/#download"}
                  onClick={closeMenu}
                  className="btn-shine flex w-full items-center justify-center gap-2 rounded-md bg-home-orange px-4 py-3.5 font-home text-[13px] font-semibold tracking-wide text-white uppercase shadow-[0_4px_14px_rgba(242,112,34,0.25)]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download App
                </a>
              </div>
            </m.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
