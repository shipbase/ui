import {
  Progress,
  ProgressLabel,
  ProgressRange,
  ProgressTrack,
  ProgressValueText,
} from "@/components/ui/progress"

export default function Component() {
  return (
    <Progress value={null} className="*:not-first:mt-2">
      <ProgressLabel>Indeterminate Progress</ProgressLabel>
      <ProgressValueText />
      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
    </Progress>
  )
}
