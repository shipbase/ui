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
          Dark
        </Button>
      </TooltipTrigger>
      <TooltipContent className="dark px-2 py-1 text-xs">
        This tooltip will be always dark
      </TooltipContent>
    </Tooltip>
  )
}
