import { cn } from "@/lib/utils";

interface CompactServiceCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function CompactServiceCard({
  icon,
  title,
  description,
  className,
}: CompactServiceCardProps) {
  return (
    <article
      className={cn(
        "group flex min-w-0 flex-1 flex-col items-center rounded-lg gradient-card px-1.5 py-2.5 text-center shadow-md md:rounded-xl md:px-2 md:py-3 lg:py-4",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20",
        className,
      )}
    >
      <div className="mb-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-surface/95 p-1.5 ring-1 ring-primary/15 md:mb-2 md:h-12 md:w-12 lg:h-14 lg:w-14">
        <img
          src={icon}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
          width={48}
          height={48}
        />
      </div>
      <h3 className="font-ui text-[0.55rem] font-bold tracking-wider text-text-light uppercase md:text-[0.65rem] lg:text-xs">
        {title}
      </h3>
      <p className="mt-1 hidden font-body text-[0.6rem] leading-snug text-text-light/85 lg:line-clamp-3 lg:block">
        {description}
      </p>
    </article>
  );
}
