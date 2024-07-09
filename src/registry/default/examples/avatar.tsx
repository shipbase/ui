import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Basic() {
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
