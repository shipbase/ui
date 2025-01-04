import type { MarkdownHeading } from "astro"
import * as React from "react"

import { type TocItem, generateToCTree } from "@/lib/toc"
import { cn } from "@/lib/utils"
import {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndentGuide,
  TreeViewBranchText,
  TreeViewItem,
  TreeViewItemText,
  TreeViewNodeProvider,
  type TreeViewNodeProviderProps,
  TreeViewTree,
  createTreeCollection,
} from "@ui/react/tree-view"

interface Props {
  headings: MarkdownHeading[]
}

function useActiveItem(headings: MarkdownHeading[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    for (const heading of headings) {
      const element = document.getElementById(heading.slug)
      if (element) {
        observer.observe(element)
      }
    }

    return () => {
      for (const heading of headings) {
        const element = document.getElementById(heading.slug)
        if (element) {
          observer.unobserve(element)
        }
      }
    }
  }, [headings])

  return activeId
}

export function TableOfContent({ headings }: Props) {
  const toc = generateToCTree(headings)

  if (!toc) return null

  const activeId = useActiveItem(headings)

  const collection = createTreeCollection<TocItem>({
    rootNode: toc,
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.text,
  })

  const defaultExpandedValue = collection.flatten().map((e) => e.value)

  return (
    <TreeView
      collection={collection}
      className="w-full"
      defaultExpandedValue={defaultExpandedValue}
      expandOnClick={false}
    >
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeTreeNode
            key={node.id}
            node={node}
            indexPath={[index]}
            activeId={activeId}
          />
        ))}
      </TreeViewTree>
    </TreeView>
  )
}

function TreeTreeNode({
  node,
  indexPath,
  activeId,
}: TreeViewNodeProviderProps<TocItem> & { activeId: string | null }) {
  return (
    <TreeViewNodeProvider node={node} indexPath={indexPath}>
      {node.children ? (
        <TreeViewBranch>
          <TreeViewBranchControl
            className={cn(
              "max-w-fit hover:bg-transparent hover:underline",
              activeId === node.slug && "font-medium"
            )}
          >
            <a href={`#${node.slug}`}>
              <TreeViewBranchText>{node.text}</TreeViewBranchText>
            </a>
          </TreeViewBranchControl>
          <TreeViewBranchContent>
            <TreeViewBranchIndentGuide />
            {node.children.map((child, index) => (
              <TreeTreeNode
                activeId={activeId}
                key={child.id}
                node={child}
                indexPath={[...indexPath, index]}
              />
            ))}
          </TreeViewBranchContent>
        </TreeViewBranch>
      ) : (
        <TreeViewItem
          className={cn(
            "hover:bg-transparent hover:underline",
            activeId === node.slug && "font-medium"
          )}
        >
          <a href={`#${node.slug}`}>
            <TreeViewItemText>{node.text}</TreeViewItemText>
          </a>
        </TreeViewItem>
      )}
    </TreeViewNodeProvider>
  )
}
