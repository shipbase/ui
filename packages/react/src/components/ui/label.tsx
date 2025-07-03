"use client"

import * as React from "react"

import { createAnatomy } from "@ark-ui/react/anatomy"
import {
  type HTMLProps,
  type PolymorphicProps,
  ark,
} from "@ark-ui/react/factory"

import { cn } from "@/lib/utils"

const anatomy = createAnatomy("label").parts("root")
const parts = anatomy.build()

const Label = React.forwardRef<
  HTMLLabelElement,
  PolymorphicProps & HTMLProps<"label">
>(({ className, htmlFor, children, ...props }, ref) => (
  <ark.label
    ref={ref}
    {...parts.root.attrs}
    htmlFor={htmlFor}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </ark.label>
))

export { Label }
