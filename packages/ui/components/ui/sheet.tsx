"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@wordigo/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = ({ className, ...props }: SheetPrimitive.DialogPortalProps) => <SheetPrimitive.Portal className={cn(className)} {...props} />;
SheetPortal.displayName = SheetPrimitive.Portal.displayName;

const SheetOverlay = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>>(({ className, ...props }, ref) => <SheetPrimitive.Overlay className={cn("ui-fixed ui-inset-0 ui-z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} ref={ref} />);
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva("ui-fixed ui-z-50 ui-gap-4 bg-background ui-p-6 ui-shadow-lg ui-transition ui-ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:ui-duration-300 data-[state=open]:ui-duration-500", {
  variants: {
    side: {
      top: "ui-inset-x-0 ui-top-0 ui-border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "ui-inset-x-0 ui-bottom-0 ui-border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "ui-inset-y-0 ui-left-0 ui-h-full ui-w-3/4 ui-border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:ui-max-w-sm",
      right: "ui-inset-y-0 ui-right-0 ui-h-full ui-w-3/4  ui-border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:ui-max-w-sm",
    },
  },
  defaultVariants: {
    side: "right",
  },
});

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      {children}
      <SheetPrimitive.Close className="ui-absolute ui-right-4 ui-top-4 ui-rounded-sm ui-opacity-70 ring-offset-background ui-transition-opacity hover:ui-opacity-100 focus:ui-outline-none focus:ui-ring-2 focus:ring-ring focus:ui-ring-offset-2 disabled:ui-pointer-events-none data-[state=open]:bg-secondary">
        <X className="ui-h-4 ui-w-4" />
        <span className="ui-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("ui-flex ui-flex-col ui-space-y-2 ui-text-center sm:ui-text-left", className)} {...props} />;
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("ui-flex ui-flex-col-reverse sm:ui-flex-row sm:ui-justify-end sm:ui-space-x-2", className)} {...props} />;
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Title>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>>(({ className, ...props }, ref) => <SheetPrimitive.Title ref={ref} className={cn("ui-text-lg ui-font-semibold text-foreground", className)} {...props} />);
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Description>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>>(({ className, ...props }, ref) => <SheetPrimitive.Description ref={ref} className={cn("ui-text-sm text-muted-foreground", className)} {...props} />);
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
