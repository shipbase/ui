import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Component() {
  return (
    <Tabs
      defaultValue="tab-1"
      orientation="vertical"
      className="w-full flex-row"
    >
      <TabsList>
        <TabsTrigger value="tab-1">Overview</TabsTrigger>
        <TabsTrigger value="tab-2">Projects</TabsTrigger>
        <TabsTrigger value="tab-3">Packages</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <div className="grow rounded-md border text-start">
        <TabsContent value="tab-1">
          <p className="px-4 py-3 text-muted-foreground text-xs">
            Content for Tab 1
          </p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p className="px-4 py-3 text-muted-foreground text-xs">
            Content for Tab 2
          </p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="px-4 py-3 text-muted-foreground text-xs">
            Content for Tab 3
          </p>
        </TabsContent>
      </div>
    </Tabs>
  )
}
