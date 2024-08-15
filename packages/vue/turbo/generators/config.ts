import fs from "node:fs"
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

  const system = fs.readFileSync(
    path.join(__dirname, "./prompts/react_vue.md"),
    "utf-8"
  )
  const reactComponentContent = fs.readFileSync(
    path.join(__dirname, `../../../react/src/components/ui/${component}.tsx`),
    "utf-8"
  )

  console.log("generating...")

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
    system,
    prompt: `translate the following react component to vue component: 
${reactComponentContent}`,
  })

  for (const file of object.files) {
    console.log("writing file", file.file)
    console.log(file.content)
    const filePath = path.join(
      __dirname,
      `../../src/components/ui/${component}/${file.file}`
    )
    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, file.content)
  }

  return "Success!"
}
