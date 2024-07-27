import * as React from "react"

export const Button = React.lazy(() => import("./button"))

export const Accordion = React.lazy(() => import("./accordion"))

export const Avatar = React.lazy(() => import("./avatar"))

export const Checkbox = React.lazy(() => import("./checkbox"))
export const CheckboxWithText = React.lazy(() => import("./checkbox-with-text"))
export const CheckboxDisabled = React.lazy(() => import("./checkbox-disabled"))

export const Collapsible = React.lazy(() => import("./collapsible"))

export const Combobox = React.lazy(() => import("./combobox"))

export const Dialog = React.lazy(() => import("./dialog"))
export const DialogCloseButton = React.lazy(
  () => import("./dialog-close-button")
)
export const Drawer = React.lazy(() => import("./drawer"))
export const DrawerDialog = React.lazy(() => import("./drawer-dialog"))

export const HoverCard = React.lazy(() => import("./hover-card"))

export const Input = React.lazy(() => import("./input"))
export const InputFile = React.lazy(() => import("./input-file"))
export const InputDisabled = React.lazy(() => import("./input-disabled"))
export const InputWithLabel = React.lazy(() => import("./input-with-label"))
export const InputWithButton = React.lazy(() => import("./input-with-button"))

export const Label = React.lazy(() => import("./label"))

export const Menu = React.lazy(() => import("./menu"))
export const MenuCheckboxes = React.lazy(() => import("./menu-checkboxes"))
export const MenuRadioGroup = React.lazy(() => import("./menu-radio-group"))
export const ContextMenu = React.lazy(() => import("./context-menu"))

export const NumberInput = React.lazy(() => import("./number-input"))

export const Pagination = React.lazy(() => import("./pagination"))

export const PinInput = React.lazy(() => import("./pin-input"))
export const PinInputPattern = React.lazy(() => import("./pin-input-pattern"))
export const PinInputWithSeparator = React.lazy(
  () => import("./pin-input-with-separator")
)
export const PinInputControlled = React.lazy(
  () => import("./pin-input-controlled")
)

export const Popover = React.lazy(() => import("./popover"))

export const Progress = React.lazy(() => import("./progress"))
export const ProgressWithLabelValue = React.lazy(
  () => import("./progress-with-label-value")
)
export const ProgressCircular = React.lazy(() => import("./progress-circular"))

export const RadioGroup = React.lazy(() => import("./radio-group"))

export const RatingGroup = React.lazy(() => import("./rating-group"))
