import type { Meta } from "@storybook/react"
import * as React from "react"

import {
  Progress,
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  ProgressLabel,
  ProgressRange,
  ProgressTrack,
  ProgressValueText,
} from "@/components/ui/progress"

export default {
  title: "Components/Progress",
} satisfies Meta

export const Linear = () => {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={progress}>
      <ProgressLabel>Label</ProgressLabel>
      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
      <ProgressValueText />
    </Progress>
  )
}

export const Circular = () => {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={progress} className="[--size:6rem] [--thickness:10px]">
      <ProgressLabel>Label</ProgressLabel>
      <ProgressCircle>
        <ProgressCircleTrack />
        <ProgressCircleRange />
      </ProgressCircle>
      <ProgressValueText />
    </Progress>
  )
}
