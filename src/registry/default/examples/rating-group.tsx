import {
  RatingGroup,
  RatingGroupControl,
  RatingGroupItem,
  RatingGroupLabel,
} from "../ui/rating-group"

export default function RatingGroupDemo() {
  return (
    <RatingGroup count={5} defaultValue={3}>
      <RatingGroupLabel>Label</RatingGroupLabel>
      <RatingGroupControl>
        <RatingGroupItem index={1} />
        <RatingGroupItem index={2} />
        <RatingGroupItem index={3} />
        <RatingGroupItem index={4} />
        <RatingGroupItem index={5} />
      </RatingGroupControl>
    </RatingGroup>
  )
}
