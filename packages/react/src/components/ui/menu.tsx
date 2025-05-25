"use client"

import * as React from "react"

import { Menu as MenuPrimitive } from "@ark-ui/react/menu"
import { Portal } from "@ark-ui/react/portal"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const Menu = MenuPrimitive.Root

const MenuTrigger = MenuPrimitive.Trigger

const MenuItemGroup = MenuPrimitive.ItemGroup

const MenuRadioItemGroup = MenuPrimitive.RadioItemGroup

const MenuContextTrigger = MenuPrimitive.ContextTrigger

const MenuIndicator = MenuPrimitive.Indicator

const MenuItemText = MenuPrimitive.ItemText

const MenuTriggerItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.TriggerItem>,
  MenuPrimitive.TriggerItemProps & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenuPrimitive.TriggerItem
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenuPrimitive.TriggerItem>
))
MenuTriggerItem.displayName = MenuPrimitive.TriggerItem.displayName

const MenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  MenuPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <Portal>
    <MenuPrimitive.Positioner>
      <MenuPrimitive.Content
        ref={ref}
        className={cn(
          "fade-in-80 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 min-w-[8rem] animate-in overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        )}
        {...props}
      />
    </MenuPrimitive.Positioner>
  </Portal>
))
MenuContent.displayName = MenuPrimitive.Content.displayName

const MenuItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Item>,
  MenuPrimitive.ItemProps & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenuItem.displayName = MenuPrimitive.Item.displayName

const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.CheckboxItem>,
  MenuPrimitive.CheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <MenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenuPrimitive.ItemIndicator>
    </span>
    <MenuPrimitive.ItemText>{children}</MenuPrimitive.ItemText>
  </MenuPrimitive.CheckboxItem>
))
MenuCheckboxItem.displayName = MenuPrimitive.CheckboxItem.displayName

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.RadioItem>,
  MenuPrimitive.RadioItemProps
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenuPrimitive.ItemIndicator>
    </span>
    <MenuPrimitive.ItemText> {children}</MenuPrimitive.ItemText>
  </MenuPrimitive.RadioItem>
))
MenuRadioItem.displayName = MenuPrimitive.RadioItem.displayName

const MenuItemGroupLabel = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.ItemGroupLabel>,
  MenuPrimitive.ItemGroupLabelProps & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.ItemGroupLabel
    ref={ref}
    className={cn(
      "px-2 py-1.5 font-semibold text-sm",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenuItemGroupLabel.displayName = MenuPrimitive.ItemGroupLabel.displayName

const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  MenuPrimitive.SeparatorProps
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenuSeparator.displayName = MenuPrimitive.Separator.displayName

const MenuArrow = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Arrow>,
  MenuPrimitive.ArrowProps
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Arrow>
    <MenuPrimitive.ArrowTip
      ref={ref}
      className={cn("border-t-[1px] border-l-[1px]", className)}
      {...props}
    />
  </MenuPrimitive.Arrow>
))
MenuArrow.displayName = MenuPrimitive.Arrow.displayName

export {
  Menu,
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuContextTrigger,
  MenuIndicator,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuItemText,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
}
