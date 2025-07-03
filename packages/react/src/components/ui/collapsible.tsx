"use client"

import * as React from "react"

import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible"

import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsiblePrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
      className
    )}
    {...props}
  />
))

const CollapsibleContext = CollapsiblePrimitive.Context

const CollapsibleIndicator = CollapsiblePrimitive.Indicator

const CollapsibleTrigger = CollapsiblePrimitive.Trigger

export {
  Collapsible,
  CollapsibleContent,
  CollapsibleContext,
  CollapsibleIndicator,
  CollapsibleTrigger,
}
