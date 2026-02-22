"use client";

import { Progress as ProgressPrimitive } from "@ark-ui/react/progress";
import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

const Progress = ProgressPrimitive.Root;

const ProgressCircle = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Circle>,
  ProgressPrimitive.CircleProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Circle
    className={cn("[--size:40px] [--thickness:4px]", className)}
    ref={ref}
    {...props}
  />
));
ProgressCircle.displayName = "ProgressCircle";

const ProgressCircleRange = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.CircleRange>,
  ProgressPrimitive.CircleRangeProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.CircleRange
    className={cn("stroke-primary transition-all", className)}
    ref={ref}
    {...props}
  />
));
ProgressCircleRange.displayName = "ProgressCircleRange";

const ProgressCircleTrack = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.CircleTrack>,
  ProgressPrimitive.CircleTrackProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.CircleTrack
    className={cn("stroke-secondary", className)}
    ref={ref}
    {...props}
  />
));
ProgressCircleTrack.displayName = "ProgressCircleTrack";

const ProgressContext = ProgressPrimitive.Context;

const ProgressLabel = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Label>,
  ProgressPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Label
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ProgressLabel.displayName = "ProgressLabel";

const ProgressRange = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Range>,
  ProgressPrimitive.RangeProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Range
    className={cn(
      "h-full w-full flex-1 bg-primary transition-all",
      "data-[state=indeterminate]:repeat-infinite data-[state=indeterminate]:slide-in-from-left data-[state=indeterminate]:slide-out-to-right data-[state=indeterminate]:animate-[in-out_1s_ease-in-out]",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ProgressRange.displayName = "ProgressRange";

const ProgressRootProvider = ProgressPrimitive.RootProvider;

const ProgressTrack = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Track>,
  ProgressPrimitive.TrackProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Track
    className={cn(
      "relative overflow-hidden rounded-full bg-primary/20",
      "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ProgressTrack.displayName = "ProgressTrack";

type ProgressValueTextProps = Omit<
  ProgressPrimitive.ValueTextProps,
  "children"
> & {
  children?:
    | React.ReactNode
    | ((formatted: string, value: unknown) => React.ReactNode);
};

const ProgressValueText = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.ValueText>,
  ProgressValueTextProps
>(({ className, children, ...props }, ref) => (
  <ProgressPrimitive.Context>
    {(state) => (
      <ProgressPrimitive.ValueText
        className={cn("text-muted-foreground text-sm", className)}
        ref={ref}
        {...props}
      >
        {typeof children === "function"
          ? children(state.valueAsString ?? "", state.value)
          : children}
      </ProgressPrimitive.ValueText>
    )}
  </ProgressPrimitive.Context>
));
ProgressValueText.displayName = "ProgressValueText";

const ProgressView = ProgressPrimitive.View;
const ProgressIndicator = ProgressRange;
const ProgressValue = ProgressValueText;

export {
  Progress,
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  ProgressContext,
  ProgressLabel,
  ProgressRange,
  ProgressIndicator,
  ProgressRootProvider,
  ProgressTrack,
  ProgressValue,
  ProgressValueText,
  ProgressView,
};

export { useProgress } from "@ark-ui/react/progress";
