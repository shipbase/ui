"use client"

import * as React from "react"

import { createAnatomy } from "@ark-ui/react/anatomy"
import {
  type HTMLProps,
  type PolymorphicProps,
  ark,
} from "@ark-ui/react/factory"

import { cn } from "@/lib/utils"

const anatomy = createAnatomy("textarea").parts("root")
const parts = anatomy.build()

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  PolymorphicProps & HTMLProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <ark.textarea
      ref={ref}
      {...parts.root.attrs}
      className={cn(
        "flex min-h-19.5 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
})

export { Textarea }
