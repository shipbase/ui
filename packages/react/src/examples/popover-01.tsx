import { ListFilterIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Checkbox,
  CheckboxControl,
  CheckboxGroup,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Component() {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Filters">
            <ListFilterIcon size={16} aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-36 p-3">
          <div className="space-y-3">
            <div className="font-medium text-muted-foreground text-xs">
              Filters
            </div>
            <form>
              <CheckboxGroup className="space-y-3">
                <Checkbox className="flex items-center gap-2">
                  <CheckboxControl />
                  <CheckboxLabel className="font-normal">
                    Real Time
                  </CheckboxLabel>
                </Checkbox>
                <Checkbox className="flex items-center gap-2">
                  <CheckboxControl />
                  <CheckboxLabel className="font-normal">
                    Top Channels
                  </CheckboxLabel>
                </Checkbox>
                <Checkbox className="flex items-center gap-2">
                  <CheckboxControl />
                  <CheckboxLabel className="font-normal">
                    Last Orders
                  </CheckboxLabel>
                </Checkbox>
                <Checkbox className="flex items-center gap-2">
                  <CheckboxControl />
                  <CheckboxLabel className="font-normal">
                    Total Spent
                  </CheckboxLabel>
                </Checkbox>
              </CheckboxGroup>
              <div
                aria-orientation="horizontal"
                className="-mx-3 my-3 h-px bg-border"
              />
              <div className="flex justify-between gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  type="button"
                  className="h-7 px-2"
                >
                  Clear
                </Button>
                <Button type="button" size="sm" className="h-7 px-2">
                  Apply
                </Button>
              </div>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
