import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Basic() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/iamdin.png" alt="@shipbase" />
      <AvatarFallback>shipbase</AvatarFallback>
    </Avatar>
  )
}
