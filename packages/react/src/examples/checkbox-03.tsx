import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"

export default function Component() {
  return (
    <Checkbox className="flex items-center gap-2" disabled>
      <CheckboxControl />
      <CheckboxLabel>Disabled checkbox</CheckboxLabel>
    </Checkbox>
  )
}
