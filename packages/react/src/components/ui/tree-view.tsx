"use client"

import * as React from "react"

import { TreeView as TreeViewPrimitive } from "@ark-ui/react/tree-view"

import { cn } from "@/lib/utils"

const TreeView = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.Root
    ref={ref}
    className={cn("w-full [--pl:0.5rem]", className)}
    {...props}
  />
))

const TreeViewContext = TreeViewPrimitive.Context

const TreeViewBranch = TreeViewPrimitive.Branch

const TreeViewBranchIndicator = TreeViewPrimitive.BranchIndicator

const TreeViewBranchText = TreeViewPrimitive.BranchText

const TreeViewItemText = TreeViewPrimitive.ItemText

const TreeViewTree = TreeViewPrimitive.Tree

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

const TreeViewBranchControl = React.forwardRef<
  React.ElementRef<typeof TreeViewPrimitive.BranchControl>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitive.BranchControl>
>(({ className, ...props }, ref) => (
  <TreeViewPrimitive.BranchControl
    ref={ref}
    className={cn(
      "flex w-full items-center gap-2 rounded-md px-2 py-1 pl-[calc(var(--indent)+var(--pl))] text-primary [--indent:calc((var(--depth)-1)*1rem+(var(--depth)-1)*0.5rem)] hover:bg-muted",
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
    className={cn(
      "relative [--indent:calc(var(--depth)*1rem+(var(--depth)-1)*0.5rem)] before:absolute before:left-[var(--indent)] before:h-full before:w-0.5 before:rounded before:bg-border before:content-['']",
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
      "ml-[var(--indent)] flex w-full items-center gap-2 rounded-md px-2 py-1 text-primary [--indent:calc((var(--depth)-1)*1rem+(var(--depth)-1)*0.5rem)] hover:bg-muted",
      className
    )}
    {...props}
  />
))

export {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewContext,
  TreeViewItem,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewTree,
}
