import { cn } from "@wordigo/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const alertVariants = cva("ui-relative ui-w-full ui-rounded-lg ui-border ui-p-4 [&:has(svg)]:ui-pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:ui-absolute [&>svg]:ui-left-4 [&>svg]:ui-top-4 [&>svg]:text-foreground", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>>(({ className, variant, ...props }, ref) => <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h5 ref={ref} className={cn("ui-mb-1 ui-font-medium ui-leading-none ui-tracking-tight", className)} {...props} />);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn("ui-text-sm [&_p]:ui-leading-relaxed", className)} {...props} />);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
