"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@wordigo/ui/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={cn("ui-border-b", className)} {...props} />);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="ui-flex">
    <AccordionPrimitive.Trigger ref={ref} className={cn("ui-flex ui-flex-1 ui-items-center ui-justify-between ui-py-4 ui-font-medium ui-transition-all hover:ui-underline [&[data-state=open]>svg]:ui-rotate-180", className)} {...props}>
      {children}
      <ChevronDown className="ui-h-4 ui-w-4 shrink-0 ui-transition-transform ui-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className={cn("ui-overflow-hidden ui-text-sm ui-transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", className)} {...props}>
    <div className="ui-pb-4 ui-pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
