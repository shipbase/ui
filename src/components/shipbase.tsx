import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/iu/accordion"

export function AccordionDemo() {
  const items = ["React", "Solid", "Svelte", "Vue"] as const

  return (
    <Accordion multiple defaultValue={["React"]} className="w-full">
      {items.map((item) => (
        <AccordionItem key={item} value={item} disabled={item === "Svelte"}>
          <AccordionItemTrigger>{item}</AccordionItemTrigger>
          <AccordionItemContent>
            Pudding donut gummies chupa chups oat cake marzipan biscuit tart.
            Dessert macaroon ice cream bonbon jelly. Jelly topping tiramisu
            halvah lollipop.
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
