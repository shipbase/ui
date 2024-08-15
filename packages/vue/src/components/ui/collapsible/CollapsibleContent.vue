<script setup lang="ts">
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "vue"

import {
  CollapsibleContent,
  type CollapsibleContentProps,
} from "@ark-ui/vue/collapsible"

const props = defineProps<
  CollapsibleContentProps & { class?: HTMLAttributes["class"] }
>()
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    :class="cn('overflow-hidden transition-all data-[state=closed]:animate-collapse-out data-[state=open]:animate-collapse-in', props.class)"
  />
</template>
