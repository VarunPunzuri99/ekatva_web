import { m } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { usePoojasList } from "@/hooks/usePoojasList";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";

function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[#EDE6DC] bg-white shadow-[0_6px_20px_rgba(31,41,55,0.06)]">
      <div className="aspect-[5/4] animate-pulse bg-[#F5EDE0]" />
      <div className="space-y-2 px-3 py-4">
        <div className="mx-auto h-4 w-3/4 animate-pulse rounded bg-[#F3EDE4]" />
        <div className="mx-auto h-3 w-full animate-pulse rounded bg-[#F3EDE4]" />
      </div>
    </div>
  );
}

export function EpujaAllPoojasPage() {
  const { poojas, loading, error, refetch } = usePoojasList();

  return (
    <>
      <Helmet>
        <title>All Pujas | ePuja | Ekatva</title>
        <meta
          name="description"
          content="Browse all sacred Vedic pujas on Ekatva ePuja — authentic rituals with verified pandits."
        />
      </Helmet>
      <main className="bg-white">
        <section className="relative overflow-hidden border-b border-[#F0E6DA] bg-gradient-to-b from-[#FFF8F0] to-white">
          <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
            <m.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <m.div variants={fadeUp}>
                <Link
                  to="/epuja"
                  className="inline-flex items-center gap-1.5 font-home text-[13px] font-semibold text-[#F27022] transition-opacity hover:opacity-80"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                  Back to ePuja
                </Link>
              </m.div>
              <m.p
                variants={fadeUp}
                className="mt-5 font-home text-[12px] font-bold tracking-[0.18em] text-[#A85A32] uppercase"
              >
                ePuja Collection
              </m.p>
              <m.h1
                variants={fadeUp}
                className="mt-2 font-home-display text-[1.75rem] font-semibold text-[#8B2E28] sm:text-[2.1rem]"
              >
                All Sacred Pujas
              </m.h1>
              <m.p
                variants={fadeUp}
                className="mt-3 max-w-[42rem] font-home text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]"
              >
                Explore our complete catalogue of Vedic pujas and ceremonies.
                Select any ritual to view full details and book with a verified
                pandit.
              </m.p>
              {!loading && poojas.length > 0 && (
                <m.p
                  variants={fadeUp}
                  className="mt-3 font-home text-[13px] font-semibold text-[#F27022]"
                >
                  {poojas.length} pujas available
                </m.p>
              )}
            </m.div>
          </div>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
            {error && poojas.length === 0 && (
              <div className="rounded-[14px] border border-[#F5D0B5] bg-[#FFF8F0] px-4 py-10 text-center">
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

            <m.ul
              className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4 xl:gap-5"
              variants={staggerFast}
              initial="hidden"
              animate="visible"
            >
              {loading &&
                poojas.length === 0 &&
                Array.from({ length: 12 }).map((_, i) => (
                  <li key={`sk-${i}`} className="list-none">
                    <CardSkeleton />
                  </li>
                ))}

              {poojas.map((pooja) => (
                <m.li key={pooja.poojaId} variants={fadeUp} className="list-none h-full">
                  <m.div
                    className="h-full"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3, ease: easeOutExpo },
                    }}
                  >
                    <Link
                      to={`/epuja/pooja/${pooja.poojaId}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#EDE6DC] bg-white text-inherit no-underline shadow-[0_6px_20px_rgba(31,41,55,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_32px_rgba(128,27,27,0.1)]"
                    >
                      <div className="relative aspect-[5/4] overflow-hidden bg-[#F5EDE0]">
                        {pooja.image ? (
                          <img
                            src={pooja.image}
                            alt={pooja.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            style={{ objectPosition: "center top" }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center font-home text-[12px] text-[#9CA3AF]">
                            {pooja.category}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col px-3 py-3.5 text-center sm:px-3.5 sm:py-4">
                        <p className="font-home text-[10px] font-semibold tracking-[0.08em] text-[#C4A35A] uppercase sm:text-[11px]">
                          {pooja.category}
                        </p>
                        <h2 className="mt-1 font-home text-[13px] font-bold leading-snug text-[#5C2A1A] sm:text-[14px]">
                          {pooja.title}
                        </h2>
                        <p className="mt-1.5 line-clamp-2 flex-1 font-home text-[11px] leading-relaxed text-[#6B7280] sm:text-[12px]">
                          {pooja.shortDescription}
                        </p>
                        <span className="mt-2.5 font-home text-[12px] font-bold text-[#F27022] sm:text-[13px]">
                          Details →
                        </span>
                      </div>
                    </Link>
                  </m.div>
                </m.li>
              ))}
            </m.ul>
          </div>
        </section>
      </main>
    </>
  );
}
