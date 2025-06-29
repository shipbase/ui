import {
  Switch,
  SwitchContext,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch
      aria-label="Toggle switch"
      className="inline-flex items-center gap-2"
    >
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel className="font-medium text-sm">
        <SwitchContext>
          {({ checked }) => (checked ? "On" : "Off")}
        </SwitchContext>
      </SwitchLabel>
    </Switch>
  )
}
