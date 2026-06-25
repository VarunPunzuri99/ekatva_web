import { type VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-ui text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-dark hover:brightness-110 shadow-lg shadow-primary/20",
        outline:
          "border border-primary/40 bg-transparent text-primary hover:bg-primary/10",
        ghost: "bg-transparent text-text hover:bg-primary/10",
        glass:
          "glass-card text-text hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10",
        dark: "bg-dark text-text-light hover:bg-dark-deep",
      },
      size: {
        default: "h-12 px-8 rounded-full",
        sm: "h-10 px-6 rounded-full text-xs",
        lg: "h-14 px-10 rounded-full text-base",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
