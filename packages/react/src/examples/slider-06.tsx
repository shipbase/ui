import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider"
import { cn } from "@/lib/utils"

export default function Component() {
  return (
    <Slider defaultValue={[25]}>
      <SliderLabel>Slider with reference labels</SliderLabel>
      <SliderControl className="mt-4">
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0} />
      </SliderControl>
      <SliderMarkerGroup>
        <SliderMarker value={0}>5G</SliderMarker>
        <SliderMarker value={50}>20G</SliderMarker>
        <SliderMarker value={100}>35G</SliderMarker>
      </SliderMarkerGroup>
    </Slider>
  )
}
