import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: "/assets/service-book-pandit.png",
    title: "Book Pandit",
    description:
      "Book experienced and verified Pandits for your pujas, homas and rituals.",
  },
  {
    icon: "/assets/service-puja.png",
    title: "Puja",
    description:
      "Participate in sacred pujas from anywhere and receive divine blessings.",
  },
  {
    icon: "/assets/service-astrology.png",
    title: "Astrology",
    description:
      "Consult with expert astrologers for guidance on life's important decisions.",
  },
  {
    icon: "/assets/service-japa.png",
    title: "Japa",
    description:
      "Book Japa services for peace, health, prosperity and spiritual growth.",
  },
  {
    icon: "/assets/service-dristi.png",
    title: "Dristi",
    description:
      "Remove negative energies and protect your home and loved ones.",
  },
  {
    icon: "/assets/service-horoscope.png",
    title: "Horoscope",
    description:
      "Get accurate horoscope readings and insights about your future.",
  },
];

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden px-4 py-20 md:py-28"
      ref={ref}
    >
      <img
        src="/assets/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
        loading="lazy"
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Our Services"
            title="Spiritual Solutions. For Everyone."
            description="Ekatva brings traditional spiritual services to your fingertips. Stay tuned for a divine experience."
          />

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
