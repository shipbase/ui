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
      <TabsList className="-space-x-px h-auto overflow-hidden rounded bg-background p-0 pe-px shadow-xs *:data-[part=trigger]:data-[selected]:bg-muted *:data-[part=trigger]:rounded-none *:data-[part=trigger]:border *:data-[part=trigger]:py-2 *:last-of-type:data-[part=trigger]:rounded-e *:first-of-type:data-[part=trigger]:rounded-s rtl:space-x-reverse">
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
        <TabsIndicator className="bottom-0 z-11 h-0.5 rounded-none bg-primary shadow-none" />
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
