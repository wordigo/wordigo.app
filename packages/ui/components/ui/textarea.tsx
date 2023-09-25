import { cn } from "@wordigo/ui/lib/utils";
import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return <textarea className={cn("ui-flex min-h-[80px] ui-w-full ui-rounded-md ui-border border-input ui-bg-transparent ui-px-3 ui-py-2 ui-text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-offset-2 focus-visible:ring-ring disabled:ui-cursor-not-allowed disabled:ui-opacity-50", className)} ref={ref} {...props} />;
});
Textarea.displayName = "Textarea";

export { Textarea };
