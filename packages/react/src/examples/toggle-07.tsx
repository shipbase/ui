import { Volume2Icon, VolumeXIcon } from "lucide-react"

import { Toggle, ToggleIndicator } from "@/components/ui/toggle"

export default function Component() {
  return (
    <Toggle variant="outline">
      <ToggleIndicator
        fallback={
          <div className="flex items-center gap-2">
            <VolumeXIcon />
            <span>Unmute</span>
          </div>
        }
      >
        <div className="flex items-center gap-2">
          <Volume2Icon />
          <span>Mute</span>
        </div>
      </ToggleIndicator>
    </Toggle>
  )
}
