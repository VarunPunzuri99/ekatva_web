import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { SacredOrnament } from "./SacredOrnament";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.header
      variants={fadeUp}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-2xl text-left",
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            "text-caption mb-4",
            light ? "text-accent" : "text-primary",
          )}
        >
          {label}
        </p>
      )}
      <SacredOrnament className="mb-6" />
      <h2
        className={cn(
          "text-section-title",
          light ? "text-text-light" : "text-dark",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-body-large mt-5",
            light ? "text-text-light/80" : "text-text-muted",
          )}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
}
