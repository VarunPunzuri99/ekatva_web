import { m } from "framer-motion";
import {
  FileText,
  Lock,
  Pencil,
  Share2,
  Shield,
  UserCog,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { PRIVACY_SECTIONS } from "@/content/privacy";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof PRIVACY_SECTIONS)[number]["icon"], LucideIcon> = {
  user: UserRound,
  document: FileText,
  share: Share2,
  lock: Lock,
  shield: Shield,
  control: UserCog,
  edit: Pencil,
};

export function PrivacySections() {
  return (
    <section
      className="bg-white py-12 sm:py-14 lg:py-16"
      aria-labelledby="privacy-sections-heading"
    >
      <h2 id="privacy-sections-heading" className="sr-only">
        Privacy policy details
      </h2>

      <m.ol
        className="mx-auto max-w-[860px] space-y-8 px-4 sm:space-y-10 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {PRIVACY_SECTIONS.map((item, index) => {
          const Icon = ICONS[item.icon];
          return (
            <m.li
              key={item.id}
              variants={fadeUp}
              className="flex gap-4 sm:gap-5"
            >
              <m.span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F27022] sm:h-14 sm:w-14"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.2, ease: easeOutExpo }}
                aria-hidden
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </m.span>
              <div className="min-w-0 pt-1">
                <h3 className="font-home text-[15px] font-bold text-[#8B2E28] sm:text-[16px] lg:text-[17px]">
                  <span className="sr-only">{index + 1}. </span>
                  {item.title}
                </h3>
                <p className="mt-2 font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </m.li>
          );
        })}
      </m.ol>
    </section>
  );
}
