"use client"

import * as React from "react"

import { HoverCard as HoverCardPrimitive } from "@ark-ui/react/hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardArrow = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  HoverCardPrimitive.ArrowProps
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Arrow
    ref={ref}
    className={cn(
      "[--arrow-background:var(--popover)] [--arrow-size:calc(var(--spacing)*2)]",
      className
    )}
    {...props}
  >
    <HoverCardPrimitive.ArrowTip className="border-t border-l" />
  </HoverCardPrimitive.Arrow>
))

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Positioner>
    <HoverCardPrimitive.Content
      ref={ref}
      className={cn(
        "group data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  </HoverCardPrimitive.Positioner>
))

const HoverCardContext = HoverCardPrimitive.Context

const HoverCardRootProvider = HoverCardPrimitive.RootProvider

const HoverCardTrigger = HoverCardPrimitive.Trigger

export {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardContext,
  HoverCardRootProvider,
  HoverCardTrigger,
}

export {
  useHoverCard,
  useHoverCardContext,
  type HoverCardOpenChangeDetails,
} from "@ark-ui/react/hover-card"
