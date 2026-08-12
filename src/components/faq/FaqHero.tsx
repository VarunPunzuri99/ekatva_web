import { m, useReducedMotion } from "framer-motion";
import { FAQ_HERO } from "@/content/faq";
import {
  easeOutExpo,
  fadeUp,
  floatingMotion,
  heroStagger,
} from "@/lib/animations";

/** Cream gradient hero with overhanging question-mark disc on orange divider. */
export function FaqHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="faq-heading"
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
              <m.h1
                id="faq-heading"
                variants={fadeUp}
                className="font-home text-[1.65rem] font-bold leading-[1.25] tracking-tight text-[#5C2E1F] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.45rem]"
              >
                {FAQ_HERO.title}
              </m.h1>
              <m.p
                variants={fadeUp}
                className="mt-3 max-w-md font-home text-[14px] leading-relaxed text-[#6B553F] sm:text-[15px]"
              >
                {FAQ_HERO.subtitle}
              </m.p>
            </m.div>

            <div className="relative z-10 flex justify-center lg:justify-end lg:pr-10 xl:pr-14">
              <div className="mb-[-42px] sm:mb-[-48px] lg:mb-[-52px]">
                <m.div
                  className="relative z-10"
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 0.72, rotate: -6 }
                  }
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.75, ease: easeOutExpo }}
                >
                  <m.div
                    className="relative flex h-[170px] w-[170px] items-center justify-center rounded-full border-[3px] border-[#F27022] sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px]"
                    style={{
                      background:
                        "radial-gradient(circle at 62% 32%, #FFFCF5 0%, #FFF6E4 38%, #FFE9B8 72%, #F5D9A0 100%)",
                      boxShadow: "0 8px 28px rgba(242,112,34,0.16)",
                    }}
                    animate={reduceMotion ? undefined : floatingMotion}
                  >
                    <span
                      className="flex h-[54%] w-[54%] items-center justify-center rounded-full bg-[#8B5A2B]"
                      aria-hidden
                    >
                      <span className="select-none font-home text-[3.25rem] font-semibold leading-none text-[#FFF8E7] sm:text-[3.75rem] lg:text-[4.25rem]">
                        ?
                      </span>
                    </span>
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
