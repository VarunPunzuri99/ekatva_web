/** Launch: August 28, 2026 19:00:00 IST (UTC+5:30) */
export const LAUNCH_DATE = new Date("2026-08-28T13:30:00.000Z");

/** True on/after the official launch instant. */
export function hasReachedLaunch(now = Date.now()) {
  return now >= LAUNCH_DATE.getTime();
}

/** Soft launch gate code — unlocks the protected home app. */
export const LAUNCH_ACCESS_CODE = "ekatva";

export const SITE_URL = "https://ekatva.com";

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/ekatva",
  twitter: "https://twitter.com/ekatva",
  youtube: "https://youtube.com/ekatva",
  facebook: "https://facebook.com/ekatva",
  linkedin: "https://linkedin.com/company/ekatva",
} as const;
