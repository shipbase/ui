"use client";

import { mergeProps, useRender } from "@coss/ui/lib/render";
import { cn } from "@coss/ui/lib/utils";

function Toolbar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative flex gap-2 rounded-xl border bg-card not-dark:bg-clip-padding p-1 text-card-foreground",
        className,
      )}
      data-slot="toolbar"
      role="toolbar"
      {...props}
    />
  );
}

function ToolbarButton({
  className,
  render,
  ...props
}: useRender.ComponentProps<"button">) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    render ? undefined : "button";

  return useRender({
    defaultTagName: "button",
    props: mergeProps(
      {
        className: cn(className),
        "data-slot": "toolbar-button",
        type: typeValue,
      },
      props,
    ),
    render,
  });
}

function ToolbarLink({
  className,
  render,
  ...props
}: useRender.ComponentProps<"a">) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps(
      {
        className: cn(className),
        "data-slot": "toolbar-link",
      },
      props,
    ),
    render,
  });
}

function ToolbarInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input className={cn(className)} data-slot="toolbar-input" {...props} />
  );
}

function ToolbarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      data-slot="toolbar-group"
      role="group"
      {...props}
    />
  );
}

function ToolbarSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:my-0.5 data-[orientation=vertical]:my-1.5 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className,
      )}
      data-orientation={orientation}
      data-slot="toolbar-separator"
      {...props}
    />
  );
}

export {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarButton,
  ToolbarLink,
  ToolbarInput,
};
