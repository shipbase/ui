<script setup lang="ts">
import {
  Checkbox,
  CheckboxLabel,
  CheckboxTrigger,
} from "@/components/ui/checkbox"
</script>

<template>
  <Checkbox className="items-top flex space-x-2">
    <CheckboxTrigger />
    <div className="grid gap-1.5 leading-none">
      <CheckboxLabel className="font-medium text-sm leading-none">
        Accept terms and conditions
      </CheckboxLabel>
      <p className="text-muted-foreground text-sm">
        You agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </Checkbox>
</template>

