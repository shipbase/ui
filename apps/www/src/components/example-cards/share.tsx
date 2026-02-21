"use client"

import { CopyIcon } from "lucide-react"
import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@ui/react/avatar"
import { Button } from "@ui/react/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ui/react/card"
import { Input } from "@ui/react/input"
import { Label } from "@ui/react/label"
import {
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@ui/react/select"

const people = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
    permission: "edit",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
    permission: "view",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
    permission: "edit",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
    permission: "view",
  },
] as const

const permissionCollection = createListCollection({
  items: [
    { value: "view", label: "Can view" },
    { value: "edit", label: "Can edit" },
  ],
})

export function CardsShare() {
  const [permissions, setPermissions] = React.useState<Record<string, string>>(
    Object.fromEntries(people.map((person) => [person.email, person.permission])),
  )

  const handlePermissionChange = (email: string, permission: string[]) => {
    const newPermission = permission[0]
    if (newPermission) {
      setPermissions((prev) => ({ ...prev, [email]: newPermission }))
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share this document</CardTitle>
        <CardDescription>Anyone with the link can view this document.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Label htmlFor="link">Link</Label>
          <div className="flex gap-2">
            <Input id="link" defaultValue="http://example.com/link/to/document" readOnly />
            <Button variant="secondary" className="shrink-0">
              <CopyIcon className="size-4" />
              <span className="sr-only">Copy link</span>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">People with access</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {people.map((person) => (
            <div key={person.email} className="flex items-center gap-4">
              <Avatar className="size-8">
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback>{person.name[0]}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{person.name}</span>
                <span className="truncate text-muted-foreground text-xs">{person.email}</span>
              </div>
              <Select
                collection={permissionCollection}
                value={[permissions[person.email] || "view"]}
                onValueChange={(details) => handlePermissionChange(person.email, details.value)}
              >
                <SelectControl className="w-32">
                  <SelectTrigger>
                    <SelectValueText />
                    <SelectIndicator />
                  </SelectTrigger>
                </SelectControl>
                <SelectContent>
                  {permissionCollection.items.map((item) => (
                    <SelectItem key={item.value} item={item}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
