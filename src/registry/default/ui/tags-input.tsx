import * as React from "react"
import { TagsInput as TagsInputPrimitive } from "@ark-ui/react/tags-input"
import { Tags, X } from "lucide-react"

import { cn } from "@/lib/utils"

const TagsInput = TagsInputPrimitive.Root

const TagsInputContext = TagsInputPrimitive.Context

const TagsInputLabel = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof TagsInputPrimitive.Label>
>(({ className, ...props }, ref) => (
  <TagsInputPrimitive.Label
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
TagsInputLabel.displayName = TagsInputPrimitive.Label.displayName

const TagsInputControl = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.Control>,
  React.ComponentPropsWithoutRef<typeof TagsInputPrimitive.Control>
>(({ className, ...props }, ref) => (
  <TagsInputPrimitive.Control
    ref={ref}
    className={cn(
      "flex w-full flex-wrap items-center gap-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[focus]:outline-none data-[focus]:ring-2 data-[focus]:ring-ring data-[focus]:ring-offset-2",
      className
    )}
    {...props}
  />
))
TagsInputControl.displayName = TagsInputPrimitive.Control.displayName

const TagsInputItem = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof TagsInputPrimitive.Item>
>(({ className, value, ...props }, ref) => (
  <TagsInputPrimitive.Item ref={ref} value={value} {...props}>
    <TagsInputPrimitive.ItemPreview
      ref={ref}
      className={cn(
        "[hidden]:hidden inline-flex h-6 items-center gap-1 rounded-sm border border-input pl-2 pr-1",
        className
      )}
    >
      <TagsInputPrimitive.ItemText>{value}</TagsInputPrimitive.ItemText>
      <TagsInputPrimitive.ItemDeleteTrigger>
        <X className="h-4 w-4" />
      </TagsInputPrimitive.ItemDeleteTrigger>
    </TagsInputPrimitive.ItemPreview>
    <TagsInputPrimitive.ItemInput className="bg-transparent outline-none" />
  </TagsInputPrimitive.Item>
))
TagsInputItem.displayName = TagsInputPrimitive.Item.displayName

const TagsInputInput = React.forwardRef<
  React.ElementRef<typeof TagsInputPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof TagsInputPrimitive.Input>
>(({ className, ...props }, ref) => (
  <TagsInputPrimitive.Input
    ref={ref}
    className={cn(
      "text-md flex-1 bg-transparent px-1 placeholder:text-muted-foreground focus:outline-none",
      className
    )}
    {...props}
  />
))
TagsInputInput.displayName = TagsInputPrimitive.Input.displayName

const TagsInputClearTrigger = TagsInputPrimitive.ClearTrigger

export {
  TagsInput,
  TagsInputContext,
  TagsInputLabel,
  TagsInputControl,
  TagsInputItem,
  TagsInputInput,
  TagsInputClearTrigger,
}
