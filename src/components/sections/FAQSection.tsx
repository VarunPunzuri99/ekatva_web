import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    question: "What is Ekatva?",
    answer:
      "Ekatva is a spiritual wellness platform that connects you with verified pandits, astrologers, and spiritual services. We blend ancient Vedic traditions with modern technology to make sacred practices accessible to everyone.",
  },
  {
    question: "When does Ekatva launch?",
    answer:
      "Ekatva officially launches on July 5, 2026 at midnight IST. Subscribe to our newsletter to receive launch alerts and exclusive early access.",
  },
  {
    question: "What services will be available?",
    answer:
      "At launch, Ekatva will offer Book Pandit, Puja, Astrology, Japa, Dristi, and Horoscope services — covering the full spectrum of spiritual needs for individuals and families.",
  },
  {
    question: "Is Ekatva free?",
    answer:
      "Ekatva is free to explore. Individual services such as pandit bookings and astrology consultations are priced transparently, with options for every budget.",
  },
];

export function FAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="px-4 py-20 md:py-28"
      ref={ref}
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader label="FAQ" title="Frequently Asked Questions" />

          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
