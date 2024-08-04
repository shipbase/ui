<script setup lang="ts">
import { cn } from "@/lib/utils"
import { ark } from "@ark-ui/vue/factory"
import type { HTMLAttributes } from "vue"
import { type ButtonVariants, buttonVariants } from "."

interface Props {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
  asChild?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <ark.button
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </ark.button>
</template>
