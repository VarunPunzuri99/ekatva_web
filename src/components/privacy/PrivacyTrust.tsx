import { m } from "framer-motion";
import { PRIVACY_TRUST } from "@/content/privacy";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function PrivacyTrust() {
  return (
    <section
      className="bg-white pb-10 sm:pb-12 lg:pb-14"
      aria-labelledby="privacy-trust-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="relative overflow-hidden rounded-2xl px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14"
          style={{ background: "#F5D76E" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2
            id="privacy-trust-heading"
            className="font-home text-[1.35rem] font-bold text-[#8B2E28] sm:text-[1.55rem] lg:text-[1.75rem]"
          >
            {PRIVACY_TRUST.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-home text-[13px] leading-relaxed text-[#5C4033] sm:text-[14px] lg:text-[15px]">
            {PRIVACY_TRUST.body}
          </p>
          <img
            src="/assets/icon.png"
            alt=""
            aria-hidden
            className="mx-auto mt-6 h-10 w-10 object-contain mix-blend-multiply opacity-90 sm:h-11 sm:w-11"
          />
        </m.div>
      </div>
    </section>
  );
}
