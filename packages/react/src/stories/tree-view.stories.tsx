import {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndentGuide,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewBranchTrigger,
  TreeViewItem,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewNodeProvider,
  type TreeViewNodeProviderProps,
  TreeViewTree,
  createTreeCollection,
} from "@/components/ui/tree-view"
import { FolderClosed, FolderOpen } from "lucide-react"

export default {
  title: "Components/TreeView",
}

interface TreeNode {
  id: string
  name: string
  children?: TreeNode[]
}

export const Basic = () => {
  const collection = createTreeCollection<TreeNode>({
    rootNode: {
      id: "_ROOT_",
      name: "",
      children: [
        {
          id: "1",
          name: "Item 1",
          children: [
            {
              id: "1.1",
              name: "Item 1.1",
              children: [
                { id: "1.1.1", name: "Item 1.1.1" },
                {
                  id: "1.1.2",
                  name: "Item 1.1.2",
                  children: [
                    { id: "1.1.2.1", name: "Item 1.1.2.1" },
                    { id: "1.1.2.2", name: "Item 1.1.2.2" },
                  ],
                },
              ],
            },
            { id: "1.2", name: "Item 1.2" },
          ],
        },
        { id: "2", name: "Item 2" },
      ],
    },
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
  })
  return (
    <TreeView collection={collection} className="w-full">
      <TreeViewLabel>Tree View</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeTreeNode key={node.id} node={node} indexPath={[index]} />
        ))}
      </TreeViewTree>
    </TreeView>
  )
}

function TreeTreeNode({
  node,
  indexPath,
}: TreeViewNodeProviderProps<TreeNode>) {
  return (
    <TreeViewNodeProvider node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeViewBranch>
          <TreeViewBranchControl>
            <TreeViewBranchIndicator className="group">
              <FolderClosed className="h-4 w-4 group-data-[state=open]:hidden" />
              <FolderOpen className="h-4 w-4 group-data-[state=closed]:hidden" />
            </TreeViewBranchIndicator>
            <TreeViewBranchText>{node.name}</TreeViewBranchText>
          </TreeViewBranchControl>
          <TreeViewBranchContent>
            <TreeViewBranchIndentGuide />
            {node.children.map((child, index) => (
              <TreeTreeNode
                key={child.id}
                node={child}
                indexPath={[...indexPath, index]}
              />
            ))}
          </TreeViewBranchContent>
        </TreeViewBranch>
      ) : (
        <TreeViewItem>
          <TreeViewItemText>{node.name}</TreeViewItemText>
        </TreeViewItem>
      )}
    </TreeViewNodeProvider>
  )
}
