import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderThumb,
  SliderTrack,
  SliderValueText,
} from "@/components/ui/slider"

export default function Component() {
  return (
    <Slider defaultValue={[25]} className="*:not-first:mt-4">
      <SliderLabel>Slider with labels</SliderLabel>
      <span
        className="mb-3 flex w-full items-center justify-between gap-2 font-medium text-muted-foreground text-xs"
        aria-hidden="true"
      >
        <span>Low</span>
        <span>High</span>
      </span>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </Slider>
  )
}
