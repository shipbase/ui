import type { Meta } from "@storybook/react"

import {
  Slider,
  SliderControl,
  SliderLabel,
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
