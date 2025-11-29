import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { getSidebarTabs } from "fumadocs-ui/utils/get-sidebar-tabs"
import { type ReactNode, useMemo } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  const nav = {
    title: "shipbase/ui",
  }

  const tabMode = "auto"
  const sidebarProps = {
    footer: null,
    banner: null,
    component: null,
    components: null,
    collapsible: true,
  }
  const links = []
  const tabs = useMemo(() => {
    return getSidebarTabs(source.pageTree) || []
  }, [])

  return (
    <DocsLayout
      nav={nav}
      tree={source.pageTree}
      // sidebar={{
      //   component: sidebar(),
      // }}
    >
      {children}
    </DocsLayout>
  )
}
