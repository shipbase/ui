import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider"

export default function Component() {
  return (
    <Slider defaultValue={[25]} className="*:not-first:mt-4">
      <SliderLabel>Simple slider</SliderLabel>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </Slider>
  )
}
