import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Component() {
  return (
    <div className="inline-grid w-fit grid-cols-3 gap-1">
      <Tooltip positioning={{ placement: "top" }} openDelay={0} closeDelay={0}>
        <TooltipTrigger asChild>
          <Button
            className="col-start-2"
            variant="outline"
            size="icon"
            aria-label="Pan camera up"
          >
            <ChevronUpIcon size={16} aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Pan top
          <kbd className="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
            ⌘T
          </kbd>
        </TooltipContent>
      </Tooltip>
      <Tooltip positioning={{ placement: "left" }} openDelay={0} closeDelay={0}>
        <TooltipTrigger asChild>
          <Button
            className="col-start-1"
            variant="outline"
            size="icon"
            aria-label="Pan camera left"
          >
            <ChevronLeftIcon size={16} aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Pan left
          <kbd className="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
            ⌘L
          </kbd>
        </TooltipContent>
      </Tooltip>
      <div className="flex items-center justify-center" aria-hidden="true">
        <CircleIcon className="opacity-60" size={16} />
      </div>
      <Tooltip
        positioning={{ placement: "right" }}
        openDelay={0}
        closeDelay={0}
      >
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Pan camera right">
            <ChevronRightIcon size={16} aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Pan right
          <kbd className="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
            ⌘R
          </kbd>
        </TooltipContent>
      </Tooltip>
      <Tooltip
        positioning={{ placement: "bottom" }}
        openDelay={0}
        closeDelay={0}
      >
        <TooltipTrigger asChild>
          <Button
            className="col-start-2"
            variant="outline"
            size="icon"
            aria-label="Pan camera down"
          >
            <ChevronDownIcon size={16} aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Pan bottom
          <kbd className="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
            ⌘B
          </kbd>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
