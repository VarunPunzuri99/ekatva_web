export const PANCHANGAM_INTRO =
  "The ancient Vedic system of time calculation designed to align your daily routines, career ventures, and family rituals with cosmic rhythms for harmony, success, and spiritual prosperity.";

export const PANCHANGAM_WISDOM = {
  eyebrow: "Ancient Vedic Wisdom",
  title: "What is a Panchangam?",
  paragraphs: [
    'A Panchangam (Sanskrit: "Panch-Angam" or Five Limbs) is the traditional Hindu calendar and almanac that tracks the complex astronomical relation between the Sun and Moon.',
    "It calculates the five critical elements of time — Tithi (lunar day), Vara (weekday), Nakshatra (star constellation), Yoga (union), and Karana (half lunar day) — to determine the most auspicious moments for any given activity.",
  ],
  cta: "Explore Panchangam Guide",
} as const;

export const PANCHANGAM_MERITS = {
  eyebrow: "The Merits of Usage",
  title: "Merits of Daily Alignment",
  items: [
    {
      title: "Avoid Obstacles:",
      text: "Sidestep unfavorable planetary influences like Rahu Kalam and Gulika Kalam that traditionally hinder progress.",
    },
    {
      title: "Enhance Ritual Efficacy:",
      text: "Perform prayers, housewarmings, and ceremonies at the exact scripture-prescribed muhurtas for maximum spiritual benefit.",
    },
    {
      title: "Spiritual Growth:",
      text: "Develop a profound mindfulness of the cosmic transition energies that govern human life and destiny.",
    },
  ],
} as const;

export const PANCHANGAM_HIGHLIGHTS = [
  {
    id: "authentic",
    icon: "sparkles" as const,
    title: "Authentic & Accurate",
    description:
      "Calculated strictly using traditional Vedic astronomical standards verified by learned scholars.",
  },
  {
    id: "location",
    icon: "mapPin" as const,
    title: "Personalized Locations",
    description:
      "Instantly shifts algorithms based on your current latitude and longitude for flawless accuracy.",
  },
  {
    id: "notifications",
    icon: "bell" as const,
    title: "Auspicious Notifications",
    description:
      "Receive gentle notifications minutes before critical Muhurta intervals begin, directly on your phone.",
  },
  {
    id: "choghadiya",
    icon: "clock" as const,
    title: "Real-time Choghadiya",
    description:
      "Tracks day and night division energies to suggest instant micro-timings for travelers and traders.",
  },
  {
    id: "multilingual",
    icon: "globe" as const,
    title: "Multilingual Support",
    description:
      "Explore astronomical charts and daily results in Sanskrit, Hindi, Tamil, Telugu, and English.",
  },
  {
    id: "festivals",
    icon: "calendar" as const,
    title: "Complete Festival Archive",
    description:
      "Never miss sacred fasting days, eclipse indicators, major solar transits, or lunar holidays.",
  },
] as const;

export const PANCHANGAM_TODAY = {
  title: "Today's Panchangam",
  date: "21 May 2025, Wednesday",
  paksha: "Shukla Paksha",
  rows: [
    { label: "Tithi", value: "Shashthi", time: "Till 10:32 PM" },
    { label: "Vara", value: "Wednesday (Saumya)", time: "All Day" },
    { label: "Nakshatra", value: "Rohini", time: "Till 08:45 PM" },
    { label: "Yoga", value: "Siddha", time: "Till 07:12 PM" },
    { label: "Karana", value: "Vanija", time: "Till 10:32 AM" },
  ],
  windows: [
    { label: "Rahu Kalam", time: "12:00 PM – 01:30 PM" },
    { label: "Yamagandam", time: "07:30 AM – 09:00 AM" },
    { label: "Abhijit Muhurta", time: "11:45 AM – 12:36 PM" },
  ],
  varjyam: ["10:58 AM – 12:39 PM", "05:29 AM – 07:10 AM"],
  maasam: "Shravana",
  note: "*All calculations shifted automatically based on your local coordinates.",
} as const;

export const PANCHANGAM_GUIDE = {
  eyebrow: "Practical Guide",
  title: "When to Check Panchangam?",
  intro:
    "Integrating ancient timings into modern lives is simple. Before starting any venture, review the Almanac for three vital parameters:",
  items: [
    {
      num: "01",
      title: "Auspicious Commencements:",
      text: "Starting a business, signing agreements, or holding housewarmings.",
    },
    {
      num: "02",
      title: "Daily Travel Decisions:",
      text: "Cross-check Choghadiya to guarantee safe journeys.",
    },
    {
      num: "03",
      title: "Spiritual Fasting Days:",
      text: "Identify exact solar/lunar transitions to schedule dietary fasts.",
    },
  ],
  quote:
    "Time aligned with Dharma brings harmony. Effort brings success and grace brings fulfillment.",
  attribution: "— Sacred Vedic Proverb",
} as const;
