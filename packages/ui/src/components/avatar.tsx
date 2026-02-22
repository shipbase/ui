"use client";

import { Avatar as AvatarPrimitive } from "@ark-ui/react/avatar";
import * as React from "react";

import { cn } from "@coss/ui/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarPrimitive.RootProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    className={cn(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Avatar.displayName = "Avatar";

const AvatarContext = AvatarPrimitive.Context;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarPrimitive.FallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    className={cn(
      "flex size-full items-center justify-center rounded-[inherit] bg-secondary text-xs",
      className,
    )}
    ref={ref}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarPrimitive.ImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    className={cn("aspect-square size-full", className)}
    ref={ref}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

export { Avatar, AvatarContext, AvatarFallback, AvatarImage };
