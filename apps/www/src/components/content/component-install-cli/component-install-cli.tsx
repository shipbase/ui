import { CopyButton } from "@/components/copy-button"
import {
  PACKAGE_MANAGER_COMMAND_MAP,
  PACKAGE_MANAGER_KEY_STORAGE_KEY,
  type PackageManager,
  packageManagerAtom,
} from "@/store/atoms/package-manager"
import { uiLibraryAtom } from "@/store/atoms/ui-library"
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@ui/react/tabs"
import { useAtom } from "@xstate/store/react"
import { TerminalIcon } from "lucide-react"
import { useEffect } from "react"

interface Props {
  name: string
}

const HOST = "http://shipbase-ui.pages.dev"

export function ComponentInstallCLI({ name }: Props) {
  const uiLibrary = useAtom(uiLibraryAtom)
  const packageManager = useAtom(packageManagerAtom)

  useEffect(() => {
    const initialValue = localStorage.getItem(PACKAGE_MANAGER_KEY_STORAGE_KEY)

    if (initialValue) {
      packageManagerAtom.set(initialValue as PackageManager)
    }

    const subscription = packageManagerAtom.subscribe((packageManager) => {
      localStorage.setItem(PACKAGE_MANAGER_KEY_STORAGE_KEY, packageManager)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const command = `${PACKAGE_MANAGER_COMMAND_MAP[packageManager]} shadcn@latest add ${HOST}/r/${uiLibrary}/${name}.json`

  return (
    <Tabs
      value={packageManager}
      onValueChange={(detail) =>
        packageManagerAtom.set(
          detail.value as keyof typeof PACKAGE_MANAGER_COMMAND_MAP
        )
      }
      className="w-full border bg-card"
    >
      {/* Header with tabs */}
      <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
        <div className="flex items-center gap-1">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-muted">
            <TerminalIcon className="h-3 w-3" />
          </div>
          <TabsList className="ml-2 h-7 bg-transparent p-0">
            {Object.keys(PACKAGE_MANAGER_COMMAND_MAP).map((key) => (
              <TabsTrigger value={key} key={key}>
                {key}
              </TabsTrigger>
            ))}
            <TabsIndicator className="h-7 rounded-md px-3 font-medium text-xs data-[selected]:bg-background data-[selected]:text-foreground" />
          </TabsList>
        </div>
        <CopyButton value={command} />
      </div>

      {/* Command display using TabsContent */}
      {Object.keys(PACKAGE_MANAGER_COMMAND_MAP).map((key) => (
        <TabsContent key={key} value={key} className="m-0 bg-code p-4">
          <pre className="text-foreground text-sm">
            <code>{command}</code>
          </pre>
        </TabsContent>
      ))}
    </Tabs>
  )
}
