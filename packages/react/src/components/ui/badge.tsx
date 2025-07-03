"use client"

import * as React from "react"

import { createAnatomy } from "@ark-ui/react/anatomy"
import {
  type HTMLProps,
  type PolymorphicProps,
  ark,
} from "@ark-ui/react/factory"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const anatomy = createAnatomy("badge").parts("root")
const parts = anatomy.build()

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] [&>svg]:shrink-0 leading-normal",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends PolymorphicProps,
    HTMLProps<"span">,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <ark.span
        ref={ref}
        {...parts.root.attrs}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  }
)

export { Badge, badgeVariants }
