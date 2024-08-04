"use client"

import * as React from "react"

import { Pagination as PaginationPrimitive } from "@ark-ui/react/pagination"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PaginationContext = PaginationPrimitive.Context

const Pagination = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof PaginationPrimitive.Root>
>(({ className, ...props }, ref) => (
  <PaginationPrimitive.Root
    className={cn(
      "mx-auto flex w-full items-center justify-center gap-1",
      className
    )}
    {...props}
    ref={ref}
  />
))
Pagination.displayName = PaginationPrimitive.Root.displayName

const PaginationItem = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof PaginationPrimitive.Item>
>(({ className, ...props }, ref) => (
  <PaginationPrimitive.Item
    className={cn(
      buttonVariants({
        variant: "ghost",
        size: "icon",
      }),
      "data-[selected]:border data-[selected]:border-input data-[selected]:bg-background hover:data-[selected]:bg-accent data-[selected]:hover:text-accent-foreground"
    )}
    {...props}
    ref={ref}
  />
))

const PaginationPrevTrigger = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.PrevTrigger>,
  React.ComponentPropsWithoutRef<typeof PaginationPrimitive.PrevTrigger>
>(({ className, ...props }, ref) => (
  <PaginationPrimitive.PrevTrigger
    className={cn(
      buttonVariants({
        variant: "ghost",
        size: "default",
      }),
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

const PaginationNextTrigger = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.NextTrigger>,
  React.ComponentPropsWithoutRef<typeof PaginationPrimitive.NextTrigger>
>(({ className, ...props }, ref) => (
  <PaginationPrimitive.NextTrigger
    className={cn(
      buttonVariants({
        variant: "ghost",
        size: "default",
      }),
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

const PaginationEllipsis = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Ellipsis>,
  React.ComponentPropsWithoutRef<typeof PaginationPrimitive.Ellipsis>
>(({ className, ...props }, ref) => (
  <PaginationPrimitive.Ellipsis
    className={cn(
      buttonVariants({
        variant: "ghost",
        size: "icon",
      })
    )}
    {...props}
    ref={ref}
  >
    <span aria-hidden className="flex h-9 w-9 items-center justify-center">
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  </PaginationPrimitive.Ellipsis>
))

export {
  Pagination,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
}
