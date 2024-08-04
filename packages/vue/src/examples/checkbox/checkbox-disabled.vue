<script setup lang="ts">
import {
  Checkbox,
  CheckboxLabel,
  CheckboxTrigger,
} from "@/components/ui/checkbox"
</script>

<template>
 <Checkbox className="flex items-center space-x-2" disabled>
    <CheckboxTrigger />
    <CheckboxLabel className="font-medium text-sm leading-none">
      Accept terms and conditions
    </CheckboxLabel>
  </Checkbox>
</template>

