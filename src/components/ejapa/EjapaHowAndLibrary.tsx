import { m } from "framer-motion";
import {
  Compass,
  Flame,
  Leaf,
  Shield,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { EJAPA_HOW, EJAPA_LIBRARY } from "@/content/ejapa";
import {
  easeOutExpo,
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const LIBRARY_ICONS: Record<
  (typeof EJAPA_LIBRARY.items)[number]["icon"],
  LucideIcon
> = {
  flame: Flame,
  shield: Shield,
  sun: Sun,
  leaf: Leaf,
  compass: Compass,
};

export function EjapaHowAndLibrary() {
  return (
    <section
      className="bg-[#FDF8F2] py-14 sm:py-16 lg:py-20"
      aria-label="How eJapa works and mantra library"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 xl:max-w-[1320px] xl:gap-14 xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        {/* How it works */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.p
            variants={fadeUp}
            className="font-home text-[11px] font-bold tracking-[0.2em] text-[#F27022] uppercase sm:text-[12px]"
          >
            {EJAPA_HOW.eyebrow}
          </m.p>
          <m.h2
            variants={fadeUp}
            className="mt-2.5 font-home text-[1.45rem] font-bold text-[#8B2E28] sm:text-[1.7rem]"
          >
            {EJAPA_HOW.title}
          </m.h2>

          <m.ol className="mt-7 space-y-3" variants={staggerContainer}>
            {EJAPA_HOW.steps.map((step, index) => (
              <m.li key={step.id} variants={fadeLeft} className="list-none">
                <m.article
                  className="flex items-start gap-3.5 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-[0_8px_22px_rgba(31,41,55,0.05)] transition-[border-color,box-shadow] duration-200 hover:border-[#F27022] hover:shadow-[0_12px_28px_rgba(242,112,34,0.1)] sm:gap-4 sm:px-5 sm:py-4"
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2, ease: easeOutExpo },
                  }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F27022] font-home text-[14px] font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-home text-[14px] font-bold text-[#8B2E28] sm:text-[15px]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                </m.article>
              </m.li>
            ))}
          </m.ol>
        </m.div>

        {/* Mantra library */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.p
            variants={fadeUp}
            className="font-home text-[11px] font-bold tracking-[0.2em] text-[#F27022] uppercase sm:text-[12px]"
          >
            {EJAPA_LIBRARY.eyebrow}
          </m.p>
          <m.h2
            variants={fadeUp}
            className="mt-2.5 font-home text-[1.45rem] font-bold text-[#8B2E28] sm:text-[1.7rem]"
          >
            {EJAPA_LIBRARY.title}
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-2 font-home text-[13px] leading-relaxed text-[#6B7280]"
          >
            {EJAPA_LIBRARY.subtitle}
          </m.p>

          <m.ul
            className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4"
            variants={staggerContainer}
          >
            {EJAPA_LIBRARY.items.map((item) => {
              const Icon = LIBRARY_ICONS[item.icon];
              return (
                <m.li key={item.id} variants={fadeRight} className="list-none h-full">
                  <m.article
                    className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_22px_rgba(31,41,55,0.05)] transition-[border-color,box-shadow] duration-200 hover:border-[#F27022] hover:shadow-[0_12px_28px_rgba(242,112,34,0.1)] sm:p-5"
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.2, ease: easeOutExpo },
                    }}
                  >
                    <span className="flex h-8 w-8 items-center justify-center text-[#F27022]">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="mt-3 font-home text-[13px] font-bold text-[#8B2E28] sm:text-[14px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-home text-[12px] leading-relaxed text-[#6B7280]">
                      {item.description}
                    </p>
                  </m.article>
                </m.li>
              );
            })}

            <m.li variants={fadeRight} className="list-none h-full sm:col-span-1">
              <m.article
                className="flex h-full min-h-[132px] flex-col justify-center rounded-2xl bg-[#F27022] p-5 text-white shadow-[0_12px_28px_rgba(242,112,34,0.28)] sm:p-6"
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2, ease: easeOutExpo },
                }}
              >
                <h3 className="font-home text-[15px] font-bold sm:text-base">
                  {EJAPA_LIBRARY.ctaTitle}
                </h3>
                <p className="mt-1.5 font-home text-[13px] leading-relaxed text-white/95">
                  {EJAPA_LIBRARY.ctaText}
                </p>
              </m.article>
            </m.li>
          </m.ul>
        </m.div>
      </div>
    </section>
  );
}
