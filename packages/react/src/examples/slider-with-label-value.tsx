import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderValueText,
} from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <Slider defaultValue={[30]} className="w-[60%] space-y-2">
      <SliderLabel>Slider: </SliderLabel>
      <SliderValueText />
      <SliderControl />
    </Slider>
  )
}
