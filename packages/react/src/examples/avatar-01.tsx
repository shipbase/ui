import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Component() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/170850194"
        alt="@shipbase"
      />
      <AvatarFallback>SB</AvatarFallback>
    </Avatar>
  )
}
