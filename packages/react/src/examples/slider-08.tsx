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
      <div className="flex items-center justify-between gap-2">
        <SliderLabel>Slider with output</SliderLabel>
        <SliderValueText />
      </div>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </Slider>
  )
}
