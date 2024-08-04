"use client"

import * as React from "react"

import {
  Toast as ToastPrimitive,
  Toaster as ToasterPrimitive,
  createToaster,
} from "@ark-ui/react/toast"
import { type VariantProps, cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const toastVariants = cva(
  "group z-[--z-index] flex h-[--height] w-full scale-[--scale] items-center justify-between space-x-4 rounded-md border bg-background p-6 pr-8 opacity-[--opacity] shadow-lg transition-all will-change-[translate,opacity,scale] [translate:var(--x)_var(--y)_0] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toaster = React.forwardRef<
  React.ElementRef<typeof ToasterPrimitive>,
  React.ComponentPropsWithoutRef<typeof ToasterPrimitive>
>(({ ...props }, ref) => (
  <ToasterPrimitive
    ref={ref}
    className="max-h-screen w-[calc(100%-var(--gap)*4)] flex-col-reverse p-4 sm:flex-col md:max-w-[420px]"
    {...props}
  />
))

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
))

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("font-semibold text-sm", className)}
    {...props}
  />
))

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))

const ToastActionTrigger = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.ActionTrigger>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.ActionTrigger>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.ActionTrigger
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 font-medium text-sm ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:focus:ring-destructive group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground",
      className
    )}
    {...props}
  />
))

const ToastCloseTrigger = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.CloseTrigger>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.CloseTrigger>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.CloseTrigger
    ref={ref}
    className={cn(
      "absolute top-2 right-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 group-[.destructive]:hover:text-red-50",
      className
    )}
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitive.CloseTrigger>
))

export {
  createToaster,
  Toast,
  ToastActionTrigger,
  ToastCloseTrigger,
  ToastDescription,
  Toaster,
  ToastTitle,
}
