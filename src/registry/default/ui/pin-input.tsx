import * as React from "react"
import { PinInput as PinInputPrimitive } from "@ark-ui/react/pin-input"

import { cn } from "@/lib/utils"

const PinInput = PinInputPrimitive.Root

const PinInputHiddenInput = PinInputPrimitive.HiddenInput

const PinInputContext = PinInputPrimitive.Context

const PinInputLabel = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof PinInputPrimitive.Label>
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Label
    className={cn(
      "text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
      className
    )}
    ref={ref}
    {...props}
  />
))

const PinInputControl = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Control>,
  React.ComponentPropsWithoutRef<typeof PinInputPrimitive.Control>
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Control
    className={cn("relative flex items-center gap-2", className)}
    ref={ref}
    {...props}
  />
))

const PinInputInput = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof PinInputPrimitive.Input>
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Input
    className={cn(
      "size-10 rounded-md border border-input text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
))

export {
  PinInput,
  PinInputContext,
  PinInputControl,
  PinInputHiddenInput,
  PinInputInput,
  PinInputLabel,
}
