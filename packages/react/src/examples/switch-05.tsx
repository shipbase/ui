import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch>
      <SwitchControl className="rounded-sm">
        <SwitchThumb className="rounded" />
      </SwitchControl>
      <SwitchLabel className="sr-only">Square switch</SwitchLabel>
    </Switch>
  )
}
