import { motion } from "framer-motion";
import {
  Clock,
  Globe,
  Shield,
  Sparkles,
  Lock,
  BookOpen,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Shield,
    title: "Trusted Spiritual Experts",
    description: "Every pandit and astrologer is verified for authenticity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your spiritual journey remains completely confidential.",
  },
  {
    icon: Sparkles,
    title: "Traditional Practices",
    description: "Rooted in Vedic traditions, delivered with modern ease.",
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    description: "Connect with sacred services from any corner of the world.",
  },
  {
    icon: BookOpen,
    title: "Personalized Guidance",
    description: "Tailored spiritual recommendations for your unique path.",
  },
  {
    icon: Clock,
    title: "Verified Knowledge",
    description: "Ancient wisdom validated by experienced practitioners.",
  },
];

export function WhyChooseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="why-ekatva"
      aria-labelledby="why-heading"
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
            label="Why Ekatva"
            title="Built on Trust, Rooted in Tradition"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={cn(
                  "group rounded-2xl glass-card p-6 transition-shadow duration-300",
                  "hover:shadow-lg hover:shadow-primary/10",
                )}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-text-light">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg text-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-body-small text-text-muted">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
