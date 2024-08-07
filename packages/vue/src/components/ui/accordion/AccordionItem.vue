<script setup lang="ts">
import { cn } from "@/lib/utils"
import { type HTMLAttributes, computed } from "vue"

import { AccordionItem, type AccordionItemProps } from "@ark-ui/vue/accordion"

const props = defineProps<
  AccordionItemProps & { class?: HTMLAttributes["class"] }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionItem
    v-bind="delegatedProps"
    :class="cn('border-b', props.class)"
  >
    <slot />
  </AccordionItem>
</template>
