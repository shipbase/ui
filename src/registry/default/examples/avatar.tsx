import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Basic() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/iamdin.png" alt="@shipbase" />
      <AvatarFallback>zigjs</AvatarFallback>
    </Avatar>
  )
}
