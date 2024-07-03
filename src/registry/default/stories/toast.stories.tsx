import type { Meta } from "@storybook/react"

import { Button } from "../ui/button"
import {
  createToaster,
  Toast,
  ToastActionTrigger,
  ToastCloseTrigger,
  ToastDescription,
  Toaster,
  ToastTitle,
} from "../ui/toast"

export default {
  title: "Components/Toast",
} satisfies Meta

export const Basic = () => {
  const toaster = createToaster({
    placement: "bottom-end",
    overlap: true,
    gap: 8,
    duration: 9999999,
  })

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toaster.create({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Add to calendar
      </Button>
      <Toaster toaster={toaster}>
        {({ id, title, description }) => (
          <Toast key={id} className="min-w-max">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            <ToastActionTrigger>Undo</ToastActionTrigger>
            <ToastCloseTrigger />
          </Toast>
        )}
      </Toaster>
    </div>
  )
}

export const Simple = () => {
  const toaster = createToaster({
    placement: "bottom-start",
    overlap: true,
    gap: 8,
    duration: 9999999,
  })

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toaster.create({
            description: "Your message has been sent.",
          })
        }}
      >
        Show Toast
      </Button>
      <Toaster toaster={toaster}>
        {({ id, title, description }) => (
          <Toast key={id} className="min-w-max">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            <ToastCloseTrigger />
          </Toast>
        )}
      </Toaster>
    </div>
  )
}

export const WithTitle = () => {
  const toaster = createToaster({
    placement: "bottom-start",
    overlap: true,
    gap: 16,
    duration: 9999999,
  })

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toaster.create({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Toast
      </Button>
      <Toaster toaster={toaster}>
        {({ id, title, description }) => (
          <Toast key={id} className="min-w-max">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            <ToastCloseTrigger />
          </Toast>
        )}
      </Toaster>
    </div>
  )
}

export const WithAction = () => {
  const toaster = createToaster({
    placement: "bottom-start",
    overlap: true,
    gap: 16,
    duration: 9999999,
  })

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toaster.create({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Toast
      </Button>
      <Toaster toaster={toaster}>
        {({ id, title, description }) => (
          <Toast key={id} className="min-w-max">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            <ToastActionTrigger>Try again</ToastActionTrigger>
            <ToastCloseTrigger />
          </Toast>
        )}
      </Toaster>
    </div>
  )
}

export const Destructive = () => {
  const toaster = createToaster({
    placement: "bottom-start",
    overlap: true,
    gap: 16,
    duration: 9999999,
  })

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toaster.create({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Toast
      </Button>
      <Toaster toaster={toaster}>
        {({ id, title, description }) => (
          <Toast key={id} className="min-w-max" variant="destructive">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            <ToastActionTrigger>Try again</ToastActionTrigger>
            <ToastCloseTrigger />
          </Toast>
        )}
      </Toaster>
    </div>
  )
}
