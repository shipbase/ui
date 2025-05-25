"use client"

import * as React from "react"

import { PinInput as PinInputPrimitive } from "@ark-ui/react/pin-input"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const PinInput = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Root>,
  PinInputPrimitive.RootProps
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
  PinInputPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Label
    className={cn(
      "font-medium text-sm leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
      className
    )}
    ref={ref}
    {...props}
  />
))

const PinInputControl = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Control>,
  PinInputPrimitive.ControlProps
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Control
    className={cn("flex items-center", className)}
    ref={ref}
    {...props}
  />
))

const PinInputInput = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Input>,
  PinInputPrimitive.InputProps
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Input
    className={cn(
      "size-10 h-10 w-10 border-input border-y border-r text-center text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
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
  <div ref={ref} {...props}>
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
