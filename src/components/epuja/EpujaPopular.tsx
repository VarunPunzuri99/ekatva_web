import { m, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePoojasList } from "@/hooks/usePoojasList";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const PREVIEW_COUNT = 12;

export function EpujaPopular() {
  const reduceMotion = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const { poojas, loading, error, refetch } = usePoojasList();

  const preview = useMemo(
    () => poojas.slice(0, PREVIEW_COUNT),
    [poojas],
  );

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, preview.length]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-puja-card]");
    const amount = card ? card.offsetWidth + 20 : 280;
    el.scrollBy({
      left: dir * amount,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="epuja-popular-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="relative flex flex-col items-center">
          <m.h2
            id="epuja-popular-heading"
            className="text-center font-home-display text-[1.45rem] font-semibold text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            Popular Pujas
          </m.h2>

          <m.div
            className="mt-4 sm:absolute sm:top-0 sm:right-0 sm:mt-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Link
              to="/epuja/poojas"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#F27022]/30 bg-gradient-to-r from-[#FFF7F0] via-[#FFE9D4] to-[#FFF1E6] px-4 py-2 font-home text-[13px] font-semibold text-[#F27022] shadow-[0_6px_18px_rgba(242,112,34,0.14)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#F27022]/5 hover:shadow-[0_10px_24px_rgba(242,112,34,0.2)] sm:px-5 sm:py-2.5 sm:text-[14px]"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
              <span className="relative z-10">View All</span>
              <ArrowRight
                className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-4 sm:w-4"
                strokeWidth={2.4}
                aria-hidden
              />
            </Link>
          </m.div>
        </div>

        <div className="relative mt-8 sm:mt-10">
          {error && preview.length === 0 && (
            <div className="rounded-[14px] border border-[#F5D0B5] bg-[#FFF8F0] px-4 py-8 text-center">
              <p className="font-home text-[14px] text-[#6B7280]">{error}</p>
              <button
                type="button"
                onClick={refetch}
                className="mt-3 font-home text-[13px] font-semibold text-[#F27022]"
              >
                Try again
              </button>
            </div>
          )}

          {loading && preview.length === 0 && (
            <div className="flex gap-5 overflow-hidden">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[min(78vw,240px)] shrink-0 overflow-hidden rounded-[14px] border border-[#EDE6DC] sm:w-[250px]"
                >
                  <div className="h-[150px] animate-pulse bg-[#F5EDE0] sm:h-[158px]" />
                  <div className="space-y-2 p-4">
                    <div className="mx-auto h-4 w-2/3 animate-pulse rounded bg-[#F3EDE4]" />
                    <div className="mx-auto h-3 w-full animate-pulse rounded bg-[#F3EDE4]" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {preview.length > 0 && (
            <>
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="absolute top-[42%] left-0 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#EDE6DC] bg-white text-[#8B2E28] shadow-[0_6px_18px_rgba(31,41,55,0.12)] transition enabled:hover:scale-105 disabled:cursor-default disabled:opacity-35 lg:flex"
                aria-label="Previous pujas"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="absolute top-[42%] right-0 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#EDE6DC] bg-white text-[#8B2E28] shadow-[0_6px_18px_rgba(31,41,55,0.12)] transition enabled:hover:scale-105 disabled:cursor-default disabled:opacity-35 lg:flex"
                aria-label="Next pujas"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>

              <m.div
                ref={trackRef}
                className="flex gap-5 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {preview.map((item) => (
                  <m.article
                    key={item.poojaId}
                    data-puja-card
                    variants={fadeUp}
                    className="group flex w-[min(78vw,240px)] shrink-0 flex-col overflow-hidden rounded-[14px] border border-[#EDE6DC] bg-white shadow-[0_6px_20px_rgba(31,41,55,0.06)] transition-[box-shadow] duration-300 hover:shadow-[0_14px_32px_rgba(128,27,27,0.1)] sm:w-[250px]"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                            transition: { duration: 0.28, ease: easeOutExpo },
                          }
                    }
                  >
                    <Link
                      to={`/epuja/pooja/${item.poojaId}`}
                      className="flex h-full flex-col text-inherit no-underline"
                      aria-label={`View details for ${item.title}`}
                    >
                      <div className="relative h-[150px] w-full overflow-hidden bg-[#F5EDE0] sm:h-[158px]">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                            style={{ objectPosition: "center top" }}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center font-home text-[12px] text-[#9CA3AF]">
                            {item.category}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col px-4 py-4 text-center">
                        <h3 className="font-home text-[15px] font-bold text-[#F27022] sm:text-[16px]">
                          {item.title}
                        </h3>
                        <p className="mt-2 flex-1 font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                          {item.shortDescription || item.category}
                        </p>
                        <span className="mt-3.5 inline-flex items-center justify-center gap-1 font-home text-[13px] font-bold text-[#8B2E28] transition-colors group-hover:text-[#F27022]">
                          Details
                          <span aria-hidden>→</span>
                        </span>
                      </div>
                    </Link>
                  </m.article>
                ))}
              </m.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
