"use client";

import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "@wordigo/ui/lib/utils";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger ref={ref} className={cn("ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "ui-pl-8", className)} {...props}>
    {children}
    <ChevronRight className="ui-ml-auto ui-h-4 ui-w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.SubContent>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn("ui-z-50 min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border bg-popover ui-p-1 text-popover-foreground ui-shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Content>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "ui-z-50 min-w-[8rem] ui-overflow-hidden ui-rounded-md ui-border bg-popover ui-p-1 text-popover-foreground ui-shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => <ContextMenuPrimitive.Item ref={ref} className={cn("ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50", inset && "ui-pl-8", className)} {...props} />);
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem ref={ref} className={cn("ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50", className)} checked={checked} {...props}>
    <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="ui-h-4 ui-w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.RadioItem>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem ref={ref} className={cn("ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50", className)} {...props}>
    <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="ui-h-2 ui-w-2 ui-fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => <ContextMenuPrimitive.Label ref={ref} className={cn("ui-px-2 ui-py-1.5 ui-text-sm ui-font-semibold text-foreground", inset && "ui-pl-8", className)} {...props} />);
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<React.ElementRef<typeof ContextMenuPrimitive.Separator>, React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>>(({ className, ...props }, ref) => <ContextMenuPrimitive.Separator ref={ref} className={cn("ui--mx-1 ui-my-1 ui-h-px bg-border", className)} {...props} />);
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ui-ml-auto ui-text-xs ui-tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup };
