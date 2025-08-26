<script setup lang="ts">
import { useForwardProps } from "@ark-ui/vue"
import { AccordionItem, type AccordionItemProps } from "@ark-ui/vue/accordion"
import { reactiveOmit } from "@vueuse/core"
import type { HTMLAttributes } from "vue"

import { cn } from "@/lib/utils"

const props = defineProps<
  AccordionItemProps & { class?: HTMLAttributes["class"] }
>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItem
    v-bind="forwardedProps"
    :class="cn('border-b last:border-b-0', props.class)"
  >
    <slot />
  </AccordionItem>
</template>
