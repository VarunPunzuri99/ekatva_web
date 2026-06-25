import { Clock, Lock, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { icon: Shield, line1: "Trusted Pandits", line2: "Verified" },
  { icon: Lock, line1: "100% Secure", line2: "and Private" },
  { icon: Sparkles, line1: "Traditional Practices,", line2: "Modern Convenience" },
  { icon: Clock, line1: "Anytime, Anywhere", line2: "Spiritual Support" },
];

export function TrustBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4",
        className,
      )}
    >
      {features.map((item) => (
        <div
          key={item.line1}
          className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-md shadow-dark/10"
        >
          <item.icon
            className="h-5 w-5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="truncate font-ui text-xs font-semibold text-secondary leading-snug md:text-[0.8rem]">
              {item.line1}
            </p>
            <p className="truncate font-ui text-[0.7rem] text-text-muted leading-snug">
              {item.line2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
