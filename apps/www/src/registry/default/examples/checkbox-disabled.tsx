import { Checkbox, CheckboxLabel, CheckboxTrigger } from "../ui/checkbox"

export default function CheckboxDisabled() {
  return (
    <Checkbox className="flex items-center space-x-2" disabled>
      <CheckboxTrigger />
      <CheckboxLabel className="font-medium text-sm leading-none">
        Accept terms and conditions
      </CheckboxLabel>
    </Checkbox>
  )
}
