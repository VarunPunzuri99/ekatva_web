/** eWish page copy aligned to UX mock screens. */

export const EWISH_HERO = {
  eyebrow: "eWish",
  title: "Your Wishes, Divine Connections",
  subtitle: "heartfelt wishes and sankalpas to the Divine",
} as const;

export const EWISH_INTRO =
  "eWish allows you to submit your heartfelt wishes and sankalpas to the Divine. Receive blessings, track progress, and get personalized recommendations to strengthen your spiritual journey.";

export const EWISH_FEATURES = [
  {
    id: "submit",
    icon: "sun" as const,
    title: "Submit Wishes",
    description: "Offer your Sankalp with devotion.",
  },
  {
    id: "track",
    icon: "gauge" as const,
    title: "Track Progress",
    description: "Stay updated on your wish status.",
  },
  {
    id: "guidance",
    icon: "user" as const,
    title: "Divine Guidance",
    description: "Get personalized recommendations.",
  },
  {
    id: "notify",
    icon: "bell" as const,
    title: "Stay Notified",
    description: "Receive updates at every step.",
  },
] as const;

export const EWISH_BENEFITS = {
  eyebrow: "VAST VEDIC WISDOM",
  title: "Rich Mantra Library",
  items: [
    {
      id: "connection",
      icon: "heart" as const,
      title: "Heartfelt Connection",
      description: "Express your deepest wishes with faith and devotion.",
    },
    {
      id: "blessings",
      icon: "flame" as const,
      title: "Divine Blessings",
      description: "Your sankalpa is offered with prayers for divine blessings.",
    },
    {
      id: "growth",
      icon: "trend" as const,
      title: "Spiritual Growth",
      description:
        "Recommended practices help you grow spiritually and stay consistent.",
    },
    {
      id: "peace",
      icon: "handHeart" as const,
      title: "Peace of Mind",
      description:
        "Track your wish progress and feel the Divine presence with you.",
    },
  ],
} as const;

export const EWISH_CTA = {
  title: "Make every wish a step closer to the Divine.",
  subtitle: "eWish in Ekatva App — Your sankalpa. Eternal blessings.",
} as const;
