import { m, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EPUJA_POPULAR } from "@/content/epuja";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function EpujaPopular() {
  const reduceMotion = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

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
  }, [updateArrows]);

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
        <m.h2
          id="epuja-popular-heading"
          className="text-center font-home-display text-[1.45rem] font-semibold text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EPUJA_POPULAR.title}
        </m.h2>

        <div className="relative mt-8 sm:mt-10">
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
            whileInView="visible"
            viewport={viewportOnce}
          >
            {EPUJA_POPULAR.items.map((item) => {
              const href = "href" in item ? item.href : undefined;
              const details = (
                <span className="mt-3.5 inline-flex items-center justify-center gap-1 font-home text-[13px] font-bold text-[#8B2E28] transition-colors group-hover/details:text-[#F27022]">
                  Details
                  <span aria-hidden>→</span>
                </span>
              );

              return (
              <m.article
                key={item.id}
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
                <div className="relative h-[150px] w-full overflow-hidden bg-[#F5EDE0] sm:h-[158px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    style={{ objectPosition: item.imagePosition }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 py-4 text-center">
                  <h3 className="font-home text-[15px] font-bold text-[#F27022] sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                    {item.description}
                  </p>
                  {href ? (
                    <Link
                      to={href}
                      className="group/details mt-auto inline-flex justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F27022]"
                      aria-label={`View details for ${item.title}`}
                    >
                      {details}
                    </Link>
                  ) : (
                    <button type="button" className="group/details mt-auto">
                      {details}
                    </button>
                  )}
                </div>
              </m.article>
              );
            })}
          </m.div>
        </div>
      </div>
    </section>
  );
}
