import { Slider, SliderControl } from "../ui/slider"

export default function SliderDemo() {
  return (
    <Slider defaultValue={[10]} className="w-[60%]">
      <SliderControl />
    </Slider>
  )
}
