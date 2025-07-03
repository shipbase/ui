"use client"

import * as React from "react"

import { Combobox as ComboboxPrimitive } from "@ark-ui/react/combobox"
import { Portal } from "@ark-ui/react/portal"

import { cn } from "@/lib/utils"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

const Combobox = React.forwardRef(
  <T extends ComboboxPrimitive.CollectionItem>(
    props: ComboboxPrimitive.RootProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => <ComboboxPrimitive.Root ref={ref} {...props} />
) as <T extends ComboboxPrimitive.CollectionItem>(
  props: ComboboxPrimitive.RootProps<T> &
    React.RefAttributes<React.ElementRef<typeof ComboboxPrimitive.Root>>
) => JSX.Element

const ComboboxClearTrigger = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.ClearTrigger>,
  ComboboxPrimitive.ClearTriggerProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.ClearTrigger
    ref={ref}
    className={cn(
      "absolute end-0 top-0 flex size-9 items-center justify-center rounded-md border border-transparent text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      className
    )}
    {...props}
  />
))

const ComboboxContent = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Content>,
  ComboboxPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <Portal>
    <ComboboxPrimitive.Positioner>
      <ComboboxPrimitive.Content
        ref={ref}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[placement=left]:-translate-x-1 data-[placement=top]:-translate-y-1 relative z-50 max-h-[min(24rem,var(--available-height))] w-full min-w-32 overflow-hidden rounded-md border border-input bg-popover text-popover-foreground shadow-lg data-[placement=right]:translate-x-1 data-[placement=bottom]:translate-y-1 data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        )}
        {...props}
      />
    </ComboboxPrimitive.Positioner>
  </Portal>
))

const ComboboxContext = ComboboxPrimitive.Context

const ComboboxControl = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Control>,
  ComboboxPrimitive.ControlProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Control
    ref={ref}
    className={cn(
      "relative flex min-h-[38px] rounded-md border border-input px-3 py-2 text-sm outline-none transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-aria-invalid:border-destructive has-disabled:opacity-50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
      className
    )}
    {...props}
  />
))

const ComboboxInput = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Input>,
  ComboboxPrimitive.InputProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Input
    ref={ref}
    className={cn(
      "flex-1 bg-transparent outline-none outline-hidden placeholder:text-muted-foreground/70 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  />
))

const ComboboxItem = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Item>,
  ComboboxPrimitive.ItemProps
>(({ className, children, ...props }, ref) => (
  <ComboboxPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded py-1.5 ps-8 pe-2 text-sm outline-hidden data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute start-2 flex size-3.5 items-center justify-center">
      <ComboboxPrimitive.ItemIndicator>
        <CheckIcon size={16} />
      </ComboboxPrimitive.ItemIndicator>
    </span>
    <ComboboxPrimitive.ItemText>{children}</ComboboxPrimitive.ItemText>
  </ComboboxPrimitive.Item>
))

const ComboboxItemContext = ComboboxPrimitive.ItemContext

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

const ComboboxItemText = ComboboxPrimitive.ItemText

const ComboboxLabel = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Label>,
  ComboboxPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

const ComboboxList = ComboboxPrimitive.List

const ComboboxTrigger = React.forwardRef<
  React.ElementRef<typeof ComboboxPrimitive.Trigger>,
  ComboboxPrimitive.TriggerProps
>(({ className, ...props }, ref) => (
  <ComboboxPrimitive.Trigger ref={ref} className={cn(className)} {...props}>
    <ChevronsUpDownIcon className="size-4 shrink-0 in-aria-invalid:text-destructive/80 text-muted-foreground/80" />
  </ComboboxPrimitive.Trigger>
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
  ComboboxItemText,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
}

export {
  createListCollection,
  useCombobox,
  type CollectionItem,
  type ComboboxHighlightChangeDetails,
  type ComboboxInputValueChangeDetails,
  type ComboboxOpenChangeDetails,
  type ComboboxValueChangeDetails,
  type ListCollection,
} from "@ark-ui/react/combobox"
