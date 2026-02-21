"use client"

import * as React from "react"
import { useId } from "react"

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
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@ui/react/select"
import { Textarea } from "@ui/react/textarea"

const areaOptions = createListCollection({
  items: [
    { value: "team", label: "Team" },
    { value: "billing", label: "Billing" },
    { value: "account", label: "Account" },
    { value: "deployments", label: "Deployments" },
    { value: "support", label: "Support" },
  ],
})

const securityLevelOptions = createListCollection({
  items: [
    { value: "1", label: "Severity 1 (Highest)" },
    { value: "2", label: "Severity 2" },
    { value: "3", label: "Severity 3" },
    { value: "4", label: "Severity 4 (Lowest)" },
  ],
})

export function CardsReportIssue() {
  const [selectedArea, setSelectedArea] = React.useState(["billing"])
  const [selectedSecurityLevel, setSelectedSecurityLevel] = React.useState(["2"])
  const subjectId = useId()
  const descriptionId = useId()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>What area are you having problems with?</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Select
              collection={areaOptions}
              value={selectedArea}
              onValueChange={(details) => setSelectedArea(details.value)}
              positioning={{ sameWidth: true }}
            >
              <SelectLabel>Area</SelectLabel>
              <SelectControl>
                <SelectTrigger>
                  <SelectValueText placeholder="Select" />
                  <SelectIndicator />
                </SelectTrigger>
              </SelectControl>
              <SelectContent>
                <SelectList>
                  {areaOptions.items.map((item) => (
                    <SelectItem key={item.value} item={item}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectList>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Select
              collection={securityLevelOptions}
              value={selectedSecurityLevel}
              onValueChange={(details) => setSelectedSecurityLevel(details.value)}
              positioning={{ sameWidth: true }}
            >
              <SelectLabel>Security Level</SelectLabel>
              <SelectControl>
                <SelectTrigger className="w-[160px]">
                  <SelectValueText placeholder="Select level" />
                  <SelectIndicator />
                </SelectTrigger>
              </SelectControl>
              <SelectContent>
                <SelectList>
                  {securityLevelOptions.items.map((item) => (
                    <SelectItem key={item.value} item={item}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectList>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor={subjectId}>Subject</Label>
          <Input id={subjectId} placeholder="I need help with..." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={descriptionId}>Description</Label>
          <Textarea
            id={descriptionId}
            placeholder="Please include all information relevant to your issue."
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
