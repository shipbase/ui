"use client"

import * as React from "react"

import { Checkbox as CheckboxPrimitive } from "@ark-ui/react/checkbox"
import { CheckIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

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
        "peer flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-500 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="grid place-content-center text-current"
        indeterminate
      >
        <MinusIcon className="size-4" />
      </CheckboxPrimitive.Indicator>
      <CheckboxPrimitive.Indicator className="grid place-content-center text-current">
        <CheckIcon className="size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Control>
    <CheckboxPrimitive.HiddenInput />
  </>
))

const CheckboxGroup = CheckboxPrimitive.Group

const CheckboxLabel = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Label>,
  CheckboxPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

export {
  Checkbox,
  CheckboxContext,
  CheckboxControl,
  CheckboxGroup,
  CheckboxLabel,
}
