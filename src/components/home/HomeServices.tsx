import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "@/content/services";
import { fadeUp, staggerFast, viewportOnce } from "@/lib/animations";

const ACCENT = "#E28C44";
const SOFT = "#F0DCC8";

export function HomeServices() {
  return (
    <section
      id="services"
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-label="Services"
    >
      <m.div
        className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-6 md:grid-cols-3 lg:grid-cols-7 lg:gap-4 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {SERVICES.map((service, index) => {
          const thickBottom = index % 2 === 0;
          const href = "href" in service ? service.href : undefined;

          return (
            <m.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-lg bg-[#FFF9F3] px-3 py-5 text-center shadow-[0_0_0_transparent] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(226,140,68,0.16)] sm:px-3.5 sm:py-6"
              style={{
                borderLeft: `1px solid ${SOFT}`,
                borderRight: `1px solid ${SOFT}`,
                borderTop: thickBottom
                  ? `1px solid ${SOFT}`
                  : `5px solid ${ACCENT}`,
                borderBottom: thickBottom
                  ? `5px solid ${ACCENT}`
                  : `1px solid ${SOFT}`,
              }}
            >
              <div
                className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full p-[3px] sm:h-[76px] sm:w-[76px]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, #FFE8B8 0%, #FFB84D 48%, #E28C44 100%)",
                  boxShadow: "0 2px 5px rgba(226, 140, 68, 0.28)",
                }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FFF9F3] p-2">
                  <img
                    src={service.icon}
                    alt=""
                    className="icon-deepen h-full w-full object-contain"
                    loading="lazy"
                    width={64}
                    height={64}
                  />
                </div>
              </div>

              <h3 className="mt-3.5 font-home text-[11px] font-bold tracking-[0.05em] text-[#8B0000] uppercase sm:text-[12px]">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 font-home text-[11px] leading-[1.45] text-[#555555] sm:text-[12px]">
                {service.description}
              </p>
              {href ? (
                <Link
                  to={href}
                  className="read-more-underline mt-3.5 font-home text-[12px] font-bold text-[#A0522D] transition-colors hover:text-[#8B4513]"
                >
                  Read More..
                </Link>
              ) : (
                <span className="mt-3.5 font-home text-[12px] font-bold text-[#A0522D]">
                  Read More..
                </span>
              )}
            </m.article>
          );
        })}
      </m.div>
    </section>
  );
}
