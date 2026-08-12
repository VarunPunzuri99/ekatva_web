import { m } from "framer-motion";
import { refundPolicy } from "@/content/refundPolicy";
import { easeOutExpo, fadeUpSoft } from "@/lib/animations";

const introViewport = {
  once: true,
  amount: 0.2,
  margin: "60px 0px 60px 0px",
} as const;

/** Split long intro for readable stacked lines without changing meaning. */
function introLines(): string[] {
  const [first = "", ...rest] = refundPolicy.intro;
  const splitAt =
    "This Refund & Cancellation Policy explains how cancellations, refunds, and service-related disputes are handled.";

  if (first.includes(splitAt)) {
    const lead = first.replace(splitAt, "").trim();
    return [lead, splitAt, ...rest].filter(Boolean);
  }

  return refundPolicy.intro;
}

export function RefundIntro() {
  const lines = introLines();

  return (
    <section
      className="relative overflow-hidden bg-[#FFF8F0] pb-10 pt-4 sm:pb-12 sm:pt-5"
      aria-label="Refund policy introduction"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(242,112,34,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[48rem] space-y-3.5 px-4 sm:space-y-4 sm:px-6">
        {lines.map((paragraph, index) => (
          <m.p
            key={paragraph.slice(0, 48)}
            className="text-center font-home text-[15px] leading-[1.75] font-semibold text-[#9C2525] sm:text-[16px] lg:text-[17px]"
            variants={fadeUpSoft}
            initial="hidden"
            whileInView="visible"
            viewport={introViewport}
            transition={{
              duration: 0.45,
              ease: easeOutExpo,
              delay: index * 0.07,
            }}
          >
            {paragraph}
          </m.p>
        ))}
      </div>
    </section>
  );
}
