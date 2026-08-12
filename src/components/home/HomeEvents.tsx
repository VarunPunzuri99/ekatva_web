import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { HOME_EVENTS } from "@/content/home";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function HomeEvents() {
  return (
    <section
      id="events"
      className="bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.h2
          id="events-heading"
          className="text-center text-[1.35rem] font-medium tracking-[0.14em] text-[#F29D38] uppercase sm:text-[1.55rem] sm:tracking-[0.16em] lg:text-[1.75rem] lg:tracking-[0.18em] xl:text-[1.9rem]"
          style={{ fontFamily: "var(--font-home-display), Cinzel, serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Upcoming Events &amp; Live Events
        </m.h2>

        <m.div
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {HOME_EVENTS.map((event) => (
            <m.article
              key={event.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_2px_12px_rgba(31,41,55,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(31,41,55,0.1)]"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: event.focus ?? "center top" }}
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-home text-[15px] font-bold text-home-text">
                  {event.title}
                </h3>
                <p className="mt-1.5 font-home text-[12px] text-home-muted">
                  {event.date}
                </p>
                <p className="mt-1 font-home text-[12px] text-home-muted">
                  {event.location}
                </p>
                <Link
                  to="/events"
                  className="read-more-underline mt-3 inline-block font-home text-[13px] font-medium text-home-orange"
                >
                  View details →
                </Link>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
