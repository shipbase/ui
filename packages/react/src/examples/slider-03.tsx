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
    <Slider
      defaultValue={[25]}
      className="*:not-first:mt-4 **:data-[part=thumb]:rounded"
    >
      <SliderLabel>Slider with square thumb</SliderLabel>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </Slider>
  )
}
