import { Link } from "react-router-dom";
import { m, useReducedMotion } from "framer-motion";
import { FEATURES_SECTION, FEATURES_SERVICES } from "@/content/features";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ACCENT = "#E28C44";
const SOFT = "#F0DCC8";

export function FeaturesGrid() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="bg-white pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20"
      style={{ backgroundColor: "#FFFFFF" }}
      aria-labelledby="features-grid-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="mx-auto max-w-2xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.h2
            id="features-grid-heading"
            variants={fadeUp}
            className="font-home-display text-[1.45rem] font-semibold text-[#8B2E28] sm:text-[1.7rem] lg:text-[1.85rem]"
          >
            {FEATURES_SECTION.title}
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-2.5 font-home text-[14px] leading-relaxed text-[#6B7280] sm:text-[15px]"
          >
            {FEATURES_SECTION.subtitle}
          </m.p>
        </m.div>

        <m.ul
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FEATURES_SERVICES.map((service, index) => {
            const thickBottom = index % 2 === 0;
            const borderStyle = {
              borderLeft: `1px solid ${SOFT}`,
              borderRight: `1px solid ${SOFT}`,
              borderTop: thickBottom
                ? `1px solid ${SOFT}`
                : `5px solid ${ACCENT}`,
              borderBottom: thickBottom
                ? `5px solid ${ACCENT}`
                : `1px solid ${SOFT}`,
            } as const;

            const isRoute = service.href.startsWith("/") && !service.href.startsWith("/#");

            const body = (
              <>
                <m.div
                  className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full p-[3px] sm:h-[84px] sm:w-[84px]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, #FFE8B8 0%, #FFB84D 48%, #E28C44 100%)",
                    boxShadow: "0 4px 14px rgba(226, 140, 68, 0.28)",
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: [0, -6, 6, 0],
                          transition: { duration: 0.55, ease: easeOutExpo },
                        }
                  }
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#FFF9F3] p-2.5">
                    <img
                      src={service.icon}
                      alt=""
                      className="icon-deepen h-full w-full object-contain"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                </m.div>

                <h3 className="mt-4 font-home text-[15px] font-bold text-[#8B2E28] sm:text-[16px]">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                  {service.description}
                </p>
                <span className="read-more-underline mt-4 inline-block font-home text-[13px] font-bold text-[#F27022] transition-colors group-hover:text-[#E05F10]">
                  Read More..
                </span>
              </>
            );

            const cardClassName =
              "group flex h-full flex-col rounded-[14px] bg-[#FFF9F3] px-4 py-6 text-center shadow-[0_2px_12px_rgba(31,41,55,0.04)] transition-[box-shadow,background-color] duration-300 hover:bg-[#FFF4E8] hover:shadow-[0_16px_36px_rgba(242,112,34,0.14)] sm:px-5 sm:py-7";

            return (
              <m.li key={service.id} variants={fadeUp} className="list-none h-full">
                <m.div
                  className="h-full"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                          scale: 1.02,
                          transition: { duration: 0.3, ease: easeOutExpo },
                        }
                  }
                >
                  {isRoute ? (
                    <Link
                      to={service.href}
                      className={cardClassName}
                      style={borderStyle}
                      aria-label={`${service.title}: Read more`}
                    >
                      {body}
                    </Link>
                  ) : (
                    <a
                      href={service.href}
                      className={cardClassName}
                      style={borderStyle}
                      aria-label={`${service.title}: Read more`}
                    >
                      {body}
                    </a>
                  )}
                </m.div>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
}
