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
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className=" flex h-8 justify-start rounded-none border-b bg-transparent p-0">
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
        <TabsIndicator className="bottom-[-1px] h-[2px] rounded-none bg-primary" />
      </TabsList>
      <TabsContent value="preview" className="mt-4">
        {preview}
      </TabsContent>
      <TabsContent value="code" className="mt-4">
        {code}
      </TabsContent>
    </Tabs>
  )
}
