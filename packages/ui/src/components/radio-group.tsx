"use client";

import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/react/radio-group";
import * as React from "react";

import { cn } from "@coss/ui/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupPrimitive.RootProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={cn("grid gap-3", className)}
    ref={ref}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

const RadioGroupContext = RadioGroupPrimitive.Context;

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  RadioGroupPrimitive.IndicatorProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Indicator
    className={cn(
      "left-(--left) h-(--height) w-(--width) transition-[left,top,width,height,box-shadow]! peer-has-data-[focus-visible]:border-ring peer-has-data-[focus-visible]:ring-[3px] peer-has-data-[focus-visible]:ring-ring/50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
RadioGroupIndicator.displayName = "RadioGroupIndicator";

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupPrimitive.ItemProps
>(({ className, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    className={cn("peer flex items-center gap-2", className)}
    ref={ref}
    {...props}
  >
    <RadioGroupPrimitive.ItemHiddenInput />
    {children}
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";

const RadioGroupItemContext = RadioGroupPrimitive.ItemContext;

const RadioGroupItemControl = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.ItemControl>,
  RadioGroupPrimitive.ItemControlProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.ItemControl
    className={cn(
      "data-[state=checked]:-outline-offset-[5px] aspect-square size-4 shrink-0 rounded-full border border-input bg-transparent shadow-xs transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[disabled]:cursor-not-allowed data-[state=checked]:border-primary data-[state=checked]:bg-primary-foreground data-[disabled]:opacity-50 data-[state=checked]:outline-4 data-[state=checked]:outline-primary data-[state=checked]:outline-solid dark:aria-invalid:ring-destructive/40",
      className,
    )}
    ref={ref}
    {...props}
  />
));
RadioGroupItemControl.displayName = "RadioGroupItemControl";

const RadioGroupItemText = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.ItemText>,
  RadioGroupPrimitive.ItemTextProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.ItemText
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
RadioGroupItemText.displayName = "RadioGroupItemText";

const RadioGroupLabel = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Label>,
  RadioGroupPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Label
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
RadioGroupLabel.displayName = "RadioGroupLabel";

const RadioGroupRootProvider = RadioGroupPrimitive.RootProvider;

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupPrimitive.ItemProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    className={cn("peer", className)}
    ref={ref}
    {...props}
  >
    <RadioGroupPrimitive.ItemHiddenInput />
    <RadioGroupPrimitive.ItemControl
      className={cn(
        "data-[state=checked]:-outline-offset-[5px] aspect-square size-4 shrink-0 rounded-full border border-input bg-transparent shadow-xs transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[disabled]:cursor-not-allowed data-[state=checked]:border-primary data-[state=checked]:bg-primary-foreground data-[disabled]:opacity-50 data-[state=checked]:outline-4 data-[state=checked]:outline-primary data-[state=checked]:outline-solid dark:aria-invalid:ring-destructive/40",
      )}
    />
  </RadioGroupPrimitive.Item>
));
Radio.displayName = "Radio";

export {
  RadioGroup,
  RadioGroupContext,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemContext,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
  RadioGroupRootProvider,
  Radio,
};

export { useRadioGroup } from "@ark-ui/react/radio-group";
