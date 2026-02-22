"use client";

import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { Menu as MenuPrimitive, menuAnatomy } from "@ark-ui/react/menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import * as React from "react";
import { renderAsChild } from "@coss/ui/lib/render";
import { cn } from "@coss/ui/lib/utils";

const parts = menuAnatomy.extendWith("shortcut").build();

const Menu = MenuPrimitive.Root as any;

const MenuArrow = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Arrow>,
  MenuPrimitive.ArrowProps
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Arrow
    className={cn(
      "[--arrow-background:var(--popover)] [--arrow-size:calc(var(--spacing)*2)]",
      className,
    )}
    ref={ref}
    {...props}
  >
    <MenuPrimitive.ArrowTip className="border-t border-l" />
  </MenuPrimitive.Arrow>
));
MenuArrow.displayName = "MenuArrow";

const MenuCheckboxItem = React.forwardRef<any, any>(
  (
    { className, children, checked, defaultChecked, value, variant, ...props },
    ref,
  ) => (
    <MenuPrimitive.CheckboxItem
      checked={checked ?? defaultChecked}
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        variant === "outline" && "border",
        className,
      )}
      ref={ref}
      value={value ?? (typeof children === "string" ? children : "item")}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenuPrimitive.ItemIndicator>
      </span>
      <MenuPrimitive.ItemText>{children}</MenuPrimitive.ItemText>
    </MenuPrimitive.CheckboxItem>
  ),
);
MenuCheckboxItem.displayName = "MenuCheckboxItem";

const MenuContent = React.forwardRef<any, any>(
  ({ className, align: _align, side: _side, ...props }, ref) => (
    <MenuPrimitive.Positioner>
      <MenuPrimitive.Content
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 max-h-(--available-height) min-w-[8rem] max-w-(--available-width) origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
          className,
        )}
        ref={ref}
        {...props}
      />
    </MenuPrimitive.Positioner>
  ),
);
MenuContent.displayName = "MenuContent";

const MenuContextTrigger = MenuPrimitive.ContextTrigger;

const MenuIndicator = MenuPrimitive.Indicator;

const MenuItem = React.forwardRef<any, any>(
  ({ className, inset, value, render, children, ...props }, ref) => {
    const { asChild, child } = renderAsChild({ children, render });

    return (
      <MenuPrimitive.Item
        asChild={asChild}
        className={cn(
          "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[inset]:pl-8 data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className,
        )}
        data-inset={inset}
        ref={ref}
        value={value ?? (typeof children === "string" ? children : "item")}
        {...props}
      >
        {child}
      </MenuPrimitive.Item>
    );
  },
);
MenuItem.displayName = "MenuItem";

const MenuItemGroup = MenuPrimitive.ItemGroup;

const MenuItemGroupLabel = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.ItemGroupLabel>,
  MenuPrimitive.ItemGroupLabelProps & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.ItemGroupLabel
    className={cn(
      "px-2 py-1.5 font-medium text-sm data-[inset]:pl-8",
      className,
    )}
    data-inset={inset}
    ref={ref}
    {...props}
  />
));
MenuItemGroupLabel.displayName = "MenuItemGroupLabel";

const MenuItemText = MenuPrimitive.ItemText;

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.RadioItem>,
  MenuPrimitive.RadioItemProps
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.RadioItem
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <CircleIcon className="size-2 fill-current" />
      </MenuPrimitive.ItemIndicator>
    </span>
    <MenuPrimitive.ItemText>{children}</MenuPrimitive.ItemText>
  </MenuPrimitive.RadioItem>
));
MenuRadioItem.displayName = "MenuRadioItem";

const MenuRadioItemGroup = MenuPrimitive.RadioItemGroup;

const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  MenuPrimitive.SeparatorProps
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    ref={ref}
    {...props}
  />
));
MenuSeparator.displayName = "MenuSeparator";

const MenuShortcut = React.forwardRef<HTMLSpanElement, HTMLArkProps<"span">>(
  ({ className, ...props }, ref) => {
    return (
      <ark.span
        ref={ref}
        {...parts.shortcut.attrs}
        className={cn(
          "ml-auto text-muted-foreground text-xs tracking-widest",
          className,
        )}
        {...props}
      />
    );
  },
);
MenuShortcut.displayName = "MenuShortcut";

function MenuTrigger({ children, render, openOnHover, ...props }: any) {
  const { asChild, child } = renderAsChild({ children, render });

  return (
    <MenuPrimitive.Trigger
      asChild={asChild}
      openOnHover={openOnHover}
      {...props}
    >
      {child}
    </MenuPrimitive.Trigger>
  );
}

const MenuTriggerItem = React.forwardRef<any, any>(
  ({ className, inset, children, render, ...props }, ref) => {
    const { asChild, child } = renderAsChild({ children, render });

    return (
      <MenuPrimitive.TriggerItem
        asChild={asChild}
        className={cn(
          "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[inset]:pl-8 data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className,
        )}
        data-inset={inset}
        ref={ref}
        {...props}
      >
        {asChild ? (
          child
        ) : (
          <>
            {child}
            <ChevronRightIcon className="ml-auto size-4 text-muted-foreground/80" />
          </>
        )}
      </MenuPrimitive.TriggerItem>
    );
  },
);
MenuTriggerItem.displayName = "MenuTriggerItem";

const MenuGroup = MenuItemGroup;
const MenuGroupLabel = MenuItemGroupLabel;
const MenuRadioGroup = MenuRadioItemGroup;
const MenuPopup = MenuContent;
const MenuPortal = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
const MenuSub = Menu;
const MenuSubTrigger = MenuTriggerItem;
const MenuSubPopup = MenuContent;
const MenuCreateHandle = () => ({});

export {
  MenuCreateHandle,
  MenuCreateHandle as DropdownMenuCreateHandle,
  Menu,
  Menu as DropdownMenu,
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuPopup,
  MenuPopup as DropdownMenuContent,
  MenuContextTrigger,
  MenuIndicator,
  MenuItem,
  MenuItem as DropdownMenuItem,
  MenuItemGroup,
  MenuGroup,
  MenuItemGroup as DropdownMenuGroup,
  MenuItemGroupLabel,
  MenuGroupLabel,
  MenuGroupLabel as DropdownMenuLabel,
  MenuItemText,
  MenuPortal,
  MenuPortal as DropdownMenuPortal,
  MenuRadioItem,
  MenuRadioItem as DropdownMenuRadioItem,
  MenuRadioItemGroup,
  MenuRadioGroup,
  MenuRadioGroup as DropdownMenuRadioGroup,
  MenuSeparator,
  MenuSeparator as DropdownMenuSeparator,
  MenuShortcut,
  MenuShortcut as DropdownMenuShortcut,
  MenuSub,
  MenuSub as DropdownMenuSub,
  MenuSubPopup,
  MenuSubPopup as DropdownMenuSubContent,
  MenuSubTrigger,
  MenuSubTrigger as DropdownMenuSubTrigger,
  MenuTrigger,
  MenuTrigger as DropdownMenuTrigger,
  MenuTriggerItem,
  MenuCheckboxItem as DropdownMenuCheckboxItem,
};
