"use client";

import { Tabs as TabsPrimitive } from "@ark-ui/react/tabs";
import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

type TabsCompatProps = Omit<TabsPrimitive.RootProps, "onValueChange"> & {
  onValueChange?: (value: any) => void;
};

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsCompatProps
>(({ className, onValueChange, ...props }, ref) => (
  <TabsPrimitive.Root
    className={cn("flex flex-col gap-2", className)}
    onValueChange={(details) => onValueChange?.(details.value)}
    ref={ref}
    {...props}
  />
));
Tabs.displayName = "Tabs";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn("flex-1 outline-none", className)}
    ref={ref}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

const TabsContext = TabsPrimitive.Context;

const TabsIndicator = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Indicator
    className={cn(
      "h-(--height) w-(--width) rounded-sm bg-background text-foreground shadow-xs",
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsIndicator.displayName = "TabsIndicator";

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsPrimitive.ListProps & { variant?: "outline" | string }
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    className={cn(
      "relative inline-flex items-center justify-center rounded-md bg-muted p-0.5 text-muted-foreground/70 data-[orientation=vertical]:flex-col",
      variant === "outline" && "border bg-background",
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsRootProvider = TabsPrimitive.RootProvider;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsPrimitive.TriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-sm outline-none transition-all hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[selected]:z-10 data-[orientation=vertical]:w-full data-[selected]:text-foreground [&_svg]:shrink-0",
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsTab = TabsTrigger;
const TabsPanel = TabsContent;

export {
  Tabs,
  TabsContent,
  TabsPanel,
  TabsContext,
  TabsIndicator,
  TabsList,
  TabsRootProvider,
  TabsTrigger,
  TabsTab,
};

export {
  type TabsFocusChangeDetails,
  type TabsValueChangeDetails,
  useTabs,
  useTabsContext,
} from "@ark-ui/react/tabs";
