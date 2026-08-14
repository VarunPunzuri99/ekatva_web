/**
 * Main backend API base URL from Vite env.
 * Example: VITE_API_BASE_URL=https://api.ekatva.online
 */
export function getApiBaseUrl(): string {
  const base = import.meta.env.VITE_API_BASE_URL as string | undefined;
  if (!base?.trim()) {
    throw new Error(
      "Missing VITE_API_BASE_URL. Add it to your .env file (see .env.example).",
    );
  }
  return base.replace(/\/$/, "");
}

/**
 * Astrology / Panchang API base URL (separate host from main API).
 * Example: VITE_ASTRO_API_BASE_URL=https://astroapi.ekatva.online
 */
export function getAstroApiBaseUrl(): string {
  const base = import.meta.env.VITE_ASTRO_API_BASE_URL as string | undefined;
  if (!base?.trim()) {
    throw new Error(
      "Missing VITE_ASTRO_API_BASE_URL. Add it to your .env file (see .env.example).",
    );
  }
  return base.replace(/\/$/, "");
}
