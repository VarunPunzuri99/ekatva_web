import { useEffect, useState, type MouseEvent } from "react";
import { m } from "framer-motion";
import { Download } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import { HOME_NAV } from "@/content/home";
import { requestScrollTop } from "@/lib/scrollTop";
import { slideDown } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function HomeHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/" || pathname === "";
  const reduced = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onHome) return;
    event.preventDefault();
    // Clear #services / #download etc. and sync React Router
    navigate({ pathname: "/", hash: "" }, { replace: true });
    requestScrollTop({ clearHash: true });
  };

  return (
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
          "mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24",
          scrolled ? "h-[64px] xl:h-[68px]" : "h-[72px] xl:h-[80px]",
        )}
      >
        <m.div
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
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
          {HOME_NAV.map((item) => {
            const isRoute = item.href.startsWith("/");
            const href = isRoute
              ? item.href
              : onHome
                ? item.href
                : `/${item.href}`;
            const active = isRoute && pathname === item.href;

            if (isRoute) {
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  data-active={active ? "true" : "false"}
                  className={cn(
                    "nav-link-underline font-home text-[13px] font-medium text-home-text transition-colors hover:text-home-orange",
                    active && "text-home-orange",
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.href}
                href={href}
                data-active="false"
                className="nav-link-underline font-home text-[13px] font-medium text-home-text transition-colors hover:text-home-orange"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href={onHome ? "#download" : "/#download"}
          className="btn-shine inline-flex shrink-0 items-center gap-2 rounded-md bg-home-orange px-3.5 py-2.5 font-home text-[11px] font-semibold tracking-wide text-white uppercase shadow-[0_4px_14px_rgba(242,112,34,0.25)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-home-orange-deep hover:shadow-[0_8px_20px_rgba(242,112,34,0.32)] active:translate-y-0 sm:px-4 sm:text-xs"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Download App
        </a>
      </div>
    </m.header>
  );
}
