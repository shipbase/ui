"use client"

import * as React from "react"

import { TagsInput as TagsInputPrimitive } from "@ark-ui/react/tags-input"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const TagsInput = TagsInputPrimitive.Root

const TagsInputClearTrigger = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.ClearTrigger>,
  TagsInputPrimitive.ClearTriggerProps
>(({ className, ...props }, ref) => (
  <TagsInputPrimitive.ClearTrigger
    ref={ref}
    className={cn(
      "absolute end-0 top-0 flex size-9 items-center justify-center rounded-md border border-transparent text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      className
    )}
    {...props}
  >
    <XIcon size={14} aria-hidden="true" />
  </TagsInputPrimitive.ClearTrigger>
))

const TagsInputContext = TagsInputPrimitive.Context

const TagsInputControl = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.Control>,
  TagsInputPrimitive.ControlProps
>(({ className, children, ...props }, ref) => (
  <TagsInputContext>
    {(context) => (
      <TagsInputPrimitive.Control
        ref={ref}
        className={cn(
          "relative min-h-[38px] rounded-md border border-input text-sm outline-none transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-aria-invalid:border-destructive has-data-[part=clear-trigger]:pe-9 has-disabled:opacity-50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
          {
            "p-1": !context.empty,
          },
          className
        )}
        {...props}
      >
        <div className="flex flex-wrap gap-1">{children}</div>
        <TagsInputPrimitive.HiddenInput />
      </TagsInputPrimitive.Control>
    )}
  </TagsInputContext>
))

const TagsInputInput = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.Input>,
  TagsInputPrimitive.InputProps
>(({ className, ...props }, ref) => (
  <TagsInputContext>
    {(context) => (
      <TagsInputPrimitive.Input
        ref={ref}
        className={cn(
          "flex-1 bg-transparent outline-hidden placeholder:text-muted-foreground/70 disabled:cursor-not-allowed",
          {
            "px-3 py-2": context.empty,
            "ml-1 h-7": !context.empty,
          },
          className
        )}
        {...props}
      />
    )}
  </TagsInputContext>
))

const TagsInputItem = TagsInputPrimitive.Item

const TagsInputItemDeleteTrigger = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.ItemDeleteTrigger>,
  TagsInputPrimitive.ItemDeleteTriggerProps
>(({ className, ...props }, ref) => (
  <TagsInputPrimitive.ItemDeleteTrigger
    ref={ref}
    className={cn(
      "-inset-y-px -end-px absolute flex size-7 items-center justify-center rounded-e-md border border-transparent p-0 text-muted-foreground/80 outline-none outline-hidden transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      className
    )}
    {...props}
  >
    <XIcon size={14} aria-hidden="true" />
  </TagsInputPrimitive.ItemDeleteTrigger>
))

const TagsInputItemInput = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.ItemInput>,
  TagsInputPrimitive.ItemInputProps
>(({ className, ...props }, ref) => (
  <TagsInputPrimitive.ItemInput
    ref={ref}
    className={cn(
      "h-7 flex-1 bg-transparent outline-hidden placeholder:text-muted-foreground/70 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  />
))

const TagsInputItemPreview = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.ItemPreview>,
  TagsInputPrimitive.ItemPreviewProps
>(({ className, ...props }, ref) => (
  <TagsInputPrimitive.ItemPreview
    ref={ref}
    className={cn(
      "relative inline-flex h-7 animate-fadeIn cursor-default items-center rounded-md border bg-background ps-2 pe-7 pl-2 font-medium text-secondary-foreground text-xs transition-all hover:bg-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-fixed:pe-2",
      className
    )}
    {...props}
  />
))

const TagsInputItemText = TagsInputPrimitive.ItemText

const TagsInputLabel = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.Label>,
  TagsInputPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <TagsInputPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

export {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputLabel,
}

export {
  useTagsInput,
  useTagsInputContext,
  useTagsInputItemContext,
  type TagsInputHighlightChangeDetails,
  type TagsInputValidityChangeDetails,
  type TagsInputValueChangeDetails,
} from "@ark-ui/react/tags-input"
