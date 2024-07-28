import type { Meta } from "@storybook/react"

import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderMark,
  SliderMarkGroup,
  SliderValueText,
} from "../ui/slider"

export default {
  title: "Components/Slider",
} satisfies Meta

export const SliderDemo = () => {
  return (
    <Slider defaultValue={[10]}>
      <SliderLabel>Label</SliderLabel>
      <SliderValueText />
      <SliderControl></SliderControl>
    </Slider>
  )
}

export const SliderRangeDemo = () => {
  return (
    <Slider defaultValue={[10, 20]}>
      <SliderLabel>Label</SliderLabel>
      <SliderValueText />
      <SliderControl></SliderControl>
    </Slider>
  )
}

export const SliderMarkDemo = () => {
  return (
    <Slider defaultValue={[10]} className="w-[60%]">
      <SliderControl />
      <SliderMarkGroup>
        <SliderMark value={25} />
        <SliderMark value={50} />
        <SliderMark value={75} />
      </SliderMarkGroup>
    </Slider>
  )
}
