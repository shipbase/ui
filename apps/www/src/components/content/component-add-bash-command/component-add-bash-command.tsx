import { CopyButton } from "@/components/copy-button"
import {
  type PackageManager,
  packageManagerAtom,
  packageManagers,
} from "@/store/atoms/package-manager"
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@ui/react/tabs"
import { useAtom } from "@xstate/store/react"
import { TerminalIcon } from "lucide-react"

interface Props {
  commandMap: Record<PackageManager, string>
}

export function ComponentAddBashCommand({ commandMap }: Props) {
  const packageManager = useAtom(packageManagerAtom)
  const command = commandMap[packageManager]

  return (
    <Tabs
      value={packageManager}
      onValueChange={(detail) => {
        packageManagerAtom.set(detail.value as PackageManager)
      }}
      className="mt-4 w-full gap-0 border bg-card"
    >
      {/* Header with tabs */}
      <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
        <div className="flex items-center gap-1">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-muted">
            <TerminalIcon className="h-3 w-3" />
          </div>
          <TabsList className="ml-2 h-7 bg-transparent p-0">
            {packageManagers.map((key) => (
              <TabsTrigger value={key} key={key}>
                {key}
              </TabsTrigger>
            ))}
            <TabsIndicator className="h-7 rounded-md px-3 font-medium text-xs data-[selected]:bg-background data-[selected]:text-foreground" />
          </TabsList>
        </div>
        <CopyButton value={command} />
      </div>

      {packageManagers.map((key) => (
        <TabsContent key={key} value={key} className="m-0 bg-code p-4">
          <pre className="overflow-x-auto text-foreground text-sm">
            <code>{commandMap[key]}</code>
          </pre>
        </TabsContent>
      ))}
    </Tabs>
  )
}
