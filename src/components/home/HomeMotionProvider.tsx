import type { ReactNode } from "react";
import { AppMotionProvider } from "@/components/layout/AppMotionProvider";
import { SmoothScroll } from "@/components/home/SmoothScroll";

/** Home only: motion context + Lenis smooth scroll. */
export function HomeMotionProvider({ children }: { children: ReactNode }) {
  return (
    <AppMotionProvider>
      <SmoothScroll>{children}</SmoothScroll>
    </AppMotionProvider>
  );
}
