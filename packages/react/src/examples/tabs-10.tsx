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
    <Tabs defaultValue="tab-1" className="items-center">
      <TabsList className="-space-x-px h-auto overflow-hidden rounded bg-background p-0 pe-px shadow-xs *:data-[part=trigger]:data-[selected]:bg-muted *:data-[part=trigger]:rounded-none *:data-[part=trigger]:border *:data-[part=trigger]:py-2 *:last-of-type:data-[part=trigger]:rounded-e *:first-of-type:data-[part=trigger]:rounded-s rtl:space-x-reverse">
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
        <TabsIndicator className="bottom-0 z-1 h-0.5 rounded-none bg-primary shadow-none" />
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
