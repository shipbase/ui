import type { Meta } from "@storybook/react"

import { Checkbox, CheckboxLabel, CheckboxTrigger } from "../ui/checkbox"

export default {
  title: "Components/Checkbox",
} satisfies Meta

export function Basic() {
  return (
    <>
      <Checkbox className="flex items-center space-x-2">
        <CheckboxTrigger />
        <CheckboxLabel className="font-medium text-sm leading-none">
          Accept terms and conditions
        </CheckboxLabel>
      </Checkbox>
    </>
  )
}
