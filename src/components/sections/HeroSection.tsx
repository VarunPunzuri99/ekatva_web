import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundEffects } from "@/components/common/BackgroundEffects";
import { FloatingSymbols } from "@/components/common/FloatingSymbols";
import { Logo } from "@/components/common/Logo";
import { Particles } from "@/components/common/Particles";
import { SacredOrnament } from "@/components/common/SacredOrnament";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 gradient-hero" />
      <img
        src="/assets/temple-silhouette.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-multiply"
        loading="eager"
        fetchPriority="high"
      />
      <BackgroundEffects />
      <FloatingSymbols />
      <Particles />

      {/* Decorative bells */}
      <img
        src="/assets/bells.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 hidden h-auto w-32 opacity-90 md:block lg:w-44"
        loading="lazy"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pt-8 pb-16 md:px-8 md:pt-12">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Logo />
        </motion.header>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-auto flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}>
            <SacredOrnament className="mb-8" />
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="text-hero-title text-dark"
          >
            EKATVA
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-heading text-lg tracking-widest text-primary md:text-xl"
          >
            Ancient Wisdom. Modern Guidance.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-body-large mt-6 max-w-xl text-text-muted"
          >
            A sacred journey towards peace, prosperity and spiritual harmony.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-surface/60 px-5 py-2 font-ui text-xs font-semibold tracking-wider text-primary uppercase backdrop-blur-sm">
              Launching July 5, 2026
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" onClick={() => scrollTo("subscribe")}>
              Notify Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("about")}
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 w-full">
            <CountdownSection embedded />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
