"use client"

import * as React from "react"

import {
  type CollectionItem,
  Combobox as ComboboxPrimitive,
  type ComboboxRootProps,
} from "@ark-ui/react/combobox"
import { Portal } from "@ark-ui/react/portal"

import { cn } from "@/lib/utils"

const ComboboxContext = ComboboxPrimitive.Context

const ComboboxItemContext = ComboboxPrimitive.ItemContext

const ComboboxControl = ComboboxPrimitive.Control

const ComboboxItemText = ComboboxPrimitive.ItemText

const ComboboxItemIndicator = ComboboxPrimitive.ItemIndicator

const ComboboxTrigger = ComboboxPrimitive.Trigger

const ComboboxClearTrigger = ComboboxPrimitive.ClearTrigger

const ComboboxList = ComboboxPrimitive.List

const Combobox = React.forwardRef(
  <T extends CollectionItem>(
    { className, ...props }: ComboboxRootProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <ComboboxPrimitive.Root
      ref={ref}
      className={cn("w-[200px] space-y-2", className)}
      {...props}
    />
  )
) as <T extends CollectionItem>(
  props: ComboboxRootProps<T> &
    React.RefAttributes<React.ElementRef<typeof ComboboxPrimitive.Root>>
) => JSX.Element

const ComboboxInput = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Input>,
  ComboboxPrimitive.InputProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Input
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
))

const ComboboxLabel = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Label>,
  ComboboxPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Label
    ref={ref}
    className={cn(
      "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))

const ComboboxPortal = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Positioner>,
  ComboboxPrimitive.PositionerProps
>((props, ref) => (
  <Portal>
    <ComboboxPrimitive.Positioner ref={ref} {...props} />
  </Portal>
))

const ComboboxContent = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Content>,
  ComboboxPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
))

const ComboboxItemGroup = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.ItemGroup>,
  ComboboxPrimitive.ItemGroupProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.ItemGroup
    ref={ref}
    className={cn("overflow-hidden p-1 text-foreground", className)}
    {...props}
  />
))

const ComboboxItemGroupLabel = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.ItemGroupLabel>,
  ComboboxPrimitive.ItemGroupLabelProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.ItemGroupLabel
    ref={ref}
    className={cn(
      "px-2 py-1.5 font-medium text-muted-foreground text-xs",
      className
    )}
    {...props}
  />
))

const ComboboxItem = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Item>,
  ComboboxPrimitive.ItemProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:cursor-not-allowed data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

export {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxContext,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemContext,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxList,
  ComboboxPortal,
  ComboboxTrigger,
}

export type {
  ComboboxHighlightChangeDetails,
  ComboboxInputValueChangeDetails,
  ComboboxOpenChangeDetails,
  ComboboxValueChangeDetails,
} from "@ark-ui/react/combobox"

export {
  createListCollection,
  type CollectionItem,
  type ListCollection,
} from "@ark-ui/react/combobox"
