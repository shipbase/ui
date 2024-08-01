import type { MarkdownHeading } from "astro"

import type { ToC } from "@/lib/toc"
import {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchText,
  TreeViewItem,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewTree,
} from "@/registry/default/ui/tree-view"

interface Props {
  id?: string
  toc: ToC
  headings: MarkdownHeading[]
}

export function TableOfContent({ id, toc, headings }: Props) {
  return (
    <TreeView
      id={id}
      className="space-y-3"
      defaultExpandedValue={headings.map((h) => h.slug)}
    >
      <TreeViewLabel className="pl-2 font-medium">On This Page</TreeViewLabel>
      <TreeViewTree>
        <Tree toc={toc} />
      </TreeViewTree>
    </TreeView>
  )
}

function Tree({ toc }: { toc: ToC }) {
  if (!toc) return null
  return toc.map((item) =>
    item.children.length > 0 ? (
      <TreeViewBranch value={item.slug} key={item.slug}>
        <TreeViewBranchControl
          asChild
          className="inline-block text-muted-foreground no-underline transition-colors hover:bg-transparent hover:text-foreground data-[active]:font-medium data-[active]:text-foreground"
        >
          <a href={`#${item.slug}`}>
            <TreeViewBranchText>{item.text}</TreeViewBranchText>
          </a>
        </TreeViewBranchControl>
        <TreeViewBranchContent className="before:content-none">
          <Tree toc={item.children} />
        </TreeViewBranchContent>
      </TreeViewBranch>
    ) : (
      <TreeViewItem
        value={item.slug}
        key={item.slug}
        asChild
        className="inline-block cursor-pointer text-muted-foreground no-underline transition-colors hover:bg-transparent hover:text-foreground data-[active]:font-medium data-[active]:text-foreground"
      >
        <a href={`#${item.slug}`}>
          <TreeViewItemText>{item.text}</TreeViewItemText>
        </a>
      </TreeViewItem>
    )
  )
}
