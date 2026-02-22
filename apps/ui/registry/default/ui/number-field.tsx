"use client";

import { NumberInput as NumberFieldPrimitive } from "@ark-ui/react/number-input";
import { MinusIcon, PlusIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/registry/default/lib/utils";
import { Label } from "@/registry/default/ui/label";

const NumberFieldContext = React.createContext<{
  fieldId: string;
} | null>(null);

type NumberFieldValue = number | string | null | undefined;

type NumberFieldCompatProps = Omit<
  NumberFieldPrimitive.RootProps,
  "defaultValue" | "onValueChange" | "value"
> & {
  defaultValue?: NumberFieldValue;
  format?: unknown;
  onValueChange?: (value: any, details: unknown) => void;
  render?: React.ReactElement;
  size?: "sm" | "default" | "lg";
  value?: NumberFieldValue;
};

function NumberField({
  id,
  className,
  size = "default",
  render,
  value,
  defaultValue,
  onValueChange,
  children,
  ...props
}: NumberFieldCompatProps) {
  const parsedClassName = cn(
    "flex w-full flex-col items-start gap-2",
    className,
  );

  const generatedId = React.useId();
  const fieldId = id ?? generatedId;

  const renderElement =
    render && React.isValidElement(render)
      ? React.cloneElement(render as React.ReactElement, undefined, children)
      : undefined;

  return (
    <NumberFieldContext.Provider value={{ fieldId }}>
      <NumberFieldPrimitive.Root
        className={parsedClassName}
        data-size={size}
        data-slot="number-field"
        defaultValue={defaultValue == null ? undefined : String(defaultValue)}
        id={fieldId}
        onValueChange={(details) => {
          const rawValue =
            details && typeof details === "object" && "value" in details
              ? (details as { value?: unknown }).value
              : details;
          const numericValue = Number(rawValue);
          const nextValue = Number.isNaN(numericValue)
            ? rawValue
            : numericValue;
          onValueChange?.(nextValue as NumberFieldValue, details);
        }}
        value={value == null ? undefined : String(value)}
        {...props}
      >
        {renderElement ?? children}
      </NumberFieldPrimitive.Root>
    </NumberFieldContext.Provider>
  );
}

function NumberFieldGroup({
  className,
  ...props
}: NumberFieldPrimitive.ControlProps) {
  return (
    <NumberFieldPrimitive.Control
      className={cn(
        "relative flex w-full justify-between rounded-lg border border-input bg-background text-base text-foreground shadow-xs/5 outline-none ring-ring/24 transition-shadow focus-within:border-ring focus-within:ring-[3px] data-[disabled]:pointer-events-none data-[disabled]:opacity-64 sm:text-sm",
        className,
      )}
      data-slot="number-field-group"
      {...props}
    />
  );
}

function NumberFieldDecrement({
  className,
  ...props
}: NumberFieldPrimitive.DecrementTriggerProps) {
  return (
    <NumberFieldPrimitive.DecrementTrigger
      className={cn(
        "relative flex shrink-0 cursor-pointer items-center justify-center rounded-s-[calc(var(--radius-lg)-1px)] px-[calc(--spacing(3)-1px)] transition-colors hover:bg-accent",
        className,
      )}
      data-slot="number-field-decrement"
      {...props}
    >
      <MinusIcon />
    </NumberFieldPrimitive.DecrementTrigger>
  );
}

function NumberFieldIncrement({
  className,
  ...props
}: NumberFieldPrimitive.IncrementTriggerProps) {
  return (
    <NumberFieldPrimitive.IncrementTrigger
      className={cn(
        "relative flex shrink-0 cursor-pointer items-center justify-center rounded-e-[calc(var(--radius-lg)-1px)] px-[calc(--spacing(3)-1px)] transition-colors hover:bg-accent",
        className,
      )}
      data-slot="number-field-increment"
      {...props}
    >
      <PlusIcon />
    </NumberFieldPrimitive.IncrementTrigger>
  );
}

function NumberFieldInput({
  className,
  ...props
}: NumberFieldPrimitive.InputProps) {
  return (
    <NumberFieldPrimitive.Input
      className={cn(
        "h-8.5 w-full min-w-0 grow bg-transparent px-[calc(--spacing(3)-1px)] text-center tabular-nums leading-8.5 outline-none sm:h-7.5 sm:leading-7.5",
        className,
      )}
      data-slot="number-field-input"
      {...props}
    />
  );
}

function NumberFieldScrubArea({
  className,
  label,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  label: string;
}) {
  const context = React.useContext(NumberFieldContext);

  if (!context) {
    throw new Error(
      "NumberFieldScrubArea must be used within a NumberField component for accessibility.",
    );
  }

  return (
    <div
      className={cn("flex cursor-ew-resize", className)}
      data-slot="number-field-scrub-area"
      {...props}
    >
      <Label className="cursor-ew-resize" htmlFor={context.fieldId}>
        {label}
      </Label>
      {children}
    </div>
  );
}

export {
  NumberField,
  NumberFieldScrubArea,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldGroup,
  NumberFieldInput,
};
