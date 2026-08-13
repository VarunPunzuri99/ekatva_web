import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: "/assets/service-book-pandit.png",
    title: "ePANDIT",
    description:
      "Book experienced and verified Pandits for your pujas, homas and rituals.",
  },
  {
    icon: "/assets/service-puja.png",
    title: "ePUJA",
    description:
      "Participate in sacred pujas from anywhere and receive divine blessings.",
  },
  {
    icon: "/assets/service-japa.png",
    title: "eJAPA",
    description:
      "Book Japa services for peace, health, prosperity and spiritual growth.",
  },
  {
    icon: "/assets/service-dristi.png",
    title: "eDISTI",
    description:
      "Remove negative energies and protect your home and loved ones.",
  },
  {
    icon: "/assets/service-horoscope.png",
    title: "ePRADAKSHINA",
    description:
      "A sacred way to express devotion through every virtual step.",
  },
  {
    icon: "/assets/eWish.png",
    title: "eWISH",
    description:
      "Offer your wish with faith and receive personalized spiritual guidance.",
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
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7"
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
