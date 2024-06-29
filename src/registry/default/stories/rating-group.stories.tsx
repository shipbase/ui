import type { Meta } from "@storybook/react"

import {
  RatingGroup,
  RatingGroupControl,
  RatingGroupItem,
  RatingGroupLabel,
} from "../ui/rating-group"

export default {
  title: "Components/Rating Group",
} satisfies Meta

export const Basic = () => {
  return (
    <RatingGroup count={5} defaultValue={3}>
      <RatingGroupLabel>Label</RatingGroupLabel>
      <RatingGroupControl>
        <RatingGroupItem key={0} index={0} />
        <RatingGroupItem key={1} index={1} />
        <RatingGroupItem key={2} index={2} />
        <RatingGroupItem key={3} index={3} />
        <RatingGroupItem key={4} index={5} />
      </RatingGroupControl>
    </RatingGroup>
  )
}
