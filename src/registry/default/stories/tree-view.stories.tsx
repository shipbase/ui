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
} from "../ui/tree-view"

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
          <TreeViewBranchContent className="relative">
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
              <TreeViewBranchContent className="relative">
                <TreeViewItem value="1.2.1">
                  <File className="h-4 w-4 shrink-0" />
                  <TreeViewItemText>Item 1.2.1</TreeViewItemText>
                </TreeViewItem>
                <TreeViewBranch value="1.2.2">
                  <TreeViewBranchControl>
                    <TreeViewBranchIndicator className="data-[state=open]:hidden">
                      <FolderClosed className="h-4 w-4 shrink-0" />
                    </TreeViewBranchIndicator>
                    <TreeViewBranchIndicator className="data-[state=closed]:hidden">
                      <FolderOpen className="h-4 w-4 shrink-0" />
                    </TreeViewBranchIndicator>
                    <TreeViewBranchText>Item 1.2.2</TreeViewBranchText>
                  </TreeViewBranchControl>
                  <TreeViewBranchContent className="relative">
                    <TreeViewItem value="1.2.2.1">
                      <File className="h-4 w-4 shrink-0" />
                      <TreeViewItemText>Item 1.2.2.1</TreeViewItemText>
                    </TreeViewItem>
                  </TreeViewBranchContent>
                </TreeViewBranch>
                <TreeViewItem value="1.2.3">
                  <File className="h-4 w-4 shrink-0" />
                  <TreeViewItemText>Item 1.2.3</TreeViewItemText>
                </TreeViewItem>
              </TreeViewBranchContent>
            </TreeViewBranch>
          </TreeViewBranchContent>
        </TreeViewBranch>
        <TreeViewBranch value="2">
          <TreeViewBranchControl>
            <TreeViewBranchIndicator className="data-[state=open]:hidden">
              <FolderClosed className="h-4 w-4 shrink-0" />
            </TreeViewBranchIndicator>
            <TreeViewBranchIndicator className="data-[state=closed]:hidden">
              <FolderOpen className="h-4 w-4 shrink-0" />
            </TreeViewBranchIndicator>
            <TreeViewBranchText>Item 2</TreeViewBranchText>
          </TreeViewBranchControl>
          <TreeViewBranchContent className="relative">
            <TreeViewBranch value="2.1">
              <TreeViewBranchControl>
                <TreeViewBranchIndicator className="data-[state=open]:hidden">
                  <FolderClosed className="h-4 w-4 shrink-0" />
                </TreeViewBranchIndicator>
                <TreeViewBranchIndicator className="data-[state=closed]:hidden">
                  <FolderOpen className="h-4 w-4 shrink-0" />
                </TreeViewBranchIndicator>
                <TreeViewBranchText>Item 2.1</TreeViewBranchText>
              </TreeViewBranchControl>
              <TreeViewBranchContent className="relative">
                <TreeViewBranch value="2.1.1">
                  <TreeViewBranchControl>
                    <TreeViewBranchIndicator className="data-[state=open]:hidden">
                      <FolderClosed className="h-4 w-4 shrink-0" />
                    </TreeViewBranchIndicator>
                    <TreeViewBranchIndicator className="data-[state=closed]:hidden">
                      <FolderOpen className="h-4 w-4 shrink-0" />
                    </TreeViewBranchIndicator>
                    <TreeViewBranchText>Item 2.1.1</TreeViewBranchText>
                  </TreeViewBranchControl>
                  <TreeViewBranchContent className="relative">
                    <TreeViewItem value="2.1.1.1">
                      <File className="h-4 w-4 shrink-0" />
                      <TreeViewItemText>Item 2.1.1.1</TreeViewItemText>
                    </TreeViewItem>
                  </TreeViewBranchContent>
                </TreeViewBranch>
              </TreeViewBranchContent>
            </TreeViewBranch>
            <TreeViewItem value="2.2">
              <File className="h-4 w-4 shrink-0" />
              <TreeViewItemText>Item 2.2</TreeViewItemText>
            </TreeViewItem>
          </TreeViewBranchContent>
        </TreeViewBranch>
        <TreeViewItem value="3">
          <File className="h-4 w-4 shrink-0" />
          <TreeViewItemText>Item 3</TreeViewItemText>
        </TreeViewItem>
      </TreeViewTree>
    </TreeView>
  )
}
