import { Checkbox, CheckboxLabel, CheckboxTrigger } from "../ui/checkbox"

export default function CheckboxDemo() {
  return (
    <>
      <Checkbox className="flex items-center space-x-2">
        <CheckboxTrigger />
        <CheckboxLabel className="text-sm font-medium leading-none">
          Accept terms and conditions
        </CheckboxLabel>
      </Checkbox>
    </>
  )
}
