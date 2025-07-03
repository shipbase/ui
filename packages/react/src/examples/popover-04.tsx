import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Component() {
  return (
    <Popover positioning={{ placement: "top" }}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="mt-48">
          Tooltip-like popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none">
        <div className="space-y-3">
          <div className="space-y-1">
            <PopoverTitle>Popover with button</PopoverTitle>
            <PopoverDescription>
              I am a popover that would like to look like a tooltip. I
              can&lsquo;t be a tooltip because of the interactive element inside
              me.
            </PopoverDescription>
          </div>
          <PopoverCloseTrigger asChild>
            <Button size="sm" className="h-7 px-2">
              Know more
            </Button>
          </PopoverCloseTrigger>
        </div>
      </PopoverContent>
    </Popover>
  )
}
