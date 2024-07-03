import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@ark-ui/react/tooltip"

import { cn } from "@/lib/utils"

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipPositioner = TooltipPrimitive.Positioner

const TooltipContext = TooltipPrimitive.Context

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow>
    <TooltipPrimitive.ArrowTip
      ref={ref}
      className={cn("border-l-[1px] border-t-[1px]", className)}
      {...props}
    />
  </TooltipPrimitive.Arrow>
))
TooltipArrow.displayName = "TooltipPrimitiveArrow"

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentProps<typeof TooltipPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TooltipPositioner>
    <TooltipPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        className
      )}
      {...props}
    />
  </TooltipPositioner>
))

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipContext,
  TooltipPositioner,
  TooltipTrigger,
}
