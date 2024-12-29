import type { MarkdownHeading } from "astro"
import * as React from "react"

import type { ToC } from "@/lib/toc"
import { cn } from "@/lib/utils"
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
} from "@ui/react/tree-view"

interface Props {
  id?: string
  toc: ToC
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

export function TableOfContent({ id, toc, headings }: Props) {
  const activeId = useActiveItem(headings)
  return null

  // FIXME: fix table of content
  // biome-ignore lint/correctness/noUnreachable: <explanation>
  return (
    <TreeView
      id={id}
      collection={headings}
      className="space-y-3"
      expandOnClick={false}
      defaultExpandedValue={headings.map((h) => h.slug)}
    >
      <TreeViewLabel className="pl-2 font-medium">On This Page</TreeViewLabel>
      <TreeViewTree>
        <Tree toc={toc} activeId={activeId} />
      </TreeViewTree>
    </TreeView>
  )
}

function Tree({ toc, activeId }: { toc: ToC; activeId: string | null }) {
  if (!toc) return null
  return toc.map((item) =>
    item.children.length > 0 ? (
      <TreeViewBranch value={item.slug} key={item.slug}>
        <TreeViewBranchControl
          asChild
          className={cn(
            "inline-block text-muted-foreground no-underline transition-colors hover:bg-transparent hover:text-foreground data-[active]:font-medium data-[active]:text-foreground",
            item.slug === activeId
              ? "font-medium text-foreground"
              : "text-muted-foreground"
          )}
        >
          <a href={`#${item.slug}`}>
            <TreeViewBranchText>{item.text}</TreeViewBranchText>
          </a>
        </TreeViewBranchControl>
        <TreeViewBranchContent className="before:content-none">
          <Tree toc={item.children} activeId={activeId} />
        </TreeViewBranchContent>
      </TreeViewBranch>
    ) : (
      <TreeViewItem
        value={item.slug}
        key={item.slug}
        asChild
        className={cn(
          "inline-block cursor-pointer text-muted-foreground no-underline transition-colors hover:bg-transparent hover:text-foreground data-[active]:font-medium data-[active]:text-foreground",
          item.slug === activeId
            ? "font-medium text-foreground"
            : "text-muted-foreground"
        )}
      >
        <a href={`#${item.slug}`}>
          <TreeViewItemText>{item.text}</TreeViewItemText>
        </a>
      </TreeViewItem>
    )
  )
}
