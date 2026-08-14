import { AnimatePresence, m } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import kundaArt from "@/assets/images/kunda_pic.png";
import { usePoojasList } from "@/hooks/usePoojasList";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/lib/animations";
import type { PoojaListItem } from "@/services/poojas";

/** 4 columns × 4 rows on desktop; still a tidy preview on smaller grids. */
const INITIAL_VISIBLE = 16;

function RitualCardSkeleton() {
  return (
    <li className="list-none h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-[14px] border border-[#E8C9A0]/80 bg-white shadow-[0_4px_16px_rgba(128,27,27,0.06)]">
        <div className="aspect-[5/4] animate-pulse bg-[#F5E6D3] sm:aspect-[4/3]" />
        <div className="px-2.5 py-3 sm:px-3">
          <div className="mx-auto h-3 w-3/4 animate-pulse rounded bg-[#F3EDE4]" />
        </div>
      </div>
    </li>
  );
}

function RitualCard({ pooja }: { pooja: PoojaListItem }) {
  return (
    <m.li
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
      className="list-none h-full"
    >
      <m.div
        className="h-full"
        whileHover={{
          y: -5,
          transition: { duration: 0.35, ease: easeOutExpo },
        }}
      >
        <Link
          to={`/book-pandit/${pooja.poojaId}`}
          className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#E8C9A0]/80 bg-white text-inherit no-underline shadow-[0_4px_16px_rgba(128,27,27,0.06)] transition-[box-shadow] duration-300 hover:shadow-[0_14px_32px_rgba(128,27,27,0.12)]"
          aria-label={`View details for ${pooja.title}`}
        >
          <div className="relative aspect-[5/4] overflow-hidden bg-[#F5E6D3] sm:aspect-[4/3]">
            {pooja.image ? (
              <img
                src={pooja.image}
                alt={pooja.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: "center top" }}
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-home text-[12px] text-[#9CA3AF]">
                {pooja.category}
              </div>
            )}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent"
              aria-hidden="true"
            />
          </div>
          <p className="px-2.5 py-3 text-center font-home text-[11px] leading-snug font-semibold text-[#5C2A1A] sm:px-3 sm:text-[12px] lg:text-[13px]">
            {pooja.title}
          </p>
        </Link>
      </m.div>
    </m.li>
  );
}

export function RitualsBookSection() {
  const { poojas, loading, error, refetch } = usePoojasList();
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visiblePoojas = useMemo(() => {
    if (expanded) return poojas;
    return poojas.slice(0, INITIAL_VISIBLE);
  }, [expanded, poojas]);

  const canToggle = poojas.length > INITIAL_VISIBLE;
  const hiddenCount = Math.max(poojas.length - INITIAL_VISIBLE, 0);

  const handleToggle = () => {
    if (expanded) {
      // Collapse first, then pin this section in view (avoids jumping to footer).
      setExpanded(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
      return;
    }
    setExpanded(true);
  };

  return (
    <section
      ref={sectionRef}
      className="border-y border-[#F5D9B0] bg-[#FFFBF5]"
      aria-labelledby="rituals-book-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.7fr)] lg:gap-12 xl:gap-16">
          <m.div
            className="flex flex-col lg:sticky lg:top-28"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <m.p
              variants={fadeUp}
              className="font-home text-[11px] font-bold tracking-[0.18em] text-[#A85A32] uppercase sm:text-[12px]"
            >
              Rituals You Can Book
            </m.p>
            <m.h2
              id="rituals-book-heading"
              variants={fadeUp}
              className="mt-2.5 max-w-[14ch] font-home-display text-[1.75rem] leading-[1.2] font-semibold text-[#801B1B] sm:text-[2rem] lg:text-[2.15rem]"
            >
              Pujas, Homams &amp; Ceremonies
            </m.h2>
            <m.p
              variants={fadeUp}
              className="mt-3.5 max-w-[34ch] font-home text-[13px] leading-relaxed text-[#666666] sm:text-[14px]"
            >
              Choose from a wide range of traditional ceremonies conducted with
              strict adherence to Vedic scriptures.
            </m.p>

            {!loading && !error && poojas.length > 0 && (
              <m.p
                variants={fadeUp}
                className="mt-3 font-home text-[12px] font-semibold text-[#A85A32]"
              >
                {poojas.length} sacred rituals available
              </m.p>
            )}

            <m.div
              variants={fadeUp}
              className="mt-8 flex justify-center isolate lg:mt-10 lg:justify-start"
            >
              <img
                src={kundaArt}
                alt=""
                className="h-auto w-[210px] object-contain sm:w-[240px] lg:w-[260px] xl:w-[280px]"
                style={{ mixBlendMode: "screen" }}
                loading="lazy"
                width={280}
                height={320}
              />
            </m.div>
          </m.div>

          <div>
            {error && poojas.length === 0 && (
              <div className="rounded-[14px] border border-[#F5D0B5] bg-white px-4 py-8 text-center">
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

            {!loading && !error && poojas.length === 0 && (
              <p className="rounded-[14px] border border-[#E8C9A0]/80 bg-white px-4 py-8 text-center font-home text-[14px] text-[#6B7280]">
                No poojas available at the moment.
              </p>
            )}

            <m.ul
              layout
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 md:grid-cols-4 md:gap-4"
              variants={staggerFast}
              initial="hidden"
              animate="visible"
            >
              {loading &&
                poojas.length === 0 &&
                Array.from({ length: INITIAL_VISIBLE }).map((_, index) => (
                  <RitualCardSkeleton key={`skeleton-${index}`} />
                ))}

              <AnimatePresence initial={false} mode="popLayout">
                {visiblePoojas.map((pooja) => (
                  <RitualCard key={pooja.poojaId} pooja={pooja} />
                ))}
              </AnimatePresence>
            </m.ul>

            {canToggle && (
              <m.div
                className="mt-7 flex justify-center sm:mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: easeOutExpo, delay: 0.15 }}
              >
                <m.button
                  type="button"
                  onClick={handleToggle}
                  aria-expanded={expanded}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#F27022]/35 bg-gradient-to-r from-[#FFF7F0] via-[#FFE9D4] to-[#FFF1E6] px-6 py-3 font-home text-[14px] font-semibold text-[#F27022] shadow-[0_8px_22px_rgba(242,112,34,0.16)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#F27022]/55 hover:shadow-[0_12px_28px_rgba(242,112,34,0.22)] active:translate-y-0"
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    aria-hidden
                  />
                  <span className="relative z-10">
                    {expanded
                      ? "Show Less"
                      : `Show More (${hiddenCount} more)`}
                  </span>
                  <m.span
                    className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#F27022] text-white"
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: easeOutExpo }}
                  >
                    <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.6} aria-hidden />
                  </m.span>
                </m.button>
              </m.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
