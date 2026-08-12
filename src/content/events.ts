import vinayaka from "@/assets/images/events/vinayaka.png";
import lordVishnu from "@/assets/images/events/lordVishnu.jpg";
import sitaRam from "@/assets/images/events/sitaRam.jpg";
import krishnaArjuna from "@/assets/images/events/krishnaArjuna.jpg";

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

export const EVENTS_LIST = [
  {
    id: "vinayaka-chavithi",
    category: "Festival",
    title: "Vinayaka Chavithi",
    location: "Ekatva Temples & Online",
    dateLabel: "7 Sep 2024 (Saturday)",
    timeLabel: "6:00 AM Onwards",
    day: "07",
    month: "Sep",
    weekday: "Sat",
    image: vinayaka,
    imagePosition: "50% 18%",
    sortDate: "2024-09-07",
  },
  {
    id: "satyanarayana-puja",
    category: "Puja",
    title: "Satyanarayana Puja",
    location: "Online",
    dateLabel: "11 Sep 2024 (Saturday)",
    timeLabel: "6:00 AM Onwards",
    day: "11",
    month: "Sep",
    weekday: "Sat",
    image: lordVishnu,
    imagePosition: "50% 14%",
    sortDate: "2024-09-11",
  },
  {
    id: "sharannavaratri",
    category: "Homam",
    title: "Sharannavaratri",
    location: "Ekatva Temples & Online",
    dateLabel: "15 Sep 2024 (Sunday)",
    timeLabel: "6:00 AM Onwards",
    day: "15",
    month: "Sep",
    weekday: "Sun",
    image: sitaRam,
    imagePosition: "50% 52%",
    sortDate: "2024-09-15",
  },
  {
    id: "bhagavad-gita-discourse",
    category: "Talk",
    title: "Bhagavad Gita Discourse",
    location: "Online",
    dateLabel: "20 Sep 2024 (Friday)",
    timeLabel: "6:00 AM Onwards",
    day: "20",
    month: "Sep",
    weekday: "Fri",
    image: krishnaArjuna,
    imagePosition: "50% 38%",
    sortDate: "2024-09-20",
  },
  {
    id: "vinayaka-chavithi-2",
    category: "Festival",
    title: "Vinayaka Chavithi",
    location: "Ekatva Temples & Online",
    dateLabel: "7 Sep 2024 (Saturday)",
    timeLabel: "6:00 AM Onwards",
    day: "07",
    month: "Sep",
    weekday: "Sat",
    image: vinayaka,
    imagePosition: "50% 18%",
    sortDate: "2024-09-07",
  },
  {
    id: "satyanarayana-puja-2",
    category: "Puja",
    title: "Satyanarayana Puja",
    location: "Online",
    dateLabel: "11 Sep 2024 (Saturday)",
    timeLabel: "6:00 AM Onwards",
    day: "11",
    month: "Sep",
    weekday: "Sat",
    image: lordVishnu,
    imagePosition: "50% 14%",
    sortDate: "2024-09-11",
  },
  {
    id: "sharannavaratri-2",
    category: "Homam",
    title: "Sharannavaratri",
    location: "Ekatva Temples & Online",
    dateLabel: "15 Sep 2024 (Sunday)",
    timeLabel: "6:00 AM Onwards",
    day: "15",
    month: "Sep",
    weekday: "Sun",
    image: sitaRam,
    imagePosition: "50% 52%",
    sortDate: "2024-09-15",
  },
  {
    id: "bhagavad-gita-discourse-2",
    category: "Talk",
    title: "Bhagavad Gita Discourse",
    location: "Online",
    dateLabel: "20 Sep 2024 (Friday)",
    timeLabel: "6:00 AM Onwards",
    day: "20",
    month: "Sep",
    weekday: "Fri",
    image: krishnaArjuna,
    imagePosition: "50% 38%",
    sortDate: "2024-09-20",
  },
] as const;

export type EventItem = (typeof EVENTS_LIST)[number];
