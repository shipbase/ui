"use client";

import { Tooltip as TooltipPrimitive } from "@ark-ui/react/tooltip";
import * as React from "react";
import { renderAsChild } from "@/registry/default/lib/render";
import { cn } from "@/registry/default/lib/utils";

type TooltipHandle<TPayload = unknown> = {
  payload?: TPayload;
};

function TooltipCreateHandle<TPayload = unknown>() {
  return { payload: undefined } as TooltipHandle<TPayload>;
}

const Tooltip = ({ handle, children, ...props }: any) => {
  if (typeof children === "function") {
    return <>{children({ payload: handle?.payload })}</>;
  }

  return <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>;
};

const TooltipArrow = React.forwardRef<any, any>(
  ({ className, ...props }, ref) => (
    <TooltipPrimitive.Arrow
      className={cn(
        "[--arrow-background:var(--popover)] [--arrow-size:calc(var(--spacing)*2)]",
        className,
      )}
      ref={ref}
      {...props}
    >
      <TooltipPrimitive.ArrowTip className="border-t border-l" />
    </TooltipPrimitive.Arrow>
  ),
);
TooltipArrow.displayName = "TooltipArrow";

const TooltipPositioner = TooltipPrimitive.Positioner as any;
const TooltipContent = React.forwardRef<any, any>(function TooltipContent(
  { className, align, side, sideOffset, ...props },
  ref,
) {
  let context: any = null;
  try {
    const getTooltipContext = (TooltipPrimitive as any).useTooltipContext as
      | (() => unknown)
      | undefined;
    context =
      typeof getTooltipContext === "function" ? getTooltipContext() : null;
  } catch {
    context = null;
  }

  if (!context) {
    return (
      <div
        className={cn(
          "relative z-50 max-w-70 rounded-md border bg-popover px-3 py-1.5 text-popover-foreground text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  }

  return (
    <TooltipPositioner
      positioning={{
        align,
        offset: { mainAxis: sideOffset },
        placement: side ? `${side}-center` : undefined,
      }}
    >
      <TooltipPrimitive.Content
        className={cn(
          "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-w-70 animate-in rounded-md border bg-popover px-3 py-1.5 text-popover-foreground text-sm data-[state=closed]:animate-out",
          className,
        )}
        ref={ref}
        {...props}
      />
    </TooltipPositioner>
  );
});
TooltipContent.displayName = "TooltipContent";

const TooltipContext = TooltipPrimitive.Context;

const TooltipRootProvider = ({ children }: any) => <>{children}</>;

function TooltipTrigger({ children, handle, payload, render, ...props }: any) {
  const { asChild, child } = renderAsChild({ children, render });

  if (handle) {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        onFocus: (event: any) => {
          handle.payload = payload;
          (child as any).props?.onFocus?.(event);
          props.onFocus?.(event);
        },
        onMouseEnter: (event: any) => {
          handle.payload = payload;
          (child as any).props?.onMouseEnter?.(event);
          props.onMouseEnter?.(event);
        },
      });
    }

    return <>{child}</>;
  }

  return (
    <TooltipPrimitive.Trigger asChild={asChild} {...props}>
      {child}
    </TooltipPrimitive.Trigger>
  );
}

const TooltipProvider = ({ children }: any) => <>{children}</>;
const TooltipPopup = TooltipContent;

export {
  TooltipCreateHandle,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPopup,
  TooltipContext,
  TooltipProvider,
  TooltipRootProvider,
  TooltipTrigger,
};

export {
  type TooltipOpenChangeDetails,
  useTooltip,
  useTooltipContext,
} from "@ark-ui/react/tooltip";
