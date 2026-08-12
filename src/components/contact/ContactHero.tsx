import { m, useReducedMotion } from "framer-motion";
import { CONTACT_HERO } from "@/content/contact";
import { easeOutExpo, fadeUp, heroStagger } from "@/lib/animations";

/** Product-style hero: cream gradient + left copy + orange divider (no circle art). */
export function ContactHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-labelledby="contact-heading"
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
          <m.div
            className="max-w-xl pb-10 sm:pb-12 lg:pb-14"
            variants={heroStagger}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
          >
            <m.p
              variants={fadeUp}
              className="font-home text-[15px] font-bold text-[#F27022]"
            >
              {CONTACT_HERO.eyebrow}
            </m.p>
            <m.h1
              id="contact-heading"
              variants={fadeUp}
              className="mt-2 font-home text-[1.55rem] font-medium leading-[1.3] tracking-tight text-black sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.2rem]"
            >
              {CONTACT_HERO.title}
            </m.h1>
            <m.p
              variants={fadeUp}
              className="mt-2 font-home text-[14px] text-[#4B5563] sm:text-[15px]"
            >
              {CONTACT_HERO.subtitle}
            </m.p>
          </m.div>
        </div>
      </div>

      <m.div
        className="relative z-0 h-[5px] w-full origin-center bg-[#F27022] sm:h-[6px]"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0.5 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: easeOutExpo }}
      />
    </section>
  );
}
