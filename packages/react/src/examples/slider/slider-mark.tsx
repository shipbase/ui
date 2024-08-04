import {
  Slider,
  SliderControl,
  SliderMark,
  SliderMarkGroup,
} from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <Slider defaultValue={[10]} className="w-[60%]">
      <SliderControl />
      <SliderMarkGroup>
        <SliderMark value={25}>25</SliderMark>
        <SliderMark value={50}>50</SliderMark>
        <SliderMark value={75}>75</SliderMark>
      </SliderMarkGroup>
    </Slider>
  )
}
