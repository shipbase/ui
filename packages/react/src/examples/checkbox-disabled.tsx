import {
  Checkbox,
  CheckboxControl,
  CheckboxLabel,
} from "@/components/ui/checkbox"

export default function CheckboxDisabled() {
  return (
    <Checkbox className="flex items-center space-x-2" disabled>
      <CheckboxControl />
      <CheckboxLabel className="font-medium text-sm leading-none">
        Accept terms and conditions
      </CheckboxLabel>
    </Checkbox>
  )
}
