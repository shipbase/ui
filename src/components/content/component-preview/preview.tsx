import * as React from "react"

import { CopyButton } from "@/components/copy-button"
import { Icons } from "@/components/icons"
import { cn, pascalCase } from "@/lib/utils"
import * as Examples from "@/registry/default/examples"

interface Props {
  component?: string
  codeString: string
  children?: React.ReactNode
}

export const Preview = ({ component, codeString }: Props) => {
  // @ts-expect-error
  const Example = Examples[pascalCase(component)]

  if (!Example) {
    return (
      <p className="text-muted-foreground text-sm">
        Component{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {component}
        </code>{" "}
        not found in registry.
      </p>
    )
  }

  return (
    <div className="relative rounded-md border">
      <div className="flex items-center justify-between p-4">
        <CopyButton
          value={codeString}
          variant="outline"
          className="h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground [&_svg]:h-3.5 [&_svg]:w-3.5"
        />
      </div>
      <div
        className={cn(
          "preview flex min-h-[350px] w-full items-center justify-center p-10"
        )}
      >
        <React.Suspense
          fallback={
            <div className="flex w-full items-center justify-center text-muted-foreground text-sm">
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </div>
          }
        >
          <Example />
        </React.Suspense>
      </div>
    </div>
  )
}
