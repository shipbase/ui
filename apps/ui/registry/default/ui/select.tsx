"use client";

import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import {
  createListCollection,
  Select as SelectPrimitive,
  selectAnatomy,
} from "@ark-ui/react/select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

const parts = selectAnatomy.extendWith("separator").build();

const SelectComponent = React.forwardRef<any, any>(
  (
    {
      collection,
      defaultValue,
      itemToStringValue,
      itemToValue,
      items,
      multiple,
      onValueChange,
      value,
      ...props
    },
    ref,
  ) => {
    const resolvedCollection = React.useMemo(() => {
      if (collection) {
        return collection;
      }

      const list = Array.isArray(items) ? items : [];

      return createListCollection({
        items: list,
        itemToString: (item: any) => {
          if (typeof itemToStringValue === "function") {
            return String(itemToStringValue(item));
          }
          if (item && typeof item === "object" && "label" in item) {
            return String((item as any).label);
          }
          return String(item);
        },
        itemToValue: (item: any) => {
          if (typeof itemToValue === "function") {
            return String(itemToValue(item));
          }
          if (typeof itemToStringValue === "function") {
            return String(itemToStringValue(item));
          }
          if (item && typeof item === "object" && "value" in item) {
            return String((item as any).value);
          }
          return String(item);
        },
      });
    }, [collection, itemToStringValue, itemToValue, items]);

    const toArray = (next: any) => {
      if (next == null) {
        return [];
      }
      return Array.isArray(next) ? next : [next];
    };

    return (
      <SelectPrimitive.Root
        collection={resolvedCollection}
        defaultValue={
          defaultValue === undefined ? undefined : toArray(defaultValue)
        }
        multiple={multiple}
        onValueChange={(details: any) => {
          const selectedItems = details?.items ?? [];
          const next = multiple ? selectedItems : (selectedItems[0] ?? null);
          onValueChange?.(next, details);
        }}
        ref={ref}
        value={value === undefined ? undefined : toArray(value)}
        {...props}
      />
    );
  },
);
SelectComponent.displayName = "Select";
const Select = SelectComponent as any;

const SelectClearTrigger = React.forwardRef<any, any>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ClearTrigger
      className={cn(
        "absolute end-0 top-0 flex size-9 items-center justify-center rounded-md border border-transparent text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
SelectClearTrigger.displayName = "SelectClearTrigger";

const SelectContent = React.forwardRef<any, any>(
  ({ className, ...props }, ref) => (
    <Portal>
      <SelectPrimitive.Positioner>
        <SelectPrimitive.Content
          className={cn(
            "relative w-full min-w-32 overflow-hidden rounded-md border border-input bg-popover p-1 text-popover-foreground shadow-lg",
            "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=left]:-translate-x-1 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[placement=top]:-translate-y-1 data-[placement=right]:translate-x-1 data-[placement=bottom]:translate-y-1",
            className,
          )}
          ref={ref}
          {...props}
        />
      </SelectPrimitive.Positioner>
    </Portal>
  ),
);
SelectContent.displayName = "SelectContent";

const SelectContext = SelectPrimitive.Context;

const SelectControl = React.forwardRef<any, any>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Control
      className={cn(
        "relative flex min-h-[38px] rounded-md border border-input text-sm outline-none transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
SelectControl.displayName = "SelectControl";

const SelectIndicator = React.forwardRef<any, any>((props, ref) => (
  <SelectPrimitive.Indicator ref={ref} {...props}>
    <ChevronDownIcon className="size-4 shrink-0 in-aria-invalid:text-destructive/80 text-muted-foreground/80" />
  </SelectPrimitive.Indicator>
));
SelectIndicator.displayName = "SelectIndicator";

const SelectItem = React.forwardRef<any, any>(
  ({ className, children, value, ...props }, ref) => {
    const item =
      props.item ??
      (value != null && typeof value === "object"
        ? value
        : {
            label:
              typeof children === "string" ? children : String(value ?? ""),
            value,
          });

    return (
      <SelectPrimitive.Item
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded py-1.5 ps-8 pe-2 text-sm outline-hidden data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
          className,
        )}
        item={item}
        ref={ref}
        {...props}
      >
        <span className="absolute start-2 flex size-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <CheckIcon size={16} />
          </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  },
);
SelectItem.displayName = "SelectItem";

const SelectItemContext = SelectPrimitive.ItemContext;

const SelectItemGroup = SelectPrimitive.ItemGroup;

const SelectItemGroupLabel = React.forwardRef<any, any>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ItemGroupLabel
      className={cn(
        "py-1.5 ps-8 pe-2 font-medium text-muted-foreground text-xs",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
SelectItemGroupLabel.displayName = "SelectItemGroupLabel";

const SelectItemText = SelectPrimitive.ItemText;

const SelectLabel = React.forwardRef<any, any>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Label
      className={cn(
        "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
SelectLabel.displayName = "SelectLabel";

const SelectList = React.forwardRef<any, any>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.List
      className={cn(
        "max-h-[min(24rem,var(--available-height))] overflow-y-auto",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
SelectList.displayName = "SelectList";

const SelectRootProvider = SelectPrimitive.RootProvider;

const SelectSeparator = React.forwardRef<HTMLHRElement, HTMLArkProps<"hr">>(
  ({ className, ...props }, ref) => (
    <ark.hr
      ref={ref}
      {...parts.separator.attrs}
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  ),
);
SelectSeparator.displayName = "SelectSeparator";

const SelectTrigger = React.forwardRef<any, any>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Trigger
      className={cn(
        "flex flex-1 items-center justify-between gap-1 bg-transparent px-3 py-2 outline-none outline-hidden placeholder:text-muted-foreground/70 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 data-[placeholder-shown]:text-muted-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
SelectTrigger.displayName = "SelectTrigger";

const SelectValueText = SelectPrimitive.ValueText;

function SelectValue({ children, ...props }: any) {
  if (typeof children !== "function") {
    return (
      <SelectPrimitive.ValueText {...props}>
        {children}
      </SelectPrimitive.ValueText>
    );
  }

  return (
    <SelectPrimitive.Context>
      {(state) => {
        const selectedItems = (
          Array.isArray((state as any).selectedItems)
            ? (state as any).selectedItems
            : []
        ) as any[];
        const selectedValue = (state as any).multiple
          ? selectedItems
          : selectedItems[0];

        const renderedValue =
          typeof children === "function"
            ? (state as any).multiple
              ? children(selectedItems)
              : selectedValue
                ? children(selectedValue)
                : null
            : children;

        return (
          <SelectPrimitive.ValueText {...props}>
            {renderedValue}
          </SelectPrimitive.ValueText>
        );
      }}
    </SelectPrimitive.Context>
  );
}

const SelectButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, type = "button", ...props }, ref) => (
  <button
    className={cn(
      "flex min-h-[38px] w-full items-center justify-between gap-1 rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    type={type}
    {...props}
  />
));
SelectButton.displayName = "SelectButton";

const SelectPopup = SelectContent;
const SelectGroup = SelectItemGroup;
const SelectGroupLabel = SelectItemGroupLabel;

export {
  Select,
  SelectClearTrigger,
  SelectContent,
  SelectContext,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemContext,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectRootProvider,
  SelectSeparator,
  SelectPopup,
  SelectGroup,
  SelectGroupLabel,
  SelectButton,
  SelectTrigger,
  SelectValue,
  SelectValueText,
};

export {
  type CollectionItem,
  type ListCollection,
  type SelectHighlightChangeDetails,
  type SelectOpenChangeDetails,
  type SelectValueChangeDetails,
  useSelect,
} from "@ark-ui/react/select";

export { createListCollection };
