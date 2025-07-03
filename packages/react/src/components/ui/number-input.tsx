"use client"

import * as React from "react"

import { NumberInput as NumberInputPrimitive } from "@ark-ui/react/number-input"

import { cn } from "@/lib/utils"

const NumberInput = NumberInputPrimitive.Root

const NumberInputControl = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.Control>,
  NumberInputPrimitive.ControlProps
>(({ className, ...props }, ref) => (
  <NumberInputPrimitive.Control
    ref={ref}
    className={cn(
      "relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border border-input text-sm shadow-xs outline-none transition-[color,box-shadow] data-focus:border-ring data-disabled:opacity-50 data-focus:ring-[3px] data-focus:ring-ring/50 data-focus:has-aria-invalid:border-destructive data-focus:has-aria-invalid:ring-destructive/20 dark:data-focus:has-aria-invalid:ring-destructive/40",
      className
    )}
    {...props}
  />
))

const NumberInputIncrementTrigger = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.IncrementTrigger>,
  NumberInputPrimitive.IncrementTriggerProps
>(({ className, children, ...props }, ref) => (
  <NumberInputPrimitive.IncrementTrigger
    ref={ref}
    className={cn(
      "-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </NumberInputPrimitive.IncrementTrigger>
))

const NumberInputDecrementTrigger = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.DecrementTrigger>,
  NumberInputPrimitive.DecrementTriggerProps
>(({ className, children, ...props }, ref) => (
  <NumberInputPrimitive.DecrementTrigger
    ref={ref}
    className={cn(
      "-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </NumberInputPrimitive.DecrementTrigger>
))

const NumberInputInput = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.Input>,
  NumberInputPrimitive.InputProps
>(({ className, ...props }, ref) => (
  <NumberInputPrimitive.Input
    ref={ref}
    className={cn(
      "flex-1 bg-background px-3 py-2 text-foreground tabular-nums",
      className
    )}
    {...props}
  />
))

const NumberInputLabel = React.forwardRef<
  React.ElementRef<typeof NumberInputPrimitive.Label>,
  NumberInputPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <NumberInputPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

export {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
}
