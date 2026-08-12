import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { HOME_FOOTER } from "@/content/home";
import { cn } from "@/lib/utils";

const maroon = "#A32A29";
const gold = "#B8860B";
const bodyBrown = "#6B4E3D";
const divider = "#E5C9A8";

function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = cn(
    "font-home text-[13px] font-medium transition-colors hover:opacity-80 sm:text-[14px]",
    className,
  );
  const style = { color: maroon };

  if (href.startsWith("/") && !href.startsWith("/#")) {
    return (
      <Link to={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} style={style}>
      {children}
    </a>
  );
}

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-home text-[15px] font-bold sm:text-base" style={{ color: maroon }}>
      {children}
      <span
        className="mt-1.5 block h-[2px] w-10 rounded-full"
        style={{ backgroundColor: gold }}
        aria-hidden
      />
    </h3>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#EA4335"
        d="M3.6 2.2c-.4.2-.6.6-.6 1.1v17.4c0 .5.2.9.6 1.1l9.5-9.8L3.6 2.2z"
      />
      <path
        fill="#FBBC04"
        d="M16.3 14.9 13.1 11.7 3.6 21.8c.2.1.4.2.6.2.3 0 .6-.1.9-.3l11.2-6.8z"
      />
      <path
        fill="#4285F4"
        d="M20.5 10.7 16.3 8.3l-3.2 3.4 3.2 3.2 4.2-2.4c.7-.4.7-1.4 0-1.8z"
      />
      <path
        fill="#34A853"
        d="M3.6 2.2 13.1 11.7l3.2-3.4L5.1 1.7C4.4 1.3 3.6 1.6 3.6 2.2z"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1A1A1A" aria-hidden>
      <path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.2-.8-2.2-3.6zM14.4 6.5c.6-.7 1-1.7.9-2.7-1 .1-2.1.6-2.7 1.4-.6.7-1.1 1.7-.9 2.7 1 .1 2-.6 2.7-1.4z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#1877F2"
        d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8v2.2h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig-grad)"
        d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9C2.4 3.9 4 2.4 7.1 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.8.1-2.2.1-3.2 1.1-3.3 3.3-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 2.2 1.1 3.2 3.3 3.3 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c2.2-.1 3.2-1.1 3.3-3.3.1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-2.2-1.1-3.2-3.3-3.3-1.3-.1-1.6-.1-4.8-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.4-8.3a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0z"
      />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8z"
      />
      <path fill="#fff" d="M9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
    </svg>
  );
}

function DiyaIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 64" className={className} aria-hidden>
      <ellipse cx="36" cy="58" rx="22" ry="4" fill="#9C1C1C" opacity="0.12" />
      <path
        d="M14 42c2 10 12 16 22 16s20-6 22-16c-6 4-14 5-22 5s-16-1-22-5z"
        fill="#B91C1C"
      />
      <path
        d="M12 40c3-3 12-5 24-5s21 2 24 5c-3 3-12 6-24 6s-21-3-24-6z"
        fill="#DC2626"
      />
      <path
        d="M18 39c2-2 10-3.5 18-3.5S52 37 54 39c-2 1.5-10 3-18 3s-16-1.5-18-3z"
        fill="#F87171"
        opacity="0.5"
      />
      <path
        d="M36 8c-1.5 6-1 12 0 16 4-3 7-8 7-13-3 1-5 0-7-3z"
        fill="#FBBF24"
      />
      <path
        d="M36 12c-1 4-.5 9 0 12 2.5-2 5-6 5-10-2 .8-3.5 0-5-2z"
        fill="#FDE68A"
      />
      <circle cx="36" cy="28" r="2.2" fill="#F59E0B" />
    </svg>
  );
}

function PaymentBadge({ label }: { label: string }) {
  const styles: Record<string, string> = {
    VISA: "text-[#1A1F71] font-bold tracking-wide",
    Mastercard: "text-[#EB001B] font-semibold",
    RuPay: "text-[#097B3D] font-bold",
    UPI: "text-[#09704A] font-bold tracking-wider",
    "Net Banking": "text-[#1F4E79] font-semibold",
  };

  return (
    <span className="inline-flex h-8 min-w-[4.5rem] items-center justify-center rounded-md border border-[#D8D8D8] bg-white px-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:h-9 sm:min-w-[5.25rem] sm:px-3">
      {label === "Mastercard" ? (
        <span className="relative flex h-5 w-8 items-center justify-center" aria-label="Mastercard">
          <span className="absolute left-0 h-4 w-4 rounded-full bg-[#EB001B]" />
          <span className="absolute right-0 h-4 w-4 rounded-full bg-[#F79E1B] mix-blend-multiply" />
        </span>
      ) : (
        <span className={cn("font-home text-[10px] sm:text-[11px]", styles[label])}>
          {label}
        </span>
      )}
    </span>
  );
}

function StoreButton({
  href,
  label,
  store,
  kind,
}: {
  href: string;
  label: string;
  store: string;
  kind: "google" | "apple";
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-[#C9C9C9] bg-white px-2.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:border-[#A3A3A3] sm:px-3 sm:py-2"
    >
      {kind === "google" ? (
        <GooglePlayIcon className="h-5 w-5 shrink-0" />
      ) : (
        <AppleIcon className="h-5 w-5 shrink-0" />
      )}
      <span className="flex flex-col leading-tight">
        <span className="font-home text-[9px] text-[#6B7280] sm:text-[10px]">{label}</span>
        <span className="font-home text-[12px] font-semibold text-[#1A1A1A] sm:text-[13px]">
          {store}
        </span>
      </span>
    </a>
  );
}

function SocialButton({
  href,
  label,
  kind,
}: {
  href: string;
  label: string;
  kind: "facebook" | "instagram" | "youtube";
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center gap-1.5 rounded-md border border-[#C9C9C9] bg-white px-2 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:border-[#A3A3A3] sm:gap-2 sm:px-2.5"
    >
      {kind === "facebook" && <FacebookIcon className="h-4 w-4" />}
      {kind === "instagram" && <InstagramIcon className="h-4 w-4" />}
      {kind === "youtube" && <YouTubeIcon className="h-4 w-4" />}
      <span className="font-home text-[11px] font-medium text-[#374151] sm:text-[12px]">
        {label}
      </span>
    </a>
  );
}

export function HomeFooter() {
  const { support } = HOME_FOOTER;

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#FFF2E6]">
      <div id="about" className="sr-only" aria-hidden="true" />

      {/* Soft logo watermark */}
      <img
        src="/assets/icon.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-1/2 h-[220px] w-[220px] -translate-x-1/2 object-contain opacity-[0.12] mix-blend-multiply select-none sm:bottom-14 sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-12 pb-8 sm:px-6 lg:px-8 lg:pt-14 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Brand column */}
          <div className="lg:pr-8">
            <Logo className="justify-start" imgClassName="!h-9 sm:!h-10" />
            <p
              className="mt-4 max-w-[280px] font-home text-[12px] leading-relaxed sm:text-[13px]"
              style={{ color: bodyBrown }}
            >
              {HOME_FOOTER.about}
            </p>

            <p
              className="mt-6 font-home text-[11px] font-bold tracking-[0.12em] uppercase sm:text-[12px]"
              style={{ color: gold }}
            >
              Download the Ekatva App
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {HOME_FOOTER.appStores.map((store) => (
                <StoreButton key={store.store} {...store} />
              ))}
            </div>

            <p
              className="mt-5 font-home text-[11px] font-bold tracking-[0.12em] uppercase sm:text-[12px]"
              style={{ color: gold }}
            >
              Follow Us
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {HOME_FOOTER.social.map((item) => (
                <SocialButton key={item.label} {...item} />
              ))}
            </div>
          </div>

          {/* Explore */}
          <div
            className="lg:border-l lg:px-8"
            style={{ borderColor: divider }}
          >
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="mt-4 space-y-2.5">
              {HOME_FOOTER.explore.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div
            className="lg:border-l lg:px-8"
            style={{ borderColor: divider }}
          >
            <ColumnHeading>Helpful Links</ColumnHeading>
            <ul className="mt-4 space-y-2.5">
              {HOME_FOOTER.helpful.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div
            className="lg:border-l lg:pl-8"
            style={{ borderColor: divider }}
          >
            <ColumnHeading>Support</ColumnHeading>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={support.phoneHref}
                  className="flex items-start gap-2.5 font-home text-[13px] transition-opacity hover:opacity-80 sm:text-[14px]"
                  style={{ color: maroon }}
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                  {support.phone}
                </a>
              </li>
              <li>
                <a
                  href={support.emailHref}
                  className="flex items-start gap-2.5 font-home text-[13px] transition-opacity hover:opacity-80 sm:text-[14px]"
                  style={{ color: maroon }}
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                  {support.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 font-home text-[13px] sm:text-[14px]" style={{ color: maroon }}>
                <Clock className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                {support.hours}
              </li>
              <li className="flex items-start gap-2.5 font-home text-[13px] leading-snug sm:text-[14px]" style={{ color: maroon }}>
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                <span>{support.address}</span>
              </li>
            </ul>

            <div className="mt-6 flex items-end gap-3">
              <DiyaIllustration className="h-14 w-16 shrink-0 sm:h-16 sm:w-[4.5rem]" />
              <p
                className="max-w-[11rem] pb-1 font-home text-[12px] leading-snug italic sm:text-[13px]"
                style={{ color: maroon }}
              >
                {HOME_FOOTER.quote}
              </p>
            </div>
          </div>
        </div>

        {/* Secure payments */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 border-t pt-6 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4"
          style={{ borderColor: divider }}
        >
          <p
            className="inline-flex items-center gap-1.5 font-home text-[12px] font-semibold sm:text-[13px]"
            style={{ color: bodyBrown }}
          >
            <ShieldCheck className="h-4 w-4" style={{ color: gold }} strokeWidth={2} />
            Secure Payments
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {HOME_FOOTER.payments.map((label) => (
              <PaymentBadge key={label} label={label} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FAD9B9] py-3 text-center">
        <p className="font-home text-[12px]" style={{ color: maroon }}>
          {HOME_FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
