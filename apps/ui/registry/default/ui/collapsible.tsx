"use client";

import { Collapsible as CollapsiblePrimitive } from "@ark-ui/react/collapsible";
import * as React from "react";
import { renderAsChild } from "@/registry/default/lib/render";
import { cn } from "@/registry/default/lib/utils";

type CollapsibleCompatProps = Omit<
  CollapsiblePrimitive.RootProps,
  "onOpenChange"
> & {
  onOpenChange?: (open: boolean) => void;
};

function Collapsible({ onOpenChange, ...props }: CollapsibleCompatProps) {
  return (
    <CollapsiblePrimitive.Root
      onOpenChange={(details) => onOpenChange?.(details.open)}
      {...props}
    />
  );
}

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsiblePrimitive.ContentProps & { keepMounted?: boolean }
>(({ className, keepMounted: _keepMounted, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    className={cn(
      "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
      className,
    )}
    ref={ref}
    {...props}
  />
));
CollapsibleContent.displayName = "CollapsibleContent";

const CollapsibleContext = CollapsiblePrimitive.Context;

const CollapsibleIndicator = CollapsiblePrimitive.Indicator;

function CollapsibleTrigger({
  children,
  render,
  ...props
}: CollapsiblePrimitive.TriggerProps & { render?: React.ReactElement }) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <CollapsiblePrimitive.Trigger asChild={asChild} {...props}>
      {child}
    </CollapsiblePrimitive.Trigger>
  );
}

const CollapsiblePanel = CollapsibleContent;

export {
  Collapsible,
  CollapsibleContent,
  CollapsibleContext,
  CollapsibleIndicator,
  CollapsibleTrigger,
  CollapsiblePanel,
};
