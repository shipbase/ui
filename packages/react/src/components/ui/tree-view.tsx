"use client"

import * as React from "react"

import { TreeView as TreeViewPrimitive } from "@ark-ui/react/tree-view"

import { cn } from "@/lib/utils"

const TreeView = TreeViewPrimitive.Root

const TreeViewProvider = TreeViewPrimitive.RootProvider

const TreeViewContext = TreeViewPrimitive.Context

const TreeViewTree = TreeViewPrimitive.Tree

const TreeViewNodeProvider = TreeViewPrimitive.NodeProvider

const TreeViewNodeContext = TreeViewPrimitive.NodeContext

const TreeViewBranch = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.Branch>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.Branch>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.Branch
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))

const TreeViewBranchControl = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.BranchControl>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.BranchControl>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.BranchControl
    ref={ref}
    className={cn(
      "flex w-full items-center gap-2 rounded-md px-2 py-1 text-primary hover:bg-muted",
      className
    )}
    {...props}
  />
))

const TreeViewBranchTrigger = TreeViewPrimitive.BranchTrigger

const TreeViewBranchIndicator = TreeViewPrimitive.BranchIndicator

const TreeViewBranchText = TreeViewPrimitive.BranchText

const TreeViewBranchIndentGuide = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.BranchIndentGuide>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.BranchIndentGuide>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.BranchIndentGuide
    ref={ref}
    className={cn(
      "absolute top-0 left-2 h-full w-px rounded bg-border",
      className
    )}
    {...props}
  />
))

const TreeViewBranchContent = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.BranchContent>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.BranchContent>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.BranchContent
    ref={ref}
    className={cn("relative pl-4", className)}
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
      "flex w-full items-center gap-2 rounded-md px-2 py-1 text-primary hover:bg-muted",
      className
    )}
    {...props}
  />
))

const TreeViewLabel = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.Label>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.Label
    ref={ref}
    className={cn("font-medium text-sm leading-none", className)}
    {...props}
  />
))

const TreeViewItemText = TreeViewPrimitive.ItemText

const TreeViewItemIndicator = TreeViewPrimitive.ItemIndicator

export {
  createFileTreeCollection,
  createTreeCollection,
  type TreeNode,
  type TreeViewNodeProviderProps,
} from "@ark-ui/react/tree-view"
export {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndentGuide,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewBranchTrigger,
  TreeViewContext,
  TreeViewItem,
  TreeViewItemIndicator,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewNodeContext,
  TreeViewNodeProvider,
  TreeViewProvider,
  TreeViewTree,
}
