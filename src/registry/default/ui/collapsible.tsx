"use client";
import * as React from "react";

import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible";
import { cn } from "@/lib/utils";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleContext = CollapsiblePrimitive.Context;

const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down overflow-hidden transition-all",
      className,
    )}
    {...props}
  />
));

export {
  Collapsible,
  CollapsibleContent,
  CollapsibleContext,
  CollapsibleTrigger,
};
