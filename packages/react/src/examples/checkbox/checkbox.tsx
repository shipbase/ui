import {
  Checkbox,
  CheckboxLabel,
  CheckboxTrigger,
} from "@/components/ui/checkbox"

export default function CheckboxDemo() {
  return (
    <Checkbox className="flex items-center space-x-2">
      <CheckboxTrigger />
      <CheckboxLabel className="font-medium text-sm leading-none">
        Accept terms and conditions
      </CheckboxLabel>
    </Checkbox>
  )
}
