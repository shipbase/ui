import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch>
      <SwitchControl className="h-3 w-9 border-none outline-offset-[6px]">
        <SwitchThumb className="border border-input" />
      </SwitchControl>
      <SwitchLabel className="sr-only">M2-style switch</SwitchLabel>
    </Switch>
  )
}
