<script setup lang="ts">
import { cn } from "@/lib/utils"
import { AvatarFallback } from "@ark-ui/vue/avatar"
import type { HTMLAttributes } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <AvatarFallback 
    v-bind="props"
    :class="cn('flex h-full w-full items-center justify-center rounded-full bg-muted', props.class)">
    <slot />
  </AvatarFallback>
</template>
