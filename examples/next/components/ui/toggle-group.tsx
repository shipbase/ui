"use client"

import * as React from "react"

import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/react/toggle-group"
import type { VariantProps } from "class-variance-authority"

import { toggleVariants } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

const ToggleGroupVariantContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupPrimitive.RootProps & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    data-variant={variant}
    data-size={size}
    className={cn(
      "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
      className
    )}
    {...props}
  >
    <ToggleGroupVariantContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupVariantContext.Provider>
  </ToggleGroupPrimitive.Root>
))

const ToggleGroupContext = ToggleGroupPrimitive.Context

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupPrimitive.ItemProps & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupVariantContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    />
  )
})

const ToggleGroupRootProvider = ToggleGroupPrimitive.RootProvider

export {
  ToggleGroup,
  ToggleGroupContext,
  ToggleGroupItem,
  ToggleGroupRootProvider,
}

export {
  useToggleGroup,
  useToggleGroupContext,
  type ToggleGroupValueChangeDetails,
} from "@ark-ui/react/toggle-group"
