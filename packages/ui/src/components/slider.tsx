"use client";

import { Slider as SliderPrimitive } from "@ark-ui/react/slider";
import * as React from "react";
import { cn } from "@coss/ui/lib/utils";

type SliderValue = number | number[];

type SliderCompatProps = Omit<
  SliderPrimitive.RootProps,
  "aria-label" | "defaultValue" | "onValueChange" | "value"
> & {
  "aria-label"?: string | string[];
  defaultValue?: SliderValue;
  onValueChange?: (value: SliderValue, details: unknown) => void;
  value?: SliderValue;
};

function Slider({
  "aria-label": ariaLabel,
  defaultValue,
  onValueChange,
  value,
  ...props
}: SliderCompatProps) {
  const toArray = (next: SliderValue | null | undefined) => {
    if (next === undefined) {
      return undefined;
    }
    if (next == null) {
      return [];
    }
    return Array.isArray(next) ? next : [next];
  };

  const returnsArray = Array.isArray(value ?? defaultValue);

  return (
    <SliderPrimitive.Root
      aria-label={
        Array.isArray(ariaLabel)
          ? ariaLabel
          : ariaLabel
            ? [ariaLabel]
            : undefined
      }
      defaultValue={toArray(defaultValue)}
      onValueChange={(details) => {
        const detailValue =
          details && typeof details === "object" && "value" in details
            ? (details as { value?: unknown }).value
            : undefined;
        const nextArray = Array.isArray(details)
          ? details
          : Array.isArray(detailValue)
            ? detailValue
            : [];
        const nextValue = returnsArray ? nextArray : (nextArray[0] ?? 0);
        onValueChange?.(nextValue, details);
      }}
      value={toArray(value)}
      {...props}
    />
  );
}

const SliderControl = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Control>,
  SliderPrimitive.ControlProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Control
    className={cn(
      "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
SliderControl.displayName = "SliderControl";

const SliderDraggingIndicator = SliderPrimitive.DraggingIndicator;

const SliderLabel = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Label>,
  SliderPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Label
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
SliderLabel.displayName = "SliderLabel";

const SliderMarker = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Marker>,
  SliderPrimitive.MarkerProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Marker
    className={cn("font-medium text-muted-foreground text-xs", className)}
    ref={ref}
    {...props}
  />
));
SliderMarker.displayName = "SliderMarker";

const SliderMarkerGroup = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.MarkerGroup>,
  SliderPrimitive.MarkerGroupProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.MarkerGroup
    className={cn("mt-2", className)}
    ref={ref}
    {...props}
  />
));
SliderMarkerGroup.displayName = "SliderMarkerGroup";

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  SliderPrimitive.RangeProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Range
    className={cn(
      "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
      className,
    )}
    ref={ref}
    {...props}
  />
));
SliderRange.displayName = "SliderRange";

const SliderRootProvider = SliderPrimitive.RootProvider;

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  SliderPrimitive.ThumbProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Thumb
    className={cn(
      "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm outline-none ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.HiddenInput />
  </SliderPrimitive.Thumb>
));
SliderThumb.displayName = "SliderThumb";

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  SliderPrimitive.TrackProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Track
    className={cn(
      "relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5",
      className,
    )}
    ref={ref}
    {...props}
  />
));
SliderTrack.displayName = "SliderTrack";

const SliderValueText = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.ValueText>,
  SliderPrimitive.ValueTextProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.ValueText
    className={cn("font-medium text-sm tabular-nums", className)}
    ref={ref}
    {...props}
  />
));
SliderValueText.displayName = "SliderValueText";

const SliderValue = SliderValueText;

export {
  Slider,
  SliderControl,
  SliderDraggingIndicator,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderRootProvider,
  SliderThumb,
  SliderTrack,
  SliderValue,
  SliderValueText,
};

export { useSlider } from "@ark-ui/react/slider";
