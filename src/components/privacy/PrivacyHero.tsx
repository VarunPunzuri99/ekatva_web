import { m, useReducedMotion } from "framer-motion";
import privacyArt from "@/assets/images/privacyPolicy.png";
import { PRIVACY_HERO } from "@/content/privacy";
import {
  easeOutExpo,
  fadeUp,
  floatingMotion,
  heroStagger,
} from "@/lib/animations";

/** Same hero shell as About / Astroguru — art overhangs the orange divider. */
export function PrivacyHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="privacy-heading"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id="privacy-knockout-black" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0.9 0.9 0.9 0 -0.05"
            />
          </filter>
        </defs>
      </svg>

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
              className="max-w-lg pb-8 sm:pb-10 lg:pb-[60px]"
              variants={heroStagger}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
            >
              <m.p
                variants={fadeUp}
                className="font-home text-[15px] font-bold text-[#F27022]"
              >
                {PRIVACY_HERO.eyebrow}
              </m.p>
              <m.h1
                id="privacy-heading"
                variants={fadeUp}
                className="mt-2 font-home text-[1.55rem] font-medium leading-[1.3] tracking-tight text-black sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.2rem]"
              >
                {PRIVACY_HERO.title}
              </m.h1>
              <m.p
                variants={fadeUp}
                className="mt-2 font-home text-[14px] text-[#4B5563] sm:text-[15px]"
              >
                {PRIVACY_HERO.subtitle}
              </m.p>
            </m.div>

            <div className="relative z-10 flex justify-center lg:justify-end lg:pr-4 xl:pr-8">
              <div className="mb-[-36px] sm:mb-[-44px] lg:mb-[-52px]">
                <m.div
                  className="relative z-10"
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 0.88, y: 16 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: easeOutExpo }}
                >
                  <m.img
                    src={privacyArt}
                    alt="Privacy, security, and sacred trust illustration"
                    className="h-auto w-[240px] object-contain sm:w-[300px] lg:w-[360px] xl:w-[400px]"
                    style={{ filter: "url(#privacy-knockout-black)" }}
                    animate={reduceMotion ? undefined : floatingMotion}
                  />
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

      <div className="h-[36px] bg-white sm:h-[44px] lg:h-[52px]" />
    </section>
  );
}
