import type { Meta } from "@storybook/react";
import { Checkbox, CheckboxTrigger, CheckboxLabel } from "../ui/checkbox";
import { Checkbox as SCheckbox } from "@/components/ui/checkbox";

export default {
  title: "Components/Checkbox",
} satisfies Meta;

export function Basic() {
  return (
    <>
      <Checkbox className="flex items-center space-x-2" >
        <CheckboxTrigger></CheckboxTrigger>
        <CheckboxLabel className="text-sm font-medium leading-none">
          Accept terms and conditions
        </CheckboxLabel>
      </Checkbox>
      <div className="flex items-center space-x-2">
        <SCheckbox id="terms" disabled />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </>
  );
}
