import * as React from "react"

import {
  Progress,
  ProgressLabel,
  ProgressRange,
  ProgressTrack,
} from "@/components/ui/progress"

export default function Component() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={progress} className="w-full *:not-first:mt-2">
      <ProgressLabel>Simple Progress</ProgressLabel>
      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
    </Progress>
  )
}
