import type { Meta } from "@storybook/react"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default {
  title: "Components/Label",
} satisfies Meta

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}