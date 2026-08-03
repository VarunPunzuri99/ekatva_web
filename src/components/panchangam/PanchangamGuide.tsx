import { m } from "framer-motion";
import { PANCHANGAM_GUIDE } from "@/content/panchangam";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function PanchangamGuide() {
  return (
    <section
      id="panchangam-guide"
      className="bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="panchangam-guide-heading"
    >
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 lg:px-8">
        <m.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.p
            variants={fadeUp}
            className="font-home text-[11px] font-bold tracking-[0.18em] text-[#F27022] uppercase sm:text-[12px]"
          >
            {PANCHANGAM_GUIDE.eyebrow}
          </m.p>
          <m.h2
            id="panchangam-guide-heading"
            variants={fadeUp}
            className="mt-2.5 font-home-display text-[1.55rem] leading-tight font-semibold text-[#8B2E28] sm:text-[1.85rem] lg:text-[2.05rem]"
          >
            {PANCHANGAM_GUIDE.title}
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[40rem] font-home text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]"
          >
            {PANCHANGAM_GUIDE.intro}
          </m.p>
        </m.div>

        <m.ol
          className="mt-10 space-y-6 sm:mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {PANCHANGAM_GUIDE.items.map((item) => (
            <m.li
              key={item.num}
              variants={fadeUp}
              className="flex gap-4 sm:gap-5"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3, ease: easeOutExpo }}
            >
              <span className="font-home text-[18px] font-bold tabular-nums text-[#F27022] sm:text-[20px]">
                {item.num}
              </span>
              <div>
                <p className="font-home text-[15px] font-bold text-[#C45A28] sm:text-[16px]">
                  {item.title}
                </p>
                <p className="mt-1 font-home text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                  {item.text}
                </p>
              </div>
            </m.li>
          ))}
        </m.ol>

        <m.blockquote
          className="mt-12 rounded-2xl border border-[#E8C9A0] bg-[#FFF8EE] px-6 py-7 text-center sm:mt-14 sm:px-10 sm:py-9"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="font-home-display text-[1.05rem] leading-relaxed text-[#4B5563] italic sm:text-[1.2rem]">
            &ldquo;{PANCHANGAM_GUIDE.quote}&rdquo;
          </p>
          <footer className="mt-4 font-home text-[11px] font-bold tracking-[0.14em] text-[#F27022] uppercase sm:text-[12px]">
            {PANCHANGAM_GUIDE.attribution}
          </footer>
        </m.blockquote>
      </div>
    </section>
  );
}
