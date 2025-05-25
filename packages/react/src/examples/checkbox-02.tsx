import { useState } from "react"

import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"

export default function Component() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(
    "indeterminate"
  )
  return (
    <Checkbox
      className="flex items-center gap-2"
      defaultChecked="indeterminate"
      checked={checked}
      onCheckedChange={({ checked }) => setChecked(checked)}
    >
      <CheckboxControl />
      <CheckboxLabel>Indeterminate checkbox</CheckboxLabel>
    </Checkbox>
  )
}
