import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { LAUNCH_DATE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeBlockProps {
  value: number;
  label: string;
}

function TimeBlock({ value, label }: TimeBlockProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex min-w-[72px] flex-col items-center gap-2 rounded-2xl glass-card px-4 py-5 shadow-lg shadow-primary/5 sm:min-w-[100px] sm:px-6 sm:py-7"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl border border-primary/30" />
        <div className="absolute -inset-px rounded-2xl bg-primary/5 blur-sm" />
      </div>
      <span className="font-heading text-3xl font-semibold text-primary sm:text-5xl tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-caption text-primary/80">{label}</span>
    </motion.div>
  );
}

function CountdownComplete() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 text-center"
    >
      <h3 className="font-heading text-3xl text-dark sm:text-4xl">
        We Have Arrived
      </h3>
      <p className="text-body-large text-text-muted">
        Experience Ekatva Today
      </p>
      <Button size="lg" asChild>
        <a href="#subscribe">Get Started</a>
      </Button>
    </motion.div>
  );
}

interface CountdownSectionProps {
  embedded?: boolean;
}

export function CountdownSection({ embedded = false }: CountdownSectionProps) {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) return <CountdownComplete />;

    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex items-center justify-center gap-2 sm:gap-4"
        role="timer"
        aria-label="Countdown to Ekatva launch"
      >
        <TimeBlock value={days} label="Days" />
        <Separator />
        <TimeBlock value={hours} label="Hours" />
        <Separator />
        <TimeBlock value={minutes} label="Mins" />
        <Separator />
        <TimeBlock value={seconds} label="Seconds" />
      </motion.div>
    );
  };

  const content = (
    <Countdown date={LAUNCH_DATE} renderer={renderer} />
  );

  if (embedded) return content;

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-heading"
      className="relative px-4 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-caption mb-3 text-primary">Launch Countdown</p>
          <h2 id="countdown-heading" className="text-section-title text-dark">
            Mark Your Calendar
          </h2>
        </motion.div>
        {content}
      </div>
    </section>
  );
}

function Separator() {
  return (
    <span
      className={cn(
        "hidden h-10 w-px bg-primary/30 sm:block",
      )}
      aria-hidden="true"
    />
  );
}
