"use client"

import * as React from "react"

import { Avatar as AvatarPrimitive } from "@ark-ui/react/avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarPrimitive.RootProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))

const AvatarContext = AvatarPrimitive.Context

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarPrimitive.FallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex size-full items-center justify-center rounded-[inherit] bg-secondary text-xs",
      className
    )}
    {...props}
  />
))

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarPrimitive.ImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square size-full", className)}
    {...props}
  />
))

export { Avatar, AvatarContext, AvatarFallback, AvatarImage }
