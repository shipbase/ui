<script setup lang="ts">
import {
  Checkbox,
  CheckboxLabel,
  CheckboxTrigger,
} from "@/components/ui/checkbox"
</script>

<template>
  <Checkbox class="flex items-center space-x-2">
    <CheckboxTrigger />
    <CheckboxLabel class="font-medium text-sm leading-none">
      Accept terms and conditions
    </CheckboxLabel>
  </Checkbox>
</template>

