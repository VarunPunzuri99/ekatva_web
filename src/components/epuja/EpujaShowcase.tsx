import { m, useReducedMotion } from "framer-motion";
import epoojaMobile from "@/assets/images/ePoojaPage/epooja_mobilepic.png";
import poojaBg from "@/assets/images/ePoojaPage/pooja_bg.jpg";
import {
  fadeUp,
  floatingMotionSlow,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

/** Mock: centered phone on ePoojaPage/pooja_bg mandala — then CTA + footer. */
export function EpujaShowcase() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      aria-label="ePuja mobile app preview"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={poojaBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <m.div
        className="relative z-10 mx-auto flex max-w-[1200px] justify-center px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <m.div
          variants={reduceMotion ? fadeUp : scaleIn}
          className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] xl:max-w-[380px]"
        >
          <m.img
            src={epoojaMobile}
            alt="Ekatva ePuja mobile app — Book Sacred Poojas"
            className="relative z-10 mx-auto h-auto w-full drop-shadow-[0_28px_56px_rgba(92,42,26,0.22)]"
            loading="lazy"
            animate={reduceMotion ? undefined : floatingMotionSlow}
          />
        </m.div>
      </m.div>
    </section>
  );
}
