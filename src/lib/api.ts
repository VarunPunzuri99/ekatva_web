/**
 * API base URL from Vite env.
 * Example: VITE_API_BASE_URL=https://api.ekatva.com
 * Requests go to `${VITE_API_BASE_URL}/api/leads`
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
  