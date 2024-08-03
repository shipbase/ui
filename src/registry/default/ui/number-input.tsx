import { NumberInput as NumberInputPrimitive } from "@ark-ui/react/number-input"
import { ChevronDown, ChevronUp } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

const NumberInput = NumberInputPrimitive.Root

const NumberInputLabel = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof NumberInputPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <NumberInputPrimitive.Label
    ref={ref}
    className={cn(
      "font-medium text-sm leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))

const NumberInputControl = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.Control>,
  React.ComponentPropsWithoutRef<typeof NumberInputPrimitive.Control>
>(({ className, ...props }, ref) => (
  <NumberInputPrimitive.Control
    ref={ref}
    className={cn("relative", className)}
    {...props}
  />
))

const NumberInputInput = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof NumberInputPrimitive.Input>
>(({ className, ...props }, ref) => (
  <NumberInputPrimitive.Input
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background py-2 pr-6 pl-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
))

const NumberInputIncrementTrigger = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.IncrementTrigger>,
  React.ComponentPropsWithoutRef<typeof NumberInputPrimitive.IncrementTrigger>
>(({ className, ...props }, ref) => (
  <NumberInputPrimitive.IncrementTrigger
    ref={ref}
    className={cn(
      "absolute top-1 right-2 inline-flex cursor-pointer items-center justify-center",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </NumberInputPrimitive.IncrementTrigger>
))

const NumberInputDecrementTrigger = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.DecrementTrigger>,
  React.ComponentPropsWithoutRef<typeof NumberInputPrimitive.DecrementTrigger>
>(({ className, ...props }, ref) => (
  <NumberInputPrimitive.DecrementTrigger
    ref={ref}
    className={cn(
      "absolute right-2 bottom-1 inline-flex cursor-pointer items-center justify-center",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </NumberInputPrimitive.DecrementTrigger>
))

export {
  NumberInput,
  NumberInputLabel,
  NumberInputInput,
  NumberInputControl,
  NumberInputIncrementTrigger,
  NumberInputDecrementTrigger,
}
