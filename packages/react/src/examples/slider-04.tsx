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
      className="*:not-first:mt-4 **:data-[part=thumb]:bg-primary"
    >
      <SliderLabel>Slider with solid thumb</SliderLabel>
      <SliderControl>
        <SliderTrack>
          <SliderRange className="opacity-70" />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
    </Slider>
  )
}
