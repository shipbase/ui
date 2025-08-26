"use client"

import * as React from "react"

import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs"

import { cn } from "@/lib/utils"

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsPrimitive.RootProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
))

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("flex-1 outline-none", className)}
    {...props}
  />
))

const TabsContext = TabsPrimitive.Context

const TabsIndicator = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Indicator
    ref={ref}
    className={cn(
      "h-(--height) w-(--width) rounded-sm bg-background text-foreground shadow-xs",
      className
    )}
    {...props}
  />
))

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsPrimitive.ListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center rounded-md bg-muted p-0.5 text-muted-foreground/70 data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
))

const TabsRootProvider = TabsPrimitive.RootProvider

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsPrimitive.TriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-sm outline-none transition-all hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[selected]:z-10 data-[orientation=vertical]:w-full data-[selected]:text-foreground [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

export {
  Tabs,
  TabsContent,
  TabsContext,
  TabsIndicator,
  TabsList,
  TabsRootProvider,
  TabsTrigger,
}

export {
  useTabs,
  useTabsContext,
  type TabsFocusChangeDetails,
  type TabsValueChangeDetails,
} from "@ark-ui/react/tabs"
