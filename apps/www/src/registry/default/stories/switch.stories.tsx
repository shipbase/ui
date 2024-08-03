import type { Meta } from "@storybook/react"

import { Switch, SwitchControl, SwitchLabel } from "../ui/switch"

export default {
  title: "Components/Switch",
} satisfies Meta

export const Basic = () => (
  <Switch>
    <SwitchControl />
    <SwitchLabel>Airplane Mode</SwitchLabel>
  </Switch>
)
