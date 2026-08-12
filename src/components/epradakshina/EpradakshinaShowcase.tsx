import { m, useReducedMotion } from "framer-motion";
import pradakshinaBg from "@/assets/images/ePradakshina/pradakshina_bg.jpg";
import pradakshinaMobile from "@/assets/images/ePradakshina/ePradakshina_mobilepic.png";
import {
  easeOutExpo,
  fadeUp,
  floatingMotionSlow,
  viewportOnce,
} from "@/lib/animations";

export function EpradakshinaShowcase() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-[#FEF1DE] py-14 sm:py-16 lg:py-20"
      aria-label="ePradakshina app preview"
    >
      {/* Mandala background — pulled down so the pattern sits behind the phone */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={pradakshinaBg}
          alt=""
          className="absolute top-0 left-1/2 h-[145%] w-auto max-w-none -translate-x-1/2 object-contain object-top opacity-100 sm:h-[160%] lg:h-[175%]"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 55% at 50% 48%, rgba(254,241,222,0.05) 0%, rgba(254,241,222,0.28) 70%, #FEF1DE 100%)",
          }}
        />
      </div>

      <m.div
        className="relative z-10 mx-auto flex max-w-[1200px] justify-center px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <m.img
          src={pradakshinaMobile}
          alt="Ekatva ePradakshina mobile app — virtual pradakshina around the deity"
          className="relative z-10 h-auto w-full max-w-[260px] drop-shadow-[0_28px_52px_rgba(31,41,55,0.2)] sm:max-w-[300px] lg:max-w-[340px]"
          loading="lazy"
          animate={reduceMotion ? undefined : floatingMotionSlow}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -4,
                  transition: { duration: 0.3, ease: easeOutExpo },
                }
          }
        />
      </m.div>
    </section>
  );
}
