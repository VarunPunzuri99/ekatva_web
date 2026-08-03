import type { JSX } from "react";
import type { RitualItem } from "@/content/bookPanditRituals";

type IconProps = { className?: string };

function MandalaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3.5c1.2 2.2 1.2 4.3 0 6.5-1.2-2.2-1.2-4.3 0-6.5ZM12 14c1.2 2.2 1.2 4.3 0 6.5-1.2-2.2-1.2-4.3 0-6.5ZM3.5 12c2.2-1.2 4.3-1.2 6.5 0-2.2 1.2-4.3 1.2-6.5 0ZM14 12c2.2-1.2 4.3-1.2 6.5 0-2.2 1.2-4.3 1.2-6.5 0Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M6.2 6.2c2 1.1 3.5 2.6 4.6 4.6-2-1.1-3.5-2.6-4.6-4.6ZM13.2 13.2c2 1.1 3.5 2.6 4.6 4.6-2-1.1-3.5-2.6-4.6-4.6ZM17.8 6.2c-2 1.1-3.5 2.6-4.6 4.6 2-1.1 3.5-2.6 4.6-4.6ZM10.8 13.2c-2 1.1-3.5 2.6-4.6 4.6 2-1.1 3.5-2.6 4.6-4.6Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlameIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3.5c1.8 2.4 4.8 4.2 4.8 8.2a4.8 4.8 0 0 1-9.6 0c0-2.4 1.4-4 2.6-5.3.4 1.6 1.3 2.5 2.2 2.9-.2-2.2.3-4.2 0-5.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.2c.9.4 1.7 1.2 1.7 2.4a1.7 1.7 0 0 1-3.4 0c0-.7.4-1.3.9-1.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3.5 13.8 10.2 20.5 12 13.8 13.8 12 20.5 10.2 13.8 3.5 12 10.2 10.2 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4.5 11.2 12 4.8l7.5 6.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10.5V19h11v-8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function GridIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {[5, 12, 19].flatMap((y) =>
        [5, 12, 19].map((x) => (
          <rect
            key={`${x}-${y}`}
            x={x - 1.6}
            y={y - 1.6}
            width="3.2"
            height="3.2"
            rx="0.6"
            fill="currentColor"
          />
        )),
      )}
    </svg>
  );
}

function DropletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 4.2c2.8 3.4 5.5 6.4 5.5 9.3a5.5 5.5 0 0 1-11 0c0-2.9 2.7-5.9 5.5-9.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="3.2" ry="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.8 12h14.4M5.8 8.2h12.4M5.8 15.8h12.4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 19.2s-6.8-4.2-6.8-9A3.7 3.7 0 0 1 12 7.4a3.7 3.7 0 0 1 6.8 2.8c0 4.8-6.8 9-6.8 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BowlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 11h14c0 4.2-3.1 7-7 7s-7-2.8-7-7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4.2 11h15.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M9.5 7.5c.7-1.1 1.6-1.7 2.5-1.7s1.8.6 2.5 1.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 6.2c-1.8-1.2-4.2-1.5-6.3-.8v12c2.1-.7 4.5-.4 6.3.8 1.8-1.2 4.2-1.5 6.3-.8v-12c-2.1-.7-4.5-.4-6.3.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 6.2v12" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PersonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 19.2c.8-3.4 3.2-5.2 6.5-5.2s5.7 1.8 6.5 5.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GiftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="5" y="10" width="14" height="9.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 10h15v2.4H4.5z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 10v9.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 10c-1.8-2.4-4.2-2.6-5-.8-.5 1.2.6 2.4 5 2.8 4.4-.4 5.5-1.6 5-2.8-.8-1.8-3.2-1.6-5 .8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 12 + Math.cos(rad) * 5.4;
        const y1 = 12 + Math.sin(rad) * 5.4;
        const x2 = 12 + Math.cos(rad) * 8.2;
        const y2 = 12 + Math.sin(rad) * 8.2;
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function MedalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M9 4.5h6l-.8 3.2H9.8L9 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 7.7h4.4v8.3l-2.2-1.5-2.2 1.5V7.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11.2" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

const ICON_MAP: Record<RitualItem["icon"], (props: IconProps) => JSX.Element> = {
  mandala: MandalaIcon,
  flame: FlameIcon,
  sparkle: SparkleIcon,
  home: HomeIcon,
  grid: GridIcon,
  droplet: DropletIcon,
  globe: GlobeIcon,
  heart: HeartIcon,
  bowl: BowlIcon,
  book: BookIcon,
  person: PersonIcon,
  gift: GiftIcon,
  sun: SunIcon,
  medal: MedalIcon,
};

export function RitualGlyph({
  icon,
  className = "h-5 w-5",
}: {
  icon: RitualItem["icon"];
  className?: string;
}) {
  const Icon = ICON_MAP[icon];
  return <Icon className={className} />;
}
