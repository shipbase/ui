"use client"

import * as React from "react"

import { Slider as SliderPrimitive } from "@ark-ui/react/slider"

const Slider = SliderPrimitive.Root

const SliderLabel = SliderPrimitive.Label

const SliderValueText = SliderPrimitive.ValueText

const SliderMarkGroup = SliderPrimitive.MarkerGroup

const SliderMark = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Marker>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Marker>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Marker
    ref={ref}
    className="before:-top-1.5 before:-translate-x-1/2 text-muted-foreground text-sm before:relative before:left-1/2 before:block before:size-1 before:rounded-full before:bg-background before:content-[''] dark:before:bg-foreground dark:before:data-[state='under-value']:bg-background"
    {...props}
  />
))

const SliderControl = () => (
  <SliderPrimitive.Control className="flex items-center rounded-full">
    <SliderPrimitive.Track className="h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Context>
      {(context) =>
        context.value.map((value, index) => (
          <SliderPrimitive.Thumb
            index={index}
            key={value}
            className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <SliderPrimitive.HiddenInput />
          </SliderPrimitive.Thumb>
        ))
      }
    </SliderPrimitive.Context>
  </SliderPrimitive.Control>
)

export {
  Slider,
  SliderControl,
  SliderLabel,
  SliderMark,
  SliderMarkGroup,
  SliderValueText,
}
