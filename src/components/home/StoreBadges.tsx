import { getAppStoreHref, type AppStoreKind } from "@/lib/appStore";
import { cn } from "@/lib/utils";
import appleStoreQr from "@/assets/images/AppleStore_QRcode.jpeg";
import googlePlayQr from "@/assets/images/Googleplay_QRcode.jpeg";

interface StoreQrProps {
  store: AppStoreKind;
  className?: string;
}

/** Scannable store QR — also tappable link to the store listing. */
export function StoreQr({ store, className }: StoreQrProps) {
  const isGoogle = store === "google";
  const href = getAppStoreHref(store);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        isGoogle
          ? "Get Ekatva on Google Play"
          : "Download Ekatva on the App Store"
      }
      className={cn(
        "flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-[4px] border border-[#D1D5DB] bg-white p-1 transition-[border-color,box-shadow] hover:border-[#9CA3AF] hover:shadow-sm",
        className,
      )}
    >
      <img
        src={isGoogle ? googlePlayQr : appleStoreQr}
        alt=""
        className="h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}

interface StoreBadgeProps {
  store: AppStoreKind;
  className?: string;
  variant?: "light" | "dark";
}

/** Store badge — `light` matches hero UX mock; `dark` for app CTA section. */
export function StoreBadge({
  store,
  className,
  variant = "light",
}: StoreBadgeProps) {
  const isGoogle = store === "google";
  const isDark = variant === "dark";
  const href = getAppStoreHref(store);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-md px-3 shadow-sm transition-opacity hover:opacity-90",
        isDark
          ? "bg-[#111827] text-white"
          : "border border-[#D1D5DB] bg-white text-[#111827] hover:border-[#9CA3AF]",
        className,
      )}
      aria-label={isGoogle ? "Get it on Google Play" : "Download on the App Store"}
    >
      {isGoogle ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="#EA4335"
            d="M3.6 2.1 13.4 12 3.6 21.9A2 2 0 0 1 2 20.1V3.9a2 2 0 0 1 1.6-1.8Z"
          />
          <path
            fill="#FBBC04"
            d="m13.4 12 3.2-3.2 4.1 2.3a1.7 1.7 0 0 1 0 2.9l-4.1 2.3L13.4 12Z"
          />
          <path
            fill="#34A853"
            d="M13.4 12 3.6 21.9l9.1-5.1L16.6 14 13.4 12Z"
          />
          <path
            fill="#4285F4"
            d="M13.4 12 16.6 10l-3.9-4.8-9.1-3.1L13.4 12Z"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className={cn("h-5 w-5", isDark ? "fill-white" : "fill-[#111827]")}
          aria-hidden="true"
        >
          <path d="M16.7 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.1-.8-2.1-3.8ZM14.4 6.5c.6-.7 1-1.7.9-2.7-0.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-1 2.6 1 .1 1.9-.5 2.6-1.2Z" />
        </svg>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-home text-[8px] tracking-wide",
            isDark ? "text-white/80" : "text-[#4B5563]",
          )}
        >
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span
          className={cn(
            "font-home text-[13px] font-semibold",
            isDark ? "text-white" : "text-[#111827]",
          )}
        >
          {isGoogle ? "Google Play" : "App Store"}
        </span>
      </span>
    </a>
  );
}
