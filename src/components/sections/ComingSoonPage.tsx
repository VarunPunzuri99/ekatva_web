import { ServiceCard } from "@/components/sections/ServiceCard";
import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { SubscribeForm } from "@/components/sections/SubscribeForm";
import { TrustBar } from "@/components/sections/TrustBar";
import { SacredOrnament } from "@/components/common/SacredOrnament";
import { Logo } from "@/components/common/Logo";

const services = [
  {
    icon: "/assets/service-book-pandit.png",
    title: "Book Pandit",
    description:
      "Book experienced and verified Pandits for your pujas, homas and rituals.",
  },
  {
    icon: "/assets/service-puja.png",
    title: "ePuja",
    description:
      "Participate in sacred pujas from anywhere and receive divine blessings.",
  },
  {
    icon: "/assets/service-astrology.png",
    title: "Astrology",
    description:
      "Consult with expert astrologers for guidance on life's important decisions.",
  },
  {
    icon: "/assets/service-japa.png",
    title: "Japa",
    description:
      "Book Japa services for peace, health, prosperity and spiritual growth.",
  },
  {
    icon: "/assets/service-dristi.png",
    title: "Disti",
    description:
      "Remove negative energies and protect your home and loved ones.",
  },
  {
    icon: "/assets/service-horoscope.png",
    title: "Horoscope",
    description:
      "Get accurate horoscope readings and insights about your future.",
  },
];

export function ComingSoonPage() {
  return (
    <div className="min-h-screen">
      {/* ══════════════════════════════════════════════════════
          UPPER ZONE — misty temple background, content on top
      ══════════════════════════════════════════════════════ */}
      <div className="relative">
        {/* Full-bleed temple background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <img
            src="/assets/temple_background.png"
            alt=""
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Soft warm wash — keeps temple visible, content readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 30%, color-mix(in srgb, var(--theme-background) 78%, transparent) 0%, color-mix(in srgb, var(--theme-background) 45%, transparent) 55%, color-mix(in srgb, var(--theme-background) 30%, transparent) 100%)",
            }}
          />
        </div>

        {/* Bells decoration — top right */}
        <img
          src="/assets/bells.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-4 z-20 w-52 sm:right-8 sm:w-64 md:right-12 md:w-80 lg:right-20 lg:w-96"
        />

        {/* ── Hero content ── */}
        <section
          aria-labelledby="hero-heading"
          className="relative z-10 mx-auto max-w-6xl px-4 pt-10 text-center md:pt-16 lg:pt-20"
        >
          <Logo className="mb-6 md:mb-8" />

          <h1
            id="hero-heading"
            className="font-heading text-xl font-medium tracking-[0.3em] text-dark uppercase md:text-2xl lg:text-3xl"
          >
            Is Coming Soon
          </h1>

          <SacredOrnament className="my-5 md:my-7" />

          <p className="mx-auto max-w-md font-body text-lg leading-relaxed text-text-muted md:text-xl">
            A sacred journey towards peace, prosperity and spiritual harmony.
          </p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 rounded-full bg-primary-light px-10 py-3 font-ui text-sm font-bold tracking-[0.12em] text-dark uppercase shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] md:mt-10 md:px-12 md:py-3.5 md:text-base"
          >
            Launching Soon
          </button>

          <CountdownTimer />
        </section>

        {/* ── Services heading (stays on temple background) ── */}
        <section
          aria-labelledby="services-heading"
          className="relative z-10 mx-auto max-w-6xl px-4 pb-28 pt-2 text-center md:pb-40 md:pt-6"
        >
          <p className="font-heading text-sm font-medium tracking-[0.28em] text-dark uppercase md:text-base">
            Our Services
          </p>
          <SacredOrnament className="my-4 md:my-5" />

          <h2
            id="services-heading"
            className="font-body text-2xl font-semibold text-dark md:text-3xl"
          >
            Spiritual Solutions. For every one
          </h2>

          <p className="mx-auto mt-3 max-w-xl font-body text-sm leading-relaxed text-text-muted md:text-base">
            Ekatva brings traditional wisdom and spiritual services to your
            fingertips. Stay tuned for a divine experience.
          </p>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════
          LOWER ZONE — kasi ghat background
          Cards straddle the boundary (top on temple, bottom here)
      ══════════════════════════════════════════════════════ */}
      <section id="services" className="relative pt-px">
        {/* Full-bleed kasi / ghat background */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/assets/kaasi_background.png"
            alt=""
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Content layer */}
        <div className="relative z-10 px-4">
          {/* Service cards — pulled up to overlap the temple zone */}
          <div className="mx-auto -mt-20 grid max-w-6xl grid-cols-2 items-stretch gap-3 sm:gap-4 md:grid-cols-3 md:-mt-28 lg:grid-cols-6 lg:gap-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-10 md:mt-14">
            <TrustBar />
          </div>

          {/* Subscribe */}
          <footer
            id="subscribe"
            aria-labelledby="subscribe-heading"
            className="mx-auto mt-14 max-w-2xl pb-16 text-center md:mt-20 md:pb-20"
          >
            <h2
              id="subscribe-heading"
              className="font-body text-3xl font-medium text-text-light md:text-5xl"
            >
              Be the first to know
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-lg leading-snug text-text-light md:text-xl">
              Subscribe to get updates, launch alerts and exclusive early access.
            </p>
            <SubscribeForm className="mt-8 md:mt-10" />
            <p className="mt-10 font-ui text-xs text-text-light/65">
              &copy; 2026 Ekatva. All Rights Reserved.
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}
