"use client"

import { createListCollection } from "@ark-ui/react"
import { useId } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
} from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description: "Perfect for small businesses.",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features with more storage.",
    price: "$20",
  },
] as const

const months = createListCollection({
  items: [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ],
})

const currentYear = new Date().getFullYear()
const years = createListCollection({
  items: Array.from({ length: 10 }, (_, i) => ({
    value: `${currentYear + i}`,
    label: `${currentYear + i}`,
  })),
})

export function CardsPaymentMethod() {
  const nameId = useId()
  const cardNumberId = useId()
  const cvcId = useId()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>Add a new payment method to your account.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Label htmlFor={nameId}>Name</Label>
          <Input id={nameId} placeholder="First Last" />
        </div>
        <fieldset className="flex flex-col gap-3">
          <RadioGroupLabel className="font-medium text-sm">Plan</RadioGroupLabel>
          <p className="text-muted-foreground text-sm">
            Select the plan that best fits your needs.
          </p>
          <RadioGroup defaultValue="starter" className="grid gap-3">
            {plans.map((plan) => (
              <RadioGroupItem key={plan.id} value={plan.id} className="flex items-center space-x-2">
                <RadioGroupItemControl />
                <div className="grid gap-1.5 leading-none">
                  <RadioGroupItemText className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {plan.name}
                  </RadioGroupItemText>
                  <p className="text-muted-foreground text-xs">{plan.description}</p>
                </div>
              </RadioGroupItem>
            ))}
          </RadioGroup>
        </fieldset>
        <fieldset className="flex flex-col gap-3">
          <legend className="font-medium text-sm">Payment Information</legend>
          <div className="grid gap-3">
            <div className="flex flex-col gap-3">
              <Label htmlFor={cardNumberId}>Card number</Label>
              <Input id={cardNumberId} placeholder="1234 1234 1234 1234" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-3">
                <Select collection={months}>
                  <SelectLabel>Expires</SelectLabel>
                  <SelectControl>
                    <SelectTrigger>
                      <SelectValueText placeholder="Month" />
                      <SelectIndicator />
                    </SelectTrigger>
                  </SelectControl>
                  <SelectContent>
                    {months.items.map((month) => (
                      <SelectItem key={month.value} item={month}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Select collection={years}>
                  <SelectLabel>Year</SelectLabel>
                  <SelectControl>
                    <SelectTrigger>
                      <SelectValueText placeholder="Year" />
                      <SelectIndicator />
                    </SelectTrigger>
                  </SelectControl>
                  <SelectContent>
                    {years.items.map((year) => (
                      <SelectItem key={year.value} item={year}>
                        {year.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor={cvcId}>CVC</Label>
                <Input id={cvcId} placeholder="CVC" />
              </div>
            </div>
          </div>
        </fieldset>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}
