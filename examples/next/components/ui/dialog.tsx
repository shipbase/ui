"use client"

import * as React from "react"

import { Dialog as DialogPrimitive, dialogAnatomy } from "@ark-ui/react/dialog"
import {
  type HTMLProps,
  type PolymorphicProps,
  ark,
} from "@ark-ui/react/factory"
import { Portal } from "@ark-ui/react/portal"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const parts = dialogAnatomy.extendWith("header").build()

const Dialog = DialogPrimitive.Root

const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Backdrop>,
  DialogPrimitive.BackdropProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Backdrop
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[--z-index] bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
))

const DialogCloseTrigger = DialogPrimitive.CloseTrigger

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogPrimitive.ContentProps
>(({ className, children, ...props }, ref) => (
  <Portal>
    <DialogBackdrop />
    <DialogPrimitive.Positioner>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 -translate-x-1/2 -translate-y-1/2 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-[--z-index] grid max-h-[calc(100%-2rem)] w-full max-w-[calc(100%-2rem)] gap-4 overflow-y-auto rounded-xl border bg-background p-6 shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-100",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.CloseTrigger className="group absolute top-3 right-3 flex size-7 items-center justify-center rounded outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none">
          <XIcon className="size-4 opacity-60 transition-opacity group-hover:opacity-100" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.CloseTrigger>
      </DialogPrimitive.Content>
    </DialogPrimitive.Positioner>
  </Portal>
))

const DialogContext = DialogPrimitive.Context

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogPrimitive.DescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
))

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
      className
    )}
    {...props}
  />
)

const DialogHeader = React.forwardRef<
  HTMLDivElement,
  PolymorphicProps & HTMLProps<"div">
>(({ className, ...props }, ref) => (
  <ark.div
    ref={ref}
    {...parts.header.attrs}
    className={cn("flex flex-col gap-1 text-center sm:text-left", className)}
    {...props}
  />
))

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("font-semibold text-lg leading-none", className)}
    {...props}
  />
))

const DialogTrigger = DialogPrimitive.Trigger

export {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogContext,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
