import * as React from "react"
import { TreeView as TreeViewPrimitive } from "@ark-ui/react/tree-view"

import { cn } from "@/lib/utils"

const TreeView = TreeViewPrimitive.Root

const TreeViewLabel = TreeViewPrimitive.Label

const TreeViewTree = TreeViewPrimitive.Tree

const TreeViewBranch = TreeViewPrimitive.Branch

const TreeViewBranchIndicator = TreeViewPrimitive.BranchIndicator

const TreeViewBranchText = TreeViewPrimitive.BranchText

const TreeViewBranchContent = TreeViewPrimitive.BranchContent

const TreeViewItemText = TreeViewPrimitive.ItemText

const TreeViewBranchControl = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.BranchControl>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.BranchControl>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.BranchControl
    ref={ref}
    className={cn(
      "flex items-center gap-2 rounded-md px-2 py-1 pl-[calc(var(--indent)+0.5rem)] text-primary [--indent:calc((var(--depth)-1)*1rem+(var(--depth)-1)*0.5rem)] hover:bg-muted",
      className
    )}
    {...props}
  />
))

const TreeViewItem = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.Item>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.Item
    ref={ref}
    className={cn(
      "ml-[var(--indent)] flex items-center gap-2 rounded-md px-2 py-1 text-primary [--indent:calc((var(--depth)-1)*1rem+(var(--depth)-1)*0.5rem)] hover:bg-muted",
      className
    )}
    {...props}
  />
))

export {
  TreeViewLabel,
  TreeViewItemText,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchText,
  TreeViewBranchIndicator,
  TreeViewItem,
  TreeViewTree,
}
