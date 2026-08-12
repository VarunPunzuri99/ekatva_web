import { m, useReducedMotion } from "framer-motion";
import {
  Bell,
  Gauge,
  Sun,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import wishMobile from "@/assets/images/ewishPage/wish_mobilepic.png";
import { EWISH_FEATURES } from "@/content/ewish";
import {
  easeOutExpo,
  fadeLeft,
  fadeRight,
  floatingMotionSlow,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof EWISH_FEATURES)[number]["icon"], LucideIcon> = {
  sun: Sun,
  gauge: Gauge,
  user: UserRound,
  bell: Bell,
};

export function EwishFeatures() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="bg-white pb-14 sm:pb-16 lg:pb-20"
      aria-label="eWish features"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 lg:px-8 xl:max-w-[1320px] xl:gap-14 xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] lg:justify-self-end"
        >
          <m.img
            src={wishMobile}
            alt="Ekatva eWish mobile app — wish submitted confirmation"
            className="relative z-10 h-auto w-full drop-shadow-[0_28px_52px_rgba(31,41,55,0.18)]"
            loading="lazy"
            animate={reduceMotion ? undefined : floatingMotionSlow}
          />
        </m.div>

        <m.ul
          className="mx-auto flex w-full max-w-[420px] flex-col gap-3.5 sm:gap-4 lg:mx-0 lg:max-w-[440px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EWISH_FEATURES.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <m.li key={item.id} variants={fadeRight} className="list-none">
                <m.article
                  className="flex items-center gap-4 rounded-2xl border border-[#F5B87A] bg-[#FFFBF7] px-4 py-4 transition-[border-color,box-shadow] duration-200 hover:border-[#F27022] hover:shadow-[0_12px_28px_rgba(242,112,34,0.1)] sm:gap-5 sm:px-5 sm:py-[1.15rem]"
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF1E6] text-[#F27022] sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-home text-[15px] font-bold text-[#8B2E28] sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-home text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                      {item.description}
                    </p>
                  </div>
                </m.article>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
}
