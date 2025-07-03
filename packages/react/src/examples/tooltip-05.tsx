import { GlobeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Component() {
  return (
    <Tooltip positioning={{ placement: "top" }} openDelay={0} closeDelay={0}>
      <TooltipTrigger asChild>
        <Button variant="outline" size="sm">
          W/ icon
        </Button>
      </TooltipTrigger>
      <TooltipContent className="dark py-3">
        <div className="flex gap-3">
          <GlobeIcon
            className="mt-0.5 shrink-0 opacity-60"
            size={16}
            aria-hidden="true"
          />
          <div className="space-y-1">
            <p className="font-medium text-[13px]">
              Tooltip with title and icon
            </p>
            <p className="text-muted-foreground text-xs">
              Tooltips are made to be highly customizable, with features like
              dynamic placement, rich content, and a robust API.
            </p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
