/** Official Ekatva app listings — work on mobile (opens native store) and desktop (web store). */
export const APP_STORE_LINKS = {
  googlePlay:
    "https://play.google.com/store/apps/details?id=org.metaglobetechnologies.ekatva&hl=en_IN",
  appStore: "https://apps.apple.com/in/app/ekatva/id6798239673",
} as const;

export type AppStoreKind = "google" | "apple";

export function getAppStoreHref(kind: AppStoreKind): string {
  return kind === "google" ? APP_STORE_LINKS.googlePlay : APP_STORE_LINKS.appStore;
}

function isIosDevice(): boolean {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isAndroidDevice(): boolean {
  return /Android/i.test(navigator.userAgent);
}

/**
 * Primary "Download App" target:
 * - iOS → App Store
 * - Android → Google Play
 * - Desktop → in-page download section
 */
export function getDownloadAppHref(onHome = true): string {
  if (typeof navigator !== "undefined") {
    if (isIosDevice()) return APP_STORE_LINKS.appStore;
    if (isAndroidDevice()) return APP_STORE_LINKS.googlePlay;
  }
  return onHome ? "#download" : "/#download";
}

export function isExternalAppStoreHref(href: string): boolean {
  return href.startsWith("http");
}
