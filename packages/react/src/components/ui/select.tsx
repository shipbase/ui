"use client"

import * as React from "react"

import { Portal } from "@ark-ui/react/portal"
import { Select as SelectPrimitive, selectAnatomy } from "@ark-ui/react/select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  type HTMLProps,
  type PolymorphicProps,
  ark,
} from "@ark-ui/react/factory"

const parts = selectAnatomy.extendWith("separator").build()

const Select = React.forwardRef(
  <T extends SelectPrimitive.CollectionItem>(
    props: SelectPrimitive.RootProps<T>,
    ref: React.Ref<HTMLDivElement>
  ) => <SelectPrimitive.Root ref={ref} {...props} />
) as <T extends SelectPrimitive.CollectionItem>(
  props: SelectPrimitive.RootProps<T> &
    React.RefAttributes<React.ElementRef<typeof SelectPrimitive.Root>>
) => JSX.Element

const SelectClearTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ClearTrigger>,
  SelectPrimitive.ClearTriggerProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ClearTrigger
    ref={ref}
    className={cn(
      "absolute end-0 top-0 flex size-9 items-center justify-center rounded-md border border-transparent text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      className
    )}
    {...props}
  />
))

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <Portal>
    <SelectPrimitive.Positioner>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative w-full min-w-32 overflow-hidden rounded-md border border-input bg-popover p-1 text-popover-foreground shadow-lg",
          "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=open]:animate-in",
          "data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=left]:-translate-x-1 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[placement=top]:-translate-y-1 data-[placement=right]:translate-x-1 data-[placement=bottom]:translate-y-1",
          className
        )}
        {...props}
      />
    </SelectPrimitive.Positioner>
  </Portal>
))

const SelectContext = SelectPrimitive.Context

const SelectControl = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Control>,
  SelectPrimitive.ControlProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Control
    ref={ref}
    className={cn(
      "relative flex min-h-[38px] rounded-md border border-input text-sm outline-none transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
      className
    )}
    {...props}
  />
))

const SelectIndicator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Indicator>,
  SelectPrimitive.IndicatorProps
>((props, ref) => (
  <SelectPrimitive.Indicator ref={ref} {...props}>
    <ChevronDownIcon className="size-4 shrink-0 in-aria-invalid:text-destructive/80 text-muted-foreground/80" />
  </SelectPrimitive.Indicator>
))

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectPrimitive.ItemProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded py-1.5 ps-8 pe-2 text-sm outline-hidden data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute start-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon size={16} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

const SelectItemContext = SelectPrimitive.ItemContext

const SelectItemGroup = SelectPrimitive.ItemGroup

const SelectItemGroupLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemGroupLabel>,
  SelectPrimitive.ItemGroupLabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ItemGroupLabel
    ref={ref}
    className={cn(
      "py-1.5 ps-8 pe-2 font-medium text-muted-foreground text-xs",
      className
    )}
    {...props}
  />
))

const SelectItemText = SelectPrimitive.ItemText

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

const SelectList = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.List>,
  SelectPrimitive.ListProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.List
    ref={ref}
    className={cn(
      "max-h-[min(24rem,var(--available-height))] overflow-y-auto",
      className
    )}
    {...props}
  />
))

const SelectRootProvider = SelectPrimitive.RootProvider

const SelectSeparator = React.forwardRef<
  HTMLHRElement,
  PolymorphicProps & HTMLProps<"hr">
>(({ className, ...props }, ref) => (
  <ark.hr
    ref={ref}
    {...parts.separator.attrs}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectPrimitive.TriggerProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-between gap-1 bg-transparent px-3 py-2 outline-none outline-hidden placeholder:text-muted-foreground/70 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 data-[placeholder-shown]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

const SelectValueText = SelectPrimitive.ValueText

export {
  Select,
  SelectClearTrigger,
  SelectContent,
  SelectContext,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemContext,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectRootProvider,
  SelectSeparator,
  SelectTrigger,
  SelectValueText,
}

export {
  createListCollection,
  useSelect,
  type CollectionItem,
  type ListCollection,
  type SelectHighlightChangeDetails,
  type SelectOpenChangeDetails,
  type SelectValueChangeDetails,
} from "@ark-ui/react/select"
