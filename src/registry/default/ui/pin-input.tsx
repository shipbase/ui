import * as React from "react"
import { PinInput as PinInputPrimitive } from "@ark-ui/react/pin-input"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const PinInput = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof PinInputPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <PinInputPrimitive.Root
    className={cn("max-w-fit", className)}
    ref={ref}
    {...props}
  >
    {children}
    <PinInputPrimitive.HiddenInput />
  </PinInputPrimitive.Root>
))

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
    className={cn("flex items-center", className)}
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
      "size-10 h-10 w-10 border-y border-r border-input text-center text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
))

const PinInputSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
PinInputSeparator.displayName = "PinInputSeparator"

export {
  PinInput,
  PinInputContext,
  PinInputControl,
  PinInputInput,
  PinInputLabel,
  PinInputSeparator,
}
