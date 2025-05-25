"use client"

import * as React from "react"

import { Accordion as AccordionPrimitive } from "@ark-ui/react/accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionContext = AccordionPrimitive.Context

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionPrimitive.ItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b last:border-b-0", className)}
    {...props}
  />
))

const AccordionItemContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.ItemContent>,
  AccordionPrimitive.ItemContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemContent
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pt-0 pb-4", className)}>{children}</div>
  </AccordionPrimitive.ItemContent>
))

const AccordionItemContext = AccordionPrimitive.ItemContext

const AccordionItemTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.ItemTrigger>,
  AccordionPrimitive.ItemTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemTrigger
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left font-semibold text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
      className
    )}
    {...props}
  >
    {children}
    <AccordionPrimitive.ItemIndicator>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.ItemIndicator>
  </AccordionPrimitive.ItemTrigger>
))

const AccordionProvider = AccordionPrimitive.RootProvider

export {
  Accordion,
  AccordionContext,
  AccordionItem,
  AccordionItemContent,
  AccordionItemContext,
  AccordionItemTrigger,
  AccordionProvider,
}
