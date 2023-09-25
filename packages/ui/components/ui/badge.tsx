import { cn } from "@wordigo/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva("ui-inline-flex ui-items-center ui-rounded-full ui-border ui-px-2.5 ui-py-0.5 ui-text-xs ui-font-semibold ui-transition-colors focus:ui-outline-none focus:ui-ring-2 focus:ring-ring focus:ui-ring-offset-2", {
  variants: {
    variant: {
      default: "ui-border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "ui-border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "ui-border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
