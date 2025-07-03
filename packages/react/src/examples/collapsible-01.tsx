import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={({ open }) => setIsOpen(open)}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="font-semibold text-sm">Ark UI supported frameworks</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @ark-ui/react
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @ark-ui/solid
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @ark-ui/vue
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
