"use client";

import { Accordion as AccordionPrimitive } from "@ark-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@coss/ui/lib/utils";

type AccordionCompatProps = AccordionPrimitive.RootProps & {
  onValueChange?: (value: unknown) => void;
};

function Accordion({ onValueChange, ...props }: AccordionCompatProps) {
  return (
    <AccordionPrimitive.Root
      onValueChange={(details) => onValueChange?.(details.value)}
      {...props}
    />
  );
}

const AccordionContext = AccordionPrimitive.Context;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionPrimitive.ItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    className={cn("border-b last:border-b-0", className)}
    ref={ref}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionItemContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.ItemContent>,
  AccordionPrimitive.ItemContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemContent
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    <div className={cn("pt-0 pb-4", className)}>{children}</div>
  </AccordionPrimitive.ItemContent>
));
AccordionItemContent.displayName = "AccordionItemContent";

const AccordionItemContext = AccordionPrimitive.ItemContext;

const AccordionItemTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.ItemTrigger>,
  AccordionPrimitive.ItemTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemTrigger
    className={cn(
      "flex w-full flex-1 items-center justify-between gap-4 rounded-md py-4 text-left font-semibold text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <AccordionPrimitive.ItemIndicator className="[&[data-state=open]>svg]:rotate-180">
      <ChevronDown className="pointer-events-none size-4 shrink-0 opacity-60 transition-transform duration-200" />
    </AccordionPrimitive.ItemIndicator>
  </AccordionPrimitive.ItemTrigger>
));
AccordionItemTrigger.displayName = "AccordionItemTrigger";

const AccordionTrigger = AccordionItemTrigger;
const AccordionPanel = AccordionItemContent;

export {
  Accordion,
  AccordionContext,
  AccordionItem,
  AccordionItemContent,
  AccordionItemContext,
  AccordionItemTrigger,
  AccordionTrigger,
  AccordionPanel,
  AccordionPanel as AccordionContent,
};
