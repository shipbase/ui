import { Slider, SliderControl } from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <Slider defaultValue={[10]} className="w-[60%]">
      <SliderControl />
    </Slider>
  )
}
