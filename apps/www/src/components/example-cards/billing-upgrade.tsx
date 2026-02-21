"use client"

import { createListCollection } from "@ark-ui/react"
import { useId } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@ui/react/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/react/card"
import { Input } from "@ui/react/input"
import { Label } from "@ui/react/label"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
} from "@ui/react/radio-group"
import {
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
} from "@ui/react/select"

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description: "Perfect for small businesses.",
    price: "$10",
    billing: "per month",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features with more storage.",
    price: "$20",
    billing: "per month",
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    description: "Full-scale solution for large teams.",
    price: "$50",
    billing: "per month",
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

interface CardsBillingUpgradeProps {
  className?: string
}

export function CardsBillingUpgrade({ className }: CardsBillingUpgradeProps) {
  const nameId = useId()
  const cardNumberId = useId()
  const cvcId = useId()

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle>Upgrade Subscription</CardTitle>
        <CardDescription>
          Choose a plan and add payment method to upgrade your subscription.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <fieldset className="flex flex-col gap-3">
          <RadioGroup defaultValue="starter" className="grid gap-3">
            <RadioGroupLabel className="font-medium text-sm">Choose Your Plan</RadioGroupLabel>
            <p className="text-muted-foreground text-sm">
              Select the plan that best fits your needs.
            </p>
            {plans.map((plan) => (
              <RadioGroupItem
                key={plan.id}
                value={plan.id}
                className="flex items-center justify-between space-x-2 rounded-lg border p-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItemControl />
                  <div className="grid gap-1.5 leading-none">
                    <RadioGroupItemText className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {plan.name}
                    </RadioGroupItemText>
                    <p className="text-muted-foreground text-xs">{plan.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-sm">{plan.price}</div>
                  <div className="text-muted-foreground text-xs">{plan.billing}</div>
                </div>
              </RadioGroupItem>
            ))}
          </RadioGroup>
        </fieldset>

        <div className="flex flex-col gap-3">
          <Label htmlFor={nameId}>Cardholder Name</Label>
          <Input id={nameId} placeholder="First Last" />
        </div>

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
        <Button className="w-full">Upgrade & Subscribe</Button>
      </CardFooter>
    </Card>
  )
}
