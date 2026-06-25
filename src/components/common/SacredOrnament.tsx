import { cn } from "@/lib/utils";

interface SacredOrnamentProps {
  className?: string;
}

export function SacredOrnament({ className }: SacredOrnamentProps) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      aria-hidden="true"
    >
      <img
        src="/assets/line_image.png"
        alt=""
        className="h-auto w-40 max-w-full object-contain md:w-56"
        loading="lazy"
      />
    </div>
  );
}
