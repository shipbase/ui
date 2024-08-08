import { File, FolderClosed, FolderOpen } from "lucide-react"

import {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewItem,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewTree,
} from "@/components/ui/tree-view"

export default {
  title: "Components/TreeView",
}

export const Basic = () => {
  return (
    <TreeView className="w-full">
      <TreeViewLabel>Tree View</TreeViewLabel>
      <TreeViewTree>
        <TreeViewBranch value="1">
          <TreeViewBranchControl>
            <TreeViewBranchIndicator className="data-[state=open]:hidden">
              <FolderClosed className="h-4 w-4 shrink-0" />
            </TreeViewBranchIndicator>
            <TreeViewBranchIndicator className="data-[state=closed]:hidden">
              <FolderOpen className="h-4 w-4 shrink-0" />
            </TreeViewBranchIndicator>
            <TreeViewBranchText>Item 1</TreeViewBranchText>
          </TreeViewBranchControl>
          <TreeViewBranchContent>
            <TreeViewItem value="1.1">
              <File className="h-4 w-4 shrink-0" />
              <TreeViewItemText>Item 1.1</TreeViewItemText>
            </TreeViewItem>
            <TreeViewBranch value="1.2">
              <TreeViewBranchControl>
                <TreeViewBranchIndicator className="data-[state=open]:hidden">
                  <FolderClosed className="h-4 w-4 shrink-0" />
                </TreeViewBranchIndicator>
                <TreeViewBranchIndicator className="data-[state=closed]:hidden">
                  <FolderOpen className="h-4 w-4 shrink-0" />
                </TreeViewBranchIndicator>
                <TreeViewBranchText>Item 1.2</TreeViewBranchText>
              </TreeViewBranchControl>
              <TreeViewBranchContent>
                <TreeViewItem value="1.2.1">
                  <File className="h-4 w-4 shrink-0" />
                  <TreeViewItemText>Item 1.2.1</TreeViewItemText>
                </TreeViewItem>
              </TreeViewBranchContent>
            </TreeViewBranch>
          </TreeViewBranchContent>
        </TreeViewBranch>
        <TreeViewItem value="2">
          <File className="h-4 w-4 shrink-0" />
          <TreeViewItemText>Item 2</TreeViewItemText>
        </TreeViewItem>
      </TreeViewTree>
    </TreeView>
  )
}
