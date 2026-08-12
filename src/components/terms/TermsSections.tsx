import { m } from "framer-motion";
import {
  Award,
  Ban,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileText,
  LayoutGrid,
  Mail,
  Pencil,
  RefreshCw,
  Scale,
  Shield,
  TriangleAlert,
  UserRound,
  UserX,
  Users,
  type LucideIcon,
} from "lucide-react";
import { TERMS_SECTIONS } from "@/content/terms";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const ICONS: Record<(typeof TERMS_SECTIONS)[number]["icon"], LucideIcon> = {
  check: CheckCircle2,
  user: UserRound,
  grid: LayoutGrid,
  shield: Shield,
  card: CreditCard,
  refresh: RefreshCw,
  award: Award,
  ban: Ban,
  warning: TriangleAlert,
  document: FileText,
  users: Users,
  userX: UserX,
  edit: Pencil,
  scale: Scale,
  mail: Mail,
  calendar: CalendarDays,
};

export function TermsSections() {
  return (
    <section
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-labelledby="terms-sections-heading"
    >
      <h2 id="terms-sections-heading" className="sr-only">
        Terms and conditions details
      </h2>

      <m.ol
        className="mx-auto grid max-w-[1200px] gap-x-10 gap-y-8 px-4 sm:gap-x-12 sm:gap-y-10 sm:px-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12 lg:px-8 xl:max-w-[1320px] xl:gap-x-20 xl:px-16 2xl:max-w-[1440px] 2xl:px-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {TERMS_SECTIONS.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <m.li
              key={item.id}
              variants={fadeUp}
              className="flex list-none gap-3.5 sm:gap-4"
            >
              <m.span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F27022] sm:h-12 sm:w-12"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.2, ease: easeOutExpo }}
                aria-hidden
              >
                <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
              </m.span>
              <div className="min-w-0 pt-0.5">
                <h3 className="font-home text-[15px] font-bold text-[#F27022] sm:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-home text-[13px] leading-relaxed text-[#555555] sm:text-[14px]">
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
