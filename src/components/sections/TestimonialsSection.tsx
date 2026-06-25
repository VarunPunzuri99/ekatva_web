import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Early Access Member",
    quote:
      "Ekatva feels like the spiritual companion I've been searching for. The platform's reverence for tradition while embracing technology is truly remarkable.",
  },
  {
    name: "Rajesh Kumar",
    role: "Beta Tester",
    quote:
      "Booking a pandit has never been this seamless. The verification process gave me complete confidence in the service quality.",
  },
  {
    name: "Ananya Reddy",
    role: "Spiritual Seeker",
    quote:
      "The astrology consultations are deeply insightful. Ekatva bridges the gap between ancient wisdom and my modern lifestyle beautifully.",
  },
];

export function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-background-alt px-4 py-20 md:py-28"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Testimonials"
            title="Voices of Our Community"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.name}
                variants={fadeUp}
                className="relative rounded-2xl glass-card p-8"
              >
                <Quote
                  className="mb-4 h-8 w-8 text-primary/40"
                  aria-hidden="true"
                />
                <p className="text-body-small text-text italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-4">
                  <cite className="not-italic">
                    <span className="font-heading text-base text-dark">
                      {item.name}
                    </span>
                    <span className="mt-1 block font-ui text-xs text-text-muted">
                      {item.role}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
