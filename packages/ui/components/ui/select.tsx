"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@wordigo/ui/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import * as React from "react";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={cn("ui-flex ui-px-1.5 ui-py-1 ui-items-center ui-justify-between ui-rounded-md ui-border border-input ui-bg-transparent ui-text-sm ring-offset-background placeholder:text-muted-foreground focus:ui-outline-none focus:ui-ring-2 focus:ring-ring focus:ui-ring-offset-2 disabled:ui-cursor-not-allowed disabled:ui-opacity-50", className)} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="ui-h-4 ui-w-4 ui-opacity-50 ui-ml-2" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "ui-relative ui-z-50 ui-overflow-hidden ui-rounded-md ui-flex ui-border bg-popover text-popover-foreground ui-shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=right]:slide-in-from-left-0 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:ui-translate-y-1 data-[side=left]:ui--translate-x-1 data-[side=top]:ui--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className={cn("ui-p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] ui-w-full min-w-[var(--radix-select-trigger-width)]")}>{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(({ className, ...props }, ref) => <SelectPrimitive.Label ref={ref} className={cn("ui-py-1.5 w-fit ui-text-sm ui-font-semibold", className)} {...props} />);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn("ui-relative ui-w-full ui-cursor-default ui-select-none ui-text-center ui-items-center ui-rounded-sm ui-px-2 ui-py-1 ui-text-sm ui-outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50", className)} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>>(({ className, ...props }, ref) => <SelectPrimitive.Separator ref={ref} className={cn("ui--mx-1 ui-my-1 ui-h-px bg-muted", className)} {...props} />);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectPortal = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Portal>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Portal>>(({ className, ...props }, ref) => <SelectPrimitive.Portal className={cn(className)} {...props} />);
SelectPortal.displayName = SelectPrimitive.Portal.displayName;

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectPortal };
