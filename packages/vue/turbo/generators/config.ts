import fs from "node:fs/promises"
import path from "node:path"
import type { PlopTypes } from "@turbo/gen"
import { openai } from "@ui/lib/ai"
import { generateObject } from "ai"
import { z } from "zod"

interface Answers {
  component: string
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("vue/component", {
    description: "Generate a new Vue component",
    prompts: [
      {
        type: "input",
        name: "component",
        validate: (value: string) => !!value,
        message: "What should be the name of the component?",
      },
    ],
    actions: [generateAction],
  })
}

async function generateAction(
  answers,
  _,
  plop?: PlopTypes.NodePlopAPI
): Promise<string> {
  if (!plop) throw new Error("No plop")
  const { component } = answers as Answers

  const destBasePath = plop.getDestBasePath()
  const plopfilePath = plop.getPlopfilePath()

  const destPath = path.resolve(destBasePath, `src/components/ui/${component}`)
  const systemPrompt = await fs.readFile(
    path.resolve(plopfilePath, "prompts/component.md"),
    "utf-8"
  )
  const reactComponentCode = await fs.readFile(
    path.resolve(destBasePath, `../react/src/components/ui/${component}.tsx`),
    "utf-8"
  )

  console.log("generating to ", destPath)

  const { object } = await generateObject({
    model: openai("gpt-4o-2024-08-06"),
    schemaName: "Components",
    schemaDescription: "The generated Vue component with file name and content",
    schema: z.object({
      files: z.array(
        z.object({
          file: z.string().describe("the file name"),
          content: z.string().describe("the file content"),
        })
      ),
    }),
    system: systemPrompt,
    prompt: `translate the following react component to vue component: \n ${reactComponentCode}`,
  })

  for (const file of object.files) {
    console.log("writing file", file.file)
    const filePath = path.join(destPath, file.file)
    await fs.mkdir(path.dirname(filePath), { recursive: true })
    await fs.writeFile(filePath, file.content)
  }

  return "Success!"
}
