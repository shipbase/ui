import * as React from "react"
import { Popover as PopoverPrimitive } from "@ark-ui/react/popover"
import { Portal } from "@ark-ui/react/portal"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <PopoverPrimitive.Positioner>
      <PopoverPrimitive.Content
        ref={ref}
        className={cn(
          "z-50 w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      ></PopoverPrimitive.Content>
    </PopoverPrimitive.Positioner>
  </Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow>
    <PopoverPrimitive.ArrowTip
      ref={ref}
      className={cn("border-l-[1px] border-t-[1px]", className)}
      {...props}
    />
  </PopoverPrimitive.Arrow>
))
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName

const PopoverCloseTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.CloseTrigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.CloseTrigger>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.CloseTrigger
    ref={ref}
    className={cn(
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      className
    )}
    {...props}
  >
    <X className="h-4 w-4" />
    <span className="sr-only">Close</span>
  </PopoverPrimitive.CloseTrigger>
))
PopoverCloseTrigger.displayName = PopoverPrimitive.CloseTrigger.displayName

const PopoverTitle = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Title>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
PopoverTitle.displayName = PopoverPrimitive.Title.displayName

const PopoverDescription = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Description>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
PopoverDescription.displayName = PopoverPrimitive.Description.displayName

export {
  Popover,
  PopoverArrow,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
}
