"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "@wordigo/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const toggleVariants = cva("ui-inline-flex ui-items-center ui-justify-center ui-rounded-md ui-text-sm ui-font-medium ring-offset-background ui-transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ring-ring focus-visible:ui-ring-offset-2 disabled:ui-pointer-events-none disabled:ui-opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", {
  variants: {
    variant: {
      default: "ui-bg-transparent",
      outline: "ui-border border-input ui-bg-transparent hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "ui-h-10 ui-px-3",
      sm: "ui-h-9 ui-px-2.5",
      lg: "ui-h-11 ui-px-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>>(({ className, variant, size, ...props }, ref) => <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
