import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch className="inline-flex items-center gap-2">
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel className="sr-only">Simple switch</SwitchLabel>
    </Switch>
  )
}
