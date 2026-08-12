import { m } from "framer-motion";
import {
  Award,
  LayoutGrid,
  ListChecks,
  type LucideIcon,
} from "lucide-react";
import { EDISTI_TRUST } from "@/content/edisti";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof EDISTI_TRUST.items)[number]["icon"], LucideIcon> = {
  medal: Award,
  grid: LayoutGrid,
  guide: ListChecks,
};

export function EdistiTrust() {
  return (
    <section
      className="bg-white pb-12 sm:pb-14 lg:pb-16"
      aria-labelledby="edisti-trust-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.h2
          id="edisti-trust-heading"
          className="text-center font-home-display text-[1.45rem] font-semibold text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EDISTI_TRUST.title}
        </m.h2>

        <m.ul
          className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EDISTI_TRUST.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeUp} className="list-none h-full">
                <m.article
                  className="flex h-full flex-col items-start rounded-2xl border border-[#EDE6DC] bg-white px-5 py-5 shadow-[0_4px_16px_rgba(31,41,55,0.04)] transition-[border-color,box-shadow] duration-200 hover:border-[#F27022]/50 hover:shadow-[0_12px_28px_rgba(242,112,34,0.12)] sm:px-6 sm:py-6"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF3E6] text-[#E8A017]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-home text-[15px] font-bold text-[#8B2E28] sm:text-[16px]">
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
