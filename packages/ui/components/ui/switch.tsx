"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@wordigo/ui/lib/utils";
import * as React from "react";

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root className={cn("peer ui-inline-flex h-[24px] w-[44px] shrink-0 ui-cursor-pointer ui-items-center ui-rounded-full ui-border-2 ui-border-transparent ui-transition-colors focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ring-ring focus-visible:ui-ring-offset-2 focus-visible:ring-offset-background disabled:ui-cursor-not-allowed disabled:ui-opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className)} {...props} ref={ref}>
    <SwitchPrimitives.Thumb className={cn("ui-pointer-events-none ui-block ui-h-5 ui-w-5 ui-rounded-full bg-background ui-shadow-lg ui-ring-0 ui-transition-transform data-[state=checked]:ui-translate-x-5 data-[state=unchecked]:ui-translate-x-0")} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
