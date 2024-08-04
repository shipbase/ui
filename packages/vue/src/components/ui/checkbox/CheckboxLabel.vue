<script setup lang="ts">
import { cn } from "@/lib/utils"
import { CheckboxLabel, type CheckboxLabelProps } from "@ark-ui/vue/checkbox"
import type { HTMLAttributes } from "vue"

const props = defineProps<
  CheckboxLabelProps & { class?: HTMLAttributes["class"] }
>()
</script>

<template>
  <CheckboxLabel
     v-bind="props"
    :class="cn('data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70', props.class)"
  >
    <slot />
  </CheckboxLabel>
</template>
