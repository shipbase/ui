"use client"

import { ArrowUpIcon, CheckIcon, PlusIcon } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@ui/react/avatar"
import { Button } from "@ui/react/button"
import { Card, CardContent, CardFooter, CardHeader } from "@ui/react/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ui/react/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@ui/react/dialog"
import { Input } from "@ui/react/input"
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui/react/tooltip"

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
    value: "olivia",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
    value: "isabella",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
    value: "emma",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
    value: "jackson",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
    value: "william",
  },
] as const

type User = (typeof users)[number]

export function CardsChat() {
  const [open, setOpen] = React.useState(false)
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([])

  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ])
  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center gap-4">
            <Avatar className="border">
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <p className="font-medium text-sm leading-none">Sofia Davis</p>
              <p className="text-muted-foreground text-xs">m@example.com</p>
            </div>
          </div>
          <Tooltip
            positioning={{ placement: "top" }}
            openDelay={0}
            closeDelay={0}
          >
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="ml-auto size-8 rounded-full"
                onClick={() => setOpen(true)}
              >
                <PlusIcon />
                <span className="sr-only">New message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">
              New message
            </TooltipContent>
          </Tooltip>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (inputLength === 0) return
              setMessages([
                ...messages,
                {
                  role: "user",
                  content: input,
                },
              ])
              setInput("")
            }}
            className="relative w-full"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1 pr-10"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              type="submit"
              size="icon"
              className="-translate-y-1/2 absolute top-1/2 right-2 size-6 rounded-full"
              disabled={inputLength === 0}
            >
              <ArrowUpIcon className="size-3.5" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
      <Dialog open={open} onOpenChange={(details) => setOpen(details.open)}>
        <DialogContent className="gap-0 p-0 outline-none">
          <DialogHeader className="px-4 pt-5 pb-4">
            <DialogTitle>New message</DialogTitle>
            <DialogDescription>
              Invite a user to this thread. This will create a new group
              message.
            </DialogDescription>
          </DialogHeader>
          <Command className="overflow-hidden rounded-t-none border-t bg-transparent">
            <CommandInput placeholder="Search user..." />
            <CommandList>
              <CommandEmpty>No users found.</CommandEmpty>
              <CommandGroup>
                {users.map((user) => (
                  <CommandItem
                    key={user.email}
                    data-active={selectedUsers.includes(user)}
                    className="data-[active=true]:opacity-50"
                    onSelect={() => {
                      if (selectedUsers.includes(user)) {
                        return setSelectedUsers(
                          selectedUsers.filter(
                            (selectedUser) => selectedUser !== user
                          )
                        )
                      }

                      return setSelectedUsers(
                        [...users].filter((u) =>
                          [...selectedUsers, user].includes(u)
                        )
                      )
                    }}
                  >
                    <Avatar className="border">
                      <AvatarImage src={user.avatar} alt="Image" />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="font-medium text-sm leading-none">
                        {user.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {user.email}
                      </p>
                    </div>
                    {selectedUsers.includes(user) ? (
                      <CheckIcon className="ml-auto flex size-4 text-primary" />
                    ) : null}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
            {selectedUsers.length > 0 ? (
              <div className="-space-x-2 flex overflow-hidden">
                {selectedUsers.map((user) => (
                  <Avatar key={user.email} className="inline-block border">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">
                Select users to add to this thread.
              </p>
            )}
            <Button
              disabled={selectedUsers.length < 2}
              size="sm"
              onClick={() => {
                setOpen(false)
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
