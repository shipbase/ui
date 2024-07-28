import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderValueText,
} from "../ui/slider"

export default function SliderRangeDemo() {
  return (
    <Slider defaultValue={[10, 50]} className="w-[60%] space-y-2">
      <SliderLabel>Slider Range: </SliderLabel>
      <SliderValueText />
      <SliderControl />
    </Slider>
  )
}
