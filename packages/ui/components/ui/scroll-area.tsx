"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@wordigo/ui/lib/utils";
import * as React from "react";

const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("ui-relative ui-overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="ui-h-full ui-w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar ref={ref} orientation={orientation} className={cn("ui-flex touch-none ui-select-none ui-transition-colors", orientation === "vertical" && "ui-h-full ui-w-2.5 ui-border-l border-l-transparent p-[1px]", orientation === "horizontal" && "ui-h-2.5 ui-border-t border-t-transparent p-[1px]", className)} {...props}>
    <ScrollAreaPrimitive.ScrollAreaThumb className="ui-relative ui-flex-1 ui-rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
