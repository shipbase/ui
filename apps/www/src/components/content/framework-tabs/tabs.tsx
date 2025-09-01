import { type Framework, frameworks } from "@/constants/frameworks"
import { cn } from "@/lib/utils"
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@ui/react/tabs"
import { TerminalIcon } from "lucide-react"
import { upperFirst } from "scule"

interface Props extends Partial<Record<Framework, React.ReactNode>> {
  className?: string
}

export function FrameworkTabs({ className, ...props }: Props) {
  return (
    <Tabs
      defaultValue={frameworks[0]}
      className={cn("mt-4 w-full gap-0 border bg-card", className)}
    >
      <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
        <div className="flex items-center gap-1">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-muted">
            <TerminalIcon className="h-3 w-3" />
          </div>
          <TabsList className="ml-2 h-7 bg-transparent p-0">
            {frameworks.map((key) => (
              <TabsTrigger value={key} key={key}>
                {upperFirst(key)}
              </TabsTrigger>
            ))}
            <TabsIndicator className="h-7 rounded-md px-3 font-medium text-xs data-[selected]:bg-background data-[selected]:text-foreground" />
          </TabsList>
        </div>
      </div>

      {frameworks.map((key) => (
        <TabsContent key={key} value={key} className="m-0">
          {props[key]}
        </TabsContent>
      ))}
    </Tabs>
  )
}
