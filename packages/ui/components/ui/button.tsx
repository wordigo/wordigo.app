import { Slot } from "@radix-ui/react-slot";
import { cn } from "@wordigo/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva("ui-inline-flex ui-items-center ui-justify-center ui-rounded-md ui-text-sm ui-font-medium ring-offset-background ui-transition-colors focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-offset-2 focus-visible:ring-ring disabled:ui-pointer-events-none disabled:ui-opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "ui-border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:ui-underline",
    },
    size: {
      default: "ui-h-10 ui-px-4 ui-py-2",
      sm: "ui-h-9 ui-rounded-md ui-px-3",
      lg: "ui-h-11 ui-rounded-md ui-px-8",
      icon: "ui-h-10 ui-w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
