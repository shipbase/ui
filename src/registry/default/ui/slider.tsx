import { Slider as SliderPrimitive } from "@ark-ui/react/slider"

const Slider = SliderPrimitive.Root

const SliderLabel = SliderPrimitive.Label

const SliderValueText = SliderPrimitive.ValueText

const SliderControl = () => (
  <SliderPrimitive.Control className="flex items-center">
    <SliderPrimitive.Track className="h-2 w-full grow rounded-full bg-secondary">
      <SliderPrimitive.Range className="h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Context>
      {(context) =>
        context.value.map((_, index) => (
          <SliderPrimitive.Thumb
            index={index}
            className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <SliderPrimitive.HiddenInput />
          </SliderPrimitive.Thumb>
        ))
      }
    </SliderPrimitive.Context>
  </SliderPrimitive.Control>
)

export { Slider, SliderControl, SliderLabel, SliderValueText }
