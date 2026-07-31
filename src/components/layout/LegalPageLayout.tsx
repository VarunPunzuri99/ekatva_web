import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { SacredOrnament } from "@/components/common/SacredOrnament";
import { LegalContent } from "@/components/legal/LegalContent";
import { LEGAL_NAV } from "@/content/legalNav";
import type { LegalDocument } from "@/content/legalTypes";
import { cn } from "@/lib/utils";

interface LegalPageLayoutProps {
  document: LegalDocument;
  description: string;
}

const SHELL =
  "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24";

/**
 * Legal page body only — app Header/Footer come from MainLayout.
 * Used by Privacy, Terms, and Refund routes.
 */
export function LegalPageLayout({ document, description }: LegalPageLayoutProps) {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{document.title} | Ekatva</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="bg-[#FFF9F3]">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <img
              src="/assets/temple_background.png"
              alt=""
              className="h-full w-full object-cover object-center opacity-90"
              loading="eager"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,249,243,0.92) 0%, rgba(255,249,243,0.78) 45%, #FFF9F3 100%)",
              }}
            />
          </div>

          <div
            className={cn(
              SHELL,
              "relative z-10 pb-8 pt-10 text-center md:pb-10 md:pt-12",
            )}
          >
            <p className="font-home text-[11px] font-semibold tracking-[0.22em] text-[#F27022] uppercase sm:text-[12px]">
              Ekatva Legal
            </p>
            <h1 className="mt-3 font-home text-[1.85rem] font-bold tracking-tight text-[#1A1A1A] sm:text-[2.15rem] md:text-[2.45rem] lg:text-[2.75rem]">
              {document.title}
            </h1>
            <SacredOrnament className="my-5 md:my-6" />
            <span className="inline-flex items-center rounded-full border border-[#F27022]/25 bg-white/90 px-4 py-1.5 font-home text-[12px] font-medium text-[#555555] shadow-sm backdrop-blur-sm sm:text-[13px]">
              Effective Date: {document.effectiveDate}
            </span>

            <nav
              aria-label="Legal policies"
              className="mt-7 flex flex-wrap items-center justify-center gap-2"
            >
              {LEGAL_NAV.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 font-home text-[12px] font-semibold transition-colors sm:text-[13px]",
                      active
                        ? "bg-[#F27022] text-white shadow-[0_4px_14px_rgba(242,112,34,0.28)]"
                        : "border border-black/8 bg-white/80 text-home-muted hover:border-[#F27022]/30 hover:text-home-orange",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className={cn(SHELL, "relative z-10 pb-16 md:pb-20")}>
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_12px_40px_rgba(31,41,55,0.08)] sm:p-8 md:rounded-3xl md:p-10 lg:p-12 xl:p-14">
            <LegalContent document={document} />
          </div>
        </div>
      </div>
    </>
  );
}
