import * as React from 'react'
import { Accordion as AccordionPrimitive } from '@ark-ui/react/accordion'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root
const AccordionContext = AccordionPrimitive.Context
const AccordionItemContext = AccordionPrimitive.ItemContext

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionItemTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.ItemTrigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.ItemTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemTrigger
    ref={ref}
    className={cn(
      'flex flex-1 items-center w-full justify-between py-4 font-medium transition-all hover:underline data[-state=open]:rotate-180',
      className,
    )}
    {...props}
  >
    {children}
    <AccordionPrimitive.ItemIndicator>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.ItemIndicator>
  </AccordionPrimitive.ItemTrigger>
))

const AccordionItemContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.ItemContent>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.ItemContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.ItemContent
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.ItemContent>
))

export {
  Accordion,
  AccordionContext,
  AccordionItem,
  AccordionItemContext,
  AccordionItemTrigger,
  AccordionItemContent,
}
