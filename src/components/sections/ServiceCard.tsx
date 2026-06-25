import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  featured = false,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col items-center rounded-2xl gradient-card px-3 py-6 text-center shadow-lg",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25",
        featured &&
          "ring-1 ring-text-light/30 lg:py-9 lg:brightness-[1.08] lg:shadow-2xl lg:shadow-primary/40",
        className,
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-surface/95 p-2.5 ring-1 ring-primary/15 transition-transform group-hover:scale-105 md:h-[76px] md:w-[76px]",
          featured && "lg:h-24 lg:w-24",
        )}
      >
        <img
          src={icon}
          alt=""
          className="icon-deepen h-full w-full object-contain"
          loading="lazy"
          width={76}
          height={76}
        />
      </div>
      <h3 className="font-ui text-[0.7rem] font-bold tracking-widest text-text-light uppercase md:text-sm">
        {title}
      </h3>
      <p className="mt-2 font-body text-xs leading-relaxed text-text-light/90 md:text-sm">
        {description}
      </p>
    </article>
  );
}
