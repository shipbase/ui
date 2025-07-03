import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Component() {
  return (
    <Tabs defaultValue="tab-1" className="items-center">
      <TabsList>
        <Tooltip openDelay={0} closeDelay={0}>
          <TooltipTrigger asChild>
            <span className="z-1">
              <TabsTrigger value="tab-1" className="py-3">
                <HouseIcon size={16} aria-hidden="true" />
              </TabsTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">
            Overview
          </TooltipContent>
        </Tooltip>
        <Tooltip openDelay={0} closeDelay={0}>
          <TooltipTrigger asChild>
            <span className="z-1">
              <TabsTrigger value="tab-2" className="group py-3">
                <span className="relative">
                  <PanelsTopLeftIcon size={16} aria-hidden="true" />
                  <Badge className="-top-2.5 -translate-x-1.5 absolute left-full min-w-4 border-background px-0.5 text-[10px]/[.875rem] transition-opacity group-not-data-[selected]:opacity-50">
                    3
                  </Badge>
                </span>
              </TabsTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">
            Projects
          </TooltipContent>
        </Tooltip>
        <Tooltip openDelay={0} closeDelay={0}>
          <TooltipTrigger asChild>
            <span className="z-1">
              <TabsTrigger value="tab-3" className="py-3">
                <BoxIcon size={16} aria-hidden="true" />
              </TabsTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">
            Packages
          </TooltipContent>
        </Tooltip>
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
