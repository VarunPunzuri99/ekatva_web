/** Launch: August 28, 2026 19:00:00 IST (UTC+5:30) */
export const LAUNCH_DATE = new Date("2026-08-28T13:30:00.000Z");

/** True on/after the official launch instant. */
export function hasReachedLaunch(now = Date.now()) {
  return now >= LAUNCH_DATE.getTime();
}

export const SITE_URL = "https://ekatva.com";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/ekatva/",
  instagram: "https://www.instagram.com/ekatva_online/",
  youtube: "https://www.youtube.com/@ekatva.online",
  linkedin:
    "https://www.linkedin.com/company/ekatvaonline/posts/?viewAsMember=true",
} as const;
