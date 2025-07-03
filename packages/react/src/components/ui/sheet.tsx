"use client"

import * as React from "react"

import { Dialog as SheetPrimitive, dialogAnatomy } from "@ark-ui/react/dialog"
import {
  type HTMLProps,
  type PolymorphicProps,
  ark,
} from "@ark-ui/react/factory"
import { Portal } from "@ark-ui/react/portal"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const sheetAnatomy = dialogAnatomy.rename("sheet")
const parts = sheetAnatomy.extendWith("header").build()

const Sheet = SheetPrimitive.Root

const SheetBackdrop = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Backdrop>,
  SheetPrimitive.BackdropProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Backdrop
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
))

const SheetCloseTrigger = SheetPrimitive.CloseTrigger

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetPrimitive.ContentProps & {
    side?: "top" | "right" | "bottom" | "left"
  }
>(({ className, children, side = "right", ...props }, ref) => (
  <Portal>
    <SheetBackdrop />
    <SheetPrimitive.Positioner>
      <SheetPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.CloseTrigger className="group absolute top-3 right-3 flex size-7 items-center justify-center rounded outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none">
          <XIcon className="size-4 opacity-60 transition-opacity group-hover:opacity-100" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.CloseTrigger>
      </SheetPrimitive.Content>
    </SheetPrimitive.Positioner>
  </Portal>
))

const SheetContext = SheetPrimitive.Context

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  SheetPrimitive.DescriptionProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
))

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  PolymorphicProps & HTMLProps<"div">
>(({ className, ...props }, ref) => (
  <ark.div
    ref={ref}
    {...parts.header.attrs}
    className={cn("flex flex-col gap-1.5 p-4", className)}
    {...props}
  />
))

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  SheetPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("font-semibold text-foreground", className)}
    {...props}
  />
))

const SheetTrigger = SheetPrimitive.Trigger

export {
  Sheet,
  SheetBackdrop,
  SheetCloseTrigger,
  SheetContent,
  SheetContext,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
}
