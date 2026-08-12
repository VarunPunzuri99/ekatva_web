import { m } from "framer-motion";
import {
  BookOpen,
  Crosshair,
  HandHelping,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { EJAPA_HIGHLIGHTS, EJAPA_INTRO } from "@/content/ejapa";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof EJAPA_HIGHLIGHTS)[number]["icon"], LucideIcon> = {
  sparkles: Sparkles,
  target: Crosshair,
  hands: HandHelping,
  scroll: BookOpen,
};

export function EjapaIntro() {
  return (
    <section
      className="bg-white pb-12 pt-2 sm:pb-14 lg:pb-16"
      aria-label="eJapa introduction"
    >
      <m.p
        className="mx-auto max-w-[46rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {EJAPA_INTRO}
      </m.p>

      <m.ul
        className="mx-auto mt-8 grid max-w-[1200px] gap-3 px-4 sm:mt-10 sm:grid-cols-2 sm:gap-4 sm:px-6 lg:grid-cols-4 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {EJAPA_HIGHLIGHTS.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <m.li key={item.id} variants={fadeUp} className="list-none h-full">
              <m.article
                className="flex h-full items-start gap-3 rounded-2xl border border-[#F27022]/45 bg-[#FFF9F3] px-4 py-4 transition-[border-color,box-shadow] duration-200 hover:border-[#F27022] hover:shadow-[0_10px_24px_rgba(242,112,34,0.12)] sm:px-5"
                whileHover={{
                  y: -3,
                  transition: { duration: 0.22, ease: easeOutExpo },
                }}
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-[#F27022]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="font-home text-[14px] font-bold text-[#8B2E28] sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-home text-[12px] text-[#6B7280] sm:text-[13px]">
                    {item.description}
                  </p>
                </div>
              </m.article>
            </m.li>
          );
        })}
      </m.ul>
    </section>
  );
}
