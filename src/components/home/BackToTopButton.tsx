import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { requestScrollTop } from "@/lib/scrollTop";
import { easeOutExpo } from "@/lib/animations";

const SHOW_AFTER_PX = 420;

/** Fixed bottom-right control — Home only. Smooth scroll via Lenis. */
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const goTop = () => {
    setPressed(true);
    requestScrollTop();
    window.setTimeout(() => setPressed(false), 400);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <m.button
          type="button"
          key="back-to-top"
          aria-label="Back to top"
          onClick={goTop}
          initial={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, y: 28, scale: 0.85 }
          }
          animate={{ opacity: 1, y: 0, scale: pressed ? 0.92 : 1 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 20, scale: 0.88 }
          }
          whileHover={
            reduceMotion
              ? undefined
              : { y: -4, scale: 1.06 }
          }
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          className="back-to-top-btn group fixed right-4 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white sm:right-6 sm:bottom-7 sm:h-[3.25rem] sm:w-[3.25rem]"
        >
          {/* Soft ambient glow */}
          <span
            className="pointer-events-none absolute inset-[-6px] rounded-full opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle, rgba(242,112,34,0.55) 0%, rgba(242,112,34,0) 70%)",
            }}
            aria-hidden="true"
          />

          {/* Gradient disc */}
          <span
            className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full shadow-[0_10px_28px_rgba(242,112,34,0.38)] ring-1 ring-white/35"
            style={{
              background:
                "linear-gradient(145deg, #FFB347 0%, #F27022 48%, #E06518 100%)",
            }}
          >
            {/* Shine sweep */}
            <span
              className="back-to-top-shine pointer-events-none absolute inset-0"
              aria-hidden="true"
            />

            <m.span
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -2, 0] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp
                className="relative h-5 w-5 drop-shadow-sm sm:h-[1.35rem] sm:w-[1.35rem]"
                strokeWidth={2.5}
              />
            </m.span>
          </span>
        </m.button>
      ) : null}
    </AnimatePresence>
  );
}
