import { Helmet } from "react-helmet-async";
import { m } from "framer-motion";
import { ContactCompanyPanel } from "@/components/contact/ContactCompanyPanel";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactHighlights } from "@/components/contact/ContactHighlights";
import { CONTACT_INTRO } from "@/content/contact";
import { fadeUp, viewportOnce } from "@/lib/animations";

const SHELL =
  "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24";

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Ekatva</title>
        <meta name="description" content={CONTACT_INTRO} />
      </Helmet>

      <main className="bg-white">
        <ContactHero />
        <ContactHighlights />

        <section
          className="bg-white py-12 sm:py-14 lg:py-16"
          aria-label="Contact form and company details"
        >
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className={`${SHELL} grid items-start gap-6 lg:grid-cols-[1.35fr_0.9fr] lg:gap-8 xl:gap-10`}
          >
            <ContactForm />
            <ContactCompanyPanel />
          </m.div>
        </section>
      </main>
    </>
  );
}
