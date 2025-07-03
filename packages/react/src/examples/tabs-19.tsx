import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from "lucide-react"

export default function Component() {
  return (
    <Tabs
      defaultValue="tab-1"
      orientation="vertical"
      className="w-full flex-row"
    >
      <TabsList className="rounded-none border-l bg-transparent px-1 py-0 text-foreground *:data-[part=trigger]:justify-start *:data-[part=trigger]:hover:bg-accent *:data-[part=trigger]:hover:text-foreground">
        <TabsTrigger value="tab-1">
          <HouseIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Overview
        </TabsTrigger>
        <TabsTrigger value="tab-2">
          <PanelsTopLeftIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Projects
        </TabsTrigger>
        <TabsTrigger value="tab-3">
          <BoxIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Packages
        </TabsTrigger>
        <TabsIndicator className="-left-px w-0.5 rounded-none bg-primary shadow-none" />
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
