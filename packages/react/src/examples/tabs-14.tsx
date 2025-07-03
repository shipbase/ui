import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Component() {
  return (
    <Tabs defaultValue="tab-1" className="items-center">
      <TabsList className="mx-auto flex w-full max-w-xs bg-transparent">
        <TabsTrigger
          value="tab-1"
          className="group flex-1 flex-col p-3 text-xs"
        >
          <Badge className="mb-1.5 min-w-5 px-1 transition-opacity group-not-data-[selected]:opacity-50">
            3
          </Badge>
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="group flex-1 flex-col p-3 text-xs"
        >
          <Badge className="mb-1.5 min-w-5 px-1 transition-opacity group-not-data-[selected]:opacity-50">
            0
          </Badge>
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="group flex-1 flex-col p-3 text-xs"
        >
          <Badge className="mb-1.5 min-w-5 px-1 transition-opacity group-not-data-[selected]:opacity-50">
            7
          </Badge>
          Packages
        </TabsTrigger>
        <TabsIndicator className="bg-muted shadow-none" />
      </TabsList>
      <TabsContent value="tab-1">
        <p className="p-4 text-center text-muted-foreground text-xs">
          Content for Tab 1
        </p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="p-4 text-center text-muted-foreground text-xs">
          Content for Tab 2
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="p-4 text-center text-muted-foreground text-xs">
          Content for Tab 3
        </p>
      </TabsContent>
    </Tabs>
  )
}
