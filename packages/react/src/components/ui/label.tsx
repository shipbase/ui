"use client"

import * as React from "react"

import { ark } from "@ark-ui/react/factory"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  asChild?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, htmlFor, children, ...props }, ref) => (
    <ark.label
      ref={ref}
      className={cn(labelVariants(), className)}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </ark.label>
  )
)
Label.displayName = "Label"

export { Label }
