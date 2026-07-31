import { m } from "framer-motion";
import { Star } from "lucide-react";
import { homeAssets } from "@/assets/home";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/common/SocialIcons";
import { HOME_TESTIMONIALS } from "@/content/home";
import { SOCIAL_LINKS } from "@/lib/constants";
import {
  fadeLeft,
  fadeUp,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/lib/animations";

const SOCIAL_ITEMS = [
  {
    href: SOCIAL_LINKS.twitter,
    label: "X (Twitter)",
    Icon: TwitterIcon,
    color: "#000000",
  },
  {
    href: SOCIAL_LINKS.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
    color: "#1877F2",
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    Icon: LinkedInIcon,
    color: "#0A66C2",
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
    color: "#E4405F",
  },
] as const;

export function HomeSocialTestimonials() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 lg:py-14"
      aria-labelledby="social-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={homeAssets.bgSocial}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[78%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(242,140,40,0.28) 0%, rgba(245,162,58,0.12) 42%, rgba(232,120,40,0.05) 68%, rgba(180,60,20,0.08) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-4 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.article
          className="flex w-full flex-col justify-between rounded-xl bg-[#FFFBF5] p-6 shadow-[0_8px_28px_rgba(64,8,10,0.14)] sm:p-7 lg:max-w-[280px] lg:shrink-0"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div>
            <h2
              id="social-heading"
              className="leading-tight font-semibold text-[#F27022] sm:text-[1.85rem]"
              style={{
                fontFamily: "var(--font-home-display), Cinzel, serif",
                fontSize: "clamp(1.55rem, 2.2vw, 1.9rem)",
              }}
            >
              Ekatva on Social
            </h2>
            <p className="mt-3 font-home text-sm font-bold text-[#1A1A1A]">
              Join us on
            </p>
            <p className="mt-1 font-home text-sm font-semibold text-[#1A1A1A]">
              Stay connected for latest updates
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            {SOCIAL_ITEMS.map(({ href, label, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 hover:scale-110"
                style={{ color }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </m.article>

        <m.div
          className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {HOME_TESTIMONIALS.map((item) => (
            <m.article
              key={item.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-xl bg-[#FFFBF5] p-4 shadow-[0_8px_28px_rgba(64,8,10,0.12)] transition-shadow duration-300 hover:shadow-[0_14px_32px_rgba(64,8,10,0.16)]"
            >
              <m.div
                className="flex gap-0.5 text-[#F5B942]"
                aria-label="5 star rating"
                variants={staggerFast}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <m.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  </m.span>
                ))}
              </m.div>
              <p className="mt-3 flex-1 font-home text-[12px] leading-relaxed text-[#444444]">
                {item.quote}
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <m.span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#F27022] to-[#9A3412] font-home text-[11px] font-semibold text-white"
                  aria-hidden="true"
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.name.charAt(0)}
                </m.span>
                <div>
                  <p className="font-home text-[12px] font-semibold text-[#1A1A1A]">
                    -{item.name}
                  </p>
                  <p className="font-home text-[11px] text-[#6B7280]">
                    {item.place}
                  </p>
                </div>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
