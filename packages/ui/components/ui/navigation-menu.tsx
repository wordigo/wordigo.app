import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@wordigo/ui/lib/utils";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import * as React from "react";

const NavigationMenu = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Root>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root ref={ref} className={cn("ui-relative ui-z-10 ui-flex ui-max-w-max ui-flex-1 ui-items-center ui-justify-center", className)} {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.List>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>>(({ className, ...props }, ref) => <NavigationMenuPrimitive.List ref={ref} className={cn("group ui-flex ui-flex-1 ui-list-none ui-items-center ui-justify-center ui-space-x-1", className)} {...props} />);
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva("group ui-inline-flex ui-h-10 ui-w-max ui-items-center ui-justify-center ui-rounded-md bg-background ui-px-4 ui-py-2 ui-text-sm ui-font-medium ui-transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:ui-outline-none disabled:ui-pointer-events-none disabled:ui-opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");

const NavigationMenuTrigger = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger ref={ref} className={cn(navigationMenuTriggerStyle(), "group", className)} {...props}>
    {children} <ChevronDown className="ui-relative top-[1px] ui-ml-1 ui-h-3 ui-w-3 ui-transition ui-duration-200 group-data-[state=open]:ui-rotate-180" aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content ref={ref} className={cn("ui-left-0 ui-top-0 ui-w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:ui-absolute md:ui-w-auto ", className)} {...props} />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Viewport>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>>(({ className, ...props }, ref) => (
  <div className={cn("ui-absolute ui-left-0 ui-top-full ui-flex ui-justify-center")}>
    <NavigationMenuPrimitive.Viewport className={cn("origin-top-center ui-relative ui-mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] ui-w-full ui-overflow-hidden ui-rounded-md ui-border bg-popover text-popover-foreground ui-shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className)} ref={ref} {...props} />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<React.ElementRef<typeof NavigationMenuPrimitive.Indicator>, React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator ref={ref} className={cn("ui-top-full z-[1] ui-flex ui-h-1.5 ui-items-end ui-justify-center ui-overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className)} {...props}>
    <div className="ui-relative top-[60%] ui-h-2 ui-w-2 ui-rotate-45 ui-rounded-tl-sm bg-border ui-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export { navigationMenuTriggerStyle, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport };
