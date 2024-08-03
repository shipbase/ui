import { Switch as SwitchPrimitive } from "@ark-ui/react/switch"
import * as React from "react"

import { cn } from "@/lib/utils"

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb>
>(({ className, children, ...props }, ref) => (
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
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Control>
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
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Label>
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
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
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

export { Switch, SwitchControl, SwitchLabel, SwitchThumb }
