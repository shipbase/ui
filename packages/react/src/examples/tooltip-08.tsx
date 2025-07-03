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
          Stats
        </Button>
      </TooltipTrigger>
      <TooltipContent className="py-3">
        <ul className="grid gap-3 text-xs">
          <li className="grid gap-0.5">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium">Completed</span>
          </li>
          <li className="grid gap-0.5">
            <span className="text-muted-foreground">Code Coverage</span>
            <span className="font-medium">94.3%</span>
          </li>
          <li className="grid gap-0.5">
            <span className="text-muted-foreground">Last Deploy</span>
            <span className="font-medium">Today at 15:42</span>
          </li>
          <li className="grid gap-0.5">
            <span className="text-muted-foreground">Performance Score</span>
            <span className="font-medium">98/100</span>
          </li>
        </ul>
      </TooltipContent>
    </Tooltip>
  )
}
