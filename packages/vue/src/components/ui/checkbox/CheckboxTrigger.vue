<script setup lang="ts">
import { cn } from "@/lib/utils"
import {
  CheckboxControl,
  type CheckboxControlProps,
  CheckboxHiddenInput,
  CheckboxIndicator,
} from "@ark-ui/vue/checkbox"
import { Check } from "lucide-vue-next"
import type { HTMLAttributes } from "vue"

const props = defineProps<
  CheckboxControlProps & { class?: HTMLAttributes["class"] }
>()
</script>

<template>
  <CheckboxControl
    v-bind="props"
    :class="cn('peer flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-primary text-current ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[disabled]:opacity-50', props.class)"
  >
    <CheckboxIndicator>
      <Check className="h-4 w-4" />
    </CheckboxIndicator>
  </CheckboxControl>
  <CheckboxHiddenInput />
</template>
