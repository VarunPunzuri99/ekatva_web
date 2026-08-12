import { m } from "framer-motion";
import { Shield } from "lucide-react";
import { TERMS_NOTE } from "@/content/terms";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function TermsNote() {
  return (
    <section
      className="bg-white pb-12 sm:pb-14 lg:pb-16"
      aria-labelledby="terms-note-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="relative overflow-hidden rounded-2xl bg-[#FFF8F0] px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img
            src="/assets/icon.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-2 top-1/2 h-28 w-28 -translate-y-1/2 object-contain opacity-[0.12] mix-blend-multiply sm:right-4 sm:h-32 sm:w-32 lg:right-8 lg:h-36 lg:w-36"
          />

          <div className="relative z-10 flex gap-3.5 sm:gap-4">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F27022] sm:h-12 sm:w-12"
              aria-hidden
            >
              <Shield className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
            </span>
            <div className="min-w-0 max-w-3xl pt-0.5">
              <h2
                id="terms-note-heading"
                className="font-home text-[15px] font-bold text-[#F27022] sm:text-[16px]"
              >
                {TERMS_NOTE.title}
              </h2>
              <p className="mt-1.5 font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
                {TERMS_NOTE.body}
              </p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
