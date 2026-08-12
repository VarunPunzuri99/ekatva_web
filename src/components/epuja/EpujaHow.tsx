import { m } from "framer-motion";
import {
  CalendarDays,
  CreditCard,
  FileText,
  Flame,
  ScrollText,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { EPUJA_HOW } from "@/content/epuja";
import {
  easeOutExpo,
  fadeUp,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof EPUJA_HOW.steps)[number]["icon"], LucideIcon> = {
  scroll: ScrollText,
  user: UserRound,
  calendar: CalendarDays,
  form: FileText,
  card: CreditCard,
  flame: Flame,
};

const STEP_COUNT = EPUJA_HOW.steps.length;
const STEP_CENTER = (STEP_COUNT - 1) / 2;

/** Same pattern as Book Pandit — gather at center, then fan out. */
const stepDisperse = {
  hidden: (i: number) => ({
    opacity: 0,
    x: (STEP_CENTER - i) * 72,
    scale: 0.55,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: 0.06 * Math.abs(i - STEP_CENTER),
      ease: easeOutExpo,
    },
  }),
};

const connectorReveal = {
  hidden: { opacity: 0, scaleX: 0.35 },
  visible: (i: number) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.45,
      delay: 0.45 + 0.08 * i,
      ease: easeOutExpo,
    },
  }),
};

export function EpujaHow() {
  return (
    <section
      className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="epuja-how-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.h2
          id="epuja-how-heading"
          className="text-center font-home-display text-[1.45rem] font-semibold text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EPUJA_HOW.title}
        </m.h2>

        {/* Desktop: center → expand */}
        <m.ol
          className="relative mt-10 hidden lg:mt-12 lg:grid lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EPUJA_HOW.steps.map((step, index) => {
            const Icon = ICONS[step.icon];
            return (
              <m.li
                key={step.id}
                custom={index}
                variants={stepDisperse}
                className="relative list-none flex flex-col items-center px-1 text-center"
              >
                {index < STEP_COUNT - 1 ? (
                  <m.div
                    className="pointer-events-none absolute top-[36px] left-[calc(50%+40px)] z-0 w-[calc(100%-80px)] origin-left border-t border-dashed border-[#C4B5A5]"
                    aria-hidden
                    custom={index}
                    variants={connectorReveal}
                  />
                ) : null}

                <m.div
                  className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[1.5px] border-[#8B2E28] bg-[#FFF8F0] text-[#8B2E28]"
                  whileHover={{
                    y: -3,
                    scale: 1.06,
                    transition: { duration: 0.25, ease: easeOutExpo },
                  }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                  <span className="absolute -bottom-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#E8A017] font-home text-[11px] font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                </m.div>

                <h3 className="mt-4 font-home text-[13px] font-bold text-[#5C2A1A] xl:text-[14px]">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[18ch] font-home text-[11px] leading-relaxed text-[#6B7280] xl:text-[12px]">
                  {step.description}
                </p>
              </m.li>
            );
          })}
        </m.ol>

        {/* Mobile / tablet grid with same disperse feel */}
        <m.ol
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-12 sm:grid-cols-3 lg:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EPUJA_HOW.steps.map((step, index) => {
            const Icon = ICONS[step.icon];
            return (
              <m.li
                key={step.id}
                custom={index}
                variants={stepDisperse}
                className="list-none flex flex-col items-center text-center"
              >
                <m.div
                  className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-[1.5px] border-[#8B2E28] bg-[#FFF8F0] text-[#8B2E28] sm:h-[72px] sm:w-[72px]"
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                    transition: { duration: 0.25, ease: easeOutExpo },
                  }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                  <span className="absolute -bottom-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#E8A017] font-home text-[11px] font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                </m.div>

                <h3 className="mt-4 font-home text-[13px] font-bold text-[#5C2A1A] sm:text-[14px]">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[16ch] font-home text-[11px] leading-relaxed text-[#6B7280] sm:max-w-[18ch] sm:text-[12px]">
                  {step.description}
                </p>
              </m.li>
            );
          })}
        </m.ol>
      </div>
    </section>
  );
}
