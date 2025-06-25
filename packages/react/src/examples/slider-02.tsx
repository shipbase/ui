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
    <Slider defaultValue={[25]} disabled className="*:not-first:mt-4">
      <SliderLabel>Disabled slider</SliderLabel>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </Slider>
  )
}
