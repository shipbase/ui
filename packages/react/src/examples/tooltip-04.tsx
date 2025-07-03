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
          W/ title
        </Button>
      </TooltipTrigger>
      <TooltipContent className="py-3">
        <div className="space-y-1">
          <p className="font-medium text-[13px]">Tooltip with title</p>
          <p className="text-muted-foreground text-xs">
            Tooltips are made to be highly customizable, with features like
            dynamic placement, rich content, and a robust API. You can even use
            them as a full-featured dropdown menu by setting the{" "}
            <code>trigger</code> prop to <code>click</code>.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
