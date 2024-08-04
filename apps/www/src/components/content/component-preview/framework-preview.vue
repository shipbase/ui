<script setup lang="ts">
import { $framework } from "@/atoms/framework"
import { useStore } from "@nanostores/vue"

const framework = useStore($framework)
</script>

<template>
  <slot v-if="framework === 'react'" name="react" />
  <slot v-if="framework === 'vue'" name="vue" />
</template>