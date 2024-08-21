import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/accordion"

export default function AccordionUsage() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionItemTrigger>Accordion Item 1</AccordionItemTrigger>
        <AccordionItemContent>Item Content 1</AccordionItemContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionItemTrigger>Accordion Item 2</AccordionItemTrigger>
        <AccordionItemContent>Item Content 2</AccordionItemContent>
      </AccordionItem>
    </Accordion>
  )
}
