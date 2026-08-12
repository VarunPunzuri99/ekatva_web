import { m } from "framer-motion";
import {
  FileText,
  Network,
  PenLine,
  Search,
  type LucideIcon,
} from "lucide-react";
import { KUNDLI_METHODOLOGY } from "@/content/kundli";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof KUNDLI_METHODOLOGY.steps)[number]["icon"], LucideIcon> =
  {
    pen: PenLine,
    chart: Network,
    search: Search,
    file: FileText,
  };

export function KundliMethodology() {
  return (
    <section
      className="bg-[#FDF6EE] py-14 sm:py-16 lg:py-20"
      aria-labelledby="kundli-methodology-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.p
            variants={fadeUp}
            className="font-home text-[11px] font-bold tracking-[0.2em] text-[#F27022] uppercase sm:text-[12px]"
          >
            {KUNDLI_METHODOLOGY.eyebrow}
          </m.p>
          <m.h2
            id="kundli-methodology-heading"
            variants={fadeUp}
            className="mt-2.5 font-home text-[1.55rem] font-bold leading-tight text-[#8B2E28] sm:text-[1.85rem] lg:text-[2.05rem]"
          >
            {KUNDLI_METHODOLOGY.title}
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-3 font-home text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]"
          >
            {KUNDLI_METHODOLOGY.subtitle}
          </m.p>
        </m.div>

        <m.ul
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {KUNDLI_METHODOLOGY.steps.map((step) => {
            const Icon = ICONS[step.icon];
            return (
              <m.li key={step.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="relative flex h-full flex-col rounded-2xl border border-black/4 bg-white p-5 shadow-[0_10px_28px_rgba(31,41,55,0.06)] sm:p-6"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 36px rgba(31,41,55,0.1)",
                    transition: { duration: 0.25, ease: easeOutExpo },
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex rounded-md bg-[#FFF1E6] px-2.5 py-1 font-home text-[10px] font-bold tracking-[0.12em] text-[#F27022] uppercase">
                      {step.step}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center text-[#F27022]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                  </div>
                  <h3 className="mt-5 font-home text-[1.05rem] font-bold text-[#8B2E28] sm:text-[1.1rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-home text-[13px] leading-relaxed text-[#6B7280]">
                    {step.description}
                  </p>
                </m.article>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
}
