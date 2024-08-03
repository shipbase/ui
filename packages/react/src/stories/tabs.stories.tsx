import type { Meta } from "@storybook/react"

import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default {
  title: "Components/Tabs",
} satisfies Meta

export const TabsDemo = () => {
  return (
    <Tabs defaultValue={"react"} className="w-[400px]">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="react">React</TabsTrigger>
        <TabsTrigger disabled value="vue">
          Vue
        </TabsTrigger>
        <TabsTrigger value="solid">Solid</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="react">React content</TabsContent>
      <TabsContent value="vue">Vue content</TabsContent>
      <TabsContent value="solid">Solid content</TabsContent>
    </Tabs>
  )
}
