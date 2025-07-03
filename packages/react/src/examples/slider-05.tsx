import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export default function Component() {
  return (
    <Slider
      defaultValue={[25]}
      className={cn(
        "*:not-first:mt-4 **:data-[part=thumb]:h-6 **:data-[part=thumb]:w-2.5 **:data-[part=thumb]:border-[3px] **:data-[part=thumb]:border-background **:data-[part=thumb]:bg-primary **:data-[part=thumb]:shadow-none **:data-[part=thumb]:ring-offset-0"
      )}
    >
      <SliderLabel>Slider with tiny thumb</SliderLabel>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </Slider>
  )
}
