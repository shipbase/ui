"use client"

import * as React from "react"

import { Pagination as PaginationPrimitive } from "@ark-ui/react/pagination"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { type ButtonProps, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PaginationContext = PaginationPrimitive.Context

const Pagination = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Root>,
  PaginationPrimitive.RootProps
>(({ className, ...props }, ref) => (
  <PaginationPrimitive.Root
    className={cn(
      "mx-auto flex w-full flex-row items-center justify-center gap-1",
      className
    )}
    {...props}
    ref={ref}
  />
))
Pagination.displayName = PaginationPrimitive.Root.displayName

const PaginationItem = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Item>,
  PaginationPrimitive.ItemProps
>(({ className, ...props }, ref) => (
  <PaginationContext>
    {(context) => (
      <PaginationPrimitive.Item
        className={cn(
          buttonVariants({
            variant: context.page === props.value ? "outline" : "ghost",
            size: "icon",
          }),
          className
        )}
        {...props}
        ref={ref}
      />
    )}
  </PaginationContext>
))
PaginationItem.displayName = PaginationPrimitive.Item.displayName

const PaginationPrevTrigger = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.PrevTrigger>,
  PaginationPrimitive.PrevTriggerProps & Pick<ButtonProps, "size">
>(({ className, size = "default", ...props }, ref) => (
  <PaginationPrimitive.PrevTrigger
    className={cn(
      buttonVariants({ variant: "ghost", size }),
      "gap-1 pl-2.5",
      className
    )}
    {...props}
    ref={ref}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationPrimitive.PrevTrigger>
))
PaginationPrevTrigger.displayName = PaginationPrimitive.PrevTrigger.displayName

const PaginationNextTrigger = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.NextTrigger>,
  PaginationPrimitive.NextTriggerProps & Pick<ButtonProps, "size">
>(({ className, size = "default", ...props }, ref) => (
  <PaginationPrimitive.NextTrigger
    className={cn(
      buttonVariants({ variant: "ghost", size }),
      "gap-1 pr-2.5",
      className
    )}
    {...props}
    ref={ref}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationPrimitive.NextTrigger>
))
PaginationNextTrigger.displayName = PaginationPrimitive.NextTrigger.displayName

const PaginationEllipsis = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Ellipsis>,
  PaginationPrimitive.EllipsisProps
>(({ className, ...props }, ref) => (
  <PaginationPrimitive.Ellipsis
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
    ref={ref}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </PaginationPrimitive.Ellipsis>
))
PaginationEllipsis.displayName = PaginationPrimitive.Ellipsis.displayName

export {
  Pagination,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
}
