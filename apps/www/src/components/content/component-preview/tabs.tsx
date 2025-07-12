import type * as React from "react"

import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@ui/react/tabs"

interface Props {
  preview?: React.ReactNode
  code?: React.ReactNode
}

export default function ComponentPreviewTabs({ preview, code }: Props) {
  return (
    <Tabs defaultValue="preview">
      <TabsList className="justify-start bg-transparent">
        <TabsTrigger
          value="preview"
          className="h-full font-semibold data-[selected]:text-foreground"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="h-full font-semibold data-[selected]:text-foreground"
        >
          Code
        </TabsTrigger>
        <TabsIndicator className="bg-muted shadow-none" />
      </TabsList>
      <TabsContent value="preview">{preview}</TabsContent>
      <TabsContent value="code">{code}</TabsContent>
    </Tabs>
  )
}
