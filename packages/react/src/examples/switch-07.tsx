import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch>
      <SwitchControl className="data-[state=unchecked]:border-input data-[state=unchecked]:bg-transparent">
        <SwitchThumb className="data-[state=unchecked]:rtl:-translate-x-0.5 transition-all data-[state=unchecked]:size-4 data-[state=unchecked]:translate-x-0.5 data-[state=unchecked]:bg-input data-[state=unchecked]:shadow-none" />
      </SwitchControl>
      <SwitchLabel className="sr-only">M3-style switch</SwitchLabel>
    </Switch>
  )
}
