import * as React from "react"
import { TreeView as TreeViewPrimitive } from "@ark-ui/react/tree-view"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

const TreeView = TreeViewPrimitive.Root

const TreeViewBranchControl = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.BranchControl>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.BranchControl>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.BranchControl
    ref={ref}
    className={cn(
      "flex items-center gap-2 rounded-md p-1.5 ps-[var(--ps)] font-medium text-muted-foreground [--ps:calc((var(--depth)-1)*1rem)] hover:bg-muted hover:text-primary data-[depth='1']:text-primary",
      className
    )}
    {...props}
  />
))

const TreeViewBranchIndicator = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.BranchIndicator>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.BranchIndicator>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.BranchIndicator
    ref={ref}
    className={cn(
      "transition-all [&[data-state=open]>svg]:rotate-90",
      className
    )}
    {...props}
  >
    <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
  </TreeViewPrimitive.BranchIndicator>
))

const TreeViewItem = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.Item>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.Item
    ref={ref}
    className={cn(
      "hover:text-primary-background rounded-md p-1.5 ps-[var(--ps)] font-medium text-muted-foreground [--ps:calc((var(--depth)-1)*1rem+1.5rem)] hover:bg-muted hover:text-primary",
      className
    )}
    {...props}
  />
))

export {
  TreeView,
  TreeViewBranchControl,
  TreeViewBranchIndicator,
  TreeViewItem,
}
