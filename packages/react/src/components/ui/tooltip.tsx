"use client"

import * as React from "react"

import { Tooltip as TooltipPrimitive } from "@ark-ui/react/tooltip"

import { cn } from "@/lib/utils"

const Tooltip = TooltipPrimitive.Root

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  TooltipPrimitive.ArrowProps
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn(
      "[--arrow-background:var(--popover)] [--arrow-size:calc(var(--spacing)*2)]",
      className
    )}
    {...props}
  >
    <TooltipPrimitive.ArrowTip className="border-t border-l" />
  </TooltipPrimitive.Arrow>
))

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentProps<typeof TooltipPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Positioner>
    <TooltipPrimitive.Content
      ref={ref}
      className={cn(
        "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-w-70 animate-in rounded-md border bg-popover px-3 py-1.5 text-popover-foreground text-sm data-[state=closed]:animate-out",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Positioner>
))

const TooltipContext = TooltipPrimitive.Context

const TooltipRootProvider = TooltipPrimitive.RootProvider

const TooltipTrigger = TooltipPrimitive.Trigger

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipContext,
  TooltipRootProvider,
  TooltipTrigger,
}

export {
  useTooltip,
  useTooltipContext,
  type TooltipOpenChangeDetails,
} from "@ark-ui/react/tooltip"
