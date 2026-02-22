"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PAGES_NEW } from "@/lib/docs";
import type { source } from "@/lib/source";
import { Badge } from "@/registry/default/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/default/ui/sidebar";

type DocsPageNode = {
  name: string;
  type: "page";
  url: string;
};

type DocsFolderNode = {
  $id: string;
  children: DocsPageNode[];
  name: string;
  type: "folder";
};

function getFolderNodes(tree: typeof source.pageTree): DocsFolderNode[] {
  const root = tree as { children?: unknown[] };
  const children = root.children;

  if (!Array.isArray(children)) {
    return [];
  }

  return children.filter((node): node is DocsFolderNode => {
    if (!node || typeof node !== "object") {
      return false;
    }

    const maybeFolder = node as {
      $id?: unknown;
      children?: unknown;
      name?: unknown;
      type?: unknown;
    };

    return (
      maybeFolder.type === "folder" &&
      typeof maybeFolder.$id === "string" &&
      typeof maybeFolder.name === "string" &&
      Array.isArray(maybeFolder.children)
    );
  });
}

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();
  const groups = getFolderNodes(tree);

  return (
    <Sidebar
      className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="px-4 py-2">
        <div className="h-(--top-spacing) shrink-0" />
        {groups.map((item) => (
          <SidebarGroup className="gap-1" key={item.$id}>
            <SidebarGroupLabel className="h-7 px-0 text-sidebar-accent-foreground">
              {item.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {item.type === "folder" && (
                <SidebarMenu className="gap-0.5">
                  {item.children.map((item) => {
                    return (
                      item.type === "page" && (
                        <SidebarMenuItem key={item.url}>
                          <SidebarMenuButton
                            className="ps-3.5 hover:bg-transparent active:bg-transparent"
                            isActive={item.url === pathname}
                            render={<Link href={item.url} />}
                          >
                            {item.name}
                            {PAGES_NEW.length > 0 &&
                              PAGES_NEW.includes(item.url as never) && (
                                <Badge variant="info">New</Badge>
                              )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    );
                  })}
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
