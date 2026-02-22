"use client";

import { Checkbox as CheckboxPrimitive } from "@ark-ui/react/checkbox";

import { cn } from "@/registry/default/lib/utils";

type CheckboxGroupProps = Omit<
  CheckboxPrimitive.GroupProps,
  "onValueChange"
> & {
  allValues?: string[];
  onValueChange?: (value: string[]) => void;
};

function CheckboxGroup({
  className,
  onValueChange,
  allValues: _allValues,
  ...props
}: CheckboxGroupProps) {
  const getNextValues = (details: unknown) => {
    if (Array.isArray(details)) {
      return details;
    }

    if (details && typeof details === "object") {
      const valueDetails = details as { value?: string[]; values?: string[] };
      return valueDetails.value ?? valueDetails.values ?? [];
    }

    return [];
  };

  return (
    <CheckboxPrimitive.Group
      className={cn("flex flex-col items-start gap-3", className)}
      data-slot="checkbox-group"
      onValueChange={(details) => onValueChange?.(getNextValues(details))}
      {...props}
    />
  );
}

export { CheckboxGroup };
