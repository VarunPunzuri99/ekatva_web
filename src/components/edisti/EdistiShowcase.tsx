import { m, useReducedMotion } from "framer-motion";
import astronomyBg from "@/assets/images/astroguruPage/astronomy_bg.jpg";
import distiMobile from "@/assets/images/edistiPage/eDisti_mobile.png";
import { EDISTI_SHOWCASE } from "@/content/edisti";
import {
  easeOutExpo,
  fadeLeft,
  fadeRight,
  floatingMotionSlow,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function MandalaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="6" stroke="#F27022" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="2.2" fill="#F27022" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path
          key={deg}
          d="M24 4c2.2 4.8 2.2 8.4 0 12-2.2-3.6-2.2-7.2 0-12Z"
          stroke="#C2410C"
          strokeWidth="1.2"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="14" stroke="#E8C9A0" strokeWidth="1" />
    </svg>
  );
}

export function EdistiShowcase() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-[#FDFBF7] py-12 sm:py-14 lg:py-[4.5rem]"
      aria-labelledby="edisti-showcase-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={astronomyBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(253,251,247,0.15) 0%, rgba(253,251,247,0.05) 40%, rgba(253,251,247,0.08) 70%, rgba(253,251,247,0.18) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[18%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(253,251,247,0) 0%, rgba(253,251,247,0.45) 55%, #FDFBF7 100%)",
          }}
        />
      </div>

      <m.div
        className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6 lg:px-8 xl:max-w-[1320px] xl:gap-8 xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <m.div
          variants={fadeLeft}
          className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] lg:justify-self-end lg:pr-2"
        >
          <m.img
            src={distiMobile}
            alt="Ekatva eDisti mobile app — traditional Disti rituals"
            className="relative z-10 h-auto w-full drop-shadow-[0_28px_52px_rgba(31,41,55,0.18)]"
            loading="lazy"
            animate={reduceMotion ? undefined : floatingMotionSlow}
          />
        </m.div>

        <m.div
          variants={fadeRight}
          className="flex justify-center lg:justify-start lg:pl-4 xl:pl-10"
        >
          <m.aside
            className="relative w-full max-w-[380px] overflow-hidden rounded-[22px] border border-[#E8C9A0]/80 bg-[#FFF8F0]/95 px-5 py-6 shadow-[0_14px_36px_rgba(180,83,9,0.1)] sm:px-7 sm:py-7"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -3,
                    transition: { duration: 0.3, ease: easeOutExpo },
                  }
            }
          >
            <div className="flex items-start gap-3.5 sm:gap-4">
              <MandalaMark className="mt-0.5 h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
              <div>
                <h2
                  id="edisti-showcase-heading"
                  className="font-home text-[1.15rem] font-bold leading-snug text-[#8B2E28] sm:text-[1.3rem]"
                >
                  {EDISTI_SHOWCASE.title}
                </h2>
                <p className="mt-2 font-home text-[13px] leading-relaxed text-[#5C4A3A] sm:text-[14px]">
                  {EDISTI_SHOWCASE.subtitle}
                </p>
              </div>
            </div>
          </m.aside>
        </m.div>
      </m.div>
    </section>
  );
}
