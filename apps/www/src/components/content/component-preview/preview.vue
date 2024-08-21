<script setup lang="ts">
import Examples from "@ui/vue/examples"
import { Suspense, defineAsyncComponent } from "vue"

const props = defineProps<{
  name: string
}>()

const Component = defineAsyncComponent(Examples[props.name])
</script>

<template>
  <Suspense>
    <Component />
  </Suspense>
</template>


