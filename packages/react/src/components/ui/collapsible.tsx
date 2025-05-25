"use client"

import * as React from "react"

import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible"

import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleProvider = CollapsiblePrimitive.RootProvider

const CollapsibleContext = CollapsiblePrimitive.Context

const CollapsibleTrigger = CollapsiblePrimitive.Trigger

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsiblePrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down",
      className
    )}
    {...props}
  />
))

export {
  Collapsible,
  CollapsibleContent,
  CollapsibleContext,
  CollapsibleProvider,
  CollapsibleTrigger,
}
