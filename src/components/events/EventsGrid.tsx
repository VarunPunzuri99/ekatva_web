import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import {
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { EVENT_SORT_OPTIONS, type EventSort } from "@/content/events";
import { useOnlinePoojaEvents } from "@/hooks/useOnlinePoojaEvents";
import { easeOutExpo, fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  isPastEvent,
  isUpcomingEvent,
  type OnlinePoojaEvent,
} from "@/services/onlinePooja";

function EventCard({ event }: { event: OnlinePoojaEvent }) {
  const completed = isPastEvent(event);

  return (
    <m.article
      variants={fadeUp}
      whileHover={
        completed
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.25, ease: easeOutExpo },
            }
      }
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[14px] border bg-white transition-shadow duration-300",
        completed
          ? "border-[#E5E7EB] bg-[#FAFAFA] shadow-none"
          : "border-black/[0.06] shadow-[0_4px_18px_rgba(31,41,55,0.06)] hover:shadow-[0_12px_28px_rgba(31,41,55,0.1)]",
      )}
    >
      <Link
        to={`/events/${event.id}`}
        className="flex h-full flex-col text-inherit no-underline"
      >
      <div className="relative h-[190px] w-full overflow-hidden bg-[#F5EDE0] sm:h-[200px]">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              completed && "opacity-55 saturate-[0.35] grayscale",
            )}
            style={{ objectPosition: "center top" }}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center font-home text-[13px] text-[#9CA3AF]",
              completed && "opacity-60",
            )}
          >
            {event.category}
          </div>
        )}
        {completed && (
          <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-[#6B7280]/90 px-2.5 py-1 font-home text-[10px] font-semibold tracking-wide text-white uppercase sm:text-[11px]">
            Completed
          </span>
        )}
        <div
          className={cn(
            "absolute top-2.5 right-2.5 z-10 flex min-w-[48px] flex-col items-center rounded-md px-2 py-1.5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.12)] sm:min-w-[52px]",
            completed ? "bg-[#F3F4F6]" : "bg-white",
          )}
        >
          <span
            className={cn(
              "font-home text-[18px] leading-none font-bold sm:text-[20px]",
              completed ? "text-[#9CA3AF]" : "text-[#1A1A1A]",
            )}
          >
            {event.day}
          </span>
          <span
            className={cn(
              "mt-0.5 font-home text-[10px] leading-tight font-medium sm:text-[11px]",
              completed ? "text-[#9CA3AF]" : "text-[#6B7280]",
            )}
          >
            {event.month} {event.weekday}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3.5 pt-3.5 pb-3.5 sm:px-4 sm:pt-4 sm:pb-4">
        <p
          className={cn(
            "font-home text-[11px] font-medium sm:text-[12px]",
            completed ? "text-[#9CA3AF]" : "text-[#C4A35A]",
          )}
        >
          {event.category}
        </p>
        <h3
          className={cn(
            "mt-1 font-home text-[15px] font-bold leading-snug sm:text-[16px]",
            completed ? "text-[#9CA3AF]" : "text-home-text",
          )}
        >
          {event.title}
        </h3>

        <ul className="mt-2.5 space-y-1.5">
          <li
            className={cn(
              "flex items-start gap-2 font-home text-[12px] sm:text-[13px]",
              completed ? "text-[#9CA3AF]" : "text-[#6B7280]",
            )}
          >
            <MapPin
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9CA3AF]"
              strokeWidth={2}
            />
            <span>{event.location}</span>
          </li>
          <li
            className={cn(
              "flex items-start gap-2 font-home text-[12px] sm:text-[13px]",
              completed ? "text-[#9CA3AF]" : "text-[#6B7280]",
            )}
          >
            <CalendarDays
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9CA3AF]"
              strokeWidth={2}
            />
            <span>{event.dateLabel}</span>
          </li>
          <li
            className={cn(
              "flex items-start gap-2 font-home text-[12px] sm:text-[13px]",
              completed ? "text-[#9CA3AF]" : "text-[#6B7280]",
            )}
          >
            <Clock
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9CA3AF]"
              strokeWidth={2}
            />
            <span>{event.timeLabel}</span>
          </li>
        </ul>

        <div
          className={cn(
            "mt-auto mt-3.5 flex items-center justify-between border-t pt-3",
            completed ? "border-[#E5E7EB]" : "border-[#EFE7DC]",
          )}
        >
          <span
            className={cn(
              "font-home text-[13px] font-medium",
              completed ? "text-[#9CA3AF]" : "text-[#F27022]",
            )}
          >
            View Details
          </span>
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              completed
                ? "text-[#9CA3AF]"
                : "text-[#F27022] group-hover:translate-x-0.5",
            )}
            strokeWidth={2.25}
            aria-hidden
          />
        </div>
      </div>
      </Link>
    </m.article>
  );
}

function EventCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-black/[0.06] bg-white shadow-[0_4px_18px_rgba(31,41,55,0.06)]">
      <div className="h-[190px] animate-pulse bg-[#F5EDE0] sm:h-[200px]" />
      <div className="space-y-2.5 px-3.5 py-3.5 sm:px-4 sm:py-4">
        <div className="h-3 w-16 animate-pulse rounded bg-[#F3EDE4]" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-[#F3EDE4]" />
        <div className="h-3 w-full animate-pulse rounded bg-[#F3EDE4]" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-[#F3EDE4]" />
      </div>
    </div>
  );
}

function EventSortDropdown({
  value,
  onChange,
}: {
  value: EventSort;
  onChange: (next: EventSort) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected =
    EVENT_SORT_OPTIONS.find((opt) => opt.value === value) ??
    EVENT_SORT_OPTIONS[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative z-20">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Sort events"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex items-center gap-2.5 rounded-xl border bg-white px-3.5 py-2.5 font-home text-[13px] shadow-[0_2px_10px_rgba(31,41,55,0.06)] transition-[border-color,box-shadow,transform] duration-200",
          open
            ? "border-[#F27022]/55 shadow-[0_8px_22px_rgba(242,112,34,0.14)]"
            : "border-[#E8D5C0] hover:border-[#F27022]/40 hover:shadow-[0_6px_16px_rgba(31,41,55,0.08)]",
        )}
      >
        <span className="text-[#6B7280]">Sort by:</span>
        <span className="font-semibold text-[#1A1A1A]">{selected.label}</span>
        <span
          className={cn(
            "ml-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF3E6] text-[#F27022] transition-transform duration-200",
            open && "rotate-180",
          )}
        >
          <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <m.ul
            role="listbox"
            aria-label="Sort options"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: easeOutExpo }}
            className="absolute top-[calc(100%+8px)] right-0 min-w-[180px] overflow-hidden rounded-xl border border-[#E8D5C0] bg-white p-1.5 shadow-[0_14px_34px_rgba(31,41,55,0.14)]"
          >
            {EVENT_SORT_OPTIONS.map((opt) => {
              const active = opt.value === value;
              return (
                <li key={opt.value} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left font-home text-[13px] transition-colors duration-150",
                      active
                        ? "bg-[#FFF3E6] font-semibold text-[#F27022]"
                        : "text-[#374151] hover:bg-[#FFF8F0] hover:text-[#F27022]",
                    )}
                  >
                    <span>{opt.label}</span>
                    {active && (
                      <Check
                        className="h-4 w-4 shrink-0"
                        strokeWidth={2.4}
                        aria-hidden
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function EventsGrid() {
  const [sort, setSort] = useState<EventSort>("upcoming");
  const { events: apiEvents, loading, error, refetch } = useOnlinePoojaEvents();

  const events = useMemo(() => {
    let list = [...apiEvents];

    if (sort === "upcoming") {
      list = list.filter((event) => isUpcomingEvent(event));
      list.sort((a, b) => a.sortDate.localeCompare(b.sortDate));
    } else if (sort === "latest") {
      list.sort((a, b) => b.sortDate.localeCompare(a.sortDate));
    } else {
      list.sort((a, b) => a.sortDate.localeCompare(b.sortDate));
    }

    return list;
  }, [apiEvents, sort]);

  const emptyMessage =
    sort === "upcoming"
      ? "No upcoming poojas available at the moment."
      : sort === "all"
        ? "No events available at the moment."
        : "No events available at the moment.";

  const showGrid = loading || (!error && events.length > 0);

  return (
    <section
      className="bg-white pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
      style={{ backgroundColor: "#FFFFFF" }}
      aria-labelledby="all-events-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2
            id="all-events-heading"
            className="font-home text-[1.25rem] font-bold text-[#8B2E28] sm:text-[1.4rem]"
          >
            All Events
          </h2>

          <EventSortDropdown value={sort} onChange={setSort} />
        </div>

        {error && events.length === 0 && (
          <div className="mt-6 rounded-xl border border-[#F5D0B5] bg-[#FFF8F0] px-4 py-5 text-center sm:mt-7">
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

        {!loading && !error && events.length === 0 && (
          <p className="mt-6 text-center font-home text-[14px] text-[#6B7280] sm:mt-7">
            {emptyMessage}
          </p>
        )}

        {showGrid && (
          <m.div
            key={loading ? "loading" : `events-${events.length}-${sort}`}
            className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {loading && events.length === 0
              ? Array.from({ length: 4 }).map((_, index) => (
                  <EventCardSkeleton key={`skeleton-${index}`} />
                ))
              : events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
          </m.div>
        )}
      </div>
    </section>
  );
}
