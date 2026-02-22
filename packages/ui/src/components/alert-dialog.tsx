"use client";

import { Dialog as AlertDialogPrimitive } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { renderAsChild } from "@coss/ui/lib/render";
import { cn } from "@coss/ui/lib/utils";

const AlertDialogCreateHandle = () => ({});

type AlertDialogCompatProps = AlertDialogPrimitive.RootProps & {
  onOpenChange?: (open: boolean) => void;
};

function AlertDialog({ onOpenChange, ...props }: AlertDialogCompatProps) {
  return (
    <AlertDialogPrimitive.Root
      onOpenChange={(details) => onOpenChange?.(details.open)}
      {...props}
    />
  );
}

function AlertDialogPortal({ children }: { children: React.ReactNode }) {
  return <Portal>{children}</Portal>;
}

function AlertDialogTrigger({
  children,
  render,
  ...props
}: AlertDialogPrimitive.TriggerProps & { render?: React.ReactElement }) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <AlertDialogPrimitive.Trigger
      asChild={asChild}
      data-slot="alert-dialog-trigger"
      {...props}
    >
      {child}
    </AlertDialogPrimitive.Trigger>
  );
}

function AlertDialogBackdrop({
  className,
  ...props
}: AlertDialogPrimitive.BackdropProps) {
  return (
    <AlertDialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-black/32 backdrop-blur-sm transition-all duration-200 ease-out data-[state=closed]:opacity-0",
        className,
      )}
      data-slot="alert-dialog-backdrop"
      {...props}
    />
  );
}

function AlertDialogViewport({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 grid grid-rows-[1fr_auto_3fr] justify-items-center p-4",
        className,
      )}
      data-slot="alert-dialog-viewport"
      {...props}
    />
  );
}

function AlertDialogPopup({
  className,
  bottomStickOnMobile = true,
  ...props
}: AlertDialogPrimitive.ContentProps & {
  bottomStickOnMobile?: boolean;
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogViewport
        className={cn(
          bottomStickOnMobile &&
            "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12",
        )}
      >
        <AlertDialogPrimitive.Positioner className="row-start-2 w-full max-w-lg">
          <AlertDialogPrimitive.Content
            className={cn(
              "relative row-start-2 flex max-h-full min-h-0 w-full min-w-0 flex-col rounded-2xl border bg-popover text-popover-foreground shadow-lg/5",
              bottomStickOnMobile &&
                "max-sm:max-w-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0",
              className,
            )}
            data-slot="alert-dialog-popup"
            {...props}
          />
        </AlertDialogPrimitive.Positioner>
      </AlertDialogViewport>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-6 text-center max-sm:pb-4 sm:text-left",
        className,
      )}
      data-slot="alert-dialog-header"
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "bare";
}) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 px-6 sm:flex-row sm:justify-end sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
        variant === "default" && "border-t bg-muted/72 py-4",
        variant === "bare" && "pb-6",
        className,
      )}
      data-slot="alert-dialog-footer"
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.TitleProps) {
  return (
    <AlertDialogPrimitive.Title
      className={cn(
        "font-heading font-semibold text-xl leading-none",
        className,
      )}
      data-slot="alert-dialog-title"
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.DescriptionProps) {
  return (
    <AlertDialogPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="alert-dialog-description"
      {...props}
    />
  );
}

function AlertDialogClose({
  children,
  render,
  ...props
}: AlertDialogPrimitive.CloseTriggerProps & { render?: React.ReactElement }) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <AlertDialogPrimitive.CloseTrigger
      asChild={asChild}
      data-slot="alert-dialog-close"
      {...props}
    >
      {child}
    </AlertDialogPrimitive.CloseTrigger>
  );
}

export {
  AlertDialogCreateHandle,
  AlertDialog,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogBackdrop as AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogPopup as AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
  AlertDialogViewport,
};
