import { Button } from "../ui/button"
import {
  Toast,
  ToastActionTrigger,
  ToastCloseTrigger,
  ToastDescription,
  ToastTitle,
  Toaster,
  createToaster,
} from "../ui/toast"

export default function ToastDemo() {
  const toaster = createToaster({
    placement: "bottom-end",
    overlap: true,
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
