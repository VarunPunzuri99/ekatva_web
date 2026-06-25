import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative px-4 py-20 md:py-28"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="About Ekatva"
            title="Where Spiritual Wisdom Meets Modern Life"
          />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <img
                src="/assets/about-temple.png"
                alt="Traditional temple silhouette at golden hour representing sacred heritage"
                className="relative rounded-2xl object-cover shadow-2xl shadow-primary/10"
                loading="lazy"
                width={640}
                height={480}
              />
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <h3 id="about-heading" className="sr-only">
                About Ekatva
              </h3>
              <p className="text-body-large text-text">
                Ekatva is a spiritual wellness platform that bridges ancient
                Vedic traditions with modern technology. We believe that sacred
                knowledge should be accessible to everyone, everywhere.
              </p>
              <p className="text-body-small text-text-muted">
                From booking verified pandits for your rituals to receiving
                personalized astrological guidance, Ekatva brings the full
                spectrum of spiritual services to your fingertips — with the
                trust, authenticity, and reverence they deserve.
              </p>
              <p className="text-body-small text-text-muted">
                Our mission is to help you discover inner peace, cultivate
                prosperity, and walk the path of spiritual harmony — one sacred
                step at a time.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
