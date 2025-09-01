"use client"

import * as React from "react"

import { type HTMLArkProps, ark } from "@ark-ui/react/factory"
import {
  PinInput as PinInputPrimitive,
  pinInputAnatomy,
} from "@ark-ui/react/pin-input"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const parts = pinInputAnatomy.extendWith("group", "separator").build()

const PinInput = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Root>,
  PinInputPrimitive.RootProps
>(({ children, ...props }, ref) => (
  <PinInputPrimitive.Root ref={ref} {...props}>
    {children}
    <PinInputPrimitive.HiddenInput />
  </PinInputPrimitive.Root>
))
PinInput.displayName = "PinInput"

const PinInputContext = PinInputPrimitive.Context

const PinInputControl = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Control>,
  PinInputPrimitive.ControlProps
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Control
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
))
PinInputControl.displayName = "PinInputControl"

const PinInputGroup = React.forwardRef<
  React.ElementRef<"div">,
  HTMLArkProps<"div">
>(({ className, ...props }, ref) => (
  <ark.div
    ref={ref}
    {...parts.group.attrs}
    className={cn("flex items-center", className)}
    {...props}
  />
))
PinInputGroup.displayName = "PinInputGroup"

const PinInputInput = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Input>,
  PinInputPrimitive.InputProps
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Input
    ref={ref}
    className={cn(
      "relative h-9 w-9 border-input border-y border-r text-center text-sm shadow-xs outline-none transition-all placeholder:text-center placeholder:text-muted-foreground/70 first:rounded-l-md first:border-l last:rounded-r-md dark:bg-input/30",
      "focus-visible:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      "aria-invalid:border-destructive focus-visible:aria-invalid:ring-destructive/20 dark:focus-visible:aria-invalid:ring-destructive/40",
      className
    )}
    {...props}
  />
))
PinInputInput.displayName = "PinInputInput"

const PinInputLabel = React.forwardRef<
  React.ElementRef<typeof PinInputPrimitive.Label>,
  PinInputPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <PinInputPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))
PinInputLabel.displayName = "PinInputLabel"

const PinInputSeparator = React.forwardRef<
  React.ElementRef<"div">,
  HTMLArkProps<"div">
>((props, ref) => (
  <ark.div ref={ref} {...parts.separator.attrs} {...props}>
    <MinusIcon />
  </ark.div>
))
PinInputSeparator.displayName = "PinInputSeparator"

export {
  PinInput,
  PinInputContext,
  PinInputControl,
  PinInputGroup,
  PinInputInput,
  PinInputLabel,
  PinInputSeparator,
}
