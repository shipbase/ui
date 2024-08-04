<script setup lang="ts">
import { cn } from "@/lib/utils"
import { AvatarImage } from "@ark-ui/vue/avatar"
import type { HTMLAttributes } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <AvatarImage 
    v-bind="props"
    :class="cn('aspect-square h-full w-full', props.class)">
    <slot />
  </AvatarImage>
</template>
