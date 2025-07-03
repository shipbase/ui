"use client"

import {
  type HTMLProps,
  type PolymorphicProps,
  ark,
} from "@ark-ui/react/factory"
import {
  Pagination as PaginationPrimitive,
  paginationAnatomy,
} from "@ark-ui/react/pagination"
import type { VariantProps } from "class-variance-authority"
import { MoreHorizontal } from "lucide-react"
import * as React from "react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const parts = paginationAnatomy.extendWith("content").build()

const Pagination = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Root>,
  Omit<PaginationPrimitive.RootProps, "type">
>(({ className, ...props }, ref) => (
  <PaginationPrimitive.Root
    ref={ref}
    className={cn(
      "mx-auto flex w-full flex-row items-center justify-center gap-1",
      className
    )}
    {...props}
  />
))

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  PolymorphicProps & HTMLProps<"ul">
>(({ className, ...props }, ref) => (
  <ark.ul
    ref={ref}
    {...parts.content.attrs}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))

const PaginationContext = PaginationPrimitive.Context

const PaginationEllipsis = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Ellipsis>,
  PaginationPrimitive.EllipsisProps
>(({ className, ...props }, ref) => (
  <ark.li>
    <PaginationPrimitive.Ellipsis
      ref={ref}
      aria-hidden
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </PaginationPrimitive.Ellipsis>
  </ark.li>
))

export interface PaginationItemProps
  extends PaginationPrimitive.ItemProps,
    VariantProps<typeof buttonVariants> {}

const PaginationItem = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.Item>,
  PaginationItemProps
>(({ className, variant = "outline", size, ...props }, ref) => (
  <ark.li>
    <PaginationPrimitive.Item
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  </ark.li>
))

export interface PaginationNextTriggerProps
  extends PaginationPrimitive.NextTriggerProps,
    VariantProps<typeof buttonVariants> {}

const PaginationNextTrigger = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.NextTrigger>,
  PaginationNextTriggerProps
>(({ className, variant = "outline", size, ...props }, ref) => (
  <ark.li>
    <PaginationPrimitive.NextTrigger
      ref={ref}
      aria-label="Go to next page"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  </ark.li>
))

export interface PaginationPrevTriggerProps
  extends PaginationPrimitive.PrevTriggerProps,
    VariantProps<typeof buttonVariants> {}

const PaginationPrevTrigger = React.forwardRef<
  React.ElementRef<typeof PaginationPrimitive.PrevTrigger>,
  PaginationPrevTriggerProps
>(({ className, variant = "outline", size, ...props }, ref) => (
  <ark.li>
    <PaginationPrimitive.PrevTrigger
      ref={ref}
      aria-label="Go to previous page"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  </ark.li>
))

const PaginationRootProvider = PaginationPrimitive.RootProvider

export {
  Pagination,
  PaginationContent,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRootProvider,
}

export { usePagination } from "@ark-ui/react/pagination"
