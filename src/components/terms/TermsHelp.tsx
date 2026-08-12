import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Shield } from "lucide-react";
import { TERMS_HELP } from "@/content/terms";
import {
  easeOutExpo,
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function TermsHelp() {
  return (
    <section
      className="bg-[#FFF8F0] py-8 sm:py-10"
      aria-labelledby="terms-help-heading"
    >
      <m.div
        className="mx-auto flex max-w-[1200px] flex-col items-start gap-5 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <m.div variants={fadeLeft} className="flex max-w-2xl gap-3 sm:gap-4">
          <Shield
            className="mt-0.5 h-6 w-6 shrink-0 text-[#8B2E28] sm:h-7 sm:w-7"
            strokeWidth={1.6}
            aria-hidden
          />
          <div>
            <h2
              id="terms-help-heading"
              className="font-home text-[15px] font-bold text-[#8B2E28] sm:text-[16px] lg:text-[17px]"
            >
              {TERMS_HELP.lead}
            </h2>
            <p className="mt-1 font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
              {TERMS_HELP.body}
            </p>
          </div>
        </m.div>

        <m.div variants={fadeRight}>
          <Link
            to={TERMS_HELP.href}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#8B2E28] px-5 font-home text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(139,46,40,0.25)] transition-[filter,transform] hover:brightness-110 sm:h-12 sm:px-6 sm:text-[14px]"
          >
            <m.span
              className="inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18, ease: easeOutExpo }}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden />
              {TERMS_HELP.cta}
            </m.span>
          </Link>
        </m.div>
      </m.div>
    </section>
  );
}
