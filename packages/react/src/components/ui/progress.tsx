"use client"

import * as React from "react"

import { Progress as ProgressPrimitive } from "@ark-ui/react/progress"

import { cn } from "@/lib/utils"

const Progress = ProgressPrimitive.Root

const ProgressCircle = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Circle>,
  ProgressPrimitive.CircleProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Circle
    ref={ref}
    className={cn("[--size:40px] [--thickness:4px]", className)}
    {...props}
  />
))

const ProgressCircleRange = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.CircleRange>,
  ProgressPrimitive.CircleRangeProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.CircleRange
    ref={ref}
    className={cn("stroke-primary transition-all", className)}
    {...props}
  />
))

const ProgressCircleTrack = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.CircleTrack>,
  ProgressPrimitive.CircleTrackProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.CircleTrack
    ref={ref}
    className={cn("stroke-secondary", className)}
    {...props}
  />
))

const ProgressContext = ProgressPrimitive.Context

const ProgressLabel = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Label>,
  ProgressPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

const ProgressRange = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Range>,
  ProgressPrimitive.RangeProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Range
    ref={ref}
    className={cn(
      "h-full w-full flex-1 bg-primary transition-all",
      "data-[state=indeterminate]:repeat-infinite data-[state=indeterminate]:slide-in-from-left data-[state=indeterminate]:slide-out-to-right data-[state=indeterminate]:animate-[in-out_1s_ease-in-out]",
      className
    )}
    {...props}
  />
))

const ProgressRootProvider = ProgressPrimitive.RootProvider

const ProgressTrack = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Track>,
  ProgressPrimitive.TrackProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Track
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-full bg-primary/20",
      "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
      className
    )}
    {...props}
  />
))

const ProgressValueText = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.ValueText>,
  ProgressPrimitive.ValueTextProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.ValueText
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
))

const ProgressView = ProgressPrimitive.View

export {
  Progress,
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  ProgressContext,
  ProgressLabel,
  ProgressRange,
  ProgressRootProvider,
  ProgressTrack,
  ProgressValueText,
  ProgressView,
}

export { useProgress } from "@ark-ui/react/progress"
