import { Button } from "../ui/button"
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip"

export default {
  title: "Components/Tooltip",
}

export const Basic = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
)

export const WithArrow = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <TooltipArrow />
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
)
