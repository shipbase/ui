import { Badge } from "@/components/ui/badge"
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
      <TabsList className="mb-3">
        <TabsTrigger value="tab-1">
          <HouseIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Overview
        </TabsTrigger>
        <TabsTrigger value="tab-2" className="group">
          <PanelsTopLeftIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Projects
          <Badge
            className="ms-1.5 min-w-5 bg-primary/15 px-1 transition-opacity group-not-data-[selected]:opacity-50"
            variant="secondary"
          >
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="tab-3" className="group">
          <BoxIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Packages
          <Badge className="ms-1.5 transition-opacity group-not-data-[selected]:opacity-50">
            New
          </Badge>
        </TabsTrigger>
        <TabsIndicator />
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
