<script setup lang="ts">
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-vue-next"
import type { HTMLAttributes } from "vue"

import {
  AccordionItemIndicator,
  AccordionItemTrigger,
  type AccordionItemTriggerProps,
} from "@ark-ui/vue/accordion"

const props = defineProps<
  AccordionItemTriggerProps & { class?: HTMLAttributes["class"] }
>()
</script>

<template>
  <AccordionItemTrigger
    v-bind="props"
    :class="cn('flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:underline data[-state=open]:rotate-180', props.class)"
  >
    <slot />
    <AccordionItemIndicator>
      <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionItemIndicator>
  </AccordionItemTrigger>
</template>
