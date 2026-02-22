"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/react/toggle-group";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@coss/ui/lib/utils";
import { toggleVariants } from "@coss/ui/components/toggle";

const ToggleGroupExtendContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupPrimitive.RootProps & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    className={cn(
      "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
      className,
    )}
    data-size={size}
    data-variant={variant}
    ref={ref}
    {...props}
  >
    <ToggleGroupExtendContext.Provider value={{ size, variant }}>
      {children}
    </ToggleGroupExtendContext.Provider>
  </ToggleGroupPrimitive.Root>
));
ToggleGroup.displayName = "ToggleGroup";

const ToggleGroupContext = ToggleGroupPrimitive.Context;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupPrimitive.ItemProps & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupExtendContext);

  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        toggleVariants({
          size: context.size || size,
          variant: context.variant || variant,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className,
      )}
      data-size={context.size || size}
      data-variant={context.variant || variant}
      ref={ref}
      {...props}
    />
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";

const ToggleGroupRootProvider = ToggleGroupPrimitive.RootProvider;
const Toggle = ToggleGroupItem;

function ToggleGroupSeparator({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical" | string;
}) {
  return (
    <div
      className={cn(
        orientation === "vertical" ? "h-px w-4" : "h-4 w-px",
        "bg-border",
        className,
      )}
      data-slot="toggle-group-separator"
      {...props}
    />
  );
}

export {
  Toggle,
  ToggleGroup,
  ToggleGroupContext,
  ToggleGroupItem,
  ToggleGroupSeparator,
  ToggleGroupRootProvider,
};

export {
  type ToggleGroupValueChangeDetails,
  useToggleGroup,
  useToggleGroupContext,
} from "@ark-ui/react/toggle-group";
