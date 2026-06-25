import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Explore our curated spiritual services and find what resonates with your soul.",
  },
  {
    step: "02",
    title: "Connect",
    description:
      "Connect with verified pandits, astrologers, and spiritual guides.",
  },
  {
    step: "03",
    title: "Practice",
    description:
      "Engage in pujas, japa, and rituals — in person or virtually.",
  },
  {
    step: "04",
    title: "Transform",
    description:
      "Experience meaningful change through consistent spiritual practice.",
  },
  {
    step: "05",
    title: "Grow",
    description:
      "Continue your journey with personalized guidance and deeper insights.",
  },
];

export function JourneySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="px-4 py-20 md:py-28"
      ref={ref}
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Your Journey"
            title="Five Steps to Spiritual Fulfillment"
          />

          <ol className="relative space-y-0">
            <div
              className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2 md:-translate-x-px"
              aria-hidden="true"
            />

            {steps.map((item, i) => (
              <motion.li
                key={item.step}
                variants={fadeUp}
                className={cn(
                  "relative flex gap-8 pb-12 last:pb-0",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                <div className="hidden flex-1 md:block" />

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface font-heading text-sm font-semibold text-primary shadow-md shadow-primary/10">
                  {item.step}
                </div>

                <div
                  className={cn(
                    "flex-1 rounded-2xl glass-card p-6",
                    i % 2 === 0 ? "md:text-left" : "md:text-right",
                  )}
                >
                  <h3 className="font-heading text-xl text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-small text-text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
