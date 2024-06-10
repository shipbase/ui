import type { Meta } from "@storybook/react";
import { Checkbox, CheckboxTrigger, CheckboxLabel } from "../ui/checkbox";

export default {
  title: "Components/Checkbox",
} satisfies Meta;

export function Basic() {
  return (
    <>
      <Checkbox className="flex items-center space-x-2">
        <CheckboxTrigger></CheckboxTrigger>
        <CheckboxLabel className="text-sm font-medium leading-none">
          Accept terms and conditions
        </CheckboxLabel>
      </Checkbox>
    </>
  );
}
