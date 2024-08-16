import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@ui/react/accordion"

interface AccordionProps extends React.ComponentProps<typeof Accordion> {
  [key: `item-trigger-${number}`]: string
  [key: `item-content-${number}`]: string
}

export default function (props: AccordionProps) {
  const items = Object.entries(props).filter(([key]) =>
    key.startsWith("item-trigger")
  )

  const rest = Object.fromEntries(
    Object.entries(props).filter(([key]) => !key.startsWith("item-trigger"))
  )

  return (
    <Accordion {...rest} className="w-full">
      {items.map(([key], index) => {
        return (
          <AccordionItem key={key} value={key}>
            <AccordionItemTrigger>
              {props[`item-trigger-${index + 1}`]}
            </AccordionItemTrigger>
            <AccordionItemContent>
              {props[`item-content-${index + 1}`]}
            </AccordionItemContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
