"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@wordigo/ui/lib/utils";
import * as React from "react";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => <TabsPrimitive.List ref={ref} className={cn("ui-inline-flex ui-h-10 ui-items-center ui-justify-center ui-rounded-md bg-muted ui-p-1 text-muted-foreground", className)} {...props} />);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn("ui-inline-flex ui-items-center ui-justify-center ui-whitespace-nowrap ui-rounded-sm ui-px-3 ui-py-1.5 ui-text-sm ui-font-medium ring-offset-background ui-transition-all focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ring-ring focus-visible:ui-ring-offset-2 disabled:ui-pointer-events-none disabled:ui-opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:ui-shadow-sm", className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => <TabsPrimitive.Content ref={ref} className={cn("ui-mt-2 ring-offset-background focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ring-ring focus-visible:ui-ring-offset-2", className)} {...props} />);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
