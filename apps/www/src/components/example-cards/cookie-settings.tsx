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
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from "@ui/react/switch"

export function CardsCookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Switch id="necessary" defaultChecked className="flex items-center justify-between gap-4">
          <SwitchLabel className="flex flex-col items-start">
            <span>Strictly Necessary</span>
            <span className="font-normal text-muted-foreground leading-snug">
              These cookies are essential in order to use the website and use its features.
            </span>
          </SwitchLabel>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
        </Switch>
        <Switch id="functional" className="flex items-center justify-between gap-4">
          <SwitchLabel className="flex flex-col items-start">
            <span>Functional Cookies</span>
            <span className="font-normal text-muted-foreground leading-snug">
              These cookies allow the website to provide personalized functionality.
            </span>
          </SwitchLabel>
          <SwitchControl>
            <SwitchThumb />
          </SwitchControl>
        </Switch>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
