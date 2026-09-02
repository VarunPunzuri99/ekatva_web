import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useOnlinePoojaEvents } from "@/hooks/useOnlinePoojaEvents";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { isUpcomingEvent } from "@/services/onlinePooja";

const HOME_EVENTS_LIMIT = 4;

function EventCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_2px_12px_rgba(31,41,55,0.05)]">
      <div className="aspect-[16/11] animate-pulse bg-[#F3EDE4]" />
      <div className="space-y-2.5 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-[#F3EDE4]" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-[#F3EDE4]" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-[#F3EDE4]" />
      </div>
    </div>
  );
}

export function HomeEvents() {
  const { events, loading, error, refetch } = useOnlinePoojaEvents();

  // Home preview: only future events, max 4. Full list lives on /events via View All.
  const visibleEvents = events
    .filter((event) => isUpcomingEvent(event))
    .slice(0, HOME_EVENTS_LIMIT);

  const showEmpty = !loading && !error && visibleEvents.length === 0;

  return (
    <section
      id="events"
      className="bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="relative flex flex-col items-center">
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
            className="mt-4 sm:absolute sm:top-0 sm:right-0 sm:mt-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 rounded-full border border-[#F27022]/25 bg-gradient-to-r from-[#FFF7F0] to-[#FFF1E6] px-4 py-2 font-home text-[13px] font-semibold text-[#F27022] shadow-[0_4px_14px_rgba(242,112,34,0.12)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#F27022]/45 hover:shadow-[0_8px_20px_rgba(242,112,34,0.18)] sm:px-5 sm:py-2.5 sm:text-[14px]"
            >
              View All
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-4 sm:w-4"
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </Link>
          </m.div>
        </div>

        {error && (
          <div className="mt-8 rounded-xl border border-[#F5D0B5] bg-[#FFF8F0] px-4 py-5 text-center sm:mt-10">
            <p className="font-home text-[14px] text-[#6B7280]">{error}</p>
            <button
              type="button"
              onClick={refetch}
              className="mt-3 font-home text-[13px] font-semibold text-[#F27022] hover:opacity-80"
            >
              Try again
            </button>
          </div>
        )}

        {showEmpty && (
          <p className="mt-8 text-center font-home text-[14px] text-[#6B7280] sm:mt-10">
            No upcoming events right now. Check back soon.
          </p>
        )}

        {(loading || visibleEvents.length > 0) && (
          <m.div
            key={loading && visibleEvents.length === 0 ? "loading" : `home-events-${visibleEvents.length}`}
            className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {loading && visibleEvents.length === 0
              ? Array.from({ length: HOME_EVENTS_LIMIT }).map((_, index) => (
                  <EventCardSkeleton key={`skeleton-${index}`} />
                ))
              : visibleEvents.map((event) => (
                  <m.article
                    key={event.id}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="group overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_2px_12px_rgba(31,41,55,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(31,41,55,0.1)]"
                  >
                    <Link
                      to={`/events/${event.id}`}
                      className="block h-full text-inherit no-underline"
                    >
                      <div className="aspect-[16/11] overflow-hidden bg-[#F5EDE0]">
                        {event.image ? (
                          <img
                            src={event.image}
                            alt={event.title}
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                            style={{ objectPosition: "center top" }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center font-home text-[13px] text-[#9CA3AF]">
                            {event.category}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-home text-[15px] font-bold text-home-text">
                          {event.title}
                        </h3>
                        <p className="mt-1.5 font-home text-[12px] text-home-muted">
                          {event.homeDateLabel}
                        </p>
                        <p className="mt-1 font-home text-[12px] text-home-muted">
                          {event.locationShort}
                        </p>
                        <span className="read-more-underline mt-3 inline-block font-home text-[13px] font-medium text-home-orange">
                          View details →
                        </span>
                      </div>
                    </Link>
                  </m.article>
                ))}
          </m.div>
        )}
      </div>
    </section>
  );
}
