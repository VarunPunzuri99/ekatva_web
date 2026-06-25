import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src="/assets/logo.png"
        alt="Ekatva — spiritual wellness platform"
        className="h-16 w-auto sm:h-20 md:h-24"
        width={300}
        height={96}
        loading="eager"
      />
    </div>
  );
}
