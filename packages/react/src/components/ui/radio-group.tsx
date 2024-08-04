"use client"

import * as React from "react"

import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/react/radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("grid gap-2", className)}
    {...props}
  />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupLabel = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Label>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Label
    ref={ref}
    className={cn(
      "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
RadioGroupLabel.displayName = RadioGroupPrimitive.Label.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn("flex items-center space-x-2", className)}
    {...props}
  >
    <RadioGroupPrimitive.ItemHiddenInput />
    {children}
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioGroupItemText = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.ItemText>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.ItemText>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.ItemText
    ref={ref}
    className={cn(
      "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))
RadioGroupItemText.displayName = RadioGroupPrimitive.ItemText.displayName

const RadioGroupItemControl = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.ItemControl>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.ItemControl>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.ItemControl
    ref={ref}
    className={cn(
      "flex aspect-square h-4 w-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 *:data-[state=checked]:block",
      className
    )}
    {...props}
  >
    <Circle className="hidden h-2.5 w-2.5 fill-current text-current" />
  </RadioGroupPrimitive.ItemControl>
))
RadioGroupItemControl.displayName = RadioGroupPrimitive.ItemControl.displayName

export {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
}
