"use client"

import * as React from "react"

import { HoverCard as HoverCardPrimitive } from "@ark-ui/react/hover-card"
import { Portal } from "@ark-ui/react/portal"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardArrow = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  HoverCardPrimitive.ArrowProps
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Arrow>
    <HoverCardPrimitive.ArrowTip
      ref={ref}
      className={cn("border-t-[1px] border-l-[1px]", className)}
      {...props}
    />
  </HoverCardPrimitive.Arrow>
))
HoverCardArrow.displayName = "HoverCardArrow"

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <Portal>
    <HoverCardPrimitive.Positioner>
      <HoverCardPrimitive.Content
        ref={ref}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 relative z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Positioner>
  </Portal>
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardArrow, HoverCardContent, HoverCardTrigger }
