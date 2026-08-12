import { m, useReducedMotion } from "framer-motion";
import astroguruArt from "@/assets/images/astroguruPage/astroguru_logo.png";
import { ASTROGURU_HERO } from "@/content/astroguru";
import {
  easeOutExpo,
  fadeUp,
  floatingMotion,
  heroStagger,
} from "@/lib/animations";

/** Same hero shell as Panchangam / Kundli / eJapa — overhanging circle on orange divider. */
export function AstroguruHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="astroguru-heading"
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter
            id="astroguru-knockout-black"
            colorInterpolationFilters="sRGB"
          >
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
                {ASTROGURU_HERO.eyebrow}
              </m.p>
              <m.h1
                id="astroguru-heading"
                variants={fadeUp}
                className="mt-2 font-home text-[1.55rem] font-medium leading-[1.3] tracking-tight text-black sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.2rem]"
              >
                {ASTROGURU_HERO.title}
              </m.h1>
              <m.p
                variants={fadeUp}
                className="mt-2 font-home text-[14px] text-[#4B5563] sm:text-[15px]"
              >
                {ASTROGURU_HERO.subtitle}
              </m.p>
            </m.div>

            <div className="relative z-10 flex justify-center lg:justify-end lg:pr-10 xl:pr-14">
              <div className="mb-[-42px] sm:mb-[-48px] lg:mb-[-52px]">
                <m.div
                  className="relative z-10"
                  initial={
                    reduceMotion ? false : { opacity: 0, scale: 0.72, rotate: -8 }
                  }
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.75, ease: easeOutExpo }}
                >
                  <m.div
                    className="flex h-[170px] w-[170px] items-center justify-center overflow-hidden rounded-full border-[3px] border-[#F27022] shadow-[0_8px_28px_rgba(242,112,34,0.18)] sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px]"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 40%, #FFF8E0 0%, #FFE9B0 55%, #FFE2A0 100%)",
                    }}
                    animate={reduceMotion ? undefined : floatingMotion}
                  >
                    <m.img
                      src={astroguruArt}
                      alt=""
                      className="h-[78%] w-[78%] object-contain"
                      style={{ filter: "url(#astroguru-knockout-black)" }}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: easeOutExpo,
                      }}
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
