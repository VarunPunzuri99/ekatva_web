import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Provides LazyMotion so shared chrome (`HomeHeader` using `m.*`)
 * works on Home and on layout routes like /book-pandit.
 */
export function AppMotionProvider({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion={reduced ? "always" : "user"}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
