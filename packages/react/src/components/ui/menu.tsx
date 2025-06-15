"use client"

import * as React from "react"

import {
  type HTMLProps,
  type PolymorphicProps,
  ark,
} from "@ark-ui/react/factory"
import { Menu as MenuPrimitive, menuAnatomy } from "@ark-ui/react/menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const parts = menuAnatomy.extendWith("shortcut").build()

const Menu = MenuPrimitive.Root

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

const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.CheckboxItem>,
  MenuPrimitive.CheckboxItemProps
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    {...props}
  >
    <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <CheckIcon className="size-4" />
      </MenuPrimitive.ItemIndicator>
    </span>
    <MenuPrimitive.ItemText>{children}</MenuPrimitive.ItemText>
  </MenuPrimitive.CheckboxItem>
))

const MenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  MenuPrimitive.ContentProps
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Positioner>
    <MenuPrimitive.Content
      ref={ref}
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 max-h-(--available-height) min-w-[8rem] max-w-(--available-width) origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  </MenuPrimitive.Positioner>
))

const MenuContextTrigger = MenuPrimitive.ContextTrigger

const MenuIndicator = MenuPrimitive.Indicator

const MenuItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Item>,
  MenuPrimitive.ItemProps & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.Item
    ref={ref}
    data-inset={inset}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[inset]:pl-8 data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

const MenuItemGroup = MenuPrimitive.ItemGroup

const MenuItemGroupLabel = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.ItemGroupLabel>,
  MenuPrimitive.ItemGroupLabelProps & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.ItemGroupLabel
    ref={ref}
    data-inset={inset}
    className={cn(
      "px-2 py-1.5 font-medium text-sm data-[inset]:pl-8",
      className
    )}
    {...props}
  />
))

const MenuItemText = MenuPrimitive.ItemText

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.RadioItem>,
  MenuPrimitive.RadioItemProps
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <CircleIcon className="size-2 fill-current" />
      </MenuPrimitive.ItemIndicator>
    </span>
    <MenuPrimitive.ItemText>{children}</MenuPrimitive.ItemText>
  </MenuPrimitive.RadioItem>
))

const MenuRadioItemGroup = MenuPrimitive.RadioItemGroup

const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  MenuPrimitive.SeparatorProps
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))

const MenuShortcut = React.forwardRef<
  HTMLSpanElement,
  PolymorphicProps & HTMLProps<"span">
>(({ className, ...props }, ref) => {
  return (
    <ark.span
      ref={ref}
      {...parts.shortcut.attrs}
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
})

const MenuTrigger = MenuPrimitive.Trigger

const MenuTriggerItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.TriggerItem>,
  MenuPrimitive.TriggerItemProps & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenuPrimitive.TriggerItem
    ref={ref}
    data-inset={inset}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[inset]:pl-8 data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto size-4 text-muted-foreground/80" />
  </MenuPrimitive.TriggerItem>
))

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
  MenuShortcut,
  MenuTrigger,
  MenuTriggerItem,
}
