import { m } from "framer-motion";
import { Clock3, Users, UsersRound, type LucideIcon } from "lucide-react";
import { CountUp } from "@/components/home/CountUp";
import { HOME_STATS } from "@/content/home";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const ICONS: Record<(typeof HOME_STATS)[number]["icon"], LucideIcon> = {
  devotees: UsersRound,
  experts: Users,
  support: Clock3,
};

function StatValue({ value }: { value: string }) {
  const match = /^(\d+)(\+?)$/.exec(value);
  if (!match) {
    return <>{value}</>;
  }
  return <CountUp to={Number(match[1])} suffix={match[2]} />;
}

export function HomeWhyChoose() {
  return (
    <section
      className="bg-home-cream-alt py-10 sm:py-12 lg:py-14"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.h2
          id="why-choose-heading"
          className="shrink-0 font-home text-2xl font-bold text-home-text sm:text-[1.75rem] lg:w-[220px] lg:text-[2rem] lg:leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Why Choose
          <br className="hidden lg:block" /> Ekatva?
        </m.h2>

        <m.div
          className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {HOME_STATS.map((stat) => {
            const Icon = ICONS[stat.icon];
            return (
              <m.article
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-black/5 bg-white px-5 py-6 text-center shadow-[0_4px_18px_rgba(31,41,55,0.06)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(31,41,55,0.1)]"
              >
                <Icon
                  className="mx-auto h-8 w-8 text-home-orange"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <p className="mt-3 font-home text-2xl font-bold text-home-orange sm:text-[1.65rem]">
                  <StatValue value={stat.value} />
                </p>
                <p className="mt-1 font-home text-sm font-medium text-home-text">
                  {stat.label}
                </p>
              </m.article>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
