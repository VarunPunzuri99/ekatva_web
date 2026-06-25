import { cn } from "@/lib/utils";

export function BackgroundEffects({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, var(--theme-accent-muted) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
