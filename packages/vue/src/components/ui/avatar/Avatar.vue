<script setup lang="ts">
import { cn } from "@/lib/utils"
import { AvatarRoot } from "@ark-ui/vue/avatar"
import type { HTMLAttributes } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <AvatarRoot 
    v-bind="props"
    :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', props.class)">
    <slot />
  </AvatarRoot>
</template>
