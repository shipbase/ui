<script setup lang="ts">
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "vue"

import { AccordionItem, type AccordionItemProps } from "@ark-ui/vue/accordion"

const props = defineProps<
  AccordionItemProps & { class?: HTMLAttributes["class"] }
>()
</script>

<template>
  <AccordionItem
    v-bind="props"
    :class="cn('border-b', props.class)"
  >
    <slot />
  </AccordionItem>
</template>
