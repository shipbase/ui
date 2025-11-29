import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"

import type { Framework } from "@/constants/frameworks"
import { getExampleSource } from "@/lib/code-source"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/react/tabs"
import ExamplePreviewClient from "./example-preview.client"

interface Props {
  name: string
  framework?: Framework
}

export default async function ExamplePreview({
  name,
  framework = "react",
}: Props) {
  const source = await getExampleSource(framework, name)

  return (
    <div className="relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]">
      <Tabs defaultValue="preview">
        <TabsList className="justify-start bg-transparent">
          <TabsTrigger
            value="preview"
            className="h-full font-semibold data-[selected]:text-foreground"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="h-full font-semibold data-[selected]:text-foreground"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <ExamplePreviewClient name={name} />
        </TabsContent>
        <TabsContent value="code">
          {source ? (
            <DynamicCodeBlock lang={source.lang} code={source.content} />
          ) : (
            <div className="rounded border p-4">
              <p className="text-muted-foreground text-sm">
                Failed to load source code for{" "}
                <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  {name}
                </code>
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
