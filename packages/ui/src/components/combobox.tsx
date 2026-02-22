"use client";

import {
  Combobox as ComboboxPrimitive,
  createListCollection,
} from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { ChevronsUpDownIcon, XIcon } from "lucide-react";
import * as React from "react";

import { renderAsChild } from "@coss/ui/lib/render";
import { cn } from "@coss/ui/lib/utils";
import { ScrollArea } from "@coss/ui/components/scroll-area";

type AnyItem = any;

type NormalizedItem = {
  key: string;
  label: string;
  item: AnyItem;
};

type ComboboxCompatContextValue = {
  multiple: boolean;
  normalizedByKey: Map<string, NormalizedItem>;
  normalizedByItem: WeakMap<object, NormalizedItem>;
  renderItems: AnyItem[];
};

const ComboboxCompatContext =
  React.createContext<ComboboxCompatContextValue | null>(null);
const ComboboxGroupItemsContext = React.createContext<AnyItem[] | null>(null);

function isGroupLike(item: unknown): item is { items: AnyItem[] } {
  return (
    typeof item === "object" &&
    item !== null &&
    Array.isArray((item as { items?: unknown }).items)
  );
}

function getItemLabel(item: AnyItem) {
  if (typeof item === "object" && item !== null) {
    const candidate = (item as { label?: unknown; value?: unknown }).label;
    if (typeof candidate === "string") {
      return candidate;
    }

    const valueCandidate = (item as { value?: unknown }).value;
    if (valueCandidate != null) {
      return String(valueCandidate);
    }
  }

  return String(item);
}

function getRawItemKey(item: AnyItem) {
  if (typeof item === "object" && item !== null) {
    const value = (item as { value?: unknown }).value;
    if (value !== undefined) {
      return `v:${String(value)}`;
    }

    const id = (item as { id?: unknown }).id;
    if (id !== undefined) {
      return `i:${String(id)}`;
    }
  }

  return `x:${String(item)}`;
}

function flattenItems(items: AnyItem[]) {
  const flattened: AnyItem[] = [];

  for (const item of items) {
    if (isGroupLike(item)) {
      flattened.push(...item.items);
      continue;
    }

    flattened.push(item);
  }

  return flattened;
}

function normalizeSelectedValue(value: unknown, multiple: boolean) {
  if (value === undefined) {
    return undefined;
  }

  if (multiple) {
    return Array.isArray(value) ? value : [value];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [value];
}

function Combobox({
  items = [],
  value,
  defaultValue,
  onValueChange,
  multiple = false,
  ...props
}: any) {
  const renderItems = React.useMemo(() => items, [items]);

  const { collection, normalizedByItem, normalizedByKey } =
    React.useMemo(() => {
      const byKey = new Map<string, NormalizedItem>();
      const byItem = new WeakMap<object, NormalizedItem>();

      const normalizedItems = flattenItems(items).map((item, index) => {
        const key = `${getRawItemKey(item)}:${index}`;
        const normalized: NormalizedItem = {
          item,
          key,
          label: getItemLabel(item),
        };

        byKey.set(key, normalized);
        if (typeof item === "object" && item !== null) {
          byItem.set(item, normalized);
        }

        return normalized;
      });

      return {
        collection: createListCollection({
          items: normalizedItems as any,
          itemToString: (item) => item.label,
          itemToValue: (item) => item.key,
        } as any),
        normalizedByItem: byItem,
        normalizedByKey: byKey,
      };
    }, [items]);

  const toKeys = React.useCallback(
    (selected: unknown) => {
      const normalized = normalizeSelectedValue(selected, multiple);
      if (!normalized) {
        return undefined;
      }

      const keys = normalized
        .map((entry) => {
          if (typeof entry === "string") {
            if (normalizedByKey.has(entry)) {
              return entry;
            }
            return Array.from(normalizedByKey.values()).find(
              (item) => getRawItemKey(item.item) === `v:${entry}`,
            )?.key;
          }

          if (typeof entry === "object" && entry !== null) {
            return normalizedByItem.get(entry as object)?.key;
          }

          return Array.from(normalizedByKey.values()).find(
            (item) => item.item === entry,
          )?.key;
        })
        .filter((entry): entry is string => Boolean(entry));

      return keys;
    },
    [multiple, normalizedByItem, normalizedByKey],
  );

  const valueKeys = toKeys(value);
  const defaultValueKeys = toKeys(defaultValue);

  return (
    <ComboboxCompatContext.Provider
      value={{
        multiple,
        normalizedByItem,
        normalizedByKey,
        renderItems,
      }}
    >
      <ComboboxPrimitive.Root
        collection={collection}
        defaultValue={defaultValueKeys}
        multiple={multiple}
        onValueChange={(details: any) => {
          const nextItems = details.value
            .map((entry) => normalizedByKey.get(entry)?.item)
            .filter((entry): entry is AnyItem => entry !== undefined);

          onValueChange?.(multiple ? nextItems : (nextItems[0] ?? null));
        }}
        value={valueKeys}
        {...props}
      />
    </ComboboxCompatContext.Provider>
  );
}

function ComboboxChipsInput({ className, size, ...props }: any) {
  return (
    <ComboboxPrimitive.Input
      className={cn(
        "min-w-12 flex-1 bg-transparent text-base outline-none sm:text-sm [[data-slot=combobox-chip]+&]:ps-0.5",
        size === "sm" ? "ps-1.5" : "ps-2",
        className,
      )}
      data-slot="combobox-chips-input"
      {...props}
    />
  );
}

function ComboboxInput({
  className,
  showTrigger = true,
  showClear = false,
  startAddon,
  triggerProps,
  clearProps,
  ...props
}: any) {
  return (
    <ComboboxPrimitive.Control className="relative w-full text-foreground has-disabled:opacity-64">
      {startAddon && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 start-0 z-10 flex items-center ps-3 opacity-80 [&_svg:not([class*='size-'])]:size-4"
          data-slot="combobox-start-addon"
        >
          {startAddon}
        </div>
      )}
      <ComboboxPrimitive.Input
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          startAddon && "ps-10",
          showTrigger && "pe-9",
          showClear && "pe-9",
          className,
        )}
        data-slot="combobox-input"
        {...props}
      />
      {showTrigger && (
        <ComboboxTrigger
          className="absolute inset-y-0 end-0 inline-flex w-9 items-center justify-center text-muted-foreground/80"
          {...triggerProps}
        >
          <ChevronsUpDownIcon />
        </ComboboxTrigger>
      )}
      {showClear && (
        <ComboboxClear
          className="absolute inset-y-0 end-0 inline-flex w-9 items-center justify-center text-muted-foreground/80"
          {...clearProps}
        >
          <XIcon />
        </ComboboxClear>
      )}
    </ComboboxPrimitive.Control>
  );
}

function ComboboxTrigger({ className, children, render, ...props }: any) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <ComboboxPrimitive.Trigger
      asChild={asChild}
      className={className}
      data-slot="combobox-trigger"
      {...props}
    >
      {child}
    </ComboboxPrimitive.Trigger>
  );
}

function ComboboxPopup({ className, children, ...props }: any) {
  return (
    <Portal>
      <ComboboxPrimitive.Positioner
        className="z-50 select-none"
        data-slot="combobox-positioner"
      >
        <ComboboxPrimitive.Content
          className={cn(
            "relative flex max-h-[min(var(--available-height),23rem)] min-w-(--reference-width) max-w-(--available-width) flex-col overflow-hidden rounded-lg border bg-popover text-foreground shadow-lg/5",
            className,
          )}
          data-slot="combobox-popup"
          {...props}
        >
          {children}
        </ComboboxPrimitive.Content>
      </ComboboxPrimitive.Positioner>
    </Portal>
  );
}

function ComboboxItem({ className, children, value, ...props }: any) {
  const context = React.useContext(ComboboxCompatContext);

  if (!context) {
    return null;
  }

  const normalized =
    (typeof value === "object" && value !== null
      ? context.normalizedByItem.get(value)
      : undefined) ??
    Array.from(context.normalizedByKey.values()).find(
      (entry) => entry.item === value,
    );

  if (!normalized) {
    return null;
  }

  return (
    <ComboboxPrimitive.Item
      className={cn(
        "grid min-h-8 cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1 ps-2 pe-4 text-base outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-64 sm:min-h-7 sm:text-sm",
        className,
      )}
      data-slot="combobox-item"
      item={normalized}
      {...props}
    >
      <ComboboxPrimitive.ItemIndicator className="col-start-1">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
        </svg>
      </ComboboxPrimitive.ItemIndicator>
      <div className="col-start-2">{children}</div>
    </ComboboxPrimitive.Item>
  );
}

function ComboboxSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-2 my-1 h-px bg-border last:hidden", className)}
      data-slot="combobox-separator"
      {...props}
    />
  );
}

function ComboboxGroup({
  className,
  items,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  items?: AnyItem[];
}) {
  return (
    <ComboboxGroupItemsContext.Provider value={items ?? null}>
      <div
        className={cn("[[role=group]+&]:mt-1.5", className)}
        data-slot="combobox-group"
        role="group"
        {...props}
      >
        {children}
      </div>
    </ComboboxGroupItemsContext.Provider>
  );
}

function ComboboxGroupLabel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "px-2 py-1.5 font-medium text-muted-foreground text-xs",
        className,
      )}
      data-slot="combobox-group-label"
      {...props}
    />
  );
}

function ComboboxEmpty({ className, ...props }: any) {
  return (
    <ComboboxPrimitive.Empty
      className={cn(
        "not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm",
        className,
      )}
      data-slot="combobox-empty"
      {...props}
    />
  );
}

function ComboboxRow({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={className} data-slot="combobox-row" {...props} />;
}

type ComboboxValueProps = any;

function ComboboxValue({
  className,
  placeholder,
  children,
  ...props
}: ComboboxValueProps) {
  return (
    <ComboboxPrimitive.Context>
      {(state: any) => {
        const selectedItems = Array.isArray(state.selectedItems)
          ? state.selectedItems
          : [];

        const renderedValue =
          typeof children === "function"
            ? state.multiple
              ? children(selectedItems)
              : selectedItems[0]
                ? children(selectedItems[0])
                : null
            : children;

        return (
          <span
            className={cn("truncate", className)}
            data-slot="combobox-value"
            {...props}
          >
            {renderedValue ?? state.valueAsString ?? placeholder}
          </span>
        );
      }}
    </ComboboxPrimitive.Context>
  );
}

function ComboboxList({ className, children, ...props }: any) {
  const context = React.useContext(ComboboxCompatContext);

  return (
    <ScrollArea scrollbarGutter scrollFade>
      <ComboboxPrimitive.List
        className={cn(
          "not-empty:scroll-py-1 not-empty:px-1 not-empty:py-1 in-data-has-overflow-y:pe-3",
          className,
        )}
        data-slot="combobox-list"
        {...props}
      >
        {typeof children === "function" && context
          ? context.renderItems.map((item, index) => (
              <React.Fragment key={`${getRawItemKey(item)}:${index}`}>
                {children(item)}
              </React.Fragment>
            ))
          : children}
      </ComboboxPrimitive.List>
    </ScrollArea>
  );
}

function ComboboxClear({ className, children, ...props }: any) {
  return (
    <ComboboxPrimitive.ClearTrigger
      className={className}
      data-slot="combobox-clear"
      {...props}
    >
      {children}
    </ComboboxPrimitive.ClearTrigger>
  );
}

function ComboboxStatus({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <ComboboxPrimitive.Context>
      {(state) => (
        <div
          className={cn(
            "px-3 py-2 font-medium text-muted-foreground text-xs",
            className,
          )}
          data-slot="combobox-status"
          {...props}
        >
          {state.hasSelectedItems
            ? `${state.selectedItems.length} selected`
            : "No items selected"}
        </div>
      )}
    </ComboboxPrimitive.Context>
  );
}

function ComboboxCollection({ children }: any) {
  const groupItems = React.useContext(ComboboxGroupItemsContext);

  if (typeof children === "function" && groupItems) {
    return (
      <>
        {groupItems.map((item, index) => (
          <React.Fragment key={`${getRawItemKey(item)}:${index}`}>
            {children(item)}
          </React.Fragment>
        ))}
      </>
    );
  }

  return <>{children}</>;
}

function ComboboxChips({
  className,
  children,
  startAddon,
  ...props
}: React.ComponentProps<"div"> & {
  startAddon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex min-h-9 w-full flex-wrap gap-1 rounded-lg border border-input bg-background p-[calc(--spacing(1)-1px)] text-base shadow-xs/5 outline-none",
        className,
      )}
      data-slot="combobox-chips"
      {...props}
    >
      {startAddon && (
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center ps-2 opacity-80 [&_svg:not([class*='size-'])]:size-4"
          data-slot="combobox-start-addon"
        >
          {startAddon}
        </div>
      )}
      {children}
    </div>
  );
}

function ComboboxChip({ children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className="flex items-center rounded-[calc(var(--radius-md)-1px)] bg-accent ps-2 font-medium text-accent-foreground text-sm"
      data-slot="combobox-chip"
      {...props}
    >
      {children}
    </span>
  );
}

const useComboboxFilter = (itemsOrOptions: any, query?: string): any => {
  if (Array.isArray(itemsOrOptions)) {
    const normalized = (query ?? "").trim().toLowerCase();
    if (!normalized) {
      return itemsOrOptions;
    }

    return itemsOrOptions.filter((item) =>
      getItemLabel(item).toLowerCase().includes(normalized),
    );
  }

  return {
    contains(value: string, nextQuery: string) {
      const left = String(value ?? "").toLowerCase();
      const right = String(nextQuery ?? "")
        .trim()
        .toLowerCase();
      if (!right) {
        return true;
      }
      return left.includes(right);
    },
  };
};

export {
  Combobox,
  ComboboxChipsInput,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxPopup,
  ComboboxItem,
  ComboboxSeparator,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxEmpty,
  ComboboxValue,
  ComboboxList,
  ComboboxClear,
  ComboboxStatus,
  ComboboxRow,
  ComboboxCollection,
  ComboboxChips,
  ComboboxChip,
  useComboboxFilter,
};
