import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch disabled>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel className="sr-only">Disabled</SwitchLabel>
    </Switch>
  )
}
