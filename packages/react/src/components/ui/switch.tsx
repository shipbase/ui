"use client"

import * as React from "react"

import { Switch as SwitchPrimitive } from "@ark-ui/react/switch"

import { cn } from "@/lib/utils"

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Thumb>,
  SwitchPrimitive.ThumbProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Thumb
    ref={ref}
    className={cn(
      "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      className
    )}
    {...props}
  />
))

const SwitchControl = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Control>,
  SwitchPrimitive.ControlProps
>(({ className, children, ...props }, ref) => (
  <SwitchPrimitive.Control
    ref={ref}
    className={cn(
      "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
  >
    <SwitchThumb />
  </SwitchPrimitive.Control>
))

const SwitchLabel = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Label>,
  SwitchPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Label
    ref={ref}
    className={cn(
      "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchPrimitive.RootProps
>(({ className, children, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn("flex items-center space-x-2", className)}
    {...props}
  >
    <SwitchPrimitive.HiddenInput />
    {children}
  </SwitchPrimitive.Root>
))

const SwitchProvider = SwitchPrimitive.RootProvider

const SwitchContext = SwitchPrimitive.Context

const SwitchHiddenInput = SwitchPrimitive.HiddenInput

export {
  Switch,
  SwitchContext,
  SwitchControl,
  SwitchHiddenInput,
  SwitchLabel,
  SwitchProvider,
  SwitchThumb,
}
