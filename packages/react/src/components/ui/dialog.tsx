"use client"

import * as React from "react"

import { Dialog as DialogPrimitive } from "@ark-ui/react/dialog"
import { Portal } from "@ark-ui/react/portal"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogContext = DialogPrimitive.Context

const DialogTrigger = DialogPrimitive.Trigger

const DialogCloseTrigger = DialogPrimitive.CloseTrigger

const DialogPortal = Portal

const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Backdrop>,
  DialogPrimitive.BackdropProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Backdrop
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
))
DialogBackdrop.displayName = DialogPrimitive.Backdrop.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogPrimitive.ContentProps
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogBackdrop />
    <DialogPrimitive.Positioner>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogCloseTrigger className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogCloseTrigger>
      </DialogPrimitive.Content>
    </DialogPrimitive.Positioner>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-semibold text-lg leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

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
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogCloseTrigger,
  DialogContent,
  DialogContext,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
