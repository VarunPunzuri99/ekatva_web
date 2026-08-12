import { m } from "framer-motion";
import { DRISHTI_ABOUT } from "@/content/epujaDrishti";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function NoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <circle cx="20" cy="20" r="18" stroke="#E8A017" strokeWidth="1.6" />
      <path
        d="M14 22c2.5 3.5 5.5 5 8.5 5 4.2 0 7-2.6 7-6 0-3.8-3.2-5.2-6.4-6.2-2.6-.8-4.5-1.6-4.5-3.5 0-1.5 1.4-2.7 3.3-2.7 2.2 0 3.8 1.1 4.8 2.6"
        stroke="#E8A017"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="28.5" cy="11.5" r="1.5" fill="#E8A017" />
    </svg>
  );
}

export function DrishtiAbout() {
  return (
    <section
      className="bg-white pb-12 sm:pb-14 lg:pb-16"
      aria-labelledby="drishti-about-heading"
    >
      <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.p
            variants={fadeUp}
            className="font-home text-[12px] font-bold tracking-[0.04em] text-[#F27022] sm:text-[13px]"
          >
            {DRISHTI_ABOUT.eyebrow}
          </m.p>
          <m.h2
            id="drishti-about-heading"
            variants={fadeUp}
            className="mt-2 font-home-display text-[1.35rem] font-semibold leading-snug text-[#8B2E28] sm:text-[1.55rem] lg:text-[1.7rem]"
          >
            {DRISHTI_ABOUT.title}
          </m.h2>
          {DRISHTI_ABOUT.paragraphs.map((p) => (
            <m.p
              key={p.slice(0, 24)}
              variants={fadeUp}
              className="mt-3.5 max-w-[52ch] font-home text-[13px] leading-relaxed text-[#5C5C5C] sm:text-[14px]"
            >
              {p}
            </m.p>
          ))}
        </m.div>

        <m.aside
          className="rounded-[14px] border border-[#E8C9A0]/70 bg-[#FFF8F0] px-5 py-5 sm:px-6 sm:py-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="flex items-start gap-3.5">
            <NoteMark className="mt-0.5 h-10 w-10 shrink-0" />
            <div>
              <h3 className="font-home text-[15px] font-bold text-[#5C2A1A] sm:text-[16px]">
                {DRISHTI_ABOUT.noteTitle}
              </h3>
              <p className="mt-2 font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                {DRISHTI_ABOUT.note}
              </p>
            </div>
          </div>
        </m.aside>
      </div>
    </section>
  );
}
