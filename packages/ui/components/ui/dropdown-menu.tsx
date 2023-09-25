"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@wordigo/ui/lib/utils";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger ref={ref} className={cn("ui-flex ui-cursor-default ui-select-none focus-visible:ui-ring-2 focus-visible:ui-ring-offset-2 ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "ui-pl-8", className)} {...props}>
    {children}
    <ChevronRight className="ui-ml-auto ui-h-4 ui-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.SubContent>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn("ui-z-50 min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border bg-popover ui-p-1 text-popover-foreground ui-shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-0 data-[side=top]:slide-in-from-bottom-2", className)}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn("ui-z-50 min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border bg-popover text-popover-foreground ui-shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div"> & { inset?: boolean }>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Item ref={ref} className={cn("ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none ui-transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50", inset && "ui-pl-8", className)} {...props}>
    {children}
  </DropdownMenuPrimitive.Item>
));

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem ref={ref} className={cn("ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none ui-transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50", className)} checked={checked} {...props}>
    <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="ui-h-4 ui-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem ref={ref} className={cn("ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none ui-transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50", className)} {...props}>
    <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="ui-h-2 ui-w-2 ui-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div"> & { inset?: boolean }>(({ className, inset, ...props }, ref) => <DropdownMenuPrimitive.Label ref={ref} className={cn("ui-px-2 ui-py-1.5 ui-text-sm ui-font-semibold", inset && "ui-pl-8", className)} {...props} />);

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>>(({ className, ...props }, ref) => <DropdownMenuPrimitive.Separator ref={ref} className={cn("ui--mx-1 ui-my-1 ui-h-px bg-muted ui-mx-2 ", className)} {...props} />);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ui-ml-auto ui-text-xs ui-tracking-widest", className)} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup };
