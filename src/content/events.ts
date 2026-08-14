/** Events page copy aligned to UX mock screens. */

export const EVENTS_HERO = {
  eyebrow: "Ekatva Events",
  title: "Upcoming Events",
  subtitle:
    "Stay connected with divine celebrations, rituals, discourses and spiritual talks happening around you and online.",
} as const;

export type EventSort = "upcoming" | "latest";

export const EVENT_SORT_OPTIONS = [
  { value: "upcoming" as const, label: "Upcoming" },
  { value: "latest" as const, label: "Latest" },
] as const;
