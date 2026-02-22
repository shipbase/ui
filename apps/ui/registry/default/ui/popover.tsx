"use client";

import { Popover as PopoverPrimitive } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import * as React from "react";
import { renderAsChild } from "@/registry/default/lib/render";
import { cn } from "@/registry/default/lib/utils";

const PopoverPositioner = PopoverPrimitive.Positioner as any;

type PopoverHandle<TPayload = unknown> = {
  payload?: TPayload;
};

function PopoverCreateHandle<TPayload = unknown>() {
  return { payload: undefined } as PopoverHandle<TPayload>;
}

function Popover({ handle, onOpenChange, children, ...props }: any) {
  if (handle && typeof children === "function") {
    return <>{children({ payload: handle.payload })}</>;
  }

  if (typeof children === "function") {
    return (
      <PopoverPrimitive.Root
        onOpenChange={(details) => onOpenChange?.(details.open)}
        {...props}
      >
        {children({ payload: undefined })}
      </PopoverPrimitive.Root>
    );
  }

  return (
    <PopoverPrimitive.Root
      onOpenChange={(details) => onOpenChange?.(details.open)}
      {...props}
    >
      {children}
    </PopoverPrimitive.Root>
  );
}

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  PopoverPrimitive.ArrowProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    className={cn(
      "[--arrow-background:var(--popover)] [--arrow-size:calc(var(--spacing)*2)]",
      className,
    )}
    ref={ref}
    {...props}
  >
    <PopoverPrimitive.ArrowTip className="border-t border-l" />
  </PopoverPrimitive.Arrow>
));
PopoverArrow.displayName = "PopoverArrow";

function PopoverCloseTrigger({ children, render, ...props }: any) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <PopoverPrimitive.CloseTrigger asChild={asChild} {...props}>
      {child}
    </PopoverPrimitive.CloseTrigger>
  );
}

const PopoverContent = React.forwardRef<any, any>(
  ({ className, align, side, alignOffset, sideOffset, ...props }, ref) => {
    let context: any = null;
    try {
      const getPopoverContext = (PopoverPrimitive as any).usePopoverContext as
        | (() => unknown)
        | undefined;
      context =
        typeof getPopoverContext === "function" ? getPopoverContext() : null;
    } catch {
      context = null;
    }

    if (!context) {
      return (
        <div
          className={cn(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
            className,
          )}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <Portal>
        <PopoverPositioner
          positioning={{
            align,
            offset: { crossAxis: alignOffset, mainAxis: sideOffset },
            placement: side ? `${side}-start` : undefined,
          }}
        >
          <PopoverPrimitive.Content
            className={cn(
              "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=closed]:animate-out data-[state=open]:animate-in",
              className,
            )}
            ref={ref}
            {...props}
          />
        </PopoverPositioner>
      </Portal>
    );
  },
);
PopoverContent.displayName = "PopoverContent";

const PopoverContext = PopoverPrimitive.Context;

const PopoverDescription = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Description>,
  PopoverPrimitive.DescriptionProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Description
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
));
PopoverDescription.displayName = "PopoverDescription";

const PopoverTitle = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Title>,
  PopoverPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Title
    className={cn("font-semibold text-lg leading-none", className)}
    ref={ref}
    {...props}
  />
));
PopoverTitle.displayName = "PopoverTitle";

function PopoverTrigger({
  children,
  handle,
  payload,
  render,
  openOnHover,
  ...props
}: any) {
  const { asChild, child } = renderAsChild({ children, render });

  if (handle) {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        onClick: (event: any) => {
          handle.payload = payload;
          (child as any).props?.onClick?.(event);
          props.onClick?.(event);
        },
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
    <PopoverPrimitive.Trigger
      asChild={asChild}
      openOnHover={openOnHover}
      {...props}
    >
      {child}
    </PopoverPrimitive.Trigger>
  );
}

const PopoverPopup = PopoverContent;
const PopoverClose = PopoverCloseTrigger;
const PopoverRootProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export {
  PopoverCreateHandle,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverCloseTrigger,
  PopoverClose,
  PopoverContent,
  PopoverPopup,
  PopoverContext,
  PopoverDescription,
  PopoverRootProvider,
  PopoverTitle,
  PopoverTrigger,
};

export { usePopover } from "@ark-ui/react/popover";
