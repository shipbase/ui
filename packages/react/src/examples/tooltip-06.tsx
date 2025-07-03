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
          W/ image
        </Button>
      </TooltipTrigger>
      <TooltipContent className="py-3">
        <div className="space-y-2">
          <img
            className="w-full rounded"
            src="src/assets/profile-bg.jpg"
            width={382}
            height={216}
            alt="Dialog content"
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
