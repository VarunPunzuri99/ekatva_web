import { m, useReducedMotion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";
import { DRISHTI_HERO } from "@/content/epujaDrishti";
import {
  easeOutExpo,
  fadeUp,
  floatingMotion,
  heroStagger,
} from "@/lib/animations";

export function DrishtiHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="drishti-heading"
    >
      <div className="relative">
        <m.div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
          style={{
            background:
              "linear-gradient(105deg, #FFD999 0%, #FFE9B8 28%, #FFF6E4 52%, #FFFFFF 82%)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 pt-12 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-8">
            <m.div
              className="max-w-xl pb-8 sm:pb-10 lg:pb-[60px]"
              variants={heroStagger}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
            >
              <m.p
                variants={fadeUp}
                className="font-home text-[15px] font-bold text-[#F27022]"
              >
                {DRISHTI_HERO.eyebrow}
              </m.p>
              <m.h1
                id="drishti-heading"
                variants={fadeUp}
                className="mt-2 font-home text-[1.55rem] font-bold leading-[1.25] tracking-tight text-[#1A1A1A] sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.2rem]"
              >
                {DRISHTI_HERO.title}
              </m.h1>
              <m.p
                variants={fadeUp}
                className="mt-2 font-home text-[14px] text-[#4B5563] sm:text-[15px]"
              >
                {DRISHTI_HERO.subtitle}
              </m.p>
              <m.div
                variants={fadeUp}
                className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 font-home text-[13px] sm:text-[14px]"
              >
                <span className="inline-flex items-center gap-1 font-bold text-[#1A1A1A]">
                  <Star
                    className="h-4 w-4 fill-[#F27022] text-[#F27022]"
                    aria-hidden
                  />
                  {DRISHTI_HERO.rating}
                </span>
                <span className="text-[#6B7280]">{DRISHTI_HERO.reviewsLabel}</span>
                <span className="text-[#D1D5DB]" aria-hidden>
                  |
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#2E7D32]">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2} aria-hidden />
                  {DRISHTI_HERO.trusted}
                </span>
              </m.div>
            </m.div>

            <div className="relative z-10 flex justify-center lg:justify-end lg:pr-10 xl:pr-14">
              <div className="mb-[-42px] sm:mb-[-48px] lg:mb-[-52px]">
                <m.div
                  className="relative z-10"
                  initial={
                    reduceMotion ? false : { opacity: 0, scale: 0.72, rotate: -6 }
                  }
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.75, ease: easeOutExpo }}
                >
                  <m.div
                    className="h-[170px] w-[170px] overflow-hidden rounded-full border-[4px] border-[#F27022] bg-[#FFF3E0] shadow-[0_8px_28px_rgba(242,112,34,0.2)] sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px]"
                    animate={reduceMotion ? undefined : floatingMotion}
                  >
                    <img
                      src={DRISHTI_HERO.image}
                      alt={DRISHTI_HERO.title}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: DRISHTI_HERO.imagePosition }}
                    />
                  </m.div>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <m.div
        className="relative z-0 h-[5px] w-full origin-center bg-[#F27022] sm:h-[6px]"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0.5 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: easeOutExpo }}
      />

      <div className="h-[42px] bg-white sm:h-[48px] lg:h-[52px]" />
    </section>
  );
}
