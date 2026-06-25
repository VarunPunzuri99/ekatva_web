import Countdown from "react-countdown";
import { LAUNCH_DATE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  className?: string;
}

function CountdownComplete() {
  return (
    <div className="text-center">
      <p className="font-heading text-2xl text-dark md:text-3xl">We Have Arrived</p>
      <p className="mt-2 font-body text-base text-text-muted">
        Experience Ekatva Today
      </p>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center px-5 sm:px-7 md:px-9">
      <span className="font-heading text-4xl font-normal text-dark tabular-nums sm:text-5xl md:text-6xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 font-ui text-[0.65rem] font-medium tracking-[0.25em] text-primary uppercase md:text-xs">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      className="mt-1 h-10 w-px self-start bg-primary/40 md:h-12"
      aria-hidden="true"
    />
  );
}

export function CountdownTimer({ className }: CountdownTimerProps) {
  return (
    <div className={cn("flex justify-center py-6 md:py-8", className)}>
      <Countdown
        date={LAUNCH_DATE}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) return <CountdownComplete />;

          return (
            <div
              className="flex items-center"
              role="timer"
              aria-label="Countdown to Ekatva launch"
            >
              <TimeUnit value={days} label="Days" />
              <Separator />
              <TimeUnit value={hours} label="Hours" />
              <Separator />
              <TimeUnit value={minutes} label="Mins" />
              <Separator />
              <TimeUnit value={seconds} label="Seconds" />
            </div>
          );
        }}
      />
    </div>
  );
}
