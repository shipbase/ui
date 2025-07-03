import * as React from "react"

import {
  Progress,
  ProgressLabel,
  ProgressRange,
  ProgressTrack,
} from "@/components/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={progress} orientation="vertical" className="h-[500px]">
      <ProgressLabel>Vertical Progress</ProgressLabel>
      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
    </Progress>
  )
}
