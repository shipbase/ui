"use client"

import * as React from "react"

import { Checkbox as CheckboxPrimitive } from "@ark-ui/react/checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const CheckboxProvider = CheckboxPrimitive.RootProvider

const Checkbox = CheckboxPrimitive.Root

const CheckboxContext = CheckboxPrimitive.Context

const CheckboxControl = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Control>,
  CheckboxPrimitive.ControlProps
>(({ className, children, ...props }, ref) => (
  <>
    <CheckboxPrimitive.Control
      ref={ref}
      className={cn(
        "peer flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-primary text-current ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Control>
    <CheckboxPrimitive.HiddenInput />
  </>
))
const CheckboxLabel = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Label>,
  CheckboxPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Label
    ref={ref}
    className={cn(
      "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
      className
    )}
    {...props}
  />
))

export {
  Checkbox,
  CheckboxContext,
  CheckboxControl,
  CheckboxLabel,
  CheckboxProvider,
}
