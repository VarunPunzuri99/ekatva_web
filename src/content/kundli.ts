/** Kundli page copy aligned to UX mock screens. */

export const KUNDLI_HERO = {
  eyebrow: "Kundli",
  title: "Your Personal Kundli",
  subtitle: "Your daily guide to divine timings.",
} as const;

export const KUNDLI_INTRO =
  "Decode your destiny written in the stars. Generate your accurate Vedic Kundli based on your exact birth details and gain deep insights into your life path, challenges, and inner strengths.";

export const KUNDLI_METHODOLOGY = {
  eyebrow: "The Methodology",
  title: "How to Generate Your Kundli",
  subtitle:
    "A precise 4-step path based on ancient astronomical principles translated through modern calculation engines.",
  steps: [
    {
      id: "enter",
      step: "STEP 01",
      icon: "pen" as const,
      title: "Enter Details",
      description:
        "Share your exact birth date, time, and place so every planetary position is calculated with precision.",
    },
    {
      id: "generate",
      step: "STEP 02",
      icon: "chart" as const,
      title: "Generate Chart",
      description:
        "Our Vedic engine maps grahas across houses using authentic astronomical calculation standards.",
    },
    {
      id: "analyze",
      step: "STEP 03",
      icon: "search" as const,
      title: "Analyze Results",
      description:
        "Explore lagna, nakshatra, yogas, dashas, and key strengths that shape your life path.",
    },
    {
      id: "insights",
      step: "STEP 04",
      icon: "file" as const,
      title: "Get Insights",
      description:
        "Receive clear guidance, predictions, and personalized remedies you can act on with confidence.",
    },
  ],
} as const;

export const KUNDLI_SHOWCASE = {
  title: "Know Your Destiny. Shape Your Future.",
  subtitle:
    "Unlock personalized insights and move ahead with confidence and clarity.",
} as const;

export const KUNDLI_TRUST = [
  {
    id: "accurate",
    icon: "search" as const,
    title: "Accurate & Authentic",
    description: "Calculated using traditional Vedic methods by experts.",
  },
  {
    id: "report",
    icon: "file" as const,
    title: "Detailed Report",
    description: "Get a comprehensive Kundli with deep astrological insights.",
  },
  {
    id: "simple",
    icon: "briefcase" as const,
    title: "Easy to Understand",
    description: "Insights presented in simple and easy-to-read format.",
  },
  {
    id: "remedies",
    icon: "leaf" as const,
    title: "Remedies & Guidance",
    description: "Personalized remedies to overcome challenges.",
  },
  {
    id: "privacy",
    icon: "shield" as const,
    title: "Privacy & Security",
    description: "Your data is safe, secure and confidential.",
  },
] as const;

export const KUNDLI_REPORT = {
  title: "What You Get in Your Kundli Report",
  items: [
    {
      id: "basic",
      icon: "badge" as const,
      title: "Basic Details",
      description:
        "Birth details, lagna, nakshatra and planetary strengths at a glance.",
    },
    {
      id: "charts",
      icon: "grid" as const,
      title: "Charts",
      description: "Lagna, Navamsa, Moon and other key charts.",
    },
    {
      id: "kp",
      icon: "shield" as const,
      title: "KP Analysis",
      description: "KP Astrology insights for deeper accuracy.",
    },
    {
      id: "life",
      icon: "user" as const,
      title: "Life Aspects",
      description: "Detailed analysis of life's important areas.",
    },
    {
      id: "dasha",
      icon: "planet" as const,
      title: "Dasha & Transit",
      description: "Current & upcoming planetary periods.",
    },
    {
      id: "download",
      icon: "file" as const,
      title: "Report",
      description: "Download and share your detailed report.",
    },
  ],
} as const;
