import { m } from "framer-motion";
import {
  Briefcase,
  FileText,
  Leaf,
  Search,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { KUNDLI_TRUST } from "@/content/kundli";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const ICONS: Record<(typeof KUNDLI_TRUST)[number]["icon"], LucideIcon> = {
  search: Search,
  file: FileText,
  briefcase: Briefcase,
  leaf: Leaf,
  shield: Shield,
};

export function KundliTrustBar() {
  return (
    <section
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-label="Kundli trust highlights"
    >
      <m.ul
        className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:px-6 lg:grid-cols-5 lg:gap-0 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {KUNDLI_TRUST.map((item, index) => {
          const Icon = ICONS[item.icon];
          return (
            <m.li
              key={item.id}
              variants={fadeUp}
              className={cn(
                "list-none text-center lg:px-4",
                index > 0 && "lg:relative",
              )}
            >
              {index > 0 && (
                <span
                  className="pointer-events-none absolute top-[12%] bottom-[12%] left-0 hidden w-px bg-[#E5DDD2] lg:block"
                  aria-hidden="true"
                />
              )}
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#8B2E28]/55 text-[#8B2E28]">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="mt-3.5 font-home text-[14px] font-bold text-[#8B2E28] sm:text-[15px]">
                {item.title}
              </h3>
              <p className="mx-auto mt-1.5 max-w-[190px] font-home text-[12px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                {item.description}
              </p>
            </m.li>
          );
        })}
      </m.ul>
    </section>
  );
}
