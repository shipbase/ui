import { TreeView } from "@ark-ui/react/tree-view"

import { Button } from "../ui/button"
import {
  TreeViewBranchControl,
  TreeViewBranchIndicator,
  TreeViewItem,
} from "../ui/tree-view"

export default {
  title: "Components/TreeView",
}

export const Basic = () => {
  return (
    <TreeView.Root className="w-full">
      <TreeView.Tree className="flex flex-col gap-2">
        <TreeView.Branch value="1">
          <TreeViewBranchControl>
            <TreeViewBranchIndicator />
            <TreeView.BranchText>Item 1</TreeView.BranchText>
          </TreeViewBranchControl>
          <TreeView.BranchContent className="relative">
            <TreeViewItem value="1.1">
              <TreeView.ItemText>Item 1.1</TreeView.ItemText>
            </TreeViewItem>
            <TreeView.Branch value="1.2">
              <TreeViewBranchControl>
                <TreeViewBranchIndicator />
                <TreeView.BranchText>Item 1.2</TreeView.BranchText>
              </TreeViewBranchControl>
              <TreeView.BranchContent className="relative">
                <TreeViewItem value="1.2.1">
                  <TreeView.ItemText>Item 1.2.1</TreeView.ItemText>
                </TreeViewItem>
                <TreeViewItem value="1.2.2">
                  <TreeView.ItemText>Item 1.2.2</TreeView.ItemText>
                </TreeViewItem>
              </TreeView.BranchContent>
            </TreeView.Branch>
          </TreeView.BranchContent>
        </TreeView.Branch>
        <TreeView.Branch value="2">
          <TreeViewBranchControl>
            <TreeViewBranchIndicator />
            <TreeView.BranchText>Item 2</TreeView.BranchText>
          </TreeViewBranchControl>
          <TreeView.BranchContent className="relative">
            <TreeViewItem value="2.1">
              <TreeView.ItemText>Item 2.1</TreeView.ItemText>
            </TreeViewItem>
            <TreeViewItem value="2.2">
              <TreeView.ItemText>Item 2.2</TreeView.ItemText>
            </TreeViewItem>
          </TreeView.BranchContent>
        </TreeView.Branch>
        <TreeViewItem value="3">
          <TreeView.ItemText>Item 3</TreeView.ItemText>
        </TreeViewItem>
      </TreeView.Tree>
    </TreeView.Root>
  )
}
