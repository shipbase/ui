import * as React from "react"

import {
  Progress,
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  ProgressLabel,
  ProgressValueText,
} from "@/components/ui/progress"

export default function ProgressCircularDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={progress} className="*:not-first:mt-2">
      <ProgressLabel>Circular Progress</ProgressLabel>
      <ProgressCircle className="[--size:200px]">
        <ProgressCircleTrack />
        <ProgressCircleRange />
      </ProgressCircle>
      <ProgressValueText />
    </Progress>
  )
}
