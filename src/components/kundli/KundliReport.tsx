import { m } from "framer-motion";
import {
  Award,
  FileText,
  Grid3x3,
  Orbit,
  Shield,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { KUNDLI_REPORT } from "@/content/kundli";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const ICONS: Record<(typeof KUNDLI_REPORT.items)[number]["icon"], LucideIcon> = {
  badge: Award,
  grid: Grid3x3,
  shield: Shield,
  user: UserRound,
  planet: Orbit,
  file: FileText,
};

export function KundliReport() {
  return (
    <section
      className="bg-[#FFFBF7] py-14 sm:py-16 lg:py-20"
      aria-labelledby="kundli-report-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.h2
          id="kundli-report-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center font-home text-[1.45rem] font-bold text-[#8B2E28] sm:text-[1.75rem] lg:text-[1.95rem]"
        >
          {KUNDLI_REPORT.title}
        </m.h2>

        <m.ul
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {KUNDLI_REPORT.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className={cn(
                    "flex h-full flex-col rounded-2xl border border-black/5 bg-white p-4 shadow-[0_10px_28px_rgba(31,41,55,0.06)] transition-[border-color,box-shadow] duration-200 sm:p-5",
                    "hover:border-[#F27022] hover:shadow-[0_16px_36px_rgba(31,41,55,0.1)]",
                  )}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.25, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-9 w-9 items-center justify-center text-[#F27022]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-home text-[14px] font-bold text-[#8B2E28] sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                    {item.description}
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
