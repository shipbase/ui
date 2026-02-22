"use client";

import { Dialog as DialogPrimitive, dialogAnatomy } from "@ark-ui/react/dialog";
import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "lucide-react";
import * as React from "react";
import { renderAsChild } from "@coss/ui/lib/render";
import { cn } from "@coss/ui/lib/utils";

const parts = dialogAnatomy.extendWith("header").build();

type DialogCompatProps = DialogPrimitive.RootProps & {
  onOpenChange?: (open: boolean) => void;
};

function Dialog({ onOpenChange, ...props }: DialogCompatProps) {
  return (
    <DialogPrimitive.Root
      onOpenChange={(details) => onOpenChange?.(details.open)}
      {...props}
    />
  );
}

const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Backdrop>,
  DialogPrimitive.BackdropProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Backdrop
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[--z-index] bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DialogBackdrop.displayName = "DialogBackdrop";

function DialogCloseTrigger({
  children,
  render,
  ...props
}: DialogPrimitive.CloseTriggerProps & { render?: React.ReactElement }) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <DialogPrimitive.CloseTrigger asChild={asChild} {...props}>
      {child}
    </DialogPrimitive.CloseTrigger>
  );
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogPrimitive.ContentProps & { showCloseButton?: boolean }
>(({ className, children, showCloseButton = true, ...props }, ref) => (
  <Portal>
    <DialogBackdrop />
    <DialogPrimitive.Positioner>
      <DialogPrimitive.Content
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 -translate-x-1/2 -translate-y-1/2 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-[--z-index] grid max-h-[calc(100%-2rem)] w-full max-w-[calc(100%-2rem)] gap-4 overflow-y-auto rounded-xl border bg-background p-6 shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-100",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.CloseTrigger className="group absolute top-3 right-3 flex size-7 items-center justify-center rounded outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none">
            <XIcon className="size-4 opacity-60 transition-opacity group-hover:opacity-100" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.CloseTrigger>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Positioner>
  </Portal>
));
DialogContent.displayName = "DialogContent";

const DialogContext = DialogPrimitive.Context;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogPrimitive.DescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    className={cn("text-muted-foreground text-sm", className)}
    ref={ref}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

const DialogFooter = ({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "bare" }) => (
  <div
    className={cn(
      "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
      variant === "bare" && "pt-0",
      className,
    )}
    {...props}
  />
);
const DialogHeader = React.forwardRef<HTMLDivElement, HTMLArkProps<"div">>(
  ({ className, ...props }, ref) => (
    <ark.div
      ref={ref}
      {...parts.header.attrs}
      className={cn("flex flex-col gap-1 text-center sm:text-left", className)}
      {...props}
    />
  ),
);
DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogPrimitive.TitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    className={cn("font-semibold text-lg leading-none", className)}
    ref={ref}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

function DialogTrigger({
  children,
  render,
  ...props
}: DialogPrimitive.TriggerProps & { render?: React.ReactElement }) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <DialogPrimitive.Trigger asChild={asChild} {...props}>
      {child}
    </DialogPrimitive.Trigger>
  );
}

function DialogPanel({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & { variant?: string }) {
  return (
    <div
      className={cn(
        "grid gap-4",
        variant === "outline" && "rounded-lg border p-4",
        className,
      )}
      data-slot="dialog-panel"
      {...props}
    />
  );
}

const DialogPopup = DialogContent;
const DialogClose = DialogCloseTrigger;
const DialogCreateHandle = () => ({});

export {
  DialogCreateHandle,
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogClose,
  DialogContent,
  DialogPopup,
  DialogContext,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogTitle,
  DialogTrigger,
};
