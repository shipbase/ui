"use client";

import { HoverCard as HoverCardPrimitive } from "@ark-ui/react/hover-card";
import type * as React from "react";
import { renderAsChild } from "@coss/ui/lib/render";
import { cn } from "@coss/ui/lib/utils";

const PreviewCard = HoverCardPrimitive.Root;

function PreviewCardTrigger({
  children,
  render,
  ...props
}: HoverCardPrimitive.TriggerProps & { render?: React.ReactElement }) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <HoverCardPrimitive.Trigger
      asChild={asChild}
      data-slot="preview-card-trigger"
      {...props}
    >
      {child}
    </HoverCardPrimitive.Trigger>
  );
}

function PreviewCardPopup({
  className,
  children,
  sideOffset = 4,
  ...props
}: HoverCardPrimitive.ContentProps & {
  sideOffset?: number;
}) {
  return (
    <HoverCardPrimitive.Positioner>
      <HoverCardPrimitive.Content
        className={cn(
          "relative z-50 flex w-64 text-balance rounded-lg border bg-popover p-4 text-popover-foreground text-sm shadow-lg/5",
          className,
        )}
        data-slot="preview-card-content"
        {...props}
      >
        <HoverCardPrimitive.Arrow
          className="[--arrow-background:var(--popover)] [--arrow-size:calc(var(--spacing)*2)]"
          style={{ marginTop: sideOffset }}
        >
          <HoverCardPrimitive.ArrowTip className="border-t border-l" />
        </HoverCardPrimitive.Arrow>
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Positioner>
  );
}

export {
  PreviewCard,
  PreviewCard as HoverCard,
  PreviewCardTrigger,
  PreviewCardTrigger as HoverCardTrigger,
  PreviewCardPopup,
  PreviewCardPopup as HoverCardContent,
};
