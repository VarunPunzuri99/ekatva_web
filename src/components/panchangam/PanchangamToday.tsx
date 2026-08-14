import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { homeAssets } from "@/assets/home";
import { useTodayPanchang } from "@/hooks/useTodayPanchang";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function TodayCardSkeleton() {
  return (
    <div className="rounded-2xl border-2 border-[#F5B04A]/70 bg-[rgba(72,28,12,0.72)] p-5 sm:p-7 lg:p-9">
      <div className="flex justify-between gap-3">
        <div className="space-y-2">
          <div className="h-7 w-48 animate-pulse rounded bg-white/15" />
          <div className="h-4 w-40 animate-pulse rounded bg-white/10" />
        </div>
        <div className="h-8 w-28 animate-pulse rounded-full bg-white/10" />
      </div>
      <div className="mt-6 space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-10 animate-pulse rounded bg-white/10" />
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-16 animate-pulse rounded-xl bg-white/10" />
        ))}
      </div>
    </div>
  );
}

export function PanchangamToday() {
  const sectionRef = useRef<HTMLElement>(null);
  const { data, loading, error, refetch } = useTodayPanchang();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      aria-labelledby="todays-panchangam-heading"
    >
      <m.div className="absolute inset-0" style={{ scale: bgScale }} aria-hidden="true">
        <img
          src={homeAssets.templeBackground}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5C2A12]/55 via-[#8B3A18]/45 to-[#3B1A0A]/65" />
      </m.div>

      <div className="relative mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
        {loading && !data && <TodayCardSkeleton />}

        {error && !data && (
          <div className="rounded-2xl border-2 border-[#F5B04A] bg-[rgba(72,28,12,0.72)] p-6 text-center backdrop-blur-[2px] sm:p-8">
            <h2
              id="todays-panchangam-heading"
              className="font-home text-[1.35rem] font-bold text-white"
            >
              Today&apos;s Panchangam
            </h2>
            <p className="mt-3 font-home text-[14px] text-white/85">{error}</p>
            <button
              type="button"
              onClick={refetch}
              className="mt-4 rounded-lg bg-[#F27022] px-5 py-2.5 font-home text-[13px] font-semibold text-white"
            >
              Try again
            </button>
          </div>
        )}

        {data && (
          <m.div
            className="rounded-2xl border-2 border-[#F5B04A] bg-[rgba(72,28,12,0.72)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:p-7 lg:p-9"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2
                  id="todays-panchangam-heading"
                  className="font-home text-[1.45rem] font-bold text-white sm:text-[1.7rem] lg:text-[1.9rem]"
                >
                  {data.title}
                </h2>
                <p className="mt-1 font-home text-[13px] text-white/90 sm:text-[14px]">
                  {data.dateLabel}
                </p>
              </div>
              <span className="rounded-full border border-white/70 px-3.5 py-1 font-home text-[11px] font-semibold tracking-[0.12em] text-white uppercase sm:text-[12px]">
                {data.paksha}
              </span>
            </div>

            <m.ul
              className="mt-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {data.rows.map((row) => (
                <m.li
                  key={row.label}
                  variants={fadeUp}
                  className="grid grid-cols-[1fr_1.4fr_1fr] items-center gap-2 border-t border-white/25 py-3.5 first:border-t-0 sm:gap-4 sm:py-4"
                >
                  <span className="font-home text-[12px] text-white/85 sm:text-[13px]">
                    {row.label}
                  </span>
                  <span className="text-center font-home text-[13px] font-bold text-white sm:text-[15px]">
                    {row.value}
                  </span>
                  <span className="text-right font-home text-[12px] text-white/85 sm:text-[13px]">
                    {row.time}
                  </span>
                </m.li>
              ))}
            </m.ul>

            <m.div
              className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {data.windows.map((win) => (
                <m.div
                  key={win.label}
                  variants={fadeUp}
                  whileHover={{
                    y: -3,
                    backgroundColor: "rgba(255,255,255,0.12)",
                  }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                  className="rounded-xl border border-white/25 bg-white/10 px-3 py-3.5 text-center backdrop-blur-sm sm:py-4"
                >
                  <p className="font-home text-[12px] font-semibold text-[#F5B04A] sm:text-[13px]">
                    {win.label}
                  </p>
                  <p className="mt-1.5 font-home text-[12px] text-white sm:text-[13px]">
                    {win.time}
                  </p>
                </m.div>
              ))}
            </m.div>

            <p className="mt-5 font-home text-[11px] text-white/75 italic sm:mt-6 sm:text-[12px]">
              {data.note}
            </p>
          </m.div>
        )}
      </div>
    </section>
  );
}
