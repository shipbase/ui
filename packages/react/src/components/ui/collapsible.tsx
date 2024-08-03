"use client"

import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible"
import * as React from "react"

import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleContext = CollapsiblePrimitive.Context

const CollapsibleTrigger = CollapsiblePrimitive.Trigger

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden transition-all data-[state=closed]:animate-collapse-out data-[state=open]:animate-collapse-in",
      className
    )}
    {...props}
  />
))

export {
  Collapsible,
  CollapsibleContent,
  CollapsibleContext,
  CollapsibleTrigger,
}