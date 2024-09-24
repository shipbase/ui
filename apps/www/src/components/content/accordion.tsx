import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@ui/react/accordion"

interface AccordionProps extends React.ComponentProps<typeof Accordion> {
  [key: `trigger-${number}`]: string
  [key: `content-${number}`]: string
}

export default function (props: AccordionProps) {
  const items = Object.entries(props).filter(([key]) =>
    key.startsWith("trigger")
  )

  const rest = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !key.startsWith("trigger") && !key.startsWith("content")
    )
  )

  return (
    <Accordion {...rest} className="w-full">
      {items.map(([key], index) => {
        return (
          <AccordionItem key={key} value={key}>
            <AccordionItemTrigger>
              {props[`trigger-${index + 1}`]}
            </AccordionItemTrigger>
            <AccordionItemContent>
              {props[`content-${index + 1}`]}
            </AccordionItemContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
