import * as React from "react"
import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/react/rating-group"
import { StarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const RatingGroup = RatingGroupPrimitive.Root

const RatingGroupContext = RatingGroupPrimitive.Context

const RatingGroupLabel = React.forwardRef<
  React.ElementRef<typeof RatingGroupPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof RatingGroupPrimitive.Label>
>(({ className, ...props }, ref) => (
  <RatingGroupPrimitive.Label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
      className
    )}
    {...props}
  />
))
RatingGroupLabel.displayName = RatingGroupPrimitive.Label.displayName

const RatingGroupControl = React.forwardRef<
  React.ElementRef<typeof RatingGroupPrimitive.Control>,
  React.ComponentPropsWithoutRef<typeof RatingGroupPrimitive.Control>
>(({ className, children, ...props }, ref) => (
  <RatingGroupPrimitive.Control
    ref={ref}
    className={cn("flex w-max gap-0.5", className)}
    {...props}
  >
    <RatingGroupPrimitive.HiddenInput />
    {children}
  </RatingGroupPrimitive.Control>
))
RatingGroupControl.displayName = RatingGroupPrimitive.Control.displayName

const RatingGroupItem = React.forwardRef<
  React.ElementRef<typeof RatingGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RatingGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RatingGroupPrimitive.Item
    ref={ref}
    className={cn(
      "cursor-pointer transition-all data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 *:data-[highlighted]:fill-current",
      className
    )}
    {...props}
  >
    <StarIcon />
  </RatingGroupPrimitive.Item>
))
RatingGroupItem.displayName = RatingGroupPrimitive.Item.displayName

export {
  RatingGroup,
  RatingGroupContext,
  RatingGroupControl,
  RatingGroupItem,
  RatingGroupLabel,
}
