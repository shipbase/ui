"use client"

import * as React from "react"

import { Popover as PopoverPrimitive } from "@ark-ui/react/popover"
import { Portal } from "@ark-ui/react/portal"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  PopoverPrimitive.ArrowProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cn(
      "[--arrow-background:var(--popover)] [--arrow-size:calc(var(--spacing)*2)]",
      className
    )}
    {...props}
  >
    <PopoverPrimitive.ArrowTip className="border-t border-l" />
  </PopoverPrimitive.Arrow>
))

const PopoverCloseTrigger = PopoverPrimitive.CloseTrigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <Portal>
    <PopoverPrimitive.Positioner>
      <PopoverPrimitive.Content
        ref={ref}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Positioner>
  </Portal>
))

const PopoverContext = PopoverPrimitive.Context

const PopoverDescription = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Description>,
  PopoverPrimitive.DescriptionProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
))

const PopoverRootProvider = PopoverPrimitive.RootProvider

const PopoverTitle = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Title>,
  PopoverPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Title
    ref={ref}
    className={cn("font-semibold text-lg leading-none", className)}
    {...props}
  />
))

const PopoverTrigger = PopoverPrimitive.Trigger

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverContext,
  PopoverDescription,
  PopoverRootProvider,
  PopoverTitle,
  PopoverTrigger,
}

export { usePopover } from "@ark-ui/react/popover"
