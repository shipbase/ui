<script setup lang="ts">
import { cn } from "@/lib/utils"
import { type PolymorphicProps, ark } from "@ark-ui/vue/factory"
import type { HTMLAttributes } from "vue"
import { type ButtonVariants, type buttonVariants, parts } from "."

interface Props extends PolymorphicProps {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
</script>

<template>
  <ark.button
    v-bind="{ ...parts.root.attrs, ...props }"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  />
</template>
