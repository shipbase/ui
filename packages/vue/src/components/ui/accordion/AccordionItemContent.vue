<script setup lang="ts">
import {
  AccordionItemContent,
  type AccordionItemContentProps,
} from "@ark-ui/vue/accordion"
import { reactiveOmit } from "@vueuse/core"
import type { HTMLAttributes } from "vue"

import { cn } from "@/lib/utils"

const props = defineProps<
  AccordionItemContentProps & { class?: HTMLAttributes["class"] }
>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AccordionItemContent
    v-bind="delegatedProps"
    class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn('pt-0 pb-4', props.class)">
      <slot />
    </div>
  </AccordionItemContent>
</template>
