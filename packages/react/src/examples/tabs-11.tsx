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
      <TabsList className="relative h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
        <TabsTrigger
          value="tab-1"
          className="overflow-hidden rounded-b-none border-x border-t bg-muted py-2 data-[selected]:z-10 data-[selected]:bg-background data-[selected]:shadow-none"
        >
          <HouseIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="overflow-hidden rounded-b-none border-x border-t bg-muted py-2 data-[selected]:z-10 data-[selected]:bg-background data-[selected]:shadow-none"
        >
          <PanelsTopLeftIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="overflow-hidden rounded-b-none border-x border-t bg-muted py-2 data-[selected]:z-10 data-[selected]:bg-background data-[selected]:shadow-none"
        >
          <BoxIcon
            className="-ms-0.5 me-1.5 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Packages
        </TabsTrigger>
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
