import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export default function Component() {
  const max = 12
  const step = 2
  const ticks = [...Array(max + 1)].map((_, i) => i)

  return (
    <Slider defaultValue={[25]} max={max} step={step}>
      <SliderLabel>Slider with ticks</SliderLabel>
      <SliderControl className="mt-4">
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
      <SliderMarkerGroup>
        {ticks.map((tick, i) => (
          <SliderMarker
            key={tick}
            value={tick}
            className="flex w-0 flex-col items-center justify-center gap-2"
          >
            <span
              className={cn(
                "h-1 w-px bg-muted-foreground/70",
                i % step !== 0 && "h-0.5"
              )}
            />
            <span className={cn(i % step !== 0 && "opacity-0")}>{i}</span>
          </SliderMarker>
        ))}
      </SliderMarkerGroup>
    </Slider>
  )
}
