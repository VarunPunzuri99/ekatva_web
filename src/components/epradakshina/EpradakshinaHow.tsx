import { m } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { EPRADAKSHINA_HOW } from "@/content/epradakshina";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

type StepIcon = (typeof EPRADAKSHINA_HOW.steps)[number]["icon"];

function StepGlyph({ kind }: { kind: StepIcon }) {
  const common = "h-8 w-8 sm:h-9 sm:w-9";

  if (kind === "om") {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <path
          d="M24 8c-3.2 0-5.6 2.2-5.6 5.2 0 2.4 1.4 4.2 3.6 5.2-2.6.8-4.4 3-4.4 5.8 0 3.4 2.8 6 6.4 6s6.4-2.6 6.4-6c0-2.8-1.8-5-4.4-5.8 2.2-1 3.6-2.8 3.6-5.2C29.6 10.2 27.2 8 24 8zm0 3c1.5 0 2.6 1 2.6 2.2S25.5 15.4 24 15.4s-2.6-1-2.6-2.2S22.5 11 24 11zm0 12.2c1.8 0 3.2 1.3 3.2 3s-1.4 3-3.2 3-3.2-1.3-3.2-3 1.4-3 3.2-3z"
          fill="none"
          stroke="#F27022"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.5 14.5c2.2-.4 4 1 4 3.2 0 2.4-2 3.6-4.2 3.2"
          fill="none"
          stroke="#F27022"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="38" r="1.6" fill="#F27022" />
      </svg>
    );
  }

  if (kind === "rounds") {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        <path
          d="M34 18a12 12 0 1 0 2.5 10.5"
          fill="none"
          stroke="#F27022"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M34 12v8h-8"
          fill="none"
          stroke="#F27022"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "flower") {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden>
        {[0, 45, 90, 135].map((deg) => (
          <ellipse
            key={deg}
            cx="24"
            cy="14"
            rx="5.5"
            ry="9"
            fill="none"
            stroke="#F27022"
            strokeWidth="2"
            transform={`rotate(${deg} 24 24)`}
          />
        ))}
        <circle cx="24" cy="24" r="3.5" fill="#F27022" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className={common} aria-hidden>
      <path
        d="M24 10c-1 4-.6 8 0 11 3-2.2 5.5-6 5.5-10-2.2.8-4 0-5.5-1z"
        fill="#F27022"
        opacity="0.9"
      />
      <path
        d="M14 32c2 7 8 11 10 11s8-4 10-11c-4 2.5-8 3.2-10 3.2S18 34.5 14 32z"
        fill="none"
        stroke="#F27022"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13 30c2.5-2 8-3.5 11-3.5s8.5 1.5 11 3.5"
        fill="none"
        stroke="#F27022"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EpradakshinaHow() {
  return (
    <section
      className="bg-white pb-12 sm:pb-14 lg:pb-16"
      aria-labelledby="epradakshina-how-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="rounded-[22px] border border-[#EDE4DA] bg-[#F7F5F2] px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.h2
            id="epradakshina-how-heading"
            variants={fadeUp}
            className="text-center font-home-display text-[1.45rem] font-semibold text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
          >
            {EPRADAKSHINA_HOW.title}
          </m.h2>

          <m.ol
            className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-4"
            variants={staggerContainer}
          >
            {EPRADAKSHINA_HOW.steps.map((step, index) => (
              <m.li
                key={step.id}
                variants={fadeUp}
                className="relative list-none text-center"
              >
                {index < EPRADAKSHINA_HOW.steps.length - 1 && (
                  <span
                    className="pointer-events-none absolute top-8 right-[-10%] hidden text-[#C4B5A5] lg:block"
                    aria-hidden
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={2} />
                  </span>
                )}

                <m.div
                  className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-[1.5px] border-[#F27022] bg-white sm:h-[80px] sm:w-[80px]"
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.22, ease: easeOutExpo },
                  }}
                >
                  <StepGlyph kind={step.icon} />
                </m.div>

                <p className="mt-4 font-home text-[14px] font-bold text-[#F27022] sm:text-[15px]">
                  <span className="mr-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F27022] align-middle font-home text-[11px] font-bold text-white">
                    {index + 1}
                  </span>
                  {step.title}
                </p>
                <p className="mx-auto mt-1.5 max-w-[200px] font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                  {step.description}
                </p>
              </m.li>
            ))}
          </m.ol>
        </m.div>
      </div>
    </section>
  );
}
