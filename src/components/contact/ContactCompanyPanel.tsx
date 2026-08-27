import { m } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/contact";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#1877F2"
        d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8v2.2h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"
      />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="contact-ig" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <path
        fill="url(#contact-ig)"
        d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9C2.4 3.9 4 2.4 7.1 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.8.1-2.3.1-3.4 1.2-3.5 3.5-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 2.3 1.2 3.4 3.5 3.5 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c2.3-.1 3.4-1.2 3.5-3.5.1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-2.3-1.2-3.4-3.5-3.5-1.3-.1-1.6-.1-4.8-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.4-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z"
      />
    </svg>
  );
}

function YouTubeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8z"
      />
      <path fill="#fff" d="M9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#0A66C2"
        d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0zM7.1 20.5H3.6V9h3.5v11.5zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zM20.5 20.5h-3.5v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.6V9h3.3v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.3v6.4z"
      />
    </svg>
  );
}

const SOCIAL_ICONS = {
  facebook: FacebookGlyph,
  instagram: InstagramGlyph,
  youtube: YouTubeGlyph,
  linkedin: LinkedInGlyph,
} as const;

const touchItems = [
  {
    key: "phone",
    icon: Phone,
    label: "Phone / WhatsApp",
    lines: [`${COMPANY_CONTACT.phone} (${COMPANY_CONTACT.phoneNote})`],
    href: COMPANY_CONTACT.whatsappHref,
  },
  {
    key: "email",
    icon: Mail,
    label: "Email",
    lines: [COMPANY_CONTACT.email],
    href: COMPANY_CONTACT.emailHref,
  },
  {
    key: "address",
    icon: MapPin,
    label: "Address",
    lines: COMPANY_CONTACT.addressLines,
    href: undefined as string | undefined,
  },
] as const;

export function ContactCompanyPanel() {
  return (
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex h-full flex-col gap-5"
    >
      <m.div
        variants={fadeUp}
        className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_28px_rgba(31,41,55,0.05)] sm:p-6"
      >
        <h2 className="font-home text-lg font-bold tracking-tight text-[#1A1A1A] sm:text-xl">
          {COMPANY_CONTACT.panelTitle}
        </h2>

        <ul className="mt-5 space-y-5">
          {touchItems.map((item) => {
            const Icon = item.icon;
            return (
              <m.li
                key={item.key}
                variants={fadeUp}
                className="flex gap-3.5"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2, ease: easeOutExpo }}
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F27022]">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-home text-[12px] font-semibold text-[#6B7280]">
                    {item.label}
                  </p>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a
                        key={line}
                        href={item.href}
                        className="mt-0.5 block font-home text-[14px] font-medium leading-snug text-[#1A1A1A] transition-colors hover:text-[#F27022] sm:text-[15px]"
                        {...(item.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={line}
                        className="mt-0.5 font-home text-[14px] leading-snug text-[#374151] sm:text-[15px]"
                      >
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </m.li>
            );
          })}
        </ul>
      </m.div>

      <m.div
        variants={fadeUp}
        className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_28px_rgba(31,41,55,0.05)] sm:p-6"
      >
        <h2 className="font-home text-lg font-bold tracking-tight text-[#1A1A1A] sm:text-xl">
          {COMPANY_CONTACT.followTitle}
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {COMPANY_CONTACT.social.map((item) => {
            const Icon = SOCIAL_ICONS[item.kind];
            return (
              <m.a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white transition-shadow hover:shadow-[0_6px_16px_rgba(31,41,55,0.1)]"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: easeOutExpo }}
              >
                <Icon className="h-5 w-5" />
              </m.a>
            );
          })}
        </div>
      </m.div>
    </m.div>
  );
}
