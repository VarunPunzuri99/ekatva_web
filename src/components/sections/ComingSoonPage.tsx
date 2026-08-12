import { useState } from "react";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { LaunchAccessModal } from "@/components/sections/LaunchAccessModal";
import { SubscribeForm } from "@/components/sections/SubscribeForm";
import { TrustBar } from "@/components/sections/TrustBar";
import { SacredOrnament } from "@/components/common/SacredOrnament";
import { Logo } from "@/components/common/Logo";
import { LEGAL_NAV } from "@/content/legalNav";
import { SERVICES } from "@/content/services";
import { hasReachedLaunch } from "@/lib/constants";

/** Artwork 1169×1345 — full-bleed width, complete image (no crop) */
const LANDING_MIN_HEIGHT = "max(100vh, calc(100vw * 1345 / 1169))";

export function ComingSoonPage() {
  const [launchOpen, setLaunchOpen] = useState(false);
  const [launched, setLaunched] = useState(() => hasReachedLaunch());

  return (
    <div
      className="relative isolate flex w-full flex-col"
      style={{ minHeight: LANDING_MIN_HEIGHT }}
    >
      {/* Full-bleed landing artwork — covers left & right edges */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src="/assets/landing_bg.jpeg"
          alt=""
          className="h-full w-full object-fill"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--theme-background) 20%, transparent) 0%, transparent 28%, transparent 58%, rgba(40, 22, 10, 0.35) 78%, rgba(30, 16, 8, 0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        {/* ── Hero ── */}
        <section
          aria-labelledby="hero-heading"
          className="mx-auto w-full max-w-6xl px-4 pt-5 text-center sm:pt-6 md:pt-8 lg:pt-10"
        >
          <Logo className="mb-3 md:mb-5" />

          <h1
            id="hero-heading"
            className="font-heading text-lg font-medium tracking-[0.2em] text-dark uppercase sm:text-xl sm:tracking-[0.3em] md:text-2xl lg:text-3xl"
          >
            Is Coming Soon
          </h1>

          <SacredOrnament className="my-4 md:my-5" />

          <p className="mx-auto max-w-md font-body text-base leading-relaxed text-text-muted sm:text-lg md:max-w-none md:whitespace-nowrap md:text-xl">
            A sacred journey towards peace, prosperity and spiritual harmony.
          </p>

          <button
            type="button"
            onClick={() => setLaunchOpen(true)}
            className="mt-6 rounded-full bg-primary-light px-8 py-3 font-ui text-sm font-bold tracking-[0.12em] text-dark uppercase shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] sm:px-10 md:mt-8 md:px-12 md:py-3.5 md:text-base"
          >
            {launched ? "Launch" : "Launching Soon"}
          </button>

          <CountdownTimer
            className="py-4 md:py-5"
            onComplete={() => setLaunched(true)}
          />
        </section>

        {/* ── Services intro ── */}
        <section
          aria-labelledby="services-heading"
          className="mx-auto w-full max-w-6xl px-4 pt-1 text-center md:pt-2"
        >
          <p className="font-heading text-sm font-medium tracking-[0.28em] text-dark uppercase md:text-base">
            Our Services
          </p>
          <SacredOrnament className="my-3 md:my-4" />

          <h2
            id="services-heading"
            className="font-body text-2xl font-semibold text-dark md:text-3xl"
          >
            Spiritual Solutions. For every one
          </h2>

          <p className="mx-auto mt-2 max-w-xl font-body text-sm leading-relaxed text-text-muted md:mt-3 md:text-base">
            Ekatva brings traditional wisdom and spiritual services to your
            fingertips. Stay tuned for a divine experience.
          </p>
        </section>

        {/* ── Cards + trust ── */}
        <section id="services" className="w-full px-4 pt-6 md:pt-8 lg:pt-10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 items-stretch gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 xl:gap-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-8 md:mt-10 lg:mt-12">
            <TrustBar />
          </div>
        </section>

        {/* ── Subscribe — bottom of artwork ── */}
        <footer
          id="subscribe"
          aria-labelledby="subscribe-heading"
          className="mx-auto mt-auto w-full max-w-2xl px-4 pb-8 pt-10 text-center md:pb-10 md:pt-14 lg:pb-12 lg:pt-16"
        >
          <h2
            id="subscribe-heading"
            className="font-body text-3xl font-medium text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-5xl"
          >
            Be the first to know
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-lg leading-snug text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)] md:mt-4 md:text-xl">
            Subscribe to get updates, launch alerts and exclusive early access.
          </p>
          <SubscribeForm className="mt-6 md:mt-8" light />
          <div className="mt-8 md:mt-10">
            <Link
              to="/contact-us"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-[#FFB71C]/55 bg-gradient-to-r from-[#FFB71C]/95 via-[#E8A42A] to-[#D89A2B] px-8 font-ui text-sm font-bold tracking-[0.14em] text-[#2A1608] uppercase shadow-[0_10px_32px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.12)_inset] transition-[transform,filter,box-shadow] hover:brightness-105 hover:shadow-[0_14px_36px_rgba(216,154,43,0.45)] active:scale-[0.98]"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden="true"
              />
              Contact Us
            </Link>
          </div>
          <nav
            aria-label="Legal policies"
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:mt-8"
          >
            {LEGAL_NAV.map((item, index) => (
              <span key={item.path} className="flex items-center gap-3">
                {index > 0 && (
                  <span className="text-white/40" aria-hidden="true">
                    ·
                  </span>
                )}
                <Link
                  to={item.path}
                  className="font-ui text-xs text-white/85 transition-colors hover:text-primary-light [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
          <p className="mt-3 font-ui text-xs text-white/70 [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]">
            &copy; 2026 Ekatva. All Rights Reserved.
          </p>
        </footer>
      </div>

      <LaunchAccessModal
        open={launchOpen}
        onClose={() => setLaunchOpen(false)}
      />
    </div>
  );
}
