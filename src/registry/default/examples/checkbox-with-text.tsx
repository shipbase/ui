"use client"

import { Checkbox, CheckboxLabel, CheckboxTrigger } from "../ui/checkbox"

export default function CheckboxWithText() {
  return (
    <Checkbox className="items-top flex space-x-2">
      <CheckboxTrigger />
      <div className="grid gap-1.5 leading-none">
        <CheckboxLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions
        </CheckboxLabel>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </Checkbox>
  )
}
