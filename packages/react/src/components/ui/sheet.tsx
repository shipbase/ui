"use client"

import * as React from "react"

import { Dialog as SheetPrimitive } from "@ark-ui/react/dialog"
import { Portal } from "@ark-ui/react/portal"
import { type VariantProps, cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

const SheetSideContext = React.createContext<
  VariantProps<typeof sheetVariants>
>({})

interface SheetProps
  extends SheetPrimitive.RootProps,
    VariantProps<typeof sheetVariants> {}

const Sheet = ({ children, side, ...props }: SheetProps) => (
  <SheetPrimitive.Root {...props}>
    <SheetSideContext.Provider value={{ side }}>
      {children}
    </SheetSideContext.Provider>
  </SheetPrimitive.Root>
)

const SheetCloseTrigger = SheetPrimitive.CloseTrigger

const SheetContext = SheetPrimitive.Context

const SheetPortal = Portal

const SheetTrigger = SheetPrimitive.Trigger

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
SheetBackdrop.displayName = SheetPrimitive.Backdrop.displayName

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetPrimitive.ContentProps
>(({ className, children, ...props }, ref) => {
  const { side } = React.useContext(SheetSideContext)

  return (
    <SheetPortal>
      <SheetBackdrop />
      <SheetPrimitive.Positioner>
        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side }), className)}
          {...props}
        >
          {children}
          <SheetPrimitive.CloseTrigger className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.CloseTrigger>
        </SheetPrimitive.Content>
      </SheetPrimitive.Positioner>
    </SheetPortal>
  )
})
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
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
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  SheetPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("font-semibold text-foreground text-lg", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

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
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetCloseTrigger,
  SheetContent,
  SheetContext,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
}
