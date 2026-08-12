import { m } from "framer-motion";
import {
  CalendarCheck2,
  ShieldCheck,
  Smile,
  Video,
  type LucideIcon,
} from "lucide-react";
import { EPUJA_INTRO, EPUJA_WHAT } from "@/content/epuja";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 20c-2.2-2.8-5.5-4.2-8-4.5 1.8-1.2 4.2-1.5 6.2-.6C9.2 12.2 8 9.5 8 7c2.2 1.2 3.5 3.2 4 5.2.5-2 1.8-4 4-5.2 0 2.5-1.2 5.2-2.2 7.9 2-.9 4.4-.6 6.2.6-2.5.3-5.8 1.7-8 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS: Record<(typeof EPUJA_WHAT.items)[number]["icon"], LucideIcon | "lotus"> =
  {
    calendar: CalendarCheck2,
    smile: Smile,
    lotus: "lotus",
    video: Video,
    shield: ShieldCheck,
  };

export function EpujaIntro() {
  return (
    <section aria-label="ePuja introduction">
      <div className="bg-white pb-10 pt-2 sm:pb-12 lg:pb-14">
        <m.p
          className="mx-auto max-w-[46rem] px-4 text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:px-6 sm:text-[16px] lg:text-[17px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EPUJA_INTRO}
        </m.p>
      </div>

      <div className="relative overflow-hidden bg-[#FDFBF7] py-10 sm:py-12 lg:py-14">
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
          <m.div
            className="mx-auto max-w-2xl text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <m.h2
              variants={fadeUp}
              className="font-home-display text-[1.45rem] font-semibold text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
            >
              {EPUJA_WHAT.title}
            </m.h2>
            <m.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-xl font-home text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]"
            >
              {EPUJA_WHAT.subtitle}
            </m.p>
          </m.div>

          <m.ul
            className="mt-9 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 xl:gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {EPUJA_WHAT.items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <m.li
                  key={item.id}
                  variants={fadeUp}
                  className="list-none flex flex-col items-center text-center"
                >
                  <m.span
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#F0C9A0] bg-[#FFF6EB] text-[#F27022] sm:h-[78px] sm:w-[78px]"
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.22, ease: easeOutExpo },
                    }}
                  >
                    {Icon === "lotus" ? (
                      <LotusIcon className="h-7 w-7" />
                    ) : (
                      <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                    )}
                  </m.span>
                  <h3 className="mt-3.5 font-home text-[14px] font-bold text-[#F27022] sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-[18ch] font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                    {item.description}
                  </p>
                </m.li>
              );
            })}
          </m.ul>
        </div>
      </div>
    </section>
  );
}
