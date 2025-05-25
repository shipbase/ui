import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"

export default function Component() {
  return (
    <Checkbox className="flex items-center gap-2">
      <CheckboxControl />
      <CheckboxLabel>Simple checkbox</CheckboxLabel>
    </Checkbox>
  )
}
