"use client"

import * as React from "react"

import { Switch as SwitchPrimitive } from "@ark-ui/react/switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchPrimitive.RootProps
>(({ className, children, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </SwitchPrimitive.Root>
))

const SwitchContext = SwitchPrimitive.Context

const SwitchControl = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Control>,
  SwitchPrimitive.ControlProps
>(({ className, children, ...props }, ref) => (
  <SwitchPrimitive.Control
    ref={ref}
    className={cn(
      "inline-flex h-6 w-10 shrink-0 items-center rounded-full border-2 border-transparent outline-none transition-all focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
  >
    {children}
    <SwitchPrimitive.HiddenInput />
  </SwitchPrimitive.Control>
))

const SwitchLabel = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Label>,
  SwitchPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

const SwitchRootProvider = SwitchPrimitive.RootProvider

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Thumb>,
  SwitchPrimitive.ThumbProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Thumb
    ref={ref}
    className={cn(
      "data-[state=checked]:rtl:-translate-x-4 pointer-events-none block size-5 rounded-full bg-background shadow-xs ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      className
    )}
    {...props}
  />
))

export {
  Switch,
  SwitchContext,
  SwitchControl,
  SwitchLabel,
  SwitchRootProvider,
  SwitchThumb,
}

export {
  useSwitch,
  useSwitchContext,
  type SwitchCheckedChangeDetails,
} from "@ark-ui/react/switch"
