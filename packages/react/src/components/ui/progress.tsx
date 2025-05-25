"use client"

import * as React from "react"

import { Progress as ProgressPrimitive } from "@ark-ui/react/progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressPrimitive.RootProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("[--size:40px] [--thickness:4px]", className)}
    {...props}
  />
))

const ProgressLabel = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Label>,
  ProgressPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Label
    ref={ref}
    className={cn("font-medium text-sm leading-none", className)}
    {...props}
  />
))
ProgressLabel.displayName = ProgressPrimitive.Label.displayName

const ProgressTrack = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Track>,
  ProgressPrimitive.TrackProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Track
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  />
))
ProgressTrack.displayName = ProgressPrimitive.Track.displayName

const ProgressRange = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Range>,
  ProgressPrimitive.RangeProps
>(({ className, ...props }, ref) => (
  <ProgressPrimitive.Range
    ref={ref}
    className={cn("h-full w-full flex-1 bg-primary transition-all", className)}
    {...props}
  />
))
ProgressRange.displayName = ProgressPrimitive.Range.displayName

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
ProgressValueText.displayName = ProgressPrimitive.ValueText.displayName

const ProgressCircle = ProgressPrimitive.Circle

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
ProgressCircleTrack.displayName = ProgressPrimitive.CircleTrack.displayName

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
ProgressCircleRange.displayName = ProgressPrimitive.CircleRange.displayName

export {
  Progress,
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  ProgressLabel,
  ProgressRange,
  ProgressTrack,
  ProgressValueText,
}
