import type { Meta } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default {
  title: 'Components/Avatar',
} satisfies Meta

export function Basic() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/54212428?s=80&v=4"
        alt="zigjs"
      />
      <AvatarFallback>zigjs</AvatarFallback>
    </Avatar>
  )
}
