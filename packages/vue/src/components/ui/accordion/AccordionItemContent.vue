<script setup lang="ts">
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "vue"

import {
  AccordionItemContent,
  type AccordionItemContentProps,
} from "@ark-ui/vue/accordion"

const props = defineProps<
  AccordionItemContentProps & { class?: HTMLAttributes["class"] }
>()
</script>

<template>
  <AccordionItemContent
    v-bind="props"
    :class="cn('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', props.class)"
  >
    <div :class="cn('pt-0 pb-4', props.class)">
      <slot />
    </div>
  </AccordionItemContent>
</template>
