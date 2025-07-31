"use client"

import { Button } from "@ui/react/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/react/card"
import { Checkbox, CheckboxControl, CheckboxLabel } from "@ui/react/checkbox"
import { Input } from "@ui/react/input"
import { Label } from "@ui/react/label"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
} from "@ui/react/radio-group"
import { Textarea } from "@ui/react/textarea"

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
    description: "More features and storage.",
    price: "$20",
  },
] as const

export function CardsForms() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Upgrade your subscription</CardTitle>
        <CardDescription>
          You are currently on the free plan. Upgrade to unlock more features.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-[1fr_80px_60px]">
          <div className="grid gap-2 md:col-span-1">
            <Label htmlFor="card">Card number</Label>
            <Input id="card" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="expiry">Expiry</Label>
            <Input id="expiry" placeholder="MM/YY" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="123" />
          </div>
        </div>
        <fieldset className="space-y-4">
          <RadioGroup defaultValue="starter" className="space-y-2">
            <RadioGroupLabel className="font-medium text-sm">
              Choose your plan
            </RadioGroupLabel>
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="flex items-center space-x-2 rounded-lg border border-border p-4 data-[state=checked]:border-ring data-[state=checked]:bg-accent"
              >
                <RadioGroupItem value={plan.id}>
                  <RadioGroupItemControl />
                  <RadioGroupItemText className="flex-1">
                    <Label className="flex items-center justify-between font-medium">
                      <div>
                        <div>{plan.name}</div>
                        <div className="font-normal text-muted-foreground text-sm">
                          {plan.description}
                        </div>
                      </div>
                      <div className="font-semibold text-sm">{plan.price}</div>
                    </Label>
                  </RadioGroupItemText>
                </RadioGroupItem>
              </div>
            ))}
          </RadioGroup>
        </fieldset>
        <div className="grid gap-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            placeholder="Any additional notes about your upgrade..."
          />
        </div>
        <div className="space-y-2">
          <Checkbox className="flex items-center space-x-2">
            <CheckboxControl id="terms" />
            <CheckboxLabel className="text-sm">
              I agree to the terms and conditions
            </CheckboxLabel>
          </Checkbox>
          <Checkbox className="flex items-center space-x-2">
            <CheckboxControl id="newsletter" defaultChecked />
            <CheckboxLabel className="text-sm">
              Subscribe to our newsletter for updates
            </CheckboxLabel>
          </Checkbox>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Upgrade</Button>
      </CardFooter>
    </Card>
  )
}
