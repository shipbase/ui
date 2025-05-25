import {
  Checkbox,
  CheckboxControl,
  CheckboxGroup,
  CheckboxLabel,
} from "@/components/ui/checkbox"

export default function Component() {
  return (
    <CheckboxGroup
      defaultValue={["react"]}
      name="framework"
      onValueChange={console.log}
      className="grid gap-3"
    >
      <Checkbox value="react" className="flex items-center gap-2">
        <CheckboxControl />
        <CheckboxLabel>React</CheckboxLabel>
      </Checkbox>
      <Checkbox value="nextjs" className="flex items-center gap-2">
        <CheckboxControl />
        <CheckboxLabel>Next.js</CheckboxLabel>
      </Checkbox>
      <Checkbox value="astro" className="flex items-center gap-2">
        <CheckboxControl />
        <CheckboxLabel>Astro</CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
  )
}
