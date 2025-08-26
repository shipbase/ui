"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Slider as SliderPrimitive } from "@ark-ui/react/slider"

const Slider = SliderPrimitive.Root

const SliderControl = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Control>,
  SliderPrimitive.ControlProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Control
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

const SliderDraggingIndicator = SliderPrimitive.DraggingIndicator

const SliderLabel = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Label>,
  SliderPrimitive.LabelProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Label
    ref={ref}
    className={cn(
      "select-none font-medium text-foreground text-sm leading-4 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

const SliderMarker = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Marker>,
  SliderPrimitive.MarkerProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Marker
    ref={ref}
    className={cn("font-medium text-muted-foreground text-xs", className)}
    {...props}
  />
))

const SliderMarkerGroup = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.MarkerGroup>,
  SliderPrimitive.MarkerGroupProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.MarkerGroup
    ref={ref}
    className={cn("mt-2", className)}
    {...props}
  />
))

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  SliderPrimitive.RangeProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Range
    ref={ref}
    className={cn(
      "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
      className
    )}
    {...props}
  />
))

const SliderRootProvider = SliderPrimitive.RootProvider

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  SliderPrimitive.ThumbProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Thumb
    ref={ref}
    className={cn(
      "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm outline-none ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    <SliderPrimitive.HiddenInput />
  </SliderPrimitive.Thumb>
))

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  SliderPrimitive.TrackProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Track
    ref={ref}
    className={cn(
      "relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1.5",
      className
    )}
    {...props}
  />
))

const SliderValueText = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.ValueText>,
  SliderPrimitive.ValueTextProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.ValueText
    ref={ref}
    className={cn("font-medium text-sm tabular-nums", className)}
    {...props}
  />
))

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
  SliderValueText,
}

export { useSlider } from "@ark-ui/react/slider"
