import { Checkbox, CheckboxLabel, CheckboxTrigger } from "../ui/checkbox"

export default function CheckboxDisabled() {
  return (
    <Checkbox className="flex items-center space-x-2" disabled>
      <CheckboxTrigger />
      <CheckboxLabel className="text-sm font-medium leading-none">
        Accept terms and conditions
      </CheckboxLabel>
    </Checkbox>
  )
}
