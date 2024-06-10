"use client"

import * as React from "react"
import { Carousel as CarouselPrimitive } from "@ark-ui/react/carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

const Carousel = CarouselPrimitive.Root

const CarouselContext = CarouselPrimitive.Context

const CarouselItem = CarouselPrimitive.Item

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <CarouselPrimitive.PrevTrigger>
    <Button
      ref={ref}
      className={cn(className)}
      variant={variant}
      size={size}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  </CarouselPrimitive.PrevTrigger>
))

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(className)}
    variant={variant}
    size={size}
    {...props}
  >
    <ArrowRight className="h-4 w-4" />
    <span className="sr-only">Next slide</span>
  </Button>
))
