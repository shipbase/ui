<script setup lang="ts">
import {
  AccordionItemIndicator,
  AccordionItemTrigger,
  type AccordionItemTriggerProps,
} from "@ark-ui/vue/accordion"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import type { HTMLAttributes } from "vue"

import { cn } from "@/lib/utils"

const props = defineProps<AccordionItemTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AccordionItemTrigger
    v-bind="delegatedProps"
    :class="
      cn(
        'flex w-full flex-1 items-center justify-between gap-4 rounded-md py-4 text-left font-semibold text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot />
    <AccordionItemIndicator class="[&[data-state=open]>svg]:rotate-180">
      <ChevronDown
        class="pointer-events-none size-4 shrink-0 opacity-60 transition-transform duration-200"
      />
    </AccordionItemIndicator>
  </AccordionItemTrigger>
</template>
