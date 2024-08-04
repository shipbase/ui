"use client"

import * as React from "react"

import { Portal } from "@ark-ui/react/portal"
import { Select as SelectPrimitive } from "@ark-ui/react/select"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Root
    ref={ref}
    className={cn("w-[200px] space-y-2", className)}
    {...props}
  />
))
Select.displayName = "Select"

const SelectContext = SelectPrimitive.Context

const SelectControl = SelectPrimitive.Control

const SelectValueText = SelectPrimitive.ValueText

const SelectClearTrigger = SelectPrimitive.ClearTrigger

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 opacity-50" />
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("font-semibold text-sm", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <SelectPrimitive.Positioner>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        )}
        {...props}
      />
    </SelectPrimitive.Positioner>
  </Portal>
))

const SelectItemGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemGroup>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemGroup>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ItemGroup
    ref={ref}
    className={cn("overflow-hidden p-1 text-foreground", className)}
    {...props}
  />
))

const SelectItemGroupLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemGroupLabel>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemGroupLabel>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ItemGroupLabel
    ref={ref}
    className={cn("py-1.5 pr-2 pl-8 font-semibold text-sm", className)}
    {...props}
  />
))

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export {
  Select,
  SelectClearTrigger,
  SelectContent,
  SelectContext,
  SelectControl,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
}

export type {
  SelectHighlightChangeDetails,
  SelectOpenChangeDetails,
  SelectValueChangeDetails,
} from "@ark-ui/react/select"
